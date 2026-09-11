export const lessonQuiz = [
  // ==========================================
  // LEVEL 1: RETRIEVE (EASY)
  // ==========================================
  {
    id: "EDEXCEL-AL-U4-L3-EASY-20260708-01",
    question: "For the equilibrium: N₂(g) + 3H₂(g) ⇌ 2NH₃(g), what is the correct expression for Kc?",
    options: [
      { text: "Kc = [NH₃]² / ([N₂][H₂]³)", isCorrect: true },
      { text: "Kc = [N₂][H₂]³ / [NH₃]²", isCorrect: false },
      { text: "Kc = 2[NH₃] / ([N₂] + 3[H₂])", isCorrect: false },
      { text: "Kc = [NH₃] / ([N₂][H₂])", isCorrect: false }
    ],
    explanation: "* The Kc expression places product concentrations in the numerator and reactant concentrations in the denominator, each raised to the power of their stoichiometric coefficients.\n* Here, [NH₃] is squared, while [N₂] is raised to the power of 1 and [H₂] is cubed.\n* The units of Kc for this reaction are dm⁶ mol⁻² because Δn = 2 - (1 + 3) = -2."
  },
  {
    id: "EDEXCEL-AL-U4-L3-EASY-20260708-02",
    question: "A reaction at equilibrium has Kc = 2.5 × 10⁻⁶. Which statement is correct?",
    options: [
      { text: "The equilibrium strongly favours the products.", isCorrect: false },
      { text: "The equilibrium strongly favours the reactants.", isCorrect: true },
      { text: "The concentrations of products and reactants are equal at equilibrium.", isCorrect: false },
      { text: "The reaction does not reach equilibrium.", isCorrect: false }
    ],
    explanation: "* A value of Kc ≪ 1 (much less than 1) indicates that the denominator of the Kc expression (reactants) is far larger than the numerator (products).\n* Therefore, the equilibrium position lies heavily to the left, strongly favouring the reactants."
  },

  // ==========================================
  // LEVEL 2: APPLY (MEDIUM)
  // ==========================================
  {
    id: "EDEXCEL-AL-U4-L3-MEDIUM-20260708-03",
    question: "At equilibrium at 700 K, a mixture of 0.40 mol N₂, 1.20 mol H₂, and 0.80 mol NH₃ is present in a 2.0 dm³ container. Calculate Kc for: N₂(g) + 3H₂(g) ⇌ 2NH₃(g)",
    options: [
      { text: "3.70 dm⁶ mol⁻²", isCorrect: true },
      { text: "0.185 dm⁶ mol⁻²", isCorrect: false },
      { text: "5.40 dm⁶ mol⁻²", isCorrect: false },
      { text: "0.093 dm⁶ mol⁻²", isCorrect: false }
    ],
    explanation: "* First convert moles to concentrations by dividing by the volume V = 2.0 dm³:\n* [N₂] = 0.40 / 2.0 = 0.20 mol dm⁻³\n* [H₂] = 1.20 / 2.0 = 0.60 mol dm⁻³\n* [NH₃] = 0.80 / 2.0 = 0.40 mol dm⁻³\n* Substitute into the Kc expression: Kc = [NH₃]² / ([N₂][H₂]³)\n* Kc = (0.40)² / (0.20 × (0.60)³) = 0.16 / (0.20 × 0.216) = 0.16 / 0.0432 ≈ 3.70 dm⁶ mol⁻²"
  },
  {
    id: "EDEXCEL-AL-U4-L3-MEDIUM-20260708-04",
    question: "The forward reaction of the Contact Process is exothermic: 2SO₂(g) + O₂(g) ⇌ 2SO₃(g). Which change causes Kc to DECREASE?",
    options: [
      { text: "Increasing the pressure", isCorrect: false },
      { text: "Adding more SO₂ gas", isCorrect: false },
      { text: "Increasing the temperature", isCorrect: true },
      { text: "Adding a V₂O₅ catalyst", isCorrect: false }
    ],
    explanation: "* The numerical value of Kc is altered only by changes in temperature.\n* For an exothermic forward reaction, increasing the temperature causes the equilibrium to shift in the endothermic reverse direction to absorb heat.\n* This shift decreases the concentration of products and increases reactants, decreasing the value of Kc."
  },
  {
    id: "EDEXCEL-AL-U4-L3-MEDIUM-20260708-06",
    question: "A dynamic equilibrium is set up between carbon monoxide, hydrogen, and methanol: CO(g) + 2H₂(g) ⇌ CH₃OH(g). The equilibrium concentrations are [CO] = 3.1 × 10⁻³ mol dm⁻³, [H₂] = 2.4 × 10⁻² mol dm⁻³, and [CH₃OH] = 2.6 × 10⁻⁵ mol dm⁻³. Calculate the value of Kc.",
    options: [
      { text: "14.6 dm⁶ mol⁻²", isCorrect: true },
      { text: "0.069 dm⁶ mol⁻²", isCorrect: false },
      { text: "349 dm⁶ mol⁻²", isCorrect: false },
      { text: "1.46 dm⁶ mol⁻²", isCorrect: false }
    ],
    explanation: "* The Kc expression for the reaction is: Kc = [CH₃OH] / ([CO][H₂]²)\n* Substitute the given equilibrium concentrations: Kc = (2.6 × 10⁻⁵) / ((3.1 × 10⁻³) × (2.4 × 10⁻²)²)\n* Kc = (2.6 × 10⁻⁵) / ((3.1 × 10⁻³) × (5.76 × 10⁻⁴))\n* Kc = (2.6 × 10⁻⁵) / (1.7856 × 10⁻⁶) ≈ 14.56 dm⁶ mol⁻²"
  },
  {
    id: "EDEXCEL-AL-U4-L3-MEDIUM-20260708-08",
    question: "The reaction between carbon monoxide and chlorine to form phosgene is: CO(g) + Cl₂(g) ⇌ COCl₂(g). At equilibrium, the partial pressures are: p(CO) = 2.47 × 10⁻⁸ atm, p(Cl₂) = 2.47 × 10⁻⁸ atm, and p(COCl₂) = 4.08 × 10⁻¹⁰ atm. Calculate the value and units of Kp.",
    options: [
      { text: "6.69 × 10⁵ atm⁻¹", isCorrect: true },
      { text: "1.49 × 10⁻⁶ atm⁻¹", isCorrect: false },
      { text: "6.69 × 10⁵ (no units)", isCorrect: false },
      { text: "6.69 × 10⁵ atm", isCorrect: false }
    ],
    explanation: "* Write the Kp expression: Kp = p(COCl₂) / (p(CO) × p(Cl₂))\n* Substitute the equilibrium values: Kp = (4.08 × 10⁻¹⁰) / ((2.47 × 10⁻⁸) × (2.47 × 10⁻⁸))\n* Kp = (4.08 × 10⁻¹) / (6.101 × 10⁻¹⁶) ≈ 6.69 × 10⁵\n* Determine units: atm / (atm × atm) = atm⁻¹"
  },
  {
    id: "EDEXCEL-AL-U4-L3-MEDIUM-20260708-09",
    question: "When chlorine gas is heated, it dissociates: Cl₂(g) ⇌ 2Cl(g). At equilibrium, the partial pressure of Cl₂(g) is 0.84 atm and Cl(g) is 0.030 atm. Determine the mole fraction of Cl(g) at equilibrium.",
    options: [
      { text: "0.034", isCorrect: true },
      { text: "0.036", isCorrect: false },
      { text: "0.966", isCorrect: false },
      { text: "0.025", isCorrect: false }
    ],
    explanation: "* Total equilibrium pressure Ptotal = p(Cl₂) + p(Cl) = 0.84 + 0.030 = 0.87 atm\n* Mole fraction χ of Cl(g) = p(Cl) / Ptotal = 0.030 / 0.87 ≈ 0.034"
  },

  // ==========================================
  // LEVEL 3: ANALYZE (HARD)
  // ==========================================
  {
    id: "EDEXCEL-AL-U4-L3-HARD-20260708-05",
    question: "At equilibrium at 500 K and a total pressure of 200 kPa, a gaseous mixture contains 0.25 mol N₂O₄ and 0.50 mol NO₂. Calculate Kp for: N₂O₄(g) ⇌ 2NO₂(g). Give units.",
    options: [
      { text: "267 kPa", isCorrect: true },
      { text: "133 kPa", isCorrect: false },
      { text: "66.7 kPa", isCorrect: false },
      { text: "0.50 kPa", isCorrect: false }
    ],
    explanation: "* Total gaseous moles = 0.25 + 0.50 = 0.75 mol\n* Mole fractions (χ): χ(N₂O₄) = 0.25 / 0.75 = 0.333, and χ(NO₂) = 0.50 / 0.75 = 0.667\n* Partial pressures (p = χ × Ptotal): p(N₂O₄) = 0.333 × 200 = 66.7 kPa, and p(NO₂) = 0.667 × 200 = 133.3 kPa\n* Kp = p(NO₂)² / p(N₂O₄) = (133.3)² / 66.7 = 17768.9 / 66.7 ≈ 266.7 kPa\n* Units: (kPa)² / kPa = kPa"
  },
  {
    id: "EDEXCEL-AL-U4-L3-HARD-20260708-07",
    question: "6.0 mol of ethanoic acid and 12.5 mol of ethanol are mixed and allowed to reach equilibrium in a flask of volume V dm³. At equilibrium, 1.0 mol of ethanoic acid remains. Calculate the value of Kc for this reaction.",
    options: [
      { text: "3.33", isCorrect: true },
      { text: "0.30", isCorrect: false },
      { text: "2.50", isCorrect: false },
      { text: "1.67", isCorrect: false }
    ],
    explanation: "* Write the equation: CH₃COOH + CH₃CH₂OH ⇌ CH₃COOCH₂CH₃ + H₂O\n* Set up the ICE mole calculation:\n* Initial moles: acid = 6.0, ethanol = 12.5, ester = 0, water = 0\n* Reacted moles of acid = 6.0 - 1.0 = 5.0 mol\n* Equilibrium moles: acid = 1.0, ethanol = 12.5 - 5.0 = 7.5, ester = 5.0, water = 5.0\n* Convert to concentrations: [acid] = 1/V, [ethanol] = 7.5/V, [ester] = 5/V, [water] = 5/V\n* Substitute into Kc expression: Kc = ([ester][water]) / ([acid][ethanol]) = (5/V × 5/V) / (1/V × 7.5/V) = 25 / 7.5 ≈ 3.33 (no units as volume cancels)"
  },
  {
    id: "EDEXCEL-AL-U4-L3-HARD-20260708-10",
    question: "Sulfur dioxide and oxygen react: 2SO₂(g) + O₂(g) ⇌ 2SO₃(g). At 700 K, Kp for the reaction is 3.00 × 10⁴ atm⁻¹. At equilibrium, the partial pressure of SO₂ is 0.100 atm and O₂ is 0.500 atm. Calculate the percentage of SO₃ present in the equilibrium mixture.",
    options: [
      { text: "95.3%", isCorrect: true },
      { text: "85.2%", isCorrect: false },
      { text: "98.1%", isCorrect: false },
      { text: "90.0%", isCorrect: false }
    ],
    explanation: "* Write the Kp expression: Kp = (p(SO₃))² / ((p(SO₂))² × p(O₂))\n* Substitute the known values: 3.00 × 10⁴ = (p(SO₃))² / ((0.100)² × 0.500)\n* 3.00 × 10⁴ = (p(SO₃))² / 0.00500\n* (p(SO₃))² = 3.00 × 10⁴ × 0.00500 = 150\n* p(SO₃) = √150 ≈ 12.25 atm\n* Total pressure = p(SO₂) + p(O₂) + p(SO₃) = 0.100 + 0.500 + 12.25 = 12.85 atm\n* Percentage of SO₃ = (12.25 / 12.85) × 100% ≈ 95.3%"
  },
  {
    id: "EDEXCEL-AL-U4-L3-EASY-20260708-11",
    question: "The reaction between carbon monoxide and hydrogen forms methanol: CO(g) + 2H₂(g) ⇌ CH₃OH(g). When the reaction is carried out at a higher temperature, the value of Kc decreases. What does this indicate about the forward reaction?",
    options: [
      { text: "The forward reaction is exothermic.", isCorrect: true },
      { text: "The forward reaction is endothermic.", isCorrect: false },
      { text: "The enthalpy change of the reaction is zero.", isCorrect: false },
      { text: "The reaction is independent of temperature changes.", isCorrect: false }
    ],
    explanation: "* An increase in temperature shifts the equilibrium in the endothermic direction to absorb heat.\n* Since Kc decreases at higher temperatures, the equilibrium must have shifted to the left (reactants side).\n* This implies the reverse reaction is endothermic, so the forward reaction must be exothermic (ΔH < 0)."
  },
  {
    id: "EDEXCEL-AL-U4-L3-MEDIUM-20260708-12",
    question: "For the reversible reaction: H₂(g) + I₂(g) ⇌ 2HI(g), an equilibrium mixture contains 0.14 mol H₂ at 500 K. When repeated with the same starting amounts at 700 K, the equilibrium amount of H₂ is greater than 0.14 mol. Explain what this tells us about the reaction.",
    options: [
      { text: "The forward reaction is exothermic.", isCorrect: true },
      { text: "The forward reaction is endothermic.", isCorrect: false },
      { text: "The rate of the forward reaction decreased at 700 K.", isCorrect: false },
      { text: "The total pressure of the system decreased at 700 K.", isCorrect: false }
    ],
    explanation: "* An increase in temperature from 500 K to 700 K resulted in more H₂ (reactant) at equilibrium, indicating a shift to the left.\n* Since high temperatures favor the endothermic direction, the reverse reaction must be endothermic.\n* Thus, the forward reaction is exothermic."
  },
  {
    id: "EDEXCEL-AL-U4-L3-HARD-20260708-13",
    question: "For the endothermic reaction: N₂(g) + O₂(g) ⇌ 2NO(g) (ΔH is positive), the equilibrium constant Kc at 298 K is 4.8 × 10⁻³¹. Predict the change in the proportion of NO(g) present at a temperature higher than 298 K.",
    options: [
      { text: "The proportion of NO(g) increases because Kc increases at higher temperatures.", isCorrect: true },
      { text: "The proportion of NO(g) decreases because Kc decreases at higher temperatures.", isCorrect: false },
      { text: "The proportion of NO(g) remains unchanged because pressure is constant.", isCorrect: false },
      { text: "The proportion of NO(g) decreases because high temperatures favor reactants.", isCorrect: false }
    ],
    explanation: "* For an endothermic reaction, raising the temperature shifts the equilibrium position to the right (products side).\n* This shift increases the value of Kc at higher temperatures.\n* A larger Kc value corresponds to a higher ratio of products to reactants, increasing the proportion of NO(g) at equilibrium."
  },
  {
    id: "EDEXCEL-AL-U4-L3-MEDIUM-20260708-14",
    question: "For the equilibrium: CO(g) + 2H₂(g) ⇌ CH₃OH(g), state the effect of increasing pressure at constant temperature on the value of Kc and the position of equilibrium.",
    options: [
      { text: "Kc is unchanged; equilibrium shifts to the right.", isCorrect: true },
      { text: "Kc increases; equilibrium shifts to the right.", isCorrect: false },
      { text: "Kc is unchanged; equilibrium shifts to the left.", isCorrect: false },
      { text: "Kc decreases; equilibrium shifts to the left.", isCorrect: false }
    ],
    explanation: "* The value of Kc is temperature-dependent only, so it remains unchanged when pressure is increased.\n* Increasing the total pressure increases the concentrations of all species.\n* Since there are 3 moles of gas on the left (reactants) and only 1 mole of gas on the right (products), the reaction quotient Qc becomes smaller than Kc.\n* The equilibrium shifts to the right (products side) to restore Qc = Kc."
  },
  {
    id: "EDEXCEL-AL-U4-L3-MEDIUM-20260708-15",
    question: "Ethanoic acid and ethanol react in the presence of a sulfuric acid catalyst: CH₃COOH(l) + CH₃CH₂OH(l) ⇌ CH₃COOCH₂CH₃(l) + H₂O(l). What occurs to the equilibrium composition if more sulfuric acid is added?",
    options: [
      { text: "The equilibrium composition remains unchanged.", isCorrect: true },
      { text: "The proportion of ethyl ethanoate increases.", isCorrect: false },
      { text: "The proportion of ethanoic acid increases.", isCorrect: false },
      { text: "The reaction shifts to the left.", isCorrect: false }
    ],
    explanation: "* Sulfuric acid acts as a catalyst in this reaction.\n* A catalyst increases the rates of the forward and reverse reactions by the same factor.\n* It has no effect on the equilibrium constant or the final equilibrium composition; it only helps the system reach equilibrium faster."
  },
  {
    id: "EDEXCEL-AL-U4-L3-HARD-20260708-16",
    question: "A gaseous mixture is in equilibrium: H₂(g) + I₂(g) ⇌ 2HI(g). The mixture is compressed to half its volume and left to reach equilibrium at the original temperature. Explain the effect of this compression on the composition of the mixture.",
    options: [
      { text: "The composition remains unchanged because there are equal moles of gas on both sides.", isCorrect: true },
      { text: "The proportion of HI increases because compression favors the forward direction.", isCorrect: false },
      { text: "The proportion of H₂ increases because the reaction shifts to the left.", isCorrect: false },
      { text: "The value of Kc increases because concentrations doubled.", isCorrect: false }
    ],
    explanation: "* Halving the volume doubles the concentration of all gases.\n* Substitute these doubled values into the reaction quotient expression: Qc = (2[HI])² / (2[H₂] × 2[I₂]) = 4[HI]² / 4[H₂][I₂] = Qc.\n* Because there are equal moles of gas on both sides of the equation, the concentration multiplier cancels out completely.\n* Qc remains equal to Kc, so there is no shift in equilibrium and the moles of each gas remain unchanged."
  },
  {
    id: "EDEXCEL-AL-U4-L3-MEDIUM-20260708-17",
    question: "Methane reacts with steam: CH₄(g) + H₂O(g) ⇌ CO(g) + 3H₂(g) (ΔH = +206 kJ mol⁻¹). At a given temperature, the equilibrium constant Kp is 8.54. Calculate the standard total entropy change (ΔStotal) for this reaction (R = 8.31 J K⁻¹ mol⁻¹).",
    options: [
      { text: "+17.8 J K⁻¹ mol⁻¹", isCorrect: true },
      { text: "-17.8 J K⁻¹ mol⁻¹", isCorrect: false },
      { text: "+71.0 J K⁻¹ mol⁻¹", isCorrect: false },
      { text: "+8.54 J K⁻¹ mol⁻¹", isCorrect: false }
    ],
    explanation: "* Use the thermodynamic equation: ΔStotal = R ln Kp\n* Substitute the given values: ΔStotal = 8.31 × ln(8.54)\n* ΔStotal = 8.31 × 2.1448 ≈ +17.8 J K⁻¹ mol⁻¹"
  },
  {
    id: "EDEXCEL-AL-U4-L3-HARD-20260708-18",
    question: "Methane reacts with steam: CH₄(g) + H₂O(g) ⇌ CO(g) + 3H₂(g) (ΔH = +206 kJ mol⁻¹). Standard total entropy change is +17.8 J K⁻¹ mol⁻¹. Calculate the temperature at which this reaction reaches equilibrium (ΔSsystem = +225 J K⁻¹ mol⁻¹, R = 8.31 J K⁻¹ mol⁻¹).",
    options: [
      { text: "994 K", isCorrect: true },
      { text: "916 K", isCorrect: false },
      { text: "805 K", isCorrect: false },
      { text: "1150 K", isCorrect: false }
    ],
    explanation: "* The total entropy equation is: ΔStotal = ΔSsystem + ΔSsurroundings = ΔSsystem - ΔH / T\n* Substitute the known values: 17.8 = 225 - 206000 / T\n* Rearrange to solve for T: 206000 / T = 225 - 17.8 = 207.2\n* T = 206000 / 207.2 ≈ 994 K"
  },
  {
    id: "EDEXCEL-AL-U4-L3-MEDIUM-20260708-19",
    question: "For the aqueous reaction: Fe²⁺(aq) + Ag⁺(aq) ⇌ Fe³⁺(aq) + Ag(s), the standard total entropy change is +47.64 J K⁻¹ mol⁻¹. Calculate the value of the equilibrium constant Kc at 298 K (R = 8.31 J K⁻¹ mol⁻¹).",
    options: [
      { text: "309", isCorrect: true },
      { text: "123", isCorrect: false },
      { text: "5.73", isCorrect: false },
      { text: "54", isCorrect: false }
    ],
    explanation: "* Use the rearranged equation: Kc = e^(ΔStotal / R)\n* Substitute the values: Kc = e^(47.64 / 8.31) = e^5.733\n* Kc ≈ 309"
  },
  {
    id: "EDEXCEL-AL-U4-L3-HARD-20260708-20",
    question: "For the reaction: Fe²⁺(aq) + Ag⁺(aq) ⇌ Fe³⁺(aq) + Ag(s) (ΔSsystem = -208.3 J K⁻¹ mol⁻¹, ΔStotal = +47.64 J K⁻¹ mol⁻¹ at 298 K), calculate the standard enthalpy change ΔH for this reaction in kJ mol⁻¹.",
    options: [
      { text: "-76.3 kJ mol⁻¹", isCorrect: true },
      { text: "+76.3 kJ mol⁻¹", isCorrect: false },
      { text: "-38.2 kJ mol⁻¹", isCorrect: false },
      { text: "-62.1 kJ mol⁻¹", isCorrect: false }
    ],
    explanation: "* First, find surroundings entropy: ΔStotal = ΔSsystem + ΔSsurroundings\n* +47.64 = -208.3 + ΔSsurroundings ⟹ ΔSsurroundings = +255.94 J K⁻¹ mol⁻¹\n* Use the surroundings entropy equation: ΔSsurroundings = -ΔH / T\n* +255.94 = -ΔH / 298 ⟹ ΔH = -255.94 × 298 = -76270 J mol⁻¹ ≈ -76.3 kJ mol⁻¹"
  },
  {
    id: "EDEXCEL-AL-U4-L3-EASY-20260803-21",
    question: "Which equation correctly relates the standard total entropy change to the equilibrium constant K?",
    options: [
      { text: "ΔS°total = R ln K", isCorrect: true },
      { text: "ΔS°total = R × K", isCorrect: false },
      { text: "ΔS°total = RT ln K", isCorrect: false },
      { text: "ΔS°total = -R ln K", isCorrect: false }
    ],
    explanation: "* The thermodynamic relationship linking entropy and the equilibrium constant is: ΔS°total = R ln K.\n* Where R = 8.31 J K⁻¹ mol⁻¹ is the gas constant.\n* This can be rearranged to K = e^(ΔS°total / R)."
  },
  {
    id: "EDEXCEL-AL-U4-L3-EASY-20260803-22",
    question: "A reaction has a large positive ΔS°total (≫ 0). What does this tell us about the equilibrium constant K?",
    options: [
      { text: "K ≫ 1 — reaction proceeds virtually to completion", isCorrect: true },
      { text: "K ≪ 1 — equilibrium lies far to the left", isCorrect: false },
      { text: "K = 1 — equal amounts of reactants and products", isCorrect: false },
      { text: "K = 0 — reaction does not proceed", isCorrect: false }
    ],
    explanation: "* Since ΔS°total = R ln K, a large positive ΔS°total means ln K is large and positive.\n* Therefore K ≫ 1 and the equilibrium position lies far to the right.\n* The reaction goes virtually to completion."
  },
  {
    id: "EDEXCEL-AL-U4-L3-EASY-20260803-23",
    question: "What does it mean for a reaction to be 'thermodynamically feasible but kinetically stable' at room temperature?",
    options: [
      { text: "ΔS°total > 0 but activation energy is so high the reaction does not proceed without a catalyst or ignition source", isCorrect: true },
      { text: "ΔS°total < 0 and K < 1 at room temperature", isCorrect: false },
      { text: "The reaction proceeds rapidly without any energy input", isCorrect: false },
      { text: "The forward and reverse rates are equal at room temperature", isCorrect: false }
    ],
    explanation: "* Thermodynamically feasible means ΔS°total > 0 (K > 1) — the reaction is energetically favourable.\n* Kinetically stable means the activation energy Eₐ is very high, so molecules cannot overcome it at room temperature.\n* Example: a H₂ / O₂ gas mixture sits indefinitely at room temperature but explodes when ignited."
  },
  {
    id: "EDEXCEL-AL-U4-L3-MEDIUM-20260803-24",
    question: "The standard total entropy change for a reaction is +24.93 J K⁻¹ mol⁻¹. Calculate K at this temperature. (R = 8.31 J K⁻¹ mol⁻¹)",
    options: [
      { text: "K ≈ 20.1", isCorrect: true },
      { text: "K ≈ 3.00", isCorrect: false },
      { text: "K ≈ 62.1", isCorrect: false },
      { text: "K ≈ 0.05", isCorrect: false }
    ],
    explanation: "* Use K = e^(ΔS°total / R).\n* ΔS°total / R = 24.93 / 8.31 = 2.998 ≈ 3.00.\n* K = e^3.00 ≈ 20.1.\n* This moderate K confirms significant concentrations of both reactants and products at equilibrium."
  },
  {
    id: "EDEXCEL-AL-U4-L3-MEDIUM-20260803-25",
    question: "A reaction has K = 1.00 × 10⁻⁵. Calculate ΔS°total. (R = 8.31 J K⁻¹ mol⁻¹)",
    options: [
      { text: "ΔS°total = −95.6 J K⁻¹ mol⁻¹", isCorrect: true },
      { text: "ΔS°total = +95.6 J K⁻¹ mol⁻¹", isCorrect: false },
      { text: "ΔS°total = −41.6 J K⁻¹ mol⁻¹", isCorrect: false },
      { text: "ΔS°total = +41.6 J K⁻¹ mol⁻¹", isCorrect: false }
    ],
    explanation: "* Use ΔS°total = R ln K.\n* ln(1.00 × 10⁻⁵) = −5 × ln(10) = −5 × 2.303 = −11.51.\n* ΔS°total = 8.31 × (−11.51) = −95.6 J K⁻¹ mol⁻¹.\n* The negative value confirms equilibrium lies far to the left (K ≪ 1)."
  },
  {
    id: "EDEXCEL-AL-U4-L3-MEDIUM-20260803-26",
    question: "CaCO₃(s) ⇌ CaO(s) + CO₂(g), ΔH° = +177.9 kJ mol⁻¹, ΔS°system = +160.4 J K⁻¹ mol⁻¹. Calculate ΔS°surroundings at 293 K.",
    options: [
      { text: "−607.2 J K⁻¹ mol⁻¹", isCorrect: true },
      { text: "+607.2 J K⁻¹ mol⁻¹", isCorrect: false },
      { text: "−151.7 J K⁻¹ mol⁻¹", isCorrect: false },
      { text: "+160.4 J K⁻¹ mol⁻¹", isCorrect: false }
    ],
    explanation: "* ΔS°surroundings = −ΔH / T.\n* ΔS°surroundings = −177900 / 293 = −607.2 J K⁻¹ mol⁻¹.\n* The negative sign reflects that an endothermic reaction absorbs heat from the surroundings, decreasing their entropy."
  },
  {
    id: "EDEXCEL-AL-U4-L3-MEDIUM-20260803-27",
    question: "Using the CaCO₃ decomposition data (ΔS°total at 293 K = −446.8 J K⁻¹ mol⁻¹), what can be concluded about the reaction at 293 K?",
    options: [
      { text: "The reaction is non-spontaneous at 293 K because ΔS°total < 0", isCorrect: true },
      { text: "The reaction is spontaneous at 293 K because ΔH > 0", isCorrect: false },
      { text: "The reaction is spontaneous because a gas is produced", isCorrect: false },
      { text: "The reaction is at equilibrium at 293 K", isCorrect: false }
    ],
    explanation: "* ΔS°total = ΔS°system + ΔS°surroundings = +160.4 + (−607.2) = −446.8 J K⁻¹ mol⁻¹.\n* Since ΔS°total < 0, the reaction is non-spontaneous at 293 K.\n* The reaction only becomes spontaneous above approximately 1109 K, where ΔS°total becomes positive."
  },
  {
    id: "EDEXCEL-AL-U4-L3-MEDIUM-20260803-28",
    question: "For CaCO₃(s) ⇌ CaO(s) + CO₂(g), ΔH° = +177.9 kJ mol⁻¹ and ΔS°system = +160.4 J K⁻¹ mol⁻¹. At what temperature does the reaction become spontaneous?",
    options: [
      { text: "Above approximately 1109 K", isCorrect: true },
      { text: "Above approximately 293 K", isCorrect: false },
      { text: "Above approximately 838 K", isCorrect: false },
      { text: "The reaction is never spontaneous as ΔH > 0", isCorrect: false }
    ],
    explanation: "* At the transition temperature: ΔS°total = 0.\n* ΔS°system + ΔS°surroundings = 0 → ΔS°system = ΔH / T.\n* T = ΔH / ΔS°system = 177900 / 160.4 ≈ 1109 K.\n* Above 1109 K, ΔS°total becomes positive and decomposition is spontaneous."
  },
  {
    id: "EDEXCEL-AL-U4-L3-HARD-20260803-29",
    question: "A reaction has ΔS°system = −65.0 J K⁻¹ mol⁻¹ and ΔS°total = +19.93 J K⁻¹ mol⁻¹ at 298 K. Calculate ΔH° for the reaction.",
    options: [
      { text: "ΔH° = −25.3 kJ mol⁻¹", isCorrect: true },
      { text: "ΔH° = +25.3 kJ mol⁻¹", isCorrect: false },
      { text: "ΔH° = −84.9 kJ mol⁻¹", isCorrect: false },
      { text: "ΔH° = +39.3 kJ mol⁻¹", isCorrect: false }
    ],
    explanation: "* ΔS°surroundings = ΔS°total − ΔS°system = +19.93 − (−65.0) = +84.93 J K⁻¹ mol⁻¹.\n* ΔS°surroundings = −ΔH / T → ΔH = −ΔS°surroundings × T.\n* ΔH = −84.93 × 298 = −25,309 J mol⁻¹ ≈ −25.3 kJ mol⁻¹.\n* The negative sign confirms this is an exothermic reaction."
  },
  {
    id: "EDEXCEL-AL-U4-L3-HARD-20260803-30",
    question: "For the Haber Process: N₂(g) + 3H₂(g) ⇌ 2NH₃(g), ΔH° = −92 kJ mol⁻¹. What happens to K as temperature increases and why?",
    options: [
      { text: "K decreases because ΔS°surroundings becomes less positive, reducing ΔS°total", isCorrect: true },
      { text: "K increases because higher temperature always increases entropy", isCorrect: false },
      { text: "K is unchanged because it only depends on concentration", isCorrect: false },
      { text: "K increases because the forward exothermic reaction is favoured by heat", isCorrect: false }
    ],
    explanation: "* ΔS°surroundings = −ΔH / T = +92000 / T (positive because ΔH < 0).\n* As T increases, ΔS°surroundings decreases (becomes less positive).\n* ΔS°total = ΔS°system + ΔS°surroundings therefore decreases.\n* Since K = e^(ΔS°total / R), a lower ΔS°total gives a smaller K.\n* Consistent with Le Chatelier: raising temperature shifts exothermic equilibria to the left, decreasing K."
  },
  {
    id: "EDEXCEL-AL-U4-L3-HARD-20260803-31",
    question: "A reaction has ΔH° = −85 kJ mol⁻¹ and ΔS°system = −120 J K⁻¹ mol⁻¹. At what temperature does the reaction change from spontaneous to non-spontaneous?",
    options: [
      { text: "T ≈ 708 K", isCorrect: true },
      { text: "T ≈ 525 K", isCorrect: false },
      { text: "T ≈ 850 K", isCorrect: false },
      { text: "The reaction is always spontaneous", isCorrect: false }
    ],
    explanation: "* At the transition temperature, ΔS°total = 0.\n* ΔS°system + (−ΔH / T) = 0 → −120 + 85000 / T = 0.\n* T = 85000 / 120 ≈ 708 K.\n* Below 708 K: ΔS°total > 0 (spontaneous). Above 708 K: ΔS°total < 0 (non-spontaneous).\n* This occurs because the large positive ΔS°surroundings dominates at lower temperatures."
  },
  {
    id: "EDEXCEL-AL-U4-L3-HARD-20260803-32",
    question: "For Fe²⁺(aq) + Ag⁺(aq) ⇌ Fe³⁺(aq) + Ag(s): ΔS°total = +47.64 J K⁻¹ mol⁻¹, ΔS°system = −208.3 J K⁻¹ mol⁻¹ at 298 K. Calculate ΔH° in kJ mol⁻¹.",
    options: [
      { text: "−76.3 kJ mol⁻¹", isCorrect: true },
      { text: "+76.3 kJ mol⁻¹", isCorrect: false },
      { text: "−255.9 kJ mol⁻¹", isCorrect: false },
      { text: "+255.9 kJ mol⁻¹", isCorrect: false }
    ],
    explanation: "* ΔS°surroundings = ΔS°total − ΔS°system = +47.64 − (−208.3) = +255.94 J K⁻¹ mol⁻¹.\n* ΔS°surroundings = −ΔH / T → +255.94 = −ΔH / 298.\n* ΔH = −255.94 × 298 = −76,270 J mol⁻¹ = −76.3 kJ mol⁻¹.\n* The negative sign confirms this is exothermic — consistent with the large positive ΔS°surroundings."
  },
  {
    id: "EDEXCEL-AL-U4-L3-MEDIUM-20260803-33",
    question: "Why is the thermodynamic equilibrium constant K dimensionless, even when experimental Kc or Kp values have units?",
    options: [
      { text: "Each concentration/pressure is divided by its standard value (1 mol dm⁻³ or 1 atm), giving a pure number", isCorrect: true },
      { text: "Because K is calculated from mole fractions which are always unitless", isCorrect: false },
      { text: "Because ΔS°total has no units so K must also be unitless", isCorrect: false },
      { text: "Because K only applies to gas-phase reactions where pressure cancels", isCorrect: false }
    ],
    explanation: "* In the thermodynamic derivation, each concentration term is divided by the standard concentration c° = 1 mol dm⁻³, making each term dimensionless.\n* Similarly, each partial pressure is divided by standard pressure p° = 1 atm.\n* Since the numerical value of the standard is 1, the numbers remain unchanged but units cancel.\n* Therefore K is always dimensionless in the thermodynamic sense."
  },
  {
    id: "EDEXCEL-AL-U4-L3-EASY-20260803-34",
    question: "The surroundings entropy change is given by ΔSsurr = −ΔH / T. For an exothermic reaction (ΔH < 0) at 298 K, what is the sign of ΔSsurr?",
    options: [
      { text: "Positive — heat released to surroundings increases their entropy", isCorrect: true },
      { text: "Negative — exothermic reactions always decrease surroundings entropy", isCorrect: false },
      { text: "Zero — surroundings entropy only changes for endothermic reactions", isCorrect: false },
      { text: "Cannot be determined without knowing ΔSsystem", isCorrect: false }
    ],
    explanation: "* ΔSsurr = −ΔH / T.\n* For an exothermic reaction: ΔH < 0, so −ΔH > 0, and ΔSsurr > 0.\n* When heat is released to the surroundings, the particles in the surroundings gain kinetic energy and their entropy increases.\n* This is why many exothermic reactions are spontaneous — the positive ΔSsurr can outweigh a negative ΔSsystem."
  },
  {
    id: "EDEXCEL-AL-U4-L3-HARD-20260803-35",
    question: "Two reactions both have ΔS°total = +50 J K⁻¹ mol⁻¹. Reaction A has Eₐ = 20 kJ mol⁻¹; Reaction B has Eₐ = 200 kJ mol⁻¹. Which statement is correct?",
    options: [
      { text: "Reaction A proceeds rapidly; Reaction B is kinetically stable and needs a catalyst or high temperature", isCorrect: true },
      { text: "Both reactions proceed at the same rate since they have the same K", isCorrect: false },
      { text: "Reaction B proceeds faster because higher Eₐ releases more energy", isCorrect: false },
      { text: "Neither reaction proceeds because ΔS°total is too small", isCorrect: false }
    ],
    explanation: "* Both reactions are thermodynamically feasible with the same K = e^(50/8.31) ≈ 400.\n* Rate depends on activation energy, not thermodynamics.\n* Reaction A (Eₐ = 20 kJ mol⁻¹): many molecules have sufficient energy at room temperature — fast reaction.\n* Reaction B (Eₐ = 200 kJ mol⁻¹): very few molecules have sufficient energy — kinetically stable, needs a catalyst or high temperature.\n* This illustrates the fundamental difference between thermodynamic feasibility and kinetic stability."
  },
  {
    id: "EDEXCEL-AL-U4-L3-MEDIUM-20260803-36",
    question: "The relation between Kp and Kc is given by: Kp = Kc(0.0821 T)^(Δn). For the following equilibrium at 500 K:\n2P(g) + Q(g) ⇌ R(g)\nWhat is the value of the exponent Δn?",
    options: [
      { text: "-2", isCorrect: true },
      { text: "+2", isCorrect: false },
      { text: "-1", isCorrect: false },
      { text: "+1", isCorrect: false }
    ],
    explanation: "* The term Δn represents the change in the number of moles of gaseous products minus gaseous reactants.\n* For the equation: 2P(g) + Q(g) ⇌ R(g), the number of gaseous product moles is 1 (from R).\n* The number of gaseous reactant moles is 2 + 1 = 3 (from 2P and Q).\n* Therefore, Δn = 1 - 3 = -2."
  },
  {
    id: "EDEXCEL-AL-U4-L3-HARD-20260803-37",
    question: "Consider the equilibrium reaction: H₂(g) + I₂(g) ⇌ 2HI(g). In a 1.0 dm³ container, the equilibrium concentrations determined from a reaction graph are [HI] = 3.5 × 10⁻³ mol dm⁻³, [H₂] = [I₂] = 0.35 × 10⁻³ mol dm⁻³. Calculate Kc for this reaction.",
    options: [
      { text: "100", isCorrect: true },
      { text: "10", isCorrect: false },
      { text: "100 dm³ mol⁻¹", isCorrect: false },
      { text: "10 dm³ mol⁻¹", isCorrect: false }
    ],
    explanation: "* Write the Kc expression: Kc = [HI]² / ([H₂][I₂]).\n* Substitute the equilibrium values: Kc = (3.5 × 10⁻³)² / ((0.35 × 10⁻³) × (0.35 × 10⁻³)).\n* Calculate the quotient: Kc = (1.225 × 10⁻⁵) / (1.225 × 10⁻⁷) = 100.\n* In this reaction, Δn = 2 - (1 + 1) = 0, so the units cancel out completely, making Kc unitless."
  },
  {
    id: "EDEXCEL-AL-U4-L3-HARD-20260803-38",
    question: "The equilibrium constant K for a reaction at 300 K is 2.50 × 10⁴. Using the relation ΔS°total = R ln K (where R = 8.31 J mol⁻¹ K⁻¹), calculate the total entropy change for the reaction.",
    options: [
      { text: "+84.1 J mol⁻¹ K⁻¹", isCorrect: true },
      { text: "-84.1 J mol⁻¹ K⁻¹", isCorrect: false },
      { text: "+25.2 J mol⁻¹ K⁻¹", isCorrect: false },
      { text: "+198.4 J mol⁻¹ K⁻¹", isCorrect: false }
    ],
    explanation: "* Substitute K and R values into the equation: ΔS°total = R ln K.\n* Calculate natural log: ln(2.50 × 10⁴) = ln(25000) ≈ 10.1266.\n* Multiply by the gas constant: ΔS°total = 8.31 × 10.1266 ≈ +84.15 J mol⁻¹ K⁻¹.\n* The positive total entropy change confirms that the reaction is thermodynamically spontaneous at this temperature."
  },
  {
    id: "EDEXCEL-AL-U4-L3-MEDIUM-20260803-39",
    question: "For the exothermic industrial reaction: 2P(g) + Q(g) ⇌ R(g) (ΔH < 0), thermodynamics predicts the highest yield of R(g) is achieved at low temperatures. Why is a high compromise temperature used industrially instead?",
    options: [
      { text: "To increase the rate of reaction to make the process commercially viable", isCorrect: true },
      { text: "To shift the equilibrium position to the right to increase the yield of R", isCorrect: false },
      { text: "To increase the activation energy of the forward reaction", isCorrect: false },
      { text: "To increase the value of Kp for this exothermic reaction", isCorrect: false }
    ],
    explanation: "* Although a lower temperature shifts the equilibrium to the product side, the rate of reaction would be too slow.\n* A high compromise temperature provides react gas molecules with higher kinetic energy, leading to more frequent and successful collisions.\n* This allows the system to reach equilibrium quickly enough to be profitable, despite a slightly lower yield."
  },
  {
    id: "EDEXCEL-AL-U4-L3-HARD-20260803-40",
    question: "Consider the equilibrium reaction: CH₄(g) + H₂O(g) ⇌ CO(g) + 3H₂(g) carried out at 2.0 atm pressure. At equilibrium, the amounts are: CH₄ = 0.80 mol, H₂O = 0.80 mol, CO = 1.20 mol, and H₂ = 3.60 mol. Calculate the value and units of Kp.",
    options: [
      { text: "8.54 atm²", isCorrect: true },
      { text: "4.27 atm²", isCorrect: false },
      { text: "8.54 atm⁻²", isCorrect: false },
      { text: "2.14 (no units)", isCorrect: false }
    ],
    explanation: "* Calculate total number of moles at equilibrium: Ntotal = 0.80 + 0.80 + 1.20 + 3.60 = 6.40 mol.\n* Find mole fractions (χ = n / Ntotal):\n  * χ(CH₄) = χ(H₂O) = 0.80 / 6.40 = 0.125\n  * χ(CO) = 1.20 / 6.40 = 0.1875\n  * χ(H₂) = 3.60 / 6.40 = 0.5625\n* Determine partial pressures (p = χ × Ptotal, where Ptotal = 2.0 atm):\n  * p(CH₄) = p(H₂O) = 0.125 × 2.0 = 0.25 atm\n  * p(CO) = 0.1875 × 2.0 = 0.375 atm\n  * p(H₂) = 0.5625 × 2.0 = 1.125 atm\n* Substitute into the Kp expression: Kp = (p(CO) × p(H₂)³) / (p(CH₄) × p(H₂O))\n  * Kp = (0.375 × 1.125³) / (0.25 × 0.25) = (0.375 × 1.4238) / 0.0625 = 0.5339 / 0.0625 ≈ 8.54\n* Determine units: (atm × atm³) / (atm × atm) = atm²"
  }
];
