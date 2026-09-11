import { Question } from '../../../types';

// Changes of State - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u1_l3_lv3_1-2026",
    question: "A cylinder containing a mixture of nitrogen gas (boiling point -196 °C) and oxygen gas (boiling point -183 °C) is cooled steadily from -150 °C to -210 °C. What is the correct sequence of physical events that occurs during cooling?",
    options: [
      { text: "Both gases condense simultaneously at -190 °C" },
      { text: "Oxygen condenses first at -183 °C, followed by nitrogen condensing at -196 °C, and then both solidify below -210 °C" },
      { text: "Nitrogen condenses first at -196 °C because it is more abundant in air" },
      { text: "Both gases deposit directly into solids at -183 °C without forming liquid" }
    ],
    correctAnswer: 1,
    explanation: "* Oxygen has the higher boiling point (-183 °C > -196 °C), meaning its intermolecular forces are stronger and it condenses into liquid first as the temperature drops.\n* Nitrogen remains gaseous until the temperature reaches -196 °C, where it also condenses into liquid.",
    level: 3,
    topic: "states-of-matter",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Specimen Paper 2 Q14",
    createdAt: "2026-03-26T10:00:00Z"
  },
  {
    id: "ex_ci_u1_l3_lv3_2-2026",
    question: "A liquid in an unsealed beaker is heated until it boils vigorously. Why does the temperature of the boiling liquid not exceed its boiling point even if the flame from the Bunsen burner is turned to maximum power?",
    options: [
      { text: "The extra heat energy is converted directly into potential energy required to completely separate particles from liquid to gas" },
      { text: "The glass beaker reaches its maximum heat capacity" },
      { text: "The liquid particles destroy energy as they evaporate" },
      { text: "The flame cools down once the boiling point is reached" }
    ],
    correctAnswer: 0,
    explanation: "* At the boiling point, all incoming thermal energy is used as latent heat of vaporization to overcome intermolecular forces separating liquid particles into gas.\n* Because average kinetic energy remains constant, temperature cannot rise until all liquid has transformed into vapor.",
    level: 3,
    topic: "states-of-matter",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Series Q16",
    createdAt: "2026-03-26T10:00:00Z"
  },
  {
    id: "ex_ci_u1_l3_lv3_3-2026",
    question: "Solid iodine crystals (I₂) in a sealed test-tube are gently warmed. Dense purple vapor fills the tube, and dark shiny grey crystals reform at the cooler top of the tube. Which two phase changes occurred, and what happened to the forces between iodine molecules?",
    options: [
      { text: "Melting followed by condensation; covalent I-I bonds broke" },
      { text: "Sublimation followed by deposition; weak intermolecular forces between I₂ molecules were broken and reformed" },
      { text: "Evaporation followed by freezing; ionic bonds broke and reformed" },
      { text: "Decomposition followed by synthesis; iodine atoms reacted" }
    ],
    correctAnswer: 1,
    explanation: "* Solid iodine undergoes sublimation directly into purple $\\text{I}_2$ vapor when heated.\n* The vapor then deposits (deposition) directly back into solid crystals upon touching the cooler glass surface.\n* These are physical changes where weak intermolecular forces between diatomic $\\text{I}_2$ molecules break and reform; covalent I–I bonds remain intact.",
    level: 3,
    topic: "states-of-matter",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Paper 22 Q9",
    createdAt: "2026-03-27T10:00:00Z"
  },
  {
    id: "ex_ci_u1_l3_lv3_4-2026",
    question: "A heating curve of pure liquid gallium is obtained as it is heated from 10 °C to 2500 °C. The horizontal plateau for boiling at 2204 °C is significantly longer in time than the horizontal plateau for melting at 29.8 °C when heated at a constant rate. What is the molecular explanation for this difference?",
    options: [
      { text: "Gallium atoms become heavier when boiled" },
      { text: "Melting only requires weakening and partially disrupting the lattice forces, whereas boiling requires completely overcoming and breaking all attractive forces between particles to separate them into gas" },
      { text: "The burner loses efficiency at high temperatures" },
      { text: "Gallium reacts with air only during melting" }
    ],
    correctAnswer: 1,
    explanation: "* Latent heat of vaporization is always much larger than latent heat of fusion.\n* Melting only partially overcomes intermolecular/metallic bonds to allow particles to slide past one another, while vaporization requires immense energy to completely break all attractive forces and separate particles into independent gas entities.",
    level: 3,
    topic: "states-of-matter",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Specimen Paper 2 Q17",
    createdAt: "2026-04-01T10:00:00Z"
  },
  {
    id: "ex_ci_u1_l3_lv3_5-2026",
    question: "Supercooling is a phenomenon where a clean liquid is cooled below its normal freezing point without solidifying until a seed crystal is added. Once freezing begins, the temperature of the liquid suddenly rises back up to the normal melting point. Why does the temperature increase upon freezing?",
    options: [
      { text: "The seed crystal reacts chemically with water in an endothermic reaction" },
      { text: "Exothermic bond formation releases latent heat of fusion, increasing kinetic energy of the liquid until normal equilibrium temperature is reached" },
      { text: "Friction from ice crystal growth warms the liquid" },
      { text: "Air dissolves into the ice releasing pressure" }
    ],
    correctAnswer: 1,
    explanation: "* Freezing is an exothermic process that forms bonds and releases latent heat of fusion.\n* As rapid crystallization occurs, the released thermal energy warms the remaining liquid back up to its true freezing point where solid and liquid coexist in equilibrium.",
    level: 3,
    topic: "states-of-matter",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Series Q19",
    createdAt: "2026-04-01T10:00:00Z"
  },
  {
    id: "ex_ci_u1_l3_lv3_6-2026",
    question: "A closed pressure cooker is used to cook food faster. How does increasing the pressure inside the cooker affect the boiling point of water and cooking time?",
    options: [
      { text: "Water boils at a lower temperature, so food cooks faster" },
      { text: "Water boils at a higher temperature (e.g. 120 °C), transferring more thermal energy to food and reducing cooking time" },
      { text: "Water boils at 100 °C but vapor cannot escape" },
      { text: "Higher pressure prevents water from boiling entirely" }
    ],
    correctAnswer: 1,
    explanation: "* Higher external pressure forces vapor pressure to reach a higher value before boiling can occur.\n* Consequently, water boils at $\\approx 120\\text{ }^\\circ\\text{C}$ instead of $100\\text{ }^\\circ\\text{C}$, providing higher thermal energy which cooks food significantly faster.",
    level: 3,
    topic: "states-of-matter",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Paper 21 Q13",
    createdAt: "2026-04-02T10:00:00Z"
  },
  {
    id: "ex_ci_u1_l3_lv3_7-2023",
    question: "A liquid X has a boiling point of 65 °C at 1.0 atm. When liquid X is boiled at high altitude where atmospheric pressure is 0.8 atm, at what temperature does it boil?",
    options: [
      { text: "At exactly 65 °C because boiling point is a fixed constant" },
      { text: "At a temperature below 65 °C because less vapor pressure is required to match the lower atmospheric pressure" },
      { text: "At a temperature above 65 °C because air is thinner" },
      { text: "Liquid X cannot boil at reduced atmospheric pressure" }
    ],
    correctAnswer: 1,
    explanation: "* A liquid boils when its saturated vapor pressure equals the external atmospheric pressure.\n* At high altitude, atmospheric pressure is lower, so vapor pressure reaches the external pressure at a lower temperature, resulting in a lower boiling point.",
    level: 3,
    topic: "states-of-matter",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 21 Q4",
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u1_l3_lv3_8-2024",
    question: "An experiment is carried out to investigate the cooling curve of liquid naphthalene. Samples containing different amounts of anthracene impurity are cooled. How does the presence of an impurity affect the freezing point of naphthalene?",
    options: [
      { text: "Freezing occurs sharply at a higher temperature" },
      { text: "Freezing begins at a lower temperature and occurs over a range of temperatures" },
      { text: "The freezing plateau becomes completely vertical" },
      { text: "The impurity prevents the formation of any solid particles" }
    ],
    correctAnswer: 1,
    explanation: "* Foreign molecules (impurities) disrupt the regular arrangement of the crystal lattice.\n* Less thermal energy must be removed for attractive forces to overcome kinetic motion, lowering the freezing point and spreading the transition over a range of temperatures.",
    level: 3,
    topic: "states-of-matter",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 22 Q4",
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u1_l3_lv3_9-2025",
    question: "Which statement explains why steam at 100 °C produces more severe burns than boiling water at 100 °C?",
    options: [
      { text: "Steam particles have a higher temperature than boiling water" },
      { text: "Steam condenses on the skin, releasing a large amount of latent heat of vaporisation in addition to the thermal energy released as hot water cools" },
      { text: "Steam reacts chemically with human skin cells to form acids" },
      { text: "Gas particles move faster and therefore penetrate skin cells mechanically" }
    ],
    correctAnswer: 1,
    explanation: "* Steam at 100 °C contains both sensible heat and latent heat of vaporisation.\n* When steam hits skin, it must first condense into water at 100 °C, releasing roughly 2260 J per gram of latent heat before cooling further as liquid water.",
    level: 3,
    topic: "states-of-matter",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 21 Q4",
    createdAt: "2025-06-01T10:00:00Z"
  }
];



