import React from 'react';
import { 
  Sparkles, 
  BrainCircuit, 
  Search, 
  Server, 
  Workflow, 
  Bot, 
  Layers, 
  GraduationCap, 
  MapPin, 
  CheckCircle2 
} from 'lucide-react';
import { personalConfig } from '../config';

const focusAreaIcons = {
  "Generative AI": Sparkles,
  "RAG Applications": Layers,
  "Backend Development": Server,
  "AI Automation": Workflow,
  "Semantic Search": Search,
  "LLM Applications": Bot
};

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-slate-100/60 dark:bg-dark-850/60 border-y border-slate-200/80 dark:border-white/5 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16 text-center md:text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider uppercase text-cyan-600 dark:text-cyan-400">
            <BrainCircuit className="w-4 h-4" />
            <span>Profile & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mx-auto md:mx-0" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Narrative (Left Column) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-5">
              <p className="text-slate-800 dark:text-slate-200 text-base sm:text-lg leading-relaxed">
                I am an Information Technology undergraduate and aspiring GenAI Engineer with an interest in building AI-driven applications and software solutions. I have hands-on experience with Retrieval-Augmented Generation, document processing, semantic search, backend development, and API integration.
              </p>
              <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed">
                My current focus is on applying technologies such as Python, FastAPI, LangChain, LLMs, vector databases, embeddings, and AI automation to real-world problems.
              </p>

              {/* Profile Pillars */}
              <div className="pt-4 border-t border-slate-200 dark:border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-100 dark:bg-cyan-500/10 border border-cyan-300 dark:border-cyan-500/20 flex items-center justify-center flex-shrink-0 text-cyan-600 dark:text-cyan-400">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-500 dark:text-slate-400">Education Track</div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">B.Tech in IT (2022–2026)</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-300 dark:border-emerald-500/20 flex items-center justify-center flex-shrink-0 text-emerald-600 dark:text-emerald-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-500 dark:text-slate-400">Base Location</div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">{personalConfig.location}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Engineering Philosophy Callout */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-dark-800/80 border border-slate-200 dark:border-white/5 flex items-start gap-3 shadow-xs">
              <CheckCircle2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                <span className="font-semibold text-slate-900 dark:text-white">Practical Engineering Mindset: </span>
                Committed to writing structured backend services, verified vector retrieval mechanisms, and clean reproducible software architectures rather than generic demo wrappers.
              </div>
            </div>
          </div>

          {/* Focus Areas Highlights (Right Column) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                Focus Areas
              </h3>
              <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400/90 bg-cyan-100 dark:bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-300 dark:border-cyan-800/50">
                Core Domains
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
              {personalConfig.focusAreas.map((area) => {
                const IconComponent = focusAreaIcons[area] || Sparkles;
                return (
                  <div
                    key={area}
                    className="p-4 rounded-2xl bg-white dark:bg-dark-800/90 border border-slate-200 dark:border-white/5 hover:border-cyan-500 dark:hover:border-cyan-500/40 hover:bg-slate-50 dark:hover:bg-dark-750 transition-all duration-200 group flex items-center gap-3.5 shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-700 dark:text-cyan-300 group-hover:scale-105 group-hover:border-cyan-500 transition-all flex-shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                        {area}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-normal">
                        Active hands-on exploration & project implementation
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
