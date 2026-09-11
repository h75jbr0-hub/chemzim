import { Question } from '../../../types';

// Reversible Reactions and Equilibrium - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u6_l4_lv3_1-2026",
    question: "In the industrial Haber process for manufacturing ammonia:\nN₂(g) + 3H₂(g) ⇌ 2NH₃(g)   ΔH = -92 kJ/mol\nA compromise temperature of 450°C and a pressure of 200 atmospheres are used.\nWhy is a temperature of 450°C chosen rather than 100°C or 900°C?",
    options: [
      { text: "At 100°C the reaction is too slow to be economical, while at 900°C the equilibrium yield of ammonia is too low", isCorrect: true },
      { text: "At 100°C the iron catalyst melts, and at 900°C nitrogen turns into a liquid" },
      { text: "At 450°C the activation energy becomes zero" },
      { text: "At 450°C the reaction becomes endothermic and absorbs waste heat" }
    ],
    correctAnswer: 0,
    explanation: "* Lower temperatures favor higher equilibrium yield (since forward reaction is exothermic), but the rate is impractically slow.\n* Higher temperatures give very fast rates, but lower the equilibrium yield significantly.\n* 450°C is an optimal compromise giving acceptable yield in an acceptable time frame.",
    level: 3,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q189",
    createdAt: "2026-08-21T01:35:00Z"
  },
  {
    id: "ex_ci_u6_l4_lv3_2-2026",
    question: "In the Contact process: 2SO₂(g) + O₂(g) ⇌ 2SO₃(g)   ΔH = -196 kJ/mol\nA moderate pressure of only 1–2 atmospheres is used industrially rather than 200 atmospheres.\nWhy is a very high pressure NOT used?",
    options: [
      { text: "The equilibrium yield of SO₃ is already over 98% at 1–2 atm, so expensive high-pressure equipment is unnecessary", isCorrect: true },
      { text: "High pressure causes SO₂ to decompose into solid sulfur" },
      { text: "High pressure shifts the equilibrium to the left" },
      { text: "Vanadium(V) oxide catalyst is inactivated at high pressures" }
    ],
    correctAnswer: 0,
    explanation: "* At 450°C and 1–2 atm, the conversion of SO₂ to SO₃ is already ~98%.\n* Building and maintaining high-pressure vessels would incur massive capital and safety costs with virtually no extra yield gain.",
    level: 3,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q190",
    createdAt: "2026-08-21T01:40:00Z"
  },
  {
    id: "ex_ci_u6_l4_lv3_3-2026",
    question: "A closed equilibrium mixture of 2NO₂(g) (brown) ⇌ N₂O₄(g) (colourless) is suddenly compressed to half its original volume.\nWhat is the immediate visual observation, followed by the subsequent change until a new equilibrium is established?",
    options: [
      { text: "The mixture immediately becomes darker brown, and then gradually turns paler brown", isCorrect: true },
      { text: "The mixture immediately turns completely colourless, then turns dark brown" },
      { text: "The mixture immediately turns pale brown, then becomes permanently colourless" },
      { text: "No immediate change occurs, but the mixture turns darker over time" }
    ],
    correctAnswer: 0,
    explanation: "* Halving volume doubles the concentration of all gas molecules instantly, making the brown color initially darker.\n* Then, by Le Chatelier's principle, the system responds to the increased pressure by shifting to the side with fewer gas molecules (right, forming colourless N₂O₄), so the mixture gradually pales to a new equilibrium.",
    level: 3,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q191",
    createdAt: "2026-08-21T01:45:00Z"
  },
  {
    id: "ex_ci_u6_l4_lv3_4-2023",
    question: "In the contact process, the conversion of SO₂ to SO₃ is carried out at a moderate pressure of 1 to 2 atmospheres (approx. 200 kPa) rather than at very high pressure (e.g. 200 atm). What is the economic reason for this choice?",
    options: [
      { text: "The equilibrium yield of SO₃ is already over 98% at 1–2 atm, so building expensive high-pressure equipment is not cost-effective", isCorrect: true },
      { text: "Higher pressure reverses the reaction and forms sulfur and oxygen" },
      { text: "The vanadium(V) oxide catalyst is destroyed at pressures above 2 atm" },
      { text: "SO₃ gas condenses into a corrosive liquid that corrodes high-pressure pumps" }
    ],
    correctAnswer: 0,
    explanation: "* At 450 °C and 1–2 atmospheres with $V_2O_5$, the equilibrium conversion of $SO_2$ to $SO_3$ exceeds 98%.\n* Generating higher pressures requires expensive high-pressure compressors and pipes with heavy energy running costs, offering negligible additional yield benefit.",
    level: 3,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 23 Q30",
    lessonNum: 4,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u6_l4_lv3_5-2024",
    question: "The following equilibrium is established in a syringe:\nCH₄(g) + H₂O(g) ⇌ CO(g) + 3H₂(g)    ΔH = +206 kJ/mol\nWhich combination of changes will shift the position of equilibrium furthest to the right?",
    options: [
      { text: "Increasing temperature and decreasing pressure", isCorrect: true },
      { text: "Decreasing temperature and increasing pressure" },
      { text: "Increasing temperature and increasing pressure" },
      { text: "Decreasing temperature and decreasing pressure" }
    ],
    correctAnswer: 0,
    explanation: "* The forward reaction is endothermic ($+\\Delta H$), so increasing temperature shifts equilibrium to the right.\n* The forward reaction produces 4 moles of gas from 2 moles of reactant gas ($2 \\rightarrow 4$), so decreasing pressure shifts equilibrium to the side with more moles of gas (to the right).",
    level: 3,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 23 Q30",
    lessonNum: 4,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u6_l4_lv3_6-2025",
    question: "A mixture of gases X, Y, and Z is in dynamic equilibrium: X(g) + 2Y(g) ⇌ 2Z(g). The total pressure is suddenly increased at constant temperature. What happens to the rate of the forward reaction and the rate of the reverse reaction immediately after the pressure increase?",
    options: [
      { text: "Both rates increase, but the forward rate increases more than the reverse rate", isCorrect: true },
      { text: "The forward rate increases, while the reverse rate decreases" },
      { text: "Both rates increase by the exact same amount" },
      { text: "The forward rate decreases, while the reverse rate increases" }
    ],
    correctAnswer: 0,
    explanation: "* Increasing pressure increases the concentration of all gaseous species, so collision frequency increases and both forward and reverse rates increase.\n* However, because the forward reaction involves 3 reactant molecules ($X + 2Y$) compared to 2 molecules for the reverse reaction ($2Z$), the forward rate increases to a greater extent, causing a net shift to the right until a new equilibrium is reached.",
    level: 3,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 23 Q30",
    lessonNum: 4,
    createdAt: "2025-06-01T10:00:00Z"
  }
];

