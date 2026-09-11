import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Bond Energies";
export const lessonNumber = 3;

export const theoryMarkdown = `
## Bond Energies & Enthalpy Calculations
This lesson covers bond breaking and bond making, the definition of bond energy, and how to calculate the overall enthalpy change of a chemical reaction using bond energies.
`;

// Compact SVG Diagram 3: Bond Breaking vs Bond Making (650x260)
const bondEnergiesSvg = `
<svg viewBox="0 0 650 260" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgBondGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
    <radialGradient id="atomBlue" cx="40%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="100%" stop-color="#0284c7" />
    </radialGradient>
    <radialGradient id="atomRed" cx="40%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#f87171" />
      <stop offset="100%" stop-color="#dc2626" />
    </radialGradient>
    <marker id="arrowRight" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#fbbf24" />
    </marker>
  </defs>

  <rect width="650" height="260" fill="url(#bgBondGrad)" stroke="#1e293b" stroke-width="2" rx="14" />
  <text x="325" y="24" fill="#f8fafc" font-size="13" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Bond Breaking vs. Bond Making in Chemical Reactions</text>

  <!-- Left: Bond Breaking (Endothermic) -->
  <g transform="translate(25, 42)">
    <rect width="285" height="198" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="1.2" />
    <text x="142" y="22" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">1. Bond Breaking (Reactants)</text>

    <!-- Bound Atoms -->
    <circle cx="55" cy="80" r="22" fill="url(#atomBlue)" />
    <circle cx="85" cy="80" r="22" fill="url(#atomBlue)" />
    <text x="55" y="84" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">A</text>
    <text x="85" y="84" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">B</text>

    <!-- Energy In Arrow -->
    <path d="M 70 145 L 70 115" stroke="#fbbf24" stroke-width="3" marker-end="url(#arrowRight)" />
    <text x="70" y="162" fill="#fbbf24" font-size="9.5" font-weight="bold" text-anchor="middle">Energy IN</text>

    <!-- Separated Atoms -->
    <circle cx="210" cy="80" r="22" fill="url(#atomBlue)" />
    <circle cx="260" cy="80" r="22" fill="url(#atomBlue)" />
    <text x="210" y="84" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">A</text>
    <text x="260" y="84" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">B</text>

    <!-- Arrow between states -->
    <line x1="120" y1="80" x2="175" y2="80" stroke="#64748b" stroke-width="2" stroke-dasharray="3 3" />

    <!-- Explanations -->
    <text x="142" y="180" fill="#93c5fd" font-size="10" font-weight="bold" text-anchor="middle">ENDOTHERMIC (ΔH &gt; 0)</text>
    <text x="142" y="193" fill="#cbd5e1" font-size="9" text-anchor="middle">Energy is taken in to break bonds</text>
  </g>

  <!-- Right: Bond Making (Exothermic) -->
  <g transform="translate(340, 42)">
    <rect width="285" height="198" rx="10" fill="#0f172a" stroke="#f87171" stroke-width="1.2" />
    <text x="142" y="22" fill="#f87171" font-size="11" font-weight="bold" text-anchor="middle">2. Bond Making (Products)</text>

    <!-- Separated Atoms -->
    <circle cx="35" cy="80" r="22" fill="url(#atomRed)" />
    <circle cx="85" cy="80" r="22" fill="url(#atomRed)" />
    <text x="35" y="84" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">C</text>
    <text x="85" y="84" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">D</text>

    <!-- Arrow between states -->
    <line x1="115" y1="80" x2="165" y2="80" stroke="#64748b" stroke-width="2" stroke-dasharray="3 3" />

    <!-- Bound Product Molecule -->
    <circle cx="195" cy="80" r="22" fill="url(#atomRed)" />
    <circle cx="225" cy="80" r="22" fill="url(#atomRed)" />
    <text x="195" y="84" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">C</text>
    <text x="225" y="84" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">D</text>

    <!-- Energy Out Arrow -->
    <path d="M 210 115 L 210 145" stroke="#ef4444" stroke-width="3" marker-end="url(#arrowRight)" />
    <text x="210" y="162" fill="#ef4444" font-size="9.5" font-weight="bold" text-anchor="middle">Energy OUT</text>

    <!-- Explanations -->
    <text x="142" y="180" fill="#fca5a5" font-size="10" font-weight="bold" text-anchor="middle">EXOTHERMIC (ΔH &lt; 0)</text>
    <text x="142" y="193" fill="#cbd5e1" font-size="9" text-anchor="middle">Energy is released when new bonds form</text>
  </g>
</svg>
`;

export const lessonParts: LessonPart[] = [
  {
    id: 'ci-u5-l3-part1',
    title: 'Bond Energy Principles: Breaking vs Making',
    type: 'text',
    content: `
> [!NOTE]
> ### ⚛️ What is Bond Energy?
> **Bond energy** is defined as the amount of energy needed to break **one mole** of a specific covalent bond in the gaseous state, measured in **kJ/mol**.
>
> In every chemical reaction, two consecutive energy-transfer processes take place:
> 1. **Bond Breaking (Reactants):**
>    * Energy is **absorbed** to overcome the attractive forces between atoms.
>    * Hence, **bond breaking is always an endothermic process** (Energy IN).
> 2. **Bond Making (Products):**
>    * Energy is **released** when new chemical bonds are established and atoms attain stability.
>    * Hence, **bond making is always an exothermic process** (Energy OUT).

> [!BOX]
> ### 📊 Energetics of Bond Breaking and Making
>
> ${svgToken(bondEnergiesSvg)}

> [!IMPORTANT]
> ### ⚖️ Cambridge Exam Rule: Determining Overall Enthalpy (ΔH)
> The overall enthalpy change ($\\\\Delta H$) of a chemical reaction is given by:
>
> $$\\\\Delta H = \\\\Sigma (\\\\text{Bond energies of reactants}) - \\\\Sigma (\\\\text{Bond energies of products})$$
>
> Or simply:
> $$\\\\Delta H = \\\\text{Energy absorbed in bond breaking} - \\\\text{Energy released in bond making}$$
>
> * **If Energy in &lt; Energy out:** More energy is released than taken in $\\\\implies \\\\Delta H$ is negative $\\\\implies$ **Exothermic reaction**.
> * **If Energy in &gt; Energy out:** More energy is absorbed than released $\\\\implies \\\\Delta H$ is positive $\\\\implies$ **Endothermic reaction**.
    `,
    keyPoints: [
      "Bond breaking is ENDOTHERMIC (energy is absorbed from surroundings).",
      "Bond making is EXOTHERMIC (energy is released to surroundings).",
      "ΔH = Bonds Broken (Reactants) - Bonds Formed (Products)."
    ]
  },
  {
    id: 'ci-u5-l3-part2',
    title: 'Worked Examples & Cambridge Calculations',
    type: 'text',
    content: `
> [!EXAMPLE]
> #### 📝 Worked Example 1: Synthesis of Nitrogen Trifluoride (NF₃)
> **Question:** Nitrogen gas reacts with fluorine gas according to the equation:
> $$N_2(g) + 3F_2(g) \\\\rightarrow 2NF_3(g)$$
> Use the following bond energies to calculate the enthalpy change ($\\\\Delta H$) for the reaction:
> * $N \\\\equiv N = 945\\\\text{ kJ/mol}$
> * $F-F = 160\\\\text{ kJ/mol}$
> * $N-F = 300\\\\text{ kJ/mol}$
> 
> State whether the reaction is exothermic or endothermic, giving a reason based on bond energies.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Count the Bonds Broken in Reactants:**
> >    * One mole of $N_2$ has $1 \\\\times (N \\\\equiv N)$ triple bond $= 1 \\\\times 945 = 945\\\\text{ kJ}$
> >    * Three moles of $F_2$ have $3 \\\\times (F-F)$ single bonds $= 3 \\\\times 160 = 480\\\\text{ kJ}$
> >    * **Total energy absorbed in breaking bonds** $= 945 + 480 = +1425\\\\text{ kJ}$
> > 
> > 2. **Count the Bonds Formed in Products:**
> >    * Each $NF_3$ molecule contains $3 \\\\times (N-F)$ single bonds.
> >    * There are $2$ moles of $NF_3$, so total $N-F$ bonds $= 2 \\\\times 3 = 6$ bonds.
> >    * **Total energy released in making bonds** $= 6 \\\\times 300 = 1800\\\\text{ kJ}$
> > 
> > 3. **Calculate the Overall Enthalpy Change (ΔH):**
> >    * $\\\\Delta H = \\\\text{Bonds Broken} - \\\\text{Bonds Formed}$
> >    * $\\\\Delta H = 1425 - 1800 = -375\\\\text{ kJ/mol}$
> > 
> > 4. **Exothermic vs Endothermic Deduction:**
> >    * The reaction is **exothermic** because $\\\\Delta H$ has a negative value ($-375\\\\text{ kJ/mol}$).
> >    * **Reason:** The energy released when new bonds are formed ($1800\\\\text{ kJ}$) is greater than the energy taken in to break the existing bonds ($1425\\\\text{ kJ}$).

> [!EXAMPLE]
> #### 📝 Worked Example 2: Combustion of Methane
> **Question:** Methane undergoes complete combustion according to:
> $$CH_4(g) + 2O_2(g) \\\\rightarrow CO_2(g) + 2H_2O(g)$$
> Given:
> * $C-H = 413\\\\text{ kJ/mol}$
> * $O=O = 498\\\\text{ kJ/mol}$
> * $C=O = 805\\\\text{ kJ/mol}$
> * $O-H = 464\\\\text{ kJ/mol}$
> 
> Calculate the enthalpy change ($\\\\Delta H$) for the combustion of methane.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Bonds Broken (Reactants):**
> >    * $4 \\\\times (C-H) = 4 \\\\times 413 = 1652\\\\text{ kJ}$
> >    * $2 \\\\times (O=O) = 2 \\\\times 498 = 996\\\\text{ kJ}$
> >    * **Sum of bonds broken** $= 1652 + 996 = 2648\\\\text{ kJ}$
> > 
> > 2. **Bonds Formed (Products):**
> >    * In $CO_2$, there are $2 \\\\times (C=O)$ double bonds $= 2 \\\\times 805 = 1610\\\\text{ kJ}$
> >    * In $2H_2O$, there are $2 \\\\times 2 = 4 \\\\times (O-H)$ single bonds $= 4 \\\\times 464 = 1856\\\\text{ kJ}$
> >    * **Sum of bonds formed** $= 1610 + 1856 = 3466\\\\text{ kJ}$
> > 
> > 3. **Net Enthalpy Change:**
> >    * $\\\\Delta H = 2648 - 3466 = -818\\\\text{ kJ/mol}$ (Exothermic)
    `,
    keyPoints: [
      "Always draw or visualize the structural formula of molecules to count every single bond accurately.",
      "In 2H₂O there are 4 O-H bonds, in CO₂ there are 2 C=O bonds, and in 2NF₃ there are 6 N-F bonds.",
      "A reaction is exothermic when bond-making energy > bond-breaking energy."
    ]
  }
];

