import { Question } from '../../../types';

export const level2Questions: Question[] = [
  {
    id: "ex_ed_u2_l4_lv2_1-2026",
    question: "When the temperature of a gaseous reaction mixture is increased by only 10 K (e.g., from 300 K to 310 K), the rate of reaction approximately doubles. What is the fundamental reason for this dramatic rate increase according to the Maxwell-Boltzmann distribution?",
    options: [
      { text: "The total collision frequency between particles doubles" },
      { text: "The proportion of particles with kinetic energy greater than or equal to the activation energy (E ≥ E_a) increases significantly", isCorrect: true },
      { text: "The activation energy of the reaction is halved" },
      { text: "The enthalpy change of the reaction becomes twice as exothermic" }
    ],
    correctAnswer: 1,
    explanation: "* A 10 K temperature rise increases collision frequency by only about $1-2\\%$.\n* However, it broadens and shifts the Maxwell-Boltzmann curve to the right, dramatically increasing the area under the curve beyond $E_a$ (substantially increasing the fraction of collisions with $E \\ge E_a$).",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Oct 2025 Paper 1 Q25",
    createdAt: "2026-08-06T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l4_lv2_2-2026",
    question: "For the industrial synthesis of ammonia via the Haber process:\n$\\text{N}_2\\text{(g)} + 3\\text{H}_2\\text{(g)} \\rightleftharpoons 2\\text{NH}_3\\text{(g)} \\quad \\Delta H = -92\\text{ kJ mol}^{-1}$\nWhy is an intermediate temperature of 400–450 °C used industrially rather than a very low temperature (which gives higher theoretical equilibrium yield) or a very high temperature?",
    options: [
      { text: "Ammonia decomposes completely below 400 °C" },
      { text: "It provides an acceptable economic compromise between a reasonable rate of reaction and an acceptable equilibrium yield", isCorrect: true },
      { text: "Iron catalyst only works at exactly 450 °C" },
      { text: "Low temperature causes nitrogen to react with iron" }
    ],
    correctAnswer: 1,
    explanation: "* Because the forward reaction is exothermic, low temperature gives high equilibrium yield but an unacceptably slow rate.\n* A compromise temperature of $400-450\\text{ }^\\circ\\text{C}$ ensures a commercially viable rate of ammonia production in the presence of an iron catalyst.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / June 2026 Paper 1 Q26",
    createdAt: "2026-08-06T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l4_lv2_3-2026",
    question: "At a given temperature, the equilibrium concentrations for the reaction $2\\text{SO}_2\\text{(g)} + \\text{O}_2\\text{(g)} \\rightleftharpoons 2\\text{SO}_3\\text{(g)}$ are:\n$[\\text{SO}_2] = 0.20\\text{ mol dm}^{-3}$, $[\\text{O}_2] = 0.10\\text{ mol dm}^{-3}$, $[\\text{SO}_3] = 0.40\\text{ mol dm}^{-3}$.\nCalculate the numerical value and units of $K_c$.",
    options: [
      { text: "20.0 mol⁻¹ dm³" },
      { text: "40.0 mol⁻¹ dm³", isCorrect: true },
      { text: "40.0 mol dm⁻³" },
      { text: "10.0 dm⁶ mol⁻²" }
    ],
    correctAnswer: 1,
    explanation: "* $K_c = \\frac{[\\text{SO}_3]^2}{[\\text{SO}_2]^2[\\text{O}_2]} = \\frac{(0.40)^2}{(0.20)^2(0.10)} = \\frac{0.160}{0.040 \\times 0.10} = \\frac{0.160}{0.0040} = \\mathbf{40.0}$.\n* Units $= \\frac{(\\text{mol dm}^{-3})^2}{(\\text{mol dm}^{-3})^2(\\text{mol dm}^{-3})} = \\frac{1}{\\text{mol dm}^{-3}} = \\mathbf{\\text{mol}^{-1}\\text{ dm}^3}$.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Jan 2026 Paper 1 Q21",
    createdAt: "2026-08-07T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l4_lv2_4-2026",
    question: "How does the peak of the Maxwell-Boltzmann distribution curve change when the temperature of a gas sample is increased?",
    options: [
      { text: "The peak shifts to the right (higher energy) and becomes higher (taller)" },
      { text: "The peak shifts to the right (higher energy) and becomes lower (flatter)", isCorrect: true },
      { text: "The peak shifts to the left and becomes lower" },
      { text: "The peak remains at the exact same position" }
    ],
    correctAnswer: 1,
    explanation: "* At higher temperature, the average kinetic energy increases, so the most probable energy (peak position) shifts to the **right**.\n* Since the total area under the curve is fixed (constant number of particles), the peak must flatten and become **lower**.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Oct 2025 Paper 1 Q26",
    createdAt: "2026-08-07T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l4_lv2_5-2026",
    question: "In the reversible gaseous reaction: $\\text{PCl}_5\\text{(g)} \\rightleftharpoons \\text{PCl}_3\\text{(g)} + \\text{Cl}_2\\text{(g)} \\quad \\Delta H = +88\\text{ kJ mol}^{-1}$, which combination of conditions produces the MAXIMUM equilibrium yield of chlorine gas?",
    options: [
      { text: "High temperature and high pressure" },
      { text: "High temperature and low pressure", isCorrect: true },
      { text: "Low temperature and high pressure" },
      { text: "Low temperature and low pressure" }
    ],
    correctAnswer: 1,
    explanation: "* Forward reaction is endothermic ($\Delta H > 0$), so **high temperature** shifts equilibrium to the right.\n* Reactants have 1 mole of gas; products have $1 + 1 = 2\\text{ moles}$ of gas, so **low pressure** shifts equilibrium to the right (towards more moles of gas).",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / June 2025 Paper 1 Q27",
    createdAt: "2026-08-08T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l4_lv2_6-2026",
    question: "What is the distinction between a homogeneous catalyst and a heterogeneous catalyst?",
    options: [
      { text: "A homogeneous catalyst is always solid, while heterogeneous is liquid" },
      { text: "A homogeneous catalyst is in the same physical phase as the reactants (e.g., aqueous acid catalyst in liquid esterification), whereas a heterogeneous catalyst is in a different physical phase (e.g., solid iron in gaseous Haber process)", isCorrect: true },
      { text: "Heterogeneous catalysts alter the equilibrium constant Kc" },
      { text: "Homogeneous catalysts are permanently consumed during the reaction" }
    ],
    correctAnswer: 1,
    explanation: "* Phase alignment defines catalyst type: homogeneous = same phase (creates soluble intermediates); heterogeneous = different phase (provides a solid active surface for gas/liquid adsorption and reaction).",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Jan 2026 Paper 1 Q22",
    createdAt: "2026-08-08T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l4_lv2_7-2026",
    question: "Why does the Maxwell-Boltzmann distribution curve always start at the origin (0,0)?",
    options: [
      { text: "No particles can ever react at 0 K" },
      { text: "No gas molecules can have zero kinetic energy at any temperature above absolute zero", isCorrect: true },
      { text: "The total energy of the system is zero" },
      { text: "The activation energy starts at zero" }
    ],
    correctAnswer: 1,
    explanation: "* Kinetic energy is associated with motion.\n* In any gas sample at temperatures above absolute zero, all molecules are in constant motion, so no particles have exactly zero kinetic energy.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / June 2026 Paper 1 Q36",
    createdAt: "2026-08-23T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l4_lv2_8-2026",
    question: "Determine the units of the equilibrium constant $K_c$ for the reaction: $\\text{N}_2\\text{(g)} + 3\\text{H}_2\\text{(g)} \\rightleftharpoons 2\\text{NH}_3\\text{(g)}$.",
    options: [
      { text: "mol dm⁻³" },
      { text: "mol⁻¹ dm³" },
      { text: "mol⁻² dm⁶", isCorrect: true },
      { text: "no units" }
    ],
    correctAnswer: 2,
    explanation: "* $K_c = \\frac{[\\text{NH}_3]^2}{[\\text{N}_2][\\text{H}_2]^3}$.\n* Units $= \\frac{(\\text{mol dm}^{-3})^2}{(\\text{mol dm}^{-3})(\\text{mol dm}^{-3})^3} = \\frac{1}{(\\text{mol dm}^{-3})^2} = \\mathbf{\\text{mol}^{-2}\\text{ dm}^6}$.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Oct 2025 Paper 1 Q28",
    createdAt: "2026-08-24T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l4_lv2_9-2026",
    question: "For a gaseous system in equilibrium, what is the effect of adding an inert gas (like helium) at constant volume?",
    options: [
      { text: "The equilibrium shifts to the side with fewer gas moles" },
      { text: "The equilibrium shifts to the side with more gas moles" },
      { text: "There is no shift in the position of equilibrium because the concentrations and partial pressures of the reacting gases remain unchanged", isCorrect: true },
      { text: "The value of Kc increases" }
    ],
    correctAnswer: 2,
    explanation: "* Adding an inert gas at constant volume increases the total pressure, but it does not change the concentrations or partial pressures of the individual reacting species.\n* Therefore, it has no effect on the position of equilibrium.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Jan 2026 Paper 1 Q27",
    createdAt: "2026-08-24T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l4_lv2_10-2026",
    question: "How does a homogeneous catalyst differ from a heterogeneous catalyst in its mode of action?",
    options: [
      { text: "Homogeneous catalysts do not affect the activation energy" },
      { text: "A homogeneous catalyst reacts to form an intermediate compound which then decomposes to regenerate the catalyst, whereas a heterogeneous catalyst provides an active surface for adsorption", isCorrect: true },
      { text: "Heterogeneous catalysts dissolve in the reacting mixture" },
      { text: "Homogeneous catalysts are consumed completely" }
    ],
    correctAnswer: 1,
    explanation: "* Homogeneous catalysts operate in the same phase, forming temporary coordinate species that decompose.\n* Heterogeneous catalysts provide a solid surface onto which reactant molecules are adsorbed, weakening bonds to facilitate reaction.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / June 2025 Paper 1 Q37",
    createdAt: "2026-08-25T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l4_lv2_11-2026",
    question: "Which of the following reaction profiles represents an endothermic reaction?",
    options: [
      { text: "A profile where products are at a lower energy level than reactants" },
      { text: "A profile where products are at a higher energy level than reactants, resulting in a positive ΔH", isCorrect: true },
      { text: "A profile with no activation energy barrier" },
      { text: "A profile where the catalyst is at the highest energy point" }
    ],
    correctAnswer: 1,
    explanation: "* In an endothermic reaction, heat energy is absorbed from the surroundings, meaning the chemical potential energy of the products is higher than that of the starting reactants ($\\Delta H > 0$).",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Oct 2025 Paper 1 Q29",
    createdAt: "2026-08-25T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l4_lv2_12-2026",
    question: "For the gas-phase equilibrium: $\\text{H}_2\\text{(g)} + \\text{I}_2\\text{(g)} \\rightleftharpoons 2\\text{HI(g)}$, what is the effect of increasing the pressure of the system?",
    options: [
      { text: "Equilibrium shifts to the right" },
      { text: "Equilibrium shifts to the left" },
      { text: "There is no shift in the position of equilibrium, but the rate of reaching equilibrium increases", isCorrect: true },
      { text: "Kc decreases" }
    ],
    correctAnswer: 2,
    explanation: "* Both sides of the equation contain exactly 2 moles of gas ($1+1=2$ vs $2$).\n* Changing the pressure does not shift the equilibrium position because neither side is favored.\n* However, the higher density of gas particles increases the collision frequency, which increases the rate at which equilibrium is reached.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Jan 2026 Paper 1 Q28",
    createdAt: "2026-08-26T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l4_lv2_13-2026",
    question: "What is the equilibrium constant ($K_c$) expression for the thermal decomposition of solid calcium carbonate: $\\text{CaCO}_3\\text{(s)} \\rightleftharpoons \\text{CaO(s)} + \\text{CO}_2\\text{(g)}$?",
    options: [
      { text: "Kc = [CaO][CO₂] / [CaCO₃]" },
      { text: "Kc = [CO₂]", isCorrect: true },
      { text: "Kc = [CaCO₃] / [CaO][CO₂]" },
      { text: "Kc = 1 / [CO₂]" }
    ],
    correctAnswer: 1,
    explanation: "* The concentration of pure solids (like $\\text{CaCO}_3$ and $\\text{CaO}$) is constant and is incorporated into the equilibrium constant.\n* Therefore, they are omitted from the $K_c$ expression, leaving only gaseous species: $K_c = [\\text{CO}_2]$.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / June 2026 Paper 1 Q38",
    createdAt: "2026-08-26T10:00:00Z"
  }
];

