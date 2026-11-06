import React, { useState, useEffect, useCallback, useId } from 'react';
import { Menu, X, ArrowUpRight, Activity } from 'lucide-react';
import { navLinks, personalInfo } from '@/data/portfolio';
import { useEffects } from '@/context/EffectsContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { effectsEnabled, toggleEffects } = useEffects();
  const mobileMenuId = useId();

  // Scroll listener for translucent background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Track active section for clean indicator
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const scrollPos = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll and handle Escape key for mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
      }
    };

    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileOpen]);

  const handleLinkClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const targetId = href.replace('#', '');
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080808]/95 backdrop-blur-md border-b border-[#292629] shadow-2xl'
          : 'bg-[#080808]/80 backdrop-blur-sm border-b border-[#292629]/40'
      }`}
    >
      <nav
        className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-4 sm:px-8"
        aria-label="Main Navigation"
      >
        {/* Logo / Monogram: AM. */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home')}
          className="group flex items-center gap-2 text-decoration-none focus-visible:ring-2 focus-visible:ring-[#FF453A] rounded px-1"
          aria-label="Ajay Mate Portfolio Home"
        >
          <span
            className="font-extrabold text-2xl tracking-wider text-[#F2F0EB] transition-colors group-hover:text-[#FF453A]"
            style={{ fontFamily: "'Anton', 'Barlow Condensed', sans-serif" }}
          >
            AM<span className="text-[#FF453A]">.</span>
          </span>
          <span className="hidden sm:inline-block font-mono text-[10px] tracking-widest text-[#AAA6A3] border-l border-[#292629] pl-2.5">
            PORTFOLIO // 2026
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 font-mono text-xs">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`relative px-4 py-2 transition-all duration-200 tracking-wider uppercase flex items-center gap-1.5 ${
                  isActive
                    ? 'text-[#F2F0EB] font-semibold'
                    : 'text-[#AAA6A3] hover:text-[#F2F0EB]'
                }`}
              >
                {isActive && (
                  <span className="w-1.5 h-1.5 bg-[#FF453A] inline-block" />
                )}
                <span>{link.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#FF453A]" />
                )}
              </a>
            );
          })}
        </div>

        {/* Right Action: FX Toggle + Let's Talk CTA */}
        <div className="flex items-center gap-3">
          {/* Effects On / Off Controller */}
          <button
            onClick={toggleEffects}
            type="button"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded border border-[#292629] bg-[#111113] text-[#AAA6A3] hover:text-[#FF453A] hover:border-[#FF453A]/40 transition-colors font-mono text-[11px] focus-visible:ring-2 focus-visible:ring-[#FF453A]"
            title={effectsEnabled ? 'Pause background effects & continuous motion' : 'Enable background motion effects'}
            aria-pressed={effectsEnabled}
            aria-label={effectsEnabled ? 'Disable background effects' : 'Enable background effects'}
          >
            <Activity
              className={`w-3.5 h-3.5 ${
                effectsEnabled ? 'text-[#FF453A] animate-pulse' : 'text-[#666362]'
              }`}
            />
            <span className="hidden sm:inline font-mono">
              {effectsEnabled ? 'FX: ON' : 'FX: OFF'}
            </span>
          </button>

          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-semibold tracking-wider uppercase bg-[#111113] border border-[#292629] text-[#F2F0EB] hover:border-[#FF453A] hover:text-[#FF453A] transition-all"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="flex md:hidden items-center justify-center h-10 w-10 border border-[#292629] bg-[#111113] text-[#F2F0EB] hover:border-[#FF453A] transition-colors"
            aria-expanded={mobileOpen}
            aria-controls={mobileMenuId}
            aria-label={mobileOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          >
            {mobileOpen ? <X className="h-5 w-5 text-[#FF453A]" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Accessible Mobile Drawer */}
      {mobileOpen && (
        <div
          id={mobileMenuId}
          className="fixed inset-0 top-[65px] bg-[#080808]/98 backdrop-blur-xl z-40 md:hidden flex flex-col px-6 py-8 border-t border-[#292629]"
        >
          <div className="font-mono text-xs text-[#FF453A] uppercase tracking-widest mb-6 flex items-center justify-between">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#FF453A]" />
              <span>NAVIGATION INDEX</span>
            </span>
            <button
              onClick={toggleEffects}
              type="button"
              className="px-2.5 py-1 rounded border border-[#292629] bg-[#111113] text-xs font-mono text-[#FF453A]"
            >
              {effectsEnabled ? 'FX: ON' : 'FX: OFF'}
            </button>
          </div>

          <div className="flex flex-col gap-3 font-mono">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="flex items-center justify-between py-3.5 px-4 bg-[#111113] border border-[#292629] text-base text-[#F2F0EB] hover:border-[#FF453A] hover:text-[#FF453A] transition-all tracking-wider uppercase"
              >
                <span>{link.label}</span>
                <span className="text-[#FF453A] text-xs font-mono">{link.id} →</span>
              </a>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-[#292629] text-xs font-mono text-[#AAA6A3] space-y-2">
            <p className="text-[#F2F0EB] font-semibold">{personalInfo.name}</p>
            <p className="text-[#AAA6A3]">{personalInfo.role}</p>
          </div>
        </div>
      )}
    </header>
  );
}
