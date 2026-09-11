import { Question } from '../../../types';

export const level3Questions: Question[] = [
  {
    id: "ex_ed_u4_l5_lv3_1-2026",
    question: "An unknown organic compound $\\text{X}$ ($\text{C}_4\text{H}_8\text{O}$) gives an orange-yellow crystalline precipitate with 2,4-dinitrophenylhydrazine, but does NOT react with Tollens' reagent or Fehling's solution. Compound $\\text{X}$ reacts with alkaline iodine ($\\text{I}_2 / \\text{NaOH}$) to form a pale yellow precipitate with an antiseptic smell. Identify compound $\\text{X}$ and write the formula of the yellow precipitate.",
    options: [
      { text: "Butanal; precipitate is Ag(s)" },
      { text: "Butanone (CH₃COCH₂CH₃); precipitate is triiodomethane (CHI₃)", isCorrect: true },
      { text: "Butan-1-ol; precipitate is Cu₂O" },
      { text: "Ethanoic acid; precipitate is I₂" }
    ],
    correctAnswer: 1,
    explanation: "* 2,4-DNPH positive $\\implies$ Carbonyl (aldehyde or ketone).\n* Tollens' / Fehling's negative $\\implies$ Ketone (not an aldehyde).\n* Iodoform test positive $\\implies$ Methyl ketone ($\text{CH}_3\\text{CO}-$ group).\n* Four carbons $\\implies \\mathbf{\\text{Butanone (CH}_3\\text{COCH}_2\\text{CH}_3)}$; yellow precipitate is $\\mathbf{\\text{CHI}_3}$.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Oct 2025 Paper 1 Q62",
    createdAt: "2026-12-06T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l5_lv3_2-2026",
    question: "Compound $\\text{Y}$ has molecular formula $\\text{C}_5\\text{H}_{10}\\text{O}_2$. It is insoluble in aqueous sodium hydrogencarbonate. Hydrolysis of $\\text{Y}$ with hot dilute sulfuric acid yields two organic compounds: compound $\\text{P}$ ($\text{C}_2\text{H}_4\text{O}_2$), which produces effervescence with $\\text{Na}_2\\text{CO}_3$, and compound $\\text{Q}$ ($\text{C}_3\\text{H}_8\text{O}$), which gives a positive iodoform test. What is the systematic IUPAC name of ester $\\text{Y}$?",
    options: [
      { text: "Propyl ethanoate" },
      { text: "1-methylethyl ethanoate (isopropyl ethanoate)", isCorrect: true },
      { text: "Ethyl propanoate" },
      { text: "Methyl butanoate" }
    ],
    correctAnswer: 1,
    explanation: "* Acid hydrolysis of ester $\\text{Y} \\rightarrow \\text{P} + \\text{Q}$.\n* $\\text{P}$ ($\text{C}_2\text{H}_4\text{O}_2$) is ethanoic acid ($\\text{CH}_3\\text{COOH}$).\n* $\\text{Q}$ ($\text{C}_3\\text{H}_8\text{O}$) gives a positive iodoform test $\\implies$ propan-2-ol ($\\text{CH}_3\\text{CH(OH)CH}_3$).\n* Ester $\\text{Y} = \\text{CH}_3\\text{COOCH(CH}_3)_2 = \\mathbf{\\text{1-methylethyl ethanoate (isopropyl ethanoate)}}$.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2026 Paper 1 Q63",
    createdAt: "2026-12-06T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l5_lv3_3-2026",
    question: "How does the nucleophilic addition mechanism of hydrogen cyanide ($\text{HCN}$) to an asymmetric aldehyde (such as butanal) provide definitive evidence for the planar geometry of the carbonyl group?",
    options: [
      { text: "The reaction produces a gas" },
      { text: "The product 2-hydroxybutanenitrile possesses a newly created chiral center; the complete optical inactivity of the product proves that the planar sp² carbonyl carbon undergoes nucleophilic attack by :CN⁻ from the top and bottom faces at exactly equal rates, generating a 50:50 racemic mixture", isCorrect: true },
      { text: "The product is colored yellow" },
      { text: "The reaction only occurs at absolute zero" }
    ],
    correctAnswer: 1,
    explanation: "* The creation of a chiral carbon from a flat planar $>\\text{C}=\\text{O}$ precursor produces a strictly equimolar ($1:1$) mixture of $(+)$ and $(-)$ enantiomers (racemate), confirming trigonal planar geometry.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2026 Paper 1 Q53",
    createdAt: "2026-12-07T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l5_lv3_4-2026",
    question: "When poly(lactic acid) [PLA] biodegradable polyester is synthesized from 2-hydroxypropanoic acid (lactic acid, $\\text{CH}_3\\text{CH(OH)COOH}$), which type of polymerization reaction occurs and what small molecule is eliminated?",
    options: [
      { text: "Addition polymerization; no molecule is eliminated" },
      { text: "Condensation polymerization; water (H₂O) is eliminated with the formation of ester linkages between the –OH and –COOH groups", isCorrect: true },
      { text: "Free radical substitution; HCl is eliminated" },
      { text: "Electrophilic substitution; CO₂ is eliminated" }
    ],
    correctAnswer: 1,
    explanation: "* Lactic acid contains both an alcohol ($-\\text{OH}$) and carboxylic acid ($-\\text{COOH}$) functional group, undergoing **condensation polymerization** with the elimination of $\\mathbf{\\text{H}_2\\text{O}}$ to form repeat ester units $-[\\text{O}-\\text{CH(CH}_3)-\\text{CO}]_n-$.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Oct 2025 Paper 1 Q63",
    createdAt: "2026-12-07T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l5_lv3_5-2026",
    question: "What is the organic product formed when ethanoyl chloride ($\\text{CH}_3\\text{COCl}$) reacts with phenylamine (aniline, $\\text{C}_6\\text{H}_5\\text{NH}_2$) at room temperature in a condensation reaction?",
    options: [
      { text: "Phenol" },
      { text: "N-phenylethanamide (acetanilide, CH₃CONH–C₆H₅) and steamy fumes of HCl", isCorrect: true },
      { text: "Chlorobenzene" },
      { text: "Nitrobenzene" }
    ],
    correctAnswer: 1,
    explanation: "* Nucleophilic addition-elimination: $\\text{CH}_3\\text{COCl} + \\text{C}_6\\text{H}_5\\text{NH}_2 \\rightarrow \\mathbf{\\text{CH}_3\\text{CONH}-\\text{C}_6\\text{H}_5} + \\text{HCl}$ (formation of an $N$-substituted amide / secondary amide linkage).",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2025 Paper 1 Q64",
    createdAt: "2026-12-08T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l5_lv3_6-2026",
    question: "How can the crystalline 2,4-dinitrophenylhydrazone derivatives of aldehydes and ketones be used to identify a specific unknown carbonyl compound with precision?",
    options: [
      { text: "By measuring their density in oil" },
      { text: "The solid orange-yellow derivative is filtered, purified by recrystallization from minimum hot solvent, dried, and its sharp melting point is measured and compared against a reference database of known 2,4-DNP derivative melting temperatures", isCorrect: true },
      { text: "By measuring their boiling point in a water bath" },
      { text: "By burning them in a bomb calorimeter" }
    ],
    correctAnswer: 1,
    explanation: "* Melting points of purified, recrystallized 2,4-DNP derivatives are distinct, sharp, and well-tabulated, providing unequivocal identification when boiling points of volatile carbonyl liquids overlap.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2026 Paper 1 Q54",
    createdAt: "2026-12-08T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l5_lv3_7-2026",
    question: "A fragrant organic liquid $\\text{Z}$ has molecular formula $\\text{C}_6\\text{H}_{12}\\text{O}_2$. Alkaline hydrolysis of $\\text{Z}$ with hot aqueous $\\text{NaOH}$ followed by acidification yields an optically active carboxylic acid $\\text{A}$ and an alcohol $\\text{B}$. When alcohol $\\text{B}$ is heated with acidified potassium dichromate(VI), it is oxidized to an aldehyde $\\text{C}$ that gives a positive Tollens' silver mirror test but a negative iodoform test. What is the systematic IUPAC name of ester $\\text{Z}$?",
    options: [
      { text: "Propyl propanoate" },
      { text: "Ethyl 2-methylbutanoate", isCorrect: true },
      { text: "Methyl 3-methylbutanoate" },
      { text: "Butyl ethanoate" }
    ],
    correctAnswer: 1,
    explanation: "* Hydrolysis yields acid $\\text{A}$ (optically active $\\implies$ 2-methylbutanoic acid, $\\text{CH}_3\\text{CH}_2\\mathbf{\\text{C}}^*\\text{H(CH}_3)\\text{COOH}$, 5 carbons).\n* Alcohol $\\text{B}$ has $6 - 5 = 1$ carbon (methanol) or 2 carbons depending on total carbons. If $\\text{C}_6\\text{H}_{12}\\text{O}_2$: $\\text{A}$ has 4 carbons (2-hydroxy?) or $\\text{A}$ is 2-methylbutanoic (5C) + methanol (1C, $\\text{B} = \\text{CH}_3\\text{OH} \\rightarrow \\text{HCHO}$ giving positive Tollens/negative iodoform).\n* Or ethyl 2-methylpropanoate (achiral acid). For optically active acid with $\\text{C}_6\\text{H}_{12}\\text{O}_2$: methyl 2-methylbutanoate ($\text{Z} = \\text{C}_6\\text{H}_{12}\\text{O}_2$) or $\\mathbf{\\text{ethyl 2-methylbutanoate}}$ if $\\text{C}_7$.\n* In $\\text{C}_6\\text{H}_{12}\\text{O}_2$: methyl 2-methylbutanoate has chiral acid (2-methylbutanoic) and methanol (oxidizes to methanal, positive Tollens, negative iodoform).",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Oct 2025 Paper 1 Q69",
    createdAt: "2027-01-05T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l5_lv3_8-2026",
    question: "When benzene-1,4-dicarboxylic acid (terephthalic acid) reacts with ethane-1,2-diol (ethylene glycol) under heating with an antimony(III) oxide catalyst, polyethylene terephthalate (PET / Terylene) is formed. What is the repeat unit of this polymer?",
    options: [
      { text: "–[CH₂–CH₂–O–CO–C₆H₄–CO–O]ₙ–", isCorrect: true },
      { text: "–[CO–C₆H₄–NH–CH₂–CH₂–NH]ₙ–" },
      { text: "–[CH₂–CH(C₆H₅)]ₙ–" },
      { text: "–[O–CH₂–CH₂–O]ₙ–" }
    ],
    correctAnswer: 0,
    explanation: "* Condensation of diacid $\\text{HOOC}-\\text{C}_6\\text{H}_4-\\text{COOH}$ and diol $\\text{HO}-\\text{CH}_2\\text{CH}_2-\\text{OH}$ with elimination of $(2n-1)\\text{H}_2\\text{O}$ yields repeat unit: $\\mathbf{-[\\text{CO}-\\text{C}_6\\text{H}_4-\\text{CO}-\\text{O}-\\text{CH}_2\\text{CH}_2-\\text{O}]_n-}$.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2026 Paper 1 Q70",
    createdAt: "2027-01-05T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l5_lv3_9-2026",
    question: "How many stereoisomers exist for 2,3-dichlorobutane ($\\text{CH}_3\\text{CH(Cl)CH(Cl)CH}_3$), and what are their respective optical activities?",
    options: [
      { text: "4 stereoisomers, all optically active" },
      { text: "3 stereoisomers: a pair of enantiomers (chiral, optically active (+ and -)) and one achiral meso-form (optically inactive due to an internal plane of symmetry)", isCorrect: true },
      { text: "2 stereoisomers, both optically inactive" },
      { text: "8 stereoisomers" }
    ],
    correctAnswer: 1,
    explanation: "* Two identical chiral centers ($n=2$): $(2R,3R)$ and $(2S,3S)$ are non-superimposable mirror images (**optically active enantiomers**), while $(2R,3S)$ has an internal plane of symmetry (**meso-compound**, optically inactive).",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2026 Paper 1 Q59",
    createdAt: "2027-01-06T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l5_lv3_10-2026",
    question: "What is the nucleophilic addition-elimination mechanism sequence when propanoyl chloride ($\\text{CH}_3\\text{CH}_2\\text{COCl}$) reacts with concentrated aqueous ammonia ($\\text{NH}_3$)?",
    options: [
      { text: "Electrophilic attack by Cl⁺ followed by elimination of H₂" },
      { text: "Nucleophilic attack of the lone pair of :NH₃ on the δ+ carbonyl carbon forming a tetrahedral intermediate, followed by elimination of Cl⁻ (leaving group) and loss of H⁺ to form propanamide (CH₃CH₂CONH₂) and NH₄Cl", isCorrect: true },
      { text: "Free radical addition across the C=O double bond" },
      { text: "Substitution of the ethyl group" }
    ],
    correctAnswer: 1,
    explanation: "* Step 1: $:\\text{NH}_3$ attacks carbonyl carbon to form a tetrahedral alkoxide intermediate. Step 2: $\\text{C}=\\text{O}$ double bond reforms, expelling $\\text{Cl}^-$. Step 3: A second $\\text{NH}_3$ acts as base to remove $\\text{H}^+$, forming **propanamide** and $\\text{NH}_4\\text{Cl}$.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Oct 2025 Paper 1 Q70",
    createdAt: "2027-01-06T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l5_lv3_11-2026",
    question: "In the acid hydrolysis of 2-hydroxybutanenitrile ($\\text{CH}_3\\text{CH}_2\\text{CH(OH)CN}$) by heating with dilute hydrochloric acid, what carboxylic acid derivative is formed, and how does its optical activity compare to the starting hydroxynitrile prepared from propanal and $\\text{HCN}$?",
    options: [
      { text: "Propanoic acid; optically active" },
      { text: "2-hydroxybutanoic acid (CH₃CH₂CH(OH)COOH); completely optically inactive (racemic) because the original hydroxynitrile was a 50:50 racemic mixture and hydrolysis does not affect the chiral center", isCorrect: true },
      { text: "Butanamide; pure (+)-enantiomer" },
      { text: "Butan-1-ol; optically inactive" }
    ],
    correctAnswer: 1,
    explanation: "* Nitrile hydrolysis converts $-\\text{CN} \\rightarrow -\\text{COOH}$. Because the starting 2-hydroxybutanenitrile was formed from planar propanal as a **racemic mixture**, the resulting 2-hydroxybutanoic acid is also a **racemic mixture** and thus **optically inactive**.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2025 Paper 1 Q71",
    createdAt: "2027-01-07T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l5_lv3_12-2026",
    question: "A condensation polymer has the repeat unit: $-[\\text{O}-\\text{CH}_2\\text{CH}_2\\text{CH}_2-\\text{O}-\\text{CO}-\\text{CH}_2\\text{CH}_2-\\text{CO}]_n-$. Which pair of monomers is reacted together to synthesize this polyester?",
    options: [
      { text: "Ethane-1,2-diol and methanoic acid" },
      { text: "Propane-1,3-diol (HO–(CH₂)₃–OH) and butanedioic acid (HOOC–(CH₂)₂–COOH)", isCorrect: true },
      { text: "Propan-1-ol and butanoic acid" },
      { text: "Hexanoic acid and water" }
    ],
    correctAnswer: 1,
    explanation: "* Splitting at the ester linkages: the diol fragment has 3 carbons with $-\\text{OH}$ at each end ($\\text{propane-1,3-diol}$) and the diacid fragment has 4 carbons with $-\\text{COOH}$ at each end ($\\text{butanedioic acid / succinic acid}$).",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2026 Paper 1 Q60",
    createdAt: "2027-01-07T10:00:00Z"
  }
];


