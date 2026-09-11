export const lessonQuiz = [
  {
    id: "EDEXCEL-AL-U2-L1-01",
    question: "Which of the following processes is endothermic?",
    options: [
      { text: "Freezing water to form ice", isCorrect: false },
      { text: "Condensing water vapour to form liquid water", isCorrect: false },
      { text: "Dissolving sodium hydroxide in water", isCorrect: false },
      { text: "Dissolving ammonium nitrate in water", isCorrect: true }
    ],
    explanation: "• Endothermic processes absorb heat energy from the surroundings, resulting in a temperature decrease.\n• Dissolving ammonium nitrate in water is a classic endothermic process because it absorbs heat, causing the temperature of the solution to drop.\n• Freezing and condensing are exothermic phase changes because they release latent heat.\n• Dissolving sodium hydroxide in water is highly exothermic, raising the solution temperature."
  },
  {
    id: "EDEXCEL-AL-U2-L1-02",
    question: "Under standard conditions, which of the following represents the standard state of carbon?",
    options: [
      { text: "Graphite, C(s)", isCorrect: true },
      { text: "Diamond, C(s)", isCorrect: false },
      { text: "Carbon dioxide, CO₂(g)", isCorrect: false },
      { text: "Monatomic carbon, C(g)", isCorrect: false }
    ],
    explanation: "• Standard state refers to the most stable physical state of a substance under standard conditions (100 kPa and a specified temperature, usually 298 K).\n• Graphite is the most thermodynamically stable allotrope of carbon under these conditions, so it is defined as the standard state of carbon.\n• Diamond is carbon but is metastable and not the standard state.\n• Carbon dioxide is a compound, not the element carbon itself."
  },
  {
    id: "EDEXCEL-AL-U2-L1-03",
    question: "Given the thermochemical equation:\n$$\\\\text{N}_2\\\\text{(g)} + 3\\\\text{H}_2\\\\text{(g)} \\\\rightarrow 2\\\\text{NH}_3\\\\text{(g)} \\\\quad \\\\Delta_r H^\\\\ominus = -92\\\\text{ kJ mol}^{-1}$$\nWhat is the enthalpy change for the reaction represented by:\n$$\\\\frac{1}{2}\\\\text{N}_2\\\\text{(g)} + 1\\\\frac{1}{2}\\\\text{H}_2\\\\text{(g)} \\\\rightarrow \\\\text{NH}_3\\\\text{(g)}$$?",
    options: [
      { text: "-46 kJ mol⁻¹", isCorrect: true },
      { text: "+46 kJ mol⁻¹", isCorrect: false },
      { text: "-92 kJ mol⁻¹", isCorrect: false },
      { text: "-184 kJ mol⁻¹", isCorrect: false }
    ],
    explanation: "• The standard enthalpy change of reaction refers to the reaction as written.\n• the first reaction forms 2 moles of NH₃ with a change of -92 kJ mol⁻¹.\n• the second reaction is exactly half of the first reaction, forming 1 mole of NH₃.\n• Therefore, the enthalpy change is scaled by half: -92 / 2 = -46 kJ mol⁻¹."
  },
  {
    id: "EDEXCEL-AL-U2-L1-04",
    question: "In an enthalpy level diagram for an endothermic reaction, how are the relative levels of reactants and products represented?",
    options: [
      { text: "Reactants are at a higher level than products, and the enthalpy change arrow points downwards.", isCorrect: false },
      { text: "Reactants are at a lower level than products, and the enthalpy change arrow points upwards.", isCorrect: true },
      { text: "Reactants and products are at the same level, and the enthalpy change arrow is horizontal.", isCorrect: false },
      { text: "Reactants are at a lower level than products, and the enthalpy change arrow points downwards.", isCorrect: false }
    ],
    explanation: "• In an endothermic reaction, the system absorbs heat energy, meaning the products have a higher enthalpy content than the reactants.\n• Reactants are placed at a lower enthalpy level, and products are placed at a higher enthalpy level.\n• the enthalpy change arrow must point from the reactants to the products, which is upwards.\n• Upward arrows represent positive enthalpy changes (ΔH > 0)."
  },
  {
    id: "EDEXCEL-AL-U2-L1-05",
    question: "Which of the following must be correct when drawing an enthalpy level diagram?",
    options: [
      { text: "Show the activation energy barrier for the reaction.", isCorrect: false },
      { text: "Label the horizontal axis as 'Progress of reaction'.", isCorrect: false },
      { text: "State symbols must be included for both reactants and products.", isCorrect: true },
      { text: "The arrow for ΔH must point from products to reactants.", isCorrect: false }
    ],
    explanation: "• For an enthalpy level diagram, state symbols are crucial because enthalpy changes depend directly on the physical state of the species.\n• Activation energy is shown in reaction profile diagrams, but is not essential or typically shown in simple enthalpy level diagrams.\n• the horizontal axis does not need to be labeled in an enthalpy level diagram.\n• the arrow for ΔH must always point towards the products."
  },
  {
    id: "EDEXCEL-AL-U2-L1-06",
    question: "Which equation correctly represents the standard enthalpy change of combustion of methanol, CH₃OH?",
    options: [
      { text: "CH₃OH(l) + 1½O₂(g) → CO₂(g) + 2H₂O(l)", isCorrect: true },
      { text: "2CH₃OH(l) + 3O₂(g) → 2CO₂(g) + 4H₂O(l)", isCorrect: false },
      { text: "CH₃OH(l) + 1½O₂(g) → CO₂(g) + 2H₂O(g)", isCorrect: false },
      { text: "CH₃OH(g) + 1½O₂(g) → CO₂(g) + 2H₂O(l)", isCorrect: false }
    ],
    explanation: "• Standard enthalpy of combustion requires exactly one mole of the organic substance (the fuel) to be burned completely.\n• Substances must be in their standard physical states under 100 kPa and 298 K (methanol is liquid, water is liquid).\n• Option B is incorrect because it combusts 2 moles of methanol.\n• Option C is incorrect because H₂O standard state is liquid (l), not gas (g).\n• Option D is incorrect because CH₃OH standard state is liquid (l), not gas (g)."
  },
  {
    id: "EDEXCEL-AL-U2-L1-07",
    question: "In a calorimeter experiment, 0.230 g of ethanol (Mr = 46.0) is burned to heat 50.0 cm³ of water. The temperature of the water rises by 12.0 °C. Calculate the experimental enthalpy change of combustion of ethanol in kJ mol⁻¹. (Specific heat capacity of water = 4.18 J g⁻¹ K⁻¹, density of water = 1.00 g cm⁻³)",
    options: [
      { text: "-502 kJ mol⁻¹", isCorrect: true },
      { text: "-2.51 kJ mol⁻¹", isCorrect: false },
      { text: "+502 kJ mol⁻¹", isCorrect: false },
      { text: "-251 kJ mol⁻¹", isCorrect: false }
    ],
    explanation: "• Stage 1: Calculate heat energy transferred ($Q = m c \\Delta T$)\n  * Mass of water $m = 50.0\\text{ g}$\n  * $Q = 50.0\\text{ g} \\times 4.18\\text{ J g}^{-1}\\text{ K}^{-1} \\times 12.0\\text{ K} = 2508\\text{ J} = 2.508\\text{ kJ}$\n• Stage 2: Calculate moles of fuel burned ($n$)\n  * $n = 0.230\\text{ g} / 46.0\\text{ g mol}^{-1} = 0.00500\\text{ mol}$\n• Stage 3: Calculate enthalpy change ($\\\Delta_c H = -Q / n$)\n  * $\\\Delta_c H = -2.508\\text{ kJ} / 0.00500\\text{ mol} = -501.6\\text{ kJ mol}^{-1} \\approx -502\\text{ kJ mol}^{-1}$"
  },
  {
    id: "EDEXCEL-AL-U2-L1-08",
    question: "Which of the following is the main reason why experimental values for the enthalpy change of combustion of a liquid fuel are typically less exothermic than standard data book values?",
    options: [
      { text: "Incomplete combustion of the fuel.", isCorrect: false },
      { text: "Heat loss from the calorimeter to the surroundings.", isCorrect: true },
      { text: "Heat capacity of the copper calorimeter can.", isCorrect: false },
      { text: "Evaporation of water during the experiment.", isCorrect: false }
    ],
    explanation: "• While incomplete combustion and heat absorbed by the calorimeter can do lower the experimental value, the major source of error leading to a significantly less exothermic value is heat loss from the flame and calorimeter directly to the surrounding air."
  },
  {
    id: "EDEXCEL-AL-U2-L1-09",
    question: "Why is the standard enthalpy change of neutralisation between strong acids and strong alkalis remarkably constant?",
    options: [
      { text: "Strong acids and alkalis do not ionise fully, limiting heat release.", isCorrect: false },
      { text: "The net reaction in all cases is simply H⁺(aq) + OH⁻(aq) → H₂O(l).", isCorrect: true },
      { text: "They react under standard temperature and pressure only.", isCorrect: false },
      { text: "The salts formed absorb the excess heat.", isCorrect: false }
    ],
    explanation: "• Strong acids and strong alkalis fully dissociate in aqueous solution.\n• the spectator ions (e.g. Na⁺, Cl⁻) do not participate in the reaction.\n• the net chemical change is identical for all such reactions, producing one mole of liquid water from gaseous-like aqueous ions."
  },
  {
    id: "EDEXCEL-AL-U2-L1-10",
    question: "Which equation represents the standard enthalpy change of neutralisation of sulfuric acid by sodium hydroxide?",
    options: [
      { text: "½H₂SO₄(aq) + NaOH(aq) → ½Na₂SO₄(aq) + H₂O(l)", isCorrect: true },
      { text: "H₂SO₄(aq) + 2NaOH(aq) → Na₂SO₄(aq) + 2H₂O(l)", isCorrect: false },
      { text: "H⁺(aq) + OH⁻(aq) → H₂O(l)", isCorrect: false },
      { text: "½H₂SO₄(aq) + NaOH(aq) → ½Na₂SO₄(aq) + H₂O(g)", isCorrect: false }
    ],
    explanation: "• By definition, standard enthalpy of neutralisation is calculated per mole of water produced.\n• Sulfuric acid is diprotic, so the full balanced equation produces 2 moles of H₂O.\n• To represent the standard enthalpy change, the equation coefficients must be halved to form exactly 1 mole of liquid H₂O."
  },
  {
    id: "EDEXCEL-AL-U2-L1-11",
    question: "Calculate the standard enthalpy of formation of methane, CH₄(g), given the following enthalpies of combustion:\n* C(s, graphite) = -394 kJ mol⁻¹\n* H₂(g) = -286 kJ mol⁻¹\n* CH₄(g) = -890 kJ mol⁻¹",
    options: [
      { text: "-76 kJ mol⁻¹", isCorrect: true },
      { text: "+76 kJ mol⁻¹", isCorrect: false },
      { text: "-218 kJ mol⁻¹", isCorrect: false },
      { text: "+218 kJ mol⁻¹", isCorrect: false }
    ],
    explanation: "• Step 1: Write the formation equation: C(s) + 2H₂(g) → CH₄(g).\n• Step 2: Use Hess's Law: ΔfH = ΣΔcH(reactants) - ΣΔcH(products).\n• Step 3: Compute: ΔfH = [ΔcH(C) + 2 × ΔcH(H₂)] - [ΔcH(CH₄)]\n  * ΔfH = [-394 + 2(-286)] - (-890)\n  * ΔfH = [-394 - 572] + 890 = -966 + 890 = -76 kJ mol⁻¹."
  },
  {
    id: "EDEXCEL-AL-U2-L1-12",
    question: "Which of the following chemical species has a standard enthalpy change of formation (Δf H°) of exactly zero?",
    options: [
      { text: "O₂(g)", isCorrect: true },
      { text: "O(g)", isCorrect: false },
      { text: "O₃(g)", isCorrect: false },
      { text: "H₂O(l)", isCorrect: false }
    ],
    explanation: "• By definition, the enthalpy change of formation of any pure element in its standard state (most stable physical state at 100 kPa and 298 K) is zero.\n• Oxygen exists as diatomic gas molecules, O₂(g), under standard conditions.\n• O(g) is gaseous atoms, and O₃(g) is ozone, neither of which is the standard state of the element oxygen."
  },
  {
    id: "EDEXCEL-AL-U2-L1-13",
    question: "Which statement correctly defines 'mean bond enthalpy'?",
    options: [
      { text: "The enthalpy change when one mole of a covalent bond in the gaseous state is broken, averaged over a range of compounds.", isCorrect: true },
      { text: "The energy released when one mole of a bond is formed in liquid state.", isCorrect: false },
      { text: "The average energy required to break all the bonds in a specific molecule.", isCorrect: false },
      { text: "The standard enthalpy change of formation of a covalent compound.", isCorrect: false }
    ],
    explanation: "• Mean bond enthalpy is the average energy required to break one mole of a specific covalent bond in the gaseous state.\n• the average is calculated across a variety of different organic molecules to account for small environment variations."
  },
  {
    id: "EDEXCEL-AL-U2-L1-14",
    question: "Given that the standard enthalpy change of reaction for:\n$$\\\\text{N}_2\\\\text{(g)} + 3\\\\text{H}_2\\\\text{(g)} \\\\rightarrow 2\\\\text{NH}_3\\\\text{(g)} \\\\quad \\\\Delta H = -92\\\\text{ kJ mol}^{-1}$$\nAnd the mean bond enthalpies are:\n* E(N≡N) = +945 kJ mol⁻¹\n* E(H–H) = +436 kJ mol⁻¹\nCalculate the mean bond enthalpy of the N–H bond in ammonia, NH₃.",
    options: [
      { text: "+391 kJ mol⁻¹", isCorrect: true },
      { text: "+2345 kJ mol⁻¹", isCorrect: false },
      { text: "+464 kJ mol⁻¹", isCorrect: false },
      { text: "+368 kJ mol⁻¹", isCorrect: false }
    ],
    explanation: "• Step 1: Sum broken bonds (reactants):\n  * Broken = E(N≡N) + 3 × E(H–H) = 945 + 3(436) = 945 + 1308 = +2253 kJ.\n• Step 2: Sum made bonds (products):\n  * Made = 6 × E(N–H).\n• Step 3: Use the formula ΔH = Σ(broken) - Σ(made):\n  * -92 = 2253 - 6 × E(N–H)\n  * 6 × E(N–H) = 2253 + 92 = 2345 kJ\n  * E(N–H) = 2345 / 6 = +390.8 kJ mol⁻¹ ≈ +391 kJ mol⁻¹."
  },
  {
    id: "EDEXCEL-AL-U2-L1-15",
    question: "Which of the following equations represents the standard enthalpy change of atomisation of chlorine?",
    options: [
      { text: "½Cl₂(g) → Cl(g)", isCorrect: true },
      { text: "Cl₂(g) → 2Cl(g)", isCorrect: false },
      { text: "½Cl₂(l) → Cl(g)", isCorrect: false },
      { text: "Cl(g) → Cl⁺(g) + e⁻", isCorrect: false }
    ],
    explanation: "• By definition, standard enthalpy of atomisation forms exactly one mole of gaseous atoms from the element in its standard state.\n• Chlorine standard state is diatomic gas, Cl₂(g).\n• Therefore, ½Cl₂(g) → Cl(g) represents the standard enthalpy of atomisation of chlorine."
  },
  {
    id: "EDEXCEL-AL-U2-L1-16",
    question: "The standard enthalpy changes of formation of gaseous ethene and gaseous ethane are +52 kJ mol⁻¹ and -85 kJ mol⁻¹ respectively. Calculate the enthalpy change of reaction at 298 K for the process:\n$$\\\\text{C}_2\\\\text{H}_4\\\\text{(g)} + \\\\text{H}_2\\\\text{(g)} \\\\rightarrow \\\\text{C}_2\\\\text{H}_6\\\\text{(g)}$$",
    options: [
      { text: "-137 kJ mol⁻¹", isCorrect: true },
      { text: "-33 kJ mol⁻¹", isCorrect: false },
      { text: "+33 kJ mol⁻¹", isCorrect: false },
      { text: "+137 kJ mol⁻¹", isCorrect: false }
    ],
    explanation: "• Use the formula: ΔrH° = ΣΔfH°(products) - ΣΔfH°(reactants).\n• Product is ethane: ΔfH° = -85 kJ mol⁻¹.\n• Reactants are ethene (+52 kJ mol⁻¹) and hydrogen (0 kJ mol⁻¹ since it is an element).\n• Compute: ΔrH° = (-85) - (+52 + 0) = -85 - 52 = -137 kJ mol⁻¹."
  },
  {
    id: "EDEXCEL-AL-U2-L1-17",
    question: "The enthalpy change for the neutralisation reaction between sodium hydroxide and sulfuric acid is -114 kJ mol⁻¹:\n$$\\\\text{2NaOH(aq)} + \\\\text{H}_2\\\\text{SO}_4\\\\text{(aq)} \\\\rightarrow \\\\text{Na}_2\\\\text{SO}_4\\\\text{(aq)} + \\\\text{2H}_2\\\\text{O(l)}$$\nUse this information to suggest the standard enthalpy change of neutralisation for the reaction:\n$$\\\\text{Ba(OH)}_2\\\\text{(aq)} + \\\\text{2HCl(aq)} \\\\rightarrow \\\\text{BaCl}_2\\\\text{(aq)} + \\\\text{2H}_2\\\\text{O(l)}$$",
    options: [
      { text: "-114 kJ mol⁻¹", isCorrect: true },
      { text: "-57 kJ mol⁻¹", isCorrect: false },
      { text: "-76 kJ mol⁻¹", isCorrect: false },
      { text: "-228 kJ mol⁻¹", isCorrect: false }
    ],
    explanation: "• The standard enthalpy of neutralisation is defined per mole of water formed (which is constant at approx -57 kJ mol⁻¹ for strong acids and strong alkalis).\n• Both reactions are between fully dissociated strong acids and strong alkalis, and both equations as written produce exactly 2 moles of H₂O(l).\n• Therefore, the overall heat change for the second reaction as written is identical to the first reaction: -114 kJ mol⁻¹."
  },
  {
    id: "EDEXCEL-AL-U2-L1-18",
    question: "The enthalpy change for the process represented by the equation:\n$$\\\\text{K(s)} \\\\rightarrow \\\\text{K}^+\\\\text{(g)} + \\\\text{e}^-$$\nis equal to which of the following?",
    options: [
      { text: "The sum of the enthalpy change of atomisation and the first ionisation energy of potassium", isCorrect: true },
      { text: "The electron affinity of potassium", isCorrect: false },
      { text: "The enthalpy change of vaporisation of potassium", isCorrect: false },
      { text: "The sum of the enthalpy change of atomisation and the electron affinity of sodium", isCorrect: false }
    ],
    explanation: "• The overall process converts solid potassium atoms directly into gaseous potassium ions and free electrons.\n• This can be split into two steps:\n  1. K(s) → K(g) (Standard Enthalpy of Atomisation)\n  2. K(g) → K⁺(g) + e⁻ (First Ionisation Energy)\n• Therefore, the total enthalpy change is the sum of these two thermodynamic quantities."
  },
  {
    id: "EDEXCEL-AL-U2-L1-19",
    question: "Which equation represents the standard enthalpy change of atomisation of iodine?",
    options: [
      { text: "½I₂(s) → I(g)", isCorrect: true },
      { text: "I₂(g) → 2I(g)", isCorrect: false },
      { text: "I₂(s) → 2I(g)", isCorrect: false },
      { text: "½I₂(g) → I(g)", isCorrect: false }
    ],
    explanation: "• By definition, standard enthalpy of atomisation forms exactly one mole of gaseous atoms from the element in its standard state.\n• Under standard conditions (100 kPa, 298 K), iodine is a solid: I₂(s).\n• Therefore, the process is represented by: ½I₂(s) → I(g)."
  },
  {
    id: "EDEXCEL-AL-U2-L1-20",
    question: "Calculate the standard enthalpy of formation of propane gas, C₃H₈(g), using the following enthalpies of combustion:\n* C(s, graphite) = -394 kJ mol⁻¹\n* H₂(g) = -286 kJ mol⁻¹\n* C₃H₈(g) = -2220 kJ mol⁻¹",
    options: [
      { text: "-106 kJ mol⁻¹", isCorrect: true },
      { text: "+106 kJ mol⁻¹", isCorrect: false },
      { text: "-2326 kJ mol⁻¹", isCorrect: false },
      { text: "+2326 kJ mol⁻¹", isCorrect: false }
    ],
    explanation: "• Step 1: Write the formation equation: 3C(s) + 4H₂(g) → C₃H₈(g).\n• Step 2: Use Hess's Law: ΔfH° = ΣΔcH°(reactants) - ΣΔcH°(products).\n• Step 3: Compute: ΔfH° = [3 × ΔcH°(C) + 4 × ΔcH°(H₂)] - [ΔcH°(C₃H₈)]\n  * ΔfH° = [3(-394) + 4(-286)] - (-2220)\n  * ΔfH° = [-1182 - 1144] + 2220 = -2326 + 2220 = -106 kJ mol⁻¹."
  },
  {
    id: "EDEXCEL-AL-U2-L1-21",
    question: "Which process represents the measurement of the mean bond enthalpy for the C–H bond in methane?",
    options: [
      { text: "¼ of the enthalpy change for the reaction: CH₄(g) → C(g) + 4H(g)", isCorrect: true },
      { text: "The enthalpy change for the reaction: CH₄(g) → CH₃(g) + H(g)", isCorrect: false },
      { text: "¼ of the enthalpy change for the reaction: CH₄(g) → C(g) + 2H₂(g)", isCorrect: false },
      { text: "The enthalpy change for the reaction: CH(g) → C(g) + H(g)", isCorrect: false }
    ],
    explanation: "• The mean bond enthalpy is the average energy required to break one mole of the covalent bond in a gaseous molecule.\n• Methane has 4 C–H bonds.\n• The reaction CH₄(g) → C(g) + 4H(g) breaks all 4 bonds in gaseous state.\n• Dividing this reaction enthalpy change by 4 yields the mean C–H bond enthalpy."
  },
  {
    id: "EDEXCEL-AL-U2-L1-22",
    question: "Calculate the mean bond enthalpy of the S–F bond in SF₆(g), given the following thermodynamic data:\n* SF₆(g) → S(s) + 3F₂(g)  ΔH = +1100 kJ mol⁻¹\n* S(s) → S(g)  ΔH = +223 kJ mol⁻¹\n* F₂(g) → 2F(g)  ΔH = +158 kJ mol⁻¹",
    options: [
      { text: "+300 kJ mol⁻¹", isCorrect: true },
      { text: "+183 kJ mol⁻¹", isCorrect: false },
      { text: "+1481 kJ mol⁻¹", isCorrect: false },
      { text: "+247 kJ mol⁻¹", isCorrect: false }
    ],
    explanation: "• Step 1: Write the equation for breaking all 6 S–F bonds: SF₆(g) → S(g) + 6F(g).\n• Step 2: Use Hess's Law to find the total enthalpy change (ΔH_total) of this process:\n  * Route A: SF₆(g) → S(s) + 3F₂(g)  (ΔH₁ = +1100 kJ)\n  * Route B: S(s) → S(g)  (ΔH₂ = +223 kJ)\n  * Route C: 3F₂(g) → 6F(g)  (ΔH₃ = 3 × 158 = +474 kJ)\n  * ΔH_total = 1100 + 223 + 474 = +1797 kJ.\n• Step 3: Divide by 6 to find the mean bond enthalpy:\n  * Mean E(S–F) = 1797 / 6 = +299.5 kJ mol⁻¹ ≈ +300 kJ mol⁻¹."
  }
];
