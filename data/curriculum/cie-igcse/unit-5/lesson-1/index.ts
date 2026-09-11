import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Exothermic and Endothermic Reactions";
export const lessonNumber = 1;

export const theoryMarkdown = `
## Chemical Energetics: Exothermic & Endothermic Reactions
This lesson covers energy transfers, exothermic and endothermic reactions, temperature changes, enthalpy change (ΔH), real-life examples, and Cambridge criteria for classifying reactions.
`;

// Compact SVG Diagram 1: Exothermic vs Endothermic Reaction Profiles & Test Tube Observations (650x260)
const exoEndoReactionsSvg = `
<svg viewBox="0 0 650 260" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgEnergetics" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
    <linearGradient id="exoTubeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#ef4444" />
      <stop offset="50%" stop-color="#f97316" />
      <stop offset="100%" stop-color="#ef4444" />
    </linearGradient>
    <linearGradient id="endoTubeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0284c7" />
      <stop offset="50%" stop-color="#38bdf8" />
      <stop offset="100%" stop-color="#0284c7" />
    </linearGradient>
  </defs>

  <rect width="650" height="260" fill="url(#bgEnergetics)" stroke="#1e293b" stroke-width="2" rx="14" />
  <text x="325" y="24" fill="#f8fafc" font-size="13" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Chemical Energetics: Exothermic vs. Endothermic Energy Transfers</text>

  <!-- Left Card: Exothermic Reaction -->
  <g transform="translate(30, 42)">
    <rect width="280" height="198" rx="10" fill="#0f172a" stroke="#ef4444" stroke-width="1.2" />
    <text x="140" y="22" fill="#f87171" font-size="12" font-weight="bold" text-anchor="middle">Exothermic Reactions (-ΔH)</text>
    <text x="140" y="38" fill="#94a3b8" font-size="9" text-anchor="middle">Releases thermal energy to surroundings</text>

    <!-- Test Tube releasing heat -->
    <g transform="translate(35, 55)">
      <!-- Tube Body -->
      <rect x="15" y="10" width="22" height="70" rx="11" fill="url(#exoTubeGrad)" stroke="#fca5a5" stroke-width="1" />
      <rect x="12" y="8" width="28" height="5" rx="2" fill="#e2e8f0" />
      <!-- Heat radiation arrows pointing OUT -->
      <path d="M 45 35 L 62 25" stroke="#f97316" stroke-width="2" marker-end="none" />
      <path d="M 45 45 L 65 45" stroke="#ef4444" stroke-width="2" />
      <path d="M 45 55 L 62 65" stroke="#f97316" stroke-width="2" />
      <path d="M 5 35 L -12 25" stroke="#f97316" stroke-width="2" />
      <path d="M 5 45 L -15 45" stroke="#ef4444" stroke-width="2" />
      <path d="M 5 55 L -12 65" stroke="#f97316" stroke-width="2" />
      <text x="26" y="105" fill="#f87171" font-size="9" font-weight="bold" text-anchor="middle">Heat Released</text>
    </g>

    <!-- Key Bullet Summary -->
    <g transform="translate(115, 60)" fill="#cbd5e1" font-size="9.5" font-family="system-ui, sans-serif">
      <text x="0" y="12">• Surrounding temp <tspan fill="#4ade80" font-weight="bold">INCREASES (Hot)</tspan></text>
      <text x="0" y="28">• Products have <tspan fill="#f87171" font-weight="bold">LOWER energy</tspan></text>
      <text x="0" y="44">• ΔH has a <tspan fill="#f87171" font-weight="bold">NEGATIVE</tspan> sign (-ΔH)</text>
      <text x="0" y="60">• Reactants → Products + Heat</text>
      <text x="0" y="76">• Favoured by <tspan fill="#38bdf8">low temperatures</tspan></text>
    </g>
  </g>

  <!-- Right Card: Endothermic Reaction -->
  <g transform="translate(340, 42)">
    <rect width="280" height="198" rx="10" fill="#0f172a" stroke="#0284c7" stroke-width="1.2" />
    <text x="140" y="22" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">Endothermic Reactions (+ΔH)</text>
    <text x="140" y="38" fill="#94a3b8" font-size="9" text-anchor="middle">Absorbs thermal energy from surroundings</text>

    <!-- Test Tube taking in heat -->
    <g transform="translate(35, 55)">
      <!-- Tube Body -->
      <rect x="15" y="10" width="22" height="70" rx="11" fill="url(#endoTubeGrad)" stroke="#7dd3fc" stroke-width="1" />
      <rect x="12" y="8" width="28" height="5" rx="2" fill="#e2e8f0" />
      <!-- Heat absorption arrows pointing IN -->
      <path d="M 62 25 L 45 35" stroke="#38bdf8" stroke-width="2" />
      <path d="M 65 45 L 45 45" stroke="#0284c7" stroke-width="2" />
      <path d="M 62 65 L 45 55" stroke="#38bdf8" stroke-width="2" />
      <path d="M -12 25 L 5 35" stroke="#38bdf8" stroke-width="2" />
      <path d="M -15 45 L 5 45" stroke="#0284c7" stroke-width="2" />
      <path d="M -12 65 L 5 55" stroke="#38bdf8" stroke-width="2" />
      <text x="26" y="105" fill="#38bdf8" font-size="9" font-weight="bold" text-anchor="middle">Heat Absorbed</text>
    </g>

    <!-- Key Bullet Summary -->
    <g transform="translate(115, 60)" fill="#cbd5e1" font-size="9.5" font-family="system-ui, sans-serif">
      <text x="0" y="12">• Surrounding temp <tspan fill="#60a5fa" font-weight="bold">DECREASES (Cold)</tspan></text>
      <text x="0" y="28">• Products have <tspan fill="#38bdf8" font-weight="bold">HIGHER energy</tspan></text>
      <text x="0" y="44">• ΔH has a <tspan fill="#4ade80" font-weight="bold">POSITIVE</tspan> sign (+ΔH)</text>
      <text x="0" y="60">• Reactants + Heat → Products</text>
      <text x="0" y="76">• Must be continuously heated</text>
    </g>
  </g>
</svg>
`;

export const lessonParts: LessonPart[] = [
  {
    id: "energy-changes-types",
    title: "Energy Transfers in Reactions",
    type: "text",
    content: `
### ⚡ Energy Changes in Chemical Reactions

During every chemical reaction, energy is transferred between the reacting chemicals and their surroundings. 
* Energy exists in different forms: **heat (thermal energy)**, **light**, and **sound**.
* **Enthalpy Change (ΔH):** The transfer of thermal energy during a chemical reaction at constant pressure.

> [!NOTE]
> ### 📋 Classification: Exothermic vs. Endothermic Reactions
> Every chemical reaction is classified into one of two fundamental energetic types:
> 
> 1. **Exothermic Reactions:**
>    * **Give out (release)** thermal energy to the surroundings.
>    * $\\text{Reactants} \\rightarrow \\text{Products} + \\text{Energy}$.
>    * The temperature of the surroundings **increases** (the container feels warm or hot).
>    * The products have **lower chemical energy** than the reactants.
>    * The enthalpy change has a **negative sign** ($-\\Delta H$).
> 
> 2. **Endothermic Reactions:**
>    * **Take in (absorb)** thermal energy from the surroundings.
>    * $\\text{Reactants} + \\text{Energy} \\rightarrow \\text{Products}$.
>    * The temperature of the surroundings **decreases** (the container feels cold).
>    * The products have **higher chemical energy** than the reactants.
>    * The enthalpy change has a **positive sign** ($+\\Delta H$).

> ${svgToken(exoEndoReactionsSvg)}

> [!IMPORTANT]
> ### 🧮 Summary Comparison Table: Exothermic vs. Endothermic
> | Characteristic | Exothermic Reaction | Endothermic Reaction |
> | :--- | :--- | :--- |
> | **Energy Transfer** | Released / given out to surroundings | Absorbed / taken in from surroundings |
> | **Temperature of Surroundings** | **Increases** (heats up) | **Decreases** (cools down) |
> | **Relative Energy of Products** | Products are at **lower energy** than reactants | Products are at **higher energy** than reactants |
> | **Sign of Enthalpy Change (ΔH)** | **Negative** ($-\\Delta H$, e.g. $-2100\\text{ kJ/mol}$) | **Positive** ($+\\Delta H$, e.g. $+178\\text{ kJ/mol}$) |
> | **External Heat Supply** | Often spontaneous or needs initial spark only | Needs continuous heating until completion |
> | **Temperature Favorability** | Favoured by **lower** temperatures | Favoured by **higher** temperatures |

> [!EXAMPLE]
> #### 📝 Worked Example 1: Endothermic Temperature and Energy Change
> **Question:** How does the temperature and energy change in an endothermic reaction?
> 
> | Row | Temperature Change of Surroundings | Energy Change of Chemicals |
> | :---: | :---: | :---: |
> | **A** | Decrease | Energy taken in |
> | **B** | Decrease | Energy given out |
> | **C** | Increase | Energy taken in |
> | **D** | Increase | Energy given out |
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the Nature of Endothermic Reactions:**
> >    * Endothermic reactions absorb thermal energy from the surroundings (energy is taken in).
> > 2. **Determine Effect on Surroundings:**
> >    * Because heat is pulled out of the surroundings into chemical bonds, the temperature of the surroundings decreases (drops).
> > 3. **Conclusion:**
> >    * Temperature decreases and energy is taken in. The correct option is **A**.

> [!EXAMPLE]
> #### 📝 Worked Example 2: Mixing Two Chemical Solutions
> **Question:** Solutions of two chemicals are mixed in an insulated cup. A reaction occurs and the thermometer reading is recorded. Which statement is correct?
> 
> **A** If the reaction is endothermic, the temperature increases and energy is given out
> 
> **B** If the reaction is endothermic, the temperature decreases and energy is taken in
> 
> **C** If the reaction is exothermic, the temperature decreases and energy is given out
> 
> **D** If the reaction is exothermic, the temperature increases and energy is taken in
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Check Exothermic Definition:** Exothermic releases heat $\\rightarrow$ temperature increases.
> > 2. **Check Endothermic Definition:** Endothermic absorbs heat $\\rightarrow$ temperature decreases.
> > 3. **Evaluate Option B:** States that in an endothermic reaction, temperature decreases and energy is taken in. This matches chemical principles exactly.
> > 4. **Conclusion:**
> >    * The correct option is **B**.
    `,
    keyPoints: [
      "Exothermic reactions transfer heat to surroundings, raising the temperature (negative ΔH).",
      "Endothermic reactions absorb heat from surroundings, lowering the temperature (positive ΔH).",
      "Products of exothermic reactions have lower energy; products of endothermic reactions have higher energy."
    ]
  },
  {
    id: "real-world-energetics-examples",
    title: "Essential Real-Life Examples",
    type: "text",
    content: `
### 🧪 Cambridge Exam Examples: Exothermic & Endothermic Processes

In Cambridge IGCSE, examiners frequently test your ability to categorize everyday physical and chemical processes:

> [!BOX]
> ### 🔥 Key Exothermic Examples (Must Memorise)
> 1. **Synthesis of Iron(II) Sulfide:**
>    $$Fe(s) + S(s) \\rightarrow FeS(s) \\quad \\Delta H = -2100\\text{ kJ}$$
> 2. **Hydration of Quicklime (Calcium Oxide):**
>    $$CaO(s) + H_2O(l) \\rightarrow Ca(OH)_2(aq) + \\text{Heat}$$
> 3. **Precipitation Reactions:**
>    $$AgNO_3(aq) + NaCl(aq) \\rightarrow NaNO_3(aq) + AgCl(s) \\quad \\text{(white ppt, releases heat)}$$
> 4. **Neutralisation Reactions:** Reaction between an acid and a base (e.g. $HCl + NaOH \\rightarrow NaCl + H_2O$).
> 5. **Combustion of Fuels:** Burning coal, methane, or petrol ($CH_4 + 2O_2 \\rightarrow CO_2 + 2H_2O$).
> 6. **Respiration in Living Cells:** Glucose oxidation in mitochondria.
> 7. **Bond Making:** $H + H \\rightarrow H-H + \\Delta H$ (releases energy).
> 8. **Physical State Changes:** **Freezing** (liquid to solid) and **Condensation** (gas to liquid).

> [!BOX]
> ### ❄️ Key Endothermic Examples (Must Memorise)
> 1. **Thermal Decomposition:**
>    $$CaCO_3(s) \\xrightarrow{\\text{heat}} CaO(s) + CO_2(g) \\quad \\Delta H = +178\\text{ kJ}$$
> 2. **Reaction of Barium Hydroxide with Ammonium Chloride:**
>    $$Ba(OH)_2(aq) + 2NH_4Cl(s) + \\text{Heat} \\rightarrow BaCl_2(aq) + 2H_2O(l) + 2NH_3(g)$$
>    *(Drops temperature drastically below freezing point)*
> 3. **Photosynthesis:** Plants absorbing sunlight to make glucose ($6CO_2 + 6H_2O \\rightarrow C_6H_{12}O_6 + 6O_2$).
> 4. **Cooking & Baking:** Thermal denaturation of food proteins.
> 5. **Neutralisation of Citric Acid with Sodium Hydrogen Carbonate:** (Sherbet reaction, cooling effect in mouth).
> 6. **Sports Injury Cold Packs:** Dissolving ammonium nitrate or urea in water inside squeeze packs.
> 7. **Bond Breaking:** $H-H + \\text{Energy} \\rightarrow H + H$ (requires energy input).
> 8. **Physical State Changes:** **Melting** (solid to liquid), **Boiling/Evaporation**, and **Sublimation**.

> [!EXAMPLE]
> #### 📝 Worked Example 3: Adding Anhydrous Copper(II) Sulfate to Water
> **Question:** When white anhydrous copper(II) sulfate powder is added to water in a beaker, a blue solution is formed and heat is given out. Which row correctly shows the temperature change and the type of reaction taking place?
> 
> | Row | Temperature Change | Type of Reaction |
> | :---: | :---: | :---: |
> | **A** | Decrease | Endothermic |
> | **B** | Decrease | Exothermic |
> | **C** | Increase | Exothermic |
> | **D** | Increase | Endothermic |
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Interpret "Heat is Given Out":**
> >    * Releasing heat means the reaction is **exothermic**.
> > 2. **Relate Heat Release to Temperature:**
> >    * Thermal energy transferred into the solution causes the measured temperature to **increase**.
> > 3. **Conclusion:**
> >    * The temperature increases and the reaction is exothermic. The correct option is **C**.
    `,
    keyPoints: [
      "Combustion, neutralisation, and respiration are always exothermic.",
      "Thermal decomposition, photosynthesis, and sports cold packs are endothermic.",
      "Adding water to anhydrous copper(II) sulfate gives out heat (exothermic hydration)."
    ]
  }
];


