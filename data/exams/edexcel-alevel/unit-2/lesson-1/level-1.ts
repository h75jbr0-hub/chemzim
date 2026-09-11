import { Question } from '../../../types';

export const level1Questions: Question[] = [
  {
    id: "ex_ed_u2_l1_lv1_1-2026",
    question: "Which of the following describes an exothermic chemical reaction?",
    options: [
      { text: "Enthalpy of products is greater than enthalpy of reactants (ΔH is positive)" },
      { text: "Thermal energy is transferred from the system to the surroundings, causing the temperature of the surroundings to increase (ΔH is negative)", isCorrect: true },
      { text: "Chemical bonds are broken without forming any new bonds" },
      { text: "The reaction absorbs heat energy from the surroundings" }
    ],
    correctAnswer: 1,
    explanation: "* In an exothermic reaction, total enthalpy of reactants exceeds that of products.\n* Heat is released to the surroundings, resulting in a negative enthalpy change ($\\Delta H < 0$) and a temperature rise.",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Jan 2025 Paper 1 Q1",
    createdAt: "2026-07-03T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l1_lv1_2-2026",
    question: "What are the standard conditions of temperature and pressure (STP / standard thermodynamic conditions) for measuring standard enthalpy changes (ΔH°)?",
    options: [
      { text: "273 K (0 °C) and 100 kPa (1 bar)" },
      { text: "298 K (25 °C) and 100 kPa (1 bar / 1 atm)", isCorrect: true },
      { text: "300 K and 200 kPa" },
      { text: "0 K and 100 kPa" }
    ],
    correctAnswer: 1,
    explanation: "* Standard thermodynamic enthalpy changes ($\\Delta H^\\theta$) are defined at a temperature of $298\\text{ K}$ ($25\\text{ }^\\circ\\text{C}$) and standard pressure of $100\\text{ kPa}$ (or $1\\text{ atm}$), with solutions at $1.00\\text{ mol dm}^{-3}$.",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / June 2026 Paper 1 Q2",
    createdAt: "2026-07-03T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l1_lv1_3-2026",
    question: "Which equation correctly represents the standard enthalpy change of formation (ΔH_f°) of liquid ethanol, C₂H₅OH(l)?",
    options: [
      { text: "2C(s) + 3H₂(g) + ½O₂(g) → C₂H₅OH(l)", isCorrect: true },
      { text: "2C(g) + 6H(g) + O(g) → C₂H₅OH(l)" },
      { text: "C₂H₄(g) + H₂O(l) → C₂H₅OH(l)" },
      { text: "4C(s) + 6H₂(g) + O₂(g) → 2C₂H₅OH(l)" }
    ],
    correctAnswer: 0,
    explanation: "* Standard enthalpy change of formation ($\\Delta H_f^\\theta$) is the enthalpy change when ONE mole of a compound is formed from its constituent elements in their standard states under standard conditions: $2\\text{C(s)} + 3\\text{H}_2\\text{(g)} + \\frac{1}{2}\\text{O}_2\\text{(g)} \\rightarrow \\text{C}_2\\text{H}_5\\text{OH(l)}$.",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Jan 2025 Paper 1 Q1",
    createdAt: "2026-07-04T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l1_lv1_4-2026",
    question: "Which equation represents the standard enthalpy change of combustion (ΔH_c°) of methane gas, CH₄(g)?",
    options: [
      { text: "CH₄(g) + O₂(g) → CO(g) + 2H₂O(l)" },
      { text: "CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l)", isCorrect: true },
      { text: "CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(g)" },
      { text: "2CH₄(g) + 4O₂(g) → 2CO₂(g) + 4H₂O(l)" }
    ],
    correctAnswer: 1,
    explanation: "* Standard enthalpy of combustion is the enthalpy change when ONE mole of a substance burns completely in excess oxygen under standard conditions, with all reactants and products in standard states (water must be liquid $\\text{H}_2\\text{O(l)}$).",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Jan 2025 Paper 1 Q2",
    createdAt: "2026-07-04T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l1_lv1_5-2026",
    question: "What formula is used to calculate the heat energy transferred ($q$) to or from a solution in a calorimetry experiment?",
    options: [
      { text: "q = m / (c × ΔT)" },
      { text: "q = m × c × ΔT", isCorrect: true },
      { text: "q = n × ΔH" },
      { text: "q = p × V" }
    ],
    correctAnswer: 1,
    explanation: "* Heat transferred is calculated using $q = mc\\Delta T$, where $m$ is the mass of solution, $c$ is the specific heat capacity (usually $4.18\\text{ J g}^{-1}\\text{ K}^{-1}$ for water), and $\\Delta T$ is the temperature change.",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / June 2025 Paper 1 Q3",
    createdAt: "2026-07-05T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l1_lv1_6-2026",
    question: "Why is the process of breaking a chemical covalent bond always endothermic (ΔH > 0)?",
    options: [
      { text: "Energy must be supplied to overcome the electrostatic attraction between the shared electrons and the nuclei of the bonded atoms", isCorrect: true },
      { text: "Bond breaking produces cold ions" },
      { text: "Electrons lose kinetic energy" },
      { text: "The surrounding pressure increases" }
    ],
    correctAnswer: 0,
    explanation: "* Chemical bonds are attractive electrostatic forces.\n* Overcoming these attractive forces always requires an input of energy ($\\text{Endothermic}, \\Delta H > 0$). Bond making releases energy ($\\text{Exothermic}$).",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Jan 2025 Paper 1 Q2",
    createdAt: "2026-07-05T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l1_lv1_7-2026",
    question: "What is Hess's Law?",
    options: [
      { text: "The total enthalpy change for a chemical reaction is independent of the route taken, provided the initial and final states are identical", isCorrect: true },
      { text: "The rate of a chemical reaction is proportional to temperature" },
      { text: "Enthalpy change depends on the type of catalyst used" },
      { text: "The volume of a gas is directly proportional to temperature at constant pressure" }
    ],
    correctAnswer: 0,
    explanation: "* Hess's Law states that the total enthalpy change accompanying a chemical transformation is constant and independent of the pathway or number of intermediate steps taken.",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Jan 2025 Paper 1 Q3",
    createdAt: "2026-07-06T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l1_lv1_8-2026",
    question: "What is the standard enthalpy change of formation (ΔH_f°) for any pure chemical element in its standard physical state (e.g., O₂(g), C(graphite), Na(s))?",
    options: [
      { text: "-100 kJ mol⁻¹" },
      { text: "0 kJ mol⁻¹", isCorrect: true },
      { text: "+100 kJ mol⁻¹" },
      { text: "+298 kJ mol⁻¹" }
    ],
    correctAnswer: 1,
    explanation: "* By thermodynamic definition, the standard enthalpy of formation of an element in its most stable standard physical state is exactly **$0\\text{ kJ mol}^{-1}$**.",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / June 2026 Paper 1 Q4",
    createdAt: "2026-07-06T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l1_lv1_9-2026",
    question: "In an enthalpy profile diagram for an endothermic reaction, how are the activation energy ($E_a$) and enthalpy change ($\\Delta H$) represented?",
    options: [
      { text: "Both $E_a$ and $\\Delta H$ point downwards from the reactants level" },
      { text: "Both $E_a$ and $\\Delta H$ point upwards from the reactants level", isCorrect: true },
      { text: "$E_a$ points upwards to the transition state, while $\\Delta H$ points downwards to the products" },
      { text: "$E_a$ points downwards, while $\\Delta H$ points upwards" }
    ],
    correctAnswer: 1,
    explanation: "* For an endothermic reaction, products are at a higher energy level than reactants, so the enthalpy change ($\\Delta H$) points upwards.\n* The activation energy ($E_a$) is the minimum energy required to start the reaction, pointing from the reactants up to the peak (transition state).",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / June 2025 Paper 1 Q9",
    createdAt: "2026-07-15T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l1_lv1_10-2026",
    question: "Which of the following defines the term 'mean bond enthalpy'?",
    options: [
      { text: "The energy required to break one mole of a specific covalent bond in a solid compound under standard conditions" },
      { text: "The average energy required to break one mole of a specific covalent bond in a range of gaseous molecules", isCorrect: true },
      { text: "The energy released when one mole of gaseous atoms form a covalent bond at $298\\text{ K}$" },
      { text: "The mean enthalpy change when one mole of a substance is formed from its gaseous elements" }
    ],
    correctAnswer: 1,
    explanation: "* Mean bond enthalpy is specifically defined as the average enthalpy change when one mole of a particular type of covalent bond is broken in gaseous molecules under standard conditions.",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Jan 2025 Paper 1 Q9",
    createdAt: "2026-07-15T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l1_lv1_11-2026",
    question: "Which equation represents the standard enthalpy change of neutralization ($\\Delta H_{\\text{neut}}^\\circ$)?",
    options: [
      { text: "$\\text{H}^+\\text{(aq)} + \\text{OH}^-\\text{(aq)} \\rightarrow \\text{H}_2\\text{O(l)}$", isCorrect: true },
      { text: "$\\text{HCl(aq)} + \\text{NaOH(aq)} \\rightarrow \\text{NaCl(aq)} + \\text{H}_2\\text{O(g)}$" },
      { text: "$\\text{H}_2\\text{(g)} + \\frac{1}{2}\\text{O}_2\\text{(g)} \\rightarrow \\text{H}_2\\text{O(l)}$" },
      { text: "$\\text{H}^+\\text{(aq)} + \\text{OH}^-\\text{(aq)} \\rightarrow \\text{H}_2\\text{O(aq)}$" }
    ],
    correctAnswer: 0,
    explanation: "* The standard enthalpy of neutralization is the enthalpy change when solutions of an acid and alkali react to form ONE mole of liquid water under standard conditions: $\\text{H}^+\\text{(aq)} + \\text{OH}^-\\text{(aq)} \\rightarrow \\text{H}_2\\text{O(l)}$.",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Jan 2025 Paper 1 Q7",
    createdAt: "2026-07-16T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l1_lv1_12-2026",
    question: "Which of the following elements is NOT in its standard physical state under standard thermodynamic conditions ($298\\text{ K}$, $100\\text{ kPa}$)?",
    options: [
      { text: "$\\text{Br}_2\\text{(l)}$" },
      { text: "$\\text{I}_2\\text{(g)}$", isCorrect: true },
      { text: "$\\text{C(graphite)}$" },
      { text: "$\\text{N}_2\\text{(g)}$" }
    ],
    correctAnswer: 1,
    explanation: "* Iodine is a solid ($\\text{I}_2\\text{(s)}$) under standard thermodynamic conditions of $298\\text{ K}$ and $100\\text{ kPa}$, not a gas.",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / June 2026 Paper 1 Q10",
    createdAt: "2026-07-16T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l1_lv1_13-2026",
    question: "What is the sign of the enthalpy change ($\\Delta H$) for bond breaking and bond making processes?",
    options: [
      { text: "Bond breaking is exothermic ($\\Delta H < 0$) and bond making is endothermic ($\\Delta H > 0$)" },
      { text: "Bond breaking is endothermic ($\\Delta H > 0$) and bond making is exothermic ($\\Delta H < 0$)", isCorrect: true },
      { text: "Both processes are always endothermic ($\\Delta H > 0$)" },
      { text: "Both processes are always exothermic ($\\Delta H < 0$)" }
    ],
    correctAnswer: 1,
    explanation: "* Breaking bonds is an endothermic process (requires energy input, $\\Delta H > 0$).\n* Forming new bonds is an exothermic process (releases energy, $\\Delta H < 0$).",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Jan 2025 Paper 1 Q10",
    createdAt: "2026-07-17T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l1_lv1_14-2026",
    question: "In a calorimetry calculation, how is the temperature change ($\\Delta T$) defined?",
    options: [
      { text: "$\\Delta T = T_{\\text{final}} - T_{\\text{initial}}$", isCorrect: true },
      { text: "$\\Delta T = T_{\\text{initial}} - T_{\\text{final}}$" },
      { text: "$\\Delta T = T_{\\text{final}} + T_{\\text{initial}}$" },
      { text: "$\\Delta T = T_{\\text{final}} \\times T_{\\text{initial}}$" }
    ],
    correctAnswer: 0,
    explanation: "* The temperature change is always defined as the final temperature minus the initial temperature ($\\Delta T = T_{\\text{final}} - T_{\\text{initial}}$).",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Jan 2025 Paper 1 Q8",
    createdAt: "2026-07-17T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l1_lv1_15-2026",
    question: "Which of the following standard enthalpy changes is always negative (exothermic)?",
    options: [
      { text: "Enthalpy change of formation" },
      { text: "Enthalpy change of combustion", isCorrect: true },
      { text: "Enthalpy change of reaction" },
      { text: "Enthalpy change of atomisation" }
    ],
    correctAnswer: 1,
    explanation: "* Enthalpy change of combustion is always exothermic (negative) because burning a fuel in oxygen always releases heat energy.\n* Enthalpies of formation and reaction can be positive or negative, and atomisation is always endothermic (positive).",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / June 2025 Paper 1 Q11",
    createdAt: "2026-07-18T10:00:00Z"
  }
];


