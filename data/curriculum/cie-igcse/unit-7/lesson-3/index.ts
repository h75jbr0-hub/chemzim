import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Reactions of Acids, Bases & Neutralisation";
export const lessonNumber = 3;

export const theoryMarkdown = `
## Reactions of Acids, Bases & Neutralisation
This lesson covers the four characteristic reactions of acids (with active metals, metal oxides, hydroxides, and carbonates), the reactions of bases (with acids and ammonium salts), the net ionic equation of neutralisation, and soil acidity treatment.
`;

const acidReactionsSvg = `
<svg viewBox="0 0 680 320" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="rxnBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
  </defs>

  <rect width="680" height="320" fill="url(#rxnBg)" stroke="#1e293b" stroke-width="2" rx="16" />

  <text x="340" y="26" fill="#f8fafc" font-size="15" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Summary of Key Acid &amp; Base Reactions</text>

  <!-- Card 1: Acid + Metal -->
  <g transform="translate(30, 48)">
    <rect width="295" height="120" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-opacity="0.3" stroke-width="1.5" />
    <text x="15" y="24" fill="#38bdf8" font-size="12" font-weight="bold">1. Acid + Reactive Metal</text>
    <text x="15" y="44" fill="#f8fafc" font-size="11">Acid + Metal → Salt + Hydrogen gas (H₂)</text>
    <text x="15" y="66" fill="#94a3b8" font-size="10">Mg(s) + H₂SO₄(aq) → MgSO₄(aq) + H₂(g)</text>
    <rect x="15" y="80" width="265" height="28" rx="6" fill="#0284c7" fill-opacity="0.15" />
    <text x="25" y="98" fill="#38bdf8" font-size="10" font-weight="bold">Observation: Effervescence / squeaky pop test</text>
  </g>

  <!-- Card 2: Acid + Carbonate -->
  <g transform="translate(355, 48)">
    <rect width="295" height="120" rx="10" fill="#0f172a" stroke="#f59e0b" stroke-opacity="0.3" stroke-width="1.5" />
    <text x="15" y="24" fill="#f59e0b" font-size="12" font-weight="bold">2. Acid + Carbonate</text>
    <text x="15" y="44" fill="#f8fafc" font-size="11">Acid + Carbonate → Salt + H₂O + CO₂ gas</text>
    <text x="15" y="66" fill="#94a3b8" font-size="10">CaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + H₂O + CO₂(g)</text>
    <rect x="15" y="80" width="265" height="28" rx="6" fill="#d97706" fill-opacity="0.15" />
    <text x="25" y="98" fill="#fbbf24" font-size="10" font-weight="bold">Observation: Fizzing / turns limewater milky</text>
  </g>

  <!-- Card 3: Acid + Base / Alkali (Neutralisation) -->
  <g transform="translate(30, 180)">
    <rect width="295" height="120" rx="10" fill="#0f172a" stroke="#10b981" stroke-opacity="0.3" stroke-width="1.5" />
    <text x="15" y="24" fill="#10b981" font-size="12" font-weight="bold">3. Neutralisation (Acid + Base)</text>
    <text x="15" y="44" fill="#f8fafc" font-size="11">Acid + Base / Alkali → Salt + Water</text>
    <text x="15" y="66" fill="#94a3b8" font-size="10">HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l)</text>
    <rect x="15" y="80" width="265" height="28" rx="6" fill="#059669" fill-opacity="0.15" />
    <text x="25" y="98" fill="#34d399" font-size="10" font-weight="bold">Net Ionic: H⁺(aq) + OH⁻(aq) → H₂O(l) (Exothermic)</text>
  </g>

  <!-- Card 4: Base + Ammonium Salt -->
  <g transform="translate(355, 180)">
    <rect width="295" height="120" rx="10" fill="#0f172a" stroke="#c084fc" stroke-opacity="0.3" stroke-width="1.5" />
    <text x="15" y="24" fill="#c084fc" font-size="12" font-weight="bold">4. Base + Ammonium Salt (Test for NH₄⁺)</text>
    <text x="15" y="44" fill="#f8fafc" font-size="11">Base + Ammonium salt → Salt + H₂O + NH₃ gas</text>
    <text x="15" y="66" fill="#94a3b8" font-size="10">Ca(OH)₂(s) + 2NH₄Cl(s) → CaCl₂ + 2H₂O + 2NH₃(g)</text>
    <rect x="15" y="80" width="265" height="28" rx="6" fill="#9333ea" fill-opacity="0.15" />
    <text x="25" y="98" fill="#e9d5ff" font-size="10" font-weight="bold">Observation: Pungent gas turns damp red litmus blue</text>
  </g>
</svg>
`;

export const lessonParts: LessonPart[] = [
  {
    id: "reactions-of-acids",
    title: "The Four Characteristic Reactions of Acids",
    type: "text",
    content: `
### 🧪 How Acids React

Acids take part in four fundamental types of reactions. All acid reactions are **exothermic** (release thermal energy to the surroundings).

> ${svgToken(acidReactionsSvg)}

> [!IMPORTANT]
> ### 🧮 1. Reaction with Reactive Metals
> * **Word Equation:** $\\text{Acid} + \\text{Reactive Metal} \\rightarrow \\text{Salt} + \\text{Hydrogen gas (H}_2)$
> * *Condition:* The metal must be **above hydrogen** in the reactivity series (e.g. $\\text{Mg}$, $\\text{Zn}$, $\\text{Fe}$). Unreactive metals like copper, silver, and gold do NOT react with dilute acids.
> * **Example:**
>   $$\\text{Mg(s)} + \\text{H}_2\\text{SO}_4\\text{(aq)} \\rightarrow \\text{MgSO}_4\\text{(aq)} + \\text{H}_2\\text{(g)}$$
> * **Type of Reaction:** Displacement & **Redox** (magnesium is oxidised from $0$ to $+2$; hydrogen is reduced from $+1$ to $0$).

> [!NOTE]
> ### ⚖️ 2. Reaction with Metal Oxides (Insoluble Bases)
> * **Word Equation:** $\\text{Acid} + \\text{Metal Oxide} \\rightarrow \\text{Salt} + \\text{Water}$
> * *Used to clean metals:* Hydrochloric acid reacts with the black copper(II) oxide coating on oxidized copper:
>   $$\\text{CuO(s)} + 2\\text{HCl(aq)} \\rightarrow \\text{CuCl}_2\\text{(aq)} + \\text{H}_2\\text{O(l)}$$
> * **Observation:** Black solid dissolves, forming a clear blue-green solution.

> [!IMPORTANT]
> ### 🧮 3. Reaction with Metal Carbonates
> * **Word Equation:** $\\text{Acid} + \\text{Carbonate} \\rightarrow \\text{Salt} + \\text{Water} + \\text{Carbon dioxide (CO}_2)$
> * **Example:**
>   $$\\text{Na}_2\\text{CO}_3\\text{(s)} + 2\\text{HCl(aq)} \\rightarrow 2\\text{NaCl(aq)} + \\text{H}_2\\text{O(l)} + \\text{CO}_2\\text{(g)}$$
> * **Observations:** Rapid effervescence (fizzing). The gas turns colourless **limewater milky/cloudy** (formation of insoluble $\\text{CaCO}_3$).
`,
    keyPoints: [
      "Acid + Metal → Salt + Hydrogen (redox reaction).",
      "Acid + Metal Oxide → Salt + Water (neutralisation).",
      "Acid + Carbonate → Salt + Water + Carbon Dioxide."
    ]
  },
  {
    id: "reactions-of-bases-and-neutralisation",
    title: "Reactions of Bases, Net Ionic Equation & Soil Acidity",
    type: "text",
    content: `
### 🧪 Neutralisation & Base Reactions

> [!IMPORTANT]
> ### 🧮 The Fundamental Net Ionic Equation of Neutralisation
> Whenever an aqueous acid reacts with an aqueous alkali, the spectator ions do not participate. The only chemical change taking place is the combination of hydrogen ions and hydroxide ions to form neutral water:
> $$\\text{H}^+\\text{(aq)} + \\text{OH}^-\\text{(aq)} \\rightarrow \\text{H}_2\\text{O(l)}$$
> * Neutralisation is predominantly an **exothermic** reaction.

> [!NOTE]
> ### 👃 Reaction of Bases with Ammonium Salts (Ammonia Gas Test)
> When any base/alkali is warmed with an ammonium salt, **ammonia gas** ($\\text{NH}_3$) is evolved:
> * **Word Equation:** $\\text{Base} + \\text{Ammonium salt} \\rightarrow \\text{Salt} + \\text{Water} + \\text{Ammonia gas}$
> * **Example:**
>   $$\\text{Ca(OH)}_2\\text{(s)} + 2\\text{NH}_4\\text{Cl(s)} \\xrightarrow{\\Delta} \\text{CaCl}_2\\text{(s)} + 2\\text{H}_2\\text{O(l)} + 2\\text{NH}_3\\text{(g)}$$
> * **Identification of Ammonia:** A pungent gas that turns **damp red litmus paper blue**.
> * *Notice:* Acids do NOT liberate ammonia from ammonium compounds; only bases do!

> [!TIP]
> ### 🚜 Agricultural Applications: Neutralising Soil Acidity
> Many crops fail to grow if soil pH drops below $6.0$ (due to acid rain or excessive ammonium fertilisers). Farmers add basic calcium compounds to neutralise soil acidity:
> 1. **Crushed Limestone / Chalk:** Calcium carbonate ($\\text{CaCO}_3$). Slow-acting, safe, and does not wash away easily.
> 2. **Quicklime / Burnt Lime:** Calcium oxide ($\\text{CaO}$). Fast-acting.
> 3. **Slaked Lime / Limewater:** Calcium hydroxide ($\\text{Ca(OH)}_2$).
`,
    keyPoints: [
      "The net ionic equation for acid-alkali neutralisation is H⁺(aq) + OH⁻(aq) → H₂O(l).",
      "Bases react with ammonium salts to release pungent ammonia gas (turns damp red litmus blue).",
      "Limestone (CaCO₃), quicklime (CaO), and slaked lime (Ca(OH)₂) are used to neutralise soil acidity."
    ]
  }
];
