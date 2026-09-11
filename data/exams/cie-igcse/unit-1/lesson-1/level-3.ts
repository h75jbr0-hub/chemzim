import { Question } from '../../../types';

export const level3Questions: Question[] = [
  {
    id: "ex_ci_u1_l1_lv3_1-2026",
    question: "Cotton wool soaked in concentrated ammonia solution (NH₃, $M_r = 17$) and cotton wool soaked in concentrated hydrochloric acid (HCl, $M_r = 36.5$) are placed at opposite ends of a sealed glass tube. A white ring of solid ammonium chloride forms. Which statement correctly identifies where the ring forms and explains why?",
    options: [
      { text: "In the exact center because both gases diffuse at identical rates under standard conditions" },
      { text: "Closer to the hydrochloric acid end because ammonia has a lower $M_r$ and diffuses faster" },
      { text: "Closer to the ammonia end because hydrochloric acid has a higher $M_r$ and diffuses faster" },
      { text: "Immediately at the ammonia end because HCl cannot diffuse in the gaseous state" }
    ],
    correctAnswer: 1,
    explanation: "* The rate of diffusion of a gas is inversely related to its relative molecular mass ($M_r$).\n* Ammonia ($M_r = 17$) is lighter than hydrogen chloride ($M_r = 36.5$) and therefore travels faster.\n* As a consequence, the two gases meet and react to form ammonium chloride closer to the HCl end.",
    level: 3,
    topic: "states-of-matter",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Specimen Paper 2 Q3",
    createdAt: "2026-01-15T10:00:00Z"
  },
  {
    id: "ex_ci_u1_l1_lv3_2-2026",
    question: "Four porous pots each containing a different gas are placed in an atmosphere of air ($M_r \\approx 29$). In which apparatus will the liquid level in the U-tube manometer rise on the side connected to the porous pot?",
    options: [
      { text: "Porous pot filled with hydrogen gas (H₂, $M_r = 2$)" },
      { text: "Porous pot filled with carbon dioxide (CO₂, $M_r = 44$)" },
      { text: "Porous pot filled with methane (CH₄, $M_r = 16$)" },
      { text: "Porous pot filled with neon (Ne, $M_r = 20$)" }
    ],
    correctAnswer: 1,
    explanation: "* For the liquid level to rise on the pot side, the pressure inside the pot must decrease.\n* Carbon dioxide ($M_r = 44$) is denser and diffuses out slower than air ($M_r \\approx 29$) diffuses in, or vice-versa: when CO₂ is inside, air diffuses in faster, increasing internal pressure; when CO₂ diffuses outwards into air, internal pressure drops.\n* For a pot filled with CO₂ placed in air, CO₂ diffuses out slower than air diffuses in initially, but if surrounding gas is lighter, internal pressure differences depend on relative diffusion rates ($M_r$).",
    level: 3,
    topic: "states-of-matter",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Series Q4",
    createdAt: "2026-02-18T10:00:00Z"
  },
  {
    id: "ex_ci_u1_l1_lv3_3-2026",
    question: "A mixture containing sulfur dioxide gas (SO₂, $M_r = 64$), methane (CH₄, $M_r = 16$), and helium (He, $A_r = 4$) is allowed to diffuse through a small porous membrane at 25 °C. What is the correct order of the gases in increasing order of their rate of diffusion?",
    options: [
      { text: "He < CH₄ < SO₂" },
      { text: "SO₂ < CH₄ < He" },
      { text: "CH₄ < SO₂ < He" },
      { text: "SO₂ < He < CH₄" }
    ],
    correctAnswer: 1,
    explanation: "* Rate of diffusion is inversely proportional to the square root of relative molecular/atomic mass.\n* SO₂ ($M_r = 64$) has the highest mass and slowest diffusion rate.\n* CH₄ ($M_r = 16$) is intermediate, while He ($A_r = 4$) is the lightest and diffuses fastest.\n* Therefore, the increasing order of diffusion rate is $\\text{SO}_2 < \\text{CH}_4 < \\text{He}$.",
    level: 3,
    topic: "states-of-matter",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Paper 21 Q2",
    createdAt: "2026-02-20T10:00:00Z"
  },
  {
    id: "ex_ci_u1_l1_lv3_4-2026",
    question: "A gas is kept in a cylinder fitted with a frictionless piston. When the gas is heated at constant pressure, its volume expands. Which kinetic explanation accounts for why the volume must increase to keep pressure constant?",
    options: [
      { text: "Particles expand in volume, requiring more physical space" },
      { text: "Faster-moving particles collide more forcefully and frequently with the piston, pushing it outward until the collision frequency per unit area matches external pressure" },
      { text: "Intermolecular forces between gas particles strengthen upon heating" },
      { text: "Air particles from outside enter through the piston seal" }
    ],
    correctAnswer: 1,
    explanation: "* Heating increases average kinetic energy and velocity of gas particles.\n* To maintain constant pressure (constant force per unit surface area), the gas expands, increasing the surface area and distance between particles to balance the collision rate per unit area.",
    level: 3,
    topic: "states-of-matter",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Specimen Paper 2 Q5",
    createdAt: "2026-03-05T10:00:00Z"
  },
  {
    id: "ex_ci_u1_l1_lv3_5-2026",
    question: "A cooling curve of liquid naphthalene is plotted as it solidifies at 80 °C. What happens to the energy and arrangement of particles during the horizontal plateau region of the cooling curve?",
    options: [
      { text: "Particles lose kinetic energy while their arrangement remains disordered" },
      { text: "Potential energy is released as intermolecular bonds form, keeping the kinetic energy and temperature constant as particles enter a regular lattice" },
      { text: "Particles absorb heat from the cooler surroundings to avoid freezing" },
      { text: "Particles speed up as they lock into rigid fixed positions" }
    ],
    correctAnswer: 1,
    explanation: "* During freezing (liquid to solid), latent heat of fusion is released as new attractive forces/bonds form between particles.\n* This released energy balances heat loss to the surroundings, keeping the average kinetic energy and temperature constant while particles form a regular lattice.",
    level: 3,
    topic: "states-of-matter",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Series Q7",
    createdAt: "2026-03-05T10:00:00Z"
  },
  {
    id: "ex_ci_u1_l1_lv3_6-2026",
    question: "In a gas diffusion experiment, 100 cm³ of oxygen gas (O₂, $M_r = 32$) takes 40 seconds to diffuse through a pinhole. Under the exact same temperature and pressure, how long would it take for 100 cm³ of methane gas (CH₄, $M_r = 16$) to diffuse through the same pinhole?",
    options: [
      { text: "20 seconds" },
      { text: "28.3 seconds (less than 40 seconds because CH₄ is lighter)" },
      { text: "56.6 seconds (longer because CH₄ has less mass)" },
      { text: "80 seconds" }
    ],
    correctAnswer: 1,
    explanation: "* According to Graham's law, rate of diffusion $\\propto 1/\\sqrt{M_r}$, meaning lighter gases diffuse faster in less time.\n* Since CH₄ ($M_r = 16$) has half the molar mass of O₂ ($M_r = 32$), CH₄ travels $\\sqrt{32/16} = \\sqrt{2} \\approx 1.414$ times faster.\n* Time taken for $\\text{CH}_4 = 40 / 1.414 \\approx 28.3\\text{ seconds}$.",
    level: 3,
    topic: "states-of-matter",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Paper 21 Q5",
    createdAt: "2026-03-06T10:00:00Z"
  },
  {
    id: "ex_ci_u1_l1_lv3_7-2023",
    question: "A cylinder fitted with a frictionless piston contains an ideal gas at $25\\text{ }^{\\circ}\\text{C}$. The gas is heated slowly to $50\\text{ }^{\\circ}\\text{C}$ while the external atmospheric pressure remains constant. Which statement accurately describes what occurs at the molecular level?",
    options: [
      { text: "The volume doubles because the temperature in degrees Celsius doubles" },
      { text: "The average kinetic energy increases, molecules hit the piston more vigorously, and the gas expands so collision frequency per unit area matches the external pressure" },
      { text: "The particles expand in diameter, causing the total volume to increase without any change in kinetic energy" },
      { text: "The collision rate per unit area increases permanently, causing permanent pressure rise" }
    ],
    correctAnswer: 1,
    explanation: "* Heating increases the average kinetic energy of gas molecules.\n* The particles collide harder and more frequently with the piston, pushing it outwards.\n* As the volume increases, particles travel greater distances between collisions, restoring the internal pressure to equilibrium with external atmospheric pressure.\n* Note that volume is proportional to Kelvin temperature (not Celsius), so volume does not double.",
    level: 3,
    topic: "states-of-matter",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 23 Q2",
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u1_l1_lv3_8-2024",
    question: "A sample of pure solid stearic acid is melted and then allowed to cool slowly while its temperature is recorded at 1-minute intervals. A flat horizontal plateau is observed on the cooling curve at 69 °C. Which statement explains why the temperature remains constant during this time interval?",
    options: [
      { text: "The thermometer stops functioning because the liquid becomes too viscous" },
      { text: "Energy is absorbed by the particles to overcome intermolecular forces" },
      { text: "Energy released as intermolecular attractions form compensates for the heat being lost to the surroundings" },
      { text: "Stearic acid decomposes into liquid components with higher melting points" }
    ],
    correctAnswer: 2,
    explanation: "* During freezing (liquid to solid transition), latent heat of fusion is released as intermolecular bonds form.\n* This released thermal energy balances the rate of heat loss to the surroundings, keeping the average kinetic energy of particles and therefore the temperature constant.",
    level: 3,
    topic: "states-of-matter",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 23 Q1",
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u1_l1_lv3_9-2025",
    question: "The graph shows the heating curve for a pure substance initially in the solid state. If the substance is impure, how would the melting region on the heating curve differ?",
    options: [
      { text: "It would melt sharply at a higher fixed temperature" },
      { text: "It would melt over a temperature range and at a lower temperature than the pure substance" },
      { text: "It would sublime directly without any plateau region" },
      { text: "The flat plateau would remain completely unchanged because impurities only affect boiling" }
    ],
    correctAnswer: 1,
    explanation: "* Impurities disrupt the regular crystal lattice structure of a solid.\n* Consequently, impurities lower the melting point and cause the substance to melt over a range of temperatures rather than at a sharp, distinct melting point.",
    level: 3,
    topic: "states-of-matter",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 21 Q2",
    createdAt: "2025-06-01T10:00:00Z"
  }
];


