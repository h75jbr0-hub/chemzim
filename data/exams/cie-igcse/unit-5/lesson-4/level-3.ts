import { Question } from '../../../types';

// Fuel and Hydrogen - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u5_l4_lv3_1-2026",
    question: "The molar enthalpies of combustion for hydrogen and octane (C₈H₁₈) are -286 kJ/mol and -5470 kJ/mol, respectively.\nWhat are the energy values released per gram of hydrogen and octane?\n(Given: $A_r$ of H = 1, C = 12)",
    options: [
      { text: "Hydrogen = 143.0 kJ/g; Octane = 48.0 kJ/g", isCorrect: true },
      { text: "Hydrogen = 286.0 kJ/g; Octane = 48.0 kJ/g" },
      { text: "Hydrogen = 143.0 kJ/g; Octane = 683.8 kJ/g" },
      { text: "Hydrogen = 71.5 kJ/g; Octane = 24.0 kJ/g" }
    ],
    correctAnswer: 0,
    explanation: "* $M_r$ of H₂ $= 2 \\times 1 = 2\\text{ g/mol}$. Energy per gram $= 286 / 2 = 143.0\\text{ kJ/g}$.\n* $M_r$ of octane, C₈H₁₈ $= (8 \\times 12) + (18 \\times 1) = 96 + 18 = 114\\text{ g/mol}$. Energy per gram $= 5470 / 114 = 48.0\\text{ kJ/g}$.\n* Hydrogen delivers about 3 times more energy per gram than octane.",
    level: 3,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q149",
    createdAt: "2026-08-20T21:40:00Z"
  },
  {
    id: "ex_ci_u5_l4_lv3_2-2026",
    question: "Why does a hydrogen-oxygen fuel cell operate at a higher electrical efficiency than a conventional internal combustion engine burning hydrogen gas?",
    options: [
      { text: "A fuel cell converts chemical energy directly into electrical energy without converting it into thermal and mechanical energy first", isCorrect: true },
      { text: "A fuel cell uses liquid oxygen instead of gaseous air" },
      { text: "A fuel cell eliminates the activation energy completely" },
      { text: "A fuel cell produces hydrogen peroxide instead of water" }
    ],
    correctAnswer: 0,
    explanation: "* Heat engines (like combustion engines) are limited by thermodynamic cycle losses (heat dissipation to cooling water and exhaust gases).\n* Fuel cells convert chemical bond energy directly into electrical work via redox half-reactions with minimal heat loss.",
    level: 3,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q150",
    createdAt: "2026-08-20T21:45:00Z"
  },
  {
    id: "ex_ci_u5_l4_lv3_3-2026",
    question: "Green hydrogen is produced by the electrolysis of water powered entirely by solar energy: 2H₂O(l) → 2H₂(g) + O₂(g).\nWhich statement about this process is correct?",
    options: [
      { text: "The electrolysis reaction is endothermic and absorbs electrical energy from renewable sources", isCorrect: true },
      { text: "The process produces carbon dioxide gas at the cathode" },
      { text: "The enthalpy change (ΔH) for the electrolysis of water is negative" },
      { text: "The energy required to decompose water is less than the energy released when the resulting hydrogen is burned" }
    ],
    correctAnswer: 0,
    explanation: "* Splitting water into its elements is the reverse of combustion and is an endothermic process requiring electrical energy input ($+\\Delta H$).\n* By conservation of energy, the theoretical energy input equals the energy released when hydrogen burns.",
    level: 3,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q151",
    createdAt: "2026-08-20T21:50:00Z"
  },
  {
    id: "ex_ci_u5_l4_lv3_4-2026",
    question: "When 1.0 kg of each of the following fuels is completely combusted, which fuel releases the greatest mass of carbon dioxide (CO₂) into the atmosphere?\n(Given: $A_r$ of H = 1, C = 12, O = 16)",
    options: [
      { text: "Methane, CH₄ (75% C by mass)" },
      { text: "Propane, C₃H₈ (81.8% C by mass)" },
      { text: "Anthracite coal (approx. 92% C by mass)", isCorrect: true },
      { text: "Hydrogen gas, H₂" }
    ],
    correctAnswer: 2,
    explanation: "* The mass of CO₂ emitted is directly proportional to the carbon content by mass of the fuel.\n* Anthracite coal has the highest carbon fraction (~92%), producing the most CO₂ per kg burned (~3.37 kg CO₂/kg coal).\n* Hydrogen contains 0% carbon and produces 0 kg of CO₂.",
    level: 3,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q152",
    createdAt: "2026-08-20T21:55:00Z"
  },
  {
    id: "ex_ci_u5_l4_lv3_5-2023",
    question: "When evaluating hydrogen gas as a replacement for liquid hydrocarbons in commercial aviation, which engineering limitation is most challenging?",
    options: [
      { text: "Liquid hydrogen has a very low volumetric energy density, requiring four times the fuel tank volume of jet fuel", isCorrect: true },
      { text: "Hydrogen combustion has an extremely low gravimetric energy density (energy per kilogram)" },
      { text: "Combustion of hydrogen produces soot particles and heavy carbonaceous residues" },
      { text: "Hydrogen cannot react with oxygen at the low temperatures of the upper atmosphere" }
    ],
    correctAnswer: 0,
    explanation: "* While hydrogen has exceptionally high energy per unit mass (~142 MJ/kg vs ~43 MJ/kg for kerosene), its volumetric energy density is very low even when liquefied at -253 °C.\n* It requires roughly 4 times larger and heavily insulated cryogenic storage volumes compared to jet fuel.",
    level: 3,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 22 Q27",
    lessonNum: 4,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u5_l4_lv3_6-2024",
    question: "The energy content of three fuels is compared:\n* Hydrogen: 142 kJ/g\n* Methane: 55 kJ/g\n* Petrol: 48 kJ/g\nWhy is hydrogen currently not the standard fuel for domestic heating in city gas grids?",
    options: [
      { text: "Hydrogen leaks easily through seals due to small molecule size and causes hydrogen embrittlement of steel pipes", isCorrect: true },
      { text: "Hydrogen has a lower energy output per gram than methane and petrol" },
      { text: "Hydrogen reacts vigorously with nitrogen in the air to produce toxic ammonia gas" },
      { text: "Hydrogen cannot be ignited by an electric spark" }
    ],
    correctAnswer: 0,
    explanation: "* Hydrogen molecules ($H_2$) are extremely small and can diffuse through microscopic pores and seals, leading to leak risks.\n* Furthermore, atomic hydrogen can diffuse into metallic crystal lattices (hydrogen embrittlement), weakening traditional steel pipelines used for natural gas distribution.",
    level: 3,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 23 Q25",
    lessonNum: 4,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u5_l4_lv3_7-2025",
    question: "A lifecycle analysis (LCA) compares the greenhouse gas emissions of electric vehicles (EVs) powered by electricity from coal-fired power plants versus modern efficient petrol vehicles. Which statement explains why coal-powered EVs may not significantly reduce overall carbon emissions?",
    options: [
      { text: "Coal combustion has high CO₂ emissions per unit of electrical energy generated, which negates the high efficiency of EV motors", isCorrect: true },
      { text: "Electric motors release carbon monoxide during acceleration" },
      { text: "Petrol vehicles convert 95% of fuel chemical energy into mechanical motion" },
      { text: "Rechargeable batteries cannot store electricity generated from coal" }
    ],
    correctAnswer: 0,
    explanation: "* An electric vehicle produces zero tailpipe emissions, but its total carbon footprint depends directly on the electricity grid mix.\n* Coal-fired power generation emits significant quantities of $CO_2$ per kWh, meaning the net reduction in lifecycle carbon emissions is greatly diminished unless electricity is generated from renewable or nuclear sources.",
    level: 3,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 21 Q29",
    lessonNum: 4,
    createdAt: "2025-06-01T10:00:00Z"
  }
];

