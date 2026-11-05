import { motion } from 'framer-motion';

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({ label, title, subtitle, align = 'center' }: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-16 md:mb-20 ${isCenter ? 'text-center' : 'text-left'}`}
    >
      {label && (
        <span className="inline-block mb-4 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-primary-blue bg-secondary-bg rounded-full border border-border">
          {label}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-deep-navy leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg text-text-secondary max-w-2xl ${isCenter ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

