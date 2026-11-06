import React, { useState } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import { personalInfo, socialLinks } from '@/data/portfolio';
import { Mail, Copy, Check, ArrowUpRight, ArrowUp } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="section-wrapper-editorial bg-[#080808] border-b border-[#292629]">
      <div className="mx-auto max-w-[1280px]">
        {/* Section Heading */}
        <SectionHeading
          idPrefix="04"
          label="CONTACT"
          title="LET'S BUILD SOMETHING."
          subtitle="Open for internships, collaborative engineering projects, and technical discussions. Direct contact channels below."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Contact Editorial Card */}
          <div className="lg:col-span-8 editorial-panel p-6 sm:p-9 flex flex-col justify-between">
            <div className="corner-bracket corner-bracket-tl" />
            <div className="corner-bracket corner-bracket-tr" />
            <div className="corner-bracket corner-bracket-bl" />
            <div className="corner-bracket corner-bracket-br" />

            <div>
              <div className="flex items-center gap-2 mb-4 font-mono text-xs text-[#FF453A] uppercase tracking-wider">
                <span className="w-1.5 h-1.5 bg-[#FF453A]" />
                <span>DIRECT CORRESPONDENCE</span>
              </div>

              <h3
                className="font-display font-extrabold text-3xl sm:text-4xl text-[#F2F0EB] mb-4 uppercase tracking-tight"
                style={{ fontFamily: "'Barlow Condensed', 'Anton', sans-serif" }}
              >
                AVAILABLE FOR ENGINEERING OPPORTUNITIES.
              </h3>

              <p className="text-sm sm:text-base text-[#AAA6A3] leading-relaxed mb-8 max-w-xl">
                Whether you have an internship position, an open source project, or wish to talk
                about algorithmic problem solving and system development, feel free to reach out.
              </p>
            </div>

            {/* Email Action Box */}
            <div className="p-4 sm:p-5 bg-[#080808] border border-[#292629] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="flex items-center justify-center w-10 h-10 bg-[#111113] border border-[#292629] text-[#FF453A]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono text-[10px] text-[#AAA6A3] uppercase tracking-wider">
                    PRIMARY INBOX
                  </div>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="font-mono text-sm sm:text-base font-semibold text-[#F2F0EB] hover:text-[#FF453A] transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                type="button"
                className="btn-editorial-secondary text-xs py-2.5 px-4 flex items-center justify-center gap-2 self-start sm:self-auto"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#FF453A]" />
                    <span className="text-[#FF453A]">Copied</span>
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

          {/* Side Channels & Navigation Box */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-4">
            <div className="editorial-panel p-6 sm:p-7 flex-1">
              <div className="corner-bracket corner-bracket-tl" />
              <div className="corner-bracket corner-bracket-tr" />
              <div className="corner-bracket corner-bracket-bl" />
              <div className="corner-bracket corner-bracket-br" />

              <div className="font-mono text-xs text-[#FF453A] mb-4 uppercase tracking-wider flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#FF453A]" />
                <span>CHANNELS</span>
              </div>

              <div className="space-y-2.5">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3.5 bg-[#080808] border border-[#292629] hover:border-[#FF453A] text-[#F2F0EB] hover:text-[#FF453A] transition-all font-mono text-xs uppercase tracking-wider"
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className="w-4 h-4 text-[#FF453A]" />
                        <span>{link.name}</span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-[#AAA6A3]" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Back to Top Quick Action */}
            <button
              onClick={scrollToTop}
              className="w-full py-4 px-5 bg-[#111113] border border-[#292629] hover:border-[#FF453A] text-[#F2F0EB] hover:text-[#FF453A] flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-wider transition-all"
            >
              <ArrowUp className="w-4 h-4 text-[#FF453A]" />
              <span>Back To Top</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
