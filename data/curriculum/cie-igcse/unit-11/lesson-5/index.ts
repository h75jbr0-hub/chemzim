import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Alcohols: Manufacture (Fermentation vs. Hydration) & Reactions";
export const lessonNumber = 5;

export const theoryMarkdown = `
## Alcohols: Manufacture (Fermentation vs. Hydration) & Reactions
This lesson covers the homologous series of alcohols: their general formula (CnH2n+1OH), the hydroxyl functional group (-OH), industrial manufacture of ethanol via biological fermentation of glucose vs. catalytic hydration of ethene (comparing advantages and disadvantages), combustion as clean fuels, and oxidation to carboxylic acids.
`;

const alcoholComparisonSvg = `
<svg viewBox="0 0 680 320" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="alcBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
  </defs>

  <rect width="680" height="320" fill="url(#alcBg)" stroke="#1e293b" stroke-width="2" rx="16" />

  <text x="340" y="24" fill="#f8fafc" font-size="14" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Industrial Manufacture of Ethanol: Fermentation vs. Catalytic Hydration</text>

  <!-- Left: Fermentation Card -->
  <g transform="translate(25, 45)">
    <rect width="305" height="255" rx="12" fill="#0f172a" stroke="#10b981" stroke-width="1.5" />
    <rect x="0" y="0" width="305" height="35" rx="12" fill="#059669" fill-opacity="0.2" />
    <text x="152" y="22" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">Method 1: Fermentation of Glucose</text>

    <text x="15" y="55" fill="#f8fafc" font-size="10" font-family="monospace">C₆H₁₂O₆(aq) —(yeast, 25-35°C)→ 2C₂H₅OH + 2CO₂</text>

    <text x="15" y="80" fill="#34d399" font-size="11" font-weight="bold">Conditions &amp; Biology:</text>
    <text x="15" y="98" fill="#94a3b8" font-size="10">• Yeast provides zymase enzymes</text>
    <text x="15" y="114" fill="#94a3b8" font-size="10">• Temperature: 25–35°C (enzymes denature &gt;40°C)</text>
    <text x="15" y="130" fill="#94a3b8" font-size="10">• Anaerobic (NO oxygen, prevents ethanoic acid)</text>

    <text x="15" y="158" fill="#38bdf8" font-size="11" font-weight="bold">Advantages:</text>
    <text x="15" y="176" fill="#f8fafc" font-size="10">✓ Renewable raw material (sugar cane / crops)</text>
    <text x="15" y="192" fill="#f8fafc" font-size="10">✓ Low energy consumption &amp; cheap equipment</text>

    <text x="15" y="218" fill="#ef4444" font-size="11" font-weight="bold">Disadvantages:</text>
    <text x="15" y="236" fill="#fca5a5" font-size="10">✗ Slow batch process; impure ethanol (~14%)</text>
    <text x="15" y="252" fill="#fca5a5" font-size="10">✗ Requires fractional distillation to purify</text>
  </g>

  <!-- Right: Hydration Card -->
  <g transform="translate(350, 45)">
    <rect width="305" height="255" rx="12" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5" />
    <rect x="0" y="0" width="305" height="35" rx="12" fill="#0284c7" fill-opacity="0.2" />
    <text x="152" y="22" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">Method 2: Catalytic Hydration of Ethene</text>

    <text x="15" y="55" fill="#f8fafc" font-size="10" font-family="monospace">C₂H₄(g) + H₂O(g) —(H₃PO₄)→ C₂H₅OH(g)</text>

    <text x="15" y="80" fill="#38bdf8" font-size="11" font-weight="bold">Conditions &amp; Chemistry:</text>
    <text x="15" y="98" fill="#94a3b8" font-size="10">• Catalyst: Concentrated H₃PO₄ (phosphoric acid)</text>
    <text x="15" y="114" fill="#94a3b8" font-size="10">• Temperature: 300°C</text>
    <text x="15" y="130" fill="#94a3b8" font-size="10">• Pressure: 60 atm (6000 kPa)</text>

    <text x="15" y="158" fill="#34d399" font-size="11" font-weight="bold">Advantages:</text>
    <text x="15" y="176" fill="#f8fafc" font-size="10">✓ Fast, continuous process</text>
    <text x="15" y="192" fill="#f8fafc" font-size="10">✓ Produces 100% pure ethanol (no by-products)</text>

    <text x="15" y="218" fill="#ef4444" font-size="11" font-weight="bold">Disadvantages:</text>
    <text x="15" y="236" fill="#fca5a5" font-size="10">✗ Non-renewable crude oil feedstock (ethene)</text>
    <text x="15" y="252" fill="#fca5a5" font-size="10">✗ High energy costs (high temp &amp; pressure)</text>
  </g>
</svg>
`;

export const lessonParts: LessonPart[] = [
  {
    id: "alcohol-structure-and-manufacture",
    title: "Alcohols & Two Routes for Manufacturing Ethanol",
    type: "text",
    content: `
### 🍷 Alcohols: The Hydroxyl Functional Group

Alcohols form a homologous series with the general formula **$C_nH_{2n+1}OH$**. Their functional group is the **hydroxyl group ($-OH$)**.

> [!NOTE]
> ### 🧪 The First Four Alcohols
> * **Methanol ($CH_3OH$):** $CH_3-OH$
> * **Ethanol ($C_2H_5OH$):** $CH_3-CH_2-OH$
> * **Propan-1-ol ($C_3H_7OH$):** $CH_3-CH_2-CH_2-OH$
> * **Butan-1-ol ($C_4H_9OH$):** $CH_3-CH_2-CH_2-CH_2-OH$

> ${svgToken(alcoholComparisonSvg)}

> [!IMPORTANT]
> ### ⚙️ Comparing the Two Industrial Routes to Ethanol
> 
> | Feature | Method 1: Fermentation of Glucose | Method 2: Catalytic Hydration of Ethene |
> | :--- | :--- | :--- |
> | **Raw Material** | Sugar cane, maize, starch (**Renewable**) | Crude oil fractions / ethene (**Non-renewable**) |
> | **Type of Process** | **Batch process** (stop-and-start, yeast must be replaced) | **Continuous process** (runs 24/7 non-stop) |
> | **Rate of Reaction** | **Very slow** (takes several days) | **Very rapid** (instantaneous addition) |
> | **Reaction Conditions** | Warm ($25 - 35^\circ\text{C}$), atmospheric pressure, anaerobic | **$300^\circ\text{C}$, $60\text{ atm}$**, concentrated $H_3PO_4$ catalyst |
> | **Purity of Product** | Impure mixture (~$14\%$ alcohol; toxic to yeast) | **Pure ethanol** ($100\%$ pure) |
> | **Energy Requirements** | Low energy input (room temperature) | High energy input (expensive high temp & pressure) |
`,
    keyPoints: [
      "Alcohols have the general formula CₙH₂ₙ₊₁OH and the -OH functional group.",
      "Fermentation requires yeast enzymes, 25–35 °C, and anaerobic conditions.",
      "Catalytic hydration of ethene uses steam, H₃PO₄ catalyst, 300 °C, and 60 atm pressure.",
      "Fermentation uses renewable crops but is slow/impure; hydration is fast and pure but relies on non-renewable crude oil."
    ]
  },
  {
    id: "reactions-and-uses-of-ethanol",
    title: "Reactions & Uses of Ethanol (Combustion, Oxidation & Solvents)",
    type: "text",
    content: `
### 🧪 Key Chemical Reactions of Ethanol

> [!BOX]
> ### 🔬 Major Reactions of Ethanol
> 
> 1. **Combustion (As a Clean Fuel):**
>    Ethanol burns cleanly in air with a blue flame, producing carbon dioxide and water and releasing plenty of heat:
>    $$\text{C}_2\text{H}_5\text{OH(l)} + 3\text{O}_2\text{(g)} \rightarrow 2\text{CO}_2\text{(g)} + 3\text{H}_2\text{O(l)} + \text{heat}$$
>    * **Why Bioethanol is a Favourable Fuel:**
>      * Burns in oxygen giving out plenty of heat.
>      * Can be made cheaply from waste plant material / crops.
>      * Vital energy source for countries with no domestic petroleum reserves.
>      * **Carbon Neutrality:** Crops absorb $CO_2$ by photosynthesis while growing, and combustion returns it, minimizing net atmospheric $CO_2$ increase.
> 
> 2. **Oxidation to Ethanoic Acid:**
>    Ethanol is oxidised to **ethanoic acid ($CH_3COOH$)**:
>    * **Method A: Atmospheric Oxidation (Acid Fermentation):**
>      Bacterial oxidation by *Acetobacter* during vinegar production:
>      $$\text{C}_2\text{H}_5\text{OH} + \text{O}_2 \rightarrow \text{CH}_3\text{COOH} + \text{H}_2\text{O} \quad \text{(bacteria)}$$
>    * **Method B: Redox Reaction Under Reflux with Oxidising Agents:**
>      * **Acidified Potassium Manganate(VII) ($\text{KMnO}_4 / \text{H}^+$):**
>        $$\text{MnO}_4^-\text{ (purple)} + 8\text{H}^+ + 5e^- \rightarrow \text{Mn}^{2+}\text{ (colourless)} + 4\text{H}_2\text{O}$$
>        *Observation:* Turns from **purple to colourless**!
>      * **Acidified Potassium Dichromate(VI) ($\text{K}_2\text{Cr}_2\text{O}_7 / \text{H}^+$):**
>        $$\text{Cr}_2\text{O}_7^{2-}\text{ (orange)} + 14\text{H}^+ + 6e^- \rightarrow 2\text{Cr}^{3+}\text{ (green)} + 7\text{H}_2\text{O}$$
>        *Observation:* Turns from **orange to green**!
>      $$\text{CH}_3\text{CH}_2\text{OH(l)} + 2[\text{O}] \rightarrow \text{CH}_3\text{COOH(l)} + \text{H}_2\text{O(l)}$$

> [!NOTE]
> ### 💡 Primary Uses of Ethanol
> 1. **Solvent:**
>    * Dissolves substances that do not dissolve in water.
>    * Used in glues, printing inks, perfumes, and aftershaves (evaporates easily due to high volatility).
> 2. **Fuel:** Used in cars (gasohol) or directly as biofuel.
`,
    keyPoints: [
      "Ethanol burns completely in oxygen to produce CO₂ and H₂O.",
      "Ethanol is oxidised to ethanoic acid by bacteria in air (making vinegar) or by heating with acidified KMnO₄ (purple to colourless) or K₂Cr₂O₇ (orange to green).",
      "Ethanol acts as an effective solvent in perfumes, inks, and glues because it dissolves water-insoluble substances and evaporates easily.",
      "Fractional distillation is used to separate ethanol from the fermented mixture."
    ]
  }
];
