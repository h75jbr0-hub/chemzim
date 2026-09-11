import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Collision Theory & Factors Affecting Rates";
export const lessonNumber = 2;

export const theoryMarkdown = `
## Collision Theory & Factors Affecting Reaction Rates
This lesson explores the kinetic collision theory, the conditions for effective (successful) collisions, and how temperature, concentration, pressure, and surface area affect the rate of chemical reactions.
`;

// Compact SVG Diagram: Rate Curves under Different Factors (650x260)
const rateCurvesSvg = `
<svg viewBox="0 0 650 260" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgCurveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
  </defs>

  <rect width="650" height="260" fill="url(#bgCurveGrad)" stroke="#1e293b" stroke-width="2" rx="14" />
  <text x="325" y="24" fill="#f8fafc" font-size="13" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Interpreting Rate of Reaction Graphs (Volume vs. Time)</text>

  <!-- Left: Surface Area / Temperature Effects (Same Mass of Limiting Reactant) -->
  <g transform="translate(25, 42)">
    <rect width="285" height="198" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="1.2" />
    <text x="142" y="20" fill="#38bdf8" font-size="10.5" font-weight="bold" text-anchor="middle">Case 1: Same Mass (Rate Changes, Same Yield)</text>

    <!-- Axes -->
    <line x1="45" y1="160" x2="260" y2="160" stroke="#64748b" stroke-width="1.5" />
    <line x1="45" y1="160" x2="45" y2="35" stroke="#64748b" stroke-width="1.5" />
    <text x="260" y="175" fill="#94a3b8" font-size="8.5" text-anchor="end">Time</text>
    <text x="40" y="32" fill="#94a3b8" font-size="8.5" text-anchor="end">Volume</text>

    <!-- Curve 1: Powder / Higher Temp (Steepest, reaches plateau fastest) -->
    <path d="M 45 160 Q 75 75 125 75 L 250 75" fill="none" stroke="#22c55e" stroke-width="2.2" />
    <!-- Curve 2: Small chips (Medium) -->
    <path d="M 45 160 Q 95 95 170 75 L 250 75" fill="none" stroke="#f59e0b" stroke-width="2" />
    <!-- Curve 3: Large lumps (Slowest) -->
    <path d="M 45 160 Q 130 120 220 75 L 250 75" fill="none" stroke="#ef4444" stroke-width="1.8" />

    <!-- Plateau Line -->
    <line x1="125" y1="75" x2="250" y2="75" stroke="#94a3b8" stroke-width="1" stroke-dasharray="2 2" />
    <text x="245" y="68" fill="#e2e8f0" font-size="8" text-anchor="end">Same final volume</text>

    <!-- Labels -->
    <text x="135" y="92" fill="#22c55e" font-size="8" font-weight="bold">1. Powder (Fastest)</text>
    <text x="175" y="112" fill="#f59e0b" font-size="8" font-weight="bold">2. Small chips</text>
    <text x="195" y="132" fill="#ef4444" font-size="8" font-weight="bold">3. Large lumps</text>
  </g>

  <!-- Right: Amount / Concentration of Limiting Reactant (Different Yield) -->
  <g transform="translate(340, 42)">
    <rect width="285" height="198" rx="10" fill="#0f172a" stroke="#a855f7" stroke-width="1.2" />
    <text x="142" y="20" fill="#c084fc" font-size="10.5" font-weight="bold" text-anchor="middle">Case 2: Changing Moles of Limiting Reactant</text>

    <!-- Axes -->
    <line x1="45" y1="160" x2="260" y2="160" stroke="#64748b" stroke-width="1.5" />
    <line x1="45" y1="160" x2="45" y2="35" stroke="#64748b" stroke-width="1.5" />
    <text x="260" y="175" fill="#94a3b8" font-size="8.5" text-anchor="end">Time</text>
    <text x="40" y="32" fill="#94a3b8" font-size="8.5" text-anchor="end">Volume</text>

    <!-- Double amount curve (Curve 4) -->
    <path d="M 45 160 Q 80 48 145 48 L 250 48" fill="none" stroke="#38bdf8" stroke-width="2.2" />
    <!-- Single amount curve (Curve 1) -->
    <path d="M 45 160 Q 80 100 145 100 L 250 100" fill="none" stroke="#94a3b8" stroke-width="2" />

    <!-- Labels -->
    <text x="155" y="42" fill="#38bdf8" font-size="8" font-weight="bold">2× Mass of CaCO₃ (2× Volume)</text>
    <text x="155" y="94" fill="#cbd5e1" font-size="8">1× Mass of CaCO₃ (1× Volume)</text>
    <line x1="45" y1="48" x2="145" y2="48" stroke="#38bdf8" stroke-width="0.8" stroke-dasharray="2 2" />
    <line x1="45" y1="100" x2="145" y2="100" stroke="#94a3b8" stroke-width="0.8" stroke-dasharray="2 2" />
  </g>
</svg>
`;

export const lessonParts: LessonPart[] = [
  {
    id: 'ci-u6-l2-part1',
    title: 'The Collision Theory & Activation Energy',
    type: 'text',
    content: `
> [!NOTE]
> ### 💥 Fundamental Postulates of Collision Theory
> For a chemical reaction to occur between reacting particles, two essential conditions must be met:
> 1. **Collision requirement:** The reactant particles (atoms, ions, or molecules) must physically **collide** with one another.
> 2. **Energy requirement:** The colliding particles must possess a **minimum amount of kinetic energy**, called the **Activation Energy ($E_a$)**, to break existing chemical bonds and initiate the reaction.
>
> * A collision that satisfies both criteria is called an **effective (or successful) collision**.
> * **Rate Rule:** The rate of reaction depends directly on the **frequency of successful collisions** (number of effective collisions per unit time).

> [!IMPORTANT]
> ### ⚡ Cambridge Definition: Activation Energy ($E_a$)
> **Activation energy ($E_a$)** is the **minimum amount of energy** colliding particles must have to react successfully.
> * If colliding particles have energy **less than $E_a$**, they simply bounce off each other without reacting.
> * As reactants are used up during a reaction, their concentration decreases $\\implies$ collision frequency drops $\\implies$ the rate of reaction gradually slows down until it reaches zero.
    `,
    keyPoints: [
      "Collisions must be energetic enough (energy ≥ Ea) to be successful.",
      "The rate of reaction is proportional to the number of successful collisions per second.",
      "Rate decreases over time because reactant concentrations drop."
    ]
  },
  {
    id: 'ci-u6-l2-part2',
    title: 'Factors Affecting Reaction Rate',
    type: 'text',
    content: `
> [!BOX]
> ### 📊 Rate Curves Summary
>
> ${svgToken(rateCurvesSvg)}

> [!TIP]
> ### 🔍 Explaining the 5 Major Factors (Cambridge Marking Criteria)
>
> 1. **Concentration of Solutions:**
>    * Increasing concentration increases the **number of particles per unit volume**.
>    * Particles are closer together, resulting in **more frequent collisions** (more collisions per second) and therefore a higher rate.
>
> 2. **Pressure of Gaseous Reactants:**
>    * Increasing pressure (or compressing gases into a smaller volume) increases the **number of gas particles per unit volume**.
>    * This causes **more frequent collisions per second**, speeding up the reaction.
>
> 3. **Surface Area of Solid Reactants (Particle Size):**
>    * Breaking large lumps into smaller pieces or powder dramatically increases the **exposed surface area**.
>    * More reactant particles are exposed and available to collide with surrounding liquid or gas particles.
>    * This increases the **frequency of collisions per second**.
>
> 4. **Temperature of the Reaction Mixture:**
>    * Increasing temperature increases the **average kinetic energy** of the reacting particles.
>    * Consequently:
>      * Particles move faster, increasing the **frequency of collisions**.
>      * **Crucially:** A significantly greater fraction of particles possess **energy equal to or greater than the activation energy ($E \ge E_a$)**.
>      * Thus, a higher proportion of collisions are successful, causing a substantial increase in rate.
>
> 5. **Addition of a Catalyst:**
>    * A catalyst provides an **alternative reaction pathway with a lower activation energy ($E_a$)**.
>    * More colliding particles have sufficient energy ($E \ge E_a$) to react successfully without the catalyst being consumed.
    `,
    keyPoints: [
      "Concentration & Pressure: More particles per unit volume → more frequent collisions.",
      "Surface area: Smaller particles = larger surface area exposed = more frequent collisions.",
      "Temperature has a dual effect: faster movement AND a higher proportion of particles with E ≥ Ea.",
      "Catalysts lower Ea by providing an alternative pathway."
    ]
  },
  {
    id: 'ci-u6-l2-part3',
    title: 'Cambridge Exam Worked Examples',
    type: 'text',
    content: `
> [!EXAMPLE]
> #### 📝 Worked Example 1: Explaining the Temperature Effect
> **Question:** Explain, using the collision theory, why increasing the temperature of a reaction mixture causes a large increase in the rate of reaction. [3 marks]
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Kinetic Energy:**
> >    * Particles gain thermal energy, which is converted to kinetic energy, so they move faster.
> > 2. **Collision Frequency:**
> >    * Because they move faster, particles collide **more frequently** (more collisions per second / unit time).
> > 3. **Proportion with $E \ge E_a$ (Most important marking point):**
> >    * A much **greater proportion (fraction) of colliding particles possess energy equal to or greater than the activation energy ($E_a$)**, resulting in more successful collisions per second.

> [!EXAMPLE]
> #### 📝 Worked Example 2: Comparing Acids & Metals
> **Question:** In which experiment has the metal completely reacted in the shortest time?
> * **Tube A:** Copper granules + dilute $HCl(aq)$
> * **Tube B:** Copper powder + dilute $HNO_3(aq)$
> * **Tube C:** Zinc granules + dilute $HCl(aq)$
> * **Tube D:** Zinc powder + dilute $HCl(aq)$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Evaluate Metal Reactivity:**
> >    * Copper ($Cu$) is below hydrogen in the reactivity series and does not react with non-oxidising dilute acids like $HCl$ to produce hydrogen gas.
> >    * Zinc ($Zn$) is above hydrogen and reacts vigorously: $Zn + 2HCl \rightarrow ZnCl_2 + H_2$.
> > 2. **Compare Particle Size of Zinc (C vs D):**
> >    * Zinc powder (Tube D) has a much larger surface area than zinc granules (Tube C).
> >    * A larger surface area increases the collision frequency between zinc atoms and $H^+$ ions, giving the fastest rate.
> > 3. **Conclusion:**
> >    * Tube **D** finishes in the shortest time.
    `,
    keyPoints: [
      "In temperature questions, always mention BOTH collision frequency AND the proportion of particles with E ≥ Ea.",
      "Unreactive metals (Cu, Ag, Au) do not react with dilute non-oxidising acids like HCl.",
      "Powder reacts faster than granules because of higher surface area."
    ]
  }
];


