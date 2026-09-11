import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Chemical Equations and Ionic Equations";
export const lessonNumber = 3;

export const theoryMarkdown = `
## Chemical Equations
This lesson covers word equations, symbol equations with state symbols, balancing chemical equations, ionic equations, and spectator ions according to Cambridge IGCSE Chemistry standards.
`;

const equationBalancingSvg = `
<svg viewBox="0 0 680 220" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="eqBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
    <marker id="eqArrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#38bdf8" />
    </marker>
  </defs>

  <rect width="680" height="220" fill="url(#eqBg)" stroke="#1e293b" stroke-width="2" rx="16" />

  <text x="340" y="30" fill="#f8fafc" font-size="14" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Writing and Balancing Symbol Equations</text>

  <!-- Balanced Equation Showcase -->
  <g transform="translate(140, 55)">
    <rect width="400" height="50" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-opacity="0.4" stroke-width="1.5" />
    <text x="200" y="32" fill="#ffffff" font-size="18" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">
      <tspan fill="#38bdf8">3</tspan>CuO(s) + <tspan fill="#38bdf8">2</tspan>NH₃(g) → <tspan fill="#34d399">3</tspan>Cu(s) + N₂(g) + <tspan fill="#34d399">3</tspan>H₂O(l)
    </text>
  </g>

  <!-- State Symbols Legend -->
  <g transform="translate(60, 130)">
    <rect x="0" y="0" width="125" height="60" rx="8" fill="#1e293b" fill-opacity="0.5" stroke="#38bdf8" stroke-width="1" />
    <text x="62" y="25" fill="#38bdf8" font-size="12" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">(s) = Solid</text>
    <text x="62" y="45" fill="#94a3b8" font-size="10" font-family="system-ui, sans-serif" text-anchor="middle">Precipitate / Metal</text>

    <rect x="145" y="0" width="125" height="60" rx="8" fill="#1e293b" fill-opacity="0.5" stroke="#34d399" stroke-width="1" />
    <text x="207" y="25" fill="#34d399" font-size="12" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">(l) = Liquid</text>
    <text x="207" y="45" fill="#94a3b8" font-size="10" font-family="system-ui, sans-serif" text-anchor="middle">Pure water / Bromine</text>

    <rect x="290" y="0" width="125" height="60" rx="8" fill="#1e293b" fill-opacity="0.5" stroke="#c084fc" stroke-width="1" />
    <text x="352" y="25" fill="#c084fc" font-size="12" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">(g) = Gas</text>
    <text x="352" y="45" fill="#94a3b8" font-size="10" font-family="system-ui, sans-serif" text-anchor="middle">Vapor / Escaping gas</text>

    <rect x="435" y="0" width="125" height="60" rx="8" fill="#1e293b" fill-opacity="0.5" stroke="#f59e0b" stroke-width="1" />
    <text x="497" y="25" fill="#f59e0b" font-size="12" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">(aq) = Aqueous</text>
    <text x="497" y="45" fill="#94a3b8" font-size="10" font-family="system-ui, sans-serif" text-anchor="middle">Dissolved in water</text>
  </g>
</svg>
`;

export const lessonParts: LessonPart[] = [
    {
        id: "types-of-equations",
        title: "Word Equations, Symbol Equations & State Symbols",
        type: "text",
        content: `
### 📝 Representing Chemical Reactions

Chemical equations describe what happens in a chemical reaction by showing reactants converting into products:

> [!NOTE]
> ### 📋 Key Equation Formats
> 1. **Word Equation:** A summary of a chemical reaction using the full chemical names of reactants and products:
>    $$\\text{magnesium} + \\text{hydrochloric acid} \\rightarrow \\text{magnesium chloride} + \\text{hydrogen}$$
> 
> 2. **Symbol Equation:** A balanced summary using chemical formulas showing the exact conservation of atoms:
>    $$\\text{Mg} + 2\\text{HCl} \\rightarrow \\text{MgCl}_2 + \\text{H}_2$$
> 
> 3. **State Symbols:** Universal abbreviations placed in brackets after each formula indicating physical state:
>    * **(s):** Solid (e.g. metals, precipitates, powders).
>    * **(l):** Liquid (e.g. pure $\\text{H}_2\\text{O}$, molten salts).
>    * **(g):** Gas (e.g. $\\text{O}_2$, $\\text{CO}_2$, $\\text{NH}_3$).
>    * **(aq):** Aqueous solution (dissolved in water).

${svgToken(equationBalancingSvg)}

> [!EXAMPLE]
> #### 📝 Worked Example 1: Balancing Redox with Ammonia
> **Question:** Copper(II) oxide reacts with ammonia gas:
> $$3\\text{CuO} + 2\\text{NH}_3 \\rightarrow \\dots$$
> What completes the right-hand side of the balanced equation?
> 
> **A** $3\\text{Cu} + \\text{N}_2 + 3\\text{H}_2\\text{O}$
> 
> **B** $3\\text{Cu} + 2\\text{N} + 3\\text{H}_2\\text{O}$
> 
> **C** $3\\text{Cu} + 2\\text{HNO}_3$
> 
> **D** $3\\text{Cu} + 2\\text{NO} + 3\\text{H}_2\\text{O}$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Count Atoms on the Left-Hand Side:**
> >    * Copper: $3 \\times 1 = 3$
> >    * Oxygen: $3 \\times 1 = 3$
> >    * Nitrogen: $2 \\times 1 = 2$
> >    * Hydrogen: $2 \\times 3 = 6$
> > 2. **Balance with Chemical Species:**
> >    * Copper is reduced to metallic copper: $3\\text{Cu}$.
> >    * Nitrogen is oxidised to diatomic nitrogen gas: $\\text{N}_2$ (containing 2 nitrogen atoms).
> >    * Hydrogen and oxygen combine to form water: 6 H and 3 O atoms produce $3\\text{H}_2\\text{O}$.
> > 3. **Assemble the Right-Hand Side:**
> >    $$3\\text{Cu} + \\text{N}_2 + 3\\text{H}_2\\text{O}$$
> > 4. **Conclusion:**
> >    * The correct option is **A**.

> [!EXAMPLE]
> #### 📝 Worked Example 2: Balancing Coefficients with Fluorine
> **Question:** Aluminium reacts with fluorine gas according to the equation:
> $$x\\text{Al(s)} + y\\text{F}_2\\text{(g)} \\rightarrow z\\text{AlF}_3\\text{(s)}$$
> Which values of $x$, $y$ and $z$ balance the equation?
> 
> | | $x$ | $y$ | $z$ |
> | :--- | :---: | :---: | :---: |
> | A | 1 | 2 | 1 |
> | B | 2 | 3 | 2 |
> | C | 3 | 2 | 3 |
> | D | 4 | 3 | 4 |
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Balance Fluorine Atoms:**
> >    * Fluorine exists as diatomic $\\text{F}_2$ (even number of F) on the left, but as $\\text{AlF}_3$ (odd number of F) on the right.
> >    * The lowest common multiple of 2 and 3 is 6.
> >    * Place coefficient 3 before $\\text{F}_2$ ($3 \\times 2 = 6\\text{ F}$) and coefficient 2 before $\\text{AlF}_3$ ($2 \\times 3 = 6\\text{ F}$). Thus $y = 3, z = 2$.
> > 2. **Balance Aluminium Atoms:**
> >    * $2\\text{AlF}_3$ contains 2 aluminium atoms, requiring $x = 2\\text{Al}$.
> > 3. **Verify:**
> >    $$2\\text{Al(s)} + 3\\text{F}_2\\text{(g)} \\rightarrow 2\\text{AlF}_3\\text{(s)}$$
> > 4. **Conclusion:**
> >    * Row **B** ($x=2, y=3, z=2$) is correct.
        `,
        keyPoints: [
            "Symbol equations must have equal numbers of each type of atom on both sides.",
            "State symbols (s, l, g, aq) are mandatory in IGCSE chemical equations.",
            "Never alter subscripts in a chemical formula when balancing; only change big coefficients."
        ]
    },
    {
        id: "ionic-equations-and-spectator-ions",
        title: "Net Ionic Equations & Spectator Ions",
        type: "text",
        content: `
### ⚡ What is an Ionic Equation?

In aqueous solutions, soluble ionic compounds and strong acids dissociate into separate, freely moving hydrated ions. Many precipitation, acid-base neutralisation, and displacement reactions only involve certain ions, while others remain unchanged.

> [!IMPORTANT]
> ### 🧮 Key Definitions
> * **Ionic Equation:** A simplified equation showing only the specific ions and molecules that actually take part in and change during the reaction.
> * **Spectator Ions:** Ions that do **not** take part in the chemical reaction; they exist in the exact same physical and ionic state on both reactant and product sides.

### 🪜 Step-by-Step Method to Write a Net Ionic Equation

1. **Write the balanced symbol equation** including full state symbols.
2. **Split only soluble ionic compounds and strong acids $(aq)$** into their constituent ions. Leave solids $(s)$, pure liquids $(l)$, and gases $(g)$ together.
3. **Cross out identical spectator ions** that appear unchanged on both sides.
4. **Rewrite the clean net ionic equation** with state symbols.

> [!EXAMPLE]
> #### 📝 Worked Example 1: Precipitation of Silver Iodide
> **Full equation:**
> $$\\text{KI(aq)} + \\text{AgNO}_3\\text{(aq)} \\rightarrow \\text{KNO}_3\\text{(aq)} + \\text{AgI(s)}$$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Dissociate Aqueous Species:**
> >    $$\\text{K}^+\\text{(aq)} + \\text{I}^-\\text{(aq)} + \\text{Ag}^+\\text{(aq)} + \\text{NO}_3^-\\text{(aq)} \\rightarrow \\text{K}^+\\text{(aq)} + \\text{NO}_3^-\\text{(aq)} + \\text{AgI(s)}$$
> > 2. **Identify Spectator Ions:**
> >    * $\\text{K}^+\\text{(aq)}$ and $\\text{NO}_3^-\\text{(aq)}$ appear unchanged on both sides.
> > 3. **Net Ionic Equation:**
> >    $$\\text{Ag}^+\\text{(aq)} + \\text{I}^-\\text{(aq)} \\rightarrow \\text{AgI(s)}$$
> > * **Spectator ions:** $\\text{K}^+$ and $\\text{NO}_3^-$

> [!EXAMPLE]
> #### 📝 Worked Example 2: Precipitation of Barium Sulfate
> **Full equation:**
> $$\\text{Ba(NO}_3)_2\\text{(aq)} + \\text{MgSO}_4\\text{(aq)} \\rightarrow \\text{Mg(NO}_3)_2\\text{(aq)} + \\text{BaSO}_4\\text{(s)}$$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the Insoluble Precipitate:**
> >    * Barium sulfate ($\\text{BaSO}_4$) is an insoluble solid $(s)$.
> > 2. **Spectator Ions:**
> >    * Magnesium ($\\text{Mg}^{2+}$) and nitrate ($\\text{NO}_3^-$) remain aqueous and dissolved.
> > 3. **Net Ionic Equation:**
> >    $$\\text{Ba}^{2+}\\text{(aq)} + \\text{SO}_4^{2-}\\text{(aq)} \\rightarrow \\text{BaSO}_4\\text{(s)}$$
> > * **Spectator ions:** $\\text{Mg}^{2+}$ and $\\text{NO}_3^-$

> [!EXAMPLE]
> #### 📝 Worked Example 3: Precipitation of Calcium Carbonate
> **Full equation:**
> $$(\\text{NH}_4)_2\\text{CO}_3\\text{(aq)} + \\text{Ca(NO}_3)_2\\text{(aq)} \\rightarrow 2\\text{NH}_4\\text{NO}_3\\text{(aq)} + \\text{CaCO}_3\\text{(s)}$$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Net Ionic Equation:**
> >    $$\\text{Ca}^{2+}\\text{(aq)} + \\text{CO}_3^{2-}\\text{(aq)} \\rightarrow \\text{CaCO}_3\\text{(s)}$$
> > 2. **Spectator ions:**
> >    * $\\text{NH}_4^+$ and $\\text{NO}_3^-$
        `,
        keyPoints: [
            "Net ionic equations ignore spectator ions and highlight the actual chemical change.",
            "Solids (precipitates), liquids (water), and gases are never split into ions in ionic equations.",
            "Always include state symbols in ionic equations."
        ]
    }
];
