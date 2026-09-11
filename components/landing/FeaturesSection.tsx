"use client";

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9 3L9 8L6 14L8 14L10 18L14 18L16 14L18 14L15 8L15 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="11" r="1.5" fill="currentColor" opacity="0.5" />
      </svg>
    ),
    title: "Past Paper Questions",
    description:
      "Practice with real past paper questions classified by topic and difficulty level across international syllabi.",
    color: "gold",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Gamified Learning",
    description:
      "Earn XP, level up from Lab Assistant to Nobel Laureate, and stay motivated with achievements and streaks.",
    color: "teal",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 6.0001C12 6.0001 8.5 2.0001 2 3.0001V19.0001C8.5 18.0001 12 21.0001 12 21.0001M12 6.0001C12 6.0001 15.5 2.0001 22 3.0001V19.0001C15.5 18.0001 12 21.0001 12 21.0001M12 6.0001V21.0001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Interactive Lessons",
    description:
      "Learn core concepts through bite-sized lessons featuring beautiful formatting, chemical diagrams, and structured notes.",
    color: "purple",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Performance Analytics",
    description:
      "Track your strengths and weaknesses across every topic with detailed performance breakdown and smart recommendations.",
    color: "emerald",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Timed Exam Mode",
    description:
      "Simulate real exam conditions with configurable timers, question counts, and difficulty settings.",
    color: "rose",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 12V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Targeted Quizzes",
    description:
      "Reinforce concepts through immediate feedback, step-by-step guidance, and quizzes tailored directly to your syllabus.",
    color: "gold",
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string; shadow: string }> = {
  gold: {
    bg: "bg-gold-500/10",
    text: "text-gold-400",
    border: "border-gold-500/20",
    shadow: "group-hover:shadow-gold-500/10",
  },
  teal: {
    bg: "bg-teal-500/10",
    text: "text-teal-400",
    border: "border-teal-500/20",
    shadow: "group-hover:shadow-teal-500/10",
  },
  purple: {
    bg: "bg-purple-500/10",
    text: "text-purple-400",
    border: "border-purple-500/20",
    shadow: "group-hover:shadow-purple-500/10",
  },
  emerald: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    border: "border-emerald-500/20",
    shadow: "group-hover:shadow-emerald-500/10",
  },
  rose: {
    bg: "bg-rose-500/10",
    text: "text-rose-400",
    border: "border-rose-500/20",
    shadow: "group-hover:shadow-rose-500/10",
  },
};

export default function FeaturesSection() {
  return (
    <section className="relative py-24 lg:py-32" id="features">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <span className="inline-block text-xs font-semibold tracking-widest text-gold-400 uppercase mb-4">
          Why ChemZim
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] text-white mb-5">
          Everything You Need to{" "}
          <span className="text-gradient-gold">Excel</span>
        </h2>
        <p className="text-muted text-lg max-w-2xl mx-auto">
          A complete chemistry learning toolkit designed specifically for
          international chemistry students.
        </p>
      </div>

      {/* Features grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {features.map((feature, index) => {
            const colors = colorMap[feature.color];
            return (
              <div
                key={index}
                className={`group relative rounded-2xl border border-border bg-navy-900/50 p-7 hover:border-border-bright transition-all duration-500 hover:bg-navy-800/50 hover:shadow-2xl ${colors.shadow} hover:-translate-y-1`}
                id={`feature-card-${index}`}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl ${colors.bg} ${colors.text} border ${colors.border} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-white mb-3 font-[family-name:var(--font-space-grotesk)]">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
