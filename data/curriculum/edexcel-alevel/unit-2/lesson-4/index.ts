import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Kinetics & Equilibria I";
export const lessonNumber = 4;

export const theoryMarkdown = `
# Topic 9: Introduction to Kinetics and Equilibria
This topic covers the principles of chemical kinetics, collision theory, activation energy, and factors affecting the rates of chemical reactions, followed by an introduction to reversible reactions and chemical equilibria.
`;

const collisionTheorySvg = `<svg viewBox="0 0 650 220" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGradK" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e"/>
      <stop offset="100%" stop-color="#0b1b35"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bgGradK)" rx="8" stroke="#1e293b" stroke-width="1.5"/>
  <text x="50%" y="22" text-anchor="middle" fill="#f8fafc" font-size="14" font-weight="bold">Collision Orientation &amp; Steric Hindrance</text>
  
  <!-- Successful Collision (Correct Orientation) -->
  <g transform="translate(15, 35)">
    <rect width="195" height="170" rx="8" fill="#10b981" fill-opacity="0.05" stroke="#10b981" stroke-width="1.2"/>
    <text x="97" y="20" text-anchor="middle" fill="#10b981" font-size="10.5" font-weight="bold">1. Successful Collision</text>
    
    <!-- Ethene molecule -->
    <text x="60" y="55" fill="#f8fafc" font-size="11" font-family="monospace">H₂C=CH₂</text>
    <!-- HBr molecule approaching correctly -->
    <text x="65" y="115" fill="#38bdf8" font-size="11" font-family="monospace">H—Br</text>
    
    <!-- Animation arrow -->
    <path d="M 75 102 L 75 72" fill="none" stroke="#f59e0b" stroke-width="1.5" marker-end="url(#arrow)"/>
    <text x="135" y="70" fill="#f8fafc" font-size="9">H approaches</text>
    <text x="135" y="82" fill="#f8fafc" font-size="9">C=C bond</text>
    <text x="135" y="94" fill="#34d399" font-size="9" font-weight="bold">Reaction occurs</text>
    
    <!-- Checkmark -->
    <circle cx="25" cy="145" r="10" fill="#10b981"/>
    <text x="25" y="149" text-anchor="middle" fill="#ffffff" font-size="12" font-weight="bold">✓</text>
    <text x="42" y="148" fill="#f8fafc" font-size="10">Correct orientation</text>
  </g>
  
  <!-- Unsuccessful Collision (Incorrect Orientation) -->
  <g transform="translate(225, 35)">
    <rect width="195" height="170" rx="8" fill="#ef4444" fill-opacity="0.05" stroke="#ef4444" stroke-width="1.2"/>
    <text x="97" y="20" text-anchor="middle" fill="#ef4444" font-size="10.5" font-weight="bold">2. Unsuccessful Collision</text>
    
    <!-- Ethene molecule -->
    <text x="60" y="55" fill="#f8fafc" font-size="11" font-family="monospace">H₂C=CH₂</text>
    <!-- HBr molecule approaching incorrectly -->
    <text x="65" y="115" fill="#ef4444" font-size="11" font-family="monospace">Br—H</text>
    
    <!-- Animation arrow -->
    <path d="M 75 102 L 75 72" fill="none" stroke="#ef4444" stroke-width="1.5"/>
    <text x="135" y="70" fill="#f8fafc" font-size="9">Br approaches</text>
    <text x="135" y="82" fill="#f8fafc" font-size="9">C=C bond</text>
    <text x="135" y="94" fill="#ef4444" font-size="9" font-weight="bold">No reaction</text>
    
    <!-- Cross mark -->
    <circle cx="25" cy="145" r="10" fill="#ef4444"/>
    <text x="25" y="149" text-anchor="middle" fill="#ffffff" font-size="12" font-weight="bold">✗</text>
    <text x="42" y="148" fill="#f8fafc" font-size="10">Incorrect orientation</text>
  </g>
  
  <!-- Steric Hindrance (CCl4) -->
  <g transform="translate(435, 35)">
    <rect width="200" height="170" rx="8" fill="#a855f7" fill-opacity="0.05" stroke="#a855f7" stroke-width="1.2"/>
    <text x="100" y="20" text-anchor="middle" fill="#a855f7" font-size="10.5" font-weight="bold">3. Steric Hindrance</text>
    
    <!-- CCl4 Representation -->
    <circle cx="85" cy="80" r="12" fill="#334155" stroke="#94a3b8" stroke-width="1.5"/>
    <text x="85" y="84" text-anchor="middle" fill="#f8fafc" font-size="9" font-weight="bold">C</text>
    
    <!-- 4 Chlorine atoms surrounding -->
    <circle cx="85" cy="46" r="15" fill="#a855f7" fill-opacity="0.6" stroke="#c084fc" stroke-width="1"/>
    <text x="85" y="50" text-anchor="middle" fill="#f8fafc" font-size="9">Cl</text>
    
    <circle cx="51" cy="80" r="15" fill="#a855f7" fill-opacity="0.6" stroke="#c084fc" stroke-width="1"/>
    <text x="51" y="84" text-anchor="middle" fill="#f8fafc" font-size="9">Cl</text>
    
    <circle cx="119" cy="80" r="15" fill="#a855f7" fill-opacity="0.6" stroke="#c084fc" stroke-width="1"/>
    <text x="119" y="84" text-anchor="middle" fill="#f8fafc" font-size="9">Cl</text>
    
    <circle cx="85" cy="114" r="15" fill="#a855f7" fill-opacity="0.6" stroke="#c084fc" stroke-width="1"/>
    <text x="85" y="118" text-anchor="middle" fill="#f8fafc" font-size="9">Cl</text>
    
    <!-- Water molecule trying to approach carbon but blocked -->
    <g transform="translate(145, 125)">
      <circle cx="15" cy="15" r="8" fill="#38bdf8"/>
      <text x="15" y="18" text-anchor="middle" fill="#f8fafc" font-size="8">O</text>
      <!-- Arrow showing bounce -->
      <path d="M 0 0 L -12 -12" fill="none" stroke="#ef4444" stroke-width="1.5" marker-end="url(#arrow)"/>
    </g>
    <text x="100" y="155" text-anchor="middle" fill="#94a3b8" font-size="9.5">Cl shield carbon from OH⁻ attack</text>
  </g>
</svg>`;

export const parts: LessonPart[] = [
    {
        id: '9a1-rate-graphs',
        title: 'Rate of Reaction & Graphs',
        type: 'text',
        content: `
> [!NOTE]
> ### ⏱️ What is the Rate of Reaction?
> The **rate of a chemical reaction** measures how fast reactants are converted into products:
> $$\\text{Rate of Reaction} = \\frac{\\text{Change in concentration of reactant or product}}{\\text{Time taken}}$$
> * **Standard Unit:** $\\\\text{mol dm}^{-3}\\\\text{ s}^{-1}$ (moles per cubic decimetre per second)
> * Rates are always expressed as positive values.

> [!TIP]
> ### 📈 Graphical Analysis: Slopes and Tangents
> We can monitor concentration changes over time and plot them on a graph:
> 1. **Reactant concentration vs. Time:** The curve slopes downwards. The gradient (rate) is steepest at the start and becomes zero when the reaction is complete (all limiting reactant is used up).
> 2. **Product concentration vs. Time:** The curve slopes upwards.
> 
> **Calculating Rate at a specific time, t:**
> * Draw a straight-line **tangent** touching the curve exactly at time $t$
> * Calculate the gradient of this tangent line:
>   $$\\text{Gradient} = \\frac{\\Delta y}{\\Delta x} = \\frac{\\text{Change in concentration}}{\\text{Change in time}}$$
> * **Initial Rate:** The rate at $t = 0$. Calculate this by drawing a tangent at the very start of the curve.

> [!BOX]
> ### 📋 Calculating Rate from Time ($1/\\text{time}$)
> For reactions where we measure the time taken ($t$) for a fixed, observable change to occur (such as a precipitate hiding a black cross beneath the beaker, like the sodium thiosulfate + acid reaction):
> * We assume the rate is inversely proportional to the time taken:
>   $$\\text{Rate} \\\\approx \\frac{1}{t}$$
> * **Unit:** $\\\\text{s}^{-1}$

> [!EXAMPLE]
> #### 📝 Worked Example 1: Rate from Gas Collection Data
> **Question:** A student reacts calcium carbonate with hydrochloric acid and records the time taken to collect $20.0\\text{ cm}^3$ of carbon dioxide gas.
> * Time taken $= 40.0\\text{ s}$
> Calculate the average rate of reaction in $\\text{cm}^3\\text{ s}^{-1}$ for this period.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the formula:**
> >    $$\\text{Rate} = \\frac{\\text{Volume of gas collected}}{\\text{Time taken}}$$
> > 
> > 2. **Substitute values:**
> >    $$\\text{Rate} = \\frac{20.0\\text{ cm}^3}{40.0\\text{ s}} = 0.50\\text{ cm}^3\\text{ s}^{-1}$$
`,
        keyPoints: [
            'Rate of reaction is measured in mol dm⁻³ s⁻¹.',
            'Drawing a tangent at t = 0 yields the initial rate of reaction.',
            'For fixed-change experiments, rate can be approximated as 1/time.'
        ]
    },
    {
        id: '9a2-collision-theory',
        title: 'Collision Theory, Orientation & Steric Hindrance',
        type: 'text',
        content: `
> [!NOTE]
> ### 💥 Collision Theory Requirements
> According to collision theory, a chemical reaction can only occur when reactant particles collide. However, the vast majority of collisions are unsuccessful. For a collision to lead to a reaction (a **successful collision**), two criteria must be met:
> 
> 1. **Sufficient Energy (Activation Energy, $E_a$):** Colliding particles must possess energy equal to or greater than the activation energy ($E_a$). If they collide with less energy, they simply bounce apart.
> 2. **Correct Orientation:** Particles must collide in the correct spatial alignment so that the reacting atoms can directly interact to break and form bonds.
> 
> ${svgToken(collisionTheorySvg)}

> [!TIP]
> ### 📐 Collision Orientation
> * **Successful Example:** Ethene reacting with hydrogen bromide ($HBr$) to form bromoethane:
>   * The hydrogen atom ($\\\\delta+$ end of $HBr$) must approach the carbon-carbon double bond ($C=C$).
>   * If the bromine end ($Br$) approaches the $C=C$ bond, the electron clouds repel, and they bounce apart without reacting.

> [!IMPORTANT]
> ### 🛡️ Steric Hindrance
> **Steric hindrance** is the slowing down or prevention of a chemical reaction because large atoms or groups of atoms within a molecule physically block the attacking species from reaching the reactive center.
> * **Chloromethane ($CH_3Cl$) vs. Tetrachloromethane ($CCl_4$):**
>   * Chloromethane reacts easily with hydroxide ions ($OH^-$) to form methanol because the three small hydrogen atoms leave the carbon atom accessible.
>   * Tetrachloromethane does **not** react with $OH^-$ because the four large chlorine atoms surround the central carbon atom completely, shielding it from nucleophilic attack.

> [!EXAMPLE]
> #### 📝 Worked Example 2: Collision Energy Conversion
> **Question:** A collision between a hydrogen atom and a chlorine atom has a combined kinetic energy of $1.0 \\\\times 10^{-18}\\text{ J}$.
> * The bond enthalpy of $H-Cl$ is $431\\text{ kJ mol}^{-1}$.
> Determine, by calculation, whether this collision has sufficient energy to break a bond.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Convert the collision energy per molecule to energy per mole:**
> >    * Multiply the molecular energy by Avogadro's constant ($L = 6.022 \\\\times 10^{23}\\text{ mol}^{-1}$):
> >      $$\\text{Molar Energy} = 1.0 \\\\times 10^{-18}\\text{ J} \\\\times 6.022 \\\\times 10^{23}\\text{ mol}^{-1}$$
> >      $$\\text{Molar Energy} = 6.022 \\\\times 10^5\\text{ J mol}^{-1}$$
> > 
> > 2. **Convert Joules to kilojoules:**
> >      $$\\text{Molar Energy} = \\frac{6.022 \\\\times 10^5}{1000} = 602.2\\text{ kJ mol}^{-1}$$
> > 
> > 3. **Compare with the bond enthalpy:**
> >    * Collision energy ($602.2\\text{ kJ mol}^{-1}$) is greater than the H–Cl bond enthalpy ($431\\text{ kJ mol}^{-1}$).
> >    * Therefore, the collision has **sufficient energy** to react (break/form bonds).
`,
        keyPoints: [
            'A reaction requires collisions to have energy ≥ Ea and correct orientation.',
            'Steric hindrance occurs when large groups physically block access to the reactive site.',
            'Molecular collision energies must be scaled by Avogadro\'s number to compare with molar activation/bond energies.'
        ]
    },
    {
        id: '9a3-conc-pressure-surface',
        title: 'Effect of Concentration, Pressure, and Surface Area',
        type: 'text',
        content: `
> [!NOTE]
> ### 🧪 The Effect of Concentration
> Increasing the concentration of a solution increases the rate of reaction.
> * **Collision frequency:** Solute particles are closer together in a given volume of solution.
> * This increases the frequency of collisions (more collisions per second).
> * Consequently, the frequency of successful collisions increases, leading to a faster rate of reaction.
> * *Graph profile:* Curve A (higher concentration) is steeper than Curve B (lower concentration) and levels off sooner, showing a faster rate.

> [!TIP]
> ### 💨 The Effect of Pressure
> For reactions involving gases, increasing the pressure increases the rate of reaction.
> * **Collision frequency:** Gaseous molecules are compressed into a smaller volume.
> * The concentration of gas particles increases, resulting in more collisions per second and a higher frequency of successful collisions.
> * **Liquids and Solids:** Changing pressure has almost no effect on reactions in the solid or liquid phase because they are virtually incompressible (their particles are already packed closely and cannot move closer together).

> [!IMPORTANT]
> ### 🧱 The Effect of Surface Area
> For heterogeneous reactions (reactions involving species in different phases, such as a solid reacting with a solution):
> * Reactions only occur on the **surface** of the solid reactant.
> * Powdering the solid increases its **surface area**, exposing more reactant particles to the surrounding fluid.
> * This leads to a higher frequency of collisions per second and a faster rate of reaction.
> * *Examples:* Powdered magnesium reacts much faster with HCl than magnesium lumps; powdered $MnO_2$ catalyses the decomposition of $H_2O_2$ much faster than chunks of $MnO_2$.

> [!EXAMPLE]
> #### 📝 Worked Example 3: Container Volume Halving
> **Question:** Ammonia and hydrogen chloride gases react to form ammonium chloride:
> $$NH_3\\text{(g)} + HCl\\text{(g)} \\\\rightarrow NH_4Cl\\text{(s)}$$
> State and explain the effect on the rate of reaction of halving the volume of the container at constant temperature.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the physical state changes:**
> >    * Reactants are both in the gas phase.
> > 
> > 2. **Analyze the effect of volume change on concentration:**
> >    * Halving the container volume doubles the pressure and concentration of gas particles.
> >    * The reactant molecules are now closer together in a smaller space.
> > 
> > 3. **Conclude in terms of collisions:**
> >    * The collision frequency between $NH_3$ and $HCl$ molecules increases, leading to a higher frequency of successful collisions and a **faster rate of reaction**.
`
    },
    {
        id: '9a4-temperature-mb',
        title: 'Effect of Temperature & Maxwell-Boltzmann Curves',
        type: 'text',
        content: `
> [!NOTE]
> ### 📈 Maxwell-Boltzmann Distribution Curves
> The molecules in a sample of gas have a wide range of kinetic energies. The **Maxwell-Boltzmann distribution** is a graph showing the distribution of these molecular energies:
> * **Key Features:**
>   * Neither curve is symmetrical.
>   * Starts at the origin (no molecules have zero energy).
>   * Peak represents the most probable energy of the molecules.
>   * The curve approaches the energy axis asymptotically on the right (there is no theoretical maximum energy).
>   * The area under each curve is constant and represents the total number of molecules.
> 
> \${svgToken(\`<svg viewBox="0 0 650 220" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGradMB" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e"/>
      <stop offset="100%" stop-color="#0b1b35"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bgGradMB)" rx="8" stroke="#1e293b" stroke-width="1.5"/>
  
  <!-- Axes -->
  <line x1="50" y1="180" x2="600" y2="180" stroke="#f8fafc" stroke-width="1.5"/>
  <line x1="50" y1="180" x2="50" y2="30" stroke="#f8fafc" stroke-width="1.5"/>
  <text x="325" y="210" text-anchor="middle" fill="#f8fafc" font-size="10">Energy, E</text>
  <text x="18" y="105" text-anchor="middle" fill="#f8fafc" font-size="10" transform="rotate(-90 18 105)">Fraction of molecules with energy E</text>
  
  <!-- Shaded Region for Ea (T1 and T2) -->
  <path d="M 400 120 C 450 145, 500 160, 550 167 L 550 180 L 400 180 Z" fill="#10b981" fill-opacity="0.2"/>
  <path d="M 400 95 C 450 115, 500 135, 550 147 L 550 180 L 400 180 Z" fill="#ef4444" fill-opacity="0.1"/>
  
  <!-- Curve T1 (Blue, lower Temp) -->
  <path d="M 50 180 Q 110 40 180 90 T 400 150 T 580 176" fill="none" stroke="#38bdf8" stroke-width="2"/>
  <text x="130" y="55" fill="#38bdf8" font-size="10" font-weight="bold">T₁ (Lower)</text>
  
  <!-- Curve T2 (Red, higher Temp) -->
  <path d="M 50 180 Q 160 85 240 110 T 450 155 T 580 172" fill="none" stroke="#f43f5e" stroke-width="2"/>
  <text x="210" y="80" fill="#f43f5e" font-size="10" font-weight="bold">T₂ (Higher)</text>
  
  <!-- Activation Energy Line -->
  <line x1="400" y1="180" x2="400" y2="60" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="3 3"/>
  <text x="400" y="50" text-anchor="middle" fill="#f59e0b" font-size="10" font-weight="bold">Ea</text>
  
  <!-- Legend -->
  <rect x="420" y="65" width="160" height="40" rx="4" fill="#1e293b" stroke="#334155" stroke-width="1"/>
  <text x="430" y="80" fill="#34d399" font-size="8.5" font-weight="bold">Green = molecules with E ≥ Ea at T₁</text>
  <text x="430" y="95" fill="#f43f5e" font-size="8.5" font-weight="bold">Red + Green = molecules with E ≥ Ea at T₂</text>
</svg>\`)}

> [!TIP]
> ### 🌡️ How Temperature Affects the Curve
> At a higher temperature ($T_2 > T_1$):
> * The peak shifts to the **right** (the average kinetic energy of the molecules increases)
> * The peak shifts **downwards** (the curve flattens so that the total area remains constant)
> * The curve sits higher than the $T_1$ curve at high energies

> [!IMPORTANT]
> ### ⚡ Why Does Rate Increase with Temperature?
> Increasing the temperature increases the rate of reaction because:
> 
> 1. **Major Reason:** The average kinetic energy of the molecules increases, so a **significantly larger fraction of molecules possess energy equal to or greater than the activation energy ($E \\\\ge E_a$)**. This yields a massive increase in the frequency of successful collisions.
> 2. **Minor Reason:** Molecules move faster, slightly increasing the overall collision frequency. However, this effect is negligible compared to the increase in energetic molecules.

> [!EXAMPLE]
> #### 📝 Worked Example 4: Temperature Effect Explanation
> **Question:** In an exam, a student explains that increasing the temperature increases the rate of a reaction solely because molecules move faster and collide more frequently. Explain why this statement is incomplete and correct it.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the missing core kinetic concept:**
> >    * The student focuses only on collision frequency, neglecting the activation energy threshold.
> > 
> > 2. **Compare the effects of temperature on collision frequency vs. successful collision fraction:**
> >    * A typical temperature rise of $10\\text{ K}$ increases collision frequency by only about $2\\%$, but it can double or triple the reaction rate.
> >    * This is because the fraction of molecules with energy $E \ge E_a$ increases exponentially.
> > 
> > 3. **Write the complete answer:**
> >    * While overall collision frequency increases slightly, the primary reason rate increases is that the average kinetic energy of the molecules increases.
> >    * Therefore, a significantly larger fraction of molecules possess energy $\ge E_a$, leading to a massive increase in the frequency of successful collisions.
`
    },
    {
        id: '9a5-catalysts-profiles',
        title: 'Effect of Catalysts & Reaction Profiles',
        type: 'text',
        content: `
> [!NOTE]
> ### ⚡ Catalyst Mechanism
> A **catalyst** increases the rate of a chemical reaction without being consumed or chemically changed at the end of the process.
> * **Mechanism:** A catalyst provides an **alternative reaction route with a lower activation energy ($E_a$)** than the original pathway.
> * **Exam Hint:** A catalyst does **not** lower the activation energy of the original pathway; it leaves it unchanged and provides a *different* pathway with a lower $E_a$.
> 
> ${svgToken(`<svg viewBox="0 0 650 220" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGradRP" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e"/>
      <stop offset="100%" stop-color="#0b1b35"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bgGradRP)" rx="8" stroke="#1e293b" stroke-width="1.5"/>
  
  <!-- Axes -->
  <line x1="60" y1="180" x2="600" y2="180" stroke="#f8fafc" stroke-width="1.5"/>
  <line x1="60" y1="180" x2="600" y2="180" stroke="#f8fafc" stroke-width="1.5"/>
  <line x1="60" y1="180" x2="60" y2="30" stroke="#f8fafc" stroke-width="1.5"/>
  <text x="325" y="205" text-anchor="middle" fill="#f8fafc" font-size="10">Reaction Progress</text>
  <text x="22" y="105" text-anchor="middle" fill="#f8fafc" font-size="10" transform="rotate(-90 22 105)">Enthalpy, H</text>
  
  <!-- Reactant and Product Levels -->
  <line x1="60" y1="110" x2="160" y2="110" stroke="#34d399" stroke-width="2"/>
  <text x="90" y="100" fill="#34d399" font-size="10" font-weight="bold">Reactants</text>
  
  <line x1="440" y1="160" x2="580" y2="160" stroke="#38bdf8" stroke-width="2"/>
  <text x="510" y="150" fill="#38bdf8" font-size="10" font-weight="bold">Products</text>
  
  <!-- Uncatalysed Path (Single high peak) -->
  <path d="M 160 110 Q 280 -10 380 110 T 440 160" fill="none" stroke="#f8fafc" stroke-width="2"/>
  <text x="280" y="35" fill="#f8fafc" font-size="9" font-weight="bold">Uncatalysed Ea</text>
  
  <!-- Catalysed Path (Two lower peaks with intermediate) -->
  <path d="M 160 110 Q 220 50 260 85 T 380 120 T 440 160" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="2 2"/>
  <text x="220" y="45" fill="#ef4444" font-size="9" font-weight="bold">Catalysed Ea</text>
  <circle cx="260" cy="85" r="4" fill="#a855f7"/>
  <text x="260" y="100" text-anchor="middle" fill="#c084fc" font-size="9">Intermediate</text>
  
  <!-- Delta H -->
  <path d="M 430 110 L 430 160" fill="none" stroke="#fbbf24" stroke-width="1.5" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
  <line x1="160" y1="110" x2="440" y2="110" stroke="#64748b" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="410" y="138" fill="#fbbf24" font-size="9" font-weight="bold">ΔH</text>
</svg>`)}

> [!TIP]
> ### 🧪 Homogeneous vs. Heterogeneous Catalysts
> 
> 1. **Homogeneous Catalysts:** Exist in the **same phase** as the reactants.
>    * *Classic Example:* The reaction between peroxydisulfate ions ($S_2O_8^{2-}$) and iodide ions ($I^-$).
>    * Both reactants are negatively charged, causing strong electrostatic repulsion and an extremely slow rate.
>    * Iron(II) ions ($Fe^{2+}$) act as a homogeneous catalyst because they are positively charged, attracting both reactants. The reaction occurs in two steps:
>      $$\\text{Step 1: } S_2O_8^{2-}\\text{(aq)} + 2Fe^{2+}\\text{(aq)} \\rightarrow 2SO_4^{2-}\\text{(aq)} + 2Fe^{3+}\\text{(aq)}$$
>      $$\\text{Step 2: } 2Fe^{3+}\\text{(aq)} + 2I^-\\text{(aq)} \\rightarrow 2Fe^{2+}\\text{(aq)} + I_2\\text{(aq)}$$
>    * The intermediate species formed are $SO_4^{2-}(aq)$ and $Fe^{3+}(aq)$.
> 2. **Heterogeneous Catalysts:** Exist in a **different phase** to the reactants (usually a solid catalyst with gaseous reactants).
>    * *Mechanism:* Reactant molecules **adsorb** (bond chemically) onto the active sites on the solid catalyst surface, which weakens their bonds. They react, and the product molecules then **desorb** (release) from the surface.
>    * *Examples:* Iron ($Fe$) in the Haber Process ($3H_2 + N_2 \\rightleftharpoons 2NH_3$), and Vanadium(V) oxide ($V_2O_5$) in the Contact Process.

> [!IMPORTANT]
> ### 🌍 Catalysts and Atom Economy in Industry
> Catalysts improve the sustainability of industrial processes by:
> * **Lower Energy Costs:** Allowing reactions to proceed at much lower temperatures.
> * **Improving Atom Economy:** Enabling alternative synthesis routes with fewer steps and less co-product waste.
> * **Example - Ibuprofen Manufacture:**
>   * *Original method:* 6-step pathway using aluminium chloride ($AlCl_3$) catalyst which could not be recovered and was disposed of as waste.
>   * *Green method:* 3-step pathway using Raney nickel and hydrogen fluoride ($HF$) catalysts. These catalysts are easily recovered and reused, dramatically increasing the atom economy of the process.

> [!EXAMPLE]
> #### 📝 Worked Example 5: Catalysed Decomposition Profiles
> **Question:** Saturated hydrogen peroxide decomposes slowly:
> $$H_2O_2\\text{(aq)} \\rightarrow H_2O\\text{(l)} + \\frac{1}{2}O_2\\text{(g)} \\quad \\Delta H = -196\\text{ kJ mol}^{-1}$$
> The reaction is catalysed by solid manganese(IV) oxide ($MnO_2$). Explain the change in reaction rate when $MnO_2$ is added.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the catalytic type and pathway change:**
> >    * Solid $MnO_2$ acts as a heterogeneous catalyst. It provides a different reaction pathway.
> > 
> > 2. **Compare activation energies:**
> >    * The catalysed pathway has a much lower activation energy ($E_a$) than the uncatalysed route.
> > 
> > 3. **Relate to collision theory:**
> >    * On the Maxwell-Boltzmann distribution, a significantly larger fraction of molecules possess kinetic energy greater than or equal to this lower activation energy ($E \ge E_{a\\text{ cat}}$).
> >    * This yields a massive increase in the frequency of successful collisions per second, accelerating the rate of reaction.
`
    },
    {
        id: '9b1-reversible-equilibrium',
        title: 'Reversible Reactions & Dynamic Equilibrium',
        type: 'text',
        content: `
> [!NOTE]
> ### 🔄 Reversible vs. Irreversible Reactions
> * **Irreversible Reactions:** Proceed to completion (e.g. combustion reactions with a large, negative $\\Delta H$). The products cannot easily react to reform the reactants.
> * **Reversible Reactions:** Do not proceed to completion. The products can react to reform the reactants. Represented by the reversible arrows $\\rightleftharpoons$:
>   * *Example:* Heating hydrogen and iodine vapour in a sealed tube at $573\\text{ K}$ establishes a balance:
>     $$H_2\\text{(g)} + I_2\\text{(g)} \\rightleftharpoons 2HI\\text{(g)}$$
>   * The reaction from left to right is the **forward reaction**, and from right to left is the **backward reaction**.

> [!TIP]
> ### ⏱️ How Equilibrium is Established
> When reactants $H_2$ and $I_2$ are mixed:
> 1. At first, only the forward reaction occurs. Its rate is high because reactant concentrations are high.
> 2. As reactants are consumed, the forward rate decreases.
> 3. As $HI$ is formed, it begins to decompose. The backward reaction rate increases.
> 4. Eventually, the rate of the forward reaction equals the rate of the backward reaction.
> 
> ${svgToken(`<svg viewBox="0 0 650 220" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGradEQ" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e"/>
      <stop offset="100%" stop-color="#0b1b35"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bgGradEQ)" rx="8" stroke="#1e293b" stroke-width="1.5"/>
  
  <!-- Axes -->
  <line x1="60" y1="180" x2="600" y2="180" stroke="#f8fafc" stroke-width="1.5"/>
  <line x1="60" y1="180" x2="60" y2="30" stroke="#f8fafc" stroke-width="1.5"/>
  <text x="325" y="205" text-anchor="middle" fill="#f8fafc" font-size="10">Time</text>
  <text x="22" y="105" text-anchor="middle" fill="#f8fafc" font-size="10" transform="rotate(-90 22 105)">Rate of reaction</text>
  
  <!-- Forward Rate (starts high, curves down) -->
  <path d="M 60 50 C 150 90, 250 120, 350 120 L 580 120" fill="none" stroke="#f43f5e" stroke-width="2"/>
  <text x="120" y="70" fill="#f43f5e" font-size="10" font-weight="bold">forward reaction</text>
  
  <!-- Backward Rate (starts at 0, curves up) -->
  <path d="M 60 180 C 150 150, 250 120, 350 120 L 580 120" fill="none" stroke="#38bdf8" stroke-width="2"/>
  <text x="120" y="165" fill="#38bdf8" font-size="10" font-weight="bold">backward reaction</text>
  
  <!-- Equilibrium line -->
  <line x1="350" y1="180" x2="350" y2="40" stroke="#f59e0b" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="350" y="32" text-anchor="middle" fill="#f59e0b" font-size="10" font-weight="bold">Equilibrium established</text>
  <text x="470" y="112" fill="#fbbf24" font-size="9" font-weight="bold">Rates are equal (forward = backward)</text>
</svg>`)}

> [!IMPORTANT]
> ### 📋 Key Criteria of a Dynamic Equilibrium
> A system is in a state of **dynamic equilibrium** if and only if it satisfies these four features:
> 
> 1. **Closed System:** The reaction must be in a closed container, preventing the escape of reactants or products.
> 2. **Dynamic Nature:** Both forward and backward reactions are still actively occurring (they have not stopped).
> 3. **Equal Rates:** The rate of the forward reaction is exactly equal to the rate of the backward reaction.
> 4. **Constant Concentrations:** The concentrations of all reactants and products remain constant over time.

> [!EXAMPLE]
> #### 📝 Worked Example 6: Reversible Ammonia Graph
> **Question:** In the reversible reaction:
> $$N_2\\text{(g)} + 3H_2\\text{(g)} \rightleftharpoons 2NH_3\\text{(g)}$$
> A mixture of $1\\text{ mol}$ of $N_2$ and $3\\text{ mol}$ of $H_2$ are placed in a closed container and allowed to reach equilibrium. Draw a sketch graph showing how the amount (in moles) of nitrogen, hydrogen, and ammonia vary with time as equilibrium is established.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the starting amounts (t = 0):**
> >    * $N_2 = 1.0\\text{ mol}$ (starts high)
> >    * $H_2 = 3.0\\text{ mol}$ (starts highest)
> >    * $NH_3 = 0.0\\text{ mol}$ (starts at zero)
> > 
> > 2. **Describe the curves over time:**
> >    * $N_2$ and $H_2$ are reactants, so their amounts curve downwards, with $H_2$ falling three times faster than $N_2$ (due to 1:3 ratio).
> >    * $NH_3$ is the product, so its amount curves upwards from zero.
> > 
> > 3. **Identify the equilibrium region:**
> >    * When equilibrium is reached (represented by a vertical dotted line), all three curves must level off and become completely horizontal (constant amounts). Reactants are not zero.
`
    },
    {
        id: '9b2-le-chatelier-conc',
        title: "Le Chatelier's Principle: Concentration, Pressure, and Catalyst Effects",
        type: 'text',
        content: `
> [!NOTE]
> ### ⚖️ Le Chatelier's Principle
> If a system at dynamic equilibrium is subjected to a change in conditions (concentration, temperature, or pressure), **the position of equilibrium will shift to oppose or counteract that change**.
> * **Shift to the right:** More products are formed.
> * **Shift to the left:** More reactants are formed.
> * **No change in oxidation numbers:** Changing the position of equilibrium shifts concentrations but does not alter the oxidation numbers of the elements involved.

> [!IMPORTANT]
> ### 🎨 Chromate-Dichromate Equilibrium (Concentration Changes)
> A classic example of concentration shifts is the chromate-dichromate equilibrium:
> $$2CrO_4^{2-}\\text{(aq)} + 2H^+\\text{(aq)} \rightleftharpoons Cr_2O_7^{2-}\\text{(aq)} + H_2O\\text{(l)}$$
> * **Colors:** Chromate ion ($CrO_4^{2-}$) is **yellow**; dichromate ion ($Cr_2O_7^{2-}$) is **orange**.
> * **Adding Acid ($H^+$):** Increases reactant concentration, shifting the equilibrium to the **right** to remove excess $H^+$. The solution turns **orange**.
> * **Adding Alkali ($OH^-$):** Hydroxide ions neutralise and remove $H^+$, shifting the equilibrium to the **left** to replace the lost $H^+$. The solution turns **yellow**.
> * **Oxidation State:** The oxidation number of Chromium remains $+6$ in both species (no redox occurs during the color change).

> [!TIP]
> ### 💨 The Effect of Pressure Changes
> Changing pressure only affects reversible reactions involving **gaseous reactants and/or products**:
> * **Increase Pressure:** The equilibrium shifts to the **side with fewer moles of gas** (to reduce the total gas pressure in the system).
> * **Decrease Pressure:** The equilibrium shifts to the **side with more moles of gas** (to increase pressure).
> * **Equal Moles of Gas:** If the number of moles of gas is the same on both sides of the equation, changing pressure has **no effect** on the position of equilibrium (though it still increases the rates of both forward and backward reactions by increasing collision frequency).
>   * *Example:* $H_2(g) + I_2(g) \rightleftharpoons 2HI(g)$ (2 moles on both sides $\\implies$ no shift).

> [!IMPORTANT]
> ### ⚡ The Effect of Adding a Catalyst
> Adding a catalyst to a reversible reaction:
> * **Does not alter the position of equilibrium** (does not change the yield of products).
> * This is because a catalyst **increases the rates of both the forward and backward reactions by the exact same factor** (by providing the same alternative route with a lower activation energy for both directions).
> * It only **reduces the time required to establish equilibrium**.

> [!EXAMPLE]
> #### 📝 Worked Example 7: Chromate Shift Reasoning
> **Question:** Explain the color change observed when sodium hydroxide solution is added to an orange solution of potassium dichromate.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the equilibrium system:**
> >    $$2CrO_4^{2-}\\text{(aq)} + 2H^+\\text{(aq)} \rightleftharpoons Cr_2O_7^{2-}\\text{(aq)} + H_2O\\text{(l)}$$
> > 
> > 2. **Explain the chemical action of NaOH:**
> >    * Sodium hydroxide releases $OH^-(aq)$ ions, which neutralise $H^+$ ions in the solution, reducing $H^+$ concentration.
> > 
> > 3. **Apply Le Chatelier's Principle:**
> >    * The equilibrium shifts to the left to counteract the decrease in $H^+$ concentration.
> >    * This converts orange dichromate ($Cr_2O_7^{2-}$) into yellow chromate ($CrO_4^{2-}$), turning the solution yellow.
`
    },
    {
        id: '9b3-le-chatelier-temp-limits',
        title: "Le Chatelier's Principle: Temperature & Compromise Limitations",
        type: 'text',
        content: `
> [!NOTE]
> ### 🌡️ The Effect of Temperature Changes
> When the temperature of an equilibrium mixture is increased:
> * The rates of **both** the forward and backward reactions increase (due to higher kinetic energy and collision frequency).
> * However, **the rate of the endothermic reaction increases MORE than the rate of the exothermic reaction**.
> * Therefore, Le Chatelier's Principle predicts:
>   * **Increase Temperature:** Equilibrium shifts in the **endothermic direction** (to absorb the added heat).
>   * **Decrease Temperature:** Equilibrium shifts in the **exothermic direction** (to release heat).
> 
> | Forward Reaction Thermicity | Temperature Change | Direction of Equilibrium Shift |
> | :--- | :--- | :---: |
> | **Exothermic ($\\\\Delta H$ -ve)** | Increased | Shifts **Left** (less product) |
> | **Exothermic ($\\\\Delta H$ -ve)** | Decreased | Shifts **Right** (more product) |
> | **Endothermic ($\\\\Delta H$ +ve)** | Increased | Shifts **Right** (more product) |
> | **Endothermic ($\\\\Delta H$ +ve)** | Decreased | Shifts **Left** (less product) |

> [!WARNING]
> ### 🛑 Limitations of Qualitative Predictions
> In some industrial or laboratory setups, multiple variables change at once, leading to opposing predictions where qualitative Le Chatelier arguments cannot determine the outcome.
> * **Example - Heating Nitrogen Dioxide in a Sealed Container:**
>   $$2NO_2\\text{(g)} \\rightleftharpoons N_2O_4\\text{(g)} \\quad \\Delta H = -57.2\\text{ kJ mol}^{-1}$$
>   * $NO_2$ is a brown gas; $N_2O_4$ is a colourless gas.
>   * When a sealed tube of this mixture is placed in hot water, both temperature and pressure of the gas rise.
>   * **Temperature argument:** Exothermic forward reaction $\\implies$ heating shifts equilibrium **left** to produce more brown $NO_2$.
>   * **Pressure argument:** Fewer moles on right (2 on left, 1 on right) $\\implies$ higher pressure shifts equilibrium **right** to produce more colourless $N_2O_4$.
>   * **The Outcome:** The mixture turns **darker brown**. This proves that the **temperature effect is greater** than the pressure effect under these conditions. We cannot predict this without measuring the equilibrium constant ($K$).

> [!EXAMPLE]
> #### 📝 Worked Example 8: Solubility Thermicity
> **Question:** Carbon dioxide gas dissolves reversibly in water to form carbonic acid:
> $$CO_2\\text{(g)} + H_2O\\text{(l)} \\rightleftharpoons H_2CO_3\\text{(aq)}$$
> Carbon dioxide is less soluble in hot water than in cold water. Determine whether the forward reaction is exothermic or endothermic, justifying your answer.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Analyze the solubility change with temperature:**
> >    * Saturated $CO_2$ is less soluble in hot water, meaning heating shifts the equilibrium position to the **left** (releasing $CO_2$ gas).
> > 
> > 2. **Apply Le Chatelier's Principle:**
> >    * Heating shifts the equilibrium in the endothermic direction.
> >    * Since heating shifts this equilibrium to the left, the **backward reaction must be endothermic**.
> > 
> > 3. **Conclude:**
> >    * Because the backward reaction is endothermic, the forward reaction must be **exothermic** ($\\\\Delta H$ is negative).
`
    },
    {
        id: '9b4-industrial-equilibria',
        title: "Reversible Reactions in Industry (Haber & Contact Processes)",
        type: 'text',
        content: `
> [!NOTE]
> ### 🏭 Kinetics vs. Thermodynamics: Compromise Conditions
> In the chemical industry, chemists must balance maximum yield (thermodynamics) with high speed (kinetics) to make processes profitable:
> 
> \${svgToken(\`<svg viewBox="0 0 650 250" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGradInd" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e"/>
      <stop offset="100%" stop-color="#0b1b35"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bgGradInd)" rx="8" stroke="#1e293b" stroke-width="1.5"/>
  
  <!-- Left Panel: Haber Process Yield vs. Pressure -->
  <g transform="translate(10, 30)">
    <rect width="300" height="205" rx="6" fill="#334155" fill-opacity="0.1" stroke="#1e293b" stroke-width="1"/>
    <text x="150" y="20" text-anchor="middle" fill="#f8fafc" font-size="11" font-weight="bold">Haber Process: % NH₃ Yield vs. Pressure</text>
    <line x1="40" y1="170" x2="280" y2="170" stroke="#f8fafc" stroke-width="1.2"/>
    <line x1="40" y1="170" x2="40" y2="35" stroke="#f8fafc" stroke-width="1.2"/>
    <text x="160" y="190" text-anchor="middle" fill="#cbd5e1" font-size="8.5">Pressure / atm</text>
    <text x="15" y="105" text-anchor="middle" fill="#cbd5e1" font-size="8.5" transform="rotate(-90 15 105)">% NH₃ Yield</text>
    
    <!-- Yield Curves -->
    <path d="M 40 170 Q 140 100 280 80" fill="none" stroke="#34d399" stroke-width="2"/> <!-- 350°C -->
    <text x="210" y="90" fill="#34d399" font-size="8">350°C</text>
    
    <path d="M 40 170 Q 140 120 280 110" fill="none" stroke="#f59e0b" stroke-width="2"/> <!-- 450°C -->
    <text x="210" y="125" fill="#f59e0b" font-size="8">450°C (Compromise)</text>
    
    <path d="M 40 170 Q 140 145 280 135" fill="none" stroke="#ef4444" stroke-width="2"/> <!-- 550°C -->
    <text x="210" y="148" fill="#ef4444" font-size="8">550°C</text>
    
    <!-- Compromise point marker -->
    <circle cx="210" cy="118" r="4" fill="#ffffff" stroke="#f59e0b" stroke-width="1.5"/>
    <line x1="210" y1="170" x2="210" y2="118" stroke="#f8fafc" stroke-width="1" stroke-dasharray="2 2"/>
    <text x="210" y="182" text-anchor="middle" fill="#f8fafc" font-size="8">250 atm</text>
  </g>
  
  <!-- Right Panel: Contact Process Yield vs. Temp -->
  <g transform="translate(340, 30)">
    <rect width="300" height="205" rx="6" fill="#334155" fill-opacity="0.1" stroke="#1e293b" stroke-width="1"/>
    <text x="150" y="20" text-anchor="middle" fill="#f8fafc" font-size="11" font-weight="bold">Contact Process: % SO₃ Yield vs. Temp</text>
    <line x1="40" y1="170" x2="280" y2="170" stroke="#f8fafc" stroke-width="1.2"/>
    <line x1="40" y1="170" x2="40" y2="35" stroke="#f8fafc" stroke-width="1.2"/>
    <text x="160" y="190" text-anchor="middle" fill="#cbd5e1" font-size="8.5">Temperature / °C</text>
    <text x="15" y="105" text-anchor="middle" fill="#cbd5e1" font-size="8.5" transform="rotate(-90 15 105)">% SO₃ Yield</text>
    
    <!-- Curve -->
    <path d="M 40 50 Q 140 50 180 80 T 280 160" fill="none" stroke="#38bdf8" stroke-width="2"/>
    <line x1="180" y1="170" x2="180" y2="80" stroke="#f8fafc" stroke-width="1" stroke-dasharray="2 2"/>
    <text x="180" y="182" text-anchor="middle" fill="#f8fafc" font-size="8">450°C</text>
    
    <!-- Label -->
    <text x="200" y="70" fill="#38bdf8" font-size="8.5" font-weight="bold">97% yield at 1-2 atm</text>
  </g>
</svg>\`)}

> [!IMPORTANT]
> ### 🌾 The Haber Process
> Ammonia is manufactured by direct synthesis:
> $$N_2\\text{(g)} + 3H_2\\text{(g)} \\rightleftharpoons 2NH_3\\text{(g)} \\quad \\Delta H = -92\\text{ kJ mol}^{-1}$$
> * **Thermodynamic Ideal:** Low temperature (forward is exothermic) and high pressure (4 moles left, 2 moles right).
> * **Kinetics Obstacle:** The nitrogen-nitrogen triple bond ($N \\\\equiv N$) has a very high bond enthalpy ($945\\text{ kJ mol}^{-1}$), requiring high activation energy. At low temperatures, the reaction is extremely slow, and the iron catalyst is inactive.
> * **Compromise Conditions:**
>   * **Temperature:** $450\\text{ }^{\\circ}\\text{C}$ (high enough to yield a reasonable rate and activate the catalyst, but low enough to avoid shifting equilibrium too far left).
>   * **Pressure:** $250\\text{ atm}$ (high enough to favour a $15\\%$ yield, but low enough to avoid high pipe/compressor building costs).
>   * **Catalyst:** Iron ($Fe$).

> [!IMPORTANT]
> ### 🌋 The Contact Process
> Sulfur trioxide (used to make sulfuric acid) is manufactured by:
> $$2SO_2\\text{(g)} + O_2\\text{(g)} \\rightleftharpoons 2SO_3\\text{(g)} \\quad \\Delta H = -96\\text{ kJ mol}^{-1}$$
> * **Compromise Conditions:**
>   * **Temperature:** $450\\text{ }^{\\circ}\\text{C}$ (ensures catalyst is active and reaction rate is high).
>   * **Pressure:** $1 - 2\\text{ atm}$ (since the yield is already extremely high, around $97\\%$ at $1\\text{ atm}$, there is no economic benefit to build expensive high-pressure systems).
>   * **Catalyst:** Vanadium(V) oxide ($V_2O_5$).
> * **Catalytic Mechanism (Redox steps):**
>   Vanadium changes its oxidation state during the reaction, acting as an intermediate:
>   $$\\text{Step 1: } SO_2\\text{(g)} + V_2O_5\\text{(s)} \\\\rightarrow SO_3\\text{(g)} + V_2O_4\\text{(s)}$$
>   (Vanadium is reduced from $+5$ in $V_2O_5$ to $+4$ in $V_2O_4$).
>   $$\\text{Step 2: } V_2O_4\\text{(s)} + \\frac{1}{2}O_2\\text{(g)} \\\\rightarrow V_2O_5\\text{(s)}$$
>   (Vanadium is oxidised back to $+5$, regenerating the catalyst).

> [!EXAMPLE]
> #### 📝 Worked Example 9: Contact Process Pressure Reason
> **Question:** In the Contact process, the reaction has 3 moles of gas on the left and 2 moles of gas on the right. Explain why high pressures (e.g. 200 atm) are not used, even though Le Chatelier's Principle predicts they would increase the yield.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Evaluate the yield at normal atmospheric pressure:**
> >    * In the Contact process, at the compromise temperature of $450\\text{ }^{\\circ}\\text{C}$ and $1 - 2\\text{ atm}$ pressure, the equilibrium yield of $SO_3$ is already extremely high (around $97\\% - 98\\%$).
> > 
> > 2. **Analyze the economic and safety costs:**
> >    * Compressing gases to high pressures requires massive energy and expensive thick-walled pipes and compressors.
> > 
> > 3. **Conclude:**
> >    * The tiny increase in yield from $97\\%$ to $99\\%$ does not justify the massive capital and running costs of high-pressure equipment.
`
    }
];
export const lessonParts = parts;

