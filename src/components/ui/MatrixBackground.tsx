import React, { useEffect, useRef } from 'react';
import { useEffects } from '@/context/EffectsContext';

export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { effectsEnabled } = useEffects();

  useEffect(() => {
    if (!effectsEnabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let isTabVisible = !document.hidden;

    // Characters: clean mixture of binary, hex, and technical characters
    const chars = '010101<>/{}=+*#ABCDEF';
    const isMobile = window.innerWidth < 768;
    const fontSize = isMobile ? 14 : 15;
    const columnWidth = isMobile ? 24 : 20;

    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    let columns = Math.floor(width / columnWidth);
    // Track drop positions for each column
    let drops: number[] = Array.from({ length: columns }, () => Math.floor(Math.random() * -50));

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
      columns = Math.floor(width / columnWidth);
      drops = Array.from({ length: columns }, () => Math.floor(Math.random() * -50));
    };

    const handleVisibilityChange = () => {
      isTabVisible = !document.hidden;
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    let lastDrawTime = 0;
    const frameInterval = isMobile ? 45 : 35; // Throttle to conserve CPU & battery

    const draw = (currentTime: number) => {
      animationFrameId = requestAnimationFrame(draw);

      if (!isTabVisible) return;
      if (currentTime - lastDrawTime < frameInterval) return;
      lastDrawTime = currentTime;

      // Faint semi-transparent trail over canvas
      ctx.fillStyle = 'rgba(7, 11, 9, 0.12)';
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px "JetBrains Mono", monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Random character
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * columnWidth;
        const y = drops[i] * fontSize;

        // Draw faint terminal green characters
        ctx.fillStyle = 'rgba(104, 247, 149, 0.28)';
        ctx.fillText(char, x, y);

        // Reset drop to top with randomized timing once off-screen
        if (y > height && Math.random() > 0.985) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [effectsEnabled]);

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Dynamic Matrix Canvas (Active only when effects enabled) */}
      {effectsEnabled ? (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full opacity-40"
        />
      ) : null}

      {/* Subtle Terminal Grid Overlay */}
      <div className="bg-terminal-grid absolute inset-0 opacity-40" />

      {/* Soft Radial Ambient Green Glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 25%, rgba(104, 247, 149, 0.05) 0%, transparent 60%)',
        }}
      />

      {/* Dark Vignette Overlay to ensure 100% text contrast */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(7, 11, 9, 0.4) 0%, rgba(7, 11, 9, 0.85) 70%, #070B09 100%)',
        }}
      />
    </div>
  );
}

