import { Question } from '../../../types';

export const level3Questions: Question[] = [
  {
    id: "ex_ed_u1_l4_lv3_1-2026",
    question: "When propane undergoes free-radical monochlorination with chlorine in UV light, both 1-chloropropane and 2-chloropropane are formed. Why is 2-chloropropane formed in a higher yield than 1-chloropropane despite there being 6 primary hydrogens and only 2 secondary hydrogens?",
    options: [
      { text: "Primary radicals are more thermodynamically stable than secondary radicals" },
      { text: "Secondary free radicals are more stable than primary free radicals due to greater electron-releasing hyperconjugation/inductive stabilization from two adjacent alkyl groups, leading to a lower activation energy for secondary C-H bond cleavage", isCorrect: true },
      { text: "Chlorine radicals are too bulky to approach the primary carbons" },
      { text: "1-chloropropane decomposes spontaneously into propene" }
    ],
    correctAnswer: 1,
    explanation: "* Radical stability order is tertiary > secondary > primary.\n* The secondary radical intermediate ($CH_3-\\dot{C}H-CH_3$) forms faster because the alkyl groups push electron density to stabilize the radical center, lowering the activation energy for secondary hydrogen abstraction.",
    level: 3,
    topic: "edexcel-unit-1",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / Oct 2025 Paper 1 Q33",
    createdAt: "2026-06-20T10:00:00Z"
  },
  {
    id: "ex_ed_u1_l4_lv3_2-2026",
    question: "In the free-radical substitution of methane with chlorine, why is free-radical chlorination generally NOT a good laboratory synthetic method for preparing pure chloromethane in high yield?",
    options: [
      { text: "The reaction is endothermic and requires continuous heating" },
      { text: "Further propagation reactions occur in which chloromethane reacts with further chlorine radicals, yielding an inseparable mixture of di-, tri-, and tetrachloromethanes alongside termination byproducts", isCorrect: true },
      { text: "Chlorine gas undergoes heterolytic fission in sunlight" },
      { text: "Methane is an inert gas that refuses to react with radicals" }
    ],
    correctAnswer: 1,
    explanation: "* As chloromethane forms, it competes with methane for chlorine radicals.\n* This leads to multi-substitution products ($\\text{CH}_2\\text{Cl}_2, \\text{CHCl}_3, \\text{CCl}_4$) and radical-coupling dimers (like $\\text{C}_2\\text{H}_6$), making separation difficult unless a large excess of methane is used.",
    level: 3,
    topic: "edexcel-unit-1",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / June 2026 Paper 1 Q34",
    createdAt: "2026-06-20T10:00:00Z"
  },
  {
    id: "ex_ed_u1_l4_lv3_3-2026",
    question: "An alkane has the molecular formula $\\text{C}_5\\text{H}_{12}$. When reacted with chlorine in UV light, it forms ONLY ONE monochloro-derivative ($\text{C}_5\text{H}_{11}\text{Cl}$). What is the systematic IUPAC name of this alkane?",
    options: [
      { text: "Pentane" },
      { text: "2-methylbutane" },
      { text: "2,2-dimethylpropane", isCorrect: true },
      { text: "Cyclopentane" }
    ],
    correctAnswer: 2,
    explanation: "* In 2,2-dimethylpropane (neopentane), all 12 hydrogen atoms are attached to 4 equivalent methyl groups bonded to a central quaternary carbon.\n* Replacing any hydrogen results in the exact same monochloro isomer (1-chloro-2,2-dimethylpropane).",
    level: 3,
    topic: "edexcel-unit-1",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / Jan 2026 Paper 1 Q32",
    createdAt: "2026-06-21T10:00:00Z"
  },
  {
    id: "ex_ed_u1_l4_lv3_4-2026",
    question: "Which of the following equations represents a termination step in the photochemical bromination of ethane?",
    options: [
      { text: "Br₂ → 2Br•" },
      { text: "C₂H₆ + Br• → •C₂H₅ + HBr" },
      { text: "•C₂H₅ + Br₂ → C₂H₅Br + Br•" },
      { text: "•C₂H₅ + Br• → C₂H₅Br", isCorrect: true }
    ],
    correctAnswer: 3,
    explanation: "* A termination step involves the collision and combination of two free radicals to form a stable covalent molecule, consuming radical chain carriers and terminating the chain.",
    level: 3,
    topic: "edexcel-unit-1",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / Oct 2025 Paper 1 Q34",
    createdAt: "2026-06-21T10:00:00Z"
  },
  {
    id: "ex_ed_u1_l4_lv3_5-2026",
    question: "Thermal cracking of $1.00\\text{ mol}$ of decane ($\\text{C}_{10}\\text{H}_{22}$) produces ethene ($\\text{C}_2\\text{H}_4$), propene ($\\text{C}_3\\text{H}_6$), and an alkane Z in a $1 : 1 : 1$ mole ratio. What is the molecular formula and IUPAC name of alkane Z?",
    options: [
      { text: "C₄H₁₀, butane" },
      { text: "C₅H₁₂, pentane", isCorrect: true },
      { text: "C₆H₁₄, hexane" },
      { text: "C₅H₁₀, pentene" }
    ],
    correctAnswer: 1,
    explanation: "* Total carbons in decane $= 10$; total hydrogens $= 22$.\n* Carbons in ethene + propene $= 2 + 3 = 5$.\n* Hydrogens in ethene + propene $= 4 + 6 = 10$.\n* Remaining formula for Z $= \\text{C}_{10-5}\\text{H}_{22-10} = \\text{C}_5\\text{H}_{12}$ (**pentane**).",
    level: 3,
    topic: "edexcel-unit-1",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / June 2025 Paper 1 Q35",
    createdAt: "2026-06-22T10:00:00Z"
  },
  {
    id: "ex_ed_u1_l4_lv3_6-2026",
    question: "Why do catalytic converters in modern petrol car exhausts contain platinum, palladium, and rhodium honeycombs?",
    options: [
      { text: "To convert carbon dioxide into methane" },
      { text: "To catalyze the oxidation of toxic CO and unburned hydrocarbons to CO₂ and H₂O, and the reduction of pollutant nitrogen oxides (NOₓ) to harmless N₂", isCorrect: true },
      { text: "To filter out solid soot particles mechanically" },
      { text: "To electrolyze exhaust water vapor" }
    ],
    correctAnswer: 1,
    explanation: "* Heterogeneous catalysts in catalytic converters provide high-surface-area active sites to promote: $2\\text{CO} + 2\\text{NO} \\rightarrow 2\\text{CO}_2 + \\text{N}_2$ and complete combustion of unburned hydrocarbons to $\\text{CO}_2$ and $\\text{H}_2\\text{O}$.",
    level: 3,
    topic: "edexcel-unit-1",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / Jan 2026 Paper 1 Q33",
    createdAt: "2026-06-22T10:00:00Z"
  }
];

