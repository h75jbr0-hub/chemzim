import { Question } from '../../../types';

// Diffusion - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u1_l2_lv3_1-2026",
    question: "A diffusion tube apparatus with concentrated NH₃ solution at one end and concentrated HCl solution at the other is set up twice: first at 20 °C and then at 50 °C. What differences are observed in the 50 °C experiment compared to the 20 °C experiment?",
    options: [
      { text: "The white ring forms in a shorter time, and forms at the same relative position along the tube" },
      { text: "The white ring forms in a longer time, closer to the ammonia end" },
      { text: "The white ring forms in a shorter time, exactly in the middle of the tube" },
      { text: "The white ring does not form at 50 °C because gases decompose" }
    ],
    correctAnswer: 0,
    explanation: "* At 50 °C, both NH₃ and HCl molecules have higher kinetic energies and move faster, so they meet in a significantly shorter time.\n* Because the ratio of their masses ($17 : 36.5$) remains unchanged, NH₃ still diffuses faster than HCl by the same proportion, forming the ring in the same relative position (closer to the HCl end).",
    level: 3,
    topic: "states-of-matter",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Specimen Paper 2 Q8",
    createdAt: "2026-03-14T10:00:00Z"
  },
  {
    id: "ex_ci_u1_l2_lv3_2-2026",
    question: "A porous pot containing air ($M_r \\approx 29$) is connected to a U-tube manometer containing colored liquid. An inverted beaker filled with hydrogen gas (H₂, $M_r = 2$) is placed over the porous pot. What happens to the liquid level in the manometer arm connected to the porous pot, and why?",
    options: [
      { text: "The liquid level rises because air escapes through the porous pot faster than hydrogen enters" },
      { text: "The liquid level falls because hydrogen gas ($M_r = 2$) diffuses into the pot faster than air ($M_r = 29$) diffuses out, increasing the pressure inside" },
      { text: "The liquid level remains unchanged because total volume of gas is conserved" },
      { text: "The liquid level falls because hydrogen reacts chemically with the clay walls" }
    ],
    correctAnswer: 1,
    explanation: "* Hydrogen has a much smaller relative molecular mass ($M_r = 2$) than air ($M_r \\approx 29$), so it diffuses through the porous pot much faster than air can diffuse outwards.\n* More gas enters the pot than leaves, raising the internal gas pressure and pushing the liquid level down in the connected arm of the manometer.",
    level: 3,
    topic: "states-of-matter",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Series Q10",
    createdAt: "2026-03-14T10:00:00Z"
  },
  {
    id: "ex_ci_u1_l2_lv3_3-2026",
    question: "A sample containing nitrogen gas (N₂, $M_r = 28$), carbon monoxide (CO, $M_r = 28$), and ethene (C₂H₄, $M_r = 28$) is placed in a diffusion chamber. Which statement accurately compares their rates of diffusion at the same temperature and pressure?",
    options: [
      { text: "C₂H₄ diffuses fastest because it is an organic hydrocarbon" },
      { text: "CO diffuses fastest because it contains polar bonds" },
      { text: "All three gases diffuse at approximately identical rates because they have identical relative molecular masses ($M_r = 28$)" },
      { text: "N₂ diffuses slowest because of its triple covalent bond" }
    ],
    correctAnswer: 2,
    explanation: "* The rate of diffusion of a gas depends directly on its relative molecular mass ($M_r$) and temperature, not on its chemical bond type or polarity.\n* Since $\\text{N}_2$ ($28$), $\\text{CO}$ ($12 + 16 = 28$), and $\\text{C}_2\\text{H}_4$ ($24 + 4 = 28$) share the exact same $M_r$, their particles possess identical average speeds and diffuse at identical rates.",
    level: 3,
    topic: "states-of-matter",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Paper 22 Q5",
    createdAt: "2026-03-15T10:00:00Z"
  },
  {
    id: "ex_ci_u1_l2_lv3_4-2026",
    question: "A long horizontal tube of length 100 cm is fitted with cotton wool soaked in methylamine (CH₃NH₂, $M_r = 31$) at one end and hydrogen chloride (HCl, $M_r = 36.5$) at the other. Solid methylammonium chloride forms inside the tube. Where will the deposit form?",
    options: [
      { text: "At exactly 50 cm from the methylamine end" },
      { text: "Slightly further than 50 cm from the methylamine end (closer to the HCl end)" },
      { text: "At 10 cm from the methylamine end" },
      { text: "No solid can form between an amine and an acid in the gas phase" }
    ],
    correctAnswer: 1,
    explanation: "* Methylamine ($\text{CH}_3\text{NH}_2, M_r = 31$) has a slightly lower relative molecular mass than hydrogen chloride ($\text{HCl}, M_r = 36.5$).\n* Because it is lighter, methylamine travels slightly faster and covers slightly more than half the tube distance (e.g. $\\approx 52\\text{ cm}$), forming the deposit closer to the HCl end.",
    level: 3,
    topic: "states-of-matter",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Specimen Paper 2 Q11",
    createdAt: "2026-03-20T10:00:00Z"
  },
  {
    id: "ex_ci_u1_l2_lv3_5-2026",
    question: "A mixture of helium (He, $A_r = 4$) and sulfur hexafluoride (SF₆, $M_r = 146$) is placed in an effusion apparatus. By what theoretical factor does helium diffuse faster than sulfur hexafluoride at the same temperature?",
    options: [
      { text: "$\\approx 2$ times faster" },
      { text: "$\\approx 6$ times faster" },
      { text: "$\\approx 36.5$ times faster" },
      { text: "$\\approx 146$ times faster" }
    ],
    correctAnswer: 1,
    explanation: "* According to Graham's Law of diffusion, $\\text{Rate}_1 / \\text{Rate}_2 = \\sqrt{M_2 / M_1}$.\n* For He and $\\text{SF}_6$: $\\sqrt{146 / 4} = \\sqrt{36.5} \\approx 6.04$.\n* Helium gas molecules travel and diffuse approximately 6 times faster than heavy sulfur hexafluoride molecules.",
    level: 3,
    topic: "states-of-matter",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Series Q13",
    createdAt: "2026-03-20T10:00:00Z"
  },
  {
    id: "ex_ci_u1_l2_lv3_6-2026",
    question: "A student performs the ammonia and hydrochloric acid diffusion tube experiment using aqueous solutions of different concentrations. How does increasing the concentration of both solutions affect the time taken for the ring to form and its position?",
    options: [
      { text: "The ring forms in less time, but in the same position" },
      { text: "The ring forms in more time, closer to the ammonia end" },
      { text: "The ring forms in less time, closer to the ammonia end" },
      { text: "Neither the time nor the position changes" }
    ],
    correctAnswer: 0,
    explanation: "* Higher solution concentrations produce a steeper concentration gradient and a greater rate of vaporization at each end, causing sufficient gas to meet and form visible solid particles in a shorter time.\n* The position of the ring depends solely on the relative velocities ($M_r$) of the gases, which does not change with concentration.",
    level: 3,
    topic: "states-of-matter",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Paper 21 Q9",
    createdAt: "2026-03-21T10:00:00Z"
  },
  {
    id: "ex_ci_u1_l2_lv3_7-2023",
    question: "A porous pot containing air is connected to a U-tube manometer filled with colored water. A beaker containing gas Z is placed over the porous pot. The colored liquid level in the U-tube falls on the side connected to the porous pot and rises on the open side. What could be the identity of gas Z?",
    options: [
      { text: "Hydrogen ($H_2$, $M_r = 2$)" },
      { text: "Carbon dioxide ($CO_2$, $M_r = 44$)" },
      { text: "Sulfur dioxide ($SO_2$, $M_r = 64$)" },
      { text: "Chlorine ($Cl_2$, $M_r = 71$)" }
    ],
    correctAnswer: 0,
    explanation: "* The water level in the limb attached to the pot is pushed down, indicating an increase in gas pressure inside the pot.\n* This occurs when gas Z diffuses into the pot faster than air ($M_r \\approx 29$) diffuses out.\n* Gas Z must therefore have a lower relative molecular mass ($M_r$) than air. Hydrogen ($M_r = 2$) is the only gas lighter than air among the options.",
    level: 3,
    topic: "states-of-matter",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 21 Q3",
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u1_l2_lv3_8-2024",
    question: "A long glass tube is set up with cotton wool soaked in concentrated aqueous ammonia at one end and concentrated hydrochloric acid at the other. The experiment is carried out at $20\\text{ }^{\\circ}\\text{C}$ and the white ring forms at distance $d$ from the HCl end after 5 minutes. If the experiment is repeated at $40\\text{ }^{\\circ}\\text{C}$, what will happen to the time taken and the position of the ring?",
    options: [
      { text: "Time taken is less than 5 minutes; ring forms at approximately distance $d$" },
      { text: "Time taken is more than 5 minutes; ring forms closer to the NH₃ end" },
      { text: "Time taken is less than 5 minutes; ring forms at the exact center of the tube" },
      { text: "Time taken remains 5 minutes; ring forms closer to the HCl end" }
    ],
    correctAnswer: 0,
    explanation: "* At higher temperature ($40\\text{ }^{\\circ}\\text{C}$), particles have greater kinetic energy and travel faster, so they meet in less time (less than 5 minutes).\n* Both gases speed up proportionally according to Graham's Law, so the relative ratio of their speeds remains nearly unchanged and the white ring still forms at approximately the same position $d$ (closer to the heavier HCl).",
    level: 3,
    topic: "states-of-matter",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 22 Q3",
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u1_l2_lv3_9-2025",
    question: "Four gas jars contain different pure gases: ammonia (NH₃), methane (CH₄), nitrogen (N₂), and propane (C₃H₈). If identical tiny pinhole leaks are introduced in each jar under identical conditions, which gas will escape the fastest?",
    options: [
      { text: "Propane ($C_3H_8$)" },
      { text: "Nitrogen ($N_2$)" },
      { text: "Ammonia ($NH_3$)" },
      { text: "Methane ($CH_4$)" }
    ],
    correctAnswer: 3,
    explanation: "* Rate of effusion/diffusion through a small hole is inversely proportional to the square root of relative molecular mass ($M_r$).\n* Relative molecular masses: $CH_4 = 16$, $NH_3 = 17$, $N_2 = 28$, $C_3H_8 = 44$.\n* Methane ($CH_4$) has the lowest molar mass ($M_r = 16$), so its molecules have the highest average velocity and escape the fastest.",
    level: 3,
    topic: "states-of-matter",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 21 Q3",
    createdAt: "2025-06-01T10:00:00Z"
  }
];



