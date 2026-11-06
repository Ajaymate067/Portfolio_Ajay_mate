import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useEffects } from '@/context/EffectsContext';

interface WordRevealProps {
  text: string;
  className?: string;
  tag?: 'p' | 'h1' | 'h2' | 'h3' | 'span';
  style?: React.CSSProperties;
  delay?: number;
}

export default function WordReveal({
  text,
  className = '',
  tag: Component = 'p',
  style,
  delay = 0,
}: WordRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { effectsEnabled } = useEffects();

  const words = text.split(/\s+/).filter(Boolean);

  // If effects are disabled or prefers-reduced-motion, show immediately
  if (!effectsEnabled) {
    return (
      <Component className={className} style={style}>
        {text}
      </Component>
    );
  }

  // Calculate stagger so paragraph reveals complete within roughly 0.8s - 1.0s
  const stagger = Math.max(0.015, Math.min(0.045, 0.85 / Math.max(words.length, 1)));

  return (
    <Component ref={ref as any} className={className} style={style}>
      {/* Screen reader full announcement without per-word pauses */}
      <span className="sr-only">{text}</span>

      {/* Visual animated words */}
      <span aria-hidden="true" className="inline">
        {words.map((word, idx) => (
          <motion.span
            key={idx}
            className="inline-block mr-[0.28em] last:mr-0 will-change-transform will-change-opacity"
            initial={{ opacity: 0, y: 7 }}
            animate={
              isInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 7 }
            }
            transition={{
              duration: 0.35,
              delay: delay + idx * stagger,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        ))}
      </span>
    </Component>
  );
}

