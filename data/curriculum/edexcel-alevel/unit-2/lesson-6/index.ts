import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Mathematical Skills in Chemistry";
export const lessonNumber = 6;

export const theoryMarkdown = `
In this lesson, we cover the essential mathematical skills required for IAS and IAL Chemistry, including standard form, ratios, fractions, percentages, algebra (rearranging equations), significant figures, and multi-step stoichiometric calculations.
`;

export const parts: LessonPart[] = [
    {
        id: 'maths-standard-form-ratios',
        title: 'Standard Form & Ratios',
        type: 'text',
        content: `
> [!NOTE]
> ### 🔢 Using Standard Form
> In chemistry, we often deal with extremely large numbers (like Avogadro's constant: $602,000,000,000,000,000,000,000\\text{ mol}^{-1}$) or extremely small numbers (like atomic radii or concentrations). To make these numbers easier to handle, we write them in **standard form**:
> $$a \\\\times 10^b$$
> where $1 \\\\le a < 10$ and $b$ is an integer.
> * **Converting to Standard Form:** Move the decimal point until it is directly to the right of the first non-zero digit. The number of positions moved determines the index $b$.
>   * If the original number is less than 1, the index $b$ is **negative**.
>   * If the original number is greater than 10, the index $b$ is **positive**.
> * *Examples:*
>   * $0.000 000 012 \\\\rightarrow 1.2 \\\\times 10^{-8}$
>   * $15 \\\\rightarrow 1.5 \\\\times 10^1$
>   * $1000 \\\\rightarrow 1.0 \\\\times 10^3$
>   * $3,700,000 \\\\rightarrow 3.7 \\\\times 10^6$
>   * Avogadro's constant: $6.02 \\\\times 10^{23}\\text{ mol}^{-1}$

> [!TIP]
> ### ⚖️ Ratios in Chemistry
> Ratios are used to compare quantities, such as reacting moles in a balanced chemical equation. Ratios can be simplified by dividing both sides by their lowest common divisor.
> * *Example:* A ratio of $12:4$ can be simplified to $3:1$ by dividing both sides by 4.

> [!EXAMPLE]
> #### 📝 Worked Example 1: Dividing into a Ratio
> **Question:** Divide 180 into the ratio $3:2$.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Find the total number of parts:**
> >    * Total parts = $3 + 2 = 5$ parts.
> > 
> > 2. **Calculate the value of one part:**
> >    * Value of one part = $180 \\\\div 5 = 36$.
> > 
> > 3. **Multiply to find the final parts:**
> >    * Part 1 = $3 \\\\times 36 = 108$
> >    * Part 2 = $2 \\\\times 36 = 72$
> >    * Answer = **$108:72$** (Check: $108 + 72 = 180$).
`
    },
    {
        id: 'maths-fractions-percentages',
        title: 'Fractions & Percentages',
        type: 'text',
        content: `
> [!NOTE]
> ### 🧩 Working with Fractions
> Fractions are essential when dealing with mole fractions, yields, or isotopic abundances. Recall the key operators:
> * **Addition/Subtraction:** Find the Lowest Common Multiple (LCM) of the denominators, convert the fractions, and add/subtract the numerators:
>   $$\\frac{1}{2} + \\frac{1}{5} = \\frac{5}{10} + \\frac{2}{10} = \\frac{7}{10}$$
> * **Multiplication:** Multiply the numerators together and denominators together:
>   $$\\frac{2}{7} \\\\times \\frac{4}{9} = \\frac{8}{63}$$
> * **Division:** Invert (flip) the second fraction and multiply:
>   $$\\frac{2}{3} \\\\div \\frac{7}{9} = \\frac{2}{3} \\\\times \\frac{9}{7} = \\frac{18}{21} = \\frac{6}{7}$$

> [!IMPORTANT]
> ### 📈 Percentage Multipliers & Changes
> Percentages are widely used to calculate percentage yields, atom economies, and percentage uncertainties.
> * **Percentage Increase (Multiplier):** To increase a value by $x\\%$, multiply the value by $(1 + \\frac{x}{100})$:
>   * *Example:* Increase $30\\text{ mg}$ by $23\\% \\\\rightarrow 30 \\\\times 1.23 = 36.9\\text{ mg}$.
> * **Percentage Decrease (Multiplier):** To decrease a value by $x\\%$, multiply the value by $(1 - \\frac{x}{100})$:
>   * *Example:* Decrease $30\\text{ mg}$ by $23\\% \\\\rightarrow 30 \\\\times 0.77 = 23.1\\text{ mg}$.
> * **Percentage Change Formula:**
>   $$\\text{Percentage Change} = \\\\frac{\\text{Difference between values}}{\\text{Original value}} \\\\times 100$$

> [!EXAMPLE]
> #### 📝 Worked Example 2: Percentage Increase
> **Question:** The volume of a gas solution increases from $40\\text{ cm}^3$ to $50\\text{ cm}^3$. Calculate the percentage increase in volume.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Find the change in volume:**
> >    * Change = $50 - 40 = 10\\text{ cm}^3$.
> > 
> > 2. **Calculate the percentage change:**
> >    * Percentage increase = $\\frac{10}{40} \\\\times 100 = 25\\%$.
`
    },
    {
        id: 'maths-algebra-sig-figures',
        title: 'Algebra & Significant Figures',
        type: 'text',
        content: `
> [!NOTE]
> ### 🔀 Rearranging Equations (Algebra)
> In chemistry, you must be able to change the subject of a mathematical formula. Any operation applied to one side of the equation must be applied to the other.
> * *Example:* The equation for calculating moles is:
>   $$n = \\\\frac{m}{M}$$
>   *(where $n = \\\\text{moles}$, $m = \\\\text{mass}$, and $M = \\\\text{molar mass}$)*
> * To make $M$ the subject:
>   * Multiply both sides by $M \\\\rightarrow nM = m$
>   * Divide both sides by $n \\\\rightarrow M = \\\\frac{m}{n}$
> * Substituting values ($m = 12.5\\text{ g}$, $n = 2.5\\text{ mol}$):
>   $$M = \\\\frac{12.5\\text{ g}}{2.5\\text{ mol}} = 5\\text{ g mol}^{-1}$$

> [!IMPORTANT]
> ### 🎯 Rules for Significant Figures (S.F.)
> When reporting experimental data, your final answer should be rounded to an appropriate number of significant figures (usually matching the lowest number of S.F. in the starting data):
> 1. **Rule 1:** The first significant figure is the first non-zero digit.
> 2. **Rule 2:** Digits 1–9 are always significant.
> 3. **Rule 3:** Leading zeros are **never** significant (e.g., $0.0025$ has 2 S.F.).
> 4. **Rule 4:** Trailing zeros *after* a decimal point are significant (e.g., $0.00250$ has 3 S.F.).
> 
> | Exact Number | Rounded to 1 S.F. | Rounded to 2 S.F. | Rounded to 3 S.F. |
> | :--- | :---: | :---: | :---: |
> | **45678** | 50000 | 46000 | 45700 |
> | **45000** | 50000 | 45000 | 45000 |
> | **0.002755** | 0.003 | 0.0028 | 0.00276 |
`
    },
    {
        id: 'maths-stoichiometry-applications',
        title: 'Moles Formulae & Stoichiometric Calculations',
        type: 'text',
        content: `
> [!NOTE]
> ### 🧮 The Core Moles Equations
> Stoichiometric chemistry requires applying different mole formulas depending on whether the substance is a solid, solution, or gas.
> 
> \${svgToken(\`<svg viewBox="0 0 650 250" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGradMath" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e"/>
      <stop offset="100%" stop-color="#0b1b35"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bgGradMath)" rx="8" stroke="#1e293b" stroke-width="1.5"/>
  
  <!-- Central Moles Circle -->
  <circle cx="325" cy="125" r="45" fill="#1e293b" stroke="#38bdf8" stroke-width="2.5"/>
  <text x="325" y="122" text-anchor="middle" fill="#f8fafc" font-size="14" font-weight="bold">Moles</text>
  <text x="325" y="138" text-anchor="middle" fill="#94a3b8" font-size="11">n / mol</text>
  
  <!-- Solid Card (Left) -->
  <rect x="30" y="50" width="180" height="150" rx="6" fill="#1e293b" stroke="#e2e8f0" stroke-width="1" stroke-opacity="0.2"/>
  <text x="120" y="75" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="bold">1. Solids / Liquids</text>
  <text x="120" y="105" text-anchor="middle" fill="#cbd5e1" font-size="11">n = mass / M_r</text>
  <text x="120" y="135" text-anchor="middle" fill="#94a3b8" font-size="9">mass in grams (g)</text>
  <text x="120" y="150" text-anchor="middle" fill="#94a3b8" font-size="9">M_r in g/mol</text>
  
  <!-- Solution Card (Right) -->
  <rect x="440" y="50" width="180" height="150" rx="6" fill="#1e293b" stroke="#e2e8f0" stroke-width="1" stroke-opacity="0.2"/>
  <text x="530" y="75" text-anchor="middle" fill="#f43f5e" font-size="12" font-weight="bold">2. Solutions</text>
  <text x="530" y="105" text-anchor="middle" fill="#cbd5e1" font-size="11">n = c × v</text>
  <text x="530" y="135" text-anchor="middle" fill="#94a3b8" font-size="9">c in mol/dm³</text>
  <text x="530" y="150" text-anchor="middle" fill="#94a3b8" font-size="9">v in dm³ (cm³ / 1000)</text>
  
  <!-- Gas Card (Bottom Center) -->
  <rect x="235" y="185" width="180" height="50" rx="6" fill="#1e293b" stroke="#e2e8f0" stroke-width="1" stroke-opacity="0.2"/>
  <text x="325" y="202" text-anchor="middle" fill="#10b981" font-size="11" font-weight="bold">3. Gases (at RTP)</text>
  <text x="325" y="222" text-anchor="middle" fill="#cbd5e1" font-size="10">n = volume (dm³) / 24</text>
  
  <!-- Connecting Lines -->
  <line x1="210" y1="125" x2="280" y2="125" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="3 3"/>
  <line x1="440" y1="125" x2="370" y2="125" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="3 3"/>
  <line x1="325" y1="170" x2="325" y2="185" stroke="#10b981" stroke-width="1.5" stroke-dasharray="3 3"/>
</svg>\`)}

> [!IMPORTANT]
> ### ⚖️ Multi-step Stoichiometric Calculations
> When solving stoichiometric problems, follow this pathway:
> 1. Write and balance the chemical equation.
> 2. Convert given mass/volume data of the reactant to **moles** ($n$).
> 3. Use the stoichiometric coefficients (mole ratios) from the equation to find the moles of target product.
> 4. Convert the moles of target product back to the required units (grams, $\text{dm}^3$, etc.).

> [!EXAMPLE]
> #### 📝 Worked Example 3: Reaction Stoichiometry
> **Question:** $10.0\\text{ g}$ of potassium is added to excess water, producing potassium hydroxide and hydrogen gas. Calculate the volume of hydrogen gas ($H_2$) produced at room temperature and pressure (RTP) in $\text{dm}^3$. (Molar mass of $K = 39.1\\text{ g mol}^{-1}$, molar volume of gas at RTP $= 24.0\\text{ dm}^3\\text{ mol}^{-1}$).
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Write the balanced chemical equation:**
> >    $$2K\\text{(s)} + 2H_2O\\text{(l)} \\\\rightarrow 2KOH\\text{(aq)} + H_2\\text{(g)}$$
> > 
> > 2. **Calculate the moles of Potassium used:**
> >    * $\\text{Moles of K} = \\frac{\\text{mass}}{\\text{Molar mass}} = \\frac{10.0\\text{ g}}{39.1\\text{ g mol}^{-1}} = 0.256\\text{ mol}$.
> > 
> > 3. **Find the moles of $H_2$ formed using the mole ratio:**
> >    * Ratio of $K : H_2 = 2 : 1$.
> >    * $\\text{Moles of } H_2 = 0.256 \\\\times 0.5 = 0.128\\text{ mol}$.
> > 
> > 4. **Convert moles of $H_2$ to volume at RTP:**
> >    * $\\text{Volume of } H_2 = 0.128\\text{ mol} \\\\times 24.0\\text{ dm}^3\\text{ mol}^{-1} = 3.07\\text{ dm}^3$.

> [!EXAMPLE]
> #### 📝 Worked Example 4: Synthesising Copper(II) Chloride Crystals
> **Question:** Copper(II) chloride crystals, $CuCl_2 \\\\cdot 2H_2O$, can be prepared by reacting excess copper(II) oxide with hot hydrochloric acid:
> $$CuO\\text{(s)} + 2HCl\\text{(aq)} \\\\rightarrow CuCl_2\\text{(aq)} + H_2O\\text{(l)}$$
> In one preparation, $50.0\\text{ cm}^3$ of $0.500\\text{ mol dm}^{-3}$ hydrochloric acid is used.
> * (a) Calculate the moles of hydrochloric acid used.
> * (b) Calculate the minimum moles of copper(II) oxide needed.
> * (c) Calculate the mass of copper(II) oxide needed, if a 20% excess is necessary (to 2 S.F.). (Molar mass of $CuO = 79.5\\text{ g mol}^{-1}$).
> * (d) Calculate the molar mass of copper(II) chloride-2-water, $CuCl_2 \\\\cdot 2H_2O$. (Atomic masses: $Cu = 63.5$, $Cl = 35.5$, $H = 1.0$, $O = 16.0$).
> * (e) If $1.81\\text{ g}$ of $CuCl_2 \\\\cdot 2H_2O$ crystals are obtained, calculate the percentage yield.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > **Rule (NAUTE):** No Approximation Until The End! Keep numbers in your calculator.
> > 
> > 1. **(a) Moles of HCl used:**
> >    * Volume of HCl = $\\frac{50.0}{1000} = 0.0500\\text{ dm}^3$
> >    * $\\text{Moles} = c \\\\times v = 0.500\\text{ mol dm}^{-3} \\\\times 0.0500\\text{ dm}^3 = 0.025\\text{ mol}$.
> > 
> > 2. **(b) Minimum moles of CuO needed:**
> >    * The mole ratio of $CuO : HCl$ is $1 : 2$.
> >    * $\\text{Moles of CuO} = \\frac{0.025}{2} = 0.0125\\text{ mol}$.
> > 
> > 3. **(c) Mass of CuO with 20% excess:**
> >    * Moles required with 20% excess = $0.0125 \\\\times 1.20 = 0.0150\\text{ mol}$.
> >    * $\\text{Mass of CuO} = 0.0150\\text{ mol} \\\\times 79.5\\text{ g mol}^{-1} = 1.1925\\text{ g} \\\\rightarrow 1.2\\text{ g}$ (rounded to 2 S.F.).
> > 
> > 4. **(d) Molar mass of $CuCl_2 \\\\cdot 2H_2O$:**
> >    * $M_r = 63.5 + (2 \\\\times 35.5) + (2 \\\\times 18.0) = 170.5\\text{ g mol}^{-1}$.
> > 
> > 5. **(e) Percentage yield calculation:**
> >    * Expected moles of $CuCl_2 \\\\cdot 2H_2O$ crystals = $0.0125\\text{ mol}$ (ratio $1:1$ with minimum CuO).
> >    * Theoretical yield = $0.0125\\text{ mol} \\\\times 170.5\\text{ g mol}^{-1} = 2.13125\\text{ g}$.
> >    * $\\text{Percentage Yield} = \\frac{1.81\\text{ g}}{2.13125\\text{ g}} \\\\times 100 = 84.92\\% \\\\rightarrow 85\\%$ (rounded to 2 S.F.).
`
    }
];

export const lessonNotes = parts;

