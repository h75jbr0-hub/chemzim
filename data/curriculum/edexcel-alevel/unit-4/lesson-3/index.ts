import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

const autocatalysisCurveSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 360" class="w-full h-auto rounded-lg" style="background: linear-gradient(to bottom right, #070f1e, #0b1b35); border: 1px solid #1e293b; font-family: system-ui, -apple-system, sans-serif;">
  <defs>
    <marker id="axisarrow-l3" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#94a3b8" />
    </marker>
    <marker id="labelarrow-l3" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
      <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#38bdf8" />
    </marker>
    <marker id="labelarrow-l3g" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
      <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#10b981" />
    </marker>
  </defs>
  <text x="50%" y="30" text-anchor="middle" fill="#f8fafc" font-size="15" font-weight="bold">Autocatalysis: Reactant Concentration vs. Time</text>
  <g transform="translate(150, 40)">
    <!-- Axes -->
    <line x1="50" y1="270" x2="50" y2="40" stroke="#94a3b8" stroke-width="2" marker-end="url(#axisarrow-l3)" />
    <line x1="50" y1="270" x2="750" y2="270" stroke="#94a3b8" stroke-width="2" marker-end="url(#axisarrow-l3)" />
    <text x="-10" y="155" fill="#94a3b8" font-size="11" font-weight="600" transform="rotate(-90 -10 155)" text-anchor="middle">[Reactant] / mol dm&#x207B;&#xB3;</text>
    <text x="740" y="290" fill="#94a3b8" font-size="11" font-weight="600" text-anchor="end">Time</text>
    <!-- S-Curve -->
    <path d="M 50,70 L 120,70 C 220,70 230,90 280,150 C 330,210 380,260 550,260 L 700,260" fill="none" stroke="#38bdf8" stroke-width="3" />
    <!-- Phase 1: Slow start -->
    <text x="140" y="45" fill="#94a3b8" font-size="11" font-weight="500">Slow start — no autocatalyst product yet</text>
    <path d="M 140,50 L 100,65" fill="none" stroke="#38bdf8" stroke-width="1" stroke-dasharray="2 2" marker-end="url(#labelarrow-l3)" />
    <!-- Phase 2: Acceleration -->
    <text x="370" y="108" fill="#10b981" font-size="11" font-weight="600">Speeds up as autocatalyst product forms</text>
    <path d="M 370,113 L 265,138" fill="none" stroke="#10b981" stroke-width="1" stroke-dasharray="2 2" marker-end="url(#labelarrow-l3g)" />
    <!-- Phase 3: Slowdown -->
    <text x="480" y="215" fill="#94a3b8" font-size="11" font-weight="500">Slows as reactants are depleted</text>
    <path d="M 480,220 L 430,245" fill="none" stroke="#38bdf8" stroke-width="1" stroke-dasharray="2 2" marker-end="url(#labelarrow-l3)" />
    <!-- Phase labels at bottom -->
    <text x="85" y="295" fill="#64748b" font-size="9.5" text-anchor="middle">① Slow</text>
    <text x="265" y="295" fill="#64748b" font-size="9.5" text-anchor="middle">② Acceleration</text>
    <text x="490" y="295" fill="#64748b" font-size="9.5" text-anchor="middle">③ Deceleration</text>
  </g>
</svg>`;

export const lessonTitle = "Chemical Equilibria";
export const lessonNumber = 3;

export const theoryMarkdown = `
# Topic 13: Chemical Equilibria
This lesson covers the quantitative aspects of chemical equilibria, including the deduction and calculation of the equilibrium constants $K_c$ and $K_p$ for both homogeneous and heterogeneous systems.
`;

export const parts: LessonPart[] = [
    {
        id: 'dynamic-equilibrium-concepts-u4-l3',
        title: 'Dynamic Equilibrium Concepts',
        type: 'text',
        content: `
> [!NOTE]
> ### ⚖️ Dynamic Equilibrium
> **Dynamic equilibrium** is established in a closed system when the rate of the forward reaction equals the rate of the reverse reaction.
> At this point, reactants and products are being formed and consumed at the exact same rate.

> [!IMPORTANT]
> ### 🔑 Key Conditions of Equilibrium
> For a system to achieve and maintain dynamic equilibrium, three key conditions must be met:
> 
> 1. **Macroscopic Constancy:** The concentrations of reactants and products, as well as macroscopic properties (like temperature, pressure, density, and color), remain constant.
> 2. **Microscopic Activity:** The reaction remains dynamic. Species continue to react at the molecular level, but with no net change in concentration because forward and reverse rates are equal.
> 3. **System Requirements:** The system must be **closed** to prevent the gain or loss of matter (reactants or products) to the surroundings.

${svgToken(`<svg viewBox="0 0 1000 360" class="w-full h-auto rounded-lg border border-slate-800" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1000" height="360" rx="8" fill="url(#bg-grad)" stroke="#1e293b" stroke-width="1.5" />

  <!-- Gridlines (Left Graph) -->
  <g stroke="#1e293b" stroke-width="0.5" stroke-dasharray="4">
    <line x1="100" y1="120" x2="450" y2="120" />
    <line x1="100" y1="180" x2="450" y2="180" />
    <line x1="100" y1="240" x2="450" y2="240" />
    <line x1="187.5" y1="60" x2="187.5" y2="300" />
    <line x1="275" y1="60" x2="275" y2="300" />
    <line x1="362.5" y1="60" x2="362.5" y2="300" />
  </g>

  <!-- Gridlines (Right Graph) -->
  <g stroke="#1e293b" stroke-width="0.5" stroke-dasharray="4">
    <line x1="580" y1="120" x2="930" y2="120" />
    <line x1="580" y1="180" x2="930" y2="180" />
    <line x1="580" y1="240" x2="930" y2="240" />
    <line x1="667.5" y1="60" x2="667.5" y2="300" />
    <line x1="755" y1="60" x2="755" y2="300" />
    <line x1="842.5" y1="60" x2="842.5" y2="300" />
  </g>

  <!-- Graph 1: Rate vs Time -->
  <!-- Axes -->
  <line x1="100" y1="300" x2="450" y2="300" stroke="#94a3b8" stroke-width="2" />
  <line x1="100" y1="60" x2="100" y2="300" stroke="#94a3b8" stroke-width="2" />
  <!-- Titles & Axis Labels -->
  <text x="275" y="35" text-anchor="middle" fill="#f8fafc" font-size="14" font-weight="bold" font-family="system-ui, sans-serif">Reaction Rates vs. Time</text>
  <text x="275" y="335" text-anchor="middle" fill="#94a3b8" font-size="12" font-family="system-ui, sans-serif">Time</text>
  <text x="40" y="180" text-anchor="middle" fill="#94a3b8" font-size="12" font-family="system-ui, sans-serif" transform="rotate(-90 40 180)">Reaction Rate</text>

  <!-- Equilibrium line (dashed) -->
  <line x1="275" y1="60" x2="275" y2="300" stroke="#64748b" stroke-width="1.5" stroke-dasharray="5 5" />
  <text x="282" y="75" fill="#64748b" font-size="10" font-family="system-ui, sans-serif" font-weight="600">Equilibrium Established</text>

  <!-- Curves -->
  <!-- Forward rate: red/orange -->
  <path d="M 100,80 Q 200,190 275,190 L 450,190" fill="none" stroke="#f43f5e" stroke-width="3" stroke-linecap="round" />
  <text x="120" y="110" fill="#f43f5e" font-size="11" font-family="system-ui, sans-serif" font-weight="bold">Forward Rate</text>

  <!-- Reverse rate: blue/indigo -->
  <path d="M 100,300 Q 200,190 275,190 L 450,190" fill="none" stroke="#6366f1" stroke-width="3" stroke-linecap="round" />
  <text x="120" y="270" fill="#6366f1" font-size="11" font-family="system-ui, sans-serif" font-weight="bold">Reverse Rate</text>

  <circle cx="275" cy="190" r="4" fill="#10b981" />
  <text x="310" y="185" fill="#10b981" font-size="11" font-family="system-ui, sans-serif" font-weight="bold">Rates Equal</text>


  <!-- Graph 2: Concentration vs Time -->
  <!-- Axes -->
  <line x1="580" y1="300" x2="930" y2="300" stroke="#94a3b8" stroke-width="2" />
  <line x1="580" y1="60" x2="580" y2="300" stroke="#94a3b8" stroke-width="2" />
  <!-- Titles & Axis Labels -->
  <text x="755" y="35" text-anchor="middle" fill="#f8fafc" font-size="14" font-weight="bold" font-family="system-ui, sans-serif">Concentrations vs. Time</text>
  <text x="755" y="335" text-anchor="middle" fill="#94a3b8" font-size="12" font-family="system-ui, sans-serif">Time</text>
  <text x="520" y="180" text-anchor="middle" fill="#94a3b8" font-size="12" font-family="system-ui, sans-serif" transform="rotate(-90 520 180)">Concentration</text>

  <!-- Equilibrium line (dashed) -->
  <line x1="755" y1="60" x2="755" y2="300" stroke="#64748b" stroke-width="1.5" stroke-dasharray="5 5" />
  <text x="762" y="75" fill="#64748b" font-size="10" font-family="system-ui, sans-serif" font-weight="600">Equilibrium Established</text>

  <!-- Curves -->
  <!-- Reactants (decreasing): orange -->
  <path d="M 580,80 Q 680,150 755,150 L 930,150" fill="none" stroke="#f59e0b" stroke-width="3" stroke-linecap="round" />
  <text x="600" y="110" fill="#f59e0b" font-size="11" font-family="system-ui, sans-serif" font-weight="bold">Reactants</text>

  <!-- Products (increasing): emerald -->
  <path d="M 580,300 Q 680,220 755,220 L 930,220" fill="none" stroke="#10b981" stroke-width="3" stroke-linecap="round" />
  <text x="600" y="250" fill="#10b981" font-size="11" font-family="system-ui, sans-serif" font-weight="bold">Products</text>

  <text x="800" y="140" fill="#94a3b8" font-size="11" font-family="system-ui, sans-serif" font-weight="600">Constant Concentrations</text>
  <text x="800" y="210" fill="#94a3b8" font-size="11" font-family="system-ui, sans-serif" font-weight="600">(Not necessarily equal)</text>
</svg>`)}

> [!IMPORTANT]
> ### 🧮 The Equilibrium Law
> For a general reversible reaction:
> $$w\\\\text{A} + x\\\\text{B} \\\\rightleftharpoons y\\\\text{C} + z\\\\text{D}$$
> 
> The **Equilibrium Law** dictates that the equilibrium constant ($K_c$) is defined by the ratio of product concentrations to reactant concentrations, with each term raised to the power of its stoichiometric coefficient:
> $$K_c = \\\\frac{[\\\\text{C}]^y [\\\\text{D}]^z}{[\\\\text{A}]^w [\\\\text{B}]^x}$$
> 
> * **Concentration Equilibrium Constant ($K_c$):** Used for systems where amounts are measured in molar concentration ($\\\\text{mol dm}^{-3}$).

> [!EXAMPLE]
> #### 📝 Worked Example 1: Writing Kc Expressions
> **Question:** Write the expression for the concentration equilibrium constant ($K_c$) for the following reversible reactions:
> 
> 1. The Contact Process step:
>    $$2\\\\text{SO}₂\\\\text{(g)} + \\\\text{O}₂\\\\text{(g)} \\\\rightleftharpoons 2\\\\text{SO}₃\\\\text{(g)}$$
> 2. The thermal decomposition of calcium carbonate:
>    $$\\\\text{CaCO}₃\\\\text{(s)} \\\\rightleftharpoons \\\\text{CaO}\\\\text{(s)} + \\\\text{CO}₂\\\\text{(g)}$$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Contact Process Step:**
> >    * All reactants and products are gases, which means this is a homogeneous equilibrium system.
> >    * Write products in the numerator and reactants in the denominator, raising each to the power of its stoichiometric coefficient:
> >      $$K_c = \\\\frac{[\\\\text{SO}₃]^2}{[\\\\text{SO}₂]^2 [\\\\text{O}₂]}$$
> > 
> > 2. **Calcium Carbonate Decomposition:**
> >    * This is a heterogeneous equilibrium system containing both solids ($\\\\text{CaCO}₃$, $\\\\text{CaO}$) and a gas ($\\\\text{CO}₂$).
> >    * The concentrations of pure solids remain constant, so they are omitted from the equilibrium expression.
> >    * Therefore, only the concentration of gaseous carbon dioxide is included:
> >      $$K_c = [\\\\text{CO}₂]$$

> [!EXAMPLE]
> #### 📝 Worked Example 2: Dynamic vs Static / Open vs Closed Systems
> **Question:** A sealed container contains liquid water in dynamic equilibrium with its vapor at $298\\\\text{ K}$.
> 
> 1. Explain what is meant by the term "dynamic equilibrium" in this context.
> 2. State two macroscopic properties of this system that remain constant.
> 3. Explain why dynamic equilibrium would not be achieved if the container were left open.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Meaning of "dynamic equilibrium":**
> >    * The rate of evaporation of liquid water is exactly equal to the rate of condensation of water vapor. At the microscopic level, molecules continue to change state, but there is no net change in the amounts of liquid and vapor.
> > 
> > 2. **Two constant macroscopic properties:**
> >    * The volume (or level) of the liquid water remains constant.
> >    * The gas pressure (vapor pressure) inside the container remains constant.
> > 
> > 3. **Effect of an open container:**
> >    * Water vapor molecules would escape to the surroundings, meaning matter is lost from the system.
> >    * Evaporation would continue but condensation would not occur at the same rate, preventing the system from ever establishing equal rates or constant concentrations.
`,
        keyPoints: [
            'Dynamic equilibrium requires a closed system where no matter can enter or leave.',
            'At equilibrium, the rates of the forward and reverse reactions are equal.',
            'Macroscopic properties (like concentration, pressure, and temperature) remain constant at equilibrium.',
            'At equilibrium, reaction rates must be equal, but reactant and product concentrations are constant and not necessarily equal.'
        ]
    },
    {
        id: 'equilibrium-constant-kc-u4-l3',
        title: 'Equilibrium Constant Kc',
        type: 'text',
        content: `
> [!NOTE]
> ### ⚖️ Homogeneous Reactions
> A **homogeneous reaction** is one in which all reactants and products are in the same physical phase. For example, all species are gases or all are dissolved in an aqueous solution:
> 
> * **Gaseous equilibrium:**
>   $$\\\\text{N}_2\\\\text{O}_4\\\\text{(g)} \\\\rightleftharpoons 2\\\\text{NO}_2\\\\text{(g)}$$
> * **Aqueous equilibrium:**
>   $$\\\\text{CH}_3\\\\text{COOH(aq)} + \\\\text{H}_2\\\\text{O(l)} \\\\rightleftharpoons \\\\text{CH}_3\\\\text{COO}^-\\\\text{(aq)} + \\\\text{H}_3\\\\text{O}^+\\\\text{(aq)}$$

> [!IMPORTANT]
> ### 🧮 The Concentration Equilibrium Constant ($K_c$)
> For a general homogeneous reversible reaction:
> $$w\\\\text{A} + x\\\\text{B} \\\\rightleftharpoons y\\\\text{C} + z\\\\text{D}$$
> 
> The equilibrium constant $K_c$ is expressed as:
> $$K_c = \\\\frac{[\\\\text{C}]^y [\\\\text{D}]^z}{[\\\\text{A}]^w [\\\\text{B}]^x}$$
> 
> Where:
> * Square brackets $[ \\\\ ]$ represent the molar concentration of each species **at equilibrium** in $\\\\text{mol dm}^{-3}$
> * The subscript 'c' denotes that the constant is calculated using concentrations.
> * The value of $K_c$ is constant at a given temperature, and is unaffected by changes in concentration, pressure, or the addition of a catalyst.

> [!BOX]
> ### 📋 Determining Units of $K_c$
> The units of $K_c$ depend on the stoichiometry of the reaction. We calculate the units by substituting $\\\\text{mol dm}^{-3}$ into the $K_c$ expression:
> * **Example 1:** For $\\\\text{H}_2\\\\text{(g)} + \\\\text{I}_2\\\\text{(g)} \\\\rightleftharpoons 2\\\\text{HI(g)}$
>   $$K_c = \\\\frac{[\\\\text{HI}]^2}{[\\\\text{H}_2][\\\\text{I}_2]} \\\\implies \\\\text{Units} = \\\\frac{(\\\\text{mol dm}^{-3})^2}{(\\\\text{mol dm}^{-3})(\\\\text{mol dm}^{-3})} = \\\\text{no units}$$
> * **Example 2:** For $\\\\text{N}_2\\\\text{(g)} + 3\\\\text{H}_2\\\\text{(g)} \\\\rightleftharpoons 2\\\\text{NH}_3\\\\text{(g)}$
>   $$K_c = \\\\frac{[\\\\text{NH}_3]^2}{[\\\\text{N}_2][\\\\text{H}_2]^3} \\\\implies \\\\text{Units} = \\\\frac{(\\\\text{mol dm}^{-3})^2}{(\\\\text{mol dm}^{-3})(\\\\text{mol dm}^{-3})^3} = \\\\text{dm}^6\\\\text{ mol}^{-2}$$

> [!BOX]
> ### 📋 The ICE Methodology for Calculations
> To calculate the numerical value of $K_c$, follow the **ICE** (Initial, Change, Equilibrium) procedure:
> 
> 1. **Initial:** State the initial moles of all species.
> 2. **Change:** Use the stoichiometry of the balanced equation to determine the molar change (usually represented in terms of $\\\\pm x$).
> 3. **Equilibrium Moles:** Calculate the moles present at equilibrium ($\\\\text{Initial} \\\\pm \\\\text{Change}$).
> 4. **Equilibrium Concentration (Crucial Step):** Divide the equilibrium moles by the total volume ($V$) of the system in $\\\\text{dm}^3$ to obtain concentration ($c = \\\\frac{n}{V}$).
> 5. **Substitution:** Insert these equilibrium concentrations into the $K_c$ expression and determine the units by canceling out the $\\\\text{mol dm}^{-3}$ terms.

> [!WARNING]
> ### ⚠️ Common Pitfall: Forgetting the System Volume ($V$)
> A very common student mistake is using the equilibrium moles directly in the $K_c$ expression instead of converting them to concentrations.
> * **When is it safe to use moles?** Only when the total number of moles of reactants equals the total number of moles of products (as the volume terms cancel out mathematically).
> * **When is it critical to divide by $V$?** Whenever the sum of stoichiometric coefficients on both sides of the equation is unequal (e.g., $1 + 3 \\\\neq 2$ in the Haber process). Failure to divide by volume will lead to incorrect numerical answers!

> [!EXAMPLE]
> #### 📝 Worked Example 1: Homogeneous Liquid System
> **Question:** $2.00\\\\text{ mol}$ of ethanoic acid and $2.00\\\\text{ mol}$ of ethanol are mixed and allowed to reach equilibrium with ethyl ethanoate and water at $298\\\\text{ K}$. At equilibrium, the amount of ethanoic acid remaining is found to be $0.67\\\\text{ mol}$. Calculate $K_c$ for the reaction at $298\\\\text{ K}$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Write the balanced chemical equation:**
> >    $$\\\\text{CH}_3\\\\text{COOH(l)} + \\\\text{CH}_3\\\\text{CH}_2\\\\text{OH(l)} \\\\rightleftharpoons \\\\text{CH}_3\\\\text{COOCH}_2\\\\text{CH}_3\\\\text{(l)} + \\\\text{H}_2\\\\text{O(l)}$$
> > 
> > 2. **Set up a mole table (ICE method) to determine equilibrium moles:**
> > 
> > | Component | CH₃COOH | CH₃CH₂OH | CH₃COOCH₂CH₃ | H₂O |
> > | :--- | :--- | :--- | :--- | :--- |
> > | Initial Moles (mol) | 2.00 | 2.00 | 0.00 | 0.00 |
> > | Change (mol) | -1.33 | -1.33 | +1.33 | +1.33 |
> > | Equilibrium Moles (mol) | 0.67 | 0.67 | 1.33 | 1.33 |
> > 
> > 3. **Convert moles to concentrations using total volume $V$ (in $\\\\text{dm}^3$):**
> >    * $[\\\\text{CH}_3\\\\text{COOH}] = \\\\frac{0.67}{V}$
> >    * $[\\\\text{CH}_3\\\\text{CH}_2\\\\text{OH}] = \\\\frac{0.67}{V}$
> >    * $[\\\\text{CH}_3\\\\text{COOCH}_2\\\\text{CH}_3] = \\\\frac{1.33}{V}$
> >    * $[\\\\text{H}_2\\\\text{O}] = \\\\frac{1.33}{V}$
> > 
> > 4. **Write the $K_c$ expression and substitute the concentrations:**
> >    $$K_c = \\\\frac{[\\\\text{CH}_3\\\\text{COOCH}_2\\\\text{CH}_3][\\\\text{H}_2\\\\text{O}]}{[\\\\text{CH}_3\\\\text{COOH}][\\\\text{CH}_3\\\\text{CH}_2\\\\text{OH}]}$$
> >    $$K_c = \\\\frac{(\\\\frac{1.33}{V}) (\\\\frac{1.33}{V})}{(\\\\frac{0.67}{V}) (\\\\frac{0.67}{V})} = \\\\frac{1.33 \\\\times 1.33}{0.67 \\\\times 0.67} = 3.94$$
> > 
> > 5. **Determine units:**
> >    * The volume terms $V$ cancel out completely.
> >    * Therefore, $K_c = 3.94$ (no units)

> [!EXAMPLE]
> #### 📝 Worked Example 2: Gaseous Homogeneous System
> **Question:** $0.100\\\\text{ mol}$ of $\\\\text{N}_2\\\\text{O}_4$ is placed into a closed $0.100\\\\text{ dm}^3$ flask and allowed to reach equilibrium with $\\\\text{NO}_2$ at $398\\\\text{ K}$. At equilibrium, there is $0.071\\\\text{ mol}$ of $\\\\text{N}_2\\\\text{O}_4$ present. Calculate $K_c$ for this reaction at $398\\\\text{ K}$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Write the balanced chemical equation:**
> >    $$\\\\text{N}_2\\\\text{O}_4\\\\text{(g)} \\\\rightleftharpoons 2\\\\text{NO}_2\\\\text{(g)}$$
> > 
> > 2. **Calculate equilibrium moles using the stoichiometric ratio:**
> > 
> > | Component | N₂O₄ | NO₂ |
> > | :--- | :--- | :--- |
> > | Initial Moles (mol) | 0.100 | 0.00 |
> > | Change (mol) | -0.029 | +0.058 |
> > | Equilibrium Moles (mol) | 0.071 | 0.058 |
> > 

> > 3. **Convert moles to concentrations using volume $V = 0.100\\\\text{ dm}^3$:**
> >    * $[\\\\text{N}_2\\\\text{O}_4] = \\\\frac{0.071\\\\text{ mol}}{0.100\\\\text{ dm}^3} = 0.71\\\\text{ mol dm}^{-3}$
> >    * $[\\\\text{NO}_2] = \\\\frac{0.058\\\\text{ mol}}{0.100\\\\text{ dm}^3} = 0.58\\\\text{ mol dm}^{-3}$
> > 
> > 4. **Calculate $K_c$ value and units:**
> >    $$K_c = \\\\frac{[\\\\text{NO}_2]^2}{[\\\\text{N}_2\\\\text{O}_4]} = \\\\frac{(0.58)^2}{0.71} = 0.474$$
> >    $$\\\\text{Units} = \\\\frac{(\\\\text{mol dm}^{-3})^2}{\\\\text{mol dm}^{-3}} = \\\\text{mol dm}^{-3}$$
> >    * Final answer: $K_c = 0.474\\\\text{ mol dm}^{-3}$

> [!EXAMPLE]
> #### 📝 Worked Example 3: Homogeneous Gaseous System (Volume does not cancel)
> **Question:** A dynamic equilibrium is established between carbon monoxide, hydrogen, and methanol:
> $$\\\\text{CO(g)} + 2\\\\text{H}_2\\\\text{(g)} \\\\rightleftharpoons \\\\text{CH}_3\\\\text{OH(g)}$$
> The equilibrium concentrations for the three components are:
> * $[\\\\text{CO}] = 3.1 \\\\times 10^{-3}\\\\text{ mol dm}^{-3}$
> * $[\\\\text{H}_2] = 2.4 \\\\times 10^{-2}\\\\text{ mol dm}^{-3}$
> * $[\\\\text{CH}_3\\\\text{OH}] = 2.6 \\\\times 10^{-5}\\\\text{ mol dm}^{-3}$
> 
> Write the expression for $K_c$, calculate its value, and state the units.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Write the expression for $K_c$:**
> >    $$K_c = \\\\frac{[\\\\text{CH}_3\\\\text{OH}]}{[\\\\text{CO}][\\\\text{H}_2]^2}$$
> > 
> > 2. **Substitute equilibrium concentrations:**
> >    $$K_c = \\\\frac{2.6 \\\\times 10^{-5}}{(3.1 \\\\times 10^{-3}) \\\\times (2.4 \\\\times 10^{-2})^2}$$
> >    $$K_c = \\\\frac{2.6 \\\\times 10^{-5}}{3.1 \\\\times 10^{-3} \\\\times 5.76 \\\\times 10^{-4}}$$
> >    $$K_c = \\\\frac{2.6 \\\\times 10^{-5}}{1.7856 \\\\times 10^{-6}} = 14.56$$
> > 
> > 3. **Determine the units:**
> >    $$\\\\text{Units} = \\\\frac{\\\\text{mol dm}^{-3}}{(\\\\text{mol dm}^{-3}) (\\\\text{mol dm}^{-3})^2} = \\\\frac{1}{\\\\text{mol}^2\\\\text{ dm}^{-6}} = \\\\text{dm}^6\\\\text{ mol}^{-2}$$
> >    * Final Answer: $K_c = 15\\\\text{ dm}^6\\\\text{ mol}^{-2}$ (to 2 significant figures)

> [!EXAMPLE]
> #### 📝 Worked Example 4: Esterification with Excess Reactant
> **Question:** The reaction between ethanoic acid and ethanol is reversible:
> $$\\\\text{CH}_3\\\\text{COOH(l)} + \\\\text{CH}_3\\\\text{CH}_2\\\\text{OH(l)} \\\\rightleftharpoons \\\\text{CH}_3\\\\text{COOCH}_2\\\\text{CH}_3\\\\text{(l)} + \\\\text{H}_2\\\\text{O(l)}$$
> $6.0\\\\text{ mol}$ of ethanoic acid and $12.5\\\\text{ mol}$ of ethanol are mixed together with an acid catalyst in a total volume of $V\\\\text{ dm}^3$. At equilibrium, only $1.0\\\\text{ mol}$ of ethanoic acid remains. Write the $K_c$ expression, calculate the equilibrium amounts of the other species, and find the value of $K_c$.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Write the $K_c$ expression:**
> >    $$K_c = \\\\frac{[\\\\text{CH}_3\\\\text{COOCH}_2\\\\text{CH}_3][\\\\text{H}_2\\\\text{O}]}{[\\\\text{CH}_3\\\\text{COOH}][\\\\text{CH}_3\\\\text{CH}_2\\\\text{OH}]}$$
> > 
> > 2. **Set up an ICE calculation to find equilibrium moles:**
> > 
> > | Component | CH₃COOH | CH₃CH₂OH | CH₃COOCH₂CH₃ | H₂O |
> > | :--- | :--- | :--- | :--- | :--- |
> > | Initial Moles (mol) | 6.0 | 12.5 | 0.0 | 0.0 |
> > | Change (mol) | -5.0 | -5.0 | +5.0 | +5.0 |
> > | Equilibrium Moles (mol) | 1.0 | 7.5 | 5.0 | 5.0 |
> > 

> > 3. **Calculate $K_c$ (noting that volume $V$ cancels out):**
> >    $$K_c = \\\\frac{(\\\\frac{5.0}{V}) (\\\\frac{5.0}{V})}{(\\\\frac{1.0}{V}) (\\\\frac{7.5}{V})} = \\\\frac{5.0 \\\\times 5.0}{1.0 \\\\times 7.5} = 3.33$$
> >    * Final Answer: $K_c = 3.3$ (no units, to 2 significant figures)

> [!EXAMPLE]
> #### 📝 Worked Example 5: Hydrogen Iodide Equilibrium
> **Question:** $0.30\\\\text{ mol}$ of $\\\\text{H}_2\\\\text{(g)}$ is mixed with $0.20\\\\text{ mol}$ of $\\\\text{I}_2\\\\text{(g)}$ and allowed to reach equilibrium:
> $$\\\\text{H}_2\\\\text{(g)} + \\\\text{I}_2\\\\text{(g)} \\\\rightleftharpoons 2\\\\text{HI(g)}$$
> At equilibrium, $0.14\\\\text{ mol}$ of $\\\\text{H}_2\\\\text{(g)}$ remains. Calculate the value of $K_c$ to an appropriate number of significant figures.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Set up a mole table (ICE method) to determine equilibrium moles:**
> > 
> > | Component | H₂ | I₂ | HI |
> > | :--- | :--- | :--- | :--- |
> > | Initial Moles (mol) | 0.30 | 0.20 | 0.00 |
> > | Change (mol) | -0.16 | -0.16 | +0.32 |
> > | Equilibrium Moles (mol) | 0.14 | 0.04 | 0.32 |
> > 
> > 2. **Write $K_c$ expression and substitute (Volume $V$ cancels out):**
> >    $$K_c = \\\\frac{[\\\\text{HI}]^2}{[\\\\text{H}_2][\\\\text{I}_2]}$$
> >    $$K_c = \\\\frac{(0.32)^2}{0.14 \\\\times 0.04} = \\\\frac{0.1024}{0.0056} = 18.28$$
> >    * Final Answer: $K_c = 18$ (no units, to 2 significant figures)

> [!EXAMPLE]
> #### 📝 Worked Example 6: Reaction Extent and Reactant Calculation
> **Question:** Nitrogen and oxygen gases react to form nitrogen(II) oxide:
> $$\\\\text{N}_2\\\\text{(g)} + \\\\text{O}_2\\\\text{(g)} \\\\rightleftharpoons 2\\\\text{NO(g)}$$
> The equilibrium constant $K_c$ at $298\\\\text{ K}$ is $4.8 \\\\times 10^{-31}$. 
> 
> 1. What does the value of $K_c$ tell you about the position of equilibrium of this reaction at $298\\\\text{ K}$?
> 2. An equilibrium mixture with a volume of $1.2\\\\text{ dm}^3$ contains $1.1\\\\text{ mol}$ of $\\\\text{N}_2\\\\text{(g)}$ and $4.0 \\\\times 10^{-16}\\\\text{ mol}$ of $\\\\text{NO(g)}$. Calculate the equilibrium concentration of $\\\\text{O}_2\\\\text{(g)}$ in this mixture.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > **1. Analyze the equilibrium constant magnitude:**
> > * The value of $K_c = 4.8 \\\\times 10^{-31}$ is extremely small ($K_c \\\\ll 1$).
> > * This tells us that the equilibrium position lies far to the left, heavily favoring the reactants ($\\\\text{N}_2$ and $\\\\text{O}_2$). The forward reaction barely proceeds at room temperature.
> > 
> > **2. Calculate concentrations from moles and volume ($V = 1.2\\\\text{ dm}^3$):**
> > * $[\\\\text{N}_2] = \\\\frac{1.1\\\\text{ mol}}{1.2\\\\text{ dm}^3} = 0.9167\\\\text{ mol dm}^{-3}$
> > * $[\\\\text{NO}] = \\\\frac{4.0 \\\\times 10^{-16}\\\\text{ mol}}{1.2\\\\text{ dm}^3} = 3.333 \\\\times 10^{-16}\\\\text{ mol dm}^{-3}$
> > 
> > **3. Set up the $K_c$ expression:**
> > $$K_c = \\\\frac{[\\\\text{NO}]^2}{[\\\\text{N}_2][\\\\text{O}_2]}$$
> > 
> > **4. Rearrange the expression to solve for $[\\\\text{O}_2]$:**
> > $$[\\\\text{O}_2] = \\\\frac{[\\\\text{NO}]^2}{K_c \\\\times [\\\\text{N}_2]}$$
> > 
> > **5. Substitute values and solve:**
> > $$[\\\\text{O}_2] = \\\\frac{(3.333 \\\\times 10^{-16})^2}{(4.8 \\\\times 10^{-31}) \\\\times 0.9167}$$
> > $$[\\\\text{O}_2] = \\\\frac{1.111 \\\\times 10^{-31}}{4.40 \\\\times 10^{-31}} = 0.2525$$
> > * Final Answer: $[\\\\text{O}_2] = 0.25\\\\text{ mol dm}^{-3}$ (to 2 significant figures)

> [!NOTE]
> ### 🧪 Heterogeneous Reactions & Omissions
> A **heterogeneous reaction** is one in which reactants and products are in different phases.
> 
> **Important Rule:** The concentration of a pure solid or a pure liquid solvent at a given temperature is determined solely by its density, which remains constant. Because their concentrations do not change, they are **omitted** from the $K_c$ expression (their constant values are absorbed into the value of $K_c$):
> 
> * **Example 1:** Decomposition of Calcium Carbonate
>   $$\\\\text{CaCO}_3\\\\text{(s)} \\\\rightleftharpoons \\\\text{CaO(s)} + \\\\text{CO}_2\\\\text{(g)}$$
>   * Since $\\\\text{CaCO}_3$ and $\\\\text{CaO}$ are solids, their concentrations are omitted:
>     $$K_c = [\\\\text{CO}_2\\\\text{(g)}]$$
> * **Example 2:** Iron reacting with steam
>   $$3\\\\text{Fe(s)} + 4\\\\text{H}_2\\\\text{O(g)} \\\\rightleftharpoons \\\\text{Fe}_3\\\\text{O}_4\\\\text{(s)} + 4\\\\text{H}_2\\\\text{(g)}$$
>   * Solids $\\\\text{Fe}$ and $\\\\text{Fe}_3\\\\text{O}_4$ are omitted:
>     $$K_c = \\\\frac{[\\\\text{H}_2\\\\text{(g)}]^4}{[\\\\text{H}_2\\\\text{O(g)}]^4}$$
> * **Example 3:** Self-ionization of water
>   $$\\\\text{H}_2\\\\text{O(l)} \\\\rightleftharpoons \\\\text{H}^+\\\\text{(aq)} + \\\\text{OH}^-\\\\text{(aq)}$$
>   * Pure liquid water is omitted:
>     $$K_c = [\\\\text{H}^+\\\\text{(aq)}][\\\\text{OH}^-\\\\text{(aq)}]$$

> [!EXAMPLE]
> #### 📝 Worked Example 7: Heterogeneous System Calculation
> **Question:** The equilibrium constant $K_c$ for the reaction:
> $$\\\\text{H}_2\\\\text{O(g)} + \\\\text{C(s)} \\\\rightleftharpoons \\\\text{H}_2\\\\text{(g)} + \\\\text{CO(g)}$$
> has a value of $4.92 \\\\times 10^{-5}\\\\text{ mol dm}^{-3}$ at $700\\\\text{ K}$.
> A mixture of water vapor and carbon is heated to $700\\\\text{ K}$ in a closed vessel and allowed to reach equilibrium.
> Calculate the equilibrium concentrations of $\\\\text{H}_2$ and $\\\\text{CO}$ when the equilibrium concentration of $\\\\text{H}_2\\\\text{O}$ is $2.00 \\\\times 10^{-2}\\\\text{ mol dm}^{-3}$.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Write the $K_c$ expression:**
> >    * Since carbon is a pure solid ($\\\\text{C(s)}$), its concentration remains constant and is **omitted** from the expression:
> >      $$K_c = \\\\frac{[\\\\text{H}_2][\\\\text{CO}]}{[\\\\text{H}_2\\\\text{O}]}$$
> > 
> > 2. **Establish the stoichiometric relationship:**
> >    * Since $\\\\text{H}_2\\\\text{(g)}$ and $\\\\text{CO(g)}$ are produced in a $1:1$ molar ratio, their equilibrium concentrations must be equal:
> >      $$[\\\\text{H}_2] = [\\\\text{CO}] = x$$
> > 
> > 3. **Substitute and solve for $x$:**
> >    $$4.92 \\\\times 10^{-5} = \\\\frac{x^2}{2.00 \\\\times 10^{-2}}$$
> >    $$x^2 = (4.92 \\\\times 10^{-5}) \\\\times (2.00 \\\\times 10^{-2}) = 9.84 \\\\times 10^{-7}$$
> >    $$x = \\\\sqrt{9.84 \\\\times 10^{-7}} = 9.92 \\\\times 10^{-4}$$
> >    * Final Answer: $[\\\\text{H}_2] = [\\\\text{CO}] = 9.92 \\\\times 10^{-4}\\\\text{ mol dm}^{-3}$ (to 3 significant figures)
`,
        keyPoints: [
            'Only temperature changes the numerical value of Kc.',
            'Pure solids and pure liquid solvents are omitted from the Kc expression.',
            'When using ICE tables, equilibrium moles must be divided by total volume V to get concentration, unless reactant and product coefficients cancel out.'
        ],
        equationVisualizer: {
            reactants: [['N2O4', '#3b82f6']],
            products: [['NO2', '#ef4444']],
            description: "Thermal dissociation of dinitrogen tetroxide into nitrogen dioxide."
        }
    },
    {
        id: 'equilibrium-constant-kp-u4-l3',
        title: 'Equilibrium Constant Kp',
        type: 'text',
        content: `
> [!NOTE]
> ### 💨 Partial Pressures in Gaseous Systems
> For reversible reactions involving gases, we can express the amounts of reactants and products in terms of their **partial pressures** rather than concentrations:
> 
> * **Partial Pressure ($p_i$):** The pressure that an individual gas in a mixture would exert if it alone occupied the entire volume of the container.
> * **Mole Fraction ($\\\\chi_i$):** The ratio of the number of moles of a specific gas to the total number of moles of all gases present in the mixture:
>   $$\\\\chi_A = \\\\frac{\\\\text{moles of A}}{\\\\text{total moles of gas}}$$
> * **Calculating Partial Pressure:** Multiplying the mole fraction of a gas by the total pressure ($P_{\\\\text{total}}$) of the mixture:
>   $$p_A = \\\\chi_A \\\\times P_{\\\\text{total}}$$
> * **Total Pressure ($P$):** The sum of the individual partial pressures:
>   $$P_{\\\\text{total}} = p_A + p_B + p_C + \\\\dots$$

${svgToken(`<svg viewBox="0 0 1000 360" class="w-full h-auto rounded-lg border border-slate-800" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg-grad-3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
    <linearGradient id="container-grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0b1329" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#1c2541" stop-opacity="0.8" />
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1000" height="360" rx="8" fill="url(#bg-grad-3)" stroke="#1e293b" stroke-width="1.5" />

  <!-- Title -->
  <text x="500" y="35" text-anchor="middle" fill="#f8fafc" font-size="15" font-weight="bold" font-family="system-ui, sans-serif">Dalton's Law of Partial Pressures & Mole Fractions</text>

  <!-- Left: Closed Vessel Visualizer -->
  <!-- Container Box -->
  <rect x="80" y="70" width="300" height="220" rx="12" fill="url(#container-grad)" stroke="#334155" stroke-width="2" />
  <text x="230" y="95" text-anchor="middle" fill="#94a3b8" font-size="11" font-weight="bold" font-family="system-ui, sans-serif">Closed Vessel (Constant V & T)</text>

  <!-- Particles (Gas A - Red/Rose: 6 particles) -->
  <circle cx="120" cy="130" r="10" fill="#f43f5e" />
  <circle cx="210" cy="160" r="10" fill="#f43f5e" />
  <circle cx="310" cy="140" r="10" fill="#f43f5e" />
  <circle cx="160" cy="220" r="10" fill="#f43f5e" />
  <circle cx="280" cy="250" r="10" fill="#f43f5e" />
  <circle cx="330" cy="210" r="10" fill="#f43f5e" />

  <!-- Particles (Gas B - Blue/Indigo: 4 particles) -->
  <circle cx="160" cy="170" r="10" fill="#6366f1" />
  <circle cx="260" cy="130" r="10" fill="#6366f1" />
  <circle cx="230" cy="210" r="10" fill="#6366f1" />
  <circle cx="110" cy="250" r="10" fill="#6366f1" />

  <!-- Legend -->
  <circle cx="120" cy="325" r="7" fill="#f43f5e" />
  <text x="135" y="329" fill="#f8fafc" font-size="11" font-family="system-ui, sans-serif">Gas A (n = 6 mol)</text>

  <circle cx="250" cy="325" r="7" fill="#6366f1" />
  <text x="265" y="329" fill="#f8fafc" font-size="11" font-family="system-ui, sans-serif">Gas B (n = 4 mol)</text>

  <!-- Middle: Arrow -->
  <path d="M 410,180 L 460,180 M 450,173 L 460,180 L 450,187" fill="none" stroke="#94a3b8" stroke-width="3" stroke-linecap="round" />

  <!-- Right: Calculations & Definitions -->
  <!-- Box border for calculations -->
  <rect x="500" y="70" width="420" height="220" rx="12" fill="#0f172a" stroke="#1e293b" stroke-width="1.5" />

  <!-- Total moles -->
  <text x="525" y="105" fill="#f8fafc" font-size="13" font-weight="bold" font-family="system-ui, sans-serif">Total moles (n<tspan baseline-shift="sub" font-size="8.5">total</tspan>) = 6 + 4 = 10 mol</text>
  <text x="525" y="125" fill="#94a3b8" font-size="11" font-family="system-ui, sans-serif">Let Total Pressure (P<tspan baseline-shift="sub" font-size="8.5">total</tspan>) = 10.0 atm</text>

  <!-- Mole Fraction Section -->
  <line x1="525" y1="140" x2="895" y2="140" stroke="#1e293b" stroke-width="1" />
  <text x="525" y="160" fill="#f8fafc" font-size="12" font-weight="bold" font-family="system-ui, sans-serif">1. Mole Fractions (\u03c7):</text>
  
  <text x="545" y="185" fill="#f43f5e" font-size="12" font-family="system-ui, sans-serif" font-weight="600">\u03c7<tspan baseline-shift="sub" font-size="8.5">A</tspan> = 6 / 10 = 0.60</text>
  <text x="545" y="205" fill="#6366f1" font-size="12" font-family="system-ui, sans-serif" font-weight="600">\u03c7<tspan baseline-shift="sub" font-size="8.5">B</tspan> = 4 / 10 = 0.40</text>
  <text x="750" y="195" fill="#10b981" font-size="11" font-family="system-ui, sans-serif" font-weight="bold">Self-Check: \u03a3 \u03c7 = 1.00</text>

  <!-- Partial Pressure Section -->
  <line x1="525" y1="220" x2="895" y2="220" stroke="#1e293b" stroke-width="1" />
  <text x="525" y="240" fill="#f8fafc" font-size="12" font-weight="bold" font-family="system-ui, sans-serif">2. Partial Pressures (p = \u03c7 \u00d7 P<tspan baseline-shift="sub" font-size="8.5">total</tspan>):</text>

  <text x="545" y="265" fill="#f43f5e" font-size="12" font-family="system-ui, sans-serif" font-weight="600">p<tspan baseline-shift="sub" font-size="8.5">A</tspan> = 0.60 \u00d7 10.0 = 6.0 atm</text>
  <text x="545" y="285" fill="#6366f1" font-size="12" font-family="system-ui, sans-serif" font-weight="600">p<tspan baseline-shift="sub" font-size="8.5">B</tspan> = 0.40 \u00d7 10.0 = 4.0 atm</text>
  <text x="750" y="275" fill="#10b981" font-size="11" font-family="system-ui, sans-serif" font-weight="bold">Dalton's Law: \u03a3 p = P<tspan baseline-shift="sub" font-size="8.5">total</tspan></text>
</svg>`)}

> [!IMPORTANT]
> ### 🧮 The Pressure Equilibrium Constant ($K_p$)
> For a general gaseous reaction:
> $$w\\\\text{A(g)} + x\\\\text{B(g)} \\\\rightleftharpoons y\\\\text{C(g)} + z\\\\text{D(g)}$$
> 
> The equilibrium constant $K_p$ is defined as:
> $$K_p = \\\\frac{(p_{\\\\text{C}})^y (p_{\\\\text{D}})^z}{(p_{\\\\text{A}})^w (p_{\\\\text{B}})^x}$$
> 
> Where:
> * $p_i$ represents the equilibrium partial pressure of each gas (usually in $\\\\text{atm}$ or $\\\\text{kPa}$)
> * Like $K_c$, the value of $K_p$ is constant at a constant temperature, and only changes when temperature changes.
> [!WARNING]
> ### 🛑 Critical Exam Hint: Notation for $K_p$
> You **MUST** use round brackets and the symbol $p$ for partial pressures in $K_p$ expressions (e.g., $(p_{\\\\text{CO}_2})$).
> 
> **Do NOT use square brackets** (e.g., $[\\\\text{CO}_2]$), as square brackets are reserved strictly for concentrations in $\\\\text{mol dm}^{-3}$. Using them in a $K_p$ expression will result in a loss of marks in exams.

> [!EXAMPLE]
> #### 📝 Worked Example 1: Calculating Kp from Initial Moles
> **Question:** $1.00\\\\text{ mol}$ of $\\\\text{PCl}_5$ vapour is heated to $500\\\\text{ K}$ in a sealed vessel. The equilibrium mixture, at a total pressure of $6.00\\\\text{ atm}$, contains $0.60\\\\text{ mol}$ of chlorine gas. Calculate $K_p$ for the reaction at this temperature:
> $$\\\\text{PCl}_5\\\\text{(g)} \\\\rightleftharpoons \\\\text{PCl}_3\\\\text{(g)} + \\\\text{Cl}_2\\\\text{(g)}$$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Set up an ICE mole table to find equilibrium moles, mole fractions, and partial pressures:**
> > 
> > | Component | PCl₅ | PCl₃ | Cl₂ |
> > | :--- | :--- | :--- | :--- |
> > | Initial Moles (mol) | 1.00 | 0.00 | 0.00 |
> > | Change (mol) | -0.60 | +0.60 | +0.60 |
> > | Equilibrium Moles (mol) | 0.40 | 0.60 | 0.60 |
> > | Mole Fraction ($\chi$) | 0.25 | 0.375 | 0.375 |
> > | Partial Pressure (p / atm) | 1.50 | 2.25 | 2.25 |
> > 
> > * **Total equilibrium moles** = $0.40 + 0.60 + 0.60 = 1.60\\\\text{ mol}$
> > * **Total pressure** = $6.00\\\\text{ atm}$
> > 
> > 2. **Write the $K_p$ expression and substitute the values:**
> >    $$K_p = \\\\frac{p(\\\\text{PCl}_3) \\\\times p(\\\\text{Cl}_2)}{p(\\\\text{PCl}_5)}$$
> >    $$K_p = \\\\frac{2.25 \\\\times 2.25}{1.50} = 3.38$$
> > 
> > 5. **Determine units:**
> >    * $\\\\text{Units} = \\\\frac{\\\\text{atm} \\\\times \\\\text{atm}}{\\\\text{atm}} = \\\\text{atm}$
> >    * Final answer: $K_p = 3.38\\\\text{ atm}$

> [!EXAMPLE]
> #### 📝 Worked Example 2: Sulfuric Acid Contact Process
> **Question:** One stage in the manufacture of sulfuric acid by the contact process involves the reaction between sulfur dioxide and oxygen to form sulfur trioxide:
> $$2\\text{SO}_2\\text{(g)} + \\text{O}_2\\text{(g)} \\rightleftharpoons 2\\text{SO}_3\\text{(g)}$$
> 
> 1. Write an expression for $K_p$ for this reaction.
> 2. An equilibrium is set up for this reaction at $700\\text{ K}$. At this temperature, the partial pressure of $\\text{SO}_2$ is $0.100\\text{ atm}$, that of $\\text{O}_2$ is $0.500\\text{ atm}$, and $K_p$ for the reaction is $3.00 \\times 10^4\\text{ atm}^{-1}$. Calculate the partial pressure of $\\text{SO}_3$ in this equilibrium mixture and hence determine the percentage of $\\text{SO}_3$ present in the mixture.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Write the $K_p$ expression:**
> >    $$K_p = \\frac{(p(\\text{SO₃}))^2}{(p(\\text{SO₂}))^2 \\times p(\\text{O₂})}$$
> > 
> > 2. **Rearrange to solve for $(p(\\text{SO₃}))^2$:**
> >    $$(p(\\text{SO₃}))^2 = K_p \\times (p(\\text{SO₂}))^2 \\times p(\\text{O₂})$$
> > 
> > 3. **Substitute values:**
> >    $$(p(\\text{SO₃}))^2 = (3.00 \\times 10^4) \\times (0.100)^2 \\times 0.500$$
> >    $$(p(\\text{SO₃}))^2 = 30000 \\times 0.0100 \\times 0.500 = 150$$
> >    $$p(\\text{SO₃}) = \\sqrt{150} = 12.25\\text{ atm}$$
> > 
> > 4. **Calculate total pressure ($P_{\\text{total}}$):**
> >    $$P_{\\text{total}} = p(\\text{SO₂}) + p(\\text{O₂}) + p(\\text{SO₃}) = 0.100 + 0.500 + 12.25 = 12.85\\text{ atm}$$
> > 
> > 5. **Calculate percentage of $\\text{SO}_3$:**
> >    $$\\text{\\% of SO₃} = \\frac{p(\\text{SO₃})}{P_{\\text{total}}} \\times 100 = \\frac{12.25}{12.85} \\times 100 = 95.33$$
> >    * Final Answer: $p(\\text{SO}_3) = 12.3\\text{ atm}$, Percentage of $\\text{SO}_3 = 95.3\\%$ (to 3 significant figures)

> [!EXAMPLE]
> #### 📝 Worked Example 3: Phosgene Synthesis
> $$\\\\text{CO(g)} + \\\\text{Cl}_2\\\\text{(g)} \\\\rightleftharpoons \\\\text{COCl}_2\\\\text{(g)}$$
> The equilibrium partial pressures of the mixture are:
> * $p(\\\\text{CO}) = 2.47 \\\\times 10^{-8}\\\\text{ atm}$
> * $p(\\\\text{Cl}_2) = 2.47 \\\\times 10^{-8}\\\\text{ atm}$
> * $p(\\\\text{COCl}_2) = 4.08 \\\\times 10^{-10}\\\\text{ atm}$
> 
> 1. What is meant by the term **partial pressure**?
> 2. Write an expression for $K_p$ for this reaction and calculate its value, giving the units.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Define partial pressure:**
> >    * **Partial pressure** is the pressure that an individual gas in a mixture would exert if it alone occupied the entire volume of the container at the same temperature.
> > 
> > 2. **Write the expression for $K_p$:**
> >    $$K_p = \\\\frac{p(\\\\text{COCl}_2)}{p(\\\\text{CO}) \\\\times p(\\\\text{Cl}_2)}$$
> > 
> > 3. **Substitute values and calculate:**
> >    $$K_p = \\\\frac{4.08 \\\\times 10^{-10}}{(2.47 \\\\times 10^{-8}) \\\\times (2.47 \\\\times 10^{-8})}$$
> >    $$K_p = \\\\frac{4.08 \\\\times 10^{-10}}{6.1009 \\\\times 10^{-16}} = 6.6875 \\\\times 10^5$$
> > 
> > 4. **Determine the units:**
> >    $$\\\\text{Units} = \\\\frac{\\\\text{atm}}{\\\\text{atm} \\\\times \\\\text{atm}} = \\\\text{atm}^{-1}$$
> >    * Final Answer: $K_p = 6.69 \\\\times 10^5\\\\text{ atm}^{-1}$ (to 3 significant figures)

> [!EXAMPLE]
> #### 📝 Worked Example 4: Chlorine Dissociation
> **Question:** When chlorine gas is heated to a high temperature, the molecules dissociate into chlorine atoms:
> $$\\\\text{Cl}_2\\\\text{(g)} \\\\rightleftharpoons 2\\\\text{Cl(g)}$$
> Some chlorine gas is placed in a closed container and heated to $1400\\\\text{ K}$ until equilibrium is established. The partial pressure of $p(\\\\text{Cl}_2)$ is $0.84\\\\text{ atm}$ and that of $p(\\\\text{Cl})$ is $0.030\\\\text{ atm}$.
> 1. Determine the mole fraction of Cl in the equilibrium mixture.
> 2. Write an expression for $K_p$ for this reaction.
> 3. Calculate the value of $K_p$ at $1400\\\\text{ K}$ and state the units.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate total pressure ($P_{\\\\text{total}}$):**
> >    $$P_{\\\\text{total}} = p(\\\\text{Cl}_2) + p(\\\\text{Cl}) = 0.84 + 0.030 = 0.87\\\\text{ atm}$$
> > 
> > 2. **Calculate mole fraction of Cl ($\\\\chi_{\\\\text{Cl}}$):**
> >    $$\\\\chi_{\\\\text{Cl}} = \\\\frac{p(\\\\text{Cl})}{P_{\\\\text{total}}} = \\\\frac{0.030}{0.87} = 0.03448$$
> >    * As percentage: $3.45\\\\%$
> > 
> > 3. **Write expression for $K_p$:**
> >    $$K_p = \\\\frac{(p(\\\\text{Cl}))^2}{p(\\\\text{Cl}_2)}$$
> > 
> > 4. **Substitute and solve:**
> >    $$K_p = \\\\frac{(0.030)^2}{0.84} = \\\\frac{0.00090}{0.84} = 1.071 \\\\times 10^{-3}$$
> > 
> > 5. **Determine units:**
> >    $$\\\\text{Units} = \\\\frac{\\\\text{atm}^2}{\\\\text{atm}} = \\\\text{atm}$$
> >    * Final Answer: $K_p = 1.1 \\\\times 10^{-3}\\\\text{ atm}$ (to 2 significant figures)

> [!BOX]
> ### 📋 Heterogeneous Gas Equilibria & Omissions
> For heterogeneous equilibria involving gases and other phases (solids or liquids), the partial pressures of any non-gaseous species are **omitted** from the $K_p$ expression:
> 
> * **Example 1: Solids and Gases**
>   $$\\\\text{CaCO}_3\\\\text{(s)} \\\\rightleftharpoons \\\\text{CaO(s)} + \\\\text{CO}_2\\\\text{(g)}$$
>   * Since Calcium Carbonate and Calcium Oxide are solids, they have no partial pressure. The $K_p$ expression is:
>     $$K_p = p_{\\\\text{CO}_2\\\\text{(g)}}$$
>   * *Physical consequence:* At a given temperature, the equilibrium pressure of $\\\\text{CO}_2$ gas is a constant value, regardless of how much solid carbonate or oxide is present. For instance, at $1073\\\\text{ K}$, $K_p = 0.25\\\\text{ atm}$, meaning the pressure of $\\\\text{CO}_2$ will always reach $0.25\\\\text{ atm}$ at equilibrium.
> 
> * **Example 2: Liquids and Gases (Vapour Pressure)**
>   $$\\\\text{H}_2\\\\text{O(l)} \\\\rightleftharpoons \\\\text{H}_2\\\\text{O(g)}$$
>   * Pure liquid water is omitted:
>     $$K_p = p_{\\\\text{H}_2\\\\text{O(g)}}$$
>   * Here, $K_p$ represents the **saturated vapour pressure** of water. At $298\\\\text{ K}$ ($25\\\\text{ }^\\\\circ\\\\text{C}$), $K_p = 0.03\\\\text{ atm}$, and at $373\\\\text{ K}$ ($100\\\\text{ }^\\\\circ\\\\text{C}$), $K_p = 1.00\\\\text{ atm}$ (boiling point).
`,
        keyPoints: [
            'Only gas-phase species are included in Kp expressions; solids and liquids are omitted.',
            'Always use round brackets and (p) symbols for Kp expressions, never square brackets.',
            'Kp is temperature-dependent only; changing pressure shifts the equilibrium position but does not change the Kp constant.',
            'Always self-check in exams: the sum of all mole fractions in a mixture must equal exactly 1.00, and the sum of all partial pressures must equal the total pressure.'
        ]
    },
    {
        id: 'le-chatelier-kc-u4-l3',
        title: "Temperature & Equilibrium Constants",
        type: 'text',
        content: `
> [!NOTE]
> ### 🌡️ The Unique Effect of Temperature
> Unlike concentration, pressure, or catalysts—which do not change the values of $K_c$ and $K_p$—**temperature directly alters the value of the equilibrium constant**.
> 
> * For an **exothermic reaction** ($\\\\Delta H < 0$), the forward reaction releases heat. Increasing temperature shifts the equilibrium to the left, **decreasing** the value of $K$.
> * For an **endothermic reaction** ($\\\\Delta H > 0$), the forward reaction absorbs heat. Increasing temperature shifts the equilibrium to the right, **increasing** the value of $K$.

${svgToken(`<svg viewBox="0 0 1000 380" class="w-full h-auto rounded-lg border border-slate-800" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg-grad-4" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>

    <!-- Gradient fill under exothermic curve (red, descending) -->
    <linearGradient id="fill-exo" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#f43f5e" stop-opacity="0.25" />
      <stop offset="100%" stop-color="#f43f5e" stop-opacity="0.02" />
    </linearGradient>

    <!-- Gradient fill under endothermic curve (green, ascending) -->
    <linearGradient id="fill-endo" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0%" stop-color="#10b981" stop-opacity="0.25" />
      <stop offset="100%" stop-color="#10b981" stop-opacity="0.02" />
    </linearGradient>

    <!-- Panel background gradients -->
    <linearGradient id="panel-exo" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1a0d12" stop-opacity="0.9" />
      <stop offset="100%" stop-color="#0d1320" stop-opacity="0.9" />
    </linearGradient>
    <linearGradient id="panel-endo" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#061510" stop-opacity="0.9" />
      <stop offset="100%" stop-color="#0d1320" stop-opacity="0.9" />
    </linearGradient>

    <!-- Arrow Markers for Axes -->
    <marker id="arrow-axis" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#64748b" />
    </marker>
  </defs>

  <!-- Background -->
  <rect width="1000" height="380" rx="10" fill="url(#bg-grad-4)" stroke="#1e293b" stroke-width="1.5" />

  <!-- Main Title -->
  <text x="500" y="32" text-anchor="middle" fill="#f8fafc" font-size="15" font-weight="bold" font-family="system-ui, sans-serif" letter-spacing="0.3">Temperature Dependency of Equilibrium Constants (K)</text>
  <line x1="200" y1="40" x2="800" y2="40" stroke="#334155" stroke-width="1" />

  <!-- ========================== LEFT PANEL: Exothermic ========================== -->
  <g transform="translate(55, 55)">
    <!-- Panel Background -->
    <rect x="0" y="0" width="390" height="295" rx="10" fill="url(#panel-exo)" stroke="#f43f5e" stroke-width="1" stroke-opacity="0.25" />

    <!-- Panel Title -->
    <text x="195" y="26" text-anchor="middle" fill="#fb7185" font-size="12.5" font-weight="bold" font-family="system-ui, sans-serif">Exothermic Reaction (&#x394;H &lt; 0)</text>
    <line x1="20" y1="34" x2="370" y2="34" stroke="#f43f5e" stroke-width="0.5" stroke-opacity="0.3" />

    <!-- Subtle grid lines -->
    <line x1="70" y1="55" x2="70" y2="245" stroke="#1e293b" stroke-width="1" stroke-dasharray="3,4" />
    <line x1="145" y1="55" x2="145" y2="245" stroke="#1e293b" stroke-width="1" stroke-dasharray="3,4" />
    <line x1="220" y1="55" x2="220" y2="245" stroke="#1e293b" stroke-width="1" stroke-dasharray="3,4" />
    <line x1="295" y1="55" x2="295" y2="245" stroke="#1e293b" stroke-width="1" stroke-dasharray="3,4" />
    <line x1="45" y1="80" x2="355" y2="80" stroke="#1e293b" stroke-width="1" stroke-dasharray="3,4" />
    <line x1="45" y1="120" x2="355" y2="120" stroke="#1e293b" stroke-width="1" stroke-dasharray="3,4" />
    <line x1="45" y1="160" x2="355" y2="160" stroke="#1e293b" stroke-width="1" stroke-dasharray="3,4" />
    <line x1="45" y1="200" x2="355" y2="200" stroke="#1e293b" stroke-width="1" stroke-dasharray="3,4" />

    <!-- Gradient fill under exothermic curve -->
    <path d="M 45,60 C 90,95 160,185 350,235 L 350,245 L 45,245 Z" fill="url(#fill-exo)" />

    <!-- Exothermic Curve -->
    <path d="M 45,60 C 90,95 160,185 350,235" fill="none" stroke="#f43f5e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />

    <!-- Y-Axis with arrow marker -->
    <line x1="45" y1="245" x2="45" y2="48" stroke="#64748b" stroke-width="1.8" marker-end="url(#arrow-axis)" />
    <!-- X-Axis with arrow marker -->
    <line x1="45" y1="245" x2="360" y2="245" stroke="#64748b" stroke-width="1.8" marker-end="url(#arrow-axis)" />

    <!-- Axis Labels -->
    <text x="22" y="150" fill="#94a3b8" font-size="11" text-anchor="middle" font-family="system-ui, sans-serif" transform="rotate(-90 22 150)">Constant (K)</text>
    <text x="200" y="268" fill="#94a3b8" font-size="11" text-anchor="middle" font-family="system-ui, sans-serif">Temperature (T)</text>

    <!-- Point Indicator ON Curve -->
    <circle cx="170" cy="160" r="5" fill="#f43f5e" stroke="#1a0d12" stroke-width="1.5" />
    
    <!-- Pointer Line -->
    <line x1="225" y1="140" x2="173" y2="160" stroke="#f43f5e" stroke-width="1.2" stroke-dasharray="3,3" stroke-opacity="0.9" />

    <!-- Annotation Badge -->
    <rect x="225" y="120" width="110" height="28" rx="6" fill="#1a0d12" stroke="#f43f5e" stroke-width="1.2" stroke-opacity="0.9" />
    <text x="280" y="138" text-anchor="middle" fill="#fb7185" font-size="11" font-family="system-ui, sans-serif" font-weight="bold">As T &#x2191; &#x21D2; K &#x2193;</text>
  </g>

  <!-- ========================== RIGHT PANEL: Endothermic ========================== -->
  <g transform="translate(555, 55)">
    <!-- Panel Background -->
    <rect x="0" y="0" width="390" height="295" rx="10" fill="url(#panel-endo)" stroke="#10b981" stroke-width="1" stroke-opacity="0.25" />

    <!-- Panel Title -->
    <text x="195" y="26" text-anchor="middle" fill="#34d399" font-size="12.5" font-weight="bold" font-family="system-ui, sans-serif">Endothermic Reaction (&#x394;H &gt; 0)</text>
    <line x1="20" y1="34" x2="370" y2="34" stroke="#10b981" stroke-width="0.5" stroke-opacity="0.3" />

    <!-- Subtle grid lines -->
    <line x1="70" y1="55" x2="70" y2="245" stroke="#1e293b" stroke-width="1" stroke-dasharray="3,4" />
    <line x1="145" y1="55" x2="145" y2="245" stroke="#1e293b" stroke-width="1" stroke-dasharray="3,4" />
    <line x1="220" y1="55" x2="220" y2="245" stroke="#1e293b" stroke-width="1" stroke-dasharray="3,4" />
    <line x1="295" y1="55" x2="295" y2="245" stroke="#1e293b" stroke-width="1" stroke-dasharray="3,4" />
    <line x1="45" y1="80" x2="355" y2="80" stroke="#1e293b" stroke-width="1" stroke-dasharray="3,4" />
    <line x1="45" y1="120" x2="355" y2="120" stroke="#1e293b" stroke-width="1" stroke-dasharray="3,4" />
    <line x1="45" y1="160" x2="355" y2="160" stroke="#1e293b" stroke-width="1" stroke-dasharray="3,4" />
    <line x1="45" y1="200" x2="355" y2="200" stroke="#1e293b" stroke-width="1" stroke-dasharray="3,4" />

    <!-- Gradient fill under endothermic curve -->
    <path d="M 45,235 C 140,220 230,140 350,60 L 350,245 L 45,245 Z" fill="url(#fill-endo)" />

    <!-- Endothermic Curve -->
    <path d="M 45,235 C 140,220 230,140 350,60" fill="none" stroke="#10b981" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />

    <!-- Y-Axis with arrow marker -->
    <line x1="45" y1="245" x2="45" y2="48" stroke="#64748b" stroke-width="1.8" marker-end="url(#arrow-axis)" />
    <!-- X-Axis with arrow marker -->
    <line x1="45" y1="245" x2="360" y2="245" stroke="#64748b" stroke-width="1.8" marker-end="url(#arrow-axis)" />

    <!-- Axis Labels -->
    <text x="22" y="150" fill="#94a3b8" font-size="11" text-anchor="middle" font-family="system-ui, sans-serif" transform="rotate(-90 22 150)">Constant (K)</text>
    <text x="200" y="268" fill="#94a3b8" font-size="11" text-anchor="middle" font-family="system-ui, sans-serif">Temperature (T)</text>

    <!-- Point Indicator ON Curve -->
    <circle cx="210" cy="158" r="5" fill="#10b981" stroke="#061510" stroke-width="1.5" />

    <!-- Pointer Line -->
    <line x1="180" y1="113" x2="208" y2="154" stroke="#10b981" stroke-width="1.2" stroke-dasharray="3,3" stroke-opacity="0.9" />

    <!-- Annotation Badge -->
    <rect x="75" y="113" width="110" height="28" rx="6" fill="#061510" stroke="#10b981" stroke-width="1.2" stroke-opacity="0.9" />
    <text x="130" y="131" text-anchor="middle" fill="#34d399" font-size="11" font-family="system-ui, sans-serif" font-weight="bold">As T &#x2191; &#x21D2; K &#x2191;</text>
  </g>

  <!-- VS divider in middle -->
  <text x="500" y="210" text-anchor="middle" fill="#334155" font-size="22" font-weight="bold" font-family="system-ui, sans-serif">vs</text>
</svg>`)}

> [!BOX]
> ### 📊 Table A: Temperature Dependency of $K_p$
> The data below shows how temperature changes $K_p$ for an exothermic and an endothermic reaction:
> 
> * **Exothermic reaction:** $\\\\text{N}_2\\\\text{(g)} + 3\\\\text{H}_2\\\\text{(g)} \\\\rightleftharpoons 2\\\\text{NH}_3\\\\text{(g)} \\\\quad \\\\Delta H^\\\\theta = -92.2\\\\text{ kJ mol}^{-1}$
> * **Endothermic reaction:** $\\\\text{N}_2\\\\text{O}_4\\\\text{(g)} \\\\rightleftharpoons 2\\\\text{NO}_2\\\\text{(g)} \\\\quad \\\\Delta H^\\\\theta = +57.2\\\\text{ kJ mol}^{-1}$
> 
> | Temperature (T / K) | Exothermic Kp | Endothermic Kp |
> | :--- | :--- | :--- |
> | 298 K | 6.76 × 10⁵ atm⁻² | 1.15 × 10⁻¹ atm |
> | 400 K | 4.07 × 10¹ atm⁻² | 4.79 × 10¹ atm |
> | 500 K | 3.55 × 10⁻² atm⁻² | 1.70 × 10³ atm |
> | 600 K | 1.66 × 10⁻³ atm⁻² | 1.78 × 10⁴ atm |
> 
> **Table B Summary:**
> * **Exothermic reaction:** Increasing temperature $\\\\implies K$ decreases; Decreasing temperature $\\\\implies K$ increases.
> * **Endothermic reaction:** Increasing temperature $\\\\implies K$ increases; Decreasing temperature $\\\\implies K$ decreases.

> [!BOX]
> ### 🏭 Industrial Considerations: The Haber Process Compromise
> In industrial chemical synthesis, such as the **Haber Process** ($\\\\text{N}_2\\\\text{(g)} + 3\\\\text{H}_2\\\\text{(g)} \\\\rightleftharpoons 2\\\\text{NH}_3\\\\text{(g)} \\\\quad \\\\Delta H = -92\\\\text{ kJ mol}^{-1}$), compromises must be made between thermodynamics (equilibrium yield) and kinetics (reaction rate):
> 
> * **Pressure:** Operating at high pressure (typically $200\\\\text{ atm}$) is highly beneficial because it increases both:
>   1. **Reaction Rate:** Reactant gas molecules are closer together, increasing collision frequency.
>   2. **Equilibrium Yield:** Shifts the equilibrium position to the right (towards the side with fewer gas molecules, $4 \\\\text{ moles reactant} \\\\to 2 \\\\text{ moles product}$).
> * **Temperature:** An increase in temperature shifts the equilibrium to the left (the endothermic direction), decreasing the yield of ammonia. However, too low a temperature makes the reaction rate too slow to be commercially viable.
>   * *Compromise:* A moderate/compromise temperature (typically $400 - 450\\\\text{ }^\\\\circ\\\\text{C}$) is used to ensure a reasonably fast rate of production with an acceptable yield.
> * **Catalyst:** An iron catalyst is added to increase the rate of both forward and reverse reactions by providing an alternative pathway with a lower activation energy ($E_a$). The catalyst has **no effect** on the equilibrium yield or the value of $K_p$.

> [!IMPORTANT]
> ### 🧮 Quantitative Position Shift via $K$ Change
> In chemistry, we explain the shift in equilibrium position due to temperature *because* the value of the constant itself has changed.
> 
> Consider the exothermic formation of Hydrogen Iodide (Table C):
> $$\\\\text{H}_2\\\\text{(g)} + \\\\text{I}_2\\\\text{(g)} \\\\rightleftharpoons 2\\\\text{HI(g)} \\\\quad \\\\Delta H^\\\\theta = -9\\\\text{ kJ mol}^{-1}$$
> 
> If we mix $1.00\\\\text{ mol}$ of $\\\\text{H}_2$ and $1.00\\\\text{ mol}$ of $\\\\text{I}_2$ in a $1\\\\text{ dm}^3$ vessel at different temperatures:
> 
> | Temperature (T / K) | Kc Value | Moles of H₂ (g) | Moles of I₂ (g) | Moles of HI (g) |
> | :--- | :--- | :--- | :--- | :--- |
> | 500 K | 160 | 0.14 mol | 0.14 mol | 1.72 mol |
> | 700 K | 54 | 0.21 mol | 0.21 mol | 1.58 mol |
> 
> * As temperature increases from $500\\\\text{ K}$ to $700\\\\text{ K}$, $K_c$ decreases from $160$ to $54$
> * To satisfy the new lower $K_c$ value, the concentrations of reactants must increase, and the products must decrease.
> * This shifts the equilibrium position to the left (the endothermic direction).

> [!EXAMPLE]
> #### 📝 Worked Example 1: Temperature & Equilibrium Shift
> **Question:** Nitrogen and oxygen gases react to form nitrogen(II) oxide:
> $$\\\\text{N}_2\\\\text{(g)} + \\\\text{O}_2\\\\text{(g)} \\\\rightleftharpoons 2\\\\text{NO(g)} \\\\quad \\\\Delta H^\\\\theta = +180\\\\text{ kJ mol}^{-1}$$
> The equilibrium constant $K_c$ at $298\\\\text{ K}$ is $4.80 \\\\times 10^{-31}$. Explain the effect of heating the system to $2000\\\\text{ K}$ on:
> 1. The value of $K_c$
> 2. The proportion of $\\\\text{NO(g)}$ present at equilibrium.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the reaction thermicity:**
> >    * The reaction is endothermic ($\\\\Delta H^\\\\theta = +180\\\\text{ kJ mol}^{-1}$).
> > 
> > 2. **Deduce effect on $K_c$:**
> >    * For endothermic reactions, increasing the temperature increases the value of $K_c$. Therefore, at $2000\\\\text{ K}$, $K_c$ will be significantly **larger** than $4.80 \\\\times 10^{-31}$
> > 
> > 3. **Deduce effect on yield/proportion:**
> >    * Since $K_c$ increases, the ratio of products to reactants at equilibrium increases.
> >    * Therefore, the proportion of $\text{NO(g)}$ at equilibrium will be **higher** at $2000\text{ K}$ compared to $298\text{ K}$

> [!EXAMPLE]
> #### 📝 Worked Example 2: Deducing Reaction Enthalpy from $K_c$ Changes
> **Question:** A dynamic equilibrium is established between carbon monoxide, hydrogen, and methanol:
> $$\\\\text{CO(g)} + 2\\\\text{H}_2\\\\text{(g)} \\\\rightleftharpoons \\\\text{CH}_3\\\\text{OH(g)}$$
> When this reaction is carried out at a higher temperature, the numerical value of $K_c$ decreases. Explain whether the forward reaction is exothermic or endothermic.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Analyze the change in $K_c$:**
> >    * The expression for $K_c$ is:
> >      $$K_c = \\\\frac{[\\\\text{CH}_3\\\\text{OH}]}{[\\\\text{CO}][\\\\text{H}_2]^2}$$
> >    * A decrease in the value of $K_c$ means the concentration of the product (numerator) has decreased relative to the reactants (denominator). This shows that the equilibrium position has shifted to the left.
> > 
> > 2. **Apply Le Chatelier's Principle:**
> >    * Increasing temperature shifts the equilibrium position in the direction that absorbs heat (the endothermic direction).
> > 
> > 3. **Deduce direction and enthalpy:**
> >    * Since raising the temperature shifted the equilibrium to the left, the reverse reaction must be endothermic.
> >    * Therefore, the forward reaction must be exothermic ($\\\\Delta H < 0$).

> [!EXAMPLE]
> #### 📝 Worked Example 3: Deducing Reaction Enthalpy from Equilibrium Moles Changes
> **Question:** The reaction between hydrogen and iodine to form hydrogen iodide is reversible:
> $$\\\\text{H}_2\\\\text{(g)} + \\\\text{I}_2\\\\text{(g)} \\\\rightleftharpoons 2\\\\text{HI(g)}$$
> When the reaction is allowed to reach equilibrium at a certain temperature, $0.14\\\\text{ mol}$ of $\\\\text{H}_2\\\\text{(g)}$ is present. 
> The experiment is repeated with the exact same initial amounts of reactants, but at a higher temperature. At equilibrium, the amount of $\\\\text{H}_2\\\\text{(g)}$ is found to be greater than $0.14\\\\text{ mol}$.
> Explain what this information tells you about the reaction enthalpy and the value of the equilibrium constant.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Analyze the shift in equilibrium position:**
> >    * A higher equilibrium amount of the reactant $\\\\text{H}_2\\\\text{(g)}$ at a higher temperature shows that the equilibrium position has shifted to the left (towards the reactants).
> > 
> > 2. **Apply Le Chatelier's Principle:**
> >    * An increase in temperature shifts the equilibrium position in the endothermic direction.
> > 
> > 3. **Draw conclusions:**
> >    * Since the equilibrium shifted to the left, the reverse reaction must be endothermic.
> >    * This means the forward reaction is exothermic ($\\\\Delta H < 0$).
> >    * Since the equilibrium shifted towards the reactants, the ratio of products to reactants is smaller, meaning the equilibrium constant $K_c$ (or $K_p$) decreases as temperature increases.
`,
        keyPoints: [
            'Only temperature changes the numerical values of Kc and Kp.',
            'Exothermic reactions have lower K values at higher temperatures, whereas endothermic reactions have higher K values.',
            'A change in temperature shifts the equilibrium position because it changes the value of the constant itself.',
            'Changes in concentration or pressure shift the equilibrium position to restore the system to the same value of K (which remains constant).'
        ]
    },
    {
        id: 'reaction-quotient-u4-l3',
        title: "Reaction Quotient (Q vs K)",
        type: 'text',
        content: `
> [!NOTE]
> ### 📊 Reaction Quotient ($Q$)
> The **reaction quotient ($Q$)** is a measure of the relative amounts of products and reactants present in a reaction mixture at any given time.
> 
> * The mathematical expression for $Q_c$ (or $Q_p$) is identical to $K_c$ (or $K_p$).
> * The key difference is that the concentrations or partial pressures in $Q$ are **not necessarily at equilibrium**.
> * **At equilibrium:** $Q = K$
> * **If $Q < K$:** The reaction shifts to the **right** (products) to reach equilibrium.
> * **If $Q > K$:** The reaction shifts to the **left** (reactants) to reach equilibrium.

${svgToken(`<svg viewBox="0 0 1000 360" class="w-full h-auto rounded-lg border border-slate-800" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg-grad-5" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
    <linearGradient id="bar-blue" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6" />
      <stop offset="100%" stop-color="#1d4ed8" />
    </linearGradient>
    <linearGradient id="bar-green" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#10b981" />
      <stop offset="100%" stop-color="#047857" />
    </linearGradient>
    <linearGradient id="bar-red" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ef4444" />
      <stop offset="100%" stop-color="#b91c1c" />
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1000" height="360" rx="8" fill="url(#bg-grad-5)" stroke="#1e293b" stroke-width="1.5" />

  <!-- Title -->
  <text x="500" y="35" text-anchor="middle" fill="#f8fafc" font-size="15" font-weight="bold" font-family="system-ui, sans-serif">Reaction Quotient (Q) vs. Equilibrium Constant (K)</text>

  <!-- Scenario 1: Q < K (Left) -->
  <g transform="translate(50, 60)">
    <!-- Border Box -->
    <rect width="260" height="260" rx="10" fill="#0f172a" stroke="#1e293b" stroke-width="1.5" />
    <text x="130" y="30" text-anchor="middle" fill="#3b82f6" font-size="13" font-weight="bold" font-family="system-ui, sans-serif">Q &lt; K</text>

    <!-- Q Bar -->
    <rect x="60" y="150" width="40" height="70" rx="4" fill="url(#bar-blue)" />
    <text x="80" y="140" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="bold" font-family="system-ui, sans-serif">Q</text>
    
    <!-- K Bar -->
    <rect x="160" y="80" width="40" height="140" rx="4" fill="url(#bar-green)" />
    <text x="180" y="70" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="bold" font-family="system-ui, sans-serif">K</text>

    <!-- Arrow and Label -->
    <path d="M 100,235 L 160,235 M 150,230 L 160,235 L 150,240" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" />
    <text x="130" y="250" text-anchor="middle" fill="#10b981" font-size="11" font-weight="bold" font-family="system-ui, sans-serif">Shift Right (\u2192)</text>
    
    <text x="130" y="275" text-anchor="middle" fill="#94a3b8" font-size="10.5" font-family="system-ui, sans-serif">Reactants dominate</text>
    <text x="130" y="290" text-anchor="middle" fill="#94a3b8" font-size="10.5" font-family="system-ui, sans-serif">Forward reaction favored</text>
  </g>

  <!-- Scenario 2: Q = K (Middle) -->
  <g transform="translate(370, 60)">
    <!-- Border Box -->
    <rect width="260" height="260" rx="10" fill="#0f172a" stroke="#1e293b" stroke-width="1.5" />
    <text x="130" y="30" text-anchor="middle" fill="#10b981" font-size="13" font-weight="bold" font-family="system-ui, sans-serif">Q = K</text>

    <!-- Q Bar -->
    <rect x="60" y="80" width="40" height="140" rx="4" fill="url(#bar-green)" />
    <text x="80" y="70" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="bold" font-family="system-ui, sans-serif">Q</text>
    
    <!-- K Bar -->
    <rect x="160" y="80" width="40" height="140" rx="4" fill="url(#bar-green)" />
    <text x="180" y="70" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="bold" font-family="system-ui, sans-serif">K</text>

    <!-- Equal Sign -->
    <text x="130" y="160" text-anchor="middle" fill="#10b981" font-size="20" font-weight="bold" font-family="system-ui, sans-serif">=</text>

    <text x="130" y="250" text-anchor="middle" fill="#10b981" font-size="11" font-weight="bold" font-family="system-ui, sans-serif">Dynamic Equilibrium</text>
    <text x="130" y="275" text-anchor="middle" fill="#94a3b8" font-size="10.5" font-family="system-ui, sans-serif">Rates of forward &amp; reverse</text>
    <text x="130" y="290" text-anchor="middle" fill="#94a3b8" font-size="10.5" font-family="system-ui, sans-serif">reactions are equal</text>
  </g>

  <!-- Scenario 3: Q > K (Right) -->
  <g transform="translate(690, 60)">
    <!-- Border Box -->
    <rect width="260" height="260" rx="10" fill="#0f172a" stroke="#1e293b" stroke-width="1.5" />
    <text x="130" y="30" text-anchor="middle" fill="#ef4444" font-size="13" font-weight="bold" font-family="system-ui, sans-serif">Q &gt; K</text>

    <!-- Q Bar -->
    <rect x="60" y="50" width="40" height="170" rx="4" fill="url(#bar-red)" />
    <text x="80" y="40" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="bold" font-family="system-ui, sans-serif">Q</text>
    
    <!-- K Bar -->
    <rect x="160" y="80" width="40" height="140" rx="4" fill="url(#bar-green)" />
    <text x="180" y="70" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="bold" font-family="system-ui, sans-serif">K</text>

    <!-- Arrow and Label -->
    <path d="M 160,235 L 100,235 M 110,230 L 100,235 L 110,240" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round" />
    <text x="130" y="250" text-anchor="middle" fill="#ef4444" font-size="11" font-weight="bold" font-family="system-ui, sans-serif">Shift Left (\u2190)</text>

    <text x="130" y="275" text-anchor="middle" fill="#94a3b8" font-size="10.5" font-family="system-ui, sans-serif">Products dominate</text>
    <text x="130" y="290" text-anchor="middle" fill="#94a3b8" font-size="10.5" font-family="system-ui, sans-serif">Reverse reaction favored</text>
  </g>
</svg>`)}

> [!IMPORTANT]
> ### 🧪 Concentration Changes & $Q_c$
> If the concentration of a reactant is increased, the denominator of the $Q_c$ expression increases, making $Q_c < K_c$.
> * To restore equilibrium, the system reacts to increase the numerator (products) and decrease the denominator (reactants) until $Q_c = K_c$ again.
> * This explains Le Chatelier's Principle quantitatively: concentration changes shift the position of equilibrium, but **$K_c$ remains constant**.

> [!EXAMPLE]
> #### 📝 Worked Example 1: Constant Volume Shift
> **Question:** For the equilibrium: $\\\\text{H₂(g)} + \\\\text{I₂(g)} \\\\rightleftharpoons 2\\\\text{HI(g)}$
> Explain, using $Q_c$, the effect of suddenly increasing the concentration of $\\\\text{H₂}$ at constant temperature and volume.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Write expressions for $K_c$ and $Q_c$:**
> >    $$K_c = \\\\frac{[\\\\text{HI}]^2\\\\text{(eq)}}{[\\\\text{H₂}]\\\\text{(eq)}[\\\\text{I₂}]\\\\text{(eq)}} \\\\quad Q_c = \\\\frac{[\\\\text{HI}]^2}{[\\\\text{H₂}][\\\\text{I₂}]}$$
> > 
> > 2. **Analyze the change:**
> >    * Suddenly increasing $[\\\\text{H₂}]$ increases the denominator of the $Q_c$ expression.
> >    * Therefore, the value of $Q_c$ decreases immediately: $Q_c < K_c$
> > 
> > 3. **Deduce direction of shift:**
> >    * For equilibrium to be re-established, $Q_c$ must increase to equal $K_c$
> >    * This requires the numerator $[\\\\text{HI}]^2$ to increase and the denominator to decrease.
> >    * Hence, the reaction shifts to the right (products side).


> [!EXAMPLE]
> #### 📝 Worked Example 2: Constant Pressure Shift (Ideal Gas Expansion)
> **Question:** An equilibrium mixture of $\\\\text{N₂(g)} + 3\\\\text{H₂(g)} \\\\rightleftharpoons 2\\\\text{NH₃(g)}$ at constant temperature contains $0.510\\\\text{ mol } \\\\text{N₂}$, $0.197\\\\text{ mol } \\\\text{H₂}$, and $0.204\\\\text{ mol } \\\\text{NH₃}$ in a total volume of $1.00\\\\text{ dm}^3$ ($K_c = 10.7$).
> If $0.140\\\\text{ mol}$ of $\\\\text{N₂}$ gas is suddenly added to the mixture at **constant pressure and temperature**, calculate $Q_c$ and predict the direction of the equilibrium shift.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate the new total moles of gas:**
> >    * Original total moles = $0.510 + 0.197 + 0.204 = 0.911\\\\text{ mol}$
> >    * New total moles = $0.911 + 0.140 = 1.051\\\\text{ mol}$
> > 
> > 2. **Calculate the new volume of the gas mixture:**
> >    * Since pressure and temperature are constant, volume is directly proportional to total moles ($V_2 = V_1 \\\\times \\\\frac{n_2}{n_1}$):
> >      $$V_2 = 1.00\\\\text{ dm}^3 \\\\times \\\\frac{1.051}{0.911} = 1.154\\\\text{ dm}^3$$
> > 
> > 3. **Calculate the new concentration of each gas immediately after addition:**
> >    * New moles of $\\\\text{N₂} = 0.510 + 0.140 = 0.650\\\\text{ mol}$
> >    * $[\\\\text{N₂}] = \\\\frac{0.650}{1.154} = 0.563\\\\text{ mol dm}^{-3}$
> >    * $[\\\\text{H₂}] = \\\\frac{0.197}{1.154} = 0.171\\\\text{ mol dm}^{-3}$
> >    * $[\\\\text{NH₃}] = \\\\frac{0.204}{1.154} = 0.177\\\\text{ mol dm}^{-3}$
> > 
> > 4. **Calculate $Q_c$:**
> >    $$Q_c = \\\\frac{[\\\\text{NH₃}]^2}{[\\\\text{N₂}][\\\\text{H₂}]^3} = \\\\frac{(0.177)^2}{(0.563) \\\\times (0.171)^3} = \\\\frac{0.0313}{0.563 \\\\times 0.00500} = 11.15$$
> > 
> > 5. **Compare $Q_c$ and $K_c$ and deduce direction:**
> >    * $Q_c = 11.15$, which is **greater** than $K_c = 10.7$ ($Q_c > K_c$)
> >    * To re-establish equilibrium, $Q_c$ must decrease.
> >    * This is achieved by shifting the equilibrium to the **left** (towards reactants).
> >    * *Note:* This counter-intuitive left shift occurs because the volume expansion (which decreases concentrations of all gases) has a greater effect on the numerator (which is squared) and the cubed reactant ($[\text{H₂}]^3$) than the simple addition of $\text{N₂}$.

> [!EXAMPLE]
> #### 📝 Worked Example 3: Pressure Changes & $Q_p$
> **Question:** For the Haber process: $\\\\text{N₂(g)} + 3\\\\text{H₂(g)} \\\\rightleftharpoons 2\\\\text{NH₃(g)}$. Let the equilibrium partial pressures be $a$, $b$, and $c$ atm respectively, so $K_p = \\\\frac{c^2}{a b^3}$.
> Show mathematically, using $Q_p$, why doubling the total pressure of the system shifts the equilibrium to the right.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Deduce new partial pressures immediately after doubling pressure:**
> >    * All partial pressures are doubled: $p(\\\\text{N}_2) = 2a$, $p(\\\\text{H}_2) = 2b$, and $p(\\\\text{NH}_3) = 2c$
> > 
> > 2. **Set up the $Q_p$ expression:**
> >    $$Q_p = \\\\frac{(2c)^2}{(2a)(2b)^3} = \\\\frac{4c^2}{16ab^3} = \\\\frac{1}{4} K_p$$
> > 
> > 3. **Analyze the shift:**
> >    * $Q_p = \\\\frac{1}{4} K_p < K_p$
> >    * To restore equilibrium, $Q_p$ must increase back to equal $K_p$
> >    * This requires the partial pressure of products (numerator) to increase.
> >    * Hence, the equilibrium shifts to the right (products side).

> [!EXAMPLE]
> #### 📝 Worked Example 4: Pressure & Equilibrium Shifts in Methanol Synthesis
> **Question:** A dynamic equilibrium is established between carbon monoxide, hydrogen, and methanol:
> $$\\\\text{CO(g)} + 2\\\\text{H}_2\\\\text{(g)} \\\\rightleftharpoons \\\\text{CH}_3\\\\text{OH(g)}$$
> State the effect that an increase in pressure (at constant temperature) has on the value of $K_c$ and on the position of equilibrium. Justify your answers using both Le Chatelier's Principle and $Q_c$.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Effect on $K_c$:**
> >    * **Effect:** No change.
> >    * **Justification:** The value of the equilibrium constant $K_c$ depends solely on temperature, so pressure changes do not alter it.
> > 
> > 2. **Effect on equilibrium position (Le Chatelier's Principle):**
> >    * **Effect:** Shifts to the right (increases the yield of $\\\\text{CH}_3\\\\text{OH}$).
> >    * **Justification:** The reactant side has 3 moles of gas ($1\\\\text{ CO} + 2\\\\text{ H}_2$) while the product side has 1 mole of gas. Increasing pressure shifts the equilibrium position towards the side with fewer gas moles to minimize the pressure increase.
> > 
> > 3. **Justification using $Q_c$:**
> >    * The expression for $Q_c$ is:
> >      $$Q_c = \\\\frac{[\\\\text{CH}_3\\\\text{OH}]}{[\\\\text{CO}][\\\\text{H}_2]^2}$$
> >    * Increasing pressure decreases the volume ($V$), which increases the concentrations of all gaseous species.
> >    * Since the denominator ($[\\\\text{CO}][\\\\text{H}_2]^2$) is third-order overall while the numerator ($[\\\\text{CH}_3\\\\text{OH}]$) is first-order, the concentration increase affects the denominator much more than the numerator.
> >    * This makes $Q_c < K_c$ immediately after the pressure increase.
> >    * To restore $Q_c = K_c$, the reaction shifts to the right (numerator increases, denominator decreases).

> [!EXAMPLE]
> #### 📝 Worked Example 5: Concentration vs Catalyst Effects in Esterification
> **Question:** The reaction between ethanoic acid and ethanol is reversible:
> $$\\\\text{CH}_3\\\\text{COOH(l)} + \\\\text{CH}_3\\\\text{CH}_2\\\\text{OH(l)} \\\\rightleftharpoons \\\\text{CH}_3\\\\text{COOCH}_2\\\\text{CH}_3\\\\text{(l)} + \\\\text{H}_2\\\\text{O(l)}$$
> Some ethanoic acid and ethanol are mixed together with sulfuric acid to act as a catalyst.
> 
> 1. Explain what happens to the composition of the equilibrium mixture if some more ethanol is added.
> 2. Explain what happens to the composition of the equilibrium mixture if some more sulfuric acid is added.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Adding more ethanol:**
> >    * **Effect:** The amount of ethyl ethanoate ($\\\\text{CH}_3\\\\text{COOCH}_2\\\\text{CH}_3$) and water ($\\\\text{H}_2\\\\text{O}$) will increase, while the amount of ethanoic acid ($\\\\text{CH}_3\\\\text{COOH}$) will decrease.
> >    * **Explanation:** Adding more ethanol increases its concentration, which makes $Q_c < K_c$. The system shifts to the right (products side) to consume the added reactant and restore $Q_c = K_c$.
> > 
> > 2. **Adding more sulfuric acid:**
> >    * **Effect:** No change in the equilibrium composition.
> >    * **Explanation:** Sulfuric acid acts as a catalyst in this reaction. A catalyst increases the rates of both forward and reverse reactions equally, reducing the time needed to reach equilibrium without shifting the position of equilibrium or altering the concentrations of the species present at equilibrium.

> [!EXAMPLE]
> #### 📝 Worked Example 6: Compressing a System with Equal Gas Moles
> **Question:** The reaction between hydrogen and iodine to form hydrogen iodide is reversible:
> $$\\\\text{H}_2\\\\text{(g)} + \\\\text{I}_2\\\\text{(g)} \\\\rightleftharpoons 2\\\\text{HI(g)}$$
> A mixture of $\\\\text{H}_2\\\\text{(g)}$ and $\\\\text{I}_2\\\\text{(g)}$ is allowed to reach equilibrium, where $0.14\\\\text{ mol}$ of $\\\\text{H}_2\\\\text{(g)}$ is present.
> The mixture is compressed to reduce its volume and then left to reach equilibrium at the original temperature. Explain the change, if any, in the composition of the equilibrium mixture.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Count the moles of gas on both sides of the equation:**
> >    * Reactant side: 2 moles of gas ($1\\\\text{ H}_2 + 1\\\\text{ I}_2$).
> >    * Product side: 2 moles of gas ($2\\\\text{ HI}$).
> >    * Therefore, there is no change in the number of moles of gas ($\\\\Delta n_{\\\\text{gas}} = 0$).
> > 
> > 2. **Analyze using $Q_c$:**
> >    * Let volume be reduced from $V_1$ to $V_2$. This increases all concentrations by a factor of $\\\\frac{V_1}{V_2}$.
> >    * Substituting these into the $Q_c$ expression:
> >      $$Q_c = \\\\frac{(\\\\frac{V_1}{V_2} [\\\\text{HI}])^2}{(\\\\frac{V_1}{V_2} [\\\\text{H}_2])(\\\\frac{V_1}{V_2} [\\\\text{I}_2])} = \\\\frac{[\\\\text{HI}]^2}{[\\\\text{H}_2][\\\\text{I}_2]} = K_c$$
> >    * Because the concentration factors cancel out completely, $Q_c$ remains equal to $K_c$.
> > 
> > 3. **Conclude effect on composition:**
> >    * Since $Q_c = K_c$ remains true, there is no shift in the equilibrium position.
> >    * The mole amounts and mole fractions of all components at equilibrium remain unchanged.

> [!CAUTION]
> ### 🛑 Summary of Catalyst Effects
> * A catalyst increases the rates of the forward and reverse reactions equally.
> * It does not appear in the overall stoichiometric equation and has no effect on the expression or value of $K_c$ or $K_p$.
> * Therefore, adding a catalyst does not shift the equilibrium position or change the equilibrium composition; it only decreases the time required to reach equilibrium.

> [!NOTE]
> ### 🔄 Autocatalysis in Equilibrium Reactions
> In some chemical reactions, one of the products formed acts as a catalyst for the reaction itself. This phenomenon is known as **autocatalysis**.
>
> **Classic Example:** The reaction of ethanedioate ions with manganate(VII) ions:
> $$\\text{MnO}_4^-(\\text{aq}) + \\text{C}_2\\text{O}_4^{2-}(\\text{aq}) \\rightarrow \\text{Mn}^{2+}(\\text{aq}) + \\text{CO}_2(\\text{g})$$
> The Mn²⁺ ions formed are the **autocatalyst** — they catalyse further reaction between MnO₄⁻ and C₂O₄²⁻.
>
> ${svgToken(autocatalysisCurveSvg)}
>
> * **Concentration-Time Profile:** The graph above shows the characteristic **S-shaped (sigmoidal) curve**.
> * **Phases of the Reaction:**
>   1. **① Slow Start:** Reaction is slow initially — no autocatalyst (Mn²⁺) is yet present.
>   2. **② Rapid Acceleration:** Mn²⁺ builds up and catalyses the reaction, dramatically increasing the rate.
>   3. **③ Deceleration:** Eventually, reactants (MnO₄⁻, C₂O₄²⁻) are depleted and the rate falls to zero.
`,
        keyPoints: [
            'Reaction quotient Q has the same mathematical form as K but uses non-equilibrium values.',
            'Adding a gas at constant pressure causes volume expansion, which can shift the equilibrium in unexpected directions.',
            'Pressure and concentration changes alter Q relative to K, driving the reaction to shift until Q equals K once more.',
            'Autocatalysis occurs when a product acts as a catalyst, producing a characteristic S-shaped curve on a concentration-time graph.'
        ]
    },
    {
        id: 'entropy-equilibrium-u4-l3',
        title: "Entropy & Equilibrium Constants",
        type: 'text',
        content: `
> [!NOTE]
> ### 🌀 Entropy and Spontaneity Recap
> Recall from thermodynamics that the total entropy change ($\\\\Delta S\\\\text{ total}$) determines the spontaneity of a chemical reaction:
> 
> * **Standard Entropy Equation:**
>   $$\\\\Delta S\\\\text{ total} = \\\\Delta S\\\\text{ system} + \\\\Delta S\\\\text{ surroundings}$$
> * **Surroundings Entropy:**
>   $$\\\\Delta S\\\\text{ surroundings} = -\\\\frac{\\\\Delta H}{T}$$
> * While system entropy changes very little with temperature (unless there is a phase change), $\\\\Delta S\\\\text{ surroundings}$ is highly sensitive to the absolute temperature $T$ (in Kelvin).
> * For all spontaneous processes, $\\\\Delta S\\\\text{ total} > 0$

> [!BOX]
> ### ⚖️ Thermodynamic Feasibility vs. Kinetic Stability
> A reaction is **thermodynamically feasible** if the total entropy change ($\\\\Delta S\\\\text{total}$) is positive, which corresponds to a large equilibrium constant ($K \\\\gg 1$). However, this does not guarantee that the reaction will occur at a visible or practical rate:
> 
> * **Kinetic Stability (Inertness):** A reaction with a highly positive $\\\\Delta S\\\\text{total}$ can be **kinetically stable** if it has a very high activation energy ($E_a$). The rate of reaction at room temperature is effectively zero because molecules do not possess sufficient energy to overcome the activation barrier.
> * **Example - Methane Combustion:**
>   $$\\\\text{CH}_4\\\\text{(g)} + 2\\\\text{O}_2\\\\text{(g)} \\\\rightleftharpoons \\\\text{CO}_2\\\\text{(g)} + 2\\\\text{H}_2\\\\text{O(g)}$$
>   * This reaction has a large positive $\\\\Delta S^\\\\theta\\\\text{total}$, making it highly thermodynamically feasible (spontaneous).
>   * However, a mixture of methane and oxygen is kinetically stable and can sit indefinitely at room temperature. An initial spark or flame is required to provide the activation energy, after which the highly exothermic reaction proceeds rapidly.

${svgToken(`<svg viewBox="0 0 1000 380" class="w-full h-auto rounded-lg border border-slate-800" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg-grad-6" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
    <linearGradient id="curve-glow" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#3b82f6" />
      <stop offset="35%" stop-color="#ef4444" />
      <stop offset="100%" stop-color="#10b981" />
    </linearGradient>
    <!-- Shaded region fill for Ea hump -->
    <linearGradient id="ea-fill" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ef4444" stop-opacity="0.12" />
      <stop offset="100%" stop-color="#ef4444" stop-opacity="0.01" />
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1000" height="380" rx="8" fill="url(#bg-grad-6)" stroke="#1e293b" stroke-width="1.5" />

  <!-- Title -->
  <text x="500" y="32" text-anchor="middle" fill="#f8fafc" font-size="15" font-weight="bold" font-family="system-ui, sans-serif">Thermodynamic Feasibility vs. Kinetic Stability</text>

  <!-- Y-Axis -->
  <line x1="80" y1="45" x2="80" y2="320" stroke="#475569" stroke-width="2" />
  <!-- X-Axis -->
  <line x1="80" y1="320" x2="950" y2="320" stroke="#475569" stroke-width="2" />
  <!-- Axis arrowhead Y -->
  <path d="M 75,52 L 80,42 L 85,52" fill="#475569" />
  <!-- Axis arrowhead X -->
  <path d="M 945,315 L 955,320 L 945,325" fill="#475569" />

  <!-- Axes Labels -->
  <text x="38" y="185" fill="#94a3b8" font-size="12" text-anchor="middle" font-family="system-ui, sans-serif" transform="rotate(-90 38 185)">Gibbs Energy / G</text>
  <text x="515" y="348" fill="#94a3b8" font-size="12" text-anchor="middle" font-family="system-ui, sans-serif">Reaction Coordinate (Progress) →</text>

  <!-- Shaded area under Ea peak -->
  <path d="M 140,195 C 220,195 280,85 350,85 C 420,85 490,255 560,255 L 140,195 Z" fill="url(#ea-fill)" />

  <!-- Reaction Coordinate Curve -->
  <!-- Reactant level: y=195, Peak: y=85 at x=350, Product level: y=255 at x=560 -->
  <path d="M 80,195 L 140,195 C 220,195 280,85 350,85 C 420,85 490,255 560,255 L 860,255" fill="none" stroke="url(#curve-glow)" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" />

  <!-- ======= DOTTED LEVEL LINES ======= -->
  <!-- Reactants level dotted line: x=140 to x=780 at y=195 -->
  <line x1="140" y1="195" x2="780" y2="195" stroke="#3b82f6" stroke-width="1.2" stroke-dasharray="5,4" opacity="0.5" />
  <!-- Products level dotted line: x=560 to x=780 at y=255 -->
  <line x1="560" y1="255" x2="780" y2="255" stroke="#10b981" stroke-width="1.2" stroke-dasharray="5,4" opacity="0.5" />
  <!-- Peak level reference line: x=350 to x=400 at y=85 -->
  <line x1="330" y1="85" x2="380" y2="85" stroke="#ef4444" stroke-width="1" stroke-dasharray="3,3" opacity="0.6" />

  <!-- ======= REACTANT BALL & LABELS ======= -->
  <circle cx="140" cy="183" r="11" fill="#3b82f6" stroke="#93c5fd" stroke-width="1.5" />
  <text x="140" y="222" text-anchor="middle" fill="#60a5fa" font-size="12" font-weight="bold" font-family="system-ui, sans-serif">Reactants</text>
  <text x="140" y="238" text-anchor="middle" fill="#94a3b8" font-size="10.5" font-family="system-ui, sans-serif">(Kinetically Stable)</text>

  <!-- ======= PRODUCT BALL & LABELS ======= -->
  <circle cx="680" cy="243" r="11" fill="#10b981" stroke="#6ee7b7" stroke-width="1.5" />
  <text x="680" y="282" text-anchor="middle" fill="#34d399" font-size="12" font-weight="bold" font-family="system-ui, sans-serif">Products</text>

  <!-- ======= SPARK / FLAME (POSITIONED CLEANLY ABOVE THE RISING CURVE) ======= -->
  <!-- Container background to prevent curve line clash -->
  <rect x="175" y="48" width="145" height="34" rx="6" fill="#0f172a" stroke="#334155" stroke-width="1" opacity="0.95" />
  <path d="M 183,54 L 189,65 L 182,65 L 191,77 L 186,77" fill="none" stroke="#eab308" stroke-width="2.2" stroke-linejoin="round" />
  <text x="196" y="62" fill="#eab308" font-size="11" font-weight="bold" font-family="system-ui, sans-serif">Spark / Flame needed</text>
  <text x="196" y="75" fill="#fde68a" font-size="10" font-family="system-ui, sans-serif">to overcome E_a</text>

  <!-- ======= Ea ARROW (EXACT VERTICAL ALIGNMENT FROM REACTANT LEVEL Y=195 TO PEAK Y=85 AT X=350) ======= -->
  <line x1="350" y1="193" x2="350" y2="87" stroke="#ef4444" stroke-width="2.5" />
  <!-- Arrowhead Top (at y=85 peak) -->
  <path d="M 344,93 L 350,85 L 356,93" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-linejoin="round" />
  <!-- Arrowhead Bottom (at y=195 reactant level) -->
  <path d="M 344,187 L 350,195 L 356,187" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-linejoin="round" />

  <!-- Ea Label Box (offset to the right at x=370 to avoid overlapping arrow and curve) -->
  <rect x="370" y="115" width="185" height="54" rx="6" fill="#0f172a" stroke="#ef4444" stroke-width="1" opacity="0.95" />
  <text x="380" y="133" fill="#ef4444" font-size="12" font-weight="bold" font-family="system-ui, sans-serif">E_a (Activation Energy)</text>
  <text x="380" y="149" fill="#fca5a5" font-size="10" font-family="system-ui, sans-serif">High barrier — reaction cannot</text>
  <text x="380" y="162" fill="#fca5a5" font-size="10" font-family="system-ui, sans-serif">proceed without input at r.t.</text>

  <!-- ======= ΔH ARROW (EXACT ALIGNMENT FROM REACTANT LEVEL Y=195 TO PRODUCT LEVEL Y=255 AT X=760) ======= -->
  <line x1="760" y1="197" x2="760" y2="253" stroke="#10b981" stroke-width="2.5" />
  <!-- Arrowhead Top -->
  <path d="M 754,203 L 760,195 L 766,203" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linejoin="round" />
  <!-- Arrowhead Bottom -->
  <path d="M 754,247 L 760,255 L 766,247" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linejoin="round" />

  <!-- ΔH Label Box (placed to the right at x=780, fully inside canvas boundaries) -->
  <text x="778" y="218" fill="#10b981" font-size="12" font-weight="bold" font-family="system-ui, sans-serif">-ΔH (exothermic)</text>
  <text x="778" y="234" fill="#6ee7b7" font-size="10.5" font-family="system-ui, sans-serif">ΔS_total &gt; 0, K ≫ 1</text>
  <text x="778" y="249" fill="#6ee7b7" font-size="10.5" font-family="system-ui, sans-serif">Thermodynamically Feasible</text>
</svg>`)}

> [!EXAMPLE]
> #### 📝 Worked Example 1: Temperature effect on CaCO₃ decomposition
> **Question:** Calcium carbonate decomposes as follows:
> $$\\\\text{CaCO}_3\\\\text{(s)} \\\\rightarrow \\\\text{CaO(s)} + \\\\text{CO}_2\\\\text{(g)} \\\\quad \\\\Delta H^\\\\theta = +177.9\\\\text{ kJ mol}^{-1}$$
> The standard system entropy change is $\\\\Delta S^\\\\theta\\\\text{system} = +160.4\\\\text{ J K}^{-1}\\\\text{mol}^{-1}$. Calculate $\\\\Delta S^\\\\theta\\\\text{total}$ at:
> 1. $293\\\\text{ K}$ ($20\\\\text{ }^\\\\circ\\\\text{C}$)
> 2. $1173\\\\text{ K}$ ($900\\\\text{ }^\\\\circ\\\\text{C}$)
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **At $293\\\\text{ K}$ ($20\\\\text{ }^\\\\circ\\\\text{C}$):**
> >    * Calculate standard surroundings entropy:
> >      $$\\\\Delta S^\\\\theta\\\\text{surroundings} = -\\\\frac{177900\\\\text{ J mol}^{-1}}{293\\\\text{ K}} = -607.2\\\\text{ J K}^{-1}\\\\text{mol}^{-1}$$
> >    * Calculate total entropy change:
> >      $$\\\\Delta S^\\\\theta\\\\text{total}(293\\\\text{ K}) = +160.4 + (-607.2) = -446.8\\\\text{ J K}^{-1}\\\\text{mol}^{-1}$$
> >    * **Spontaneity:** Since $\\\\Delta S\\\\text{total} < 0$, the reaction is non-spontaneous at room temperature.
> > 
> > 2. **At $1173\\\\text{ K}$ ($900\\\\text{ }^\\\\circ\\\\text{C}$):**
> >    * Calculate standard surroundings entropy:
> >      $$\\\\Delta S^\\\\theta\\\\text{surroundings} = -\\\\frac{177900\\\\text{ J mol}^{-1}}{1173\\\\text{ K}} = -151.7\\\\text{ J K}^{-1}\\\\text{mol}^{-1}$$
> >    * Calculate total entropy change:
> >      $$\\\\Delta S^\\\\theta\\\\text{total}(1173\\\\text{ K}) = +160.4 + (-151.7) = +8.7\\\\text{ J K}^{-1}\\\\text{mol}^{-1}$$
> >    * **Spontaneity:** Since $\\\\Delta S\\\\text{total} > 0$, the reaction is spontaneous at this high temperature.

> [!IMPORTANT]
> ### 🧮 Thermodynamic Connection: $\\\\Delta S^\\\\theta\\\\text{total}$ and $K$
> For a reversible system that reaches equilibrium, the standard total entropy change is directly linked to the equilibrium constant ($K_c$ or $K_p$) by the equation:
> $$\\\\Delta S^\\\\theta\\\\text{total} = R \\\\ln K$$
> 
> Where:
> * $R$ is the gas constant ($8.31\\\\text{ J K}^{-1}\\\\text{mol}^{-1}$)
> * $K$ is the thermodynamic equilibrium constant (which has no units)
> * By rearranging this equation, we can calculate the equilibrium constant:
>   $$K = e^{\\\\frac{\\\\Delta S^\\\\theta\\\\text{total}}{R}}$$

> [!WARNING]
> ### 🛑 Learning Tip: Thermodynamic Constants vs Experimental Units
> * The mathematical values of $K$ in $\\\\Delta S\\\\text{total} = R \\\\ln K$ must not have units.
> * To convert an experimental value of $K_p$ (in atm) or $K_c$ (in $\\\\text{mol dm}^{-3}$) into a thermodynamic constant, each partial pressure is divided by the standard pressure ($1\\\\text{ atm}$) and each concentration is divided by the standard concentration ($1\\\\text{ mol dm}^{-3}$).
> * Because this standard reference is 1, the numerical values remain unchanged, but they become dimensionless.

> [!EXAMPLE]
> #### 📝 Worked Example 2: Calculating $K$ from Entropy Data
> **Question:** The reaction to form sulfur trioxide from sulfur dioxide and oxygen has a standard total entropy change of $\\\\Delta S^\\\\theta\\\\text{total} = +238.3\\\\text{ J K}^{-1}\\\\text{mol}^{-1}$:
> $$\\\\text{SO}_2\\\\text{(g)} + \\\\frac{1}{2}\\\\text{O}_2\\\\text{(g)} \\\\rightleftharpoons \\\\text{SO}_3\\\\text{(g)}$$
> Calculate the value of the equilibrium constant $K$ for this reaction ($R = 8.31\\\\text{ J K}^{-1}\\\\text{mol}^{-1}$).
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Recall the rearranged thermodynamic equation:**
> >    $$K = e^{\\\\frac{\\\\Delta S^\\\\theta\\\\text{total}}{R}}$$
> > 
> > 2. **Substitute the given values:**
> >    $$K = e^{\\\\frac{238.3}{8.31}} = e^{28.676}$$
> > 
> > 3. **Solve for $K$:**
> >    $$K = 2.84 \\\\times 10^{12}$$
> >    * Note: The constant has no units.

> [!EXAMPLE]
> #### 📝 Worked Example 3: Reforming of Methane
> **Question:** Methane reacts with steam to form carbon monoxide and hydrogen:
> $$\\\\text{CH}_4\\\\text{(g)} + \\\\text{H}_2\\\\text{O(g)} \\\\rightleftharpoons \\\\text{CO(g)} + 3\\\\text{H}_2\\\\text{(g)} \\\\quad \\\\Delta H_r^\\\\theta = +206\\\\text{ kJ mol}^{-1}$$
> At a certain temperature, $K_p = 8.54$ and the standard system entropy change is $\\\\Delta S^\\\\theta\\\\text{system} = +225\\\\text{ J K}^{-1}\\\\text{mol}^{-1}$ ($R = 8.31\\\\text{ J K}^{-1}\\\\text{mol}^{-1}$).
> 
> 1. Calculate the total entropy change ($\\\\Delta S\\\\text{total}$) for this reaction.
> 2. Calculate the temperature (in K) at which this reaction reaches equilibrium.
> 3. Explain the effect of increasing the temperature on the value of $K_p$.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate the total entropy change ($\\\\Delta S\\\\text{total}$):**
> >    * Use the thermodynamic equation:
> >      $$\\\\Delta S\\\\text{total} = R \\\\ln K_p$$
> >      $$\\\\Delta S\\\\text{total} = 8.31 \\\\times \\\\ln(8.54) = 8.31 \\\\times 2.1448 = +17.82\\\\text{ J K}^{-1}\\\\text{mol}^{-1}$$
> > 
> > 2. **Calculate the temperature ($T$) at equilibrium:**
> >    * Recall that:
> >      $$\\\\Delta S\\\\text{total} = \\\\Delta S^\\\\theta\\\\text{system} + \\\\Delta S^\\\\theta\\\\text{surroundings}$$
> >      $$+17.82 = +225 + \\\\Delta S^\\\\theta\\\\text{surroundings}$$
> >      $$\\\\Delta S^\\\\theta\\\\text{surroundings} = 17.82 - 225 = -207.18\\\\text{ J K}^{-1}\\\\text{mol}^{-1}$$
> >    * Use the surroundings entropy relation:
> >      $$\\\\Delta S^\\\\theta\\\\text{surroundings} = -\\\\frac{\\\\Delta H_r^\\\\theta}{T}$$
> >      $$-207.18 = -\\\\frac{206000}{T}$$
> >      $$T = \\\\frac{-206000}{-207.18} = 994.3\\\\text{ K}$$
> > 
> > 3. **Explain effect of a temperature increase on $K_p$:**
> >    * The reaction is endothermic ($\\\\Delta H_r^\\\\theta = +206\\\\text{ kJ mol}^{-1}$), so $\\\\Delta S^\\\\theta\\\\text{surroundings}$ is negative.
> >    * Increasing $T$ makes the magnitude of the negative term $-\\\\frac{\\\\Delta H}{T}$ smaller (less negative).
> >    * Consequently, $\\\\Delta S\\\\text{total} = \\\\Delta S\\\\text{system} + \\\\Delta S\\\\text{surroundings}$ becomes more positive (increases).
> >    * Since $\\\\Delta S\\\\text{total} = R \\\\ln K$, an increase in $\\\\Delta S\\\\text{total}$ drives an increase in the value of $K_p$.

> [!EXAMPLE]
> #### 📝 Worked Example 4: Iron(II) and Silver(I) Ionic Equilibrium
> **Question:** Iron(II) ions react with aqueous silver(I) ions in a reversible reaction:
> $$\\\\text{Fe}^{2+}\\\\text{(aq)} + \\\\text{Ag}^+\\\\text{(aq)} \\\\rightleftharpoons \\\\text{Fe}^{3+}\\\\text{(aq)} + \\\\text{Ag(s)}$$
> At standard temperature ($298\\\\text{ K}$), the standard total entropy change is $\\\\Delta S^\\\\theta\\\\text{total} = +47.64\\\\text{ J K}^{-1}\\\\text{mol}^{-1}$ and the system entropy change is $\\\\Delta S^\\\\theta\\\\text{system} = -208.3\\\\text{ J K}^{-1}\\\\text{mol}^{-1}$ ($R = 8.31\\\\text{ J K}^{-1}\\\\text{mol}^{-1}$).
> 
> 1. State two observations when this reaction reaches equilibrium.
> 2. Calculate the value of the equilibrium constant $K_c$ at $298\\\\text{ K}$.
> 3. Explain why the standard system entropy change ($\\\\Delta S^\\\\theta\\\\text{system}$) is negative.
> 4. Calculate the surroundings entropy change ($\\\\Delta S^\\\\theta\\\\text{surroundings}$) and the enthalpy change ($\\\\Delta H^\\\\theta$) for this reaction.
> 5. Explain the effect of increasing temperature on $\\\\Delta S\\\\text{total}$ and the yield of silver.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **State two observations:**
> >    * A grey/shiny solid precipitate (silver metal, $\\\\text{Ag(s)}$) forms.
> >    * The solution changes color from pale green/colorless to yellow/orange/brown (due to the formation of $\\\\text{Fe}^{3+}\\\\text{(aq)}$).
> > 
> > 2. **Calculate $K_c$ at $298\\\\text{ K}$:**
> >    * Use the relation:
> >      $$K_c = e^{\\\\frac{\\\\Delta S^\\\\theta\\\\text{total}}{R}}$$
> >      $$K_c = e^{\\\\frac{47.64}{8.31}} = e^{5.7329} = 308.8$$
> >      * Final Answer: $K_c = 309$ (to 3 significant figures)
> > 
> > 3. **Explain why system entropy change is negative:**
> >    * There is a decrease in the total number of aqueous ions: the reactants contain 2 aqueous ions ($\\\\text{Fe}^{2+} + \\\\text{Ag}^+$) while the products contain only 1 aqueous ion ($\\\\text{Fe}^{3+}$).
> >    * The formation of a solid ($\\\\text{Ag}$) from aqueous species increases order locally, leading to a decrease in system disorder (entropy).
> > 
> > 4. **Calculate surroundings entropy and enthalpy change:**
> >    * $\\\\Delta S^\\\\theta\\\\text{surroundings} = \\\\Delta S^\\\\theta\\\\text{total} - \\\\Delta S^\\\\theta\\\\text{system} = +47.64 - (-208.3) = +255.94\\\\text{ J K}^{-1}\\\\text{mol}^{-1}$
> >    * Since $\\\\Delta S^\\\\theta\\\\text{surroundings} = -\\\\frac{\\\\Delta H^\\\\theta}{T}$ (where $T = 298\\\\text{ K}$):
> >      $$\\\\Delta H^\\\\theta = -\\\\Delta S^\\\\theta\\\\text{surroundings} \\\\times T = -255.94 \\\\times 298 = -76270\\\\text{ J mol}^{-1} = -76.3\\\\text{ kJ mol}^{-1}$$
> > 
> > 5. **Explain effect of increasing temperature:**
> >    * The reaction is exothermic ($\\\\Delta H^\\\\theta < 0$), so $\\\\Delta S^\\\\theta\\\\text{surroundings}$ is positive.
> >    * Increasing the temperature $T$ reduces the value of $\\\\Delta S^\\\\theta\\\\text{surroundings} = -\\\\frac{\\\\Delta H}{T}$ (making it less positive).
> >    * Consequently, $\\\\Delta S\\\\text{total}$ decreases (becomes less positive), which shifts the equilibrium position to the left (reducing the yield of silver).

> [!BOX]
> ### 📈 Position of Equilibrium and $K$ Value
> The magnitude of the equilibrium constant ($K$) and the sign of the standard total entropy change ($\\\\Delta S^\\\\theta\\\\text{total}$) predict the extent of a reaction:
> 
> * **Large Positive $\\\\Delta S^\\\\theta\\\\text{total}$ ($K \\\\gg 1$):**
>   * Equilibrium position lies far to the **right** (heavily favoring products). The reaction goes virtually to completion.
> * **Large Negative $\\\\Delta S^\\\\theta\\\\text{total}$ ($K \\\\ll 1$):**
>   * Equilibrium position lies far to the **left** (heavily favoring reactants). The reaction barely starts.
> * **Intermediate $\\\\Delta S^\\\\theta\\\\text{total}$ ($\\\\approx 0$ or $K \\\\approx 1$):**
>   * Significant amounts of both reactants and products are present at equilibrium.
`,
        keyPoints: [
            'Total entropy change and equilibrium constant are linked by standard thermodynamic equations.',
            'Standard system entropy changes very little with temperature, whereas surroundings entropy is heavily dependent on temperature.',
            'A large positive standard total entropy change indicates a reaction that goes nearly to completion with a large K.',
            'A reaction can be highly thermodynamically feasible (positive total entropy) but kinetically stable (inert) at room temperature due to a high activation energy (Ea) barrier.'
        ]
    }
];
