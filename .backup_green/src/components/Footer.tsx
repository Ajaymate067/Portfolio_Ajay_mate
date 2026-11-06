import React from 'react';
import { personalInfo } from '@/data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1B291F] bg-[#070B09] py-8 px-5 sm:px-8">
      <div className="mx-auto max-w-[1200px] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#98A79B]">
        <div className="flex items-center gap-2">
          <span className="font-bold text-[#E8F0EA]">{personalInfo.name}</span>
          <span className="text-[#647568]">·</span>
          <span>© {currentYear}</span>
        </div>

        <div className="flex items-center gap-2 text-[11px] text-[#647568]">
          <span className="inline-block w-2 h-2 rounded-full bg-[#68F795] animate-pulse" />
          <span>SYSTEM STATUS: OPERATIONAL</span>
          <span>·</span>
          <span>REACT 19 + TAILWIND V4</span>
        </div>
      </div>
    </footer>
  );
}
