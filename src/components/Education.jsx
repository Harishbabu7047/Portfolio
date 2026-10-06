import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen, CheckCircle2, MapPin, School } from 'lucide-react';

export default function Education() {
  const educationHistory = [
    {
      id: "btech",
      level: "Undergraduate Degree",
      degree: "B.Tech – Information Technology",
      institution: "Sri Manakula Vinayagar Engineering College",
      location: "Puducherry, India",
      period: "2022 – 2026",
      status: "Pursuing",
      scoreType: "CGPA",
      score: "8.0 / 10",
      highlights: [
        "DBMS",
        "Operating Systems",
        "Computer Networks",
        "OOPs using Java",
        "Data Structures & Algorithms",
        "Software Engineering"
      ]
    },
    {
      id: "hsc",
      level: "Higher Secondary (12th Standard)",
      degree: "Higher Secondary Certificate (HSC) — Bio-Maths",
      institution: "Siga Higher Secondary School",
      location: "Kappiyampuliyur, Villupuram",
      period: "2020 – 2022",
      status: "Completed",
      scoreType: "Percentage",
      score: "91%",
      highlights: [
        "Mathematics",
        "Biology",
        "Physics",
        "Chemistry"
      ]
    },
    {
      id: "sslc",
      level: "Secondary School (10th Standard)",
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Bonne Nehru Higher Secondary School",
      location: "Thirukkanur, Pondicherry",
      period: "2019 – 2020",
      status: "Completed",
      scoreType: "Percentage",
      score: "90%",
      highlights: [
        "Mathematics",
        "Science",
        "Social Science",
        "English"
      ]
    }
  ];

  return (
    <section id="education" className="py-24 relative bg-slate-100/60 dark:bg-dark-850/50 border-t border-slate-200/80 dark:border-white/5 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider uppercase text-cyan-600 dark:text-cyan-400">
            <GraduationCap className="w-4 h-4" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education History
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Academic foundation spanning undergraduate engineering in Information Technology, higher secondary (Bio-Maths), and secondary school education.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mx-auto" />
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative pl-6 sm:pl-8 border-l-2 border-cyan-500/40 ml-4 sm:ml-6 space-y-10">
            
            {educationHistory.map((item, index) => (
              <div key={item.id} className="relative group">
                {/* Timeline node icon */}
                <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-6 h-6 rounded-full bg-cyan-500 border-4 border-slate-50 dark:border-dark-900 shadow-md shadow-cyan-500/30 flex items-center justify-center transition-transform group-hover:scale-110" />

                <div className="glass-panel p-6 sm:p-8 rounded-3xl hover:border-cyan-500/40 transition-all duration-300 shadow-sm dark:shadow-xl">
                  
                  {/* Top Bar: Level & Status */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-500/20 text-xs font-mono font-semibold">
                        {item.level}
                      </span>
                      <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                        {item.status}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Institution & Degree */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                        {item.degree}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 text-base text-slate-700 dark:text-slate-300 font-medium mt-1">
                        <span className="flex items-center gap-1.5">
                          <School className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                          {item.institution}
                        </span>
                        <span className="text-slate-400 dark:text-slate-500">•</span>
                        <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                          <MapPin className="w-3.5 h-3.5" />
                          {item.location}
                        </span>
                      </div>
                    </div>

                    {/* Score Badge */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-300 dark:border-emerald-500/25 text-emerald-800 dark:text-emerald-300 shadow-xs">
                      <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-xs font-mono">{item.scoreType}:</span>
                      <span className="text-sm font-bold font-mono">{item.score}</span>
                    </div>
                  </div>

                  {/* Coursework / Key Subjects */}
                  <div className="pt-4 border-t border-slate-200 dark:border-white/10">
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2.5">
                      <BookOpen className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                      <span>{item.id === 'btech' ? 'Core Coursework:' : 'Key Subjects / Stream:'}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.highlights.map((subj) => (
                        <div
                          key={subj}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-dark-800/80 border border-slate-200 dark:border-white/5 text-xs text-slate-700 dark:text-slate-300 shadow-xs"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 flex-shrink-0" />
                          <span>{subj}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
