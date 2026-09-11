import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Electrolysis of Aqueous Solutions & Selective Discharge";
export const lessonNumber = 2;

export const theoryMarkdown = `
## Electrolysis of Aqueous Solutions & Selective Discharge
This lesson covers the competing ions in aqueous solutions from water ionisation, the selective discharge series at the cathode and anode, observations with universal indicator, and key case studies (concentrated NaCl/brine, dilute sulfuric acid, and copper(II) sulfate).
`;

const aqueousElectrolysisSvg = `
<svg viewBox="0 0 680 320" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="aqBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
    <marker id="aqArrowCyan" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#38bdf8" />
    </marker>
    <marker id="aqArrowRose" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#f43f5e" />
    </marker>
  </defs>

  <rect width="680" height="320" fill="url(#aqBg)" stroke="#1e293b" stroke-width="2" rx="16" />

  <text x="340" y="24" fill="#f8fafc" font-size="14" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Electrochemical Rules: Selective Discharge in Aqueous Solutions</text>

  <!-- Cathode Rules Column -->
  <g transform="translate(30, 45)">
    <rect width="300" height="255" rx="12" fill="#0f172a" stroke="#38bdf8" stroke-opacity="0.3" stroke-width="1.5" />
    <rect x="0" y="0" width="300" height="32" rx="12" fill="#0284c7" fill-opacity="0.2" />
    <text x="150" y="22" fill="#38bdf8" font-size="13" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Cathode (-) Rules [Reduction]</text>

    <!-- Ease of discharge arrow -->
    <line x1="35" y1="48" x2="35" y2="235" stroke="#38bdf8" stroke-width="2" marker-end="url(#aqArrowCyan)" />
    <text x="35" y="42" fill="#94a3b8" font-size="9" text-anchor="middle">High Reactivity</text>
    <text x="35" y="248" fill="#38bdf8" font-size="9" font-weight="bold" text-anchor="middle">Easier to discharge</text>

    <g transform="translate(55, 48)">
      <text x="0" y="15" fill="#94a3b8" font-size="11">K⁺, Na⁺, Ca²⁺, Mg²⁺, Al³⁺</text>
      <rect x="0" y="24" width="230" height="42" rx="6" fill="#ef4444" fill-opacity="0.15" stroke="#ef4444" stroke-opacity="0.3" />
      <text x="8" y="40" fill="#fca5a5" font-size="10" font-weight="bold">More reactive than H⁺:</text>
      <text x="8" y="56" fill="#fca5a5" font-size="10">H⁺ discharged → H₂ gas (bubbles)</text>

      <text x="0" y="90" fill="#38bdf8" font-size="12" font-weight="bold">H⁺ (from water ionisation)</text>

      <text x="0" y="125" fill="#34d399" font-size="11">Cu²⁺, Ag⁺, Au³⁺</text>
      <rect x="0" y="134" width="230" height="42" rx="6" fill="#10b981" fill-opacity="0.15" stroke="#10b981" stroke-opacity="0.3" />
      <text x="8" y="150" fill="#6ee7b7" font-size="10" font-weight="bold">Less reactive than H⁺:</text>
      <text x="8" y="166" fill="#6ee7b7" font-size="10">Metal discharged → solid coating</text>
    </g>
  </g>

  <!-- Anode Rules Column -->
  <g transform="translate(350, 45)">
    <rect width="300" height="255" rx="12" fill="#0f172a" stroke="#f43f5e" stroke-opacity="0.3" stroke-width="1.5" />
    <rect x="0" y="0" width="300" height="32" rx="12" fill="#e11d48" fill-opacity="0.2" />
    <text x="150" y="22" fill="#f43f5e" font-size="13" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Anode (+) Rules [Oxidation]</text>

    <!-- Ease of discharge arrow -->
    <line x1="35" y1="48" x2="35" y2="235" stroke="#f43f5e" stroke-width="2" marker-end="url(#aqArrowRose)" />
    <text x="35" y="42" fill="#94a3b8" font-size="9" text-anchor="middle">Difficult</text>
    <text x="35" y="248" fill="#f43f5e" font-size="9" font-weight="bold" text-anchor="middle">Discharged first</text>

    <g transform="translate(55, 48)">
      <text x="0" y="15" fill="#94a3b8" font-size="11">SO₄²⁻, NO₃⁻ (Polyatomic ions)</text>
      <rect x="0" y="24" width="230" height="42" rx="6" fill="#ef4444" fill-opacity="0.15" stroke="#ef4444" stroke-opacity="0.3" />
      <text x="8" y="40" fill="#fca5a5" font-size="10" font-weight="bold">Never discharged in aq solution:</text>
      <text x="8" y="56" fill="#fca5a5" font-size="10">OH⁻ oxidised instead → O₂ + H₂O</text>

      <text x="0" y="90" fill="#fbbf24" font-size="11">OH⁻ (from water ionisation)</text>

      <text x="0" y="125" fill="#f43f5e" font-size="11">Cl⁻, Br⁻, I⁻ (Halide anions)</text>
      <rect x="0" y="134" width="230" height="52" rx="6" fill="#f43f5e" fill-opacity="0.15" stroke="#f43f5e" stroke-opacity="0.3" />
      <text x="8" y="150" fill="#fca5a5" font-size="10" font-weight="bold">If concentrated solution:</text>
      <text x="8" y="166" fill="#fca5a5" font-size="10">Halogen formed (Cl₂, Br₂, I₂)</text>
      <text x="8" y="180" fill="#94a3b8" font-size="9">If very dilute: OH⁻ still forms O₂</text>
    </g>
  </g>
</svg>
`;

export const lessonParts: LessonPart[] = [
  {
    id: "selective-discharge-rules",
    title: "Competing Ions & Selective Discharge Rules",
    type: "text",
    content: `
### 💧 Competing Ions in Aqueous Solutions

When an ionic compound dissolves in water, water molecules partially ionise:
$$\\text{H}_2\\text{O(l)} \\rightleftharpoons \\text{H}^+\\text{(aq)} + \\text{OH}^-\\text{(aq)}$$

This creates a competition at both electrodes between the electrolyte ions and the water ions.

> ${svgToken(aqueousElectrolysisSvg)}

> [!IMPORTANT]
> ### ⚖️ Cambridge Selective Discharge Series
> 
> 1. **At the Negative Cathode (-):**
>    * The cation with the **lowest reactivity** (greatest ease of discharge) is reduced first.
>    * **Rule 1 (Reactive Metals):** If the metal is higher than hydrogen in the reactivity series ($\\text{K}^+$, $\\text{Na}^+$, $\\text{Ca}^{2+}$, $\\text{Mg}^{2+}$, $\\text{Al}^{3+}$):
>      * $\\text{H}^+$ is discharged instead:
>        $$2\\text{H}^+\\text{(aq)} + 2e^- \\rightarrow \\text{H}_2\\text{(g)}$$
>      * **Observation:** Bubbles / fizzing of colourless hydrogen gas.
>    * **Rule 2 (Unreactive Metals):** If the metal is lower than hydrogen ($\\text{Cu}^{2+}$, $\\text{Ag}^+$):
>      * The metal cation is discharged and coats the cathode:
>        $$\\text{Cu}^{2+}\\text{(aq)} + 2e^- \\rightarrow \\text{Cu}\\text{(s)}$$
>      * **Observation:** Reddish-brown solid deposited on the cathode.
> 
> 2. **At the Positive Anode (+):**
>    * **Rule 1 (Concentrated Halides):** If a concentrated halide is present ($\\text{Cl}^-$, $\\text{Br}^-$, $\\text{I}^-$):
>      * Halide ions are oxidised to the halogen:
>        $$2\\text{Cl}^-\\text{(aq)} \\rightarrow \\text{Cl}_2\\text{(g)} + 2e^-$$
>    * **Rule 2 (Dilute Halides, Sulfates, or Nitrates):**
>      * Polyatomic anions ($\\text{SO}_4^{2-}$, $\\text{NO}_3^-$) are never discharged in aqueous solution.
>      * Hydroxide ions from water are oxidised instead, producing colourless **oxygen gas**:
>        $$4\\text{OH}^-\\text{(aq)} \\rightarrow \\text{O}_2\\text{(g)} + 2\\text{H}_2\\text{O(l)} + 4e^-$$
`,
    keyPoints: [
      "Aqueous solutions contain H⁺ and OH⁻ from the auto-ionisation of water.",
      "At the cathode, H⁺ is discharged if the metal is more reactive than hydrogen; otherwise the metal is deposited.",
      "At the anode, concentrated halides produce halogens; sulfates/nitrates or dilute solutions discharge OH⁻ to yield O₂."
    ]
  },
  {
    id: "brine-and-indicator",
    title: "Concentrated Sodium Chloride (Brine) & Indicators",
    type: "text",
    content: `
### 🧪 Electrolysis of Concentrated Aqueous Sodium Chloride (Brine)

Concentrated aqueous $\\text{NaCl}$ solution contains four ions: $\\text{Na}^+$, $\\text{Cl}^-$, $\\text{H}^+$, $\\text{OH}^-$.

> [!NOTE]
> ### 📋 Electrode Reactions in Brine
> 
> 1. **At the Negative Cathode (-):**
>    * Both $\\text{Na}^+$ and $\\text{H}^+$ migrate to the cathode.
>    * Because $\\text{Na}$ is much more reactive than $\\text{H}$, $\\text{H}^+$ ions are preferentially discharged:
>      $$2\\text{H}^+\\text{(aq)} + 2e^- \\rightarrow \\text{H}_2\\text{(g)}$$
>    * Colourless bubbles of **hydrogen gas** fizz off.
> 
> 2. **At the Positive Anode (+):**
>    * Both $\\text{Cl}^-$ and $\\text{OH}^-$ migrate to the anode.
>    * Because chloride is concentrated, $\\text{Cl}^-$ is discharged in preference to $\\text{OH}^-$:
>      $$2\\text{Cl}^-\\text{(aq)} \\rightarrow \\text{Cl}_2\\text{(g)} + 2e^-$$
>    * Pale greenish-yellow fumes of **chlorine gas** are evolved.
> 
> 3. **The Remaining Solution:**
>    * $\\text{H}^+$ and $\\text{Cl}^-$ ions are continuously removed from the solution.
>    * $\\text{Na}^+$ and $\\text{OH}^-$ ions remain in solution, forming **aqueous sodium hydroxide** ($\\text{NaOH(aq)}$), a strong alkali.
>    * **Overall Ionic Equation:**
>      $$2\\text{H}^+\\text{(aq)} + 2\\text{Cl}^-\\text{(aq)} \\rightarrow \\text{H}_2\\text{(g)} + \\text{Cl}_2\\text{(g)}$$

> [!IMPORTANT]
> ### 🌈 Universal Indicator / Litmus Observations in a U-Tube
> When universal indicator or litmus is added to the brine in a U-tube:
> * **At the Cathode (-):** The indicator turns **blue / purple** (alkaline) because the removal of $\\text{H}^+$ leaves an excess of $\\text{OH}^-$ ions ($\\text{NaOH}$ formed).
> * **At the Anode (+):** The indicator first turns briefly red (due to acidic dissolved $\\text{Cl}_2$), and then quickly **bleaches to colourless** because chlorine gas is a powerful **bleaching agent**!

> [!EXAMPLE]
> #### 📝 Worked Example 3: Brine in a U-Tube
> **Question:** What is the color of litmus at each electrode after 5 minutes of electrolysing concentrated aqueous sodium chloride?
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **At Anode (+):** Chlorine gas ($\\text{Cl}_2$) is released. Chlorine bleaches dyes and indicators, making the solution **colourless**.
> > 2. **At Cathode (-):** Hydrogen gas ($\\text{H}_2$) is released, leaving $\\text{OH}^-$ ions behind. The alkaline $\\text{NaOH}$ turns litmus **blue**.
> > 3. **Result:** Anode = colourless (bleached), Cathode = blue.
`,
    keyPoints: [
      "Electrolysis of brine yields hydrogen at cathode, chlorine at anode, and leaves sodium hydroxide solution.",
      "Chlorine gas bleaches indicators colourless at the anode.",
      "Residual OH⁻ ions make the solution around the cathode strongly alkaline (indicator turns blue)."
    ]
  },
  {
    id: "copper-sulfate-and-dilute-acid",
    title: "Copper(II) Sulfate & Dilute Sulfuric Acid",
    type: "text",
    content: `
### 🧪 Electrolysis of Copper(II) Sulfate (CuSO₄)

Aqueous copper(II) sulfate contains $\\text{Cu}^{2+}$, $\\text{SO}_4^{2-}$, $\\text{H}^+$, $\\text{OH}^-$.

> [!NOTE]
> ### 📋 Using Inert Electrodes (Carbon / Platinum)
> 1. **At Cathode (-):**
>    * Copper is less reactive than hydrogen, so $\\text{Cu}^{2+}$ is discharged:
>      $$\\text{Cu}^{2+}\\text{(aq)} + 2e^- \\rightarrow \\text{Cu}\\text{(s)}$$
>    * **Observation:** Reddish-brown copper metal coats the cathode.
> 
> 2. **At Anode (+):**
>    * Sulfate ($\text{SO}_4^{2-}$) cannot be discharged. Hydroxide is oxidised:
>      $$4\\text{OH}^-\\text{(aq)} \\rightarrow \\text{O}_2\\text{(g)} + 2\\text{H}_2\\text{O(l)} + 4e^-$$
>    * **Observation:** Colourless bubbles of **oxygen gas** form.
> 
> 3. **Overall Change in Solution:**
>    * $\\text{Cu}^{2+}$ ions are removed, causing the **blue colour of the solution to fade** until colourless.
>    * $\\text{H}^+$ and $\\text{SO}_4^{2-}$ remain, forming **dilute sulfuric acid** ($\\text{H}_2\\text{SO}_4$).

> [!IMPORTANT]
> ### 💧 Electrolysis of Dilute Sulfuric Acid (H₂SO₄) / Acidified Water
> When dilute $\\text{H}_2\\text{SO}_4$ is electrolysed using platinum or graphite:
> * **At Cathode (-):** $2\\text{H}^+\\text{(aq)} + 2e^- \\rightarrow \\text{H}_2\\text{(g)}$ (Colourless bubbles of hydrogen)
> * **At Anode (+):** $4\\text{OH}^-\\text{(aq)} \\rightarrow \\text{O}_2\\text{(g)} + 2\\text{H}_2\\text{O(l)} + 4e^-$ (Colourless bubbles of oxygen)
> * **Gas Volume Ratio:** Notice that 4 electrons produce $2\\text{H}_2$ molecules but only $1\\text{O}_2$ molecule.
>   $$\\text{Volume of } \\text{H}_2 : \\text{Volume of } \\text{O}_2 = 2 : 1$$
> * The amount of $\\text{H}_2$ gas collected is **twice the volume** of $\\text{O}_2$ gas collected.
> * The overall reaction is simply the decomposition of water: $2\\text{H}_2\\text{O(l)} \\rightarrow 2\\text{H}_2\\text{(g)} + \\text{O}_2\\text{(g)}$.

> [!EXAMPLE]
> #### 📝 Worked Example 4: Identifying Substance X by Gas Volumes
> **Question:** When an aqueous substance X is electrolysed, two gases P and Q are collected over the electrodes. The volume of gas P is exactly twice the volume of gas Q. What is substance X?
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. A 2:1 volume ratio between two gases indicates water decomposition into $\\text{H}_2$ (2 vols) and $\\text{O}_2$ (1 vol).
> > 2. Dilute sulfuric acid ($\\text{H}_2\\text{SO}_4$) discharges $\\text{H}^+$ at cathode and $\\text{OH}^-$ at anode, producing $\\text{H}_2$ and $\\text{O}_2$ in a 2:1 ratio.
> > 3. Therefore, substance X is **dilute sulfuric acid**.
`,
    keyPoints: [
      "Electrolysis of aqueous CuSO₄ with inert electrodes deposits copper at the cathode, evolves O₂ at the anode, and fades the blue color.",
      "Electrolysis of dilute sulfuric acid produces H₂ and O₂ in a 2:1 ratio.",
      "Dilute sulfuric acid acts essentially as the electrolysis of acidified water."
    ]
  }
];
