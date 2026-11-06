import React from 'react';

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
      {/* Category / System Monospace Label */}
      {(label || idPrefix) && (
        <div className={`flex items-center gap-2 mb-3 ${isCenter ? 'justify-center' : ''}`}>
          {idPrefix && (
            <span className="font-mono text-xs font-semibold text-[#68F795] tracking-wider">
              {idPrefix}
            </span>
          )}
          {label && (
            <span className="font-mono text-xs text-[#98A79B] uppercase tracking-wider">
              // {label}
            </span>
          )}
        </div>
      )}

      {/* Main Section Title */}
      <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#E8F0EA] tracking-tight leading-tight">
        {title}
      </h2>

      {/* Section Subtitle */}
      {subtitle && (
        <p className={`mt-3 text-sm sm:text-base text-[#98A79B] max-w-2xl leading-relaxed ${isCenter ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
