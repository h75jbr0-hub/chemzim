import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Group VII - Halogens";
export const lessonNumber = 3;

export const theoryMarkdown = `
## Group VII: The Halogens (F, Cl, Br, I, At)
This lesson covers the diatomic nature, physical states, colors, toxicities, down-group trends in reactivity and density, halogen displacement reactions, and explanations based on atomic size and electron attraction.
`;

// Compact SVG Diagram: Halogen States, Colors & Reactivity Trend (650x260)
const halogensSvg = `
<svg viewBox="0 0 650 260" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgG7Grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
    <marker id="arrowDownG7" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#f59e0b" />
    </marker>
    <marker id="arrowUpReactivity" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#10b981" />
    </marker>
  </defs>

  <rect width="650" height="260" fill="url(#bgG7Grad)" stroke="#1e293b" stroke-width="2" rx="14" />
  <text x="325" y="24" fill="#f8fafc" font-size="13" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Group VII Halogens: Colors, States at r.t.p. &amp; Reactivity</text>

  <!-- Left Card: Halogen Properties & Colors -->
  <g transform="translate(25, 42)">
    <rect width="310" height="198" rx="10" fill="#0f172a" stroke="#f59e0b" stroke-width="1.2" />
    <text x="155" y="20" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">Colors and States at Room Temperature (r.t.p.)</text>

    <!-- Fluorine -->
    <rect x="15" y="32" width="280" height="34" rx="5" fill="#1e293b" />
    <circle cx="35" cy="49" r="8" fill="#fef08a" />
    <text x="55" y="46" fill="#fef08a" font-size="9" font-weight="bold">Fluorine (F₂):</text>
    <text x="135" y="46" fill="#cbd5e1" font-size="8.5">Pale yellow gas</text>
    <text x="55" y="59" fill="#94a3b8" font-size="7.5">Most reactive, poisonous</text>

    <!-- Chlorine -->
    <rect x="15" y="70" width="280" height="34" rx="5" fill="#1e293b" />
    <circle cx="35" cy="87" r="8" fill="#86efac" />
    <text x="55" y="84" fill="#86efac" font-size="9" font-weight="bold">Chlorine (Cl₂):</text>
    <text x="135" y="84" fill="#cbd5e1" font-size="8.5">Yellow-green gas</text>
    <text x="55" y="97" fill="#94a3b8" font-size="7.5">Dense, suffocating toxic gas</text>

    <!-- Bromine -->
    <rect x="15" y="108" width="280" height="34" rx="5" fill="#1e293b" />
    <circle cx="35" cy="125" r="8" fill="#ea580c" />
    <text x="55" y="122" fill="#fb923c" font-size="9" font-weight="bold">Bromine (Br₂):</text>
    <text x="135" y="122" fill="#cbd5e1" font-size="8.5">Red-brown liquid</text>
    <text x="55" y="135" fill="#94a3b8" font-size="7.5">Volatile, gives orange vapour</text>

    <!-- Iodine -->
    <rect x="15" y="146" width="280" height="42" rx="5" fill="#1e293b" />
    <circle cx="35" cy="167" r="8" fill="#64748b" stroke="#a855f7" stroke-width="1.5" />
    <text x="55" y="160" fill="#c084fc" font-size="9" font-weight="bold">Iodine (I₂):</text>
    <text x="135" y="160" fill="#cbd5e1" font-size="8.5">Grey-black shiny solid</text>
    <text x="55" y="174" fill="#94a3b8" font-size="7.5">Sublimes on heating to purple vapour</text>
  </g>

  <!-- Right Card: Trends & Displacement Reactions -->
  <g transform="translate(355, 42)">
    <rect width="270" height="198" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="1.2" />
    <text x="135" y="20" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">Trends &amp; Displacement Reactions</text>

    <!-- Reactivity Rule -->
    <rect x="12" y="32" width="245" height="52" rx="5" fill="#1e293b" />
    <line x1="25" y1="74" x2="25" y2="42" stroke="#10b981" stroke-width="2" marker-end="url(#arrowUpReactivity)" />
    <text x="40" y="48" fill="#34d399" font-size="8.5" font-weight="bold">Reactivity INCREASES Upwards (F &gt; Cl &gt; Br &gt; I)</text>
    <text x="40" y="62" fill="#cbd5e1" font-size="7.5">Smaller atom has stronger nucleus attraction</text>
    <text x="40" y="74" fill="#cbd5e1" font-size="7.5">to pull in the 1 incoming valence electron</text>

    <!-- Down Trends -->
    <rect x="12" y="90" width="245" height="42" rx="5" fill="#1e293b" />
    <text x="20" y="105" fill="#fbbf24" font-size="8.5" font-weight="bold">Down Group VII:</text>
    <text x="20" y="120" fill="#cbd5e1" font-size="8">• Color becomes darker (yellow → green → brown → black)</text>
    <text x="20" y="130" fill="#cbd5e1" font-size="8">• M.P., B.P., and density all INCREASE</text>

    <!-- Displacement Equation Box -->
    <rect x="12" y="138" width="245" height="50" rx="5" fill="#0284c7" opacity="0.2" stroke="#0284c7" />
    <text x="135" y="153" fill="#38bdf8" font-size="8" font-weight="bold" text-anchor="middle">Displacement Rule: More reactive halogen displaces less</text>
    <text x="135" y="170" fill="#f8fafc" font-size="8.5" font-weight="bold" text-anchor="middle">Cl₂(aq) + 2NaBr(aq) → 2NaCl(aq) + Br₂(aq)</text>
    <text x="135" y="182" fill="#fb923c" font-size="7.5" text-anchor="middle">(Colorless solution turns orange-brown)</text>
  </g>
</svg>
`;

export const lessonParts: LessonPart[] = [
  {
    id: 'ci-u8-l3-part1',
    title: 'Physical Properties, Colors & States of Halogens',
    type: 'text',
    content: `
> [!NOTE]
> ### 🧪 What are Halogens?
> The elements in **Group VII** of the periodic table are known as the **Halogens**: Fluorine ($F$), Chlorine ($Cl$), Bromine ($Br$), Iodine ($I$), and Astatine ($At$).
> * **Key General Characteristics:**
>   1. **Diatomic Non-Metals:** All exist naturally as covalent diatomic molecules: $F_2$, $Cl_2$, $Br_2$, $I_2$.
>   2. **Toxic & Corrosive:** Highly poisonous vapours; handle only in a fume cupboard.
>   3. **Poor Conductors:** Do not conduct heat or electricity.

> [!BOX]
> ### 📊 Colors and Physical States at Room Temperature (r.t.p.)
>
> ${svgToken(halogensSvg)}
>
> | Element | Formula | State at r.t.p. | Color at Room Temperature | Vapor / Solution Color |
> | :--- | :--- | :--- | :--- | :--- |
> | **Fluorine** | $F_2$ | Gas | Pale yellow | Pale yellow |
> | **Chlorine** | $Cl_2$ | Gas | Yellow-green | Pale green-yellow solution in water |
> | **Bromine** | $Br_2$ | Liquid | Red-brown | Orange-brown vapour &amp; orange aqueous solution |
> | **Iodine** | $I_2$ | Solid | Grey-black shiny crystals | Sublimes to **purple vapour**; brown in water/KI |
> | **Astatine** | $At_2$ | Solid | Black solid | Radioactive |

> [!IMPORTANT]
> ### 📈 Down-Group Trends in Group VII
> As you go down Group VII from Fluorine to Iodine:
> 1. **Color gets darker:** From pale yellow $\\\\rightarrow$ yellow-green $\\\\rightarrow$ red-brown $\\\\rightarrow$ black.
> 2. **Melting and Boiling Points INCREASE:** Intermolecular attraction (van der Waals / London dispersion forces) strengthens as molecule size and number of electrons increase.
> 3. **Density INCREASES.**
> 4. **State transitions from gas $\\\\rightarrow$ liquid $\\\\rightarrow$ solid.**
    `,
    keyPoints: [
      "Halogens are diatomic non-metals (F₂, Cl₂, Br₂, I₂).",
      "Colors: F₂ (pale yellow gas), Cl₂ (yellow-green gas), Br₂ (red-brown liquid), I₂ (grey-black solid).",
      "On heating, solid iodine sublimes directly into a purple vapour.",
      "Melting point and density increase down the group."
    ]
  },
  {
    id: 'ci-u8-l3-part2',
    title: 'Reactivity Trend & Halogen Displacement Reactions',
    type: 'text',
    content: `
> [!IMPORTANT]
> ### ⚡ Reactivity Trend in Group VII (DECREASES Down the Group)
> * Unlike Group I metals, **reactivity in Group VII DECREASES down the group** ($F_2 > Cl_2 > Br_2 > I_2$).
> * **Why does reactivity decrease?**
>   * A halogen reacts by **gaining 1 electron** into its valence shell to form a stable halide ion with a $-1$ charge ($X + e^- \\\\rightarrow X^-$).
>   * Down the group, atoms have **more electron shells**, which increases atomic radius and shielding.
>   * The positive nucleus is further away from the incoming electron, weakening the electrostatic attraction needed to pull the electron in.
>   * Therefore, smaller halogen atoms (like $F$ and $Cl$) attract an incoming electron much more strongly than larger atoms (like $I$).

> [!TIP]
> ### 🔄 Halogen Displacement Reactions
> A **more reactive halogen will displace a less reactive halogen** from an aqueous solution of its halide salt:
> 
> 1. **Chlorine with Potassium Bromide:**
>    $$Cl_2(aq) + 2KBr(aq) \\\\rightarrow 2KCl(aq) + Br_2(aq)$$
>    * Chlorine is more reactive than bromine and displaces it.
>    * **Observation:** The colorless solution turns **orange-brown** due to the liberation of aqueous bromine ($Br_2$).
> 
> 2. **Chlorine with Potassium Iodide:**
>    $$Cl_2(aq) + 2KI(aq) \\\\rightarrow 2KCl(aq) + I_2(aq)$$
>    * **Observation:** The colorless solution turns **red-brown / dark brown** (liberated $I_2$).
> 
> 3. **Bromine with Potassium Chloride:**
>    $$Br_2(aq) + KCl(aq) \\\\rightarrow \\\\text{No Reaction}$$
>    * Bromine is less reactive than chlorine, so no displacement occurs.

> [!EXAMPLE]
> #### 📝 Cambridge Exam Worked Example: Predicting Properties of Element Below Iodine
> **Question:** Element X is below iodine in Group VII of the periodic table.
> Which row correctly predicts the physical state of element X at room temperature and its reactivity compared to iodine?
> 
> | | Physical State at r.t.p. | Reactivity compared to Iodine |
> | :--- | :--- | :--- |
> | **A** | Solid | Less reactive |
> | **B** | Solid | More reactive |
> | **C** | Gas | More reactive |
> | **D** | Gas | Less reactive |
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Predict Physical State:**
> >    * Iodine is already a solid at room temperature. Melting and boiling points increase down the group. Therefore, element X must be a **solid**.
> > 2. **Predict Reactivity:**
> >    * Halogen reactivity decreases down the group. Since element X is below iodine, it must be **less reactive than iodine**.
> > 3. **Conclusion:** **A** is the correct answer.
    `,
    keyPoints: [
      "Reactivity decreases down Group VII because larger atoms have weaker attraction for an incoming electron.",
      "A more reactive halogen displaces a less reactive halide ion from solution.",
      "Cl₂ displaces Br⁻ to form orange bromine, and displaces I⁻ to form brown iodine."
    ]
  }
];


