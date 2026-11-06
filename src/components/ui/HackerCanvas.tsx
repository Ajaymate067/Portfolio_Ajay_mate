import React, { useEffect, useRef } from 'react';
import { useEffects } from '@/context/EffectsContext';

const CODE_TOKENS = [
  '0x7FFF', '0x1A40', '0x9E21', '0x00FF', '0xB800', '0xC034',
  'MOV', 'XOR', 'PUSH', 'POP', 'JMP', 'CMP', 'RET', 'LEA',
  '10110', '01001', '11010', '00101', '11100',
  'SYS.OK', 'ACK_1', '0x4F', '0x8B', 'PORT', 'SYNC',
  '0xDEAD', '0xBEEF', '0x2026', 'AM_01', 'STACK',
];

interface StreamColumn {
  x: number;
  y: number;
  speed: number;
  chars: string[];
  charIndex: number;
  colorType: 'dim' | 'red' | 'cyan';
  fontSize: number;
  updateInterval: number;
  lastUpdate: number;
}

export default function HackerCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { effectsEnabled } = useEffects();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = !document.hidden;
    let lastFrameTime = performance.now();
    let scanLineY = 0;

    // Sizing with capped DPR
    let width = 0;
    let height = 0;
    let columns: StreamColumn[] = [];

    const initColumns = () => {
      const isMobile = width < 768;
      const columnSpacing = isMobile ? 55 : 38;
      const colCount = Math.floor(width / columnSpacing);
      columns = [];

      for (let i = 0; i < colCount; i++) {
        // Vary the color type: mostly faint grey, some red, occasional cyan
        const rand = Math.random();
        const colorType: 'dim' | 'red' | 'cyan' =
          rand < 0.65 ? 'dim' : rand < 0.90 ? 'red' : 'cyan';

        const streamLength = Math.floor(Math.random() * 8) + 6;
        const chars: string[] = [];
        for (let j = 0; j < streamLength; j++) {
          chars.push(CODE_TOKENS[Math.floor(Math.random() * CODE_TOKENS.length)]);
        }

        columns.push({
          x: i * columnSpacing + (isMobile ? 10 : 16),
          y: Math.random() * height - height * 0.5,
          speed: 0.35 + Math.random() * 0.55, // Slow, cinematic drift
          chars,
          charIndex: 0,
          colorType,
          fontSize: isMobile ? 10 : 11,
          updateInterval: 120 + Math.random() * 200,
          lastUpdate: performance.now(),
        });
      }
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      initColumns();
    };

    resize();
    window.addEventListener('resize', resize, { passive: true });

    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
      if (isVisible) {
        lastFrameTime = performance.now();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Main render loop
    const render = (now: number) => {
      if (!effectsEnabled || !isVisible) {
        // Just clear or hold
        return;
      }

      animationFrameId = requestAnimationFrame(render);

      // Throttle to ~30-36 FPS for minimal CPU/battery impact
      const delta = now - lastFrameTime;
      if (delta < 28) return;
      lastFrameTime = now;

      ctx.clearRect(0, 0, width, height);

      // 1. Subtle horizontal scanning line
      scanLineY += 0.8;
      if (scanLineY > height + 80) scanLineY = -40;

      const scanGrad = ctx.createLinearGradient(0, scanLineY - 30, 0, scanLineY + 30);
      scanGrad.addColorStop(0, 'rgba(255, 69, 58, 0)');
      scanGrad.addColorStop(0.5, 'rgba(255, 69, 58, 0.045)');
      scanGrad.addColorStop(1, 'rgba(255, 69, 58, 0)');
      ctx.fillStyle = scanGrad;
      ctx.fillRect(0, scanLineY - 30, width, 60);

      // 2. Render code streams
      ctx.font = '10px "JetBrains Mono", monospace';
      ctx.textBaseline = 'top';

      for (let i = 0; i < columns.length; i++) {
        const col = columns[i];
        col.y += col.speed;

        // Reset column if it moves off-screen
        const totalHeight = col.chars.length * (col.fontSize + 6);
        if (col.y > height + 40) {
          col.y = -totalHeight - Math.random() * 120;
          col.speed = 0.35 + Math.random() * 0.55;
        }

        // Periodically mutate a random character token
        if (now - col.lastUpdate > col.updateInterval) {
          const mutateIdx = Math.floor(Math.random() * col.chars.length);
          col.chars[mutateIdx] = CODE_TOKENS[Math.floor(Math.random() * CODE_TOKENS.length)];
          col.lastUpdate = now;
        }

        // Draw each token in the stream with fading opacity
        for (let j = 0; j < col.chars.length; j++) {
          const charY = col.y + j * (col.fontSize + 6);
          if (charY < -20 || charY > height + 20) continue;

          const progress = j / col.chars.length; // 0 at top, 1 at head
          const isHead = j === col.chars.length - 1;

          if (col.colorType === 'red') {
            ctx.fillStyle = isHead
              ? 'rgba(255, 69, 58, 0.35)'
              : `rgba(255, 69, 58, ${0.06 + progress * 0.16})`;
          } else if (col.colorType === 'cyan') {
            ctx.fillStyle = isHead
              ? 'rgba(0, 240, 255, 0.35)'
              : `rgba(0, 240, 255, ${0.04 + progress * 0.14})`;
          } else {
            ctx.fillStyle = isHead
              ? 'rgba(242, 240, 235, 0.25)'
              : `rgba(242, 240, 235, ${0.02 + progress * 0.08})`;
          }

          ctx.fillText(col.chars[j], col.x, charY);
        }
      }
    };

    if (effectsEnabled) {
      animationFrameId = requestAnimationFrame(render);
    } else {
      ctx.clearRect(0, 0, width, height);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [effectsEnabled]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}

