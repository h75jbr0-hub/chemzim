import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Physical & Chemical Changes & Rate of Reaction";
export const lessonNumber = 1;

export const theoryMarkdown = `
## Physical and Chemical Changes & Rates of Reaction
This lesson covers the distinction between physical and chemical changes, defining the rate of reaction, methods of measuring reaction rates (gas syringe, loss in mass on a balance, inverted measuring cylinder), and interpreting reaction rate graphs.
`;

// Compact SVG Diagram: Gas Syringe & Mass Loss Setup (650x260)
const rateMethodsSvg = `
<svg viewBox="0 0 650 260" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgRateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
    <marker id="arrowCyan" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
    </marker>
  </defs>

  <rect width="650" height="260" fill="url(#bgRateGrad)" stroke="#1e293b" stroke-width="2" rx="14" />
  <text x="325" y="24" fill="#f8fafc" font-size="13" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Methods for Measuring Rate of Chemical Reaction</text>

  <!-- Method 1: Gas Syringe Method (Left) -->
  <g transform="translate(25, 42)">
    <rect width="285" height="198" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="1.2" />
    <text x="142" y="22" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">Method A: Gas Syringe (Volume vs. Time)</text>

    <!-- Conical Flask -->
    <path d="M 50 170 L 90 170 L 78 120 L 78 105 L 62 105 L 62 120 Z" fill="#1e293b" stroke="#94a3b8" stroke-width="1.5" />
    <!-- Reaction mixture & bubbles -->
    <path d="M 54 165 L 86 165 L 80 135 L 60 135 Z" fill="#0284c7" opacity="0.6" />
    <circle cx="68" cy="145" r="2.5" fill="#e0f2fe" />
    <circle cx="74" cy="150" r="2" fill="#e0f2fe" />
    <circle cx="64" cy="155" r="3" fill="#e0f2fe" />
    <text x="70" y="185" fill="#94a3b8" font-size="8" text-anchor="middle">Mg + 2HCl</text>

    <!-- Rubber Stopper & Delivery Tube -->
    <rect x="65" y="100" width="10" height="8" fill="#475569" />
    <path d="M 70 100 L 70 75 L 125 75" fill="none" stroke="#e2e8f0" stroke-width="2.5" />

    <!-- Gas Syringe Barrel -->
    <rect x="125" y="65" width="110" height="20" rx="3" fill="#1e293b" stroke="#94a3b8" stroke-width="1.5" />
    <!-- Graduations -->
    <line x1="145" y1="65" x2="145" y2="72" stroke="#64748b" stroke-width="1" />
    <line x1="165" y1="65" x2="165" y2="72" stroke="#64748b" stroke-width="1" />
    <line x1="185" y1="65" x2="185" y2="72" stroke="#64748b" stroke-width="1" />
    <line x1="205" y1="65" x2="205" y2="72" stroke="#64748b" stroke-width="1" />
    <!-- Plunger -->
    <rect x="190" y="67" width="55" height="16" fill="#38bdf8" opacity="0.7" />
    <line x1="245" y1="75" x2="270" y2="75" stroke="#f8fafc" stroke-width="3" />
    <line x1="270" y1="68" x2="270" y2="82" stroke="#f8fafc" stroke-width="3" />

    <!-- Motion arrow -->
    <line x1="220" y1="52" x2="255" y2="52" stroke="#38bdf8" stroke-width="1.8" marker-end="url(#arrowCyan)" />
    <text x="238" y="46" fill="#38bdf8" font-size="8.5" text-anchor="middle">Plunger moves out</text>

    <!-- Description -->
    <text x="142" y="135" fill="#f8fafc" font-size="9.5" font-weight="bold" text-anchor="middle">Measures Volume of Gas Produced</text>
    <text x="142" y="152" fill="#94a3b8" font-size="8.5" text-anchor="middle">Units: cm³/s or cm³/min</text>
    <text x="142" y="168" fill="#64748b" font-size="8" text-anchor="middle">Best for any gas (e.g., H₂, O₂, CO₂)</text>
  </g>

  <!-- Method 2: Loss in Mass Method (Right) -->
  <g transform="translate(340, 42)">
    <rect width="285" height="198" rx="10" fill="#0f172a" stroke="#f59e0b" stroke-width="1.2" />
    <text x="142" y="22" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">Method B: Balance (Loss in Mass vs. Time)</text>

    <!-- Conical Flask on Balance -->
    <path d="M 120 135 L 165 135 L 152 85 L 152 70 L 133 70 L 133 85 Z" fill="#1e293b" stroke="#94a3b8" stroke-width="1.5" />
    <path d="M 124 130 L 161 130 L 154 100 L 131 100 Z" fill="#d97706" opacity="0.6" />

    <!-- Cotton wool plug -->
    <ellipse cx="142.5" cy="70" rx="10" ry="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" />
    <text x="142.5" y="58" fill="#cbd5e1" font-size="7.5" text-anchor="middle">Cotton wool plug</text>

    <!-- Gas escaping arrows -->
    <path d="M 140 50 L 140 36" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="2 2" />
    <path d="M 145 50 L 145 36" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="2 2" />
    <text x="168" y="42" fill="#f59e0b" font-size="8">CO₂ escapes</text>

    <!-- Electronic Balance -->
    <rect x="95" y="138" width="95" height="24" rx="4" fill="#334155" stroke="#64748b" stroke-width="1.5" />
    <!-- Display -->
    <rect x="120" y="143" width="45" height="14" fill="#000000" rx="2" />
    <text x="142.5" y="153" fill="#22c55e" font-size="9" font-family="monospace" text-anchor="middle">148.32 g</text>

    <!-- Description -->
    <text x="142" y="180" fill="#f8fafc" font-size="9.5" font-weight="bold" text-anchor="middle">Measures Mass of Reactants Lost</text>
    <text x="142" y="194" fill="#94a3b8" font-size="8.5" text-anchor="middle">Cotton wool prevents liquid spray escaping</text>
  </g>
</svg>
`;

export const lessonParts: LessonPart[] = [
  {
    id: 'ci-u6-l1-part1',
    title: 'Physical vs Chemical Changes',
    type: 'text',
    content: `
> [!NOTE]
> ### 🔄 1. Physical Changes
> A **physical change** is a change in which **no new chemical substances are formed**.
> * **Characteristics:**
>   * Usually easy to reverse (e.g. melting ice, boiling water, dissolving sugar or salt in water).
>   * Involves a change of physical state or physical separation of a mixture.
>   * Energy may be taken in or given out (latent heat of fusion/vaporisation), but atomic bonds within molecules remain intact.

> [!IMPORTANT]
> ### 🧪 2. Chemical Changes (Chemical Reactions)
> A **chemical change** is a process where atoms of the reactants are rearranged to form **one or more new chemical substances** with completely different properties.
> * **Characteristics:**
>   * Usually difficult to reverse (e.g. burning wood, rusting iron, neutralisation).
>   * Energy changes are always involved (heat, light, or sound is absorbed or released).
>   * The total number of each type of atom is conserved (mass is conserved).
>   * Most everyday chemical reactions are exothermic (releasing heat).

> [!BOX]
> ### 📋 Key Differences at a Glance
>
> | Feature | Physical Change | Chemical Change |
> | :--- | :--- | :--- |
> | **New substances formed?** | No new substances | Yes, new chemical products formed |
> | **Reversibility** | Usually easy to reverse | Usually difficult to reverse |
> | **Particle structure** | Particles rearranged in space only | Chemical bonds broken and reformed |
> | **Examples** | Melting ice, dissolving sugar in water | Combustion of methane, reaction of $Mg + HCl$ |
    `,
    keyPoints: [
      "Physical changes form NO new chemical substances and are generally easily reversed.",
      "Chemical changes create new substances through bond breaking and bond forming.",
      "Chemical changes are usually difficult to reverse."
    ]
  },
  {
    id: 'ci-u6-l1-part2',
    title: 'Rate (Speed) of Reaction & Experimental Setups',
    type: 'text',
    content: `
> [!NOTE]
> ### ⏱️ What is the Rate of Reaction?
> The **rate of reaction** is a measure of how fast or slow reactants are converted into products:
>
> $$\\text{Rate of reaction} = \\frac{\\text{Amount of reactant used up}}{\\text{Time taken}} = \\frac{\\text{Amount of product formed}}{\\text{Time taken}}$$
>
> * **Units of Rate:** $\\text{cm}^3/\\text{s}$, $\\text{g}/\\text{s}$, or $\\text{mol}/\\text{s}$.

> [!BOX]
> ### 🔬 Standard Cambridge Laboratory Methods
>
> ${svgToken(rateMethodsSvg)}
>
> 1. **Gas Syringe Method:**
>    * The volume of gas produced is recorded at regular time intervals (e.g. every 10 or 30 seconds).
>    * Suitable for collecting **any gas** (e.g. $H_2$, $O_2$, $CO_2$).
>    * An inverted measuring cylinder over a water trough can also be used, **provided the gas is insoluble in water** (e.g. $H_2$).
>
> 2. **Loss in Mass Method (Balance):**
>    * Used when a heavy gas escapes from the reaction mixture (such as $CO_2$).
>    * A **cotton wool plug** is placed in the neck of the flask to allow the gas to escape freely while preventing acid spray from splashing out.
>    * **Not suitable for hydrogen gas ($H_2$)** because hydrogen molecules have an extremely low molar mass ($M_r = 2$), making the mass loss too small to measure accurately.

> [!IMPORTANT]
> ### 📈 Interpreting Rate Graphs (Volume vs. Time)
> * **At the start ($t = 0$):** The curve is steepest (gradient is highest) $\\implies$ **rate is fastest** because concentration of reactants is at its maximum.
> * **During the reaction:** The curve becomes less steep $\\implies$ **rate slows down** as reactants are consumed and collisions become less frequent.
> * **When the curve goes flat (horizontal line):** Gradient $= 0 \\implies$ **reaction has stopped** because one of the reactants (the limiting reactant) has been completely used up.
    `,
    keyPoints: [
      "Rate is fastest at the very beginning when reactant concentrations are highest.",
      "A cotton wool plug prevents acid spray loss while letting gas escape.",
      "A horizontal plateau on a rate graph indicates the reaction has finished."
    ]
  },
  {
    id: 'ci-u6-l1-part3',
    title: 'Worked Examples from Cambridge Examinations',
    type: 'text',
    content: `
> [!EXAMPLE]
> #### 📝 Worked Example 1: Selecting the Correct Rate Apparatus
> **Question:** A student investigates the rate of reaction between liquid dilute hydrochloric acid and solid calcium carbonate:
> $$CaCO_3(s) + 2HCl(aq) \\rightarrow CaCl_2(aq) + H_2O(l) + CO_2(g)$$
> Which two apparatus setups are suitable for measuring the rate of this reaction?
> 1. Conical flask plugged with cotton wool on an electronic balance
> 2. Conical flask closed with a rubber stopper on an electronic balance
> 3. Conical flask with delivery tube leading to a gas syringe
> 4. Conical flask open to the air without cotton wool or syringe
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Analyze Mass Loss (Setup 1 vs 2):**
> >    * Setup 1 has a cotton wool plug: $CO_2$ escapes while acid spray is contained $\\implies$ mass loss can be measured accurately.
> >    * Setup 2 has a closed stopper: $CO_2$ cannot escape, so the total mass remains constant (no loss in mass) and pressure may pop the stopper. Setup 2 is invalid.
> > 2. **Analyze Gas Collection (Setup 3):**
> >    * Setup 3 uses a gas syringe to measure the volume of $CO_2$ gas over time $\\implies$ valid method.
> > 3. **Conclusion:**
> >    * Setups **1 and 3** are suitable methods for investigating the reaction rate.

> [!EXAMPLE]
> #### 📝 Worked Example 2: Reaction Rate Curve Comparison
> **Question:** Magnesium reacts with excess dilute hydrochloric acid to produce hydrogen gas. The volume of hydrogen is measured every minute:
> * Experiment S uses small marble chips (large surface area).
> * Experiment T uses large marble chips (small surface area) of the **same total mass**.
> 
> How will the curve for Experiment T compare to Curve S?
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Compare Initial Rates:**
> >    * Large pieces have a smaller total surface area $\\implies$ fewer particles are exposed $\\implies$ fewer collisions per second.
> >    * Therefore, the initial rate for T is slower, meaning **Curve T will have a gentler (less steep) gradient than S**.
> > 2. **Compare Final Volume of Gas:**
> >    * Both experiments use the **same mass** of calcium carbonate and excess acid.
> >    * Therefore, the **total volume of gas produced at the end is exactly the same** (both curves plateau at the identical horizontal height).
    `,
    keyPoints: [
      "Smaller particles (powder) give a steeper curve initially, but identical final volume if mass is unchanged.",
      "Only changing the amount/moles of limiting reactant changes the height of the plateau.",
      "Enclosing a flask with a sealed stopper prevents mass loss measurements."
    ]
  }
];


