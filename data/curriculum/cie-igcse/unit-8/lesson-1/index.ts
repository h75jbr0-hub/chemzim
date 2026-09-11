import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "The Periodic Table: Arrangement & Periodic Trends";
export const lessonNumber = 1;

export const theoryMarkdown = `
## The Periodic Table: Arrangement of Elements & Periodic Trends
This lesson covers the organization of the Periodic Table in order of increasing atomic (proton) number, the meaning of periods (shells) and groups (valence electrons), the metallic/non-metallic boundary, why hydrogen sits alone, and general periodic trends.
`;

// Compact SVG Diagram: Periodic Table Architecture & Trends (650x260)
const periodicTableSvg = `
<svg viewBox="0 0 650 260" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgPtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
    <marker id="arrowTrend" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
    </marker>
    <marker id="arrowGold" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#fbbf24" />
    </marker>
  </defs>

  <rect width="650" height="260" fill="url(#bgPtGrad)" stroke="#1e293b" stroke-width="2" rx="14" />
  <text x="325" y="24" fill="#f8fafc" font-size="13" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Architecture of the Modern Periodic Table (Cambridge 0620)</text>

  <!-- Left: Outline Representation -->
  <g transform="translate(25, 42)">
    <rect width="330" height="198" rx="10" fill="#0f172a" stroke="#334155" stroke-width="1.2" />

    <!-- Hydrogen alone -->
    <rect x="25" y="25" width="22" height="22" rx="3" fill="#38bdf8" opacity="0.3" stroke="#38bdf8" stroke-dasharray="2 2" />
    <text x="36" y="40" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">H</text>

    <!-- Helium -->
    <rect x="285" y="25" width="22" height="22" rx="3" fill="#a855f7" opacity="0.3" stroke="#a855f7" />
    <text x="296" y="40" fill="#c084fc" font-size="10" font-weight="bold" text-anchor="middle">He</text>

    <!-- Group 1 & 2 (s-block) -->
    <rect x="25" y="55" width="48" height="115" rx="4" fill="#3b82f6" opacity="0.25" stroke="#3b82f6" />
    <text x="49" y="105" fill="#60a5fa" font-size="9" font-weight="bold" text-anchor="middle">Groups</text>
    <text x="49" y="120" fill="#60a5fa" font-size="9" font-weight="bold" text-anchor="middle">I &amp; II</text>

    <!-- Transition Block (d-block) -->
    <rect x="78" y="90" width="130" height="80" rx="4" fill="#eab308" opacity="0.25" stroke="#eab308" />
    <text x="143" y="130" fill="#fde047" font-size="9" font-weight="bold" text-anchor="middle">Transition Elements</text>

    <!-- Non-metals & p-block -->
    <rect x="213" y="55" width="70" height="115" rx="4" fill="#10b981" opacity="0.25" stroke="#10b981" />
    <text x="248" y="115" fill="#34d399" font-size="8.5" font-weight="bold" text-anchor="middle">Groups III-VII</text>

    <!-- Noble gases -->
    <rect x="285" y="55" width="22" height="115" rx="4" fill="#a855f7" opacity="0.25" stroke="#a855f7" />
    <text x="296" y="115" fill="#c084fc" font-size="8" font-weight="bold" transform="rotate(-90 296 115)" text-anchor="middle">Group VIII (0)</text>

    <!-- Zig-zag line separating metals from non-metals -->
    <path d="M 213 55 L 213 80 L 235 80 L 235 110 L 255 110 L 255 140 L 275 140" fill="none" stroke="#ef4444" stroke-width="2.5" />
    <text x="210" y="185" fill="#ef4444" font-size="8" font-weight="bold">Zig-zag Line (Border)</text>
  </g>

  <!-- Right: Periodic Trends & Rules -->
  <g transform="translate(370, 42)">
    <rect width="255" height="198" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="1.2" />
    <text x="127" y="22" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">Key Trends &amp; Rules</text>

    <!-- Across Period -->
    <rect x="15" y="38" width="225" height="42" rx="5" fill="#1e293b" />
    <line x1="25" y1="52" x2="225" y2="52" stroke="#38bdf8" stroke-width="1.8" marker-end="url(#arrowTrend)" />
    <text x="125" y="47" fill="#93c5fd" font-size="8.5" font-weight="bold" text-anchor="middle">Across a Period (Left to Right)</text>
    <text x="125" y="70" fill="#cbd5e1" font-size="8" text-anchor="middle">Metallic character decreases → Non-metallic increases</text>

    <!-- Down Group -->
    <rect x="15" y="86" width="225" height="42" rx="5" fill="#1e293b" />
    <line x1="25" y1="100" x2="25" y2="122" stroke="#fbbf24" stroke-width="1.8" marker-end="url(#arrowGold)" />
    <text x="125" y="100" fill="#fde047" font-size="8.5" font-weight="bold" text-anchor="middle">Down any Group</text>
    <text x="125" y="118" fill="#cbd5e1" font-size="8" text-anchor="middle">Metallic character increases (easier to lose e⁻)</text>

    <!-- Group/Period Definition -->
    <rect x="15" y="134" width="225" height="52" rx="5" fill="#1e293b" />
    <text x="25" y="150" fill="#a7f3d0" font-size="8.5">• Group number = number of valence e⁻</text>
    <text x="25" y="165" fill="#a7f3d0" font-size="8.5">• Period number = number of electron shells</text>
    <text x="25" y="180" fill="#a7f3d0" font-size="8.5">• Elements in same group share chemical properties</text>
  </g>
</svg>
`;

export const lessonParts: LessonPart[] = [
  {
    id: 'ci-u8-l1-part1',
    title: 'Organization of the Periodic Table',
    type: 'text',
    content: `
> [!NOTE]
> ### 📖 What is the Periodic Table?
> The **Periodic Table** is the systematic arrangement of all known chemical elements in order of **increasing atomic (proton) number**.
> * **Periods (Horizontal Rows):**
>   * There are **7 periods**.
>   * The **period number** indicates the total number of occupied **electron shells** in an atom (e.g. Sodium with configuration 2,8,1 has 3 shells $\\\\implies$ Period 3).
> * **Groups (Vertical Columns):**
>   * There are **8 main groups** (numbered I to VIII or 0).
>   * The **group number** corresponds to the number of **outer-shell (valence) electrons** (e.g. Chlorine with configuration 2,8,7 has 7 outer electrons $\\\\implies$ Group VII).
>   * **Key Rule:** Elements in the **same group have similar chemical properties** because they possess the exact same number of valence electrons.

> [!BOX]
> ### 📊 Periodic Table Architecture
>
> ${svgToken(periodicTableSvg)}

> [!IMPORTANT]
> ### ⚡ Why Does Hydrogen Sit Alone?
> Hydrogen ($H$) is placed centrally or separated at the top of the table because it displays unique dual properties:
> 1. It has **1 outer-shell electron** and can lose it to form a positive ion ($H^+$), similar to Group I alkali metals.
> 2. However, it is a **colorless diatomic non-metal gas ($H_2$)** that forms covalent bonds with non-metals and can gain an electron to form hydride ($H^-$), behaving like Group VII halogens.

> [!TIP]
> ### 🧱 Metals vs. Non-Metals & The Zig-Zag Line
> * The **heavy zig-zag dividing line** on the periodic table cleanly separates:
>   * **Metals:** Situated on the **left and center** of the table (over 75% of elements).
>   * **Non-metals:** Situated on the **upper right** side of the table (plus hydrogen).
>   * Elements bordering the zig-zag line (such as Silicon, Germanium, Arsenic) are **metalloids** displaying intermediate properties.
    `,
    keyPoints: [
      "Elements are ordered by increasing proton (atomic) number.",
      "Period number = number of occupied electron shells.",
      "Group number = number of outer-shell valence electrons.",
      "Elements in the same group react similarly because they have the same number of valence electrons."
    ]
  },
  {
    id: 'ci-u8-l1-part2',
    title: 'Valency, Ionic Charges & Periodic Trends',
    type: 'text',
    content: `
> [!IMPORTANT]
> ### 📋 Group Valence & Charge Patterns across the Periodic Table
>
> | Group | Group I | Group II | Group III | Group IV | Group V | Group VI | Group VII | Group VIII (0) |
> | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
> | **Valence Electrons** | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 (He: 2) |
> | **Valency** | 1 | 2 | 3 | 4 | 3 | 2 | 1 | 0 |
> | **Oxidation Number** | +1 | +2 | +3 | +4 or -4 | -3 | -2 | -1 | 0 |
> | **Ionic Charge** | $+1$ | $+2$ | $+3$ | (shares $e^-$) | $-3$ | $-2$ | $-1$ | Does not form ions |
> | **Electron Behavior** | Lose $1e^-$ | Lose $2e^-$ | Lose $3e^-$ | Share $4e^-$ | Gain/Share $3e^-$ | Gain/Share $2e^-$ | Gain/Share $1e^-$ | Stable octet |

> [!NOTE]
> ### 📈 Key Periodic Trends
> 1. **Across a Period (Left to Right):**
>    * **Metallic character decreases**, and **non-metallic character increases**.
>    * Elements shift from forming basic metal oxides to acidic non-metal oxides.
> 2. **Down a Group:**
>    * **Metallic character increases** as atomic radius expands and valence electrons are further from the nucleus, making them easier to lose.

> [!EXAMPLE]
> #### 📝 Cambridge Exam Worked Example: Electronic Structure Deduction
> **Question:** An element X has atomic number 19.
> 1. Deduce its electron configuration.
> 2. Identify its period and group.
> 3. Predict whether element X is a metal or a non-metal, and describe its hardness and reaction with water.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Electron Configuration:**
> >    * With 19 electrons: 2 in shell 1, 8 in shell 2, 8 in shell 3, 1 in shell 4 $\\\\implies$ **2,8,8,1**.
> > 2. **Period and Group:**
> >    * 4 shells $\\\\implies$ **Period 4**.
> >    * 1 valence electron $\\\\implies$ **Group I**.
> > 3. **Properties:**
> >    * Being in Group I (Potassium, $K$), it is a **soft, low-density alkali metal that can be easily cut with a knife** and **reacts vigorously/explosively with cold water** producing hydrogen gas and an alkaline solution of potassium hydroxide ($KOH$).
    `,
    keyPoints: [
      "Group I, II, III metals lose electrons to form +1, +2, +3 cations.",
      "Group V, VI, VII non-metals gain electrons to form -3, -2, -1 anions.",
      "Metallic character decreases across a period and increases down a group."
    ]
  }
];


