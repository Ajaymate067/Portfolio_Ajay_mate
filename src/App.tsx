import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ui/ScrollProgress';
import BackgroundEffects from '@/components/ui/BackgroundEffects';
import { EffectsProvider } from '@/context/EffectsContext';

export default function App() {
  return (
    <EffectsProvider>
      <div className="font-sans text-[#F2F0EB] bg-[#080808] min-h-screen selection:bg-[#FF453A] selection:text-white overflow-x-hidden relative">
        {/* Top Scroll Indicator in Vivid Red */}
        <ScrollProgress />

        {/* Subtle Background Hacker Canvas, Charcoal Grid & Atmospheric Lighting */}
        <BackgroundEffects />

        {/* Global Sticky Navigation Header with FX Toggle */}
        <Navbar />

        {/* Main Editorial Sections */}
        <main id="main-content" className="relative z-10">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>

        {/* Minimalist Editorial Footer */}
        <Footer />
      </div>
    </EffectsProvider>
  );
}
