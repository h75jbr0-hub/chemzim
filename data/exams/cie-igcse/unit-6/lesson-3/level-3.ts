import { Question } from '../../../types';

// Catalysts - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u6_l3_lv3_1-2026",
    question: "How does a solid transition metal catalyst accelerate a gaseous reaction at the molecular level?",
    options: [
      { text: "Gas molecules adsorb onto the metal surface, weakening internal bonds and lowering the activation energy for reaction", isCorrect: true },
      { text: "The metal transfers electrons to the gas molecules permanently to form solid metal salts" },
      { text: "The metal raises the kinetic temperature of the gases without consuming energy" },
      { text: "The metal increases the volume occupied by the gas molecules" }
    ],
    correctAnswer: 0,
    explanation: "* In heterogeneous catalysis, reactant molecules adsorb onto active sites on the metal surface.\n* This stretches and weakens their chemical bonds, providing an alternative reaction pathway with a significantly lower activation energy ($E_a$).",
    level: 3,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q179",
    createdAt: "2026-08-21T00:30:00Z"
  },
  {
    id: "ex_ci_u6_l3_lv3_2-2026",
    question: "Why does the presence of lead compounds in petrol 'poison' the platinum catalytic converter in a car?",
    options: [
      { text: "Lead reacts with platinum to lower its melting point" },
      { text: "Lead atoms bind strongly and irreversibly to active sites on the platinum surface, blocking reactant gases from adsorbing", isCorrect: true },
      { text: "Lead neutralizes carbon monoxide into carbon" },
      { text: "Lead acts as an inhibitor by raising the temperature of exhaust gases" }
    ],
    correctAnswer: 1,
    explanation: "* Catalyst poisoning occurs when an impurity (such as lead) binds strongly and irreversibly to the active catalytic sites.\n* This permanently prevents the pollutant gases (CO, NO, unburned hydrocarbons) from adsorbing and reacting.",
    level: 3,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q180",
    createdAt: "2026-08-21T00:35:00Z"
  },
  {
    id: "ex_ci_u6_l3_lv3_3-2026",
    question: "On a Maxwell-Boltzmann energy distribution diagram, how is the effect of adding a catalyst shown?",
    options: [
      { text: "The curve shifts to the right and becomes broader" },
      { text: "The activation energy line ($E_a$) shifts to the left, increasing the shaded area of particles that can react", isCorrect: true },
      { text: "The activation energy line ($E_a$) shifts to the right, decreasing the energy barrier" },
      { text: "The entire area under the curve increases" }
    ],
    correctAnswer: 1,
    explanation: "* The distribution curve of molecular kinetic energies is unchanged (since temperature is constant).\n* A catalyst lowers the activation energy, shifting the $E_a$ vertical line to the left.\n* As a result, a much larger proportion of the particles have energy $\\ge E_{a\\text{,cat}}$, increasing reaction rate.",
    level: 3,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q181",
    createdAt: "2026-08-21T00:40:00Z"
  },
  {
    id: "ex_ci_u6_l3_lv3_4-2023",
    question: "How does a catalyst increase the rate of a reversible reaction at a molecular level?",
    options: [
      { text: "It increases the rates of both forward and reverse reactions equally by lowering Ea for both", isCorrect: true },
      { text: "It increases the rate of the forward reaction only" },
      { text: "It shifts the position of equilibrium towards the products" },
      { text: "It provides extra thermal energy to the reacting molecules" }
    ],
    correctAnswer: 0,
    explanation: "* A catalyst lowers the activation energy barrier by the same amount for both the forward and the reverse directions.\n* Hence, the forward and backward rates increase by the same factor, reaching dynamic equilibrium more quickly without altering equilibrium position or yield.",
    level: 3,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 23 Q29",
    lessonNum: 3,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u6_l3_lv3_5-2024",
    question: "In automotive catalytic converters, transition metal catalysts (Pt, Pd, Rh) convert toxic pollutants. Which pair of pollutants is converted into non-toxic gases by a catalytic converter?",
    options: [
      { text: "Carbon monoxide and nitrogen monoxide into carbon dioxide and nitrogen", isCorrect: true },
      { text: "Carbon dioxide and water into methane and oxygen" },
      { text: "Sulfur dioxide and carbon monoxide into sulfur and carbon dioxide" },
      { text: "Nitrogen dioxide and ozone into nitric acid" }
    ],
    correctAnswer: 0,
    explanation: "* The catalytic converter catalyzes the redox reaction between carbon monoxide and nitrogen monoxide:\n  $2CO + 2NO \\rightarrow 2CO_2 + N_2$.\n* Both products ($CO_2$ and $N_2$) are naturally occurring atmospheric gases and far less toxic than $CO$ and $NO$.",
    level: 3,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 23 Q28",
    lessonNum: 3,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u6_l3_lv3_6-2025",
    question: "Why does an enzyme function efficiently only within a narrow, optimum pH range?",
    options: [
      { text: "Changes in pH alter the charges on amino acid side-chains, disrupting ionic bonds and changing the active site shape", isCorrect: true },
      { text: "Extreme pH breaks all peptide bonds in the primary protein sequence" },
      { text: "Substrate molecules decompose immediately outside neutral pH" },
      { text: "Enzymes precipitate as metallic salts at non-optimum pH" }
    ],
    correctAnswer: 0,
    explanation: "* The specific 3D shape of an enzyme's active site depends on ionic and hydrogen bonds between R-groups of amino acids.\n* Extreme pH changes alter the protonation state of these basic and acidic side chains, disrupting the precise conformation required to bind the substrate.",
    level: 3,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 23 Q29",
    lessonNum: 3,
    createdAt: "2025-06-01T10:00:00Z"
  }
];

