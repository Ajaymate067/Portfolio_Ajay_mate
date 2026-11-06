import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import { aboutData, personalInfo } from '@/data/portfolio';
import { Terminal, BookOpen, GraduationCap, MapPin, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section-wrapper bg-[#070B09] border-t border-[#1B291F]">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading
          idPrefix="01."
          label="ABOUT ME"
          title="Engineering Mindset & Approach"
          subtitle="Understanding systems from the core upwards. A snapshot of what drives my learning and development."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Natural Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="command-panel p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-4 font-mono text-xs text-[#68F795]">
                <Terminal className="w-4 h-4" />
                <span>bio.txt</span>
              </div>
              <p className="text-base text-[#E8F0EA] leading-relaxed mb-4">
                {aboutData.intro}
              </p>
              <p className="text-sm sm:text-base text-[#98A79B] leading-relaxed">
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
                    className="p-5 rounded-lg bg-[#101813] border border-[#1B291F] hover:border-[#68F795]/30 transition-colors"
                  >
                    <Icon className="w-5 h-5 text-[#68F795] mb-3" />
                    <h3 className="font-mono text-sm font-semibold text-[#E8F0EA] mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#98A79B] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Academic & Technical Status */}
          <div className="lg:col-span-5 space-y-6">
            {/* Academic Snapshot Card */}
            <div className="command-panel p-6">
              <div className="font-mono text-xs text-[#68F795] mb-4 uppercase tracking-wider flex items-center justify-between">
                <span>// Academic Profile</span>
                <span className="text-[10px] text-[#647568]">STATUS: ACTIVE</span>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-[#68F795] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-[#E8F0EA]">{personalInfo.degree}</div>
                    <div className="text-xs text-[#98A79B]">{personalInfo.university}</div>
                    <div className="text-xs text-[#647568] mt-0.5 font-mono">{personalInfo.yearOfStudy}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-[#1B291F] text-xs text-[#98A79B]">
                  <MapPin className="w-4 h-4 text-[#68F795]" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Currently Exploring Tags Card */}
            <div className="command-panel p-6">
              <div className="flex items-center gap-2 mb-4 font-mono text-xs text-[#68F795]">
                <BookOpen className="w-4 h-4" />
                <span>// CURRENTLY EXPLORING</span>
              </div>

              <ul className="space-y-2.5">
                {aboutData.currentlyExploring.map((topic, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#E8F0EA]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#68F795] flex-shrink-0" />
                    <span>{topic}</span>
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
