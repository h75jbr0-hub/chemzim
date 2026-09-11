export const lessonQuiz = [
  // ==========================================
  // LEVEL 1: FOUNDATION (EASY - 2 Questions)
  // ==========================================
  {
    id: "EDEXCEL-AL-U4-L1-EASY-20260708-01",
    question: "A chemical reaction has the rate equation: Rate = k[X][Y]². Which of the following statements is correct?",
    options: [
      { text: "The reaction is first order with respect to Y.", isCorrect: false },
      { text: "The reaction is second order overall.", isCorrect: false },
      { text: "Doubling the concentration of Y quadruples the rate of reaction.", isCorrect: true },
      { text: "Tripling the concentration of X increases the rate by a factor of nine.", isCorrect: false }
    ],
    explanation: "According to the rate equation, the reaction is second order with respect to Y. Therefore, doubling the concentration of Y increases the rate by a factor of 2² = 4 (quadrupled)."
  },
  {
    id: "EDEXCEL-AL-U4-L1-EASY-20260708-02",
    question: "Deduce the units of the rate constant k for a reaction that is third-order overall.",
    options: [
      { text: "s⁻¹", isCorrect: false },
      { text: "dm³ mol⁻¹ s⁻¹", isCorrect: false },
      { text: "dm⁶ mol⁻² s⁻¹", isCorrect: true },
      { text: "mol² dm⁻⁶ s⁻¹", isCorrect: false }
    ],
    explanation: "For a third-order reaction, Rate = k[Reactant]³. \nRearranging gives k = Rate / [Reactant]³. \nSubstituting units: (mol dm⁻³ s⁻¹) / (mol dm⁻³)³ = s⁻¹ / (mol² dm⁻⁶) = dm⁶ mol⁻² s⁻¹"
  },

  // ==========================================
  // LEVEL 2: APPLICATION (MEDIUM - 3 Questions)
  // ==========================================
  {
    id: "EDEXCEL-AL-U4-L1-MEDIUM-20260708-03",
    question: "For the reaction A + B → C, doubling the concentration of A doubles the rate. Doubling the concentration of B has no effect on the rate. What is the rate equation for this reaction?",
    options: [
      { text: "Rate = k[A][B]", isCorrect: false },
      { text: "Rate = k[A]", isCorrect: true },
      { text: "Rate = k[A]²", isCorrect: false },
      { text: "Rate = k[B]", isCorrect: false }
    ],
    explanation: "Since doubling [A] doubles the rate, the order with respect to A is 1. Since changing [B] has no effect on the rate, the order with respect to B is 0. The rate equation is therefore Rate = k[A]¹[B]⁰, which simplifies to Rate = k[A]"
  },
  {
    id: "EDEXCEL-AL-U4-L1-MEDIUM-20260708-04",
    question: "The rate equation for the reaction between hydrogen and nitrogen monoxide is: Rate = k[NO]²[H₂]. Under certain conditions, [NO] = 0.15 mol dm⁻³ and [H₂] = 0.10 mol dm⁻³. If the rate of reaction is 1.8 × 10⁻⁴ mol dm⁻³ s⁻¹, calculate the value of the rate constant k",
    options: [
      { text: "0.080 dm⁶ mol⁻² s⁻¹", isCorrect: true },
      { text: "0.120 dm⁶ mol⁻² s⁻¹", isCorrect: false },
      { text: "0.012 dm⁶ mol⁻² s⁻¹", isCorrect: false },
      { text: "12.5 dm⁶ mol⁻² s⁻¹", isCorrect: false }
    ],
    explanation: "Rearranging the rate equation: k = Rate / ([NO]²[H₂]). \nSubstituting the given values: k = (1.8 × 10⁻⁴) / ((0.15)² × 0.10) \nk = (1.8 × 10⁻⁴) / (0.0225 × 0.10) = (1.8 × 10⁻⁴) / (2.25 × 10⁻³) = 0.080 dm⁶ mol⁻² s⁻¹"
  },
  {
    id: "EDEXCEL-AL-U4-L1-MEDIUM-20260708-05",
    question: "A multi-step reaction has the following proposed mechanism:\nStep 1 (slow): A + B → AB\nStep 2 (fast): AB + B → AB₂\nWhat is the expected rate equation based on this mechanism?",
    options: [
      { text: "Rate = k[A][B]", isCorrect: true },
      { text: "Rate = k[A][B]²", isCorrect: false },
      { text: "Rate = k[AB][B]", isCorrect: false },
      { text: "Rate = k[A]", isCorrect: false }
    ],
    explanation: "The rate-determining step is the slow step (Step 1). The reactants in Step 1 are A and B, each with a coefficient of 1. Therefore, the rate equation is directly deduced from this step: Rate = k[A][B]"
  },

  // ==========================================
  // LEVEL 3: ANALYSIS (HARD - 1 Question)
  // ==========================================
  {
    id: "EDEXCEL-AL-U4-L1-HARD-20260708-06",
    question: "An Arrhenius plot of ln k against 1/T for a reaction has a gradient of -9620 K. Calculate the activation energy (Ea) of the reaction in kJ mol⁻¹. (R = 8.31 J K⁻¹ mol⁻¹)",
    options: [
      { text: "79.9 kJ mol⁻¹", isCorrect: true },
      { text: "1.16 kJ mol⁻¹", isCorrect: false },
      { text: "79900 kJ mol⁻¹", isCorrect: false },
      { text: "9.62 kJ mol⁻¹", isCorrect: false }
    ],
    explanation: "The gradient of an Arrhenius plot is equal to -Ea/R. \nTherefore, -9620 = -Ea / 8.31 \nEa = 9620 × 8.31 = 79942.2 J mol⁻¹ \nConverting to kJ mol⁻¹: 79942.2 / 1000 = 79.9 kJ mol⁻¹ (to 3 significant figures)"
  },

  // ==========================================
  // LEVEL 3: ANALYSIS (HARD - 1 Question)
  // ==========================================
  {
    id: "EDEXCEL-AL-U4-L1-HARD-20260708-07",
    question: "The alkaline hydrolysis of 2-chloro-2-methylpropane is found to be first order with respect to the halogenoalkane and zero order with respect to hydroxide ions. Which statement is correct regarding this reaction?",
    options: [
      { text: "It proceeds via an SN2 mechanism involving a transition state.", isCorrect: false },
      { text: "The rate-determining step is unimolecular and involves the slow ionization of the halogenoalkane.", isCorrect: true },
      { text: "Doubling the concentration of hydroxide ions doubles the reaction rate.", isCorrect: false },
      { text: "The reaction involves a transition state in square brackets containing both reactants.", isCorrect: false }
    ],
    explanation: "Since the reaction is first order with respect to (CH₃)₃CCl and zero order with respect to OH⁻, it is an SN1 (unimolecular) substitution reaction. The slow, rate-determining step is the unimolecular ionization of the tertiary halogenoalkane to form a carbocation intermediate."
  },
  {
    id: "EDEXCEL-AL-U4-L1-HARD-20260708-08",
    question: "The acid-catalyzed iodination of propanone has the rate equation: Rate = k[propanone][H⁺]. If deuterated propanone (CD₃COCD₃) is used instead of CH₃COCH₃, the rate of iodination is found to be slower. What does this kinetic isotope effect provide evidence for?",
    options: [
      { text: "Breaking the C-H (or C-D) bond occurs in the rate-determining step.", isCorrect: true },
      { text: "Iodine is directly involved in the rate-determining step.", isCorrect: false },
      { text: "The protonation of the carbonyl oxygen is the slow step of the reaction.", isCorrect: false },
      { text: "The reaction proceeds via an SN2 mechanism with a transition state.", isCorrect: false }
    ],
    explanation: "Deuterium (D) forms a stronger bond with carbon than hydrogen (H). Since the rate slows down when using deuterated propanone, this shows that C-H (or C-D) bond breaking occurs during the rate-determining step (which is the slow rearrangement of the protonated intermediate to form the enol)."
  },
  {
    id: "EDEXCEL-AL-U4-L1-HARD-20260708-09",
    question: "A student plots 1/t (representing rate) against the concentration of reactant [A]. The plot yields a straight line passing through the origin. What is the order of the reaction with respect to A, and what would a plot of 1/t against [A]² look like?",
    options: [
      { text: "First order; the plot of 1/t against [A]² would be a curve bending downwards.", isCorrect: true },
      { text: "Second order; the plot of 1/t against [A]² would be a straight line through the origin.", isCorrect: false },
      { text: "Zero order; the plot of 1/t against [A]² would be a horizontal line.", isCorrect: false },
      { text: "First order; the plot of 1/t against [A]² would be a horizontal line.", isCorrect: false }
    ],
    explanation: "A straight line through the origin for 1/t vs [A] indicates a first-order reaction. Since rate is proportional to [A]¹, a plot of rate against [A]² would be curved (bending downwards towards the x-axis) because the rate is not proportional to concentration squared."
  },
  // ==========================================
  // ADDED FOR 20 QUESTIONS COMPREHENSIVE COVERAGE
  // ==========================================
  {
    id: "EDEXCEL-AL-U4-L1-MEDIUM-20260721-10",
    question: "In an iodine clock reaction, the time (t) taken for the blue-black starch-iodine complex to appear is measured. If the concentration of peroxodisulfate ions (S₂O₈²⁻) is doubled, the time (t) taken is halved. What is the order of reaction with respect to S₂O₈²⁻, and what is the relationship between rate and time?",
    options: [
      { text: "First order; Rate is directly proportional to t", isCorrect: false },
      { text: "First order; Rate is proportional to 1/t", isCorrect: true },
      { text: "Second order; Rate is proportional to 1/t", isCorrect: false },
      { text: "Zero order; Rate is independent of t", isCorrect: false }
    ],
    explanation: "• In clock reactions, the initial rate of reaction is inversely proportional to the time taken for a fixed amount of product to form (Rate ∝ 1/t).\n• Doubling the concentration of peroxodisulfate ions halves the time (t), which means the rate (1/t) is doubled.\n• Since doubling the concentration doubles the rate, the order of reaction with respect to peroxodisulfate is first order."
  },
  {
    id: "EDEXCEL-AL-U4-L1-MEDIUM-20260721-11",
    question: "A first-order reaction has a rate constant k = 4.62 × 10⁻³ s⁻¹. Calculate the half-life (t₁/₂) of this reaction.",
    options: [
      { text: "150 s", isCorrect: true },
      { text: "300 s", isCorrect: false },
      { text: "216 s", isCorrect: false },
      { text: "462 s", isCorrect: false }
    ],
    explanation: "• For a first-order reaction, the relationship between the half-life and the rate constant is: t₁/₂ = ln(2) / k.\n• Substituting the given rate constant: t₁/₂ = 0.693 / (4.62 × 10⁻³ s⁻¹) = 150 s.\n• The half-life of a first-order reaction is constant and completely independent of the initial reactant concentration."
  },
  {
    id: "EDEXCEL-AL-U4-L1-HARD-20260721-12",
    question: "The rate constant of a reaction increases by a factor of 4.0 when the temperature is increased from 300 K to 320 K. Calculate the activation energy (Ea) in kJ mol⁻¹. (R = 8.31 J K⁻¹ mol⁻¹)",
    options: [
      { text: "55.3 kJ mol⁻¹", isCorrect: true },
      { text: "57.6 kJ mol⁻¹", isCorrect: false },
      { text: "115 kJ mol⁻¹", isCorrect: false },
      { text: "28.8 kJ mol⁻¹", isCorrect: false }
    ],
    explanation: "• The two-temperature Arrhenius equation is: ln(k₂/k₁) = -(Ea / R) × (1/T₂ - 1/T₁).\n• Substituting the values: ln(4.0) = -(Ea / 8.31) × (1/320 - 1/300).\n• ln(4.0) = 1.3863, and (1/320 - 1/300) = -2.0833 × 10⁻⁴.\n• 1.3863 = -(Ea / 8.31) × (-2.0833 × 10⁻⁴) which simplifies to 1.3863 = Ea × 2.507 × 10⁻⁵.\n• Ea = 1.3863 / (2.507 × 10⁻⁵) = 55300 J mol⁻¹ = 55.3 kJ mol⁻¹."
  },
  {
    id: "EDEXCEL-AL-U4-L1-MEDIUM-20260721-13",
    question: "Why is the reaction between peroxodisulfate ions (S₂O₈²⁻) and iodide ions (I⁻) extremely slow in the absence of a catalyst, and how does Fe²⁺ catalyze it?",
    options: [
      { text: "The reactants are oppositely charged, leading to electrostatic repulsion; Fe²⁺ acts as a neutralizer.", isCorrect: false },
      { text: "Both reactants are negatively charged, leading to electrostatic repulsion; Fe²⁺ provides an alternative pathway by reacting with S₂O₈²⁻ first.", isCorrect: true },
      { text: "The reaction is highly endothermic; Fe²⁺ lowers the enthalpy change.", isCorrect: false },
      { text: "Iodine molecules are too large to collide effectively; Fe²⁺ reduces their size.", isCorrect: false }
    ],
    explanation: "• Both peroxodisulfate and iodide ions are negatively charged, so they repel each other, resulting in a very high activation energy barrier.\n• Fe²⁺ ions act as a homogeneous catalyst by providing an alternative pathway where oppositely charged species attract.\n• In the first step, Fe²⁺ is oxidized to Fe³⁺ by S₂O₈²⁻: S₂O₈²⁻ + 2Fe²⁺ → 2SO₄²⁻ + 2Fe³⁺.\n• In the second step, Fe³⁺ is reduced back to Fe²⁺ by I⁻: 2Fe³⁺ + 2I⁻ → 2Fe²⁺ + I₂."
  },
  {
    id: "EDEXCEL-AL-U4-L1-HARD-20260721-14",
    question: "A halogenoalkane undergoes nucleophilic substitution. When the concentration of the halogenoalkane is doubled, the rate doubles. When the concentration of the nucleophile is doubled, the rate remains unchanged. What is the mechanism and the stereochemical outcome if a single enantiomer of a chiral reactant is used?",
    options: [
      { text: "SN2; inversion of configuration (100% optical activity retained)", isCorrect: false },
      { text: "SN1; complete racemisation (formation of an optically inactive mixture)", isCorrect: false },
      { text: "SN1; partial racemisation with major inversion (some loss of optical activity)", isCorrect: true },
      { text: "SN2; complete racemisation (no optical activity)", isCorrect: false }
    ],
    explanation: "• The rate equation is Rate = k[halogenoalkane], indicating an SN1 (unimolecular) mechanism.\n• In SN1, the slow step forms a planar carbocation intermediate, which can be attacked from either side with equal probability, leading to racemisation.\n• In practice, the leaving halide group temporarily shields one side of the carbocation (forming an ion pair).\n• This shielding results in slightly more attack from the opposite side, leading to partial racemisation with a majority of inversion."
  },
  {
    id: "EDEXCEL-AL-U4-L1-HARD-20260721-15",
    question: "For the reaction 2NO(g) + O₂(g) → 2NO₂(g), the rate equation is Rate = k[NO]²[O₂]. A proposed mechanism is:\nStep 1 (fast): NO + NO ⇌ N₂O₂\nStep 2 (slow): N₂O₂ + O₂ → 2NO₂\nWhy does this mechanism yield the observed rate equation?",
    options: [
      { text: "Step 2 is the rate-determining step, so Rate = k[N₂O₂][O₂]; substituting [N₂O₂] = K[NO]² from the Step 1 equilibrium gives the rate equation.", isCorrect: true },
      { text: "Step 1 is the rate-determining step, and the rate is simply proportional to the collision frequency of two NO molecules.", isCorrect: false },
      { text: "The reaction is termolecular and occurs in a single step where three molecules collide simultaneously.", isCorrect: false },
      { text: "Step 2 is fast, meaning the concentration of N₂O₂ does not affect the rate equation.", isCorrect: false }
    ],
    explanation: "• The slow step (Step 2) is the rate-determining step, so the rate is proportional to the concentration of its reactants: Rate = k₂[N₂O₂][O₂].\n• Because N₂O₂ is an intermediate, its concentration must be expressed in terms of the initial reactants.\n• From the fast equilibrium in Step 1: K = [N₂O₂] / [NO]², which rearranges to [N₂O₂] = K[NO]².\n• Substituting this expression into the rate equation gives: Rate = k₂K[NO]²[O₂], which matches the observed rate equation."
  },
  {
    id: "EDEXCEL-AL-U4-L1-MEDIUM-20260721-16",
    question: "The following initial rate data was obtained for the reaction A + B → C:\nRun 1: [A] = 0.10 mol dm⁻³, [B] = 0.10 mol dm⁻³, Rate = 2.0 × 10⁻⁴ mol dm⁻³ s⁻¹\nRun 2: [A] = 0.20 mol dm⁻³, [B] = 0.10 mol dm⁻³, Rate = 8.0 × 10⁻⁴ mol dm⁻³ s⁻¹\nRun 3: [A] = 0.20 mol dm⁻³, [B] = 0.20 mol dm⁻³, Rate = 1.6 × 10⁻³ mol dm⁻³ s⁻¹\nDeduce the overall order of the reaction.",
    options: [
      { text: "First order", isCorrect: false },
      { text: "Second order", isCorrect: false },
      { text: "Third order", isCorrect: true },
      { text: "Fourth order", isCorrect: false }
    ],
    explanation: "• Comparing Run 1 and Run 2: [B] is constant, [A] doubles, and the rate increases by a factor of 4 (8.0 × 10⁻⁴ / 2.0 × 10⁻⁴ = 4). Thus, the order with respect to A is 2.\n• Comparing Run 2 and Run 3: [A] is constant, [B] doubles, and the rate increases by a factor of 2 (1.6 × 10⁻³ / 8.0 × 10⁻⁴ = 2). Thus, the order with respect to B is 1.\n• The overall order is the sum of individual orders: 2 + 1 = 3 (third order)."
  },
  {
    id: "EDEXCEL-AL-U4-L1-MEDIUM-20260721-17",
    question: "Which of the following reactions can be most appropriately monitored by measuring the change in electrical conductivity?",
    options: [
      { text: "CH₃COOCH₂CH₃(l) + H₂O(l) → CH₃COOH(l) + CH₃CH₂OH(l)", isCorrect: false },
      { text: "CaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g)", isCorrect: false },
      { text: "(CH₃)₃CBr(l) + OH⁻(aq) → (CH₃)₃COH(l) + Br⁻(aq)", isCorrect: false },
      { text: "CH₃CH₂Br(l) + H₂O(l) → CH₃CH₂OH(l) + H⁺(aq) + Br⁻(aq)", isCorrect: true }
    ],
    explanation: "• Electrical conductivity depends on the concentration of mobile ions in the solution.\n• In the correct reaction, neutral reactants (CH₃CH₂Br and H₂O) react to produce ions (H⁺ and Br⁻).\n• The ion concentration increases significantly over time, making conductivity an excellent method.\n• The other reactions either contain no ions, produce neutral substances, or do not change the net concentration of ions."
  },
  {
    id: "EDEXCEL-AL-U4-L1-MEDIUM-20260721-18",
    question: "In a catalytic converter, exhaust gases pass over a ceramic honeycomb coated with platinum, palladium, and rhodium. Which statement correctly describes the mechanism of this catalysis?",
    options: [
      { text: "Reactants dissolve in the metal layer, react, and precipitate out.", isCorrect: false },
      { text: "Reactants adsorb onto the active sites of the metal surface, which weakens their bonds and lowers the activation energy.", isCorrect: true },
      { text: "The catalyst acts as a homogeneous reactant by changing its oxidation state.", isCorrect: false },
      { text: "The honeycomb structure increases the temperature of the exhaust gases to speed up the reaction.", isCorrect: false }
    ],
    explanation: "• Catalytic converters utilize heterogeneous catalysis where the catalyst is in a different phase (solid) than the reactants (gases).\n• Gaseous reactant molecules adsorb (bind) onto active sites on the solid metal surface.\n• Adsorption weakens the covalent bonds within the reactant molecules and brings them into close proximity.\n• After the reaction, product molecules desorb from the surface, freeing active sites for more reactants."
  },
  {
    id: "EDEXCEL-AL-U4-L1-HARD-20260721-19",
    question: "For a zero-order reaction with respect to reactant A, what are the shapes of the concentration-time graph and the rate-concentration graph respectively?",
    options: [
      { text: "A downward curve bending upwards; a straight line through the origin", isCorrect: false },
      { text: "A downward straight line; a horizontal straight line above the x-axis", isCorrect: true },
      { text: "A horizontal straight line; a downward straight line", isCorrect: false },
      { text: "A downward curve; a horizontal straight line along the x-axis", isCorrect: false }
    ],
    explanation: "• For a zero-order reaction, the rate is constant and independent of the concentration of reactant A (Rate = k).\n• Therefore, the rate-concentration graph is a horizontal line above the x-axis at Rate = k.\n• Since the rate of decrease in concentration is constant (d[A]/dt = -k), the concentration of reactant A decreases linearly over time, resulting in a downward straight line."
  },
  {
    id: "EDEXCEL-AL-U4-L1-HARD-20260721-20",
    question: "An exothermic reaction has an activation energy (Ea) of +50 kJ mol⁻¹ and an enthalpy change of reaction (ΔH) of -90 kJ mol⁻¹. Deduce the activation energy (Ea) for the reverse reaction.",
    options: [
      { text: "+40 kJ mol⁻¹", isCorrect: false },
      { text: "-40 kJ mol⁻¹", isCorrect: false },
      { text: "+140 kJ mol⁻¹", isCorrect: true },
      { text: "-140 kJ mol⁻¹", isCorrect: false }
    ],
    explanation: "• The energy profile diagram shows the transition state (peak) is 50 kJ mol⁻¹ above the reactants.\n• Since the reaction is exothermic, the products are 90 kJ mol⁻¹ lower in energy than the reactants.\n• Therefore, the energy barrier from the products back up to the transition state is the sum of the magnitude of the enthalpy change and the forward activation energy.\n• Ea (reverse) = Ea (forward) + |ΔH| = 50 + 90 = 140 kJ mol⁻¹."
  },
  {
    id: "EDEXCEL-AL-U4-L1-MEDIUM-20260723-21",
    question: "Which statement correctly describes the difference between a transition state and a reaction intermediate?",
    options: [
      { text: "A transition state has a finite lifetime and appears as an energy minimum, while an intermediate is an unstable arrangement at an energy maximum.", isCorrect: false },
      { text: "A transition state is an unstable arrangement at an energy maximum with a negligible lifetime, while an intermediate is a definite species with a finite lifetime appearing as an energy minimum.", isCorrect: true },
      { text: "Both transition states and intermediates are stable species that can be isolated and purified.", isCorrect: false },
      { text: "Transition states only exist in SN2 reactions, while intermediates only exist in SN1 reactions.", isCorrect: false }
    ],
    explanation: "Transition State: An unstable arrangement of atoms at the energy maximum (peak) of a reaction step. It has a negligible lifetime (~10⁻¹⁵ seconds, the time of a molecular collision) and cannot be isolated. \nReaction Intermediate: A definite chemical species formed in one step and consumed in a subsequent step. It has a finite lifetime (e.g., carbocations, ~10⁻⁶ seconds) and appears as an energy minimum (well) on the reaction profile diagram."
  },
  {
    id: "EDEXCEL-AL-U4-L1-MEDIUM-20260723-22",
    question: "Which of the following reactions is an example of autocatalysis?",
    options: [
      { text: "2H₂O₂(aq) → 2H₂O(l) + O₂(g) (catalyzed by MnO₂(s))", isCorrect: false },
      { text: "5(COOH)₂(aq) + 2MnO₄⁻(aq) + 6H⁺(aq) → 10CO₂(g) + 2Mn²⁺(aq) + 8H₂O(l)", isCorrect: true },
      { text: "N₂(g) + 3H₂(g) ⇌ 2NH₃(g) (catalyzed by Fe(s))", isCorrect: false },
      { text: "CH₃COOCH₂CH₃(l) + H₂O(l) → CH₃COOH(aq) + CH₃CH₂OH(l) (catalyzed by H⁺(aq))", isCorrect: false }
    ],
    explanation: "Autocatalysis is a process where one of the products of a reaction acts as a catalyst for the reaction itself. \nIn the reaction between ethanedioic acid and manganate(VII) ions, Mn²⁺ ions (a product) act as a catalyst. \nInitially, the reaction is slow (since no Mn²⁺ is present), but it speeds up as Mn²⁺ is formed, demonstrating autocatalysis."
  },
  {
    id: "EDEXCEL-AL-U4-L1-HARD-20260723-23",
    question: "The rate curve for an autocatalytic reaction is sigmoidal (S-shaped). Which of the following best explains why the rate increases after the initial slow period?",
    options: [
      { text: "The reaction is exothermic and releases heat, increasing the rate.", isCorrect: false },
      { text: "The concentration of the catalyst product increases as the reaction proceeds.", isCorrect: true },
      { text: "The reactants become more concentrated as the reaction proceeds.", isCorrect: false },
      { text: "The activation energy decreases over time.", isCorrect: false }
    ],
    explanation: "In autocatalysis, one of the products acts as a catalyst for the reaction. \nInitially, there is very little of this catalytic product, so the reaction proceeds slowly. \nAs the reaction proceeds, the concentration of the catalytic product increases, which increases the rate of reaction. \nThis is why the curve starts with a slow rate, then speeds up (forming the S-shape) before slowing down again as reactants are consumed."
  },
  {
    id: "EDEXCEL-AL-U4-L1-MEDIUM-20260723-24",
    question: "Which experimental technique is most suitable for following the rate of the reaction between propanone and iodine in acidic solution?",
    options: [
      { text: "Measuring gas volume evolved.", isCorrect: false },
      { text: "Measuring mass loss.", isCorrect: false },
      { text: "Colorimetry (monitoring the disappearance of I₂ color).", isCorrect: true },
      { text: "Measuring electrical conductivity.", isCorrect: false }
    ],
    explanation: "The reaction between propanone and iodine in acidic solution consumes I₂, which is brown/yellow in color. \nAll other reactants and products are colorless. \nColorimetry measures the absorbance of light by a colored substance, so we can monitor the decrease in absorbance as I₂ is consumed. \nThis makes colorimetry the ideal technique for this reaction."
  },
  {
    id: "EDEXCEL-AL-U4-L1-EASY-20260723-25",
    question: "Why is cotton wool placed in the neck of the flask when measuring the rate of a reaction by mass loss (e.g., calcium carbonate + hydrochloric acid)?",
    options: [
      { text: "To absorb the gas produced.", isCorrect: false },
      { text: "To prevent acid spray from escaping while allowing gas to pass through.", isCorrect: true },
      { text: "To keep the flask warm.", isCorrect: false },
      { text: "To act as a catalyst.", isCorrect: false }
    ],
    explanation: "Cotton wool is used to prevent any liquid spray (e.g., from the effervescence of the reaction) from escaping the flask. \nIf spray were allowed to escape, it would cause an apparent greater mass loss, leading to inaccurate results. \nThe cotton wool allows the gas (e.g., CO₂) to pass through, so it doesn't interfere with the mass loss measurement."
  },
  {
    id: "EDEXCEL-AL-U4-L1-HARD-20260723-26",
    question: "What is the purpose of quenching in kinetic experiments where concentrations are measured by titration?",
    options: [
      { text: "To speed up the reaction.", isCorrect: false },
      { text: "To stop or slow down the reaction so that the concentration at a given time can be measured accurately.", isCorrect: true },
      { text: "To make the reaction change color.", isCorrect: false },
      { text: "To increase the concentration of the reactants.", isCorrect: false }
    ],
    explanation: "Quenching is a technique used to stop a reaction at a specific time so that we can measure the concentration of reactants or products without further reaction occurring. \nCommon quenching methods include: immersing the sample in an ice bath (cooling to slow the reaction), adding a substance that reacts with one of the reactants, or diluting the sample. \nThis ensures that the titration measures the concentration exactly at the time the sample was quenched."
  },
  {
    id: "EDEXCEL-AL-U4-L1-HARD-20260723-27",
    question: "For a second-order reaction (e.g., 2A → products), how does the half-life change as the concentration of A decreases, and what is the shape of the concentration-time graph?",
    options: [
      { text: "Half-life is constant; the graph is a curve.", isCorrect: false },
      { text: "Half-life decreases as concentration decreases; the graph is a straight line.", isCorrect: false },
      { text: "Half-life increases as concentration decreases; the graph is a steeper curve than first order.", isCorrect: true },
      { text: "Half-life is constant; the graph is a straight line.", isCorrect: false }
    ],
    explanation: "For a second-order reaction, the half-life is inversely proportional to the initial concentration (t₁/₂ = 1/(k[A]₀)). \nAs the concentration of A decreases, the half-life increases (each subsequent half-life is twice as long as the previous one). \nThe concentration-time graph for a second-order reaction is a curve that falls more steeply initially and then more gradually, compared to a first-order reaction."
  },
  {
    id: "EDEXCEL-AL-U4-L1-MEDIUM-20260723-28",
    question: "What is catalyst poisoning, and which of the following is an example?",
    options: [
      { text: "When a catalyst speeds up the reaction; e.g., Fe in Haber process.", isCorrect: false },
      { text: "When an impurity blocks the active sites of a catalyst, reducing its effectiveness; e.g., sulfur poisoning Fe in Haber process.", isCorrect: true },
      { text: "When a catalyst changes phase during the reaction; e.g., V₂O₅ in Contact process.", isCorrect: false },
      { text: "When a catalyst is used up in the reaction; e.g., MnO₂ in H₂O₂ decomposition.", isCorrect: false }
    ],
    explanation: "Catalyst poisoning occurs when a substance (an impurity) adsorbs strongly onto the active sites of a catalyst, preventing reactant molecules from adsorbing. \nThis reduces the effectiveness of the catalyst. \nAn example is sulfur poisoning the iron catalyst in the Haber process: sulfur atoms bind to the iron surface, blocking active sites and reducing catalytic activity."
  },
  {
    id: "EDEXCEL-AL-U4-L1-MEDIUM-20260723-29",
    question: "What is a promoter in catalysis, and which of the following is an example?",
    options: [
      { text: "A substance that increases the activity of a catalyst; e.g., K₂O/Al₂O₃ in Haber process.", isCorrect: true },
      { text: "A substance that slows down a reaction; e.g., glycerin in hydrogen peroxide decomposition.", isCorrect: false },
      { text: "A substance that changes the phase of a catalyst; e.g., water in a reaction.", isCorrect: false },
      { text: "A substance that replaces a catalyst; e.g., Pt in place of Ni.", isCorrect: false }
    ],
    explanation: "A promoter is a substance that increases the activity or selectivity of a catalyst. \nPromoters do not catalyze the reaction themselves but modify the catalyst to work better. \nAn example is K₂O and Al₂O₃ in the Haber process: they promote the iron catalyst by increasing the number of active sites and preventing sintering of the iron particles."
  },
  {
    id: "EDEXCEL-AL-U4-L1-HARD-20260723-30",
    question: "In the Arrhenius equation (k = A e^(-Ea/RT)), what does the pre-exponential factor (A) represent?",
    options: [
      { text: "The activation energy of the reaction.", isCorrect: false },
      { text: "The fraction of collisions with energy ≥ Ea.", isCorrect: false },
      { text: "The frequency of collisions between reactant molecules with the correct orientation for reaction.", isCorrect: true },
      { text: "The rate constant at infinite temperature.", isCorrect: false }
    ],
    explanation: "The pre-exponential factor (A), also called the frequency factor, has two components:\n1. The frequency of collisions between reactant molecules\n2. The fraction of collisions that have the correct orientation for the reaction to occur\nThe term e^(-Ea/RT) represents the fraction of collisions that have energy ≥ Ea (activation energy)."
  },
  {
    id: "EDEXCEL-AL-U4-L1-MEDIUM-20260726-31",
    question: "In the heterogeneous catalytic hydrogenation of alkenes, metals like tungsten (W) and silver (Ag) are poor catalysts compared to nickel (Ni) or platinum (Pt). Which of the following statements correctly explains this observation?",
    options: [
      { text: "Tungsten adsorbs reactant molecules too weakly, whereas silver adsorbs them too strongly.", isCorrect: false },
      { text: "Tungsten adsorbs reactant molecules too strongly, blocking active sites, whereas silver adsorbs them too weakly to weaken their bonds.", isCorrect: true },
      { text: "Both tungsten and silver poison the catalyst by forming permanent covalent bonds with nickel.", isCorrect: false },
      { text: "Silver has a higher density than tungsten, preventing reactants from diffusing to the surface.", isCorrect: false }
    ],
    explanation: "• For a heterogeneous catalyst to be effective, the adsorption of reactants must be of intermediate strength.\n• If adsorption is too strong (e.g., tungsten), the reactant molecules are bound too tightly and cannot move on the surface or desorb, blocking active sites.\n• If adsorption is too weak (e.g., silver), the reactants are not held on the surface long enough and their internal bonds are not sufficiently weakened to react."
  },
  {
    id: "EDEXCEL-AL-U4-L1-MEDIUM-20260726-32",
    question: "The acid-catalyzed iodination of propanone has the rate equation: Rate = k[propanone][H⁺]. If the concentration of iodine is tripled, what is the effect on the rate of reaction, and what does this indicate about the reaction mechanism?",
    options: [
      { text: "The rate is tripled; iodine is involved in the rate-determining step.", isCorrect: false },
      { text: "The rate remains unchanged; iodine is involved in a fast step after the rate-determining step.", isCorrect: true },
      { text: "The rate is tripled; iodine acts as a catalyst in the reaction.", isCorrect: false },
      { text: "The rate remains unchanged; iodine is not involved in any step of the reaction mechanism.", isCorrect: false }
    ],
    explanation: "• Since iodine does not appear in the rate equation, the order of reaction with respect to iodine is zero.\n• Therefore, changing the concentration of iodine has no effect on the overall rate of the reaction.\n• This indicates that iodine is involved in a fast step of the mechanism that occurs after the slow, rate-determining step."
  },
  {
    id: "EDEXCEL-AL-U4-L1-MEDIUM-20260726-33",
    question: "A student wants to determine the instantaneous rate of a reaction at exactly 60 seconds using a concentration-time graph. What is the correct procedure to achieve this?",
    options: [
      { text: "Divide the initial concentration by 60 seconds.", isCorrect: false },
      { text: "Draw a tangent to the curve at t = 60 seconds and calculate the gradient of this tangent.", isCorrect: true },
      { text: "Divide the concentration at 60 seconds by 60.", isCorrect: false },
      { text: "Find the time when the concentration is halved and calculate ln(2) divided by that time.", isCorrect: false }
    ],
    explanation: "• The instantaneous rate at any specific time is equal to the gradient of the concentration-time curve at that precise point.\n• This is determined by drawing a tangent line to the curve at that time (t = 60 s) and calculating its gradient (change in concentration divided by change in time)."
  },
  {
    id: "EDEXCEL-AL-U4-L1-HARD-20260726-34",
    question: "A first-order reaction has a rate constant k = 1.25 × 10⁻⁴ s⁻¹ at 300 K. The activation energy (Ea) is 85.0 kJ mol⁻¹. Calculate the Arrhenius pre-exponential factor (A) at this temperature. (R = 8.31 J K⁻¹ mol⁻¹)",
    options: [
      { text: "8.02 × 10¹⁰ s⁻¹", isCorrect: true },
      { text: "2.02 × 10⁻¹⁹ s⁻¹", isCorrect: false },
      { text: "8.02 × 10⁷ s⁻¹", isCorrect: false },
      { text: "1.25 × 10⁻⁴ s⁻¹", isCorrect: false }
    ],
    explanation: "• Rearranging the Arrhenius equation $k = A e^{-\\frac{E_a}{RT}}$ gives: $A = k e^{\\frac{E_a}{RT}}$.\n• First, convert $E_a$ to $\\text{J mol}^{-1}$: $E_a = 85.0 \\text{ kJ mol}^{-1} = 85000 \\text{ J mol}^{-1}$.\n• Calculate the exponent term: $\\frac{E_a}{RT} = \\frac{85000}{8.31 \\times 300} = \\frac{85000}{2493} \\approx 34.095$.\n• Calculate the exponential factor: $e^{34.095} \\approx 6.417 \\times 10^{14}$.\n• Calculate $A$: $A = (1.25 \\times 10^{-4} \\text{ s}^{-1}) \\times (6.417 \\times 10^{14}) = 8.02 \\times 10^{10} \\text{ s}^{-1}$ (matching the units of $k$ for a first-order reaction)."
  },
  {
    id: "EDEXCEL-AL-U4-L1-MEDIUM-20260828-35",
    question: "Bromine oxidizes methanoic acid to carbon dioxide according to the equation:\nHCOOH(aq) + Br₂(aq) → 2H⁺(aq) + 2Br⁻(aq) + CO₂(g)\nWhich of the following methods would NOT be suitable for measuring the progress of this reaction?",
    options: [
      { text: "Colorimetry (monitoring the decolourisation of the orange-brown Br₂)", isCorrect: false },
      { text: "Measuring electrical conductivity", isCorrect: false },
      { text: "Quenching aliquots and titrating with acid", isCorrect: true },
      { text: "Measuring the volume of gas evolved using a gas syringe", isCorrect: false }
    ],
    explanation: "• Colorimetry is suitable: Br₂ is orange-brown and its disappearance can be tracked directly.\n• Electrical conductivity is suitable: the number and charge of ions changes (Br₂ is neutral; products H⁺ and Br⁻ are ions), so conductivity increases.\n• Measuring gas volume is suitable: CO₂ is a gaseous product that can be collected in a gas syringe.\n• Quenching and titrating with acid is NOT suitable: H⁺ ions are a product of the reaction, so adding acid to quench would interfere with any acid titration, making the measurement meaningless."
  },
  {
    id: "EDEXCEL-AL-U4-L1-MEDIUM-20260828-36",
    question: "Which of the following reactions could have its progress continuously monitored by measuring the change in pressure?",
    options: [
      { text: "H₂(g) + Br₂(g) → 2HBr(g)", isCorrect: false },
      { text: "2NO(g) + O₂(g) → 2NO₂(g)", isCorrect: true },
      { text: "CH₃Br(aq) + NaOH(aq) → CH₃OH(aq) + NaBr(aq)", isCorrect: false },
      { text: "H₂O₂(aq) + 2H⁺(aq) + 2I⁻(aq) → 2H₂O(l) + I₂(aq)", isCorrect: false }
    ],
    explanation: "• Pressure monitoring is only useful when the total number of moles of gas changes during the reaction, causing a measurable pressure change.\n• H₂(g) + Br₂(g) → 2HBr(g): 2 moles of gas → 2 moles of gas. No net change in moles of gas, so no pressure change. Not suitable.\n• 2NO(g) + O₂(g) → 2NO₂(g): 3 moles of gas → 2 moles of gas. The total pressure decreases as the reaction proceeds. Suitable ✓\n• CH₃Br(aq) + NaOH(aq) → products: All species are aqueous, no gas involved. Pressure monitoring is not applicable.\n• H₂O₂(aq) + H⁺(aq) + I⁻(aq) → products: All species are aqueous. Not applicable."
  },
  {
    id: "EDEXCEL-AL-U4-L1-HARD-20260828-37",
    question: "In aqueous solution, iodine reacts with propanone in the presence of a dilute hydrochloric acid catalyst:\nCH₃COCH₃(aq) + I₂(aq) → CH₃COCH₂I(aq) + HI(aq)\nWhich of the following methods would be suitable for investigating the rate of this reaction?",
    options: [
      { text: "Measuring the increase in pH with a pH meter.", isCorrect: false },
      { text: "Measuring the change in rotation of plane-polarised light with a polarimeter.", isCorrect: false },
      { text: "Quenching with ice-cold water, followed by titration with acid.", isCorrect: false },
      { text: "Quenching with sodium hydrogencarbonate solution, followed by titration with sodium thiosulfate solution.", isCorrect: true }
    ],
    explanation: "• Measuring pH increase: HI is produced, so the solution becomes more acidic — pH would DECREASE, not increase. Additionally, HCl catalyst is already present, so pH changes are complex and unreliable. Not suitable.\n• Polarimetry: None of the species involved (propanone, iodine, iodopropanone) are chiral molecules with distinct optical rotations. Not suitable.\n• Quenching with ice-cold water + titration with acid: The HCl acid catalyst is already present in the mixture. Titrating against another acid would be meaningless (you cannot titrate an acidic mixture with acid to find the acid produced). Not suitable.\n• Quenching with NaHCO₃ + titration with sodium thiosulfate: NaHCO₃ neutralises and removes the H⁺ catalyst, effectively quenching the reaction. The remaining I₂ in the aliquot can then be accurately titrated against standard sodium thiosulfate solution. This is the correct method ✓"
  }
];
