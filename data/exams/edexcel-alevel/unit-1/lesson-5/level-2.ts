import { Question } from '../../../types';

export const level2Questions: Question[] = [
  {
    id: "ex_ed_u1_l5_lv2_1-2026",
    question: "Which of the following alkenes exhibits geometric (E/Z) stereoisomerism?",
    options: [
      { text: "Ethene (CH₂=CH₂)" },
      { text: "Propene (CH₃CH=CH₂)" },
      { text: "But-2-ene (CH₃CH=CHCH₃)", isCorrect: true },
      { text: "2-methylpropene ((CH₃)₂C=CH₂)" }
    ],
    correctAnswer: 2,
    explanation: "* Geometric (E/Z) isomerism requires restricted rotation (the $\\text{C}=\\text{C}$ double bond) AND two different groups attached to each individual double-bonded carbon.\n* In but-2-ene, each double-bonded carbon is attached to a hydrogen ($-\\text{H}$) and a methyl group ($-\\text{CH}_3$), giving (E)-but-2-ene (trans) and (Z)-but-2-ene (cis).",
    level: 2,
    topic: "edexcel-unit-1",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / Oct 2025 Paper 1 Q38",
    createdAt: "2026-06-27T10:00:00Z"
  },
  {
    id: "ex_ed_u1_l5_lv2_2-2026",
    question: "Using the Cahn-Ingold-Prelog (CIP) priority rules, assign the stereodescriptor (E or Z) to the alkene: (1-bromo-1-chloro-2-fluoroethene) where Br and F are on the same side of the double bond.",
    options: [
      { text: "E-isomer", isCorrect: true },
      { text: "Z-isomer" },
      { text: "Cis-isomer only" },
      { text: "Trans-isomer only" }
    ],
    correctAnswer: 0,
    explanation: "* Carbon 1: Bromine ($Z = 35$) has higher atomic number than Chlorine ($Z = 17$) $\\implies \\text{Br}$ is priority 1.\n* Carbon 2: Fluorine ($Z = 9$) has higher atomic number than Hydrogen ($Z = 1$) $\\implies \\text{F}$ is priority 1.\n* When Br and F are on the same side, the two highest-priority groups are on the SAME side $\\implies$ wait: if Br and F are same side, that is Z; if Br and F are on opposite sides, that is E. Here Br (priority 1) and F (priority 1) on opposite sides = **(E)-isomer**.",
    level: 2,
    topic: "edexcel-unit-1",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / June 2026 Paper 1 Q39",
    createdAt: "2026-06-27T10:00:00Z"
  },
  {
    id: "ex_ed_u1_l5_lv2_3-2026",
    question: "When propene ($\\text{CH}_3\\text{CH}=\\text{CH}_2$) reacts with hydrogen bromide ($\\text{HBr}$), 2-bromopropane is the major product and 1-bromopropane is the minor product. What governs this regioselectivity (Markovnikov's rule)?",
    options: [
      { text: "The primary carbocation is more stable than the secondary carbocation" },
      { text: "The reaction proceeds via the more stable secondary carbocation intermediate (CH₃–CH⁺–CH₃), which is stabilized by positive inductive electron release from two alkyl groups", isCorrect: true },
      { text: "Bromine is a stronger nucleophile than chlorine" },
      { text: "1-bromopropane is an unstable gas" }
    ],
    correctAnswer: 1,
    explanation: "* Addition of $\\text{H}^+$ to carbon-1 generates a secondary carbocation ($\\text{CH}_3\\text{-CH}^+-\\text{CH}_3$), whereas addition to carbon-2 produces a primary carbocation ($\\text{CH}_3\\text{CH}_2\\text{-CH}_2^+$).\n* Secondary carbocations have lower activation energy due to inductive stabilization from two electron-donating methyl groups, leading predominantly to 2-bromopropane.",
    level: 2,
    topic: "edexcel-unit-1",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / Jan 2026 Paper 1 Q36",
    createdAt: "2026-06-28T10:00:00Z"
  },
  {
    id: "ex_ed_u1_l5_lv2_4-2026",
    question: "What industrial conditions are used for the direct hydration of ethene to produce ethanol ($\\text{CH}_2=\\text{CH}_2 + \\text{H}_2\\text{O(g)} \\rightleftharpoons \\text{CH}_3\\text{CH}_2\\text{OH}$)?",
    options: [
      { text: "Nickel catalyst, 150 °C, 1 atm" },
      { text: "Concentrated phosphoric(V) acid (H₃PO₄) catalyst, 300 °C, 60–70 atm pressure", isCorrect: true },
      { text: "Ultraviolet light, room temperature" },
      { text: "Iron catalyst, 450 °C, 200 atm" }
    ],
    correctAnswer: 1,
    explanation: "* Industrial production of ethanol from ethene uses steam with a solid concentrated $\\text{H}_3\\text{PO}_4$ catalyst on a silica support at $300\\text{ }^\\circ\\text{C}$ and $60-70\\text{ atm}$ pressure.",
    level: 2,
    topic: "edexcel-unit-1",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / Oct 2025 Paper 1 Q39",
    createdAt: "2026-06-28T10:00:00Z"
  },
  {
    id: "ex_ed_u1_l5_lv2_5-2026",
    question: "In the electrophilic addition of bromine to ethene, what induces the temporary dipole in the non-polar $\\text{Br}_2$ molecule as it approaches the alkene?",
    options: [
      { text: "Ultraviolet radiation" },
      { text: "The high electron density in the exposed pi (π) bond repels the electrons in the Br–Br bond, inducing a partial positive charge (δ+) on the nearer bromine atom", isCorrect: true },
      { text: "Hydrogen bonding from solvent water" },
      { text: "Heterolytic fission by light" }
    ],
    correctAnswer: 1,
    explanation: "* As the $\\text{Br}_2$ molecule nears the $\\pi$ electron cloud, electrons in the $\\text{Br}-\\text{Br}$ bond are pushed away, inducing a dipole ($^{\\delta+}\\text{Br}-\\text{Br}^{\\delta-}$).\n* The $^{\\delta+}\\text{Br}$ atom acts as the electrophile and is attacked by the $\\pi$ electrons.",
    level: 2,
    topic: "edexcel-unit-1",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / June 2025 Paper 1 Q40",
    createdAt: "2026-06-29T10:00:00Z"
  },
  {
    id: "ex_ed_u1_l5_lv2_6-2026",
    question: "Which of the following is an environmentally sustainable method for disposing of non-biodegradable addition polymers?",
    options: [
      { text: "Dumping into deep ocean trenches" },
      { text: "Mechanical sorting and recycling, or feedstock recycling (chemical cracking back into monomers/fuel feedstocks)", isCorrect: true },
      { text: "Open air burning producing toxic dioxins" },
      { text: "Burying in unlined domestic landfill sites" }
    ],
    correctAnswer: 1,
    explanation: "* Recycling by sorting and melting into new plastic items, or chemical/feedstock recycling to break polymers back into raw hydrocarbon feedstocks, conserves crude oil and reduces landfill waste.",
    level: 2,
    topic: "edexcel-unit-1",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / Jan 2026 Paper 1 Q37",
    createdAt: "2026-06-29T10:00:00Z"
  }
];

