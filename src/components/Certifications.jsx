import React from 'react';
import { Award, ExternalLink, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';
import { certificationCategories } from '../data/certifications';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative bg-slate-50 dark:bg-dark-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider uppercase text-cyan-600 dark:text-cyan-400">
            <Award className="w-4 h-4" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Certifications & Training
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Formal technical certifications across AI models, enterprise backend frameworks, IoT networking, and software testing.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mx-auto" />
        </div>

        {/* Certification Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificationCategories.map((cat) => {
            const isAnthropic = cat.issuer.includes('Anthropic');

            return (
              <div
                key={cat.issuer}
                className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isAnthropic
                    ? 'bg-white dark:bg-gradient-to-b dark:from-dark-800 dark:to-dark-850 border border-amber-300 dark:border-amber-500/30 shadow-md dark:shadow-xl'
                    : 'bg-white dark:bg-dark-850 border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-lg hover:border-slate-300 dark:hover:border-white/20'
                }`}
              >
                <div>
                  {/* Issuer Header */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200 dark:border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-dark-800 border border-slate-200 dark:border-white/10 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shadow-xs">
                        {isAnthropic ? (
                          <Sparkles className="w-5 h-5 text-amber-500" />
                        ) : (
                          <ShieldCheck className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                          {cat.issuer}
                        </h3>
                        <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
                          {cat.issuerLogoText}
                        </p>
                      </div>
                    </div>

                    <span className={`px-3 py-1 rounded-full text-xs font-mono font-medium border bg-gradient-to-r ${cat.badgeColor}`}>
                      {cat.certifications.length} {cat.certifications.length === 1 ? 'Credential' : 'Credentials'}
                    </span>
                  </div>

                  {/* Certifications List */}
                  <div className="space-y-4">
                    {cat.certifications.map((cert) => (
                      <div
                        key={cert.title}
                        className="p-4 rounded-2xl bg-slate-50 dark:bg-dark-800/80 border border-slate-200/80 dark:border-white/5 hover:border-cyan-500/40 transition-all group shadow-xs"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="space-y-1">
                            <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0" />
                              <span>{cert.title}</span>
                            </h4>
                            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pl-6">
                              {cert.description}
                            </p>
                          </div>

                          {/* Verification URL Button */}
                          <div className="flex-shrink-0">
                            {cert.verifyUrl ? (
                              <a
                                href={cert.verifyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-dark-750 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/10 text-[11px] font-mono transition-colors"
                              >
                                <span>Verify</span>
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            ) : (
                              <div
                                title="Add your credential verification link in src/data/certifications.js"
                                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-200/60 dark:bg-dark-900/60 text-slate-500 border border-dashed border-slate-300 dark:border-white/10 text-[10px] font-mono cursor-default"
                              >
                                <span>Verify URL</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/5 text-[11px] font-mono text-slate-500 flex items-center justify-between">
                  <span>Authorized Certificate Track</span>
                  <span className="text-slate-600 dark:text-slate-400">Resume Verified</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
