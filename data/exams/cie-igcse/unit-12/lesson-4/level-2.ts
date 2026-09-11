import { Question } from '../../../types';

// Instrumental Analysis - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u12_l4_lv2_1-2026",
    question: "A solution containing two different metal ions is analysed using flame emission spectroscopy. Which statement describes how the instrument can identify both metal ions and determine their respective concentrations?",
    options: [
      { text: "The emission spectrum of the mixture shows the unique line wavelengths of both ions for identification, and the intensity of the light emitted at those wavelengths is proportional to their concentration", isCorrect: true },
      { text: "The instrument measures the pH change when the metal ions are burned in the flame" },
      { text: "The instrument separates the ions by their density in the burner chamber before vaporization" },
      { text: "The instrument measures the total heat absorbed by the sample, which is identical for all metal ions" }
    ],
    correctAnswer: 0,
    explanation: "* Flame emission spectroscopy produces a line spectrum for each metal ion, acting as a unique fingerprint.\n* The concentration of each ion is determined by measuring the intensity (brightness) of the light emitted at its specific wavelengths.",
    level: 2,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q481",
    createdAt: "2026-08-22T08:00:00Z"
  },
  {
    id: "ex_ci_u12_l4_lv2_2-2026",
    question: "A student is investigating the rate of reaction between calcium carbonate and dilute hydrochloric acid by measuring the volume of carbon dioxide gas produced. Which experimental error would result in a lower-than-expected volume of gas being recorded in the gas syringe?",
    options: [
      { text: "There is a loose connection between the delivery tube and the conical flask, allowing gas to escape", isCorrect: true },
      { text: "The acid used is slightly more concentrated than the labeled value" },
      { text: "The student reads the volume at the top of the plunger meniscus instead of the bottom" },
      { text: "The temperature of the room increases during the reaction, causing gas expansion" }
    ],
    correctAnswer: 0,
    explanation: "* Gas leaks in the delivery setup or container connection directly allow the produced gas to escape into the atmosphere instead of entering the gas syringe, leading to lower measured gas volumes.",
    level: 2,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q482",
    createdAt: "2026-08-22T08:05:00Z"
  },
  {
    id: "ex_ci_u12_l4_lv2_3-2026",
    question: "During an acid-base titration, which procedure would introduce a systematic error that increases the calculated concentration of the acid being analyzed?",
    options: [
      { text: "Rinsing the conical flask with the sodium hydroxide solution before adding the acid", isCorrect: true },
      { text: "Rinsing the burette with the acid before filling it" },
      { text: "Reading the initial burette volume from eye-level to prevent parallax error" },
      { text: "Using a pipette to measure the exact volume of alkali added to the flask" }
    ],
    correctAnswer: 0,
    explanation: "* Rinsing the conical flask with sodium hydroxide leaves excess alkali residue behind, meaning more acid from the burette will be required to reach the endpoint, resulting in a higher calculated concentration of the acid.",
    level: 2,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q483",
    createdAt: "2026-08-22T08:10:00Z"
  },
  {
    id: "ex_ci_u12_l4_lv2_4-2026",
    question: "A forensic scientist uses gas chromatography (GC) coupled with a mass spectrometer (MS) to analyze a complex liquid mixture. How do the two parts of this instrumental setup work together to analyze the mixture?",
    options: [
      { text: "The gas chromatograph separates the components of the mixture, and the mass spectrometer identifies each separated component", isCorrect: true },
      { text: "The mass spectrometer separates the mixture, and the gas chromatograph measures the boiling point" },
      { text: "The gas chromatograph vaporises the sample, while the mass spectrometer burns it to produce a flame" },
      { text: "Both parts perform the same analysis to confirm the color and density of the sample" }
    ],
    correctAnswer: 0,
    explanation: "* Gas chromatography is an advanced separation technique that separates the components of a volatile mixture.\n* As each component leaves the column, it enters the mass spectrometer, which determines its molecular mass and structure for identification.",
    level: 2,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q484",
    createdAt: "2026-08-22T08:15:00Z"
  },
  {
    id: "ex_ci_u12_l4_lv2_5-2023",
    question: "A student carries out a titration to determine the concentration of hydrochloric acid.\nWhich step in the procedure introduces an error into the result?",
    options: [
      { text: "Rinsing the conical flask with the sodium hydroxide solution before pipetting 25.0 cm³ of alkali into it", isCorrect: true },
      { text: "Rinsing the pipette with the sodium hydroxide solution before using it" },
      { text: "Rinsing the burette with the hydrochloric acid before filling it" },
      { text: "Rinsing the inside walls of the conical flask with distilled water during the titration" }
    ],
    correctAnswer: 0,
    explanation: "* Rinsing the conical flask with alkali introduces extra unmeasured moles of sodium hydroxide, requiring a falsely large volume of acid to reach the endpoint.\n* Washing the flask with distilled water during titration does not alter the moles of reactants present, so it does not cause an error.",
    level: 2,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    lessonNum: 4,
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 22 Q39",
    createdAt: "2023-06-01T09:00:00Z"
  },
  {
    id: "ex_ci_u12_l4_lv2_6-2024",
    question: "In gas chromatography, a mixture of volatile organic compounds is injected into a column.\nWhat determines the retention time (the time taken for each substance to travel through the column)?",
    options: [
      { text: "The relative attraction of the compound to the stationary phase and its solubility in the mobile carrier gas", isCorrect: true },
      { text: "Only the density of the compound in its liquid state" },
      { text: "The atmospheric pressure in the laboratory on that day" },
      { text: "The colour of the compound when illuminated by UV light" }
    ],
    correctAnswer: 0,
    explanation: "* In gas chromatography, substances partition between the mobile gas phase and the stationary liquid/solid phase.\n* Substances with stronger attraction to the stationary phase take longer to travel through the column (longer retention time).",
    level: 2,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    lessonNum: 4,
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 21 Q40",
    createdAt: "2024-06-01T09:00:00Z"
  },
  {
    id: "ex_ci_u12_l4_lv2_7-2025",
    question: "In a flame emission spectrometer, why can the instrument identify several different metal ions present in the same solution simultaneously?",
    options: [
      { text: "Each metal ion emits light at characteristic discrete wavelengths that produce a unique line spectrum", isCorrect: true },
      { text: "Each metal ion absorbs all visible light at the exact same wavelength" },
      { text: "Different metal ions react with the flame to produce different gases" },
      { text: "The instrument separates the metal ions by magnetic attraction inside the detector" }
    ],
    correctAnswer: 0,
    explanation: "* Each metal element has a unique electronic structure, so when excited in a flame, its electrons emit photons at characteristic discrete wavelengths.\n* The resulting line spectrum allows simultaneous qualitative identification and quantitative measurement from light intensity.",
    level: 2,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    lessonNum: 4,
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 22 Q40",
    createdAt: "2025-06-01T09:00:00Z"
  }
];
