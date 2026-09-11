import { Question } from '../../../types';

export const level2Questions: Question[] = [
  {
    id: "ex_ed_u2_l5_lv2_1-2026",
    question: "When 1-chlorobutane, 1-bromobutane, and 1-iodobutane are reacted separately with aqueous silver nitrate in ethanol at 50 °C, 1-iodobutane forms a precipitate of silver halide most rapidly, while 1-chlorobutane reacts slowest. What fundamental factor explains this order of reactivity?",
    options: [
      { text: "The C–Cl bond is more polar than the C–I bond" },
      { text: "Carbon-halogen bond enthalpy decreases down Group 7 (C–I is the weakest bond, requiring the lowest activation energy to break in the rate-determining step)", isCorrect: true },
      { text: "Iodine is a stronger oxidizing agent than chlorine" },
      { text: "Silver iodide is more soluble than silver chloride" }
    ],
    correctAnswer: 1,
    explanation: "* Although $\\text{C}-\\text{Cl}$ is the most polar bond, bond enthalpy is the deciding factor in nucleophilic substitution of halogenoalkanes.\n* $\\text{C}-\\text{I}$ bond enthalpy ($240\\text{ kJ mol}^{-1}$) is much lower than $\\text{C}-\\text{Cl}$ ($346\\text{ kJ mol}^{-1}$), allowing fastest cleavage.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Oct 2025 Paper 1 Q32",
    createdAt: "2026-08-16T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l5_lv2_2-2026",
    question: "How can you synthesize an aldehyde in high yield from a primary alcohol using acidified potassium dichromate(VI)?",
    options: [
      { text: "Heat under reflux with an excess of acidified potassium dichromate(VI)" },
      { text: "Use an excess of alcohol, add acidified potassium dichromate(VI) dropwise, and IMMEDIATELY DISTIL OFF the aldehyde product as it forms (simple distillation)", isCorrect: true },
      { text: "Pass steam over a nickel catalyst" },
      { text: "React with concentrated aqueous sodium hydroxide" }
    ],
    correctAnswer: 1,
    explanation: "* Aldehydes have lower boiling points than alcohols and carboxylic acids because they cannot form hydrogen bonds.\n* Distilling off the aldehyde as soon as it forms prevents prolonged contact with the oxidizing agent and prevents further oxidation to the carboxylic acid.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / June 2026 Paper 1 Q33",
    createdAt: "2026-08-16T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l5_lv2_3-2026",
    question: "What organic product is formed when secondary alcohol propan-2-ol is heated under reflux with acidified potassium dichromate(VI)?",
    options: [
      { text: "Propanal" },
      { text: "Propanoic acid" },
      { text: "Propanone (Acetone, a ketone)", isCorrect: true },
      { text: "Propene" }
    ],
    correctAnswer: 2,
    explanation: "* Secondary ($2^\\circ$) alcohols are oxidized by acidified $\\text{Cr}_2\\text{O}_7^{2-}$ specifically to **ketones** (propan-2-ol $\\rightarrow$ propanone).\n* Ketones cannot be oxidized further without breaking the carbon chain skeleton.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Jan 2026 Paper 1 Q27",
    createdAt: "2026-08-17T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l5_lv2_4-2026",
    question: "Which of the following organic compounds will produce a sharp, intense absorption band at approximately 1715 cm⁻¹ and NO broad absorption band between 3200–3600 cm⁻¹ in its Infrared spectrum?",
    options: [
      { text: "Ethanol (CH₃CH₂OH)" },
      { text: "Ethanoic acid (CH₃COOH)" },
      { text: "Propanone (CH₃COCH₃, a ketone)", isCorrect: true },
      { text: "Hexane (C₆H₁₄)" }
    ],
    correctAnswer: 2,
    explanation: "* Ketones contain a carbonyl group ($\\text{C}=\\text{O}$ stretch at $\\sim 1715\\text{ cm}^{-1}$) and no hydroxyl group ($-\\text{OH}$), so the $3200-3600\\text{ cm}^{-1}$ region shows zero absorption.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Oct 2025 Paper 1 Q33",
    createdAt: "2026-08-17T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l5_lv2_5-2026",
    question: "In the reaction of bromoethane with excess ethanolic ammonia (NH₃) heated in a sealed copper tube under pressure, what is the principal organic product formed?",
    options: [
      { text: "Ethylamine (CH₃CH₂NH₂)", isCorrect: true },
      { text: "Ethanenitrile (CH₃CH₂CN)" },
      { text: "Ethanol (CH₃CH₂OH)" },
      { text: "Ethene (CH₂=CH₂)" }
    ],
    correctAnswer: 0,
    explanation: "* Ammonia acts as a nucleophile: $\\text{CH}_3\\text{CH}_2\\text{Br} + 2\\text{NH}_3 \\rightarrow \\text{CH}_3\\text{CH}_2\\text{NH}_2 + \\text{NH}_4\\text{Br}$.\n* Excess ammonia minimizes further nucleophilic attack by the ethylamine product.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / June 2025 Paper 1 Q34",
    createdAt: "2026-08-18T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l5_lv2_6-2026",
    question: "Why is water pumped into the bottom of a Liebig condenser and exits from the top during reflux and distillation?",
    options: [
      { text: "To prevent thermal shock from cold water hitting hot glass" },
      { text: "To ensure the condenser jacket completely fills with water, preventing trapped air bubbles that would create hot spots and inefficient cooling", isCorrect: true },
      { text: "To increase the boiling point of the mixture" },
      { text: "To siphon off excess distillate" }
    ],
    correctAnswer: 1,
    explanation: "* Entering from the lowest point ensures water fills the condenser jacket against gravity, eliminating air pockets and maximizing thermal contact for efficient condensation.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Jan 2026 Paper 1 Q28",
    createdAt: "2026-08-18T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l5_lv2_7-2026",
    question: "Alcohols can be converted to halogenoalkanes using hydrogen halides. How is hydrogen bromide (HBr) prepared in situ for this reaction?",
    options: [
      { text: "By adding phosphorus pentabromide directly at high temperature" },
      { text: "By reacting potassium bromide (KBr) with 50% concentrated sulfuric acid (H₂SO₄)", isCorrect: true },
      { text: "By bubbling bromine gas through ethanol" },
      { text: "By heating sodium bromide with sodium hydroxide" }
    ],
    correctAnswer: 1,
    explanation: "* $\\text{HBr}$ is prepared in situ (in the reaction flask) by reacting $\\text{KBr}$ or $\\text{NaBr}$ with $50\\%$ concentrated $\\text{H}_2\\text{SO}_4$: $\\text{KBr} + \\text{H}_2\\text{SO}_4 \\rightarrow \\text{KHSO}_4 + \\text{HBr}$.\n* Concentrated $100\\%$ sulfuric acid cannot be used because it would oxidize the $\\text{HBr}$ to $\\text{Br}_2$.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / June 2026 Paper 1 Q44",
    createdAt: "2026-09-03T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l5_lv2_8-2026",
    question: "Which of the following qualitative tests can be used to distinguish between an aldehyde (such as propanal) and a ketone (such as propanone)?",
    options: [
      { text: "Reaction with 2,4-DNPH" },
      { text: "Heating with Fehling's solution (which gives a brick-red precipitate with aldehydes but no reaction with ketones)", isCorrect: true },
      { text: "Reaction with phosphorus(V) chloride" },
      { text: "Reaction with acidified potassium dichromate(VI) under cold conditions" }
    ],
    correctAnswer: 1,
    explanation: "* Fehling's solution contains copper(II) ions which oxidize aldehydes to carboxylic acids, being reduced to red copper(I) oxide ($\\text{Cu}_2\\text{O}$). Ketones cannot be easily oxidized, so they do not react.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Oct 2025 Paper 1 Q34",
    createdAt: "2026-09-03T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l5_lv2_9-2026",
    question: "What is the significance of the fingerprint region (typically below 1500 cm⁻¹) in an Infrared spectrum?",
    options: [
      { text: "It only identifies carbonyl and hydroxyl groups" },
      { text: "It contains a unique, complex pattern of peaks for each individual organic compound, allowing positive identification by direct comparison with database standards", isCorrect: true },
      { text: "It represents carbon-carbon triple bonds only" },
      { text: "It is identical for all isomers" }
    ],
    correctAnswer: 1,
    explanation: "* The fingerprint region (usually $1500-400\\text{ cm}^{-1}$) is caused by complex vibrational modes of the whole molecule.\n* Since the exact pattern is unique for every compound, it acts as a molecular fingerprint for identification.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Jan 2026 Paper 1 Q33",
    createdAt: "2026-09-04T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l5_lv2_10-2026",
    question: "Why does the hydrolysis of 1-bromobutane proceed much faster with aqueous sodium hydroxide (NaOH) than with pure water at the same temperature?",
    options: [
      { text: "Water is ionic" },
      { text: "The hydroxide ion (OH⁻) has a full negative charge, making it a much stronger nucleophile than the neutral water molecule with only partial charges", isCorrect: true },
      { text: "Water dissolves bromoethane completely" },
      { text: "Sodium acts as a homogeneous catalyst" }
    ],
    correctAnswer: 1,
    explanation: "* Hydroxide is a stronger nucleophile because its negative charge yields a greater electrostatic attraction to the electron-deficient carbon center ($^{\\delta+}\\text{C}$), lowering the activation energy for nucleophilic attack.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / June 2025 Paper 1 Q45",
    createdAt: "2026-09-04T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l5_lv2_11-2026",
    question: "During the purification of a liquid halogenoalkane in a separating funnel, the organic layer is shaken with aqueous sodium hydrogencarbonate (NaHCO₃). What is the purpose of this wash?",
    options: [
      { text: "To act as a drying agent" },
      { text: "To neutralize and remove residual acid impurities, releasing carbon dioxide gas", isCorrect: true },
      { text: "To dissolve the organic product" },
      { text: "To reduce the boiling point of the mixture" }
    ],
    correctAnswer: 1,
    explanation: "* Shaking with aqueous $\\text{NaHCO}_3$ neutralizes any remaining acid catalyst or reactant (like $\\text{HCl}$ or $\\text{H}_2\\text{SO}_4$) by converting it to soluble salts, water, and $\\text{CO}_2$ gas (which must be vented from the separating funnel).",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Oct 2025 Paper 1 Q35",
    createdAt: "2026-09-05T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l5_lv2_12-2026",
    question: "An organic compound has a relative molecular mass of 46. Its Infrared spectrum shows a broad absorption peak centered at 3350 cm⁻¹ and no absorption at 1700 cm⁻¹. Identify the compound.",
    options: [
      { text: "Ethanol (CH₃CH₂OH)", isCorrect: true },
      { text: "Methoxymethane (CH₃OCH₃)" },
      { text: "Ethanal (CH₃CHO)" },
      { text: "Ethanoic acid (CH₃COOH)" }
    ],
    correctAnswer: 0,
    explanation: "* Molecular mass $M_r = 46$ is consistent with both ethanol and methoxymethane.\n* The broad IR peak at $3350\\text{ cm}^{-1}$ indicates an $-\\text{OH}$ group, which matches ethanol.\n* Methoxymethane is an ether and has no $-\\text{OH}$ group.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Jan 2026 Paper 1 Q34",
    createdAt: "2026-09-05T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l5_lv2_13-2026",
    question: "What organic product is formed when ethanol is heated with concentrated phosphoric acid (H₃PO₄)?",
    options: [
      { text: "Ethane" },
      { text: "Ethene", isCorrect: true },
      { text: "Diethyl ether" },
      { text: "Ethyl phosphate" }
    ],
    correctAnswer: 1,
    explanation: "* Heating alcohols with concentrated $\\text{H}_3\\text{PO}_4$ (or $\\text{H}_2\\text{SO}_4$) is an **elimination / dehydration** reaction that removes water to form an alkene (ethene from ethanol):\n* $\\text{CH}_3\\text{CH}_2\\text{OH} \\xrightarrow{\\text{H}_3\\text{PO}_4, \\Delta} \\text{CH}_2=\\text{CH}_2 + \\text{H}_2\\text{O}$.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / June 2026 Paper 1 Q46",
    createdAt: "2026-09-06T10:00:00Z"
  }
];

