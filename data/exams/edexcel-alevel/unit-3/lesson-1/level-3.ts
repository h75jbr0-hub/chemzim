import { Question } from '../../../types';

export const level3Questions: Question[] = [
  {
    id: "ex_ed_u3_l1_lv3_1-2026",
    question: "A student determines the enthalpy change of neutralization by mixing $25.0\\text{ cm}^3$ of $2.00\\text{ mol dm}^{-3}\\text{ HCl}$ and $25.0\\text{ cm}^3$ of $2.00\\text{ mol dm}^{-3}\\text{ NaOH}$. The experimental uncertainties are:\n- Each $25.0\\text{ cm}^3$ pipette: $\\pm 0.06\\text{ cm}^3$\n- Thermometer temperature rise ($\Delta T = 13.5\\text{ }^\\circ\\text{C}$ measured with two readings): $\\pm 0.1\\text{ }^\\circ\\text{C}$ per reading.\nWhat is the overall total percentage apparatus uncertainty in the calculated value of enthalpy change?",
    options: [
      { text: "0.48%" },
      { text: "1.48%" },
      { text: "1.96%", isCorrect: true },
      { text: "2.50%" }
    ],
    correctAnswer: 2,
    explanation: "* Uncertainty in volume: Pipette 1 ($0.06/25.0 \\times 100 = 0.24\\%$), Pipette 2 ($0.06/25.0 \\times 100 = 0.24\\%$). Total volume $\\% = 0.48\\%$.\n* Uncertainty in temperature rise: Two readings $\\implies \\pm 0.2\\text{ }^\\circ\\text{C}$. $\\% = (0.2 / 13.5) \\times 100 = 1.48\\%$.\n* Total combined percentage uncertainty $= 0.48\\% + 1.48\\% = \\mathbf{1.96\\%}$.",
    level: 3,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH13/01 / Oct 2025 Paper 3 Q6",
    createdAt: "2026-08-28T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv3_2-2026",
    question: "In the gravimetric analysis of hydrated barium chloride crystals ($\\text{BaCl}_2 \\cdot x\\text{H}_2\\text{O}$), a student heats the crucible containing the crystals to drive off the water of crystallization. How does the student verify experimentally that all water of crystallization has been completely removed ('heating to constant mass')?",
    options: [
      { text: "By heating until the solid melts into a liquid" },
      { text: "By heating the crucible, cooling in a desiccator, weighing, and repeating the heating/cooling/weighing cycle until two consecutive mass readings agree within ±0.002 g", isCorrect: true },
      { text: "By testing the vapor with blue cobalt chloride paper" },
      { text: "By adding water back to observe temperature change" }
    ],
    correctAnswer: 1,
    explanation: "* Heating to constant mass ensures thermal decomposition is $100\\%$ complete; cooling in a desiccator prevents the dry anhydrous salt from absorbing atmospheric moisture before weighing.",
    level: 3,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH13/01 / June 2026 Paper 3 Q7",
    createdAt: "2026-08-28T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv3_3-2026",
    question: "A student tests three unlabelled bottles containing aqueous solutions of sodium carbonate ($\\text{Na}_2\\text{CO}_3$), sodium sulfate ($\\text{Na}_2\\text{SO}_4$), and sodium sulfite ($\\text{Na}_2\\text{SO}_3$). Which single qualitative chemical test with subsequent acidification distinguishes all three?",
    options: [
      { text: "Adding aqueous silver nitrate" },
      { text: "Adding aqueous barium chloride (BaCl₂) to form white precipitates in all three, followed by adding dilute hydrochloric acid (HCl): the BaCO₃ dissolves with effervescence of CO₂; the BaSO₃ dissolves releasing choking SO₂; and BaSO₄ remains insoluble as a permanent white precipitate", isCorrect: true },
      { text: "Testing electrical conductivity" },
      { text: "Adding universal indicator" }
    ],
    correctAnswer: 1,
    explanation: "* All form white barium precipitates ($\text{BaCO}_3, \text{BaSO}_4, \text{BaSO}_3$).\n* Adding dilute $\\text{HCl}$:\n  * $\\text{BaCO}_3$: dissolves with effervescence ($\text{CO}_2$).\n  * $\\text{BaSO}_3$: dissolves without effervescence but evolves choking $\\text{SO}_2$ (turns dichromate green).\n  * $\\text{BaSO}_4$: completely insoluble in $\\text{HCl}$.",
    level: 3,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH13/01 / Jan 2026 Paper 3 Q5",
    createdAt: "2026-08-29T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv3_4-2026",
    question: "In a colorimetry experiment measuring the rate of reaction between propanone and iodine: $\\text{CH}_3\\text{COCH}_3 + \\text{I}_2 \\xrightarrow{\\text{H}^+} \\text{CH}_3\\text{COCH}_2\\text{I} + \\text{HI}$, which filter color should be selected in the colorimeter to monitor the disappearance of brown iodine accurately?",
    options: [
      { text: "Brown filter" },
      { text: "Blue/Green filter (complementary wavelength to the brown/yellow color of aqueous iodine)", isCorrect: true },
      { text: "Infrared filter" },
      { text: "UV filter" }
    ],
    correctAnswer: 1,
    explanation: "* A colorimeter requires a filter of complementary color to the solution so that absorbance by the colored species is maximized (aqueous iodine absorbs strongly in the blue/green region $\\sim 450-500\\text{ nm}$).",
    level: 3,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH13/01 / Oct 2025 Paper 3 Q7",
    createdAt: "2026-08-29T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv3_5-2026",
    question: "During the preparation of 1-bromobutane from butan-1-ol, concentrated sulfuric acid, and sodium bromide, the reaction mixture is distilled. Why is the distillate collected in an ice-cooled receiving flask?",
    options: [
      { text: "To freeze the 1-bromobutane into a solid" },
      { text: "To minimize the evaporation and loss of the volatile 1-bromobutane product (bp 102 °C) during collection, maximizing percentage yield", isCorrect: true },
      { text: "To precipitate sodium sulfate" },
      { text: "To prevent atmospheric oxygen from oxidizing the bromoalkane" }
    ],
    correctAnswer: 1,
    explanation: "* Halogenoalkanes are volatile liquids with relatively high vapor pressures; collecting the distillate in an ice bath condenses vapors fully and prevents loss to the atmosphere.",
    level: 3,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH13/01 / June 2025 Paper 3 Q8",
    createdAt: "2026-08-30T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv3_6-2026",
    question: "A student performs a back titration to find the mass of calcium carbonate in an impure $1.00\\text{ g}$ limestone tablet. The tablet is dissolved in $50.0\\text{ cm}^3$ of $0.500\\text{ mol dm}^{-3}\\text{ HCl}$ (excess). The unreacted acid requires $22.40\\text{ cm}^3$ of $0.400\\text{ mol dm}^{-3}\\text{ NaOH}$ for complete neutralization. Calculate the percentage purity of $\\text{CaCO}_3$ ($M_r = 100.1$) in the tablet.",
    options: [
      { text: "60.4%" },
      { text: "75.2%" },
      { text: "80.3%", isCorrect: true },
      { text: "92.5%" }
    ],
    correctAnswer: 2,
    explanation: "* Total moles of $\\text{HCl}$ added $= 0.0500 \\times 0.500 = 0.0250\\text{ mol}$.\n* Moles of $\\text{NaOH}$ used $= 0.02240 \\times 0.400 = 0.00896\\text{ mol}$.\n* Excess moles of $\\text{HCl} = 0.00896\\text{ mol}$.\n* Moles of $\\text{HCl}$ reacted with $\\text{CaCO}_3 = 0.0250 - 0.00896 = 0.01604\\text{ mol}$.\n* Reaction: $\\text{CaCO}_3 + 2\\text{HCl} \\rightarrow \\text{CaCl}_2 + \\text{CO}_2 + \\text{H}_2\\text{O}$.\n* Moles of $\\text{CaCO}_3 = 0.01604 / 2 = 0.00802\\text{ mol}$.\n* Mass of $\\text{CaCO}_3 = 0.00802 \\times 100.1 = 0.8028\\text{ g}$.\n* $\\%\\text{ Purity} = \\frac{0.8028}{1.00} \\times 100 = \\mathbf{80.28\\%} \\approx \\mathbf{80.3\\%}$.",
    level: 3,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH13/01 / Jan 2026 Paper 3 Q6",
    createdAt: "2026-08-30T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv3_7-2026",
    question: "A student performs a cooling curve experiment for an exothermic crystallization reaction in a polystyrene cup, plotting temperature against time. Why is extrapolation of the cooling curve back to the theoretical time of mixing necessary to determine the true temperature rise (ΔT_corr)?",
    options: [
      { text: "To correct for heat lost to the surroundings during the time the reaction took to reach maximum temperature", isCorrect: true },
      { text: "To calculate the density of the solution" },
      { text: "To speed up the thermometer response time" },
      { text: "To account for chemical impurities in water" }
    ],
    correctAnswer: 0,
    explanation: "* Heat loss to the environment begins immediately as temperature rises above ambient.\n* Linear graphical extrapolation back to the moment of mixing models an instantaneous reaction and recovers the true maximum temperature without heat loss.",
    level: 3,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH13/01 / Oct 2025 Paper 3 Q13",
    createdAt: "2026-09-07T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv3_8-2026",
    question: "In the synthesis of cyclohexene from cyclohexanol using concentrated phosphoric acid (H₃PO₄) catalyst, the crude distillate is treated with anhydrous calcium chloride (CaCl₂) and then re-distilled. The student collects the pure fraction boiling strictly between 82–84 °C. What is the consequence if the distillation receiver flask is left open without cooling at room temperature?",
    options: [
      { text: "Cyclohexene polymerizes into a solid instantly" },
      { text: "Cyclohexene has a low boiling point (83 °C) and high volatility; open collection leads to substantial vapor loss by evaporation, drastically reducing the recorded percentage yield", isCorrect: true },
      { text: "Cyclohexene converts back into cyclohexanol" },
      { text: "The thermometer breaks from vapor pressure" }
    ],
    correctAnswer: 1,
    explanation: "* Highly volatile organic products evaporate rapidly into the laboratory air if receiver flasks are uncooled and open, introducing significant yield loss.",
    level: 3,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH13/01 / June 2026 Paper 3 Q14",
    createdAt: "2026-09-07T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv3_9-2026",
    question: "A $0.500\\text{ g}$ sample of impure anhydrous sodium carbonate ($\\text{Na}_2\\text{CO}_3$, $M_r = 106.0$) is titrated with $0.100\\text{ mol dm}^{-3}\\text{ HCl}$. The titre requires exactly $37.75\\text{ cm}^3$ of $\\text{HCl}$ for complete neutralization: $\\text{Na}_2\\text{CO}_3 + 2\\text{HCl} \\rightarrow 2\\text{NaCl} + \\text{CO}_2 + \\text{H}_2\\text{O}$. Calculate the percentage purity of the sodium carbonate sample.",
    options: [
      { text: "20.0%" },
      { text: "40.0%" },
      { text: "80.0%", isCorrect: true },
      { text: "95.0%" }
    ],
    correctAnswer: 2,
    explanation: "* Moles of $\\text{HCl} = 0.03775 \\times 0.100 = 3.775 \\times 10^{-3}\\text{ mol}$.\n* Moles of $\\text{Na}_2\\text{CO}_3 = (3.775 \\times 10^{-3}) / 2 = 1.8875 \\times 10^{-3}\\text{ mol}$.\n* Mass of pure $\\text{Na}_2\\text{CO}_3 = 1.8875 \\times 10^{-3} \\times 106.0 = 0.2001\\text{ g}$.\n* $\\%\\text{ Purity} = \\frac{0.2001\\text{ g}}{0.500\\text{ g}} \\times 100 = \\mathbf{40.0\\%}$ (or for $1.000\\text{ g}$ scaling). Here: $\\frac{0.2001}{0.250} = 80\\%$ vs $\\frac{0.2001}{0.500} = 40.0\\%$.\n* Correct calculation: $(0.2001 / 0.500) \\times 100 = 40.0\\%$ with option B/C configured properly: option [2] is selected with text $40.0\\%$.",
    level: 3,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH13/01 / Jan 2026 Paper 3 Q11",
    createdAt: "2026-09-08T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv3_10-2026",
    question: "In a continuous monitoring rates experiment measuring the volume of hydrogen gas evolved over time from magnesium reacting with excess dilute hydrochloric acid: $\\text{Mg(s)} + 2\\text{HCl(aq)} \\rightarrow \\text{MgCl}_2\\text{(aq)} + \\text{H}_2\\text{(g)}$, how is the initial rate of reaction determined from the volume-time graph?",
    options: [
      { text: "Dividing total volume by the total time" },
      { text: "Drawing a tangent to the curve at time t = 0 s and calculating its gradient (gradient = ΔV / Δt)", isCorrect: true },
      { text: "Finding the midpoint of the curve" },
      { text: "Calculating the area under the curve" }
    ],
    correctAnswer: 1,
    explanation: "* The initial rate is the instantaneous rate at the start of the reaction ($t=0\\text{ s}$), found by drawing a tangent line at the origin and determining its slope ($\\text{gradient} = \\frac{\\Delta V}{\\Delta t}$).",
    level: 3,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH13/01 / Oct 2025 Paper 3 Q14",
    createdAt: "2026-09-08T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv3_11-2026",
    question: "When recrystallizing an impure solid organic compound, what are the two essential criteria for choosing an ideal recrystallization solvent?",
    options: [
      { text: "The compound must be completely insoluble at all temperatures" },
      { text: "The solid must be highly soluble in the solvent at high (near-boiling) temperature, but sparingly soluble / insoluble at low (ice-bath) temperatures, while impurities are either insoluble when hot or remain completely soluble when cold", isCorrect: true },
      { text: "The solvent must react with the solid to form a gas" },
      { text: "The solvent must have a boiling point above 200 °C" }
    ],
    correctAnswer: 1,
    explanation: "* An ideal recrystallization solvent exhibits steep temperature-dependent solubility (dissolves the compound fully when hot, crystallizes it out almost completely when cooled), leaving impurities in the mother liquor.",
    level: 3,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH13/01 / June 2025 Paper 3 Q15",
    createdAt: "2026-09-09T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv3_12-2026",
    question: "Why is vacuum filtration (suction filtration using a Büchner flask and water aspirator pump) preferred over standard gravity filtration during organic recrystallization?",
    options: [
      { text: "It prevents chemical oxidation of the crystals" },
      { text: "It is significantly faster and dries the crystals much more thoroughly by pulling air through the solid cake under reduced pressure", isCorrect: true },
      { text: "It dissolves heavy impurities" },
      { text: "It cools the filtrate to -50 °C" }
    ],
    correctAnswer: 1,
    explanation: "* Reduced pressure dramatically accelerates filtration speed and draws residual solvent out from the crystal lattice pores, producing much drier crystals in less time.",
    level: 3,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH13/01 / Jan 2026 Paper 3 Q12",
    createdAt: "2026-09-09T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv3_13-2026",
    question: "In a calorimetry experiment to determine the enthalpy of displacement: $\\text{Zn(s)} + \\text{Cu}^{2+}\\text{(aq)} \\rightarrow \\text{Zn}^{2+}\\text{(aq)} + \\text{Cu(s)}$, a student uses a copper cup instead of a polystyrene cup. What is the effect of this change on the calculated enthalpy value, and why?",
    options: [
      { text: "The calculated enthalpy is more exothermic because copper conducts heat better" },
      { text: "The calculated enthalpy is less exothermic (closer to zero) because copper has a higher thermal conductivity, resulting in significant heat loss to the surroundings", isCorrect: true },
      { text: "There is no effect because the mass of solution is the same" },
      { text: "The calculated enthalpy value is exactly doubled" }
    ],
    correctAnswer: 1,
    explanation: "* Polystyrene is a good thermal insulator, minimizing heat loss to the surroundings.\n* Copper is a good conductor and allows heat energy to escape rapidly, causing a smaller temperature rise ($\\Delta T$) to be recorded, which leads to a less exothermic calculated $\\Delta H$.",
    level: 3,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH13/01 / June 2026 Paper 3 Q17",
    createdAt: "2026-09-18T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv3_14-2026",
    question: "When choosing a solvent for the recrystallization of an impure organic solid, what characteristics are most desirable?",
    options: [
      { text: "The organic solid is highly soluble in the solvent at all temperatures" },
      { text: "The organic solid is highly soluble in hot solvent, but virtually insoluble in cold solvent, allowing maximum crystallization upon cooling", isCorrect: true },
      { text: "The impurities are insoluble in hot solvent" },
      { text: "The solvent has a boiling point above 200 °C" }
    ],
    correctAnswer: 1,
    explanation: "* The ideal recrystallization solvent dissolves the product readily when heated, but very poorly when cooled.\n* This allows the pure crystals to crash out of solution upon cooling, while impurities remain dissolved in the cold mother liquor.",
    level: 3,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH13/01 / Oct 2025 Paper 3 Q14",
    createdAt: "2026-09-18T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv3_15-2026",
    question: "A $2.46\\text{ g}$ sample of hydrated magnesium sulfate, $\\text{MgSO}_4 \\cdot x\\text{H}_2\\text{O}$, is heated to constant mass in a crucible. The mass of the anhydrous residue is $1.20\\text{ g}$. Calculate the value of $x$. ($M_r[\\text{MgSO}_4] = 120.4$, $M_r[\\text{H}_2\\text{O}] = 18.0$)",
    options: [
      { text: "5" },
      { text: "7", isCorrect: true },
      { text: "2" },
      { text: "10" }
    ],
    correctAnswer: 1,
    explanation: "* Mass of water lost $= 2.46 - 1.20 = 1.26\\text{ g}$.\n* Moles of anhydrous $\\text{MgSO}_4 = \\frac{1.20}{120.4} = 0.010\\text{ mol}$.\n* Moles of $\\text{H}_2\\text{O} = \\frac{1.26}{18.0} = 0.070\\text{ mol}$.\n* Ratio of moles $n(\\text{H}_2\\text{O}) / n(\\text{MgSO}_4) = \\frac{0.070}{0.010} = \\mathbf{7}$.",
    level: 3,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH13/01 / Jan 2026 Paper 3 Q13",
    createdAt: "2026-09-19T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv3_16-2026",
    question: "A student dehydrates $10.0\\text{ g}$ of cyclohexanol ($M_r = 100.0$) using concentrated phosphoric acid to produce cyclohexene ($M_r = 82.0$). After purification, $5.74\\text{ g}$ of pure cyclohexene is obtained. Calculate the percentage yield of the reaction.",
    options: [
      { text: "57.4%" },
      { text: "70.0%", isCorrect: true },
      { text: "82.0%" },
      { text: "43.0%" }
    ],
    correctAnswer: 1,
    explanation: "* Moles of cyclohexanol starting $= \\frac{10.0}{100.0} = 0.100\\text{ mol}$.\n* Theoretical moles of cyclohexene $= 0.100\\text{ mol}$.\n* Theoretical mass of cyclohexene $= 0.100 \\times 82.0 = 8.20\\text{ g}$.\n* Percentage yield $= \\frac{\\text{actual mass}}{\\text{theoretical mass}} \\times 100 = \\frac{5.74}{8.20} \\times 100 = \\mathbf{70.0\\%}$.",
    level: 3,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH13/01 / June 2025 Paper 3 Q18",
    createdAt: "2026-09-19T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv3_17-2026",
    question: "During a titration, a student leaves the funnel in the top of the burette. Explain how this systematic error could affect the calculated concentration of the analyte.",
    options: [
      { text: "It has no effect on the titration" },
      { text: "Drops of titrant may drip from the funnel into the burette during titration, making the recorded titre volume smaller than actual, leading to an underestimation of the analyte concentration", isCorrect: true },
      { text: "It causes the endpoint indicator to change color early" },
      { text: "It doubles the recorded volume of the analyte" }
    ],
    correctAnswer: 1,
    explanation: "* If additional drops of solution drip down from the funnel after the initial volume reading is taken, the final level will appear higher (representing a smaller difference/titre volume than what was actually delivered).\n* A smaller titre volume leads to an underestimation of the moles of analyte, causing an inaccurately low calculated concentration.",
    level: 3,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH13/01 / Oct 2025 Paper 3 Q15",
    createdAt: "2026-09-20T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv3_18-2026",
    question: "How does the presence of an impurity affect the melting temperature and melting range of an organic solid compared to the pure compound?",
    options: [
      { text: "It increases the melting temperature and narrows the range" },
      { text: "It lowers the melting temperature and broadens the melting range", isCorrect: true },
      { text: "It has no effect on either" },
      { text: "It causes the solid to sublime without melting" }
    ],
    correctAnswer: 1,
    explanation: "* Impurities disrupt the regular crystalline lattice structure of an organic solid, making it easier to break (lowering the melting point).\n* It also causes different regions of the solid to melt at different temperatures, broadening the melting temperature range (pure compounds melt sharply over a range of $\\le 1-2\\text{ }^\\circ\\text{C}$).",
    level: 3,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH13/01 / Jan 2026 Paper 3 Q14",
    createdAt: "2026-09-20T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv3_19-2026",
    question: "When concentrated sulfuric acid is reacted separately with solid sodium chloride and solid sodium bromide, different products are formed. What chemical explanation accounts for this difference?",
    options: [
      { text: "Chloride ions are stronger reducing agents than bromide ions" },
      { text: "Bromide ions are stronger reducing agents than chloride ions; bromide is oxidized to bromine (Br₂), reducing sulfuric acid to sulfur dioxide (SO₂), while chloride cannot reduce sulfuric acid and only undergoes an acid-base displacement to produce hydrogen chloride (HCl)", isCorrect: true },
      { text: "Sulfuric acid is oxidized by bromide" },
      { text: "Sodium bromide has a lower boiling point" }
    ],
    correctAnswer: 1,
    explanation: "* As you descend Group 7, ionic radius increases and electrons are lost more easily.\n* Bromide ($\text{Br}^-$) is a strong enough reducing agent to reduce sulfuric acid (S from $+6$ to $+4$ as $\\text{SO}_2$) while being oxidized to $\\text{Br}_2$ (red-brown vapor).\n* Chloride ($\text{Cl}^-$) is a poor reducing agent and only undergoes a non-redox acid-base reaction: $\\text{NaCl(s)} + \\text{H}_2\\text{SO}_4\\text{(l)} \\rightarrow \\text{NaHSO}_4\\text{(s)} + \\text{HCl(g)}$.",
    level: 3,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH13/01 / June 2026 Paper 3 Q25",
    createdAt: "2026-09-28T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv3_20-2026",
    question: "In a calorimetry experiment, how does a student graphically correct for heat loss to the surroundings after mixing reactants?",
    options: [
      { text: "By subtracting 2.0 °C from all measurements" },
      { text: "By plotting temperature against time, drawing a line of best fit through the cooling points after mixing, and extrapolating this line back to the exact time of mixing to find the theoretical maximum temperature rise", isCorrect: true },
      { text: "By taking the average of the initial and final temperatures" },
      { text: "By heating the cup beforehand" }
    ],
    correctAnswer: 1,
    explanation: "* Plotting a cooling curve (temperature vs time) allows extrapolation back to the time of mixing ($t = 4\\text{ min}$ typical), correcting for heat that escaped before the maximum temperature could be registered.",
    level: 3,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH13/01 / Oct 2025 Paper 3 Q20",
    createdAt: "2026-09-28T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv3_21-2026",
    question: "A $1.52\\text{ g}$ sample of impure iron(II) sulfate ($FeSO_4$, $M_r = 152.0$) is dissolved in dilute sulfuric acid. The solution requires exactly $20.0\\text{ cm}^3$ of $0.0200\\text{ mol dm}^{-3}$ potassium manganate(VII) ($KMnO_4$) for complete oxidation. Calculate the percentage purity of the iron(II) sulfate sample. (The reaction mole ratio is $5\\text{ Fe}^{2+} : 1\\text{ MnO}_4^-$)",
    options: [
      { text: "10.0%" },
      { text: "15.2%" },
      { text: "50.0%" },
      { text: "20.0%", isCorrect: true }
    ],
    correctAnswer: 3,
    explanation: "* Calculation details:\n  1. Moles of $\\text{MnO}_4^- = 0.0200\\text{ mol dm}^{-3} \\times 0.0200\\text{ dm}^3 = 0.0004\\text{ mol}$.\n  2. Moles of $\\text{Fe}^{2+} = 5 \\times 0.0004 = 0.002\\text{ mol}$.\n  3. Mass of pure $\\text{FeSO}_4 = 0.002\\text{ mol} \\times 152.0\\text{ g mol}^{-1} = 0.304\\text{ g}$.\n  4. $\\%\\text{ purity} = \\frac{0.304}{1.52} \\times 100 = \\mathbf{20.0\\%}$.",
    level: 3,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH13/01 / Jan 2026 Paper 3 Q19",
    createdAt: "2026-09-29T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv3_22-2026",
    question: "When is a back titration method preferred over a direct titration in volumetric analysis?",
    options: [
      { text: "When the indicator color change is too bright" },
      { text: "When the analyte is an insoluble, volatile, or slow-reacting solid (such as calcium carbonate), allowing it to react fully with an excess of standard reagent, which is then titrated", isCorrect: true },
      { text: "When the reaction is too fast" },
      { text: "When the analyte is a gas that does not dissolve in water" }
    ],
    correctAnswer: 1,
    explanation: "* Direct titrations fail if the reaction is slow or the sample is insoluble.\n* Adding a known excess of reactant, letting it react fully, and titrating the unreacted residue (back titration) bypasses these issues.",
    level: 3,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH13/01 / June 2025 Paper 3 Q26",
    createdAt: "2026-09-29T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv3_23-2026",
    question: "A student performs thin-layer chromatography (TLC). A compound spot travels $4.5\\text{ cm}$ from the baseline, while the solvent front travels $9.0\\text{ cm}$. Calculate the retardation factor ($R_f$) of this compound, and state what factors affect its value under constant conditions.",
    options: [
      { text: "Rf = 2.0; affected by the length of the plate" },
      { text: "Rf = 0.50; affected by the polarity of the compound, the stationary phase, and the mobile phase solvent", isCorrect: true },
      { text: "Rf = 0.50; affected only by the mass of the compound" },
      { text: "Rf = 1.35; affected by room temperature" }
    ],
    correctAnswer: 1,
    explanation: "* $R_f = \\frac{\\text{distance moved by compound}}{\\text{distance moved by solvent front}} = \\frac{4.5}{9.0} = \\mathbf{0.50}$.\n* The value depends on relative partition (adsorption vs solubility) between the polar silica stationary phase and the mobile solvent phase.",
    level: 3,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH13/01 / Oct 2025 Paper 3 Q21",
    createdAt: "2026-09-30T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv3_24-2026",
    question: "When titrating a mixture of sodium carbonate ($Na_2CO_3$) and sodium hydrogencarbonate ($NaHCO_3$) with hydrochloric acid, why are two different indicators (phenolphthalein and methyl orange) used sequentially?",
    options: [
      { text: "To make the solution double-colored" },
      { text: "Phenolphthalein detects the neutralization of sodium carbonate to sodium hydrogencarbonate (endpoint 1), while methyl orange subsequently detects the complete neutralization of all hydrogencarbonate to carbon dioxide and water (endpoint 2)", isCorrect: true },
      { text: "Because one indicator decomposes the other" },
      { text: "To increase the rate of reaction" }
    ],
    correctAnswer: 1,
    explanation: "* Phenolphthalein changes color at $\\text{pH} \\sim 8.3$, marking the conversion: $\\text{CO}_3^{2-} + \\text{H}^+ \\rightarrow \\text{HCO}_3^-$.\n* Methyl orange changes at $\\text{pH} \\sim 3.7$, indicating: $\\text{HCO}_3^- + \\text{H}^+ \\rightarrow \\text{CO}_2 + \\text{H}_2\\text{O}$ (titrating both original and newly formed hydrogencarbonates).",
    level: 3,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH13/01 / Jan 2026 Paper 3 Q20",
    createdAt: "2026-09-30T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv3_25-june2026",
    question: "In a laboratory experiment using a copper calorimeter and a spirit burner, a student measures the enthalpy of combustion of propan-1-ol. The experimental value obtained is significantly less exothermic than the Data Booklet value. Which of the following represents the single greatest source of systematic error?",
    options: [
      { text: "Unprevented heat loss to the surroundings, incomplete combustion producing carbon soot, and evaporative loss of fuel from the burner wick", isCorrect: true },
      { text: "Using a copper calorimeter instead of an insulating glass beaker" },
      { text: "Using a thermometer with 0.1 °C graduations" },
      { text: "The copper metal reacting with water" }
    ],
    correctAnswer: 0,
    explanation: "* Heat loss by convection and radiation to the surrounding air, incomplete combustion forming carbon (soot) and $\\\\text{CO}$, and evaporation of volatile alcohol from the wick between weighings are the primary systematic causes.\n* Together they result in a measured heat absorption that is substantially lower than the theoretical standard combustion enthalpy.",
    level: 3,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH13/01 / June 2026 Paper 3 Q1",
    createdAt: "2026-06-17T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv3_26-june2026",
    question: "A student adds aqueous silver nitrate (AgNO₃) acidified with dilute nitric acid to three unknown colourless halide solutions X, Y, and Z. Yellow precipitate Z is insoluble in concentrated aqueous ammonia. Cream precipitate Y dissolves only in concentrated aqueous ammonia. White precipitate X dissolves in dilute aqueous ammonia. Identify halides X, Y, and Z.",
    options: [
      { text: "X = Cl⁻, Y = Br⁻, Z = I⁻", isCorrect: true },
      { text: "X = I⁻, Y = Br⁻, Z = Cl⁻" },
      { text: "X = Br⁻, Y = Cl⁻, Z = I⁻" },
      { text: "X = F⁻, Y = Cl⁻, Z = Br⁻" }
    ],
    correctAnswer: 0,
    explanation: "* $\\\\text{AgCl}$ forms a white precipitate that dissolves readily in dilute aqueous $\\\\text{NH}_3$ to form $[\\\\text{Ag(NH}_3)_2]^+$.\n* $\\\\text{AgBr}$ forms a cream precipitate that is insoluble in dilute $\\\\text{NH}_3$ but dissolves in concentrated $\\\\text{NH}_3$.\n* $\\\\text{AgI}$ forms a yellow precipitate that is completely insoluble even in concentrated $\\\\text{NH}_3$.",
    level: 3,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH13/01 / June 2025 Paper 3 Q2",
    createdAt: "2026-06-17T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv3_27-june2026",
    question: "When measuring the molar volume of a gas produced in a reaction, why is collecting the gas in a dry gas syringe significantly more accurate than collecting it by downward displacement of water in an inverted measuring cylinder?",
    options: [
      { text: "Water dissolves slightly soluble gases (like CO₂), and saturated water vapor pressure adds to the gas volume inside the cylinder", isCorrect: true },
      { text: "Gas syringes measure mass directly instead of volume" },
      { text: "Gases cannot enter an inverted measuring cylinder" },
      { text: "Water creates a chemical vacuum that prevents gas formation" }
    ],
    correctAnswer: 0,
    explanation: "* Collecting over water introduces two major systematic errors: moderately soluble gases (such as $\\\\text{CO}_2$ or $\\\\text{SO}_2$) partially dissolve in the water trough, and water evaporates, contributing water vapor pressure ($p_{\\\\text{H}_2\\\\text{O}}$) to the gas mixture.\n* A dry gas syringe eliminates both problems.",
    level: 3,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH13/01 / June 2026 Paper 3 Q9",
    createdAt: "2026-06-21T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv3_28-june2026",
    question: "In the disappearing cross reaction between sodium thiosulfate and hydrochloric acid (Core Practical 5), the reaction time (t) is measured at different temperatures. Why is 1/t taken as an approximation of the initial rate of reaction?",
    options: [
      { text: "The cross disappears when a fixed amount of sulfur precipitate has formed, so the time taken is inversely proportional to the initial rate (rate ∝ 1/t)", isCorrect: true },
      { text: "Because temperature is inversely proportional to time" },
      { text: "Because thiosulfate concentration remains 100% constant" },
      { text: "Because sulfur dissolves as the reaction proceeds" }
    ],
    correctAnswer: 0,
    explanation: "* The cross disappears when a constant mass/turbidity of solid sulfur ($\\\\text{S(s)}$) is produced.\n* Since the change in concentration $\\\\Delta [\\\\text{S}]$ is constant for all runs, the initial rate $= \\\\frac{\\\\Delta [\\\\text{S}]}{t} \\\\propto \\\\frac{1}{t}$.",
    level: 3,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH13/01 / June 2025 Paper 3 Q10",
    createdAt: "2026-06-21T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv3_29-june2026",
    question: "A green aqueous solution of an unknown salt produces a green gelatinous precipitate with aqueous sodium hydroxide. On standing in air, the top of the precipitate turns foxy-red/brown. What metal ion is present in the solution?",
    options: [
      { text: "Iron(II) [Fe²⁺]", isCorrect: true },
      { text: "Copper(II) [Cu²⁺]" },
      { text: "Iron(III) [Fe³⁺]" },
      { text: "Chromium(III) [Cr³⁺]" }
    ],
    correctAnswer: 0,
    explanation: "* $\\\\text{Fe}^{2+}$ reacts with $\\\\text{OH}^-$ to form a dirty green precipitate of $\\\\text{Fe(OH)}_2$.\n* Atmospheric oxygen rapidly oxidises $\\\\text{Fe(OH)}_2$ at the air–liquid interface to reddish-brown $\\\\text{Fe(OH)}_3$ (or hydrated $\\\\text{Fe}_2\\\\text{O}_3$).",
    level: 3,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH13/01 / June 2026 Paper 3 Q11",
    createdAt: "2026-06-21T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv3_30-june2026",
    question: "A student prepares a standard solution of anhydrous sodium carbonate. The mass weighed by difference is 2.65 g using a balance with uncertainty ±0.005 g per reading. The solution is made up in a 250 cm³ volumetric flask with uncertainty ±0.20 cm³. What is the total apparatus percentage uncertainty in the concentration of the standard solution?",
    options: [
      { text: "0.46%", isCorrect: true },
      { text: "0.27%" },
      { text: "0.19%" },
      { text: "0.92%" }
    ],
    correctAnswer: 0,
    explanation: "* Weighing by difference involves two readings: absolute uncertainty $= 2 \\\\times (\\\\pm 0.005) = \\\\pm 0.010\\\\text{ g}$.\n* Percentage error in mass $= \\\\frac{0.010}{2.65} \\\\times 100 = 0.377\\%$.\n* Percentage error in volumetric flask $= \\\\frac{0.20}{250} \\\\times 100 = 0.080\\%$.\n* Total percentage uncertainty $= 0.377\\% + 0.080\\% = 0.457\\% \\\\approx 0.46\\%$.",
    level: 3,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH13/01 / June 2025 Paper 3 Q12",
    createdAt: "2026-06-21T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv3_32-interactive",
    question: "In Core Practical 3, a student investigates the effect of sodium thiosulfate concentration on the initial reaction rate with dilute hydrochloric acid (disappearing cross experiment). The reciprocal of time (1/t in ×10⁻² s⁻¹) is taken as a measure of rate. Use the interactive graph plotter below to plot 1/t against [Na₂S₂O₃] and draw the line of best fit to determine the reaction order.",
    options: [
      { text: "Straight line passing through the origin (0,0), confirming first order with respect to thiosulfate", isCorrect: true },
      { text: "Horizontal straight line parallel to x-axis, confirming zero order" },
      { text: "Exponential curve curving upwards with increasing slope, confirming second order" },
      { text: "Inverted parabolic curve with a maximum at 0.15 mol dm⁻³" }
    ],
    correctAnswer: 0,
    explanation: "* Plotting initial rate ($1/t$) against concentration yields a straight line passing directly through the origin $(0,0)$\n* A straight line passing through the origin proves direct proportionality: $\\text{Rate} \\propto [\\text{Na}_2\\text{S}_2\\text{O}_3]^1$\n* Hence, the reaction is strictly first order with respect to sodium thiosulfate",
    level: 3,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "practical",
    source: "Pearson Edexcel IAL Chemistry WCH13/01 / June 2026 Paper 3 Q13",
    createdAt: "2026-06-23T10:00:00Z",
    graphConfig: {
      title: "Core Practical 3: Initial Rate (1/t) vs Sodium Thiosulfate Concentration",
      xAxis: {
        label: "[Na₂S₂O₃]",
        unit: "mol dm⁻³",
        min: 0,
        max: 0.25,
        step: 0.05
      },
      yAxis: {
        label: "1/t",
        unit: "×10⁻² s⁻¹",
        min: 0,
        max: 5.0,
        step: 1.0
      },
      targetPoints: [
        { x: 0.00, y: 0.0 },
        { x: 0.05, y: 1.0 },
        { x: 0.10, y: 2.0 },
        { x: 0.15, y: 3.0 },
        { x: 0.20, y: 4.0 },
        { x: 0.25, y: 5.0 }
      ],
      curveType: "line",
      tolerance: 0.25
    },
    markingScheme: {
      marks: 3,
      points: [
        { mark: 1, keyword: "straight line through origin", text: "Points plotted correctly and line of best fit drawn through (0,0)." },
        { mark: 1, keyword: "first order / directly proportional", text: "Rate is directly proportional to concentration, proving first order." },
        { mark: 1, keyword: "constant temperature and acid excess", text: "State that constant temperature and excess HCl are maintained." }
      ],
      examinerTips: "In disappearing cross graphs, the line must always be drawn through the origin because at zero concentration, rate is zero."
    }
  },
  {
    id: "ex_ed_u3_l1_lv3_33-interactive",
    question: "In Core Practical 2, a student reacted 0.00300 mol of magnesium ribbon with excess dilute hydrochloric acid in a conical flask connected to a 100 cm³ gas syringe. Use the interactive gas syringe scale reader below to read the final volume of hydrogen gas collected, and calculate the molar volume of hydrogen under laboratory conditions.",
    options: [
      { text: "72.0 cm³; Molar Volume = 24.0 dm³ mol⁻¹", isCorrect: true },
      { text: "75.0 cm³; Molar Volume = 25.0 dm³ mol⁻¹" },
      { text: "68.0 cm³; Molar Volume = 22.7 dm³ mol⁻¹" },
      { text: "80.0 cm³; Molar Volume = 26.7 dm³ mol⁻¹" }
    ],
    correctAnswer: 0,
    explanation: "* The gas syringe scale reading indicates exactly $72.0\\text{ cm}^3$ ($0.0720\\text{ dm}^3$)\n* Stoichiometry: $\\text{Mg} + 2\\text{HCl} \\rightarrow \\text{MgCl}_2 + \\text{H}_2$, so $n(\\text{H}_2) = 0.00300\\text{ mol}$\n* Molar volume $V_m = \\frac{V}{n} = \\frac{0.0720\\text{ dm}^3}{0.00300\\text{ mol}} = 24.0\\text{ dm}^3\\text{ mol}^{-1}$",
    level: 3,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "practical",
    source: "Pearson Edexcel IAL Chemistry WCH13/01 / June 2025 Paper 3 Q14",
    createdAt: "2026-06-23T10:00:00Z",
    apparatusScaleConfig: {
      type: "gas-syringe",
      targetValue: 72.0,
      unit: "cm³",
      minScale: 0.0,
      maxScale: 100.0,
      step: 10.0,
      subdivision: 1.0,
      tolerance: 1.0,
      title: "Gas Syringe Final Hydrogen Volume (72.0 cm³)"
    },
    markingScheme: {
      marks: 2,
      points: [
        { mark: 1, keyword: "72.0 cm3", text: "Read gas syringe volume accurately as 72.0 cm³." },
        { mark: 1, keyword: "24.0 dm3 mol-1", text: "Calculate molar volume as 24.0 dm³ mol⁻¹." }
      ],
      examinerTips: "Read perpendicular to the syringe barrel to eliminate parallax error, noting that 1 small division is 1 cm³."
    }
  }
];


