'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, ExternalLink, Github, Star, X } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { projects } from '@/data/portfolio';
import type { Project } from '@/data/portfolio';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

function StatusBadge({ status }: { status: Project['status'] }) {
  const config = {
    completed: {
      bg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      label: 'Completed',
    },
    'in-progress': {
      bg: 'bg-blue-50 text-blue-700 border-blue-200',
      label: 'In Progress',
    },
    planned: {
      bg: 'bg-gray-50 text-gray-600 border-gray-200',
      label: 'Planned',
    },
  };

  const { bg, label } = config[status];

  return (
    <span className={`inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full border ${bg}`}>
      {label}
    </span>
  );
}

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (project: Project) => void;
}) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -4 }}
      onClick={() => onOpen(project)}
      className="bg-white rounded-2xl border border-border overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow duration-500"
    >
      {/* Image Area */}
      <div className="h-48 bg-gradient-to-br from-secondary-bg to-primary-blue/5 relative overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
            <Code2 className="w-12 h-12 text-primary-blue/30" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Badges */}
        <div className="flex items-center gap-2 mb-3">
          {project.featured && (
            <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
              <Star className="w-3 h-3 fill-current" />
              Featured
            </span>
          )}
          <StatusBadge status={project.status} />
        </div>

        {/* Title */}
        <h3 className="font-display text-xl font-bold text-deep-navy group-hover:text-primary-blue transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-text-secondary text-sm mt-2 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="bg-secondary-bg text-primary-blue text-xs px-2.5 py-1 rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        {(project.githubUrl || project.liveUrl) && (
          <div className="flex items-center gap-3 mt-5 pt-4 border-t border-border">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary hover:text-deep-navy transition-colors duration-200"
              >
                <Github className="w-4 h-4" />
                Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-blue hover:text-accent-blue transition-colors duration-200"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-deep-navy/40 backdrop-blur-sm"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto"
      >
        {/* Modal Header Image */}
        <div className="h-56 bg-gradient-to-br from-secondary-bg to-primary-blue/10 relative overflow-hidden rounded-t-2xl">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Code2 className="w-16 h-16 text-primary-blue/25" />
            </div>
          )}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-border flex items-center justify-center text-text-secondary hover:text-deep-navy hover:bg-white transition-all duration-200 shadow-sm"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8">
          {/* Badges */}
          <div className="flex items-center gap-2 mb-4">
            {project.featured && (
              <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                <Star className="w-3 h-3 fill-current" />
                Featured
              </span>
            )}
            <StatusBadge status={project.status} />
          </div>

          {/* Title */}
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-deep-navy">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-text-secondary mt-4 leading-relaxed">
            {project.longDescription || project.description}
          </p>

          {/* Tech Stack */}
          <div className="mt-6">
            <h4 className="text-sm font-semibold text-deep-navy uppercase tracking-wider mb-3">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="bg-secondary-bg text-primary-blue text-sm px-3 py-1.5 rounded-full font-medium border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          {(project.githubUrl || project.liveUrl) && (
            <div className="flex flex-wrap items-center gap-3 mt-8 pt-6 border-t border-border">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-xl bg-deep-navy text-white hover:bg-deep-navy/90 transition-colors duration-200"
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-xl bg-primary-blue text-white hover:bg-primary-blue/90 transition-colors duration-200"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpen = useCallback((project: Project) => {
    setSelectedProject(project);
  }, []);

  const handleClose = useCallback(() => {
    setSelectedProject(null);
  }, []);

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Portfolio"
          title="Things I've Been Building"
          subtitle="Projects I've worked on — from web apps to AI experiments."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={handleOpen}
            />
          ))}
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={handleClose} />
        )}
      </AnimatePresence>
    </section>
  );
}
