import { Question } from '../../../types';

export const level3Questions: Question[] = [
  {
    id: "ex_ed_u5_l5_lv3_1-2026",
    question: "An unknown organic compound $\\text{X}$ with molecular formula $\\text{C}_5\\text{H}_{10}\\text{O}$ gives the following spectroscopic data: IR absorption at $1715\\text{ cm}^{-1}$; $^{13}\\text{C}$ NMR shows exactly THREE peaks; $^1\\text{H}$ NMR shows a triplet at $\\delta = 1.05\\text{ ppm}$ ($6\\text{H}$) and a quartet at $\\delta = 2.45\\text{ ppm}$ ($4\\text{H}$). What is the IUPAC name and structure of compound $\\text{X}$?",
    options: [
      { text: "Pentan-2-one (CH₃COCH₂CH₂CH₃)" },
      { text: "Pentan-3-one (CH₃CH₂COCH₂CH₃)", isCorrect: true },
      { text: "Pentanal (CH₃CH₂CH₂CH₂CHO)" },
      { text: "3-methylbutan-2-one ((CH₃)₂CHCOCH₃)" }
    ],
    correctAnswer: 1,
    explanation: "* IR $1715\\text{ cm}^{-1}$ indicates a ketone $\\text{C=O}$. The plane of symmetry gives **3 $^{13}\\text{C}$ NMR peaks** ($\\text{CH}_3$, $\\text{CH}_2$, $\\text{C=O}$). In $^1\\text{H}$ NMR, two equivalent ethyl groups give a $6\\text{H}$ triplet and a $4\\text{H}$ quartet $\\implies \\mathbf{\\text{pentan-3-one}}$.",
    level: 3,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q34",
    createdAt: "2027-02-24T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv3_2-2026",
    question: "A fragrant organic liquid $\\text{Y}$ has the formula $\\text{C}_8\\text{H}_8\\text{O}_2$. Its IR spectrum displays prominent peaks at $1720\\text{ cm}^{-1}$ ($\text{C=O}$) and $1250\\text{ cm}^{-1}$ ($\text{C–O}$), but no broad peak above $3000\\text{ cm}^{-1}$. Its $^1\\text{H}$ NMR spectrum features: a singlet at $\\delta = 3.90\\text{ ppm}$ ($3\\text{H}$), a multiplet at $\\delta = 7.45\\text{ ppm}$ ($3\\text{H}$), and a multiplet at $\\delta = 8.05\\text{ ppm}$ ($2\\text{H}$). What is the IUPAC name of $\\text{Y}$?",
    options: [
      { text: "Phenyl ethanoate (CH₃COOC₆H₅)" },
      { text: "Methyl benzoate (C₆H₅COOCH₃)", isCorrect: true },
      { text: "4-methoxybenzaldehyde" },
      { text: "2-hydroxyacetophenone" }
    ],
    correctAnswer: 1,
    explanation: "* Singlet at $\\delta 3.90$ ($3\\text{H}$) is $-\\text{COOCH}_3$ (ester methyl on oxygen). The multiplets at $\\delta 7.45$ ($3\\text{H}$) and $\\delta 8.05$ ($2\\text{H}$, ortho to electron-withdrawing $\\text{C=O}$) belong to a mono-substituted benzene ring $\\implies \\mathbf{\\text{methyl benzoate}}$ ($\text{C}_6\\text{H}_5\\text{COOCH}_3$).",
    level: 3,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2026 Paper 1 Q35",
    createdAt: "2027-02-24T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv3_3-2026",
    question: "High-performance liquid chromatography (HPLC) is employed to separate enantiomers of a chiral cardiovascular drug. Why is standard silica gel incapable of separating optical enantiomers, and what modification to the stationary phase is REQUIRED?",
    options: [
      { text: "Enantiomers have different boiling points" },
      { text: "Enantiomers have identical physical and chemical properties in achiral environments (identical partition coefficients on standard silica); a CHIRAL stationary phase (e.g. cyclodextrin or polysaccharide-coated silica) is required to form transient diastereomeric complexes with different thermodynamic stabilities and retention times", isCorrect: true },
      { text: "HPLC only works for inorganic salts" },
      { text: "Enantiomers must be converted into radioactive isotopes" }
    ],
    correctAnswer: 1,
    explanation: "* Enantiomers have identical partition coefficients on achiral stationary phases. Only a **chiral stationary phase (CSP)** creates diastereomeric interactions with different free energies and retention times.",
    level: 3,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2026 Paper 1 Q29",
    createdAt: "2027-02-25T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv3_4-2026",
    question: "In the retrosynthetic analysis of 2-phenylbutan-2-ol ($\\text{C}_6\\text{H}_5\\text{C(OH)(CH}_3)\\text{CH}_2\\text{CH}_3$), which of the following pairs of precursors can be reacted via a Grignard reaction (followed by dilute acid workup) to synthesize the target tertiary alcohol?",
    options: [
      { text: "Benzene and butan-2-one" },
      { text: "Phenylmagnesium bromide (C₆H₅MgBr) and butan-2-one (CH₃COCH₂CH₃) [or ethylmagnesium bromide and acetophenone]", isCorrect: true },
      { text: "Benzyl alcohol and ethanal" },
      { text: "Phenol and butane" }
    ],
    correctAnswer: 1,
    explanation: "* Tertiary alcohol with $\\text{Ph}$, $\\text{Me}$, and $\\text{Et}$ groups is formed by nucleophilic addition of $\\text{C}_6\\text{H}_5\\text{MgBr}$ to butan-2-one: $\\text{C}_6\\text{H}_5\\text{MgBr} + \\text{CH}_3\\text{COCH}_2\\text{CH}_3 \\xrightarrow{\\text{H}^+} \\mathbf{\\text{C}_6\\text{H}_5\\text{C(OH)(CH}_3)\\text{CH}_2\\text{CH}_3}$.",
    level: 3,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q35",
    createdAt: "2027-02-25T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv3_5-2026",
    question: "How many peaks are observed in the $^{13}\\text{C}$ NMR spectrum of methyl 4-methylbenzoate ($\\text{CH}_3-\\text{C}_6\\text{H}_4-\\text{COOCH}_3$)?",
    options: [
      { text: "9 peaks" },
      { text: "6 peaks (one ester –OCH₃, one ring –CH₃, one carbonyl C=O, two substituted ring carbons C1 and C4, and two pairs of equivalent ring CH carbons C2/6 and C3/5)", isCorrect: true },
      { text: "8 peaks" },
      { text: "5 peaks" }
    ],
    correctAnswer: 1,
    explanation: "* Due to the vertical mirror plane ($C_{2v}$ on the benzene ring), the ring carbons contribute $4$ unique environments (C1, C4, C2/6, C3/5) + carbonyl $\\text{C=O}$ ($1$) + ring $\\text{CH}_3$ ($1$) + ester $\\text{OCH}_3$ ($1$) = **6 distinct $^{13}\\text{C}$ peaks** (since both methyls are chemically distinct).",
    level: 3,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2025 Paper 1 Q36",
    createdAt: "2027-02-26T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv3_6-2026",
    question: "In the multi-step industrial synthesis of paracetamol (4-acetamidophenol / acetaminophen), 4-aminophenol ($\\text{HO}-\\text{C}_6\\text{H}_4-\\text{NH}_2$) is reacted with ethanoic anhydride ($(\\text{CH}_3\\text{CO})_2\\text{O}$). Why does ethanoic anhydride react selectively at the amino group ($-\\text{NH}_2$) rather than the phenolic hydroxyl group ($-\\text{OH}$)?",
    options: [
      { text: "The –OH group is completely unreactive in water" },
      { text: "The nitrogen atom in –NH₂ is less electronegative than the oxygen in –OH and possesses a more readily available lone pair of electrons, making –NH₂ a significantly more nucleophilic group than –OH", isCorrect: true },
      { text: "The –OH group is blocked by a protecting group" },
      { text: "Ethanoic anhydride is an electrophile that only attacks nitrogen" }
    ],
    correctAnswer: 1,
    explanation: "* Nitrogen is less electronegative than oxygen ($3.0$ vs $3.5$), so the lone pair on $-\\text{NH}_2$ is much more nucleophilic, reacting preferentially with ethanoic anhydride to form paracetamol ($\text{HO}-\\text{C}_6\\text{H}_4-\\text{NHCOCH}_3$).",
    level: 3,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2026 Paper 1 Q30",
    createdAt: "2027-02-26T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv3_7-2026",
    question: "In the industrial synthesis of methyl 3-nitrobenzoate from methyl benzoate ($\\text{C}_6\\text{H}_5\\text{COOCH}_3$), why must the nitration temperature be kept strictly below $15\\text{ }^\\circ\\text{C}$, and why does substitution occur almost exclusively at the 3-position?",
    options: [
      { text: "Temperatures above 15 °C polymerize the ester" },
      { text: "The ester group (–COOCH₃) is electron-withdrawing by resonance and induction, deactivating the ring (especially the 2- and 4-positions) and directing the incoming NO₂⁺ electrophile to the 3- (meta) position; keeping the temperature below 15 °C prevents dangerous di-nitration or hydrolysis of the ester group", isCorrect: true },
      { text: "The ester group is an activating group that reacts explosively" },
      { text: "The methyl group hydrolyzes at room temperature" }
    ],
    correctAnswer: 1,
    explanation: "* $-\\text{COOCH}_3$ is **3-directing and deactivating**. Temperature $< 15^\circ\\text{C}$ minimizes ester hydrolysis and avoids dinitration.",
    level: 3,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q41",
    createdAt: "2027-03-06T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv3_8-2026",
    question: "In the tertiary structure of proteins, what specific covalent bond can form between the side chains of two cysteine amino acid residues ($\\text{R} = -\\text{CH}_2\\text{SH}$)?",
    options: [
      { text: "Peptide link" },
      { text: "Disulfide bridge (–S–S– covalent bond formed by oxidative dimerization of two thiol –SH groups: 2 R–SH + [O] → R–S–S–R + H₂O)", isCorrect: true },
      { text: "Ester crosslink" },
      { text: "Hydrogen bond" }
    ],
    correctAnswer: 1,
    explanation: "* Oxidation of two cysteine thiol groups forms a covalent **disulfide bridge ($-\\text{S-S-}-$**), providing immense thermal and mechanical stability to globular proteins and keratin.",
    level: 3,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2026 Paper 1 Q42",
    createdAt: "2027-03-06T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv3_9-2026",
    question: "A basic solution of 4-methylbenzenediazonium chloride is coupled with naphthalen-2-ol (2-naphthol). What is the chemical structure and class of the resulting product, and why is coupling carried out in mildly alkaline solution ($pH \\approx 8–9$)?",
    options: [
      { text: "A colorless aliphatic polymer formed by addition" },
      { text: "An intensely red/orange azo dye; alkaline pH is required to deprotonate 2-naphthol into the highly nucleophilic naphthalen-2-olate (naphthoxide) anion, which rapidly attacks the diazonium cation at the 1-position", isCorrect: true },
      { text: "A cyclic ether formed by condensation" },
      { text: "A nitroalkane formed by oxidation" }
    ],
    correctAnswer: 1,
    explanation: "* Mild alkaline $pH$ deprotonates 2-naphthol to naphthoxide ($-\\text{O}^-$), enormously activating the $1$-position for rapid **azo coupling** to form a brilliantly colored **azo dye**.",
    level: 3,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2026 Paper 1 Q35",
    createdAt: "2027-03-07T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv3_10-2026",
    question: "How does the relative basicity of primary, secondary, and tertiary aliphatic ethylamines in aqueous solution compare, and what is the anomalous order of base strength?",
    options: [
      { text: "Tertiary > Secondary > Primary > Ammonia" },
      { text: "Secondary amine ((C₂H₅)₂NH) > Primary amine (C₂H₅NH₂) > Tertiary amine ((C₂H₅)₃N) > Ammonia (NH₃)", isCorrect: true },
      { text: "Ammonia > Primary > Secondary > Tertiary" },
      { text: "Primary > Tertiary > Secondary > Ammonia" }
    ],
    correctAnswer: 1,
    explanation: "* In water, basicity is governed by a balance between **electron-donating inductive effect** of alkyl groups and **steric hindrance to hydration (hydrogen bonding with water)** of the resulting cation, making **secondary amine the strongest base**.",
    level: 3,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q42",
    createdAt: "2027-03-07T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv3_11-2026",
    question: "An aromatic compound $\\text{K}$ ($\text{C}_7\\text{H}_7\\text{NO}_2$) dissolves in aqueous $\\text{NaOH}$ but not in aqueous $\\text{NaHCO}_3$. When reduced with $\\text{Sn} / \\text{conc. HCl}$ followed by $\\text{NaOH}$, it forms compound $\\text{L}$ ($\text{C}_7\\text{H}_9\\text{NO}$). What are the identities of $\\text{K}$ and $\\text{L}$?",
    options: [
      { text: "K: 2-nitrotoluene; L: 2-methylaniline" },
      { text: "K: 4-nitrophenol / 2-nitrophenol derivative (or 4-methyl-2-nitrophenol / nitrocresol); L: 4-methyl-2-aminophenol (an aminophenol possessing both phenolic and amino groups)", isCorrect: true },
      { text: "K: Benzamide; L: Benzylamine" },
      { text: "K: Phenylnitromethane; L: Benzylamine" }
    ],
    correctAnswer: 1,
    explanation: "* Dissolution in $\\text{NaOH}$ but not $\\text{NaHCO}_3$ confirms a **phenolic $-\\text{OH}$** group. Reduction with $\\text{Sn}/\\text{HCl}$ converts $-\\text{NO}_2$ to $-\\text{NH}_2$, yielding an **aminophenol** ($\text{C}_7\\text{H}_9\\text{NO}$).",
    level: 3,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2025 Paper 1 Q43",
    createdAt: "2027-03-08T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv3_12-2026",
    question: "In the complete hydrolysis of a hexapeptide with $6\\text{ mol dm}^{-3}\\text{ HCl}$ at $110\\text{ }^\\circ\\text{C}$ for 24 hours, what type of chemical reaction occurs at the peptide linkages, and what are the ionic products under these strongly acidic conditions?",
    options: [
      { text: "Free-radical substitution forming halogenated peptides" },
      { text: "Acid-catalyzed nucleophilic acyl substitution (hydrolysis) with addition of water across each –CONH– bond, yielding free amino acids existing as protonated cations (⁺H₃N–CHR–COOH) with chloride counter-ions", isCorrect: true },
      { text: "Condensation polymerization forming nylon" },
      { text: "Electrophilic aromatic substitution" }
    ],
    correctAnswer: 1,
    explanation: "* Hydrolysis of $5$ peptide bonds consumes $5\\text{ H}_2\\text{O}$ molecules. In $6\\text{ M HCl}$, all amino acid $-\\text{NH}_2$ groups are protonated to cations: $\\mathbf{^+\\text{H}_3\\text{N}-\\text{CHR}-\\text{COOH}}$.",
    level: 3,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2026 Paper 1 Q36",
    createdAt: "2027-03-08T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv3_13-2026",
    question: "An unknown chiral compound $\\text{Z}$ ($\text{C}_9\\text{H}_{10}\\text{O}_2$) exhibits the following spectroscopic properties: IR peak at $1710\\text{ cm}^{-1}$ ($\text{C=O}$) and a broad envelope at $2500–3300\\text{ cm}^{-1}$ ($\text{O–H}$ carboxylic acid); $^{13}\\text{C}$ NMR shows SIX peaks; $^1\\text{H}$ NMR features a doublet at $\\delta = 1.50\\text{ ppm}$ ($3\\text{H}$, $J = 7\\text{ Hz}$), a quartet at $\\delta = 3.75\\text{ ppm}$ ($1\\text{H}$, $J = 7\\text{ Hz}$), a multiplet at $\\delta = 7.30\\text{ ppm}$ ($5\\text{H}$), and a singlet at $\\delta = 11.80\\text{ ppm}$ ($1\\text{H}$). What is the IUPAC name of $\\text{Z}$?",
    options: [
      { text: "3-phenylpropanoic acid" },
      { text: "2-phenylpropanoic acid (hydratropic acid, containing a chiral carbon: C₆H₅–C*H(CH₃)–COOH)", isCorrect: true },
      { text: "Ethyl benzoate" },
      { text: "Benzyl ethanoate" }
    ],
    correctAnswer: 1,
    explanation: "* The $3\\text{H}$ doublet and $1\\text{H}$ quartet indicate a $-\\text{CH(CH}_3)-$ group bonded to phenyl and carboxyl groups: $\\text{C}_6\\text{H}_5-\\mathbf{\\text{C}^*\\text{H(CH}_3)}-\\text{COOH}$ (**2-phenylpropanoic acid**).",
    level: 3,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q48",
    createdAt: "2027-03-16T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv3_14-2026",
    question: "In green organic synthesis, the traditional Boots synthesis of ibuprofen had an atom economy of $40\\%$ and generated substantial hazardous chromium and aluminium waste. The modern BHC green synthesis achieves an atom economy of $>77\\%$ ($99\\%$ with recovered ethanoic acid). What is the initial catalytic step in the BHC synthesis?",
    options: [
      { text: "Friedel-Crafts acylation of isobutylbenzene with ethanoic anhydride using recyclable anhydrous HF as catalyst/solvent (with >99% selectivity and producing no heavy metal waste)", isCorrect: true },
      { text: "Direct nitration with fuming nitric acid" },
      { text: "Oxidation with potassium permanganate" },
      { text: "Grignard reaction in benzene" }
    ],
    correctAnswer: 0,
    explanation: "* The **BHC green route** uses a catalytic **Friedel-Crafts acylation with recyclable $\\text{HF}$** and ethanoic anhydride in step 1, followed by catalytic hydrogenation and carbonylation.",
    level: 3,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2026 Paper 1 Q49",
    createdAt: "2027-03-16T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv3_15-2026",
    question: "In cation-exchange chromatography used to separate a mixture of peptides, what governs the order in which peptides elute when the buffer pH and ionic strength ($\\text{NaCl}$ concentration) are gradually increased?",
    options: [
      { text: "Peptides elute strictly in alphabetical order of names" },
      { text: "Peptides with the lowest net positive charge (or net negative charge) bind weakest to the negatively charged sulfonate (–SO₃⁻) resin and elute first; as [Na⁺] increases, Na⁺ ions compete for binding sites, displacing more strongly bound polycationic peptides", isCorrect: true },
      { text: "The radioactive half-life of carbon" },
      { text: "The magnetic susceptibility of sulfur" }
    ],
    correctAnswer: 1,
    explanation: "* **Cation-exchange chromatography**: Positively charged peptides bind to anionic resin ($-\\text{SO}_3^-$). Elution occurs in order of increasing net positive charge density as $[\text{Na}^+]$ is ramped up.",
    level: 3,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2026 Paper 1 Q41",
    createdAt: "2027-03-17T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv3_16-2026",
    question: "High-resolution mass spectrometry (HRMS) analysis of synthesized aspirin ($\\text{C}_9\\text{H}_8\\text{O}_4$) gives a molecular ion peak at $m/z = 180.0420$. Given atomic masses: $^{12}\\text{C} = 12.0000$, $^1\\text{H} = 1.0078$, $^{16}\\text{O} = 15.9949$, $^{14}\\text{N} = 14.0031$, calculate the precise theoretical mass of aspirin and distinguish it from an isobaric nitrogen compound $\\text{C}_{10}\\text{H}_{16}\\text{N}_2$ ($M_r \\approx 180$).",
    options: [
      { text: "Aspirin = 180.1263 u; C₁₀H₁₆N₂ = 180.0420 u" },
      { text: "Aspirin (C₉H₈O₄) = 9(12.0000) + 8(1.0078) + 4(15.9949) = 180.0420 u; whereas C₁₀H₁₆N₂ = 10(12.0000) + 16(1.0078) + 2(14.0031) = 180.1310 u", isCorrect: true },
      { text: "Both have identical HRMS masses of 180.0000 u" },
      { text: "Aspirin cannot be measured by HRMS" }
    ],
    correctAnswer: 1,
    explanation: "* Exact mass calculation: $\\text{C}_9\\text{H}_8\\text{O}_4 = 108.0000 + 8.0624 + 63.9796 = \\mathbf{180.0420\\text{ u}}$, which is easily distinguished from $\\text{C}_{10}\\text{H}_{16}\\text{N}_2$ ($180.1310\\text{ u}$) by HRMS.",
    level: 3,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q49",
    createdAt: "2027-03-17T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv3_17-2026",
    question: "In the industrial synthesis of poly(ethylene terephthalate) (PET / Terylene), benzene-1,4-dicarboxylic acid (terephthalic acid) is reacted with ethane-1,2-diol. What type of polymerisation occurs and what is the repeating unit of PET?",
    options: [
      { text: "Addition polymerisation; –[CH₂–CH₂–O]ₙ–" },
      { text: "Condensation polymerisation (esterification with elimination of water); –[CO–C₆H₄–CO–O–CH₂CH₂–O]ₙ–", isCorrect: true },
      { text: "Free-radical substitution; –[C₆H₄–CH₂]ₙ–" },
      { text: "Coordination polymerisation; –[CH₂=CH–Cl]ₙ–" }
    ],
    correctAnswer: 1,
    explanation: "* Dicarboxylic acid + diol $\\rightarrow$ **polyester (PET)** via **condensation polymerisation** eliminating $(2n - 1)\\text{H}_2\\text{O}$: $\\mathbf{-[\\text{CO-C}_6\\text{H}_4-\\text{CO-O-CH}_2\\text{CH}_2-\\text{O}]_n-}$.",
    level: 3,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2025 Paper 1 Q50",
    createdAt: "2027-03-18T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv3_18-2026",
    question: "What effect does increasing the magnetic field strength of an NMR spectrometer (e.g. from $60\\text{ MHz}$ to $600\\text{ MHz}$) have on the chemical shift in $\\text{ppm}$ and the spin-spin coupling constant $J$ in $\\text{Hz}$?",
    options: [
      { text: "Chemical shift in ppm increases 10-fold; J value in Hz increases 10-fold" },
      { text: "Chemical shift (δ in ppm) remains COMPLETELY UNCHANGED (because ppm is a normalized ratio); the coupling constant (J in Hz) remains COMPLETELY UNCHANGED (inherent molecular property); but the physical frequency separation (in Hz) between chemical shifts increases 10-fold, dramatically improving spectral resolution and reducing second-order overlapping", isCorrect: true },
      { text: "Both ppm and J decrease to zero" },
      { text: "Only coupling constant J increases" }
    ],
    correctAnswer: 1,
    explanation: "* **Chemical shift ($\\text{ppm}$)** and **$J$ coupling ($\\text{Hz}$)** are field-independent constants! However, higher fields increase signal dispersion ($\Delta\\nu$ in $\\text{Hz}$), transforming complex second-order multiplets into clean first-order spectra.",
    level: 3,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2026 Paper 1 Q42",
    createdAt: "2027-03-18T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv3_19-2026",
    question: "An unknown optically active organic liquid $\\text{T}$ with molecular formula $\\text{C}_6\\text{H}_{12}\\text{O}_2$ gives the following spectral data: IR peak at $1735\\text{ cm}^{-1}$ ($\text{C=O}$); $^{13}\\text{C}$ NMR shows FIVE distinct peaks; $^1\\text{H}$ NMR features a doublet at $\\delta = 0.95\\text{ ppm}$ ($6\\text{H}$, $J = 7\\text{ Hz}$), a multiplet at $\\delta = 2.05\\text{ ppm}$ ($1\\text{H}$), a doublet at $\\delta = 3.85\\text{ ppm}$ ($2\\text{H}$, $J = 7\\text{ Hz}$), and a singlet at $\\delta = 2.00\\text{ ppm}$ ($3\\text{H}$). What is the IUPAC name of $\\text{T}$?",
    options: [
      { text: "Butyl ethanoate" },
      { text: "2-methylpropyl ethanoate (isobutyl acetate)", isCorrect: true },
      { text: "Methyl 3-methylbutanoate" },
      { text: "Hexanoic acid" }
    ],
    correctAnswer: 1,
    explanation: "* The data represents **2-methylpropyl ethanoate ($\\text{CH}_3\\text{COOCH}_2\\text{CH(CH}_3)_2$)**: singlet at $\\delta 2.00$ ($3\\text{H}$, acetyl $\\text{CH}_3$), doublet at $\\delta 3.85$ ($2\\text{H}$, $-\\text{OCH}_2-$), multiplet at $\\delta 2.05$ ($1\\text{H}$, $-\\text{CH}-$), and doublet at $\\delta 0.95$ ($6\\text{H}$, two equivalent methyls) $\\implies$ **5 $^{13}\\text{C}$ peaks**.",
    level: 3,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q63",
    createdAt: "2027-04-05T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv3_20-2026",
    question: "In the mass spectrometry analysis of 1,2-dibromoethane ($\\text{BrCH}_2\\text{CH}_2\\text{Br}$, nominal mass $186, 188, 190$), what is the exact theoretical peak intensity ratio of the molecular ion triplet cluster ($M^+ : M+2^+ : M+4^+$)?",
    options: [
      { text: "1 : 1 : 1" },
      { text: "1 : 2 : 1 (due to the binomial isotopic probability: a² + 2ab + b², where a = ⁷⁹Br ≈ 0.5 and b = ⁸¹Br ≈ 0.5)", isCorrect: true },
      { text: "3 : 6 : 1" },
      { text: "9 : 6 : 1" }
    ],
    correctAnswer: 1,
    explanation: "* For two bromine atoms: probability of $^{79}\\text{Br}_2 = (0.5)^2 = 0.25$; $^{79}\\text{Br}^{81}\\text{Br} = 2(0.5)(0.5) = 0.50$; $^{81}\\text{Br}_2 = (0.5)^2 = 0.25 \\implies$ **triplet ratio of $1 : 2 : 1$**.",
    level: 3,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2026 Paper 1 Q63",
    createdAt: "2027-04-05T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv3_21-2026",
    question: "High-resolution mass spectrometry (HRMS) of a compound gives a precise molecular ion of $m/z = 73.0890$. Which of the following nitrogen-containing structures matches this mass ($^{12}\\text{C} = 12.0000$, $^1\\text{H} = 1.0078$, $^{14}\\text{N} = 14.0031$, $^{16}\\text{O} = 15.9949$)?",
    options: [
      { text: "C₃H₇NO (Dimethylformamide): 3(12.0000) + 7(1.0078) + 14.0031 + 15.9949 = 73.0526" },
      { text: "C₄H₁₁N (Diethylamine / Butylamine): 4(12.0000) + 11(1.0078) + 14.0031 = 73.0889 ≈ 73.0890", isCorrect: true },
      { text: "C₂H₃NO₂ (Nitroethene): 2(12.0000) + 3(1.0078) + 14.0031 + 2(15.9949) = 73.0163" },
      { text: "C₅H₁₃ (Pentyl radical): 5(12.0000) + 13(1.0078) = 73.1014" }
    ],
    correctAnswer: 1,
    explanation: "* Exact mass of $\\text{C}_4\\text{H}_{11}\\text{N} = 4(12.0000) + 11(1.0078) + 14.0031 = 48.0000 + 11.0858 + 14.0031 = \\mathbf{73.0889\\text{ u}}$, matching $73.0890$ within $<1.5\\text{ ppm}$.",
    level: 3,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2026 Paper 1 Q53",
    createdAt: "2027-04-06T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv3_22-2026",
    question: "A high-performance liquid chromatography (HPLC) method is calibrated using an internal standard (IS). Why is an internal standard method superior to external standard calibration when analyzing blood plasma drug concentrations?",
    options: [
      { text: "Internal standards destroy all bacteria in the blood" },
      { text: "An internal standard (a compound chemically similar to the analyte) is added in known constant concentration to all samples before extraction, automatically compensating for variable extraction recovery losses, matrix effects, and slight injection volume variations", isCorrect: true },
      { text: "Internal standards eliminate the need for a detector" },
      { text: "Internal standards speed up the chromatography by a factor of 100" }
    ],
    correctAnswer: 1,
    explanation: "* The **Internal Standard (IS)** normalizes peak ratios ($A_{\\text{analyte}} / A_{\\text{IS}}$), correcting for sample prep recovery variations and instrumental fluctuations.",
    level: 3,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q64",
    createdAt: "2027-04-06T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv3_23-2026",
    question: "An aromatic hydrocarbon $\\text{X}$ ($\text{C}_9\\text{H}_{12}$) exhibits only TWO peaks in its $^{13}\\text{C}$ NMR spectrum: one peak at $\\delta = 21.5\\text{ ppm}$ and one peak in the aromatic region at $\\delta = 138.0\\text{ ppm}$. What is the IUPAC name and structure of compound $\\text{X}$?",
    options: [
      { text: "Propylbenzene" },
      { text: "1,3,5-trimethylbenzene (mesitylene, where all 3 methyl carbons are equivalent, and by symmetry all 6 ring carbons are equivalent/degenerate)", isCorrect: true },
      { text: "1,2,3-trimethylbenzene" },
      { text: "Isopropylbenzene (cumene)" }
    ],
    correctAnswer: 1,
    explanation: "* In symmetrical **1,3,5-trimethylbenzene**, the $3$ methyls give $1$ peak ($\\delta 21.5$) and the high $D_{3h}$ symmetry with time-averaged resonance reduces all $6$ aromatic ring carbons to a single equivalent environment ($\\delta 138.0$) $\\implies$ **only 2 peaks total**.",
    level: 3,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2025 Paper 1 Q64",
    createdAt: "2027-04-07T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv3_24-2026",
    question: "In high-resolution $^1\\text{H}$ NMR spectroscopy of trans-cinnamic acid ($\\text{C}_6\\text{H}_5-\\text{CH}=\\text{CH}-\\text{COOH}$), the two vinylic alkene protons ($-\\text{CH}=\\text{CH}-$) appear as two doublets with an unusually large spin-spin coupling constant $J_{\\text{trans}} = 16.0\\text{ Hz}$. How does this compare with the cis-isomer ($J_{\\text{cis}}$) and what structural deduction can be made?",
    options: [
      { text: "cis-isomers have a larger J value (J_cis ≈ 25 Hz)" },
      { text: "trans-alkene protons have significantly larger coupling constants (J_trans = 14–18 Hz) than cis-alkene protons (J_cis = 6–12 Hz) due to greater orbital overlap through the trans π-framework, allowing unambiguous determination of geometrical (E/Z) stereochemistry", isCorrect: true },
      { text: "cis- and trans-isomers have identical J values" },
      { text: "trans-isomers show no coupling (J = 0 Hz)" }
    ],
    correctAnswer: 1,
    explanation: "* **$J_{\\text{trans}} (14–18\\text{ Hz}) > J_{\\text{cis}} (6–12\\text{ Hz})$**: The magnitude of the vicinal alkene coupling constant ($J$) provides definitive diagnostic proof of **trans ($E$) vs cis ($Z$) stereochemistry**.",
    level: 3,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2026 Paper 1 Q54",
    createdAt: "2027-04-07T10:00:00Z"
  }
];
