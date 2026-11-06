// ============================================================
// PORTFOLIO DATA — AJAY MATE
// Developer Command Centre & Editorial Portfolio
// ============================================================

import React from 'react';
import {
  Code2,
  Globe,
  Brain,
  Wrench,
  BookOpen,
  Mail,
  Cpu,
  Layers,
  Terminal,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';

// ---- Personal Info ----
export const personalInfo = {
  name: 'Ajay Mate',
  initials: 'AM',
  role: 'CSE Student · Aspiring Software Engineer',
  tagline: 'Learning by building. Exploring systems from first principles.',
  description:
    'Computer Science & Engineering student passionate about algorithmic problem solving, modern web applications, and systems design. Dedicated to writing clean, maintainable code and turning concepts into working software.',
  email: 'ajaymate@example.com', // Public contact email (placeholder pending confirmation)
  location: 'India',
  university: 'Computer Science & Engineering Department',
  degree: 'B.Tech in Computer Science & Engineering',
  yearOfStudy: 'Undergraduate Student',
  status: 'Available for internships & collaborations',
  resumeUrl: '', // Left blank to avoid dead link until confirmed
};

// ---- Social Links (cleanly filtered for valid URLs) ----
export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com',
    icon: GithubIcon,
    display: true,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: LinkedinIcon,
    display: true,
  },
  {
    name: 'Email',
    url: `mailto:${personalInfo.email}`,
    icon: Mail,
    display: true,
  },
];

// ---- Navigation ----
export const navLinks = [
  { label: 'About', href: '#about', id: '01' },
  { label: 'Skills', href: '#skills', id: '02' },
  { label: 'Projects', href: '#projects', id: '03' },
  { label: 'Contact', href: '#contact', id: '04' },
];

// ---- About Section Data ----
export const aboutData = {
  intro:
    'I am a Computer Science undergraduate focused on building a strong foundation in software engineering. Rather than just memorizing syntax, I believe in understanding how code runs, how data flows, and how real-world applications scale.',
  philosophy:
    'My approach revolves around clarity, consistency, and curiosity. Whether debugging an algorithmic edge case or refining a user interface, I aim for solutions that are both technically sound and thoughtfully crafted.',
  highlights: [
    {
      title: 'First-Principles Mindset',
      desc: 'Focusing on core data structures, algorithms, and how systems execute under the hood.',
      icon: Cpu,
    },
    {
      title: 'Modern Web Engineering',
      desc: 'Building responsive, accessible web applications with TypeScript, React, and modular styling.',
      icon: Layers,
    },
    {
      title: 'Continuous Progression',
      desc: 'Actively participating in problem-solving practice, technical reading, and open source exploration.',
      icon: Terminal,
    },
  ],
  currentlyExploring: [
    'Data Structures & Algorithms',
    'TypeScript & React Ecosystem',
    'Linux CLI & Bash Scripting',
    'Relational Databases & SQL',
    'RESTful API Architecture',
  ],
};

// ---- Skills Data ----
export interface SkillItem {
  name: string;
  tag: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    subtitle: 'Core languages used in coursework and projects',
    icon: Code2,
    skills: [
      { name: 'Python', tag: 'Scripting & Logic' },
      { name: 'C / C++', tag: 'Systems & Algorithms' },
      { name: 'Java', tag: 'OOP & Data Structures' },
      { name: 'JavaScript (ES6+)', tag: 'Web & Async' },
      { name: 'TypeScript', tag: 'Type-Safe Applications' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend & UI Engineering',
    subtitle: 'Responsive, accessible interface design',
    icon: Globe,
    skills: [
      { name: 'React 19', tag: 'Component Architecture' },
      { name: 'Tailwind CSS v4', tag: 'Utility-First Styling' },
      { name: 'HTML5 Semantic', tag: 'Structure & Accessibility' },
      { name: 'Modern CSS', tag: 'Flexbox, Grid, Custom Props' },
      { name: 'Motion / Animations', tag: 'Subtle Interactions' },
    ],
  },
  {
    id: 'tools-core',
    title: 'Development Tools & Core Concepts',
    subtitle: 'Essential developer workflow and foundation',
    icon: Wrench,
    skills: [
      { name: 'Git & GitHub', tag: 'Version Control' },
      { name: 'VS Code & Terminals', tag: 'Workflow' },
      { name: 'Linux / Unix CLI', tag: 'Command Line' },
      { name: 'Data Structures', tag: 'Arrays, Trees, Graphs' },
      { name: 'Vite & Bundlers', tag: 'Modern Build Pipeline' },
    ],
  },
  {
    id: 'learning',
    title: 'Currently Exploring',
    subtitle: 'Active areas of study and experimentation',
    icon: BookOpen,
    skills: [
      { name: 'Node.js & Express', tag: 'Backend Services' },
      { name: 'SQL & Database Design', tag: 'Data Persistence' },
      { name: 'REST API Design', tag: 'Client-Server Architecture' },
      { name: 'Testing Principles', tag: 'Quality Assurance' },
    ],
  },
];

// ---- Projects Data ----
export interface Project {
  id: string;
  title: string;
  category: string;
  status: 'In Progress' | 'Academic' | 'Prototype';
  problem: string;
  contribution: string;
  learned: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'dev-command-centre',
    title: 'Developer Command Centre Portfolio',
    category: 'Systems & Web Application',
    status: 'In Progress',
    problem:
      'Many developer portfolios rely on generic, bloated templates that mask the developer’s technical mindset and lack performance consciousness.',
    contribution:
      'Designed and engineered this custom dark command-centre portfolio from scratch using React, TypeScript, Tailwind CSS v4, and a lightweight Matrix canvas. Implemented full keyboard navigation, accessible theme contrast, and reduced-motion controls.',
    learned:
      'Mastered Tailwind v4 CSS-first theming, canvas animation optimization with requestAnimationFrame, and accessible component structuring.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS v4', 'Canvas API', 'Vite'],
    githubUrl: 'https://github.com',
  },
  {
    id: 'algorithm-visualizer',
    title: 'Algorithm & Data Structure Visualizer',
    category: 'Educational Engineering Tool',
    status: 'In Progress',
    problem:
      'Understanding the step-by-step behavior of sorting (Quicksort, Mergesort) and graph algorithms is difficult through static textbook diagrams.',
    contribution:
      'Developing an interactive visualization tool that step-traces algorithm states, color-codes partition pointers, and allows variable playback speeds.',
    learned:
      'Deepened comprehension of asynchronous state queues, algorithmic invariants, and rendering optimization during rapid state updates.',
    techStack: ['TypeScript', 'React', 'Tailwind CSS', 'Algorithms'],
    githubUrl: 'https://github.com',
  },
  {
    id: 'student-task-system',
    title: 'Coursework & Task Management System',
    category: 'Productivity Application',
    status: 'Academic',
    problem:
      'Students frequently balance overlapping assignment deadlines across subjects with clunky spreadsheets or complex SaaS tools.',
    contribution:
      'Built a focused lightweight student planner with category tagging, priority filtering, and resilient browser-local state storage.',
    learned:
      'Gained practical experience with clean component state lifting, localStorage serialization, and form validation constraints.',
    techStack: ['JavaScript', 'HTML5', 'CSS3', 'Storage API'],
  },
];


// ---- Journey / Timeline ----
export interface JourneyItem {
  id: string;
  date: string;
  title: string;
  description: string;
  icon: string;
  type: 'education' | 'project' | 'achievement' | 'learning';
}

export const journeyItems: JourneyItem[] = [
  {
    id: 'j1',
    date: '2024',
    title: 'Started B.Tech Journey',
    description: 'Began Computer Science & Engineering undergraduate studies.',
    icon: '🎓',
    type: 'education',
  },
  {
    id: 'j2',
    date: '2024',
    title: 'Core Fundamentals',
    description: 'Studied algorithmic problem solving, C, and Python data structures.',
    icon: '💻',
    type: 'learning',
  },
  {
    id: 'j3',
    date: '2025',
    title: 'Modern Web Engineering',
    description: 'Developed interactive applications with React, TypeScript, and modern tooling.',
    icon: '⚡',
    type: 'project',
  },
];
