'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { journeyItems, type JourneyItem } from '@/data/portfolio';

// ---- Type badge colors ----
const typeBadgeStyles: Record<JourneyItem['type'], string> = {
  education: 'bg-blue-100 text-blue-700',
  project: 'bg-green-100 text-green-700',
  achievement: 'bg-yellow-100 text-yellow-700',
  learning: 'bg-purple-100 text-purple-700',
};

const typeLabels: Record<JourneyItem['type'], string> = {
  education: 'Education',
  project: 'Project',
  achievement: 'Achievement',
  learning: 'Learning',
};

// ---- Single timeline item ----
function TimelineItem({ item, index }: { item: JourneyItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex items-start md:items-center w-full mb-12 md:mb-16 ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      } flex-row`}
    >
      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -50 : 50, y: 20 }}
        animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className={`relative ml-12 md:ml-0 md:w-[calc(50%-2.5rem)] ${
          isLeft ? 'md:pr-0' : 'md:pl-0'
        }`}
      >
        {/* Connector line from node to card (desktop only) */}
        <div
          className={`hidden md:block absolute top-6 w-8 h-[2px] bg-border ${
            isLeft ? 'right-[-2rem]' : 'left-[-2rem]'
          }`}
        />

        <div className="group bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-border shadow-sm hover:shadow-lg hover:border-primary-blue/30 transition-all duration-300">
          {/* Date badge */}
          <span className="inline-block text-xs font-mono text-primary-blue uppercase tracking-wider mb-2">
            {item.date}
          </span>

          {/* Icon + Title */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl" role="img" aria-label={item.title}>
              {item.icon}
            </span>
            <h3 className="font-display text-lg font-semibold text-deep-navy">
              {item.title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-text-secondary text-sm mt-2 leading-relaxed">
            {item.description}
          </p>

          {/* Type badge */}
          <span
            className={`inline-block mt-3 px-3 py-1 text-xs font-medium rounded-full ${typeBadgeStyles[item.type]}`}
          >
            {typeLabels[item.type]}
          </span>
        </div>
      </motion.div>

      {/* Center node (mobile: left-aligned, desktop: centered) */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
        className={`absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10 flex items-center justify-center`}
      >
        <div
          className={`w-4 h-4 rounded-full bg-white border-2 border-primary-blue shadow-md transition-shadow duration-300 ${
            isInView ? 'animate-pulse-glow' : ''
          }`}
        />
      </motion.div>

      {/* Connector line from node to card (mobile only) */}
      <div className="md:hidden absolute left-4 top-1.5 w-6 h-[2px] bg-border" />

      {/* Spacer for the other side (desktop) */}
      <div className="hidden md:block md:w-[calc(50%-2.5rem)]" />
    </div>
  );
}

// ---- Main Journey component ----
export default function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="journey" className="section-padding animated-gradient">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="My Path"
          title="Every Step Is Progress."
          subtitle="A timeline of my journey through technology and learning."
        />

        {/* Timeline container */}
        <div ref={containerRef} className="relative mt-12">
          {/* Vertical center line — desktop: center, mobile: left */}
          <div className="absolute left-[7px] md:left-1/2 md:-translate-x-[1px] top-0 bottom-0 w-[2px]">
            {/* Static background line */}
            <div className="absolute inset-0 bg-border/40 rounded-full" />

            {/* Animated fill line */}
            <motion.div
              style={{ scaleY: lineScaleY, originY: 0 }}
              className="absolute inset-0 timeline-line rounded-full"
            />
          </div>

          {/* Timeline items */}
          <div className="relative">
            {journeyItems.map((item, index) => (
              <TimelineItem key={item.id} item={item} index={index} />
            ))}
          </div>

          {/* End dot */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="absolute left-[3px] md:left-1/2 md:-translate-x-1/2 bottom-0 w-3 h-3 rounded-full bg-primary-blue shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
