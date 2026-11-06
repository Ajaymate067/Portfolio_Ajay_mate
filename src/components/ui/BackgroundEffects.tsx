import React from 'react';
import HackerCanvas from '@/components/ui/HackerCanvas';
import GhostCursors from '@/components/ui/GhostCursors';

export default function BackgroundEffects() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* 1. Continuous Hacker Canvas (Hex strings, code streams, scan line) */}
      <HackerCanvas />

      {/* 2. Base Charcoal Technical Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none" />

      {/* 3. Subtle Red & Cyan Radial Atmosphere */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[650px] bg-radial-red-glow opacity-75 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(255,69,58,0.05)_0%,transparent_70%)] pointer-events-none" />

      {/* 4. Collaborative Ghost Cursors */}
      <GhostCursors />

      {/* 5. Dark Contrast Overlay (Ensures foreground text is always crisp & readable) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/75 via-[#080808]/85 to-[#080808]/90 pointer-events-none" />

      {/* 6. Thin Technical Crosshairs & Registration Marks */}
      <div className="hidden lg:block absolute top-24 left-8 text-[10px] font-mono text-[#AAA6A3]/30 tracking-widest select-none">
        + SYS.GRID // 32.091 // LAT.N
      </div>
      <div className="hidden lg:block absolute top-24 right-8 text-[10px] font-mono text-[#AAA6A3]/30 tracking-widest select-none">
        EDITION // 2026.01 +
      </div>

      {/* Thin Vertical Architectural Rules */}
      <div className="hidden xl:block absolute top-0 bottom-0 left-[5%] w-[1px] bg-[#292629]/30" />
      <div className="hidden xl:block absolute top-0 bottom-0 right-[5%] w-[1px] bg-[#292629]/30" />
    </div>
  );
}
