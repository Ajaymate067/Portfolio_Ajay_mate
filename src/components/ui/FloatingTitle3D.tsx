import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useEffects } from '@/context/EffectsContext';

export default function FloatingTitle3D() {
  const { effectsEnabled } = useEffects();
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!effectsEnabled) {
      setTilt({ rotateX: 0, rotateY: 0 });
      return;
    }

    // Only apply subtle pointer tilt on devices with hover & fine pointer
    const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!hasFinePointer) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      // Very slight tilt: max +/- 4 degrees
      targetY = ((e.clientX - centerX) / centerX) * 4;
      targetX = -((e.clientY - centerY) / centerY) * 3;
    };

    const updateTilt = () => {
      // Smooth lerp
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      setTilt({
        rotateX: parseFloat(currentX.toFixed(2)),
        rotateY: parseFloat(currentY.toFixed(2)),
      });

      rafRef.current = requestAnimationFrame(updateTilt);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    rafRef.current = requestAnimationFrame(updateTilt);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [effectsEnabled]);

  return (
    <div
      className="absolute top-10 sm:top-12 left-0 right-0 w-full overflow-hidden pointer-events-none select-none z-0 opacity-45"
      style={{ perspective: '1100px' }}
      aria-hidden="true"
    >
      <motion.div
        className="w-full flex items-center justify-center relative"
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
        }}
        animate={
          effectsEnabled
            ? {
                y: [0, -12, 4, 0],
                rotateZ: [0, 0.6, -0.6, 0],
              }
            : { y: 0, rotateZ: 0 }
        }
        transition={
          effectsEnabled
            ? {
                duration: 10,
                repeat: Infinity,
                ease: 'easeInOut',
              }
            : { duration: 0 }
        }
      >
        {/* Layer 1: Ambient Red Glow & Shadow Depth */}
        <div
          className="absolute whitespace-nowrap font-anton font-black text-center tracking-tighter text-transparent select-none blur-[6px] translate-y-3 translate-x-1"
          style={{
            fontSize: 'clamp(5rem, 18vw, 17rem)',
            lineHeight: 0.85,
            letterSpacing: '0.04em',
            WebkitTextStroke: '2px rgba(255, 69, 58, 0.25)',
          }}
        >
          PORTFOLIO
        </div>

        {/* Layer 2: Extruded Dimensional Layer */}
        <div
          className="absolute whitespace-nowrap font-anton font-black text-center tracking-tighter text-transparent select-none translate-y-1.5 translate-x-1 opacity-70"
          style={{
            fontSize: 'clamp(5rem, 18vw, 17rem)',
            lineHeight: 0.85,
            letterSpacing: '0.04em',
            WebkitTextStroke: '1.5px rgba(255, 69, 58, 0.28)',
            textShadow: '0 0 35px rgba(255, 69, 58, 0.2)',
          }}
        >
          PORTFOLIO
        </div>

        {/* Layer 3: Main Front Outlined Typography */}
        <div
          className="relative whitespace-nowrap font-anton font-black text-center tracking-tighter text-stroke-red select-none drop-shadow-[0_4px_18px_rgba(255,69,58,0.3)]"
          style={{
            fontSize: 'clamp(5rem, 18vw, 17rem)',
            lineHeight: 0.85,
            letterSpacing: '0.04em',
          }}
        >
          PORTFOLIO

          {/* Restrained Moving Reflection / Shimmer Sheen */}
          {effectsEnabled && (
            <span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent bg-clip-text text-transparent pointer-events-none animate-shimmer-sweep"
              aria-hidden="true"
            >
              PORTFOLIO
            </span>
          )}
        </div>
      </motion.div>
    </div>
  );
}

