import { Question } from '../../../types';

export const level2Questions: Question[] = [
  {
    id: "ex_ed_u4_l5_lv2_1-2026",
    question: "When propanal (an aldehyde) reacts with potassium cyanide in the presence of dilute acid ($\text{KCN} / \text{H}^+$), a hydroxynitrile is formed: $\\text{CH}_3\\text{CH}_2\\text{CHO} + \\text{HCN} \\rightarrow \\text{CH}_3\\text{CH}_2\\text{CH(OH)CN}$. Why is the resulting product mixture completely OPTICALLY INACTIVE?",
    options: [
      { text: "The product contains no chiral carbon atoms" },
      { text: "The planar carbonyl group (>C=O) at the sp² hybridised carbon has an equal 50% probability of being attacked by the cyanide nucleophile (:CN⁻) from either above or below the plane, producing an equimolar racemic mixture of two enantiomers whose optical rotations cancel out", isCorrect: true },
      { text: "HCN decomposes all optical isomers" },
      { text: "Hydroxynitriles form symmetric cyclic dimers" }
    ],
    correctAnswer: 1,
    explanation: "* The carbonyl group is trigonal planar. Attack from the top face vs bottom face occurs with equal probability ($50:50$), yielding a **racemic mixture** with zero net optical rotation.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Oct 2025 Paper 1 Q60",
    createdAt: "2026-12-03T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l5_lv2_2-2026",
    question: "Which of the following haloalkane hydrolysis mechanisms results in COMPLETE INVERSION of optical configuration (Walden inversion), transitioning a pure $(R)$-enantiomer into a pure $(S)$-enantiomer?",
    options: [
      { text: "S_N1 mechanism via a planar carbocation intermediate" },
      { text: "S_N2 mechanism via a single backside attack through a trigonal bipyramidal transition state", isCorrect: true },
      { text: "Electrophilic addition" },
      { text: "Free radical substitution" }
    ],
    correctAnswer: 1,
    explanation: "* In $S_N2$, the incoming nucleophile attacks directly opposite ($180^\\circ$) the leaving group, causing a concerted umbrella-like inversion of configuration ($100\\%$ stereochemical inversion).",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2026 Paper 1 Q61",
    createdAt: "2026-12-03T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l5_lv2_3-2026",
    question: "Why does alkaline hydrolysis (saponification) of an ester (e.g. ethyl ethanoate with aqueous $\\text{NaOH}$) go to $100\\%$ COMPLETION, whereas acid-catalyzed hydrolysis reaches a reversible equilibrium?",
    options: [
      { text: "The acid catalyst evaporates during the reaction" },
      { text: "In alkaline hydrolysis, the carboxylic acid product immediately loses a proton to form a resonance-stabilized carboxylate anion (CH₃COO⁻), which cannot undergo nucleophilic attack by alcohol molecules, preventing the reverse reaction", isCorrect: true },
      { text: "Alkaline hydrolysis produces solid sodium" },
      { text: "Sodium hydroxide destroys the alcohol" }
    ],
    correctAnswer: 1,
    explanation: "* Deprotonation to form the carboxylate salt ($\\text{CH}_3\\text{COO}^-$) removes the carboxylic acid from equilibrium, driving the reaction irreversibly to $100\\%$ yield.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2026 Paper 1 Q51",
    createdAt: "2026-12-04T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l5_lv2_4-2026",
    question: "Which of the following organic compounds will react with solid sodium hydrogencarbonate ($\\text{NaHCO}_3\\text{(s)}$) to produce effervescence of carbon dioxide gas ($\\text{CO}_2\\text{(g)}$)?",
    options: [
      { text: "Ethanol (CH₃CH₂OH)" },
      { text: "Ethanoic acid (CH₃COOH)", isCorrect: true },
      { text: "Propanone (CH₃COCH₃)" },
      { text: "Ethyl ethanoate (CH₃COOCH₂CH₃)" }
    ],
    correctAnswer: 1,
    explanation: "* Only carboxylic acids are sufficiently acidic ($pK_a \\approx 4.8$) to protonate hydrogencarbonate ions: $\\text{RCOOH} + \\text{HCO}_3^- \\rightarrow \\text{RCOO}^- + \\text{H}_2\\text{O} + \\text{CO}_2\\text{(g)}$. Alcohols, aldehydes, ketones, and esters do not react.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Oct 2025 Paper 1 Q61",
    createdAt: "2026-12-04T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l5_lv2_5-2026",
    question: "What is the organic product formed when propanone reacts with phosphorus(V) chloride ($\\text{PCl}_5$) at room temperature?",
    options: [
      { text: "Propanoyl chloride" },
      { text: "2,2-dichloropropane: CH₃–CCl₂–CH₃ (along with POCl₃)", isCorrect: true },
      { text: "1-chloropropane" },
      { text: "Propanoic acid" }
    ],
    correctAnswer: 1,
    explanation: "* Ketones react with $\\text{PCl}_5$ to replace the carbonyl oxygen atom with two chlorine atoms on the same carbon, forming a geminal dichloroalkane ($\text{CH}_3\\text{CCl}_2\\text{CH}_3 + \\text{POCl}_3$).",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2025 Paper 1 Q62",
    createdAt: "2026-12-05T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l5_lv2_6-2026",
    question: "Why are acyl chlorides (e.g. ethanoyl chloride) vastly more reactive towards nucleophilic attack than carboxylic acids and esters?",
    options: [
      { text: "Acyl chlorides contain ionic bonds" },
      { text: "The strongly electronegative chlorine atom withdraws electron density, making the carbonyl carbon much more electron-deficient (strongly δ+), and the chloride ion (Cl⁻) acts as an exceptionally good leaving group", isCorrect: true },
      { text: "Acyl chlorides are non-polar molecules" },
      { text: "The chlorine atom donates electrons to the carbonyl group" }
    ],
    correctAnswer: 1,
    explanation: "* The electron-withdrawing inductive effect of chlorine enhances $\\delta+$ charge on the carbonyl carbon, and $\\text{Cl}^-$ is a weak base / stable leaving group.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2026 Paper 1 Q52",
    createdAt: "2026-12-05T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l5_lv2_7-2026",
    question: "When a pure $(R)$-enantiomer of a tertiary bromoalkane undergoes hydrolysis via the $\\text{S}_\\text{N}1$ mechanism ($(\\text{CH}_3)_2\\text{C(Br)CH}_2\\text{CH}_3 + \\text{OH}^-$), what is the stereochemical outcome and optical activity of the resulting alcohol product mixture?",
    options: [
      { text: "100% inversion with complete retention of optical rotation" },
      { text: "Racemisation occurs because the planar carbocation intermediate can be attacked by the nucleophile (:OH⁻) with equal probability from either side, producing an optically inactive racemic mixture", isCorrect: true },
      { text: "The product forms a chiral meso compound" },
      { text: "No reaction occurs" }
    ],
    correctAnswer: 1,
    explanation: "* In $S_N1$, the rate-determining loss of bromide forms a flat, trigonal planar carbocation intermediate. Attack from the top or bottom face is equally likely, yielding a **racemic mixture** ($50:50$).",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Oct 2025 Paper 1 Q67",
    createdAt: "2027-01-02T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l5_lv2_8-2026",
    question: "Why does 2-hydroxypropanoic acid (lactic acid) display optical isomerism, whereas 3-hydroxypropanoic acid does NOT?",
    options: [
      { text: "3-hydroxypropanoic acid is a gas" },
      { text: "In 2-hydroxypropanoic acid, C-2 is bonded to 4 different groups (–H, –OH, –CH₃, –COOH), making it chiral; in 3-hydroxypropanoic acid, C-2 and C-3 are bonded to two identical hydrogen atoms each (–CH₂–), making them achiral", isCorrect: true },
      { text: "Lactic acid has no oxygen atoms" },
      { text: "3-hydroxypropanoic acid contains a double bond" }
    ],
    correctAnswer: 1,
    explanation: "* Only carbon-2 in $\\text{CH}_3\\mathbf{\\text{C}}^*\\text{H(OH)COOH}$ has four unique substituents; in $\\text{HOCH}_2\\text{CH}_2\\text{COOH}$, both aliphatic carbons have two identical hydrogens (achiral).",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2026 Paper 1 Q68",
    createdAt: "2027-01-02T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l5_lv2_9-2026",
    question: "What organic product is formed when ethanoyl chloride ($\\text{CH}_3\\text{COCl}$) reacts with ethanol ($\\text{CH}_3\\text{CH}_2\\text{OH}$) at room temperature?",
    options: [
      { text: "Ethanoic acid" },
      { text: "Ethyl ethanoate (CH₃COOCH₂CH₃) and steamy fumes of HCl", isCorrect: true },
      { text: "Diethyl ether" },
      { text: "Ethanal" }
    ],
    correctAnswer: 1,
    explanation: "* Acyl chlorides react irreversibly with alcohols via nucleophilic addition-elimination to yield an **ester** and hydrogen chloride gas: $\\text{CH}_3\\text{COCl} + \\text{C}_2\\text{H}_5\\text{OH} \\rightarrow \\mathbf{\\text{CH}_3\\text{COOC}_2\\text{H}_5} + \\text{HCl(g)}$.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2026 Paper 1 Q57",
    createdAt: "2027-01-03T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l5_lv2_10-2026",
    question: "Why is sodium borohydride ($\\text{NaBH}_4$) capable of reducing aldehydes and ketones, yet completely incapable of reducing carboxylic acids or esters?",
    options: [
      { text: "Carboxylic acids are insoluble in water" },
      { text: "The carbonyl carbon in carboxylic acids and esters has significant electron donation from the adjacent lone pairs on the oxygen atom (resonance), making it much less electrophilic (less δ+) and unreactive towards the relatively mild nucleophilic hydride (:H⁻) of NaBH₄", isCorrect: true },
      { text: "NaBH₄ only reacts with double C=C bonds" },
      { text: "Esters destroy the reagent by precipitation" }
    ],
    correctAnswer: 1,
    explanation: "* Resonance donation from the $-\\text{OH}$ or $-\\text{OR}$ lone pair delocalizes electrons into the carbonyl group, reducing its partial positive charge ($\delta+$) so that only the stronger $\\text{LiAlH}_4$ can reduce it.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Oct 2025 Paper 1 Q68",
    createdAt: "2027-01-03T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l5_lv2_11-2026",
    question: "What is the organic product formed when propanoic acid reacts with methanol in the presence of concentrated sulfuric acid under reflux?",
    options: [
      { text: "Ethyl methanoate" },
      { text: "Methyl propanoate (CH₃CH₂COOCH₃) and water", isCorrect: true },
      { text: "Propyl methanoate" },
      { text: "Dimethyl ether" }
    ],
    correctAnswer: 1,
    explanation: "* $\\text{CH}_3\\text{CH}_2\\text{COOH} + \\text{CH}_3\\text{OH} \\xrightleftharpoons{\\text{H}^+} \\mathbf{\\text{CH}_3\\text{CH}_2\\text{COOCH}_3} + \\text{H}_2\\text{O}$ (esterification forming methyl propanoate).",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2025 Paper 1 Q69",
    createdAt: "2027-01-04T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l5_lv2_12-2026",
    question: "Which of the following organic structures will NOT react with acidified potassium dichromate(VI) ($\\text{K}_2\\text{Cr}_2\\text{O}_7 / \\text{H}^+$) when heated under reflux?",
    options: [
      { text: "Propanal" },
      { text: "Propan-2-one (CH₃COCH₃, a ketone)", isCorrect: true },
      { text: "Ethanol" },
      { text: "Butan-1-ol" }
    ],
    correctAnswer: 1,
    explanation: "* Ketones lack a hydrogen atom bonded directly to the carbonyl carbon atom, so they resist oxidation under mild conditions with acidified dichromate(VI) (the solution remains orange).",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2026 Paper 1 Q58",
    createdAt: "2027-01-04T10:00:00Z"
  }
];


