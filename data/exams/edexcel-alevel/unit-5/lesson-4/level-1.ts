import { Question } from '../../../types';

export const level1Questions: Question[] = [
  {
    id: "ex_ed_u5_l4_lv1_1-2026",
    question: "How do aliphatic amines (e.g. ethylamine) act as Brønsted-Lowry bases in aqueous solution?",
    options: [
      { text: "They release hydroxide ions from their alkyl groups" },
      { text: "The lone pair of electrons on the nitrogen atom accepts a proton (H⁺) from water to form an alkylammonium cation and an OH⁻ ion: RNH₂ + H₂O ⇌ RNH₃⁺ + OH⁻", isCorrect: true },
      { text: "They donate protons to water" },
      { text: "They oxidize water to hydrogen peroxide" }
    ],
    correctAnswer: 1,
    explanation: "* The nitrogen lone pair acts as a proton acceptor: $\\text{RNH}_2 + \\text{H}_2\\text{O} \\rightleftharpoons \\text{RNH}_3^+ + \\text{OH}^-$.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2026 Paper 1 Q20",
    createdAt: "2027-02-09T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l4_lv1_2-2026",
    question: "What reagents and conditions are used to reduce nitrobenzene ($\\text{C}_6\\text{H}_5\\text{NO}_2$) directly to phenylamine (aniline, $\\text{C}_6\\text{H}_5\\text{NH}_2$)?",
    options: [
      { text: "Acidified potassium dichromate(VI) under reflux" },
      { text: "Tin (Sn) and concentrated hydrochloric acid (conc. HCl) heated under reflux, followed by treatment with aqueous sodium hydroxide (NaOH)", isCorrect: true },
      { text: "Water and oxygen gas" },
      { text: "Concentrated sulfuric acid at 100 °C" }
    ],
    correctAnswer: 1,
    explanation: "* Step 1: $\\text{Sn} / \\text{conc. HCl}$ reduces $-\\text{NO}_2$ to phenylammonium chloride ($\text{C}_6\\text{H}_5\\text{NH}_3^+\\text{Cl}^-$). Step 2: $\\text{NaOH(aq)}$ liberates free phenylamine ($\text{C}_6\\text{H}_5\\text{NH}_2$).",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q24",
    createdAt: "2027-02-10T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l4_lv1_3-2026",
    question: "What is an amino acid zwitterion, and under what conditions does it exist in aqueous solution?",
    options: [
      { text: "An uncharged non-polar molecule existing only in vacuum" },
      { text: "An internally neutral dipolar ion where the basic –NH₂ group is protonated to –NH₃⁺ and the acidic –COOH group is deprotonated to –COO⁻ (H₃N⁺–CHR–COO⁻), existing at its isoelectric point (pI)", isCorrect: true },
      { text: "An amino acid with two amino groups" },
      { text: "A synthetic peptide dimer" }
    ],
    correctAnswer: 1,
    explanation: "* At the isoelectric point ($pI$), internal acid-base neutralization forms the dipolar **zwitterion** ($^+\\text{H}_3\\text{N}-\\text{CHR}-\\text{COO}^-$).",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2026 Paper 1 Q25",
    createdAt: "2027-02-10T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l4_lv1_4-2026",
    question: "What is the primary organic product formed when phenylamine (aniline) reacts with ethanoyl chloride ($\\text{CH}_3\\text{COCl}$) at room temperature?",
    options: [
      { text: "Chlorobenzene" },
      { text: "N-phenylethanamide (acetanilide, C₆H₅NHCOCH₃) as a white crystalline solid", isCorrect: true },
      { text: "Ethyl phenyl ether" },
      { text: "Phenyl ethanoate" }
    ],
    correctAnswer: 1,
    explanation: "* Nucleophilic addition-elimination acylation of $-\\text{NH}_2$ yields the secondary amide **N-phenylethanamide ($\text{C}_6\\text{H}_5\\text{NHCOCH}_3$)** and $\\text{HCl}$.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2026 Paper 1 Q44",
    createdAt: "2027-03-21T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l4_lv1_5-2026",
    question: "Why do amino acids have unusually high melting points (typically $>200\\text{ }^\\circ\\text{C}$) and high solubility in water compared to other carboxylic acids or amines of similar molecular mass?",
    options: [
      { text: "They contain covalent network lattices like diamond" },
      { text: "In the solid state, amino acids exist entirely as ionic zwitterions (⁺H₃N–CHR–COO⁻) held together by strong, extensive electrostatic ionic bonds in a crystalline lattice", isCorrect: true },
      { text: "They contain metallic bonds" },
      { text: "They form coordinate polymers with nitrogen" }
    ],
    correctAnswer: 1,
    explanation: "* **Zwitterionic ionic lattice**: Electrostatic attractions between $^+\\text{NH}_3$ and $-\\text{COO}^-$ groups require huge thermal energy to break, giving high melting points.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q53",
    createdAt: "2027-03-22T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l4_lv1_6-2026",
    question: "What is the primary structure of a protein?",
    options: [
      { text: "The folding of the chain into alpha-helices and beta-pleated sheets" },
      { text: "The specific sequence of amino acids joined together by covalent peptide (amide) bonds along the polypeptide chain", isCorrect: true },
      { text: "The overall three-dimensional globular shape" },
      { text: "The association of multiple polypeptide subunits" }
    ],
    correctAnswer: 1,
    explanation: "* **Primary structure** is the linear sequence of amino acid residues linked by covalent peptide bonds ($\\text{-CONH-}$).",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2025 Paper 1 Q53",
    createdAt: "2027-03-22T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l4_lv1_7-2026",
    question: "Which of the following describes the preparation of a primary aliphatic amine from a nitrile?",
    options: [
      { text: "Oxidation with acidified potassium dichromate(VI)" },
      { text: "Reduction using lithium aluminium hydride (LiAlH₄) in dry ether (or catalytic hydrogenation with H₂ / Ni): R–C≡N + 4[H] → R–CH₂NH₂", isCorrect: true },
      { text: "Hydrolysis with hot concentrated hydrochloric acid" },
      { text: "Reaction with aqueous sodium hydroxide" }
    ],
    correctAnswer: 1,
    explanation: "* Reduction of nitriles with $\\text{LiAlH}_4$ in dry ether produces a primary amine with the same number of carbon atoms: $\\text{R-CN} + 4[\\text{H}] \\rightarrow \\mathbf{\\text{R-CH}_2\\text{NH}_2}$.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q72",
    createdAt: "2027-04-18T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l4_lv1_8-2026",
    question: "What reagents and conditions are required to prepare a benzenediazonium salt from phenylamine (aniline)?",
    options: [
      { text: "Concentrated nitric acid at 55 °C" },
      { text: "Nitrous acid (HNO₂, made in situ from NaNO₂ and dilute HCl) at 0–5 °C", isCorrect: true },
      { text: "Ammonia solution under reflux" },
      { text: "Hot aqueous sodium nitrate" }
    ],
    correctAnswer: 1,
    explanation: "* $\\text{C}_6\\text{H}_5\\text{NH}_2 + \\text{HNO}_2 + \\text{HCl} \\xrightarrow{0–5^\\circ\\text{C}} [\\text{C}_6\\text{H}_5\\text{N}_2]^+\\text{Cl}^- + 2\\text{H}_2\\text{O}$. Temperature must be kept $< 5^\\circ\\text{C}$ to prevent decomposition.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2026 Paper 1 Q72",
    createdAt: "2027-04-18T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l4_lv1_9-2026",
    question: "What type of polymer is Nylon-6,6, and what two monomers are used in its industrial synthesis?",
    options: [
      { text: "Addition polymer; ethene and propene" },
      { text: "Polyamide (condensation polymer); hexane-1,6-diamine (H₂N(CH₂)₆NH₂) and hexanedioic acid (HOOC(CH₂)₄COOH)", isCorrect: true },
      { text: "Polyester; benzene-1,4-dicarboxylic acid and ethane-1,2-diol" },
      { text: "Polypeptide; alanine and glycine" }
    ],
    correctAnswer: 1,
    explanation: "* **Nylon-6,6** is a condensation **polyamide** formed by eliminating $\\text{H}_2\\text{O}$ between **hexane-1,6-diamine** and **hexanedioic acid**.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2026 Paper 1 Q61",
    createdAt: "2027-04-19T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l4_lv1_10-2026",
    question: "Which of the following organic functional groups is formed when an acyl chloride reacts with excess concentrated ammonia?",
    options: [
      { text: "Primary amine" },
      { text: "Primary amide (RCONH₂) and ammonium chloride (NH₄Cl)", isCorrect: true },
      { text: "Nitrile" },
      { text: "Ester" }
    ],
    correctAnswer: 1,
    explanation: "* $\\text{RCOCl} + 2\\text{NH}_3 \\rightarrow \\mathbf{\\text{RCONH}_2} + \\text{NH}_4\\text{Cl}$ (nucleophilic addition-elimination).",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q73",
    createdAt: "2027-04-19T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l4_lv1_11-2026",
    question: "Why is phenylamine (aniline) a WEAKER base than ammonia in aqueous solution?",
    options: [
      { text: "Phenylamine is completely insoluble in all liquids" },
      { text: "The unshared electron pair on the nitrogen atom delocalizes into the aromatic π-electron ring, making the lone pair significantly less available to accept a proton (H⁺)", isCorrect: true },
      { text: "The benzene ring donates electron density to nitrogen" },
      { text: "Phenylamine has no lone pairs on nitrogen" }
    ],
    correctAnswer: 1,
    explanation: "* **Lone pair delocalization**: Conjugation with the benzene $\\pi$-system reduces electron density on nitrogen, lowering its basicity ($pK_b = 9.4$ vs $\\text{NH}_3 = 4.75$).",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2025 Paper 1 Q73",
    createdAt: "2027-04-20T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l4_lv1_12-2026",
    question: "What is the physical reason that low molar mass primary aliphatic amines (e.g. methylamine, ethylamine, butylamine) are completely miscible with water?",
    options: [
      { text: "They form covalent network crystals in water" },
      { text: "The polar –NH₂ group can form extensive hydrogen bonds with water molecules using both the N–H hydrogen atoms and the lone pair on nitrogen", isCorrect: true },
      { text: "They react explosively with water to form nitrogen gas" },
      { text: "They have non-polar hydrocarbon skeletons" }
    ],
    correctAnswer: 1,
    explanation: "* Primary amines form **intermolecular hydrogen bonds** with water molecules via $-\\text{NH}_2$ and $\\text{H}_2\\text{O}$.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2026 Paper 1 Q62",
    createdAt: "2027-04-20T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l4_lv1_13-2026",
    question: "What organic linkage is formed when two $\\alpha$-amino acids condense together with the elimination of a water molecule?",
    options: [
      { text: "Ester linkage (–COO–)" },
      { text: "Peptide / amide linkage (–CO–NH–)", isCorrect: true },
      { text: "Ether linkage (–O–)" },
      { text: "Glycosidic bond" }
    ],
    correctAnswer: 1,
    explanation: "* Condensation between the $-\\text{COOH}$ of one amino acid and the $-\\text{NH}_2$ of another forms a **peptide (amide) bond ($\\text{-CONH-}$)**.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q74",
    createdAt: "2027-04-21T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l4_lv1_14-2026",
    question: "What observation occurs when aqueous butylamine is added to aqueous copper(II) sulfate until in excess?",
    options: [
      { text: "A pale blue precipitate forms initially, which dissolves in excess butylamine to give a deep blue solution of a tetraalkylamine copper(II) complex ion", isCorrect: true },
      { text: "A white precipitate that turns yellow" },
      { text: "Effervescence of hydrogen gas" },
      { text: "An intense purple color with no precipitate" }
    ],
    correctAnswer: 0,
    explanation: "* Like ammonia, butylamine acts first as a base to precipitate $\\text{Cu(OH)}_2\\text{(s)}$, and then in excess as a ligand forming $[\\text{Cu(RNH}_2)_4(\\text{H}_2\\text{O})_2]^{2+}\\text{(aq)}$ (**deep blue**).",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2026 Paper 1 Q74",
    createdAt: "2027-04-21T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l4_lv1_15-2026",
    question: "Why is glycine (2-aminoethanoic acid, $\\text{H}_2\\text{N–CH}_2\\text{–COOH}$) the ONLY common standard $\\alpha$-amino acid that is optically inactive?",
    options: [
      { text: "Glycine contains no nitrogen" },
      { text: "The central α-carbon atom is bonded to two identical hydrogen atoms, meaning it lacks an asymmetric (chiral) carbon center and possesses a plane of symmetry", isCorrect: true },
      { text: "Glycine exists only in the gas phase" },
      { text: "Glycine is a racemic mixture of polymers" }
    ],
    correctAnswer: 1,
    explanation: "* In glycine, the $\\alpha$-carbon is bonded to $-\\text{H}$, $-\\text{H}$, $-\\text{NH}_2$, and $-\\text{COOH}$. With two identical $\\text{-H}$ groups, it is **achiral** and **optically inactive**.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2026 Paper 1 Q63",
    createdAt: "2027-04-22T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l4_lv1_16-2026",
    question: "In the hydrolysis of an amide under acidic conditions (heating with dilute $\\text{HCl}$), what are the organic and inorganic products?",
    options: [
      { text: "An alcohol and nitrogen gas" },
      { text: "A carboxylic acid (RCOOH) and ammonium chloride (NH₄⁺Cl⁻)", isCorrect: true },
      { text: "An aldehyde and chlorine" },
      { text: "An ester and hydrogen" }
    ],
    correctAnswer: 1,
    explanation: "* Acid hydrolysis: $\\text{RCONH}_2 + \\text{H}_2\\text{O} + \\text{HCl} \\rightarrow \\mathbf{\\text{RCOOH}} + \\mathbf{\\text{NH}_4^+\\text{Cl}^-}$.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q75",
    createdAt: "2027-04-22T10:00:00Z"
  }
];
