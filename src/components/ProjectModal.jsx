import React, { useEffect } from 'react';
import { 
  X, 
  Github, 
  Layers, 
  Cpu, 
  CheckCircle2, 
  ExternalLink,
  Workflow,
  Sparkles
} from 'lucide-react';
import { personalConfig } from '../config';

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const isRag = project.id === 'rag-construction';
  const isAutomation = project.id === 'social-media-automation';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div 
        className="relative bg-white dark:bg-dark-900 border border-slate-200 dark:border-white/10 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl z-10 my-8 text-left transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Banner */}
        <div className="sticky top-0 bg-white/95 dark:bg-dark-900/95 backdrop-blur-md border-b border-slate-200 dark:border-white/10 px-6 sm:px-8 py-5 flex items-center justify-between z-20">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-500"></span>
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-semibold">
              Project Architecture & Case Study
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-dark-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white dark:hover:bg-dark-750 transition-colors border border-slate-200 dark:border-white/5"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Title & Overview */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-2">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-cyan-600 dark:text-cyan-300 font-medium mb-4">
              {project.tagline}
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed bg-slate-100 dark:bg-dark-850 p-4 rounded-2xl border border-slate-200 dark:border-white/5">
              "{project.description}"
            </p>
          </div>

          {/* Technologies Used */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-dark-800 border border-slate-200 dark:border-cyan-500/20 text-xs font-mono text-cyan-800 dark:text-cyan-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-slate-100 dark:bg-dark-850 border border-slate-200 dark:border-white/5 space-y-2">
              <div className="text-xs font-mono font-semibold text-rose-600 dark:text-rose-400 uppercase tracking-wider flex items-center gap-2">
                <span>Problem Statement</span>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.caseStudy.problem}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-100 dark:bg-dark-850 border border-slate-200 dark:border-white/5 space-y-2">
              <div className="text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                <span>Engineered Solution</span>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.caseStudy.solution}
              </p>
            </div>
          </div>

          {/* Architecture Pipeline Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                <span>System Architecture & Pipeline Flow</span>
              </h3>
              {isRag ? (
                <span className="text-xs font-mono text-cyan-800 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-950/80 px-2.5 py-1 rounded-full border border-cyan-300 dark:border-cyan-800">
                  Full RAG Pipeline
                </span>
              ) : isAutomation ? (
                <span className="text-xs font-mono text-emerald-800 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-300 dark:border-emerald-800">
                  Two-Way n8n Workflow
                </span>
              ) : null}
            </div>

            {/* Architecture Steps Flow */}
            <div className="p-6 rounded-2xl bg-slate-100/80 dark:bg-dark-850/90 border border-slate-200 dark:border-white/10 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.architectureSteps.map((stepItem, idx) => (
                  <div
                    key={stepItem.title}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-white dark:bg-dark-800/80 border border-slate-200 dark:border-white/5 hover:border-cyan-500/30 transition-colors shadow-xs"
                  >
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-cyan-100 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-300 dark:border-cyan-500/20 flex-shrink-0">
                      {stepItem.step}
                    </span>
                    <div className="space-y-0.5">
                      <div className="text-xs font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                        {stepItem.title}
                        {idx < project.architectureSteps.length - 1 && (
                          <span className="text-cyan-500 text-xs">→</span>
                        )}
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {stepItem.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* RAG Sequential Execution Sequence */}
              {isRag && (
                <div className="mt-4 pt-4 border-t border-slate-200 dark:border-white/5">
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wider">
                    Sequential RAG Execution Sequence:
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono text-slate-700 dark:text-slate-300">
                    <span className="bg-white dark:bg-dark-800 px-2 py-1 rounded border border-slate-200 dark:border-white/10 text-cyan-700 dark:text-cyan-300 font-medium">Construction Documents</span>
                    <span className="text-cyan-500">↓</span>
                    <span className="bg-white dark:bg-dark-800 px-2 py-1 rounded border border-slate-200 dark:border-white/10">Document Processing</span>
                    <span className="text-cyan-500">↓</span>
                    <span className="bg-white dark:bg-dark-800 px-2 py-1 rounded border border-slate-200 dark:border-white/10">Text Chunking</span>
                    <span className="text-cyan-500">↓</span>
                    <span className="bg-white dark:bg-dark-800 px-2 py-1 rounded border border-slate-200 dark:border-white/10">Sentence Transformers</span>
                    <span className="text-cyan-500">↓</span>
                    <span className="bg-white dark:bg-dark-800 px-2 py-1 rounded border border-slate-200 dark:border-white/10 text-indigo-600 dark:text-indigo-300 font-medium">Embeddings</span>
                    <span className="text-cyan-500">↓</span>
                    <span className="bg-white dark:bg-dark-800 px-2 py-1 rounded border border-slate-200 dark:border-white/10 text-cyan-700 dark:text-cyan-300 font-medium">FAISS</span>
                    <span className="text-cyan-500">↓</span>
                    <span className="bg-white dark:bg-dark-800 px-2 py-1 rounded border border-slate-200 dark:border-white/10">Semantic Retrieval</span>
                    <span className="text-cyan-500">↓</span>
                    <span className="bg-white dark:bg-dark-800 px-2 py-1 rounded border border-slate-200 dark:border-white/10 text-emerald-600 dark:text-emerald-300 font-medium">FastAPI</span>
                    <span className="text-cyan-500">↓</span>
                    <span className="bg-white dark:bg-dark-800 px-2 py-1 rounded border border-slate-200 dark:border-white/10 text-purple-600 dark:text-purple-300 font-medium">LLM (LiteLLM)</span>
                    <span className="text-cyan-500">↓</span>
                    <span className="bg-cyan-50 dark:bg-dark-800 px-2 py-1 rounded border border-cyan-400 dark:border-cyan-500/40 text-cyan-700 dark:text-cyan-300 font-semibold">Context-Aware Answer</span>
                  </div>
                </div>
              )}

              {/* n8n Social Automation Execution Sequence */}
              {isAutomation && (
                <div className="mt-4 pt-4 border-t border-slate-200 dark:border-white/5">
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wider">
                    Sequential n8n Two-Way Workflow Execution:
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono text-slate-700 dark:text-slate-300">
                    <span className="bg-white dark:bg-dark-800 px-2 py-1 rounded border border-slate-200 dark:border-white/10 text-emerald-700 dark:text-emerald-300 font-medium">Telegram Brief</span>
                    <span className="text-emerald-500">↓</span>
                    <span className="bg-white dark:bg-dark-800 px-2 py-1 rounded border border-slate-200 dark:border-white/10">Is Reply? Check</span>
                    <span className="text-emerald-500">↓</span>
                    <span className="bg-white dark:bg-dark-800 px-2 py-1 rounded border border-slate-200 dark:border-white/10">Regex Parse & Validate</span>
                    <span className="text-emerald-500">↓</span>
                    <span className="bg-white dark:bg-dark-800 px-2 py-1 rounded border border-slate-200 dark:border-white/10 text-cyan-700 dark:text-cyan-300 font-medium">Gemini 3.6 Flash</span>
                    <span className="text-emerald-500">↓</span>
                    <span className="bg-white dark:bg-dark-800 px-2 py-1 rounded border border-slate-200 dark:border-white/10">Sanitize JSON</span>
                    <span className="text-emerald-500">↓</span>
                    <span className="bg-white dark:bg-dark-800 px-2 py-1 rounded border border-slate-200 dark:border-white/10 text-indigo-700 dark:text-indigo-300 font-medium">Sheets Drafts Log</span>
                    <span className="text-emerald-500">↓</span>
                    <span className="bg-white dark:bg-dark-800 px-2 py-1 rounded border border-slate-200 dark:border-white/10">Telegram Review Preview</span>
                    <span className="text-emerald-500">↓</span>
                    <span className="bg-white dark:bg-dark-800 px-2 py-1 rounded border border-slate-200 dark:border-white/10 text-amber-700 dark:text-amber-300 font-medium">Reply APPROVE</span>
                    <span className="text-emerald-500">↓</span>
                    <span className="bg-emerald-50 dark:bg-dark-800 px-2 py-1 rounded border border-emerald-400 dark:border-emerald-500/40 text-emerald-700 dark:text-emerald-300 font-semibold">Publishing Calendar Sync</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Key Features & Implementation Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                Key Features
              </h3>
              <ul className="space-y-2">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                Implementation Overview
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-100 dark:bg-dark-850 p-4 rounded-xl border border-slate-200 dark:border-white/5">
                {project.caseStudy.implementationOverview}
              </p>
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="pt-6 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <a
                href={project.githubRepoUrl || personalConfig.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-dark-800 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white text-xs font-semibold hover:border-cyan-500 transition-colors shadow-xs"
              >
                <Github className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>View on GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-white dark:text-dark-900 font-semibold text-xs transition-colors shadow-sm"
            >
              Close Case Study
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
