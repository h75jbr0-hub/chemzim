import { Question } from '../../../types';

export const level1Questions: Question[] = [
  {
    id: "ex_ed_u1_l4_lv1_1-2026",
    question: "What is the general molecular formula for unbranched, non-cyclic alkanes containing $n$ carbon atoms?",
    options: [
      { text: "CₙH₂ₙ" },
      { text: "CₙH₂ₙ₊₂", isCorrect: true },
      { text: "CₙH₂ₙ₋₂" },
      { text: "CₙHₙ" }
    ],
    correctAnswer: 1,
    explanation: "* Alkanes are saturated hydrocarbons containing only single $\\text{C}-\\text{C}$ and $\\text{C}-\\text{H}$ bonds.\n* Their homologous series adheres to the general formula $\\text{C}_n\\text{H}_{2n+2}$.",
    level: 1,
    topic: "edexcel-unit-1",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / Oct 2025 Paper 1 Q28",
    createdAt: "2026-06-13T10:00:00Z"
  },
  {
    id: "ex_ed_u1_l4_lv1_2-2026",
    question: "What is the systematic IUPAC name for the hydrocarbon with the structural formula $\\text{CH}_3\\text{CH(CH}_3)\\text{CH}_2\\text{CH}_3$?",
    options: [
      { text: "2-methylbutane", isCorrect: true },
      { text: "3-methylbutane" },
      { text: "2-dimethylpropane" },
      { text: "Pentane" }
    ],
    correctAnswer: 0,
    explanation: "* The longest continuous carbon chain has 4 carbons (butane).\n* Numbering from the end giving the substituent the lowest locant puts the methyl group at carbon-2: **2-methylbutane**.",
    level: 1,
    topic: "edexcel-unit-1",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / June 2026 Paper 1 Q29",
    createdAt: "2026-06-13T10:00:00Z"
  },
  {
    id: "ex_ed_u1_l4_lv1_3-2026",
    question: "What type of isomerism is shown between butane ($\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{CH}_3$) and 2-methylpropane ($\\text{CH}_3\\text{CH(CH}_3)\\text{CH}_3$)?",
    options: [
      { text: "Chain isomerism", isCorrect: true },
      { text: "Positional isomerism" },
      { text: "Functional group isomerism" },
      { text: "Geometric (E/Z) isomerism" }
    ],
    correctAnswer: 0,
    explanation: "* Both have the molecular formula $\\text{C}_4\\text{H}_{10}$ but differ in the carbon skeleton branching (straight chain vs branched chain), which is **chain isomerism**.",
    level: 1,
    topic: "edexcel-unit-1",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / Jan 2026 Paper 1 Q28",
    createdAt: "2026-06-14T10:00:00Z"
  },
  {
    id: "ex_ed_u1_l4_lv1_4-2026",
    question: "What essential reaction condition is required for alkanes to undergo free-radical substitution with halogens such as chlorine or bromine?",
    options: [
      { text: "High pressure (200 atm)" },
      { text: "Ultraviolet (UV) radiation or high temperature", isCorrect: true },
      { text: "Aqueous sodium hydroxide" },
      { text: "Nickel catalyst" }
    ],
    correctAnswer: 1,
    explanation: "* Alkanes react with halogens via a free-radical mechanism.\n* Ultraviolet (UV) light provides the photon energy required to break the covalent $\\text{Cl}-\\text{Cl}$ or $\\text{Br}-\\text{Br}$ bond homolytically during initiation.",
    level: 1,
    topic: "edexcel-unit-1",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / Oct 2025 Paper 1 Q29",
    createdAt: "2026-06-14T10:00:00Z"
  },
  {
    id: "ex_ed_u1_l4_lv1_5-2026",
    question: "Which of the following products is formed during the complete combustion of any hydrocarbon fuel in an excess of oxygen?",
    options: [
      { text: "Carbon monoxide and water" },
      { text: "Carbon dioxide and water", isCorrect: true },
      { text: "Carbon (soot) and hydrogen gas" },
      { text: "Methane and ozone" }
    ],
    correctAnswer: 1,
    explanation: "* Complete combustion of a hydrocarbon oxidizes all carbon to carbon dioxide ($\\text{CO}_2$) and all hydrogen to water ($\\text{H}_2\\text{O}$): $\\text{C}_x\\text{H}_y + (x + y/4)\\text{O}_2 \\rightarrow x\\text{CO}_2 + (y/2)\\text{H}_2\\text{O}$.",
    level: 1,
    topic: "edexcel-unit-1",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / June 2025 Paper 1 Q30",
    createdAt: "2026-06-15T10:00:00Z"
  },
  {
    id: "ex_ed_u1_l4_lv1_6-2026",
    question: "What is homolytic fission?",
    options: [
      { text: "Breaking of a covalent bond where one atom takes both electrons to form ions" },
      { text: "Breaking of a covalent bond where each bonded atom takes one of the shared electrons to form two neutral free radicals", isCorrect: true },
      { text: "The joining of two radicals to form a covalent bond" },
      { text: "The substitution of an atom by a nucleophile" }
    ],
    correctAnswer: 1,
    explanation: "* In homolytic fission, the shared electron pair splits evenly: each atom retains 1 electron, producing two neutral free radicals with unpaired electrons ($X-Y \\rightarrow X^\\bullet + Y^\\bullet$).",
    level: 1,
    topic: "edexcel-unit-1",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / Jan 2026 Paper 1 Q29",
    createdAt: "2026-06-15T10:00:00Z"
  },
  {
    id: "ex_ed_u1_l4_lv1_7-2026",
    question: "Which of the following is a toxic, odorless, and colorless gas produced by the incomplete combustion of alkane fuels?",
    options: [
      { text: "Carbon dioxide (CO₂)" },
      { text: "Carbon monoxide (CO)", isCorrect: true },
      { text: "Sulfur dioxide (SO₂)" },
      { text: "Nitrogen dioxide (NO₂)" }
    ],
    correctAnswer: 1,
    explanation: "* Incomplete combustion under limited oxygen supply produces carbon monoxide ($\\text{CO}$), a lethal toxic gas that binds irreversibly to hemoglobin.",
    level: 1,
    topic: "edexcel-unit-1",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / Oct 2025 Paper 1 Q30",
    createdAt: "2026-06-16T10:00:00Z"
  },
  {
    id: "ex_ed_u1_l4_lv1_8-2026",
    question: "What is the hybridization and molecular geometry around each carbon atom in an alkane molecule?",
    options: [
      { text: "sp, linear" },
      { text: "sp², trigonal planar" },
      { text: "sp³, tetrahedral (109.5°)", isCorrect: true },
      { text: "sp³d, trigonal bipyramidal" }
    ],
    correctAnswer: 2,
    explanation: "* Each carbon in an alkane forms 4 single $\\sigma$ bonds, utilizing $sp^3$ hybrid orbitals in a regular **tetrahedral** arrangement with bond angles of **$109.5^\\circ$**.",
    level: 1,
    topic: "edexcel-unit-1",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / June 2026 Paper 1 Q31",
    createdAt: "2026-06-16T10:00:00Z"
  }
];

