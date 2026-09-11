import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Properties of Metals";
export const lessonNumber = 1;

export const theoryMarkdown = `
## Structure, Physical & Chemical Properties of Metals
This lesson covers the giant metallic lattice (positive ions in a sea of delocalised electrons), physical properties (electrical conductivity, malleability, sonority), chemical properties (reactions with oxygen, cold water, steam, and dilute acids), and the crucible investigation to determine empirical formula.
`;

// Compact SVG Diagram: Metallic Lattice & Malleability Mechanism (650x260)
const metallicStructureSvg = `
<svg viewBox="0 0 650 260" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgMetalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
    <radialGradient id="ionGrad" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="100%" stop-color="#0284c7" />
    </radialGradient>
    <marker id="arrowForce" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#ef4444" />
    </marker>
  </defs>

  <rect width="650" height="260" fill="url(#bgMetalGrad)" stroke="#1e293b" stroke-width="2" rx="14" />
  <text x="325" y="24" fill="#f8fafc" font-size="13" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Metallic Bonding &amp; Why Metals Are Malleable (Layers Slide)</text>

  <!-- Left Card: Giant Metallic Lattice -->
  <g transform="translate(25, 42)">
    <rect width="285" height="198" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="1.2" />
    <text x="142" y="22" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">1. Giant Metallic Lattice Structure</text>

    <!-- Lattice Ions (4 rows x 5 cols) -->
    <g transform="translate(35, 45)">
      <!-- Row 1 -->
      <circle cx="20" cy="18" r="12" fill="url(#ionGrad)" /><text x="20" y="22" fill="#fff" font-size="9" font-weight="bold" text-anchor="middle">+</text>
      <circle cx="65" cy="18" r="12" fill="url(#ionGrad)" /><text x="65" y="22" fill="#fff" font-size="9" font-weight="bold" text-anchor="middle">+</text>
      <circle cx="110" cy="18" r="12" fill="url(#ionGrad)" /><text x="110" y="22" fill="#fff" font-size="9" font-weight="bold" text-anchor="middle">+</text>
      <circle cx="155" cy="18" r="12" fill="url(#ionGrad)" /><text x="155" y="22" fill="#fff" font-size="9" font-weight="bold" text-anchor="middle">+</text>
      <circle cx="200" cy="18" r="12" fill="url(#ionGrad)" /><text x="200" y="22" fill="#fff" font-size="9" font-weight="bold" text-anchor="middle">+</text>

      <!-- Row 2 -->
      <circle cx="20" cy="50" r="12" fill="url(#ionGrad)" /><text x="20" y="54" fill="#fff" font-size="9" font-weight="bold" text-anchor="middle">+</text>
      <circle cx="65" cy="50" r="12" fill="url(#ionGrad)" /><text x="65" y="54" fill="#fff" font-size="9" font-weight="bold" text-anchor="middle">+</text>
      <circle cx="110" cy="50" r="12" fill="url(#ionGrad)" /><text x="110" y="54" fill="#fff" font-size="9" font-weight="bold" text-anchor="middle">+</text>
      <circle cx="155" cy="50" r="12" fill="url(#ionGrad)" /><text x="155" y="54" fill="#fff" font-size="9" font-weight="bold" text-anchor="middle">+</text>
      <circle cx="200" cy="50" r="12" fill="url(#ionGrad)" /><text x="200" y="54" fill="#fff" font-size="9" font-weight="bold" text-anchor="middle">+</text>

      <!-- Delocalised electrons (dots) -->
      <circle cx="42" cy="18" r="2.5" fill="#fde047" /><text x="42" y="14" fill="#fde047" font-size="6">e⁻</text>
      <circle cx="87" cy="18" r="2.5" fill="#fde047" />
      <circle cx="132" cy="18" r="2.5" fill="#fde047" />
      <circle cx="177" cy="18" r="2.5" fill="#fde047" />
      <circle cx="42" cy="40" r="2.5" fill="#fde047" />
      <circle cx="87" cy="40" r="2.5" fill="#fde047" />
      <circle cx="132" cy="40" r="2.5" fill="#fde047" />
      <circle cx="177" cy="40" r="2.5" fill="#fde047" />
    </g>

    <!-- Explanations -->
    <text x="142" y="145" fill="#f8fafc" font-size="9.5" font-weight="bold" text-anchor="middle">Sea of Mobile Delocalised Electrons</text>
    <text x="142" y="162" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Conducts electricity in SOLID &amp; MOLTEN states</text>
    <text x="142" y="178" fill="#94a3b8" font-size="8" text-anchor="middle">• Delocalised e⁻ drift towards positive terminal</text>
  </g>

  <!-- Right Card: Malleability (Layers Slide) -->
  <g transform="translate(340, 42)">
    <rect width="285" height="198" rx="10" fill="#0f172a" stroke="#10b981" stroke-width="1.2" />
    <text x="142" y="22" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">2. Malleability: Layers Slide Over Each Other</text>

    <!-- Force Arrow -->
    <line x1="20" y1="65" x2="55" y2="65" stroke="#ef4444" stroke-width="2.5" marker-end="url(#arrowForce)" />
    <text x="35" y="55" fill="#ef4444" font-size="8.5" font-weight="bold">Force</text>

    <!-- Slid Layers -->
    <g transform="translate(70, 50)">
      <!-- Top layer shifted right -->
      <circle cx="50" cy="15" r="11" fill="url(#ionGrad)" />
      <circle cx="85" cy="15" r="11" fill="url(#ionGrad)" />
      <circle cx="120" cy="15" r="11" fill="url(#ionGrad)" />
      <circle cx="155" cy="15" r="11" fill="url(#ionGrad)" />

      <!-- Bottom layer unshifted -->
      <circle cx="20" cy="45" r="11" fill="url(#ionGrad)" />
      <circle cx="55" cy="45" r="11" fill="url(#ionGrad)" />
      <circle cx="90" cy="45" r="11" fill="url(#ionGrad)" />
      <circle cx="125" cy="45" r="11" fill="url(#ionGrad)" />
    </g>

    <!-- Explanations -->
    <text x="142" y="135" fill="#34d399" font-size="9.5" font-weight="bold" text-anchor="middle">Why Metals Do NOT Shatter:</text>
    <text x="142" y="152" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Layers of positive ions slide over each other,</text>
    <text x="142" y="166" fill="#cbd5e1" font-size="8.5" text-anchor="middle">while the non-directional sea of electrons</text>
    <text x="142" y="180" fill="#cbd5e1" font-size="8.5" text-anchor="middle">maintains the metallic bond throughout.</text>
  </g>
</svg>
`;

export const lessonParts: LessonPart[] = [
  {
    id: 'ci-u9-l1-part1',
    title: 'Metallic Bonding & Physical Properties',
    type: 'text',
    content: `
> [!NOTE]
> ### 🔩 The Giant Metallic Lattice
> Metals have a **giant 3-dimensional lattice structure** consisting of regular rows of **positive metal cations** surrounded by a **"sea" of free, mobile (delocalised) electrons**.
>
> * **Physical Properties of Metals Explained by Structure:**
>   1. **Electrical Conductivity:**
>      * Excellent conductors in **both solid and molten states**.
>      * **Reason:** The delocalised valence electrons are free to move throughout the metallic structure towards the positive terminal when a voltage is applied.
>   2. **Thermal Conductivity:**
>      * High thermal conductivity due to mobile electrons transferring kinetic energy and rapid vibrations passing through tightly packed cations.
>   3. **Malleability and Ductility:**
>      * **Malleable:** Can be hammered and shaped without breaking.
>      * **Ductile:** Can be drawn out into long wires.
>      * **Reason:** The regular layers of positive ions can **slide over each other** when a force is applied. Because the delocalised sea of electrons is non-directional, it adjusts immediately, holding the lattice together without shattering.
>   4. **High Melting & Boiling Points:**
>      * Strong electrostatic attraction between positive ions and delocalised electrons requires large amounts of thermal energy to overcome (exceptions: Mercury is liquid; Group I metals melt at low temperatures).
>   5. **Sonorous & High Density:**
>      * Make a ringing sound when struck; packed tightly giving high density.

> [!BOX]
> ### 📊 Metallic Bonding & Sliding Layers
>
> ${svgToken(metallicStructureSvg)}
    `,
    keyPoints: [
      "Metallic bond: Electrostatic attraction between positive metal ions and delocalised electrons.",
      "Metals conduct electricity because of free mobile delocalised electrons (both solid and liquid).",
      "Malleable and ductile because regular rows of cations can slide over each other without breaking the metallic bond."
    ]
  },
  {
    id: 'ci-u9-l1-part2',
    title: 'Chemical Reactions of Metals & Crucible Investigation',
    type: 'text',
    content: `
> [!IMPORTANT]
> ### 🧪 General Chemical Reactions of Metals
> 1. **Formation of Cations:** Metals react by **losing valence electrons** to form positive ions (oxidation).
> 2. **Reaction with Oxygen (Air):**
>    $$\\\\text{Metal} + \\\\text{Oxygen} \\\\rightarrow \\\\text{Metal Oxide (basic or amphoteric)}$$
>    * Sodium burns with a **yellow flame** forming white $Na_2O$.
>    * Magnesium burns with an intense **brilliant white flame** forming white powder $MgO$.
>    * Most metal oxides are basic, but **$Al_2O_3$ and $ZnO$ are amphoteric** (react with both acids and bases).
> 3. **Reaction with Cold Water vs. Steam:**
>    * Very reactive metals ($K, Na, Ca$) react with **cold water** to form **metal hydroxides** and hydrogen gas:
>      $$Ca(s) + 2H_2O(l) \\\\rightarrow Ca(OH)_2(aq) + H_2(g)$$
>    * Less reactive metals ($Mg, Zn, Fe$) react slowly with cold water, but vigorously with **steam** to form **metal oxides** and hydrogen gas:
>      $$Mg(s) + H_2O(g) \\\\rightarrow MgO(s) + H_2(g)$$
>      *(In the laboratory, ceramic wool soaked in water is heated to generate steam without liquid water touching the hot metal directly).*
> 4. **Reaction with Dilute Hydrochloric Acid:**
>    * Metals above hydrogen in the reactivity series react to produce a metal chloride salt and hydrogen gas ($Zn + 2HCl \\\\rightarrow ZnCl_2 + H_2$). Metals below hydrogen ($Cu, Ag, Au$) show **no reaction**.

> [!TIP]
> ### 🔬 Cambridge Practical: Determining the Formula of Magnesium Oxide
> 1. Weigh an empty crucible with its lid.
> 2. Add $2\\\\text{ g}$ of magnesium ribbon/granules and reweigh.
> 3. Heat strongly with a Bunsen burner. **Periodically lift the lid slightly** using tongs to allow air/oxygen to enter, but replace it quickly to prevent white $MgO$ smoke escaping.
> 4. Allow the crucible to cool and reweigh.
> 5. Repeat the heating and weighing cycle until a **constant mass** is achieved (ensuring all magnesium has completely reacted).
> 6. Mass of oxygen reacted $= \\\\text{Final mass of metal oxide} - \\\\text{Initial mass of metal}$.
    `,
    keyPoints: [
      "Reaction with cold water yields metal hydroxide + H₂.",
      "Reaction with steam yields metal oxide + H₂.",
      "Al₂O₃ and ZnO are amphoteric oxides (react with acids and bases).",
      "Crucible lid is lifted intermittently to admit air while containing white smoke."
    ]
  }
];


