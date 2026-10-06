import React from 'react';
import { 
  Github, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Workflow,
  Bot
} from 'lucide-react';
import { personalConfig } from '../config';

export default function ProjectCard({ project, onOpenModal }) {
  const isRag = project.id === 'rag-construction';
  const isAutomation = project.id === 'social-media-automation';

  return (
    <div
      className={`group relative rounded-3xl p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between ${
        isRag
          ? 'bg-gradient-to-b from-white to-cyan-50/40 dark:from-dark-800 dark:to-dark-850 border border-cyan-300 dark:border-cyan-500/35 shadow-md dark:shadow-xl dark:shadow-cyan-500/10 hover:border-cyan-500 dark:hover:border-cyan-400 hover:shadow-lg dark:hover:shadow-cyan-500/20'
          : isAutomation
          ? 'bg-gradient-to-b from-white to-emerald-50/40 dark:from-dark-800 dark:to-dark-850 border border-emerald-300 dark:border-emerald-500/35 shadow-md dark:shadow-xl dark:shadow-emerald-500/10 hover:border-emerald-500 dark:hover:border-emerald-400 hover:shadow-lg dark:hover:shadow-emerald-500/20'
          : 'bg-white dark:bg-dark-850 border border-slate-200 dark:border-white/10 hover:border-cyan-400 dark:hover:border-white/25 hover:bg-slate-50/60 dark:hover:bg-dark-800/90 shadow-sm dark:shadow-lg'
      }`}
    >
      {/* Top Banner & Badge */}
      <div>
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            {isRag ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-500/15 border border-cyan-300 dark:border-cyan-500/30 text-cyan-800 dark:text-cyan-300 text-xs font-mono font-medium">
                <Sparkles className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                Featured GenAI Project
              </span>
            ) : isAutomation ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-500/15 border border-emerald-300 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-xs font-mono font-medium">
                <Workflow className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                AI Automation Workflow
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-dark-750 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 text-xs font-mono">
                Software Engineering
              </span>
            )}
          </div>
          <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
            {project.technologies.slice(0, 2).join(' • ')}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors mb-2 tracking-tight">
          {project.title}
        </h3>

        {/* Tagline / Subtitle */}
        <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-4 line-clamp-1">
          {project.tagline}
        </p>

        {/* Description */}
        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-6 font-normal">
          "{project.description}"
        </p>

        {/* Technology Pills */}
        <div className="mb-6">
          <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
            Technologies:
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-dark-900 border border-slate-200 dark:border-white/5 text-[11px] font-mono text-slate-700 dark:text-slate-300 group-hover:border-cyan-500/30 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Features Checklist */}
        <div className="mb-6 space-y-2">
          <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
            Key Highlights:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {project.features.slice(0, 4).map((feature) => (
              <div key={feature} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 flex-shrink-0" />
                <span className="truncate">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pipeline Preview */}
        {isRag && (
          <div className="mb-6 p-3 rounded-xl bg-slate-100/90 dark:bg-dark-900/80 border border-cyan-300 dark:border-cyan-500/20 text-xs font-mono text-slate-700 dark:text-slate-300">
            <div className="flex items-center gap-1.5 text-cyan-700 dark:text-cyan-300 font-semibold mb-1 text-[11px]">
              <Workflow className="w-3.5 h-3.5" />
              <span>RAG Pipeline Overview:</span>
            </div>
            <div className="text-[10px] text-slate-600 dark:text-slate-400 truncate">
              Documents → Chunking → Embeddings → FAISS → FastAPI → LLM
            </div>
          </div>
        )}

        {isAutomation && (
          <div className="mb-6 p-3 rounded-xl bg-slate-100/90 dark:bg-dark-900/80 border border-emerald-300 dark:border-emerald-500/20 text-xs font-mono text-slate-700 dark:text-slate-300">
            <div className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-300 font-semibold mb-1 text-[11px]">
              <Bot className="w-3.5 h-3.5" />
              <span>n8n Workflow Execution:</span>
            </div>
            <div className="text-[10px] text-slate-600 dark:text-slate-400 truncate">
              Telegram Brief → Gemini AI → Google Sheets → Two-Way APPROVE
            </div>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-3">
        <button
          onClick={() => onOpenModal(project)}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-400/40 dark:border-cyan-500/30 text-cyan-700 dark:text-cyan-300 hover:text-cyan-800 dark:hover:text-cyan-200 text-xs font-semibold transition-all group-hover:border-cyan-500 shadow-xs"
        >
          <Layers className="w-3.5 h-3.5" />
          <span>{isRag || isAutomation ? 'View Architecture & Case Study' : 'View System Details'}</span>
          <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
        </button>

        <a
          href={project.githubRepoUrl || personalConfig.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 dark:bg-dark-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/10 text-xs font-medium transition-colors shadow-xs"
        >
          <Github className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
          <span>GitHub</span>
        </a>
      </div>
    </div>
  );
}
