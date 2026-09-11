export const lessonQuiz = [
  // ==========================================
  // LEVEL 1: FOUNDATION (EASY - 3 Questions)
  // ==========================================
  {
    id: "EDX-AL-U3-L1-EASY-01",
    question: "Which piece of laboratory glassware has the smallest percentage uncertainty when delivering exactly 25.0 cm³ of solution?",
    options: [
      { text: "A 50 cm³ measuring cylinder (uncertainty ± 0.5 cm³)", isCorrect: false },
      { text: "A 25.0 cm³ volumetric pipette (uncertainty ± 0.06 cm³)", isCorrect: true },
      { text: "A 50.00 cm³ burette (uncertainty ± 0.10 cm³ for two readings)", isCorrect: false },
      { text: "A 100 cm³ glass conical flask", isCorrect: false }
    ],
    explanation: "* Percentage uncertainty = (uncertainty / reading) × 100%.\n* For the 25.0 cm³ volumetric pipette: (0.06 / 25.0) × 100% = 0.24%.\n* For the burette: (0.10 / 25.0) × 100% = 0.40%.\n* For the measuring cylinder: (0.5 / 25.0) × 100% = 2.00%.\n* The volumetric pipette offers the smallest percentage uncertainty."
  },
  {
    id: "EDX-AL-U3-L1-EASY-02",
    question: "Why is ethanol added to the reaction mixture when comparing the rates of hydrolysis of halogenoalkanes with aqueous silver nitrate?",
    options: [
      { text: "Ethanol acts as an acid catalyst for the hydrolysis", isCorrect: false },
      { text: "Ethanol prevents the silver halide precipitate from redissolving", isCorrect: false },
      { text: "Ethanol acts as a common solvent so the immiscible halogenoalkane and aqueous reagents form a single phase", isCorrect: true },
      { text: "Ethanol reacts with the halogenoalkane to produce an ester", isCorrect: false }
    ],
    explanation: "* Halogenoalkanes are largely non-polar and insoluble in water, forming two distinct immiscible layers with aqueous silver nitrate.\n* Ethanol has both a polar -OH group and a non-polar ethyl group, allowing it to dissolve both water and organic halogenoalkanes into a single homogenous solution."
  },
  {
    id: "EDX-AL-U3-L1-EASY-03",
    question: "What is the expected flame test colour for barium ions (Ba²⁺)?",
    options: [
      { text: "Crimson red", isCorrect: false },
      { text: "Lilac", isCorrect: false },
      { text: "Apple green", isCorrect: true },
      { text: "Brick red", isCorrect: false }
    ],
    explanation: "* Lithium (Li⁺) gives a crimson red flame.\n* Calcium (Ca²⁺) gives a brick-red flame.\n* Potassium (K⁺) gives a lilac flame.\n* Barium (Ba²⁺) gives an apple-green flame."
  },

  // ==========================================
  // LEVEL 2: APPLICATION (MEDIUM - 3 Questions)
  // ==========================================
  {
    id: "EDX-AL-U3-L1-MED-01",
    question: "When synthesizing 2-chloro-2-methylpropane, the crude product is washed with aqueous sodium hydrogencarbonate in a separating funnel. What is the reason for this step and what precaution must be taken?",
    options: [
      { text: "To dry the organic layer; invert without opening the tap", isCorrect: false },
      { text: "To neutralise unreacted concentrated hydrochloric acid; release the tap regularly to vent carbon dioxide gas", isCorrect: true },
      { text: "To oxidise unreacted alcohol; keep the stopper tightly sealed", isCorrect: false },
      { text: "To precipitate sodium chloride crystals; shake continuously for 1 hour", isCorrect: false }
    ],
    explanation: "* Aqueous NaHCO₃ reacts with residual acid: H⁺ + HCO₃⁻ → H₂O + CO₂.\n* The reaction generates carbon dioxide gas, causing substantial pressure buildup inside the closed funnel.\n* The funnel must be inverted and the tap opened repeatedly to vent CO₂ and prevent the stopper or tap from blowing out dangerously."
  },
  {
    id: "EDX-AL-U3-L1-MED-02",
    question: "In a calorimetry experiment, 50.0 cm³ of 1.00 mol dm⁻³ HCl is mixed with 50.0 cm³ of 1.00 mol dm⁻³ NaOH in a polystyrene cup. The temperature rises by 6.5 °C. Assuming the solution density is 1.00 g cm⁻³ and specific heat capacity c = 4.18 J g⁻¹ °C⁻¹, calculate the molar enthalpy change of neutralisation in kJ mol⁻¹.",
    options: [
      { text: "-27.2 kJ mol⁻¹", isCorrect: false },
      { text: "-54.3 kJ mol⁻¹", isCorrect: true },
      { text: "+54.3 kJ mol⁻¹", isCorrect: false },
      { text: "-108.6 kJ mol⁻¹", isCorrect: false }
    ],
    explanation: "* Total mass of solution m = (50.0 + 50.0) × 1.00 = 100.0 g.\n* Heat released q = m × c × ΔT = 100.0 × 4.18 × 6.5 = 2717 J = 2.717 kJ.\n* Moles of water formed = moles of limiting reagent = 1.00 × (50.0 / 1000) = 0.0500 mol.\n* Molar enthalpy ΔH = -q / n = -2.717 / 0.0500 = -54.34 kJ mol⁻¹."
  },
  {
    id: "EDX-AL-U3-L1-MED-03",
    question: "A student oxidises ethanol to produce ethanal (acetaldehyde). Why must the apparatus be arranged for simple distillation rather than heating under reflux?",
    options: [
      { text: "Ethanal has a higher boiling temperature than ethanol and would remain in the flask", isCorrect: false },
      { text: "Ethanal must be distilled off as soon as it forms to prevent it from undergoing further oxidation to ethanoic acid", isCorrect: true },
      { text: "Reflux apparatus generates too high a pressure for volatile aldehydes", isCorrect: false },
      { text: "Acidified dichromate is ineffective under reflux conditions", isCorrect: false }
    ],
    explanation: "* Ethanal lacks hydrogen bonding between its molecules, giving it a much lower boiling point (21 °C) than ethanol (78 °C).\n* Distilling immediately removes ethanal from the oxidising mixture.\n* If heated under reflux, ethanal would remain in contact with excess hot acidified sodium dichromate and be fully oxidised to ethanoic acid."
  },

  // ==========================================
  // LEVEL 3: HIGHER / EXAM CHALLENGE (2 Questions)
  // ==========================================
  {
    id: "EDX-AL-U3-L1-HARD-01",
    question: "A solid sample contains a mixture of potassium chloride and potassium iodide. Which sequence of tests uniquely confirms the presence of both halide ions?",
    options: [
      { text: "Add concentrated sulfuric acid; only chloride gives acidic misty fumes", isCorrect: false },
      { text: "Add dilute nitric acid followed by silver nitrate to form a precipitate; treat with dilute ammonia, filter the insoluble yellow AgI, then add dilute nitric acid to the filtrate to reform white AgCl", isCorrect: true },
      { text: "Add barium chloride solution; chloride gives a white precipitate while iodide forms a yellow precipitate", isCorrect: false },
      { text: "Heat the solid directly in a test tube and observe iodine sublimation", isCorrect: false }
    ],
    explanation: "* Silver nitrate precipitates both AgCl (white) and AgI (yellow).\n* Adding dilute ammonia selectively dissolves AgCl into the soluble complex [Ag(NH₃)₂]⁺(aq), leaving yellow AgI as an insoluble residue.\n* Filtering separates the yellow AgI (confirming iodide).\n* Acidifying the clear filtrate with dilute HNO₃ neutralises the ammonia ([Ag(NH₃)₂]⁺ + 2H⁺ → Ag⁺ + 2NH₄⁺), precipitating white AgCl and confirming chloride."
  },
  {
    id: "EDX-AL-U3-L1-HARD-02",
    question: "In Core Practical 5, 1-iodobutane reacts faster with aqueous silver nitrate than 1-chlorobutane, despite the C-Cl bond being significantly more polar than the C-I bond. What is the fundamental scientific reason for this observation?",
    options: [
      { text: "The steric hindrance around the iodine atom is much smaller than chlorine", isCorrect: false },
      { text: "The C-I bond enthalpy (238 kJ mol⁻¹) is substantially lower than the C-Cl bond enthalpy (338 kJ mol⁻¹), so bond breaking has a much lower activation energy", isCorrect: true },
      { text: "Iodine is a stronger oxidising agent than chlorine", isCorrect: false },
      { text: "Silver iodide is much more soluble in ethanol than silver chloride", isCorrect: false }
    ],
    explanation: "* Nucleophilic substitution / hydrolysis requires cleavage of the carbon-halogen bond.\n* Although bond polarity influences initial electrostatic attraction, bond enthalpy is the overriding factor determining the activation energy.\n* Because the C-I bond is much longer and weaker (bond enthalpy 238 kJ mol⁻¹) than the C-Cl bond (338 kJ mol⁻¹), it breaks much more readily, giving a far higher rate of reaction."
  }
];
