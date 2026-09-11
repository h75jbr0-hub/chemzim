"use client";

import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import { Lock } from "lucide-react";
import { questionBank } from "@/data/exams";
import { curriculumRegistry } from "@/data/curriculum/registry";

const curricula = [
  {
    id: "cie-igcse",
    level: "IGCSE",
    code: "0620",
    title: "O-Level Chemistry",
    description: "Complete Cambridge IGCSE Chemistry syllabus with 12 core topics covering fundamental concepts.",
    topics: [
      "States of Matter",
      "Atoms & Elements",
      "Stoichiometry",
      "Electrochemistry",
      "Chemical Energetics",
      "Chemical Reactions",
      "Acids, Bases & Salts",
      "The Periodic Table",
      "Metals",
      "Environment Chemistry",
      "Organic Chemistry",
      "Experimental Techniques",
    ],
    status: "active" as const,
    questions: "1,500+",
    color: "gold",
    gradient: "from-gold-600 to-gold-500",
  },
  {
    id: "cie-as",
    level: "AS-Level",
    code: "9701",
    title: "AS Chemistry",
    description: "Advanced Subsidiary level covering physical, inorganic, and organic chemistry in greater depth.",
    topics: [
      "Atoms & Bonding",
      "Amount of Substance",
      "Energetics & Equilibria",
      "Redox & Electrochemistry",
      "Organic Intro",
      "Analytical Techniques",
    ],
    status: "coming-soon" as const,
    questions: "Coming Soon",
    color: "teal",
    gradient: "from-teal-600 to-teal-400",
  },
  {
    id: "cie-alevel",
    level: "A-Level",
    code: "9701",
    title: "A2 Chemistry",
    description: "Full A-Level coverage including transition metals, organic synthesis pathways, and equilibria.",
    topics: [
      "Chemical Energetics II",
      "Electrochemistry II",
      "Equilibria II",
      "Reaction Kinetics",
      "Organic Chemistry II",
      "Analytical Chemistry",
    ],
    status: "coming-soon" as const,
    questions: "Coming Soon",
    color: "purple",
    gradient: "from-purple-600 to-purple-400",
  },
  {
    id: "edexcel-igcse",
    level: "Edexcel IGCSE",
    code: "4CH1",
    title: "O-Level Chemistry",
    description: "Pearson Edexcel International GCSE Chemistry covering principles of chemistry, inorganic, physical, and organic chemistry.",
    topics: [
      "Principles of Chemistry",
      "Inorganic Chemistry",
      "Physical Chemistry",
      "Organic Chemistry",
    ],
    status: "coming-soon" as const,
    questions: "Coming Soon",
    color: "purple",
    gradient: "from-purple-600 to-purple-400",
  },
  {
    id: "edexcel-as",
    level: "Edexcel AS",
    code: "XCH11",
    title: "International AS Chemistry",
    description: "Pearson Edexcel International AS Level Chemistry covering Units 1, 2, and 3 (Structure, Energetics, Organic Intro, and Practical Skills I).",
    topics: [
      "Structure & Bonding",
      "Energetics & Group Chemistry",
      "Practical Skills I",
    ],
    status: "active" as const,
    questions: "Coming Soon",
    color: "purple",
    gradient: "from-purple-600 to-purple-400",
  },
  {
    id: "edexcel-a2",
    level: "Edexcel A2",
    code: "YCH11",
    title: "International A2 Chemistry",
    description: "Pearson Edexcel International A2 Level Chemistry covering Units 4, 5, and 6 (Kinetics, Organic Synthesis, Transition Metals, and Practical Skills II).",
    topics: [
      "Rates & Equilibria",
      "Transition Metals",
      "Practical Skills II",
    ],
    status: "coming-soon" as const,
    questions: "Coming Soon",
    color: "purple",
    gradient: "from-purple-600 to-purple-400",
  },
];

const statusStyles = {
  active: {
    badge: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    label: "Available Now",
  },
  "coming-soon": {
    badge: "bg-gold-500/10 text-gold-400 border-gold-500/20",
    label: "Coming Soon",
  },
};

export default function CurriculumSection() {
  const { user, isAuthenticated } = useAuth();

  const getQuestionCount = (trackId: string): number => {
    let count = 0;
    
    // 1. Count from exams/tests (questionBank)
    questionBank.forEach((q) => {
      const qCurr = q.curriculum;
      const qTopic = q.topic;

      if (trackId === "cie-igcse") {
        if (qCurr === "igcse" || qCurr === "cie-igcse") {
          count++;
        }
      } else if (trackId === "cie-as") {
        if (qCurr === "as-level" || qCurr === "cie-as") {
          count++;
        }
      } else if (trackId === "cie-alevel") {
        if (qCurr === "a-level" || qCurr === "cie-alevel") {
          count++;
        }
      } else if (trackId === "edexcel-igcse") {
        if (qCurr === "edexcel-igcse") {
          count++;
        }
      } else if (trackId === "edexcel-as") {
        if (qCurr === "edexcel-as") {
          count++;
        } else if (qCurr === "edexcel-alevel" && (qTopic === "edexcel-unit-1" || qTopic === "edexcel-unit-2" || qTopic === "edexcel-unit-3")) {
          count++;
        }
      } else if (trackId === "edexcel-a2") {
        if (qCurr === "edexcel-a2") {
          count++;
        } else if (qCurr === "edexcel-alevel" && (qTopic === "edexcel-unit-4" || qTopic === "edexcel-unit-5" || qTopic === "edexcel-unit-6")) {
          count++;
        }
      }
    });

    // 2. Count from lesson quizzes (curriculumRegistry)
    Object.entries(curriculumRegistry).forEach(([key, unitRegistry]) => {
      let isMatch = false;
      
      if (trackId === "cie-igcse" && key.startsWith("cie-igcse-unit-")) {
        isMatch = true;
      } else if (trackId === "edexcel-as" && key.startsWith("edexcel-alevel-unit-")) {
        const unitNum = parseInt(key.replace("edexcel-alevel-unit-", ""), 10);
        if (unitNum >= 1 && unitNum <= 3) {
          isMatch = true;
        }
      } else if (trackId === "edexcel-a2" && key.startsWith("edexcel-alevel-unit-")) {
        const unitNum = parseInt(key.replace("edexcel-alevel-unit-", ""), 10);
        if (unitNum >= 4 && unitNum <= 6) {
          isMatch = true;
        }
      } else if (trackId === "cie-as" && key.startsWith("cie-alevel-unit-")) {
        const unitNum = parseInt(key.replace("cie-alevel-unit-", ""), 10);
        if (unitNum >= 1 && unitNum <= 3) {
          isMatch = true;
        }
      } else if (trackId === "cie-alevel" && key.startsWith("cie-alevel-unit-")) {
        const unitNum = parseInt(key.replace("cie-alevel-unit-", ""), 10);
        if (unitNum >= 4 && unitNum <= 6) {
          isMatch = true;
        }
      }

      if (isMatch) {
        Object.values(unitRegistry).forEach((lesson) => {
          if (lesson.quiz && Array.isArray(lesson.quiz)) {
            count += lesson.quiz.length;
          }
        });
      }
    });

    return count;
  };

  return (
    <section className="relative py-24 lg:py-32" id="curriculum">
      <div className="max-w-[1600px] mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest text-gold-400 uppercase mb-4">
            Curriculum
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] text-white mb-5">
            International <span className="text-gradient-gold">Curriculum</span> Chemistry
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Aligned with Cambridge Assessment and Pearson Edexcel international syllabi.
            Every question mapped to specific learning objectives.
          </p>
        </div>

        {/* Curriculum cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {curricula.map((curr, index) => {
            const status = statusStyles[curr.status];
            const isActive = curr.status === "active";
            const isInteractive = isAuthenticated && (user?.isAdmin || user?.track === curr.id);
            const count = getQuestionCount(curr.id);

            return (
              <div
                key={index}
                className={`relative rounded-2xl border bg-navy-900/60 overflow-hidden group transition-all duration-500 hover:-translate-y-1 ${
                  isActive
                    ? "border-gold-500/30 hover:border-gold-500/50 hover:shadow-2xl hover:shadow-gold-500/10"
                    : "border-border hover:border-border-bright"
                }`}
                id={`curriculum-card-${curr.level.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {/* Top gradient bar */}
                <div
                  className={`h-1 bg-gradient-to-r ${curr.gradient} ${
                    !isActive ? "opacity-30" : ""
                  }`}
                />

                <div className="p-7">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-5">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">
                          {curr.level}
                        </span>
                        <span
                          className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold border ${status.badge}`}
                        >
                          {status.label}
                        </span>
                      </div>
                      <p className="text-xs text-muted">
                        {curr.level.includes("Edexcel") ? "Pearson" : "Cambridge"} {curr.code}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-white">
                        {count > 0 ? count.toLocaleString() : "Coming Soon"}
                      </div>
                      {count > 0 && <div className="text-[10px] text-muted">questions</div>}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted leading-relaxed mb-6">
                    {curr.description}
                  </p>

                  {/* Topics */}
                  <div className="mb-6">
                    <p className="text-xs font-medium text-white/70 mb-3 uppercase tracking-wider">
                      Topics Covered
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {curr.topics.map((topic) => (
                        <span
                          key={topic}
                          className={`inline-block px-2.5 py-1 rounded-lg text-[11px] border ${
                            isActive
                              ? "bg-navy-800/80 border-border text-muted"
                              : "bg-navy-800/40 border-border/50 text-muted/60"
                          }`}
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  {isInteractive ? (
                    <Link
                      href="/dashboard/curriculum"
                      className={`block w-full text-center py-3 rounded-xl bg-gradient-to-r ${curr.gradient} text-navy-950 font-bold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-gold-500/10`}
                    >
                      Start Practicing
                    </Link>
                  ) : isActive ? (
                    isAuthenticated ? (
                      <div
                        className="flex items-center justify-center gap-2 w-full text-center py-3 rounded-xl bg-navy-950 border border-white/5 text-slate-500 font-semibold text-sm opacity-50 select-none"
                      >
                        <Lock className="h-4 w-4" />
                        Syllabus Locked
                      </div>
                    ) : (
                      <div
                        className={`block w-full text-center py-3 rounded-xl bg-gradient-to-r ${curr.gradient} text-navy-950 font-semibold text-sm opacity-90 select-none`}
                      >
                        Syllabus Active
                      </div>
                    )
                  ) : (
                    <div
                      className="block w-full text-center py-3 rounded-xl border border-border text-muted text-sm select-none opacity-50"
                    >
                      Coming Soon
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
