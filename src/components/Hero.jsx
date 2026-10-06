import React, { useState } from 'react';
import { 
  ArrowRight, 
  Download, 
  Github, 
  Linkedin, 
  Mail, 
  MapPin,
  Terminal,
  ExternalLink,
  Copy,
  Check,
  Phone,
  MessageCircle
} from 'lucide-react';
import { personalConfig } from '../config';
import HeroGraphic from './HeroGraphic';

export default function Hero() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalConfig.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 dark:bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-20 w-[400px] h-[400px] bg-indigo-500/10 dark:bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-60 dark:opacity-40 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Information & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status & Location Pill */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100/90 dark:bg-cyan-950/60 border border-cyan-300 dark:border-cyan-800/60 text-cyan-800 dark:text-cyan-300 text-xs font-medium shadow-sm">
                <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
                <span>{personalConfig.availabilityStatus}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-dark-800/80 border border-slate-200 dark:border-white/5 text-slate-600 dark:text-slate-400 text-xs shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                <span>{personalConfig.location}</span>
              </div>
            </div>

            {/* Main Title & Role */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-cyan-600 dark:text-cyan-400 font-semibold">
                <Terminal className="w-4 h-4" />
                <span>Portfolio & Engineering Work</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                {personalConfig.name}
              </h1>
              <p className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-600 dark:from-cyan-400 dark:via-sky-300 dark:to-indigo-300 bg-clip-text text-transparent">
                {personalConfig.roleTitle}
              </p>
            </div>

            {/* Hero Description */}
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
              "{personalConfig.heroDescription}"
            </p>

            {/* Quick Skills Pill Bar */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {['RAG Systems', 'FastAPI', 'Python', 'FAISS', 'LiteLLM', 'REST APIs', 'AI Automation'].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-lg bg-white dark:bg-dark-800 border border-slate-200 dark:border-white/5 text-[11px] font-mono text-slate-700 dark:text-slate-300 hover:border-cyan-500 hover:text-cyan-600 dark:hover:border-cyan-500/40 dark:hover:text-cyan-300 transition-colors shadow-xs"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:from-cyan-400 hover:to-blue-500 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalConfig.resumePath}
                download="Harishbabu_M_GenAI.pdf"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-dark-800 border border-slate-200 dark:border-white/10 hover:border-cyan-500 dark:hover:border-cyan-500/40 text-slate-800 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-white font-semibold text-sm transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm"
              >
                <Download className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social / Direct Connect Bar with Live Links */}
            <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center gap-3">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">Connect:</span>
              
              {/* GitHub Button (Live Link) */}
              <a
                href={personalConfig.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white dark:bg-dark-800 border border-slate-200 dark:border-white/10 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-cyan-500/50 shadow-sm transition-all"
              >
                <Github className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 text-slate-400 dark:text-slate-500" />
              </a>

              {/* LinkedIn Button (Live Link) */}
              <a
                href={personalConfig.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white dark:bg-dark-800 border border-slate-200 dark:border-white/10 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:border-blue-400/50 shadow-sm transition-all"
              >
                <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-slate-400 dark:text-slate-500" />
              </a>

              {/* WhatsApp Button */}
              <a
                href={personalConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white dark:bg-dark-800 border border-slate-200 dark:border-white/10 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-white hover:border-emerald-500/50 shadow-sm transition-all"
              >
                <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>WhatsApp</span>
                <ExternalLink className="w-3 h-3 text-slate-400 dark:text-slate-500" />
              </a>

              {/* Email Mailto & Copy */}
              <div className="inline-flex items-center rounded-lg bg-white dark:bg-dark-800 border border-slate-200 dark:border-white/10 overflow-hidden text-xs shadow-sm">
                <a
                  href={`mailto:${personalConfig.email}`}
                  className="inline-flex items-center gap-2 px-3 py-1.5 font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-dark-750 transition-colors"
                >
                  <Mail className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>{personalConfig.email}</span>
                </a>
                <button
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  className="px-2.5 py-1.5 border-l border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-dark-750 transition-colors"
                >
                  {copiedEmail ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: AI Architecture Interactive Graphic */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <HeroGraphic />
          </div>

        </div>
      </div>
    </section>
  );
}
