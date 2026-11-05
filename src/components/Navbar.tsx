import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText } from 'lucide-react';
import { personalInfo, navLinks } from '@/data/portfolio';
import { useActiveSection } from '@/hooks/useAnimations';

const sectionIds = navLinks.map((link) => link.href.replace('#', ''));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleLinkClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setMobileOpen(false);
      const targetId = href.replace('#', '');
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    },
    [],
  );

  const navVariants = useMemo(
    () => ({
      hidden: { y: -100, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
      },
    }),
    [],
  );

  const mobileMenuVariants = useMemo(
    () => ({
      closed: {
        x: '100%',
        opacity: 0,
        transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
      },
      open: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
      },
    }),
    [],
  );

  const mobileLinkVariants = useMemo(
    () => ({
      closed: { x: 40, opacity: 0 },
      open: (i: number) => ({
        x: 0,
        opacity: 1,
        transition: { delay: 0.1 + i * 0.06, duration: 0.35, ease: [0.22, 1, 0.36, 1] },
      }),
    }),
    [],
  );

  return (
    <>
      <motion.header
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass-strong shadow-sm border-b border-[var(--color-border)]'
            : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          {/* Logo / Initials */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="group relative"
          >
            <motion.span
              className="font-display text-xl font-bold tracking-tight text-[var(--color-deep-navy)] transition-colors duration-200 group-hover:text-[var(--color-primary-blue)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {personalInfo.initials}
              <span className="text-[var(--color-primary-blue)]">.</span>
            </motion.span>
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '');
              const isActive = activeSection === id;

              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? 'text-[var(--color-primary-blue)]'
                        : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                    }`}
                  >
                    {link.label}

                    {/* Active indicator dot */}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-indicator"
                        className="absolute bottom-0 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-[var(--color-primary-blue)]"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right Side: Resume + Mobile Toggle */}
          <div className="flex items-center gap-3">
            {/* Resume Button (Desktop) */}
            <motion.a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full bg-[var(--color-primary-blue)] px-5 py-2 text-sm font-semibold text-white shadow-md shadow-blue-500/20 transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/30 md:inline-flex"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              <FileText className="h-4 w-4" />
              Resume
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setMobileOpen((prev) => !prev)}
              className="relative z-50 flex h-10 w-10 items-center justify-center rounded-xl text-[var(--color-text-primary)] transition-colors hover:bg-[var(--color-secondary-bg)] md:hidden"
              whileTap={{ scale: 0.9 }}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Slide-in Panel */}
            <motion.div
              key="mobile-menu"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 z-40 flex h-full w-4/5 max-w-sm flex-col glass-strong border-l border-[var(--color-border)] md:hidden"
            >
              <div className="flex flex-1 flex-col justify-center px-8">
                <ul className="space-y-2">
                  {navLinks.map((link, i) => {
                    const id = link.href.replace('#', '');
                    const isActive = activeSection === id;

                    return (
                      <motion.li
                        key={link.label}
                        variants={mobileLinkVariants}
                        initial="closed"
                        animate="open"
                        custom={i}
                      >
                        <a
                          href={link.href}
                          onClick={(e) => handleLinkClick(e, link.href)}
                          className={`flex items-center gap-3 rounded-xl px-4 py-3.5 text-lg font-medium transition-all duration-200 ${
                            isActive
                              ? 'bg-[var(--color-secondary-bg)] text-[var(--color-primary-blue)]'
                              : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-secondary-bg)] hover:text-[var(--color-text-primary)]'
                          }`}
                        >
                          {isActive && (
                            <motion.span
                              layoutId="mobile-active-dot"
                              className="h-2 w-2 rounded-full bg-[var(--color-primary-blue)]"
                              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                            />
                          )}
                          {link.label}
                        </a>
                      </motion.li>
                    );
                  })}
                </ul>

                {/* Resume Button (Mobile) */}
                <motion.div
                  variants={mobileLinkVariants}
                  initial="closed"
                  animate="open"
                  custom={navLinks.length}
                  className="mt-8 px-4"
                >
                  <a
                    href={personalInfo.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-primary-blue)] px-5 py-3 text-base font-semibold text-white shadow-md shadow-blue-500/20 transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/30"
                  >
                    <FileText className="h-4 w-4" />
                    Resume
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
