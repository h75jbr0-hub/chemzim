import { Question } from '../../../types';

export const level3Questions: Question[] = [
  {
    id: "ex_ed_u5_l4_lv3_1-2026",
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
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2026 Paper 1 Q56",
    createdAt: "2027-03-26T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l4_lv3_2-2026",
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
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2026 Paper 1 Q47",
    createdAt: "2027-03-27T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l4_lv3_3-2026",
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
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q57",
    createdAt: "2027-03-27T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l4_lv3_4-2026",
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
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2025 Paper 1 Q57",
    createdAt: "2027-03-28T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l4_lv3_5-2026",
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
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2026 Paper 1 Q48",
    createdAt: "2027-03-28T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l4_lv3_6-2026",
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
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2026 Paper 1 Q30",
    createdAt: "2027-02-26T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l4_lv3_7-2026",
    question: "In the multi-step synthesis of methyl orange (an azo indicator), sulfanilic acid ($\\text{H}_2\\text{N–C}_6\\text{H}_4\\text{–SO}_3\\text{H}$) is diazotized and coupled with N,N-dimethylaniline. Why must sulfanilic acid first be dissolved in sodium carbonate solution before adding sodium nitrite and acid?",
    options: [
      { text: "Sodium carbonate is the diazotizing reagent" },
      { text: "Sulfanilic acid exists internally as an insoluble zwitterion (⁺H₃N–C₆H₄–SO₃⁻); reacting with Na₂CO₃ deprotonates the –NH₃⁺ group into the soluble sodium sulfanilate salt (H₂N–C₆H₄–SO₃⁻Na⁺), freeing the –NH₂ group to react with nitrous acid", isCorrect: true },
      { text: "Sodium carbonate reduces the nitro group" },
      { text: "Sodium carbonate acts as an optical stabilizer" }
    ],
    correctAnswer: 1,
    explanation: "* Insoluble zwitterion $^+\\text{H}_3\\text{N}-\\text{C}_6\\text{H}_4-\\text{SO}_3^-$ is converted by $\\text{Na}_2\\text{CO}_3$ into the soluble **$\\text{H}_2\\text{N-C}_6\\text{H}_4-\\text{SO}_3^-\\text{Na}^+$**, liberating the free $-\\text{NH}_2$ group for diazotization.",
    level: 3,
    topic: "edexcel-unit-5",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q79",
    createdAt: "2027-04-27T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l4_lv3_8-2026",
    question: "A tripeptide $\\text{P}$ consists of Glycine, Alanine, and Valine. Complete hydrolysis with $6\\text{ mol dm}^{-3}\\text{ HCl}$ produces all three amino acids. How many possible structural sequence isomers exist for this tripeptide?",
    options: [
      { text: "3 isomers" },
      { text: "6 isomers (3! = 3 × 2 × 1: Gly-Ala-Val, Gly-Val-Ala, Ala-Gly-Val, Ala-Val-Gly, Val-Gly-Ala, Val-Ala-Gly)", isCorrect: true },
      { text: "9 isomers" },
      { text: "1 isomer" }
    ],
    correctAnswer: 1,
    explanation: "* Three distinct amino acids arranged in sequence from N-terminus to C-terminus give $3! = 3 \\times 2 \\times 1 = \\mathbf{6\\text{ sequence isomers}}$.",
    level: 3,
    topic: "edexcel-unit-5",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2026 Paper 1 Q79",
    createdAt: "2027-04-27T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l4_lv3_9-2026",
    question: "In the separation of an amino acid mixture by two-dimensional paper chromatography, why is the chromatogram developed in two perpendicular directions using two DIFFERENT solvents?",
    options: [
      { text: "To make the spots fluoresce under UV light" },
      { text: "Some amino acids have identical Rf values in the first solvent system and overlap; developing 90° in a second solvent with different polarity separates the co-eluting amino acids into distinct resolved spots", isCorrect: true },
      { text: "To increase the paper thickness" },
      { text: "To neutralize acidic amino acids" }
    ],
    correctAnswer: 1,
    explanation: "* **Two-dimensional chromatography**: Uses two distinct mobile phase polarities at $90^\\circ$ angles to resolve amino acid pairs that share identical $R_f$ in a single solvent.",
    level: 3,
    topic: "edexcel-unit-5",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2026 Paper 1 Q66",
    createdAt: "2027-04-28T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l4_lv3_10-2026",
    question: "Why does the enzyme carbonic anhydrase lose all catalytic activity when heated above $60\\text{ }^\\circ\\text{C}$ (denaturation), even though its primary covalent peptide chain remains completely intact?",
    options: [
      { text: "The primary covalent peptide bonds are cleaved into carbon dioxide" },
      { text: "Excess thermal energy disrupts the delicate non-covalent hydrogen bonds, ionic interactions, and hydrophobic interactions maintaining the specific three-dimensional tertiary active site conformation", isCorrect: true },
      { text: "The amino acids change from L-enantiomers to D-enantiomers" },
      { text: "The zinc cofactor undergoes nuclear fusion" }
    ],
    correctAnswer: 1,
    explanation: "* **Protein Denaturation**: Thermal agitation breaks weak tertiary stabilizing forces (H-bonds, salt bridges), unfolding the active site without cleaving primary peptide bonds.",
    level: 3,
    topic: "edexcel-unit-5",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q80",
    createdAt: "2027-04-28T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l4_lv3_11-2026",
    question: "A synthetic peptide contains 15 amino acid residues. If it is completely hydrolyzed into individual amino acids, how many molecules of water ($\\text{H}_2\\text{O}$) are consumed in the hydrolysis reaction?",
    options: [
      { text: "15 molecules" },
      { text: "14 molecules (hydrolysis of n amino acid residues consumes n – 1 water molecules to cleave n – 1 peptide bonds)", isCorrect: true },
      { text: "16 molecules" },
      { text: "30 molecules" }
    ],
    correctAnswer: 1,
    explanation: "* A linear peptide of $15$ residues contains $15 - 1 = 14$ peptide links ($\\text{-CONH-}$). Cleaving all $14$ links requires exactly **$14\\text{ H}_2\\text{O}$ molecules**.",
    level: 3,
    topic: "edexcel-unit-5",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2025 Paper 1 Q80",
    createdAt: "2027-04-29T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l4_lv3_12-2026",
    question: "In the chemical synthesis of a specific dipeptide (e.g. Gly-Ala) from free glycine and alanine, why are 'protecting groups' (such as BOC for –NH₂ and esterification for –COOH) required prior to coupling with DCC?",
    options: [
      { text: "To make amino acids radioactive" },
      { text: "Free amino acids have two reactive functional groups (–NH₂ and –COOH) on each molecule; without protection, coupling would produce a random mixture of four different dipeptides (Gly-Gly, Ala-Ala, Gly-Ala, Ala-Gly) and higher polymers", isCorrect: true },
      { text: "Protecting groups prevent amino acids from dissolving in water" },
      { text: "Protecting groups eliminate the chiral center" }
    ],
    correctAnswer: 1,
    explanation: "* **Protecting group strategy**: Prevents uncontrolled self-condensation and ensures unambiguous formation of the desired sequence (**Gly-Ala**).",
    level: 3,
    topic: "edexcel-unit-5",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2026 Paper 1 Q67",
    createdAt: "2027-04-29T10:00:00Z"
  }
];
