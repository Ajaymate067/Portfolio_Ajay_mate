import { motion, type Variants } from 'framer-motion';
import { ChevronDown, Download, ExternalLink } from 'lucide-react';
import { personalInfo, socialLinks } from '@/data/portfolio';
import { useMousePosition } from '@/hooks/useAnimations';

// ---- Animation config ----
const ease = [0.22, 1, 0.36, 1] as const;

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease },
  },
};

// ---- Code editor lines ----
const codeLines = [
  { text: 'const developer = {', indent: 0, color: 'text-primary-blue' },
  { text: 'name:', indent: 1, color: 'text-accent-blue', value: `"${personalInfo.name}"`, valueColor: 'text-emerald-500' },
  { text: 'passion:', indent: 1, color: 'text-accent-blue', value: '"Building the future"', valueColor: 'text-emerald-500' },
  { text: 'stack:', indent: 1, color: 'text-accent-blue', value: '["React", "Python", "AI/ML"]', valueColor: 'text-amber-500' },
  { text: 'learning:', indent: 1, color: 'text-accent-blue', value: 'true', valueColor: 'text-violet-500' },
  { text: 'coffee:', indent: 1, color: 'text-accent-blue', value: 'Infinity', valueColor: 'text-rose-400' },
  { text: '};', indent: 0, color: 'text-primary-blue' },
];

const codeContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.8 },
  },
};

const codeLineVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease },
  },
};

// ---- Floating pills data ----
const floatingPills = [
  { label: '⚡ React', className: 'animate-float -top-4 -right-4 md:top-4 md:right-[-2rem]' },
  { label: '🐍 Python', className: 'animate-float-slow -bottom-2 -left-4 md:bottom-8 md:left-[-2rem]' },
  { label: '🤖 AI/ML', className: 'animate-float-delayed -top-2 -left-4 md:top-[-1rem] md:left-4' },
  { label: '🚀 Builder', className: 'animate-float bottom-[-1rem] right-4 md:bottom-[-1.5rem] md:right-8' },
];

export default function Hero() {
  const mouse = useMousePosition();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-primary-bg"
    >
      {/* ---- Background decorative orbs ---- */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-primary-blue/[0.06] blur-3xl" />
        <div className="absolute top-1/3 right-[-10%] h-[400px] w-[400px] rounded-full bg-accent-blue/[0.08] blur-3xl" />
        <div className="absolute bottom-[-5%] left-1/4 h-[360px] w-[360px] rounded-full bg-primary-blue/[0.05] blur-3xl" />
      </div>

      {/* ---- Subtle grid ---- */}
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden />

      {/* ---- Content ---- */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-center lg:gap-12 xl:gap-20">
          {/* ========== LEFT SIDE ========== */}
          <motion.div
            className="flex w-full flex-col lg:w-1/2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Availability badge */}
            <motion.div variants={fadeUp} className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-4 py-1.5 text-xs font-medium tracking-wide text-text-secondary backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                OPEN TO LEARNING &amp; COLLABORATION
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              variants={fadeUp}
              className="font-display text-5xl leading-[1.1] font-bold tracking-tight text-text-primary sm:text-6xl lg:text-7xl"
            >
              Building{' '}
              <span className="gradient-text">Ideas</span>.
              <br />
              Exploring{' '}
              <span className="gradient-text">Possibilities</span>.
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-lg text-lg leading-relaxed text-text-secondary"
            >
              {personalInfo.description}
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-primary-blue px-7 py-3.5 font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-primary-blue/25 hover:brightness-110 active:scale-[0.97]"
              >
                Explore My Work
                <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-full border-2 border-border px-7 py-3.5 font-semibold text-text-primary transition-all duration-300 hover:border-primary-blue hover:text-primary-blue active:scale-[0.97]"
              >
                Let&apos;s Connect
              </a>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2 py-2 text-sm font-medium text-text-secondary transition-colors duration-200 hover:text-primary-blue"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex items-center gap-3"
            >
              {socialLinks
                .filter((s) => s.name === 'GitHub' || s.name === 'LinkedIn')
                .map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.name}
                      className="group flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white/70 text-text-secondary backdrop-blur-sm transition-all duration-300 hover:border-primary-blue hover:text-primary-blue hover:shadow-md"
                    >
                      <Icon className="h-[18px] w-[18px] transition-transform duration-300 group-hover:scale-110" />
                    </a>
                  );
                })}
              <span className="ml-1 text-xs text-text-secondary/60">
                Follow my journey
              </span>
            </motion.div>
          </motion.div>

          {/* ========== RIGHT SIDE ========== */}
          <motion.div
            className="relative flex w-full items-center justify-center lg:w-1/2"
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            style={{
              transform: `translate(${mouse.x * 8}px, ${mouse.y * 6}px)`,
            }}
          >
            {/* Gradient orbs behind card */}
            <div className="pointer-events-none absolute inset-0" aria-hidden>
              <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-blue/20 blur-3xl" />
              <div className="absolute top-[20%] right-[10%] h-40 w-40 rounded-full bg-accent-blue/15 blur-2xl" />
            </div>

            {/* Floating pills */}
            {floatingPills.map((pill) => (
              <div
                key={pill.label}
                className={`absolute z-20 ${pill.className}`}
              >
                <div className="glass rounded-full px-3.5 py-1.5 text-xs font-medium text-text-primary shadow-sm">
                  {pill.label}
                </div>
              </div>
            ))}

            {/* Main glass card — code editor */}
            <div className="glass relative z-10 w-full max-w-md rounded-2xl p-6 shadow-xl sm:p-8">
              {/* Title bar */}
              <div className="mb-4 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
                <span className="ml-2 flex-1 text-center text-[11px] font-medium text-text-secondary/50">
                  developer.ts
                </span>
              </div>

              {/* Code lines */}
              <motion.div
                className="font-mono text-sm leading-7 select-none"
                variants={codeContainerVariants}
                initial="hidden"
                animate="visible"
              >
                {codeLines.map((line, i) => (
                  <motion.div
                    key={i}
                    variants={codeLineVariants}
                    className="flex"
                    style={{ paddingLeft: `${line.indent * 1.25}rem` }}
                  >
                    {/* Line number */}
                    <span className="mr-4 inline-block w-4 text-right text-text-secondary/30 text-xs leading-7">
                      {i + 1}
                    </span>

                    <span className={line.color}>{line.text}</span>
                    {line.value && (
                      <>
                        <span className="text-text-secondary/40">&nbsp;</span>
                        <span className={line.valueColor}>{line.value}</span>
                        {i < codeLines.length - 1 && i > 0 && (
                          <span className="text-text-secondary/40">,</span>
                        )}
                      </>
                    )}
                  </motion.div>
                ))}
              </motion.div>

              {/* Blinking cursor */}
              <motion.span
                className="mt-1 inline-block h-4 w-[2px] bg-primary-blue"
                animate={{ opacity: [1, 0] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* ========== SCROLL INDICATOR ========== */}
        <motion.div
          className="mt-16 flex flex-col items-center gap-2 lg:mt-20"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8, ease }}
        >
          <span className="text-xs font-medium tracking-wider text-text-secondary/60">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="h-5 w-5 text-text-secondary/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
