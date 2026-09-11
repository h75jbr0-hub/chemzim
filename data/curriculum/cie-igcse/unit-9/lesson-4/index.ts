import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Uses of Metals & Corrosion Prevention";
export const lessonNumber = 4;

export const theoryMarkdown = `
## Uses of Metals & Corrosion Prevention
This lesson covers the specific uses of metals (aluminium, copper, zinc, and iron) linked to their physical and chemical properties, the conditions required for the rusting of iron, and methods of rust prevention including barrier methods, galvanising, and sacrificial protection.
`;

// Compact SVG Diagram: Rusting Conditions & Sacrificial Protection Mechanism (650x260)
const corrosionPreventionSvg = `
<svg viewBox="0 0 650 260" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgCorrosionGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
    <linearGradient id="ironGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#94a3b8" />
      <stop offset="100%" stop-color="#475569" />
    </linearGradient>
    <linearGradient id="zincGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="100%" stop-color="#0284c7" />
    </linearGradient>
  </defs>

  <rect width="650" height="260" fill="url(#bgCorrosionGrad)" stroke="#1e293b" stroke-width="2" rx="14" />
  <text x="325" y="24" fill="#f8fafc" font-size="13" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Rusting Investigation &amp; Sacrificial Cathodic Protection</text>

  <!-- Left: Rusting Conditions Experiment (3 Test Tubes) -->
  <g transform="translate(25, 42)">
    <rect width="285" height="198" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="1.2" />
    <text x="142" y="20" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">1. Conditions for Rusting (O₂ + H₂O)</text>

    <!-- Tube 1: Air + Water (Rusts) -->
    <g transform="translate(30, 36)">
      <rect x="0" y="0" width="22" height="110" rx="10" fill="#1e293b" stroke="#64748b" stroke-width="1.5" />
      <rect x="2" y="55" width="18" height="52" rx="8" fill="#0284c7" opacity="0.4" />
      <!-- Iron nail -->
      <line x1="11" y1="40" x2="11" y2="98" stroke="#ea580c" stroke-width="3" stroke-linecap="round" />
      <!-- Rust flakes -->
      <circle cx="11" cy="70" r="4" fill="#f97316" />
      <circle cx="11" cy="90" r="3.5" fill="#ea580c" />
      <text x="11" y="130" fill="#f87171" font-size="9" font-weight="bold" text-anchor="middle">Rusts</text>
      <text x="11" y="142" fill="#94a3b8" font-size="7.5" text-anchor="middle">Air + Water</text>
    </g>

    <!-- Tube 2: Water only (Boiled + Oil layer) -->
    <g transform="translate(105, 36)">
      <rect x="0" y="0" width="22" height="110" rx="10" fill="#1e293b" stroke="#64748b" stroke-width="1.5" />
      <!-- Boiled deoxygenated water -->
      <rect x="2" y="45" width="18" height="62" rx="8" fill="#0284c7" opacity="0.3" />
      <!-- Oil barrier layer -->
      <rect x="2" y="42" width="18" height="8" fill="#eab308" opacity="0.8" />
      <!-- Shiny clean nail -->
      <line x1="11" y1="48" x2="11" y2="98" stroke="#cbd5e1" stroke-width="3" stroke-linecap="round" />
      <text x="11" y="130" fill="#34d399" font-size="9" font-weight="bold" text-anchor="middle">No Rust</text>
      <text x="11" y="142" fill="#94a3b8" font-size="7.5" text-anchor="middle">No Air (Boiled)</text>
    </g>

    <!-- Tube 3: Air only (Anhydrous CaCl2 drying agent) -->
    <g transform="translate(180, 36)">
      <rect x="0" y="0" width="22" height="110" rx="10" fill="#1e293b" stroke="#64748b" stroke-width="1.5" />
      <!-- Rubber bung -->
      <rect x="1" y="0" width="20" height="12" fill="#475569" rx="3" />
      <!-- Drying granules at bottom -->
      <circle cx="8" cy="98" r="2.5" fill="#f8fafc" />
      <circle cx="14" cy="100" r="2.5" fill="#f8fafc" />
      <circle cx="11" cy="94" r="2.5" fill="#f8fafc" />
      <!-- Shiny nail -->
      <line x1="11" y1="25" x2="11" y2="82" stroke="#cbd5e1" stroke-width="3" stroke-linecap="round" />
      <text x="11" y="130" fill="#34d399" font-size="9" font-weight="bold" text-anchor="middle">No Rust</text>
      <text x="11" y="142" fill="#94a3b8" font-size="7.5" text-anchor="middle">Dry Air (CaCl₂)</text>
    </g>
  </g>

  <!-- Right: Sacrificial Zinc Anode Protection -->
  <g transform="translate(340, 42)">
    <rect width="285" height="198" rx="10" fill="#0f172a" stroke="#10b981" stroke-width="1.2" />
    <text x="142" y="20" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle">2. Sacrificial Protection Mechanism</text>

    <!-- Ship Hull / Steel Structure -->
    <g transform="translate(25, 40)">
      <rect x="0" y="0" width="235" height="42" rx="6" fill="url(#ironGrad)" stroke="#64748b" stroke-width="1.5" />
      <text x="117" y="26" fill="#f8fafc" font-size="10" font-weight="bold" text-anchor="middle">Steel Ship Hull / Iron Pipe (Protected)</text>

      <!-- Attached Zinc Sacrificial Anode -->
      <rect x="50" y="48" width="135" height="24" rx="4" fill="url(#zincGrad)" stroke="#38bdf8" stroke-width="1.5" />
      <text x="117" y="64" fill="#042f2e" font-size="9.5" font-weight="bold" text-anchor="middle">Zinc Sacrificial Anode (Zn)</text>

      <!-- Bolts connecting Zn to Steel -->
      <line x1="70" y1="42" x2="70" y2="48" stroke="#f8fafc" stroke-width="3" />
      <line x1="165" y1="42" x2="165" y2="48" stroke="#f8fafc" stroke-width="3" />

      <!-- Electron Flow Arrows (Zn loses electrons to Fe) -->
      <g stroke="#facc15" stroke-width="1.5" fill="none">
        <path d="M 117 48 L 117 42" marker-end="url(#arrowForce)" />
      </g>
      <text x="117" y="94" fill="#fde047" font-size="8.5" font-weight="bold" text-anchor="middle">Electrons flow from Zn to Fe: Zn → Zn²⁺ + 2e⁻</text>
    </g>

    <g transform="translate(20, 148)">
      <rect width="245" height="38" rx="5" fill="#022c22" stroke="#059669" stroke-width="1" />
      <text x="122" y="15" fill="#6ee7b7" font-size="8.5" text-anchor="middle">Zinc is more reactive than iron.</text>
      <text x="122" y="28" fill="#a7f3d0" font-size="8" text-anchor="middle">Zn oxidises sacrificially; iron cannot lose electrons.</text>
    </g>
  </g>
</svg>
`;

export const lessonParts: LessonPart[] = [
  {
    id: 'ci-u9-l4-part1',
    title: 'Uses of Metals Linked to Their Properties',
    type: 'text',
    content: `
> [!NOTE]
> ### 🔍 Specific Uses of Common Metals
> In Cambridge IGCSE, metals are selected for specific applications based directly on their physical and chemical properties:
>
> 1. **Aluminium ($Al$):**
>    * **Aircraft manufacture:** High strength-to-weight ratio and low density.
>    * **Overhead electricity cables:** Low density, excellent electrical conductivity, ductile, and resistant to corrosion. Cables are reinforced with a central **high-tensile steel core** to provide mechanical strength and prevent sagging over long spans.
>    * **Food packaging & cooking foil:** Resistant to corrosion, ductile, non-toxic, and impermeable. Its corrosion resistance is caused by a natural, tenacious, and unreactive oxide layer ($Al_2O_3$) that adheres firmly to the metal surface.
>
> 2. **Copper ($Cu$):**
>    * **Electrical wiring:** Outstanding electrical conductivity and malleability/ductility.
>    * **Cooking utensils & heat exchangers:** High thermal conductivity and unreactive with water and food acids.
>
> 3. **Zinc ($Zn$):**
>    * **Galvanising steel:** Applied as a protective surface layer on iron or steel objects.
>    * **Sacrificial anodes:** Attached in blocks to ship hulls, offshore oil rigs, and buried pipelines.
>    * **Die-casting & battery casings:** Low melting point and forms resilient alloys like brass.

> [!IMPORTANT]
> ### 🛡️ The Protective Aluminium Oxide Layer
> Although aluminium is relatively high in the reactivity series (above zinc and iron), it appears unreactive under ambient conditions.
> * When exposed to air, aluminium rapidly forms an **extremely thin, tough, and impermeable layer of aluminium oxide ($Al_2O_3$)**.
> * This protective oxide film prevents oxygen and water from reaching the underlying metal, effectively stopping further reaction or corrosion.
`,
    keyPoints: [
      'Aluminium is used in aircraft (low density, high strength) and food containers (corrosion-resistant Al2O3 layer).',
      'Overhead power cables use aluminium for conductivity and low density, reinforced with a central steel core for tensile strength.',
      'Copper is used for electrical wiring and cooking utensils due to high electrical and thermal conductivity.'
    ]
  },
  {
    id: 'ci-u9-l4-part2',
    title: 'Corrosion & Rusting of Iron',
    type: 'text',
    content: `
> [!WARNING]
> ### ⚠️ The Chemistry of Rusting
> Corrosion is the gradual chemical breakdown of a metal when it reacts with substances in its environment. When this occurs specifically to iron or steel, it is called **rusting**.
>
> Rust is **hydrated iron(III) oxide**:
> $$\\text{Fe}_2\\text{O}_3 \\cdot x\\text{H}_2\\text{O}$$
>
> **Essential Conditions for Rusting:**
> Iron rusts ONLY when **both oxygen and water** are present simultaneously.
>
> | Environmental Conditions | Will Iron Rust? | Cambridge Reason |
> | :--- | :--- | :--- |
> | **Air + Water** | **YES (Rusts quickly)** | Both $O_2$ and $H_2O$ are present. |
> | **Boiled Water + Oil Layer** | **NO (No rust)** | Boiling drives off dissolved oxygen; oil prevents air from dissolving back. |
> | **Dry Air (Anhydrous $CaCl_2$)** | **NO (No rust)** | Anhydrous calcium chloride absorbs all moisture, so no water is present. |
> | **Salt Solution (Brine / Seawater)** | **YES (Severely accelerated)** | Dissolved ions ($Na^+, Cl^-$) act as an electrolyte, speeding up electron transfer. |

> ${svgToken(corrosionPreventionSvg)}

> [!BOX]
> ### 🔬 The Stepwise Oxidation of Iron
> 1. Iron metal loses electrons (oxidation):
>    $$\\\\text{Fe (s)} \\\\rightarrow \\\\text{Fe}^{2+} \\\\text{(aq)} + 2e^-$$
> 2. Dissolved oxygen and water gain electrons (reduction):
>    $$\\\\text{O}_2 \\\\text{(g)} + 2\\\\text{H}_2\\\\text{O (l)} + 4e^- \\\\rightarrow 4\\\\text{OH}^- \\\\text{(aq)}$$
> 3. Iron(II) hydroxide precipitates and is further oxidised by atmospheric oxygen to yield hydrated iron(III) oxide (brown flakey rust).
`,
    keyPoints: [
      'Rusting requires BOTH oxygen and water; salt or acid accelerates the process by increasing conductivity.',
      'Boiling water expels dissolved oxygen; an oil layer seals it out.',
      'Anhydrous calcium chloride removes water vapour from air in a sealed test tube.'
    ]
  },
  {
    id: 'ci-u9-l4-part3',
    title: 'Rust Prevention: Barrier vs Sacrificial Methods',
    type: 'text',
    content: `
> [!IMPORTANT]
> ### 🛡️ Methods of Rust Prevention
> Rust prevention techniques fall into two major categories:
>
> 1. **Barrier Methods:**
>    * Keep both oxygen and water away from the iron surface.
>    * **Painting:** Car body panels, bridges, and domestic gates. If scratched, rust spreads beneath the paint.
>    * **Oiling / Greasing:** Moving machinery parts, chains, and engine components (where paint would rub off).
>    * **Plastic coating:** Garden furniture, wire fencing, and refrigerator shelves.
>    * **Electroplating:** Coating iron with an unreactive metal like tin (food cans) or chromium (taps, car bumpers).
>
> 2. **Galvanising (Dual Protection):**
>    * Coating iron or steel with a thin layer of **zinc** (by dipping in molten zinc or electroplating).
>    * Works as a physical barrier.
>    * **Crucial exam point:** If the zinc surface is scratched, the exposed iron **still does not rust** because zinc is more reactive than iron and acts sacrificially.
>
> 3. **Sacrificial Protection (Cathodic Protection):**
>    * Blocks of a more reactive metal (such as **zinc** or **magnesium**) are bolted or electrically connected to the steel structure.
>    * Zinc oxidises preferentially by losing electrons:
>      $$\\\\text{Zn (s)} \\\\rightarrow \\\\text{Zn}^{2+} \\\\text{(aq)} + 2e^-$$
>    * The released electrons flow into the iron, keeping iron in its reduced state ($Fe$) and preventing it from forming $Fe^{2+}$ ions.
>    * Sacrificial blocks slowly dissolve and must be periodically replaced.

> [!EXAMPLE]
> #### 📝 Worked Example: Overhead Cables & Rusting on Ships
> **Question 1:** Explain why overhead high-voltage electricity cables are made of aluminium with a steel core rather than pure copper.
>
> **Question 2:** Blocks of zinc are attached to the steel hull of an ocean-going ship. Explain how the zinc prevents the steel hull from rusting even in salty sea water.
>
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> >
> > 1. **Cables Analysis:**
> >    * Aluminium is chosen for the outer conductor because it has a **much lower density** than copper (preventing excessive cable weight) and is a very good electrical conductor.
> >    * Pure aluminium lacks tensile strength and would stretch or snap across pylons; the **central high-tensile steel core provides mechanical strength** to withstand heavy wind and prevent sagging.
> >
> > 2. **Ship Hull Protection:**
> >    * Zinc is **more reactive than iron** in the reactivity series.
> >    * Zinc loses electrons more readily than iron ($Zn \\\\rightarrow Zn^{2+} + 2e^-$).
> >    * Electrons flow to the iron hull, so iron is protected from losing electrons and cannot oxidise to rust.
`,
    keyPoints: [
      'Barrier methods (paint, grease, plastic) prevent contact with water and oxygen; failure of the barrier allows rust to spread.',
      'Galvanising coats iron with zinc, providing both a physical barrier and sacrificial protection if scratched.',
      'Sacrificial protection relies on a more reactive metal (Zn or Mg) losing electrons preferentially to protect iron.'
    ]
  }
];

