import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Naming Organic Compounds & Fossil Fuels (Fractions)";
export const lessonNumber = 2;

export const theoryMarkdown = `
## Naming Organic Compounds & Fossil Fuels (Fractions)
This lesson covers IUPAC rules for naming organic compounds (roots, suffixes, and locants), fossil fuel sources (petroleum, natural gas, coal), fractional distillation of crude oil, trends in properties of fractions, and their specific industrial uses.
`;

const petroleumFractionsSvg = `
<svg viewBox="0 0 680 340" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="petBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
    <marker id="petArrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#38bdf8" />
    </marker>
  </defs>

  <rect width="680" height="340" fill="url(#petBg)" stroke="#1e293b" stroke-width="2" rx="16" />

  <text x="340" y="24" fill="#f8fafc" font-size="14" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Fractional Distillation of Petroleum (Crude Oil) in a Fractionating Column</text>

  <!-- Left: Tower Representation -->
  <g transform="translate(30, 45)">
    <!-- Column Body -->
    <rect x="50" y="20" width="100" height="250" rx="12" fill="#0f172a" stroke="#38bdf8" stroke-width="2" />
    
    <!-- Temperature gradient labels -->
    <text x="100" y="42" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">Cooler (~20°C)</text>
    <text x="100" y="255" fill="#f87171" font-size="10" font-weight="bold" text-anchor="middle">Hotter (~350°C)</text>

    <!-- Hot Petroleum Inlet -->
    <path d="M 10 240 L 50 240" fill="none" stroke="#f59e0b" stroke-width="3" marker-end="url(#petArrow)" />
    <text x="5" y="232" fill="#f59e0b" font-size="10" font-weight="bold">Crude Oil In</text>

    <!-- Outlets -->
    <!-- 1: Refinery gas -->
    <line x1="150" y1="35" x2="190" y2="35" stroke="#38bdf8" stroke-width="2" />
    <!-- 2: Gasoline -->
    <line x1="150" y1="70" x2="190" y2="70" stroke="#38bdf8" stroke-width="2" />
    <!-- 3: Naphtha -->
    <line x1="150" y1="105" x2="190" y2="105" stroke="#38bdf8" stroke-width="2" />
    <!-- 4: Kerosene / Paraffin -->
    <line x1="150" y1="140" x2="190" y2="140" stroke="#38bdf8" stroke-width="2" />
    <!-- 5: Diesel oil -->
    <line x1="150" y1="175" x2="190" y2="175" stroke="#38bdf8" stroke-width="2" />
    <!-- 6: Fuel oil -->
    <line x1="150" y1="210" x2="190" y2="210" stroke="#38bdf8" stroke-width="2" />
    <!-- 7: Lubricating oil -->
    <line x1="150" y1="240" x2="190" y2="240" stroke="#38bdf8" stroke-width="2" />
    <!-- 8: Bitumen -->
    <line x1="150" y1="265" x2="190" y2="265" stroke="#38bdf8" stroke-width="2" />
  </g>

  <!-- Right: Fractions Table / Cards -->
  <g transform="translate(230, 48)">
    <rect width="420" height="270" rx="10" fill="#0f172a" stroke="#334155" stroke-width="1.5" />
    
    <text x="210" y="22" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">Petroleum Fractions from Top to Bottom</text>

    <g font-size="10" fill="#f8fafc">
      <!-- 1 -->
      <text x="15" y="48" fill="#34d399" font-weight="bold">1. Refinery gas (C₁–C₄):</text>
      <text x="170" y="48" fill="#94a3b8">Bottled gas for domestic heating and cooking</text>

      <!-- 2 -->
      <text x="15" y="76" fill="#38bdf8" font-weight="bold">2. Gasoline / Petrol (C₅–C₆):</text>
      <text x="170" y="76" fill="#94a3b8">Fuel for cars</text>

      <!-- 3 -->
      <text x="15" y="104" fill="#a5b4fc" font-weight="bold">3. Naphtha (C₆–C₁₀):</text>
      <text x="170" y="104" fill="#94a3b8">Chemical feedstock for plastics and chemicals</text>

      <!-- 4 -->
      <text x="15" y="132" fill="#fde68a" font-weight="bold">4. Kerosene / Paraffin (C₁₀–C₁₅):</text>
      <text x="170" y="132" fill="#94a3b8">Jet fuel for aircraft, oil lamps &amp; stoves</text>

      <!-- 5 -->
      <text x="15" y="160" fill="#f59e0b" font-weight="bold">5. Diesel oil / Gas oil (C₁₅–C₂₀):</text>
      <text x="170" y="160" fill="#94a3b8">Fuel for diesel engines (trucks, trains, buses)</text>

      <!-- 6 -->
      <text x="15" y="188" fill="#fb923c" font-weight="bold">6. Fuel oil (C₂₀–C₃₀):</text>
      <text x="170" y="188" fill="#94a3b8">Fuel for ships and power station heating systems</text>

      <!-- 7 -->
      <text x="15" y="216" fill="#f87171" font-weight="bold">7. Lubricating oil (C₃₀–C₅₀):</text>
      <text x="170" y="216" fill="#94a3b8">Engine lubricants, waxes and polishes</text>

      <!-- 8 -->
      <text x="15" y="244" fill="#ef4444" font-weight="bold">8. Bitumen (C₅₀+):</text>
      <text x="170" y="244" fill="#94a3b8">Surfacing roads and waterproofing roofs</text>
    </g>
  </g>
</svg>
`;

export const lessonParts: LessonPart[] = [
  {
    id: "iupac-nomenclature-rules",
    title: "IUPAC Naming Rules for Organic Compounds",
    type: "text",
    content: `
### 🏷️ Systematic IUPAC Nomenclature

Cambridge IGCSE requires you to name unbranched and branched organic molecules with up to 4 to 6 carbon atoms.

> [!NOTE]
> ### 🔤 Carbon Chain Roots (Prefixes)
> The number of carbon atoms in the longest continuous chain determines the **root name**:
> * **1 Carbon:** meth- (e.g. methane)
> * **2 Carbons:** eth- (e.g. ethane, ethene, ethanol)
> * **3 Carbons:** prop- (e.g. propane, propene, propan-1-ol)
> * **4 Carbons:** but- (e.g. butane, but-1-ene, butan-1-ol)
> * **5 Carbons:** pent- (e.g. pentane)
> * **6 Carbons:** hex- (e.g. hexane)

> [!IMPORTANT]
> ### 🧭 Rules for Systematic Naming
> 1. **Locate the longest continuous carbon chain** containing the functional group (this gives the root).
> 2. **Identify the functional group and select the appropriate suffix:**
>    * Alkane $\rightarrow$ **-ane**
>    * Alkene $\rightarrow$ **-ene**
>    * Alcohol $\rightarrow$ **-anol**
>    * Carboxylic acid $\rightarrow$ **-anoic acid**
> 3. **Number the chain from the end that gives the lowest possible number** (locant) to the functional group:
>    * E.g. $CH_3CH_2CH_2OH$ is **propan-1-ol**, whereas $CH_3CH(OH)CH_3$ is **propan-2-ol**.
>    * E.g. $CH_3CH=CHCH_3$ is **but-2-ene**, whereas $CH_2=CHCH_2CH_3$ is **but-1-ene**.
> 4. **Name side-chains (branches) with a prefix:**
>    * A $-CH_3$ group is a **methyl** group.
>    * Give the locant number indicating which carbon holds the branch (e.g. **2-methylpropane**).

> [!EXAMPLE]
> #### 📝 Worked Example 3: Decoding Structural Formulae
> **Question:** What is the IUPAC name for $CH_3CH_2CH_2CH_2CH_3$ and $CH_3CH(CH_3)CH_3$?
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Compound 1:** Five carbons in a straight single-bonded chain = **pentane**.
> > 2. **Compound 2:** Longest carbon chain is 3 carbons (propane). A methyl branch is on carbon 2 = **2-methylpropane**.
`,
    keyPoints: [
      "The longest continuous carbon chain determines the root (meth-, eth-, prop-, but-, pent-, hex-).",
      "Number the chain to give the functional group the lowest possible number.",
      "Butan-1-ol has the OH on the end carbon; butan-2-ol has the OH on the second carbon."
    ]
  },
  {
    id: "fossil-fuels-and-petroleum-refining",
    title: "Fossil Fuels & Fractional Distillation of Petroleum",
    type: "text",
    content: `
### 🛢️ Fossil Fuels & Petroleum Refining

Fossil fuels are non-renewable energy resources formed over millions of years from the remains of prehistoric plants and marine organisms under high pressure and heat:
1. **Petroleum (Crude Oil):** A dark, sticky, complex mixture of hundreds of hydrocarbons.
2. **Natural Gas:** Mainly **methane ($CH_4$)**, with small amounts of ethane and propane.
3. **Coal:** Formed from ancient terrestrial vegetation buried under anaerobic conditions.

> ${svgToken(petroleumFractionsSvg)}

> [!IMPORTANT]
> ### ⚗️ How Fractional Distillation Works
> Petroleum is separated into useful fractions by **fractional distillation** inside a tall fractionating column:
> 1. Petroleum is heated and vaporised before entering the bottom of the column.
> 2. The column is **hot at the bottom (~$350^\circ\text{C}$)** and **cool at the top (~$20^\circ\text{C}$)**.
> 3. Rising hot vapours cool and condense when they reach a tray where the temperature is equal to their boiling point.
> 4. **Small molecules** have weak intermolecular forces, low boiling points, and condense near the **top**.
> 5. **Large molecules** have strong intermolecular forces, high boiling points, and condense near the **bottom**.

> [!BOX]
> ### 📊 Systematic Physical Trends Down the Column
> As you move **down** the fractionating column (from Refinery gas $\rightarrow$ Bitumen):
> * **Chain length & relative molecular mass ($M_r$):** Increases ($C_1 \rightarrow C_{50+}$).
> * **Boiling point:** Increases.
> * **Viscosity (thickness / resistance to flow):** Increases (flows much less easily).
> * **Volatility (ease of evaporation):** Decreases.
> * **Flammability (ease of burning):** Decreases (burns with a sootier, smokier flame).

> [!EXAMPLE]
> #### 📝 Worked Example 4: Identifying Petroleum Column Heights
> **Question:** In a fractionating column separating petroleum, three fractions X, Y, and Z leave at progressively lower levels (X higher than Y, Y higher than Z). Which combination correctly identifies X, Y, and Z?
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Recall the order from top to bottom:**
> >    Refinery gas $\rightarrow$ Gasoline $\rightarrow$ Naphtha $\rightarrow$ Kerosene (paraffin) $\rightarrow$ Diesel oil $\rightarrow$ Fuel oil $\rightarrow$ Lubricating oil $\rightarrow$ Bitumen.
> > 2. **Check relative levels:**
> >    * Kerosene (paraffin) is above Diesel oil.
> >    * Diesel oil is above Lubricating oil.
> > 3. **Conclusion:** If $X = \text{Paraffin (kerosene)}$, $Y = \text{Diesel oil}$, and $Z = \text{Lubricating fraction}$, they strictly match descending order down the column!
`,
    keyPoints: [
      "Natural gas consists mainly of methane (CH₄).",
      "Fractional distillation separates crude oil based on differing boiling points.",
      "As carbon chain length increases: boiling point and viscosity increase, while volatility and flammability decrease.",
      "Know the key uses: refinery gas for cooking, gasoline for cars, naphtha for chemicals, kerosene for jet fuel, diesel for trucks, and bitumen for roads."
    ]
  }
];
