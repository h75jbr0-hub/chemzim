import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Redox Reactions";
export const lessonNumber = 5;

export const theoryMarkdown = `
## Oxidation and Reduction (Redox Reactions)
This lesson covers the definitions of oxidation and reduction (in terms of oxygen transfer, hydrogen transfer, electron transfer, and oxidation number changes), identifying oxidising and reducing agents, and official Cambridge chemical tests for redox reactions (acidified potassium manganate(VII) and aqueous potassium iodide).
`;

// Compact SVG Diagram: OIL RIG & Redox Color Tests (650x260)
const redoxSvg = `
<svg viewBox="0 0 650 260" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgRedoxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
  </defs>

  <rect width="650" height="260" fill="url(#bgRedoxGrad)" stroke="#1e293b" stroke-width="2" rx="14" />
  <text x="325" y="24" fill="#f8fafc" font-size="13" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Redox Principles &amp; Cambridge Chemical Color Tests</text>

  <!-- Left Card: OIL RIG & Oxidation Number -->
  <g transform="translate(25, 42)">
    <rect width="285" height="198" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="1.2" />
    <text x="142" y="22" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">1. Definitions of Redox (OIL RIG)</text>

    <!-- Oxidation Box -->
    <rect x="15" y="40" width="255" height="68" rx="6" fill="#1e293b" stroke="#0284c7" />
    <text x="25" y="56" fill="#38bdf8" font-size="10" font-weight="bold">OXIDATION is:</text>
    <text x="25" y="72" fill="#cbd5e1" font-size="8.5">• Loss of electrons (OIL)</text>
    <text x="25" y="86" fill="#cbd5e1" font-size="8.5">• Gain of oxygen / Loss of hydrogen</text>
    <text x="25" y="100" fill="#22c55e" font-size="8.5" font-weight="bold">• INCREASE in oxidation number (e.g. 0 → +2)</text>

    <!-- Reduction Box -->
    <rect x="15" y="118" width="255" height="68" rx="6" fill="#1e293b" stroke="#e11d48" />
    <text x="25" y="134" fill="#f43f5e" font-size="10" font-weight="bold">REDUCTION is:</text>
    <text x="25" y="150" fill="#cbd5e1" font-size="8.5">• Gain of electrons (RIG)</text>
    <text x="25" y="164" fill="#cbd5e1" font-size="8.5">• Loss of oxygen / Gain of hydrogen</text>
    <text x="25" y="178" fill="#f59e0b" font-size="8.5" font-weight="bold">• DECREASE in oxidation number (e.g. +3 → 0)</text>
  </g>

  <!-- Right Card: Chemical Reagents for Redox Testing -->
  <g transform="translate(340, 42)">
    <rect width="285" height="198" rx="10" fill="#0f172a" stroke="#c084fc" stroke-width="1.2" />
    <text x="142" y="22" fill="#c084fc" font-size="11" font-weight="bold" text-anchor="middle">2. Reagents &amp; Color Changes (Tests)</text>

    <!-- Test 1: Acidified KMnO4 -->
    <rect x="15" y="40" width="255" height="70" rx="6" fill="#1e293b" stroke="#7e22ce" />
    <text x="25" y="56" fill="#e879f9" font-size="9.5" font-weight="bold">Acidified KMnO₄ (Oxidising Agent):</text>
    <text x="25" y="72" fill="#cbd5e1" font-size="8.5">• Tests for REDUCING agents (e.g. SO₂, Fe²⁺)</text>
    <text x="25" y="88" fill="#e879f9" font-size="8.5" font-weight="bold">Color change: PURPLE → COLORLESS</text>
    <text x="25" y="102" fill="#94a3b8" font-size="8">(Mn⁺⁷ is reduced to Mn²⁺)</text>

    <!-- Test 2: Aqueous KI -->
    <rect x="15" y="118" width="255" height="70" rx="6" fill="#1e293b" stroke="#b45309" />
    <text x="25" y="134" fill="#fbbf24" font-size="9.5" font-weight="bold">Aqueous KI (Reducing Agent):</text>
    <text x="25" y="150" fill="#cbd5e1" font-size="8.5">• Tests for OXIDISING agents (e.g. Cl₂, H₂O₂)</text>
    <text x="25" y="166" fill="#fbbf24" font-size="8.5" font-weight="bold">Color change: COLORLESS → BROWN</text>
    <text x="25" y="180" fill="#94a3b8" font-size="8">(I⁻ is oxidised to aqueous I₂)</text>
  </g>
</svg>
`;

export const lessonParts: LessonPart[] = [
  {
    id: 'ci-u6-l5-part1',
    title: 'Definitions of Oxidation & Reduction',
    type: 'text',
    content: `
> [!NOTE]
> ### ⚡ Four Ways to Define Redox Reactions
> A **redox reaction** is a reaction in which both oxidation and reduction take place simultaneously.
> 
> | Criterion | Oxidation | Reduction |
> | :--- | :--- | :--- |
> | **Oxygen transfer** | Gain of oxygen | Loss of oxygen |
> | **Hydrogen transfer** | Loss of hydrogen | Gain of hydrogen |
> | **Electron transfer** | **Loss of electrons (OIL)** | **Gain of electrons (RIG)** |
> | **Oxidation state (number)** | **Increase in oxidation state** | **Decrease in oxidation state** |

> [!BOX]
> ### 📊 Redox Framework & Reagents
>
> ${svgToken(redoxSvg)}

> [!IMPORTANT]
> ### 🛡️ Oxidising Agents and Reducing Agents
> * **Oxidising Agent:** A substance that oxidises another substance and is **itself reduced** (gains electrons, oxidation state decreases).
> * **Reducing Agent:** A substance that reduces another substance and is **itself oxidised** (loses electrons, oxidation state increases).
> 
> * **Example:** In the extraction of iron in the blast furnace:
>   $$\\\\text{Fe}_2\\\\text{O}_3(s) + 3\\\\text{CO}(g) \\\\rightarrow 2\\\\text{Fe}(l) + 3\\\\text{CO}_2(g)$$
>   * $\\\\text{Fe}_2\\\\text{O}_3$ loses oxygen $\\\\implies$ it is **reduced**; it acts as the **oxidising agent**.
>   * $\\\\text{CO}$ gains oxygen to form $\\\\text{CO}_2 \\\\implies$ it is **oxidised**; it acts as the **reducing agent**.
    `,
    keyPoints: [
      "OIL RIG: Oxidation Is Loss of electrons, Reduction Is Gain of electrons.",
      "An increase in oxidation number indicates oxidation; a decrease indicates reduction.",
      "An oxidising agent gets reduced; a reducing agent gets oxidised."
    ]
  },
  {
    id: 'ci-u6-l5-part2',
    title: 'Cambridge Chemical Tests for Redox Reagents',
    type: 'text',
    content: `
> [!TIP]
> ### 🧪 1. Test for Reducing Agents: Acidified Potassium Manganate(VII)
> * **Reagent:** Acidified aqueous potassium manganate(VII), $\\\\text{KMnO}_4\\\\text{(aq)}$ (containing $H^+$ and $\\\\text{MnO}_4^-$).
> * **Role:** It is a powerful **oxidising agent**.
> * **Color change:** Changes from **deep purple to colorless**.
> * **Explanation:** The purple manganate(VII) ion ($\\\\text{Mn}^{7+}$) gains electrons from the reducing agent and is reduced to almost colorless manganese(II) ions ($\\\\text{Mn}^{2+}$):
>   $$\\\\text{MnO}_4^-(aq) + 8\\\\text{H}^+(aq) + 5e^- \\\\rightarrow \\\\text{Mn}^{2+}(aq) + 4\\\\text{H}_2\\\\text{O}(l)$$
> * **Application:** Used to test for the presence of sulfur dioxide ($SO_2$) gas or iron(II) ($Fe^{2+}$) ions.

> [!TIP]
> ### 🧪 2. Test for Oxidising Agents: Aqueous Potassium Iodide (KI)
> * **Reagent:** Aqueous potassium iodide, $\\\\text{KI(aq)}$ (providing colorless $I^-$ ions).
> * **Role:** It is a reliable **reducing agent**.
> * **Color change:** Changes from **colorless to red-brown**.
> * **Explanation:** Colorless iodide ions ($I^-$) are oxidised by the unknown oxidising agent into molecular iodine ($I_2$), which dissolves in water to produce a yellow/red-brown solution:
>   $$2\\\\text{I}^-(aq) \\\\rightarrow \\\\text{I}_2(aq) + 2e^-$$
> * If starch indicator is added, the brown color turns **blue-black**.

> [!EXAMPLE]
> #### 📝 Cambridge Exam Worked Example: Redox Deduction
> **Question:** Chlorine gas is bubbled into a colorless solution of potassium bromide:
> $$Cl_2(aq) + 2KBr(aq) \\\\rightarrow 2KCl(aq) + Br_2(aq)$$
> The solution turns orange-brown.
> 1. Explain, in terms of electron transfer, which species is oxidised.
> 2. Identify the oxidising agent in this reaction.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Write the ionic half-equations:**
> >    * For bromide: $2Br^- \\\\rightarrow Br_2 + 2e^-$ (Loss of electrons $\\\\implies$ **Oxidation**).
> >    * Bromide ions ($Br^-$) are oxidised because they lose electrons to form bromine ($Br_2$).
> > 2. **Identify the oxidising agent:**
> >    * Chlorine ($Cl_2$) gains those electrons: $Cl_2 + 2e^- \\\\rightarrow 2Cl^-$ (Gain of electrons $\\\\implies$ **Reduction**).
> >    * Because chlorine accepts electrons from bromide ions and causes them to be oxidised, **chlorine ($Cl_2$) is the oxidising agent**.
    `,
    keyPoints: [
      "Acidified KMnO₄ is an oxidising agent: turns purple → colorless in the presence of reducing agents.",
      "Aqueous KI is a reducing agent: turns colorless → red-brown in the presence of oxidising agents.",
      "Acidified K₂Cr₂O₇ turns from orange to green when reacting with reducing agents (used in breath tests).",
      "In halogen displacement reactions, the more reactive halogen is the oxidising agent."
    ]
  },
  {
    id: 'ci-u6-l5-part3',
    title: 'Oxidation Numbers, Half-Equations & Reduction of CuO',
    type: 'text',
    content: `
> [!IMPORTANT]
> ### 🧮 Formal Rules for Assigning Oxidation States (Numbers)
> Cambridge IGCSE requires calculating oxidation states to identify whether a substance has been oxidised or reduced:
> 1. **Uncombined free elements:** Always have an oxidation state of **0** (e.g. $H_2$, $O_2$, $Fe$, $Cl_2$, $P_4$, $S_8 = 0$).
> 2. **Neutral compounds:** The sum of oxidation numbers of all atoms in a neutral formula equals **0**.
> 3. **Polyatomic ions:** The sum of oxidation numbers equals the **charge of the ion** (e.g. in $SO_4^{2-}$, sum $= -2$; in $NH_4^+$, sum $= +1$).
> 4. **Fixed element rules in compounds:**
>    * **Group 1 metals ($Li, Na, K$):** always **$+1$**
>    * **Group 2 metals ($Mg, Ca, Ba$):** always **$+2$**
>    * **Group 3 metals ($Al$):** always **$+3$**
>    * **Fluorine ($F$):** always **$-1$**
>    * **Hydrogen ($H$):** **$+1$** in non-metal compounds (except metal hydrides where $H = -1$)
>    * **Oxygen ($O$):** **$-2$** (except in peroxides like $H_2O_2$ where $O = -1$, and with fluorine $OF_2$ where $O = +2$)
>    * **Halogens ($Cl, Br, I$):** usually **$-1$**, unless combined with oxygen or a more reactive halogen

> [!BOX]
> ### 🏷️ Roman Numerals in Chemical Names
> Roman numerals placed in brackets immediately after an element in a chemical name denote its **oxidation state**:
> * **Iron(II) oxide ($FeO$):** Iron is in oxidation state **$+2$** ($Fe^{2+}$).
> * **Iron(III) oxide ($Fe_2O_3$):** Iron is in oxidation state **$+3$** ($Fe^{3+}$).
> * **Copper(II) sulfate ($CuSO_4$):** Copper has an oxidation state of **$+2$** ($Cu^{2+}$).
> * **Manganese(IV) oxide ($MnO_2$):** Manganese is **$+4$**.

> [!NOTE]
> ### 🔬 Laboratory Reduction of Copper(II) Oxide with Dry Hydrogen
> When black copper(II) oxide powder is heated in a glass tube while passing a steady stream of dry hydrogen gas:
> $$CuO(s) + H_2(g) \\\\rightarrow Cu(s) + H_2O(l)$$
> * **Observations:**
>   * The black solid ($CuO$) turns into a **pinkish/red-brown solid** (pure metallic copper, $Cu$).
>   * Droplets of a colorless liquid (water, $H_2O$) condense on the cooler parts of the tube.
> * **Why MUST dry hydrogen gas be used?**
>   * To prove conclusively that the water droplets produced were formed by the chemical reaction and did not originate from moisture in the incoming gas stream.
> * **Redox breakdown:**
>   * **Oxidation half-equation:** $H_2 \\\\rightarrow 2H^+ + 2e^-$
>   * **Reduction half-equation:** $Cu^{2+} + 2e^- \\\\rightarrow Cu$
>   * **Net ionic equation:** $Cu^{2+} + H_2 \\\\rightarrow Cu + 2H^+$ (the oxide ion $O^{2-}$ is a spectator ion).

> [!EXAMPLE]
> #### 📝 Cambridge Exam Worked Example 1: Thermite-Type Reaction
> **Question:** A violent reaction occurs when a mixture of chromium(III) oxide and aluminum powder is ignited:
> $$Cr_2O_3(s) + 2Al(s) \\\\rightarrow 2Cr(s) + Al_2O_3(s)$$
> Which substance is oxidised in the reaction?
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Track Oxygen:**
> >    * Aluminum ($Al$) starts with no oxygen and gains oxygen to form $Al_2O_3$. Gain of oxygen is **oxidation**.
> > 2. **Track Oxidation Numbers:**
> >    * $Al(s)$ is an elemental metal $\\\\implies$ oxidation state $= 0$.
> >    * In $Al_2O_3$, each aluminum ion has an oxidation state of $+3$.
> >    * Increase in oxidation number ($0 \\\\rightarrow +3$) confirms **aluminum ($Al$) is oxidised**.
> >    * $Cr_2O_3$ loses oxygen and chromium oxidation state decreases ($+3 \\\\rightarrow 0$), so $Cr_2O_3$ is reduced.

> [!EXAMPLE]
> #### 📝 Cambridge Exam Worked Example 2: Oxidation Number in Vanadium Oxides
> **Question:** In which of the following changes is oxidation taking place?
> * **A** $VO_2 \\\\rightarrow V_2O_5$
> * **B** $V_2O_5 \\\\rightarrow VO_2$
> * **C** $V_2O_3 \\\\rightarrow VO$
> * **D** $V_2O_5 \\\\rightarrow VO$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate Oxidation State of Vanadium in Each Compound:**
> >    * In $VO_2$: $V + 2(-2) = 0 \\\\implies V = +4$
> >    * In $V_2O_5$: $2V + 5(-2) = 0 \\\\implies 2V = +10 \\\\implies V = +5$
> >    * In $V_2O_3$: $2V + 3(-2) = 0 \\\\implies 2V = +6 \\\\implies V = +3$
> >    * In $VO$: $V + (-2) = 0 \\\\implies V = +2$
> > 2. **Identify the Increase in Oxidation Number:**
> >    * In **A** ($VO_2 \\\\rightarrow V_2O_5$): Oxidation number increases from **$+4$ to $+5$** $\\\\implies$ **Oxidation**.
> >    * In B, C, and D: Oxidation number decreases ($+5 \\\\rightarrow +4$, $+3 \\\\rightarrow +2$, $+5 \\\\rightarrow +2$) $\\\\implies$ Reduction.
> > 3. **Conclusion:** **A** is the correct answer.
    `,
    keyPoints: [
      "Free elements have an oxidation number of 0.",
      "Oxidation is an increase in oxidation number; reduction is a decrease in oxidation number.",
      "In names like iron(III) oxide, the Roman numeral directly specifies the oxidation state (+3).",
      "In the reduction of CuO by H₂, dry hydrogen must be used to prove water was formed by the reaction."
    ]
  }
];


