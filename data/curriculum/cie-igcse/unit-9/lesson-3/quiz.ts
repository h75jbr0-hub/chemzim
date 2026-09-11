export const lessonQuiz = [
  {
    id: "ci_u9_l3_q1-2026",
    question: "In the blast furnace for the extraction of iron, what is the primary role of limestone (calcium carbonate)?",
    options: [
      { text: "It thermally decomposes to CaO, which reacts with acidic sand impurities (SiO₂) to form molten slag (CaSiO₃)", isCorrect: true },
      { text: "It reduces haematite directly to iron metal", isCorrect: false },
      { text: "It acts as a fuel to generate the high temperatures required", isCorrect: false },
      { text: "It oxidises carbon monoxide back to carbon dioxide", isCorrect: false }
    ],
    explanation: "* Limestone (CaCO₃) decomposes: CaCO₃ → CaO + CO₂.\n* Calcium oxide (a basic oxide) reacts with silicon dioxide (an acidic impurity in haematite ore): CaO + SiO₂ → CaSiO₃ (calcium silicate / slag).\n* Slag floats on molten iron and is tapped off separately."
  },
  {
    id: "ci_u9_l3_q2-2026",
    question: "Why is bauxite dissolved in molten cryolite (Na₃AlF₆) during the Hall-Héroult electrolytic extraction of aluminium?",
    options: [
      { text: "To lower the melting point of the electrolyte from over 2000 °C to about 950 °C and increase electrical conductivity", isCorrect: true },
      { text: "To act as a catalyst that prevents oxygen from forming at the anode", isCorrect: false },
      { text: "To prevent the aluminium metal product from oxidising at the cathode", isCorrect: false },
      { text: "To neutralise acidic impurities in the bauxite ore", isCorrect: false }
    ],
    explanation: "* Pure aluminium oxide (bauxite) has an impractically high melting point (> 2045 °C).\n* Dissolving it in molten cryolite lowers the operating temperature to around 950 °C, drastically reducing electrical energy costs and improving conductivity."
  },
  {
    id: "ci_u9_l3_q3-2026",
    question: "Why do the carbon (graphite) anodes in the Hall-Héroult aluminium extraction cell have to be replaced regularly?",
    options: [
      { text: "The oxygen produced at the anode reacts with the hot carbon to form carbon dioxide gas: C + O₂ → CO₂", isCorrect: true },
      { text: "They melt rapidly at the 950 °C operating temperature", isCorrect: false },
      { text: "Aluminium metal deposits onto the anodes, causing an electrical short circuit", isCorrect: false },
      { text: "Fluoride ions in cryolite corrode graphite into gaseous CF₄", isCorrect: false }
    ],
    explanation: "* Oxide ions lose electrons at the anode to form hot oxygen gas: 2O²⁻ → O₂ + 4e⁻.\n* At ~950 °C, this oxygen reacts directly with the carbon anode: C(s) + O₂(g) → CO₂(g).\n* The anodes burn away over time and must be periodically replaced."
  },
  {
    id: "ci_u9_l3_q4-2026",
    question: "Which blast furnace reaction is highly exothermic and responsible for maintaining the extremely high temperature inside the furnace?",
    options: [
      { text: "C(s) + O₂(g) → CO₂(g)", isCorrect: true },
      { text: "C(s) + CO₂(g) → 2CO(g)", isCorrect: false },
      { text: "Fe₂O₃(s) + 3CO(g) → 2Fe(l) + 3CO₂(g)", isCorrect: false },
      { text: "CaCO₃(s) → CaO(s) + CO₂(g)", isCorrect: false }
    ],
    explanation: "* The combustion of coke with oxygen from the blasted hot air (C + O₂ → CO₂) is strongly exothermic.\n* This reaction provides the thermal energy to heat the lower furnace up to ~1900 °C."
  },
  {
    id: "ci_u9_l3_q5-2026",
    question: "In the basic oxygen converter used to turn molten pig iron into steel, what are the primary reasons for blowing in oxygen and adding calcium oxide?",
    options: [
      { text: "Blowing in oxygen removes excess carbon as CO/CO₂ gases; adding calcium oxide reacts with acidic oxides to form slag", isCorrect: true },
      { text: "Blowing in oxygen prevents iron from oxidising; adding calcium oxide converts iron into stainless steel", isCorrect: false },
      { text: "Blowing in oxygen cools the furnace down; adding calcium oxide provides carbon atoms", isCorrect: false },
      { text: "Blowing in oxygen forms a protective oxide layer; adding calcium oxide acts as an electrical conductor", isCorrect: false }
    ],
    explanation: "* Pig iron has too much carbon (~4%), making it brittle. High-pressure oxygen oxidises carbon to gaseous CO and CO₂.\n* Oxygen also oxidises impurities like silicon and phosphorus into acidic oxides (SiO₂, P₂O₅).\n* Calcium oxide (lime, basic) neutralises these acidic oxides to form molten slag."
  }
];

