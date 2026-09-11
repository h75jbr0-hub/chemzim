import { Question } from '../../../types';

export const level3Questions: Question[] = [
  {
    id: "ex_ed_u1_l5_lv3_1-2026",
    question: "When propene is bubbled through an aqueous solution of bromine containing dissolved sodium chloride ($\\text{NaCl(aq)}$), a mixture of products is obtained. Which of the following is NOT formed in this reaction?",
    options: [
      { text: "1,2-dibromopropane" },
      { text: "1-bromo-2-chloropropane" },
      { text: "1-bromopropan-2-ol" },
      { text: "1,2-dichloropropane", isCorrect: true }
    ],
    correctAnswer: 3,
    explanation: "* The electrophilic attack is initiated by $^{\\delta+}\\text{Br}$ from $\\text{Br}_2$, forming the cyclic bromonium ion / secondary carbocation ($CH_3-\\overset{+}{C}H-CH_2Br$).\n* Nucleophiles present ($\\text{Br}^-, \\text{Cl}^-$, and $\\text{H}_2\\text{O}$) attack the carbocation, giving 1,2-dibromopropane, 1-bromo-2-chloropropane, and 1-bromopropan-2-ol.\n* 1,2-dichloropropane cannot form because no $\\text{Cl}^+$ electrophile was present initially to attack the double bond.",
    level: 3,
    topic: "edexcel-unit-1",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / Oct 2025 Paper 1 Q40",
    createdAt: "2026-06-30T10:00:00Z"
  },
  {
    id: "ex_ed_u1_l5_lv3_2-2026",
    question: "Which of the following isomeric alkenes with molecular formula $\\text{C}_5\\text{H}_{10}$ exists as a pair of geometric (E/Z) stereoisomers?",
    options: [
      { text: "Pent-1-ene" },
      { text: "Pent-2-ene", isCorrect: true },
      { text: "2-methylbut-1-ene" },
      { text: "2-methylbut-2-ene" }
    ],
    correctAnswer: 1,
    explanation: "* Pent-2-ene ($\\text{CH}_3\\text{CH}=\\text{CHCH}_2\\text{CH}_3$): Carbon-2 carries $-\\text{H}$ and $-\\text{CH}_3$; Carbon-3 carries $-\\text{H}$ and $-\\text{CH}_2\\text{CH}_3$.\n* Because both double-bonded carbons have two distinct groups, it exists as (E)-pent-2-ene and (Z)-pent-2-ene.",
    level: 3,
    topic: "edexcel-unit-1",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / June 2026 Paper 1 Q41",
    createdAt: "2026-06-30T10:00:00Z"
  },
  {
    id: "ex_ed_u1_l5_lv3_3-2026",
    question: "When 2-methylbut-2-ene reacts with hydrogen bromide ($\text{HBr}$), 2-bromo-2-methylbutane is formed as the major product instead of 2-bromo-3-methylbutane. Which carbocation intermediate is responsible for this major product?",
    options: [
      { text: "Primary carbocation: (CH₃)₂CH–CH₂–CH₂⁺" },
      { text: "Secondary carbocation: (CH₃)₂CH–C⁺H–CH₃" },
      { text: "Tertiary carbocation: (CH₃)₂C⁺–CH₂CH₃", isCorrect: true },
      { text: "Cyclic bromonium ion" }
    ],
    correctAnswer: 2,
    explanation: "* Addition of $\\text{H}^+$ to C3 creates a **tertiary carbocation** ($\\text{(CH}_3)_2\\text{C}^+-\\text{CH}_2\\text{CH}_3$).\n* Tertiary carbocations are much more stable than secondary carbocations due to the electron-donating inductive effect of three attached alkyl groups, resulting in 2-bromo-2-methylbutane.",
    level: 3,
    topic: "edexcel-unit-1",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / Jan 2026 Paper 1 Q38",
    createdAt: "2026-07-01T10:00:00Z"
  },
  {
    id: "ex_ed_u1_l5_lv3_4-2026",
    question: "Poly(phenylethene) (polystyrene) has a repeat unit of $-\\text{[CH}_2-\\text{CH(C}_6\\text{H}_5)]_n-$. What is the mass of poly(phenylethene) produced from $52.0\\text{ g}$ of phenylethene monomer ($M_r = 104.0$) assuming an $85.0\\%$ percentage yield?",
    options: [
      { text: "44.2 g", isCorrect: true },
      { text: "52.0 g" },
      { text: "88.4 g" },
      { text: "104.0 g" }
    ],
    correctAnswer: 0,
    explanation: "* Addition polymerization has an atom economy of $100\\%$ (all monomer mass converts to polymer).\n* Theoretical mass $= 52.0\\text{ g}$.\n* Actual mass $= 52.0\\text{ g} \\times 0.850 = 44.2\\text{ g}$.",
    level: 3,
    topic: "edexcel-unit-1",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / Oct 2025 Paper 1 Q41",
    createdAt: "2026-07-01T10:00:00Z"
  },
  {
    id: "ex_ed_u1_l5_lv3_5-2026",
    question: "Why is the incineration of halogenated polymers such as poly(chloroethene) (PVC) an environmental hazard unless scrubbers are installed?",
    options: [
      { text: "It consumes too much oxygen gas from the atmosphere" },
      { text: "Combustion releases toxic, corrosive hydrogen chloride (HCl) gas and carcinogenic chlorinated dioxins into the atmosphere", isCorrect: true },
      { text: "It produces liquid nitrogen that freezes power plants" },
      { text: "It causes immediate depletion of helium reserves" }
    ],
    correctAnswer: 1,
    explanation: "* Burning chlorinated polymers generates toxic, corrosive $\\text{HCl(g)}$ (which causes acid rain) and dangerous persistent organic pollutants like dioxins.\n* Flue-gas scrubbers using alkaline bases ($\text{CaO}$ or $\text{CaCO}_3$) are required to neutralize the $\\text{HCl}$.",
    level: 3,
    topic: "edexcel-unit-1",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / June 2025 Paper 1 Q42",
    createdAt: "2026-07-02T10:00:00Z"
  },
  {
    id: "ex_ed_u1_l5_lv3_6-2026",
    question: "In the electrophilic addition of hydrogen halides to alkenes, what is the order of reactivity: $\\text{HF} < \\text{HCl} < \\text{HBr} < \\text{HI}$? What factor explains this trend?",
    options: [
      { text: "Electronegativity of the halogen" },
      { text: "Hydrogen-halogen bond enthalpy decreases down the group (H–I bond is weakest and broken most easily in the rate-determining step)", isCorrect: true },
      { text: "Boiling point of the hydrogen halide" },
      { text: "Solubility in water" }
    ],
    correctAnswer: 1,
    explanation: "* The rate-determining step involves breaking the $\\text{H}-\\text{X}$ bond.\n* Down Group 7, atomic radius increases and orbital overlap becomes less effective, decreasing bond enthalpy ($\\text{H}-\\text{I} = 299\\text{ kJ mol}^{-1}$ vs $\\text{H}-\\text{F} = 568\\text{ kJ mol}^{-1}$), making $\\text{HI}$ the most reactive.",
    level: 3,
    topic: "edexcel-unit-1",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / Jan 2026 Paper 1 Q39",
    createdAt: "2026-07-02T10:00:00Z"
  }
];

