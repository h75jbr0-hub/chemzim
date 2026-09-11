import { Question } from '../../../types';

export const level2Questions: Question[] = [
  {
    id: "q_ed_u1_l1_lv2_q1_o2_molecules-20260819",
    question: "How many molecules of oxygen are present in a $1.00\\\\text{ g}$ sample of oxygen gas, $\\\\text{O}_2$?\n*(Avogadro constant $L = 6.02 \\\\times 10^{23}\\\\text{ mol}^{-1}$, $M_r(\\\\text{O}_2) = 32.0\\\\text{ g mol}^{-1}$)*",
    options: [
      { text: "1.88 × 10²²", isCorrect: true },
      { text: "3.76 × 10²²" },
      { text: "9.63 × 10²⁴" },
      { text: "1.93 × 10²⁵" }
    ],
    correctAnswer: 0,
    explanation: "First, calculate the moles of $\\\\text{O}_2$ molecules:\n$$n(\\\\text{O}_2) = \\\\frac{1.00\\\\text{ g}}{32.0\\\\text{ g mol}^{-1}} = 0.03125\\\\text{ mol}$$\nNext, multiply by Avogadro's constant ($L$):\n$$\\\\text{Molecules} = 0.03125 \\\\times (6.02 \\\\times 10^{23}) = 1.88125 \\\\times 10^{22} \\\\approx 1.88 \\\\times 10^{22}$$",
    level: 2,
    topic: "edexcel-unit-1",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / June 2026 Paper 1 Q2",
    createdAt: "2026-08-19"
  },
  {
    id: "q_ed_u1_l1_lv2_q2_nacl_conc-20260819",
    question: "What is the molar concentration, in $\\\\text{mol dm}^{-3}$, of a solution of sodium chloride containing $4.27\\\\text{ g}$ of $\\\\text{NaCl}$ dissolved in $300\\\\text{ cm}^3$ of solution?\n*(Molar mass $\\\\text{NaCl} = 58.5\\\\text{ g mol}^{-1}$)*",
    options: [
      { text: "0.0219 mol dm⁻³" },
      { text: "0.243 mol dm⁻³", isCorrect: true },
      { text: "4.11 mol dm⁻³" },
      { text: "45.7 mol dm⁻³" }
    ],
    correctAnswer: 1,
    explanation: "First, calculate the moles of $\\\\text{NaCl}$ solute:\n$$n(\\\\text{NaCl}) = \\\\frac{4.27\\\\text{ g}}{58.5\\\\text{ g mol}^{-1}} = 0.07299\\\\text{ mol}$$\nNext, convert volume to $\\\\text{dm}^3$ and calculate concentration:\n$$V = \\\\frac{300}{1000} = 0.300\\\\text{ dm}^3$$\n$$C = \\\\frac{n}{V} = \\\\frac{0.07299\\\\text{ mol}}{0.300\\\\text{ dm}^3} = 0.2433\\\\text{ mol dm}^{-3} \\\\approx 0.243\\\\text{ mol dm}^{-3}$$",
    level: 2,
    topic: "edexcel-unit-1",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / June 2025 Paper 1 Q3",
    createdAt: "2026-08-19"
  },
  {
    id: "q_ed_u1_l1_lv2_q4_li2co3_atom_economy-20260819",
    question: "Lithium carbonate is manufactured according to the reaction equation:\n$$2\\\\text{Li}_2\\\\text{O}_2 + 2\\\\text{CO}_2 \\\\rightarrow 2\\\\text{Li}_2\\\\text{CO}_3 + \\\\text{O}_2$$\nCalculate the percentage atom economy for the production of lithium carbonate in this reaction.\n*(Relative atomic masses: $\\\\text{Li} = 6.9, \\\\text{C} = 12.0, \\\\text{O} = 16.0$)*",
    options: [
      { text: "58.9%" },
      { text: "62.1%" },
      { text: "69.8%" },
      { text: "82.2%", isCorrect: true }
    ],
    correctAnswer: 3,
    explanation: "First, calculate $M_r(\\\\text{Li}_2\\\\text{CO}_3) = (2 \\\\times 6.9) + 12.0 + (3 \\\\times 16.0) = 73.8\\\\text{ g mol}^{-1}$.\nMass of desired product $= 2 \\\\times 73.8 = 147.6\\\\text{ g mol}^{-1}$.\nMass of byproduct $\\\\text{O}_2 = 32.0\\\\text{ g mol}^{-1}$.\nTotal product mass $= 147.6 + 32.0 = 179.6\\\\text{ g mol}^{-1}$.\n$$\\\\text{Atom Economy} = \\\\frac{147.6}{179.6} \\\\times 100\\\\% = 82.18\\\\% \\\\approx 82.2\\\\%$$",
    level: 2,
    topic: "edexcel-unit-1",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / June 2026 Paper 1 Q4",
    createdAt: "2026-08-19"
  },
  {
    id: "q_ed_u1_l1_lv2_q6_agcl_precipitate_mass-20260819",
    question: "A solution containing $0.040\\\\text{ mol}$ of silver nitrate ($\\\\text{AgNO}_3$) is added to a solution containing $0.060\\\\text{ mol}$ of sodium chloride ($\\\\text{NaCl}$). The reaction equation is:\n$$\\\\text{AgNO}_3\\\\text{(aq)} + \\\\text{NaCl(aq)} \\\\rightarrow \\\\text{AgCl(s)} + \\\\text{NaNO}_3\\\\text{(aq)}$$\nWhat mass of silver chloride precipitate, $\\\\text{AgCl(s)}$, is formed?\n*(Given $M_r(\\\\text{AgCl}) = 143.4\\\\text{ g mol}^{-1}$)*",
    options: [
      { text: "5.74 g", isCorrect: true },
      { text: "7.17 g" },
      { text: "8.60 g" },
      { text: "14.3 g" }
    ],
    correctAnswer: 0,
    explanation: "Since $\\\\text{AgNO}_3$ and $\\\\text{NaCl}$ react in a 1:1 mole ratio, $\\\\text{AgNO}_3$ ($0.040\\\\text{ mol}$) is the limiting reagent and completely reacts.\nMoles of $\\\\text{AgCl}$ precipitate formed $= 0.040\\\\text{ mol}$.\n$$\\\\text{Mass of AgCl} = 0.040\\\\text{ mol} \\\\times 143.4\\\\text{ g mol}^{-1} = 5.736\\\\text{ g} \\\\approx 5.74\\\\text{ g}$$",
    level: 2,
    topic: "edexcel-unit-1",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / June 2025 Paper 1 Q5",
    createdAt: "2026-08-19"
  },
  {
    id: "q_ed_u1_l1_lv2_q9d_pcl_empirical-20260819",
    question: "A chloride of phosphorus contains $30.39\\%$ phosphorus and $69.61\\%$ chlorine by mass. Deduce its molecular formula and systematic name if its relative formula mass is $207.8\\text{ g mol}^{-1}$.\n*(Relative atomic masses: $\\text{P} = 31.0, \\text{Cl} = 35.5$)*",
    options: [
      { text: "Phosphorus trichloride (PCl₃)" },
      { text: "Phosphorus pentachloride (PCl₅)" },
      { text: "Diphosphorus tetrachloride (P₂Cl₄)", isCorrect: true },
      { text: "Phosphorus monochloride (PCl)" }
    ],
    correctAnswer: 2,
    explanation: "* First, calculate moles of each element:\n  * $n(\\text{P}) = \\frac{30.39}{31.0} = 0.9803\\text{ mol}$\n  * $n(\\text{Cl}) = \\frac{69.61}{35.5} = 1.9608\\text{ mol}$\n* Simplest mole ratio $\\text{P} : \\text{Cl} = 1 : 2 \\implies$ Empirical formula is $\\text{PCl}_2$ ($M_{\\text{emp}} = 31.0 + 71.0 = 102.0$).\n* Multiplier $y = \\frac{207.8}{102.0} = 2.04 \\approx 2$.\n* Molecular formula $= (\\text{PCl}_2) \\times 2 = \\text{P}_2\\text{Cl}_4$ (Diphosphorus tetrachloride).",
    level: 2,
    topic: "edexcel-unit-1",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / June 2026 Paper 1 Q6",
    createdAt: "2026-08-19"
  },
  {
    id: "ex_ed_u1_l1_lv2_6-2026",
    question: "A hydrated salt $\\text{MgSO}_4 \\cdot x\\text{H}_2\\text{O}$ has a molar mass of $246.4\\text{ g mol}^{-1}$. Given that the anhydrous mass of $\\text{MgSO}_4$ is $120.4\\text{ g mol}^{-1}$, what is the value of the integer $x$?",
    options: [
      { text: "5" },
      { text: "6" },
      { text: "7", isCorrect: true },
      { text: "8" }
    ],
    correctAnswer: 2,
    explanation: "* Mass of water of crystallisation $= 246.4 - 120.4 = 126.0\\text{ g mol}^{-1}$.\n* Number of moles of $\\text{H}_2\\text{O}$ ($x$) $= \\frac{126.0}{18.0} = 7$.\n* The formula is $\\text{MgSO}_4 \\cdot 7\\text{H}_2\\text{O}$ (Epsom salt).",
    level: 2,
    topic: "edexcel-unit-1",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / Jan 2025 Paper 1 Q6",
    createdAt: "2026-05-04T10:00:00Z"
  },
  {
    id: "ex_ed_u1_l1_lv2_7-2026",
    question: "Calculate the total number of ions present in $0.250\\text{ mol}$ of solid calcium phosphate, $\\text{Ca}_3(\\text{PO}_4)_2$.\n*(Avogadro constant $L = 6.02 \\times 10^{23}\\text{ mol}^{-1}$)*",
    options: [
      { text: "1.51 × 10²³" },
      { text: "3.01 × 10²³" },
      { text: "7.53 × 10²³", isCorrect: true },
      { text: "1.20 × 10²⁴" }
    ],
    correctAnswer: 2,
    explanation: "* One formula unit of $\\text{Ca}_3(\\text{PO}_4)_2$ dissociates into $3\\text{ Ca}^{2+}$ and $2\\text{ PO}_4^{3-}$ ions (total of 5 ions per formula unit).\n* Total moles of ions $= 0.250\\text{ mol} \\times 5 = 1.250\\text{ mol of ions}$.\n* Total number of ions $= 1.250 \\times (6.02 \\times 10^{23}) = 7.525 \\times 10^{23} \\approx 7.53 \\times 10^{23}$.",
    level: 2,
    topic: "edexcel-unit-1",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / June 2025 Paper 1 Q7",
    createdAt: "2026-05-04T10:00:00Z"
  },
  {
    id: "ex_ed_u1_l1_lv2_8-2026",
    question: "In a titration, $25.0\\text{ cm}^3$ of $0.120\\text{ mol dm}^{-3}$ sodium hydroxide solution neutralises $15.0\\text{ cm}^3$ of sulfuric acid solution:\n$$2\\text{NaOH(aq)} + \\text{H}_2\\text{SO}_4\\text{(aq)} \\rightarrow \\text{Na}_2\\text{SO}_4\\text{(aq)} + 2\\text{H}_2\\text{O(l)}$$\nWhat is the concentration of the sulfuric acid?",
    options: [
      { text: "0.100 mol dm⁻³", isCorrect: true },
      { text: "0.200 mol dm⁻³" },
      { text: "0.050 mol dm⁻³" },
      { text: "0.150 mol dm⁻³" }
    ],
    correctAnswer: 0,
    explanation: "* Moles of $\\text{NaOH} = C \\times V = 0.120 \\times 0.0250 = 0.00300\\text{ mol}$.\n* From the $2 : 1$ mole ratio, moles of $\\text{H}_2\\text{SO}_4 = \\frac{0.00300}{2} = 0.00150\\text{ mol}$.\n* Concentration of $\\text{H}_2\\text{SO}_4 = \\frac{n}{V} = \\frac{0.00150}{0.0150} = 0.100\\text{ mol dm}^{-3}$.",
    level: 2,
    topic: "edexcel-unit-1",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / Jan 2025 Paper 1 Q8",
    createdAt: "2026-05-05T10:00:00Z"
  },
  {
    id: "ex_ed_u1_l1_lv2_9-2026",
    question: "A solution of hydrochloric acid has a concentration of $0.500\\text{ mol dm}^{-3}$. What volume of this acid, in $\\text{cm}^3$, contains exactly $0.0250\\text{ mol}$ of $\\text{HCl}$?",
    options: [
      { text: "12.5 cm³" },
      { text: "25.0 cm³" },
      { text: "50.0 cm³", isCorrect: true },
      { text: "100 cm³" }
    ],
    correctAnswer: 2,
    explanation: "* $V = \\frac{n}{C} = \\frac{0.0250\\text{ mol}}{0.500\\text{ mol dm}^{-3}} = 0.0500\\text{ dm}^3$.\n* Converting to $\\text{cm}^3$: $0.0500 \\times 1000 = 50.0\\text{ cm}^3$.",
    level: 2,
    topic: "edexcel-unit-1",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / Jan 2025 Paper 1 Q7",
    createdAt: "2026-05-10T10:00:00Z"
  },
  {
    id: "ex_ed_u1_l1_lv2_10-2026",
    question: "Calculate the mass of potassium hydroxide, $\\text{KOH}$, required to prepare $250\\text{ cm}^3$ of a $0.200\\text{ mol dm}^{-3}$ solution.\n*(Relative formula mass of $\\text{KOH} = 56.1\\text{ g mol}^{-1}$)*",
    options: [
      { text: "2.81 g", isCorrect: true },
      { text: "5.61 g" },
      { text: "11.2 g" },
      { text: "28.1 g" }
    ],
    correctAnswer: 0,
    explanation: "* $n = C \\times V = 0.200\\text{ mol dm}^{-3} \\times 0.250\\text{ dm}^3 = 0.0500\\text{ mol}$.\n* $\\text{Mass} = n \\times M = 0.0500\\text{ mol} \\times 56.1\\text{ g mol}^{-1} = 2.805\\text{ g} \\approx 2.81\\text{ g}$.",
    level: 2,
    topic: "edexcel-unit-1",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / June 2026 Paper 1 Q8",
    createdAt: "2026-05-10T10:00:00Z"
  },
  {
    id: "ex_ed_u1_l1_lv2_11-2026",
    question: "Calcium carbonate decomposes on heating according to the equation:\n$$\\text{CaCO}_3\\text{(s)} \\rightarrow \\text{CaO(s)} + \\text{CO}_2\\text{(g)}$$\nWhat mass of calcium oxide is formed when $20.0\\text{ g}$ of calcium carbonate is completely decomposed?\n*(Molar masses: $\\text{CaCO}_3 = 100.1\\text{ g mol}^{-1}, \\text{CaO} = 56.1\\text{ g mol}^{-1}$)*",
    options: [
      { text: "8.80 g" },
      { text: "11.2 g", isCorrect: true },
      { text: "15.0 g" },
      { text: "20.0 g" }
    ],
    correctAnswer: 1,
    explanation: "* $n(\\text{CaCO}_3) = \\frac{20.0\\text{ g}}{100.1\\text{ g mol}^{-1}} = 0.1998\\text{ mol}$.\n* From the $1 : 1$ mole ratio, $n(\\text{CaO}) = 0.1998\\text{ mol}$.\n* $\\text{Mass of CaO} = 0.1998 \\times 56.1\\text{ g mol}^{-1} = 11.21\\text{ g} \\approx 11.2\\text{ g}$.",
    level: 2,
    topic: "edexcel-unit-1",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / Jan 2025 Paper 1 Q9",
    createdAt: "2026-05-11T10:00:00Z"
  },
  {
    id: "ex_ed_u1_l1_lv2_12-2026",
    question: "A solution of copper(II) sulfate is diluted by taking $50.0\\text{ cm}^3$ of a $2.00\\text{ mol dm}^{-3}$ stock solution and adding distilled water to make a total volume of $500.0\\text{ cm}^3$. What is the concentration of the diluted solution?",
    options: [
      { text: "0.100 mol dm⁻³" },
      { text: "0.200 mol dm⁻³", isCorrect: true },
      { text: "0.400 mol dm⁻³" },
      { text: "1.00 mol dm⁻³" }
    ],
    correctAnswer: 1,
    explanation: "* Using the dilution formula $C_1 V_1 = C_2 V_2$:\n* $C_2 = \\frac{C_1 V_1}{V_2} = \\frac{2.00 \\times 50.0}{500.0} = 0.200\\text{ mol dm}^{-3}$.",
    level: 2,
    topic: "edexcel-unit-1",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / Jan 2025 Paper 1 Q8",
    createdAt: "2026-05-16T10:00:00Z"
  },
  {
    id: "ex_ed_u1_l1_lv2_13-2026",
    question: "What mass of sodium chloride, $\\text{NaCl}$, is required to prepare $100\\text{ cm}^3$ of an aqueous solution containing a chloride ion concentration of $0.400\\text{ mol dm}^{-3}$?\n*(Molar mass: $\\text{NaCl} = 58.5\\text{ g mol}^{-1}$)*",
    options: [
      { text: "1.17 g" },
      { text: "2.34 g", isCorrect: true },
      { text: "4.68 g" },
      { text: "5.85 g" }
    ],
    correctAnswer: 1,
    explanation: "* 1 mole of $\\text{NaCl}$ yields 1 mole of $\\text{Cl}^-$, so $[\\text{NaCl}] = 0.400\\text{ mol dm}^{-3}$.\n* Moles of $\\text{NaCl} = C \\times V = 0.400\\text{ mol dm}^{-3} \\times 0.100\\text{ dm}^3 = 0.0400\\text{ mol}$.\n* $\\text{Mass} = 0.0400\\text{ mol} \\times 58.5\\text{ g mol}^{-1} = 2.34\\text{ g}$.",
    level: 2,
    topic: "edexcel-unit-1",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / June 2025 Paper 1 Q9",
    createdAt: "2026-05-16T10:00:00Z"
  },
  {
    id: "ex_ed_u1_l1_lv2_14-2026",
    question: "Which of the following contains the same number of molecules as $4.40\\text{ g}$ of carbon dioxide, $\\text{CO}_2$ ($M_r = 44.0$)?",
    options: [
      { text: "2.80 g of N₂ (Mr = 28.0)", isCorrect: true },
      { text: "3.20 g of SO₂ (Mr = 64.0)" },
      { text: "1.60 g of CH₄ (Mr = 16.0)" },
      { text: "4.40 g of N₂O (Mr = 44.0)" }
    ],
    correctAnswer: 0,
    explanation: "* Moles of $\\text{CO}_2 = \\frac{4.40}{44.0} = 0.100\\text{ mol}$.\n* For $\\text{N}_2$: $n = \\frac{2.80}{28.0} = 0.100\\text{ mol}$.\n* Since both have $0.100\\text{ mol}$, they contain the exact same number of molecules ($0.100 \\times L$).",
    level: 2,
    topic: "edexcel-unit-1",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / Jan 2025 Paper 1 Q10",
    createdAt: "2026-05-17T10:00:00Z"
  },
  {
    id: "q_ed_u1_l1_lv2_q8a_titr_vol-20260821",
    question: "What is the minimum volume, in $\\\\text{cm}^3$, of $0.500\\\\text{ mol dm}^{-3}$ nitric acid ($\\\\text{HNO}_3$) required to react completely with $25.0\\\\text{ cm}^3$ of $2.00\\\\text{ mol dm}^{-3}$ aqueous ammonia ($\\\\text{NH}_3$)?",
    options: [
      { text: "10.0 cm³" },
      { text: "50.0 cm³" },
      { text: "100 cm³", isCorrect: true },
      { text: "250 cm³" }
    ],
    correctAnswer: 2,
    explanation: "* The balanced equation is: $\\\\text{NH}_3\\\\text{(aq)} + \\\\text{HNO}_3\\\\text{(aq)} \\\\rightarrow \\\\text{NH}_4\\\\text{NO}_3\\\\text{(aq)}$.\n* Moles of $\\\\text{NH}_3 = C \\\\times V = 2.00\\\\text{ mol dm}^{-3} \\\\times 0.0250\\\\text{ dm}^3 = 0.0500\\\\text{ mol}$.\n* From the $1:1$ ratio, moles of $\\\\text{HNO}_3$ required $= 0.0500\\\\text{ mol}$.\n* $\\\\text{Volume of } \\\\text{HNO}_3 = \\\\frac{n}{C} = \\\\frac{0.0500\\\\text{ mol}}{0.500\\\\text{ mol dm}^{-3}} = 0.100\\\\text{ dm}^3 = 100\\\\text{ cm}^3$.",
    level: 2,
    topic: "edexcel-unit-1",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / June 2026 Paper 1 Q11",
    createdAt: "2026-08-21T10:00:00Z"
  },
  {
    id: "q_ed_u1_l1_lv2_q8b_solid_prep-20260821",
    question: "Which experimental procedure is most appropriate to obtain a pure, dry sample of solid ammonium nitrate ($\\\\text{NH}_4\\\\text{NO}_3$) from the aqueous reaction mixture after neutralisation?",
    options: [
      { text: "Evaporate the solution until it is saturated, allow it to cool and crystallise, filter the crystals, and dry them between filter papers", isCorrect: true },
      { text: "Heat the solution to complete dryness in an evaporating basin over a roaring Bunsen flame" },
      { text: "Add concentrated hydrochloric acid to precipitate the solid, filter, and dry in an oven" },
      { text: "Perform fractional distillation to separate the ammonium nitrate vapor from water" }
    ],
    correctAnswer: 0,
    explanation: "* Heating to absolute dryness can cause thermal decomposition or violent explosions of ammonium nitrate.\n* Gently heating to saturation (crystallisation point) and allowing crystals to form slowly ensures high purity, followed by filtration and drying under mild conditions.",
    level: 2,
    topic: "edexcel-unit-1",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / June 2025 Paper 1 Q12",
    createdAt: "2026-08-21T10:05:00Z"
  },
  {
    id: "q_ed_u1_l1_lv2_q9c_coeff_sum-20260821",
    question: "Solid phosphorus pentachloride ($\\\\text{PCl}_5$) reacts vigorously with water to form phosphoric acid ($\\\\text{H}_3\\\\text{PO}_4$) and hydrochloric acid ($\\\\text{HCl}$).\nWhat is the sum of all stoichiometric coefficients when this equation is balanced using the simplest whole numbers?",
    options: [
      { text: "8" },
      { text: "10" },
      { text: "11", isCorrect: true },
      { text: "12" }
    ],
    correctAnswer: 2,
    explanation: "* The balanced equation is: $\\\\text{PCl}_5\\\\text{(s)} + 4\\\\text{H}_2\\\\text{O(l)} \\\\rightarrow \\\\text{H}_3\\\\text{PO}_4\\\\text{(aq)} + 5\\\\text{HCl(aq)}$.\n* The coefficients are: $1$ (for $\\\\text{PCl}_5$) $+ 4$ (for $\\\\text{H}_2\\\\text{O}$) $+ 1$ (for $\\\\text{H}_3\\\\text{PO}_4$) $+ 5$ (for $\\\\text{HCl}$).\n* $\\\\text{Sum} = 1 + 4 + 1 + 5 = 11$.",
    level: 2,
    topic: "edexcel-unit-1",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / Jan 2025 Paper 1 Q15",
    createdAt: "2026-08-21T10:10:00Z"
  },
  {
    id: "q_ed_u1_l1_lv2_q10b_gas_syringe_mod-20260821",
    question: "Which modification to the gas collection apparatus shown in the diagram would best prevent gas loss when starting the reaction between a metal and acid?",
    options: [
      { text: "Adding the acid through a sealed syringe fitted through the bung without opening it to the air", isCorrect: true },
      { text: "Using a larger conical flask with a wider neck to allow the bung to be replaced faster" },
      { text: "Using a lower concentration of acid so that the initial reaction is slower" },
      { text: "Replacing the water in the trough with aqueous sodium hydroxide solution" }
    ],
    correctAnswer: 0,
    explanation: "* Opening the flask to add acid allows gas to escape immediately.\n* Using a sealed dropping funnel or a syringe through the bung keeps the system completely airtight at all times, preventing any gas loss when the reaction starts.",
    level: 2,
    topic: "edexcel-unit-1",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / June 2026 Paper 1 Q16",
    createdAt: "2026-08-21T10:15:00Z"
  }
];



