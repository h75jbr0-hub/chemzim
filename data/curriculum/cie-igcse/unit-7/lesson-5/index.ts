import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Preparation of Salts & Titration Techniques";
export const lessonNumber = 5;

export const theoryMarkdown = `
## Preparation of Salts & Titration Techniques
This lesson covers solubility rules for salts, the three master laboratory methods for preparing soluble and insoluble salts, practical washing and rinsing protocols for volumetric glassware, titration calculations, tests for water of crystallisation, and applications of precipitation.
`;

const saltPreparationFlowchartSvg = `
<svg viewBox="0 0 680 340" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="saltBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
    <marker id="saltArrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#38bdf8" />
    </marker>
  </defs>

  <rect width="680" height="340" fill="url(#saltBg)" stroke="#1e293b" stroke-width="2" rx="16" />

  <text x="340" y="24" fill="#f8fafc" font-size="14" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Flowchart: How to Choose the Salt Preparation Method</text>

  <!-- Start Diamond -->
  <g transform="translate(40, 50)">
    <rect width="180" height="45" rx="8" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5" />
    <text x="90" y="27" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">Is the salt soluble?</text>
  </g>

  <!-- Insoluble branch -->
  <path d="M 130 95 L 130 220" fill="none" stroke="#f43f5e" stroke-width="2" marker-end="url(#saltArrow)" />
  <text x="145" y="150" fill="#f43f5e" font-size="11" font-weight="bold">NO (Insoluble)</text>

  <!-- Method C: Precipitation -->
  <g transform="translate(40, 225)">
    <rect width="210" height="95" rx="10" fill="#0f172a" stroke="#f43f5e" stroke-width="2" />
    <text x="105" y="22" fill="#f43f5e" font-size="12" font-weight="bold" text-anchor="middle">Method C: Precipitation</text>
    <text x="105" y="42" fill="#f8fafc" font-size="10" text-anchor="middle">Mix two soluble salt solutions</text>
    <text x="105" y="60" fill="#94a3b8" font-size="10" text-anchor="middle">Filter precipitate, wash with</text>
    <text x="105" y="76" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">distilled water, dry in oven</text>
    <text x="105" y="90" fill="#94a3b8" font-size="9" text-anchor="middle">e.g. BaSO₄, PbI₂, AgCl</text>
  </g>

  <!-- Soluble branch -->
  <path d="M 220 72 L 310 72" fill="none" stroke="#38bdf8" stroke-width="2" marker-end="url(#saltArrow)" />
  <text x="260" y="65" fill="#38bdf8" font-size="11" font-weight="bold">YES</text>

  <!-- Second Decision -->
  <g transform="translate(315, 50)">
    <rect width="180" height="45" rx="8" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5" />
    <text x="90" y="22" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">Is it a Group I (Na, K)</text>
    <text x="90" y="36" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">or Ammonium (NH₄) salt?</text>
  </g>

  <!-- Yes -> Titration -->
  <path d="M 495 72 L 530 72 L 530 130" fill="none" stroke="#38bdf8" stroke-width="2" marker-end="url(#saltArrow)" />
  <text x="515" y="65" fill="#38bdf8" font-size="11" font-weight="bold">YES</text>

  <g transform="translate(435, 135)">
    <rect width="210" height="95" rx="10" fill="#0f172a" stroke="#10b981" stroke-width="2" />
    <text x="105" y="22" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">Method B: Titration</text>
    <text x="105" y="40" fill="#f8fafc" font-size="10" text-anchor="middle">Acid + Soluble Alkali / Carbonate</text>
    <text x="105" y="58" fill="#94a3b8" font-size="10" text-anchor="middle">Use indicator to find endpoint,</text>
    <text x="105" y="74" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">repeat without indicator, crystallise</text>
    <text x="105" y="88" fill="#94a3b8" font-size="9" text-anchor="middle">e.g. NaCl, KNO₃, (NH₄)₂SO₄</text>
  </g>

  <!-- No -> Excess Insoluble Base/Metal -->
  <path d="M 405 95 L 405 220 L 375 220" fill="none" stroke="#38bdf8" stroke-width="2" marker-end="url(#saltArrow)" />
  <text x="415" y="160" fill="#94a3b8" font-size="11" font-weight="bold">NO</text>

  <g transform="translate(165, 185)">
    <rect width="210" height="95" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="2" />
    <text x="105" y="22" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">Method A: Excess Insoluble Solid</text>
    <text x="105" y="40" fill="#f8fafc" font-size="10" text-anchor="middle">Acid + Excess Metal / Oxide / Carb</text>
    <text x="105" y="58" fill="#94a3b8" font-size="10" text-anchor="middle">Filter off unreacted excess solid,</text>
    <text x="105" y="74" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">heat filtrate to saturation point</text>
    <text x="105" y="88" fill="#94a3b8" font-size="9" text-anchor="middle">e.g. CuSO₄·5H₂O, MgSO₄, ZnCl₂</text>
  </g>
</svg>
`;

export const lessonParts: LessonPart[] = [
  {
    id: "solubility-rules-and-methods",
    title: "Solubility Rules & Salt Preparation Flowchart",
    type: "text",
    content: `
### 🧂 Salt Solubility Rules & Preparation Strategy

Before preparing any salt in the laboratory, you must know whether the salt is **soluble** or **insoluble** in water!

> [!NOTE]
> ### 📋 Cambridge Universal Solubility Rules
> | Ion Group | Soluble Salts | Insoluble Exceptions |
> | :--- | :--- | :--- |
> | **Sodium ($\text{Na}^+$), Potassium ($\text{K}^+$), Ammonium ($\text{NH}_4^+$)** | **ALL soluble** | None! |
> | **Nitrates ($\text{NO}_3^-$) & Ethanoates** | **ALL soluble** | None! |
> | **Chlorides ($\text{Cl}^-$), Bromides, Iodides** | Most are soluble | **Silver ($\text{Ag}^+$), Lead ($\text{Pb}^{2+}$)** |
> | **Sulfates ($\text{SO}_4^{2-}$)** | Most are soluble | **Barium ($\text{Ba}^{2+}$), Calcium ($\text{Ca}^{2+}$), Lead ($\text{Pb}^{2+}$)** |
> | **Carbonates ($\text{CO}_3^{2-}$) & Phosphates** | Only $\text{Na}^+, \text{K}^+, \text{NH}_4^+$ are soluble | **ALL other metal carbonates are insoluble** |
> | **Hydroxides ($\text{OH}^-$) & Oxides ($\text{O}^{2-}$)** | Only $\text{Na}^+, \text{K}^+, \text{NH}_4^+$ (and $\text{Ca}^{2+}, \text{Ba}^{2+}$ partial) | **ALL other metal hydroxides are insoluble** |

> ${svgToken(saltPreparationFlowchartSvg)}

> [!IMPORTANT]
> ### 🎯 Method A: Reacting Acid with Excess Insoluble Solid
> Used for soluble salts that do NOT contain $\text{Na}^+$, $\text{K}^+$, or $\text{NH}_4^+$ (e.g. $\text{CuSO}_4\cdot 5\text{H}_2\text{O}$, $\text{MgSO}_4$, $\text{ZnCl}_2$).
> 
> * **Why do we add EXCESS solid?**
>   * To ensure that **ALL of the acid has completely reacted**, so no unreacted acid remains in the solution to contaminate the crystals!
> * **Why do we FILTER?**
>   * To remove the unreacted excess insoluble solid from the salt solution.
> * **Why is CuCO₃ preferred over CuO or Cu(OH)₂?**
>   1. Effervescence ($\text{CO}_2$ bubbles) is produced; when fizzing stops, it is very easy to see that the reaction is complete!
>   2. No heating or continuous stirring is required.
> 
> > [!CAUTION]
> > ### 🛑 Metals that CANNOT be used in Method A:
> > 1. **$\text{Na}, \text{K}, \text{Ca}$:** Too reactive! They react explosively/violently with acids.
> > 2. **$\text{Cu}, \text{Ag}, \text{Au}$:** Unreactive! Situated below hydrogen, so they do not react with dilute acids.
> > 3. **$\text{Pb}$:** Reacts too slowly because an insoluble coating of lead(II) sulfate or chloride forms on the surface, preventing further reaction.
`,
    keyPoints: [
      "All nitrates, sodium, potassium, and ammonium salts are soluble.",
      "Method A adds excess insoluble solid to ensure all acid has reacted, then filters to remove unwanted solid.",
      "Reactive metals (Na, K) react too violently with acids; unreactive metals (Cu, Ag) do not react with acids at all."
    ]
  },
  {
    id: "titration-and-crystallisation",
    title: "Method B (Titration) & Water of Crystallisation",
    type: "text",
    content: `
### 🧪 Method B: Titration (Acid + Soluble Alkali)

Used when preparing soluble salts of **sodium, potassium, or ammonium** (e.g. $\text{NaCl}, \text{KNO}_3, (\text{NH}_4)_2\text{SO}_4$).

> [!NOTE]
> ### 📋 Experimental Procedure
> 1. Measure $25.0\text{ cm}^3$ of alkali into a conical flask using a **volumetric pipette** for accuracy.
> 2. Add an indicator (e.g. 2 drops of thymolphthalein $\rightarrow$ blue).
> 3. Add acid slowly from a **burette** until the endpoint is reached (thymolphthalein turns colourless).
> 4. Record the exact volume of acid added. Repeat until concordant titres (within $0.2\text{ cm}^3$) are achieved.
> 5. **Critical Step:** Repeat the titration using the exact same volumes **WITHOUT any indicator**, because the indicator dye would contaminate the salt crystals!
> 6. Heat the solution to evaporate water, leave to cool slowly to form pure white crystals, and dry.

> [!IMPORTANT]
> ### 💧 Hydrated Substances & Tests for Water
> * **Hydrated substance:** A substance chemically combined with water molecules in its crystal lattice (water of crystallisation).
> * **Anhydrous substance:** A substance containing no water.
> 
> * **Two Chemical Tests for the Presence of Water:**
>   1. **Cobalt(II) chloride paper:**
>      $$\text{CoCl}_2\cdot 6\text{H}_2\text{O(s)} \rightleftharpoons \text{CoCl}_2\text{(s)} + 6\text{H}_2\text{O(l)}$$
>      * Anhydrous (dry): **Blue** $\rightarrow$ Hydrated (wet): **Pink**
>   2. **Anhydrous copper(II) sulfate:**
>      $$\text{CuSO}_4\cdot 5\text{H}_2\text{O(s)} \rightleftharpoons \text{CuSO}_4\text{(s)} + 5\text{H}_2\text{O(l)}$$
>      * Anhydrous (dry): **White** $\rightarrow$ Hydrated (wet): **Blue**
`,
    keyPoints: [
      "Titration is repeated without indicator to obtain pure salt crystals without dye contamination.",
      "Anhydrous cobalt(II) chloride turns from blue to pink in the presence of water.",
      "Anhydrous copper(II) sulfate turns from white to blue in the presence of water."
    ]
  },
  {
    id: "precipitation-and-applications",
    title: "Method C (Precipitation) & Industrial Uses",
    type: "text",
    content: `
### ⚗️ Method C: Insoluble Salts by Precipitation

**Precipitation** is the formation of an insoluble solid when two clear soluble salt solutions are mixed together.

> [!NOTE]
> ### 📋 Case Study: Preparing Insoluble Barium Sulfate (BaSO₄)
> 1. Mix aqueous barium chloride ($\text{BaCl}_2\text{(aq)}$) with aqueous magnesium sulfate ($\text{MgSO}_4\text{(aq)}$).
> 2. A dense white precipitate of barium sulfate forms immediately:
>    $$\text{BaCl}_2\text{(aq)} + \text{MgSO}_4\text{(aq)} \rightarrow \text{BaSO}_4\text{(s)} \downarrow + \text{MgCl}_2\text{(aq)}$$
> 3. **Net Ionic Equation:**
>    $$\text{Ba}^{2+}\text{(aq)} + \text{SO}_4^{2-}\text{(aq)} \rightarrow \text{BaSO}_4\text{(s)}$$
> 4. Filter the mixture; the insoluble precipitate is trapped in the filter paper.
> 5. **Rinse with distilled water** to remove traces of soluble magnesium chloride solution.
> 6. Dry in a warm oven or between filter papers.

> [!TIP]
> ### 🏭 Practical & Industrial Uses of Precipitation
> 1. **Manufacturing Coloured Pigments:** Insoluble coloured precipitates (like yellow lead(II) iodide $\text{PbI}_2$) are used as pigments in paints.
> 2. **Wastewater Treatment:** Removing toxic heavy metal ions ($\text{Cu}^{2+}, \text{Cr}^{3+}, \text{Pb}^{2+}$) by precipitating them out as insoluble hydroxides using lime.
> 3. **Photographic Film:**
>    * Silver nitrate and potassium bromide form tiny crystals of insoluble silver bromide ($\text{AgBr}$):
>      $$\text{AgNO}_3\text{(aq)} + \text{KBr(aq)} \rightarrow \text{AgBr(s)} \downarrow + \text{KNO}_3\text{(aq)}$$
>    * When exposed to light, $\text{AgBr}$ undergoes photochemical decomposition: $2\text{AgBr(s)} \rightarrow 2\text{Ag(s)} + \text{Br}_2\text{(l)}$, producing dark silver grains to form the image.
`,
    keyPoints: [
      "Precipitation prepares insoluble salts by mixing two soluble solutions.",
      "The precipitate must be filtered, washed with distilled water, and dried.",
      "Precipitation is used in making paint pigments, water treatment, and photographic film."
    ]
  }
];

