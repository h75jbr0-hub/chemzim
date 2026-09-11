import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Group I - Alkali Metals";
export const lessonNumber = 2;

export const theoryMarkdown = `
## Group I: The Alkali Metals (Li, Na, K, Rb, Cs)
This lesson covers the characteristic physical and chemical properties of Group I elements, their reactions with air and cold water, down-group trends in melting point, density, and reactivity, and explanations using atomic structure.
`;

// Compact SVG Diagram: Group I Trends (650x260)
const groupITrendsSvg = `
<svg viewBox="0 0 650 260" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgG1Grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
    <marker id="arrowDownG1" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#ef4444" />
    </marker>
    <marker id="arrowDownBlue" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
    </marker>
  </defs>

  <rect width="650" height="260" fill="url(#bgG1Grad)" stroke="#1e293b" stroke-width="2" rx="14" />
  <text x="325" y="24" fill="#f8fafc" font-size="13" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Group I Alkali Metals: Trends Down the Group (Li → Cs)</text>

  <!-- Left Card: Elements & Atomic Radii -->
  <g transform="translate(25, 42)">
    <rect width="285" height="198" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="1.2" />
    <text x="142" y="22" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">1. Down Group Physical Trends</text>

    <!-- Elements stack -->
    <text x="35" y="55" fill="#f8fafc" font-size="9.5" font-weight="bold">Li (Lithium):</text>
    <text x="120" y="55" fill="#94a3b8" font-size="8.5">M.P. 181 °C | Floats on water</text>

    <text x="35" y="85" fill="#f8fafc" font-size="9.5" font-weight="bold">Na (Sodium):</text>
    <text x="120" y="85" fill="#94a3b8" font-size="8.5">M.P. 98 °C | Melts to silvery ball</text>

    <text x="35" y="115" fill="#f8fafc" font-size="9.5" font-weight="bold">K (Potassium):</text>
    <text x="120" y="115" fill="#94a3b8" font-size="8.5">M.P. 63 °C | Lilac flame</text>

    <text x="35" y="145" fill="#f8fafc" font-size="9.5" font-weight="bold">Rb (Rubidium):</text>
    <text x="120" y="145" fill="#f87171" font-size="8.5">M.P. 39 °C | Explosive reaction</text>

    <text x="35" y="175" fill="#f8fafc" font-size="9.5" font-weight="bold">Cs (Caesium):</text>
    <text x="120" y="175" fill="#ef4444" font-size="8.5">M.P. 28 °C | Violent shockwave</text>

    <!-- Down Arrow for M.P. -->
    <line x1="260" y1="50" x2="260" y2="175" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrowDownBlue)" />
    <text x="250" y="115" fill="#38bdf8" font-size="8" font-weight="bold" transform="rotate(-90 250 115)" text-anchor="middle">M.P. Decreases ↓</text>
  </g>

  <!-- Right Card: Chemical Reactivity & Explanation -->
  <g transform="translate(340, 42)">
    <rect width="285" height="198" rx="10" fill="#0f172a" stroke="#ef4444" stroke-width="1.2" />
    <text x="142" y="22" fill="#f87171" font-size="11" font-weight="bold" text-anchor="middle">2. Reactivity &amp; Atomic Explanation</text>

    <rect x="15" y="40" width="255" height="60" rx="6" fill="#1e293b" stroke="#334155" />
    <text x="25" y="56" fill="#fde047" font-size="9" font-weight="bold">Reactivity INCREASES down Group I:</text>
    <text x="25" y="72" fill="#cbd5e1" font-size="8">• Li: steady fizzing</text>
    <text x="25" y="86" fill="#cbd5e1" font-size="8">• Na: vigorous fizzing, yellow flame</text>
    <text x="135" y="86" fill="#c084fc" font-size="8">• K: bursts into lilac flame</text>

    <rect x="15" y="110" width="255" height="75" rx="6" fill="#1e293b" stroke="#334155" />
    <text x="25" y="126" fill="#38bdf8" font-size="9" font-weight="bold">Why does reactivity increase?</text>
    <text x="25" y="142" fill="#cbd5e1" font-size="8">1. Atoms have more electron shells down the group.</text>
    <text x="25" y="156" fill="#cbd5e1" font-size="8">2. Outer electron is farther from positive nucleus.</text>
    <text x="25" y="170" fill="#cbd5e1" font-size="8">3. Weaker attraction → valence e⁻ is lost more easily.</text>
  </g>
</svg>
`;

export const lessonParts: LessonPart[] = [
  {
    id: 'ci-u8-l2-part1',
    title: 'Physical & Chemical Properties of Alkali Metals',
    type: 'text',
    content: `
> [!NOTE]
> ### 🧼 What are Alkali Metals?
> The elements in **Group I** of the periodic table are known as the **Alkali Metals**: Lithium ($Li$), Sodium ($Na$), Potassium ($K$), Rubidium ($Rb$), Caesium ($Cs$), and Francium ($Fr$).
>
> * **Physical Properties (Different from typical transition metals):**
>   1. **Softness:** Soft enough to be easily sliced with a laboratory knife (revealing a shiny surface that quickly tarnishes in air).
>   2. **Low Melting & Boiling Points:** Much lower melting points than ordinary metals (e.g. $K$ melts at $63^\\\\circ\\\\text{C}$, $Cs$ melts at $28^\\\\circ\\\\text{C}$).
>   3. **Low Densities:** Very low density ($Li, Na, K$ are all less dense than water and float on its surface).
>   4. **Electrical & Thermal Conductivity:** Excellent conductors of electricity and heat.

> [!BOX]
> ### 📊 Group I Trends Overview
>
> ${svgToken(groupITrendsSvg)}

> [!IMPORTANT]
> ### 🧪 Chemical Reactions of Group I Metals
> All alkali metals have **1 valence electron** in their outer shell and vigorously lose this electron to form stable **$+1$ ions**:
> 
> 1. **Reaction with Air (Oxygen):**
>    * They tarnish rapidly when exposed to air, forming a dull white metal oxide coating:
>      $$4Na(s) + O_2(g) \\\\rightarrow 2Na_2O(s)$$
>    * **Storage:** Stored under **mineral oil** to completely prevent contact with atmospheric oxygen and water vapour.
> 
> 2. **Reaction with Cold Water:**
>    * React vigorously to produce a metal hydroxide solution and hydrogen gas:
>      $$2M(s) + 2H_2O(l) \\\\rightarrow 2MOH(aq) + H_2(g)$$
>    * The resulting solutions are strongly alkaline ($\\\\text{pH} > 13$), turning universal indicator purple.
>    * **Observations:**
>      * **Lithium ($Li$):** Floats, fizzes steadily, moves slowly across the surface, dissolves.
>      * **Sodium ($Na$):** Floats, melts into a silvery sphere due to high reaction heat, dashes rapidly across the surface, produces yellow-orange sparks.
>      * **Potassium ($K$):** Reacts vigorously, immediately ignites with a characteristic **lilac flame**, crackles and finishes with a small pop.
    `,
    keyPoints: [
      "Group I metals are soft, have low densities, and low melting points.",
      "Reactions with water produce hydrogen gas and a strongly alkaline metal hydroxide (MOH).",
      "They are stored under mineral oil to prevent reaction with air and water."
    ]
  },
  {
    id: 'ci-u8-l2-part2',
    title: 'Trends Down Group I & Cambridge Exam Questions',
    type: 'text',
    content: `
> [!TIP]
> ### 📉 Trends Down Group I (Lithium to Caesium)
> 1. **Melting and Boiling Points DECREASE down the group:**
>    * As atomic radius increases, the metallic bond (attraction between positive metal ions and delocalised electrons) weakens.
> 2. **Density generally INCREASES down the group:**
>    * Atomic mass increases faster than atomic volume.
> 3. **Reactivity dramatically INCREASES down the group:**
>    * To react, the metal atom must lose its single valence electron.
>    * Down the group, atoms have **more occupied electron shells**, increasing atomic radius and electron shielding.
>    * The valence electron is situated **further from the positive attraction of the nucleus** and is held less tightly.
>    * Therefore, less energy is required to remove the electron $\\\\implies$ **reactivity increases**.

> [!EXAMPLE]
> #### 📝 Cambridge Exam Worked Example: Predicting Properties of Rubidium (Rb)
> **Question:** The table shows properties of some Group I alkali metals:
> * Lithium: Melting point $181^\\\\circ\\\\text{C}$, moderately soft, steady effervescence with water.
> * Sodium: Melting point $98^\\\\circ\\\\text{C}$, soft, vigorous effervescence.
> * Potassium: Melting point $63^\\\\circ\\\\text{C}$, very soft, lilac flame with water.
> 
> Predict the melting point, softness, and reaction with water for **rubidium ($Rb$)**.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Melting Point Prediction:**
> >    * Melting points decrease down the group: $181 \\\\rightarrow 98 \\\\rightarrow 63^\\\\circ\\\\text{C}$.
> >    * Rubidium is below potassium, so its melting point must be **below $63^\\\\circ\\\\text{C}$** (actual: $39^\\\\circ\\\\text{C}$).
> > 2. **Hardness Prediction:**
> >    * Hardness decreases down the group. Rubidium will be **extremely soft / softer than potassium**.
> > 3. **Reaction with Water:**
> >    * Reactivity increases down the group. Rubidium will react **explosively / violently with cold water**, producing a shockwave.
    `,
    keyPoints: [
      "Down Group I: Melting points decrease, density increases, reactivity increases.",
      "Reactivity increases because the outer electron is further from the nucleus and lost more easily.",
      "Rubidium and caesium react violently and explosively with cold water."
    ]
  }
];


