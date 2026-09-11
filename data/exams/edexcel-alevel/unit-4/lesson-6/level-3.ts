import { Question } from '../../../types';

export const level3Questions: Question[] = [
  {
    id: "ex_ed_u4_l6_lv3_1-2026",
    question: "The enthalpy of hydrogenation of cyclohexene is −120 kJ mol⁻¹. The predicted value for cyclohexa-1,3,5-triene is −360 kJ mol⁻¹, whereas the experimental value for benzene is −208 kJ mol⁻¹. What is the resonance (delocalisation) energy of benzene?",
    options: [
      { text: "+152 kJ mol⁻¹", isCorrect: true },
      { text: "−152 kJ mol⁻¹" },
      { text: "+88 kJ mol⁻¹" },
      { text: "−568 kJ mol⁻¹" }
    ],
    correctAnswer: 0,
    explanation: "* The expected hydrogenation of 3 non-interacting double bonds is $3 \\\\times (-120) = -360\\\\text{ kJ mol}^{-1}$.\n* Benzene's actual value is $-208\\\\text{ kJ mol}^{-1}$, which is $152\\\\text{ kJ mol}^{-1}$ less exothermic.\n* This $152\\\\text{ kJ mol}^{-1}$ difference represents the extra thermodynamic stability termed the delocalisation (resonance) energy.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 6,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Oct 2025 Paper 1 Q79",
    createdAt: "2026-09-01T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l6_lv3_2-2026",
    question: "Which of the following substituents on a benzene ring is electron-withdrawing and directs incoming electrophiles predominantly to the 3-position (meta-directing)?",
    options: [
      { text: "–NO₂ (nitro group)", isCorrect: true },
      { text: "–OH (hydroxyl group)" },
      { text: "–NH₂ (amino group)" },
      { text: "–CH₃ (methyl group)" }
    ],
    correctAnswer: 0,
    explanation: "* The nitrogen atom in $-\\\\text{NO}_2$ carries a partial or full positive charge and pulls electron density from the ring via inductive and mesomeric effects.\n* This strongly deactivates the 2- and 4-positions, directing incoming electrophilic substitution to the 3-position (meta).",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 6,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2026 Paper 1 Q80",
    createdAt: "2026-09-01T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l6_lv3_3-2026",
    question: "A chemist wishes to synthesise 3-bromonitrobenzene from benzene in two steps. Which sequence of reactions is correct?",
    options: [
      { text: "Step 1: HNO₃ + H₂SO₄ (reflux at 55 °C) to form nitrobenzene; Step 2: Br₂ + FeBr₃ (electrophilic substitution)", isCorrect: true },
      { text: "Step 1: Br₂ + FeBr₃ to form bromobenzene; Step 2: HNO₃ + H₂SO₄ at 55 °C" },
      { text: "Step 1: Br₂ under UV light; Step 2: NaNO₂ + HCl at 0 °C" },
      { text: "Step 1: HNO₃ alone; Step 2: HBr in ethanol" }
    ],
    correctAnswer: 0,
    explanation: "* The nitro group ($-\\\\text{NO}_2$) directs incoming substituents to the 3-position (meta).\n* Therefore, nitration must occur first (yielding nitrobenzene), followed by bromination with $\\\\text{Br}_2/\\\\text{FeBr}_3$ to obtain 3-bromonitrobenzene.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 6,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2026 Paper 1 Q69",
    createdAt: "2026-09-01T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l6_lv3_4-2026",
    question: "What reagents and temperature conditions are required to convert phenylamine (aniline) into benzenediazonium chloride, and why must the temperature be kept strictly below 10 °C?",
    options: [
      { text: "NaNO₂ and dilute HCl at 0–5 °C; above 10 °C the diazonium ion decomposes into phenol and nitrogen gas", isCorrect: true },
      { text: "Concentrated HNO₃ and H₂SO₄ at 55 °C; higher temperatures cause dinitration" },
      { text: "Sn and concentrated HCl at 100 °C; below 10 °C the tin catalyst solidifies" },
      { text: "NH₃ and H₂O₂ at 25 °C; cold temperatures prevent oxidation of the ring" }
    ],
    correctAnswer: 0,
    explanation: "* Nitrous acid ($\\\\text{HNO}_2$, generated in situ from $\\\\text{NaNO}_2 + \\\\text{HCl}$) reacts with phenylamine at $0-5^\\\\circ\\\\text{C}$ to form benzenediazonium chloride (C₆H₅N₂⁺Cl⁻).\n* Above $10^\\\\circ\\\\text{C}$, the diazonium ion hydrolyses rapidly: C₆H₅N₂⁺ + H₂O → C₆H₅OH + N₂ + H⁺",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 6,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Oct 2025 Paper 1 Q80",
    createdAt: "2026-09-01T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l6_lv3_5-2026",
    question: "What type of reaction occurs when cold benzenediazonium chloride solution is added to an alkaline solution of phenol, and what is the characteristic observation?",
    options: [
      { text: "Azo coupling (electrophilic substitution), producing an intensely coloured yellow-orange precipitate/dye", isCorrect: true },
      { text: "Nucleophilic addition, producing a colourless gas" },
      { text: "Free-radical substitution, producing a white precipitate" },
      { text: "Oxidation, producing a purple solution" }
    ],
    correctAnswer: 0,
    explanation: "* The diazonium cation (C₆H₅N₂⁺) acts as a weak electrophile, attacking the activated 4-position of phenoxide.\n* This azo coupling reaction forms 4-hydroxyazobenzene, an extended conjugated system that functions as a vibrant orange/yellow azo dye.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 6,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2025 Paper 1 Q81",
    createdAt: "2026-09-01T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l6_lv3_6-2026",
    question: "During electrophoresis of an amino acid mixture at pH 6.0, glycine (pI = 6.0), aspartic acid (pI = 2.8), and lysine (pI = 9.7) are spotted at the centre of a buffer strip. Which of the following describes their migration?",
    options: [
      { text: "Aspartic acid migrates to the anode (+), lysine migrates to the cathode (−), and glycine remains at the origin", isCorrect: true },
      { text: "Lysine migrates to the anode (+), aspartic acid migrates to the cathode (−), and glycine remains at the origin" },
      { text: "All three amino acids migrate towards the cathode (−)" },
      { text: "Glycine migrates to the anode (+), while lysine and aspartic acid remain uncharged" }
    ],
    correctAnswer: 0,
    explanation: "* At $\\\\text{pH} = 6.0$, glycine is at its isoelectric point ($\\\\text{pI} = 6.0$), has net charge 0, and does not migrate.\n* Aspartic acid ($\\\\text{pI} = 2.8 < 6.0$) has lost protons, carrying a net negative charge $\\\\implies$ migrates to the positive anode.\n* Lysine ($\\\\text{pI} = 9.7 > 6.0$) is protonated, carrying a net positive charge $\\\\implies$ migrates to the negative cathode.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 6,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2026 Paper 1 Q70",
    createdAt: "2026-09-01T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l6_lv3_7-2026",
    question: "How many different dipeptides can be formed from a mixture of two distinct α-amino acids: alanine (Ala) and serine (Ser)?",
    options: [
      { text: "4 (Ala–Ala, Ser–Ser, Ala–Ser, Ser–Ala)", isCorrect: true },
      { text: "2 (Ala–Ser and Ser–Ala)" },
      { text: "1 (Ala–Ser)" },
      { text: "8" }
    ],
    correctAnswer: 0,
    explanation: "* The peptide bond has directionality: the N-terminus and C-terminus are distinct.\n* The possible combinations are: Ala-Ala, Ser-Ser, Ala-Ser (Ala at N-terminus), and Ser-Ala (Ser at N-terminus), making 4 distinct dipeptides.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 6,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Oct 2025 Paper 1 Q81",
    createdAt: "2026-09-01T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l6_lv3_8-2026",
    question: "What is the key structural difference in intermolecular bonding between Kevlar (an aromatic polyamide) and poly(ethene)?",
    options: [
      { text: "Kevlar chains form extensive regular networks of intermolecular hydrogen bonds between –C=O and –NH– groups alongside π–π stacking", isCorrect: true },
      { text: "Poly(ethene) forms stronger hydrogen bonds than Kevlar" },
      { text: "Kevlar chains are held together exclusively by temporary dipole-induced dipole forces" },
      { text: "Kevlar contains covalent cross-links between all adjacent polymer chains" }
    ],
    correctAnswer: 0,
    explanation: "* Kevlar is poly(p-phenylene terephthalamide). The planar aromatic rings allow chains to pack closely, forming extensive intermolecular hydrogen bonding ($-\\\\text{C=O} \\\\cdots \\\\text{H–N}-$).\n* Combined with $\\\\pi-\\\\pi$ stacking of the benzene rings, this gives Kevlar immense tensile strength and high thermal stability.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 6,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2026 Paper 1 Q82",
    createdAt: "2026-09-01T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l6_lv3_9-2026",
    question: "A synthetic chemist wants to convert benzene into benzoic acid (C₆H₅COOH). Which of the following multi-step routes achieves this in high yield?",
    options: [
      { text: "React with CH₃Cl / AlCl₃ (Friedel–Crafts alkylation) to give methylbenzene, then reflux with alkaline KMnO₄ followed by dilute acid", isCorrect: true },
      { text: "React directly with CO₂ and AlCl₃ under high pressure" },
      { text: "React with HNO₃ / H₂SO₄, followed by Sn / HCl, then react with HCOOH" },
      { text: "Reflux benzene with acidified potassium dichromate(VI) for 24 hours" }
    ],
    correctAnswer: 0,
    explanation: "* Benzene itself cannot be directly oxidised by acidified dichromate or permanganate.\n* Friedel-Crafts alkylation with $\\\\text{CH}_3\\\\text{Cl}/\\\\text{AlCl}_3$ introduces an alkyl side chain (toluene), which is readily oxidised by alkaline $\\\\text{KMnO}_4$ (followed by acid workup) to benzoic acid.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 6,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2026 Paper 1 Q71",
    createdAt: "2026-09-01T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l6_lv3_10-2026",
    question: "Why is phenylamine less reactive towards nucleophilic substitution of its aromatic carbon than chloroethane is at its aliphatic carbon?",
    options: [
      { text: "The C–N bond has partial double-bond character due to lone pair delocalisation, strengthening the bond and resisting cleavage", isCorrect: true },
      { text: "The benzene ring repels all negatively charged nucleophiles with zero polarisability" },
      { text: "The carbon in phenylamine has a lower electronegativity than in chloroethane" },
      { text: "Phenylamine is a non-polar hydrocarbon" }
    ],
    correctAnswer: 0,
    explanation: "* Overlap of the nitrogen lone pair with the delocalised aromatic $\\\\pi$-system imparts partial double bond character to the $\\\\text{C–N}$ bond.\n* This substantially increases the $\\\\text{C–N}$ bond dissociation enthalpy, preventing nucleophilic substitution at the aromatic carbon.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 6,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Oct 2025 Paper 1 Q82",
    createdAt: "2026-09-01T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l6_lv3_11-2026",
    question: "When propylamine reacts with excess chloroethane, which product is ultimately obtained as a quaternary ammonium salt?",
    options: [
      { text: "Triethylpropylammonium chloride", isCorrect: true },
      { text: "Diethylpropylamine" },
      { text: "Ethylpropylamine hydrochloride" },
      { text: "Tetraethylammonium chloride" }
    ],
    correctAnswer: 0,
    explanation: "* Propylamine ($\\\\text{CH}_3\\\\text{CH}_2\\\\text{CH}_2\\\\text{NH}_2$) acts as a nucleophile, reacting sequentially with three molecules of chloroethane ($\\\\text{CH}_3\\\\text{CH}_2\\\\text{Cl}$).\n* Successive alkylation yields the quaternary ammonium salt: $[(\\\\text{CH}_3\\\\text{CH}_2)_3\\\\text{N}(\\\\text{CH}_2\\\\text{CH}_2\\\\text{CH}_3)]^+\\\\text{Cl}^-$.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 6,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2025 Paper 1 Q83",
    createdAt: "2026-09-01T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l6_lv3_12-2026",
    question: "A tripeptide is formed from one molecule of alanine, one of glycine, and one of cysteine. How many chiral centres are present in this tripeptide molecule?",
    options: [
      { text: "2 (one from alanine and one from cysteine, since glycine is achiral)", isCorrect: true },
      { text: "3 (one on each amino acid residue)" },
      { text: "1 (only on cysteine)" },
      { text: "0 (polymerisation removes all chiral centres)" }
    ],
    correctAnswer: 0,
    explanation: "* Alanine has a chiral $\\\\alpha$-carbon ($-\\\\text{CH}_3$ group) and cysteine has a chiral $\\\\alpha$-carbon ($-\\\\text{CH}_2\\\\text{SH}$ group).\n* Glycine's $\\\\alpha$-carbon has two hydrogen atoms and is achiral.\n* Therefore, the tripeptide possesses exactly 2 chiral centres.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 6,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2026 Paper 1 Q72",
    createdAt: "2026-09-01T10:00:00Z"
  }
];
