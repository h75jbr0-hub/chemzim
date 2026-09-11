export const lessonQuiz = [
  {
    id: "EDEXCEL-AL-U2-L6-01",
    question: "What is the number $0.000 000 012$ written in standard form?",
    options: [
      { text: "$1.2 \\\\times 10^{-8}$", isCorrect: true },
      { text: "$1.2 \\\\times 10^{-9}$", isCorrect: false },
      { text: "$1.2 \\\\times 10^8$", isCorrect: false },
      { text: "$12 \\\\times 10^{-9}$", isCorrect: false }
    ],
    explanation: "• Move the decimal point 8 positions to the right to place it after the first non-zero digit (1).\n• Since the original decimal is less than 1, the index is negative: $1.2 \\times 10^{-8}$."
  },
  {
    id: "EDEXCEL-AL-U2-L6-02",
    question: "Simplify the mole ratio of reactants $12:4$ to its simplest integer form.",
    options: [
      { text: "$3:1$", isCorrect: true },
      { text: "$6:2$", isCorrect: false },
      { text: "$4:1$", isCorrect: false },
      { text: "$3:2$", isCorrect: false }
    ],
    explanation: "• Divide both sides by the greatest common divisor, which is 4.\n• $12 \\div 4 = 3$, and $4 \\div 4 = 1$.\n• The simplified ratio is $3:1$."
  },
  {
    id: "EDEXCEL-AL-U2-L6-03",
    question: "An excess of magnesium is added to $0.20\\text{ dm}^3$ of $1.00\\text{ mol dm}^{-3}$ dilute hydrochloric acid. Reaction: $Mg + 2HCl \\\\rightarrow MgCl_2 + H_2$. How many moles of hydrogen gas are formed?",
    options: [
      { text: "$0.10\\text{ mol}$", isCorrect: true },
      { text: "$0.20\\text{ mol}$", isCorrect: false },
      { text: "$0.40\\text{ mol}$", isCorrect: false },
      { text: "$0.05\\text{ mol}$", isCorrect: false }
    ],
    explanation: "• Calculate moles of HCl: $n = c \\times v = 1.00 \\times 0.20 = 0.20\\text{ mol}$.\n• The reaction ratio for $HCl : H_2$ is $2:1$.\n• Moles of $H_2$ formed = $0.5 \\times 0.20 = 0.10\\text{ mol}$."
  },
  {
    id: "EDEXCEL-AL-U2-L6-04",
    question: "Calculate the sum of the fractions: $\\frac{1}{2} + \\frac{1}{5}$.",
    options: [
      { text: "$\\frac{7}{10}$", isCorrect: true },
      { text: "$\\frac{2}{7}$", isCorrect: false },
      { text: "$\\frac{1}{7}$", isCorrect: false },
      { text: "$\\frac{3}{5}$", isCorrect: false }
    ],
    explanation: "• The Lowest Common Multiple of 2 and 5 is 10.\n• Convert the fractions: $\\frac{1}{2} = \frac{5}{10}$ and $\\frac{1}{5} = \frac{2}{10}$.\n• Sum = $\\frac{5+2}{10} = \\frac{7}{10}$."
  },
  {
    id: "EDEXCEL-AL-U2-L6-05",
    question: "Calculate the product of the fractions: $\\frac{2}{7} \\\\times \\frac{4}{9}$.",
    options: [
      { text: "$\\frac{8}{63}$", isCorrect: true },
      { text: "$\\frac{6}{16}$", isCorrect: false },
      { text: "$\\frac{18}{28}$", isCorrect: false },
      { text: "$\\frac{8}{7}$", isCorrect: false }
    ],
    explanation: "• Multiply the numerators: $2 \\times 4 = 8$.\n• Multiply the denominators: $7 \\times 9 = 63$.\n• Product = $\\frac{8}{63}$."
  },
  {
    id: "EDEXCEL-AL-U2-L6-06",
    question: "Calculate the division: $\\frac{2}{3} \\\\div \\frac{7}{9}$.",
    options: [
      { text: "$\\frac{6}{7}$", isCorrect: true },
      { text: "$\\frac{14}{27}$", isCorrect: false },
      { text: "$\\frac{18}{21}$", isCorrect: false },
      { text: "$\\frac{7}{6}$", isCorrect: false }
    ],
    explanation: "• Invert the second fraction and multiply: $\\frac{2}{3} \\times \\frac{9}{7} = \\frac{18}{21}$.\n• Simplify by dividing numerator and denominator by 3: $\\frac{6}{7}$."
  },
  {
    id: "EDEXCEL-AL-U2-L6-07",
    question: "Which multiplier is used to increase a measurement of $30.0\\text{ mg}$ by $23\\%$?",
    options: [
      { text: "$1.23$", isCorrect: true },
      { text: "$0.23$", isCorrect: false },
      { text: "$0.77$", isCorrect: false },
      { text: "$2.30$", isCorrect: false }
    ],
    explanation: "• To increase a value by $23\\%$, the new value is $100\\% + 23\\% = 123\\%$.\n• The decimal multiplier is $123 / 100 = 1.23$."
  },
  {
    id: "EDEXCEL-AL-U2-L6-08",
    question: "Which multiplier is used to decrease a measurement of $30.0\\text{ mg}$ by $23\\%$?",
    options: [
      { text: "$0.77$", isCorrect: true },
      { text: "$1.23$", isCorrect: false },
      { text: "$0.23$", isCorrect: false },
      { text: "$0.73$", isCorrect: false }
    ],
    explanation: "• To decrease a value by $23\\%$, the remaining value is $100\\% - 23\\% = 77\\%$.\n• The decimal multiplier is $77 / 100 = 0.77$."
  },
  {
    id: "EDEXCEL-AL-U2-L6-09",
    question: "The volume of a gas sample increases from $40.0\\text{ cm}^3$ to $50.0\\text{ cm}^3$. What is the percentage increase in volume?",
    options: [
      { text: "$25\\%$", isCorrect: true },
      { text: "$20\\%$", isCorrect: false },
      { text: "$10\\%$", isCorrect: false },
      { text: "$12.5\\%$", isCorrect: false }
    ],
    explanation: "• Difference = $50.0 - 40.0 = 10.0\\text{ cm}^3$.\n• Percentage increase = $\\frac{\\text{Difference}}{\\text{Original value}} \\times 100 = \\frac{10.0}{40.0} \\times 100 = 25\\%$."
  },
  {
    id: "EDEXCEL-AL-U2-L6-10",
    question: "Rearrange the equation $n = \\\\frac{m}{M}$ to make molar mass ($M$) the subject.",
    options: [
      { text: "$M = \\\\frac{m}{n}$", isCorrect: true },
      { text: "$M = nm$", isCorrect: false },
      { text: "$M = \\\\frac{n}{m}$", isCorrect: false },
      { text: "$M = \\\\frac{1}{nm}$", isCorrect: false }
    ],
    explanation: "• Multiply both sides by $M$: $nM = m$.\n• Divide both sides by $n$: $M = \\frac{m}{n}$."
  },
  {
    id: "EDEXCEL-AL-U2-L6-11",
    question: "A sample of $2.5\\text{ mol}$ of a substance has a mass of $12.5\\text{ g}$. What is the molar mass of the substance?",
    options: [
      { text: "$5.0\\text{ g mol}^{-1}$", isCorrect: true },
      { text: "$31.25\\text{ g mol}^{-1}$", isCorrect: false },
      { text: "$0.20\\text{ g mol}^{-1}$", isCorrect: false },
      { text: "$15.0\\text{ g mol}^{-1}$", isCorrect: false }
    ],
    explanation: "• Rearrange formula to find molar mass: $M = \\frac{m}{n}$.\n• Substitute values: $M = \\frac{12.5\\text{ g}}{2.5\\text{ mol}} = 5.0\\text{ g mol}^{-1}$."
  },
  {
    id: "EDEXCEL-AL-U2-L6-12",
    question: "How many significant figures are in the measurement $0.002 50\\text{ g}$?",
    options: [
      { text: "3", isCorrect: true },
      { text: "5", isCorrect: false },
      { text: "2", isCorrect: false },
      { text: "6", isCorrect: false }
    ],
    explanation: "• Leading zeros before the first non-zero digit are not significant.\n• The non-zero digits (2 and 5) are significant.\n• The trailing zero after the decimal point is significant, giving 3 S.F."
  },
  {
    id: "EDEXCEL-AL-U2-L6-13",
    question: "Round the number $45 678$ to three significant figures.",
    options: [
      { text: "$45 700$", isCorrect: true },
      { text: "$45 600$", isCorrect: false },
      { text: "$46 000$", isCorrect: false },
      { text: "$45 680$", isCorrect: false }
    ],
    explanation: "• The first three digits are 4, 5, and 6.\n• The next digit is 7, which is 5 or greater, so round up the 6 to 7.\n• Fill the remaining places with zeros: $45 700$."
  },
  {
    id: "EDEXCEL-AL-U2-L6-14",
    question: "Round the decimal $0.002 755$ to two significant figures.",
    options: [
      { text: "$0.0028$", isCorrect: true },
      { text: "$0.0027$", isCorrect: false },
      { text: "$0.003$", isCorrect: false },
      { text: "$0.00276$", isCorrect: false }
    ],
    explanation: "• The first non-zero digit is 2, so the first two significant figures are 2 and 7.\n• The next digit is 5, which rounds up the 7 to 8.\n• Rounded value = $0.0028$."
  },
  {
    id: "EDEXCEL-AL-U2-L6-15",
    question: "The recommended dose of iodine ($I_2$) is $130\\text{ mg}$. Calculate the mass of potassium iodide ($KI$, $M_r = 166.0\\text{ g mol}^{-1}$) required to obtain this dose, assuming $2\\text{ mol}$ of $KI$ yields $1\\text{ mol}$ of $I_2$. (Molar mass of $I_2 = 253.8\\text{ g mol}^{-1}$)",
    options: [
      { text: "$170\\text{ mg}$", isCorrect: true },
      { text: "$85\\text{ mg}$", isCorrect: false },
      { text: "$340\\text{ mg}$", isCorrect: false },
      { text: "$130\\text{ mg}$", isCorrect: false }
    ],
    explanation: "• Moles of $I_2$ needed = $0.130\\text{ g} / 253.8\\text{ g/mol} = 5.122 \\times 10^{-4}\\text{ mol}$.\n• Moles of $KI$ required = $2 \\times 5.122 \\times 10^{-4} = 1.024 \\times 10^{-3}\\text{ mol}$.\n• Mass of $KI$ = $1.024 \\times 10^{-3}\\text{ mol} \\times 166.0\\text{ g/mol} = 0.170\\text{ g} = 170\\text{ mg}$."
  },
  {
    id: "EDEXCEL-AL-U2-L6-16",
    question: "In the preparation of copper(II) chloride crystals, $50.0\\text{ cm}^3$ of $0.500\\text{ mol dm}^{-3}$ HCl reacts with excess CuO. Reaction: $CuO + 2HCl \\\\rightarrow CuCl_2 + H_2O$. If $1.81\\text{ g}$ of $CuCl_2 \\\\cdot 2H_2O$ ($M_r = 170.5$) is obtained, what is the percentage yield?",
    options: [
      { text: "$85\\%$", isCorrect: true },
      { text: "$76\\%$", isCorrect: false },
      { text: "$50\\%$", isCorrect: false },
      { text: "$90\\%$", isCorrect: false }
    ],
    explanation: "• Moles of HCl = $0.0500 \\times 0.500 = 0.025\\text{ mol}$.\n• Expected moles of $CuCl_2 \\cdot 2H_2O$ = $0.025 / 2 = 0.0125\\text{ mol}$.\n• Theoretical yield = $0.0125 \\times 170.5 = 2.131\\text{ g}$.\n• Percentage yield = $(1.81 / 2.131) \\times 100 = 84.92\\% \\approx 85\\%$."
  }
];

