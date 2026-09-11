import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Extraction of Metals";
export const lessonNumber = 3;

export const theoryMarkdown = `
## Extraction of Metals from Ores
This lesson covers how the method of metal extraction relates to its position in the reactivity series (electrolysis vs. reduction by carbon/carbon monoxide vs. native occurrence), extraction of iron in the Blast Furnace, and extraction of aluminum from bauxite using molten cryolite.
`;

// Compact SVG Diagram: Metal Extraction Methods (650x260)
const metalExtractionSvg = `
<svg viewBox="0 0 650 260" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgExtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
  </defs>

  <rect width="650" height="260" fill="url(#bgExtGrad)" stroke="#1e293b" stroke-width="2" rx="14" />
  <text x="325" y="24" fill="#f8fafc" font-size="13" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Metal Extraction Strategy Based on Reactivity (Cambridge 0620)</text>

  <!-- Method 1: Electrolysis -->
  <g transform="translate(25, 45)">
    <rect width="185" height="190" rx="8" fill="#0f172a" stroke="#38bdf8" stroke-width="1.2" />
    <text x="92" y="22" fill="#38bdf8" font-size="10.5" font-weight="bold" text-anchor="middle">1. Electrolysis (High Energy)</text>

    <text x="92" y="45" fill="#f8fafc" font-size="10" font-weight="bold" text-anchor="middle">K, Na, Ca, Mg, Al</text>
    <text x="92" y="65" fill="#cbd5e1" font-size="8" text-anchor="middle">Above Carbon in reactivity</text>

    <rect x="12" y="80" width="160" height="95" rx="5" fill="#1e293b" />
    <text x="20" y="98" fill="#93c5fd" font-size="8" font-weight="bold">• Strong ionic bonds in ores</text>
    <text x="20" y="115" fill="#cbd5e1" font-size="7.5">• Carbon CANNOT reduce them</text>
    <text x="20" y="132" fill="#cbd5e1" font-size="7.5">• Extremely high electricity cost</text>
    <text x="20" y="150" fill="#a5b4fc" font-size="7.5">• Al extracted from Bauxite</text>
    <text x="20" y="165" fill="#a5b4fc" font-size="7.5">  dissolved in molten cryolite</text>
  </g>

  <!-- Method 2: Reduction with Carbon -->
  <g transform="translate(230, 45)">
    <rect width="190" height="190" rx="8" fill="#0f172a" stroke="#fbbf24" stroke-width="1.2" />
    <text x="95" y="22" fill="#fbbf24" font-size="10.5" font-weight="bold" text-anchor="middle">2. Chemical Reduction (C / CO)</text>

    <text x="95" y="45" fill="#f8fafc" font-size="10" font-weight="bold" text-anchor="middle">Zn, Fe, Sn, Pb</text>
    <text x="95" y="65" fill="#cbd5e1" font-size="8" text-anchor="middle">Below Carbon in reactivity</text>

    <rect x="12" y="80" width="165" height="95" rx="5" fill="#1e293b" />
    <text x="20" y="98" fill="#fde047" font-size="8" font-weight="bold">• Heated with coke (C) or CO</text>
    <text x="20" y="115" fill="#cbd5e1" font-size="7.5">• Carbon is cheaper than electricity</text>
    <text x="20" y="132" fill="#cbd5e1" font-size="7.5">• Iron extracted in Blast Furnace</text>
    <text x="20" y="150" fill="#e2e8f0" font-size="7.5">  Fe₂O₃ + 3CO → 2Fe + 3CO₂</text>
    <text x="20" y="165" fill="#e2e8f0" font-size="7.5">• Limestone removes acidic SiO₂ slag</text>
  </g>

  <!-- Method 3: Native Occurrence -->
  <g transform="translate(440, 45)">
    <rect width="185" height="190" rx="8" fill="#0f172a" stroke="#10b981" stroke-width="1.2" />
    <text x="92" y="22" fill="#34d399" font-size="10.5" font-weight="bold" text-anchor="middle">3. Native Uncombined</text>

    <text x="92" y="45" fill="#f8fafc" font-size="10" font-weight="bold" text-anchor="middle">Cu, Ag, Au, Pt</text>
    <text x="92" y="65" fill="#cbd5e1" font-size="8" text-anchor="middle">Below Hydrogen in reactivity</text>

    <rect x="12" y="80" width="160" height="95" rx="5" fill="#1e293b" />
    <text x="20" y="98" fill="#34d399" font-size="8" font-weight="bold">• Completely unreactive</text>
    <text x="20" y="115" fill="#cbd5e1" font-size="7.5">• Found as pure free metals</text>
    <text x="20" y="132" fill="#cbd5e1" font-size="7.5">  in the Earth's crust</text>
    <text x="20" y="150" fill="#cbd5e1" font-size="7.5">• Only physical separation</text>
    <text x="20" y="165" fill="#cbd5e1" font-size="7.5">  (panning, crushing) required</text>
  </g>
</svg>
`;

export const lessonParts: LessonPart[] = [
  {
    id: 'ci-u9-l3-part1',
    title: 'Extraction Methods & Position in Reactivity Series',
    type: 'text',
    content: `
> [!NOTE]
> ### ⛏️ How Does Reactivity Dictate Extraction Method?
> The method used to extract a metal from its mineral ore is directly determined by its position in the reactivity series relative to **Carbon**:
> 
> 1. **Metals ABOVE Carbon ($K, Na, Ca, Mg, Al$):**
>    * Their metal-oxygen bonds are extremely strong and stable.
>    * Carbon is less reactive and cannot displace or reduce these metals.
>    * Extracted exclusively by **electrolysis of molten compounds** (a high-energy, expensive electrical process).
> 
> 2. **Metals BELOW Carbon ($Zn, Fe, Sn, Pb$):**
>    * Can be extracted economically by **chemical reduction using Carbon (coke)** or carbon monoxide ($CO$) in a furnace.
> 
> 3. **Metals BELOW Hydrogen ($Cu, Ag, Au, Pt$):**
>    * Occur naturally **native** as uncombined elemental metals in the Earth's crust due to their extreme lack of chemical reactivity.

> [!BOX]
> ### 📊 Extraction Strategy Matrix
>
> ${svgToken(metalExtractionSvg)}
    `,
    keyPoints: [
      "Metals above carbon are extracted by electrolysis of molten compounds.",
      "Metals below carbon are extracted by reduction with carbon or CO.",
      "Gold, silver, and platinum occur native in the Earth's crust."
    ]
  },
  {
    id: 'ci-u9-l3-part2',
    title: 'Extraction of Iron & Basic Oxygen Steelmaking',
    type: 'text',
    content: `
> [!IMPORTANT]
> ### 🏭 1. Extraction of Iron in the Blast Furnace
> A blast furnace is a massive chimney-shaped steel tower (over 30 metres tall) lined with refractory firebrick.
>
> **The Charge (Raw Materials added at top):**
> 1. **Iron ore (mainly Haematite, $Fe_2O_3$):** Contains sandy impurities ($SiO_2$).
> 2. **Coke (nearly pure Carbon, $C$):** Serves two crucial roles:
>    * Acts as a **fuel** when burned with hot air, heating the furnace up to 1900 °C.
>    * Provides the source of the **reducing agent** ($CO$).
> 3. **Limestone ($CaCO_3$):** Added to remove acidic sand impurities as molten slag.
>
> **Key Blast Furnace Reactions in Sequence:**
> 1. **Coke combustion (Exothermic - heats furnace):**
>    $$C(s) + O_2(g) \\\\rightarrow CO_2(g)$$
> 2. **Formation of the reducing agent (Endothermic):**
>    $$C(s) + CO_2(g) \\\\rightarrow 2CO(g)$$
> 3. **Reduction of haematite (in the lower hot zone):**
>    $$Fe_2O_3(s) + 3CO(g) \\\\rightarrow 2Fe(l) + 3CO_2(g)$$
>    *(Molten iron collects at the bottom of the furnace at ~1500 °C).*
> 4. **Limestone decomposition & slag formation (Neutralisation):**
>    * Thermal decomposition of limestone:
>      $$CaCO_3(s) \\\\rightarrow CaO(s) + CO_2(g)$$
>    * Calcium oxide (basic) neutralises silicon dioxide (acidic impurity):
>      $$CaO(s) + SiO_2(s) \\\\rightarrow CaSiO_3(l) \\\\quad (\\\\text{molten calcium silicate / slag})$$
>    * Molten slag is **less dense than molten iron**, so it floats on top of the iron and prevents re-oxidation. Both are tapped off separately.

> [!BOX]
> ### ⚙️ Pig Iron vs Steel Conversion (Basic Oxygen Furnace)
> * **Pig Iron (Cast Iron):** The direct product from the blast furnace. It is impure, containing **4% to 5% carbon** plus sand and traces of sulfur and phosphorus. This high carbon content makes pig iron **very hard but extremely brittle**.
> * **Converting Pig Iron into Steel (Basic Oxygen Process):**
>   1. Molten pig iron and recycled scrap steel are poured into a tilting converter.
>   2. **High-pressure oxygen** is blown through a water-cooled lance directly onto the molten metal.
>   3. Impurities oxidise:
>      * Carbon oxidises to $CO$ and $CO_2$ gases, which escape.
>      * Sulfur oxidises to $SO_2$ gas, which escapes.
>      * Silicon and phosphorus oxidise to solid acidic oxides ($SiO_2, P_2O_5$).
>   4. **Powdered calcium oxide (lime, $CaO$)** is added to react with these acidic oxides, forming a basic slag that is poured off.
>   5. Calculated amounts of carbon (0.2% - 0.5%) and other metals (e.g. Cr, Ni) are added to produce the exact grade of steel desired.

> [!TIP]
> ### ⚡ 2. Extraction of Aluminium (Hall-Héroult Process)
> * **Bauxite Ore:** Reddish-brown raw ore consisting of hydrated aluminium oxide ($Al_2O_3 \\cdot 3H_2O$).
> * **Alumina:** Purified, white anhydrous crystalline $Al_2O_3$.
> * **Role of Molten Cryolite ($Na_3AlF_6$):**
>   * Acts as a solvent for alumina.
>   * Lowers the working operating temperature from over 2000 °C to **~950 °C**, saving enormous amounts of energy.
>   * Dramatically increases electrical conductivity of the electrolyte.
> * **Electrode Reactions (Carbon Anodes Burn Away):**
>   * **Cathode (negative):** Graphite (carbon) lining of the steel tank:
>     $$Al^{3+} + 3e^- \\\\rightarrow Al(l) \\\\quad (\\\\text{or } 4Al^{3+} + 12e^- \\\\rightarrow 4Al(l))$$
>     *Molten aluminium is denser than the electrolyte and sinks to the bottom.*
>   * **Anode (positive):** Suspended graphite (carbon) blocks:
>     $$2O^{2-} \\\\rightarrow O_2(g) + 4e^- \\\\quad (\\\\text{or } 6O^{2-} \\\\rightarrow 3O_2(g) + 12e^-)$$
>   * **Anode consumption:** At ~950 °C, the oxygen produced reacts with the hot carbon anodes:
>     $$C(s) + O_2(g) \\\\rightarrow CO_2(g)$$
>     *Because the carbon anodes slowly burn away as carbon dioxide, they must be periodically replaced.*
`,
    keyPoints: [
      "In the blast furnace, coke acts both as a fuel to heat the furnace and as the precursor for the reducing agent CO.",
      "Limestone decomposes to basic CaO, which neutralises acidic SiO₂ to form molten slag CaSiO₃.",
      "Pig iron is brittle due to 4% carbon; the Basic Oxygen Process blows in O₂ and adds CaO to remove C, Si, and P impurities.",
      "In aluminium extraction, cryolite lowers the melting point to 950 °C, and carbon anodes must be replaced as they burn to form CO₂."
    ]
  },
  {
    id: 'ci-u9-l3-part3',
    title: 'Cambridge Exam Practice: Extraction & Blast Furnace',
    type: 'text',
    content: `
> [!EXAMPLE]
> #### 📝 Worked Example: Industrial Extraction Principles
> **Question 1:** Explain two distinct functions of coke in the extraction of iron in a blast furnace.
>
> **Question 2:** In the basic oxygen steelmaking process, explain why both oxygen gas and powdered calcium oxide are added to molten pig iron.
>
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> >
> > 1. **Functions of Coke:**
> >    * **Function 1 (Fuel):** Coke burns in the hot air blast ($C + O_2 \\\\rightarrow CO_2$), providing an exothermic reaction that maintains the high operating temperature of the furnace.
> >    * **Function 2 (Reducing agent precursor):** Coke reacts with carbon dioxide ($C + CO_2 \\\\rightarrow 2CO$) to produce carbon monoxide, which reduces iron(III) oxide to molten iron.
> >
> > 2. **Oxygen & Calcium Oxide in Steelmaking:**
> >    * **Oxygen:** Reacts with excess carbon to form gaseous $CO$ and $CO_2$ (lowering carbon content from ~4% to <0.5%), and oxidises silicon and phosphorus to their oxides.
> >    * **Calcium oxide (lime):** Being a basic oxide, it reacts with the acidic oxides of silicon and phosphorus ($SiO_2, P_2O_5$) to produce a molten slag layer that can be easily skimmed off.
`,
    keyPoints: [
      "Coke functions as both an exothermic fuel and the source of reducing gas CO.",
      "Blowing oxygen into pig iron burns off excess carbon as gaseous CO and CO₂.",
      "Adding lime (CaO) neutralises acidic non-metal oxide impurities (SiO₂, P₂O₅) into slag."
    ]
  }
];
