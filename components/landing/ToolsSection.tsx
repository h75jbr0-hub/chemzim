"use client";

const tools = [
  {
    title: "Periodic Table",
    description: "Interactive periodic table with element details, electron configurations, and group properties linked to exam questions.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="2" y="2" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.2" />
        <rect x="10.5" y="2" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.2" />
        <rect x="19" y="2" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.2" />
        <rect x="2" y="10.5" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.2" />
        <rect x="10.5" y="10.5" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.2" />
        <rect x="19" y="10.5" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.2" />
        <rect x="2" y="19" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.2" />
        <rect x="10.5" y="19" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.2" />
        <rect x="19" y="19" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
    gradient: "from-teal-500 to-teal-600",
    bgGlow: "bg-teal-500/8",
  },
  {
    title: "Scientific Calculator",
    description: "Full-featured scientific calculator directly on your screen for quick mathematical and trigonometric operations.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="4" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="1.2" />
        <line x1="4" y1="10" x2="24" y2="10" stroke="currentColor" strokeWidth="1.2" />
        <line x1="10" y1="10" x2="10" y2="24" stroke="currentColor" strokeWidth="0.8" />
        <line x1="14" y1="10" x2="14" y2="24" stroke="currentColor" strokeWidth="0.8" />
        <line x1="18" y1="10" x2="18" y2="24" stroke="currentColor" strokeWidth="0.8" />
        <line x1="4" y1="15" x2="24" y2="15" stroke="currentColor" strokeWidth="0.8" />
        <line x1="4" y1="19.5" x2="24" y2="19.5" stroke="currentColor" strokeWidth="0.8" />
        <text x="8" y="8.5" fill="currentColor" fontSize="5" fontFamily="monospace" fontWeight="bold">f(x)</text>
      </svg>
    ),
    gradient: "from-gold-500 to-gold-600",
    bgGlow: "bg-gold-500/8",
  },
  {
    title: "Chemistry Calculator",
    description: "Calculate moles, mass, concentrations, dilution properties, percentage yield, atom economy, percentage uncertainties, and pH solutions.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M10 3V10L4 22H24L18 10V3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="8" y1="3" x2="20" y2="3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M8 17C10 15 18 15 20 17" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
        <circle cx="12" cy="19" r="1" fill="currentColor" opacity="0.4" />
        <circle cx="16" cy="18" r="0.8" fill="currentColor" opacity="0.4" />
      </svg>
    ),
    gradient: "from-purple-500 to-purple-600",
    bgGlow: "bg-purple-500/8",
  },
];

export default function ToolsSection() {
  return (
    <section className="relative py-24 lg:py-32" id="tools">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest text-teal-400 uppercase mb-4">
            Built-In Tools
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] text-white mb-5">
            Chemistry <span className="text-gradient-teal">Toolkit</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Essential chemistry tools at your fingertips — no switching apps.
          </p>
        </div>

        {/* Tools grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-border bg-navy-900/60 p-8 hover:border-border-bright transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl overflow-hidden"
              id={`tool-card-${index}`}
            >
              {/* Background glow */}
              <div className={`absolute -top-20 -right-20 w-40 h-40 ${tool.bgGlow} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

              {/* Icon */}
              <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${tool.gradient} flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {tool.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-3 font-[family-name:var(--font-space-grotesk)]">
                {tool.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {tool.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
