import { Question } from '../../../types';

export const level1Questions: Question[] = [
  {
    id: "ex_ed_u4_l5_lv1_1-2026",
    question: "What is a chiral center (asymmetric carbon atom) in an organic molecule?",
    options: [
      { text: "A carbon atom double-bonded to an oxygen atom" },
      { text: "A carbon atom bonded to four different atoms or groups of atoms, resulting in non-superimposable mirror image stereoisomers (enantiomers)", isCorrect: true },
      { text: "A carbon atom bonded to three identical methyl groups" },
      { text: "A planar sp² hybridised carbon atom" }
    ],
    correctAnswer: 1,
    explanation: "* A chiral carbon is bonded to four distinct groups, creating optical isomerism (enantiomers) that rotate plane-polarized light in opposite directions.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Oct 2025 Paper 1 Q57",
    createdAt: "2026-11-29T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l5_lv1_2-2026",
    question: "What is an equimolar mixture of two enantiomers called, and what is its observed optical activity in a polarimeter?",
    options: [
      { text: "A meso compound; rotates light clockwise" },
      { text: "A racemic mixture (racemate); optically inactive because the clockwise and anticlockwise rotations of the two enantiomers cancel out exactly", isCorrect: true },
      { text: "A diastereomer; rotates light 180°" },
      { text: "A polymer; scatters light randomly" }
    ],
    correctAnswer: 1,
    explanation: "* A racemic mixture contains a $50:50$ ratio of $(+)$ and $(-)$ enantiomers, giving zero net rotation of plane-polarized light.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2026 Paper 1 Q58",
    createdAt: "2026-11-29T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l5_lv1_3-2026",
    question: "Which reagent is used to detect the presence of a carbonyl group ($>\\text{C}=\\text{O}$) in aldehydes and ketones by producing an orange-yellow precipitate?",
    options: [
      { text: "Tollens' reagent" },
      { text: "2,4-dinitrophenylhydrazine (Brady's reagent / 2,4-DNPH)", isCorrect: true },
      { text: "Fehling's solution" },
      { text: "Potassium dichromate(VI)" }
    ],
    correctAnswer: 1,
    explanation: "* 2,4-DNPH condenses with both aldehydes and ketones to form brightly colored orange-yellow crystalline 2,4-dinitrophenylhydrazone precipitates.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2026 Paper 1 Q49",
    createdAt: "2026-11-30T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l5_lv1_4-2026",
    question: "What positive observation is seen when an aldehyde is gently warmed with Tollens' reagent ($[\\text{Ag(NH}_3)_2]^+$ in alkaline solution)?",
    options: [
      { text: "A brick-red precipitate of Cu₂O forms" },
      { text: "A shiny silver mirror coats the inside of the test tube (Ag⁺ ions are reduced to metallic Ag(s) while the aldehyde is oxidized to a carboxylate salt)", isCorrect: true },
      { text: "A yellow precipitate of triiodomethane forms" },
      { text: "Effervescence of carbon dioxide gas" }
    ],
    correctAnswer: 1,
    explanation: "* Aldehydes reduce diamminesilver(I) ions to elemental silver ($[\\text{Ag(NH}_3)_2]^+ + \\text{e}^- \\rightarrow \\text{Ag(s)} + 2\\text{NH}_3$). Ketones do not react.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Oct 2025 Paper 1 Q58",
    createdAt: "2026-11-30T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l5_lv1_5-2026",
    question: "Which structural feature in a carbonyl compound gives a POSITIVE triiodomethane (iodoform) test (formation of a pale yellow precipitate of $\\text{CHI}_3$ with alkaline iodine $\\text{I}_2 / \\text{NaOH}$)?",
    options: [
      { text: "A methyl group bonded directly to a carbonyl carbon: CH₃–C=O (or CH₃–CH(OH)–)", isCorrect: true },
      { text: "A carboxylic acid group: –COOH" },
      { text: "An ester linkage: –COOCH₃" },
      { text: "A benzene ring" }
    ],
    correctAnswer: 0,
    explanation: "* The iodoform reaction specifically identifies the methyl carbonyl ($\text{CH}_3\\text{CO}-$ / ethanal and methyl ketones) or methyl secondary alcohol ($\text{CH}_3\\text{CH(OH)}-$, including ethanol) groups.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2025 Paper 1 Q59",
    createdAt: "2026-12-01T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l5_lv1_6-2026",
    question: "Why do carboxylic acid molecules have significantly higher boiling points than alcohols and aldehydes of comparable molar mass?",
    options: [
      { text: "Carboxylic acids form ionic crystals in the liquid state" },
      { text: "Carboxylic acid molecules form stable hydrogen-bonded dimers via two intermolecular hydrogen bonds between carbonyl and hydroxyl groups, effectively doubling the effective molecular mass and London forces", isCorrect: true },
      { text: "Carboxylic acids undergo polymerization at room temperature" },
      { text: "They contain covalent triple bonds" }
    ],
    correctAnswer: 1,
    explanation: "* Carboxylic acids dimerize via two strong $\\text{C}=\\text{O}\\cdots\\text{H}-\\text{O}$ hydrogen bonds, creating strong intermolecular attraction and elevated boiling points.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2026 Paper 1 Q50",
    createdAt: "2026-12-01T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l5_lv1_7-2026",
    question: "What products are formed when an acyl chloride (e.g. ethanoyl chloride, $\\text{CH}_3\\text{COCl}$) reacts vigorously with water at room temperature?",
    options: [
      { text: "An ester and hydrogen gas" },
      { text: "A carboxylic acid (CH₃COOH) and steamy white acidic fumes of hydrogen chloride gas (HCl(g))", isCorrect: true },
      { text: "An aldehyde and chlorine gas" },
      { text: "A chloroalkane and carbon dioxide" }
    ],
    correctAnswer: 1,
    explanation: "* $\\text{CH}_3\\text{COCl} + \\text{H}_2\\text{O} \\rightarrow \\text{CH}_3\\text{COOH} + \\text{HCl(g)}$ (nucleophilic addition-elimination producing dense white fumes of $\\text{HCl}$).",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Oct 2025 Paper 1 Q59",
    createdAt: "2026-12-02T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l5_lv1_8-2026",
    question: "Which reducing agent is used to reduce carboxylic acids directly to primary alcohols in dry ether?",
    options: [
      { text: "Sodium tetrahydridoborate(III) (NaBH₄ in aqueous solution)" },
      { text: "Lithium tetrahydridoaluminate(III) (LiAlH₄ in dry ether)", isCorrect: true },
      { text: "Acidified potassium manganate(VII)" },
      { text: "Concentrated sulfuric acid" }
    ],
    correctAnswer: 1,
    explanation: "* $\\text{LiAlH}_4$ is a powerful hydride donor that reduces carboxylic acids to primary alcohols ($\text{RCOOH} \\rightarrow \\text{RCH}_2\\text{OH}$). $\\text{NaBH}_4$ is too weak and cannot reduce carboxylic acids.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2026 Paper 1 Q60",
    createdAt: "2026-12-02T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l5_lv1_9-2026",
    question: "What type of instrument is used experimentally to detect and measure the degree of optical rotation of a chiral compound?",
    options: [
      { text: "Colorimeter" },
      { text: "Polarimeter", isCorrect: true },
      { text: "Spectrophotometer" },
      { text: "Mass spectrometer" }
    ],
    correctAnswer: 1,
    explanation: "* A polarimeter passes monochromatic plane-polarized light through an enantiomeric solution to measure the direction and magnitude of optical rotation.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Oct 2025 Paper 1 Q64",
    createdAt: "2026-12-29T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l5_lv1_10-2026",
    question: "What observation occurs when Fehling's solution (or Benedict's reagent) is gently heated with an aliphatic aldehyde (such as ethanal)?",
    options: [
      { text: "A bright yellow precipitate of sulfur" },
      { text: "The clear deep blue solution of Cu²⁺ forms a brick-red precipitate of copper(I) oxide (Cu₂O(s))", isCorrect: true },
      { text: "The solution turns purple" },
      { text: "A gas is evolved with effervescence" }
    ],
    correctAnswer: 1,
    explanation: "* Aldehydes reduce alkaline blue copper(II) tartrate/citrate complex ions to insoluble **brick-red copper(I) oxide ($\\text{Cu}_2\\text{O}$)**. Ketones give no reaction.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2025 Paper 1 Q65",
    createdAt: "2026-12-29T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l5_lv1_11-2026",
    question: "What is the systematic IUPAC name of the ester with structural formula $\\text{CH}_3\\text{CH}_2\\text{COOCH}_3$?",
    options: [
      { text: "Ethyl methanoate" },
      { text: "Methyl propanoate", isCorrect: true },
      { text: "Propyl ethanoate" },
      { text: "Methyl ethanoate" }
    ],
    correctAnswer: 1,
    explanation: "* The alkyl group attached to oxygen is 'methyl' ($\\text{CH}_3-$) and the acyl chain containing the carbonyl carbon has 3 carbons ('propanoate'): $\\mathbf{\\text{methyl propanoate}}$.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2026 Paper 1 Q55",
    createdAt: "2026-12-30T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l5_lv1_12-2026",
    question: "Which catalyst is traditionally used to accelerate the reversible esterification reaction between a carboxylic acid and an alcohol?",
    options: [
      { text: "Aqueous sodium hydroxide" },
      { text: "Concentrated sulfuric acid (conc. H₂SO₄)", isCorrect: true },
      { text: "Nickel powder" },
      { text: "Platinum gauze" }
    ],
    correctAnswer: 1,
    explanation: "* Concentrated $\\text{H}_2\\text{SO}_4$ acts as both a Brønsted acid catalyst (protonating the carbonyl oxygen) and a dehydrating agent to shift equilibrium towards higher ester yield.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Oct 2025 Paper 1 Q65",
    createdAt: "2026-12-30T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l5_lv1_13-2026",
    question: "Which of the following molecules contains at least one chiral center (asymmetric carbon)?",
    options: [
      { text: "Propan-1-ol (CH₃CH₂CH₂OH)" },
      { text: "Butan-2-ol (CH₃CH(OH)CH₂CH₃)", isCorrect: true },
      { text: "Propan-2-ol (CH₃CH(OH)CH₃)" },
      { text: "Ethanoic acid (CH₃COOH)" }
    ],
    correctAnswer: 1,
    explanation: "* Carbon-2 of butan-2-ol is bonded to four distinct groups: $-\\text{H}$, $-\\text{OH}$, $-\\text{CH}_3$, and $-\\text{CH}_2\\text{CH}_3$, making it **chiral**.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2026 Paper 1 Q66",
    createdAt: "2026-12-31T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l5_lv1_14-2026",
    question: "What reagent is used to convert a carboxylic acid directly into its corresponding acyl chloride at room temperature?",
    options: [
      { text: "Phosphorus(V) chloride (PCl₅) or thionyl chloride (SOCl₂)", isCorrect: true },
      { text: "Concentrated hydrochloric acid" },
      { text: "Sodium chloride in water" },
      { text: "Chlorine gas with UV light" }
    ],
    correctAnswer: 0,
    explanation: "* $\\text{RCOOH} + \\text{PCl}_5 \\rightarrow \\text{RCOCl} + \\text{POCl}_3 + \\text{HCl(g)}$, or $\\text{RCOOH} + \\text{SOCl}_2 \\rightarrow \\text{RCOCl} + \\text{SO}_2\\text{(g)} + \\text{HCl(g)}$.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2026 Paper 1 Q56",
    createdAt: "2026-12-31T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l5_lv1_15-2026",
    question: "What is the general chemical classification of the reaction between an aldehyde/ketone and hydrogen cyanide ($\\text{HCN}$)?",
    options: [
      { text: "Electrophilic addition" },
      { text: "Nucleophilic addition", isCorrect: true },
      { text: "Nucleophilic substitution" },
      { text: "Free radical elimination" }
    ],
    correctAnswer: 1,
    explanation: "* The reaction is initiated by the attack of the nucleophile cyanide ion ($:\\text{CN}^-$) on the electron-deficient carbonyl carbon ($\delta+$), followed by protonation: **nucleophilic addition**.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Oct 2025 Paper 1 Q66",
    createdAt: "2027-01-01T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l5_lv1_16-2026",
    question: "Which of the following compounds gives a POSITIVE triiodomethane (iodoform) reaction?",
    options: [
      { text: "Methanal (HCHO)" },
      { text: "Propan-2-ol (CH₃CH(OH)CH₃)", isCorrect: true },
      { text: "Pentan-3-one (CH₃CH₂COCH₂CH₃)" },
      { text: "Propanoic acid (CH₃CH₂COOH)" }
    ],
    correctAnswer: 1,
    explanation: "* Propan-2-ol contains the $\\text{CH}_3\\text{CH(OH)}-$ group, which is oxidized in situ by alkaline iodine to propanone ($\text{CH}_3\\text{COCH}_3$) and then iodinated to produce yellow $\\text{CHI}_3$.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2025 Paper 1 Q67",
    createdAt: "2027-01-01T10:00:00Z"
  }
];


