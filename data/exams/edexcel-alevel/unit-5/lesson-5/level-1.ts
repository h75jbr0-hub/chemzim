import { Question } from '../../../types';

export const level1Questions: Question[] = [
  {
    id: "ex_ed_u5_l5_lv1_1-2026",
    question: "Why is tetramethylsilane (TMS, $\\text{Si(CH}_3)_4$) used as the universal internal standard reference compound in both $^1\\text{H}$ and $^{13}\\text{C}$ NMR spectroscopy?",
    options: [
      { text: "TMS is a colored dye that stains NMR tubes" },
      { text: "TMS gives a single, sharp, intense peak at δ = 0.00 ppm because all 12 hydrogen atoms (and all 4 carbon atoms) are in completely equivalent, highly shielded electronic environments; it is also chemically inert and volatile (easy to remove)", isCorrect: true },
      { text: "TMS reacts with all functional groups to form derivatives" },
      { text: "TMS splits all other NMR peaks into doublets" }
    ],
    correctAnswer: 1,
    explanation: "* TMS produces a single sharp reference signal defined as $\\mathbf{\\delta = 0.00\\text{ ppm}}$, is chemically unreactive, non-toxic, and boils at $27^\\circ\\text{C}$ (easily evaporated).",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q29",
    createdAt: "2027-02-17T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv1_2-2026",
    question: "Why is deuterated trichloromethane (deuterated chloroform, $\\text{CDCl}_3$) or heavy water ($\\text{D}_2\\text{O}$) used as a solvent in $^1\\text{H}$ NMR spectroscopy instead of standard $\\text{CHCl}_3$ or $\\text{H}_2\\text{O}$?",
    options: [
      { text: "Deuterium absorbs radio waves more strongly than hydrogen" },
      { text: "Deuterium (²H or D) has an even nuclear spin and does not produce a signal in the ¹H NMR chemical shift spectrum, preventing solvent protons from drowning out the sample peaks", isCorrect: true },
      { text: "Deuterium lowers the sample temperature to absolute zero" },
      { text: "CDCl₃ accelerates proton exchange" }
    ],
    correctAnswer: 1,
    explanation: "* Deuterium ($^2\\text{H}$) has a nuclear spin quantum number of $I = 1$ and resonates at a completely different radiofrequency, producing **no peak** in the $^1\\text{H}$ window ($0–14\\text{ ppm}$).",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2026 Paper 1 Q30",
    createdAt: "2027-02-17T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv1_3-2026",
    question: "How many peaks are observed in the $^{13}\\text{C}$ NMR spectrum of propan-2-one (acetone, $\\text{CH}_3\\text{COCH}_3$) and propanal ($\\text{CH}_3\\text{CH}_2\\text{CHO}$)?",
    options: [
      { text: "Propan-2-one: 3 peaks; Propanal: 3 peaks" },
      { text: "Propan-2-one: 2 peaks (two equivalent –CH₃ carbons and one C=O carbon); Propanal: 3 peaks (three non-equivalent carbons: –CH₃, –CH₂–, and –CHO)", isCorrect: true },
      { text: "Propan-2-one: 1 peak; Propanal: 2 peaks" },
      { text: "Propan-2-one: 2 peaks; Propanal: 2 peaks" }
    ],
    correctAnswer: 1,
    explanation: "* Propan-2-one has a plane of symmetry ($2$ unique carbon environments). Propanal has no symmetry ($3$ unique carbon environments).",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2026 Paper 1 Q25",
    createdAt: "2027-02-18T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv1_4-2026",
    question: "According to the $(n + 1)$ splitting rule in high-resolution $^1\\text{H}$ NMR spectroscopy, what is the splitting pattern of the signal corresponding to the $-\\text{CH}_2-$ protons in bromoethane ($\\text{CH}_3\\text{CH}_2\\text{Br}$)?",
    options: [
      { text: "Singlet" },
      { text: "Quartet (1:3:3:1 ratio, because the adjacent –CH₃ group has n = 3 protons, so n + 1 = 4)", isCorrect: true },
      { text: "Triplet" },
      { text: "Doublet" }
    ],
    correctAnswer: 1,
    explanation: "* The adjacent methyl carbon has $n = 3$ protons $\\implies$ splitting $= n + 1 = 3 + 1 = 4$ (**quartet** with Pascal's triangle intensities $1:3:3:1$).",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q30",
    createdAt: "2027-02-18T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv1_5-2026",
    question: "How is the retardation factor ($R_f$) defined and calculated in thin-layer chromatography (TLC)?",
    options: [
      { text: "Rf = distance moved by solvent front / distance moved by spot" },
      { text: "Rf = distance moved by spot (component) / distance moved by solvent front", isCorrect: true },
      { text: "Rf = mass of sample / volume of eluent" },
      { text: "Rf = retention time × flow rate" }
    ],
    correctAnswer: 1,
    explanation: "* $\\mathbf{R_f = \\frac{\\text{distance travelled by component}}{\\text{distance travelled by solvent front}}}$ (always a dimensionless value between $0$ and $1$).",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2025 Paper 1 Q31",
    createdAt: "2027-02-19T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv1_6-2026",
    question: "In gas chromatography (GC), what is retention time ($R_t$)?",
    options: [
      { text: "The time required to inject the liquid sample" },
      { text: "The time elapsed between sample injection and the emergence of the component peak detector signal", isCorrect: true },
      { text: "The boiling point of the carrier gas" },
      { text: "The duration of the column cleaning cycle" }
    ],
    correctAnswer: 1,
    explanation: "* **Retention time ($R_t$)** is the characteristic time taken for a solute to travel through the GC column from injector to detector.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2026 Paper 1 Q26",
    createdAt: "2027-02-19T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv1_7-2026",
    question: "What physical property determines the relative area under a chromatographic peak in a gas chromatogram (GC trace)?",
    options: [
      { text: "The molecular mass of the carrier gas" },
      { text: "The relative quantity (concentration / mass) of that specific component in the injected mixture", isCorrect: true },
      { text: "The length of the capillary column" },
      { text: "The atmospheric pressure" }
    ],
    correctAnswer: 1,
    explanation: "* Peak area (integration) is directly proportional to the amount/concentration of that component in the mixture.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q31",
    createdAt: "2027-02-20T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv1_8-2026",
    question: "What is the role of adding deuterium oxide ($\\text{D}_2\\text{O}$ shake test) in $^1\\text{H}$ NMR spectroscopy?",
    options: [
      { text: "To dissolve insoluble hydrocarbons" },
      { text: "To identify –OH and –NH– protons: the labile hydrogen atom rapidly exchanges with deuterium (R–OH + D₂O ⇌ R–OD + HOD), causing the –OH / –NH peak to completely disappear from the spectrum", isCorrect: true },
      { text: "To split all peaks into triplets" },
      { text: "To precipitate the TMS standard" }
    ],
    correctAnswer: 1,
    explanation: "* Proton-deuterium exchange ($\text{R-OH} + \\text{D}_2\\text{O} \\rightleftharpoons \\text{R-OD} + \\text{HOD}$) removes labile protons, making their NMR signals **vanish**.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2026 Paper 1 Q32",
    createdAt: "2027-02-20T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv1_9-2026",
    question: "In organic multi-step synthesis, what is the synthetic advantage of converting a carboxylic acid into an acyl chloride (using $\\text{SOCl}_2$ or $\\text{PCl}_5$) prior to reaction with an alcohol or amine?",
    options: [
      { text: "Acyl chlorides are less volatile" },
      { text: "Acyl chlorides (RCOCl) are much more reactive electrophiles than carboxylic acids because chloride is an excellent leaving group, reacting rapidly and irreversibly with alcohols/amines at room temperature without requiring an acid catalyst or heating", isCorrect: true },
      { text: "Acyl chlorides make the reaction reversible" },
      { text: "Acyl chlorides act as oxidizing agents" }
    ],
    correctAnswer: 1,
    explanation: "* The polar $\\text{C=O}$ with a good $\\text{Cl}^-$ leaving group makes acyl chlorides undergo rapid nucleophilic addition-elimination at room temperature.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q36",
    createdAt: "2027-02-27T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv1_10-2026",
    question: "In $^1\\text{H}$ NMR spectroscopy, what causes the 'chemical shift' ($\\delta$, in ppm) of a particular hydrogen nucleus?",
    options: [
      { text: "The radiofrequency antenna power" },
      { text: "The local electron density surrounding the proton: electronegative atoms withdraw electron density (deshielding the nucleus), causing it to experience a stronger magnetic field and resonate at a higher chemical shift (downfield)", isCorrect: true },
      { text: "The mass of the NMR tube" },
      { text: "The color of the chemical solution" }
    ],
    correctAnswer: 1,
    explanation: "* Electronegative groups cause **deshielding** ($\sigma$-electron withdrawal), shifting the resonance downfield to higher $\\delta$ values (ppm).",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2025 Paper 1 Q37",
    createdAt: "2027-02-27T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv1_11-2026",
    question: "How many peaks are observed in the $^{13}\\text{C}$ NMR spectrum of 2,2-dimethylpropane (neopentane, $\\text{C(CH}_3)_4$)?",
    options: [
      { text: "5 peaks" },
      { text: "2 peaks (one for the central quaternary carbon, and one for the four equivalent methyl carbons)", isCorrect: true },
      { text: "1 peak" },
      { text: "4 peaks" }
    ],
    correctAnswer: 1,
    explanation: "* Due to tetrahedral spherical symmetry ($T_d$), all 4 methyl carbons are completely equivalent, giving $1$ peak, and the central carbon gives $1$ peak $\\implies$ **2 peaks total**.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2026 Paper 1 Q31",
    createdAt: "2027-02-28T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv1_12-2026",
    question: "What reagent is used to convert an aldehyde or ketone into a hydroxynitrile (cyanohydrin) while simultaneously extending the carbon chain by one carbon atom?",
    options: [
      { text: "Concentrated nitric acid" },
      { text: "Potassium cyanide (KCN) acidified with dilute sulfuric acid (or HCN in the presence of trace KCN / base catalyst)", isCorrect: true },
      { text: "Lithium aluminium hydride" },
      { text: "Hot concentrated potassium hydroxide" }
    ],
    correctAnswer: 1,
    explanation: "* Nucleophilic addition of cyanide ion ($\\text{CN}^-$) to the carbonyl carbon forms a **hydroxynitrile** ($\text{R-CH(OH)CN}$), extending the carbon skeleton by $1$ carbon.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q37",
    createdAt: "2027-02-28T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv1_13-2026",
    question: "In gas chromatography, what carrier gas is most commonly used as the inert mobile phase?",
    options: [
      { text: "Oxygen (O₂)" },
      { text: "Helium (He) or Nitrogen (N₂)", isCorrect: true },
      { text: "Chlorine (Cl₂)" },
      { text: "Sulfur dioxide (SO₂)" }
    ],
    correctAnswer: 1,
    explanation: "* The mobile phase in GC must be chemically inert and unreactive with sample or stationary phase: **Helium ($\text{He}$)** or **Nitrogen ($\text{N}_2$)**.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2026 Paper 1 Q38",
    createdAt: "2027-03-01T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv1_14-2026",
    question: "What type of chemical reaction is used to hydrolyze an ester or polyester under alkaline conditions (saponification)?",
    options: [
      { text: "Electrophilic substitution" },
      { text: "Nucleophilic acyl substitution / base-catalyzed ester hydrolysis (forming a carboxylate salt and an alcohol)", isCorrect: true },
      { text: "Free-radical addition" },
      { text: "Oxidative cleavage" }
    ],
    correctAnswer: 1,
    explanation: "* $\\text{RCOOR}' + \\text{OH}^- \\rightarrow \\text{RCOO}^- + \\text{R}'\\text{OH}$ is irreversible base-catalyzed **nucleophilic acyl substitution (saponification)**.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2026 Paper 1 Q32",
    createdAt: "2027-03-01T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv1_15-2026",
    question: "What is the typical chemical shift region for aldehyde protons ($\\text{R–CHO}$) in $^1\\text{H}$ NMR spectra?",
    options: [
      { text: "δ = 0.5 – 1.5 ppm" },
      { text: "δ = 9.0 – 10.0 ppm (singlet or split by adjacent CH)", isCorrect: true },
      { text: "δ = 3.3 – 4.0 ppm" },
      { text: "δ = 7.0 – 8.0 ppm" }
    ],
    correctAnswer: 1,
    explanation: "* Strong electron withdrawal and magnetic anisotropy of the carbonyl group deshields the formyl proton to **$\\delta = 9.0–10.0\\text{ ppm}$**.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q38",
    createdAt: "2027-03-02T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv1_16-2026",
    question: "Which of the following organic techniques is best suited for purifying a synthesized solid organic product (e.g. aspirin or benzoic acid) from insoluble and soluble impurities?",
    options: [
      { text: "Simple distillation" },
      { text: "Recrystallization from a minimum volume of hot suitable solvent, followed by vacuum filtration (Buchner funnel)", isCorrect: true },
      { text: "Paper chromatography" },
      { text: "Steam distillation" }
    ],
    correctAnswer: 1,
    explanation: "* **Recrystallization** dissolves the crude solid in minimum hot solvent, cools slowly to crystallize pure product while impurities remain in solution, collected by Buchner filtration.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2025 Paper 1 Q39",
    createdAt: "2027-03-02T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv1_17-2026",
    question: "In the mass spectrum of a chloroalkane, what characteristic molecular ion peak doublet ($M^+$ and $M+2^+$) intensity ratio proves the presence of a single chlorine atom?",
    options: [
      { text: "A 1:1 ratio" },
      { text: "A 3:1 ratio (due to natural abundance of ³⁵Cl ≈ 75.8% and ³⁷Cl ≈ 24.2%)", isCorrect: true },
      { text: "A 1:3 ratio" },
      { text: "A 9:1 ratio" }
    ],
    correctAnswer: 1,
    explanation: "* Chlorine naturally exists as $^{35}\\text{Cl}$ ($75.8\\%$) and $^{37}\\text{Cl}$ ($24.2\\%$) in an approximate **$3:1$ ratio**, producing $M^+$ and $M+2^+$ peaks in a $3:1$ intensity ratio.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q43",
    createdAt: "2027-03-09T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv1_18-2026",
    question: "What is the typical chemical shift region for carboxylic acid protons ($\\text{R–COOH}$) in $^1\\text{H}$ NMR spectra?",
    options: [
      { text: "δ = 1.0 – 2.0 ppm" },
      { text: "δ = 10.0 – 12.5 ppm (broad singlet, exchanges with D₂O)", isCorrect: true },
      { text: "δ = 4.5 – 6.0 ppm" },
      { text: "δ = 7.0 – 8.5 ppm" }
    ],
    correctAnswer: 1,
    explanation: "* The combined electron-withdrawing effect of the carbonyl and oxygen atoms severely deshields the carboxylic proton to **$\\delta = 10.0–12.5\\text{ ppm}$**.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2026 Paper 1 Q44",
    createdAt: "2027-03-09T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv1_19-2026",
    question: "Why does the $^1\\text{H}$ NMR spectrum of pure methanol ($\text{CH}_3\text{OH}$) in common solvents show TWO singlets rather than a doublet and a quartet under normal conditions?",
    options: [
      { text: "Methanol decomposes in the NMR tube" },
      { text: "Rapid intermolecular proton exchange between –OH groups of neighboring methanol molecules averages the coupling to zero, preventing spin-spin splitting between the –OH proton and the –CH₃ protons", isCorrect: true },
      { text: "Methanol contains no carbon-hydrogen bonds" },
      { text: "The methyl group has an even number of protons" }
    ],
    correctAnswer: 1,
    explanation: "* Fast chemical exchange of hydroxyl protons in non-dry solvents decouples $-\\text{OH}$ from $-\\text{CH}_3$, causing both to appear as **singlets**.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2026 Paper 1 Q37",
    createdAt: "2027-03-10T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv1_20-2026",
    question: "What is the purpose of locating agents (such as ninhydrin spray or iodine vapor) in chromatography of colorless compounds like amino acids or carbohydrates?",
    options: [
      { text: "To increase the solvent flow rate" },
      { text: "To react chemically with the invisible colorless spots on the TLC plate or chromatogram to form visible colored spots (e.g. ninhydrin produces a purple/violet dye with amino acids)", isCorrect: true },
      { text: "To dissolve the silica gel" },
      { text: "To calibrate the retention factor Rf to exactly 1.0" }
    ],
    correctAnswer: 1,
    explanation: "* **Ninhydrin** reacts with alpha-amino acids to produce Ruhemann's purple, visualizing colorless amino acid spots on chromatograms.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q44",
    createdAt: "2027-03-10T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv1_21-2026",
    question: "In organic synthesis, how is a secondary alcohol cleanly oxidized to a ketone without risking over-oxidation to a carboxylic acid?",
    options: [
      { text: "Using excess sodium borohydride" },
      { text: "Heating with acidified potassium dichromate(VI) (K₂Cr₂O₇ / H₂SO₄) under reflux (secondary alcohols oxidize exclusively to ketones, which have no remaining oxidizable hydrogen on the carbonyl carbon)", isCorrect: true },
      { text: "Using concentrated hydrochloric acid" },
      { text: "Treating with aqueous sodium hydroxide" }
    ],
    correctAnswer: 1,
    explanation: "* Secondary alcohols oxidize to ketones ($\text{R}_2\\text{CHOH} \\rightarrow \\text{R}_2\\text{C=O}$). Ketones cannot be oxidized further under mild conditions without breaking $\\text{C-C}$ bonds.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2025 Paper 1 Q45",
    createdAt: "2027-03-11T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv1_22-2026",
    question: "How many peaks are observed in the $^{13}\\text{C}$ NMR spectrum of diethyl ether ($\\text{CH}_3\\text{CH}_2\\text{OCH}_2\\text{CH}_3$)?",
    options: [
      { text: "4 peaks" },
      { text: "2 peaks (one for the two equivalent –CH₃ carbons and one for the two equivalent –CH₂– carbons)", isCorrect: true },
      { text: "1 peak" },
      { text: "3 peaks" }
    ],
    correctAnswer: 1,
    explanation: "* Diethyl ether is symmetrical ($C_{2v}$), with two equivalent $-\\text{CH}_3$ groups and two equivalent $-\\text{CH}_2-$ groups $\\implies$ **2 peaks total**.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2026 Paper 1 Q38",
    createdAt: "2027-03-11T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv1_23-2026",
    question: "Which of the following spectral features in an infrared (IR) spectrum confirms the complete conversion of an alcohol into a carboxylic acid?",
    options: [
      { text: "Appearance of a peak at 2250 cm⁻¹" },
      { text: "Appearance of a very broad, strong O–H stretching band extending over 2500–3300 cm⁻¹ (overlapping C–H) combined with a sharp, intense C=O absorption peak at ~1710 cm⁻¹", isCorrect: true },
      { text: "Disappearance of all C–H bonds" },
      { text: "Appearance of a sharp doublet at 3300 cm⁻¹" }
    ],
    correctAnswer: 1,
    explanation: "* Carboxylic acids exhibit a characteristic very broad **$\\text{O-H}$ envelope ($2500–3300\\text{ cm}^{-1}$)** and an intense **$\\text{C=O}$ stretch ($\sim 1710\\text{ cm}^{-1}$)**.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q45",
    createdAt: "2027-03-12T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv1_24-2026",
    question: "What type of chemical reaction converts a primary amide ($\\text{RCONH}_2$) into a primary amine containing one fewer carbon atom (Hofmann degradation)?",
    options: [
      { text: "Reaction with bromine (Br₂) in aqueous sodium hydroxide (NaOH)", isCorrect: true },
      { text: "Reaction with lithium aluminium hydride in dry ether" },
      { text: "Reaction with concentrated sulfuric acid" },
      { text: "Reaction with acidified potassium manganate(VII)" }
    ],
    correctAnswer: 0,
    explanation: "* **Hofmann rearrangement**: $\\text{RCONH}_2 + \\text{Br}_2 + 4\\text{NaOH} \\rightarrow \\mathbf{\\text{RNH}_2} + \\text{Na}_2\\text{CO}_3 + 2\\text{NaBr} + 2\\text{H}_2\\text{O}$ (shortens carbon chain by $1$).",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2026 Paper 1 Q46",
    createdAt: "2027-03-12T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv1_25-2026",
    question: "Why do nuclei such as $^1\\text{H}$ and $^{13}\\text{C}$ show Nuclear Magnetic Resonance (NMR) absorption, whereas $^{12}\\text{C}$ and $^{16}\\text{O}$ nuclei do NOT?",
    options: [
      { text: "¹²C and ¹⁶O are radioactive isotopes" },
      { text: "Nuclei with an odd mass number or odd atomic number (such as ¹H and ¹³C) possess non-zero nuclear spin (I = ½), creating a magnetic dipole that interacts with an external magnetic field; whereas nuclei with both even atomic and mass numbers (¹²C, ¹⁶O) have zero nuclear spin (I = 0)", isCorrect: true },
      { text: "¹²C does not absorb radio waves because it is a solid" },
      { text: "¹⁶O electrons cancel out nuclear spin" }
    ],
    correctAnswer: 1,
    explanation: "* **Nuclear spin requirement**: Only nuclei with **odd mass/atomic numbers** ($I \\neq 0$, such as $^1\\text{H}$ and $^{13}\\text{C}$) have magnetic moments capable of NMR resonance.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q58",
    createdAt: "2027-03-29T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv1_26-2026",
    question: "What is the typical chemical shift range for aromatic ring carbons in $^{13}\\text{C}$ NMR spectroscopy?",
    options: [
      { text: "δ = 0 – 50 ppm" },
      { text: "δ = 110 – 160 ppm", isCorrect: true },
      { text: "δ = 190 – 220 ppm" },
      { text: "δ = 60 – 90 ppm" }
    ],
    correctAnswer: 1,
    explanation: "* Aromatic $sp^2$ ring carbons resonate characteristically in the downfield region between **$\\delta = 110–160\\text{ ppm}$**.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2025 Paper 1 Q58",
    createdAt: "2027-03-29T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv1_27-2026",
    question: "In thin-layer chromatography (TLC), why must the initial solvent level in the developing tank be strictly BELOW the pencil baseline where the sample spots are applied?",
    options: [
      { text: "To prevent the tank from overflowing" },
      { text: "If the solvent level is above the baseline, the sample spots will dissolve directly into the bulk solvent pool rather than traveling up the TLC plate via capillary action", isCorrect: true },
      { text: "To keep the plate cold" },
      { text: "To prevent UV fluorescence" }
    ],
    correctAnswer: 1,
    explanation: "* Solvent level must be below the baseline so that the mobile phase rises **past** the spots by capillary action rather than washing them into the beaker.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2026 Paper 1 Q49",
    createdAt: "2027-03-30T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv1_28-2026",
    question: "How many signals (peaks) are observed in the low-resolution $^1\\text{H}$ NMR spectrum of methyl propanoate ($\\text{CH}_3\\text{CH}_2\\text{COOCH}_3$)?",
    options: [
      { text: "4 peaks" },
      { text: "3 peaks (one for –CH₃ ethyl, one for –CH₂–, and one for –OCH₃ methyl)", isCorrect: true },
      { text: "2 peaks" },
      { text: "1 peak" }
    ],
    correctAnswer: 1,
    explanation: "* **Methyl propanoate** has 3 chemically non-equivalent hydrogen environments $\\implies$ **3 peaks**.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q59",
    createdAt: "2027-03-30T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv1_29-2026",
    question: "What physical mechanism separates components in High-Performance Liquid Chromatography (HPLC)?",
    options: [
      { text: "Components are separated by boiling points under vacuum" },
      { text: "Components are separated based on their differential partition and relative affinities between a liquid mobile phase pumped under high pressure and a solid stationary phase packed inside a stainless steel column", isCorrect: true },
      { text: "Components are separated by nuclear magnetic moments" },
      { text: "Components are separated by radioactive decay rates" }
    ],
    correctAnswer: 1,
    explanation: "* **HPLC** separates mixtures based on partition equilibria between a high-pressure liquid mobile phase and a solid stationary phase.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2026 Paper 1 Q59",
    createdAt: "2027-03-31T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv1_30-2026",
    question: "What is the peak area ratio (integration) of the two signals in the $^1\\text{H}$ NMR spectrum of 1,2-dichloro-2-methylpropane ($(\\text{CH}_3)_2\\text{C(Cl)CH}_2\\text{Cl}$)?",
    options: [
      { text: "1:1" },
      { text: "3:1 (6 protons for the two equivalent methyl groups to 2 protons for the –CH₂Cl group)", isCorrect: true },
      { text: "2:1" },
      { text: "6:1" }
    ],
    correctAnswer: 1,
    explanation: "* Two equivalent methyls ($6\\text{H}$) and one isolated $-\\text{CH}_2\\text{Cl}$ ($2\\text{H}$) give an area ratio of $6:2 = \\mathbf{3:1}$.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2026 Paper 1 Q50",
    createdAt: "2027-03-31T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv1_31-2026",
    question: "In $^{13}\\text{C}$ NMR spectroscopy, where do carbonyl carbons of aldehydes and ketones ($\text{C=O}$) typically resonate?",
    options: [
      { text: "δ = 10 – 30 ppm" },
      { text: "δ = 190 – 220 ppm (most downfield due to intense electronegative deshielding)", isCorrect: true },
      { text: "δ = 60 – 80 ppm" },
      { text: "δ = 100 – 120 ppm" }
    ],
    correctAnswer: 1,
    explanation: "* Aldehyde and ketone carbonyl carbons ($\text{R}_2\\text{C=O}$) appear far downfield at **$\\delta = 190–220\\text{ ppm}$**.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q60",
    createdAt: "2027-04-01T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv1_32-2026",
    question: "Why is a pencil used rather than a ballpoint pen to draw the baseline and solvent front on a thin-layer chromatography (TLC) plate?",
    options: [
      { text: "Pencil lead is cheaper than ink" },
      { text: "Pencil graphite is completely insoluble in organic chromatography solvents, whereas pen ink contains soluble dyes that would dissolve and separate, contaminating the chromatogram", isCorrect: true },
      { text: "Pencil conducts electric current across the silica" },
      { text: "Pencil reacts with amino acids" }
    ],
    correctAnswer: 1,
    explanation: "* **Graphite** is insoluble and chemically inert; pen ink contains dyes that would travel with the mobile phase and ruin the chromatogram.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2025 Paper 1 Q60",
    createdAt: "2027-04-01T10:00:00Z"
  }
];
