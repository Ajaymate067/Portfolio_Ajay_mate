import React, { useState } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import { projects, Project } from '@/data/portfolio';
import { ArrowUpRight, Clock, Check, X } from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-wrapper-editorial bg-[#080808] border-b border-[#292629]">
      <div className="mx-auto max-w-[1280px]">
        {/* Section Heading with 02 / SELECTED WORK */}
        <SectionHeading
          idPrefix="02"
          label="SELECTED WORK"
          title="ENGINEERING PROJECTS & SYSTEMS"
          subtitle="Real projects developed through coursework and self-directed engineering practice. Documented with problem statements, individual contributions, and verified technologies."
        />

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="editorial-panel flex flex-col justify-between p-6 sm:p-7 relative group transition-all duration-300 hover:-translate-y-1 hover:border-[#FF453A]/60 hover:shadow-[0_8px_28px_rgba(255,69,58,0.14)]"
            >
              {/* Corner Brackets */}
              <div className="corner-bracket corner-bracket-tl" />
              <div className="corner-bracket corner-bracket-tr" />
              <div className="corner-bracket corner-bracket-bl" />
              <div className="corner-bracket corner-bracket-br" />

              <div>
                {/* Top Row: Project Index & Category */}
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[#292629]">
                  <span className="font-mono text-xs font-bold text-[#FF453A]">
                    PROJ. 0{idx + 1}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#AAA6A3] bg-[#080808] px-2 py-0.5 border border-[#292629]">
                    {project.status}
                  </span>
                </div>

                {/* Project Title */}
                <h3
                  className="font-display font-bold text-xl sm:text-2xl text-[#F2F0EB] group-hover:text-[#FF453A] transition-colors mb-3 leading-snug tracking-tight"
                  style={{ fontFamily: "'Barlow Condensed', 'Anton', sans-serif" }}
                >
                  {project.title}
                </h3>

                {/* Subtitle / Category */}
                <div className="font-mono text-[11px] text-[#AAA6A3] mb-4 uppercase tracking-wider">
                  {project.category}
                </div>

                {/* Problem Statement */}
                <div className="mb-4">
                  <span className="font-mono text-[11px] text-[#FF453A] block mb-1 uppercase tracking-wider font-semibold">
                    The Problem:
                  </span>
                  <p className="text-xs sm:text-sm text-[#AAA6A3] leading-relaxed line-clamp-3">
                    {project.problem}
                  </p>
                </div>

                {/* Contribution */}
                <div className="mb-5 p-3.5 bg-[#080808] border border-[#292629]">
                  <span className="font-mono text-[10px] text-[#FF453A] block mb-1 uppercase tracking-wider font-semibold">
                    // Contribution
                  </span>
                  <p className="text-xs text-[#F2F0EB] leading-relaxed line-clamp-3">
                    {project.contribution}
                  </p>
                </div>
              </div>

              {/* Bottom: Tech Stack & Actions */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-[#292629]">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] px-2 py-0.5 bg-[#18181b] text-[#AAA6A3] border border-[#292629]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between gap-3 pt-3 border-t border-[#292629]">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="font-mono text-xs text-[#FF453A] hover:underline flex items-center gap-1 font-semibold tracking-wider uppercase group/btn focus-visible:ring-1 focus-visible:ring-[#FF453A] rounded px-1"
                  >
                    <span>View Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#AAA6A3] hover:text-[#FF453A] transition-colors p-1.5"
                      aria-label={`${project.title} Source Code`}
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="editorial-panel max-w-2xl w-full p-6 sm:p-8 bg-[#111113] border border-[#FF453A]/60 max-h-[85vh] overflow-y-auto shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="corner-bracket corner-bracket-tl" />
            <div className="corner-bracket corner-bracket-tr" />
            <div className="corner-bracket corner-bracket-bl" />
            <div className="corner-bracket corner-bracket-br" />

            {/* Modal Header */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#292629]">
              <div className="font-mono text-xs text-[#FF453A] uppercase tracking-wider flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#FF453A]" />
                <span>CASE_STUDY: {selectedProject.id}</span>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="font-mono text-xs text-[#AAA6A3] hover:text-[#FF453A] flex items-center gap-1 uppercase"
                aria-label="Close Case Study"
              >
                <span>CLOSE</span>
                <X className="w-4 h-4" />
              </button>
            </div>

            <h3
              id="case-study-title"
              className="font-display font-bold text-2xl sm:text-3xl text-[#F2F0EB] mb-2 uppercase"
              style={{ fontFamily: "'Barlow Condensed', 'Anton', sans-serif" }}
            >
              {selectedProject.title}
            </h3>

            <div className="font-mono text-xs text-[#AAA6A3] mb-6">
              Category: {selectedProject.category} · Status: {selectedProject.status}
            </div>

            {/* Modal Content Sections */}
            <div className="space-y-5 text-sm">
              <div>
                <h4 className="font-mono text-xs text-[#FF453A] uppercase tracking-wider mb-1.5 font-semibold">
                  01. The Problem
                </h4>
                <p className="text-[#F2F0EB] leading-relaxed bg-[#080808] p-4 border border-[#292629]">
                  {selectedProject.problem}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs text-[#FF453A] uppercase tracking-wider mb-1.5 font-semibold">
                  02. Individual Contribution
                </h4>
                <p className="text-[#F2F0EB] leading-relaxed bg-[#080808] p-4 border border-[#292629]">
                  {selectedProject.contribution}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs text-[#FF453A] uppercase tracking-wider mb-1.5 font-semibold">
                  03. Technical Learnings
                </h4>
                <p className="text-[#F2F0EB] leading-relaxed bg-[#080808] p-4 border border-[#292629]">
                  {selectedProject.learned}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs text-[#FF453A] uppercase tracking-wider mb-1.5 font-semibold">
                  04. Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs px-3 py-1 bg-[#080808] border border-[#292629] text-[#F2F0EB]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
