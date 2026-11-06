import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import { skillCategories } from '@/data/portfolio';

export default function Skills() {
  return (
    <section id="skills" className="section-wrapper bg-[#070B09] border-t border-[#1B291F]">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading
          idPrefix="02."
          label="TECHNICAL SKILLS"
          title="Technologies & Toolkit"
          subtitle="Honest assessment of languages, frameworks, and developer tools actively used in academic and personal projects."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="command-panel p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex items-center justify-center w-8 h-8 rounded bg-[#070B09] border border-[#1B291F] text-[#68F795]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-mono text-sm sm:text-base font-semibold text-[#E8F0EA]">
                      {category.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#98A79B] mb-5 pl-11">
                    {category.subtitle}
                  </p>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-[#1B291F]">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="px-3.5 py-2.5 rounded bg-[#0c140f] border border-[#1B291F] hover:border-[#68F795]/30 transition-all flex flex-col justify-center"
                      >
                        <span className="text-xs sm:text-sm font-medium text-[#E8F0EA]">
                          {skill.name}
                        </span>
                        <span className="font-mono text-[10px] text-[#98A79B]/80 mt-0.5">
                          {skill.tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-[#1B291F]/60 flex items-center justify-between text-[11px] font-mono text-[#647568]">
                  <span>GROUP_ID: {category.id}</span>
                  <span className="text-[#68F795]/80">✓ VERIFIED</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
