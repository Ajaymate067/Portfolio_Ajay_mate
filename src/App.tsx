import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Journey from '@/components/Journey';
import BeyondAcademics from '@/components/BeyondAcademics';
import GitHubActivity from '@/components/GitHubActivity';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ui/ScrollProgress';

export default function App() {
  return (
    <div className="font-sans text-text-primary bg-primary-bg overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <main className="min-h-screen">
        <section id="home" className="relative min-h-screen">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="journey">
          <Journey />
        </section>
        <section id="beyond">
          <BeyondAcademics />
        </section>
        <section id="github">
          <GitHubActivity />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

