import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Changes of State";
export const lessonNumber = 3;

export const theoryMarkdown = `
## Changes of State
This lesson covers the fundamentals of Changes of State as part of the States of Matter unit in IGCSE Chemistry.
`;

const heatingCurveSvg = `
<svg viewBox="0 0 1000 360" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="3" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="1000" height="360" fill="url(#bgGrad)" stroke="#1e293b" stroke-width="2" rx="16" />

  <!-- Graph Title -->
  <text x="500" y="35" fill="#f8fafc" font-size="14" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Typical Heating Curve of a Pure Substance</text>

  <!-- Axes -->
  <line x1="100" y1="300" x2="900" y2="300" stroke="#94a3b8" stroke-width="2" /> <!-- X-axis -->
  <line x1="100" y1="60" x2="100" y2="300" stroke="#94a3b8" stroke-width="2" /> <!-- Y-axis -->

  <!-- Axis Arrows -->
  <path d="M 900 297 L 906 300 L 900 303 Z" fill="#94a3b8" />
  <path d="M 97 60 L 100 54 L 103 60 Z" fill="#94a3b8" />

  <!-- Axis Labels -->
  <text x="500" y="335" fill="#94a3b8" font-size="12" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Time / Heat Energy Added</text>
  <text x="55" y="180" fill="#94a3b8" font-size="12" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle" transform="rotate(-90 55 180)">Temperature (°C)</text>

  <!-- Stepped Curve -->
  <path d="M 120 280 L 260 210 L 400 210 L 580 110 L 750 110 L 880 70" fill="none" stroke="#38bdf8" stroke-width="3" filter="url(#glow)" />

  <!-- Horizontal dashed guides to Y-axis -->
  <line x1="100" y1="210" x2="260" y2="210" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4 4" fill="none" />
  <line x1="100" y1="110" x2="580" y2="110" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4 4" fill="none" />

  <!-- Y-axis values labels (Placed inside the graph above dashed lines to prevent overlap on the left) -->
  <text x="105" y="205" fill="#e2e8f0" font-size="10" font-family="system-ui, sans-serif" text-anchor="start">Melting Point</text>
  <text x="105" y="105" fill="#e2e8f0" font-size="10" font-family="system-ui, sans-serif" text-anchor="start">Boiling Point</text>

  <!-- Curve Labels -->
  <!-- Solid (sloped) -->
  <text x="160" y="225" fill="#38bdf8" font-size="12" font-weight="semibold" font-family="system-ui, sans-serif" text-anchor="middle">Solid</text>
  <text x="160" y="240" fill="#64748b" font-size="10" font-family="system-ui, sans-serif" text-anchor="middle">(KE increases)</text>

  <!-- Melting (flat) -->
  <text x="330" y="185" fill="#e2e8f0" font-size="12" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Melting</text>
  <text x="330" y="235" fill="#64748b" font-size="10" font-family="system-ui, sans-serif" text-anchor="middle">Solid + Liquid</text>
  <text x="330" y="250" fill="#64748b" font-size="10" font-family="system-ui, sans-serif" text-anchor="middle">(PE increases)</text>

  <!-- Liquid (sloped) -->
  <text x="490" y="130" fill="#38bdf8" font-size="12" font-weight="semibold" font-family="system-ui, sans-serif" text-anchor="middle">Liquid</text>
  <text x="490" y="145" fill="#64748b" font-size="10" font-family="system-ui, sans-serif" text-anchor="middle">(KE increases)</text>

  <!-- Boiling (flat) -->
  <text x="665" y="85" fill="#e2e8f0" font-size="12" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Boiling</text>
  <text x="665" y="135" fill="#64748b" font-size="10" font-family="system-ui, sans-serif" text-anchor="middle">Liquid + Gas</text>
  <text x="665" y="150" fill="#64748b" font-size="10" font-family="system-ui, sans-serif" text-anchor="middle">(PE increases)</text>

  <!-- Gas (sloped) -->
  <text x="815" y="55" fill="#38bdf8" font-size="12" font-weight="semibold" font-family="system-ui, sans-serif" text-anchor="middle">Gas</text>
  <text x="815" y="70" fill="#64748b" font-size="10" font-family="system-ui, sans-serif" text-anchor="middle">(KE increases)</text>
</svg>
`;

const coolingCurveSvg = `
<svg viewBox="0 0 1000 360" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="3" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="1000" height="360" fill="url(#bgGrad)" stroke="#1e293b" stroke-width="2" rx="16" />

  <!-- Graph Title -->
  <text x="500" y="35" fill="#f8fafc" font-size="14" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Typical Cooling Curve of a Pure Substance</text>

  <!-- Axes -->
  <line x1="100" y1="300" x2="900" y2="300" stroke="#94a3b8" stroke-width="2" /> <!-- X-axis -->
  <line x1="100" y1="60" x2="100" y2="300" stroke="#94a3b8" stroke-width="2" /> <!-- Y-axis -->

  <!-- Axis Arrows -->
  <path d="M 900 297 L 906 300 L 900 303 Z" fill="#94a3b8" />
  <path d="M 97 60 L 100 54 L 103 60 Z" fill="#94a3b8" />

  <!-- Axis Labels -->
  <text x="500" y="335" fill="#94a3b8" font-size="12" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Time</text>
  <text x="55" y="180" fill="#94a3b8" font-size="12" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle" transform="rotate(-90 55 180)">Temperature (°C)</text>

  <!-- Stepped Curve -->
  <path d="M 120 70 L 250 110 L 420 110 L 590 210 L 740 210 L 880 280" fill="none" stroke="#f43f5e" stroke-width="3" filter="url(#glow)" />

  <!-- Horizontal dashed guides to Y-axis -->
  <line x1="100" y1="110" x2="250" y2="110" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4 4" fill="none" />
  <line x1="100" y1="210" x2="590" y2="210" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4 4" fill="none" />

  <!-- Y-axis values labels (Placed inside the graph above dashed lines to prevent overlap on the left) -->
  <text x="105" y="105" fill="#e2e8f0" font-size="10" font-family="system-ui, sans-serif" text-anchor="start">Condensation Point</text>
  <text x="105" y="205" fill="#e2e8f0" font-size="10" font-family="system-ui, sans-serif" text-anchor="start">Freezing Point</text>

  <!-- Curve Labels -->
  <!-- Gas (sloped) -->
  <text x="185" y="55" fill="#f43f5e" font-size="12" font-weight="semibold" font-family="system-ui, sans-serif" text-anchor="middle">Gas</text>
  <text x="185" y="70" fill="#64748b" font-size="10" font-family="system-ui, sans-serif" text-anchor="middle">(KE decreases)</text>

  <!-- Condensation (flat) -->
  <text x="335" y="85" fill="#e2e8f0" font-size="12" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Condensation</text>
  <text x="335" y="135" fill="#64748b" font-size="10" font-family="system-ui, sans-serif" text-anchor="middle">Gas + Liquid</text>
  <text x="335" y="150" fill="#64748b" font-size="10" font-family="system-ui, sans-serif" text-anchor="middle">(PE decreases)</text>

  <!-- Liquid (sloped) -->
  <text x="505" y="130" fill="#f43f5e" font-size="12" font-weight="semibold" font-family="system-ui, sans-serif" text-anchor="middle">Liquid</text>
  <text x="505" y="145" fill="#64748b" font-size="10" font-family="system-ui, sans-serif" text-anchor="middle">(KE decreases)</text>

  <!-- Freezing (flat) -->
  <text x="665" y="185" fill="#e2e8f0" font-size="12" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Freezing</text>
  <text x="665" y="235" fill="#64748b" font-size="10" font-family="system-ui, sans-serif" text-anchor="middle">Liquid + Solid</text>
  <text x="665" y="250" fill="#64748b" font-size="10" font-family="system-ui, sans-serif" text-anchor="middle">(PE decreases)</text>

  <!-- Solid (sloped) -->
  <text x="810" y="215" fill="#f43f5e" font-size="12" font-weight="semibold" font-family="system-ui, sans-serif" text-anchor="middle">Solid</text>
  <text x="810" y="230" fill="#64748b" font-size="10" font-family="system-ui, sans-serif" text-anchor="middle">(KE decreases)</text>
</svg>
`;

const heatingCurveComparisonSvg = `
<svg viewBox="0 0 1000 360" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
    <filter id="glowPure" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="2" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
    <filter id="glowImpure" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="2" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>

  <rect width="1000" height="360" fill="url(#bgGrad)" stroke="#1e293b" stroke-width="2" rx="16" />

  <text x="500" y="35" fill="#f8fafc" font-size="14" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Heating Curves: Pure vs. Impure Substance</text>

  <line x1="100" y1="300" x2="900" y2="300" stroke="#94a3b8" stroke-width="2" />
  <line x1="100" y1="60" x2="100" y2="300" stroke="#94a3b8" stroke-width="2" />

  <path d="M 900 297 L 906 300 L 900 303 Z" fill="#94a3b8" />
  <path d="M 97 60 L 100 54 L 103 60 Z" fill="#94a3b8" />

  <text x="500" y="335" fill="#94a3b8" font-size="12" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Time / Heat Energy Added</text>
  <text x="55" y="180" fill="#94a3b8" font-size="12" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle" transform="rotate(-90 55 180)">Temperature (°C)</text>

  <path d="M 120 280 L 260 210 L 400 210 L 580 110 L 750 110 L 880 70" fill="none" stroke="#38bdf8" stroke-width="3" filter="url(#glowPure)" />

  <path d="M 120 280 L 230 225 L 400 195 L 580 100 L 750 75 L 880 45" fill="none" stroke="#f43f5e" stroke-width="3" stroke-dasharray="6 4" filter="url(#glowImpure)" />

  <line x1="100" y1="210" x2="260" y2="210" stroke="#38bdf8" stroke-width="1" stroke-dasharray="3 3" fill="none" opacity="0.6" />
  <text x="105" y="205" fill="#38bdf8" font-size="9" font-family="system-ui, sans-serif" text-anchor="start" opacity="0.8">Pure Melting Point</text>

  <line x1="100" y1="225" x2="230" y2="225" stroke="#f43f5e" stroke-width="1" stroke-dasharray="3 3" fill="none" opacity="0.6" />
  <line x1="100" y1="195" x2="400" y2="195" stroke="#f43f5e" stroke-width="1" stroke-dasharray="3 3" fill="none" opacity="0.6" />
  <path d="M 110 225 L 110 195" stroke="#f43f5e" stroke-width="1" fill="none" />
  <text x="115" y="220" fill="#f43f5e" font-size="9" font-family="system-ui, sans-serif" text-anchor="start" opacity="0.8">Impure Melts over a range (Lowered)</text>

  <line x1="100" y1="110" x2="580" y2="110" stroke="#38bdf8" stroke-width="1" stroke-dasharray="3 3" fill="none" opacity="0.6" />
  <text x="105" y="105" fill="#38bdf8" font-size="9" font-family="system-ui, sans-serif" text-anchor="start" opacity="0.8">Pure Boiling Point</text>

  <line x1="100" y1="100" x2="580" y2="100" stroke="#f43f5e" stroke-width="1" stroke-dasharray="3 3" fill="none" opacity="0.6" />
  <line x1="100" y1="75" x2="750" y2="75" stroke="#f43f5e" stroke-width="1" stroke-dasharray="3 3" fill="none" opacity="0.6" />
  <path d="M 110 100 L 110 75" stroke="#f43f5e" stroke-width="1" fill="none" />
  <text x="115" y="95" fill="#f43f5e" font-size="9" font-family="system-ui, sans-serif" text-anchor="start" opacity="0.8">Impure Boils over a range (Elevated)</text>

  <rect x="680" y="240" width="200" height="50" fill="#091428" stroke="#1e293b" stroke-width="1.5" rx="8" />
  
  <line x1="695" y1="255" x2="725" y2="255" stroke="#38bdf8" stroke-width="3" />
  <text x="735" y="259" fill="#e2e8f0" font-size="10" font-family="system-ui, sans-serif" font-weight="semibold">Pure Substance</text>

  <line x1="695" y1="275" x2="725" y2="275" stroke="#f43f5e" stroke-width="3" stroke-dasharray="4 2" />
  <text x="735" y="279" fill="#e2e8f0" font-size="10" font-family="system-ui, sans-serif" font-weight="semibold">Impure Substance</text>
</svg>
`;

const statesOfMatterCycleSvg = `
<svg viewBox="0 0 680 320" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="cycleBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
    <marker id="cycleArrowRed" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#f43f5e" />
    </marker>
    <marker id="cycleArrowBlue" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#38bdf8" />
    </marker>
  </defs>

  <rect width="680" height="320" fill="url(#cycleBg)" stroke="#1e293b" stroke-width="2" rx="16" />

  <!-- Title -->
  <text x="340" y="30" fill="#f8fafc" font-size="14" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Interconversions of the Three States of Matter</text>

  <!-- Top Banner: Endothermic (Energy Given In) -->
  <rect x="140" y="48" width="400" height="28" rx="8" fill="#f43f5e" fill-opacity="0.15" stroke="#f43f5e" stroke-opacity="0.3" stroke-width="1.5" />
  <text x="340" y="66" fill="#f43f5e" font-size="12" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">⚡ Energy is taken in / absorbed (Endothermic)</text>

  <!-- State Boxes -->
  <!-- Solid Box -->
  <g transform="translate(60, 120)">
    <rect width="120" height="80" rx="12" fill="#0f172a" stroke="#38bdf8" stroke-width="2" />
    <text x="60" y="38" fill="#38bdf8" font-size="16" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Solid</text>
    <text x="60" y="58" fill="#94a3b8" font-size="11" font-family="system-ui, sans-serif" text-anchor="middle">Fixed lattice</text>
  </g>

  <!-- Liquid Box -->
  <g transform="translate(280, 120)">
    <rect width="120" height="80" rx="12" fill="#0f172a" stroke="#34d399" stroke-width="2" />
    <text x="60" y="38" fill="#34d399" font-size="16" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Liquid</text>
    <text x="60" y="58" fill="#94a3b8" font-size="11" font-family="system-ui, sans-serif" text-anchor="middle">Touching &amp; sliding</text>
  </g>

  <!-- Gas Box -->
  <g transform="translate(500, 120)">
    <rect width="120" height="80" rx="12" fill="#0f172a" stroke="#c084fc" stroke-width="2" />
    <text x="60" y="38" fill="#c084fc" font-size="16" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Gas</text>
    <text x="60" y="58" fill="#94a3b8" font-size="11" font-family="system-ui, sans-serif" text-anchor="middle">Far apart &amp; free</text>
  </g>

  <!-- Arrows: Solid <-> Liquid -->
  <!-- Melting (Right, Red) -->
  <path d="M 185 145 L 275 145" stroke="#f43f5e" stroke-width="2" marker-end="url(#cycleArrowRed)" fill="none" />
  <text x="230" y="138" fill="#f43f5e" font-size="11" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Melting</text>

  <!-- Freezing (Left, Blue) -->
  <path d="M 275 175 L 185 175" stroke="#38bdf8" stroke-width="2" marker-end="url(#cycleArrowBlue)" fill="none" />
  <text x="230" y="192" fill="#38bdf8" font-size="11" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Freezing</text>

  <!-- Arrows: Liquid <-> Gas -->
  <!-- Boiling / Evaporating (Right, Red) -->
  <path d="M 405 145 L 495 145" stroke="#f43f5e" stroke-width="2" marker-end="url(#cycleArrowRed)" fill="none" />
  <text x="450" y="138" fill="#f43f5e" font-size="10" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Evaporating / Boiling</text>

  <!-- Condensation (Left, Blue) -->
  <path d="M 495 175 L 405 175" stroke="#38bdf8" stroke-width="2" marker-end="url(#cycleArrowBlue)" fill="none" />
  <text x="450" y="192" fill="#38bdf8" font-size="11" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Condensation</text>

  <!-- Direct Transitions: Sublimation and Deposition -->
  <!-- Sublimation (Top curve: Solid -> Gas) -->
  <path d="M 120 115 C 120 90, 560 90, 560 115" stroke="#f43f5e" stroke-width="2" stroke-dasharray="4 3" marker-end="url(#cycleArrowRed)" fill="none" />
  <text x="340" y="98" fill="#f43f5e" font-size="11" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Sublimation (Solid → Gas)</text>

  <!-- Deposition (Bottom curve: Gas -> Solid) -->
  <path d="M 560 205 C 560 232, 120 232, 120 205" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4 3" marker-end="url(#cycleArrowBlue)" fill="none" />
  <text x="340" y="226" fill="#38bdf8" font-size="11" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Deposition / Desublimation (Gas → Solid)</text>

  <!-- Bottom Banner: Exothermic (Energy Given Out) -->
  <rect x="140" y="246" width="400" height="28" rx="8" fill="#38bdf8" fill-opacity="0.15" stroke="#38bdf8" stroke-opacity="0.3" stroke-width="1.5" />
  <text x="340" y="264" fill="#38bdf8" font-size="12" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">❄️ Energy is given out / released (Exothermic)</text>
</svg>
`;

export const lessonParts: LessonPart[] = [
    {
        id: "phase-transitions",
        title: "Physical Phase Changes",
        type: "text",
        content: `
### 🔄 Transitions of Matter

A change of state occurs when a substance gains or loses thermal (heat) energy, transitioning between solid, liquid, and gas.

#### 📋 Rules of State Changes:
1. **Reversible Change:** They can be reversed by reversing the temperature change (e.g. melted ice can be frozen back into ice).
2. **Physical Change:** No new chemical substances are formed during state changes; particles remain chemically identical.
3. **Conservation of Mass:** State changes do NOT change the mass of a substance. $100\\text{ g}$ of ice produces exactly $100\\text{ g}$ of water.

> [!NOTE]
> ### 🔄 Interconversions and Energy Direction
> 
> * **Endothermic (Energy Taken In / Absorbed):** Particles gain kinetic energy, overcome intermolecular forces, and move further apart.
>   * **Melting:** Solid $\\rightarrow$ Liquid
>   * **Evaporating / Boiling:** Liquid $\\rightarrow$ Gas
>   * **Sublimation:** Solid $\\rightarrow$ Gas (direct)
> 
> * **Exothermic (Energy Given Out / Released):** Particles lose kinetic energy, move slower, and attractive forces pull them closer together.
>   * **Freezing:** Liquid $\\rightarrow$ Solid
>   * **Condensation:** Gas $\\rightarrow$ Liquid
>   * **Deposition (Desublimation):** Gas $\\rightarrow$ Solid (direct)
> 
> ${svgToken(statesOfMatterCycleSvg)}

### 🌡️ The Core State Changes

* **Melting:** Solid to liquid by heating (opposite of Freezing). Occurs at a sharp, specific melting point for pure substances.
* **Freezing:** Liquid to solid by cooling (opposite of Melting). Occurs at the exact same temperature as the melting point for a pure substance.
* **Boiling:** Liquid to gas throughout the liquid with visible bubbles (opposite of Condensation). Occurs at a specific boiling point.
* **Evaporating:** Liquid to gas happening only at the surface at a range of temperatures below the boiling point.
* **Condensation:** Gas to liquid upon cooling (opposite of Boiling).
* **Sublimation:** Direct change from solid to gas without passing through liquid (opposite of Deposition).

> [!EXAMPLE]
> #### 📝 Worked Example: Physical Changes and Particle Movement
> **Question:** Four physical changes are listed:
> 1. Condensation
> 2. Evaporation
> 3. Freezing
> 4. Sublimation
> 
> In which changes do the particles move further apart?
> 
> **A** 1 and 3
> 
> **B** 2 and 3
> 
> **C** 1 and 4
> 
> **D** 2 and 4
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Analyze Each Process:**
> >    * **1. Condensation (Gas $\\rightarrow$ Liquid):** Gas particles are far apart; in a liquid they touch and are close together. Particles move **closer together**.
> >    * **2. Evaporation (Liquid $\\rightarrow$ Gas):** Liquid particles are touching; in a gas they separate widely with huge gaps. Particles move **further apart**.
> >    * **3. Freezing (Liquid $\\rightarrow$ Solid):** Particles are locked into a compact, regular lattice. Particles move **closer together** or maintain close packing.
> >    * **4. Sublimation (Solid $\\rightarrow$ Gas):** Solid particles in a lattice separate into widely spaced gas particles. Particles move **further apart**.
> > 2. **Identify Matches:**
> >    * In changes 2 (Evaporation) and 4 (Sublimation), particles move further apart.
> > 3. **Conclusion:**
> >    * The correct option is **D**.
        `,
        keyPoints: [
            "State changes are physical, reversible processes that conserve mass.",
            "Endothermic changes (melting, boiling, sublimation) absorb energy to separate particles.",
            "Exothermic changes (freezing, condensation, deposition) release energy as particles come closer."
        ]
    },
    {
        id: "boiling-evaporation",
        title: "Boiling vs. Evaporation",
        type: "text",
        content: `
### 💨 Two Ways to Turn Liquid into Gas

Although both **boiling** and **evaporation** convert a liquid into a gas, they are different physical processes.

> [!NOTE]
> ### 📋 Key Differences
> 
> | Feature | Boiling | Evaporation |
> | :--- | :--- | :--- |
> | Temperature | Occurs only at a specific temperature (Boiling Point) | Occurs at a range of temperatures below the boiling point |
> | Location | Happens throughout the entire liquid (bubbles form) | Happens only at the surface of the liquid |
> | Bubbles | Bubbles of gas form throughout the liquid | No bubbles are observed |
> | Energy Source | External heat source is required | Can absorb heat from the surrounding environment |

> [!EXAMPLE]
> #### 📝 Worked Example 1: Location and Temperature Differences
> **Question:** Which statement correctly describes a difference between boiling and evaporation of a liquid?
> 
> **A** Boiling occurs at any temperature, while evaporation occurs only at the boiling point.
> 
> **B** Boiling happens only at the surface, while evaporation happens throughout the liquid.
> 
> **C** Boiling occurs only at a specific temperature, while evaporation occurs at any temperature below the boiling point.
> 
> **D** Boiling does not require energy, while evaporation does.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Analyze Temperature Requirements:**
> >    * Boiling is a phase transition that occurs only at a specific fixed temperature called the boiling point (for a given pressure).
> >    * Evaporation is a surface phenomenon that occurs at any temperature below the boiling point. This matches C.
> > 2. **Analyze Location:**
> >    * Boiling occurs throughout the entire bulk of the liquid (bubbles form everywhere). Evaporation happens only at the surface where high-energy particles escape.
> > 3. **Conclusion:**
> >    * Boiling occurs only at a specific temperature, whereas evaporation occurs at any temperature below the boiling point. The correct option is **C**.

> [!EXAMPLE]
> #### 📝 Worked Example 2: Energy and Bubbles
> **Question:** What is observed during the boiling of a pure liquid that is not observed during its evaporation?
> 
> **A** Heat is absorbed from the surroundings.
> 
> **B** Bubbles of gas form throughout the liquid.
> 
> **C** Particles change from liquid to gas.
> 
> **D** The mass of the liquid decreases.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Compare Physical Phenomena:**
> >    * Both boiling and evaporation are physical processes changing liquid to gas (rules out C) and both conserve mass as particles escape, reducing liquid mass (rules out D).
> >    * Both processes absorb thermal energy to break intermolecular forces (rules out A).
> > 2. **Identify Boiling-Specific Observations:**
> >    * During boiling, vapor pressure equals atmospheric pressure, allowing bubbles of gas to form and grow throughout the entire volume of the liquid. No bubbles form during evaporation.
> > 3. **Conclusion:**
> >    * Bubbles forming throughout the liquid is unique to boiling. The correct option is **B**.
        `,
        keyPoints: [
            "Boiling happens throughout the liquid at a specific boiling point, forming bubbles.",
            "Evaporation happens only at the surface at any temperature below the boiling point."
        ]
    },
    {
        id: "sublimation-volatility",
        title: "Sublimation & Volatile Liquids",
        type: "text",
        content: `
### 🌬️ Sublimation

> [!IMPORTANT]
> ### 🧮 Definition: Sublimation
> **Sublimation** is the process where a solid turns directly into a gas when heated, without passing through the liquid state. The opposite process is called **deposition** (gas directly to solid).

#### 📋 Key Examples of Sublimation:
* **Iodine (I₂):** Dark gray solid crystals sublimate to form a purple gas when heated.
  $$I_2\\text{(s)} \\rightarrow I_2\\text{(g)}$$
* **Carbon Dioxide (CO₂ - Dry Ice):** White solid dry ice sublimates directly to a colorless gas at room temperature.
  $$CO_2\\text{(s)} \\rightarrow CO_2\\text{(g)}$$
* **Ammonium Chloride (NH₄Cl)**
* **Naphthalene (Mothballs)**
### 🧪 Volatile Liquids

> [!IMPORTANT]
> ### 🧮 Definition: Volatility
> A **volatile** liquid is one that evaporates easily at room temperature. 

* Volatile liquids have **low boiling points** because the intermolecular forces of attraction between their particles are very weak.
* **Examples:** Propanone (acetone), ethanol, and white spirit.

> [!EXAMPLE]
> #### 📝 Worked Example 1: Iodine Sublimation
> **Question:** When dark gray crystals of iodine are heated in a test tube, they form a purple gas without any liquid appearing. What is this process called?
> 
> **A** Evaporation
> 
> **B** Boiling
> 
> **C** Condensation
> 
> **D** Sublimation
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Observe State Change:**
> >    * The substance starts as solid crystals (dark gray iodine) and transitions directly to a gas (purple vapor).
> > 2. **Identify Bypassed State:**
> >    * No liquid state is formed during the transition.
> > 3. **Recall Terminology:**
> >    * The direct change from solid to gas is called sublimation.
> > 4. **Conclusion:**
> >    * The process is sublimation. The correct option is **D**.

> [!EXAMPLE]
> #### 📝 Worked Example 2: Volatility and Intermolecular Forces
> **Question:** Propanone (acetone) is a highly volatile liquid at room temperature. What does this indicate about its physical properties?
> 
> **A** It has very strong intermolecular forces and a high boiling point.
> 
> **B** It has weak intermolecular forces and a low boiling point.
> 
> **C** It undergoes sublimation easily.
> 
> **D** It has a very high melting point.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Define Volatile Liquids:**
> >    * Volatile liquids evaporate easily at room temperature.
> > 2. **Link to Intermolecular Forces:**
> >    * For a liquid to evaporate easily, its molecules must only need a small amount of thermal energy to overcome the forces holding them together.
> >    * Therefore, the intermolecular forces of attraction must be weak.
> > 3. **Link to Boiling Point:**
> >    * Weak intermolecular forces mean the liquid will boil at a relatively low temperature.
> > 4. **Conclusion:**
> >    * Volatile liquids have weak intermolecular forces and a low boiling point. The correct option is **B**.
        `,
        keyPoints: [
            "Sublimation is the direct transition of a solid to a gas, such as iodine or dry ice.",
            "Volatile liquids evaporate easily at room temperature due to weak intermolecular forces."
        ]
    },
    {
        id: "heating-cooling-curves",
        title: "Heating and Cooling Curves",
        type: "text",
        content: `
### 📈 Heating and Cooling Graphs

When a pure substance is heated or cooled, its temperature changes in a characteristic stepped pattern. During a change of state, the temperature remains constant even though thermal energy is still being added or removed.
### 🌡️ 1. The Heating Curve (Endothermic Process)

When heating a solid:
1. **Temperature rises** as the solid particles gain kinetic energy and vibrate faster.
2. At the **Melting Point** (first horizontal plateau), the temperature remains constant even though heating continues.
   * **Cambridge Examiner Rationale:** The absorbed thermal energy is consumed entirely in **overcoming the intermolecular forces** holding the solid lattice together, rather than increasing particle kinetic energy.
   * The temperature stays at a fixed degree until **all of the substance has completely melted**.
3. Once fully melted, the liquid temperature rises until the **Boiling Point** (second plateau) is reached.
4. **Why the Boiling Plateau is Longer than the Melting Plateau:**
   * It takes significantly longer and requires much more thermal energy to boil a liquid than to melt the same mass of solid.
   * **Explanation:** In melting (heat of fusion $\approx 6.01\\text{ kJ/mol}$ for ice), forces are only partially weakened to allow particles to slide. In boiling (heat of vaporization $\approx 40.65\\text{ kJ/mol}$ for water), all remaining intermolecular forces of attraction must be **completely overcome** to separate particles widely into the gas phase.

${svgToken(heatingCurveSvg)}
### ❄️ 2. The Cooling Curve (Exothermic Process)

When cooling a gas:
1. **Temperature falls** as gas particles lose kinetic energy and move slower.
2. At the **Condensation Point** (first plateau), the temperature remains constant as forces of attraction form between particles, releasing heat energy.
3. Once fully condensed, the liquid temperature falls until the **Freezing Point** (second plateau) is reached, where the liquid particles align into a fixed solid lattice.

${svgToken(coolingCurveSvg)}
### 🧪 Pure vs. Impure Substances

We can use melting and boiling points to determine if a substance is pure:
* **Pure Substances:** Have sharp, precise, and fixed melting and boiling points (e.g., pure water melts at exactly $0^\\circ\\text{C}$ and boils at $100^\\circ\\text{C}$).
* **Impure Substances (Mixtures):**
  1. Melt and boil over a **range of temperatures** instead of a single point.
  2. The **melting point is lowered** (depressed).
  3. The **boiling point is raised** (elevated).

${svgToken(heatingCurveComparisonSvg)}

> [!EXAMPLE]
> #### 📝 Worked Example 1: Heating Curve and Energy Changes
> **Question:** A solid substance is heated at a constant rate. During the melting and boiling points, the temperature remains constant even though heating continues.
> 
> Which statement describes the energy changes occurring during these plateaus (constant temperature regions)?
> 
> **A** Kinetic energy increases, potential energy remains constant.
> 
> **B** Kinetic energy remains constant, potential energy increases.
> 
> **C** Both kinetic and potential energy increase.
> 
> **D** Both kinetic and potential energy remain constant.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Understand Temperature and Kinetic Energy:**
> >    * Temperature is a measure of the average kinetic energy of the particles. Since temperature remains constant during a phase change (plateau), the average kinetic energy must also remain constant. This rules out A and C.
> > 2. **Analyze Potential Energy:**
> >    * Heat energy is still being added. This energy is used to break or overcome the intermolecular forces holding the particles together in the solid or liquid state. This increases the potential energy of the particles.
> > 3. **Conclusion:**
> >    * Kinetic energy remains constant, while potential energy increases. The correct option is **B**.

> [!EXAMPLE]
> #### 📝 Worked Example 2: Identifying Physical States from Melting and Boiling Points
> **Question:** The table shows the melting and boiling points of four substances:
> 
> | Substance | Melting Point (°C) | Boiling Point (°C) |
> | :--- | :--- | :--- |
> | W | -101 | -34 |
> | X | -10 | 120 |
> | Y | 17 | 118 |
> | Z | 801 | 1413 |
> 
> Which substances are liquids at 25°C?
> 
> **A** W and X
> 
> **B** X and Y
> 
> **C** Y and Z
> 
> **D** X, Y and Z
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Understand Liquid State Range:**
> >    * A substance is a liquid at a given temperature if that temperature is higher than its melting point but lower than its boiling point.
> > 2. **Evaluate Substance W:**
> >    * Melting point is -101°C, boiling point is -34°C. At 25°C, it is above boiling point, so W is a gas.
> > 3. **Evaluate Substance X:**
> >    * Melting point is -10°C, boiling point is 120°C. 25°C is between these values, so X is a liquid.
> > 4. **Evaluate Substance Y:**
> >    * Melting point is 17°C, boiling point is 118°C. 25°C is between these values, so Y is a liquid.
> > 5. **Evaluate Substance Z:**
> >    * Melting point is 801°C. At 25°C, it has not melted yet, so Z is a solid.
> > 6. **Conclusion:**
> >    * Substances X and Y are liquids. The correct option is **B**.

> [!EXAMPLE]
> #### 📝 Worked Example 3: Volume Changes during Condensation
> **Question:** Which statement correctly describes the change in volume and arrangement of particles when steam condenses to water?
> 
> **A** Volume increases, particles become randomly arranged.
> 
> **B** Volume decreases, particles become regularly arranged.
> 
> **C** Volume decreases, particles remain randomly arranged but closer.
> 
> **D** Volume remains constant, particles slide over each other.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Analyze Phase Change (Condensation):**
> >    * Condensation is the transition of a gas (steam) to a liquid (water).
> > 2. **Compare Spacing/Volume:**
> >    * Gas particles are far apart with huge gaps. Liquid particles are touching and close together. Therefore, the volume must decrease significantly when condensing. This rules out A and D.
> > 3. **Compare Arrangement:**
> >    * Gas particles are randomly arranged. Liquid particles are also randomly arranged (not in regular rows like solids). Therefore, the particles remain randomly arranged. This rules out B.
> > 4. **Conclusion:**
> >    * The volume decreases, and particles remain randomly arranged but closer together. The correct option is **C**.

> [!EXAMPLE]
> #### 📝 Worked Example 4: Heating Curves of Impure Substances
> **Question:** How does the heating curve of a sample of impure water differ from that of pure water?
> 
> **A** The impure water boils at a lower, constant temperature.
> 
> **B** The impure water melts and boils over a range of temperatures instead of sharp points.
> 
> **C** The impure water does not change state at all.
> 
> **D** The impure water heating curve has no plateaus.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Understand Pure vs. Impure Curves:**
> >    * Pure substances melt and boil at sharp, precise, fixed temperatures (represented by perfectly flat, horizontal plateaus on a heating curve).
> >    * Impure substances (mixtures) do not have sharp melting or boiling points; they melt and boil over a range of temperatures.
> > 2. **Analyze the Shape:**
> >    * Because melting and boiling occur over a range of temperatures for mixtures, the plateaus on the heating curve are sloped rather than flat.
> > 3. **Conclusion:**
> >    * Impure water melts and boils over a range of temperatures. The correct option is **B**.

> [!EXAMPLE]
> #### 📝 Worked Example 5: Cooling Curve State Identification
> **Question:** During a cooling curve of a gaseous substance, what physical states of matter are present during the second plateau?
> 
> **A** Gas only
> 
> **B** Gas and liquid
> 
> **C** Liquid and solid
> 
> **D** Solid only
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Trace the Cooling Curve Phases:**
> >    * The substance starts as a gas (first sloped region cooling down).
> >    * The **first plateau** represents the transition from gas to liquid (**condensation**). Both gas and liquid are present here.
> >    * The second sloped region represents the liquid cooling down.
> >    * The **second plateau** represents the transition from liquid to solid (**freezing**).
> > 2. **Identify States at Freezing Point:**
> >    * During freezing, the liquid is gradually turning into a solid, meaning both liquid and solid are present together until the freezing is complete.
> > 3. **Conclusion:**
> >    * Both liquid and solid states are present during the second plateau. The correct option is **C**.

> [!EXAMPLE]
> #### 📝 Worked Example 6: Determining Physical States from Temperature
> **Question:** A compound X has a melting point of $71\\text{ }^\\circ\\text{C}$ and a boiling point of $375\\text{ }^\\circ\\text{C}$.
> 
> Which statement about X is correct?
> 
> **A** It is a liquid at $52\\text{ }^\\circ\\text{C}$ and a gas at $175\\text{ }^\\circ\\text{C}$.
> 
> **B** It is a liquid at $80\\text{ }^\\circ\\text{C}$ and a gas at $400\\text{ }^\\circ\\text{C}$.
> 
> **C** It is a liquid at $75\\text{ }^\\circ\\text{C}$ and a gas at $350\\text{ }^\\circ\\text{C}$.
> 
> **D** It is a liquid at $69\\text{ }^\\circ\\text{C}$ and a gas at $380\\text{ }^\\circ\\text{C}$.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Establish the Temperature Ranges:**
> >    * Below melting point ($< 71\\text{ }^\\circ\\text{C}$): Substance is a **Solid**.
> >    * Between melting and boiling ($71\\text{ }^\\circ\\text{C} \\text{ to } 375\\text{ }^\\circ\\text{C}$): Substance is a **Liquid**.
> >    * Above boiling point ($> 375\\text{ }^\\circ\\text{C}$): Substance is a **Gas**.
> > 2. **Evaluate the Options:**
> >    * **Option A:** At $52\\text{ }^\\circ\\text{C}$, it is below $71\\text{ }^\\circ\\text{C}$ (solid, not liquid). Incorrect.
> >    * **Option B:** At $80\\text{ }^\\circ\\text{C}$, it is between $71\\text{ }^\\circ\\text{C}$ and $375\\text{ }^\\circ\\text{C}$ (liquid). At $400\\text{ }^\\circ\\text{C}$, it is above $375\\text{ }^\\circ\\text{C}$ (gas). Both statements are completely correct!
> >    * **Option C:** At $350\\text{ }^\\circ\\text{C}$, it is still a liquid, not a gas. Incorrect.
> >    * **Option D:** At $69\\text{ }^\\circ\\text{C}$, it is a solid, not liquid. Incorrect.
> > 3. **Conclusion:**
> >    * The correct option is **B**.

> [!EXAMPLE]
> #### 📝 Worked Example 7: Room Temperature Physical States of Related Acids
> **Question:** The melting points of three related organic acids are given below:
> * Capric acid: $32\\text{ }^\\circ\\text{C}$
> * Formic acid: $8\\text{ }^\\circ\\text{C}$
> * Palmitic acid: $63\\text{ }^\\circ\\text{C}$
> 
> The boiling point of all these compounds is well above $100\\text{ }^\\circ\\text{C}$. Room temperature is $20\\text{ }^\\circ\\text{C}$.
> 
> Deduce the physical state of each acid at room temperature ($20\\text{ }^\\circ\\text{C}$).
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Compare Room Temperature ($20\\text{ }^\\circ\\text{C}$) with Melting Points:**
> >    * If $\\text{Room Temp} < \\text{Melting Point}$, the substance has not yet melted and is a **solid**.
> >    * If $\\text{Melting Point} < \\text{Room Temp} < \\text{Boiling Point}$, the substance has melted but not boiled and is a **liquid**.
> > 2. **Evaluate Each Acid:**
> >    * **Capric acid:** Melting point is $32\\text{ }^\\circ\\text{C}$. Since $20\\text{ }^\\circ\\text{C} < 32\\text{ }^\\circ\\text{C}$, it is a **Solid**.
> >    * **Formic acid:** Melting point is $8\\text{ }^\\circ\\text{C}$. Since $8\\text{ }^\\circ\\text{C} < 20\\text{ }^\\circ\\text{C} < 100\\text{ }^\\circ\\text{C}$, it has already melted and is a **Liquid**.
> >    * **Palmitic acid:** Melting point is $63\\text{ }^\\circ\\text{C}$. Since $20\\text{ }^\\circ\\text{C} < 63\\text{ }^\\circ\\text{C}$, it is a **Solid**.
> > 3. **Final Answer:**
> >    * Capric acid: **Solid**
> >    * Formic acid: **Liquid**
> >    * Palmitic acid: **Solid**
        `,
        keyPoints: [
            "Temperature remains constant during a state change because heat energy is used to break/form bonds rather than change kinetic energy.",
            "Pure substances have sharp, fixed melting and boiling points.",
            "Impurities lower the melting point and raise the boiling point, causing state changes to occur over a range of temperatures."
        ]
    }
];
