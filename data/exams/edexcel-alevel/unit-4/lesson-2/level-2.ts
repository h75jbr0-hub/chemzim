import { Question } from '../../../types';

export const level2Questions: Question[] = [
  {
    id: "ex_ed_u4_l2_lv2_1-2026",
    question: "Calculate the standard system entropy change ($\\Delta S_{\\text{sys}}^{\\ominus}$) for the synthesis of ammonia: $\\text{N}_2\\text{(g)} + 3\\text{H}_2\\text{(g)} \\rightarrow 2\\text{NH}_3\\text{(g)}$, given the standard molar entropies ($S^{\\ominus}$):\n- $S^{\\ominus}[\\text{N}_2\\text{(g)}] = 191.6\\text{ J K}^{-1}\\text{ mol}^{-1}$\n- $S^{\\ominus}[\\text{H}_2\\text{(g)}] = 130.6\\text{ J K}^{-1}\\text{ mol}^{-1}$\n- $S^{\\ominus}[\\text{NH}_3\\text{(g)}] = 192.3\\text{ J K}^{-1}\\text{ mol}^{-1}$",
    options: [
      { text: "-98.9 J K⁻¹ mol⁻¹" },
      { text: "-198.8 J K⁻¹ mol⁻¹", isCorrect: true },
      { text: "+198.8 J K⁻¹ mol⁻¹" },
      { text: "-583.4 J K⁻¹ mol⁻¹" }
    ],
    correctAnswer: 1,
    explanation: "* $\\Delta S_{\\text{sys}}^\\ominus = \\sum S^\\ominus(\\text{products}) - \\sum S^\\ominus(\\text{reactants})$.\n* $\\sum S^\\ominus(\\text{products}) = 2 \\times 192.3 = 384.6\\text{ J K}^{-1}\\text{ mol}^{-1}$.\n* $\\sum S^\\ominus(\\text{reactants}) = 191.6 + (3 \\times 130.6) = 191.6 + 391.8 = 583.4\\text{ J K}^{-1}\\text{ mol}^{-1}$.\n* $\\Delta S_{\\text{sys}}^\\ominus = 384.6 - 583.4 = \\mathbf{-198.8\\text{ J K}^{-1}\\text{ mol}^{-1}}$.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Oct 2025 Paper 1 Q18",
    createdAt: "2026-10-04T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l2_lv2_2-2026",
    question: "A reaction has $\\Delta H = -115\\text{ kJ mol}^{-1}$ and $\\Delta S_{\\text{sys}} = -155\\text{ J K}^{-1}\\text{ mol}^{-1}$. Calculate the total entropy change ($\\Delta S_{\\text{total}}$) of the reaction at $298\\text{ K}$ and deduce if the reaction is feasible.",
    options: [
      { text: "-231 J K⁻¹ mol⁻¹; Not feasible" },
      { text: "+231 J K⁻¹ mol⁻¹; Feasible (ΔS_total > 0)", isCorrect: true },
      { text: "+386 J K⁻¹ mol⁻¹; Feasible" },
      { text: "-541 J K⁻¹ mol⁻¹; Not feasible" }
    ],
    correctAnswer: 1,
    explanation: "* $\\Delta S_{\\text{surr}} = -\\frac{\\Delta H}{T} = -\\frac{-115000\\text{ J mol}^{-1}}{298\\text{ K}} = +385.9\\text{ J K}^{-1}\\text{ mol}^{-1}$.\n* $\\Delta S_{\\text{total}} = \\Delta S_{\\text{sys}} + \\Delta S_{\\text{surr}} = -155 + 385.9 = \\mathbf{+230.9\\text{ J K}^{-1}\\text{ mol}^{-1}}$.\n* Since $\\Delta S_{\\text{total}} > 0$ (and $\\Delta G < 0$), the reaction is **feasible**.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2026 Paper 1 Q19",
    createdAt: "2026-10-04T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l2_lv2_3-2026",
    question: "Why does the experimental lattice energy of silver chloride ($\\text{AgCl}$, $-905\\text{ kJ mol}^{-1}$) have a significantly larger magnitude than the theoretical value calculated from the purely ionic Kapustinskii / Born-Mayer electrostatic model ($-833\\text{ kJ mol}^{-1}$)?",
    options: [
      { text: "Silver chloride contains coordinate bonds" },
      { text: "The polarizing power of the Ag⁺ ion distorts the electron cloud of the large, polarizable Cl⁻ anion, introducing significant covalent character that provides additional lattice stabilization", isCorrect: true },
      { text: "AgCl forms a giant covalent macromolecule like diamond" },
      { text: "The radius of Ag⁺ was measured incorrectly" }
    ],
    correctAnswer: 1,
    explanation: "* Transition metal-like cations with incomplete $d$-subshells ($\text{Ag}^+: 4d^{10}$) strongly polarize large anions, causing partial electron sharing (covalent bonding character) which strengthens the lattice beyond pure point-charge ionic attraction.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2026 Paper 1 Q15",
    createdAt: "2026-10-05T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l2_lv2_4-2026",
    question: "The thermal decomposition of calcium carbonate is endothermic: $\\text{CaCO}_3\\text{(s)} \\rightarrow \\text{CaO(s)} + \\text{CO}_2\\text{(g)}$, with $\\Delta H^{\\ominus} = +178.0\\text{ kJ mol}^{-1}$ and $\\Delta S^{\\ominus} = +160.5\\text{ J K}^{-1}\\text{ mol}^{-1}$. Calculate the minimum temperature ($T$) in Kelvin above which this reaction becomes thermodynamically feasible.",
    options: [
      { text: "298 K" },
      { text: "835 K" },
      { text: "1109 K (836 °C)", isCorrect: true },
      { text: "1450 K" }
    ],
    correctAnswer: 2,
    explanation: "* At the feasibility threshold, $\\Delta G = 0 \\implies \\Delta H - T\\Delta S = 0 \\implies T = \\frac{\\Delta H}{\\Delta S}$.\n* $T = \\frac{178000\\text{ J mol}^{-1}}{160.5\\text{ J K}^{-1}\\text{ mol}^{-1}} = \\mathbf{1109.0\\text{ K}}$ ($836\\text{ }^\\circ\\text{C}$).",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Oct 2025 Paper 1 Q19",
    createdAt: "2026-10-05T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l2_lv2_5-2026",
    question: "For which pair of Group 2 cations is the enthalpy of hydration ($\\Delta_{\\text{hyd}}H$) more exothermic for the first cation than the second?",
    options: [
      { text: "Ba²⁺ is more exothermic than Mg²⁺" },
      { text: "Mg²⁺ is more exothermic than Ba²⁺ (due to smaller ionic radius and higher charge density attracting polar water molecules more strongly)", isCorrect: true },
      { text: "Ca²⁺ is more exothermic than Mg²⁺" },
      { text: "Sr²⁺ is more exothermic than Ca²⁺" }
    ],
    correctAnswer: 1,
    explanation: "* Hydration enthalpy is directly proportional to charge density ($\\text{charge} / \\text{radius}$). $\\text{Mg}^{2+}$ ($r = 0.072\\text{ nm}$) has a much higher charge density than $\\text{Ba}^{2+}$ ($r = 0.135\\text{ nm}$), so $\\Delta_{\\text{hyd}}H(\\text{Mg}^{2+}) = -1920\\text{ kJ mol}^{-1}$ is far more exothermic than $\\text{Ba}^{2+}$ ($-1305\\text{ kJ mol}^{-1}$).",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2025 Paper 1 Q20",
    createdAt: "2026-10-06T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l2_lv2_6-2026",
    question: "How is the thermodynamic equilibrium constant ($K$) mathematically related to the total entropy change ($\\Delta S_{\\text{total}}^{\\ominus}$) and Gibbs free energy change ($\\Delta G^{\\ominus}$)?",
    options: [
      { text: "ΔG° = +RT ln K and ΔS_total° = -R ln K" },
      { text: "ΔG° = -RT ln K and ΔS_total° = R ln K (so ln K = ΔS_total° / R = -ΔG° / RT)", isCorrect: true },
      { text: "ln K = -ΔH° / R" },
      { text: "K = e^(+ΔG° / RT)" }
    ],
    correctAnswer: 1,
    explanation: "* The fundamental thermodynamic links are: $\\mathbf{\\Delta G^\\ominus = -RT \\ln K}$ and $\\mathbf{\\Delta S_{\\text{total}}^\\ominus = R \\ln K}$, proving that when $\\Delta G^\\ominus$ is large and negative, $K \\gg 1$ and product yield dominates at equilibrium.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2026 Paper 1 Q16",
    createdAt: "2026-10-06T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l2_lv2_7-2026",
    question: "Using the data: $\\Delta H^{\\ominus} = -92.2\\text{ kJ mol}^{-1}$ and $\\Delta S_{\\text{sys}}^{\\ominus} = -198.8\\text{ J K}^{-1}\\text{ mol}^{-1}$ for $\\text{N}_2\\text{(g)} + 3\\text{H}_2\\text{(g)} \\rightleftharpoons 2\\text{NH}_3\\text{(g)}$, calculate the standard Gibbs free energy change ($\\Delta G^{\\ominus}$) at $298\\text{ K}$ and state whether ammonia synthesis is spontaneous under standard conditions.",
    options: [
      { text: "+33.0 kJ mol⁻¹; Non-spontaneous" },
      { text: "-33.0 kJ mol⁻¹; Spontaneous (feasible)", isCorrect: true },
      { text: "-151.4 kJ mol⁻¹; Spontaneous" },
      { text: "+59.2 kJ mol⁻¹; Non-spontaneous" }
    ],
    correctAnswer: 1,
    explanation: "* $\\Delta G^\\ominus = \\Delta H^\\ominus - T\\Delta S_{\\text{sys}}^\\ominus = -92.2 - [298 \\times (-0.1988)] = -92.2 - (-59.24) = \\mathbf{-32.96\\text{ kJ mol}^{-1}} \\approx \\mathbf{-33.0\\text{ kJ mol}^{-1}}$.\n* Since $\\Delta G^\\ominus < 0$, the reaction is thermodynamically **feasible / spontaneous**.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Oct 2025 Paper 1 Q25",
    createdAt: "2026-10-14T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l2_lv2_8-2026",
    question: "For a reaction with $\\Delta G^{\\ominus} = -25.0\\text{ kJ mol}^{-1}$ at $298\\text{ K}$, calculate the thermodynamic equilibrium constant ($K$) ($R = 8.314\\text{ J mol}^{-1}\\text{ K}^{-1}$).",
    options: [
      { text: "1.01" },
      { text: "2.41 × 10⁴", isCorrect: true },
      { text: "4.15 × 10⁻⁵" },
      { text: "1.00 × 10⁷" }
    ],
    correctAnswer: 1,
    explanation: "* $\\ln K = -\\frac{\\Delta G^\\ominus}{RT} = -\\frac{-25000\\text{ J mol}^{-1}}{8.314 \\times 298} = +\\frac{25000}{2477.57} = +10.0905$.\n* $K = e^{10.0905} = \\mathbf{2.41 \\times 10^4}$ ($K \\gg 1$, products heavily favored).",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2026 Paper 1 Q26",
    createdAt: "2026-10-14T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l2_lv2_9-2026",
    question: "Why does the theoretical lattice energy calculated using the ionic model match experimental Born-Haber values very closely for sodium chloride (NaCl: -787 vs -776 kJ mol⁻¹), whereas for copper(I) iodide (CuI: -967 vs -855 kJ mol⁻¹) there is a very large discrepancy (>110 kJ mol⁻¹)?",
    options: [
      { text: "NaCl is a liquid at room temperature" },
      { text: "Na⁺ is a noble-gas configuration cation with low polarizing power (almost 100% ionic bonding in NaCl), whereas Cu⁺ has an easily polarizable (18-electron) pseudo-noble gas shell that polarizes the large, soft iodide ion, causing substantial covalent bonding character in CuI", isCorrect: true },
      { text: "Iodine gas reacts with copper" },
      { text: "Born-Haber cycles cannot be applied to copper" }
    ],
    correctAnswer: 1,
    explanation: "* $\\text{Na}^+$ ($[\text{Ne}]$) matches the purely spherical point-charge ionic model.\n* $\\text{Cu}^+$ ($[\text{Ar}]3d^{10}$) exhibits high polarizing power, drawing electron density from $\\text{I}^-$, resulting in significant covalent character that enhances experimental lattice stability.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2026 Paper 1 Q21",
    createdAt: "2026-10-15T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l2_lv2_10-2026",
    question: "The thermal decomposition of zinc carbonate $\\text{ZnCO}_3\\text{(s)} \\rightarrow \\text{ZnO(s)} + \\text{CO}_2\\text{(g)}$ occurs at a much lower temperature (300 °C) than barium carbonate $\\text{BaCO}_3\\text{(s)}$ (1360 °C). What fundamental lattice and polarization concept explains this difference?",
    options: [
      { text: "Barium has a higher electronegativity than zinc" },
      { text: "The small Zn²⁺ cation (r = 0.074 nm) has a much higher charge density and polarizing power than the large Ba²⁺ ion (r = 0.135 nm), distorting the carbonate C–O bonds and weakening the lattice towards CO₂ loss", isCorrect: true },
      { text: "Zinc carbonate is an organic polymer" },
      { text: "Barium carbonate has covalent bonding" }
    ],
    correctAnswer: 1,
    explanation: "* High polarizing power cations (like $\\text{Zn}^{2+}$ and $\\text{Mg}^{2+}$) polarize the adjacent large $\\text{CO}_3^{2-}$ oxyanion, facilitating cleavage of the $\\text{C}-\\text{O}$ bond into $\\text{CO}_2$ at a lower thermal threshold.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Oct 2025 Paper 1 Q26",
    createdAt: "2026-10-15T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l2_lv2_11-2026",
    question: "A process has $\\Delta H = +45.0\\text{ kJ mol}^{-1}$ and $\\Delta S = +120.0\\text{ J K}^{-1}\\text{ mol}^{-1}$. At what temperature is the system in dynamic equilibrium ($\\Delta G = 0$)?",
    options: [
      { text: "273 K" },
      { text: "375 K (102 °C)", isCorrect: true },
      { text: "540 K" },
      { text: "1000 K" }
    ],
    correctAnswer: 1,
    explanation: "* $\\Delta G = 0 \\implies T = \\frac{\\Delta H}{\\Delta S} = \\frac{45000\\text{ J mol}^{-1}}{120.0\\text{ J K}^{-1}\\text{ mol}^{-1}} = \\mathbf{375.0\\text{ K}}$ ($102\\text{ }^\\circ\\text{C}$).",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2025 Paper 1 Q27",
    createdAt: "2026-10-16T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l2_lv2_12-2026",
    question: "When sodium hydroxide pellets dissolve in water ($\\text{NaOH(s)} \\rightarrow \\text{Na}^+\\text{(aq)} + \\text{OH}^-\\text{(aq)}$), the solution gets extremely hot ($\\Delta_{\\text{sol}}H = -44.5\\text{ kJ mol}^{-1}$). Why is $\\Delta_{\\text{sol}}H$ so exothermic for NaOH?",
    options: [
      { text: "The lattice energy of NaOH is zero" },
      { text: "The sum of the exothermic hydration enthalpies of Na⁺ and OH⁻ (-406 + -519 = -925 kJ mol⁻¹) exceeds the endothermic lattice dissociation energy (+880 kJ mol⁻¹)", isCorrect: true },
      { text: "Water molecules undergo nuclear fusion with sodium" },
      { text: "Entropy decreases to zero" }
    ],
    correctAnswer: 1,
    explanation: "* $\\Delta_{\\text{sol}}H = \\sum \\Delta_{\\text{hyd}}H - \\Delta_{\\text{latt}}H = -925 - (-880) = \\mathbf{-45\\text{ kJ mol}^{-1}}$ (net exothermic).",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2026 Paper 1 Q22",
    createdAt: "2026-10-16T10:00:00Z"
  }
];


