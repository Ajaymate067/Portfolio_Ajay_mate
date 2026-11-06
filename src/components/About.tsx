import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import WordReveal from '@/components/ui/WordReveal';
import { aboutData, personalInfo } from '@/data/portfolio';
import { GraduationCap, MapPin, Check, ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section-wrapper-editorial bg-[#080808] border-b border-[#292629]">
      <div className="mx-auto max-w-[1280px]">
        {/* Section Heading */}
        <SectionHeading
          idPrefix="01"
          label="ABOUT"
          title="ENGINEERING MINDSET & BACKGROUND"
          subtitle="Understanding systems from the core upward. A disciplined approach to continuous learning and software development."
        />

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Natural Biography & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="editorial-panel p-6 sm:p-8">
              <div className="corner-bracket corner-bracket-tl" />
              <div className="corner-bracket corner-bracket-tr" />
              <div className="corner-bracket corner-bracket-bl" />
              <div className="corner-bracket corner-bracket-br" />

              <div className="flex items-center gap-2 mb-4 font-mono text-xs text-[#FF453A] uppercase tracking-wider">
                <span className="w-1.5 h-1.5 bg-[#FF453A]" />
                <span>BIOGRAPHY & PHILOSOPHY</span>
              </div>

              <WordReveal
                tag="p"
                text={aboutData.intro}
                className="text-base sm:text-lg text-[#F2F0EB] leading-relaxed mb-4"
              />
              <p className="text-sm sm:text-base text-[#AAA6A3] leading-relaxed">
                {aboutData.philosophy}
              </p>
            </div>

            {/* Core Values / Approach Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {aboutData.highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 bg-[#111113] border border-[#292629] hover:border-[#FF453A] transition-colors relative"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <Icon className="w-5 h-5 text-[#FF453A]" />
                      <span className="font-mono text-[10px] text-[#666362]">0{idx + 1}</span>
                    </div>
                    <h3 className="font-mono text-sm font-semibold text-[#F2F0EB] mb-2 uppercase tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#AAA6A3] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Academic & Technical Focus */}
          <div className="lg:col-span-5 space-y-6">
            {/* Academic Snapshot Card */}
            <div className="editorial-panel p-6 sm:p-7">
              <div className="corner-bracket corner-bracket-tl" />
              <div className="corner-bracket corner-bracket-tr" />
              <div className="corner-bracket corner-bracket-bl" />
              <div className="corner-bracket corner-bracket-br" />

              <div className="font-mono text-xs text-[#FF453A] mb-5 uppercase tracking-wider flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#FF453A]" />
                  <span>ACADEMIC FOUNDATION</span>
                </span>
                <span className="text-[10px] text-[#666362]">UNDERGRADUATE</span>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <GraduationCap className="w-5 h-5 text-[#FF453A] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-[#F2F0EB] text-base">{personalInfo.degree}</div>
                    <div className="text-xs text-[#AAA6A3] mt-0.5">{personalInfo.university}</div>
                    <div className="text-xs text-[#666362] mt-1 font-mono">{personalInfo.yearOfStudy}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-[#292629] text-xs text-[#AAA6A3]">
                  <MapPin className="w-4 h-4 text-[#FF453A]" />
                  <span>Based in {personalInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Currently Exploring List */}
            <div className="editorial-panel p-6 sm:p-7">
              <div className="corner-bracket corner-bracket-tl" />
              <div className="corner-bracket corner-bracket-tr" />
              <div className="corner-bracket corner-bracket-bl" />
              <div className="corner-bracket corner-bracket-br" />

              <div className="flex items-center gap-2 mb-4 font-mono text-xs text-[#FF453A] uppercase tracking-wider">
                <span className="w-1.5 h-1.5 bg-[#FF453A]" />
                <span>CURRENTLY EXPLORING</span>
              </div>

              <ul className="space-y-3">
                {aboutData.currentlyExploring.map((topic, i) => (
                  <li
                    key={i}
                    className="flex items-center justify-between py-2 border-b border-[#292629] last:border-0 text-xs sm:text-sm text-[#F2F0EB]"
                  >
                    <span className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 bg-[#FF453A]" />
                      <span>{topic}</span>
                    </span>
                    <span className="font-mono text-[10px] text-[#666362]">ACTIVE</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
