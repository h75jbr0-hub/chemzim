import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Catalysts & Biological Enzymes";
export const lessonNumber = 3;

export const theoryMarkdown = `
## Catalysts & Biological Enzymes
This lesson explores the definition and action of chemical catalysts, their role in lowering activation energy without being consumed, transition metal catalysts in major industrial processes (Haber & Contact processes), and the nature and specificity of biological enzymes.
`;

// Compact SVG Diagram: Catalyst Effect on Activation Energy (650x260)
const catalystEaSvg = `
<svg viewBox="0 0 650 260" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgCatGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
    <marker id="arrowRedCat" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#ef4444" />
    </marker>
    <marker id="arrowGreenCat" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#10b981" />
    </marker>
  </defs>

  <rect width="650" height="260" fill="url(#bgCatGrad)" stroke="#1e293b" stroke-width="2" rx="14" />
  <text x="325" y="24" fill="#f8fafc" font-size="13" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">How a Catalyst Lowers Activation Energy (Ea)</text>

  <!-- Pathway Profile Graph (Left) -->
  <g transform="translate(30, 42)">
    <rect width="320" height="198" rx="10" fill="#0f172a" stroke="#334155" stroke-width="1.2" />

    <!-- Axes -->
    <line x1="50" y1="165" x2="295" y2="165" stroke="#64748b" stroke-width="1.5" />
    <line x1="50" y1="165" x2="50" y2="30" stroke="#64748b" stroke-width="1.5" />
    <text x="295" y="180" fill="#94a3b8" font-size="8.5" text-anchor="end">Reaction Progress</text>
    <text x="45" y="28" fill="#94a3b8" font-size="8.5" text-anchor="end">Energy</text>

    <!-- Reactants and Products -->
    <line x1="50" y1="110" x2="95" y2="110" stroke="#e2e8f0" stroke-width="2" />
    <text x="72" y="102" fill="#e2e8f0" font-size="9" font-weight="bold" text-anchor="middle">Reactants</text>
    <line x1="240" y1="145" x2="290" y2="145" stroke="#e2e8f0" stroke-width="2" />
    <text x="265" y="138" fill="#e2e8f0" font-size="9" font-weight="bold" text-anchor="middle">Products</text>

    <!-- Uncatalysed Pathway (Red high hump) -->
    <path d="M 95 110 Q 165 20 240 145" fill="none" stroke="#ef4444" stroke-width="2.2" stroke-dasharray="3 2" />
    <text x="165" y="32" fill="#ef4444" font-size="8.5" font-weight="bold" text-anchor="middle">Uncatalysed Pathway</text>

    <!-- Catalysed Pathway (Green lower hump) -->
    <path d="M 95 110 Q 165 65 240 145" fill="none" stroke="#10b981" stroke-width="2.5" />
    <text x="165" y="80" fill="#10b981" font-size="8.5" font-weight="bold" text-anchor="middle">Catalysed Pathway</text>

    <!-- Ea Arrows -->
    <!-- Ea uncatalysed -->
    <line x1="125" y1="110" x2="125" y2="38" stroke="#ef4444" stroke-width="1.5" marker-end="url(#arrowRedCat)" />
    <text x="120" y="70" fill="#ef4444" font-size="8" text-anchor="end">Ea (no cat)</text>

    <!-- Ea catalysed -->
    <line x1="205" y1="110" x2="205" y2="72" stroke="#10b981" stroke-width="1.5" marker-end="url(#arrowGreenCat)" />
    <text x="210" y="95" fill="#10b981" font-size="8">Ea (catalysed)</text>
  </g>

  <!-- Key Properties & Industrial Catalysts (Right) -->
  <g transform="translate(370, 42)">
    <rect width="250" height="198" rx="10" fill="#0f172a" stroke="#10b981" stroke-width="1.2" />
    <text x="125" y="22" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle">Key Industrial Catalysts</text>

    <text x="15" y="52" fill="#f8fafc" font-size="9.5" font-weight="bold">1. Iron (Fe):</text>
    <text x="25" y="68" fill="#94a3b8" font-size="8.5">Haber Process (ammonia synthesis)</text>
    <text x="25" y="82" fill="#38bdf8" font-size="8.5">N₂ + 3H₂ ⇌ 2NH₃</text>

    <text x="15" y="106" fill="#f8fafc" font-size="9.5" font-weight="bold">2. Vanadium(V) Oxide (V₂O₅):</text>
    <text x="25" y="122" fill="#94a3b8" font-size="8.5">Contact Process (sulfuric acid)</text>
    <text x="25" y="136" fill="#38bdf8" font-size="8.5">2SO₂ + O₂ ⇌ 2SO₃</text>

    <text x="15" y="160" fill="#f8fafc" font-size="9.5" font-weight="bold">3. Manganese(IV) Oxide (MnO₂):</text>
    <text x="25" y="176" fill="#94a3b8" font-size="8.5">Decomposition of hydrogen peroxide</text>
    <text x="25" y="190" fill="#38bdf8" font-size="8.5">2H₂O₂ → 2H₂O + O₂</text>
  </g>
</svg>
`;

export const lessonParts: LessonPart[] = [
  {
    id: 'ci-u6-l3-part1',
    title: 'Chemical Catalysts & Transition Metals',
    type: 'text',
    content: `
> [!NOTE]
> ### ⚡ What is a Catalyst?
> A **catalyst** is a substance that **increases the rate of a chemical reaction** (or decreases the time taken) and remains **chemically unchanged and unaltered in mass** at the end of the reaction.
>
> * **How it works:**
>   * A catalyst provides an **alternative reaction pathway with a lower activation energy ($E_a$)**.
>   * Because the energy barrier is lowered, a **greater proportion of colliding particles have energy $\\ge E_a$**.
>   * This increases the frequency of successful collisions per unit time.
> * **What a catalyst does NOT do:**
>   * It does **not** increase the kinetic energy or speed of the particles.
>   * It does **not** increase the frequency of total collisions (particles do not collide more often simply because a catalyst is present).
>   * It does **not** alter the enthalpy change ($\\Delta H$) or the yield of products at equilibrium.

> [!BOX]
> ### 📉 Reaction Profile with a Catalyst
>
> ${svgToken(catalystEaSvg)}

> [!IMPORTANT]
> ### 🏭 Major Cambridge Industrial Catalysts
> Transition elements and their oxides are extensively utilised as heterogeneous catalysts in industry:
> 1. **Iron ($\\text{Fe}$):** Used in the **Haber Process** for the industrial manufacture of ammonia:
>    $$N_2(g) + 3H_2(g) \\xrightleftharpoons{\\text{Fe}} 2NH_3(g)$$
> 2. **Vanadium(V) Oxide ($\\text{V}_2\\text{O}_5$):** Used in the **Contact Process** to oxidise sulfur dioxide to sulfur trioxide:
>    $$2SO_2(g) + O_2(g) \\xrightleftharpoons{\\text{V}_2\\text{O}_5} 2SO_3(g)$$
> 3. **Manganese(IV) Oxide ($\\text{MnO}_2$):** Black powder used in the laboratory catalytic decomposition of hydrogen peroxide:
>    $$2H_2O_2(aq) \\xrightarrow{\\text{MnO}_2} 2H_2O(l) + O_2(g)$$
    `,
    keyPoints: [
      "A catalyst provides an alternative pathway with a lower activation energy (Ea).",
      "A catalyst remains chemically unchanged and unchanged in mass at the end of the reaction.",
      "Catalysts do NOT increase the kinetic energy or speed of reacting particles.",
      "Key catalysts: Fe for Haber process, V₂O₅ for Contact process, MnO₂ for H₂O₂ decomposition."
    ]
  },
  {
    id: 'ci-u6-l3-part2',
    title: 'Biological Catalysts: Enzymes',
    type: 'text',
    content: `
> [!NOTE]
> ### 🧬 Biological Catalysts (Enzymes)
> **Enzymes** are protein molecules produced by living cells that act as **biological catalysts**.
> * **Characteristics of Enzymes:**
>   1. **Protein nature:** Formed from long chains of amino acids folded into specific three-dimensional globular structures.
>   2. **High specificity:** Each enzyme typically catalyses only one specific chemical reaction due to its unique **active site** that matches a specific substrate molecule.
>   3. **Sensitivity to Temperature:**
>      * At low temperatures, reaction rate is slow due to low kinetic energy.
>      * As temperature increases up to an **optimum temperature** (typically $37^\\circ\\text{C}$ in humans), rate increases.
>      * Above the optimum temperature (typically $> 45^\\circ\\text{C}-50^\\circ\\text{C}$), the protein structure vibrates excessively, breaking weak intermolecular bonds and causing the enzyme to **denature** (irreversible loss of active site shape).
>   4. **Sensitivity to pH:**
>      * Enzymes function effectively only within a narrow, optimum pH range.
>      * Extreme acidic or basic conditions disrupt ionic bonds in the enzyme, resulting in denaturation.

> [!EXAMPLE]
> #### 📝 Cambridge Exam Question: Catalyst Misconceptions
> **Question:** Which statement about catalysts in chemical reactions is **NOT correct**?
> 
> **A** Catalysts remain chemically unchanged at the end of the reaction  
> **B** Catalysts increase the kinetic energy of reacting particles  
> **C** Catalysts increase the rate of reaction  
> **D** Catalysts lower the activation energy by providing an alternative pathway  
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Evaluate Option A:** True — catalysts are not consumed and remain chemically and mass unchanged.
> > 2. **Evaluate Option B:** Incorrect / False — catalysts have no effect on particle temperature or kinetic energy. Only increasing temperature increases particle kinetic energy.
> > 3. **Evaluate Option C & D:** True — catalysts increase rate by providing an alternative pathway with lower $E_a$.
> > 4. **Conclusion:** **B** is the incorrect statement, making **B** the correct answer.
    `,
    keyPoints: [
      "Enzymes are protein biological catalysts specific to a single substrate.",
      "High temperatures and extreme pH values denature enzymes irreversibly.",
      "Catalysts never increase the kinetic energy of particles."
    ]
  }
];


