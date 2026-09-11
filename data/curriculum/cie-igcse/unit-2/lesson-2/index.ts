import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Elements, Compounds and Mixtures";
export const lessonNumber = 2;

export const theoryMarkdown = `
## Elements, Compounds and Mixtures
This lesson covers the fundamental classification of matter into pure substances (elements and compounds) and impure substances (mixtures), states of purity, testing purity, criteria of purity, and types of particles.
`;

// Compact SVG Diagram 1: Classification of Matter (650x260)
const matterClassificationSvg = `
<svg viewBox="0 0 650 260" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgMatGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
    <linearGradient id="pureGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284c7" />
      <stop offset="100%" stop-color="#0369a1" />
    </linearGradient>
    <linearGradient id="impureGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#d97706" />
      <stop offset="100%" stop-color="#b45309" />
    </linearGradient>
    <linearGradient id="nodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e293b" />
      <stop offset="100%" stop-color="#0f172a" />
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="650" height="260" fill="url(#bgMatGrad)" stroke="#1e293b" stroke-width="2" rx="14" />

  <!-- Top Root: All Matter -->
  <rect x="250" y="16" width="150" height="38" rx="8" fill="#4338ca" stroke="#6366f1" stroke-width="1.5" />
  <text x="325" y="40" fill="#ffffff" font-size="14" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">All Matter</text>

  <!-- Connectors from Root -->
  <path d="M 325 54 L 325 72 L 160 72 L 160 88" fill="none" stroke="#64748b" stroke-width="2" />
  <path d="M 325 54 L 325 72 L 490 72 L 490 88" fill="none" stroke="#64748b" stroke-width="2" />

  <!-- Level 1: Pure Substances vs Impure Substances -->
  <rect x="75" y="88" width="170" height="42" rx="8" fill="url(#pureGrad)" stroke="#38bdf8" stroke-width="1.5" />
  <text x="160" y="106" fill="#ffffff" font-size="12" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Pure Substances</text>
  <text x="160" y="122" fill="#bae6fd" font-size="10" font-family="system-ui, sans-serif" text-anchor="middle">Sharp m.p. &amp; b.p.</text>

  <rect x="405" y="88" width="170" height="42" rx="8" fill="url(#impureGrad)" stroke="#fbbf24" stroke-width="1.5" />
  <text x="490" y="106" fill="#ffffff" font-size="12" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Impure (Mixtures)</text>
  <text x="490" y="122" fill="#fde68a" font-size="10" font-family="system-ui, sans-serif" text-anchor="middle">Melt / boil over a range</text>

  <!-- Connectors to Level 2 -->
  <path d="M 160 130 L 160 148 L 85 148 L 85 166" fill="none" stroke="#38bdf8" stroke-width="1.5" />
  <path d="M 160 130 L 160 148 L 235 148 L 235 166" fill="none" stroke="#38bdf8" stroke-width="1.5" />

  <path d="M 490 130 L 490 148 L 415 148 L 415 166" fill="none" stroke="#fbbf24" stroke-width="1.5" />
  <path d="M 490 130 L 490 148 L 565 148 L 565 166" fill="none" stroke="#fbbf24" stroke-width="1.5" />

  <!-- Level 2 Nodes -->
  <rect x="18" y="166" width="134" height="74" rx="8" fill="url(#nodeGrad)" stroke="#0284c7" stroke-width="1.2" />
  <text x="85" y="188" fill="#38bdf8" font-size="12" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Elements</text>
  <text x="85" y="206" fill="#94a3b8" font-size="10" font-family="system-ui, sans-serif" text-anchor="middle">One type of atom</text>
  <text x="85" y="224" fill="#64748b" font-size="9" font-family="system-ui, sans-serif" text-anchor="middle">He, O₂, Fe, Na</text>

  <rect x="168" y="166" width="134" height="74" rx="8" fill="url(#nodeGrad)" stroke="#0284c7" stroke-width="1.2" />
  <text x="235" y="188" fill="#38bdf8" font-size="12" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Compounds</text>
  <text x="235" y="206" fill="#94a3b8" font-size="10" font-family="system-ui, sans-serif" text-anchor="middle">&gt;=2 elements bonded</text>
  <text x="235" y="224" fill="#64748b" font-size="9" font-family="system-ui, sans-serif" text-anchor="middle">H₂O, NaCl, CaCO₃</text>

  <rect x="348" y="166" width="134" height="74" rx="8" fill="url(#nodeGrad)" stroke="#d97706" stroke-width="1.2" />
  <text x="415" y="188" fill="#fbbf24" font-size="11" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Homogeneous</text>
  <text x="415" y="206" fill="#94a3b8" font-size="10" font-family="system-ui, sans-serif" text-anchor="middle">Uniform composition</text>
  <text x="415" y="224" fill="#64748b" font-size="9" font-family="system-ui, sans-serif" text-anchor="middle">Salt solution, Brass</text>

  <rect x="498" y="166" width="134" height="74" rx="8" fill="url(#nodeGrad)" stroke="#d97706" stroke-width="1.2" />
  <text x="565" y="188" fill="#fbbf24" font-size="11" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Heterogeneous</text>
  <text x="565" y="206" fill="#94a3b8" font-size="10" font-family="system-ui, sans-serif" text-anchor="middle">Non-uniform mix</text>
  <text x="565" y="224" fill="#64748b" font-size="9" font-family="system-ui, sans-serif" text-anchor="middle">Sand in water, Chalk</text>
</svg>
`;

// Compact SVG Diagram 2: Particle Types (Single Atoms, Molecules, Ions) (650x240)
const particleTypesSvg = `
<svg viewBox="0 0 650 240" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgPartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
    <radialGradient id="heSphere" cx="40%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="100%" stop-color="#0284c7" />
    </radialGradient>
    <radialGradient id="oSphere" cx="40%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#f87171" />
      <stop offset="100%" stop-color="#dc2626" />
    </radialGradient>
    <radialGradient id="hSphere" cx="40%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#e2e8f0" />
      <stop offset="100%" stop-color="#94a3b8" />
    </radialGradient>
    <radialGradient id="naSphere" cx="40%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#fbbf24" />
      <stop offset="100%" stop-color="#d97706" />
    </radialGradient>
    <radialGradient id="clSphere" cx="40%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#34d399" />
      <stop offset="100%" stop-color="#059669" />
    </radialGradient>
  </defs>

  <rect width="650" height="240" fill="url(#bgPartGrad)" stroke="#1e293b" stroke-width="2" rx="14" />

  <!-- Card 1: Single Atoms -->
  <g transform="translate(15, 20)">
    <rect width="140" height="200" rx="10" fill="#0f172a" stroke="#334155" stroke-width="1.2" />
    <text x="70" y="26" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">Single Atoms</text>
    <text x="70" y="42" fill="#64748b" font-size="9" text-anchor="middle">Monatomic (Noble gas)</text>
    <circle cx="45" cy="90" r="15" fill="url(#heSphere)" stroke="#070f1e" stroke-width="1" />
    <text x="45" y="94" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">He</text>
    <circle cx="95" cy="130" r="15" fill="url(#heSphere)" stroke="#070f1e" stroke-width="1" />
    <text x="95" y="134" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">Ne</text>
    <circle cx="50" cy="165" r="17" fill="url(#heSphere)" stroke="#070f1e" stroke-width="1" />
    <text x="50" y="169" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">Ar</text>
  </g>

  <!-- Card 2: Element Molecules -->
  <g transform="translate(175, 20)">
    <rect width="140" height="200" rx="10" fill="#0f172a" stroke="#334155" stroke-width="1.2" />
    <text x="70" y="26" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">Element Molecules</text>
    <text x="70" y="42" fill="#64748b" font-size="9" text-anchor="middle">Diatomic (Same atoms)</text>
    <circle cx="55" cy="90" r="14" fill="url(#oSphere)" />
    <circle cx="79" cy="90" r="14" fill="url(#oSphere)" />
    <text x="67" y="118" fill="#fca5a5" font-size="10" font-weight="bold" text-anchor="middle">O₂ Molecule</text>
    <circle cx="58" cy="155" r="11" fill="url(#hSphere)" />
    <circle cx="76" cy="155" r="11" fill="url(#hSphere)" />
    <text x="67" y="180" fill="#cbd5e1" font-size="10" font-weight="bold" text-anchor="middle">H₂ Molecule</text>
  </g>

  <!-- Card 3: Compound Molecules -->
  <g transform="translate(335, 20)">
    <rect width="140" height="200" rx="10" fill="#0f172a" stroke="#334155" stroke-width="1.2" />
    <text x="70" y="26" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">Compound Molecules</text>
    <text x="70" y="42" fill="#64748b" font-size="9" text-anchor="middle">Different atoms bonded</text>
    <circle cx="70" cy="92" r="16" fill="url(#oSphere)" />
    <circle cx="52" cy="108" r="9" fill="url(#hSphere)" />
    <circle cx="88" cy="108" r="9" fill="url(#hSphere)" />
    <text x="70" y="132" fill="#f87171" font-size="10" font-weight="bold" text-anchor="middle">H₂O (Water)</text>
    <circle cx="70" cy="160" r="12" fill="#475569" />
    <circle cx="48" cy="160" r="12" fill="url(#oSphere)" />
    <circle cx="92" cy="160" r="12" fill="url(#oSphere)" />
    <text x="70" y="185" fill="#cbd5e1" font-size="10" font-weight="bold" text-anchor="middle">CO₂ (Carbon dioxide)</text>
  </g>

  <!-- Card 4: Charged Ions -->
  <g transform="translate(495, 20)">
    <rect width="140" height="200" rx="10" fill="#0f172a" stroke="#334155" stroke-width="1.2" />
    <text x="70" y="26" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">Ions (Cation / Anion)</text>
    <text x="70" y="42" fill="#64748b" font-size="9" text-anchor="middle">Species carrying charge</text>
    <circle cx="48" cy="95" r="13" fill="url(#naSphere)" />
    <text x="48" y="99" fill="#0f172a" font-size="10" font-weight="bold" text-anchor="middle">Na⁺</text>
    <circle cx="92" cy="95" r="17" fill="url(#clSphere)" />
    <text x="92" y="99" fill="#0f172a" font-size="11" font-weight="bold" text-anchor="middle">Cl⁻</text>
    <text x="70" y="125" fill="#86efac" font-size="10" font-weight="bold" text-anchor="middle">Simple Ions</text>
    <circle cx="70" cy="158" r="18" fill="#4338ca" stroke="#818cf8" stroke-width="1" />
    <text x="70" y="162" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">SO₄²⁻</text>
    <text x="70" y="186" fill="#c7d2fe" font-size="9" font-weight="bold" text-anchor="middle">Polyatomic Group</text>
  </g>
</svg>
`;

// Compact SVG Diagram 3: Criteria of Purity (650x250)
const purityCurvesSvg = `
<svg viewBox="0 0 650 250" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgCurveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
  </defs>

  <rect width="650" height="250" fill="url(#bgCurveGrad)" stroke="#1e293b" stroke-width="2" rx="14" />
  <text x="325" y="26" fill="#f8fafc" font-size="13" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Criterion of Purity: Sharp vs Variable Melting &amp; Boiling Points</text>

  <!-- Graph 1: Pure Substance -->
  <g transform="translate(45, 45)">
    <rect width="255" height="180" rx="8" fill="#0b1329" stroke="#1e293b" stroke-width="1" />
    <text x="127" y="22" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">Pure Substance (Water)</text>
    <line x1="40" y1="145" x2="235" y2="145" stroke="#64748b" stroke-width="1.5" />
    <line x1="40" y1="145" x2="40" y2="35" stroke="#64748b" stroke-width="1.5" />
    <text x="235" y="160" fill="#94a3b8" font-size="9" text-anchor="end">Time / s</text>
    <text x="35" y="32" fill="#94a3b8" font-size="9" text-anchor="end">Temp / °C</text>
    <path d="M 40 135 L 75 110 L 140 110 L 195 55 L 230 55" fill="none" stroke="#10b981" stroke-width="2.5" />
    <line x1="75" y1="110" x2="140" y2="110" stroke="#34d399" stroke-width="3" />
    <circle cx="107" cy="110" r="3" fill="#ffffff" />
    <text x="107" y="100" fill="#34d399" font-size="9" font-weight="bold" text-anchor="middle">Sharp m.p. (0 °C)</text>
    <text x="210" y="48" fill="#34d399" font-size="9" font-weight="bold" text-anchor="middle">Sharp b.p. (100 °C)</text>
  </g>

  <!-- Graph 2: Impure Substance -->
  <g transform="translate(345, 45)">
    <rect width="255" height="180" rx="8" fill="#0b1329" stroke="#1e293b" stroke-width="1" />
    <text x="127" y="22" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">Impure Substance (Seawater / Mix)</text>
    <line x1="40" y1="145" x2="235" y2="145" stroke="#64748b" stroke-width="1.5" />
    <line x1="40" y1="145" x2="40" y2="35" stroke="#64748b" stroke-width="1.5" />
    <text x="235" y="160" fill="#94a3b8" font-size="9" text-anchor="end">Time / s</text>
    <text x="35" y="32" fill="#94a3b8" font-size="9" text-anchor="end">Temp / °C</text>
    <path d="M 40 142 L 75 125 L 145 105 L 195 62 L 230 45" fill="none" stroke="#f59e0b" stroke-width="2.5" />
    <text x="110" y="138" fill="#fbbf24" font-size="9" font-weight="bold" text-anchor="middle">m.p. &lt; 0 °C (Over a range)</text>
    <text x="180" y="55" fill="#fbbf24" font-size="9" font-weight="bold" text-anchor="middle">b.p. &gt; 100 °C (Over a range)</text>
  </g>
</svg>
`;

export const lessonParts: LessonPart[] = [
  {
    id: "classification-pure-impure",
    title: "Pure Substances vs. Mixtures",
    type: "text",
    content: `
### 🧪 Pure Substances vs. Impure Substances (Mixtures)

In chemistry, all matter can be classified based on its composition and purity:

> [!NOTE]
> ### ⚛️ 1. Pure Substances
> A **pure substance** consists of only one single type of element or compound with **no other substance mixed in**.
> * **Fixed, Sharp Melting & Boiling Points:** Pure substances have an exact, sharp melting and boiling point (e.g. pure water melts at exactly $0\\text{ }^{\\circ}\\text{C}$ and boils at $100\\text{ }^{\\circ}\\text{C}$ at $1\\text{ atm}$).
> * **Uniform Composition:** Their composition is completely identical throughout the entire substance.
> * **Two Classes:**
>   1. **Elements:** Substances made of only **one type of atom** (same atomic number). Cannot be split into anything simpler by chemical reactions.
>   2. **Compounds:** Substances containing **two or more different elements chemically bonded together in a fixed ratio**.

> [!NOTE]
> ### 🥣 2. Impure Substances (Mixtures)
> A **mixture** contains **two or more substances (elements or compounds) physically mixed together without chemical bonds in no fixed ratio**.
> * **Melting & Boiling Over a Range:** Impure substances do **not** have sharp melting or boiling points; they melt and boil gradually **over a range of temperatures**.
> * **Retain Properties:** The constituent substances retain their individual physical and chemical properties.
> * **Easy Physical Separation:** Can be separated into pure components by simple physical techniques (filtration, evaporation, simple distillation, fractional distillation, chromatography, or crystallization).
> * **Two Main Types:**
>   * **Homogeneous Mixture:** Uniformly distributed throughout (e.g. sugar or salt dissolved in water, clean air, alloys such as brass).
>   * **Heterogeneous Mixture:** Non-uniformly distributed with visible phases (e.g. sand in water, oil and water, chalk suspension).

> ${svgToken(matterClassificationSvg)}

> [!IMPORTANT]
> ### 🧮 Summary Comparison: Elements, Compounds & Mixtures
> | Feature | Element | Compound | Mixture |
> | :--- | :--- | :--- | :--- |
> | **Composition** | Only 1 type of atom | $\\ge 2$ different elements chemically combined | $\\ge 2$ substances physically intermingled |
> | **Ratio** | Single element | Fixed, definite mass ratio ($H_2O$ is always $2:1$) | Any variable ratio (weak or concentrated) |
> | **Formation** | Fundamental substance | Chemical reaction with heat change (exothermic/endothermic) | Physical mixing with little or no thermal change |
> | **Separation** | Cannot be broken down chemically | Separated only by chemical methods (electrolysis, thermal decomposition) | Easily separated by physical separation methods |
> | **Properties** | Distinct elemental properties | Completely different from constituent elements | Each component retains its original properties |
> | **m.p. & b.p.** | Sharp and precise | Sharp and precise | Melts and boils over a wide range |

> [!EXAMPLE]
> #### 📝 Worked Example 1: Describing a Compound
> **Question:** Which statement correctly describes a chemical compound?
> 
> **A** It contains two or more elements forming an alloy
> 
> **B** It contains two or more elements chemically combined in a fixed ratio
> 
> **C** It contains two or more elements physically combined in variable proportions
> 
> **D** It contains two or more elements that can be easily separated by filtration
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Recall the Definition of a Compound:**
> >    * A compound is formed when two or more different elements chemically bond together in a fixed ratio, involving a chemical reaction.
> > 2. **Evaluate the Incorrect Options:**
> >    * Option A is an alloy, which is a physical mixture.
> >    * Option C describes a mixture, not a compound.
> >    * Option D describes a heterogeneous mixture separated by physical means.
> > 3. **Conclusion:**
> >    * The correct option is **B**.

> [!EXAMPLE]
> #### 📝 Worked Example 2: Classifying Pure Substances and Mixtures
> **Question:** Which row correctly classifies the substances into element, compound, and mixture?
> 
> | Row | Element | Compound | Mixture |
> | :---: | :---: | :---: | :---: |
> | **A** | Water | Sulfur | Brass |
> | **B** | Sulfur | Brass | Water |
> | **C** | Brass | Sulfur | Water |
> | **D** | Sulfur | Water | Brass |
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Analyze Each Substance:**
> >    * **Sulfur ($S_8$):** Consists exclusively of sulfur atoms, so it is an **element**.
> >    * **Water ($H_2O$):** Hydrogen and oxygen chemically bonded in a fixed $2:1$ ratio, so it is a **compound**.
> >    * **Brass:** An alloy of copper and zinc mixed physically without fixed stoichiometry, so it is a **mixture**.
> > 2. **Match with Rows:**
> >    * Row D lists: Element = Sulfur, Compound = Water, Mixture = Brass.
> > 3. **Conclusion:**
> >    * The correct option is **D**.
    `,
    keyPoints: [
      "Pure substances (elements and compounds) have sharp, fixed melting and boiling points.",
      "Compounds have elements chemically bonded in fixed ratios and have distinct properties from their elements.",
      "Mixtures contain substances physically mixed without chemical bonds and melt/boil over a temperature range."
    ]
  },
  {
    id: "purity-criteria-effects",
    title: "Criteria of Purity & Impurity Effects",
    type: "text",
    content: `
### 🌡️ Criteria of Purity and the Effect of Impurities

Determining whether a chemical substance is pure is of critical importance in pharmacy, food manufacturing, and chemical research.

> [!IMPORTANT]
> ### 🔍 Criterion of Purity: Sharp Melting & Boiling Points
> * A **pure solid** melts at an exact, **sharp melting point**.
> * A **pure liquid** boils at an exact, **sharp boiling point**.
> * If a substance is **impure (contains dissolved or mixed impurities)**:
>   1. **Melting Point is Depressed (Decreased):** The solid melts at a **lower temperature** than the pure substance and melts **over a range of temperatures**.
>   2. **Boiling Point is Elevated (Increased):** The liquid boils at a **higher temperature** than the pure liquid and boils **over a range of temperatures**.

> ${svgToken(purityCurvesSvg)}

> [!BOX]
> ### 💧 Example: Water with Dissolved Salt Impurity
> Pure water has:
> * $\\text{Melting point} = 0\\text{ }^{\\circ}\\text{C}$
> * $\\text{Boiling point} = 100\\text{ }^{\\circ}\\text{C}$
> 
> If salt (impurity) is dissolved in the water:
> * $\\text{Melting point} = -3\\text{ }^{\\circ}\\text{C}$ (lower than $0\\text{ }^{\\circ}\\text{C}$)
> * $\\text{Boiling point} = 104\\text{ }^{\\circ}\\text{C}$ (higher than $100\\text{ }^{\\circ}\\text{C}$)

> [!CAUTION]
> ### 🛑 Cambridge Exam Focus: Why Purity Matters
> In Cambridge IGCSE examinations, you are frequently asked: *"Which substance must be pure for its intended use?"*
> * **Food additives and Medical Drugs (Pharmaceuticals):** MUST BE 100% PURE! Even tiny traces of impurities in medicines can cause severe side-effects or fatal toxic reactions.
> * By contrast, tap water for washing a car, limestone for extracting iron, or crude oil for fractional distillation do not require high purity.

> [!EXAMPLE]
> #### 📝 Worked Example 3: Identifying the Effect of an Impurity
> **Question:** What could be the melting point and boiling point of water containing a dissolved solid impurity?
> 
> | Row | Melting Point / $^{\\circ}\\text{C}$ | Boiling Point / $^{\\circ}\\text{C}$ |
> | :---: | :---: | :---: |
> | **A** | $+3$ | $96$ |
> | **B** | $+3$ | $104$ |
> | **C** | $-3$ | $96$ |
> | **D** | $-3$ | $104$ |
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Recall the Rules for Impurities in Water:**
> >    * Pure water freezes/melts at $0\\text{ }^{\\circ}\\text{C}$ and boils at $100\\text{ }^{\\circ}\\text{C}$.
> >    * Adding a dissolved impurity **depresses the melting point** (it must become negative, $< 0\\text{ }^{\\circ}\\text{C}$).
> >    * Adding a dissolved impurity **elevates the boiling point** (it must become higher, $> 100\\text{ }^{\\circ}\\text{C}$).
> > 2. **Check the Options:**
> >    * Melting point must be $-3\\text{ }^{\\circ}\\text{C}$.
> >    * Boiling point must be $104\\text{ }^{\\circ}\\text{C}$.
> > 3. **Conclusion:**
> >    * The correct option is **D**.

> [!EXAMPLE]
> #### 📝 Worked Example 4: Testing Purity of Crystals
> **Question:** Which method can be used by a chemist to test whether crystals of aspirin are pure?
> 
> **A** Measuring the size of the crystals
> 
> **B** Determining the sharp melting point of the crystals
> 
> **C** Observing the colour of the crystals
> 
> **D** Testing the solubility of the crystals in hot water
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the Criterion of Purity:**
> >    * Crystal size, colour, or general solubility cannot confirm purity because impurities can form crystals of similar appearance.
> >    * The definitive physical test for a solid is determining its melting point: a pure substance melts sharply at its known literature value.
> > 2. **Conclusion:**
> >    * The correct option is **B**.
    `,
    keyPoints: [
      "Purity of a solid is confirmed by a sharp, precise melting point.",
      "Impurities decrease (depress) the melting point and raise (elevate) the boiling point.",
      "Medical drugs and food products must be strictly pure to avoid harmful toxicity."
    ]
  },
  {
    id: "types-of-particles-and-ions",
    title: "Types of Particles & Common Ionic Groups",
    type: "text",
    content: `
### ⚛️ Types of Particles in Chemistry

In Cambridge IGCSE, you must clearly distinguish between three fundamental types of particles:

> [!NOTE]
> ### 🔍 The Three Particle Types
> 1. **Single Atoms:**
>    * The smallest particles of an element that cannot be broken down further by chemical means.
>    * Found naturally as **monatomic elements** in the noble gases of Group VIII (e.g. Helium $He$, Neon $Ne$, Argon $Ar$).
> 2. **Molecules:**
>    * Consist of **two or more atoms joined together chemically by covalent bonds**.
>    * **Molecules of Elements:** Composed of identical atoms:
>      * Diatomic gases: $H_2, N_2, O_2, F_2, Cl_2, Br_2, I_2$.
>      * Polyatomic elements: Phosphorus $P_4$, Sulfur $S_8$.
>    * **Molecules of Compounds:** Composed of different non-metal atoms:
>      * Water $H_2O$, Carbon dioxide $CO_2$, Methane $CH_4$, Nitrogen oxide chloride $NOCl$.
> 3. **Ions:**
>    * Any atom or group of bonded atoms that carries an **electrical charge** due to the loss or gain of electrons:
>      * **Simple monoatomic ions:** Chloride $Cl^-$, Sodium $Na^+$, Oxide $O^{2-}$.
>      * **Compound (Polyatomic) ions:** Groups of covalently bonded atoms that carry an overall charge.

> ${svgToken(particleTypesSvg)}

> [!IMPORTANT]
> ### 📋 Essential Compound Ions (Must Memorise for Cambridge IGCSE)
> | Ion Name | Formula & Charge | Valency |
> | :--- | :---: | :---: |
> | **Ammonium** | $NH_4^+$ | 1 |
> | **Hydroxide** | $OH^-$ | 1 |
> | **Nitrate** | $NO_3^-$ | 1 |
> | **Ethanoate (Acetate)** | $CH_3COO^-$ | 1 |
> | **Hydrogen carbonate** | $HCO_3^-$ | 1 |
> | **Sulfate** | $SO_4^{2-}$ | 2 |
> | **Sulfite** | $SO_3^{2-}$ | 2 |
> | **Carbonate** | $CO_3^{2-}$ | 2 |
> | **Phosphate** | $PO_4^{3-}$ | 3 |

> [!TIP]
> ### 💡 Rules for Positive & Negative Ions
> * **Hydrogen and metals** lose electrons to form positive ions (cations) with the same name as the element (e.g. Sodium $\\rightarrow$ Sodium ion $Na^+$).
> * **Non-metals** gain electrons to form simple negative ions (anions), and their name changes to end in **-ide** (e.g. Chlorine $\\rightarrow$ Chlor**ide** $Cl^-$, Oxygen $\\rightarrow$ Ox**ide** $O^{2-}$, Nitrogen $\\rightarrow$ Nitr**ide** $N^{3-}$).
> * Ions ending in **-ate** or **-ite** contain oxygen atoms bonded to another element (e.g. Nitrate $NO_3^-$, Sulfate $SO_4^{2-}$).

> [!EXAMPLE]
> #### 📝 Worked Example 5: Molecule of Pure Gas NOCl
> **Question:** A gas has the molecular formula $NOCl$. Each molecule contains 1 nitrogen atom, 1 oxygen atom, and 1 chlorine atom bonded together. Which statement correctly describes a sample of the pure gas $NOCl$?
> 
> **A** It is a mixture of nitrogen gas, oxygen gas, and chlorine gas
> 
> **B** It contains triatomic compound molecules, with each molecule containing one N, one O, and one Cl atom chemically bonded
> 
> **C** It contains separate monatomic single atoms floating independently
> 
> **D** It contains oppositely charged ions held in a giant lattice
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Analyze the Formula:**
> >    * $NOCl$ represents a molecule consisting of three different non-metal atoms bonded together (a compound molecule).
> > 2. **Check Purity:**
> >    * Since it is pure gas $NOCl$, every particle is an identical $NOCl$ molecule. It is not a mixture of separate gases.
> > 3. **Conclusion:**
> >    * The correct option is **B**.
    `,
    keyPoints: [
      "Atoms are the smallest chemical units; noble gases exist as single monatomic atoms.",
      "Molecules consist of two or more atoms chemically joined (e.g. O₂, H₂O).",
      "Compound ions (like NH₄⁺, OH⁻, NO₃⁻, SO₄²⁻, CO₃²⁻) are polyatomic groups that carry a net electrical charge."
    ]
  },
  {
    id: "metals-vs-non-metals",
    title: "Metals vs. Non-Metals & Exceptions",
    type: "text",
    content: `
### 🔨 Metals and Non-Metals

Over $80\\%$ of all known elements in the Periodic Table are **metals**, located to the left and center of the stepped dividing line, while **non-metals** are located on the top right.

> [!BOX]
> ### 📊 General Physical Properties: Metals vs Non-Metals
> | Property | Metals | Non-Metals |
> | :--- | :--- | :--- |
> | **Electrical Conductivity** | **Good conductors** (free delocalised electrons) | **Poor / Insulators** (no free electrons) |
> | **Thermal Conductivity** | **Good conductors** of heat | **Poor / Insulators** of heat |
> | **Melting & Boiling Points** | **High** (solids at r.t.p., except Mercury $Hg$) | **Low** (mostly gases or low m.p. solids at r.t.p.) |
> | **Malleability & Ductility** | **Malleable** (hammered into sheets) & **ductile** | **Brittle** (solids shatter when struck) |
> | **Appearance** | **Shiny (lustrous)** when freshly cut | **Dull** surface in solid state |
> | **Sonorous** | **Yes** (rings with a clear pitch when struck) | **No** (makes a dull thud) |
> | **Density** | **High density** (heavy for their size) | **Low density** |
> | **Ion Formed** | Form **positive ions (cations)** | Form **negative ions (anions)** |
> | **Nature of Oxides** | Form **basic oxides** (or amphoteric) | Form **acidic oxides** (or neutral) |

> [!WARNING]
> ### ⚠️ Critical Cambridge Exam Exceptions
> Never assume all metals or non-metals strictly follow every single general rule! Cambridge exams specifically test these exceptions:
> 1. **Soft Metals:** Alkali metals (Lithium, Sodium, Potassium) are soft enough to be cut easily with a knife and float on water (low density).
> 2. **Liquid Metal:** **Mercury ($Hg$)** is a liquid at room temperature ($25\\text{ }^{\\circ}\\text{C}$).
> 3. **Non-metal Forming Positive Ions:** **Hydrogen ($H$)** is a non-metal, yet it routinely loses an electron to form a positive ion ($H^+$).
> 4. **Carbon Allotrope Exceptions:**
>    * **Graphite:** A non-metal, yet it is a **good electrical conductor** due to delocalised electrons between its hexagonal layers, and has an **exceptionally high melting point** ($> 3600\\text{ }^{\\circ}\\text{C}$).
>    * **Diamond:** Extremely hard with a very high melting point due to its giant tetrahedral 3D covalent network.

> [!EXAMPLE]
> #### 📝 Worked Example 6: Identifying Properties of Non-Metals
> **Question:** Which property is characteristic of non-metals rather than metals?
> 
> **A** They form basic oxides when burned in oxygen
> 
> **B** They are good conductors of electricity in the solid state
> 
> **C** They are brittle and shatter when struck with a hammer
> 
> **D** They ring with a sonorous sound when struck
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Evaluate Metal Characteristics:**
> >    * Metals form basic oxides, conduct electricity, and are sonorous.
> > 2. **Evaluate Non-Metal Characteristics:**
> >    * Non-metals in the solid state are brittle because directional covalent or intermolecular attractions crack and shatter under stress.
> > 3. **Conclusion:**
> >    * The correct option is **C**.
    `,
    keyPoints: [
      "Metals are malleable, ductile, sonorous conductors that form basic oxides and positive ions.",
      "Non-metals are brittle insulators that form acidic oxides and negative ions.",
      "Key exceptions include Mercury (liquid metal), Sodium (soft metal), and Graphite (conducting non-metal)."
    ]
  }
];


