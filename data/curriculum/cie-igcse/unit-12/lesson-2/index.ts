import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Purification & Separation Techniques";
export const lessonNumber = 2;

export const theoryMarkdown = `
## Purification and Separation Techniques
This lesson covers fundamental methods for separating mixtures based on physical properties: filtration, crystallisation, simple distillation, fractional distillation, and paper chromatography (including Rf calculations and locating agents), as well as purity criteria.
`;

const separationTechniquesSvg = `
<svg viewBox="0 0 680 340" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="sepBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
  </defs>

  <rect width="680" height="340" fill="url(#sepBg)" stroke="#1e293b" stroke-width="2" rx="16" />

  <text x="340" y="24" fill="#f8fafc" font-size="14" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Separation &amp; Purification Techniques Overview</text>

  <!-- Method 1: Filtration -->
  <g transform="translate(20, 45)">
    <rect width="145" height="270" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5" />
    <rect x="0" y="0" width="145" height="32" rx="10" fill="#0284c7" fill-opacity="0.25" />
    <text x="72" y="21" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">1. Filtration</text>
    
    <text x="10" y="55" fill="#e2e8f0" font-size="11" font-weight="bold">Separates:</text>
    <text x="10" y="72" fill="#94a3b8" font-size="10">Insoluble solid from</text>
    <text x="10" y="86" fill="#94a3b8" font-size="10">a liquid / solution</text>

    <text x="10" y="115" fill="#e2e8f0" font-size="11" font-weight="bold">Key Terms:</text>
    <text x="10" y="132" fill="#38bdf8" font-size="10">Residue:</text>
    <text x="10" y="146" fill="#94a3b8" font-size="9.5">Trapped solid on filter</text>
    <text x="10" y="165" fill="#38bdf8" font-size="10">Filtrate:</text>
    <text x="10" y="179" fill="#94a3b8" font-size="9.5">Clear liquid passing through</text>

    <text x="10" y="208" fill="#e2e8f0" font-size="11" font-weight="bold">Example:</text>
    <text x="10" y="225" fill="#34d399" font-size="10">Chalk in water</text>
    <text x="10" y="240" fill="#34d399" font-size="10">Sand from salt solution</text>
  </g>

  <!-- Method 2: Crystallisation -->
  <g transform="translate(180, 45)">
    <rect width="145" height="270" rx="10" fill="#0f172a" stroke="#a855f7" stroke-width="1.5" />
    <rect x="0" y="0" width="145" height="32" rx="10" fill="#7e22ce" fill-opacity="0.25" />
    <text x="72" y="21" fill="#c084fc" font-size="12" font-weight="bold" text-anchor="middle">2. Crystallisation</text>
    
    <text x="10" y="55" fill="#e2e8f0" font-size="11" font-weight="bold">Separates:</text>
    <text x="10" y="72" fill="#94a3b8" font-size="10">Dissolved solute</text>
    <text x="10" y="86" fill="#94a3b8" font-size="10">from its solution</text>

    <text x="10" y="115" fill="#e2e8f0" font-size="11" font-weight="bold">Key Procedure:</text>
    <text x="10" y="132" fill="#94a3b8" font-size="9.5">1. Heat to saturate</text>
    <text x="10" y="148" fill="#94a3b8" font-size="9.5">2. Check on glass rod</text>
    <text x="10" y="164" fill="#94a3b8" font-size="9.5">3. Cool slowly</text>
    <text x="10" y="180" fill="#94a3b8" font-size="9.5">4. Filter &amp; dry crystals</text>

    <text x="10" y="208" fill="#e2e8f0" font-size="11" font-weight="bold">Example:</text>
    <text x="10" y="225" fill="#c084fc" font-size="10">Copper(II) sulfate</text>
    <text x="10" y="240" fill="#c084fc" font-size="10">crystals from solution</text>
  </g>

  <!-- Method 3: Distillation -->
  <g transform="translate(340, 45)">
    <rect width="160" height="270" rx="10" fill="#0f172a" stroke="#34d399" stroke-width="1.5" />
    <rect x="0" y="0" width="160" height="32" rx="10" fill="#059669" fill-opacity="0.25" />
    <text x="80" y="21" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">3. Distillation</text>
    
    <text x="10" y="55" fill="#e2e8f0" font-size="11" font-weight="bold">Simple Distillation:</text>
    <text x="10" y="70" fill="#94a3b8" font-size="9.5">Pure solvent from solution</text>
    <text x="10" y="85" fill="#34d399" font-size="9.5">(e.g. pure water from salt water)</text>

    <text x="10" y="115" fill="#e2e8f0" font-size="11" font-weight="bold">Fractional Distillation:</text>
    <text x="10" y="130" fill="#94a3b8" font-size="9.5">Miscible liquids with</text>
    <text x="10" y="144" fill="#94a3b8" font-size="9.5">different boiling points</text>
    <text x="10" y="160" fill="#fbbf24" font-size="9.5">Fractionating column:</text>
    <text x="10" y="174" fill="#94a3b8" font-size="9">Glass beads provide high</text>
    <text x="10" y="187" fill="#94a3b8" font-size="9">surface area for condensation</text>

    <text x="10" y="214" fill="#e2e8f0" font-size="11" font-weight="bold">Example:</text>
    <text x="10" y="230" fill="#34d399" font-size="9.5">Ethanol (78°C) + Water (100°C)</text>
    <text x="10" y="245" fill="#34d399" font-size="9.5">Crude oil refining / Liquid air</text>
  </g>

  <!-- Method 4: Chromatography -->
  <g transform="translate(515, 45)">
    <rect width="145" height="270" rx="10" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5" />
    <rect x="0" y="0" width="145" height="32" rx="10" fill="#d97706" fill-opacity="0.25" />
    <text x="72" y="21" fill="#fbbf24" font-size="12" font-weight="bold" text-anchor="middle">4. Chromatography</text>
    
    <text x="10" y="55" fill="#e2e8f0" font-size="11" font-weight="bold">Separates:</text>
    <text x="10" y="72" fill="#94a3b8" font-size="10">Mixture of dissolved</text>
    <text x="10" y="86" fill="#94a3b8" font-size="10">solutes (dyes/pigments)</text>

    <text x="10" y="115" fill="#e2e8f0" font-size="11" font-weight="bold">Principles:</text>
    <text x="10" y="132" fill="#fbbf24" font-size="9.5">Solubility in solvent</text>
    <text x="10" y="146" fill="#94a3b8" font-size="9">(higher = travels further)</text>
    <text x="10" y="162" fill="#fbbf24" font-size="9.5">Attraction to paper</text>
    <text x="10" y="176" fill="#94a3b8" font-size="9">(stronger = travels slower)</text>

    <text x="10" y="208" fill="#e2e8f0" font-size="11" font-weight="bold">Rf Calculation:</text>
    <text x="10" y="225" fill="#f8fafc" font-size="9.5">Rf = d_substance / d_solvent</text>
    <text x="10" y="242" fill="#ef4444" font-size="9.5">Pencil baseline only!</text>
  </g>
</svg>
`;

export const lessonParts: LessonPart[] = [
  {
    id: "cie-igcse-unit-12-lesson-2-part-1",
    title: "Mixtures, Solutions & Criteria of Purity",
    type: "text",
    content: `
### 🧪 Types of Mixtures & Physical Purity

Matter can be classified into **pure substances** (elements or compounds) and **mixtures** (substances physically combined without chemical bonding).

> [!NOTE]
> ### 🔍 Solutions, Colloids & Suspensions
> 1. **Homogeneous Mixture (Solution):**
>    * Solute particles are completely dissolved at a molecular or ionic scale.
>    * Completely uniform properties throughout; particles do not settle upon standing.
>    * *Examples:* Salt water, air, alloys (e.g., brass).
> 2. **Heterogeneous Mixtures:**
>    * **Colloid:** Medium-sized particles suspended throughout a medium; particles do not settle out easily (e.g., milk, fog, mayonnaise).
>    * **Suspension:** Large solid particles dispersed in a liquid that settle to the bottom over time upon standing (e.g., muddy water, chalk in water).

> [!BOX]
> ### 💧 Key Solution Definitions
> * **Solute:** The substance that dissolves in a solvent (e.g. solid copper(II) sulfate or sodium chloride).
> * **Solvent:** The liquid substance that dissolves the solute (e.g. water, ethanol).
> * **Aqueous Solution:** Any solution where the solvent is water.
> * **Saturated Solution:** A solution containing the maximum possible concentration of dissolved solute at a specified temperature (no more solute can dissolve at that temperature).

> [!IMPORTANT]
> ### ⚖️ Criteria of Purity: Sharp vs Range Melting & Boiling Points
> How do chemists verify if a substance is pure?
> * **Pure Substance:** Has a **sharp, definite** melting point and boiling point at fixed temperatures (e.g., pure water melts sharply at $0^\\circ\\text{C}$ and boils at $100^\\circ\\text{C}$ at $1\\text{ atm}$).
> * **Impure Substance (Mixture):**
>   1. Melts and boils **over a range of temperatures** rather than at a single sharp point.
>   2. **Lowers the melting point** (depresses MP) — impure solids melt at lower temperatures.
>   3. **Raises the boiling point** (elevates BP) — impure liquids boil at higher temperatures.
> * *Exam Clue:* If a colourless liquid boils at $102^\\circ\\text{C}$ and turns Universal Indicator green (pH 7), it cannot be pure water—it is an aqueous salt solution (e.g., sodium chloride solution)!

${svgToken(separationTechniquesSvg)}
`,
    keyPoints: [
      "A pure substance has a sharp, definite melting and boiling point.",
      "Impurities depress (lower) the melting point and elevate (raise) the boiling point, causing phase changes over a temperature range.",
      "A saturated solution contains the maximum mass of solute that can dissolve at a given temperature."
    ]
  },
  {
    id: "cie-igcse-unit-12-lesson-2-part-2",
    title: "Solid-Liquid Separations: Filtration & Crystallisation",
    type: "text",
    content: `
### 🏺 Separating Solids from Liquids & Solid-Solid Mixtures

The chosen separation method relies strictly on the differences in **solubility** and **particle size**.

> [!TIP]
> ### ☕ 1. Filtration (Insoluble Solid from Liquid)
> * **Apparatus:** Filter funnel, filter paper, conical flask or beaker.
> * **Residue:** The insoluble solid retained on the filter paper because its particles are larger than the filter pores (e.g. sand, chalk).
> * **Filtrate:** The clear liquid or solution that passes through the filter paper pores.
> * **Washing & Drying Residue:** Always rinse the residue with a small volume of cold distilled water to wash off remaining soluble solution, then dry between sheets of filter paper or in a low-temperature oven.

> [!NOTE]
> ### 🧂 2. Crystallisation (Soluble Solute from Solution)
> Used to obtain pure, dry crystals of a dissolved solid (e.g. copper(II) sulfate or sodium chloride) without thermal decomposition:
> 1. **Gentle Heating:** Heat the solution in an evaporating dish to evaporate water until the **crystallisation point** is reached (saturated solution).
> 2. **Testing for Saturation:** Dip a clean glass rod into the hot solution; if tiny crystals form quickly on the cool tip upon removal, the solution is saturated.
> 3. **Cooling:** Remove the heat source and allow the hot saturated solution to cool slowly at room temperature. Solubility decreases as temperature drops, allowing well-formed crystals to grow.
> 4. **Filtration & Drying:** Filter out the crystals from the remaining mother liquor. Rinse with a few drops of **ice-cold distilled water** (to wash off impurities without dissolving the crystals), then gently press dry between filter papers.

> [!EXAMPLE]
> #### 📝 Worked Example: Separating a Mixture of Two Solids
> **Question:** A solid mixture contains salt (sodium chloride) and sand (silicon dioxide). Describe the step-by-step procedure to obtain pure, dry samples of both sand and salt.
> 
> > > [!TIP]
> > > **🔑 Step-by-step Solution:**
> > > 
> > > 1. **Dissolving (Selective Solvent):** Add distilled water to the mixture and stir thoroughly. The salt dissolves completely forming an aqueous solution, while the sand remains completely insoluble.
> > > 2. **Filtration:** Pour the mixture through a filter paper and funnel. The insoluble sand stays behind as the **residue**, while the aqueous salt solution passes through as the **filtrate**.
> > > 3. **Purifying the Sand:** Rinse the sand residue with distilled water to remove residual salt solution, then dry it in a warm oven or between filter papers.
> > > 4. **Obtaining the Salt:** Heat the filtrate in an evaporating dish until crystals form, or evaporate the water to dryness to obtain pure dry sodium chloride.
`,
    keyPoints: [
      "Filtration separates an insoluble solid (residue) from a liquid or solution (filtrate).",
      "Crystallisation involves evaporating water to saturation, cooling slowly to form crystals, filtering, and drying with filter paper.",
      "To separate two solids, use a selective solvent that dissolves only one component, filter, wash, and crystallise."
    ]
  },
  {
    id: "cie-igcse-unit-12-lesson-2-part-3",
    title: "Distillation: Simple vs Fractional Distillation",
    type: "text",
    content: `
### 🧪 Distillation: Separating Volatile Liquids

Distillation exploits differences in **boiling points** through sequential evaporation and condensation.

> [!BOX]
> ### 🌊 1. Simple Distillation (Solvent from Solution)
> * **Purpose:** To recover the pure liquid solvent from a mixture containing dissolved solid solutes (e.g., obtaining pure water from seawater).
> * **Process:**
>   1. The solution in the round-bottom flask is heated until the liquid boils into vapour.
>   2. Vapour rises into the delivery tube, past the thermometer bulb, and enters the Liebig condenser.
>   3. Cold water circulating in the condenser jacket cools the vapour back into pure liquid (**distillate**), which is collected in a receiving flask.
>   4. The dissolved solute (with a much higher boiling point) remains in the boiling flask.
> * **Anti-bumping Granules:** Small pieces of porous ceramic added to ensure smooth, even boiling and prevent violent bubbling.

> [!IMPORTANT]
> ### 🌡️ 2. Fractional Distillation (Miscible Liquids)
> When two or more liquids are **miscible** (mix completely, such as ethanol and water or petroleum fractions), simple distillation cannot separate them cleanly because both liquids evaporate simultaneously.
> * **Fractionating Column:** A tall glass vertical column packed with **glass beads** placed between the boiling flask and the condenser.
> * **How the Fractionating Column Works:**
>   1. The glass beads provide an enormous **surface area** with a continuous temperature gradient (hotter at the bottom, cooler near the top).
>   2. Vapours of both liquids rise into the column.
>   3. The liquid with the **higher boiling point** (water, $100^\\circ\\text{C}$) condenses more readily on the cool glass beads and drips back into the boiling flask.
>   4. The liquid with the **lower boiling point** (ethanol, $78^\\circ\\text{C}$) stays in the vapour state longer, reaches the top of the column, passes into the condenser, and condenses into the receiver flask.
>   5. When the thermometer reading stays at $78^\\circ\\text{C}$, pure ethanol is collected. When the temperature rises towards $100^\\circ\\text{C}$, the receiver is changed to collect the next fraction.

> [!NOTE]
> ### 🏭 Industrial Applications of Fractional Distillation
> 1. **Petroleum Refining:** Separating crude oil into useful hydrocarbon fractions (refinery gas, gasoline, naphtha, kerosene, diesel, bitumen).
> 2. **Fractional Distillation of Liquid Air:** Air is cooled to $-200^\\circ\\text{C}$ to liquefy it, then slowly warmed. Nitrogen ($BP = -196^\\circ\\text{C}$) boils off first, followed by argon ($-186^\\circ\\text{C}$) and oxygen ($-183^\\circ\\text{C}$).
`,
    keyPoints: [
      "Simple distillation separates a pure liquid solvent from a solution of non-volatile solutes.",
      "Fractional distillation separates miscible liquids based on differences in boiling point.",
      "The fractionating column contains glass beads that provide a large surface area for repeated evaporation and condensation."
    ]
  },
  {
    id: "cie-igcse-unit-12-lesson-2-part-4",
    title: "Paper Chromatography & Rf Values",
    type: "text",
    content: `
### 🎨 Paper Chromatography

Paper chromatography separates mixtures of dissolved soluble substances (such as inks, food colourings, plant dyes, or amino acids) based on their relative affinities for two phases.

> [!NOTE]
> ### 🔬 The Two Phases in Paper Chromatography
> 1. **Stationary Phase:** The absorbent chromatography paper (liquid trapped in paper fibres).
> 2. **Mobile Phase:** The liquid solvent that moves up the paper by capillary action (e.g. water, ethanol, or organic solvent mixtures).

> [!WARNING]
> ### ⚠️ Critical Experimental Rules for Chromatography
> * **1. Baseline in PENCIL:**
>   * The starting line (baseline) must be drawn with a **pencil**, NEVER with ink or pen.
>   * *Reason:* Pencil graphite is completely insoluble in the solvent and will not travel up the paper. Pen ink contains dyes that would dissolve and produce confusing spots!
> * **2. Solvent Level Below Baseline:**
>   * The solvent level in the beaker must be **below the pencil baseline**.
>   * *Reason:* If the solvent is above the line, the sample spots will dissolve directly into the solvent pool instead of travelling up the paper.
> * **3. Cover with a Lid:**
>   * Place a watch glass or lid over the beaker to prevent evaporation of volatile solvents and ensure the air inside remains saturated with solvent vapour.
> * **4. Solvent Front:**
>   * Remove the paper before the solvent reaches the top edge, and immediately mark the furthest distance reached by the solvent with a pencil (**solvent front**).

> [!IMPORTANT]
> ### 🧮 Calculating the Retention Factor ($R_f$ Value)
> The $R_f$ value is characteristic for a given substance in a specific solvent at a fixed temperature:
> 
> $$R_f = \\frac{\\text{distance travelled by substance}}{\\text{distance travelled by solvent front}}$$
> 
> * Both distances are measured strictly **from the pencil baseline to the center of the spot**.
> * An $R_f$ value is a ratio, so it has **no units** and is **always $\\le 1.0$**.
> * A substance that is **more soluble** in the solvent travels further (higher $R_f$).
> * A substance with **greater attraction (adsorption)** to the paper travels slower (lower $R_f$).

> [!TIP]
> ### 🧬 Locating Agents for Colourless Substances
> * Some mixtures (such as **amino acids** from protein hydrolysis or colourless sugars) produce spots that are invisible to the naked eye.
> * **Locating Agent:** A chemical sprayed onto the dried chromatogram (e.g. **ninhydrin** for amino acids) that reacts with the colourless spots to produce visible coloured spots (purple/brown).
> * Alternatively, chromatograms can be viewed under **ultraviolet (UV) light**.
`,
    keyPoints: [
      "The baseline must be drawn in pencil and placed above the initial solvent level.",
      "Rf = (distance travelled by substance) / (distance travelled by solvent front). Rf is always between 0 and 1.",
      "A locating agent (e.g. ninhydrin) is sprayed onto chromatograms to make colourless spots visible."
    ]
  }
];
