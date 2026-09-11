import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Yield, Purity, Titration & Empirical Formula";
export const lessonNumber = 5;

export const theoryMarkdown = `
## Stoichiometry Calculations
This lesson covers percentage yield, percentage purity, limiting reactants, acid-base titrations, and empirical and molecular formula derivations according to Cambridge IGCSE Chemistry standards.
`;

const titrationApparatusSvg = `
<svg viewBox="0 0 680 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="titrGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
  </defs>

  <rect width="680" height="300" fill="url(#titrGrad)" stroke="#1e293b" stroke-width="2" rx="16" />

  <text x="340" y="28" fill="#f8fafc" font-size="14" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Acid-Base Titration Apparatus &amp; Technique</text>

  <!-- Retort Stand & Clamp -->
  <line x1="220" y1="280" x2="220" y2="40" stroke="#64748b" stroke-width="6" stroke-linecap="round" />
  <rect x="170" y="275" width="100" height="12" rx="3" fill="#475569" />
  <line x1="220" y1="120" x2="270" y2="120" stroke="#64748b" stroke-width="3" />

  <!-- Burette -->
  <g transform="translate(270, 45)">
    <!-- Glass tube -->
    <rect x="-6" y="0" width="12" height="150" fill="#38bdf8" fill-opacity="0.15" stroke="#94a3b8" stroke-width="1.5" />
    <!-- Graduations -->
    <line x1="-3" y1="20" x2="3" y2="20" stroke="#38bdf8" stroke-width="1" />
    <line x1="-5" y1="40" x2="5" y2="40" stroke="#38bdf8" stroke-width="1.5" />
    <line x1="-3" y1="60" x2="3" y2="60" stroke="#38bdf8" stroke-width="1" />
    <line x1="-5" y1="80" x2="5" y2="80" stroke="#38bdf8" stroke-width="1.5" />
    <line x1="-3" y1="100" x2="3" y2="100" stroke="#38bdf8" stroke-width="1" />
    <line x1="-5" y1="120" x2="5" y2="120" stroke="#38bdf8" stroke-width="1.5" />
    <!-- Stopcock -->
    <rect x="-8" y="150" width="16" height="8" rx="2" fill="#f59e0b" />
    <line x1="-12" y1="154" x2="12" y2="154" stroke="#d97706" stroke-width="2" />
    <!-- Jet -->
    <polygon points="-3,158 3,158 1,175 -1,175" fill="#38bdf8" fill-opacity="0.2" stroke="#94a3b8" stroke-width="1" />
  </g>

  <!-- Conical Flask with indicator -->
  <g transform="translate(270, 230)">
    <polygon points="-8,-5 8,-5 35,45 -35,45" fill="#f43f5e" fill-opacity="0.3" stroke="#94a3b8" stroke-width="1.5" />
    <rect x="-8" y="-12" width="16" height="8" fill="none" stroke="#94a3b8" stroke-width="1.5" />
    <ellipse cx="0" cy="40" rx="30" ry="4" fill="#f43f5e" fill-opacity="0.4" />
  </g>

  <!-- Annotations / Labels -->
  <g transform="translate(340, 60)">
    <rect width="280" height="60" rx="8" fill="#1e293b" fill-opacity="0.6" stroke="#38bdf8" stroke-width="1" />
    <text x="15" y="24" fill="#38bdf8" font-size="12" font-weight="bold" font-family="system-ui, sans-serif">Burette (Standard Solution)</text>
    <text x="15" y="44" fill="#cbd5e1" font-size="11" font-family="system-ui, sans-serif">Accurately measures variable titrant volume</text>
  </g>

  <g transform="translate(340, 135)">
    <rect width="280" height="60" rx="8" fill="#1e293b" fill-opacity="0.6" stroke="#34d399" stroke-width="1" />
    <text x="15" y="24" fill="#34d399" font-size="12" font-weight="bold" font-family="system-ui, sans-serif">Pipette (Fixed Aliquot)</text>
    <text x="15" y="44" fill="#cbd5e1" font-size="11" font-family="system-ui, sans-serif">Measures exact fixed volume (e.g. 25.0 cm³)</text>
  </g>

  <g transform="translate(340, 210)">
    <rect width="280" height="60" rx="8" fill="#1e293b" fill-opacity="0.6" stroke="#f43f5e" stroke-width="1" />
    <text x="15" y="24" fill="#f43f5e" font-size="12" font-weight="bold" font-family="system-ui, sans-serif">Conical Flask (End-point)</text>
    <text x="15" y="44" fill="#cbd5e1" font-size="11" font-family="system-ui, sans-serif">Contains sample + indicator (sharp color change)</text>
  </g>
</svg>
`;

export const lessonParts: LessonPart[] = [
    {
        id: "yield-and-purity",
        title: "Yield, Purity & Limiting Reactants",
        type: "text",
        content: `
### ⚖️ The Two Fundamental Laws of Chemistry

1. **Law of Constant Composition:** Elements always react in fixed proportions by mass to form a given compound (e.g. carbon burns with oxygen in a fixed mass ratio of $12 : 32 = 3 : 8$).
2. **Law of Conservation of Mass:** Total mass of reactants = Total mass of products.

### 🎯 Yield and Percentage Yield

> [!IMPORTANT]
> ### 🧮 Definition: Yield
> The **yield** is the amount of product obtained from a chemical reaction.
> * **Theoretical Yield:** The maximum calculated mass of product expected using stoichiometry.
> * **Actual Yield:** The mass of pure product actually collected from the experiment (always less than 100% due to incomplete reactions, side reactions, or loss during filtering/transfer).

$$\\% \\text{ Yield} = \\frac{\\text{Actual mass obtained (g)}}{\\text{Calculated (theoretical) mass (g)}} \\times 100\\%$$

### 💎 Percentage Purity

$$\\% \\text{ Purity} = \\frac{\\text{Mass of pure substance (g)}}{\\text{Total mass of impure sample (g)}} \\times 100\\%$$

### 🛑 Limiting Reactant

> [!IMPORTANT]
> ### 🧮 Definition: Limiting Reactant
> The **limiting reactant** is the reactant present in the smallest molar amount relative to the stoichiometric ratio. It is completely consumed first, dictating and limiting the maximum theoretical yield of product.

> [!EXAMPLE]
> #### 📝 Worked Example 1: Percentage Yield Calculation
> **Question:** In an experiment:
> $$\\text{Mg} + \\text{H}_2\\text{SO}_4 \\rightarrow \\text{MgSO}_4 + \\text{H}_2$$
> Reaction of $6\\text{ g}$ of magnesium with excess sulfuric acid has a theoretical yield of $30\\text{ g}$ of $\\text{MgSO}_4$. If the actual mass of magnesium sulfate obtained was $6\\text{ g}$, what is the percentage yield?
> 
> **A** 0.2%
> 
> **B** 25%
> 
> **C** 5%
> 
> **D** 20%
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Apply Percentage Yield Formula:**
> >    $$\\% \\text{ Yield} = \\frac{\\text{Actual Mass}}{\\text{Theoretical Mass}} \\times 100\\%$$
> > 2. **Substitute Given Values:**
> >    $$\\% \\text{ Yield} = \\frac{6\\text{ g}}{30\\text{ g}} \\times 100\\% = \\frac{1}{5} \\times 100\\% = 20\\%$$
> > 3. **Conclusion:**
> >    * The percentage yield is **20%**. The correct option is **D**.

> [!EXAMPLE]
> #### 📝 Worked Example 2: Industrial Yield Scaling
> **Question:** Nitrogen and hydrogen react to form ammonia:
> $$\\text{N}_2 + 3\\text{H}_2 \\rightarrow 2\\text{NH}_3$$
> When completely converted, $7\\text{ tonnes}$ of nitrogen produces $8.5\\text{ tonnes}$ of ammonia.
> How much nitrogen will be needed to produce $34\\text{ tonnes}$ of ammonia?
> 
> **A** 28 tonnes
> 
> **B** 8.5 tonnes
> 
> **C** 7 tonnes
> 
> **D** 34 tonnes
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the Scaling Factor:**
> >    $$\\text{Factor} = \\frac{34\\text{ tonnes}}{8.5\\text{ tonnes}} = 4$$
> > 2. **Scale the Required Nitrogen Mass:**
> >    $$\\text{Mass of } \\text{N}_2 = 7\\text{ tonnes} \\times 4 = 28\\text{ tonnes}$$
> > 3. **Conclusion:**
> >    * Exactly **28 tonnes** of nitrogen are required. The correct option is **A**.
        `,
        keyPoints: [
            "% Yield = (Actual Mass / Theoretical Mass) × 100.",
            "% Purity = (Pure Mass / Impure Mass) × 100.",
            "The limiting reactant is completely used up and stops the reaction."
        ]
    },
    {
        id: "titration-analysis",
        title: "Acid-Base Titration Calculations",
        type: "text",
        content: `
### 🧪 What is a Titration?

> [!IMPORTANT]
> ### 🧮 Definition: Titration
> A **titration** is an analytical volumetric procedure used to determine the unknown concentration of a solution by reacting it with an accurately measured volume of a solution of known concentration (**standard solution**).
> * **Neutralisation:** Reaction between an acid and a base forming salt and water until no excess $\\text{H}^+$ or $\\text{OH}^-$ ions remain:
>   $$\\text{H}^+\\text{(aq)} + \\text{OH}^-\\text{(aq)} \\rightarrow \\text{H}_2\\text{O(l)}$$

${svgToken(titrationApparatusSvg)}

### 📐 General Formula for 1:1 Acid-Base Neutralisation

$$M_1 V_1 = M_2 V_2$$
*(where $M = \\text{concentration in mol/dm}^3$, and $V = \\text{volume in cm}^3$ or $\\text{dm}^3$)*

> [!EXAMPLE]
> #### 📝 Worked Example 1: Hydrochloric Acid and Sodium Hydroxide
> **Question:** A solution of $25.0\\text{ cm}^3$ of hydrochloric acid ($\\text{HCl}$) was titrated against a solution of $0.100\\text{ mol/dm}^3$ sodium hydroxide ($\\text{NaOH}$). Exactly $12.1\\text{ cm}^3$ of $\\text{NaOH}$ was required for complete neutralisation.
> 
> What is the concentration of the acid?
> 
> **A** 0.5 M
> 
> **B** 0.2 M
> 
> **C** 0.1 M
> 
> **D** 0.05 M
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Balanced Equation:**
> >    $$\\text{HCl} + \\text{NaOH} \\rightarrow \\text{NaCl} + \\text{H}_2\\text{O} \\quad (1 : 1 \\text{ ratio})$$
> > 2. **Calculate Moles of $\\text{NaOH}$:**
> >    $$n(\\text{NaOH}) = C \\times V = 0.100\\text{ mol/dm}^3 \\times \\frac{12.1}{1000}\\text{ dm}^3 = 0.00121\\text{ mol}$$
> > 3. **Moles of $\\text{HCl}$ Reacted:**
> >    $$n(\\text{HCl}) = n(\\text{NaOH}) = 0.00121\\text{ mol}$$
> > 4. **Calculate Concentration of $\\text{HCl}$:**
> >    $$C(\\text{HCl}) = \\frac{n}{V} = \\frac{0.00121\\text{ mol}}{0.025\\text{ dm}^3} = 0.0484\\text{ mol/dm}^3 \\approx 0.05\\text{ M}$$
> > 5. **Conclusion:**
> >    * The concentration is **0.05 M** (0.0484 M). The correct option is **D**.

> [!EXAMPLE]
> #### 📝 Worked Example 2: Hydrobromic Acid Titration Volume
> **Question:** A $0.2\\text{ M}$ solution of $\\text{HBr}$ required $0.01\\text{ L}$ of $0.1\\text{ M } \\text{NaOH}$ to achieve a neutral solution. What was the volume of acid reacted?
> 
> **A** 5 cm³
> 
> **B** 5 dm³
> 
> **C** 0.05 L
> 
> **D** 0.05 cm³
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate Moles of Base:**
> >    $$n(\\text{NaOH}) = 0.1\\text{ M} \\times 0.01\\text{ L} = 0.001\\text{ mol}$$
> > 2. **Mole Ratio:**
> >    $$\\text{HBr} + \\text{NaOH} \\rightarrow \\text{NaBr} + \\text{H}_2\\text{O} \\quad (1 : 1)$$
> >    $$n(\\text{HBr}) = 0.001\\text{ mol}$$
> > 3. **Calculate Volume of Acid:**
> >    $$V(\\text{HBr}) = \\frac{n}{C} = \\frac{0.001\\text{ mol}}{0.2\\text{ mol/L}} = 0.005\\text{ L} = 5\\text{ cm}^3$$
> > 4. **Conclusion:**
> >    * The volume of acid is **5 cm³**. The correct option is **A**.
        `,
        keyPoints: [
            "Titration determines unknown concentration using a standard solution.",
            "Pipette delivers a precise fixed volume; burette delivers a variable measured volume.",
            "At the endpoint, moles of H⁺ equal moles of OH⁻ in 1:1 neutralisation."
        ]
    },
    {
        id: "empirical-and-molecular-formula",
        title: "Empirical & Molecular Formula Derivation",
        type: "text",
        content: `
### 🧬 Empirical vs. Molecular Formula

> [!IMPORTANT]
> ### 🧮 Definitions
> * **Empirical Formula:** The simplest whole-number ratio of the different atoms present in a compound.
>   * *(For all giant ionic compounds, the chemical formula is always the empirical formula).*
> * **Molecular Formula:** The actual number of atoms of each element present in one molecule of a compound.
>   $$\\text{Molecular Formula} = (\\text{Empirical Formula})_n$$
>   $$n = \\frac{M_r \\text{ of compound}}{\\text{Empirical formula mass}}$$

### 🪜 4 Steps to Find Empirical Formula:

1. **Find reacting masses (or percentages)** of each element.
2. **Convert masses to moles** by dividing each by its relative atomic mass ($A_r$).
3. **Divide by the smallest mole value** to obtain a simple whole-number ratio.
   * *If decimals appear:* multiply all by 2 (for $.5$), by 3 (for $.33$), or by 5 (for $.2$).
4. **Write the empirical formula.**

> [!EXAMPLE]
> #### 📝 Worked Example 1: Hydrocarbon Combustion Analysis
> **Question:** A sample of a hydrocarbon with a mass of $7.2\\text{ g}$ contains $6.0\\text{ g}$ of carbon and has a molecular mass ($M_r$) of $72$.
> Determine its empirical and molecular formula. ($A_r$: $\\text{C} = 12$, $\\text{H} = 1$)
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Find Mass of Hydrogen:**
> >    $$\\text{Mass of H} = 7.2\\text{ g} - 6.0\\text{ g} = 1.2\\text{ g}$$
> > 2. **Convert to Moles:**
> >    * Carbon: $\\frac{6.0}{12} = 0.5\\text{ mol}$
> >    * Hydrogen: $\\frac{1.2}{1} = 1.2\\text{ mol}$
> > 3. **Find Whole Number Ratio:**
> >    * Divide by smallest ($0.5$): $\\text{C} = \\frac{0.5}{0.5} = 1$, $\\text{H} = \\frac{1.2}{0.5} = 2.4$
> >    * Multiply by 5 to clear decimals: $\\text{C} = 5, \\text{H} = 12$.
> >    * **Empirical Formula = $\\text{C}_5\\text{H}_{12}$**
> > 4. **Determine Molecular Formula:**
> >    * Empirical formula mass = $(5 \\times 12) + (12 \\times 1) = 60 + 12 = 72$.
> >    * Since $M_r = 72$, multiplier $n = \\frac{72}{72} = 1$.
> >    * **Molecular Formula = $\\text{C}_5\\text{H}_{12}$** (Pentane).

> [!EXAMPLE]
> #### 📝 Worked Example 2: Determining Molecular Formula of a Ring Compound
> **Question:** The structural diagram of an organic compound shows a six-membered ring containing 6 carbon atoms and 12 hydrogen atoms ($\text{C}_6\text{H}_{12}$, cyclohexane).
> 
> What are the molecular and empirical formulas of this compound?
> 
> **A** Molecular: $\\text{C}_6\\text{H}_{12}$, Empirical: $\\text{CH}_2$
> 
> **B** Molecular: $\\text{C}_6\\text{H}_{14}$, Empirical: $\\text{C}_3\\text{H}_7$
> 
> **C** Molecular: $\\text{C}_6\\text{H}_6$, Empirical: $\\text{CH}$
> 
> **D** Molecular: $\\text{C}_5\\text{H}_{10}$, Empirical: $\\text{CH}_2$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Determine Molecular Formula:**
> >    * Count the atoms directly from structure: 6 C and 12 H $\\rightarrow \\text{C}_6\\text{H}_{12}$.
> > 2. **Simplify to Empirical Formula:**
> >    * Divide by greatest common divisor (6): $\\frac{6}{6} : \\frac{12}{6} = 1 : 2 \\rightarrow \\text{CH}_2$.
> > 3. **Conclusion:**
> >    * Molecular formula is $\\text{C}_6\\text{H}_{12}$ and empirical formula is $\\text{CH}_2$. The correct option is **A**.
        `,
        keyPoints: [
            "Empirical formula is the simplest integer ratio of atoms.",
            "Molecular formula is the actual number of atoms in a molecule: (Empirical Formula)ₙ.",
            "Multiply fractional ratios by integers (×2, ×3, ×5) to eliminate decimals."
        ]
    }
];
