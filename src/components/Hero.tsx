import React from 'react';
import { ArrowRight, Mail, ArrowUpRight } from 'lucide-react';
import { personalInfo, socialLinks } from '@/data/portfolio';
import FloatingTitle3D from '@/components/ui/FloatingTitle3D';
import WordReveal from '@/components/ui/WordReveal';

export default function Hero() {
  const heroNavigationStrip = [
    { id: '01', label: 'ABOUT', href: '#about' },
    { id: '02', label: 'PROJECTS', href: '#projects' },
    { id: '03', label: 'SKILLS', href: '#skills' },
    { id: '04', label: 'CONTACT', href: '#contact' },
  ];

  const quickIndex = [
    {
      num: '01',
      title: 'ABOUT',
      desc: 'Computer science foundation, systems mindset, and engineering principles.',
      href: '#about',
    },
    {
      num: '02',
      title: 'SELECTED WORK',
      desc: 'Exploration in data structures, algorithms, and responsive web applications.',
      href: '#projects',
    },
    {
      num: '03',
      title: 'CURRENTLY LEARNING',
      desc: 'Deep diving into backend architecture, SQL systems, and clean interfaces.',
      href: '#skills',
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-[#080808] pt-28 pb-8 lg:pt-36 lg:pb-12"
    >
      {/* ============================================================
          HUGE FLOATING 3D "PORTFOLIO" TITLE
          Layered depth, perspective floating animation, subtle tilt
          ============================================================ */}
      <FloatingTitle3D />

      {/* ============================================================
          MAIN THREE-COLUMN EDITORIAL CONTAINER
          ============================================================ */}
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-5 sm:px-8 my-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* ================= LEFT COLUMN ================= */}
          <div className="lg:col-span-5 flex flex-col justify-between items-start text-left">
            <div>
              {/* Intro Label */}
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 bg-[#FF453A]" />
                <span className="font-mono text-xs uppercase tracking-widest text-[#AAA6A3]">
                  Hello, I’m
                </span>
              </div>

              {/* Solid Red Highlight Box with Large White Condensed Typography */}
              <div className="inline-block bg-[#FF453A] px-3.5 py-1.5 sm:px-4 sm:py-2 mb-4 shadow-lg shadow-[#FF453A]/20">
                <h1
                  className="font-anton text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] text-white tracking-tight uppercase leading-none"
                  style={{ fontFamily: "'Anton', 'Barlow Condensed', sans-serif" }}
                >
                  AJAY MATE.
                </h1>
              </div>

              {/* Subtitle / Role */}
              <div className="font-mono text-xs sm:text-sm text-[#F2F0EB] font-semibold tracking-wider uppercase mb-5">
                CSE STUDENT / ASPIRING SOFTWARE ENGINEER
              </div>

              {/* Word-by-Word Scroll Reveal Introduction */}
              <WordReveal
                tag="p"
                text="Computer Science & Engineering undergraduate focused on core data structures, algorithmic reasoning, and building modern, reliable web applications. Committed to writing clean, purposeful code from first principles."
                className="text-sm sm:text-base text-[#AAA6A3] leading-relaxed max-w-lg mb-8"
              />

              {/* Two Rectangular Action Buttons with arrow movement */}
              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                <a href="#projects" className="btn-editorial-primary group w-full sm:w-auto">
                  <span>View Projects</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>

                <a href="#contact" className="btn-editorial-secondary group w-full sm:w-auto">
                  <Mail className="w-4 h-4 text-[#FF453A]" />
                  <span>Contact Me</span>
                </a>
              </div>
            </div>

            {/* Social quick links */}
            <div className="mt-8 pt-5 border-t border-[#292629] w-full flex items-center gap-4 text-xs font-mono text-[#AAA6A3]">
              <span className="text-[#666362] uppercase tracking-wider text-[11px]">Channels:</span>
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 hover:text-[#FF453A] transition-colors py-1"
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{link.name}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* ================= CENTRE COLUMN (PROMINENT PORTRAIT PANEL) ================= */}
          <div className="lg:col-span-4 flex items-center justify-center">
            <div className="relative w-full max-w-[380px] aspect-[4/5] bg-gradient-to-b from-[#FF453A] to-[#C92A20] p-4 flex flex-col justify-between border border-[#FF453A]/80 shadow-2xl shadow-[#FF453A]/25">
              
              {/* Technical Corner Brackets */}
              <div className="corner-bracket corner-bracket-tl !border-white" />
              <div className="corner-bracket corner-bracket-tr !border-white" />
              <div className="corner-bracket corner-bracket-bl !border-white" />
              <div className="corner-bracket corner-bracket-br !border-white" />

              {/* Top Technical Metadata */}
              <div className="flex items-center justify-between font-mono text-[10px] text-white/90 tracking-widest uppercase border-b border-white/20 pb-2">
                <span>// ID. 2026_AM</span>
                <span>STATUS: ACTIVE</span>
              </div>

              {/* Central Typographic Monogram Portrait Fallback */}
              <div className="flex-1 flex flex-col items-center justify-center text-center my-4 relative">
                <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none select-none">
                  <span className="font-anton text-[12rem] text-black">AM</span>
                </div>
                
                <div
                  className="font-anton text-7xl sm:text-8xl md:text-9xl text-white tracking-tighter leading-none drop-shadow-md select-none"
                  style={{ fontFamily: "'Anton', 'Barlow Condensed', sans-serif" }}
                >
                  AM
                </div>
                
                <div className="mt-2 text-xs font-mono font-bold tracking-widest text-black bg-white px-2 py-0.5 uppercase">
                  ENGINEERING PORTFOLIO
                </div>
              </div>

              {/* Bottom Caption Bar */}
              <div className="border-t border-white/20 pt-2 flex items-center justify-between font-mono text-[11px] text-white">
                <span className="font-bold tracking-wider">AJAY MATE / PORTFOLIO</span>
                <span className="text-white/80">01</span>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN (NUMBERED SECTION LINKS) ================= */}
          <div className="md:col-span-2 lg:col-span-3 flex flex-col justify-center">
            <div className="space-y-0 border-t border-[#292629]">
              {quickIndex.map((item) => (
                <a
                  key={item.num}
                  href={item.href}
                  className="group block py-5 border-b border-[#292629] transition-all hover:bg-[#111113] px-2 -mx-2"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-xs font-bold text-[#FF453A] tracking-wider">
                      {item.num} / {item.title}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#AAA6A3] group-hover:text-[#FF453A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <p className="text-xs text-[#AAA6A3] leading-relaxed pr-4">
                    {item.desc}
                  </p>
                </a>
              ))}
            </div>

            {/* Availability Indicator */}
            <div className="mt-6 p-3.5 bg-[#111113] border border-[#292629] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#FF453A] animate-pulse" />
              <div className="text-xs font-mono text-[#AAA6A3]">
                <span className="text-[#F2F0EB] font-medium">OPEN FOR COLLABORATION</span>
                <div className="text-[10px] text-[#666362]">Internships & Technical Roles</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ============================================================
          NARROW STRIP BELOW HERO
          Working links to About, Projects, Skills, Contact with small
          section numbers and restrained red indicator.
          ============================================================ */}
      <div className="relative z-10 w-full border-y border-[#292629] bg-[#0c0c0e]/90 mt-12">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 py-3.5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 font-mono text-xs">
              {heroNavigationStrip.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="group flex items-center gap-2 text-[#AAA6A3] hover:text-[#F2F0EB] transition-colors"
                >
                  <span className="text-[#FF453A] font-semibold">{item.id}</span>
                  <span className="tracking-wider">{item.label}</span>
                </a>
              ))}
            </div>

            <div className="hidden sm:flex items-center gap-2 font-mono text-[11px] text-[#666362]">
              <span className="w-1.5 h-1.5 bg-[#FF453A]" />
              <span>SYSTEMS // FRONTEND // ALGORITHMS</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
