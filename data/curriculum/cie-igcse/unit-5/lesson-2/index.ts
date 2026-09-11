import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Energy Diagrams";
export const lessonNumber = 2;

export const theoryMarkdown = `
## Energy Diagrams & Reaction Pathways
This lesson covers reaction profiles, energy level diagrams, activation energy (Ea), and the complete representation of exothermic and endothermic reactions with energy barriers.
`;

// Compact SVG Diagram 2: Complete Reaction Profiles: Exothermic & Endothermic with Ea & ΔH (650x260)
const reactionProfilesSvg = `
<svg viewBox="0 0 650 260" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgProfileGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
    <marker id="arrowRed" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#ef4444" />
    </marker>
    <marker id="arrowBlue" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
    </marker>
    <marker id="arrowYellow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#fbbf24" />
    </marker>
  </defs>

  <rect width="650" height="260" fill="url(#bgProfileGrad)" stroke="#1e293b" stroke-width="2" rx="14" />
  <text x="325" y="24" fill="#f8fafc" font-size="13" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Cambridge Reaction Pathway Diagrams (Activation Energy &amp; Enthalpy Change)</text>

  <!-- Profile 1: Exothermic Pathway -->
  <g transform="translate(30, 42)">
    <rect width="280" height="198" rx="10" fill="#0f172a" stroke="#ef4444" stroke-width="1.2" />
    <text x="140" y="20" fill="#f87171" font-size="11" font-weight="bold" text-anchor="middle">Exothermic Reaction Profile</text>

    <!-- Axes -->
    <line x1="45" y1="165" x2="260" y2="165" stroke="#64748b" stroke-width="1.5" />
    <line x1="45" y1="165" x2="45" y2="35" stroke="#64748b" stroke-width="1.5" />
    <text x="260" y="180" fill="#94a3b8" font-size="9" text-anchor="end">Reaction Progress</text>
    <text x="40" y="32" fill="#94a3b8" font-size="9" text-anchor="end">Energy</text>

    <!-- Curve: Reactants at high, hump, Products at low -->
    <path d="M 45 105 L 85 105 Q 135 30 185 145 L 245 145" fill="none" stroke="#f87171" stroke-width="2.5" />

    <!-- Reactants & Products labels -->
    <text x="85" y="98" fill="#e2e8f0" font-size="9.5" font-weight="bold">Reactants</text>
    <text x="240" y="138" fill="#e2e8f0" font-size="9.5" font-weight="bold" text-anchor="end">Products</text>

    <!-- Ea Arrow (from Reactants level to peak) -->
    <line x1="135" y1="105" x2="135" y2="45" stroke="#fbbf24" stroke-width="1.8" marker-end="url(#arrowYellow)" />
    <text x="142" y="75" fill="#fbbf24" font-size="9" font-weight="bold">Ea (in)</text>

    <!-- ΔH Arrow (from Reactants down to Products) -->
    <line x1="215" y1="105" x2="215" y2="142" stroke="#ef4444" stroke-width="1.8" marker-end="url(#arrowRed)" />
    <line x1="85" y1="105" x2="225" y2="105" stroke="#64748b" stroke-width="1" stroke-dasharray="2 2" />
    <text x="222" y="125" fill="#ef4444" font-size="9" font-weight="bold">-ΔH (out)</text>
  </g>

  <!-- Profile 2: Endothermic Pathway -->
  <g transform="translate(340, 42)">
    <rect width="280" height="198" rx="10" fill="#0f172a" stroke="#0284c7" stroke-width="1.2" />
    <text x="140" y="20" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">Endothermic Reaction Profile</text>

    <!-- Axes -->
    <line x1="45" y1="165" x2="260" y2="165" stroke="#64748b" stroke-width="1.5" />
    <line x1="45" y1="165" x2="45" y2="35" stroke="#64748b" stroke-width="1.5" />
    <text x="260" y="180" fill="#94a3b8" font-size="9" text-anchor="end">Reaction Progress</text>
    <text x="40" y="32" fill="#94a3b8" font-size="9" text-anchor="end">Energy</text>

    <!-- Curve: Reactants at low, big hump, Products at high -->
    <path d="M 45 145 L 85 145 Q 145 25 195 95 L 245 95" fill="none" stroke="#38bdf8" stroke-width="2.5" />

    <!-- Reactants & Products labels -->
    <text x="85" y="138" fill="#e2e8f0" font-size="9.5" font-weight="bold">Reactants</text>
    <text x="240" y="88" fill="#e2e8f0" font-size="9.5" font-weight="bold" text-anchor="end">Products</text>

    <!-- Ea Arrow (from Reactants level up to peak) -->
    <line x1="145" y1="145" x2="145" y2="42" stroke="#fbbf24" stroke-width="1.8" marker-end="url(#arrowYellow)" />
    <text x="152" y="75" fill="#fbbf24" font-size="9" font-weight="bold">Ea (in)</text>

    <!-- ΔH Arrow (from Reactants up to Products) -->
    <line x1="215" y1="145" x2="215" y2="98" stroke="#38bdf8" stroke-width="1.8" marker-end="url(#arrowBlue)" />
    <line x1="85" y1="145" x2="225" y2="145" stroke="#64748b" stroke-width="1" stroke-dasharray="2 2" />
    <text x="222" y="125" fill="#38bdf8" font-size="9" font-weight="bold">+ΔH (in)</text>
  </g>
</svg>
`;

export const lessonParts: LessonPart[] = [
  {
    id: "energy-level-diagrams",
    title: "Energy Level Diagrams",
    type: "text",
    content: `
### 📊 Energy Level Diagrams vs. Reaction Profiles

In Cambridge IGCSE, you must be comfortable reading both simple flat **energy level diagrams** and curved **reaction profile pathways**:

> [!NOTE]
> ### 1. Flat Energy Level Diagrams
> * Show only the relative enthalpy of the reactants and products:
>   * **Exothermic:** Reactants are at a high horizontal line; Products are at a lower horizontal line. The vertical arrow points **downwards** ($-\\Delta H$).
>   * **Endothermic:** Reactants are at a low horizontal line; Products are at a higher horizontal line. The vertical arrow points **upwards** ($+\\Delta H$).

> [!IMPORTANT]
> ### 2. Reaction Pathway Diagrams (With Activation Energy, Ea)
> A chemical reaction cannot happen simply by reactants touching; bonds must first be stretched and broken.
> * **Activation Energy ($E_a$):** The **minimum amount of energy** that colliding particles must possess to react successfully.
> * **Arrow Convention in Cambridge Exams:**
>   * The arrow for activation energy ($E_a$) **always starts at the reactant energy level and points UPWARDS to the peak of the curve**.
>   * The arrow for enthalpy change ($\\Delta H$) starts at the reactant level and goes to the product level (downwards for exothermic, upwards for endothermic).

> ${svgToken(reactionProfilesSvg)}

> [!EXAMPLE]
> #### 📝 Worked Example 1: Magnesium and Hydrochloric Acid Energy Diagram
> **Question:** The energy level diagram for the reaction between magnesium and hydrochloric acid is shown:
> $$Mg(s) + 2HCl(aq) \\rightarrow MgCl_2(aq) + H_2(g)$$
> Reactants $[Mg + 2HCl]$ are at an upper level, and products $[MgCl_2 + H_2]$ are at a lower level with a downward arrow.
> 
> Which statement about the reaction is **NOT correct**?
> 
> **A** Energy is given out during the reaction
> 
> **B** The products are at a lower energy level than the reactants
> 
> **C** The temperature increases during the reaction
> 
> **D** The reaction is endothermic
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Inspect Energy Levels:**
> >    * Reactants are higher than products. The downward arrow shows that energy is released (given out) to the surroundings.
> > 2. **Deduce Reaction Type:**
> >    * Since energy is released, the reaction is **exothermic**, not endothermic.
> > 3. **Evaluate Temperature:**
> >    * An exothermic reaction causes the temperature of the solution to increase.
> > 4. **Conclusion:**
> >    * Statement D ("The reaction is endothermic") is incorrect, making **D** the correct answer to the question.
    `,
    keyPoints: [
      "Activation energy (Ea) is the minimum energy required by colliding particles to react.",
      "In exothermic profiles, products are lower than reactants; in endothermic, products are higher.",
      "The arrow for Ea always points upwards from the reactants level to the curve peak."
    ]
  }
];


