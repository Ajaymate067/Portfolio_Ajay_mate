import React, { useState } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import { personalInfo, socialLinks } from '@/data/portfolio';
import { Mail, Copy, Check, Terminal, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback if clipboard fails
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="section-wrapper bg-[#070B09] border-t border-[#1B291F]">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading
          idPrefix="04."
          label="CONTACT"
          title="Initialize Connection"
          subtitle="I am always open to discussing new projects, technical ideas, or student engineering opportunities."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Contact Terminal Card */}
          <div className="lg:col-span-8 command-panel p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-4 font-mono text-xs text-[#68F795]">
              <Terminal className="w-4 h-4" />
              <span>connect.sh</span>
            </div>

            <h3 className="font-display font-bold text-2xl text-[#E8F0EA] mb-3">
              Let&apos;s build something meaningful together.
            </h3>
            <p className="text-sm sm:text-base text-[#98A79B] leading-relaxed mb-8 max-w-xl">
              Whether you are an engineer looking to collaborate, a mentor with advice, or someone interested in my learning journey, feel free to reach out directly.
            </p>

            {/* Email Action Box */}
            <div className="p-4 sm:p-5 rounded-lg bg-[#0c140f] border border-[#1B291F] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded bg-[#101813] border border-[#1B291F] text-[#68F795]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono text-[11px] text-[#98A79B]">PRIMARY EMAIL</div>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="font-mono text-sm sm:text-base text-[#E8F0EA] hover:text-[#68F795] transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              {/* Copy Email Button */}
              <button
                onClick={handleCopyEmail}
                type="button"
                className="btn-secondary text-xs py-2 px-3.5 flex items-center gap-2"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#68F795]" />
                    <span className="text-[#68F795]">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Side Network Box */}
          <div className="lg:col-span-4 space-y-4">
            <div className="command-panel p-6">
              <div className="font-mono text-xs text-[#68F795] mb-3 uppercase tracking-wider">
                // Public Channels
              </div>
              <p className="text-xs text-[#98A79B] leading-relaxed mb-4">
                Verified public profiles and repositories.
              </p>

              <div className="space-y-2">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded bg-[#0c140f] border border-[#1B291F] hover:border-[#68F795]/40 text-[#E8F0EA] hover:text-[#68F795] transition-all font-mono text-xs"
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className="w-4 h-4 text-[#68F795]" />
                        <span>{link.name}</span>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#647568]" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="p-4 rounded-lg bg-[#101813] border border-[#1B291F] font-mono text-[11px] text-[#647568] flex items-center justify-between">
              <span>RESPONSE TIME</span>
              <span className="text-[#68F795]">&lt; 24 HOURS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
