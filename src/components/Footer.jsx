import React from 'react';
import { Terminal, ArrowUp } from 'lucide-react';
import { personalConfig } from '../config';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-dark-900 border-t border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 py-12 relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200/80 dark:border-white/5">
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-slate-900 dark:text-white text-base">
                {personalConfig.name}
              </span>
              <span className="block text-xs font-mono text-cyan-700 dark:text-cyan-400">
                {personalConfig.roleTitle}
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium">
            <a href="#home" className="hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors">Home</a>
            <a href="#about" className="hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors">Projects</a>
            <a href="#education" className="hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors">Education</a>
            <a href="#certifications" className="hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors">Certifications</a>
            <a href="#contact" className="hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors">Contact</a>
            <a 
              href={personalConfig.resumePath} 
              download="Harishbabu_M_GenAI.pdf"
              className="text-cyan-700 dark:text-cyan-400 hover:underline font-mono transition-colors"
            >
              Resume PDF
            </a>
          </nav>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-dark-800 dark:hover:bg-dark-750 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/10 transition-colors group shadow-xs"
            aria-label="Back to top"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} {personalConfig.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Built with React, Vite & Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
