import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import { skillCategories } from '@/data/portfolio';

export default function Skills() {
  const confirmedCategories = skillCategories.filter((c) => c.id !== 'learning');
  const learningCategory = skillCategories.find((c) => c.id === 'learning');

  return (
    <section id="skills" className="section-wrapper-editorial bg-[#080808] border-b border-[#292629]">
      <div className="mx-auto max-w-[1280px]">
        {/* Section Heading */}
        <SectionHeading
          idPrefix="03"
          label="SKILLS & TOOLKIT"
          title="TECHNICAL COMPETENCIES"
          subtitle="Honest assessment of languages, frameworks, and developer tools actively used in coursework and personal projects. Grouped by domain without arbitrary percentages."
        />

        {/* Confirmed Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {confirmedCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="editorial-panel p-6 sm:p-7 flex flex-col justify-between"
              >
                <div className="corner-bracket corner-bracket-tl" />
                <div className="corner-bracket corner-bracket-tr" />
                <div className="corner-bracket corner-bracket-bl" />
                <div className="corner-bracket corner-bracket-br" />

                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between gap-3 mb-3 pb-3 border-b border-[#292629]">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#FF453A]" />
                      <h3
                        className="font-display font-bold text-lg sm:text-xl text-[#F2F0EB] tracking-tight uppercase"
                        style={{ fontFamily: "'Barlow Condensed', 'Anton', sans-serif" }}
                      >
                        {category.title}
                      </h3>
                    </div>
                    <span className="font-mono text-[10px] text-[#666362]">0{idx + 1}</span>
                  </div>

                  <p className="text-xs text-[#AAA6A3] mb-5 leading-relaxed">
                    {category.subtitle}
                  </p>

                  {/* Skills List */}
                  <div className="space-y-2">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="px-3.5 py-2.5 bg-[#080808] border border-[#292629] flex items-center justify-between hover:border-[#FF453A]/50 transition-colors"
                      >
                        <span className="text-xs sm:text-sm font-medium text-[#F2F0EB]">
                          {skill.name}
                        </span>
                        <span className="font-mono text-[10px] text-[#AAA6A3]">
                          {skill.tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-[#292629] flex items-center justify-between text-[10px] font-mono text-[#666362]">
                  <span>DOMAIN: {category.id.toUpperCase()}</span>
                  <span className="text-[#FF453A]">CONFIRMED</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Distinct "Currently Learning" Row */}
        {learningCategory && (
          <div className="editorial-panel p-6 sm:p-7 border border-[#FF453A]/30">
            <div className="corner-bracket corner-bracket-tl" />
            <div className="corner-bracket corner-bracket-tr" />
            <div className="corner-bracket corner-bracket-bl" />
            <div className="corner-bracket corner-bracket-br" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-3 border-b border-[#292629]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#00F0FF]" />
                <h3
                  className="font-display font-bold text-xl text-[#F2F0EB] tracking-tight uppercase"
                  style={{ fontFamily: "'Barlow Condensed', 'Anton', sans-serif" }}
                >
                  {learningCategory.title}
                </h3>
              </div>
              <span className="font-mono text-xs text-[#00F0FF] uppercase tracking-wider">
                // ACTIVE STUDY & EXPERIMENTATION
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#AAA6A3] mb-5 max-w-2xl">
              {learningCategory.subtitle}. Disciplines and technologies actively being practiced
              through documentation, coursework, and mini-prototypes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {learningCategory.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-[#080808] border border-[#292629] flex flex-col justify-between"
                >
                  <span className="text-xs sm:text-sm font-semibold text-[#F2F0EB]">
                    {skill.name}
                  </span>
                  <span className="font-mono text-[10px] text-[#AAA6A3] mt-1">
                    {skill.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
