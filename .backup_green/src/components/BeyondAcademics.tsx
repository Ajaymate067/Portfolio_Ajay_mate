import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';

export default function BeyondAcademics() {
  return (
    <section id="beyond" className="section-padding bg-white">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          label="Beyond the Classroom"
          title="More Than Just Academics"
          subtitle="What drives me outside of regular coursework."
        />
        <p className="text-lg text-text-secondary max-w-3xl">
          {/* Placeholder – replace with your own content */}
          I enjoy hackathons, open‑source contributions, AI experiments, and building side projects.
        </p>
      </div>
    </section>
  );
}
