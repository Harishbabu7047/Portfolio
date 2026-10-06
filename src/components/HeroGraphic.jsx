import React, { useState } from 'react';
import { Database, Cpu, Layers, Binary, Zap, Search } from 'lucide-react';

export default function HeroGraphic() {
  const [activeNode, setActiveNode] = useState(null);

  const nodes = [
    {
      id: 'rag',
      label: 'RAG Pipeline',
      sub: 'Retrieval & Context',
      icon: Layers,
      color: 'from-cyan-500 to-blue-600',
      x: '50%',
      y: '48%',
      details: 'Dense vector retrieval + contextual prompt synthesis'
    },
    {
      id: 'vector',
      label: 'FAISS / Vectors',
      sub: 'Vector Index',
      icon: Database,
      color: 'from-indigo-500 to-purple-600',
      x: '18%',
      y: '25%',
      details: 'High-speed approximate nearest neighbor similarity'
    },
    {
      id: 'llm',
      label: 'LLM Orchestration',
      sub: 'LiteLLM / API',
      icon: Cpu,
      color: 'from-violet-500 to-fuchsia-600',
      x: '82%',
      y: '25%',
      details: 'Context-grounded prompt completion & generation'
    },
    {
      id: 'fastapi',
      label: 'FastAPI Backend',
      sub: 'REST Endpoints',
      icon: Zap,
      color: 'from-emerald-500 to-teal-600',
      x: '20%',
      y: '75%',
      details: 'High-performance asynchronous Python API service'
    },
    {
      id: 'search',
      label: 'Semantic Search',
      sub: 'Sentence Embeddings',
      icon: Search,
      color: 'from-amber-500 to-orange-600',
      x: '80%',
      y: '75%',
      details: 'Contextual similarity over dense document chunks'
    }
  ];

  return (
    <div className="relative w-full aspect-square max-w-[500px] mx-auto select-none">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/15 via-indigo-500/10 to-purple-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Orbit Rings */}
      <div className="absolute inset-4 rounded-full border border-cyan-500/20 dark:border-cyan-500/15 animate-[spin_60s_linear_infinite] pointer-events-none" />
      <div className="absolute inset-16 rounded-full border border-dashed border-indigo-500/25 dark:border-indigo-500/20 animate-[spin_40s_linear_infinite_reverse] pointer-events-none" />
      <div className="absolute inset-28 rounded-full border border-slate-300 dark:border-white/5 pointer-events-none" />

      {/* SVG Connecting Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 500">
        <defs>
          <linearGradient id="cyanLine" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0891b2" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="purpleLine" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#0891b2" stopOpacity="0.5" />
          </linearGradient>
        </defs>

        {/* Lines between center (250, 240) and peripheral nodes */}
        <line x1="250" y1="240" x2="90" y2="125" stroke="url(#cyanLine)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-pulse" />
        <line x1="250" y1="240" x2="410" y2="125" stroke="url(#purpleLine)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-pulse" />
        <line x1="250" y1="240" x2="100" y2="375" stroke="url(#cyanLine)" strokeWidth="1.5" strokeDasharray="4 4" />
        <line x1="250" y1="240" x2="400" y2="375" stroke="url(#purpleLine)" strokeWidth="1.5" strokeDasharray="4 4" />

        {/* Cross interconnects */}
        <line x1="90" y1="125" x2="100" y2="375" stroke="rgba(100,116,139,0.2)" strokeWidth="1" />
        <line x1="410" y1="125" x2="400" y2="375" stroke="rgba(100,116,139,0.2)" strokeWidth="1" />
      </svg>

      {/* Nodes */}
      {nodes.map((node) => {
        const Icon = node.icon;
        const isCenter = node.id === 'rag';
        const isHovered = activeNode === node.id;

        return (
          <div
            key={node.id}
            onMouseEnter={() => setActiveNode(node.id)}
            onMouseLeave={() => setActiveNode(null)}
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ${
              isCenter ? 'z-20' : 'z-10'
            }`}
            style={{ left: node.x, top: node.y }}
          >
            <div
              className={`group flex items-center gap-2.5 p-2 sm:p-2.5 rounded-2xl border backdrop-blur-md transition-all duration-300 ${
                isCenter
                  ? 'bg-white/95 dark:bg-dark-850/90 border-cyan-500 shadow-xl shadow-cyan-500/20 scale-105 hover:scale-110'
                  : isHovered
                  ? 'bg-white dark:bg-dark-800/95 border-cyan-500 shadow-lg shadow-cyan-500/20 scale-105'
                  : 'bg-white/90 dark:bg-dark-850/80 border-slate-200 dark:border-white/10 hover:border-cyan-500/40 dark:hover:border-white/30 shadow-md shadow-slate-900/5 dark:shadow-black/40'
              }`}
            >
              <div
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br ${node.color} flex items-center justify-center text-white shadow-md flex-shrink-0 transition-transform duration-300 group-hover:scale-105`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <div className="text-left pr-1 hidden sm:block">
                <div className="text-xs font-semibold text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                  {node.label}
                </div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 font-mono tracking-tight">
                  {node.sub}
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Dynamic Inspector Panel */}
      <div className="absolute bottom-1 left-4 right-4 bg-white/95 dark:bg-dark-850/90 border border-slate-200 dark:border-white/10 rounded-xl p-2.5 text-center backdrop-blur-md transition-all duration-200 shadow-sm dark:shadow-none">
        <div className="flex items-center justify-center gap-2 text-xs text-slate-700 dark:text-slate-300">
          <Binary className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
          <span className="font-mono text-cyan-700 dark:text-cyan-300 font-semibold">
            {activeNode
              ? nodes.find((n) => n.id === activeNode)?.label
              : 'Interactive AI & RAG Architecture'}
          </span>
          <span className="text-slate-400">|</span>
          <span className="text-slate-600 dark:text-slate-400 text-[11px] truncate">
            {activeNode
              ? nodes.find((n) => n.id === activeNode)?.details
              : 'Hover nodes to inspect pipeline components'}
          </span>
        </div>
      </div>
    </div>
  );
}
