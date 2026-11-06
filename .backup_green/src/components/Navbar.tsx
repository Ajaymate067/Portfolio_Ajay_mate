import React, { useState, useEffect, useCallback, useId } from 'react';
import { Menu, X, Sparkles, Activity } from 'lucide-react';
import { personalInfo, navLinks } from '@/data/portfolio';
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
      const sections = ['about', 'skills', 'projects', 'contact'];
      const scrollPos = window.scrollY + 180;
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
          ? 'bg-[#070B09]/90 backdrop-blur-md border-b border-[#1B291F] shadow-lg shadow-black/40'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav
        className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-4 sm:px-8"
        aria-label="Main Navigation"
      >
        {/* Logo / Monogram: AM. */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home')}
          className="group flex items-center gap-2 text-decoration-none focus-visible:ring-2 focus-visible:ring-[#68F795] rounded-md px-1"
          aria-label="Ajay Mate Homepage"
        >
          <span className="font-mono text-xl font-bold tracking-wider text-[#E8F0EA] transition-colors group-hover:text-[#68F795]">
            AM
            <span className="text-[#68F795] animate-pulse">.</span>
          </span>
          <span className="hidden sm:inline-block font-mono text-[11px] px-2 py-0.5 rounded border border-[#1B291F] text-[#98A79B] bg-[#101813]">
            v2.6
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
                className={`relative px-3.5 py-2 rounded-md transition-all duration-200 ${
                  isActive
                    ? 'text-[#68F795] bg-[#101813] border border-[#1B291F]'
                    : 'text-[#98A79B] hover:text-[#E8F0EA] hover:bg-[#101813]/60'
                }`}
              >
                <span className="text-[#68F795]/70 mr-1.5">{link.id}.</span>
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Right Side: Effects Toggle + Terminal Status */}
        <div className="flex items-center gap-3">
          {/* Pause / Enable Effects Control */}
          <button
            onClick={toggleEffects}
            type="button"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded border border-[#1B291F] bg-[#101813] text-[#98A79B] hover:text-[#68F795] hover:border-[#68F795]/40 transition-colors font-mono text-[11px]"
            title={effectsEnabled ? 'Pause animated background' : 'Enable background effects'}
            aria-pressed={effectsEnabled}
          >
            <Activity
              className={`w-3.5 h-3.5 ${
                effectsEnabled ? 'text-[#68F795] animate-pulse' : 'text-[#647568]'
              }`}
            />
            <span className="hidden sm:inline">
              {effectsEnabled ? 'FX: ON' : 'FX: PAUSED'}
            </span>
          </button>

          {/* Contact Button (Desktop) */}
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded bg-[#101813] border border-[#1B291F] text-xs font-mono font-medium text-[#E8F0EA] hover:border-[#68F795] hover:text-[#68F795] transition-all"
          >
            <span>[Let&apos;s Connect]</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="flex md:hidden items-center justify-center h-9 w-9 rounded border border-[#1B291F] bg-[#101813] text-[#E8F0EA] hover:border-[#68F795] transition-colors"
            aria-expanded={mobileOpen}
            aria-controls={mobileMenuId}
            aria-label={mobileOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          >
            {mobileOpen ? <X className="h-4 w-4 text-[#68F795]" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Accessible Mobile Drawer */}
      {mobileOpen && (
        <div
          id={mobileMenuId}
          className="fixed inset-0 top-[61px] bg-[#070B09]/95 backdrop-blur-xl z-40 md:hidden flex flex-col px-6 py-8 border-t border-[#1B291F]"
        >
          <div className="font-mono text-[11px] text-[#68F795] uppercase tracking-wider mb-4">
            // Navigation Menu
          </div>
          <div className="flex flex-col gap-2 font-mono">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="flex items-center justify-between py-3 px-4 rounded-lg bg-[#101813] border border-[#1B291F] text-base text-[#E8F0EA] hover:border-[#68F795] hover:text-[#68F795] transition-all"
              >
                <span>{link.label}</span>
                <span className="text-[#68F795] text-xs font-mono">{link.id} →</span>
              </a>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-[#1B291F] flex items-center justify-between font-mono text-xs text-[#98A79B]">
            <span>Background Matrix FX:</span>
            <button
              onClick={toggleEffects}
              className="px-3 py-1.5 rounded border border-[#1B291F] bg-[#101813] text-[#68F795]"
            >
              {effectsEnabled ? 'PAUSE EFFECTS' : 'RESUME EFFECTS'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
