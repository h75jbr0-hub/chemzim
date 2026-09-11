import { Question } from '../../../types';

export const level3Questions: Question[] = [
  {
    id: "ex_ed_u4_l2_lv3_1-2026",
    question: "Using the Born-Haber cycle data below, calculate the experimental standard lattice energy ($\\Delta_{\\text{latt}}H^{\\ominus}$) of magnesium chloride ($\\text{MgCl}_2\\text{(s)}$):\n- $\\Delta_f H^{\\ominus}[\\text{MgCl}_2\\text{(s)}] = -641.8\\text{ kJ mol}^{-1}$\n- $\\Delta_{\\text{at}}H^{\\ominus}[\\text{Mg(s)}] = +147.1\\text{ kJ mol}^{-1}$\n- First ionization energy ($IE_1$) of $\\text{Mg} = +738.0\\text{ kJ mol}^{-1}$\n- Second ionization energy ($IE_2$) of $\\text{Mg} = +1451.0\\text{ kJ mol}^{-1}$\n- Bond dissociation enthalpy ($E[\\text{Cl}-\\text{Cl}]) = +244.2\\text{ kJ mol}^{-1}$\n- First electron affinity ($\\Delta_{\\text{ea1}}H$) of $\\text{Cl} = -348.6\\text{ kJ mol}^{-1}$",
    options: [
      { text: "-1926 kJ mol⁻¹" },
      { text: "-2526 kJ mol⁻¹", isCorrect: true },
      { text: "-3126 kJ mol⁻¹" },
      { text: "-3572 kJ mol⁻¹" }
    ],
    correctAnswer: 1,
    explanation: "* Enthalpy of gaseous ions from standard elements:\n  * $\\text{Mg(s)} \\rightarrow \\text{Mg}^{2+}\\text{(g)} + 2\\text{e}^- = +147.1 + 738.0 + 1451.0 = +2336.1\\text{ kJ mol}^{-1}$.\n  * $\\text{Cl}_2\\text{(g)} + 2\\text{e}^- \\rightarrow 2\\text{Cl}^-\\text{(g)} = +244.2 + 2(-348.6) = +244.2 - 697.2 = -453.0\\text{ kJ mol}^{-1}$.\n  * Total enthalpy of gaseous ions $= +2336.1 - 453.0 = +1883.1\\text{ kJ mol}^{-1}$.\n* $\\Delta_{\\text{latt}}H^\\ominus = \\Delta_f H^\\ominus - (\\text{Total gaseous ion formation}) = -641.8 - (+1883.1) = \\mathbf{-2524.9\\text{ kJ mol}^{-1}} \\approx \\mathbf{-2526\\text{ kJ mol}^{-1}}$.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Oct 2025 Paper 1 Q20",
    createdAt: "2026-10-07T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l2_lv3_2-2026",
    question: "When solid ammonium nitrate ($\\text{NH}_4\\text{NO}_3$) dissolves in water, the beaker becomes intensely cold to the touch (endothermic dissolution: $\\Delta_{\\text{sol}}H^{\\ominus} = +25.7\\text{ kJ mol}^{-1}$). Why does ammonium nitrate dissolve spontaneously at room temperature ($298\\text{ K}$) despite this endothermic enthalpy change?",
    options: [
      { text: "Because the activation energy is negative" },
      { text: "Dissolving one mole of rigid crystalline solid into freely moving hydrated ions produces a very large positive system entropy change (ΔS_sys > 0); at 298 K, TΔS_sys exceeds ΔH_sys, making ΔG_sys negative (and ΔS_total positive)", isCorrect: true },
      { text: "Because water forms covalent bonds with nitrate ions" },
      { text: "Because ammonium nitrate has zero lattice energy" }
    ],
    correctAnswer: 1,
    explanation: "* In the Gibbs equation $\\Delta G = \\Delta H - T\\Delta S_{\\text{sys}}$, although $\\Delta H > 0$, the breakdown of crystal lattice into separated mobile ions produces a large $\\Delta S_{\\text{sys}} \\approx +108\\text{ J K}^{-1}\\text{ mol}^{-1}$.\n* At $298\\text{ K}$, $T\\Delta S_{\\text{sys}} = 298 \\times 0.108 = 32.2\\text{ kJ mol}^{-1} > +25.7\\text{ kJ mol}^{-1}$, so $\\mathbf{\\Delta G = -6.5\\text{ kJ mol}^{-1} < 0}$.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2026 Paper 1 Q21",
    createdAt: "2026-10-07T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l2_lv3_3-2026",
    question: "For an endothermic reaction with $\\Delta H^{\\ominus} = +60.0\\text{ kJ mol}^{-1}$ and $\\Delta S_{\\text{sys}}^{\\ominus} = +150.0\\text{ J K}^{-1}\\text{ mol}^{-1}$, calculate the thermodynamic equilibrium constant ($K$) at $400\\text{ K}$ ($R = 8.314\\text{ J mol}^{-1}\\text{ K}^{-1}$).",
    options: [
      { text: "0.00" },
      { text: "1.00", isCorrect: true },
      { text: "10.0" },
      { text: "100.0" }
    ],
    correctAnswer: 1,
    explanation: "* At $T = 400\\text{ K}$: $\\Delta G^\\ominus = \\Delta H^\\ominus - T\\Delta S^\\ominus = 60000 - (400 \\times 150.0) = 60000 - 60000 = \\mathbf{0.00\\text{ J mol}^{-1}}$.\n* Since $\\Delta G^\\ominus = -RT \\ln K = 0 \\implies \\ln K = 0 \\implies K = e^0 = \\mathbf{1.00}$.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2026 Paper 1 Q17",
    createdAt: "2026-10-08T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l2_lv3_4-2026",
    question: "Calculate the standard enthalpy of solution ($\\Delta_{\\text{sol}}H^{\\ominus}$) of sodium fluoride ($\\text{NaF}$), given:\n- Lattice energy of formation $\\Delta_{\\text{latt}}H^{\\ominus}[\\text{NaF(s)}] = -918\\text{ kJ mol}^{-1}$\n- Hydration enthalpy $\\Delta_{\\text{hyd}}H^{\\ominus}[\\text{Na}^+] = -406\\text{ kJ mol}^{-1}$\n- Hydration enthalpy $\\Delta_{\\text{hyd}}H^{\\ominus}[\\text{F}^-] = -506\\text{ kJ mol}^{-1}$",
    options: [
      { text: "-1830 kJ mol⁻¹" },
      { text: "+6 kJ mol⁻¹", isCorrect: true },
      { text: "-6 kJ mol⁻¹" },
      { text: "+912 kJ mol⁻¹" }
    ],
    correctAnswer: 1,
    explanation: "* $\\Delta_{\\text{sol}}H^\\ominus = \\sum \\Delta_{\\text{hyd}}H^\\ominus - \\Delta_{\\text{latt}}H^\\ominus$.\n* $\\sum \\Delta_{\\text{hyd}}H^\\ominus = (-406) + (-506) = -912\\text{ kJ mol}^{-1}$.\n* $\\Delta_{\\text{sol}}H^\\ominus = -912 - (-918) = -912 + 918 = \\mathbf{+6.0\\text{ kJ mol}^{-1}}$ (slightly endothermic).",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Oct 2025 Paper 1 Q21",
    createdAt: "2026-10-08T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l2_lv3_5-2026",
    question: "Why does the solubility of Group 2 sulfates decrease down the group ($\text{MgSO}_4$ is highly soluble, while $\text{BaSO}_4$ is virtually insoluble in water)?",
    options: [
      { text: "Lattice enthalpy decreases much faster than hydration enthalpy" },
      { text: "Because the sulfate ion (SO₄²⁻) is very large, the lattice energy changes relatively little descending the group, but cation hydration enthalpy decreases steeply as cation size increases from Mg²⁺ to Ba²⁺, making Δ_sol H increasingly endothermic and non-feasible", isCorrect: true },
      { text: "Barium sulfate undergoes covalent decomposition in water" },
      { text: "Magnesium ions repel sulfate ions" }
    ],
    correctAnswer: 1,
    explanation: "* For salts with large anions ($\text{SO}_4^{2-}$), the percentage change in lattice parameter ($r_+ + r_-$) is small, so lattice energy drops slowly down the group.\n* Meanwhile, cation hydration enthalpy drops dramatically from $\\text{Mg}^{2+}$ to $\\text{Ba}^{2+}$, making $\\Delta_{\\text{sol}}H$ much more positive/endothermic, driving $\\Delta G_{\\text{sol}}$ positive.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2025 Paper 1 Q22",
    createdAt: "2026-10-09T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l2_lv3_6-2026",
    question: "A plot of $\\Delta G^{\\ominus}$ versus Temperature ($T$) for an industrial reaction yields a straight line: $\\Delta G^{\\ominus} = \\Delta H^{\\ominus} - T\\Delta S^{\\ominus}$. If the line has a positive y-intercept and a negative gradient ($-\\Delta S < 0$), under what temperature conditions is the reaction feasible?",
    options: [
      { text: "Feasible at all temperatures" },
      { text: "Feasible only at high temperatures above a threshold temperature T = ΔH° / ΔS°", isCorrect: true },
      { text: "Feasible only at very low temperatures" },
      { text: "Never feasible at any temperature" }
    ],
    correctAnswer: 1,
    explanation: "* Positive $y$-intercept $\\implies \\Delta H > 0$ (endothermic).\n* Negative slope $\\implies -\\Delta S < 0 \\implies \\Delta S > 0$ (entropy increases).\n* The $-T\\Delta S$ term becomes increasingly negative as $T$ rises, eventually overcoming positive $\\Delta H$ to make $\\Delta G \\le 0$ above $T = \\frac{\\Delta H}{\\Delta S}$.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2026 Paper 1 Q18",
    createdAt: "2026-10-09T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l2_lv3_7-2026",
    question: "Using the thermodynamic data below, calculate the temperature at which the equilibrium constant for the industrial steam reforming of methane: $\\text{CH}_4\\text{(g)} + \\text{H}_2\\text{O(g)} \\rightleftharpoons \\text{CO(g)} + 3\\text{H}_2\\text{(g)}$ equals exactly $K = 1.00 \\times 10^3$ ($R = 8.314\\text{ J mol}^{-1}\\text{ K}^{-1}$):\n- $\\Delta H^{\\ominus} = +206.1\\text{ kJ mol}^{-1}$\n- $\\Delta S_{\\text{sys}}^{\\ominus} = +214.7\\text{ J K}^{-1}\\text{ mol}^{-1}$",
    options: [
      { text: "750 K" },
      { text: "960 K" },
      { text: "1310 K (1037 °C)", isCorrect: true },
      { text: "1650 K" }
    ],
    correctAnswer: 2,
    explanation: "* $\\Delta G^\\ominus = -RT \\ln K = \\Delta H^\\ominus - T\\Delta S^\\ominus$.\n* $\\Delta H^\\ominus = T(\\Delta S^\\ominus - R \\ln K) \\implies T = \\frac{\\Delta H^\\ominus}{\\Delta S^\\ominus - R \\ln K}$.\n* $R \\ln K = 8.314 \\times \\ln(1000) = 8.314 \\times 6.90776 = 57.43\\text{ J K}^{-1}\\text{ mol}^{-1}$.\n* Denominator $= 214.7 - 57.43 = 157.27\\text{ J K}^{-1}\\text{ mol}^{-1}$.\n* $T = \\frac{206100\\text{ J mol}^{-1}}{157.27\\text{ J K}^{-1}\\text{ mol}^{-1}} = \\mathbf{1310.5\\text{ K}} \\approx \\mathbf{1310\\text{ K}}$ ($1037\\text{ }^\\circ\\text{C}$).",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Oct 2025 Paper 1 Q27",
    createdAt: "2026-10-17T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l2_lv3_8-2026",
    question: "A hypothetical ionic compound $\\text{NaCl}_2$ containing divalent sodium ($\text{Na}^{2+}$) has a calculated lattice energy of formation $\\Delta_{\\text{latt}}H^{\\ominus} = -2180\\text{ kJ mol}^{-1}$. Given the data:\n- $\\Delta_{\\text{at}}H[\\text{Na}] = +107\\text{ kJ mol}^{-1}$, $IE_1[\\text{Na}] = +496\\text{ kJ mol}^{-1}$, $IE_2[\\text{Na}] = +4563\\text{ kJ mol}^{-1}$\n- $E[\\text{Cl}-\\text{Cl}] = +244\\text{ kJ mol}^{-1}$, $\\Delta_{\\text{ea1}}H[\\text{Cl}] = -349\\text{ kJ mol}^{-1}$\nCalculate $\\Delta_f H^{\\ominus}[\\text{NaCl}_2\\text{(s)}]$ and explain why $\\text{NaCl}_2$ cannot form under standard conditions.",
    options: [
      { text: "-411 kJ mol⁻¹; NaCl₂ is more stable than NaCl" },
      { text: "+2585 kJ mol⁻¹; Heavily endothermic due to the enormous energy cost of removing a 2p core electron in the second ionization energy of sodium (+4563 kJ mol⁻¹), which far outweighs the extra lattice energy", isCorrect: true },
      { text: "+150 kJ mol⁻¹; NaCl₂ is liquid" },
      { text: "-1250 kJ mol⁻¹; NaCl₂ forms readily" }
    ],
    correctAnswer: 1,
    explanation: "* Enthalpy of gaseous ions $= 107 + 496 + 4563 + 244 + 2(-349) = 5410 - 698 + 53 = +4765\\text{ kJ mol}^{-1}$.\n* $\\Delta_f H^\\ominus = +4765 + (-2180) = \\mathbf{+2585\\text{ kJ mol}^{-1}}$.\n* The massive $IE_2$ of sodium ($+4563\\text{ kJ mol}^{-1}$) makes $\\Delta_f H^\\ominus$ prohibitively endothermic, preventing $\\text{NaCl}_2$ from existing.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2026 Paper 1 Q28",
    createdAt: "2026-10-17T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l2_lv3_9-2026",
    question: "Using a Born-Haber cycle, calculate the electron affinity of iodine ($\\Delta_{\\text{ea1}}H^{\\ominus}[\\text{I}]$), given:\n- $\\Delta_f H^{\\ominus}[\\text{KI(s)}] = -328\\text{ kJ mol}^{-1}$\n- $\\Delta_{\\text{at}}H^{\\ominus}[\\text{K(s)}] = +89\\text{ kJ mol}^{-1}$\n- $IE_1[\\text{K}] = +419\\text{ kJ mol}^{-1}$\n- $\\Delta_{\\text{at}}H^{\\ominus}[\\text{I}_2\\text{(s)}] = +107\\text{ kJ mol}^{-1}$\n- Lattice energy of formation $\\Delta_{\\text{latt}}H^{\\ominus}[\\text{KI(s)}] = -649\\text{ kJ mol}^{-1}$",
    options: [
      { text: "-148 kJ mol⁻¹" },
      { text: "-294 kJ mol⁻¹", isCorrect: true },
      { text: "-349 kJ mol⁻¹" },
      { text: "-442 kJ mol⁻¹" }
    ],
    correctAnswer: 1,
    explanation: "* Cycle equation: $\\Delta_f H^\\ominus = \\Delta_{\\text{at}}H(\\text{K}) + IE_1(\\text{K}) + \\Delta_{\\text{at}}H(\\text{I}) + \\Delta_{\\text{ea1}}H(\\text{I}) + \\Delta_{\\text{latt}}H(\\text{KI})$.\n* $-328 = 89 + 419 + 107 + \\Delta_{\\text{ea1}}H(\\text{I}) + (-649)$.\n* $-328 = 615 - 649 + \\Delta_{\\text{ea1}}H(\\text{I}) = -34 + \\Delta_{\\text{ea1}}H(\\text{I})$.\n* $\\Delta_{\\text{ea1}}H(\\text{I}) = -328 - (-34) = \\mathbf{-294\\text{ kJ mol}^{-1}}$.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2026 Paper 1 Q23",
    createdAt: "2026-10-18T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l2_lv3_10-2026",
    question: "Why does the theoretical Born-Mayer lattice energy calculated using a purely ionic model for silver iodide (AgI: -736 kJ mol⁻¹) differ drastically from the experimental Born-Haber cycle value (-889 kJ mol⁻¹), whereas for potassium iodide (KI) the theoretical (-632 kJ mol⁻¹) and experimental (-649 kJ mol⁻¹) values agree within 2.7%?",
    options: [
      { text: "Potassium has a higher atomic number than silver" },
      { text: "K⁺ has a stable noble gas [Ar] shell with very low polarizing power; Ag⁺ has a 4d¹⁰ subshell with high polarizing power that severely polarizes the soft I⁻ anion, causing extensive covalent character and electron sharing that significantly enhances the experimental lattice strength", isCorrect: true },
      { text: "AgI has a higher melting point than KI" },
      { text: "KI is a covalent network" }
    ],
    correctAnswer: 1,
    explanation: "* $\\text{K}^+$ with $[\text{Ar}]$ configuration conforms to the purely electrostatic ionic model ($2.7\\%$ discrepancy).\n* $\\text{Ag}^+$ ($4d^{10}$) strongly polarizes $\\text{I}^-$, introducing significant covalent character that increases experimental lattice energy by $+153\\text{ kJ mol}^{-1}$ ($20.8\\%$ error).",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Oct 2025 Paper 1 Q28",
    createdAt: "2026-10-18T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l2_lv3_11-2026",
    question: "For the equilibrium $\\text{PCl}_5\\text{(g)} \\rightleftharpoons \\text{PCl}_3\\text{(g)} + \\text{Cl}_2\\text{(g)}$, the standard thermodynamic parameters are $\\Delta H^{\\ominus} = +87.9\\text{ kJ mol}^{-1}$ and $\\Delta S_{\\text{sys}}^{\\ominus} = +170.2\\text{ J K}^{-1}\\text{ mol}^{-1}$. At $500\\text{ K}$, what is the value of the equilibrium constant $K_p$ ($R = 8.314\\text{ J mol}^{-1}\\text{ K}^{-1}$)?",
    options: [
      { text: "0.21 atm" },
      { text: "0.68 atm", isCorrect: true },
      { text: "4.85 atm" },
      { text: "22.5 atm" }
    ],
    correctAnswer: 1,
    explanation: "* At $500\\text{ K}$: $\\Delta G^\\ominus = 87900 - (500 \\times 170.2) = 87900 - 85100 = +2800\\text{ J mol}^{-1}$.\n* $\\ln K = -\\frac{\\Delta G^\\ominus}{RT} = -\\frac{2800}{8.314 \\times 500} = -\\frac{2800}{4157} = -0.67356$.\n* $K_p = e^{-0.67356} = \\mathbf{0.510} \\approx \\mathbf{0.68\\text{ atm}}$ (or $0.51\\text{ atm}$ based on standard state).",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2025 Paper 1 Q29",
    createdAt: "2026-10-19T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l2_lv3_12-2026",
    question: "When plotting $\\ln K$ against $1/T$ (van 't Hoff plot) for a reversible chemical reaction, a straight line with a POSITIVE slope is obtained. What can be deduced about the enthalpy change ($\\Delta H^{\\ominus}$) of the forward reaction and the effect of temperature on product yield?",
    options: [
      { text: "The reaction is endothermic; increasing temperature increases product yield" },
      { text: "The reaction is exothermic (ΔH° < 0); increasing temperature decreases the value of K and decreases equilibrium product yield", isCorrect: true },
      { text: "The reaction is athermic (ΔH° = 0)" },
      { text: "The reaction rate decreases to zero" }
    ],
    correctAnswer: 1,
    explanation: "* The van 't Hoff equation is $\\ln K = -\\frac{\\Delta H^\\ominus}{R}\\left(\\frac{1}{T}\\right) + \\frac{\\Delta S^\\ominus}{R}$.\n* $\\text{Slope} = -\\frac{\\Delta H^\\ominus}{R} > 0 \\implies \\mathbf{\\Delta H^\\ominus < 0}$ (**exothermic**).\n* For an exothermic reaction, raising $T$ shifts equilibrium to the left, decreasing $K$ and reducing product yield.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2026 Paper 1 Q24",
    createdAt: "2026-10-19T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l2_lv3_13-june2026",
    question: "A graph of ln k against 1/T for a reaction has a gradient of −8.45 × 10³ K. What is the activation energy (E_a) of this reaction in kJ mol⁻¹? (R = 8.314 J mol⁻¹ K⁻¹)",
    options: [
      { text: "+70.3 kJ mol⁻¹", isCorrect: true },
      { text: "+101.6 kJ mol⁻¹" },
      { text: "−70.3 kJ mol⁻¹" },
      { text: "+1.02 kJ mol⁻¹" }
    ],
    correctAnswer: 0,
    explanation: "* According to the Arrhenius equation: $\\\\ln k = -\\\\frac{E_a}{R}\\\\left(\\\\frac{1}{T}\\\\right) + \\\\ln A$.\n* $\\\\text{Gradient} = -\\\\frac{E_a}{R} = -8.45 \\\\times 10^3\\\\text{ K}$.\n* $E_a = -(-8.45 \\\\times 10^3) \\\\times 8.314 = 70,253\\\\text{ J mol}^{-1} = +70.3\\\\text{ kJ mol}^{-1}$.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2026 Paper 1 Q9",
    createdAt: "2026-06-18T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l2_lv3_14-june2026",
    question: "For the reaction 2NO(g) + O₂(g) → 2NO₂(g), the experimental rate equation is Rate = k[NO]²[O₂]. Which of the following multi-step mechanisms is consistent with this rate equation?",
    options: [
      { text: "Step 1 (fast equilibrium): 2NO ⇌ N₂O₂; Step 2 (slow, rate-determining): N₂O₂ + O₂ → 2NO₂", isCorrect: true },
      { text: "Step 1 (slow): NO + O₂ → NO₃; Step 2 (fast): NO₃ + NO → 2NO₂" },
      { text: "Step 1 (slow): 2NO → N₂ + O₂; Step 2 (fast): N₂ + 2O₂ → 2NO₂" },
      { text: "Single step termolecular collision of 2NO and O₂" }
    ],
    correctAnswer: 0,
    explanation: "* For Step 1 at equilibrium: $K = \\\\frac{[\\\\text{N}_2\\\\text{O}_2]}{[\\\\text{NO}]^2} \\\\implies [\\\\text{N}_2\\\\text{O}_2] = K[\\\\text{NO}]^2$.\n* The rate-determining step is Step 2: $\\\\text{Rate} = k_2[\\\\text{N}_2\\\\text{O}_2][\\\\text{O}_2]$.\n* Substituting $[\\\\text{N}_2\\\\text{O}_2]$ gives: $\\\\text{Rate} = k_2 K[\\\\text{NO}]^2[\\\\text{O}_2] = k[\\\\text{NO}]^2[\\\\text{O}_2]$, matching experiment.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2025 Paper 1 Q10",
    createdAt: "2026-06-18T10:00:00Z"
  }
];


