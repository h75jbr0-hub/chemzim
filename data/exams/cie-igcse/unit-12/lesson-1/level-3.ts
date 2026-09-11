import { Question } from '../../../types';

// Measurement - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u12_l1_lv3_1-2026",
    question: "A student dispenses 20.0 cm³ of solution from a burette with an uncertainty of ±0.05 cm³ on each reading (initial and final readings).\nWhat is the total percentage uncertainty in this volume measurement?",
    options: [
      { text: "0.50%", isCorrect: true },
      { text: "0.25%" },
      { text: "1.00%" },
      { text: "0.05%" }
    ],
    correctAnswer: 0,
    explanation: "* Two readings are taken (initial and final), giving a combined maximum uncertainty of $2 \\times (\\pm 0.05) = \\pm 0.10\\text{ cm}^3$.\n* Percentage uncertainty $= (0.10 / 20.0) \\times 100\\% = 0.50\\%$.",
    level: 3,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q449",
    createdAt: "2026-08-22T04:40:00Z"
  },
  {
    id: "ex_ci_u12_l1_lv3_2-2026",
    question: "A student performs a titration but forgets to fill the space below the burette tap, leaving an air bubble. During the titration, the air bubble fills with liquid.\nHow does this systematic error affect the calculated concentration of the unknown acid in the flask?",
    options: [
      { text: "The recorded burette volume (titre) is larger than the true volume delivered, causing the calculated acid concentration to be overestimated", isCorrect: true },
      { text: "The calculated concentration is underestimated" },
      { text: "The error has no effect on the calculated concentration" },
      { text: "The endpoint color change is prevented from occurring" }
    ],
    correctAnswer: 0,
    explanation: "* The air bubble is replaced by liquid from the burette body, registering as extra volume on the scale without actually entering the flask.\n* A falsely high recorded titre implies more moles were delivered, overestimating the calculated concentration.",
    level: 3,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q450",
    createdAt: "2026-08-22T04:45:00Z"
  },
  {
    id: "ex_ci_u12_l1_lv3_3-2026",
    question: "A gas X has a relative molecular mass ($M_r$) of 71 and is soluble in water.\nWhich laboratory arrangement is suitable for collecting a sample of pure, dry gas X?",
    options: [
      { text: "Pass gas X through concentrated sulfuric acid, then collect by downward delivery into an upright gas jar", isCorrect: true },
      { text: "Pass gas X through water, then collect by upward delivery into an inverted gas jar" },
      { text: "Pass gas X over solid calcium oxide, then collect over water" },
      { text: "Pass gas X through aqueous sodium hydroxide, then collect by downward delivery" }
    ],
    correctAnswer: 0,
    explanation: "* $M_r = 71$ (e.g. $Cl_2$), which is much denser than air ($M_r \\approx 28.8$), so it sinks (downward delivery into upright jar).\n* It is acidic/neutral, so it is dried using concentrated sulfuric acid without reacting.",
    level: 3,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q451",
    createdAt: "2026-08-22T04:50:00Z"
  },
  {
    id: "ex_ci_u12_l1_lv3_4-2026",
    question: "In a gas-evolution rate experiment, a gas syringe records 48 cm³ of gas produced in the first 20 seconds. The tangent drawn to the curve at time $t = 0\\text{ s}$ passes through the points $(0, 0)$ and $(10\\text{ s}, 36\\text{ cm}^3)$.\nWhat is the INITIAL rate of reaction?",
    options: [
      { text: "3.6 cm³/s", isCorrect: true },
      { text: "2.4 cm³/s" },
      { text: "1.8 cm³/s" },
      { text: "0.28 cm³/s" }
    ],
    correctAnswer: 0,
    explanation: "* Initial rate is the gradient of the tangent at $t = 0\\text{ s}$.\n* Gradient $= \\Delta V / \\Delta t = (36 - 0) / (10 - 0) = 3.6\\text{ cm}^3\\text{/s}$.",
    level: 3,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q452",
    createdAt: "2026-08-22T04:55:00Z"
  },
  {
    id: "ex_ci_u12_l1_lv3_5-2023",
    question: "A student measures the volume of gas released during a reaction using a gas syringe.\nWhich factor would cause the measured volume of gas to be higher than the actual volume produced by the reaction?",
    options: [
      { text: "The reaction mixture warms up significantly and heats the gas in the syringe", isCorrect: true },
      { text: "The rubber delivery tube between the flask and syringe has a loose connection" },
      { text: "The gas produced is slightly soluble in the aqueous reaction mixture" },
      { text: "The plunger in the gas syringe has significant friction and resists movement" }
    ],
    correctAnswer: 0,
    explanation: "* When the reaction mixture warms up exothermically, heat expands the gas inside the flask and syringe ($V \\propto T$).\n* Gas expansion causes the volume reading to be higher than the true amount produced at room temperature.\n* Gas leaks, gas dissolution, or syringe friction all cause the measured volume to be lower.",
    level: 3,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    lessonNum: 1,
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 21 Q38",
    createdAt: "2023-06-01T09:00:00Z"
  },
  {
    id: "ex_ci_u12_l1_lv3_6-2024",
    question: "A balance has an uncertainty of ±0.01 g. A student determines the mass of a solid by weighing a weighing boat, then weighing the boat with the solid.\nMass of empty boat = 2.45 g\nMass of boat + solid = 4.95 g\nWhat is the percentage uncertainty in the mass of the solid?",
    options: [
      { text: "0.80%", isCorrect: true },
      { text: "0.40%" },
      { text: "0.20%" },
      { text: "1.60%" }
    ],
    correctAnswer: 0,
    explanation: "* Mass of solid $= 4.95 - 2.45 = 2.50\\text{ g}$.\n* Two weighings are taken, so total absolute uncertainty $= 2 \\times 0.01\\text{ g} = \\pm 0.02\\text{ g}$.\n* Percentage uncertainty $= (0.02 / 2.50) \\times 100\\% = 0.80\\%$.",
    level: 3,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    lessonNum: 1,
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 22 Q39",
    createdAt: "2024-06-01T09:00:00Z"
  },
  {
    id: "ex_ci_u12_l1_lv3_7-2025",
    question: "A student wants to collect and measure the volume of sulfur dioxide, SO₂, produced during a reaction.\nSulfur dioxide is a dense, acidic gas that is very soluble in water.\nWhich apparatus arrangement is most suitable for accurately measuring its volume at room temperature and pressure?",
    options: [
      { text: "A gas syringe connected via a sealed delivery tube to the reaction flask", isCorrect: true },
      { text: "Inverted measuring cylinder filled with water over a water trough" },
      { text: "Upward delivery into an inverted test tube" },
      { text: "Downward delivery into an open conical flask on a balance" }
    ],
    correctAnswer: 0,
    explanation: "* Because sulfur dioxide ($SO_2$) is very soluble in water, it cannot be collected or measured accurately over water.\n* A gas syringe is a closed system that measures gas volume directly regardless of gas solubility in water or density relative to air.",
    level: 3,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    lessonNum: 1,
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 23 Q38",
    createdAt: "2025-06-01T09:00:00Z"
  }
];
