import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Classification of Oxides: Basic, Acidic, Amphoteric & Neutral";
export const lessonNumber = 4;

export const theoryMarkdown = `
## Classification of Oxides: Basic, Acidic, Amphoteric & Neutral
This lesson covers the classification of oxides based on metallic and non-metallic character, their acid-base behavior, and the crucial distinction between acidic, basic, amphoteric (Al₂O₃, ZnO), and neutral oxides (CO, NO, N₂O, H₂O).
`;

const oxidesTreeSvg = `
<svg viewBox="0 0 680 320" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="oxBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
  </defs>

  <rect width="680" height="320" fill="url(#oxBg)" stroke="#1e293b" stroke-width="2" rx="16" />

  <text x="340" y="26" fill="#f8fafc" font-size="15" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Classification Tree of Oxides in Chemistry</text>

  <!-- Metals Branch -->
  <g transform="translate(30, 48)">
    <rect width="300" height="250" rx="12" fill="#0f172a" stroke="#38bdf8" stroke-opacity="0.3" stroke-width="1.5" />
    <rect x="0" y="0" width="300" height="32" rx="12" fill="#0284c7" fill-opacity="0.2" />
    <text x="150" y="22" fill="#38bdf8" font-size="13" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Metal Oxides (Mostly Ionic Solids)</text>

    <!-- Basic Oxides -->
    <g transform="translate(15, 45)">
      <rect width="270" height="90" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-opacity="0.4" stroke-width="1" />
      <text x="12" y="20" fill="#38bdf8" font-size="12" font-weight="bold">1. Basic Oxides (React with acids only)</text>
      <text x="12" y="38" fill="#94a3b8" font-size="10">• Soluble in water (Alkalis): Na₂O, K₂O, CaO</text>
      <text x="12" y="54" fill="#94a3b8" font-size="10">• Insoluble in water: CuO, FeO, Fe₂O₃, MgO</text>
      <text x="12" y="74" fill="#34d399" font-size="10" font-weight="bold">CuO + 2HCl → CuCl₂ + H₂O</text>
    </g>

    <!-- Amphoteric Oxides -->
    <g transform="translate(15, 145)">
      <rect width="270" height="90" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-opacity="0.4" stroke-width="1" />
      <text x="12" y="20" fill="#f59e0b" font-size="12" font-weight="bold">2. Amphoteric Oxides (Dual Nature!)</text>
      <text x="12" y="38" fill="#fde047" font-size="10" font-weight="bold">React with BOTH acids AND strong alkalis:</text>
      <text x="12" y="54" fill="#94a3b8" font-size="10">• Aluminium oxide: Al₂O₃</text>
      <text x="12" y="70" fill="#94a3b8" font-size="10">• Zinc oxide: ZnO</text>
    </g>
  </g>

  <!-- Non-Metals Branch -->
  <g transform="translate(350, 48)">
    <rect width="300" height="250" rx="12" fill="#0f172a" stroke="#f43f5e" stroke-opacity="0.3" stroke-width="1.5" />
    <rect x="0" y="0" width="300" height="32" rx="12" fill="#e11d48" fill-opacity="0.2" />
    <text x="150" y="22" fill="#f43f5e" font-size="13" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Non-Metal Oxides (Covalent, Mostly Gases)</text>

    <!-- Acidic Oxides -->
    <g transform="translate(15, 45)">
      <rect width="270" height="90" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-opacity="0.4" stroke-width="1" />
      <text x="12" y="20" fill="#f43f5e" font-size="12" font-weight="bold">1. Acidic Oxides (React with alkalis/bases)</text>
      <text x="12" y="38" fill="#94a3b8" font-size="10">• Dissolve in water to form acids (pH &lt; 7):</text>
      <text x="12" y="54" fill="#94a3b8" font-size="10">  CO₂, SO₂, SO₃, NO₂, P₄O₁₀</text>
      <text x="12" y="74" fill="#34d399" font-size="10" font-weight="bold">CO₂ + 2NaOH → Na₂CO₃ + H₂O</text>
    </g>

    <!-- Neutral Oxides -->
    <g transform="translate(15, 145)">
      <rect width="270" height="90" rx="8" fill="#1e293b" stroke="#a855f7" stroke-opacity="0.4" stroke-width="1" />
      <text x="12" y="20" fill="#c084fc" font-size="12" font-weight="bold">2. Neutral Oxides (Non-reactive)</text>
      <text x="12" y="38" fill="#e9d5ff" font-size="10" font-weight="bold">Do NOT react with acids OR bases:</text>
      <text x="12" y="54" fill="#94a3b8" font-size="10">• Carbon monoxide (CO)</text>
      <text x="12" y="70" fill="#94a3b8" font-size="10">• Dinitrogen oxide (N₂O), NO, Water (H₂O)</text>
    </g>
  </g>
</svg>
`;

export const lessonParts: LessonPart[] = [
  {
    id: "classification-of-oxides",
    title: "Basic Oxides vs. Acidic Oxides",
    type: "text",
    content: `
### 🌋 The Four Classes of Oxides

When elements burn in oxygen, they form chemical oxides. Oxides are categorized into four distinct classes:

> ${svgToken(oxidesTreeSvg)}

> [!NOTE]
> ### 🔵 1. Basic Oxides
> * Formed by **metallic elements** (Group I, II, and transition metals).
> * **Chemical Behavior:** They react with acids to form a salt and water (neutralisation).
> * They do NOT react with alkalis.
> * **Soluble Basic Oxides (Alkalis):** Group I and II oxides dissolve in water to give alkaline solutions ($\text{pH} > 7$):
>   $$\text{Na}_2\text{O(s)} + \text{H}_2\text{O(l)} \rightarrow 2\text{NaOH(aq)}$$
>   $$\text{CaO(s)} + \text{H}_2\text{O(l)} \rightarrow \text{Ca(OH)}_2\text{(aq)}$$
> * **Insoluble Basic Oxides:** Most other metal oxides ($\text{CuO}$, $\text{MgO}$, $\text{Fe}_2\text{O}_3$) do not dissolve in water, but dissolve in hot acids:
>   $$\text{MgO(s)} + 2\text{HNO}_3\text{(aq)} \rightarrow \text{Mg(NO}_3)_2\text{(aq)} + \text{H}_2\text{O(l)}$$

> [!IMPORTANT]
> ### 🔴 2. Acidic Oxides
> * Formed by **non-metallic elements** (e.g. $\text{C}$, $\text{S}$, $\text{N}$, $\text{P}$).
> * **Chemical Behavior:** They react with bases and alkalis to form a salt and water:
>   $$\\text{CO}_2\\text{(g)} + 2\\text{NaOH(aq)} \\rightarrow \\text{Na}_2\\text{CO}_3\\text{(aq)} + \\text{H}_2\\text{O(l)}$$
>   $$\\text{SiO}_2\\text{(s)} + \\text{CaO(s)} \\rightarrow \\text{CaSiO}_3\\text{(l)} \\quad \\text{(Slag formation in blast furnace!)}$$
> * When dissolved in water, they form acidic solutions with **$\text{pH} < 7$** (turns Universal Indicator red/orange):
>   $$\text{CO}_2\text{(g)} + \text{H}_2\text{O(l)} \rightarrow \text{H}_2\text{CO}_3\text{(aq)} \quad \text{(carbonic acid)}$$
>   $$\text{SO}_2\text{(g)} + \text{H}_2\text{O(l)} \rightarrow \text{H}_2\text{SO}_3\text{(aq)} \quad \text{(sulfurous acid)}$$
`,
    keyPoints: [
      "Metal oxides are typically basic; they neutralise acids to form salt and water.",
      "Non-metal oxides are typically acidic; they dissolve in water to give solutions with pH < 7.",
      "Acidic oxides react with alkalis to form salts."
    ]
  },
  {
    id: "amphoteric-and-neutral-oxides",
    title: "Amphoteric Oxides & Neutral Oxides",
    type: "text",
    content: `
### ⚖️ Special Classes: Amphoteric vs. Neutral Oxides

> [!WARNING]
> ### ⚠️ 3. Amphoteric Oxides (The "Double Agents")
> **Amphoteric oxides** are metallic oxides that react with **BOTH acids AND bases** to produce a salt and water!
> * The two mandatory Cambridge examples are **Aluminium oxide ($\text{Al}_2\text{O}_3$)** and **Zinc oxide ($\text{ZnO}$)**:
> 
> 1. **Acting as a Base (Reacting with Acid):**
>    $$\text{Al}_2\text{O}_3\text{(s)} + 6\text{HCl(aq)} \rightarrow 2\text{AlCl}_3\text{(aq)} + 3\text{H}_2\text{O(l)}$$
> 2. **Acting as an Acid (Reacting with Alkali):**
>    $$\text{Al}_2\text{O}_3\text{(s)} + 2\text{NaOH(aq)} \rightarrow 2\text{NaAlO}_2\text{(aq)} + \text{H}_2\text{O(l)} \quad \text{(sodium aluminate)}$$
>    $$\text{ZnO(s)} + 2\text{NaOH(aq)} \rightarrow \text{Na}_2\text{ZnO}_2\text{(aq)} + \text{H}_2\text{O(l)} \quad \text{(sodium zincate)}$$

> [!NOTE]
> ### ⚪ 4. Neutral Oxides
> **Neutral oxides** are non-metal oxides that show **neither acidic nor basic properties**.
> * They do NOT react with acids.
> * They do NOT react with bases or alkalis.
> * When dissolved or bubbled through water, the solution remains at **$\text{pH} = 7$**.
> * **The 4 Key Examples:**
>   1. **Carbon monoxide ($\text{CO}$)**
>   2. **Nitrogen monoxide ($\text{NO}$)**
>   3. **Dinitrogen oxide ($\text{N}_2\text{O}$, "laughing gas", used by dentists as anesthetic)**
>   4. **Water ($\text{H}_2\text{O}$)**

> [!EXAMPLE]
> #### 📝 Worked Example 2: Deducing Oxide Character from Periodic Position
> **Question:** Two oxides, X and Y, are tested separately:
> * X reacts with dilute sulfuric acid, but does NOT react with aqueous sodium hydroxide.
> * Y reacts with aqueous sodium hydroxide, but does NOT react with dilute sulfuric acid.
> 
> Classify oxides X and Y.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Oxide X:** Reacts only with an acid (sulfuric acid). Therefore, X behaves as a base $\rightarrow$ **Basic oxide (Metal oxide)**.
> > 2. **Oxide Y:** Reacts only with a base (sodium hydroxide). Therefore, Y behaves as an acid $\rightarrow$ **Acidic oxide (Non-metal oxide)**.
`,
    keyPoints: [
      "Amphoteric oxides (Al₂O₃ and ZnO) react with both acids and bases.",
      "Neutral oxides (CO, NO, N₂O, H₂O) do not react with acids or bases.",
      "Basic oxides react with acids only; acidic oxides react with alkalis only."
    ]
  }
];
