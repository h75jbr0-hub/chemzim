import { Question } from '../../../types';

export const level2Questions: Question[] = [
  {
    id: "ex_ed_u5_l4_lv2_1-2026",
    question: "Why does phenylamine react instantly with aqueous bromine without a catalyst to form a white precipitate of 2,4,6-tribromophenylamine, whereas benzene requires pure liquid $\\text{Br}_2$ and an $\\text{AlBr}_3$ catalyst?",
    options: [
      { text: "Phenylamine is an inorganic base" },
      { text: "The unshared electron pair on the –NH₂ nitrogen atom delocalizes into the aromatic π-electron ring, dramatically increasing the electron density across the ring and polarizing incoming Br₂ molecules directly without needing a halogen-carrier catalyst", isCorrect: true },
      { text: "Phenylamine contains ionic bromine" },
      { text: "Benzene has no hydrogen atoms" }
    ],
    correctAnswer: 1,
    explanation: "* **Ring activation by $-\\text{NH}_2$**: Lone pair delocalization activates the ring enormously, enabling instant triple electrophilic bromination at room temperature without catalyst.",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2026 Paper 1 Q45",
    createdAt: "2027-03-24T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l4_lv2_2-2026",
    question: "In paper electrophoresis of amino acids carried out at a buffer $pH = 6.0$, three amino acids are spotted at the center of the paper strip: Aspartic acid ($pI = 2.77$), Alanine ($pI = 6.01$), and Lysine ($pI = 9.74$). What are their directions of migration when the electric field is applied?",
    options: [
      { text: "All three migrate to the positive anode" },
      { text: "Aspartic acid (net negative charge) migrates towards the positive anode (+); Alanine (zwitterion, net zero charge) remains near the origin; Lysine (net positive charge) migrates towards the negative cathode (–)", isCorrect: true },
      { text: "Lysine migrates to the anode; Aspartic acid to the cathode" },
      { text: "None of the amino acids move" }
    ],
    correctAnswer: 1,
    explanation: "* At $pH = 6.0$: Aspartic acid ($pH > pI$) has net charge $-1$ $\\rightarrow$ **anode (+)**; Alanine ($pH \\approx pI$) has net charge $0$ $\\rightarrow$ **origin**; Lysine ($pH < pI$) has net charge $+1$ $\\rightarrow$ **cathode (-)**.",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q55",
    createdAt: "2027-03-24T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l4_lv2_3-2026",
    question: "What is the secondary structure of proteins, and what specific type of bonding stabilizes the $\alpha$-helix and $\beta$-pleated sheet conformations?",
    options: [
      { text: "Covalent disulfide bridges between cysteine residues" },
      { text: "Regular spatial arrangement of the polypeptide backbone stabilized by regular hydrogen bonds between the carbonyl oxygen (>C=O) of one peptide link and the amino hydrogen (>N–H) of another peptide link", isCorrect: true },
      { text: "Ionic salt bridges between side chains" },
      { text: "Van der Waals forces between non-polar lipids" }
    ],
    correctAnswer: 1,
    explanation: "* **Secondary structure** ($\alpha$-helix and $\beta$-pleated sheets) is held exclusively by **hydrogen bonding** between peptide backbone $>\text{C=O}$ and $>\text{N-H}$ groups.",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2026 Paper 1 Q55",
    createdAt: "2027-03-25T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l4_lv2_4-2026",
    question: "When a solution of phenylamine (aniline) is treated with cold dilute hydrochloric acid, it dissolves completely to form a clear aqueous solution. When aqueous sodium hydroxide is subsequently added, a milky emulsion separates. What chemical transformations explain these observations?",
    options: [
      { text: "Phenylamine oxidizes to nitrobenzene and then reduces back" },
      { text: "Phenylamine acts as a base, accepting a proton from HCl to form the water-soluble ionic salt phenylammonium chloride (C₆H₅NH₃⁺Cl⁻); adding NaOH removes the proton, regenerating insoluble free phenylamine (C₆H₅NH₂)", isCorrect: true },
      { text: "Phenylamine polymerizes into polyaniline" },
      { text: "Phenylamine undergoes Friedel-Crafts alkylation" }
    ],
    correctAnswer: 1,
    explanation: "* Basic amine protonation: $\\text{C}_6\\text{H}_5\\text{NH}_2 + \\text{H}^+ \\rightarrow \\mathbf{\\text{C}_6\\text{H}_5\\text{NH}_3^+}$ (soluble salt). Neutralization with $\\text{OH}^-$ liberates oily, insoluble **$\\text{C}_6\\text{H}_5\\text{NH}_2$**.",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2026 Paper 1 Q46",
    createdAt: "2027-03-25T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l4_lv2_5-2026",
    question: "Why does the preparation of primary aliphatic amines by reaction of halogenoalkanes with ammonia often give low yields of the primary amine along with a mixture of secondary, tertiary amines and quaternary ammonium salts?",
    options: [
      { text: "The primary amine formed is a stronger nucleophile than ammonia, reacting preferentially with remaining halogenoalkane molecules in successive nucleophilic substitution steps", isCorrect: true },
      { text: "Ammonia decomposes into nitrogen gas" },
      { text: "Halogenoalkanes undergo electrophilic addition" },
      { text: "Primary amines evaporate instantly" }
    ],
    correctAnswer: 0,
    explanation: "* The primary amine ($\text{RNH}_2$) has an electron-donating alkyl group, making it **more nucleophilic than $\\text{NH}_3$**, undergoing subsequent alkylation to $\\text{R}_2\\text{NH}$, $\\text{R}_3\\text{N}$, and $\\text{R}_4\\text{N}^+$. Using large excess $\\text{NH}_3$ minimizes this.",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q76",
    createdAt: "2027-04-23T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l4_lv2_6-2026",
    question: "Why is the azo coupling reaction of benzenediazonium chloride with phenol carried out in a mildly alkaline solution ($pH \\approx 8–9$) rather than strongly acidic or strongly alkaline conditions?",
    options: [
      { text: "Acidic pH causes the phenol to evaporate" },
      { text: "At pH 8–9, phenol is deprotonated into the highly nucleophilic phenoxide ion (C₆H₅O⁻) which reacts rapidly with diazonium ions; strongly acidic pH suppresses phenoxide formation, while strongly alkaline pH (pH > 11) converts diazonium ions into unreactive diazotate ions (C₆H₅N=N–O⁻)", isCorrect: true },
      { text: "Alkaline solution acts as an addition catalyst" },
      { text: "Phenol polymerizes in neutral water" }
    ],
    correctAnswer: 1,
    explanation: "* **Optimal azo coupling pH ($8–9$)**: Ensures high concentration of nucleophilic phenoxide ($\text{ArO}^-$) while keeping electrophilic diazonium ($^+\\text{N}_2\\text{Ar}$) intact.",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2025 Paper 1 Q76",
    createdAt: "2027-04-23T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l4_lv2_7-2026",
    question: "How does the basicity of ethylamine ($\\text{CH}_3\\text{CH}_2\\text{NH}_2$), ammonia ($\\text{NH}_3$), and phenylamine ($\\text{C}_6\\text{H}_5\\text{NH}_2$) compare in aqueous solution?",
    options: [
      { text: "Phenylamine > Ammonia > Ethylamine" },
      { text: "Ethylamine > Ammonia > Phenylamine", isCorrect: true },
      { text: "Ammonia > Ethylamine > Phenylamine" },
      { text: "Phenylamine > Ethylamine > Ammonia" }
    ],
    correctAnswer: 1,
    explanation: "* **Basicity order**: Ethylamine (electron-releasing alkyl group, $+I$) > Ammonia > Phenylamine (lone pair delocalized into aromatic $\\pi$-ring).",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2026 Paper 1 Q64",
    createdAt: "2027-04-24T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l4_lv2_8-2026",
    question: "What is the structure and repeating unit of Kevlar, and why does Kevlar possess exceptional tensile strength and heat resistance?",
    options: [
      { text: "Polyalkene; –[CH₂–CH(C₆H₅)]ₙ–; held by covalent crosslinks" },
      { text: "Aromatic polyamide (aramid); –[CO–C₆H₄–CO–NH–C₆H₄–NH]ₙ–; rigid planar aromatic rings and extensive intermolecular hydrogen bonding between parallel chains create exceptional structural alignment and strength", isCorrect: true },
      { text: "Polyester; –[COO–CH₂CH₂–O]ₙ–; flexible chains" },
      { text: "Polyurethane; –[NH–CO–O]ₙ–; ionic bonding" }
    ],
    correctAnswer: 1,
    explanation: "* **Kevlar (poly(p-phenylene terephthalamide))** is an **aramid**: planar aromatic rings pack closely with dense networks of **hydrogen bonds** between adjacent chains.",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q77",
    createdAt: "2027-04-24T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l4_lv2_9-2026",
    question: "What ionic form does alanine ($\\text{CH}_3\\text{CH(NH}_2)\\text{COOH}$, $pI = 6.01$) assume when dissolved in a solution of strong alkali ($pH = 12$)?",
    options: [
      { text: "⁺H₃N–CH(CH₃)–COOH (cation)" },
      { text: "H₂N–CH(CH₃)–COO⁻ (anion with net –1 charge)", isCorrect: true },
      { text: "⁺H₃N–CH(CH₃)–COO⁻ (zwitterion)" },
      { text: "H₂N–CH(CH₃)–COOH (uncharged neutral molecule)" }
    ],
    correctAnswer: 1,
    explanation: "* At $pH > pI$ (strongly alkaline), the basic amine group is deprotonated ($\\text{-NH}_2$) and the carboxylic acid is deprotonated ($-\\text{COO}^-$) $\\implies \\mathbf{\\text{H}_2\\text{N-CH(CH}_3)-\\text{COO}^-}$ (net $-1$ charge).",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2026 Paper 1 Q77",
    createdAt: "2027-04-25T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l4_lv2_10-2026",
    question: "In the hydrolysis of Nylon-6,6 under alkaline conditions (heating with aqueous sodium hydroxide), what are the organic products formed?",
    options: [
      { text: "Hexane-1,6-diol and hexanedioic acid" },
      { text: "Hexane-1,6-diamine (H₂N(CH₂)₆NH₂) and the sodium salt of hexanedioic acid (sodium hexanedioate, ⁻OOC(CH₂)₄COO⁻ 2Na⁺)", isCorrect: true },
      { text: "Hexane and carbon dioxide" },
      { text: "Polyester fragments" }
    ],
    correctAnswer: 1,
    explanation: "* Alkaline hydrolysis breaks the $-\\text{CONH}-$ bonds: $[-\\text{NH(CH}_2)_6\\text{NHCO(CH}_2)_4\\text{CO-}]_n + 2n\\text{NaOH} \\rightarrow n\\mathbf{\\text{H}_2\\text{N(CH}_2)_6\\text{NH}_2} + n\\mathbf{\\text{NaOOC(CH}_2)_4\\text{COONa}}$.",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2026 Paper 1 Q65",
    createdAt: "2027-04-25T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l4_lv2_11-2026",
    question: "Why do poly(ethenol) (polyvinyl alcohol / PVA) capsules dissolve completely in water during laundry washing, while poly(ethene) is completely insoluble?",
    options: [
      { text: "Poly(ethenol) contains ionic bonds" },
      { text: "Poly(ethenol) possesses numerous polar –OH groups along the polymer chain that form extensive hydrogen bonds with water molecules, causing hydration and dissolution", isCorrect: true },
      { text: "Poly(ethenol) reacts with detergent to produce hydrogen gas" },
      { text: "Poly(ethene) is a liquid at washing temperature" }
    ],
    correctAnswer: 1,
    explanation: "* The repeat unit of poly(ethenol) is $-[\\text{CH}_2-\\text{CH(OH)}]_n-$. The $-\\text{OH}$ groups readily **hydrogen-bond with water**, rendering the polymer water-soluble.",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q78",
    createdAt: "2027-04-26T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l4_lv2_12-2026",
    question: "When phenylamine is treated with nitrous acid and hydrochloric acid above $10\\text{ }^\\circ\\text{C}$, what organic product and gas are observed instead of an isolated diazonium salt?",
    options: [
      { text: "Nitrobenzene and chlorine gas" },
      { text: "Phenol (C₆H₅OH) and rapid effervescence of nitrogen gas (N₂)", isCorrect: true },
      { text: "Chlorobenzene and ammonia" },
      { text: "Benzene and oxygen" }
    ],
    correctAnswer: 1,
    explanation: "* Above $10^\\circ\\text{C}$, benzenediazonium chloride hydrolyzes instantly: $[\\text{C}_6\\text{H}_5\\text{N}_2]^+\\text{Cl}^- + \\text{H}_2\\text{O} \\rightarrow \\mathbf{\\text{C}_6\\text{H}_5\\text{OH}} + \\mathbf{\\text{N}_2\\text{(g)}} + \\text{HCl}$.",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2025 Paper 1 Q78",
    createdAt: "2027-04-26T10:00:00Z"
  }
];
