import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "pH Scale, Indicators & Characteristic Properties";
export const lessonNumber = 1;

export const theoryMarkdown = `
## pH Scale, Indicators & Characteristic Properties
This lesson introduces the pH scale, Universal Indicator, color changes of essential acid-base indicators (Methyl orange, Litmus, Thymolphthalein, Phenolphthalein), and the electrical conductivity and sensory properties of acids and bases according to Cambridge IGCSE standards.
`;

const phScaleSvg = `
<svg viewBox="0 0 680 260" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="phGradBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
    <linearGradient id="phSpectrum" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#ef4444" />
      <stop offset="20%" stop-color="#f97316" />
      <stop offset="35%" stop-color="#eab308" />
      <stop offset="50%" stop-color="#22c55e" />
      <stop offset="65%" stop-color="#06b6d4" />
      <stop offset="80%" stop-color="#3b82f6" />
      <stop offset="100%" stop-color="#8b5cf6" />
    </linearGradient>
    <marker id="phArrowLeft" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 10 0 L 0 5 L 10 10 z" fill="#ef4444" />
    </marker>
    <marker id="phArrowRight" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#8b5cf6" />
    </marker>
  </defs>

  <rect width="680" height="260" fill="url(#phGradBg)" stroke="#1e293b" stroke-width="2" rx="16" />

  <text x="340" y="26" fill="#f8fafc" font-size="15" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">The Universal Indicator &amp; pH Scale</text>

  <!-- Spectrum Bar -->
  <g transform="translate(40, 50)">
    <rect width="600" height="40" rx="8" fill="url(#phSpectrum)" stroke="#334155" stroke-width="1.5" />

    <!-- pH Numbers -->
    <g fill="#ffffff" font-size="12" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">
      <text x="21" y="25">0-1</text>
      <text x="64" y="25">2</text>
      <text x="107" y="25">3</text>
      <text x="150" y="25">4</text>
      <text x="193" y="25">5</text>
      <text x="236" y="25">6</text>
      <text x="300" y="25">7</text>
      <text x="364" y="25">8</text>
      <text x="407" y="25">9</text>
      <text x="450" y="25">10</text>
      <text x="493" y="25">11</text>
      <text x="536" y="25">12</text>
      <text x="579" y="25">13-14</text>
    </g>
  </g>

  <!-- Zones -->
  <g transform="translate(40, 105)" font-family="system-ui, sans-serif" text-anchor="middle">
    <!-- Strongly acidic -->
    <text x="75" y="15" fill="#f87171" font-size="12" font-weight="bold">Strongly Acidic</text>
    <text x="75" y="32" fill="#94a3b8" font-size="11">(pH 0 - 3, Red)</text>

    <!-- Weakly acidic -->
    <text x="200" y="15" fill="#fde047" font-size="12" font-weight="bold">Weakly Acidic</text>
    <text x="200" y="32" fill="#94a3b8" font-size="11">(pH 4 - 6, Orange/Yellow)</text>

    <!-- Neutral -->
    <text x="300" y="15" fill="#4ade80" font-size="12" font-weight="bold">Neutral</text>
    <text x="300" y="32" fill="#94a3b8" font-size="11">(pH 7, Green)</text>

    <!-- Weakly alkaline -->
    <text x="400" y="15" fill="#38bdf8" font-size="12" font-weight="bold">Weakly Alkaline</text>
    <text x="400" y="32" fill="#94a3b8" font-size="11">(pH 8 - 10, Blue)</text>

    <!-- Strongly alkaline -->
    <text x="530" y="15" fill="#c084fc" font-size="12" font-weight="bold">Strongly Alkaline</text>
    <text x="530" y="32" fill="#94a3b8" font-size="11">(pH 11 - 14, Violet/Purple)</text>
  </g>

  <!-- Concentration Arrows at Bottom -->
  <g transform="translate(40, 165)">
    <!-- Acid arrow -->
    <line x1="280" y1="20" x2="20" y2="20" stroke="#ef4444" stroke-width="2.5" marker-end="url(#phArrowLeft)" />
    <text x="140" y="12" fill="#ef4444" font-size="11" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Increasing [H⁺] acidity (Lower pH)</text>

    <!-- Alkali arrow -->
    <line x1="320" y1="20" x2="580" y2="20" stroke="#8b5cf6" stroke-width="2.5" marker-end="url(#phArrowRight)" />
    <text x="450" y="12" fill="#c084fc" font-size="11" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Increasing [OH⁻] alkalinity (Higher pH)</text>

    <text x="300" y="45" fill="#94a3b8" font-size="10" font-family="system-ui, sans-serif" text-anchor="middle">Pure water at 25 °C has [H⁺] = [OH⁻] (pH = 7)</text>
  </g>
</svg>
`;

export const lessonParts: LessonPart[] = [
  {
    id: "ph-scale-and-indicators",
    title: "The pH Scale & Chemical Indicators",
    type: "text",
    content: `
### 🧪 The pH Scale and Hydrogen Ion Concentration

The **pH scale** measures how acidic or alkaline a solution is, ranging from **$0$ to $14$**:
* **Aqueous solutions of acids** contain hydrogen ions ($\text{H}^+$).
* **Aqueous solutions of alkalis** contain hydroxide ions ($\text{OH}^-$).

> ${svgToken(phScaleSvg)}

> [!IMPORTANT]
> ### 🧮 Mathematical Relationships on the pH Scale
> * **Inverse Proportion:** The concentration of hydrogen ions ($[\text{H}^+]$) is **inversely proportional** to pH. As $[\text{H}^+]$ increases, the pH value **decreases** (the smaller the number, the more acidic the solution).
> * **Direct Proportion:** The concentration of hydroxide ions ($[\text{OH}^-]$) is **directly proportional** to pH. As $[\text{OH}^-]$ increases, the pH value **increases** (the larger the number, the more alkaline the solution).
> * **Neutral Solutions:** A solution is neutral when $[\text{H}^+] = [\text{OH}^-]$, which corresponds to **$\text{pH} = 7$**.

> [!BOX]
> ### 🌈 Color Changes of Cambridge Indicators
> | Indicator | In Acidic Solution | In Neutral Solution | In Alkaline Solution |
> | :--- | :--- | :--- | :--- |
> | **Universal Indicator** | **Red** (strong) / **Orange-Yellow** (weak) | **Green** | **Blue** (weak) / **Purple-Violet** (strong) |
> | **Litmus Paper / Solution** | **Red** | **Purple** | **Blue** |
> | **Methyl Orange** | **Red** | **Orange** | **Yellow** |
> | **Thymolphthalein** | **Colourless** | **Colourless** | **Blue** |
> | **Phenolphthalein** | **Colourless** | **Colourless** | **Pink** |

> [!NOTE]
> ### 🍋 Common Substances and Their Approximate pH
> * **Hydrochloric acid / Stomach acid:** $\text{pH } 1 - 2$ (Strongly acidic)
> * **Lemon juice (citric acid):** $\text{pH } 2 - 3$ (Acidic)
> * **Vinegar (ethanoic acid):** $\text{pH } 3$ (Weakly acidic)
> * **Milk:** $\text{pH } 6$ (Very weakly acidic)
> * **Pure water:** $\text{pH } 7$ (Neutral)
> * **Washing-up liquid / Blood:** $\text{pH } 7.4 - 8$ (Very weakly alkaline)
> * **Toothpaste / Baking soda:** $\text{pH } 8 - 9$ (Weakly alkaline)
> * **Aqueous ammonia:** $\text{pH } 11$ (Weak alkali)
> * **Sodium hydroxide:** $\text{pH } 13 - 14$ (Strong alkali)
`,
    keyPoints: [
      "The pH scale runs from 0 (most acidic) to 14 (most alkaline), with 7 being neutral.",
      "As [H⁺] increases, pH decreases; as [OH⁻] increases, pH increases.",
      "Universal Indicator shows red in strong acids, green at pH 7, and blue/purple in alkalis.",
      "Methyl orange is red in acid and yellow in alkali; Thymolphthalein is colourless in acid and blue in alkali."
    ]
  },
  {
    id: "physical-properties-acids-bases",
    title: "Physical Properties & Electrical Conductivity",
    type: "text",
    content: `
### ⚡ Physical Properties of Acids vs. Alkalis

Acids and alkalis possess distinct physical and sensory properties that allow them to be distinguished in the laboratory.

> [!NOTE]
> ### 📋 Comparative Properties Matrix
> | Property | Acids | Bases / Alkalis |
> | :--- | :--- | :--- |
> | **Taste** | **Sour** (e.g. lemons, vinegar) | **Bitter** (e.g. soap, tonic water) |
> | **Feel to Skin** | Corrosive / watery | **Soapy / slippery** to the touch |
> | **pH Range** | Less than 7 ($\text{pH} < 7$) | Greater than 7 ($\text{pH} > 7$) |
> | **Corrosive Nature** | **Yes** (corrodes metals, tissues) | **Yes** (caustic to skin, burns eyes) |
> | **Electrical Conduction** | **Conducts electricity in aqueous state** | **Conducts electricity in aqueous state** |

> [!IMPORTANT]
> ### 💡 Why do Aqueous Solutions of Acids and Alkalis Conduct Electricity?
> * Solid or pure liquid covalent acids (like pure $\text{HCl(g)}$ or pure $\text{CH}_3\text{COOH(l)}$) do NOT conduct electricity because they consist of neutral molecules and have no free ions.
> * When dissolved in water, they **ionise/dissociate into free mobile ions**:
>   $$\\text{HCl(g)} \\rightarrow \\text{H}^+\\text{(aq)} + \\text{Cl}^-\\text{(aq)}$$
>   $$\\text{NaOH(s)} \\rightarrow \\text{Na}^+\\text{(aq)} + \\text{OH}^-\\text{(aq)}$$
> * Because their aqueous solutions contain **freely moving mobile ions**, they are **electrolytes** that conduct an electric current!

> [!EXAMPLE]
> #### 📝 Worked Example 1: Identifying pH Values from Reaction Observations
> **Question:** Three chemicals, P, Q, and R, were each dissolved in water:
> * **P:** Reacts with solid sodium carbonate to evolve gas; no reaction when heated with ammonium chloride.
> * **Q:** No reaction with sodium carbonate; evolves gas with a pungent smell when heated with solid ammonium chloride.
> * **R:** No reaction with sodium carbonate and no reaction with ammonium chloride.
> 
> Deduce the pH of solutions P, Q, and R.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify P:** Acids react with carbonates to evolve $\text{CO}_2$ gas. Therefore, P is an **acid** ($\text{pH} < 7$, e.g. $\text{pH } 2$).
> > 2. **Identify Q:** Alkalis/bases react with ammonium salts upon warming to liberate pungent **ammonia gas** ($\text{NH}_3$). Therefore, Q is an **alkali/base** ($\text{pH} > 7$, e.g. $\text{pH } 13$).
> > 3. **Identify R:** R shows neither acidic nor basic properties; it is **neutral** ($\text{pH} = 7$).
> > 4. **Result:** $\text{P} = 2$, $\text{Q} = 13$, $\text{R} = 7$.
`,
    keyPoints: [
      "Acids taste sour; bases taste bitter and feel slippery/soapy.",
      "Both acids and alkalis conduct electricity in aqueous solution due to mobile ions (H⁺ and OH⁻).",
      "Acids evolve CO₂ from carbonates; alkalis evolve NH₃ when heated with ammonium salts."
    ]
  }
];
