export const lessonQuiz = [
  {
    id: "ci_u2_l2_q1-compound-desc",
    question: "Which statement describes a chemical compound?",
    options: [
      { text: "It contains two or more elements forming an alloy", isCorrect: false },
      { text: "It contains two or more elements chemically combined", isCorrect: true },
      { text: "It contains two or more elements physically combined", isCorrect: false },
      { text: "It contains two or more elements that can be easily separated by physical methods", isCorrect: false }
    ],
    explanation: "* A compound contains two or more different elements chemically bonded together in a fixed, definite ratio.\n* Alloys and physical combinations with variable ratios are mixtures, not compounds."
  },
  {
    id: "ci_u2_l2_q2-element-formula",
    question: "Which of the following is the formula of an element?",
    options: [
      { text: "H₂O₂", isCorrect: false },
      { text: "H", isCorrect: false },
      { text: "CH₄O", isCorrect: false },
      { text: "H₂", isCorrect: true }
    ],
    explanation: "* An element consists of only one type of atom (same atomic number).\n* Hydrogen naturally exists as stable diatomic molecules (H₂), which represents the elemental form of hydrogen gas.\n* H₂O₂ and CH₄O are compounds containing more than one element."
  },
  {
    id: "ci_u2_l2_q3-identify-mixture",
    question: "Which of the following is classified as a mixture?",
    options: [
      { text: "Aqueous sodium chloride solution", isCorrect: true },
      { text: "Solid sodium chloride crystals", isCorrect: false },
      { text: "Sodium metal", isCorrect: false },
      { text: "Chlorine gas", isCorrect: false }
    ],
    explanation: "* Aqueous sodium chloride solution is a homogeneous mixture formed by dissolving solute (NaCl) in solvent (H₂O) without chemical bonding.\n* Sodium chloride (NaCl) is a compound, while sodium (Na) and chlorine (Cl₂) are elements."
  },
  {
    id: "ci_u2_l2_q4-pure-substance-truth",
    question: "What is always true for any pure chemical substance?",
    options: [
      { text: "It is a solid at room temperature", isCorrect: false },
      { text: "It always boils at 100 °C", isCorrect: false },
      { text: "It has a sharp, precise melting point", isCorrect: true },
      { text: "It contains only one type of atom", isCorrect: false }
    ],
    explanation: "* A pure substance (whether an element or a compound) melts and freezes at a single, sharp, definite temperature.\n* Pure compounds contain more than one type of atom, and boiling at 100 °C is only true for pure water at standard atmospheric pressure."
  },
  {
    id: "ci_u2_l2_q5-purity-medical-use",
    question: "Which substance should be completely pure for its intended use?",
    options: [
      { text: "Water for washing a car", isCorrect: false },
      { text: "Limestone for iron extraction in a blast furnace", isCorrect: false },
      { text: "A pharmaceutical drug for curing disease", isCorrect: true },
      { text: "Petroleum for fractional distillation", isCorrect: false }
    ],
    explanation: "* Pharmaceutical drugs and medical products must be strictly pure because any contaminants can cause hazardous side effects or toxicity in humans.\n* Water for washing or raw industrial reactants can tolerate impurities without danger."
  },
  {
    id: "ci_u2_l2_q6-testing-purity",
    question: "What test can be used by a chemist to verify the purity of aspirin crystals?",
    options: [
      { text: "Measure the size of the crystals", isCorrect: false },
      { text: "Determine the sharp melting point of the crystals", isCorrect: true },
      { text: "Inspect the colour of the crystals", isCorrect: false },
      { text: "Test the solubility of the crystals in cold water", isCorrect: false }
    ],
    explanation: "* Determining whether a solid melts sharply at its precise literature melting point is the universal laboratory test for purity.\n* Impurities depress the melting point and cause melting over a temperature range."
  },
  {
    id: "ci_u2_l2_q7-dissolved-impurity-bp-mp",
    question: "Pure water has a melting point of 0 °C and a boiling point of 100 °C. What could be the melting point and boiling point of water containing a dissolved solid impurity?",
    options: [
      { text: "Melting point: +3 °C ; Boiling point: 96 °C", isCorrect: false },
      { text: "Melting point: +3 °C ; Boiling point: 104 °C", isCorrect: false },
      { text: "Melting point: -3 °C ; Boiling point: 96 °C", isCorrect: false },
      { text: "Melting point: -3 °C ; Boiling point: 104 °C", isCorrect: true }
    ],
    explanation: "* Dissolved impurities depress (lower) the melting point below 0 °C (to -3 °C).\n* Dissolved impurities elevate (raise) the boiling point above 100 °C (to 104 °C)."
  },
  {
    id: "ci_u2_l2_q8-substances-row-classification",
    question: "In which row are the substances correctly classified?",
    options: [
      { text: "Element: Water ; Compound: Sulfur ; Mixture: Brass", isCorrect: false },
      { text: "Element: Sulfur ; Compound: Brass ; Mixture: Water", isCorrect: false },
      { text: "Element: Brass ; Compound: Sulfur ; Mixture: Water", isCorrect: false },
      { text: "Element: Sulfur ; Compound: Water ; Mixture: Brass", isCorrect: true }
    ],
    explanation: "* Sulfur is an element (consists of S atoms only).\n* Water is a compound (H₂O, hydrogen and oxygen chemically bonded in a 2:1 ratio).\n* Brass is an alloy mixture (copper and zinc atoms physically mixed without chemical bonding)."
  }
];

