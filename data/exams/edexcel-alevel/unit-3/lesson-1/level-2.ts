import { Question } from '../../../types';

export const level2Questions: Question[] = [
  {
    id: "ex_ed_u3_l1_lv2_1-2026",
    question: "A student performs a titration using a burette with an uncertainty of $\\pm 0.05\\text{ cm}^3$ per individual reading. If the initial burette reading was $1.50\\text{ cm}^3$ and the final reading was $26.50\\text{ cm}^3$ (titre $= 25.00\\text{ cm}^3$), what is the percentage apparatus uncertainty in this titre measurement?",
    options: [
      { text: "0.20%" },
      { text: "0.40%", isCorrect: true },
      { text: "0.80%" },
      { text: "2.00%" }
    ],
    correctAnswer: 1,
    explanation: "* Delivering a titre requires TWO readings (initial and final), so the total absolute uncertainty is $2 \\times (\\pm 0.05) = \\pm 0.10\\text{ cm}^3$.\n* $\\text{Percentage Uncertainty} = \\frac{\\text{Total Uncertainty}}{\\text{Measured Volume}} \\times 100 = \\frac{0.10}{25.00} \\times 100 = \\mathbf{0.40\\%}$.",
    level: 2,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH13/01 / Oct 2025 Paper 3 Q4",
    createdAt: "2026-08-25T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv2_2-2026",
    question: "Why is a volumetric pipette or burette rinsed with the specific solution it will contain before use, whereas a conical flask is rinsed ONLY with deionized water?",
    options: [
      { text: "The conical flask is made of different glass" },
      { text: "Rinsing the pipette/burette with water would dilute the solution and alter its concentration; residual water in the conical flask does not change the total moles of analyte delivered by the pipette", isCorrect: true },
      { text: "Water reacts chemically with the conical flask" },
      { text: "Indicators only work in wet glass" }
    ],
    correctAnswer: 1,
    explanation: "* Water droplets inside a pipette or burette dilute the standard solution, altering its molarity.\n* In contrast, residual deionized water in the conical flask does not change the exact number of moles of acid/alkali transferred into it from the pipette.",
    level: 2,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH13/01 / June 2026 Paper 3 Q5",
    createdAt: "2026-08-25T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv2_3-2026",
    question: "When preparing a standard solution of a solid acid in a $250.0\\text{ cm}^3$ volumetric flask, which procedure ensures maximum quantitative transfer and accuracy?",
    options: [
      { text: "Weigh by difference, dissolve solid in beaker with minimal deionized water, transfer using a funnel, rinse beaker, rod, and funnel with washings into the flask, make up to mark, invert flask repeatedly", isCorrect: true },
      { text: "Pour dry solid directly into the volumetric flask through a dry funnel and fill to the neck with hot water" },
      { text: "Fill the flask with water first, then add the solid" },
      { text: "Boil the volumetric flask to speed up dissolution" }
    ],
    correctAnswer: 0,
    explanation: "* Quantitative transfer requires dissolving in a beaker first and including all rinsings (washings) of beaker, funnel, and stirring rod, making up dropwise to the graduation mark at eye level, and inverting $10-20$ times to ensure thorough mixing.",
    level: 2,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH13/01 / Jan 2026 Paper 3 Q3",
    createdAt: "2026-08-26T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv2_4-2026",
    question: "In the purification of a crude liquid halogenoalkane by liquid-liquid extraction, aqueous sodium hydrogencarbonate ($\\text{NaHCO}_3\\text{(aq)}$) is shaken with the organic layer. What is the chemical purpose of this wash?",
    options: [
      { text: "To dry the organic product" },
      { text: "To neutralize and remove residual acidic impurities (such as unreacted HBr or H₂SO₄), releasing CO₂ gas", isCorrect: true },
      { text: "To precipitate halogenoalkane crystals" },
      { text: "To oxidize unreacted alcohol" }
    ],
    correctAnswer: 1,
    explanation: "* Sodium hydrogencarbonate is a mild base that neutralizes acid contaminants: $\\text{H}^+ + \\text{HCO}_3^- \\rightarrow \\text{H}_2\\text{O} + \\text{CO}_2\\text{(g)}$, removing acids into the aqueous layer.",
    level: 2,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH13/01 / Oct 2025 Paper 3 Q5",
    createdAt: "2026-08-26T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv2_5-2026",
    question: "Why is an electrically heated mantle or water bath preferred over a direct Bunsen burner naked flame when heating organic reaction mixtures (e.g., in alcohol oxidation or esterification)?",
    options: [
      { text: "Bunsen flames are not hot enough" },
      { text: "Most organic compounds and solvents (such as ethanol, ethers, and alkanes) are highly volatile and flammable, presenting a severe fire risk with naked flames", isCorrect: true },
      { text: "Heating mantles neutralize chemical vapors" },
      { text: "Glassware cracks automatically in Bunsen flames" }
    ],
    correctAnswer: 1,
    explanation: "* Organic vapors are flammable and can ignite upon contact with an open flame; electric heating mantles or hot water/oil baths eliminate the ignition source.",
    level: 2,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH13/01 / June 2025 Paper 3 Q6",
    createdAt: "2026-08-27T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv2_6-2026",
    question: "When setting up a distillation apparatus, where should the bulb of the thermometer be positioned accurately?",
    options: [
      { text: "Immersed completely in the boiling liquid mixture at the bottom of the flask" },
      { text: "Directly opposite the side-arm opening leading into the condenser (to measure the true temperature of the vapor entering the condenser)", isCorrect: true },
      { text: "At the very top of the still-head open to the air" },
      { text: "Inside the receiving beaker" }
    ],
    correctAnswer: 1,
    explanation: "* The thermometer bulb must be positioned level with the entry to the condenser side-arm so that it is bathed by the exiting vapor to record the accurate boiling point of the distillate fraction.",
    level: 2,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH13/01 / Jan 2026 Paper 3 Q4",
    createdAt: "2026-08-27T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv2_7-2026",
    question: "During a simple distillation, why is it essential to ensure that the distillation apparatus is NOT completely sealed or airtight at the receiver adapter end?",
    options: [
      { text: "To allow air into the distillate to cool it down" },
      { text: "A completely sealed system being heated will rapidly build up immense gas and vapor pressure, leading to an explosive shattering of the glassware", isCorrect: true },
      { text: "To let unreacted alcohol escape" },
      { text: "To prevent the thermometer from falling out" }
    ],
    correctAnswer: 1,
    explanation: "* Heating a completely closed/sealed glassware system results in dangerous pressure accumulation, which can cause catastrophic explosive failure of the glass joints.",
    level: 2,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH13/01 / Oct 2025 Paper 3 Q11",
    createdAt: "2026-09-04T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv2_8-2026",
    question: "A student performs a thermochemical calorimetry experiment burning ethanol to heat $100.0\\text{ g}$ of water in a copper beaker. The experimental value of $\\Delta H_{\\text{comb}}$ obtained is significantly LESS exothermic than the accepted Data Booklet value. What is the major systematic error causing this discrepancy?",
    options: [
      { text: "The copper beaker had too high a heat capacity" },
      { text: "Significant heat losses to the surrounding air and incomplete combustion of the ethanol fuel (depositing black soot on the bottom of the beaker)", isCorrect: true },
      { text: "The ethanol absorbed too much moisture from the atmosphere" },
      { text: "The thermometer reading was too high" }
    ],
    correctAnswer: 1,
    explanation: "* Primary sources of error in spirit burner calorimetry include radiant heat loss to surroundings, draughts, heating the copper can, and incomplete combustion (soot formation) yielding less energy.",
    level: 2,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH13/01 / June 2026 Paper 3 Q12",
    createdAt: "2026-09-04T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv2_9-2026",
    question: "When measuring the initial rate of the 'disappearing cross' reaction between sodium thiosulfate and hydrochloric acid ($\text{Na}_2\text{S}_2\text{O}_3 + 2\text{HCl} \rightarrow 2\text{NaCl} + \text{SO}_2 + \text{S(s)} + \text{H}_2\text{O}$), how is the rate of reaction approximated?",
    options: [
      { text: "Rate ∝ Total time taken (t)" },
      { text: "Rate ∝ 1 / time taken (1/t) for the yellow sulfur precipitate to obscure the black cross", isCorrect: true },
      { text: "Rate ∝ Mass of beaker" },
      { text: "Rate ∝ Logarithm of volume" }
    ],
    correctAnswer: 1,
    explanation: "* Because a fixed amount of solid colloidal sulfur is required to obscure the black cross, the reaction rate is inversely proportional to time: $\\text{Rate} \\approx \\frac{1}{t}$.",
    level: 2,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH13/01 / Jan 2026 Paper 3 Q9",
    createdAt: "2026-09-05T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv2_10-2026",
    question: "In the preparation of an organic solid by crystallization, why must the product crystals collected in a Büchner funnel under reduced pressure be washed with a small volume of ICE-COLD solvent rather than warm solvent?",
    options: [
      { text: "Ice-cold solvent freezes the filter paper" },
      { text: "Ice-cold solvent washes away soluble surface impurities while minimizing the re-dissolving and loss of the pure organic product crystals", isCorrect: true },
      { text: "Warm solvent would react with the porcelain funnel" },
      { text: "Ice-cold solvent turns the crystals into a liquid" }
    ],
    correctAnswer: 1,
    explanation: "* Washing with warm solvent would dissolve significant quantities of the recrystallized product, severely reducing percentage yield; ice-cold solvent removes mother liquor impurities with minimal dissolution.",
    level: 2,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH13/01 / Oct 2025 Paper 3 Q12",
    createdAt: "2026-09-05T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv2_11-2026",
    question: "How does a student distinguish experimentally between sodium chloride (NaCl(aq)) and sodium nitrate (NaNO₃(aq)) using a single reagent test?",
    options: [
      { text: "Add phenolphthalein indicator" },
      { text: "Add acidified silver nitrate solution (AgNO₃(aq)): NaCl produces a dense white precipitate of AgCl that dissolves in dilute ammonia, whereas NaNO₃ gives NO precipitate", isCorrect: true },
      { text: "Perform a flame test" },
      { text: "Add dilute hydrochloric acid" }
    ],
    correctAnswer: 1,
    explanation: "* $\\text{Cl}^-$ forms an insoluble white precipitate of $\\text{AgCl}$ with $\\text{Ag}^+$, whereas all nitrate ($\text{NO}_3^-$) salts are fully water-soluble, giving no precipitate.",
    level: 2,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH13/01 / June 2025 Paper 3 Q13",
    createdAt: "2026-09-06T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv2_12-2026",
    question: "During heating under reflux of an organic reaction mixture, why must a stopper NEVER be placed in the top of the upright Liebig condenser?",
    options: [
      { text: "To allow the cooling water to escape" },
      { text: "To prevent hazardous pressure build-up inside the closed apparatus as vapors heat and expand, which could blow the apparatus apart", isCorrect: true },
      { text: "To allow air to oxidize the products" },
      { text: "To enable quick addition of extra solvent" }
    ],
    correctAnswer: 1,
    explanation: "* Reflux condensers must remain open to the atmosphere at the top; vapors condense and drip back while allowing thermal expansion without dangerous pressure buildup.",
    level: 2,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH13/01 / Jan 2026 Paper 3 Q10",
    createdAt: "2026-09-06T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv2_13-2026",
    question: "A volumetric pipette has an uncertainty of $\\pm 0.06\\text{ cm}^3$. What is the percentage uncertainty when measuring exactly $25.0\\text{ cm}^3$ of solution using this pipette?",
    options: [
      { text: "0.24%", isCorrect: true },
      { text: "0.12%" },
      { text: "0.48%" },
      { text: "0.06%" }
    ],
    correctAnswer: 0,
    explanation: "* Percentage uncertainty $= \\frac{\\text{uncertainty}}{\\text{measured value}} \\times 100$.\n* Percentage uncertainty $= \\frac{0.06}{25.0} \\times 100 = \\mathbf{0.24\\%}$.",
    level: 2,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH13/01 / June 2026 Paper 3 Q14",
    createdAt: "2026-09-14T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv2_14-2026",
    question: "When preparing $250\\text{ cm}^3$ of standard solution, why must the solute be dissolved in a beaker of distilled water first, rather than added directly to the volumetric flask?",
    options: [
      { text: "To prevent the flask from breaking due to heat of solution" },
      { text: "To ensure complete dissolution of the solid, as mixing in a narrow-necked volumetric flask is difficult and undissolved solid will lead to an inaccurate concentration", isCorrect: true },
      { text: "To filter out insoluble impurities" },
      { text: "To make sure the solution is alkaline" }
    ],
    correctAnswer: 1,
    explanation: "* Solid particles are hard to dissolve directly in the volumetric flask due to the narrow neck restricting efficient stirring.\n* Dissolving in a beaker first ensures a homogeneous solution before transferring.",
    level: 2,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH13/01 / Oct 2025 Paper 3 Q13",
    createdAt: "2026-09-14T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv2_15-2026",
    question: "Which of the following methods is most suitable for collecting a sample of hydrogen gas ($H_2$) in the laboratory?",
    options: [
      { text: "Downward delivery (upward displacement of air) because hydrogen is denser than air" },
      { text: "Upward delivery (downward displacement of air) or over water, because hydrogen is significantly less dense than air and virtually insoluble in water", isCorrect: true },
      { text: "In an open beaker left on the bench" },
      { text: "By condensing it into a cold trap at 0 °C" }
    ],
    correctAnswer: 1,
    explanation: "* Hydrogen gas has a very low density ($M_r = 2$) and escapes upwards.\n* Therefore, it is collected by upward delivery (where the tube points up into an inverted test tube) or over water since it doesn't dissolve in it.",
    level: 2,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH13/01 / Jan 2026 Paper 3 Q11",
    createdAt: "2026-09-15T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv2_16-2026",
    question: "How do Group 1 hydrogencarbonates (e.g., $NaHCO_3$) differ from Group 1 carbonates (excluding $Li_2CO_3$) upon heating?",
    options: [
      { text: "Carbonates decompose to form oxides, while hydrogencarbonates do not decompose" },
      { text: "Hydrogencarbonates readily decompose to release carbon dioxide and water vapor, whereas carbonates are thermally stable and do not decompose under Bunsen burner temperatures", isCorrect: true },
      { text: "Both decompose to release oxygen gas" },
      { text: "Hydrogencarbonates turn into solid sodium metal" }
    ],
    correctAnswer: 1,
    explanation: "* Hydrogencarbonates undergo thermal decomposition at relatively low temperatures:\n* $2\\text{NaHCO}_3\\text{(s)} \\rightarrow \\text{Na}_2\\text{CO}_3\\text{(s)} + \\text{CO}_2\\text{(g)} + \\text{H}_2\\text{O(g)}$.\n* Group 1 carbonates (like $\\text{Na}_2\\text{CO}_3$) are very stable and require extremely high temperatures to decompose.",
    level: 2,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH13/01 / June 2025 Paper 3 Q15",
    createdAt: "2026-09-15T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv2_17-2026",
    question: "When separating a mixture of trichloromethane (density $= 1.49\\text{ g cm}^{-3}$) and water (density $= 1.00\\text{ g cm}^{-3}$) in a separating funnel, which layer is the organic layer and where is it located?",
    options: [
      { text: "The organic layer is at the top because it contains organic compounds" },
      { text: "The organic layer is at the bottom because trichloromethane has a higher density than water", isCorrect: true },
      { text: "They form a single miscible phase and cannot be separated" },
      { text: "The organic layer turns into a gas and escapes" }
    ],
    correctAnswer: 1,
    explanation: "* Trichloromethane is immiscible with water and has a significantly higher density.\n* Consequently, it forms the lower layer in the separating funnel, which can be run off first.",
    level: 2,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH13/01 / Oct 2025 Paper 3 Q14",
    createdAt: "2026-09-16T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv2_18-2026",
    question: "During a simple distillation experiment, why must the thermometer bulb be positioned level with the side-arm of the distillation head rather than dipped into the boiling liquid?",
    options: [
      { text: "To prevent the thermometer from cracking in hot liquid" },
      { text: "To measure the exact temperature of the vapor entering the condenser, which corresponds to the boiling point of the distillate being collected", isCorrect: true },
      { text: "To ensure the thermometer is kept wet" },
      { text: "To measure the rate of boiling" }
    ],
    correctAnswer: 1,
    explanation: "* The purpose of the thermometer is to record the temperature of the vapor that is about to condense.\n* Dipping it into the liquid would measure the temperature of the boiling mixture (which may be higher due to impurities or superheating).",
    level: 2,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH13/01 / Jan 2026 Paper 3 Q12",
    createdAt: "2026-09-16T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv2_19-2026",
    question: "A student prepares a standard solution by transferring a dissolved solid from a beaker to a volumetric flask. Why is it essential to wash the beaker with distilled water and transfer the washings to the flask?",
    options: [
      { text: "To clean the beaker for the next student" },
      { text: "To ensure that all of the solute is transferred to the volumetric flask, preventing a lower-than-expected concentration", isCorrect: true },
      { text: "To dilute the solution before mixing" },
      { text: "To lower the pH of the solution" }
    ],
    correctAnswer: 1,
    explanation: "* Any droplets of solution left on the walls of the beaker contain dissolved solute.\n* Rinsing the beaker multiple times and adding the washings to the volumetric flask guarantees quantitative transfer.",
    level: 2,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH13/01 / June 2026 Paper 3 Q16",
    createdAt: "2026-09-17T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv2_20-2026",
    question: "When concentrated sulfuric acid (H₂SO₄) is added to solid potassium iodide (KI), purple vapors of iodine and a gas smelling of rotten eggs are evolved. What is the identity of this gas, and what does this reaction show about iodide ions?",
    options: [
      { text: "Sulfur dioxide (SO₂); shows iodide is a weak reducing agent" },
      { text: "Hydrogen sulfide (H₂S); shows iodide is a powerful reducing agent capable of reducing sulfur from +6 to -2", isCorrect: true },
      { text: "Hydrogen iodide (HI); shows iodide is stable" },
      { text: "Oxygen (O₂); shows iodide is an oxidizing agent" }
    ],
    correctAnswer: 1,
    explanation: "* Iodide is a strong reducing agent and reduces concentrated sulfuric acid ($\text{H}_2\text{SO}_4$, S at $+6$) all the way down to hydrogen sulfide ($\text{H}_2\text{S}$, S at $-2$), which has a distinct rotten egg odor. Purple iodine fumes ($I_2$) are also produced.",
    level: 2,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH13/01 / June 2025 Paper 3 Q22",
    createdAt: "2026-09-24T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv2_21-2026",
    question: "In the 'disappearing cross' experiment to measure the rate of reaction between sodium thiosulfate ($Na_2S_2O_3$) and hydrochloric acid, what substance forms the precipitate that obscures the cross?",
    options: [
      { text: "Sodium chloride precipitate" },
      { text: "Insoluble colloidal sulfur", isCorrect: true },
      { text: "Sulfur dioxide gas bubbles" },
      { text: "Calcium sulfate" }
    ],
    correctAnswer: 1,
    explanation: "* The reaction: $\\text{Na}_2\\text{S}_2\\text{O}_3\\text{(aq)} + 2\\text{HCl(aq)} \\rightarrow 2\\text{NaCl(aq)} + \\text{SO}_2\\text{(g)} + \\text{S(s)} + \\text{H}_2\\text{O(l)}$.\n* The slow formation of insoluble yellow/white **colloidal sulfur** precipitate turns the solution opaque, hiding the black cross marked underneath.",
    level: 2,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH13/01 / Oct 2025 Paper 3 Q18",
    createdAt: "2026-09-25T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv2_22-2026",
    question: "Why is the experimental value for the enthalpy of combustion of an alcohol, obtained using a simple spirit burner and copper calorimeter, always less exothermic than the data book value?",
    options: [
      { text: "Because the reaction is endothermic in practice" },
      { text: "Due to heat loss to the surroundings, incomplete combustion of the alcohol, and evaporation of the alcohol from the wick", isCorrect: true },
      { text: "Because water has a low heat capacity" },
      { text: "Because the copper cup absorbs all of the heat permanently" }
    ],
    correctAnswer: 1,
    explanation: "* Heat energy escapes to the air rather than transferring to the water, the burner wick loses mass by evaporation without burning, and incomplete combustion produces carbon soot instead of maximum heat release.",
    level: 2,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH13/01 / Jan 2026 Paper 3 Q17",
    createdAt: "2026-09-25T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv2_23-2026",
    question: "During a redox titration of iron(II) ions ($Fe^{2+}$) with potassium manganate(VII) ($KMnO_4$), why is no indicator added?",
    options: [
      { text: "Because the reaction does not have an endpoint" },
      { text: "Because potassium manganate(VII) acts as a self-indicator, changing from a deep purple reactant to a colorless product, with the first excess drop imparting a permanent pale pink color", isCorrect: true },
      { text: "Because starch indicator is already built into the Fe²⁺ solution" },
      { text: "Because indicators decompose in acid" }
    ],
    correctAnswer: 1,
    explanation: "* Manganate(VII) ions ($MnO_4^-$) are intensely purple. When reduced by $Fe^{2+}$ under acidic conditions, they form colorless $Mn^{2+}$ ions.\n* The endpoint is reached when all $Fe^{2+}$ has reacted, and one drop of excess $MnO_4^-$ gives the flask a permanent pale pink tint.",
    level: 2,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH13/01 / June 2026 Paper 3 Q23",
    createdAt: "2026-09-26T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv2_24-2026",
    question: "A student fills a volumetric flask with water to prepare a standard solution. Which of the following describes the correct position of the water level relative to the graduation mark on the neck of the flask?",
    options: [
      { text: "The top of the meniscus should touch the graduation mark" },
      { text: "The bottom of the curved meniscus must sit exactly on the graduation line when viewed at eye level", isCorrect: true },
      { text: "The meniscus should be 2 mm above the graduation mark" },
      { text: "The graduation mark should be in the middle of the liquid column" }
    ],
    correctAnswer: 1,
    explanation: "* Volumetric glassware is calibrated to contain or deliver a volume when the bottom of the meniscus is aligned with the graduation line at eye level.",
    level: 2,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH13/01 / Oct 2025 Paper 3 Q19",
    createdAt: "2026-09-26T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv2_25-2026",
    question: "What are the solubility trends for Group 2 sulfates and Group 2 hydroxides as you descend the group from magnesium to barium?",
    options: [
      { text: "Sulfate solubility increases, hydroxide solubility decreases" },
      { text: "Sulfate solubility decreases (BaSO₄ is highly insoluble), while hydroxide solubility increases (Ba(OH)₂ is soluble)", isCorrect: true },
      { text: "Both solubilities increase" },
      { text: "Both solubilities decrease" }
    ],
    correctAnswer: 1,
    explanation: "* Descending Group 2, the lattice enthalpy of sulfates decreases slower than hydration enthalpy, making sulfates less soluble.\n* Conversely, Group 2 hydroxides become increasingly soluble down the group.",
    level: 2,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH13/01 / Jan 2026 Paper 3 Q18",
    createdAt: "2026-09-27T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv2_26-2026",
    question: "Why should conical flasks and beakers never be used to measure accurate volumes of liquids in quantitative analysis?",
    options: [
      { text: "Because they cannot hold hot liquids" },
      { text: "Because they are wide vessels, so a small change in height corresponds to a large change in volume, leading to very high percentage uncertainties", isCorrect: true },
      { text: "Because they react with acid" },
      { text: "Because they are not made of Pyrex" }
    ],
    correctAnswer: 1,
    explanation: "* Conical flasks and beakers are designed for mixing and holding liquids, not measuring.\n* The graduation marks on them are only rough approximations ($\pm 5\%$ or worse) due to their wide surface areas.",
    level: 2,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH13/01 / June 2025 Paper 3 Q24",
    createdAt: "2026-09-27T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv2_27-june2026",
    question: "In an experiment to measure the enthalpy change of a reaction in a polystyrene cup, why are temperature readings taken every minute for 3 minutes before adding the second reactant at the 4th minute?",
    options: [
      { text: "To establish a reliable initial temperature baseline for the solution before reaction, allowing accurate extrapolation to find the true temperature change", isCorrect: true },
      { text: "To give the thermometer time to reach boiling point" },
      { text: "To ensure that all ambient air inside the cup has been displaced" },
      { text: "To allow the first reactant to react with atmospheric nitrogen" }
    ],
    correctAnswer: 0,
    explanation: "* Recording temperatures at $1, 2, 3\\\\text{ minutes}$ establishes the ambient baseline drift before mixing.\n* Extrapolating both the initial and cooling curves to the minute of mixing (minute 4) compensates for heat exchange with the surroundings.",
    level: 2,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH13/01 / June 2026 Paper 3 Q5",
    createdAt: "2026-06-21T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv2_28-june2026",
    question: "A student performs four titration trials with the following burette results:\nTrial 1: 24.60 cm³; Trial 2: 23.90 cm³; Trial 3: 24.00 cm³; Trial 4: 23.95 cm³\nWhat is the mean titre value that should be used in the stoichiometric calculation?",
    options: [
      { text: "23.95 cm³", isCorrect: true },
      { text: "24.11 cm³" },
      { text: "24.60 cm³" },
      { text: "23.90 cm³" }
    ],
    correctAnswer: 0,
    explanation: "* Concordant titres are those within $\\\\pm 0.10\\\\text{ cm}^3$ of each other.\n* Trials 2 ($23.90$), 3 ($24.00$), and 4 ($23.95$) are concordant, while Trial 1 ($24.60$) is an anomalous rough titre and must be discarded.\n* $\\\\text{Mean titre} = \\\\frac{23.90 + 24.00 + 23.95}{3} = 23.95\\\\text{ cm}^3$.",
    level: 2,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH13/01 / June 2025 Paper 3 Q6",
    createdAt: "2026-06-21T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv2_29-june2026",
    question: "How can a student determine visually that an organic liquid has been completely dried by an anhydrous drying agent such as anhydrous magnesium sulfate (MgSO₄)?",
    options: [
      { text: "The cloudy liquid becomes completely clear, and newly added drying agent swirls freely as a fine powder rather than clumping together", isCorrect: true },
      { text: "The drying agent changes colour from blue to pink" },
      { text: "Gas bubbles stop evolving from the mixture" },
      { text: "The organic liquid freezes into a solid" }
    ],
    correctAnswer: 0,
    explanation: "* Water suspended in organic liquids forms a cloudy emulsion.\n* Anhydrous $\\\\text{MgSO}_4$ binds water and clumps.\n* When dry, the liquid becomes crystal clear and excess drying agent floats freely like snow when swirled.",
    level: 2,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH13/01 / June 2026 Paper 3 Q7",
    createdAt: "2026-06-21T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv2_30-june2026",
    question: "Why must ethanal be distilled off immediately into an ice-cooled receiver during the oxidation of ethanol by acidified potassium dichromate(VI)?",
    options: [
      { text: "Ethanal has a lower boiling point (21 °C) than ethanol and water, and immediate distillation prevents its further oxidation into ethanoic acid", isCorrect: true },
      { text: "Ethanal explodes if heated in an open flask" },
      { text: "Ice acts as an essential catalyst for the reaction" },
      { text: "Ethanal reacts with glass at room temperature" }
    ],
    correctAnswer: 0,
    explanation: "* Ethanal lacks hydrogen bonding and boils at $21^\\\\circ\\\\text{C}$ (much lower than ethanol, $78^\\\\circ\\\\text{C}$).\n* Distilling it off as soon as it forms removes it from contact with the oxidising agent, preventing secondary oxidation to ethanoic acid.\n* The ice-bath prevents evaporation of the volatile aldehyde.",
    level: 2,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH13/01 / June 2025 Paper 3 Q8",
    createdAt: "2026-06-21T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv2_31-interactive",
    question: "In an acid-base titration, a student uses a burette to neutralise 25.0 cm³ of sodium carbonate solution with dilute hydrochloric acid. The initial burette reading was 1.20 cm³. Use the interactive burette scale reader below to determine the final reading and the total volume of acid delivered.",
    options: [
      { text: "21.65 cm³ (Final: 22.85 cm³)", isCorrect: true },
      { text: "22.85 cm³ (Final: 24.05 cm³)" },
      { text: "23.15 cm³ (Final: 24.35 cm³)" },
      { text: "20.45 cm³ (Final: 21.65 cm³)" }
    ],
    correctAnswer: 0,
    explanation: "* The bottom of the liquid meniscus on the burette aligns with $22.85\\text{ cm}^3$\n* Delivered titre volume $= 22.85 - 1.20 = 21.65\\text{ cm}^3$\n* Titration records must always be cited to two decimal places ending in $.00$ or $.05$",
    level: 2,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "practical",
    source: "Pearson Edexcel IAL Chemistry WCH13/01 / June 2026 Paper 3 Q9",
    createdAt: "2026-06-23T10:00:00Z",
    apparatusScaleConfig: {
      type: "burette",
      targetValue: 22.85,
      initialReading: 1.20,
      unit: "cm³",
      minScale: 22.0,
      maxScale: 23.5,
      step: 0.5,
      subdivision: 0.05,
      tolerance: 0.05,
      title: "Unit 3 Titration Burette Reading (22.85 cm³)",
      liquidColor: "rgba(239, 68, 68, 0.4)"
    },
    markingScheme: {
      marks: 2,
      points: [
        { mark: 1, keyword: "22.85", text: "Read final burette volume accurately as 22.85 cm³." },
        { mark: 1, keyword: "21.65 cm3", text: "Calculate delivered volume: 22.85 - 1.20 = 21.65 cm³." }
      ],
      examinerTips: "Always read at eye level with the bottom of the meniscus to avoid parallax error."
    }
  },
  {
    id: "ex_ed_u3_l1_lv2_32-interactive",
    question: "A student measures the temperature rise in a neutralisation reaction using a polystyrene cup calorimeter. The initial temperature of the acid was 21.2 °C. Use the interactive thermometer scale reader below to determine the maximum temperature reached and calculate the temperature change (ΔT).",
    options: [
      { text: "Maximum: 34.6 °C; ΔT = +13.4 °C", isCorrect: true },
      { text: "Maximum: 35.0 °C; ΔT = +13.8 °C" },
      { text: "Maximum: 34.2 °C; ΔT = +13.0 °C" },
      { text: "Maximum: 36.4 °C; ΔT = +15.2 °C" }
    ],
    correctAnswer: 0,
    explanation: "* The top of the thermometer liquid thread shows $34.6\\text{ }^\\circ\\text{C}$\n* Temperature rise $\\Delta T = T_\\text{max} - T_\\text{initial} = 34.6 - 21.2 = +13.4\\text{ }^\\circ\\text{C}$\n* A positive $\\Delta T$ confirms that neutralisation is an exothermic process",
    level: 2,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "practical",
    source: "Pearson Edexcel IAL Chemistry WCH13/01 / June 2025 Paper 3 Q10",
    createdAt: "2026-06-23T10:00:00Z",
    apparatusScaleConfig: {
      type: "thermometer",
      targetValue: 34.6,
      initialReading: 21.2,
      unit: "°C",
      minScale: 20.0,
      maxScale: 40.0,
      step: 2.0,
      subdivision: 0.2,
      tolerance: 0.1,
      title: "Calorimetry Maximum Temperature Reading (34.6 °C)",
      liquidColor: "rgba(239, 68, 68, 0.7)"
    },
    markingScheme: {
      marks: 2,
      points: [
        { mark: 1, keyword: "34.6", text: "Record maximum temperature as 34.6 °C." },
        { mark: 1, keyword: "13.4 °C / 13.4 K", text: "Calculate temperature change: ΔT = 34.6 - 21.2 = 13.4 °C." }
      ],
      examinerTips: "Read the top of the thermometer meniscus at eye level."
    }
  }
];


