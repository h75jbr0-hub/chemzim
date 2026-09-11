import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Transition Elements";
export const lessonNumber = 5;

export const theoryMarkdown = `
## Transition Elements (The d-Block Metals)
This lesson covers the characteristic physical and chemical properties of transition elements compared with Group I metals, their high densities and melting points, variable oxidation states, formation of colored compounds, complex ion formation, and catalytic applications.
`;

// Compact SVG Diagram: Transition Metals Characteristics (650x260)
const transitionMetalsSvg = `
<svg viewBox="0 0 650 260" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgTmGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
  </defs>

  <rect width="650" height="260" fill="url(#bgTmGrad)" stroke="#1e293b" stroke-width="2" rx="14" />
  <text x="325" y="24" fill="#f8fafc" font-size="13" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Transition Elements: Distinct Physical &amp; Chemical Hallmarks</text>

  <!-- Left Card: Comparison with Group I -->
  <g transform="translate(25, 42)">
    <rect width="285" height="198" rx="10" fill="#0f172a" stroke="#eab308" stroke-width="1.2" />
    <text x="142" y="22" fill="#fde047" font-size="11" font-weight="bold" text-anchor="middle">1. Physical Comparison: Transition vs. Group I</text>

    <!-- Table preview -->
    <rect x="15" y="38" width="255" height="145" rx="6" fill="#1e293b" />
    <text x="25" y="58" fill="#f8fafc" font-size="9" font-weight="bold">• Hard, tough &amp; strong</text>
    <text x="145" y="58" fill="#94a3b8" font-size="8.5">(Group I are soft)</text>

    <text x="25" y="82" fill="#f8fafc" font-size="9" font-weight="bold">• Very high melting points</text>
    <text x="145" y="82" fill="#94a3b8" font-size="8.5">(Fe: 1535 °C; K: 63 °C)</text>

    <text x="25" y="106" fill="#f8fafc" font-size="9" font-weight="bold">• Very high densities</text>
    <text x="145" y="106" fill="#94a3b8" font-size="8.5">(Fe: 7.86 g/cm³; Na floats)</text>

    <text x="25" y="130" fill="#f8fafc" font-size="9" font-weight="bold">• Malleable &amp; ductile</text>
    <text x="145" y="130" fill="#94a3b8" font-size="8.5">(bent / drawn into wires)</text>

    <text x="25" y="154" fill="#f8fafc" font-size="9" font-weight="bold">• Exception: Mercury (Hg)</text>
    <text x="145" y="154" fill="#f87171" font-size="8.5">Liquid metal at r.t.p.</text>

    <text x="25" y="174" fill="#a3e635" font-size="8.5">Best electricity conductors: Ag &gt; Cu &gt; Au</text>
  </g>

  <!-- Right Card: 4 Unique Chemical Properties -->
  <g transform="translate(340, 42)">
    <rect width="285" height="198" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="1.2" />
    <text x="142" y="22" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">2. Four Unique Chemical Properties</text>

    <!-- Property 1 -->
    <rect x="15" y="36" width="255" height="35" rx="5" fill="#1e293b" />
    <text x="25" y="50" fill="#38bdf8" font-size="8.5" font-weight="bold">1. Variable Oxidation States:</text>
    <text x="25" y="63" fill="#cbd5e1" font-size="8">Fe²⁺ &amp; Fe³⁺; Cu⁺ &amp; Cu²⁺; Mn²⁺, Mn⁴⁺, Mn⁷⁺</text>

    <!-- Property 2 -->
    <rect x="15" y="75" width="255" height="35" rx="5" fill="#1e293b" />
    <text x="25" y="89" fill="#f43f5e" font-size="8.5" font-weight="bold">2. Form Colored Compounds:</text>
    <text x="25" y="102" fill="#cbd5e1" font-size="8">Cu²⁺ (blue), Fe²⁺ (pale green), Fe³⁺ (brown-orange)</text>

    <!-- Property 3 -->
    <rect x="15" y="114" width="255" height="35" rx="5" fill="#1e293b" />
    <text x="25" y="128" fill="#eab308" font-size="8.5" font-weight="bold">3. Catalytic Activity:</text>
    <text x="25" y="141" fill="#cbd5e1" font-size="8">Fe in Haber process, V₂O₅ in Contact process</text>

    <!-- Property 4 -->
    <rect x="15" y="153" width="255" height="35" rx="5" fill="#1e293b" />
    <text x="25" y="167" fill="#a855f7" font-size="8.5" font-weight="bold">4. Form Complex Ions:</text>
    <text x="25" y="180" fill="#cbd5e1" font-size="8">[Cu(H₂O)₂(NH₃)₄]²⁺ deep royal blue with excess NH₃</text>
  </g>
</svg>
`;

export const lessonParts: LessonPart[] = [
  {
    id: 'ci-u8-l5-part1',
    title: 'Physical Properties of Transition Metals',
    type: 'text',
    content: `
> [!NOTE]
> ### ⚔️ The Transition Elements (d-Block)
> The **transition elements** are the large central block of metallic elements situated between Groups II and III in the periodic table (including Iron, Copper, Nickel, Chromium, Silver, Gold, Platinum).
>
> * **General Physical Properties:**
>   1. **High Densities:** Very heavy metals (e.g. Iron has a density of $7.86\\\\text{ g/cm}^3$, Copper $8.96\\\\text{ g/cm}^3$).
>   2. **High Melting and Boiling Points:** Much higher than Group I metals (e.g. Iron melts at $1535^\\\\circ\\\\text{C}$; Nickel melts at $1455^\\\\circ\\\\text{C}$).
>      * **Exception:** **Mercury ($Hg$)** is the only metallic element that is a **liquid at room temperature** (melting point $-39^\\\\circ\\\\text{C}$).
>   3. **Hardness and Strength:** Hard, rigid, and tough (used structurally in bridges, car bodies, and buildings).
>   4. **Malleability and Ductility:**
>      * **Malleable:** Can be hammered into sheets without shattering.
>      * **Ductile:** Can be drawn into thin electrical wires.
>   5. **Electrical and Thermal Conductivity:** Excellent conductors (Silver is the best electrical conductor, followed by Copper).
>   6. **Elemental Color:** Most have a shiny grey/silver metallic luster, except **Gold ($Au$)** which is yellow and **Copper ($Cu$)** which is reddish-brown.

> [!BOX]
> ### 📊 Transition Elements Comparison & Properties
>
> ${svgToken(transitionMetalsSvg)}
    `,
    keyPoints: [
      "Transition metals have high melting points, high densities, and high tensile strength.",
      "Mercury (Hg) is an exception: a liquid metal at room temperature.",
      "Malleable means hammered into sheets; ductile means drawn into wires."
    ]
  },
  {
    id: 'ci-u8-l5-part2',
    title: 'Four Distinctive Chemical Properties & Uses',
    type: 'text',
    content: `
> [!IMPORTANT]
> ### 🧪 The 4 Distinctive Chemical Properties of Transition Elements
> Unlike s-block metals (Group I & II which have only one fixed oxidation state and form white compounds), transition metals exhibit:
> 
> 1. **Variable Oxidation States (Variable Valencies):**
>    * They can lose different numbers of electrons from their inner and outer shells:
>      * Iron forms **$Fe^{2+}$** (Iron(II)) and **$Fe^{3+}$** (Iron(III)).
>      * Copper forms **$Cu^+$** (Copper(I)) and **$Cu^{2+}$** (Copper(II)).
>      * Manganese forms $+2, +3, +4, +6,$ and $+7$ (e.g. $MnO_2$, $KMnO_4$).
> 
> 2. **Formation of Colored Compounds:**
>    * Transition metal ions form brilliantly colored ionic compounds and aqueous solutions:
>      * Copper(II) compounds ($Cu^{2+}$): **Blue** (e.g. $CuSO_4(aq)$).
>      * Iron(II) compounds ($Fe^{2+}$): **Pale green**.
>      * Iron(III) compounds ($Fe^{3+}$): **Brown / yellow-orange**.
>      * Nickel(II) compounds ($Ni^{2+}$): **Emerald green**.
>      * Chromium(III) compounds ($Cr^{3+}$): **Green**; Dichromate ($Cr_2O_7^{2-}$): **Orange**.
> 
> 3. **Catalytic Activity:**
>    * Transition metals and their compounds act as excellent heterogeneous catalysts:
>      * **Iron ($Fe$):** Haber process for ammonia synthesis.
>      * **Vanadium(V) oxide ($V_2O_5$):** Contact process for sulfuric acid.
>      * **Nickel ($Ni$):** Hydrogenation of vegetable oils to make margarine.
> 
> 4. **Formation of Complex Ions:**
>    * When aqueous ammonia ($NH_3(aq)$) is added dropwise to pale blue $CuSO_4(aq)$:
>      * Initially, a **pale blue precipitate** of copper(II) hydroxide forms: $Cu^{2+} + 2OH^- \\\\rightarrow Cu(OH)_2(s)$.
>      * Upon adding **excess ammonia**, the precipitate dissolves to form an intense **deep royal blue solution** of tetraamminecopper(II) complex: $[Cu(H_2O)_2(NH_3)_4]^{2+}(aq)$.

> [!EXAMPLE]
> #### 📝 Cambridge Exam Worked Example: Identifying a Transition Metal
> **Question:** An element melts at $1455^\\\\circ\\\\text{C}$, has a density of $8.90\\\\text{ g/cm}^3$, and forms an emerald green chloride.
> Where in the periodic table is this element situated?
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Analyze Physical Data:**
> >    * High melting point ($1455^\\\\circ\\\\text{C}$) and high density ($8.90\\\\text{ g/cm}^3$) rule out Group I alkali metals (which have melting points below $185^\\\\circ\\\\text{C}$ and densities around $1\\\\text{ g/cm}^3$) and non-metals.
> > 2. **Analyze Chemical Data:**
> >    * It forms a **green chloride** (colored compound). Group I, II, and III metals always form white/colorless solid compounds.
> > 3. **Conclusion:**
> >    * High melting point, high density, and colored compound formation are definitive signatures of a **transition element** (specifically Nickel, $Ni$, in the central d-block).
    `,
    keyPoints: [
      "The 4 hallmarks: Variable oxidation states, colored compounds, catalytic behavior, complex ion formation.",
      "Cu²⁺ is blue, Fe²⁺ is pale green, Fe³⁺ is brown-orange, Ni²⁺ is green.",
      "Alloys: Steel = Iron + carbon; Stainless steel = Iron + chromium + nickel."
    ]
  }
];


