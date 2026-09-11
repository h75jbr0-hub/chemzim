import { Question } from '../../../types';

// Kinetic Particle Theory - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u1_l4_lv2_1-2026",
    question: "A bicycle tire is pumped up with air on a cold morning. After the bicycle is ridden vigorously on hot asphalt for two hours, the pressure inside the tire is found to have increased significantly. Which kinetic theory explanation accounts for this pressure rise?",
    options: [
      { text: "Air particles have expanded to twice their original volume" },
      { text: "Friction and heat increased the kinetic energy of air particles, causing them to move faster and collide more frequently and forcefully with the inner tire walls" },
      { text: "Rubber atoms degraded and turned into extra gas molecules" },
      { text: "Atmospheric air leaked into the tire through the valve" }
    ],
    correctAnswer: 1,
    explanation: "* Heating the gas increases the average kinetic energy and velocity of the trapped air molecules.\n* Because the tire volume is relatively fixed, more energetic and frequent wall collisions exert a higher total force per unit area, increasing the pressure.",
    level: 2,
    topic: "states-of-matter",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Specimen Paper 2 Q19",
    createdAt: "2026-04-05T10:00:00Z"
  },
  {
    id: "ex_ci_u1_l4_lv2_2-2026",
    question: "What happens on a sub-microscopic level when a liquid evaporates from an open dish at room temperature?",
    options: [
      { text: "All particles in the liquid gain energy simultaneously and convert into gas" },
      { text: "Only particles near the surface with kinetic energy greater than the average overcome intermolecular attractive forces and escape as vapor" },
      { text: "Particles near the bottom of the dish break down into individual atoms" },
      { text: "Air molecules enter the liquid and push out water particles mechanically" }
    ],
    correctAnswer: 1,
    explanation: "* Particles in a liquid possess a distribution of kinetic energies.\n* Only those particles at the surface that happen to possess enough kinetic energy to overcome intermolecular attractions are able to break free into the gas phase.",
    level: 2,
    topic: "states-of-matter",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Series Q21",
    createdAt: "2026-04-05T10:00:00Z"
  },
  {
    id: "ex_ci_u1_l4_lv2_3-2026",
    question: "A sealed syringe containing a fixed mass of gas at constant temperature has its volume halved by pushing the plunger in. What happens to the pressure of the gas, and why?",
    options: [
      { text: "Pressure is halved because particles slow down" },
      { text: "Pressure doubles because the number of gas particles per unit volume doubles, doubling the frequency of collisions with the walls (Boyle's Law)" },
      { text: "Pressure remains unchanged because temperature is constant" },
      { text: "Pressure quadruples because particles become heavier" }
    ],
    correctAnswer: 1,
    explanation: "* Halving the volume halves the available space, doubling particle concentration (particles per $\\text{cm}^3$).\n* With twice as many particles near each $\\text{cm}^2$ of wall surface, wall collision frequency doubles, exactly doubling the measured gas pressure ($P_1 V_1 = P_2 V_2$).",
    level: 2,
    topic: "states-of-matter",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Paper 21 Q15",
    createdAt: "2026-04-06T10:00:00Z"
  },
  {
    id: "ex_ci_u1_l4_lv2_4-2026",
    question: "A solid substance is heated continuously until it becomes a gas. During which regions of the heating process does the average kinetic energy of the particles increase?",
    options: [
      { text: "Only during the melting and boiling plateaus" },
      { text: "Only when the temperature is rising (solid heating, liquid heating, gas heating)" },
      { text: "During all stages of heating, including phase changes" },
      { text: "Kinetic energy remains constant throughout heating" }
    ],
    correctAnswer: 1,
    explanation: "* Kinetic energy is directly proportional to temperature.\n* Whenever the temperature curve is sloping upwards (solid, liquid, or gas heating), average kinetic energy is increasing.\n* During flat plateaus (melting/boiling), temperature is constant so kinetic energy does not change (only potential energy increases).",
    level: 2,
    topic: "states-of-matter",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Specimen Paper 2 Q22",
    createdAt: "2026-04-11T10:00:00Z"
  },
  {
    id: "ex_ci_u1_l4_lv2_5-2026",
    question: "A closed aerosol can is heated in a fire. What two factors explain why the can will eventually explode?",
    options: [
      { text: "Particles become larger and dissolve the metal" },
      { text: "Gas particles move with greater speed and collide much more frequently and violently with the walls, while propellant liquid evaporates to add even more gas particles, until internal pressure exceeds metal strength" },
      { text: "Outside air rushes inside the can creating a vacuum" },
      { text: "The metal walls shrink due to heat" }
    ],
    correctAnswer: 1,
    explanation: "* High temperature increases both the kinetic energy of gas molecules and causes liquid propellant to vaporize.\n* The resulting extreme increase in wall collision frequency and momentum transfer causes internal gas pressure to exceed the container's structural threshold.",
    level: 2,
    topic: "states-of-matter",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Series Q24",
    createdAt: "2026-04-11T10:00:00Z"
  },
  {
    id: "ex_ci_u1_l4_lv2_6-2026",
    question: "Why do wet clothes dry faster when hung outdoors on a windy, warm day compared to a cold, still day?",
    options: [
      { text: "Wind chemically splits water into hydrogen and oxygen gases" },
      { text: "Higher temperature gives more water molecules sufficient kinetic energy to evaporate, while moving air removes humid water vapor from near the cloth surface, maintaining a steep concentration gradient" },
      { text: "Wind cools the clothes to induce freezing" },
      { text: "Cold air holds more moisture than warm air" }
    ],
    correctAnswer: 1,
    explanation: "* Warmth increases the fraction of surface water molecules with energy $\\ge$ the escape threshold.\n* Wind blows away freshly evaporated water vapor molecules, preventing them from condensing back and maintaining a rapid rate of net evaporation.",
    level: 2,
    topic: "states-of-matter",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Paper 22 Q15",
    createdAt: "2026-04-12T10:00:00Z"
  },
  {
    id: "ex_ci_u1_l4_lv2_7-2023",
    question: "A sealed rigid container contains helium gas. The container is heated from 300 K to 600 K. What happens to the average speed of the helium atoms and the pressure inside the container?",
    options: [
      { text: "Average speed increases; pressure doubles" },
      { text: "Average speed remains constant; pressure doubles" },
      { text: "Average speed doubles; pressure quadruples" },
      { text: "Average speed halves; pressure halves" }
    ],
    correctAnswer: 0,
    explanation: "* By Gay-Lussac's Law, for a fixed volume of gas, pressure is directly proportional to absolute temperature in Kelvin ($P \\propto T$).\n* Doubling absolute temperature from 300 K to 600 K doubles the pressure, because particles have greater average speed and kinetic energy, hitting the walls more forcefully and frequently.",
    level: 2,
    topic: "states-of-matter",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 21 Q5",
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u1_l4_lv2_8-2024",
    question: "A gas is contained in a syringe. The piston is pulled outward slowly at constant temperature, increasing the volume of the gas from 20 cm³ to 40 cm³. How does this change affect the pressure exerted by the gas?",
    options: [
      { text: "Pressure doubles because particles travel faster" },
      { text: "Pressure is halved because the same number of particles collide with a larger surface area less frequently" },
      { text: "Pressure remains unchanged because temperature is constant" },
      { text: "Pressure drops to zero immediately" }
    ],
    correctAnswer: 1,
    explanation: "* According to Boyle's Law ($P_1V_1 = P_2V_2$), at constant temperature, pressure is inversely proportional to volume.\n* Doubling the volume halves the particle concentration, meaning collisions per unit area of the container walls are halved.",
    level: 2,
    topic: "states-of-matter",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 22 Q5",
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u1_l4_lv2_9-2025",
    question: "Which of the following changes will decrease the rate of evaporation of water from an open beaker?",
    options: [
      { text: "Increasing the surface area of the water" },
      { text: "Increasing the humidity of the surrounding air" },
      { text: "Increasing the temperature of the water" },
      { text: "Blowing dry air over the surface of the beaker" }
    ],
    correctAnswer: 1,
    explanation: "* High atmospheric humidity means the air already contains a high concentration of water vapor molecules.\n* This reduces the net rate of evaporation because more water vapor molecules condense back into the liquid.",
    level: 2,
    topic: "states-of-matter",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 21 Q5",
    createdAt: "2025-06-01T10:00:00Z"
  }
];



