import React from 'react';
import { useEffects } from '@/context/EffectsContext';

interface CursorConfig {
  id: string;
  label: string;
  color: string;
  borderColor: string;
  bgTag: string;
  animationClass: string;
}

const GHOST_CURSORS: CursorConfig[] = [
  {
    id: 'c1',
    label: 'dev // sys.rs',
    color: '#FF453A',
    borderColor: 'border-[#FF453A]/40',
    bgTag: 'bg-[#FF453A]/10 text-[#FF453A]',
    animationClass: 'animate-ghost-cursor-1',
  },
  {
    id: 'c2',
    label: 'sync // dsa.ts',
    color: '#00F0FF',
    borderColor: 'border-[#00F0FF]/40',
    bgTag: 'bg-[#00F0FF]/10 text-[#00F0FF]',
    animationClass: 'animate-ghost-cursor-2',
  },
  {
    id: 'c3',
    label: 'peer // build.sh',
    color: '#F2F0EB',
    borderColor: 'border-white/30',
    bgTag: 'bg-white/10 text-[#F2F0EB]',
    animationClass: 'animate-ghost-cursor-3',
  },
  {
    id: 'c4',
    label: 'spec // 2026.v4',
    color: '#AAA6A3',
    borderColor: 'border-[#AAA6A3]/30',
    bgTag: 'bg-[#18181b] text-[#AAA6A3]',
    animationClass: 'animate-ghost-cursor-4',
  },
];

export default function GhostCursors() {
  const { effectsEnabled } = useEffects();

  if (!effectsEnabled) return null;

  return (
    <div
      className="hidden md:block absolute inset-0 pointer-events-none overflow-hidden z-[1]"
      aria-hidden="true"
    >
      {GHOST_CURSORS.map((cursor) => (
        <div
          key={cursor.id}
          className={`absolute opacity-40 transition-opacity duration-500 hover:opacity-75 ${cursor.animationClass}`}
        >
          {/* Subtle Ghost Cursor Arrow */}
          <div className="flex items-start gap-1.5 select-none pointer-events-none">
            <svg
              viewBox="0 0 16 16"
              className="w-3.5 h-3.5 flex-shrink-0 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
              fill="none"
              style={{ color: cursor.color }}
            >
              <path
                d="M1 1L6 14L8.5 8.5L14 6L1 1Z"
                fill="currentColor"
                fillOpacity="0.25"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
            </svg>
            <span
              className={`font-mono text-[9px] px-1.5 py-0.5 rounded border tracking-wider backdrop-blur-sm ${cursor.borderColor} ${cursor.bgTag}`}
            >
              {cursor.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

