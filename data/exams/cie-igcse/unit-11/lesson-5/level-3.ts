import { Question } from '../../../types';

// Polymers - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u11_l5_lv3_1-2026",
    question: "A section of an addition polymer chain has the following structure:\n–CH₂–CH(CH₃)–CH₂–CH(CH₃)–CH₂–CH(CH₃)–\nWhat is the IUPAC name and formula of the monomer from which this polymer was synthesised?",
    options: [
      { text: "Propene (CH₂=CH–CH₃)", isCorrect: true },
      { text: "Ethene (CH₂=CH₂)" },
      { text: "But-2-ene (CH₃–CH=CH–CH₃)" },
      { text: "Methylpropane (CH₃–CH(CH₃)–CH₃)" }
    ],
    correctAnswer: 0,
    explanation: "* The repeat unit contains a 2-carbon backbone with a single methyl side branch: –[CH₂–CH(CH₃)]–.\n* Recreating the double bond between the two backbone carbons gives CH₂=CH–CH₃ (propene).",
    level: 3,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q431",
    createdAt: "2026-08-22T02:30:00Z"
  },
  {
    id: "ex_ci_u11_l5_lv3_2-2026",
    question: "When the natural condensation polymer starch (a complex carbohydrate) is heated with dilute hydrochloric acid catalyst, it undergoes hydrolysis.\nWhat is the single monosaccharide monomer product formed?",
    options: [
      { text: "Glucose (C₆H₁₂O₆)", isCorrect: true },
      { text: "Amino acids" },
      { text: "Ethanol" },
      { text: "Glycerol" }
    ],
    correctAnswer: 0,
    explanation: "* Starch and cellulose are natural polysaccharides (complex carbohydrates).\n* Acid hydrolysis breaks the glycosidic linkages between sugar units, reforming glucose monomers ($C_6H_{12}O_6$), which can be identified using chromatography or Benedict's test.",
    level: 3,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q432",
    createdAt: "2026-08-22T02:35:00Z"
  },
  {
    id: "ex_ci_u11_l5_lv3_3-2023",
    question: "A section of an addition polymer has the structure:\n–CH₂–CH(Cl)–CH₂–CH(Cl)–CH₂–CH(Cl)–\nWhat is the name and formula of the monomer used to synthesize this polymer?",
    options: [
      { text: "Chloroethene, CH₂=CHCl", isCorrect: true },
      { text: "Chloroethane, CH₃CH₂Cl" },
      { text: "1,2-dichloroethene, CHCl=CHCl" },
      { text: "Tetrachloroethene, CCl₂=CCl₂" }
    ],
    correctAnswer: 0,
    explanation: "* The repeat unit of this polymer is –[CH₂–CH(Cl)]–.\n* Placing a double bond between the two carbon atoms gives the monomer chloroethene (vinyl chloride), CH₂=CHCl.",
    level: 3,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 21 Q191",
    lessonNum: 5,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u11_l5_lv3_4-2024",
    question: "Which monomer is formed when the natural polymer starch undergoes complete acid hydrolysis with dilute hydrochloric acid?",
    options: [
      { text: "Glucose", isCorrect: true },
      { text: "Amino acids" },
      { text: "Ethanol" },
      { text: "Glycerol" }
    ],
    correctAnswer: 0,
    explanation: "* Starch is a polysaccharide composed of glucose monomer units linked together by condensation polymerisation.\n* Heating starch with dilute acid catalyses hydrolysis, breaking the glycosidic bonds and regenerating simple glucose molecules (C₆H₁₂O₆).",
    level: 3,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 22 Q192",
    lessonNum: 5,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u11_l5_lv3_5-2025",
    question: "A polyester is formed from ethanedioic acid (HOOC–COOH) and ethane-1,2-diol (HO–CH₂–CH₂–OH). What is the repeat unit of this polyester?",
    options: [
      { text: "–[CO–CO–O–CH₂–CH₂–O]–", isCorrect: true },
      { text: "–[CO–O–CH₂–CH₂–CO]–" },
      { text: "–[CO–CH₂–CH₂–O–CO]–" },
      { text: "–[CH₂–CH₂–O–CO]–" }
    ],
    correctAnswer: 0,
    explanation: "* The dicarboxylic acid loses an –OH from each –COOH end, becoming –CO–CO–.\n* The diol loses an –H from each –OH end, becoming –O–CH₂–CH₂–O–.\n* Linking these units together gives the repeat unit: –[CO–CO–O–CH₂–CH₂–O]–.",
    level: 3,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 23 Q193",
    lessonNum: 5,
    createdAt: "2025-06-01T10:00:00Z"
  }
];
