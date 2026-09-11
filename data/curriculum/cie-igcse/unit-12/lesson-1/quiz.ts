export const lessonQuiz = [
  {
    id: "ci_u12_l1_q1",
    question: "A student needs to quickly add 50 cm³ of dilute hydrochloric acid to a flask in a rate-of-reaction experiment. Which piece of apparatus is best to use?",
    options: [
      { text: "Burette", isCorrect: false },
      { text: "Conical flask", isCorrect: false },
      { text: "Measuring cylinder", isCorrect: true },
      { text: "Pipette", isCorrect: false }
    ],
    explanation: "* A measuring cylinder is designed to deliver approximate variable liquid volumes quickly.\n* A pipette measures only a fixed volume (usually 25.0 cm³) and delivers slowly.\n* A burette delivers drops slowly and is unsuitable when rapid addition is requested."
  },
  {
    id: "ci_u12_l1_q2",
    question: "A student carries out an acid-base titration. Why must the conical flask be rinsed with distilled water only, rather than the alkali solution?",
    options: [
      { text: "Distilled water ensures the indicator changes colour faster", isCorrect: false },
      { text: "Residual water droplets inside the conical flask do not alter the moles of alkali delivered from the pipette", isCorrect: true },
      { text: "Alkali dissolves the glass if left inside the conical flask", isCorrect: false },
      { text: "Rinsing with alkali reduces the concentration of the acid titrant in the burette", isCorrect: false }
    ],
    explanation: "* The pipette delivers an exact volume and therefore an exact number of moles into the conical flask.\n* Extra droplets of distilled water dilute the concentration but do NOT alter the moles of reagent reacting.\n* Rinsing the flask with alkali would add extra unmeasured moles of alkali, introducing a severe positive error."
  },
  {
    id: "ci_u12_l1_q3",
    question: "Why must water enter the Liebig condenser at the bottom and leave at the top?",
    options: [
      { text: "To prevent water from evaporating into the air", isCorrect: false },
      { text: "To ensure the water jacket remains completely filled with cold water and avoids air pockets", isCorrect: true },
      { text: "Because hot water is denser than cold water", isCorrect: false },
      { text: "To allow the distillate to flow downwards against gravity", isCorrect: false }
    ],
    explanation: "* Water entering at the lowest point fills the condenser jacket completely against gravity, expelling all air.\n* If water entered from the top, it would trickle along the bottom surface, creating air pockets and inefficient cooling."
  }
];
