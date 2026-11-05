'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { skills, skillCategories } from '@/data/portfolio';
import type { Skill } from '@/data/portfolio';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

const categoryHeaderVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -2 }}
      className="bg-white rounded-xl border border-border p-4 hover:border-primary-blue/50 hover:shadow-md transition-all duration-300 flex items-center gap-3 cursor-default"
    >
      {skill.icon && (
        <span className="text-2xl leading-none flex-shrink-0">{skill.icon}</span>
      )}
      <span className="font-medium text-text-primary text-sm">{skill.name}</span>
    </motion.div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredCategories =
    activeCategory === 'all'
      ? skillCategories
      : skillCategories.filter((c) => c.id === activeCategory);

  const getSkillsByCategory = (categoryId: string): Skill[] =>
    skills.filter((s) => s.category === categoryId);

  return (
    <section id="skills" className="section-padding bg-grid relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Technologies"
          title="My Tech Stack"
          subtitle="Technologies and tools I work with and am currently exploring."
        />

        {/* Category Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 text-sm font-medium rounded-full border transition-all duration-300 ${
              activeCategory === 'all'
                ? 'bg-primary-blue text-white border-primary-blue shadow-md shadow-primary-blue/25'
                : 'bg-white text-text-secondary border-border hover:border-primary-blue/50 hover:text-primary-blue'
            }`}
          >
            All
          </button>
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-full border transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-primary-blue text-white border-primary-blue shadow-md shadow-primary-blue/25'
                    : 'bg-white text-text-secondary border-border hover:border-primary-blue/50 hover:text-primary-blue'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {cat.label}
              </button>
            );
          })}
        </motion.div>

        {/* Skills Grid by Category */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-12"
          >
            {filteredCategories.map((category) => {
              const categorySkills = getSkillsByCategory(category.id);
              if (categorySkills.length === 0) return null;

              const Icon = category.icon;

              return (
                <motion.div
                  key={category.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  variants={containerVariants}
                >
                  <motion.div
                    variants={categoryHeaderVariants}
                    className="flex items-center gap-3 mb-6"
                  >
                    <div className="w-10 h-10 rounded-lg bg-secondary-bg border border-border flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary-blue" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-deep-navy">
                      {category.label}
                    </h3>
                    <div className="flex-1 h-px bg-border ml-2" />
                  </motion.div>

                  <motion.div
                    variants={containerVariants}
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
                  >
                    {categorySkills.map((skill) => (
                      <SkillCard key={skill.name} skill={skill} />
                    ))}
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
