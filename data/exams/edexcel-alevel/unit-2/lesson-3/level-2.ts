import { Question } from '../../../types';

export const level2Questions: Question[] = [
  {
    id: "ex_ed_u2_l3_lv2_1-2026",
    question: "When chlorine reacts with cold, dilute aqueous sodium hydroxide, what type of redox reaction takes place, and what are the chlorine-containing products formed?",
    options: [
      { text: "Thermal decomposition forming NaCl and O₂" },
      { text: "Disproportionation reaction forming sodium chloride (NaCl, oxidation state -1) and sodium chlorate(I) (NaClO, oxidation state +1)", isCorrect: true },
      { text: "Complete oxidation forming sodium chlorate(V) (NaClO₃)" },
      { text: "Precipitation forming insoluble Cl₂O" }
    ],
    correctAnswer: 1,
    explanation: "* In cold dilute $\\text{NaOH}$: $\\text{Cl}_2 + 2\\text{NaOH} \\rightarrow \\text{NaCl} + \\text{NaClO} + \\text{H}_2\\text{O}$.\n* Chlorine is simultaneously reduced from $0$ to $-1$ in $\\text{NaCl}$ and oxidized from $0$ to $+1$ in $\\text{NaClO}$ (a **disproportionation** reaction used to manufacture household bleach).",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Oct 2025 Paper 1 Q18",
    createdAt: "2026-07-27T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l3_lv2_2-2026",
    question: "When solid sodium bromide (NaBr) reacts with concentrated sulfuric acid (H₂SO₄), brown fumes are evolved alongside a choking gas that turns damp blue litmus paper red. What are the identity of these gases?",
    options: [
      { text: "Br₂ (brown fumes) and SO₂ (choking gas)", isCorrect: true },
      { text: "HBr (brown fumes) and H₂S (choking gas)" },
      { text: "NO₂ and CO₂" },
      { text: "Br₂ and H₂" }
    ],
    correctAnswer: 0,
    explanation: "* $\\text{H}_2\\text{SO}_4$ protonates $\\text{NaBr}$ to form $\\text{HBr}$ (misty fumes), but bromide is a strong enough reducing agent to reduce $\\text{H}_2\\text{SO}_4$ to sulfur dioxide ($\\text{SO}_2$), while bromide is oxidized to bromine ($\\text{Br}_2$, orange-brown fumes): $2\\text{HBr} + \\text{H}_2\\text{SO}_4 \\rightarrow \\text{Br}_2 + \\text{SO}_2 + 2\\text{H}_2\\text{O}$.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / June 2026 Paper 1 Q19",
    createdAt: "2026-07-27T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l3_lv2_3-2026",
    question: "Why does the reducing ability of halide ions increase down Group 7: $\\text{F}^- < \\text{Cl}^- < \\text{Br}^- < \\text{I}^-$?",
    options: [
      { text: "Iodide has the highest electronegativity" },
      { text: "Down Group 7, ionic radius increases and electron shielding increases; the outermost electron is further from the nucleus and less tightly held, making it easier to lose (oxidize)", isCorrect: true },
      { text: "Fluoride ions form covalent networks" },
      { text: "Iodide ions have fewer protons" }
    ],
    correctAnswer: 1,
    explanation: "* Larger halide ions hold their outer shell electrons less tightly due to greater distance from the nucleus and greater shielding, lowering the energy needed to donate an electron and act as a reducing agent.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Jan 2026 Paper 1 Q15",
    createdAt: "2026-07-28T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l3_lv2_4-2026",
    question: "A student performs confirmatory tests on silver halide precipitates using aqueous ammonia (NH₃). Which result correctly identifies silver bromide (AgBr)?",
    options: [
      { text: "Dissolves readily in dilute aqueous NH₃" },
      { text: "Insoluble in dilute aqueous NH₃, but dissolves in concentrated aqueous NH₃", isCorrect: true },
      { text: "Completely insoluble in both dilute and concentrated aqueous NH₃" },
      { text: "Turns black immediately upon adding NH₃" }
    ],
    correctAnswer: 1,
    explanation: "* $\\text{AgCl}$ dissolves in dilute $\\text{NH}_3\\text{(aq)}$.\n* $\\text{AgBr}$ is insoluble in dilute $\\text{NH}_3$, but dissolves in **concentrated $\\text{NH}_3\\text{(aq)}$** to form the soluble complex $[\\text{Ag(NH}_3)_2]^+$.\n* $\\text{AgI}$ is insoluble in both dilute and concentrated $\\text{NH}_3$.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Oct 2025 Paper 1 Q19",
    createdAt: "2026-07-28T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l3_lv2_5-2026",
    question: "What products are formed during the thermal decomposition of anhydrous magnesium nitrate, $\\text{Mg(NO}_3)_2\\text{(s)}$?",
    options: [
      { text: "Magnesium nitrite (Mg(NO₂)₂) and oxygen only" },
      { text: "Magnesium oxide (MgO), brown toxic nitrogen dioxide gas (NO₂), and oxygen gas (O₂)", isCorrect: true },
      { text: "Magnesium metal, nitrogen gas, and ozone" },
      { text: "Magnesium nitride and water" }
    ],
    correctAnswer: 1,
    explanation: "* All Group 2 nitrates decompose completely upon heating: $2\\text{Mg(NO}_3)_2\\text{(s)} \\rightarrow 2\\text{MgO(s)} + 4\\text{NO}_2\\text{(g)} + \\text{O}_2\\text{(g)}$.\n* $\\text{NO}_2$ is visible as brown fumes.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / June 2025 Paper 1 Q20",
    createdAt: "2026-07-29T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l3_lv2_6-2026",
    question: "Why does the solubility of Group 2 hydroxides (e.g., Mg(OH)₂ to Ba(OH)₂) increase descending down the group?",
    options: [
      { text: "Lattice enthalpy decreases much more rapidly down the group than hydration enthalpy of the cations", isCorrect: true },
      { text: "Hydration enthalpy increases rapidly down the group" },
      { text: "Barium hydroxide is a covalent network" },
      { text: "Magnesium hydroxide has zero lattice energy" }
    ],
    correctAnswer: 0,
    explanation: "* For hydroxides (small anion $\\text{OH}^-$), lattice enthalpy decreases more steeply than hydration enthalpy as cation radius increases, making $\\Delta H_{\\text{soln}}$ more exothermic / less endothermic and increasing solubility from sparingly soluble $\\text{Mg(OH)}_2$ to highly soluble $\\text{Ba(OH)}_2$.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Jan 2026 Paper 1 Q16",
    createdAt: "2026-07-29T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l3_lv2_7-2026",
    question: "When concentrated sulfuric acid is added to solid sodium chloride, misty fumes are observed but NO oxidation of chloride occurs. Why?",
    options: [
      { text: "Chloride ions are too strong as reducing agents" },
      { text: "Sulfuric acid is not a strong enough oxidizing agent to oxidize chloride ions (which are very weak reducing agents)", isCorrect: true },
      { text: "Chlorine is more electronegative than oxygen" },
      { text: "The reaction is highly endothermic" }
    ],
    correctAnswer: 1,
    explanation: "* The reaction is purely an acid-base reaction: $\\text{NaCl(s)} + \\text{H}_2\\text{SO}_4\\text{(l)} \\rightarrow \\text{NaHSO}_4\\text{(s)} + \\text{HCl(g)}$.\n* Unlike bromide and iodide, chloride ions are weak reducing agents and cannot reduce $\\text{H}_2\\text{SO}_4$, so no redox reaction occurs.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / June 2026 Paper 1 Q28",
    createdAt: "2026-08-12T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l3_lv2_8-2026",
    question: "A student adds dilute hydrochloric acid to an unknown solid. Effervescence is observed, and the gas produced turns limewater cloudy. What is the identity of the anion in the solid?",
    options: [
      { text: "Sulfate" },
      { text: "Carbonate or hydrogencarbonate", isCorrect: true },
      { text: "Chloride" },
      { text: "Nitrate" }
    ],
    correctAnswer: 1,
    explanation: "* Carbonate ($\\text{CO}_3^{2-}$) and hydrogencarbonate ($\\text{HCO}_3^-$) ions react with acids to release carbon dioxide gas:\n* $\\text{CO}_3^{2-} + 2\\text{H}^+ \\rightarrow \\text{CO}_2 + \\text{H}_2\\text{O}$.\n* $\\text{CO}_2$ reacts with limewater (calcium hydroxide) to form a white precipitate of calcium carbonate, turning it cloudy.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Oct 2025 Paper 1 Q22",
    createdAt: "2026-08-12T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l3_lv2_9-2026",
    question: "Why do the boiling points of the halogens increase down Group 7 ($F_2 < Cl_2 < Br_2 < I_2$)?",
    options: [
      { text: "Electronegativity increases down the group" },
      { text: "The number of electrons per molecule increases, resulting in more polarizable electron clouds and stronger London dispersion forces", isCorrect: true },
      { text: "Covalent bond strength increases down the group" },
      { text: "Permanent dipole-dipole interactions become stronger" }
    ],
    correctAnswer: 1,
    explanation: "* Halogens are non-polar diatomic molecules.\n* Down the group, the molecules have more electrons, making the electron clouds easier to deform (more polarizable), which strengthens the London dispersion forces between molecules.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Jan 2026 Paper 1 Q21",
    createdAt: "2026-08-13T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l3_lv2_10-2026",
    question: "When chlorine is added to drinking water, it undergoes a disproportionation reaction. What are the names of the two acids formed during this reaction?",
    options: [
      { text: "Hydrochloric acid and chloric(I) acid (hypochlorous acid)", isCorrect: true },
      { text: "Hydrochloric acid and chloric(V) acid" },
      { text: "Perchloric acid and hydrochloric acid" },
      { text: "Chloric(I) acid and chloric(III) acid" }
    ],
    correctAnswer: 0,
    explanation: "* The reaction is: $\\text{Cl}_2\\text{(aq)} + \\text{H}_2\\text{O(l)} \\rightleftharpoons \\text{HCl(aq)} + \\text{HClO(aq)}$.\n* $\\text{HCl}$ is hydrochloric acid (oxidation state of Cl is $-1$).\n* $\\text{HClO}$ is chloric(I) acid (hypochlorous acid, oxidation state of Cl is $+1$).",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / June 2025 Paper 1 Q29",
    createdAt: "2026-08-13T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l3_lv2_11-2026",
    question: "How does the thermal decomposition of Group 1 nitrates (excluding lithium) differ from the thermal decomposition of Group 2 nitrates?",
    options: [
      { text: "Group 1 nitrates do not decompose at all" },
      { text: "Group 1 nitrates decompose to form metal nitrites and oxygen, whereas Group 2 nitrates decompose to form metal oxides, nitrogen dioxide, and oxygen", isCorrect: true },
      { text: "Group 1 nitrates decompose to form metal oxides and nitrogen gas" },
      { text: "Group 2 nitrates only release nitrogen gas" }
    ],
    correctAnswer: 1,
    explanation: "* Group 1 nitrates (except Li) undergo minor decomposition: $2\\text{MNO}_3\\text{(s)} \\rightarrow 2\\text{MNO}_2\\text{(s)} + \\text{O}_2\\text{(g)}$.\n* Group 2 nitrates undergo greater polarization and decompose fully: $2\\text{M(NO}_3)_2\\text{(s)} \\rightarrow 2\\text{MO(s)} + 4\\text{NO}_2\\text{(g)} + \\text{O}_2\\text{(g)}$.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Oct 2025 Paper 1 Q23",
    createdAt: "2026-08-14T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l3_lv2_12-2026",
    question: "What is the oxidation number of chromium in the dichromate ion, $\\text{Cr}_2\\text{O}_7^{2-}$?",
    options: [
      { text: "+3" },
      { text: "+6", isCorrect: true },
      { text: "+7" },
      { text: "+12" }
    ],
    correctAnswer: 1,
    explanation: "* Let the oxidation state of Cr be $x$.\n* Seven oxygen atoms contribute $7 \\times (-2) = -14$.\n* Total charge is $-2 \\implies 2x - 14 = -2 \\implies 2x = 12 \\implies x = \\mathbf{+6}$.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Jan 2026 Paper 1 Q22",
    createdAt: "2026-08-14T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l3_lv2_13-2026",
    question: "Which of the following describes the trend in reactivity of Group 2 elements with water descending the group?",
    options: [
      { text: "Reactivity increases (Mg reacts slowly with cold water but rapidly with steam; Ba reacts vigorously with cold water)", isCorrect: true },
      { text: "Reactivity decreases down the group" },
      { text: "Reactivity remains constant" },
      { text: "Group 2 elements do not react with water" }
    ],
    correctAnswer: 0,
    explanation: "* Reactivity with water increases down the group as atoms get larger, outer electrons are further from the nucleus, shielded, and more easily lost to form $M^{2+}$ ions.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / June 2026 Paper 1 Q30",
    createdAt: "2026-08-15T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l3_lv2_14-interactive",
    question: "A sample of anhydrous calcium nitrate, Ca(NO₃)₂, is strongly heated in a test tube connected to a 100 cm³ gas syringe: 2Ca(NO₃)₂(s) → 2CaO(s) + 4NO₂(g) + O₂(g). Use the interactive gas syringe scale reader below to determine the total gas volume collected, and calculate the volume of brown nitrogen dioxide (NO₂) gas present in the mixture at r.t.p.",
    options: [
      { text: "Total Volume: 60.0 cm³; Volume of NO₂ = 48.0 cm³", isCorrect: true },
      { text: "Total Volume: 60.0 cm³; Volume of NO₂ = 30.0 cm³" },
      { text: "Total Volume: 50.0 cm³; Volume of NO₂ = 40.0 cm³" },
      { text: "Total Volume: 70.0 cm³; Volume of NO₂ = 56.0 cm³" }
    ],
    correctAnswer: 0,
    explanation: "* The gas syringe scale clearly indicates a total volume of $60.0\\text{ cm}^3$\n* From the balanced equation: $4\\text{ mol of } \\text{NO}_2$ are formed for every $1\\text{ mol of } \\text{O}_2$ (total 5 mol of gas)\n* Mole fraction of $\\text{NO}_2 = \\frac{4}{5} = 0.80$\n* Volume of $\\text{NO}_2 = 0.80 \\times 60.0\\text{ cm}^3 = 48.0\\text{ cm}^3$",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "practical",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / June 2025 Paper 1 Q31",
    createdAt: "2026-08-16T10:00:00Z",
    apparatusScaleConfig: {
      type: "gas-syringe",
      targetValue: 60.0,
      unit: "cm³",
      minScale: 0.0,
      maxScale: 100.0,
      step: 10.0,
      subdivision: 1.0,
      tolerance: 1.0,
      title: "Gas Syringe Total Decomposition Gas Volume (60.0 cm³)"
    },
    markingScheme: {
      marks: 2,
      points: [
        { mark: 1, keyword: "60.0 cm3", text: "Read gas syringe correctly as 60.0 cm³." },
        { mark: 1, keyword: "48.0 cm3 NO2", text: "Calculate volume of NO₂: (4/5) × 60.0 = 48.0 cm³." }
      ],
      examinerTips: "Group 2 nitrates decompose fully to oxide, NO₂ (brown gas), and O₂ (colourless gas)."
    }
  }
];

