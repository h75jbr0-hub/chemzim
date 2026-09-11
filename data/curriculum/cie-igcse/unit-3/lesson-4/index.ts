import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "The Mole and Chemical Calculations";
export const lessonNumber = 4;

export const theoryMarkdown = `
## The Mole Concept
This lesson covers Avogadro's constant, molar mass, mole-mass conversions, reactions involving gases (Avogadro's Law at r.t.p.), and solution concentrations according to Cambridge IGCSE Chemistry standards.
`;

const moleCalculationTrianglesSvg = `
<svg viewBox="0 0 680 240" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="triGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
  </defs>

  <rect width="680" height="240" fill="url(#triGrad)" stroke="#1e293b" stroke-width="2" rx="16" />

  <text x="340" y="28" fill="#f8fafc" font-size="14" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">The Three Core Molar Calculation Triangles</text>

  <!-- Triangle 1: Mass / Mr / Moles -->
  <g transform="translate(60, 48)">
    <polygon points="100,10 10,160 190,160" fill="#0f172a" stroke="#38bdf8" stroke-width="2" />
    <line x1="45" y1="95" x2="155" y2="95" stroke="#38bdf8" stroke-width="2" />
    <line x1="100" y1="95" x2="100" y2="160" stroke="#38bdf8" stroke-width="2" />
    <text x="100" y="70" fill="#38bdf8" font-size="14" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Mass (g)</text>
    <text x="60" y="135" fill="#ffffff" font-size="13" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Mr</text>
    <text x="140" y="135" fill="#ffffff" font-size="13" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">moles</text>
    <text x="100" y="180" fill="#94a3b8" font-size="11" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Solids &amp; Masses</text>
  </g>

  <!-- Triangle 2: Gas Volume at r.t.p. -->
  <g transform="translate(260, 48)">
    <polygon points="100,10 10,160 190,160" fill="#0f172a" stroke="#34d399" stroke-width="2" />
    <line x1="45" y1="95" x2="155" y2="95" stroke="#34d399" stroke-width="2" />
    <line x1="100" y1="95" x2="100" y2="160" stroke="#34d399" stroke-width="2" />
    <text x="100" y="65" fill="#34d399" font-size="12" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Volume (dm³)</text>
    <text x="100" y="82" fill="#94a3b8" font-size="9" font-family="system-ui, sans-serif" text-anchor="middle">at r.t.p.</text>
    <text x="60" y="135" fill="#ffffff" font-size="12" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">24</text>
    <text x="140" y="135" fill="#ffffff" font-size="13" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">moles</text>
    <text x="100" y="180" fill="#94a3b8" font-size="11" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Gases at r.t.p.</text>
  </g>

  <!-- Triangle 3: Concentration of Solution -->
  <g transform="translate(460, 48)">
    <polygon points="100,10 10,160 190,160" fill="#0f172a" stroke="#c084fc" stroke-width="2" />
    <line x1="45" y1="95" x2="155" y2="95" stroke="#c084fc" stroke-width="2" />
    <line x1="100" y1="95" x2="100" y2="160" stroke="#c084fc" stroke-width="2" />
    <text x="100" y="70" fill="#c084fc" font-size="14" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Moles</text>
    <text x="60" y="135" fill="#ffffff" font-size="13" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Conc.</text>
    <text x="140" y="135" fill="#ffffff" font-size="12" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Vol(dm³)</text>
    <text x="100" y="180" fill="#94a3b8" font-size="11" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Aqueous Solutions</text>
  </g>
</svg>
`;

export const lessonParts: LessonPart[] = [
    {
        id: "the-mole-and-mass",
        title: "The Mole, Avogadro's Constant & Molar Mass",
        type: "text",
        content: `
### 🥑 What is a Mole?

A **mole** is the standard unit used by chemists to count chemical particles (atoms, molecules, or ions).

> [!IMPORTANT]
> ### 🧮 Definition: The Mole
> A **mole** is the amount of a substance that contains the exact same number of specified particles (atoms, molecules, or ions) as there are carbon atoms in $12\\text{ g}$ of Carbon-12 ($^{12}\\text{C}$).
> * **Avogadro's Constant ($L$ or $N_A$):** $6.02 \\times 10^{23}\\text{ particles/mol}$.
> * One mole of any substance is obtained simply by weighing out its $A_r$ or $M_r$ in grams.
> * **Molar Mass ($M$):** The mass of one mole of a substance in $\\text{g/mol}$.

### 📐 The Mass-Mole Formula

$$\\text{Number of Moles } (n) = \\frac{\\text{Mass in grams } (m)}{\\text{Molar Mass } (M_r)}$$

$$\\text{Number of Particles} = \\text{Moles } (n) \\times (6.02 \\times 10^{23})$$

${svgToken(moleCalculationTrianglesSvg)}

> [!EXAMPLE]
> #### 📝 Worked Example 1: Reacting Mass Calculation
> **Question:** Magnesium reacts with excess sulfuric acid:
> $$\\text{Mg} + \\text{H}_2\\text{SO}_4 \\rightarrow \\text{MgSO}_4 + \\text{H}_2$$
> What mass of magnesium sulfate ($\\text{MgSO}_4$) will be formed when $6\\text{ g}$ of magnesium reacts with excess sulfuric acid? ($A_r$: $\\text{Mg} = 24$, $\\text{S} = 32$, $\\text{O} = 16$)
> 
> **A** 8 g
> 
> **B** 24 g
> 
> **C** 30 g
> 
> **D** 60 g
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate Moles of Reactant (Mg):**
> >    $$n(\\text{Mg}) = \\frac{\\text{mass}}{A_r} = \\frac{6\\text{ g}}{24\\text{ g/mol}} = 0.25\\text{ mol}$$
> > 2. **Determine Mole Ratio from Balanced Equation:**
> >    $$\\text{Mg} : \\text{MgSO}_4 = 1 : 1$$
> >    $$n(\\text{MgSO}_4) = 0.25\\text{ mol}$$
> > 3. **Calculate Molar Mass of $\\text{MgSO}_4$:**
> >    $$M_r = 24 + 32 + (4 \\times 16) = 120\\text{ g/mol}$$
> > 4. **Calculate Mass of $\\text{MgSO}_4$:**
> >    $$\\text{Mass} = n \\times M_r = 0.25\\text{ mol} \\times 120\\text{ g/mol} = 30\\text{ g}$$
> > 5. **Conclusion:**
> >    * The mass formed is **30 g**. The correct option is **C**.

> [!EXAMPLE]
> #### 📝 Worked Example 2: Mass of Sulfur in a Compound
> **Question:** Which mass of sulfur is present in $160\\text{ g}$ of copper(II) sulfate, $\\text{CuSO}_4$? ($A_r$: $\\text{Cu} = 64$, $\\text{S} = 32$, $\\text{O} = 16$)
> 
> **A** 16 g
> 
> **B** 32 g
> 
> **C** 64 g
> 
> **D** 128 g
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate $M_r$ of $\\text{CuSO}_4$:**
> >    $$M_r = 64 + 32 + (4 \\times 16) = 160\\text{ g/mol}$$
> > 2. **Determine Percentage or Fraction of Sulfur:**
> >    * One mole ($160\\text{ g}$) of $\\text{CuSO}_4$ contains exactly one mole ($32\\text{ g}$) of sulfur atoms.
> > 3. **Calculate Mass of Sulfur:**
> >    $$\\text{Mass of S} = 160\\text{ g} \\times \\frac{32}{160} = 32\\text{ g}$$
> > 4. **Conclusion:**
> >    * The correct option is **B** ($32\\text{ g}$).
        `,
        keyPoints: [
            "A mole contains Avogadro's constant (6.02 × 10²³) of particles.",
            "Moles = Mass / Mr.",
            "The coefficients in a balanced equation provide the exact molar ratio."
        ]
    },
    {
        id: "molar-gas-volume-and-solutions",
        title: "Gas Calculations (Avogadro's Law) & Solution Concentrations",
        type: "text",
        content: `
### 🎈 Reactions Involving Gases: Avogadro's Law

> [!IMPORTANT]
> ### 🧮 Avogadro's Law for Gases
> One mole of **any gas** occupies the exact same volume of **$24\\text{ dm}^3$** (or $24000\\text{ cm}^3$) at room temperature and pressure (**r.t.p.**, $20\\text{ }^\\circ\\text{C}$ and $1\\text{ atmosphere}$).

$$\\text{Volume of gas } (\\text{dm}^3) = \\text{Moles } (n) \\times 24\\text{ dm}^3/\\text{mol}$$

$$\\text{Moles of gas } (n) = \\frac{\\text{Volume in dm}^3}{24} = \\frac{\\text{Volume in cm}^3}{24000}$$

### 🧪 Concentration of Solutions

* **Units conversion:** $1\\text{ dm}^3 = 1\\text{ L} = 1000\\text{ mL} = 1000\\text{ cm}^3$.
* **Molar Concentration ($\\text{mol/dm}^3$ or M):**
  $$\\text{Concentration } (\\text{mol/dm}^3) = \\frac{\\text{Number of moles } (n)}{\\text{Volume of solution } (\\text{dm}^3)}$$
* **Mass Concentration ($\\text{g/dm}^3$):**
  $$\\text{Concentration } (\\text{g/dm}^3) = \\frac{\\text{Mass in grams } (m)}{\\text{Volume of solution } (\\text{dm}^3)}$$
  $$\\text{Concentration } (\\text{g/dm}^3) = \\text{Concentration } (\\text{mol/dm}^3) \\times M_r$$

> [!EXAMPLE]
> #### 📝 Worked Example 1: Gas Volume from Reacting Mass
> **Question:** Magnesium reacts with dilute sulfuric acid:
> $$\\text{Mg(s)} + \\text{H}_2\\text{SO}_4\\text{(aq)} \\rightarrow \\text{MgSO}_4\\text{(aq)} + \\text{H}_2\\text{(g)}$$
> Which volume of hydrogen gas in litres ($\\text{dm}^3$) at r.t.p. will be formed if $12\\text{ g}$ of magnesium are reacted? ($A_r$: $\\text{Mg} = 24$)
> 
> **A** 12
> 
> **B** 24
> 
> **C** 0.5
> 
> **D** 6
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate Moles of Mg:**
> >    $$n(\\text{Mg}) = \\frac{12\\text{ g}}{24\\text{ g/mol}} = 0.5\\text{ mol}$$
> > 2. **Mole Ratio:**
> >    $$\\text{Mg} : \\text{H}_2 = 1 : 1 \\rightarrow n(\\text{H}_2) = 0.5\\text{ mol}$$
> > 3. **Calculate Gas Volume at r.t.p.:**
> >    $$\\text{Volume} = n \\times 24\\text{ dm}^3/\\text{mol} = 0.5 \\times 24 = 12\\text{ dm}^3$$
> > 4. **Conclusion:**
> >    * The volume formed is **12 dm³**. The correct option is **A**.

> [!EXAMPLE]
> #### 📝 Worked Example 2: Concentration and Mass Dissolved
> **Question:** A solution of sodium carbonate, $\\text{Na}_2\\text{CO}_3$, has a concentration of $0.03\\text{ mol/dm}^3$. What mass of sodium carbonate is dissolved in $1\\text{ dm}^3$ of this solution? ($A_r$: $\\text{Na} = 23$, $\\text{C} = 12$, $\\text{O} = 16$)
> 
> **A** 1.06 g
> 
> **B** 10.60 g
> 
> **C** 3.18 g
> 
> **D** 31.80 g
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate $M_r$ of $\\text{Na}_2\\text{CO}_3$:**
> >    $$M_r = (2 \\times 23) + 12 + (3 \\times 16) = 46 + 12 + 48 = 106\\text{ g/mol}$$
> > 2. **Calculate Moles in $1\\text{ dm}^3$:**
> >    $$n = \\text{Concentration} \\times \\text{Volume} = 0.03\\text{ mol/dm}^3 \\times 1\\text{ dm}^3 = 0.03\\text{ mol}$$
> > 3. **Calculate Mass in Grams:**
> >    $$\\text{Mass} = n \\times M_r = 0.03\\text{ mol} \\times 106\\text{ g/mol} = 3.18\\text{ g}$$
> > 4. **Conclusion:**
> >    * The mass is **3.18 g**. The correct option is **C**.
        `,
        keyPoints: [
            "At r.t.p., 1 mole of any gas occupies 24 dm³ (24000 cm³).",
            "Concentration in mol/dm³ = moles / volume in dm³.",
            "Concentration in g/dm³ = concentration in mol/dm³ × Mr."
        ]
    }
];
