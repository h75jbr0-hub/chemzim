import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Hydrogen-Oxygen Fuel Cells & Chemical Cells";
export const lessonNumber = 4;

export const theoryMarkdown = `
## Hydrogen-Oxygen Fuel Cells & Chemical Cells
This lesson covers electrochemical fuel cells, the hydrogen-oxygen fuel cell structure, half-equations at the electrodes, comparison with traditional fossil fuels, and a key comparison between fuel cells and electrolytic cells.
`;

const fuelCellSvg = `
<svg viewBox="0 0 680 320" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="fcBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
    <marker id="fcArrowCyan" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#38bdf8" />
    </marker>
    <marker id="fcArrowAmber" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#fbbf24" />
    </marker>
  </defs>

  <rect width="680" height="320" fill="url(#fcBg)" stroke="#1e293b" stroke-width="2" rx="16" />

  <text x="340" y="26" fill="#f8fafc" font-size="15" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Hydrogen-Oxygen Fuel Cell (Alkaline Electrolyte)</text>

  <!-- External Circuit with Motor / Load at Top -->
  <g transform="translate(240, 40)">
    <!-- Motor / Load Circle -->
    <circle cx="100" cy="22" r="16" fill="#0284c7" fill-opacity="0.3" stroke="#38bdf8" stroke-width="2" />
    <text x="100" y="27" fill="#f8fafc" font-size="13" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">M</text>
    <text x="100" y="52" fill="#38bdf8" font-size="10" font-family="system-ui, sans-serif" text-anchor="middle">Usable Electricity</text>

    <!-- Wires connecting to electrodes -->
    <path d="M 84 22 L -60 22 L -60 75" fill="none" stroke="#38bdf8" stroke-width="2" />
    <path d="M 116 22 L 260 22 L 260 75" fill="none" stroke="#38bdf8" stroke-width="2" />

    <!-- Electron flow arrow -->
    <path d="M -10 14 L 40 14" fill="none" stroke="#38bdf8" stroke-width="2" marker-end="url(#fcArrowCyan)" />
    <text x="15" y="8" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">e⁻ flow (from Anode to Cathode)</text>
  </g>

  <!-- Fuel Cell Body -->
  <rect x="140" y="115" width="400" height="180" rx="12" fill="#0f172a" stroke="#475569" stroke-width="2" />

  <!-- Porous Carbon Anode (-) -->
  <rect x="170" y="125" width="25" height="160" rx="4" fill="#334155" stroke="#38bdf8" stroke-width="2" />
  <text x="182" y="105" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">Anode (-)</text>
  <text x="182" y="200" fill="#94a3b8" font-size="10" font-weight="bold" text-anchor="middle" transform="rotate(-90 182 200)">Porous Carbon</text>

  <!-- Porous Carbon Cathode (+) -->
  <rect x="485" y="125" width="25" height="160" rx="4" fill="#334155" stroke="#f43f5e" stroke-width="2" />
  <text x="497" y="105" fill="#f43f5e" font-size="12" font-weight="bold" text-anchor="middle">Cathode (+)</text>
  <text x="497" y="200" fill="#94a3b8" font-size="10" font-weight="bold" text-anchor="middle" transform="rotate(-90 497 200)">Porous Carbon</text>

  <!-- Electrolyte Middle Chamber -->
  <rect x="235" y="125" width="210" height="160" fill="#0284c7" fill-opacity="0.15" stroke="#0284c7" stroke-opacity="0.3" />
  <text x="340" y="170" fill="#38bdf8" font-size="12" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Hot Aqueous KOH / Acid</text>
  <text x="340" y="190" fill="#94a3b8" font-size="11" font-family="system-ui, sans-serif" text-anchor="middle">(Electrolyte solution)</text>
  <text x="340" y="235" fill="#34d399" font-size="13" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">2H₂ + O₂ → 2H₂O</text>

  <!-- Inputs and Outputs -->
  <!-- H2 in -->
  <g transform="translate(60, 160)">
    <path d="M 0 10 L 75 10" fill="none" stroke="#38bdf8" stroke-width="2.5" marker-end="url(#fcArrowCyan)" />
    <text x="35" y="0" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">H₂ Fuel In</text>
  </g>
  <!-- Unused H2 out -->
  <g transform="translate(60, 240)">
    <path d="M 75 10 L 0 10" fill="none" stroke="#64748b" stroke-width="2" marker-end="url(#fcArrowCyan)" />
    <text x="35" y="26" fill="#64748b" font-size="10" text-anchor="middle">Unused H₂</text>
  </g>

  <!-- O2 in -->
  <g transform="translate(545, 160)">
    <path d="M 75 10 L 0 10" fill="none" stroke="#f43f5e" stroke-width="2.5" marker-end="url(#fcArrowCyan)" />
    <text x="40" y="0" fill="#f43f5e" font-size="12" font-weight="bold" text-anchor="middle">O₂ (Air) In</text>
  </g>
  <!-- Water / Steam out -->
  <g transform="translate(545, 240)">
    <path d="M 0 10 L 75 10" fill="none" stroke="#34d399" stroke-width="2.5" marker-end="url(#fcArrowCyan)" />
    <text x="40" y="26" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">H₂O Steam Out</text>
  </g>
</svg>
`;

export const lessonParts: LessonPart[] = [
  {
    id: "hydrogen-fuel-cells",
    title: "Structure, Reactions & Principles of Fuel Cells",
    type: "text",
    content: `
### ⚡ What is a Fuel Cell?

A **fuel** is a substance that can be used as a source of energy (releases heat/electrical energy).
A **hydrogen-oxygen fuel cell** is an electrochemical cell that converts the chemical energy of a fuel (hydrogen) and an oxidant (oxygen) directly into electrical energy.

> ${svgToken(fuelCellSvg)}

> [!NOTE]
> ### 📋 Key Components of the Fuel Cell
> 1. **Reactants:** Continuous supply of **hydrogen gas** ($\\text{H}_2$) and **oxygen gas** ($\\text{O}_2$ from air).
> 2. **Electrodes:** Both electrodes are made of **porous carbon (graphite)** containing a platinum catalyst to speed up the reactions.
> 3. **Electrolyte:** Hot aqueous **potassium hydroxide** ($\\text{KOH}$) or acidic proton exchange membrane.
> 4. **Current Flow:** Electrons carry the electrical current through the external circuit, flowing **from the anode to the cathode**.

> [!IMPORTANT]
> ### 🧮 Electrode Half-Equations & Overall Reaction
> 
> * **At the Anode (Negative Terminal) [Oxidation]:**
>   $$\\text{H}_2\\text{(g)} \\rightarrow 2\\text{H}^+\\text{(aq)} + 2e^-$$
>   *(In alkaline KOH electrolyte: $\\text{H}_2 + 2\\text{OH}^- \\rightarrow 2\\text{H}_2\\text{O} + 2e^-$)*
> 
> * **At the Cathode (Positive Terminal) [Reduction]:**
>   $$\\text{O}_2\\text{(g)} + 4\\text{H}^+\\text{(aq)} + 4e^- \\rightarrow 2\\text{H}_2\\text{O(l)}$$
>   *(In alkaline KOH electrolyte: $\\text{O}_2 + 2\\text{H}_2\\text{O} + 4e^- \\rightarrow 4\\text{OH}^-$)*
> 
> * **Overall Combined Reaction:**
>   $$2\\text{H}_2\\text{(g)} + \\text{O}_2\\text{(g)} \\rightarrow 2\\text{H}_2\\text{O(l)}$$
>   * The only chemical product formed is pure **water** (steam)!
`,
    keyPoints: [
      "Hydrogen-oxygen fuel cells react H₂ and O₂ to generate electricity directly.",
      "The overall chemical equation is 2H₂ + O₂ → 2H₂O.",
      "Electrons flow through the external circuit from the negative anode to the positive cathode."
    ]
  },
  {
    id: "advantages-and-comparison",
    title: "Advantages, Disadvantages & Cell Comparison",
    type: "text",
    content: `
### 🌍 Green Energy: Advantages & Disadvantages of Fuel Cells

Hydrogen fuel cells are widely regarded as the ultimate clean energy technology for electric vehicles and spacecraft.

> [!TIP]
> ### 🌟 Advantages of Hydrogen Fuel Cells
> 1. **Zero Harmful Emissions (No Pollutants or Greenhouse Gases):**
>    * The only exhaust product is pure water / steam ($\\text{H}_2\\text{O}$).
>    * No carbon dioxide ($\\text{CO}_2$), carbon monoxide ($\\text{CO}$), sulfur dioxide ($\\text{SO}_2$), or oxides of nitrogen ($\\text{NO}_x$) are released!
> 2. **High Energy Efficiency:**
>    * Converts chemical energy directly into electricity without thermal combustion losses.
>    * Yields about **$2.5$ times more energy per gram** than conventional hydrocarbon fuels like methane or petrol (gasoline).
> 3. **Renewable & Plentiful Resource:**
>    * Hydrogen can be produced by electrolysis of abundant water, avoiding the depletion of finite crude oil reserves.

> [!WARNING]
> ### ⚠️ Disadvantages & Safety Challenges
> 1. **Storage & Flammability:** Hydrogen gas is extremely flammable, explosive, and has a very low boiling point; it requires heavy, expensive high-pressure tanks or cryogenic cooling.
> 2. **Production Emissions:** Most industrial hydrogen is currently produced by steam reforming of natural gas (methane), which releases $\\text{CO}_2$.
> 3. **Cost:** Platinum catalysts and specialized membranes are expensive.

> [!BOX]
> ### ⚖️ Comparison: Fuel Cell vs. Electrolytic Cell
> | Feature | Hydrogen-Oxygen Fuel Cell | Electrolytic Cell |
> | :--- | :--- | :--- |
> | **Energy Conversion** | Chemical energy $\\rightarrow$ **Produces electricity** | Electrical energy $\\rightarrow$ **Consumes electricity** |
> | **Anode (Oxidation site)** | **Negative terminal (-)** | **Positive terminal (+)** |
> | **Cathode (Reduction site)**| **Positive terminal (+)** | **Negative terminal (-)** |
> | **Electron Flow** | Anode to Cathode through load | Anode to Cathode through power supply |

> [!EXAMPLE]
> #### 📝 Worked Example 6: Identifying Electrode Roles in Fuel Cells vs Electrolysis
> **Question:** Compare the role of the anode in a hydrogen fuel cell versus an electrolytic cell.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. In BOTH cells, **oxidation** always takes place at the anode.
> > 2. In an electrolytic cell, the anode is connected to the **positive** terminal of the battery and takes in energy.
> > 3. In a hydrogen fuel cell, the anode is the **negative** terminal that releases electrons to produce electricity.
`,
    keyPoints: [
      "Fuel cells produce only water as exhaust, creating zero greenhouse gas emissions.",
      "Hydrogen produces 2.5 times more energy per gram than methane.",
      "In a fuel cell, the anode is negative and energy is produced; in an electrolytic cell, the anode is positive and energy is consumed."
    ]
  }
];
