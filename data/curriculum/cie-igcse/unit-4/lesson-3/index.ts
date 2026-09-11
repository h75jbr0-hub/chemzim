import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Electroplating & Refining of Metals";
export const lessonNumber = 3;

export const theoryMarkdown = `
## Electroplating & Refining of Metals
This lesson covers the principles of electroplating, using active electrodes to coat metals for corrosion resistance and aesthetic appeal, the purification of impure copper, and the critical rules for designing an electroplating circuit.
`;

const electroplatingSvg = `
<svg viewBox="0 0 680 320" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="epBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
    <marker id="epArrowCyan" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#38bdf8" />
    </marker>
  </defs>

  <rect width="680" height="320" fill="url(#epBg)" stroke="#1e293b" stroke-width="2" rx="16" />

  <text x="340" y="26" fill="#f8fafc" font-size="15" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Electroplating a Steel Spoon with Silver (Ag)</text>

  <!-- Battery & Circuit at top -->
  <g transform="translate(250, 42)">
    <!-- Battery symbol -->
    <line x1="80" y1="15" x2="80" y2="35" stroke="#f43f5e" stroke-width="3" />
    <text x="80" y="10" fill="#f43f5e" font-size="12" font-weight="bold" text-anchor="middle">+</text>
    <line x1="95" y1="20" x2="95" y2="30" stroke="#94a3b8" stroke-width="2" />
    <line x1="105" y1="15" x2="105" y2="35" stroke="#f43f5e" stroke-width="3" />
    <line x1="120" y1="18" x2="120" y2="32" stroke="#38bdf8" stroke-width="4" />
    <text x="120" y="10" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">-</text>

    <!-- Wires -->
    <path d="M 80 25 L -50 25 L -50 80" fill="none" stroke="#f43f5e" stroke-width="2" />
    <path d="M 120 25 L 230 25 L 230 80" fill="none" stroke="#38bdf8" stroke-width="2" />

    <!-- Electron flow -->
    <path d="M -10 16 L 40 16" fill="none" stroke="#38bdf8" stroke-width="2" marker-end="url(#epArrowCyan)" />
    <text x="15" y="10" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">e⁻ flow (from anode to cathode)</text>
  </g>

  <!-- Beaker Container -->
  <rect x="150" y="140" width="380" height="155" rx="12" fill="#0f172a" stroke="#475569" stroke-width="2" />
  <!-- AgNO3 Solution -->
  <path d="M 152 175 Q 340 178 528 175 L 528 290 Q 340 293 152 290 Z" fill="#0284c7" fill-opacity="0.15" stroke="#38bdf8" stroke-opacity="0.2" />
  <text x="340" y="280" fill="#38bdf8" font-size="11" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Electrolyte: Soluble Silver Salt (e.g. AgNO₃(aq))</text>

  <!-- Anode: Pure Silver Bar -->
  <g transform="translate(190, 115)">
    <rect width="25" height="135" rx="3" fill="#cbd5e1" stroke="#f43f5e" stroke-width="2" />
    <text x="12" y="-12" fill="#f43f5e" font-size="12" font-weight="bold" text-anchor="middle">Anode (+)</text>
    <text x="12" y="55" fill="#0f172a" font-size="10" font-weight="bold" text-anchor="middle">Ag bar</text>
    <text x="12" y="155" fill="#fca5a5" font-size="10" font-weight="bold" text-anchor="middle">Ag → Ag⁺ + e⁻</text>
    <text x="12" y="170" fill="#94a3b8" font-size="9" text-anchor="middle">(Dissolves / loses mass)</text>
  </g>

  <!-- Silver ions in solution -->
  <g transform="translate(300, 195)">
    <circle cx="0" cy="0" r="14" fill="#cbd5e1" fill-opacity="0.2" stroke="#cbd5e1" stroke-width="1.5" />
    <text x="0" y="4" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">Ag⁺</text>
    <path d="M 20 0 L 70 10" fill="none" stroke="#38bdf8" stroke-width="1.5" marker-end="url(#epArrowCyan)" />
  </g>

  <!-- Cathode: Spoon (Object to plate) -->
  <g transform="translate(460, 115)">
    <!-- Spoon handle & bowl -->
    <path d="M 18 0 L 18 80 C 18 105 38 125 38 140 C 38 152 26 160 18 160 C 10 160 -2 152 -2 140 C -2 125 18 105 18 80 Z" fill="#64748b" stroke="#38bdf8" stroke-width="2" />
    <!-- Thin plated silver coating -->
    <path d="M 22 80 C 22 105 42 125 42 140 C 42 154 28 164 18 164" fill="none" stroke="#f8fafc" stroke-width="3" stroke-dasharray="3,2" />
    <text x="20" y="-12" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">Cathode (-)</text>
    <text x="20" y="55" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Spoon</text>
    <text x="20" y="180" fill="#6ee7b7" font-size="10" font-weight="bold" text-anchor="middle">Ag⁺ + e⁻ → Ag(s)</text>
    <text x="20" y="195" fill="#94a3b8" font-size="9" text-anchor="middle">(Gains mass / coated)</text>
  </g>
</svg>
`;

export const lessonParts: LessonPart[] = [
  {
    id: "principles-of-electroplating",
    title: "Principles & 3 Essential Rules of Electroplating",
    type: "text",
    content: `
### ✨ What is Electroplating?

**Electroplating** is the process of using electricity (electrolysis) to coat the surface of one metal object with a thin, uniform protective layer of another metal.

> [!NOTE]
> ### 🎯 Two Main Purposes of Electroplating
> 1. **To Improve Appearance / Aesthetics (Looks Better):**
>    * Cheap metal jewellery is coated with precious metals like **silver** ($\\text{Ag}$) or **gold** ($\\text{Au}$).
>    * Car bumpers, wheel rims, and taps are coated with shiny **chromium** ($\\text{Cr}$).
> 2. **To Prevent Corrosion & Rusting:**
>    * Steel food cans are electroplated with **tin** ($\\text{Sn}$) to prevent the steel from contacting acidic food.
>    * Steel screws, bolts, and car body panels are galvanised/electroplated with **zinc** ($\\text{Zn}$).

> ${svgToken(electroplatingSvg)}

> [!IMPORTANT]
> ### 📋 The 3 Essential Setup Rules of Electroplating
> In any electroplating experiment, you MUST strictly set up the cell according to these 3 rules:
> 
> 1. **The Object to be Coated:** MUST be connected as the **CATHODE (-)**.
>    * Metal cations in the electrolyte migrate to the negative cathode where they gain electrons and deposit as neutral solid metal on the object's surface.
> 
> 2. **The Coating Metal:** MUST be connected as the **ANODE (+)**.
>    * The anode is made of the pure metal you want to plate with (e.g. pure silver or pure copper).
>    * The anode dissolves continuously: $\\text{Metal(s)} \\rightarrow \\text{Metal}^{n+}\\text{(aq)} + ne^-$, maintaining the concentration of metal ions in the solution.
> 
> 3. **The Electrolyte:** MUST be a **soluble salt solution containing the coating metal**.
>    * For silver plating: use silver nitrate solution, $\\text{AgNO}_3\\text{(aq)}$.
>    * For copper plating: use copper(II) sulfate solution, $\\text{CuSO}_4\\text{(aq)}$.

> [!CAUTION]
> ### 🛑 Common Student Mistake Alert
> * A student attempts to plate a steel pan with copper, but mistakenly connects the pan to the positive (+) terminal of the battery and the copper to the negative (-) terminal.
> * **Result:** The pan will dissolve and corrode! To fix the circuit, **make the pan the cathode (-)** and **make the pure copper the anode (+)**.
`,
    keyPoints: [
      "Electroplating coats a metal object with a thin layer of another metal for protection or appearance.",
      "Rule 1: The object to be electroplated must be the cathode (-).",
      "Rule 2: The anode (+) must be made of the coating metal.",
      "Rule 3: The electrolyte must contain soluble ions of the coating metal."
    ]
  },
  {
    id: "copper-refining",
    title: "Purification (Refining) of Impure Copper",
    type: "text",
    content: `
### 🥉 Refining (Purifying) Copper with Active Electrodes

Copper extracted from its ores is only about $99\\%$ pure and contains impurities (such as iron, zinc, silver, gold, and platinum). For electrical cables, copper must be **$99.99\\%$ pure**, because even trace impurities drastically reduce electrical conductivity.

> [!NOTE]
> ### 📋 Active Copper Electrodes Cell
> * **Electrolyte:** Aqueous copper(II) sulfate ($\\text{CuSO}_4\\text{(aq)}$).
> * **Anode (+):** A large block of **impure copper**.
> * **Cathode (-):** A thin sheet of **pure copper**.
> 
> 1. **At the Impure Anode (+):**
>    * Copper atoms lose electrons and dissolve into solution as blue $\\text{Cu}^{2+}$ ions:
>      $$\\text{Cu(s)} \\rightarrow \\text{Cu}^{2+}\\text{(aq)} + 2e^-$$
>    * The impure anode continuously dissolves and gets smaller (decreases in mass).
>    * Unreactive impurities (such as silver and gold) fall to the bottom below the anode as **anode sludge / slime** (valuable byproduct!).
> 
> 2. **At the Pure Cathode (-):**
>    * $\\text{Cu}^{2+}$ ions from the solution migrate to the cathode, gain electrons, and deposit as pure copper metal:
>      $$\\text{Cu}^{2+}\\text{(aq)} + 2e^- \\rightarrow \\text{Cu(s)}$$
>    * The pure cathode grows thicker (increases in mass).
> 
> 3. **Concentration of Electrolyte:**
>    * Because the rate of copper dissolving at the anode exactly equals the rate of copper depositing at the cathode:
>    * The concentration of $\\text{Cu}^{2+}$ ions remains constant, and the **blue color of the solution does NOT fade**!

> [!EXAMPLE]
> #### 📝 Worked Example 5: Metals Unsuitable for Aqueous Electroplating
> **Question:** Which metal could NOT be used for electroplating an object using an aqueous solution?
> * A: Chromium
> * B: Copper
> * C: Sodium
> * D: Silver
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. In an aqueous solution, there are always $\\text{H}^+$ ions competing at the cathode.
> > 2. If a metal is higher than hydrogen in the reactivity series (such as $\\text{Na}$, $\\text{K}$, $\\text{Ca}$), $\\text{H}^+$ ions are discharged preferentially, yielding hydrogen gas ($\\text{H}_2$) instead of the metal.
> > 3. Furthermore, sodium metal reacts vigorously with water: $2\\text{Na} + 2\\text{H}_2\\text{O} \\rightarrow 2\\text{NaOH} + \\text{H}_2$.
> > 4. Therefore, **sodium (C)** can never be plated from an aqueous electrolyte.
`,
    keyPoints: [
      "Purification of copper uses an impure copper anode and a pure copper cathode in aqueous CuSO₄.",
      "The concentration of CuSO₄ remains unchanged because Cu dissolves from the anode at the same rate it deposits on the cathode.",
      "Reactive metals like sodium or potassium cannot be electroplated from aqueous solutions because H⁺ is reduced instead."
    ]
  }
];
