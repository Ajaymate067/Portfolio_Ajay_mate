import React, { useState, useEffect } from 'react';
import { Terminal as TerminalIcon, ArrowRight, Mail, Sparkles } from 'lucide-react';
import { personalInfo, socialLinks } from '@/data/portfolio';
import MatrixBackground from '@/components/ui/MatrixBackground';
import { useEffects } from '@/context/EffectsContext';

export default function Hero() {
  const { effectsEnabled } = useEffects();
  const [typedLines, setTypedLines] = useState<number>(0);

  // Decorative terminal lines
  const terminalLines = [
    { type: 'cmd', text: '$ whoami' },
    { type: 'out', text: 'Ajay Mate' },
    { type: 'cmd', text: '$ role' },
    { type: 'out', text: 'CSE Student · Aspiring Software Engineer' },
    { type: 'cmd', text: '$ focus' },
    { type: 'out', text: 'Learning. Building. Improving.' },
    { type: 'cmd', text: '$ current_status' },
    { type: 'out', text: 'Exploring algorithms & full-stack web architecture' },
  ];

  useEffect(() => {
    // If effects are paused or user prefers reduced motion, display all lines immediately
    if (!effectsEnabled) {
      setTypedLines(terminalLines.length);
      return;
    }

    setTypedLines(0);
    const interval = setInterval(() => {
      setTypedLines((prev) => {
        if (prev < terminalLines.length) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 280);

    return () => clearInterval(interval);
  }, [effectsEnabled]);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#070B09] pt-24 pb-16 lg:py-32"
    >
      {/* Hacker-Inspired Matrix Canvas & Grid Overlay */}
      <MatrixBackground />

      {/* Main Container */}
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* ================= LEFT COLUMN ================= */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#101813] border border-[#1B291F] mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#68F795] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#68F795]" />
              </span>
              <span className="font-mono text-xs font-semibold text-[#68F795] tracking-widest uppercase">
                HELLO WORLD, I’M
              </span>
            </div>

            {/* Name */}
            <h1
              className="font-display font-bold text-[#E8F0EA] tracking-tight leading-[1.08] mb-4"
              style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.25rem)' }}
            >
              Ajay Mate
            </h1>

            {/* Role Monospace Accent */}
            <div className="font-mono text-base sm:text-lg text-[#68F795] font-medium mb-5 flex items-center gap-2">
              <span className="text-[#98A79B]">//</span>
              <span>CSE Student · Aspiring Software Engineer</span>
            </div>

            {/* Introduction paragraph */}
            <p className="text-base sm:text-lg text-[#98A79B] leading-relaxed max-w-xl mb-8">
              Undergraduate Computer Science student dedicated to understanding how systems operate
              from first principles. Passionate about algorithms, modern web development, and
              building purposeful software through continuous hands-on practice.
            </p>

            {/* Call-to-action buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a href="#projects" className="btn-primary w-full sm:w-auto">
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a href="#contact" className="btn-secondary w-full sm:w-auto">
                <Mail className="w-4 h-4 text-[#68F795]" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Verified Social Quick-links */}
            <div className="mt-8 pt-6 border-t border-[#1B291F] w-full flex items-center gap-4 text-xs font-mono text-[#98A79B]">
              <span className="text-[#647568]">Network:</span>
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 hover:text-[#68F795] transition-colors py-1 px-1.5 rounded focus-visible:ring-1 focus-visible:ring-[#68F795]"
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{link.name}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* ================= RIGHT COLUMN (TERMINAL PANEL) ================= */}
          <div className="lg:col-span-5 w-full">
            <div className="command-panel overflow-hidden shadow-2xl border border-[#1B291F] bg-[#101813]/95 backdrop-blur-sm">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0c140f] border-b border-[#1B291F]">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                  <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                  <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#98A79B]">
                  <TerminalIcon className="w-3.5 h-3.5 text-[#68F795]" />
                  <span>ajay@portfolio</span>
                </div>
                <span className="font-mono text-[10px] text-[#647568]">zsh</span>
              </div>

              {/* Terminal Content Body */}
              <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed select-text space-y-2 min-h-[220px]">
                <div className="text-[#647568] pb-1 border-b border-[#1B291F]/60 text-[11px]">
                  # Decorative terminal session · read-only
                </div>

                {terminalLines.slice(0, typedLines).map((line, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    {line.type === 'cmd' ? (
                      <span className="text-[#68F795] font-semibold">{line.text}</span>
                    ) : (
                      <span className="text-[#E8F0EA] pl-3 border-l-2 border-[#1B291F]">
                        {line.text}
                      </span>
                    )}
                  </div>
                ))}

                {/* Blinking Prompt Line */}
                <div className="flex items-center gap-2 pt-1 text-[#68F795]">
                  <span>$</span>
                  <span className="inline-block w-2 h-4 bg-[#68F795] cursor-blink" />
                </div>
              </div>

              {/* Terminal Footer Info Bar */}
              <div className="px-4 py-2 bg-[#0c140f] border-t border-[#1B291F] flex items-center justify-between font-mono text-[10px] text-[#647568]">
                <span>SYS: READY</span>
                <span>STATUS: 200 OK</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
