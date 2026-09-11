import { Question } from '../../../types';

export const level3Questions: Question[] = [
  {
    id: "ex_ed_u2_l5_lv3_1-2026",
    question: "Hydrolysis of 2-bromo-2-methylpropane (a tertiary halogenoalkane) with aqueous sodium hydroxide proceeds via an S_N1 mechanism. What is the rate-determining step in this mechanism?",
    options: [
      { text: "Simultaneous attack of hydroxide ion from behind while bromide leaves" },
      { text: "Slow heterolytic fission of the C–Br bond to generate a planar, relatively stable tertiary carbocation intermediate ((CH₃)₃C⁺) and a bromide ion", isCorrect: true },
      { text: "Proton transfer to form water" },
      { text: "Homolytic fission producing methyl radicals" }
    ],
    correctAnswer: 1,
    explanation: "* In the $S_N1$ mechanism, the rate-determining (slow) step is unimolecular ($r = k[\\text{tertiary halogenoalkane}]$): $\\text{(CH}_3)_3\\text{C}-\\text{Br} \\xrightarrow{\\text{slow}} \\text{(CH}_3)_3\\text{C}^+ + \\text{Br}^-$.\n* The planar tertiary carbocation is stabilized by the positive inductive electron release of three methyl groups.",
    level: 3,
    topic: "edexcel-unit-2",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Oct 2025 Paper 1 Q34",
    createdAt: "2026-08-19T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l5_lv3_2-2026",
    question: "When primary halogenoalkane 1-bromobutane reacts with aqueous hydroxide ions via an S_N2 mechanism with a chiral carbon center, what stereochemical outcome is observed at the reaction center?",
    options: [
      { text: "Complete racemization (50% inversion, 50% retention)" },
      { text: "Complete Walden inversion of configuration (100% inversion) due to nucleophilic backside attack opposite the leaving group", isCorrect: true },
      { text: "Complete retention of configuration" },
      { text: "Loss of optical activity through free radical dimerization" }
    ],
    correctAnswer: 1,
    explanation: "* In the concerted $S_N2$ mechanism, the nucleophile attacks the carbon atom directly from the back ($180^\\circ$ opposite the departing leaving group) through a trigonal bipyramidal transition state, causing full **Walden inversion**.",
    level: 3,
    topic: "edexcel-unit-2",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / June 2026 Paper 1 Q35",
    createdAt: "2026-08-19T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l5_lv3_3-2026",
    question: "An unknown organic compound with molecular formula $\\text{C}_3\\text{H}_6\\text{O}$ gives a positive orange precipitate with 2,4-dinitrophenylhydrazine (2,4-DNPH), but gives NO reaction (no silver mirror) with Tollens' reagent. What is the systematic IUPAC name of this compound?",
    options: [
      { text: "Propanal" },
      { text: "Propan-1-ol" },
      { text: "Propanone", isCorrect: true },
      { text: "Prop-2-en-1-ol" }
    ],
    correctAnswer: 2,
    explanation: "* A positive 2,4-DNPH test indicates a carbonyl compound (aldehyde or ketone).\n* Negative Tollens' reagent test eliminates aldehydes.\n* Therefore, the 3-carbon carbonyl is the ketone **propanone** ($\\text{CH}_3\\text{COCH}_3$).",
    level: 3,
    topic: "edexcel-unit-2",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Jan 2026 Paper 1 Q29",
    createdAt: "2026-08-20T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l5_lv3_4-2026",
    question: "The mass spectrum of an unknown alcohol shows a molecular ion peak at $m/z = 60$ and a prominent base peak at $m/z = 31$. What is the identity of the alcohol, and what fragment corresponds to $m/z = 31$?",
    options: [
      { text: "Propan-2-ol; fragment is [CH₃CH(OH)]⁺" },
      { text: "Propan-1-ol; fragment is the hydroxymethyl cation [CH₂OH]⁺", isCorrect: true },
      { text: "Ethanol; fragment is [C₂H₅]⁺" },
      { text: "Butan-1-ol; fragment is [OCH₃]⁺" }
    ],
    correctAnswer: 1,
    explanation: "* Molecular mass $M_r = 60$ corresponds to $\\text{C}_3\\text{H}_8\\text{O}$ (propan-1-ol or propan-2-ol).\n* In primary alcohols, alpha-cleavage yields the resonance-stabilized hydroxymethyl cation: $[\\text{CH}_2=\\text{OH}]^+$ at $m/z = 12 + 2 + 16 + 1 = \\mathbf{31}$.",
    level: 3,
    topic: "edexcel-unit-2",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Oct 2025 Paper 1 Q35",
    createdAt: "2026-08-20T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l5_lv3_5-2026",
    question: "In the preparation and purification of a liquid halogenoalkane (e.g., 1-bromobutane), anhydrous calcium chloride ($\\text{CaCl}_2$) or anhydrous magnesium sulfate ($\\text{MgSO}_4$) is added to the organic layer before final distillation. What is the chemical purpose of this step?",
    options: [
      { text: "To act as a catalyst for distillation" },
      { text: "To act as a drying agent, removing trace residual water from the organic product until the cloudy liquid turns completely clear", isCorrect: true },
      { text: "To neutralize acidic impurities" },
      { text: "To precipitate unreacted alcohol" }
    ],
    correctAnswer: 1,
    explanation: "* Anhydrous inorganic salts hydrate by binding residual dissolved water molecules into solid crystalline hydrates, turning the cloudy organic phase into a clear, dry liquid ready for pure distillation.",
    level: 3,
    topic: "edexcel-unit-2",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / June 2025 Paper 1 Q36",
    createdAt: "2026-08-20T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l5_lv3_6-2026",
    question: "The high-resolution mass spectrum of an organic compound containing chlorine exhibits two molecular ion peaks: $M^+$ at $m/z = 78$ and $[M+2]^+$ at $m/z = 80$ in an exact $3 : 1$ intensity ratio. What is the molecular formula of this compound?",
    options: [
      { text: "C₂H₅Cl", isCorrect: true },
      { text: "C₃H₇Cl" },
      { text: "CH₃Cl" },
      { text: "C₄H₉Cl" }
    ],
    correctAnswer: 0,
    explanation: "* The $3:1$ doublet ratio between $M^+$ and $[M+2]^+$ is diagnostic of a single chlorine atom ($^{35}\\text{Cl} : ^{37}\\text{Cl} \\approx 75\\% : 25\\% = 3 : 1$).\n* For chloroethane ($\\text{C}_2\\text{H}_5\\text{Cl}$): $M_r(^{35}\\text{Cl}) = 2(12) + 5(1) + 35 = 24 + 5 + 35 = \\mathbf{78}$, and $M_r(^{37}\\text{Cl}) = \\mathbf{80}$.",
    level: 3,
    topic: "edexcel-unit-2",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Jan 2026 Paper 1 Q30",
    createdAt: "2026-08-20T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l5_lv3_7-2026",
    question: "The mass spectrum of pentan-2-one exhibits a major fragment peak at $m/z = 43$. What is the identity of this fragment?",
    options: [
      { text: "[CH₃CH₂CH₂]⁺" },
      { text: "[CH₃CO]⁺ (acylium ion)", isCorrect: true },
      { text: "[CH₃CH₂CO]⁺" },
      { text: "[CH₃CH₂CH₂CH₂]⁺" }
    ],
    correctAnswer: 1,
    explanation: "* Pentan-2-one ($\\text{CH}_3\\text{COCH}_2\\text{CH}_2\\text{CH}_3$) undergoes alpha-cleavage at the carbonyl group to yield the highly stable resonance-stabilized acylium ion fragment $[\\text{CH}_3-\\text{C}\\equiv\\text{O}]^+$ at $m/z = 15 + 12 + 16 = \\mathbf{43}$.\n* (Note: while propyl $[\\text{C}_3\\text{H}_7]^+$ is also 43, the acylium ion is typically the primary fragmentation driver of ketones).",
    level: 3,
    topic: "edexcel-unit-2",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / June 2026 Paper 1 Q47",
    createdAt: "2026-09-07T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l5_lv3_8-2026",
    question: "The mass spectrum of an organic compound containing a single bromine atom exhibits a pair of molecular ion peaks (M⁺ and [M+2]⁺) at $m/z$ values of 108 and 110. What is the relative height of these two peaks, and what is the chemical formula of the compound?",
    options: [
      { text: "Doublet in 3 : 1 ratio; formula is C₂H₅Br" },
      { text: "Doublet in 1 : 1 ratio; formula is C₂H₅Br", isCorrect: true },
      { text: "Doublet in 1 : 1 ratio; formula is C₃H₇Br" },
      { text: "Singlet at 109" }
    ],
    correctAnswer: 1,
    explanation: "* Bromine exists in nature as two isotopes in almost equal abundance: $^{79}\\text{Br}$ ($50.7\\%$) and $^{81}\\text{Br}$ ($49.3\\%$).\n* This yields a $1:1$ molecular ion doublet at $m/z = 108$ (for $\\text{C}_2\\text{H}_5^{79}\\text{Br}$) and $110$ (for $\\text{C}_2\\text{H}_5^{81}\\text{Br}$).",
    level: 3,
    topic: "edexcel-unit-2",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Oct 2025 Paper 1 Q36",
    createdAt: "2026-09-07T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l5_lv3_9-2026",
    question: "Why do primary halogenoalkanes undergo nucleophilic substitution via the S_N2 mechanism, whereas tertiary halogenoalkanes react via the S_N1 mechanism?",
    options: [
      { text: "Primary carbocations are highly stable" },
      { text: "Steric hindrance prevents nucleophiles from attacking the carbon in tertiary halogenoalkanes, which instead form stable tertiary carbocations; primary halogenoalkanes have minimal steric hindrance, allowing concerted backside attack", isCorrect: true },
      { text: "S_N1 reactions require gaseous conditions" },
      { text: "Chlorine only reacts via S_N2" }
    ],
    correctAnswer: 1,
    explanation: "* Tertiary halogenoalkanes are surrounded by bulky alkyl groups that block backside attack ($S_N2$ transition state is sterically hindered).\n* However, tertiary carbocations are stabilized by inductive electron release.\n* Primary compounds have little steric hindrance, favoring the single-step $S_N2$ mechanism because primary carbocations are too unstable to form.",
    level: 3,
    topic: "edexcel-unit-2",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Jan 2026 Paper 1 Q35",
    createdAt: "2026-09-08T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l5_lv3_10-2026",
    question: "An unknown compound with molecular formula $\\text{C}_4\\text{H}_8\\text{O}$ exhibits a strong, sharp absorption band at 1715 cm⁻¹ in its IR spectrum. In its mass spectrum, a prominent fragment ion peak appears at $m/z = 57$ (corresponding to loss of a methyl group). Deduce the structural formula of this compound.",
    options: [
      { text: "Butanal (CH₃CH₂CH₂CHO)" },
      { text: "Butanone (CH₃COCH₂CH₃)", isCorrect: true },
      { text: "But-2-en-1-ol (CH₃CH=CHCH₂OH)" },
      { text: "Tetrahydrofuran" }
    ],
    correctAnswer: 1,
    explanation: "* The IR absorption at $1715\\text{ cm}^{-1}$ indicates a carbonyl group.\n* The mass spectrum shows loss of $15$ units ($M - 15 = 57$, where $M = 72$).\n* For butanone ($\\text{CH}_3\\text{COCH}_2\\text{CH}_3$), cleavage of the $\\text{C}-\\text{C}$ bond next to the carbonyl releases a methyl group to form the acylium ion fragment $[\\text{CH}_3\\text{CH}_2\\text{CO}]^+$ ($m/z = 57$), confirming its structure.",
    level: 3,
    topic: "edexcel-unit-2",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / June 2025 Paper 1 Q48",
    createdAt: "2026-09-08T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l5_lv3_11-2026",
    question: "Which of the following describes the nature of the transition state in the S_N2 hydrolysis of bromomethane?",
    options: [
      { text: "A planar carbocation intermediate with separate bromide and hydroxide ions" },
      { text: "A single, unstable species containing a central carbon atom with five partial bonds in a trigonal bipyramidal geometry", isCorrect: true },
      { text: "A free-radical carbon center with high spin multiplicity" },
      { text: "A tetrahedral intermediate with a positive charge on oxygen" }
    ],
    correctAnswer: 1,
    explanation: "* In the concerted $S_N2$ mechanism, the transition state has the nucleophile and leaving group partially bonded to the central carbon: $[\\text{HO}\\cdots\\text{CH}_3\\cdots\\text{Br}]^{\\delta-}$.\n* The three $\\text{C}-\\text{H}$ bonds lie in a single plane, forming a trigonal bipyramidal arrangement.",
    level: 3,
    topic: "edexcel-unit-2",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Oct 2025 Paper 1 Q37",
    createdAt: "2026-09-09T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l5_lv3_12-2026",
    question: "The dehydration of butan-2-ol with concentrated phosphoric acid produces three isomeric alkenes. What are their names?",
    options: [
      { text: "But-1-ene, cis-but-2-ene, and trans-but-2-ene", isCorrect: true },
      { text: "But-1-ene, but-2-ene, and 2-methylpropene" },
      { text: "Cyclobutane, but-1-ene, and butadiene" },
      { text: "But-1-yne, but-2-yne, and butene" }
    ],
    correctAnswer: 0,
    explanation: "* Dehydration of butan-2-ol can eliminate a hydrogen from C1 or C3:\n  * Elimination from C1 yields **but-1-ene**.\n  * Elimination from C3 yields **but-2-ene**, which exists as stereoisomeric **cis-but-2-ene** (Z) and **trans-but-2-ene** (E) due to restricted rotation about the double bond.",
    level: 3,
    topic: "edexcel-unit-2",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Jan 2026 Paper 1 Q36",
    createdAt: "2026-09-09T10:00:00Z"
  }
];

