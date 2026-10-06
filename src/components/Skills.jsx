import React, { useState } from 'react';
import { 
  Code2, 
  Cpu, 
  Database, 
  Terminal, 
  Server, 
  Workflow, 
  Layers, 
  BookOpen, 
  Sparkles, 
  Users,
  Wrench,
  Globe
} from 'lucide-react';
import { skillCategories } from '../data/skills';

const categoryIcons = {
  "GenAI & LLMs": Sparkles,
  "Backend & APIs": Server,
  "Vector Databases": Layers,
  "AI Automation & APIs": Workflow,
  "Programming Languages": Code2,
  "Web Technologies": Globe,
  "Databases": Database,
  "Developer Tools": Wrench,
  "AI Productivity Tools": Cpu,
  "Core Computer Science": BookOpen,
  "Soft Skills": Users,
};

export default function Skills() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filterTabs = [
    'All',
    'GenAI & LLMs',
    'Backend & APIs',
    'Vector Databases',
    'Languages & Web',
    'Tools & Automation',
    'Core Subjects'
  ];

  const filteredCategories = skillCategories.filter((cat) => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'GenAI & LLMs') return cat.category.includes('GenAI');
    if (selectedFilter === 'Backend & APIs') return cat.category.includes('Backend');
    if (selectedFilter === 'Vector Databases') return cat.category.includes('Vector');
    if (selectedFilter === 'Languages & Web') return cat.category.includes('Programming') || cat.category.includes('Web');
    if (selectedFilter === 'Tools & Automation') return cat.category.includes('Automation') || cat.category.includes('Developer') || cat.category.includes('Productivity');
    if (selectedFilter === 'Core Subjects') return cat.category.includes('Core') || cat.category.includes('Soft');
    return true;
  });

  return (
    <section id="skills" className="py-24 relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider uppercase text-cyan-600 dark:text-cyan-400">
            <Cpu className="w-4 h-4" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills & Competencies
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Categorized technical toolkit spanning Generative AI frameworks, backend services, databases, modern developer tools, and foundational computer science.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mx-auto" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedFilter(tab)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                selectedFilter === tab
                  ? 'bg-cyan-500 text-white font-semibold shadow-md shadow-cyan-500/25 scale-105'
                  : 'bg-white dark:bg-dark-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-dark-750 border border-slate-200 dark:border-white/5 shadow-xs'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((group) => {
            const Icon = categoryIcons[group.category] || Sparkles;
            const isGenAi = group.category.includes('GenAI');

            return (
              <div
                key={group.category}
                className={`rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between ${
                  isGenAi
                    ? 'bg-white dark:bg-gradient-to-b dark:from-dark-800/90 dark:to-dark-850/90 border border-cyan-400/60 dark:border-cyan-500/30 shadow-md dark:shadow-lg dark:shadow-cyan-500/5 hover:border-cyan-500 dark:hover:border-cyan-500/60'
                    : 'bg-white dark:bg-dark-850/80 border border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/20 hover:bg-slate-50 dark:hover:bg-dark-800/80 shadow-xs dark:shadow-md'
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-2.5">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        isGenAi
                          ? 'bg-cyan-100 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-500/40'
                          : 'bg-slate-100 dark:bg-dark-750 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
                        {group.category}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                    {group.description}
                  </p>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-200/80 dark:border-white/5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-200 ${
                        isGenAi
                          ? 'bg-cyan-50 text-cyan-800 dark:bg-cyan-950/40 dark:text-cyan-200 border border-cyan-200 dark:border-cyan-800/50 hover:border-cyan-400'
                          : 'bg-slate-100 dark:bg-dark-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/5 hover:border-cyan-500 dark:hover:border-cyan-500/30 hover:text-cyan-600 dark:hover:text-cyan-300'
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
