import { Question } from '../../../types';

export const level1Questions: Question[] = [
  {
    id: "ex_ed_u5_l3_lv1_1-2026",
    question: "What is the primary thermodynamic evidence proving the exceptional stability of the delocalized benzene ring compared to the theoretical Kekulé structure (cyclohexa-1,3,5-triene)?",
    options: [
      { text: "Benzene boils at a higher temperature than water" },
      { text: "The experimental enthalpy of hydrogenation of benzene (–208 kJ mol⁻¹) is 152 kJ mol⁻¹ less exothermic than the theoretical value for cyclohexa-1,3,5-triene (3 × –120 = –360 kJ mol⁻¹), demonstrating a 152 kJ mol⁻¹ resonance stabilization energy", isCorrect: true },
      { text: "Benzene freezes at 5.5 °C" },
      { text: "Benzene has a high density" }
    ],
    correctAnswer: 1,
    explanation: "* Experimental hydrogenation enthalpy is $\\mathbf{-208\\text{ kJ mol}^{-1}}$ vs theoretical $\\mathbf{-360\\text{ kJ mol}^{-1}}$. The difference ($152\\text{ kJ mol}^{-1}$) is the **delocalization (resonance) energy**.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q22",
    createdAt: "2027-02-07T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l3_lv1_2-2026",
    question: "Why does benzene undergo ELECTROPHILIC SUBSTITUTION reactions rather than electrophilic addition reactions under standard conditions?",
    options: [
      { text: "Benzene is an inorganic salt" },
      { text: "Substitution preserves the intact delocalized π-electron ring and its associated 152 kJ mol⁻¹ resonance stabilization energy, whereas addition would permanently disrupt aromatic delocalization", isCorrect: true },
      { text: "Benzene has no hydrogen atoms" },
      { text: "Electrophiles cannot attack benzene" }
    ],
    correctAnswer: 1,
    explanation: "* Electrophilic substitution retains the thermodynamically stable aromatic sextet of delocalized $\\pi$-electrons.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2026 Paper 1 Q23",
    createdAt: "2027-02-07T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l3_lv1_3-2026",
    question: "What is the active electrophile in the nitration of benzene using a mixture of concentrated nitric acid ($\\text{HNO}_3$) and concentrated sulfuric acid ($\\text{H}_2\\text{SO}_4$) at $50–55\\text{ }^\\circ\\text{C}$?",
    options: [
      { text: "Nitrate ion (NO₃⁻)" },
      { text: "Nitronium ion (NO₂⁺)", isCorrect: true },
      { text: "Nitrite ion (NO₂⁻)" },
      { text: "Nitrogen dioxide molecule (NO₂)" }
    ],
    correctAnswer: 1,
    explanation: "* Nitrating mixture generates the linear **nitronium ion**: $\\text{HNO}_3 + 2\\text{H}_2\\text{SO}_4 \\rightleftharpoons \\mathbf{\\text{NO}_2^+} + \\text{H}_3\\text{O}^+ + 2\\text{HSO}_4^-$.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2026 Paper 1 Q19",
    createdAt: "2027-02-08T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l3_lv1_4-2026",
    question: "Which catalyst is required for the Friedel-Crafts acylation of benzene with ethanoyl chloride ($\\text{CH}_3\\text{COCl}$)?",
    options: [
      { text: "Nickel powder" },
      { text: "Anhydrous aluminium chloride (AlCl₃)", isCorrect: true },
      { text: "Concentrated sodium hydroxide" },
      { text: "Platinum gauze" }
    ],
    correctAnswer: 1,
    explanation: "* $\\text{AlCl}_3$ acts as a halogen-carrier Lewis acid to generate the electrophilic acylium ion: $\\text{CH}_3\\text{COCl} + \\text{AlCl}_3 \\rightarrow \\mathbf{\\text{CH}_3\\text{C}^+=\\text{O}} + \\text{AlCl}_4^-$.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q23",
    createdAt: "2027-02-08T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l3_lv1_5-2026",
    question: "What observation is seen when aqueous bromine (bromine water) is added to phenol ($\\text{C}_6\\text{H}_5\\text{OH}$) at room temperature without any catalyst?",
    options: [
      { text: "No reaction occurs" },
      { text: "The orange-brown bromine water is decolorized and a dense white precipitate of 2,4,6-tribromophenol forms (with a characteristic antiseptic odor)", isCorrect: true },
      { text: "A gas is evolved with effervescence" },
      { text: "A purple solution forms" }
    ],
    correctAnswer: 1,
    explanation: "* The lone pair on oxygen delocalizes into the benzene ring, highly activating the $2,4,6$-positions for rapid triple bromination forming **2,4,6-tribromophenol (white precipitate)**.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2025 Paper 1 Q24",
    createdAt: "2027-02-09T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l3_lv1_6-2026",
    question: "What type of flame is observed during the complete or incomplete combustion of benzene in air, and why?",
    options: [
      { text: "A clean, non-luminous blue flame with no smoke" },
      { text: "A very smoky, luminous yellow flame with copious unburnt carbon (soot) particles because of the extremely high carbon-to-hydrogen (C:H = 1:1) ratio in the molecule", isCorrect: true },
      { text: "A green flame" },
      { text: "No flame because benzene is non-flammable" }
    ],
    correctAnswer: 1,
    explanation: "* The high $\\text{C}:\\text{H}$ ratio ($1:1$) results in incomplete combustion in air, generating glowing unburnt carbon soot that produces a **very smoky flame**.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q24",
    createdAt: "2027-02-09T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l3_lv1_7-2026",
    question: "What reagent is used in Friedel-Crafts alkylation of benzene to form methylbenzene (toluene)?",
    options: [
      { text: "Methanol and sulfuric acid" },
      { text: "Chloromethane (CH₃Cl) in the presence of anhydrous aluminium chloride (AlCl₃) catalyst", isCorrect: true },
      { text: "Methane and nickel catalyst" },
      { text: "Carbon monoxide and hydrogen" }
    ],
    correctAnswer: 1,
    explanation: "* $\\text{CH}_3\\text{Cl} + \\text{AlCl}_3 \\rightarrow \\mathbf{\\text{CH}_3^+} + \\text{AlCl}_4^-$. Attack on benzene produces **methylbenzene**.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2026 Paper 1 Q25",
    createdAt: "2027-02-10T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l3_lv1_8-2026",
    question: "Why is phenol a stronger acid than aliphatic alcohols such as ethanol?",
    options: [
      { text: "Phenol contains more hydrogen atoms" },
      { text: "The phenoxide anion (C₆H₅O⁻) formed upon losing a proton is stabilized by delocalization of the negative charge over the aromatic π-system, whereas the ethoxide ion has no resonance stabilization", isCorrect: true },
      { text: "Phenol contains an ionic bond" },
      { text: "Ethanol cannot lose a proton under any conditions" }
    ],
    correctAnswer: 1,
    explanation: "* **Resonance stabilization of phenoxide**: The negative charge on oxygen is delocalized into the ortho and para positions of the benzene ring, favoring dissociation ($\text{pK}_a \\approx 9.95$).",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2026 Paper 1 Q21",
    createdAt: "2027-02-10T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l3_lv1_9-2026",
    question: "What type of hybridization is present in each carbon atom of the benzene ring, and what is the carbon-carbon-carbon bond angle ($C-C-C$)?",
    options: [
      { text: "sp³ hybridization; 109.5°" },
      { text: "sp² hybridization; exactly 120° (forming a planar, regular hexagonal ring with equal C–C bond lengths of 0.139 nm)", isCorrect: true },
      { text: "sp hybridization; 180°" },
      { text: "dsp³ hybridization; 90°" }
    ],
    correctAnswer: 1,
    explanation: "* Each carbon in benzene is **$sp^2$ hybridized**, forming three coplanar $\sigma$ bonds at **$120^\circ$**, with remaining unhybridized $p$-orbitals overlapping sideways into a continuous $\\pi$-ring.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q51",
    createdAt: "2027-03-19T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l3_lv1_10-2026",
    question: "Which of the following observations provides direct physical evidence for the symmetry of the benzene ring and disproves Kekulé's alternating single and double bonds?",
    options: [
      { text: "Benzene has a strong aroma" },
      { text: "X-ray diffraction demonstrates that all six carbon-carbon bond lengths are completely identical (0.139 nm), intermediate between a standard C–C single bond (0.154 nm) and a C=C double bond (0.134 nm)", isCorrect: true },
      { text: "Benzene is immiscible with water" },
      { text: "Benzene conducts electricity" }
    ],
    correctAnswer: 1,
    explanation: "* X-ray diffraction confirms a perfectly regular planar hexagon with **all $6$ bond lengths equal to $0.139\\text{ nm}$**.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2025 Paper 1 Q51",
    createdAt: "2027-03-19T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l3_lv1_11-2026",
    question: "What reagents and conditions are required for the chlorination of benzene to form chlorobenzene ($\\text{C}_6\\text{H}_5\\text{Cl}$)?",
    options: [
      { text: "Chlorine gas and UV light" },
      { text: "Chlorine gas (Cl₂) in the presence of an anhydrous iron(III) chloride (FeCl₃) or aluminium chloride (AlCl₃) halogen-carrier catalyst at room temperature", isCorrect: true },
      { text: "Concentrated hydrochloric acid and hydrogen peroxide" },
      { text: "Sodium hypochlorite solution under reflux" }
    ],
    correctAnswer: 1,
    explanation: "* $\\text{FeCl}_3$ polarizes the $\\text{Cl-Cl}$ bond to generate the electrophilic $\\text{Cl}^+$ species for electrophilic aromatic substitution: $\\text{C}_6\\text{H}_6 + \\text{Cl}_2 \\xrightarrow{\\text{FeCl}_3} \\text{C}_6\\text{H}_5\\text{Cl} + \\text{HCl}$.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2026 Paper 1 Q43",
    createdAt: "2027-03-20T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l3_lv1_12-2026",
    question: "How does phenol react when treated with aqueous sodium hydroxide ($\\text{NaOH(aq)}$) compared to aqueous sodium hydrogencarbonate ($\\text{NaHCO}_3\\text{(aq)}$)?",
    options: [
      { text: "Reacts with both releasing CO₂ gas" },
      { text: "Reacts with NaOH(aq) to form sodium phenoxide (C₆H₅O⁻Na⁺) and water, but does NOT react with NaHCO₃(aq) because phenol is too weak an acid to liberate CO₂ from hydrogencarbonate", isCorrect: true },
      { text: "Does not react with either" },
      { text: "Reacts only with NaHCO₃ to form a precipitate" }
    ],
    correctAnswer: 1,
    explanation: "* Phenol ($pK_a = 9.95$) is acidic enough to neutralize $\\text{NaOH}$ forming soluble sodium phenoxide, but too weak to react with $\\text{NaHCO}_3$ ($pK_a \\text{ of } \\text{H}_2\\text{CO}_3 = 6.35$), providing a test distinguishing it from carboxylic acids.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q52",
    createdAt: "2027-03-20T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l3_lv1_13-2026",
    question: "What observation is made when neutral iron(III) chloride solution ($\\text{FeCl}_3\\text{(aq)}$) is added to an aqueous solution of phenol?",
    options: [
      { text: "A white precipitate forms" },
      { text: "A characteristic intense purple/violet coloration is formed (due to the formation of the iron(III)-phenolate complex [Fe(OC₆H₅)₆]³⁻)", isCorrect: true },
      { text: "Effervescence of hydrogen gas" },
      { text: "The solution turns bright orange" }
    ],
    correctAnswer: 1,
    explanation: "* The formation of the $[\text{Fe}(\text{OC}_6\\text{H}_5)_6]^{3-}$ complex produces an intense **purple/violet solution**, a classic analytical test for phenols.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2026 Paper 1 Q52",
    createdAt: "2027-03-21T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l3_lv1_14-2026",
    question: "What is the product when phenol is treated with dilute nitric acid ($\\text{HNO}_3\\text{(aq)}$) at room temperature?",
    options: [
      { text: "2,4,6-trinitrophenol" },
      { text: "A mixture of 2-nitrophenol and 4-nitrophenol", isCorrect: true },
      { text: "3-nitrophenol exclusively" },
      { text: "Nitrobenzene" }
    ],
    correctAnswer: 1,
    explanation: "* Due to activation by the $-\\text{OH}$ group, phenol undergoes mononitration under mild conditions (dilute $\\text{HNO}_3$ at room temperature) at the **2- and 4-positions**.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2026 Paper 1 Q44",
    createdAt: "2027-03-21T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l3_lv1_15-2026",
    question: "What intermediate carbocation is formed during the electrophilic substitution of benzene by an electrophile ($\\text{E}^+$)?",
    options: [
      { text: "A linear free radical" },
      { text: "A positively charged arenium ion (Wheland intermediate) in which four π-electrons are delocalized over five carbon atoms with one sp³ carbon", isCorrect: true },
      { text: "A carbanion with eight π-electrons" },
      { text: "A cyclic peroxide" }
    ],
    correctAnswer: 1,
    explanation: "* Attack of $\\text{E}^+$ disrupts aromaticity to form the **arenium ion intermediate** (Wheland complex) with $4\\pi$-electrons delocalized across $5$ carbons.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q53",
    createdAt: "2027-03-22T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l3_lv1_16-2026",
    question: "Why does benzene not decolorize bromine water under standard conditions, whereas cyclohexene does immediately?",
    options: [
      { text: "Benzene is an inorganic solvent" },
      { text: "Cyclohexene has localized π-electrons with high electron density that induce a dipole in Br₂, whereas benzene's π-electrons are delocalized with lower electron density and stabilized by 152 kJ mol⁻¹ resonance energy", isCorrect: true },
      { text: "Benzene is completely insoluble in bromine" },
      { text: "Cyclohexene has no carbon-carbon bonds" }
    ],
    correctAnswer: 1,
    explanation: "* **Localized vs Delocalized $\\pi$-density**: The localized $\\text{C=C}$ in alkenes polarizes $\\text{Br}_2$ easily; benzene's lower delocalized $\\pi$-density requires a halogen carrier to polarize $\\text{Br}_2$.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2025 Paper 1 Q53",
    createdAt: "2027-03-22T10:00:00Z"
  }
];
