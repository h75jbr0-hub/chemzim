import { Question } from '../../../types';

export const level2Questions: Question[] = [
  {
    id: "ex_ed_u5_l3_lv2_1-2026",
    question: "Why is phenol ($\\text{C}_6\\text{H}_5\\text{OH}$) a significantly STRONGER acid ($pK_a = 9.95$) than aliphatic alcohols like ethanol ($pK_a \\approx 16$), yet a WEAKER acid than carboxylic acids ($pK_a \\approx 4.8$)?",
    options: [
      { text: "Phenol contains a triple bond" },
      { text: "The phenoxide anion (C₆H₅O⁻) is stabilized by resonance delocalization of the negative charge over the ortho and para positions of the aromatic ring, making proton loss easier than in ethanol; however, in carboxylate anions (RCOO⁻), the charge is delocalized over two highly electronegative oxygen atoms, providing even greater stability", isCorrect: true },
      { text: "Ethanol forms coordinate bonds with water" },
      { text: "Phenol contains ionic bonds" }
    ],
    correctAnswer: 1,
    explanation: "* Phenoxide ion delocalization over the ring stabilizes the conjugate base ($\text{C}_6\\text{H}_5\\text{O}^-$), making phenol acidic enough to react with $\\text{NaOH(aq)}$, but not with $\\text{NaHCO}_3\\text{(aq)}$.",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q26",
    createdAt: "2027-02-12T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l3_lv2_2-2026",
    question: "Which of the following substituent groups on a benzene ring is a 2,4-DIRECTING and ACTIVATING group towards further electrophilic substitution?",
    options: [
      { text: "Nitro group (–NO₂)" },
      { text: "Hydroxyl group (–OH) or methyl group (–CH₃)", isCorrect: true },
      { text: "Carboxylic acid group (–COOH)" },
      { text: "Carbonyl group (–CHO)" }
    ],
    correctAnswer: 1,
    explanation: "* Groups with lone pairs ($-\\text{OH}, -\\text{OR}$) or alkyl groups ($-\\text{CH}_3$) donate electron density into the $\\pi$-system, activating the ring and directing incoming electrophiles to the **2- and 4- (ortho/para) positions**.",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2026 Paper 1 Q27",
    createdAt: "2027-02-13T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l3_lv2_3-2026",
    question: "What is the primary organic product formed when methylbenzene (toluene) is heated under reflux with acidified potassium manganate(VII) ($\\text{KMnO}_4 / \\text{H}^+$)?",
    options: [
      { text: "Phenol" },
      { text: "Benzoic acid (C₆H₅COOH)", isCorrect: true },
      { text: "Benzaldehyde" },
      { text: "Benzyl alcohol" }
    ],
    correctAnswer: 1,
    explanation: "* Any alkyl side chain on a benzene ring containing at least one benzylic hydrogen is vigorously oxidized by hot acidic $\\text{KMnO}_4$ directly to **benzoic acid** ($\text{C}_6\\text{H}_5\\text{COOH}$).",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2026 Paper 1 Q22",
    createdAt: "2027-02-13T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l3_lv2_4-2026",
    question: "Why is the nitration of methylbenzene (toluene) significantly FASTER than the nitration of benzene, and what is the major isomeric distribution of the nitrotoluene products?",
    options: [
      { text: "Methylbenzene is less dense than benzene" },
      { text: "The methyl group (–CH₃) is electron-releasing via inductive effect / hyperconjugation, increasing π-electron density on the ring (activating) and directing substitution primarily to the 2- (ortho, ~63%) and 4- (para, ~34%) positions with minimal 3- (meta, ~3%) product", isCorrect: true },
      { text: "The methyl group is a 3-directing deactivating group" },
      { text: "Methylbenzene forms an addition polymer" }
    ],
    correctAnswer: 1,
    explanation: "* $-\\text{CH}_3$ is an **activating, $2,4$-directing group**, making toluene react faster than benzene and yielding primarily **2-nitrotoluene and 4-nitrotoluene**.",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q54",
    createdAt: "2027-03-23T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l3_lv2_5-2026",
    question: "In the preparation of aspirin (acetylsalicylic acid), 2-hydroxybenzoic acid (salicylic acid) is reacted with ethanoic anhydride ($(\\text{CH}_3\\text{CO})_2\\text{O}$) rather than ethanoyl chloride ($\\text{CH}_3\\text{COCl}$) in industrial manufacturing. What is the main reason for this industrial preference?",
    options: [
      { text: "Ethanoic anhydride is an explosive solid" },
      { text: "Ethanoic anhydride is cheaper, less corrosive, less hazardous to handle, and does not produce toxic, choking hydrogen chloride (HCl) gas fumes (instead producing recoverable ethanoic acid as byproduct)", isCorrect: true },
      { text: "Ethanoyl chloride does not react with phenols" },
      { text: "Ethanoic anhydride prevents recrystallization" }
    ],
    correctAnswer: 1,
    explanation: "* **Industrial Green Preference**: Ethanoic anhydride avoids corrosive, dangerous $\\text{HCl(g)}$ emissions and provides safer, cost-effective manufacturing.",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2025 Paper 1 Q54",
    createdAt: "2027-03-23T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l3_lv2_6-2026",
    question: "In the electrophilic substitution mechanism of benzene with $\\text{Br}_2$ and $\\text{FeBr}_3$, what role does the $\\text{FeBr}_3$ catalyst play?",
    options: [
      { text: "It acts as a reducing agent" },
      { text: "It acts as a Lewis acid (halogen carrier), accepting a lone pair from a Br₂ molecule to polarize and weaken the Br–Br bond, generating the electrophilic Br⁺ species: Br₂ + FeBr₃ ⇌ Br⁺ + FeBr₄⁻", isCorrect: true },
      { text: "It donates protons to the benzene ring" },
      { text: "It oxidizes benzene to phenol" }
    ],
    correctAnswer: 1,
    explanation: "* **Lewis acid catalyst**: $\\text{FeBr}_3$ accepts electron pairs from $\\text{Br}_2$ to generate the reactive **$\\text{Br}^+$** electrophile.",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2026 Paper 1 Q45",
    createdAt: "2027-03-24T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l3_lv2_7-2026",
    question: "Why is the nitro group ($\\text{-NO}_2$) on a nitrobenzene molecule both DEACTIVATING and 3-DIRECTING (meta-directing) towards further electrophilic substitution?",
    options: [
      { text: "The nitro group donates electrons to the ring" },
      { text: "The electronegative nitrogen and oxygen atoms withdraw electron density from the ring by induction and resonance, reducing electron density overall and particularly depleting electron density at the 2- and 4-positions, making attack at the 3-position least unfavorable", isCorrect: true },
      { text: "The nitro group changes the shape of the ring to non-planar" },
      { text: "The nitro group acts as a Brønsted base" }
    ],
    correctAnswer: 1,
    explanation: "* $-\\text{NO}_2$ places formal positive charges at ortho and para positions in resonance structures, strongly deactivating those positions and making **3- (meta) attack the path of lowest activation energy**.",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q55",
    createdAt: "2027-03-24T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l3_lv2_8-2026",
    question: "What is the product when methylbenzene reacts with chlorine in the presence of boiling temperature and ultraviolet (UV) light, compared to reacting at room temperature in the dark with $\\text{AlCl}_3$?",
    options: [
      { text: "Both give chlorobenzene" },
      { text: "Boiling with UV light causes free-radical substitution of the methyl side chain giving (chloromethyl)benzene (C₆H₅CH₂Cl); whereas AlCl₃ in the dark causes electrophilic aromatic substitution on the ring giving 2-chlorotoluene and 4-chlorotoluene", isCorrect: true },
      { text: "Both give benzoic acid" },
      { text: "UV light causes the ring to open" }
    ],
    correctAnswer: 1,
    explanation: "* **Conditions control reaction site**: $\\text{UV} / \\text{boiling}$ $\\rightarrow$ **free-radical side-chain substitution ($\text{C}_6\\text{H}_5\\text{CH}_2\\text{Cl}$)**; $\\text{AlCl}_3 / \\text{dark}$ $\\rightarrow$ **electrophilic ring substitution (ortho/para chlorotoluenes)**.",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2026 Paper 1 Q55",
    createdAt: "2027-03-25T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l3_lv2_9-2026",
    question: "What is the structure of the ester formed when phenol reacts with ethanoyl chloride ($\\text{CH}_3\\text{COCl}$) in the presence of a base (such as aqueous $\\text{NaOH}$)?",
    options: [
      { text: "Benzyl ethanoate" },
      { text: "Phenyl ethanoate (CH₃COOC₆H₅)", isCorrect: true },
      { text: "Methyl benzoate" },
      { text: "Ethyl phenoxide" }
    ],
    correctAnswer: 1,
    explanation: "* Phenol (or phenoxide ion) attacks ethanoyl chloride to form the ester **phenyl ethanoate ($\text{CH}_3\\text{COOC}_6\\text{H}_5$)** and $\\text{HCl}$.",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2026 Paper 1 Q46",
    createdAt: "2027-03-25T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l3_lv2_10-2026",
    question: "How does the relative reactivity towards electrophilic bromination compare between benzene, methylbenzene, and phenol?",
    options: [
      { text: "Benzene > Methylbenzene > Phenol" },
      { text: "Phenol > Methylbenzene > Benzene", isCorrect: true },
      { text: "Methylbenzene > Benzene > Phenol" },
      { text: "All three have identical reactivities" }
    ],
    correctAnswer: 1,
    explanation: "* **Relative reactivity**: Phenol (strong $+M$ resonance activation by $-\\text{OH}$) > Methylbenzene ($+I$ inductive activation by $-\\text{CH}_3$) > Benzene (unactivated).",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q56",
    createdAt: "2027-03-26T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l3_lv2_11-2026",
    question: "Why does the reaction of benzene with propan-1-chloropropane ($\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{Cl}$) and $\\text{AlCl}_3$ yield (1-methylethyl)benzene (cumene, isopropylbenzene) as the major product rather than propylbenzene?",
    options: [
      { text: "Benzene prefers branched chains" },
      { text: "The initially formed primary propyl carbocation (CH₃CH₂CH₂⁺) rapidly rearranges via a 1,2-hydride shift to form the more thermodynamically stable secondary isopropyl carbocation (CH₃CH⁺CH₃), which then attacks the benzene ring", isCorrect: true },
      { text: "AlCl₃ acts as a hydrogenation catalyst" },
      { text: "Propylbenzene boils off during the reaction" }
    ],
    correctAnswer: 1,
    explanation: "* **Carbocation rearrangement**: $1^\\circ$ carbocation $\\text{CH}_3\\text{CH}_2\\text{CH}_2^+$ undergoes a **1,2-hydride shift** to form the more stable $2^\\circ$ carbocation $(\\text{CH}_3)_2\\text{CH}^+$, producing **cumene** as the major product.",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2025 Paper 1 Q56",
    createdAt: "2027-03-26T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l3_lv2_12-2026",
    question: "What observation is made when liquid bromine ($\\text{Br}_2$) is added to benzene in the presence of iron filings ($\\text{Fe}$), and what gas is evolved?",
    options: [
      { text: "No reaction and no gas evolved" },
      { text: "The reddish-brown color of bromine fades and dense steamy/white fumes of hydrogen bromide gas (HBr) are evolved, which turn damp blue litmus paper red", isCorrect: true },
      { text: "A purple gas is evolved with green flames" },
      { text: "Oxygen gas is evolved with vigorous effervescence" }
    ],
    correctAnswer: 1,
    explanation: "* $\\text{Fe}$ reacts in situ to form $\\text{FeBr}_3$, catalyzing bromination: $\\text{C}_6\\text{H}_6 + \\text{Br}_2 \\rightarrow \\text{C}_6\\text{H}_5\\text{Br} + \\mathbf{\\text{HBr(g)}}$ (**steamy acidic acidic fumes**).",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2026 Paper 1 Q47",
    createdAt: "2027-03-27T10:00:00Z"
  }
];
