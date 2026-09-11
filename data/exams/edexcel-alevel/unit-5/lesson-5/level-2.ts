import { Question } from '../../../types';

export const level2Questions: Question[] = [
  {
    id: "ex_ed_u5_l5_lv2_1-2026",
    question: "High-resolution mass spectrometry (HRMS) measures the precise molecular ion mass ($M^+$) of an unknown organic compound to be $m/z = 60.0211$. Given the accurate isotopic atomic masses: $^{12}\\text{C} = 12.0000$, $^1\\text{H} = 1.0078$, $^{16}\\text{O} = 15.9949$, $^{14}\\text{N} = 14.0031$, which of the following molecular formulas corresponds to this exact mass?",
    options: [
      { text: "C₃H₈O (Propanol): 3(12.0000) + 8(1.0078) + 15.9949 = 60.0573" },
      { text: "C₂H₄O₂ (Ethanoic acid / Methyl formate): 2(12.0000) + 4(1.0078) + 2(15.9949) = 60.0210 ≈ 60.0211", isCorrect: true },
      { text: "CH₄N₂O (Urea): 12.0000 + 4(1.0078) + 2(14.0031) + 15.9949 = 60.0323" },
      { text: "C₄H₁₂ (Tetramethylmethane): 4(12.0000) + 12(1.0078) = 60.0936" }
    ],
    correctAnswer: 1,
    explanation: "* For $\\text{C}_2\\text{H}_4\\text{O}_2$: $2(12.0000) + 4(1.0078) + 2(15.9949) = 24.0000 + 4.0312 + 31.9898 = \\mathbf{60.0210}$, which matches $60.0211$ within experimental error.",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q32",
    createdAt: "2027-02-21T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv2_2-2026",
    question: "An organic ester with molecular formula $\\text{C}_3\\text{H}_6\\text{O}_2$ shows TWO singlets in its $^1\\text{H}$ NMR spectrum: one singlet at $\\delta = 2.0\\text{ ppm}$ with relative area 3, and another singlet at $\\delta = 3.7\\text{ ppm}$ with relative area 3. What is the identity of this ester?",
    options: [
      { text: "Ethyl methanoate (HCOOCH₂CH₃)" },
      { text: "Methyl ethanoate (CH₃COOCH₃)", isCorrect: true },
      { text: "Propanoic acid (CH₃CH₂COOH)" },
      { text: "Hydroxypropanone (CH₃COCH₂OH)" }
    ],
    correctAnswer: 1,
    explanation: "* **Methyl ethanoate ($\text{CH}_3\\text{COOCH}_3$)** has two isolated methyl groups with no adjacent protons ($n=0 \\implies$ singlets): $\\text{CH}_3\\text{C=O}$ at $\\delta 2.0$ ($3\\text{H}$) and $-\\text{OCH}_3$ at $\\delta 3.7$ ($3\\text{H}$).",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2026 Paper 1 Q33",
    createdAt: "2027-02-21T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv2_3-2026",
    question: "Why does combining gas chromatography with mass spectrometry (GC-MS) provide an immensely superior analytical method for detecting trace illicit drugs or pollutants compared to GC alone?",
    options: [
      { text: "GC-MS changes the color of the sample" },
      { text: "GC efficiently separates complex mixtures into individual pure components based on partition between phases, and MS immediately fragments and ionizes each eluted component, providing an unambiguous fragmentation fingerprint and exact molecular mass for definitive identification against spectral libraries", isCorrect: true },
      { text: "MS freezes the gas chromatography column" },
      { text: "GC-MS does not require any carrier gas" }
    ],
    correctAnswer: 1,
    explanation: "* **GC** separates components by retention time; **MS** provides definitive structural/mass identification via unique fragmentation patterns.",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2026 Paper 1 Q27",
    createdAt: "2027-02-22T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv2_4-2026",
    question: "How many peaks are present in the $^{13}\\text{C}$ NMR spectrum of 1,4-dimethylbenzene (p-xylene) compared to 1,2-dimethylbenzene (o-xylene)?",
    options: [
      { text: "1,4-dimethylbenzene: 3 peaks; 1,2-dimethylbenzene: 4 peaks", isCorrect: true },
      { text: "1,4-dimethylbenzene: 8 peaks; 1,2-dimethylbenzene: 8 peaks" },
      { text: "1,4-dimethylbenzene: 2 peaks; 1,2-dimethylbenzene: 6 peaks" },
      { text: "1,4-dimethylbenzene: 4 peaks; 1,2-dimethylbenzene: 3 peaks" }
    ],
    correctAnswer: 0,
    explanation: "* 1,4-dimethylbenzene has high symmetry ($D_{2h}$): $3$ peaks (methyl carbon, substituted ring carbon, unsubstituted ring CH carbons). 1,2-dimethylbenzene ($C_{2v}$) has $4$ unique carbon environments.",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q33",
    createdAt: "2027-02-22T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv2_5-2026",
    question: "In thin-layer chromatography on a silica gel ($\text{SiO}_2$) plate with a non-polar solvent (e.g. hexane/ethyl ethanoate $4:1$), why do polar amino acids have MUCH LOWER $R_f$ values than non-polar hydrocarbons?",
    options: [
      { text: "Polar compounds evaporate quickly from the plate" },
      { text: "Silica gel consists of polar surface silanol (–Si–OH) groups that form strong dipole-dipole and hydrogen bonds with polar solutes (strong adsorption to stationary phase), causing them to travel very slowly compared to non-polar solutes which partition preferentially into the mobile solvent", isCorrect: true },
      { text: "Non-polar hydrocarbons react chemically with silica" },
      { text: "Polar compounds are heavier than gravity" }
    ],
    correctAnswer: 1,
    explanation: "* Polar solutes adsorb strongly to polar $-\\text{Si}-\\text{OH}$ stationary phase via hydrogen bonding $\\implies$ smaller distance moved $\\implies$ **lower $R_f$**.",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2025 Paper 1 Q34",
    createdAt: "2027-02-23T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv2_6-2026",
    question: "The $^1\\text{H}$ NMR spectrum of an unknown compound $\\text{C}_4\\text{H}_8\\text{O}_2$ shows: a triplet at $\\delta = 1.25\\text{ ppm}$ ($3\\text{H}$), a quartet at $\\delta = 4.15\\text{ ppm}$ ($2\\text{H}$), and a singlet at $\\delta = 8.05\\text{ ppm}$ ($1\\text{H}$). What is the IUPAC name of this compound?",
    options: [
      { text: "Methyl propanoate" },
      { text: "Ethyl methanoate (ethyl formate)", isCorrect: true },
      { text: "Propyl methanoate" },
      { text: "Ethanoic acid" }
    ],
    correctAnswer: 1,
    explanation: "* Triplet at $\\delta 1.25$ + Quartet at $\\delta 4.15$ indicates an ethyl group bonded to electronegative oxygen ($-\\text{OCH}_2\\text{CH}_3$). Singlet at $\\delta 8.05$ is the methanoate formate proton ($\\text{H}-\\text{C=O}$). Compound is **ethyl methanoate**.",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2026 Paper 1 Q28",
    createdAt: "2027-02-23T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv2_7-2026",
    question: "In organic synthesis, how can 1-bromobutane be converted into pentanoic acid (extending the carbon chain by one carbon)?",
    options: [
      { text: "React with aqueous sodium hydroxide, then oxidize with Tollens' reagent" },
      { text: "Step 1: Reflux with ethanolic potassium cyanide (KCN in ethanol/water) to form pentanenitrile (CH₃CH₂CH₂CH₂CN); Step 2: Reflux with dilute aqueous hydrochloric acid (HCl(aq)) to hydrolyze the nitrile group into a carboxylic acid (CH₃CH₂CH₂CH₂COOH)", isCorrect: true },
      { text: "React with hot concentrated sulfuric acid" },
      { text: "React with sodium metal in dry ether" }
    ],
    correctAnswer: 1,
    explanation: "* Step 1: Nucleophilic substitution with $\\text{CN}^-$ introduces $-\\text{C}\\equiv\\text{N}$. Step 2: Acidic hydrolysis ($\text{H}_2\\text{O}/\\text{H}^+$ under reflux) yields **pentanoic acid** ($\text{CH}_3(\\text{CH}_2)_3\\text{COOH}$).",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q39",
    createdAt: "2027-03-03T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv2_8-2026",
    question: "What splitting pattern and integration ratio are observed in the $^1\\text{H}$ NMR spectrum of 1,1-dichloroethane ($\\text{CH}_3\\text{CHCl}_2$)?",
    options: [
      { text: "A doublet (area 3) and a quartet (area 1)", isCorrect: true },
      { text: "Two singlets (area 3 and area 1)" },
      { text: "A triplet (area 3) and a quartet (area 2)" },
      { text: "A doublet (area 1) and a triplet (area 3)" }
    ],
    correctAnswer: 0,
    explanation: "* The $-\\text{CH}_3$ protons are adjacent to $1\\text{ H}$ $\\implies n + 1 = 2$ (**doublet, area 3**). The $-\\text{CHCl}_2$ proton is adjacent to $3\\text{ H}$ $\\implies n + 1 = 4$ (**quartet, area 1**).",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2026 Paper 1 Q40",
    createdAt: "2027-03-03T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv2_9-2026",
    question: "Why is melting point determination a critical analytical technique for checking the purity of a crystalline organic product (such as synthesised aspirin)?",
    options: [
      { text: "Impurities cause the compound to change color before melting" },
      { text: "A pure organic solid melts sharply at a precise, narrow temperature range (within 0.5–1.0 °C) matching literature values; impurities disrupt the crystal lattice, causing the melting point to be LOWERED and the melting range to BROADEN significantly", isCorrect: true },
      { text: "Impurities raise the melting point to infinity" },
      { text: "Pure solids do not melt" }
    ],
    correctAnswer: 1,
    explanation: "* Lattice disruption by foreign molecules causes **melting point depression** and **range broadening** (e.g. melting over $4–8^\circ\\text{C}$ below standard value).",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2026 Paper 1 Q33",
    createdAt: "2027-03-04T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv2_10-2026",
    question: "In the multi-step synthesis of phenylethene (styrene) from benzene, which sequence of reagents is employed?",
    options: [
      { text: "Step 1: Ethene + H₂SO₄; Step 2: H₂ / Ni" },
      { text: "Step 1: Chloroethane + anhydrous AlCl₃ (Friedel-Crafts alkylation to ethylbenzene); Step 2: High-temperature catalytic dehydrogenation over Fe₂O₃ / Al₂O₃ catalyst (or free-radical bromination of side chain followed by ethanolic KOH elimination)", isCorrect: true },
      { text: "Step 1: Nitration; Step 2: Reduction" },
      { text: "Step 1: Phenol + ethene" }
    ],
    correctAnswer: 1,
    explanation: "* $\\text{C}_6\\text{H}_6 + \\text{CH}_3\\text{CH}_2\\text{Cl} \\xrightarrow{\\text{AlCl}_3} \\text{C}_6\\text{H}_5\\text{CH}_2\\text{CH}_3 \\xrightarrow{\\text{dehydrogenation}} \\mathbf{\\text{C}_6\\text{H}_5\\text{CH}=\\text{CH}_2}$.",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q40",
    createdAt: "2027-03-04T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv2_11-2026",
    question: "How many peaks are observed in the $^{13}\\text{C}$ NMR spectrum of methylbenzene (toluene) and chlorobenzene?",
    options: [
      { text: "Methylbenzene: 5 peaks; Chlorobenzene: 4 peaks", isCorrect: true },
      { text: "Methylbenzene: 7 peaks; Chlorobenzene: 6 peaks" },
      { text: "Methylbenzene: 4 peaks; Chlorobenzene: 4 peaks" },
      { text: "Methylbenzene: 5 peaks; Chlorobenzene: 6 peaks" }
    ],
    correctAnswer: 0,
    explanation: "* Chlorobenzene ($C_{2v}$ symmetry) has $4$ aromatic carbon environments (C1, C2/6, C3/5, C4). Methylbenzene has the same $4$ aromatic environments plus $1$ aliphatic methyl carbon $\\implies$ **5 peaks**.",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2025 Paper 1 Q41",
    createdAt: "2027-03-05T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv2_12-2026",
    question: "In the mass spectrum of a bromoalkane, what characteristic molecular ion peak doublet ($M^+$ and $M+2^+$) intensity pattern proves the presence of a single bromine atom?",
    options: [
      { text: "A 3:1 intensity ratio (M⁺ : M+2⁺)" },
      { text: "A 1:1 twin peak doublet of approximately equal intensity (due to the natural abundance of ⁷⁹Br ≈ 50.7% and ⁸¹Br ≈ 49.3%)", isCorrect: true },
      { text: "A single sharp peak with no isotopic splitting" },
      { text: "A 9:6:1 triplet ratio" }
    ],
    correctAnswer: 1,
    explanation: "* Natural bromine consists of $^{79}\\text{Br}$ ($50.7\\%$) and $^{81}\\text{Br}$ ($49.3\\%$) in an approximate **$1:1$ ratio**, producing twin molecular ion peaks separated by $2\\text{ }m/z$ units ($M^+$ and $M+2^+$).",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2026 Paper 1 Q34",
    createdAt: "2027-03-05T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv2_13-2026",
    question: "A fragrant compound $\\text{Q}$ ($\text{C}_4\\text{H}_8\\text{O}_2$) exhibits the following spectroscopic properties: IR peak at $1740\\text{ cm}^{-1}$ ($\text{C=O}$); $^1\\text{H}$ NMR features a doublet at $\\delta = 1.30\\text{ ppm}$ ($6\\text{H}$, $J = 7\\text{ Hz}$), a singlet at $\\delta = 8.05\\text{ ppm}$ ($1\\text{H}$), and a septet at $\\delta = 5.05\\text{ ppm}$ ($1\\text{H}$, $J = 7\\text{ Hz}$). What is the IUPAC name of $\\text{Q}$?",
    options: [
      { text: "Propyl methanoate" },
      { text: "Propan-2-yl methanoate (isopropyl methanoate / isopropyl formate)", isCorrect: true },
      { text: "Ethyl ethanoate" },
      { text: "Methyl propanoate" }
    ],
    correctAnswer: 1,
    explanation: "* The $6\\text{H}$ doublet and $1\\text{H}$ septet indicate an isopropyl group bonded to oxygen ($-\\text{OCH(CH}_3)_2$). The $1\\text{H}$ singlet at $\\delta 8.05$ is the formate proton ($\\text{HCOO}-$). Compound is **propan-2-yl methanoate**.",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q46",
    createdAt: "2027-03-13T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv2_14-2026",
    question: "In the multi-step synthesis of azo dyes, why is it essential to maintain the reaction temperature between $0–5\\text{ }^\\circ\\text{C}$ during diazonium salt formation, while avoiding freezing?",
    options: [
      { text: "Above 5 °C, benzenediazonium chloride decomposes rapidly by nucleophilic attack of water to form phenol and nitrogen gas (C₆H₅N₂⁺ + H₂O → C₆H₅OH + N₂ + H⁺); below 0 °C, the solution freezes, stopping the reaction", isCorrect: true },
      { text: "Above 5 °C, nitrous acid evaporates completely" },
      { text: "Below 0 °C, phenylamine explodes" },
      { text: "Temperature controls the spin states of nitrogen nuclei" }
    ],
    correctAnswer: 0,
    explanation: "* The diazonium group is thermally unstable due to the extremely favorable release of stable $\\text{N}_2\\text{(g)}$. Temperatures $> 10^\\circ\\text{C}$ decompose it to **phenol**.",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2026 Paper 1 Q47",
    createdAt: "2027-03-13T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv2_15-2026",
    question: "How many peaks are observed in the $^{13}\\text{C}$ NMR spectrum of 1,3,5-trimethylbenzene (mesitylene)?",
    options: [
      { text: "9 peaks" },
      { text: "3 peaks (one for the 3 equivalent –CH₃ carbons, one for the 3 substituted ring carbons, and one for the 3 unsubstituted ring CH carbons)", isCorrect: true },
      { text: "6 peaks" },
      { text: "2 peaks" }
    ],
    correctAnswer: 1,
    explanation: "* Due to high $D_{3h}$ three-fold symmetry, all 3 methyls are equivalent, all 3 substituted carbons are equivalent, and all 3 unsubstituted ring carbons are equivalent $\\implies$ **3 peaks total**.",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2026 Paper 1 Q39",
    createdAt: "2027-03-14T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv2_16-2026",
    question: "What is the key advantage of column chromatography over thin-layer chromatography (TLC) in organic laboratory practice?",
    options: [
      { text: "Column chromatography is faster than TLC" },
      { text: "Column chromatography is a preparative technique used to physically separate and isolate bulk quantities (grams) of pure compounds from a reaction mixture, whereas TLC is primarily an analytical technique used for small microgram monitoring", isCorrect: true },
      { text: "Column chromatography does not use a stationary phase" },
      { text: "Column chromatography uses only radioactive solvents" }
    ],
    correctAnswer: 1,
    explanation: "* **Column chromatography** is **preparative** (isolates usable gram quantities of pure products), while TLC is **analytical** (monitors reaction progress and purity).",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q47",
    createdAt: "2027-03-14T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv2_17-2026",
    question: "In the mass spectrum of 2-bromopropane ($(\\text{CH}_3)_2\\text{CHBr}$), the base peak appears at $m/z = 43$. What fragment ion is responsible for this peak?",
    options: [
      { text: "The methyl cation ([CH₃⁺])" },
      { text: "The isopropyl (propan-2-yl) carbocation ([(CH₃)₂CH⁺]), formed by heterolytic/homolytic loss of a bromine radical (•Br)", isCorrect: true },
      { text: "The acylium ion ([CH₃CO⁺])" },
      { text: "The ethyl cation ([C₂H₅⁺])" }
    ],
    correctAnswer: 1,
    explanation: "* Loss of a bromine atom ($79/81\\text{ u}$) from $M^+$ ($122/124$) leaves the stable secondary **isopropyl carbocation $[(\\text{CH}_3)_2\\text{CH}^+]$ at $\\mathbf{m/z = 43}$**.",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2025 Paper 1 Q48",
    createdAt: "2027-03-15T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv2_18-2026",
    question: "In organic reaction mechanisms, what type of mechanism is involved in the conversion of benzene to acetophenone ($\\text{C}_6\\text{H}_5\\text{COCH}_3$) with ethanoyl chloride and $\\text{AlCl}_3$?",
    options: [
      { text: "Nucleophilic addition" },
      { text: "Electrophilic aromatic substitution (Friedel-Crafts acylation via intermediate arenium carbocation / Wheland complex)", isCorrect: true },
      { text: "Free-radical substitution" },
      { text: "Electrophilic addition" }
    ],
    correctAnswer: 1,
    explanation: "* Generation of $\\text{CH}_3\\text{C}^+=\\text{O}$ electrophile followed by attack of the benzene $\\pi$-cloud forming an arenium intermediate, which loses $\\text{H}^+$ to restore aromaticity: **Electrophilic Aromatic Substitution**.",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2026 Paper 1 Q40",
    createdAt: "2027-03-15T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv2_19-2026",
    question: "How can $^{13}\\text{C}$ NMR spectroscopy distinguish between the four structural isomers of $\\text{C}_4\\text{H}_9\\text{Br}$ (1-bromobutane, 2-bromobutane, 1-bromo-2-methylpropane, and 2-bromo-2-methylpropane)?",
    options: [
      { text: "All four isomers show 4 peaks" },
      { text: "1-bromobutane shows 4 peaks; 2-bromobutane shows 4 peaks; 1-bromo-2-methylpropane shows 3 peaks; and 2-bromo-2-methylpropane shows only 2 peaks (due to 3-fold symmetry of the tert-butyl group)", isCorrect: true },
      { text: "2-bromo-2-methylpropane shows 5 peaks" },
      { text: "1-bromobutane shows 1 peak" }
    ],
    correctAnswer: 1,
    explanation: "* **2-bromo-2-methylpropane ($(\\text{CH}_3)_3\\text{CBr}$)** has 3 equivalent methyls and 1 central carbon $\\implies$ **2 peaks**; **1-bromo-2-methylpropane ($(\\text{CH}_3)_2\\text{CHCH}_2\\text{Br}$)** has 2 equivalent methyls, 1 methine, 1 methylene $\\implies$ **3 peaks**; straight-chain isomers have **4 peaks**.",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q61",
    createdAt: "2027-04-02T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv2_20-2026",
    question: "In high-resolution $^1\\text{H}$ NMR spectroscopy, what causes the phenomenon of spin-spin coupling (multiplet splitting)?",
    options: [
      { text: "Electrons moving between orbitals" },
      { text: "The magnetic field experienced by a proton is modified by the nuclear spin magnetic orientations (spin 'up' vs spin 'down') of protons attached to adjacent neighboring carbon atoms, transmitted through the bonding electrons", isCorrect: true },
      { text: "Collisions with the NMR solvent" },
      { text: "Nuclear fission of hydrogen atoms" }
    ],
    correctAnswer: 1,
    explanation: "* Spin-spin splitting arises from magnetic interactions between neighboring non-equivalent protons transmitted through $\\sigma$-bonding electrons.",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2026 Paper 1 Q61",
    createdAt: "2027-04-02T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv2_21-2026",
    question: "In gas-liquid chromatography (GLC), what two primary factors determine the retention time ($R_t$) of an organic solute passing through a non-polar stationary phase column?",
    options: [
      { text: "The nuclear spin and refractive index" },
      { text: "The volatility / boiling point of the solute (lower boiling point solutes spend more time in the carrier gas phase and elute faster) and the solubility / partition coefficient in the stationary liquid phase", isCorrect: true },
      { text: "The color and density of the solute" },
      { text: "The magnetic susceptibility of the solute" }
    ],
    correctAnswer: 1,
    explanation: "* GLC retention time is governed by **volatility (boiling point)** and **relative solubility (partition coefficient)** in the stationary liquid phase.",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2026 Paper 1 Q51",
    createdAt: "2027-04-03T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv2_22-2026",
    question: "An unknown organic compound $\\text{G}$ ($\text{C}_3\\text{H}_7\\text{NO}$) shows an intense IR absorption at $1660\\text{ cm}^{-1}$ and two broad peaks at $3180\\text{ cm}^{-1}$ and $3350\\text{ cm}^{-1}$. Its $^1\\text{H}$ NMR features a triplet at $\\delta = 1.15\\text{ ppm}$ ($3\\text{H}$), a quartet at $\\delta = 2.25\\text{ ppm}$ ($2\\text{H}$), and a broad $2\\text{H}$ peak at $\\delta = 6.50\\text{ ppm}$ (exchanges with $\\text{D}_2\\text{O}$). What is the IUPAC name of $\\text{G}$?",
    options: [
      { text: "N-methylethanamide" },
      { text: "Propanamide (CH₃CH₂CONH₂)", isCorrect: true },
      { text: "1-aminopropan-2-one" },
      { text: "Ethyl carbamate" }
    ],
    correctAnswer: 1,
    explanation: "* IR $1660\\text{ cm}^{-1}$ ($\text{C=O}$ amide) + doublet at $3180/3350\\text{ cm}^{-1}$ ($-\\text{NH}_2$ primary amide). $^1\\text{H}$ NMR shows ethyl group ($\text{CH}_3\\text{CH}_2-$) bonded to carbonyl $\\implies \\mathbf{\\text{propanamide}}$ ($\text{CH}_3\\text{CH}_2\\text{CONH}_2$).",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q62",
    createdAt: "2027-04-03T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv2_23-2026",
    question: "In mass spectrometry, what is the nitrogen rule regarding the nominal molecular mass ($M^+$) of an organic molecule containing only $\\text{C, H, N, O, S, halogen}$ atoms?",
    options: [
      { text: "Nitrogen compounds always have a mass divisible by 7" },
      { text: "A molecule containing an ODD number of nitrogen atoms has an ODD nominal molecular mass (M⁺ is odd), whereas a molecule containing zero or an EVEN number of nitrogen atoms has an EVEN nominal molecular mass (M⁺ is even)", isCorrect: true },
      { text: "Nitrogen increases mass by 100 u" },
      { text: "Nitrogen prevents molecular ionization" }
    ],
    correctAnswer: 1,
    explanation: "* **The Nitrogen Rule**: Carbon, oxygen, and hydrogen valencies/masses dictate that an **odd number of nitrogens gives an odd $M^+$ mass**, while an **even number gives an even $M^+$ mass**.",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2025 Paper 1 Q62",
    createdAt: "2027-04-04T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l5_lv2_24-2026",
    question: "In high-resolution $^1\\text{H}$ NMR spectroscopy of 1,3-dichloropropane ($\\text{ClCH}_2\\text{CH}_2\\text{CH}_2\\text{Cl}$), what are the splitting patterns and relative peak areas of the two signals?",
    options: [
      { text: "A singlet (area 4) and a doublet (area 2)" },
      { text: "A triplet at ~3.6 ppm (area 4, for the two equivalent –CH₂Cl groups) and a quintet at ~2.2 ppm (area 2, for the central –CH₂– group coupled to 4 equivalent protons, n + 1 = 5)", isCorrect: true },
      { text: "Two triplets of equal area" },
      { text: "A doublet (area 4) and a quartet (area 2)" }
    ],
    correctAnswer: 1,
    explanation: "* Symmetrical molecule: two terminal $-\\text{CH}_2\\text{Cl}$ groups ($4\\text{H}$) adjacent to $2\\text{ H} \\implies$ **triplet (area 4)**; central $-\\text{CH}_2-$ ($2\\text{H}$) adjacent to $4\\text{ H} \\implies n + 1 = 5$ **quintet (area 2)**.",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2026 Paper 1 Q52",
    createdAt: "2027-04-04T10:00:00Z"
  }
];
