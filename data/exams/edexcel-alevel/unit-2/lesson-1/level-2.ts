import { Question } from '../../../types';

export const level2Questions: Question[] = [
  {
    id: "ex_ed_u2_l1_lv2_1-2026",
    question: "In a coffee-cup calorimetry experiment, $50.0\\text{ cm}^3$ of $1.00\\text{ mol dm}^{-3}\\text{ HCl}$ is neutralized by $50.0\\text{ cm}^3$ of $1.00\\text{ mol dm}^{-3}\\text{ NaOH}$. The temperature of the mixture rises by $6.50\\text{ }^\\circ\\text{C}$. Assuming density of solution $= 1.00\\text{ g cm}^{-3}$ and $c = 4.18\\text{ J g}^{-1}\\text{ K}^{-1}$, calculate the molar enthalpy change of neutralization ($\\Delta H_{\\text{neut}}$) in $\\text{kJ mol}^{-1}$.",
    options: [
      { text: "-27.2 kJ mol⁻¹" },
      { text: "-54.3 kJ mol⁻¹", isCorrect: true },
      { text: "-108.7 kJ mol⁻¹" },
      { text: "+54.3 kJ mol⁻¹" }
    ],
    correctAnswer: 1,
    explanation: "* Total mass of solution $m = 50.0 + 50.0 = 100.0\\text{ g}$.\n* Heat released $q = mc\\Delta T = 100.0 \\times 4.18 \\times 6.50 = 2717\\text{ J} = 2.717\\text{ kJ}$.\n* Moles of $\\text{H}_2\\text{O}$ formed $n = c \\times V = 1.00 \\times 0.0500 = 0.0500\\text{ mol}$.\n* $\\Delta H_{\\text{neut}} = -\\frac{q}{n} = -\\frac{2.717}{0.0500} = -54.34\\text{ kJ mol}^{-1} \\approx \\mathbf{-54.3\\text{ kJ mol}^{-1}}$.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Jan 2025 Paper 1 Q4",
    createdAt: "2026-07-07T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l1_lv2_2-2026",
    question: "Given the standard enthalpies of formation:\n$\\Delta H_f^\\circ[\\text{CO}_2\\text{(g)}] = -393.5\\text{ kJ mol}^{-1}$,\n$\\Delta H_f^\\circ[\\text{H}_2\\text{O(l)}] = -285.8\\text{ kJ mol}^{-1}$,\n$\\Delta H_f^\\circ[\\text{C}_2\\text{H}_6\\text{(g)}] = -84.7\\text{ kJ mol}^{-1}$.\nCalculate the standard enthalpy of combustion ($\\Delta H_c^\\circ$) of ethane, $\\text{C}_2\\text{H}_6\\text{(g)}$.",
    options: [
      { text: "-1559.7 kJ mol⁻¹", isCorrect: true },
      { text: "-1475.0 kJ mol⁻¹" },
      { text: "-764.0 kJ mol⁻¹" },
      { text: "-3119.4 kJ mol⁻¹" }
    ],
    correctAnswer: 0,
    explanation: "* Combustion equation: $\\text{C}_2\\text{H}_6\\text{(g)} + 3.5\\text{O}_2\\text{(g)} \\rightarrow 2\\text{CO}_2\\text{(g)} + 3\\text{H}_2\\text{O(l)}$.\n* $\\Delta H_c^\\circ = \\sum \\Delta H_f^\\circ(\\text{products}) - \\sum \\Delta H_f^\\circ(\\text{reactants})$\n* $\\Delta H_c^\\circ = [2(-393.5) + 3(-285.8)] - [-84.7] = [-787.0 - 857.4] + 84.7 = -1644.4 + 84.7 = \\mathbf{-1559.7\\text{ kJ mol}^{-1}}$.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / June 2026 Paper 1 Q5",
    createdAt: "2026-07-07T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l1_lv2_3-2026",
    question: "Using the mean bond enthalpy data below:\n$E(\\text{C}-\\text{C}) = 347\\text{ kJ mol}^{-1}$\n$E(\\text{C}=\\text{C}) = 612\\text{ kJ mol}^{-1}$\n$E(\\text{C}-\\text{H}) = 413\\text{ kJ mol}^{-1}$\n$E(\\text{H}-\\text{H}) = 436\\text{ kJ mol}^{-1}$\nCalculate the enthalpy change for the catalytic hydrogenation of ethene: $\\text{C}_2\\text{H}_4\\text{(g)} + \\text{H}_2\\text{(g)} \\rightarrow \\text{C}_2\\text{H}_6\\text{(g)}$.",
    options: [
      { text: "-124 kJ mol⁻¹", isCorrect: true },
      { text: "+124 kJ mol⁻¹" },
      { text: "-248 kJ mol⁻¹" },
      { text: "-537 kJ mol⁻¹" }
    ],
    correctAnswer: 0,
    explanation: "* Bonds broken: $1 \\times (\\text{C}=\\text{C}) + 1 \\times (\\text{H}-\\text{H}) = 612 + 436 = +1048\\text{ kJ}$.\n* Bonds formed: $1 \\times (\\text{C}-\\text{C}) + 2 \\times (\\text{C}-\\text{H}) = 347 + 2(413) = 347 + 826 = 1173\\text{ kJ}$.\n* $\\Delta H = \\text{Bonds Broken} - \\text{Bonds Formed} = 1048 - 1173 = \\mathbf{-124\\text{ kJ mol}^{-1}}$.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Jan 2025 Paper 1 Q3",
    createdAt: "2026-07-08T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l1_lv2_4-2026",
    question: "Why do experimental values of enthalpy changes calculated using mean bond enthalpies often differ slightly from values calculated using standard enthalpies of formation?",
    options: [
      { text: "Mean bond enthalpies are measured in the solid state" },
      { text: "Mean bond enthalpies are averages calculated across a wide variety of different molecular environments and assume gaseous covalent species", isCorrect: true },
      { text: "Hess's Law is only an approximation" },
      { text: "Calorimeters always lose all their heat" }
    ],
    correctAnswer: 1,
    explanation: "* Mean bond enthalpies are averaged values obtained from many different chemical compounds in the gaseous state, whereas actual bond strengths vary depending on neighboring chemical environments.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Jan 2025 Paper 1 Q5",
    createdAt: "2026-07-08T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l1_lv2_5-2026",
    question: "In a spirit burner experiment to determine the enthalpy of combustion of liquid ethanol, which of the following is the most significant source of experimental error leading to a less negative calculated value of ΔH_c?",
    options: [
      { text: "The balance was too sensitive" },
      { text: "Significant heat loss to the surrounding air and incomplete combustion of the alcohol fuel", isCorrect: true },
      { text: "Water boiling away completely" },
      { text: "The specific heat capacity of water changing to zero" }
    ],
    correctAnswer: 1,
    explanation: "* Heat loss to the air/calorimeter draft and incomplete combustion (soot formation) mean less heat is absorbed by the water, yielding an experimental $\\Delta H_c$ value substantially lower (less exothermic) than the theoretical data value.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / June 2025 Paper 1 Q6",
    createdAt: "2026-07-09T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l1_lv2_6-2026",
    question: "Why cannot the standard enthalpy change of formation of carbon monoxide ($\\text{C(s)} + \\frac{1}{2}\\text{O}_2\\text{(g)} \\rightarrow \\text{CO(g)}$) be measured directly in a simple calorimeter?",
    options: [
      { text: "Carbon is unreactive towards oxygen" },
      { text: "Burning carbon in a limited oxygen supply inevitably forms an unpreventable mixture of both carbon monoxide (CO) and carbon dioxide (CO₂)", isCorrect: true },
      { text: "Carbon monoxide is a solid at room temperature" },
      { text: "The reaction is extremely endothermic" }
    ],
    correctAnswer: 1,
    explanation: "* Carbon cannot be burned to form pure $\\text{CO}$ exclusively; some $\\text{CO}_2$ always forms simultaneously.\n* Therefore, $\\Delta H_f^\\circ[\\text{CO}]$ must be determined indirectly using Hess's Law and the enthalpies of combustion of $\\text{C}$ and $\\text{CO}$.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Jan 2025 Paper 1 Q4",
    createdAt: "2026-07-09T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l1_lv2_7-2026",
    question: "In a flame calorimetry experiment, $0.46\\text{ g}$ of ethanol ($M_r = 46.0$) is burned to heat $100\\text{ g}$ of water. The temperature of the water rises by $24.0\\text{ }^\\circ\\text{C}$. Taking $c = 4.18\\text{ J g}^{-1}\\text{ K}^{-1}$, calculate the experimental enthalpy change of combustion of ethanol ($\\Delta H_c$) in $\\text{kJ mol}^{-1}$.",
    options: [
      { text: "-1003 kJ mol⁻¹", isCorrect: true },
      { text: "-10.03 kJ mol⁻¹" },
      { text: "-2006 kJ mol⁻¹" },
      { text: "+1003 kJ mol⁻¹" }
    ],
    correctAnswer: 0,
    explanation: "* Heat absorbed by water $q = mc\\Delta T = 100\\text{ g} \\times 4.18\\text{ J g}^{-1}\\text{ K}^{-1} \\times 24.0\\text{ K} = 10032\\text{ J} = 10.032\\text{ kJ}$.\n* Moles of ethanol burned $n = \\frac{\\text{mass}}{M_r} = \\frac{0.46}{46.0} = 0.010\\text{ mol}$.\n* Molar enthalpy change $\\Delta H_c = -\\frac{q}{n} = -\\frac{10.032\\text{ kJ}}{0.010\\text{ mol}} = \\mathbf{-1003.2\\text{ kJ mol}^{-1}} \\approx \\mathbf{-1003\\text{ kJ mol}^{-1}}$.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / June 2026 Paper 1 Q12",
    createdAt: "2026-07-20T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l1_lv2_8-2026",
    question: "Given the standard enthalpy of reaction:\n$2\\text{Fe(s)} + \\frac{3}{2}\\text{O}_2\\text{(g)} \\rightarrow \\text{Fe}_2\\text{O}_3\\text{(s)} \\quad \\Delta H_r^\\circ = -824.2\\text{ kJ mol}^{-1}$\nWhat is the standard enthalpy change of formation ($\\Delta H_f^\\circ$) of $\\text{Fe}_2\\text{O}_3\\text{(s)}$ in $\\text{kJ mol}^{-1}$?",
    options: [
      { text: "-824.2 kJ mol⁻¹", isCorrect: true },
      { text: "-412.1 kJ mol⁻¹" },
      { text: "+824.2 kJ mol⁻¹" },
      { text: "-1648.4 kJ mol⁻¹" }
    ],
    correctAnswer: 0,
    explanation: "* The reaction represents the formation of exactly ONE mole of $\\text{Fe}_2\\text{O}_3\\text{(s)}$ from its constituent elements in their standard states.\n* Therefore, $\\Delta H_f^\\circ[\\text{Fe}_2\\text{O}_3\\text{(s)}] = \\Delta H_r^\\circ = \\mathbf{-824.2\\text{ kJ mol}^{-1}}$.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Jan 2025 Paper 1 Q11",
    createdAt: "2026-07-20T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l1_lv2_9-2026",
    question: "Using the following bond enthalpies:\n$E(\\text{H}-\\text{H}) = 436\\text{ kJ mol}^{-1}$\n$E(\\text{Cl}-\\text{Cl}) = 242\\text{ kJ mol}^{-1}$\n$E(\\text{H}-\\text{Cl}) = 431\\text{ kJ mol}^{-1}$\nCalculate the standard enthalpy change of reaction for: $\\text{H}_2\\text{(g)} + \\text{Cl}_2\\text{(g)} \\rightarrow 2\\text{HCl(g)}$.",
    options: [
      { text: "-184 kJ mol⁻¹", isCorrect: true },
      { text: "-92 kJ mol⁻¹" },
      { text: "+184 kJ mol⁻¹" },
      { text: "+92 kJ mol⁻¹" }
    ],
    correctAnswer: 0,
    explanation: "* Bonds broken: $1 \\times (\\text{H}-\\text{H}) + 1 \\times (\\text{Cl}-\\text{Cl}) = 436 + 242 = +678\\text{ kJ}$.\n* Bonds formed: $2 \\times (\\text{H}-\\text{Cl}) = 2 \\times 431 = 862\\text{ kJ}$.\n* $\\Delta H = \\text{Bonds Broken} - \\text{Bonds Formed} = 678 - 862 = \\mathbf{-184\\text{ kJ mol}^{-1}}$.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Jan 2025 Paper 1 Q9",
    createdAt: "2026-07-21T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l1_lv2_10-2026",
    question: "When $25.0\\text{ cm}^3$ of $2.00\\text{ mol dm}^{-3}\\text{ HNO}_3$ is mixed with $25.0\\text{ cm}^3$ of $2.00\\text{ mol dm}^{-3}\\text{ KOH}$, the temperature rises by $13.0\\text{ }^\\circ\\text{C}$. If the experiment is repeated using $50.0\\text{ cm}^3$ of each solution at the same concentration, what will be the temperature rise?",
    options: [
      { text: "$6.5\\text{ }^\\circ\\text{C}$" },
      { text: "$13.0\\text{ }^\\circ\\text{C}$", isCorrect: true },
      { text: "$26.0\\text{ }^\\circ\\text{C}$" },
      { text: "$5.2\\text{ }^\\circ\\text{C}$" }
    ],
    correctAnswer: 1,
    explanation: "* Doubling the volumes of both reactants doubles the moles of reactants, which doubles the heat energy released ($q$).\n* However, the total mass of the solution to be heated ($m$) is also doubled ($100\\text{ g}$ instead of $50\\text{ g}$).\n* Since $\\Delta T = \\frac{q}{mc}$, and both $q$ and $m$ are doubled, the ratio remains constant, so the temperature rise is unchanged at **$13.0\\text{ }^\\circ\\text{C}$**.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / June 2025 Paper 1 Q13",
    createdAt: "2026-07-21T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l1_lv2_11-2026",
    question: "Given the standard enthalpies of combustion:\n$\\Delta H_c^\\circ[\\text{C(graphite)}] = -393.5\\text{ kJ mol}^{-1}$\n$\\Delta H_c^\\circ[\\text{H}_2\\text{(g)}] = -285.8\\text{ kJ mol}^{-1}$\n$\\Delta H_c^\\circ[\\text{CH}_4\\text{(g)}] = -890.3\\text{ kJ mol}^{-1}$\nCalculate the standard enthalpy of formation ($\\Delta H_f^\\circ$) of methane gas, $\\text{CH}_4\\text{(g)}$.",
    options: [
      { text: "-74.8 kJ mol⁻¹", isCorrect: true },
      { text: "+74.8 kJ mol⁻¹" },
      { text: "-211.0 kJ mol⁻¹" },
      { text: "-1569.6 kJ mol⁻¹" }
    ],
    correctAnswer: 0,
    explanation: "* Target reaction: $\\text{C(s)} + 2\\text{H}_2\\text{(g)} \\rightarrow \\text{CH}_4\\text{(g)}$.\n* $\\Delta H_f^\\circ = \\sum \\Delta H_c^\\circ(\\text{reactants}) - \\sum \\Delta H_c^\\circ(\\text{products})$\n* $\\Delta H_f^\\circ = [\\Delta H_c^\\circ(\\text{C}) + 2\\Delta H_c^\\circ(\\text{H}_2)] - [\\Delta H_c^\\circ(\\text{CH}_4)]$\n* $\\Delta H_f^\\circ = [-393.5 + 2(-285.8)] - [-890.3] = [-393.5 - 571.6] + 890.3 = -965.1 + 890.3 = \\mathbf{-74.8\\text{ kJ mol}^{-1}}$.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Jan 2025 Paper 1 Q12",
    createdAt: "2026-07-22T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l1_lv2_12-2026",
    question: "When $4.25\\text{ g}$ of silver nitrate ($M_r = 170.0$) dissolves in $50.0\\text{ g}$ of water, the temperature drops by $3.50\\text{ }^\\circ\\text{C}$. Calculate the standard enthalpy change of solution ($\\Delta H_{\\text{soln}}$) of silver nitrate in $\\text{kJ mol}^{-1}$ (take $c = 4.18\\text{ J g}^{-1}\\text{ K}^{-1}$, mass $= 50.0\\text{ g}$).",
    options: [
      { text: "+29.3 kJ mol⁻¹", isCorrect: true },
      { text: "-29.3 kJ mol⁻¹" },
      { text: "+58.6 kJ mol⁻¹" },
      { text: "+31.8 kJ mol⁻¹" }
    ],
    correctAnswer: 0,
    explanation: "* Heat absorbed $q = mc\\Delta T = 50.0\\text{ g} \\times 4.18\\text{ J g}^{-1}\\text{ K}^{-1} \\times 3.50\\text{ K} = 731.5\\text{ J} = 0.7315\\text{ kJ}$.\n* Moles of $\\text{AgNO}_3$ $n = \\frac{\\text{mass}}{M_r} = \\frac{4.25}{170.0} = 0.0250\\text{ mol}$.\n* $\\Delta H_{\\text{soln}} = +\\frac{q}{n} = +\\frac{0.7315}{0.0250} = \\mathbf{+29.26\\text{ kJ mol}^{-1}} \\approx \\mathbf{+29.3\\text{ kJ mol}^{-1}}$. (Note: positive because temperature decreased).",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Jan 2025 Paper 1 Q10",
    createdAt: "2026-07-22T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l1_lv2_13-2026",
    question: "In a neutralization experiment, the temperature rise is recorded using a thermometer with an uncertainty of $\\pm 0.1\\text{ }^\\circ\\text{C}$ per reading. If the initial temperature was $20.2\\text{ }^\\circ\\text{C}$ and final temperature was $31.4\\text{ }^\\circ\\text{C}$, what is the percentage uncertainty in the temperature change?",
    options: [
      { text: "1.79%", isCorrect: true },
      { text: "0.89%" },
      { text: "1.61%" },
      { text: "2.12%" }
    ],
    correctAnswer: 0,
    explanation: "* Temperature change $\\Delta T = 31.4 - 20.2 = 11.2\\text{ }^\\circ\\text{C}$.\n* Since two readings are taken (initial and final), the absolute uncertainty in the change is $2 \\times 0.1 = \\pm 0.2\\text{ }^\\circ\\text{C}$.\n* Percentage uncertainty $= \\frac{\\text{absolute uncertainty}}{\\Delta T} \\times 100 = \\frac{0.2}{11.2} \\times 100 = \\mathbf{1.785\\%} \\approx \\mathbf{1.79\\%}$.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / June 2026 Paper 1 Q14",
    createdAt: "2026-07-23T10:00:00Z"
  }
];

