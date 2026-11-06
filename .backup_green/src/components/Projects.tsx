import React, { useState } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import { projects, Project } from '@/data/portfolio';
import { ExternalLink, Terminal, Layers, ArrowUpRight, CheckCircle, Clock } from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-wrapper bg-[#070B09] border-t border-[#1B291F]">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading
          idPrefix="03."
          label="SELECTED WORK"
          title="Practical Projects & Exploration"
          subtitle="Real projects developed through coursework and self-directed study. Each entry documents the problem solved, personal contributions, and engineering lessons."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="command-panel flex flex-col justify-between overflow-hidden p-6 sm:p-7 relative group"
            >
              {/* Card Top: Category and Status */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="font-mono text-[11px] text-[#98A79B] uppercase tracking-wider">
                    {project.category}
                  </span>
                  <span
                    className={`inline-flex items-center gap-1 font-mono text-[10px] px-2 py-0.5 rounded border ${
                      project.status === 'In Progress'
                        ? 'border-[#68F795]/30 text-[#68F795] bg-[#68F795]/10'
                        : 'border-[#98A79B]/30 text-[#98A79B] bg-[#141F18]'
                    }`}
                  >
                    {project.status === 'In Progress' ? (
                      <Clock className="w-3 h-3" />
                    ) : (
                      <CheckCircle className="w-3 h-3" />
                    )}
                    {project.status}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="font-display font-bold text-xl text-[#E8F0EA] group-hover:text-[#68F795] transition-colors mb-3 leading-snug">
                  {project.title}
                </h3>

                {/* Problem Statement */}
                <div className="mb-4">
                  <span className="font-mono text-[11px] text-[#68F795] block mb-1">
                    Problem Statement:
                  </span>
                  <p className="text-xs sm:text-sm text-[#98A79B] leading-relaxed line-clamp-3">
                    {project.problem}
                  </p>
                </div>

                {/* Contribution */}
                <div className="mb-5 p-3 rounded bg-[#0c140f] border border-[#1B291F]">
                  <span className="font-mono text-[10px] text-[#68F795] block mb-1 uppercase tracking-wider">
                    // My Contribution
                  </span>
                  <p className="text-xs text-[#E8F0EA] leading-relaxed line-clamp-3">
                    {project.contribution}
                  </p>
                </div>
              </div>

              {/* Card Bottom: Tech Stack & Actions */}
              <div>
                {/* Tech stack badges */}
                <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-[#1B291F]">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] px-2 py-0.5 rounded bg-[#141F18] text-[#98A79B] border border-[#1B291F]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex items-center justify-between gap-3 pt-3 border-t border-[#1B291F]/60">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="font-mono text-xs text-[#68F795] hover:underline flex items-center gap-1 focus-visible:ring-1 focus-visible:ring-[#68F795] rounded px-1"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#98A79B] hover:text-[#68F795] transition-colors p-1.5 rounded focus-visible:ring-1 focus-visible:ring-[#68F795]"
                      aria-label={`${project.title} Repository`}
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="command-panel max-w-2xl w-full p-6 sm:p-8 bg-[#101813] border border-[#68F795]/30 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#1B291F]">
              <div className="font-mono text-xs text-[#68F795]">
                // CASE_STUDY: {selectedProject.id}
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="font-mono text-xs text-[#98A79B] hover:text-[#68F795] px-2 py-1 rounded border border-[#1B291F]"
                aria-label="Close Case Study"
              >
                [ESC / CLOSE]
              </button>
            </div>

            <h3 id="case-study-title" className="font-display font-bold text-2xl text-[#E8F0EA] mb-2">
              {selectedProject.title}
            </h3>

            <div className="font-mono text-xs text-[#98A79B] mb-6">
              Category: {selectedProject.category} · Status: {selectedProject.status}
            </div>

            {/* Modal Content Sections */}
            <div className="space-y-5 text-sm">
              <div>
                <h4 className="font-mono text-xs text-[#68F795] uppercase tracking-wider mb-1.5">
                  1. The Problem
                </h4>
                <p className="text-[#E8F0EA] leading-relaxed bg-[#0c140f] p-3.5 rounded border border-[#1B291F]">
                  {selectedProject.problem}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs text-[#68F795] uppercase tracking-wider mb-1.5">
                  2. Individual Contribution
                </h4>
                <p className="text-[#E8F0EA] leading-relaxed bg-[#0c140f] p-3.5 rounded border border-[#1B291F]">
                  {selectedProject.contribution}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs text-[#68F795] uppercase tracking-wider mb-1.5">
                  3. Key Engineering Lessons
                </h4>
                <p className="text-[#E8F0EA] leading-relaxed bg-[#0c140f] p-3.5 rounded border border-[#1B291F]">
                  {selectedProject.learned}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs text-[#68F795] uppercase tracking-wider mb-1.5">
                  4. Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs px-2.5 py-1 rounded bg-[#0c140f] border border-[#1B291F] text-[#68F795]"
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
