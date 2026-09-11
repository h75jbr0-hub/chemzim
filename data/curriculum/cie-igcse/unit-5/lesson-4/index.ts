import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Fuel and Hydrogen";
export const lessonNumber = 4;

export const theoryMarkdown = `
## Fuels & Hydrogen Fuel Cells
This lesson covers fuels, energy release during combustion, and the structure, reactions, advantages, and disadvantages of hydrogen-oxygen fuel cells in accordance with the Cambridge IGCSE syllabus.
`;

// Compact SVG Diagram 4: Hydrogen-Oxygen Fuel Cell (650x260)
const fuelCellSvg = `
<svg viewBox="0 0 650 260" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgFuelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
    <marker id="flowArrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
    </marker>
    <marker id="currArrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#fbbf24" />
    </marker>
  </defs>

  <rect width="650" height="260" fill="url(#bgFuelGrad)" stroke="#1e293b" stroke-width="2" rx="14" />
  <text x="325" y="24" fill="#f8fafc" font-size="13" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Hydrogen-Oxygen Fuel Cell: Clean Electrochemical Energy</text>

  <!-- External Circuit with Light Bulb -->
  <path d="M 215 75 L 215 48 L 305 48" stroke="#fbbf24" stroke-width="2" fill="none" />
  <path d="M 345 48 L 435 48 L 435 75" stroke="#fbbf24" stroke-width="2" fill="none" />
  <!-- Bulb -->
  <circle cx="325" cy="48" r="14" fill="#fef08a" stroke="#eab308" stroke-width="2" />
  <text x="325" y="52" fill="#854d0e" font-size="10" font-weight="bold" text-anchor="middle">⚡</text>
  <!-- Electron flow arrow -->
  <line x1="240" y1="42" x2="275" y2="42" stroke="#38bdf8" stroke-width="1.8" marker-end="url(#flowArrow)" />
  <text x="258" y="38" fill="#38bdf8" font-size="9" font-weight="bold" text-anchor="middle">e⁻ flow</text>

  <!-- Main Cell Container -->
  <rect x="170" y="75" width="310" height="155" rx="8" fill="#0f172a" stroke="#334155" stroke-width="1.5" />

  <!-- Anode (Left) -->
  <rect x="205" y="75" width="20" height="155" fill="#334155" stroke="#475569" stroke-width="1" />
  <text x="195" y="155" fill="#94a3b8" font-size="9.5" font-weight="bold" transform="rotate(-90 195 155)" text-anchor="middle">ANODE (-)</text>

  <!-- Cathode (Right) -->
  <rect x="425" y="75" width="20" height="155" fill="#334155" stroke="#475569" stroke-width="1" />
  <text x="455" y="155" fill="#94a3b8" font-size="9.5" font-weight="bold" transform="rotate(-90 455 155)" text-anchor="middle">CATHODE (+)</text>

  <!-- Electrolyte (Middle) -->
  <rect x="225" y="75" width="200" height="155" fill="#1e293b" opacity="0.8" />
  <text x="325" y="130" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">Electrolyte</text>
  <text x="325" y="148" fill="#94a3b8" font-size="9" text-anchor="middle">(KOH / H⁺ exchange)</text>
  <text x="325" y="195" fill="#10b981" font-size="10" font-weight="bold" text-anchor="middle">2H₂ + O₂ → 2H₂O</text>

  <!-- Inlets & Outlets -->
  <!-- Hydrogen IN (Top Left) -->
  <line x1="120" y1="110" x2="165" y2="110" stroke="#38bdf8" stroke-width="2" marker-end="url(#flowArrow)" />
  <text x="115" y="105" fill="#38bdf8" font-size="9.5" font-weight="bold">H₂ Fuel IN</text>

  <!-- Unused H₂ OUT (Bottom Left) -->
  <line x1="165" y1="190" x2="120" y2="190" stroke="#64748b" stroke-width="1.8" marker-end="url(#flowArrow)" />
  <text x="115" y="205" fill="#94a3b8" font-size="8.5">Unused H₂</text>

  <!-- Oxygen IN (Top Right) -->
  <line x1="530" y1="110" x2="485" y2="110" stroke="#f87171" stroke-width="2" marker-end="url(#flowArrow)" />
  <text x="535" y="105" fill="#f87171" font-size="9.5" font-weight="bold">O₂ (Air) IN</text>

  <!-- Water & Warm Air OUT (Bottom Right) -->
  <line x1="485" y1="190" x2="535" y2="190" stroke="#10b981" stroke-width="2" marker-end="url(#flowArrow)" />
  <text x="535" y="195" fill="#10b981" font-size="9.5" font-weight="bold">H₂O ONLY OUT</text>
  <text x="535" y="210" fill="#6ee7b7" font-size="8.5">(Zero Pollutants)</text>
</svg>
`;

export const lessonParts: LessonPart[] = [
  {
    id: 'ci-u5-l4-part1',
    title: 'Chemical Fuels & The Hydrogen Fuel Cell',
    type: 'text',
    content: `
> [!NOTE]
> ### ⛽ What is a Chemical Fuel?
> A **fuel** is a substance that releases useful thermal or electrical energy when it undergoes chemical change or combustion.
> * Common chemical fuels include coal, natural gas (methane), petroleum fractions (petrol, diesel), and **hydrogen**.
> * The combustion of fossil fuels produces greenhouse gases like carbon dioxide ($CO_2$) and pollutants ($CO$, $SO_2$, $NO_x$).

> [!BOX]
> ### 🔋 The Hydrogen-Oxygen Fuel Cell
> A **fuel cell** is an electrochemical cell that converts the chemical energy of a fuel (hydrogen) and an oxidant (oxygen) directly into **electrical energy** without combustion.
>
> ${svgToken(fuelCellSvg)}

> [!IMPORTANT]
> ### ⚡ Chemical Equations in the Fuel Cell
> * **Overall reaction equation:**
>   $$2H_2(g) + O_2(g) \\\\rightarrow 2H_2O(l)$$
> * In an alkaline fuel cell:
>   * **At the Anode (negative electrode - oxidation):**
>     $$2H_2(g) + 4OH^-(aq) \\\\rightarrow 4H_2O(l) + 4e^-$$
>   * **At the Cathode (positive electrode - reduction):**
>     $$O_2(g) + 2H_2O(l) + 4e^- \\\\rightarrow 4OH^-(aq)$$
> * Notice that electrons flow through the external wire from anode to cathode, generating electricity.
    `,
    keyPoints: [
      "A fuel cell directly converts chemical energy into electrical energy.",
      "The only chemical product of a hydrogen-oxygen fuel cell is water (H₂O).",
      "Overall equation: 2H₂(g) + O₂(g) → 2H₂O(l)."
    ]
  },
  {
    id: 'ci-u5-l4-part2',
    title: 'Advantages & Disadvantages of Hydrogen as a Fuel',
    type: 'text',
    content: `
> [!TIP]
> ### 🌿 Advantages of Hydrogen Fuel Cells (Cambridge Mark Scheme)
> 1. **Zero Harmful Emissions at Point of Use:**
>    * The only chemical byproduct is water ($H_2O$), eliminating carbon dioxide ($CO_2$), carbon monoxide ($CO$), sulfur dioxide ($SO_2$), and oxides of nitrogen ($NO_x$).
> 2. **High Energy Efficiency:**
>    * Fuel cells convert energy directly with higher efficiency than internal combustion engines, which waste substantial energy as heat.
> 3. **Renewable Potential:**
>    * Hydrogen can be generated by the electrolysis of water using renewable electricity (solar or wind).
> 4. **Continuous Operation:**
>    * Unlike rechargeable batteries that take hours to recharge, fuel cells operate continuously as long as fuel is supplied.

> [!WARNING]
> ### ⚠️ Disadvantages & Practical Challenges
> 1. **Storage and Transport Difficulties:**
>    * Hydrogen is a low-density gas requiring bulky, heavy, high-pressure tanks or cryogenic cooling to liquefy at extremely low temperatures ($-253^\\\\circ\\\\text{C}$).
> 2. **High Flammability & Explosive Risk:**
>    * Hydrogen forms explosive mixtures with air over a very wide concentration range and ignites easily.
> 3. **Production Source (Fossil Fuel Dependency):**
>    * Most commercial hydrogen is currently manufactured by steam reforming of natural gas ($CH_4$), which releases large amounts of $CO_2$.
> 4. **Lack of Refueling Infrastructure:**
>    * Hydrogen fueling stations are scarce and expensive to install compared to existing petrol/diesel networks.

> [!EXAMPLE]
> #### 📝 Cambridge Exam Question: Fuel Cell Evaluation
> **Question:** State **two** advantages and **one** disadvantage of using hydrogen fuel cells instead of petrol internal combustion engines to power motor vehicles.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Advantages (choose any two):**
> >    * Only water is produced / no carbon dioxide or greenhouse gas emissions.
> >    * Higher energy efficiency / more energy released per gram of fuel.
> > 2. **Disadvantage (choose any one):**
> >    * Difficult and dangerous to store under high pressure / requires heavy tanks.
> >    * Highly flammable / risk of explosion in collisions.
> >    * Hydrogen refueling infrastructure is not widely available.
    `,
    keyPoints: [
      "Major advantage: Only water is formed, so no greenhouse gas emissions occur during vehicle operation.",
      "Major disadvantage: Storage issues due to low density and high flammability under pressure.",
      "Recharging vs refueling: Hydrogen fuel cells can be refueled quickly compared to battery recharging."
    ]
  }
];

