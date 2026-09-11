import { Question } from '../../../types';

export const level3Questions: Question[] = [
  {
    id: "ex_ed_u5_l3_lv3_1-2026",
    question: "A multi-step organic synthesis aims to convert benzene into 3-bromonitrobenzene. In what sequence must the bromination and nitration steps be carried out, and what is the chemical rationale?",
    options: [
      { text: "Brominate first, then nitrate; because –Br is a 3-directing group" },
      { text: "Nitrate first (with conc. HNO₃ / conc. H₂SO₄) to introduce the 3-directing (meta-directing) and deactivating –NO₂ group, then brominate (with Br₂ / FeBr₃) so that the incoming bromine atom is directed specifically to the 3-position", isCorrect: true },
      { text: "Both reactions must be carried out simultaneously in a single pot" },
      { text: "Brominate twice, then eliminate one bromine with sodium" }
    ],
    correctAnswer: 1,
    explanation: "* $-\\text{NO}_2$ is a **3-directing (meta-directing)** group; $-\\text{Br}$ is a **2,4-directing** group. To obtain the 3-isomer, nitration must precede bromination.",
    level: 3,
    topic: "edexcel-unit-5",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q27",
    createdAt: "2027-02-14T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l3_lv3_2-2026",
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
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q56",
    createdAt: "2027-03-26T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l3_lv3_3-2026",
    question: "In the synthesis of 4-bromomethylbenzene (p-bromotoluene) from benzene, which two sequential reactions must be chosen, and why cannot bromination be carried out first?",
    options: [
      { text: "Brominate first, then add methane with AlCl₃" },
      { text: "Friedel-Crafts alkylation first with CH₃Cl / AlCl₃ to introduce the 2,4-directing methyl group, followed by bromination with Br₂ / FeBr₃ in the dark (brominating first would introduce a deactivating –Br group giving lower yields and undesired isomers)", isCorrect: true },
      { text: "Nitrate first, then react with bromoform" },
      { text: "Oxidize benzene to phenol, then react with HBr" }
    ],
    correctAnswer: 1,
    explanation: "* **Synthetic order**: Alkylation with $\\text{CH}_3\\text{Cl}/\\text{AlCl}_3$ introduces the activating $2,4$-directing $-\\text{CH}_3$ group; subsequent bromination with $\\text{Br}_2/\\text{FeBr}_3$ gives the desired **4-bromomethylbenzene**.",
    level: 3,
    topic: "edexcel-unit-5",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2026 Paper 1 Q28",
    createdAt: "2027-02-14T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l3_lv3_4-2026",
    question: "Why does the Friedel-Crafts acylation of benzene with ethanoyl chloride ($\\text{CH}_3\\text{COCl}$) and $\\text{AlCl}_3$ stop cleanly at mono-acylation (forming acetophenone), whereas Friedel-Crafts alkylation often results in unavoidable polyalkylation?",
    options: [
      { text: "AlCl₃ dissolves the alkyl group" },
      { text: "The introduced acyl group (–COCH₃) is strongly electron-withdrawing and deactivates the aromatic ring towards further electrophilic attack, whereas alkyl groups (–R) are electron-donating and activate the mono-alkylated ring, making it more reactive than benzene itself", isCorrect: true },
      { text: "Acyl chlorides polymerize in air" },
      { text: "Ethanoyl chloride is an inorganic acid" }
    ],
    correctAnswer: 1,
    explanation: "* **Deactivation vs Activation**: The $-\\text{COCH}_3$ group deactivates acetophenone, preventing polyacylation; in contrast, $-\\text{CH}_3$ activates toluene, leading to polyalkylation.",
    level: 3,
    topic: "edexcel-unit-5",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2026 Paper 1 Q23",
    createdAt: "2027-02-15T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l3_lv3_5-2026",
    question: "A chemist synthesizes 2,4,6-trinitromethylbenzene (TNT). Why are progressively harsher conditions (higher temperatures, fuming sulfuric and fuming nitric acids) required for each successive nitration step (mononitration → dinitration → trinitration)?",
    options: [
      { text: "Toluene gets colder as it reacts" },
      { text: "Each incoming –NO₂ group is strongly electron-withdrawing by resonance and inductive effects, progressively decreasing the π-electron density of the ring and increasing the activation energy for subsequent electrophilic substitution", isCorrect: true },
      { text: "The AlCl₃ catalyst gets consumed" },
      { text: "Nitrogen gas blocks the reaction vessel" }
    ],
    correctAnswer: 1,
    explanation: "* Stepwise deactivation by $-\\text{NO}_2$ groups reduces ring $\\pi$-electron density, requiring **fuming acids and temperatures $>100^\\circ\\text{C}$** for the third nitration step.",
    level: 3,
    topic: "edexcel-unit-5",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q28",
    createdAt: "2027-02-15T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l3_lv3_6-2026",
    question: "In the preparation of pure, dry phenyl ethanoate from phenol, why is ethanoyl chloride or ethanoic anhydride used instead of ethanoic acid with concentrated sulfuric acid catalyst?",
    options: [
      { text: "Phenol evaporates in sulfuric acid" },
      { text: "The lone pair on the phenolic oxygen is delocalized into the benzene ring, making phenol a very poor nucleophile that reacts too slowly with carboxylic acids (equilibrium lies far to the left); acyl chlorides / anhydrides are much stronger electrophiles that react rapidly and irreversibly", isCorrect: true },
      { text: "Ethanoic acid decomposes into methane and carbon dioxide" },
      { text: "Phenyl ethanoate cannot exist in the presence of acid" }
    ],
    correctAnswer: 1,
    explanation: "* **Poor phenolic nucleophilicity**: Delocalization of the $-\\text{OH}$ lone pair into the ring reduces its nucleophilic reactivity, necessitating reactive **acyl chlorides or anhydrides** for esterification.",
    level: 3,
    topic: "edexcel-unit-5",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2025 Paper 1 Q29",
    createdAt: "2027-02-16T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l3_lv3_7-2026",
    question: "An unknown aromatic compound $\\text{P}$ ($\text{C}_7\\text{H}_7\\text{Cl}$) does NOT react with aqueous silver nitrate at room temperature or upon boiling. However, when $\\text{P}$ is heated with acidified $\\text{KMnO}_4$, it produces 2-chlorobenzoic acid. What is the identity of $\\text{P}$?",
    options: [
      { text: "(Chloromethyl)benzene (benzyl chloride, C₆H₅CH₂Cl)" },
      { text: "1-chloro-2-methylbenzene (2-chlorotoluene)", isCorrect: true },
      { text: "4-chlorotoluene" },
      { text: "Chlorobenzene" }
    ],
    correctAnswer: 1,
    explanation: "* Aryl halides ($\text{C-Cl}$ bonded directly to the ring) resist nucleophilic hydrolysis (no reaction with $\\text{AgNO}_3$). Oxidation of the $-\\text{CH}_3$ group gives **2-chlorobenzoic acid**, identifying $\\text{P}$ as **2-chlorotoluene**.",
    level: 3,
    topic: "edexcel-unit-5",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2026 Paper 1 Q24",
    createdAt: "2027-02-16T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l3_lv3_8-2026",
    question: "In the retrosynthetic analysis of 1-phenylethan-1-ol ($\\text{C}_6\\text{H}_5\\text{CH(OH)CH}_3$), which two synthetic routes from benzene are feasible?",
    options: [
      { text: "Direct oxidation of benzene with ozone" },
      { text: "Route 1: Friedel-Crafts acylation of benzene with CH₃COCl/AlCl₃ to acetophenone (C₆H₅COCH₃), followed by reduction with NaBH₄; Route 2: Bromobenzene Grignard reagent (C₆H₅MgBr) reacted with ethanal (CH₃CHO) followed by dilute acid", isCorrect: true },
      { text: "Reflux benzene with ethanol and sulfuric acid" },
      { text: "React phenol with ethene under high pressure" }
    ],
    correctAnswer: 1,
    explanation: "* Both routes cleanly yield $1$-phenylethanol: (1) $\\text{Ph-H} \\xrightarrow{\\text{AcCl/AlCl}_3} \\text{Ph-CO-Me} \\xrightarrow{\\text{NaBH}_4} \\mathbf{\\text{Ph-CH(OH)Me}}$; (2) $\\text{PhMgBr} + \\text{MeCHO} \\xrightarrow{\\text{H}^+} \\mathbf{\\text{Ph-CH(OH)Me}}$.",
    level: 3,
    topic: "edexcel-unit-5",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q57",
    createdAt: "2027-03-27T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l3_lv3_9-2026",
    question: "Why does 2,4,6-tribromophenol precipitate immediately upon mixing dilute aqueous phenol with bromine water, whereas 2,4,6-tribromobenzene cannot be prepared by simply mixing benzene with bromine water?",
    options: [
      { text: "Benzene is a solid at room temperature" },
      { text: "The phenolic –OH group provides intense +M resonance electron donation into the ring, polarizing bromine molecules directly and making the 2,4,6-positions so nucleophilic that triple substitution is instantaneous at room temperature without catalyst", isCorrect: true },
      { text: "Phenol decomposes bromine water into hydrogen gas" },
      { text: "Benzene has no hydrogen atoms at positions 2, 4, 6" }
    ],
    correctAnswer: 1,
    explanation: "* **Enormous activation by $-\\text{OH}$**: High electron density in phenol polarizes non-polar $\\text{Br}_2$ without needing a halogen carrier, giving quantitative **white precipitate of 2,4,6-tribromophenol**.",
    level: 3,
    topic: "edexcel-unit-5",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2026 Paper 1 Q57",
    createdAt: "2027-03-28T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l3_lv3_10-2026",
    question: "In the catalytic hydrogenation of benzene to cyclohexane ($\\text{C}_6\\text{H}_{12}$), what conditions and catalysts are required, and why does this reaction require significantly harsher conditions than the hydrogenation of cyclohexene?",
    options: [
      { text: "Room temperature and pressure with no catalyst" },
      { text: "Finely divided Raney nickel (or Pt/Pd) at high temperature (150–200 °C) and high pressure (20–30 atm); required because the 152 kJ mol⁻¹ resonance stabilization energy of the aromatic ring must be overcome to break the delocalized π-system", isCorrect: true },
      { text: "Boiling water with sodium hydroxide" },
      { text: "Ultraviolet light at absolute zero" }
    ],
    correctAnswer: 1,
    explanation: "* Breaking the aromatic $152\\text{ kJ mol}^{-1}$ delocalization energy requires **$\text{Ni}$ catalyst, $150–200^\circ\\text{C}$, and $30\\text{ atm } \\text{H}_2$**.",
    level: 3,
    topic: "edexcel-unit-5",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2026 Paper 1 Q48",
    createdAt: "2027-03-28T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l3_lv3_11-2026",
    question: "How does the acid strength ($pK_a$) of phenol ($pK_a = 9.95$), 4-nitrophenol ($pK_a = 7.15$), and 4-methylphenol ($pK_a = 10.26$) compare, and what electronic factors explain this trend?",
    options: [
      { text: "4-methylphenol > Phenol > 4-nitrophenol" },
      { text: "4-nitrophenol > Phenol > 4-methylphenol: The strongly electron-withdrawing –NO₂ group further stabilizes the negative charge on the 4-nitrophenoxide ion by extended resonance delocalization into the nitro group; whereas the electron-donating –CH₃ group destabilizes the phenoxide ion", isCorrect: true },
      { text: "All three have identical pKa values" },
      { text: "Phenol is the strongest acid among all three" }
    ],
    correctAnswer: 1,
    explanation: "* **Substituent effect on phenol acidity**: $-\\text{NO}_2$ ($-M/-I$) stabilizes the phenoxide conjugate base $\\implies$ **stronger acid ($pK_a = 7.15$)**; $-\\text{CH}_3$ ($+I$) destabilizes phenoxide $\\implies$ **weaker acid ($pK_a = 10.26$)**.",
    level: 3,
    topic: "edexcel-unit-5",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q58",
    createdAt: "2027-03-29T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l3_lv3_12-2026",
    question: "When benzene undergoes electrophilic substitution by a nitronium ion ($\\text{NO}_2^+$) in the presence of deuterium (benzene-$d_6$, $\\text{C}_6\\text{D}_6$), the rate of nitration is found to be virtually identical to that of normal benzene ($\\text{C}_6\\text{H}_6$). What does this absence of a primary kinetic isotope effect prove about the rate-determining step?",
    options: [
      { text: "C–H bond breaking is the slowest rate-determining step" },
      { text: "The slow, rate-determining step is the initial attack of the NO₂⁺ electrophile on the benzene ring forming the arenium carbocation intermediate (Wheland complex), while the subsequent loss of the proton/deuteron (C–H / C–D bond breaking) is very rapid", isCorrect: true },
      { text: "Deuterium is not an isotope of hydrogen" },
      { text: "The reaction occurs via a free-radical chain mechanism" }
    ],
    correctAnswer: 1,
    explanation: "* **Absence of Kinetic Isotope Effect ($k_H / k_D \\approx 1.0$)**: Confirms that $\\text{C-H}$ cleavage occurs **after** the rate-determining step; the slow step is the formation of the arenium carbocation.",
    level: 3,
    topic: "edexcel-unit-5",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2025 Paper 1 Q58",
    createdAt: "2027-03-29T10:00:00Z"
  }
];
