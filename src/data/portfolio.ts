// ============================================================
// PORTFOLIO DATA — Edit this file to update your portfolio content
// ============================================================

import {
  Code2, Globe, Brain, Wrench, BookOpen,
  Github, Linkedin, Mail, Instagram,
} from 'lucide-react';

// ---- Personal Info ----
export const personalInfo = {
  name: 'Your Name',
  initials: 'YN',
  title: 'Computer Science Student',
  tagline: 'Curious Mind. Creative Builder. Future Engineer.',
  description:
    "Exploring technology, building ideas, and turning curiosity into something meaningful. Welcome to my digital space.",
  email: 'your.email@example.com',
  location: 'India',
  university: 'Your University Name',
  degree: 'B.Tech in Computer Science & Engineering (AI & ML)',
  yearOfStudy: '1st Year',
  resumeUrl: '#', // Replace with your actual resume URL
  profileImage: '', // Replace with your photo URL
};

// ---- Social Links ----
export const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/yourusername', icon: Github },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: Linkedin },
  { name: 'Email', url: 'mailto:your.email@example.com', icon: Mail },
  { name: 'Instagram', url: 'https://instagram.com/yourusername', icon: Instagram },
];

// ---- Navigation ----
export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];

// ---- About ----
export const aboutData = {
  intro:
    "I'm a first-year Computer Science student specializing in AI & Machine Learning. I believe in learning by building — every project, every experiment, and every line of code is a step toward becoming a better engineer.",
  approach:
    "I approach technology with curiosity and creativity. I don't just learn concepts — I build things with them. From web applications to AI experiments, I love turning ideas into working products.",
  currentGoals: [
    'Master Data Structures & Algorithms',
    'Build full-stack web applications',
    'Explore machine learning and AI',
    'Contribute to open source projects',
    'Participate in hackathons and competitions',
  ],
  currentlyExploring: [
    'Artificial Intelligence',
    'Web Development',
    'Python',
    'Data Structures & Algorithms',
    'Open Source',
  ],
};

// ---- Skills ----
export interface Skill {
  name: string;
  icon?: string; // emoji or URL
  category: string;
}

export const skillCategories = [
  { id: 'languages', label: 'Programming Languages', icon: Code2 },
  { id: 'frontend', label: 'Frontend Development', icon: Globe },
  { id: 'backend', label: 'Backend Development', icon: Code2 },
  { id: 'ai-ml', label: 'AI & Machine Learning', icon: Brain },
  { id: 'tools', label: 'Developer Tools', icon: Wrench },
  { id: 'learning', label: 'Currently Learning', icon: BookOpen },
];

export const skills: Skill[] = [
  // Programming Languages
  { name: 'Python', icon: '🐍', category: 'languages' },
  { name: 'JavaScript', icon: '⚡', category: 'languages' },
  { name: 'TypeScript', icon: '🔷', category: 'languages' },
  { name: 'C/C++', icon: '⚙️', category: 'languages' },
  { name: 'Java', icon: '☕', category: 'languages' },

  // Frontend
  { name: 'React', icon: '⚛️', category: 'frontend' },
  { name: 'HTML5', icon: '🌐', category: 'frontend' },
  { name: 'CSS3', icon: '🎨', category: 'frontend' },
  { name: 'Tailwind CSS', icon: '💨', category: 'frontend' },

  // Backend
  { name: 'Node.js', icon: '🟢', category: 'backend' },
  { name: 'Express.js', icon: '🚂', category: 'backend' },

  // AI & ML
  { name: 'Machine Learning', icon: '🤖', category: 'ai-ml' },
  { name: 'NumPy', icon: '🔢', category: 'ai-ml' },
  { name: 'Pandas', icon: '🐼', category: 'ai-ml' },

  // Tools
  { name: 'Git & GitHub', icon: '🔀', category: 'tools' },
  { name: 'VS Code', icon: '💻', category: 'tools' },
  { name: 'Linux', icon: '🐧', category: 'tools' },

  // Learning
  { name: 'Next.js', icon: '▲', category: 'learning' },
  { name: 'Docker', icon: '🐳', category: 'learning' },
  { name: 'TensorFlow', icon: '🧠', category: 'learning' },
];

// ---- Projects ----
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  image?: string; // URL to preview image
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  status: 'completed' | 'in-progress' | 'planned';
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Project One',
    description:
      'A brief description of your first project. Replace this with your actual project details.',
    longDescription:
      'A more detailed description of the project, its goals, the challenges you faced, and what you learned from building it.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    githubUrl: '#',
    liveUrl: '#',
    featured: true,
    status: 'completed',
  },
  {
    id: 'project-2',
    title: 'Project Two',
    description:
      'A brief description of your second project. Replace this with your actual project details.',
    longDescription:
      'A more detailed description of the project, its goals, the challenges you faced, and what you learned from building it.',
    techStack: ['Python', 'Machine Learning', 'Flask'],
    githubUrl: '#',
    featured: true,
    status: 'completed',
  },
  {
    id: 'project-3',
    title: 'Project Three',
    description:
      'A brief description of your third project. Replace this with your actual project details.',
    longDescription:
      'A more detailed description of the project, its goals, the challenges you faced, and what you learned from building it.',
    techStack: ['Node.js', 'Express', 'MongoDB'],
    githubUrl: '#',
    liveUrl: '#',
    featured: false,
    status: 'in-progress',
  },
];

// ---- Journey / Timeline ----
export interface JourneyItem {
  id: string;
  date: string;
  title: string;
  description: string;
  icon: string; // emoji
  type: 'education' | 'project' | 'achievement' | 'learning';
}

export const journeyItems: JourneyItem[] = [
  {
    id: 'j1',
    date: '2024',
    title: 'Started B.Tech Journey',
    description:
      'Began my Computer Science & Engineering degree with a specialization in AI & Machine Learning.',
    icon: '🎓',
    type: 'education',
  },
  {
    id: 'j2',
    date: '2024',
    title: 'First Lines of Code',
    description:
      'Wrote my first programs in Python and C, discovering the joy of problem-solving through code.',
    icon: '💻',
    type: 'learning',
  },
  {
    id: 'j3',
    date: '2024',
    title: 'Exploring Web Development',
    description:
      'Built my first websites using HTML, CSS, and JavaScript. Fell in love with creating interactive experiences.',
    icon: '🌐',
    type: 'learning',
  },
  {
    id: 'j4',
    date: '2025',
    title: 'Diving into React & Modern Tools',
    description:
      'Started building more complex applications with React, TypeScript, and modern development tools.',
    icon: '⚛️',
    type: 'project',
  },
  {
    id: 'j5',
    date: '2025',
    title: 'AI & Machine Learning Exploration',
    description:
      'Began exploring artificial intelligence and machine learning concepts, building first ML models.',
    icon: '🤖',
    type: 'learning',
  },
  {
    id: 'j6',
    date: '2025',
    title: 'Open Source & Community',
    description:
      'Started contributing to open-source projects and engaging with the developer community.',
    icon: '🌟',
    type: 'achievement',
  },
];

// ---- Beyond Academics ----
export interface BeyondItem {
  title: string;
  description: string;
  icon: string;
}

export const beyondAcademics: BeyondItem[] = [
  {
    title: 'Hackathons',
    description:
      'Participating in hackathons to challenge myself, collaborate with others, and build under pressure.',
    icon: '🏆',
  },
  {
    title: 'Open Source',
    description:
      'Contributing to open-source projects and learning from the global developer community.',
    icon: '🌍',
  },
  {
    title: 'AI Experiments',
    description:
      'Experimenting with AI tools and models to understand the future of technology.',
    icon: '🧪',
  },
  {
    title: 'Side Projects',
    description:
      'Building side projects to explore new ideas and technologies beyond the classroom.',
    icon: '🚀',
  },
  {
    title: 'Tech Exploration',
    description:
      'Staying up to date with emerging technologies and development trends.',
    icon: '🔭',
  },
  {
    title: 'Learning by Doing',
    description:
      'Believing that the best way to learn is through hands-on implementation and real projects.',
    icon: '🛠️',
  },
];

// ---- GitHub ----
export const githubData = {
  username: 'yourusername', // Replace with your GitHub username
  profileUrl: 'https://github.com/yourusername',
};

