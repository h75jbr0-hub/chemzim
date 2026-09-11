import { Question } from '../../../types';

export const level1Questions: Question[] = [
  {
    id: "ex_ed_u6_l1_lv1_1-2026",
    question: "Which test is used to identify aqueous iron(III) ions ($\\text{Fe}^{3+}$) by producing an intense, deep blood-red solution?",
    options: [
      { text: "Adding aqueous barium chloride" },
      { text: "Adding aqueous potassium thiocyanate (KSCN) to form the [Fe(H₂O)₅(SCN)]²⁺ complex ion", isCorrect: true },
      { text: "Adding acidified silver nitrate" },
      { text: "Adding universal indicator" }
    ],
    correctAnswer: 1,
    explanation: "* Aqueous $\\text{Fe}^{3+}$ reacts with $\\text{SCN}^-$ to form the characteristic blood-red pentaaquathiocyanatoiron(III) complex $[\\text{Fe(H}_2\\text{O)}_5(\\text{SCN})]^{2+}$.",
    level: 1,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / Oct 2025 Paper 6 Q1",
    createdAt: "2026-12-09T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv1_2-2026",
    question: "What is observed when excess aqueous ammonia ($\\text{NH}_3\\text{(aq)}$) is added dropwise to a solution containing copper(II) ions ($\\text{Cu}^{2+}$)?",
    options: [
      { text: "A white precipitate that dissolves to give a colorless solution" },
      { text: "A pale blue precipitate forms initially, which dissolves in excess ammonia to yield a deep royal blue solution of [Cu(NH₃)₄(H₂O)₂]²⁺", isCorrect: true },
      { text: "A green precipitate that turns dark brown" },
      { text: "An intense purple solution forms immediately with no precipitate" }
    ],
    correctAnswer: 1,
    explanation: "* Step 1: $\\text{Cu}^{2+}\\text{(aq)} + 2\\text{NH}_3 + 2\\text{H}_2\\text{O} \\rightarrow \\text{Cu(OH)}_2\\text{(s (pale blue))} + 2\\text{NH}_4^+$.\n* Step 2 (excess): $\\text{Cu(OH)}_2\\text{(s)} + 4\\text{NH}_3 + 2\\text{H}_2\\text{O} \\rightarrow [\\text{Cu(NH}_3)_4(\\text{H}_2\\text{O})_2]^{2+}\\text{(aq (deep royal blue))} + 2\\text{OH}^-$.",
    level: 1,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / Jan 2025 Paper 6 Q2",
    createdAt: "2026-12-09T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv1_3-2026",
    question: "What is the purpose of adding anti-bumping granules to a distillation or reflux flask before heating?",
    options: [
      { text: "To act as a heterogeneous catalyst" },
      { text: "To provide nucleation sites that promote smooth, even boiling and prevent violent flash boiling (bumping)", isCorrect: true },
      { text: "To absorb excess moisture" },
      { text: "To measure the liquid temperature accurately" }
    ],
    correctAnswer: 1,
    explanation: "* Anti-bumping granules contain trapped air in porous channels, generating small bubbles that allow smooth continuous boiling without dangerous violent eruptive bumping.",
    level: 1,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / Jan 2025 Paper 6 Q1",
    createdAt: "2026-12-10T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv1_4-2026",
    question: "In thin-layer chromatography (TLC), how is the retention factor ($R_f$) of a separated compound calculated?",
    options: [
      { text: "R_f = Distance moved by solvent front / Distance moved by spot" },
      { text: "R_f = Distance moved by spot / Distance moved by solvent front", isCorrect: true },
      { text: "R_f = Mass of spot / Area of plate" },
      { text: "R_f = Time taken for solvent to reach top / Total time" }
    ],
    correctAnswer: 1,
    explanation: "* $R_f = \\frac{\\text{distance moved by the compound spot from baseline}}{\\text{distance moved by the solvent front from baseline}}$. Values are always between $0.00$ and $1.00$.",
    level: 1,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / Oct 2025 Paper 6 Q2",
    createdAt: "2026-12-10T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv1_5-2026",
    question: "Which drying agent is suitable for removing traces of water from a crude liquid organic ester or halogenoalkane in a separatory funnel extraction?",
    options: [
      { text: "Concentrated sulfuric acid" },
      { text: "Anhydrous magnesium sulfate (MgSO₄) or anhydrous sodium sulfate (Na₂SO₄)", isCorrect: true },
      { text: "Solid sodium hydroxide" },
      { text: "Phosphorus(V) oxide" }
    ],
    correctAnswer: 1,
    explanation: "* Anhydrous neutral salts like $\\text{MgSO}_4$ or $\\text{Na}_2\\text{SO}_4$ absorb dissolved water to form hydrated crystals without reacting with or hydrolyzing the organic ester.",
    level: 1,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / Jan 2025 Paper 6 Q3",
    createdAt: "2026-12-11T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv1_6-2026",
    question: "What is the function of a Liebig condenser in a standard reflux apparatus setup?",
    options: [
      { text: "To collect condensed distillate in a separate receiving beaker" },
      { text: "To continuously condense volatile reactant and solvent vapors back into the reaction boiling flask, preventing loss of materials during prolonged heating", isCorrect: true },
      { text: "To filter solid crystals" },
      { text: "To measure pressure inside the flask" }
    ],
    correctAnswer: 1,
    explanation: "* Under reflux, the condenser is positioned vertically with cold water entering at the bottom to return boiled vapors back to the flask continuously.",
    level: 1,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / Jan 2025 Paper 6 Q2",
    createdAt: "2026-12-11T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv1_7-2026",
    question: "How should a standard melting point determination of a pure crystalline solid compare to that of an impure sample of the same substance?",
    options: [
      { text: "The impure sample melts at a higher temperature with a sharp range" },
      { text: "The pure solid melts sharply at its literature value over a narrow range (≤ 1–2 °C), whereas impurities depress (lower) the melting point and broaden the melting temperature range", isCorrect: true },
      { text: "Impurities do not affect the melting point" },
      { text: "The pure solid boils before melting" }
    ],
    correctAnswer: 1,
    explanation: "* Impurities disrupt the crystalline lattice structure, causing melting point depression and a broad melting interval ($> 3\\text{--}5\\text{ }^\\circ\\text{C}$).",
    level: 1,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / Oct 2025 Paper 6 Q3",
    createdAt: "2026-12-12T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv1_8-2026",
    question: "In an iodine-thiosulfate redox titration ($2\\text{S}_2\\text{O}_3^{2-} + \\text{I}_2 \\rightarrow \\text{S}_4\\text{O}_6^{2-} + 2\\text{I}^-$), when should the starch indicator solution be added?",
    options: [
      { text: "At the very start of the titration when the solution is dark brown" },
      { text: "Near the endpoint when the iodine color has faded to pale straw-yellow (to prevent irreversible complexation and entrapment of iodine in the starch helix)", isCorrect: true },
      { text: "After the solution has become completely colorless" },
      { text: "Starch is never used in iodine titrations" }
    ],
    correctAnswer: 1,
    explanation: "* Adding starch too early traps iodine within the amylose helix, causing slow release and an inaccurate endpoint; it must be added when the solution is straw-yellow, turning it blue-black until the sharp colorless endpoint.",
    level: 1,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / Jan 2025 Paper 6 Q4",
    createdAt: "2026-12-12T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv1_9-2026",
    question: "What is observed when acidified potassium dichromate(VI) ($\\text{K}_2\\text{Cr}_2\\text{O}_7 / \\text{H}^+$) is warmed with a primary alcohol or an aldehyde?",
    options: [
      { text: "The solution turns from purple to colorless" },
      { text: "The orange solution turns dark green (due to the reduction of orange dichromate(VI) Cr₂O₇²⁻ to green chromium(III) Cr³⁺ ions)", isCorrect: true },
      { text: "A bright yellow precipitate forms" },
      { text: "No change is observed" }
    ],
    correctAnswer: 1,
    explanation: "* Dichromate(VI) ions ($\text{Cr}_2\text{O}_7^{2-}$, orange) are reduced to chromium(III) ions ($\text{Cr}^{3+}$, green) while oxidizing the primary alcohol/aldehyde.",
    level: 1,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / Oct 2025 Paper 6 Q8",
    createdAt: "2026-12-19T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv1_10-2026",
    question: "Which aqueous reagent is used to confirm the presence of sulfate ions ($\\text{SO}_4^{2-}$) by forming a dense white precipitate insoluble in dilute nitric acid?",
    options: [
      { text: "Aqueous silver nitrate" },
      { text: "Aqueous barium chloride (BaCl₂) acidified with dilute hydrochloric acid (or barium nitrate with dilute nitric acid)", isCorrect: true },
      { text: "Aqueous sodium hydroxide" },
      { text: "Aqueous potassium iodide" }
    ],
    correctAnswer: 1,
    explanation: "* $\\text{Ba}^{2+}\\text{(aq)} + \\text{SO}_4^{2-}\\text{(aq)} \\rightarrow \\text{BaSO}_4\\text{(s (white precipitate))}$. Acidification prevents false positives from carbonates or sulfites.",
    level: 1,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / Jan 2025 Paper 6 Q9",
    createdAt: "2026-12-19T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv1_11-2026",
    question: "Why should water ALWAYS enter the lower inlet and leave from the upper outlet of a Liebig condenser in distillation or reflux apparatus?",
    options: [
      { text: "To prevent the condenser from getting too heavy" },
      { text: "To ensure the water jacket is completely filled without air bubbles, maximizing cooling efficiency throughout the entire length of the tube", isCorrect: true },
      { text: "To filter impurities out of the tap water" },
      { text: "To maintain neutral pH" }
    ],
    correctAnswer: 1,
    explanation: "* Filling from the bottom pushes air upward and out, ensuring a continuous, full water jacket for efficient heat exchange and condensation.",
    level: 1,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / Jan 2026 Paper 6 Q7",
    createdAt: "2026-12-20T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv1_12-2026",
    question: "What is the characteristic observation when aqueous sodium hydroxide ($\\text{NaOH(aq)}$) is added dropwise to a solution containing iron(II) ions ($\\text{Fe}^{2+}$), followed by standing in air?",
    options: [
      { text: "A white precipitate forms that dissolves in excess" },
      { text: "A dirty dark green precipitate of Fe(OH)₂ forms initially, which gradually turns brown-red at the surface on standing in air due to atmospheric oxidation to Fe(OH)₃", isCorrect: true },
      { text: "A blood-red solution forms with no precipitate" },
      { text: "A pale pink solution forms immediately" }
    ],
    correctAnswer: 1,
    explanation: "* $\\text{Fe}^{2+}\\text{(aq)} + 2\\text{OH}^- \\rightarrow \\text{Fe(OH)}_2\\text{(s (green))}$. Atmospheric oxygen oxidizes it: $4\\text{Fe(OH)}_2 + \\text{O}_2 + 2\\text{H}_2\\text{O} \\rightarrow 4\\text{Fe(OH)}_3\\text{(s (brown-red))}$.",
    level: 1,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / Oct 2025 Paper 6 Q9",
    createdAt: "2026-12-20T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv1_13-2026",
    question: "Why are organic compounds visualized using an ultraviolet (UV) lamp or an iodine chamber in thin-layer chromatography (TLC)?",
    options: [
      { text: "To evaporate the solvent rapidly" },
      { text: "Most organic compounds are colorless liquids or solids; UV light causes conjugated compounds to fluoresce, and iodine vapors reversibly bind to organic spots to produce visible brown stains", isCorrect: true },
      { text: "To sterilize the chromatography plate" },
      { text: "To melt the separated samples" }
    ],
    correctAnswer: 1,
    explanation: "* TLC plates often contain a fluorescent indicator (e.g. $\\text{F}_{254}$) that glows under UV, showing organic spots as dark patches, or iodine vapor is used to reveal colorless spots.",
    level: 1,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / Jan 2025 Paper 6 Q10",
    createdAt: "2026-12-21T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv1_14-2026",
    question: "Which flame test color is observed for potassium ions ($\\text{K}^+$) when tested with a clean nichrome wire?",
    options: [
      { text: "Persistent intense yellow" },
      { text: "Lilac (pale violet)", isCorrect: true },
      { text: "Brick-red" },
      { text: "Apple-green" }
    ],
    correctAnswer: 1,
    explanation: "* $\\text{K}^+$ gives a characteristic **lilac** flame (can be viewed through cobalt blue glass to filter sodium yellow contamination).",
    level: 1,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / Jan 2026 Paper 6 Q8",
    createdAt: "2026-12-21T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv1_15-2026",
    question: "Why must a conical flask rather than a beaker be used to receive the titrant during a precision acid-base or redox titration?",
    options: [
      { text: "Conical flasks are lighter in weight" },
      { text: "The sloping walls of a conical flask prevent liquid from splashing out when swirled vigorously during titrant addition", isCorrect: true },
      { text: "Beakers absorb light and distort color change" },
      { text: "Conical flasks maintain a constant temperature" }
    ],
    correctAnswer: 1,
    explanation: "* Continuous swirling is necessary for rapid mixing, and the conical shape prevents droplets from splashing out over the sides.",
    level: 1,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / Oct 2025 Paper 6 Q10",
    createdAt: "2026-12-22T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv1_16-2026",
    question: "What is observed when aqueous sodium hydroxide is added dropwise to a solution of cobalt(II) ions ($\\text{Co}^{2+}$)?",
    options: [
      { text: "A bright yellow precipitate forms" },
      { text: "A blue precipitate forms initially, which turns pink upon standing/warming (forming Co(OH)₂)", isCorrect: true },
      { text: "A dense white precipitate that dissolves to a colorless solution" },
      { text: "A green precipitate that turns black" }
    ],
    correctAnswer: 1,
    explanation: "* $\\text{Co}^{2+}\\text{(aq)} + 2\\text{OH}^- \\rightarrow \\text{Co(OH)}_2\\text{(s)}$. It precipitates initially as a blue basic salt and rapidly rearranges to pink $\\text{Co(OH)}_2\\text{(s)}$.",
    level: 1,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / Jan 2025 Paper 6 Q11",
    createdAt: "2026-12-22T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv1_17-june2026",
    question: "What is the primary criterion for selecting a suitable solvent to recrystallise an impure organic solid (such as aspirin)?",
    options: [
      { text: "The solid must be readily soluble in the hot solvent but virtually insoluble in the cold solvent, while impurities are either completely soluble or insoluble at both temperatures", isCorrect: true },
      { text: "The solid must be completely insoluble in the hot solvent" },
      { text: "The solvent must have a boiling point above 250 °C" },
      { text: "The solid and solvent must react to form a gas" }
    ],
    correctAnswer: 0,
    explanation: "* An ideal recrystallisation solvent dissolves the compound when boiling/hot and allows it to crystallise out in high yield upon cooling to $0-5^\\\\circ\\\\text{C}$.\n* Soluble impurities remain dissolved in the cold mother liquor, and insoluble impurities are removed by hot filtration.",
    level: 1,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / Jan 2025 Paper 6 Q3",
    createdAt: "2026-06-22T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv1_18-june2026",
    question: "Why is suction filtration using a Büchner funnel and water aspirator preferred over simple gravity filtration when collecting recrystallised organic crystals?",
    options: [
      { text: "It is significantly faster and draws air through the crystal cake, partially drying the crystals", isCorrect: true },
      { text: "It cools the crystals below 0 °C" },
      { text: "It dissolves any remaining solid impurities" },
      { text: "It eliminates the need for filter paper" }
    ],
    correctAnswer: 0,
    explanation: "* The reduced pressure created by the water aspirator/pump speeds up filtration tenfold compared to gravity.\n* The continuous airflow through the Büchner funnel pulls residual solvent out, leaving a nearly dry crystalline cake.",
    level: 1,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / Jan 2025 Paper 6 Q4",
    createdAt: "2026-06-22T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv1_19-june2026",
    question: "During an iodine–thiosulfate titration, why must the starch indicator NOT be added at the start of the titration, but only when the solution becomes pale straw-yellow?",
    options: [
      { text: "At high iodine concentrations, starch forms an insoluble starch–iodine complex that decomposes very slowly, causing inaccurate premature endpoints", isCorrect: true },
      { text: "Starch decomposes in cold water" },
      { text: "Starch oxidises sodium thiosulfate into sulfate" },
      { text: "Starch is acidic and neutralises thiosulfate" }
    ],
    correctAnswer: 0,
    explanation: "* If added when iodine concentration is high (dark brown), starch forms a strongly bound, insoluble blue-black complex that releases iodine too slowly at the endpoint.\n* Adding it when $[\\\\text{I}_2]$ is low (pale straw yellow) yields an immediate, sharp transition from blue-black to colourless.",
    level: 1,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / June 2026 Paper 6 Q5",
    createdAt: "2026-06-22T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv1_20-june2026",
    question: "Why is no external chemical indicator required when titrating iron(II) ions with standard potassium manganate(VII) in acidic solution?",
    options: [
      { text: "Potassium manganate(VII) is self-indicating: a single excess drop of intensely purple MnO₄⁻ imparts a permanent pale pink colour to the colourless reaction mixture", isCorrect: true },
      { text: "Iron(II) ions turn bright yellow at the equivalence point" },
      { text: "The reaction produces bubbles of oxygen at the endpoint" },
      { text: "The solution turns boiling hot at the equivalence point" }
    ],
    correctAnswer: 0,
    explanation: "* Deep purple $\\\\text{MnO}_4^-$ is reduced to virtually colourless $\\\\text{Mn}^{2+}$ during the reaction.\n* As soon as all $\\\\text{Fe}^{2+}$ is oxidised, the first unreacted drop of $\\\\text{KMnO}_4$ colors the solution **permanent pale pink**, serving as an ideal internal indicator.",
    level: 1,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / June 2025 Paper 6 Q6",
    createdAt: "2026-06-22T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv1_21-june2026",
    question: "How should a digital pH meter be calibrated before recording a pH titration curve in the laboratory?",
    options: [
      { text: "By rinsing the electrode with distilled water and measuring the pH of two standard buffer solutions of known pH (e.g. pH 4.00 and pH 7.00)", isCorrect: true },
      { text: "By placing it in boiling water at 100 °C" },
      { text: "By soaking it in concentrated sulfuric acid for 10 minutes" },
      { text: "By shaking it vigorously in air" }
    ],
    correctAnswer: 0,
    explanation: "* pH meters suffer from instrument drift.\n* A two-point calibration using standard buffer solutions (such as $\\\\text{pH } 7.00$ and $\\\\text{pH } 4.00$ for acid titrations) adjusts both the zero offset and slope/gain.",
    level: 1,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / June 2026 Paper 6 Q7",
    createdAt: "2026-06-22T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv1_22-june2026",
    question: "What is observed when excess concentrated aqueous ammonia is added to pale blue aqueous copper(II) sulfate?",
    options: [
      { text: "A pale blue precipitate forms initially, which dissolves in excess ammonia to give a deep royal blue solution", isCorrect: true },
      { text: "A permanent white precipitate forms with no colour change" },
      { text: "The solution turns bright orange with effervescence" },
      { text: "A blood-red precipitate forms that sinks to the bottom" }
    ],
    correctAnswer: 0,
    explanation: "* Dropwise $\\\\text{NH}_3$ precipitates pale blue $\\\\text{Cu(OH)}_2\\\\text{(s)}$.\n* Excess $\\\\text{NH}_3$ undergoes ligand substitution: $\\\\text{Cu(OH)}_2 + 4\\\\text{NH}_3 + 2\\\\text{H}_2\\\\text{O} \\\\rightarrow [\\\\text{Cu(NH}_3)_4(\\\\text{H}_2\\\\text{O)}_2]^{2+} + 2\\\\text{OH}^-$, forming a characteristic **deep royal blue** solution.",
    level: 1,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / June 2025 Paper 6 Q8",
    createdAt: "2026-06-22T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv1_23-june2026",
    question: "When measuring the melting point of a pure solid in a capillary tube using a Thiele tube or electrical melting point apparatus, why must the temperature be raised very slowly (approx. 1–2 °C min⁻¹) close to the expected melting point?",
    options: [
      { text: "To ensure thermal equilibrium between the heating oil/block, the thermometer, and the capillary tube sample", isCorrect: true },
      { text: "To prevent the glass capillary tube from melting" },
      { text: "To allow the solid to decompose into gas" },
      { text: "To avoid evaporating the heating oil" }
    ],
    correctAnswer: 0,
    explanation: "* Rapid heating causes the thermometer reading to lag behind the actual block temperature, leading to recorded melting temperatures that are artificially high and artificially broad.\n* Heating at $1-2^\\\\circ\\\\text{C min}^{-1}$ guarantees accurate thermal equilibrium.",
    level: 1,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / June 2026 Paper 6 Q9",
    createdAt: "2026-06-22T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv1_24-june2026",
    question: "When using a colorimeter to measure the absorbance of a blue copper(II) sulfate solution, which color filter should be selected?",
    options: [
      { text: "Red or orange filter (complementary colour to blue)", isCorrect: true },
      { text: "Blue filter" },
      { text: "Violet filter" },
      { text: "Green filter" }
    ],
    correctAnswer: 0,
    explanation: "* A colored solution transmits light of its own colour and absorbs its complementary colour.\n* A blue solution strongly absorbs red/orange light ($\\\\sim 600-700\\\\text{ nm}$); selecting an orange/red filter maximises instrument sensitivity and linear absorbance.",
    level: 1,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / June 2025 Paper 6 Q10",
    createdAt: "2026-06-22T10:00:00Z"
  }
];


