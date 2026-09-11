import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Alloys & Their Properties";
export const lessonNumber = 5;

export const theoryMarkdown = `
## Alloys & Their Properties
This lesson covers the definition and composition of alloys, the structural reason why alloys are harder and stronger than pure metals (atomic size lattice distortion preventing layers from sliding), and specific industrial alloys including brass, bronze, mild steel, stainless steel, and nichrome.
`;

// Compact SVG Diagram: Pure Metal vs Alloy Lattice Distortion (650x260)
const alloysLatticeSvg = `
<svg viewBox="0 0 650 260" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgAlloyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
    <radialGradient id="pureAtomGrad" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="100%" stop-color="#0284c7" />
    </radialGradient>
    <radialGradient id="alloyAtomGrad" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#f59e0b" />
      <stop offset="100%" stop-color="#b45309" />
    </radialGradient>
    <marker id="forceArrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#ef4444" />
    </marker>
  </defs>

  <rect width="650" height="260" fill="url(#bgAlloyGrad)" stroke="#1e293b" stroke-width="2" rx="14" />
  <text x="325" y="24" fill="#f8fafc" font-size="13" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Why Alloys Are Harder: Atomic Lattice Distortion</text>

  <!-- Left: Pure Metal (Regular Layers Slide) -->
  <g transform="translate(25, 42)">
    <rect width="285" height="198" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="1.2" />
    <text x="142" y="22" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">1. Pure Metal (Malleable / Soft)</text>

    <!-- Regular Grid of identical atoms -->
    <g transform="translate(35, 45)">
      <!-- Row 1 -->
      <circle cx="20" cy="18" r="14" fill="url(#pureAtomGrad)" />
      <circle cx="56" cy="18" r="14" fill="url(#pureAtomGrad)" />
      <circle cx="92" cy="18" r="14" fill="url(#pureAtomGrad)" />
      <circle cx="128" cy="18" r="14" fill="url(#pureAtomGrad)" />
      <circle cx="164" cy="18" r="14" fill="url(#pureAtomGrad)" />
      <circle cx="200" cy="18" r="14" fill="url(#pureAtomGrad)" />

      <!-- Row 2 -->
      <circle cx="20" cy="50" r="14" fill="url(#pureAtomGrad)" />
      <circle cx="56" cy="50" r="14" fill="url(#pureAtomGrad)" />
      <circle cx="92" cy="50" r="14" fill="url(#pureAtomGrad)" />
      <circle cx="128" cy="50" r="14" fill="url(#pureAtomGrad)" />
      <circle cx="164" cy="50" r="14" fill="url(#pureAtomGrad)" />
      <circle cx="200" cy="50" r="14" fill="url(#pureAtomGrad)" />

      <!-- Row 3 -->
      <circle cx="20" cy="82" r="14" fill="url(#pureAtomGrad)" />
      <circle cx="56" cy="82" r="14" fill="url(#pureAtomGrad)" />
      <circle cx="92" cy="82" r="14" fill="url(#pureAtomGrad)" />
      <circle cx="128" cy="82" r="14" fill="url(#pureAtomGrad)" />
      <circle cx="164" cy="82" r="14" fill="url(#pureAtomGrad)" />
      <circle cx="200" cy="82" r="14" fill="url(#pureAtomGrad)" />

      <!-- Force Arrow & Sliding Layer Indicator -->
      <line x1="20" y1="2" x2="190" y2="2" stroke="#ef4444" stroke-width="2" marker-end="url(#forceArrow)" />
      <text x="105" y="-3" fill="#ef4444" font-size="8.5" font-weight="bold" text-anchor="middle">Force Applied</text>
    </g>

    <text x="142" y="162" fill="#94a3b8" font-size="9" text-anchor="middle">Identical atom sizes form regular layers.</text>
    <text x="142" y="178" fill="#38bdf8" font-size="9.5" font-weight="bold" text-anchor="middle">Layers easily slide over each other.</text>
  </g>

  <!-- Right: Alloy (Distorted Lattice Resists Sliding) -->
  <g transform="translate(340, 42)">
    <rect width="285" height="198" rx="10" fill="#0f172a" stroke="#f59e0b" stroke-width="1.2" />
    <text x="142" y="22" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">2. Alloy (Harder &amp; Stronger)</text>

    <!-- Distorted Grid with different size atoms -->
    <g transform="translate(35, 45)">
      <!-- Row 1 with large foreign atom -->
      <circle cx="20" cy="18" r="14" fill="url(#pureAtomGrad)" />
      <circle cx="56" cy="18" r="14" fill="url(#pureAtomGrad)" />
      <circle cx="96" cy="15" r="19" fill="url(#alloyAtomGrad)" stroke="#fef08a" stroke-width="1" />
      <circle cx="138" cy="18" r="14" fill="url(#pureAtomGrad)" />
      <circle cx="174" cy="18" r="14" fill="url(#pureAtomGrad)" />
      <circle cx="208" cy="20" r="10" fill="#a855f7" />

      <!-- Row 2 distorted by atoms above and below -->
      <circle cx="20" cy="50" r="14" fill="url(#pureAtomGrad)" />
      <circle cx="54" cy="53" r="14" fill="url(#pureAtomGrad)" />
      <circle cx="95" cy="57" r="14" fill="url(#pureAtomGrad)" />
      <circle cx="136" cy="52" r="14" fill="url(#pureAtomGrad)" />
      <circle cx="172" cy="48" r="14" fill="url(#pureAtomGrad)" />
      <circle cx="206" cy="51" r="14" fill="url(#pureAtomGrad)" />

      <!-- Row 3 with another foreign atom -->
      <circle cx="20" cy="82" r="14" fill="url(#pureAtomGrad)" />
      <circle cx="56" cy="82" r="14" fill="url(#pureAtomGrad)" />
      <circle cx="92" cy="84" r="14" fill="url(#pureAtomGrad)" />
      <circle cx="132" cy="86" r="19" fill="url(#alloyAtomGrad)" stroke="#fef08a" stroke-width="1" />
      <circle cx="174" cy="82" r="14" fill="url(#pureAtomGrad)" />
      <circle cx="208" cy="82" r="14" fill="url(#pureAtomGrad)" />

      <!-- Blocked Force Line -->
      <line x1="20" y1="2" x2="80" y2="2" stroke="#ef4444" stroke-width="2" marker-end="url(#forceArrow)" />
      <text x="50" y="-3" fill="#ef4444" font-size="8.5" font-weight="bold" text-anchor="middle">Force</text>
      <!-- X mark showing slip is blocked -->
      <text x="100" y="2" fill="#ef4444" font-size="12" font-weight="bold">✕ Blocked</text>
    </g>

    <text x="142" y="162" fill="#94a3b8" font-size="9" text-anchor="middle">Different sized atoms distort regular layers.</text>
    <text x="142" y="178" fill="#f59e0b" font-size="9.5" font-weight="bold" text-anchor="middle">Layers cannot slide easily → much harder.</text>
  </g>
</svg>
`;

export const lessonParts: LessonPart[] = [
  {
    id: 'ci-u9-l5-part1',
    title: 'What Is an Alloy? & Atomic Structure',
    type: 'text',
    content: `
> [!NOTE]
> ### ⚛️ Definition of an Alloy
> An **alloy** is a **homogeneous mixture of a metal with one or more other elements** (either other metals or non-metals like carbon).
> * Alloys are physical mixtures formed by melting the components together and allowing them to solidify, not chemically bonded compounds.
> * Pure metals are often too soft, ductile, or prone to corrosion for demanding structural engineering. By alloying them, their physical properties are substantially enhanced.

> [!IMPORTANT]
> ### 🔬 Why Alloys Are Harder and Stronger Than Pure Metals
> To achieve full marks in Cambridge IGCSE, your explanation must cite both **atom sizes** and **layer sliding**:
>
> 1. In a **pure metal**, all atoms (positive ions) are of the **exact same size** and arranged in neat, regular, repeating layers.
> 2. When a shearing force or stress is applied, these uniform layers can **easily slide over each other**, making pure metals soft and malleable.
> 3. In an **alloy**, the added elements have **different atomic radii (different sizes)**.
> 4. These different-sized atoms **distort and disrupt the regular layers** of the metallic lattice.
> 5. As a result, it requires much greater force for the layers to **slide over each other**, making alloys significantly **harder and stronger**.

> ${svgToken(alloysLatticeSvg)}
`,
    keyPoints: [
      'An alloy is a mixture of a metal with other elements (metals or non-metals).',
      'In pure metals, identical-sized atoms form regular layers that easily slide under force.',
      'In alloys, atoms of different sizes distort the lattice layers, preventing them from sliding easily and making the alloy harder.'
    ]
  },
  {
    id: 'ci-u9-l5-part2',
    title: 'Key Industrial Alloys & Their Cambridge Uses',
    type: 'text',
    content: `
> [!BOX]
> ### 📋 Key Cambridge Alloys: Composition, Properties & Uses
> You must memorise the elemental compositions and specific applications required by Cambridge 0620:
>
> | Alloy | Main Constituents | Key Properties | Cambridge Uses |
> | :--- | :--- | :--- | :--- |
> | **Brass** | Copper ($Cu$) + Zinc ($Zn$) | Harder than pure copper, golden appearance, resistant to corrosion | Musical instruments, door handles, electrical plug pins, decorative screws |
> | **Bronze** | Copper ($Cu$) + Tin ($Sn$) | Hard, durable, low friction, corrosion-resistant | Medals, statues, ship propellers, bearings |
> | **Mild Steel** | Iron ($Fe$) + Carbon ($C$, ~0.25%) | Strong, high tensile strength, easily welded, ductile | Car body panels, construction girders, bridges, railway lines |
> | **Stainless Steel** | Iron ($Fe$) + Chromium ($Cr$) + Nickel ($Ni$) | Highly resistant to corrosion and rusting, shiny, non-porous | Cutlery, surgical scalpels, chemical reaction vessels, kitchen sinks |
> | **Duralumin** | Aluminium ($Al$) + Copper ($Cu$) + Magnesium ($Mg$) | Very low density combined with high tensile strength | Aircraft body panels, aerospace frames |
> | **Nichrome** | Nickel ($Ni$) + Chromium ($Cr$) | High melting point, resists oxidation even at high temperatures | Heating elements in toasters, electric heaters, hair dryers |

> [!WARNING]
> ### ⚠️ Common Cambridge Exam Distinction
> * **Mild steel vs Stainless steel:**
>   * Mild steel contains iron + carbon. It has immense strength but **will rust** if exposed to oxygen and water without a protective coating.
>   * Stainless steel contains iron + chromium + nickel. Chromium forms an invisible, self-healing oxide layer that makes it **completely rust-proof**.
`,
    keyPoints: [
      'Brass is an alloy of copper and zinc; bronze is an alloy of copper and tin.',
      'Mild steel (iron + carbon) is used in buildings and car bodies; stainless steel (iron + chromium + nickel) does not rust and is used in cutlery.',
      'Nichrome (nickel + chromium) is used for heating elements due to its high melting point and resistance to oxidation.'
    ]
  },
  {
    id: 'ci-u9-l5-part3',
    title: 'Worked Examples: Alloys in Action',
    type: 'text',
    content: `
> [!EXAMPLE]
> #### 📝 Worked Example: Explaining Properties from Lattice Structure
> **Question 1:** Pure copper is an excellent electrical conductor, but it is too soft to be used for heavy-duty plug pins. Explain:
> a) Why brass is harder than pure copper.
> b) Why pure copper is malleable.
>
> **Question 2:** Name an alloy of iron that does not rust, and state the elements added to iron to produce it.
>
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> >
> > 1. **Structural Explanation:**
> >    * a) Brass is an alloy consisting of copper and zinc. Zinc atoms are **different in size** compared to copper atoms. These different-sized atoms **distort the regular layers** of the lattice, making it much harder for the layers to **slide over one another**.
> >    * b) Pure copper consists of identical-sized copper cations arranged in regular layers. When a force is applied, these layers **easily slide over each other** without breaking the metallic bond.
> >
> > 2. **Rust-proof Iron Alloy:**
> >    * The alloy is **stainless steel**.
> >    * The elements added to iron are **chromium** and **nickel**.
`,
    keyPoints: [
      'Pure metals are malleable because uniform layers slide easily without shattering.',
      'Alloys resist deformation because different atom sizes disrupt layer slippage.',
      'Stainless steel contains iron, chromium, and nickel.'
    ]
  }
];


