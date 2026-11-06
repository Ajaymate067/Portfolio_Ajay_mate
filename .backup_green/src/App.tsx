import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ui/ScrollProgress';
import { EffectsProvider } from '@/context/EffectsContext';

export default function App() {
  return (
    <EffectsProvider>
      <div className="font-sans text-[#E8F0EA] bg-[#070B09] min-h-screen selection:bg-[#68F795]/20 selection:text-[#68F795] overflow-x-hidden">
        {/* Top Scroll Indicator */}
        <ScrollProgress />

        {/* Global Navigation Header */}
        <Navbar />

        {/* Main Sections */}
        <main id="main-content">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>

        {/* Command Centre Footer */}
        <Footer />
      </div>
    </EffectsProvider>
  );
}
