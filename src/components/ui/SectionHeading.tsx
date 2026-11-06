import React from 'react';
import WordReveal from '@/components/ui/WordReveal';

interface SectionHeadingProps {
  idPrefix?: string;
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({
  idPrefix,
  label,
  title,
  subtitle,
  align = 'left',
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto' : 'text-left'}`}>
      {/* Editorial Number / Label Pill */}
      {(label || idPrefix) && (
        <div className={`flex items-center gap-2.5 mb-3 font-mono text-xs tracking-wider uppercase ${isCenter ? 'justify-center' : ''}`}>
          <span className="inline-block w-2 h-2 bg-[#FF453A]" />
          {idPrefix && (
            <span className="text-[#FF453A] font-semibold">
              {idPrefix}
            </span>
          )}
          {idPrefix && label && (
            <span className="text-[#292629]">/</span>
          )}
          {label && (
            <span className="text-[#AAA6A3]">
              {label}
            </span>
          )}
        </div>
      )}

      {/* Main Section Title in Bold Condensed Editorial Typography with Word-by-Word Reveal */}
      <WordReveal
        tag="h2"
        text={title}
        className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#F2F0EB] tracking-tight uppercase leading-[0.95]"
        style={{ fontFamily: "'Barlow Condensed', 'Anton', sans-serif" }}
      />

      {/* Section Subtitle with Word-by-Word Reveal */}
      {subtitle && (
        <WordReveal
          tag="p"
          text={subtitle}
          delay={0.12}
          className={`mt-3.5 text-sm sm:text-base text-[#AAA6A3] max-w-2xl leading-relaxed ${isCenter ? 'mx-auto' : ''}`}
        />
      )}
    </div>
  );
}
