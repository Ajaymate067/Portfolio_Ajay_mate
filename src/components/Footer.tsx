import React from 'react';
import { personalInfo } from '@/data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#292629] bg-[#080808] py-8 px-5 sm:px-8 relative z-10">
      <div className="mx-auto max-w-[1280px] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#AAA6A3]">
        <div className="flex items-center gap-2">
          <span
            className="font-bold text-base text-[#F2F0EB] tracking-wider"
            style={{ fontFamily: "'Anton', 'Barlow Condensed', sans-serif" }}
          >
            {personalInfo.name.toUpperCase()}
            <span className="text-[#FF453A]">.</span>
          </span>
          <span className="text-[#666362]">/</span>
          <span>© {currentYear}</span>
        </div>

        <div className="flex items-center gap-3 text-[11px] text-[#666362]">
          <span className="inline-block w-1.5 h-1.5 bg-[#FF453A]" />
          <span>FUTURISTIC EDITORIAL ARCHITECTURE</span>
          <span className="text-[#292629]">|</span>
          <span>BUILT WITH REACT 19 &amp; TAILWIND V4</span>
        </div>
      </div>
    </footer>
  );
}
