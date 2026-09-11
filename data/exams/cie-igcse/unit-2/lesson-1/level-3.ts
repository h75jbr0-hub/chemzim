import { Question } from '../../../types';

// Atomic Structure - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u2_l1_lv3_1-2026",
    question: "Why do isotopes of the same element (such as $^{12}_{6}\\text{C}$ and $^{14}_{6}\\text{C}$) have identical chemical properties, but slightly different physical properties such as density and rate of diffusion?",
    options: [
      { text: "They have identical numbers of neutrons but different numbers of electrons" },
      { text: "They have the exact same number and arrangement of outer shell valence electrons, but different mass numbers due to differing neutron counts" },
      { text: "They contain different numbers of protons in their nuclei" },
      { text: "Carbon-14 possesses metallic bonding while Carbon-12 is covalent" }
    ],
    correctAnswer: 1,
    explanation: "* Chemical reactions involve only the valence electrons; since all isotopes of an element share the identical electronic configuration, their chemical reactivity is identical.\n* Physical properties like mass, density, and diffusion rate depend on the nucleus mass (number of neutrons), which differs between isotopes.",
    level: 3,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Specimen Paper 2 Q26",
    createdAt: "2026-04-19T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l1_lv3_2-2026",
    question: "A sample of gallium contains two naturally occurring isotopes: $^{69}\\text{Ga}$ and $^{71}\\text{Ga}$. The relative atomic mass of gallium in the sample is 69.8. What is the percentage abundance of the $^{71}\\text{Ga}$ isotope in this sample?",
    options: [
      { text: "30%" },
      { text: "40%" },
      { text: "50%" },
      { text: "60%" }
    ],
    correctAnswer: 1,
    explanation: "* Let percentage of $^{71}\\text{Ga} = x\\%$, so $^{69}\\text{Ga} = (100 - x)\\%$.\n* $A_r = \\frac{71x + 69(100 - x)}{100} = 69.8$.\n* $71x + 6900 - 69x = 6980 \\implies 2x = 80 \\implies x = 40\\%$.\n* The abundance of $^{71}\\text{Ga}$ is $40\\%$.",
    level: 3,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Series Q28",
    createdAt: "2026-04-19T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l1_lv3_3-2026",
    question: "Consider four species: $^{39}_{19}\\text{K}^+$, $^{40}_{18}\\text{Ar}$, $^{40}_{20}\\text{Ca}^{2+}$, and $^{35}_{17}\\text{Cl}^-$. Which two species are isoelectronic (contain the identical number of electrons) and have the identical number of neutrons?",
    options: [
      { text: "$^{39}_{19}\\text{K}^+$ and $^{40}_{18}\\text{Ar}$" },
      { text: "$^{40}_{18}\\text{Ar}$ and $^{40}_{20}\\text{Ca}^{2+}$" },
      { text: "$^{39}_{19}\\text{K}^+$ and $^{40}_{20}\\text{Ca}^{2+}$" },
      { text: "$^{40}_{20}\\text{Ca}^{2+}$ and $^{35}_{17}\\text{Cl}^-$" }
    ],
    correctAnswer: 1,
    explanation: "* $^{40}_{18}\\text{Ar}$: electrons = 18; neutrons = $40 - 18 = 22$.\n* $^{40}_{20}\\text{Ca}^{2+}$: electrons = $20 - 2 = 18$; neutrons = $40 - 20 = 20$.\n* Let's check $^{39}_{19}\\text{K}^+$: electrons = $19 - 1 = 18$; neutrons = $39 - 19 = 20$.\n* Notice that $^{39}_{19}\\text{K}^+$ and $^{40}_{20}\\text{Ca}^{2+}$ both have 18 electrons and both have $39-19 = 20$ and $40-20 = 20$ neutrons! (Option C matches both 18 electrons and 20 neutrons).",
    level: 3,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Paper 22 Q17",
    createdAt: "2026-04-20T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l1_lv3_4-2026",
    question: "Boron has an atomic number of 5 and a relative atomic mass of 10.81. It consists of two isotopes, $^{10}\\text{B}$ (mass 10.01) and $^{11}\\text{B}$ (mass 11.01). What is the ratio of $^{11}\\text{B}$ atoms to $^{10}\\text{B}$ atoms in natural boron?",
    options: [
      { text: "1 : 1" },
      { text: "4 : 1" },
      { text: "1 : 4" },
      { text: "9 : 1" }
    ],
    correctAnswer: 1,
    explanation: "* Let fraction of $^{11}\\text{B} = y$.\n* $10.01(1 - y) + 11.01y = 10.81 \\implies 10.01 + 1.00y = 10.81 \\implies y = 0.80\\text{ (80\\%)} $.\n* Fraction of $^{10}\\text{B} = 0.20\\text{ (20\\%)}$.\n* The ratio of $^{11}\\text{B}$ to $^{10}\\text{B}$ is $80 : 20 = 4 : 1$.",
    level: 3,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Specimen Paper 2 Q29",
    createdAt: "2026-04-25T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l1_lv3_5-2026",
    question: "A mystery ion $\\text{M}^{2+}$ has 18 electrons and 24 neutrons. What is the nucleon number (mass number) and the elemental identity of atom M?",
    options: [
      { text: "Mass number = 42; Element = Argon (Ar)" },
      { text: "Mass number = 44; Element = Calcium (Ca)" },
      { text: "Mass number = 42; Element = Calcium (Ca)" },
      { text: "Mass number = 40; Element = Titanium (Ti)" }
    ],
    correctAnswer: 1,
    explanation: "* A $2+$ cation has 2 fewer electrons than protons.\n* Number of protons $Z = 18 + 2 = 20\\text{ (Calcium, Ca)}$.\n* Mass number $A = \\text{protons} + \\text{neutrons} = 20 + 24 = 44$.\n* Thus, M is Calcium-44 ($^{44}_{20}\\text{Ca}$).",
    level: 3,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Series Q31",
    createdAt: "2026-04-25T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l1_lv3_6-2026",
    question: "Why does the first ionization energy generally increase across Period 3 from sodium ($2, 8, 1$) to argon ($2, 8, 8$)?",
    options: [
      { text: "Number of electron shells increases across the period" },
      { text: "Nuclear charge (number of protons) increases while electron shielding from inner shells remains approximately constant, pulling valence electrons closer and holding them more tightly" },
      { text: "Valence electrons lose their negative charge across the period" },
      { text: "Atomic radius increases across the period" }
    ],
    correctAnswer: 1,
    explanation: "* Across a period, each successive element adds 1 proton to the nucleus and 1 electron to the same outer shell.\n* Shielding by inner $2, 8$ shells remains constant, so the effective nuclear charge increases, drawing outer electrons closer and requiring more energy to remove an electron.",
    level: 3,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Paper 21 Q21",
    createdAt: "2026-04-26T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l1_lv3_7-2023",
    question: "A sample of neon contains three isotopes: $^{20}\\text{Ne}$ (90.5%), $^{21}\\text{Ne}$ (0.3%), and $^{22}\\text{Ne}$ (9.2%). Which calculation gives the relative atomic mass of neon to 2 decimal places?",
    options: [
      { text: "$\\frac{(20 \\times 90.5) + (21 \\times 0.3) + (22 \\times 9.2)}{100} = 20.19$" },
      { text: "$\\frac{20 + 21 + 22}{3} = 21.00$" },
      { text: "$\\frac{(20 \\times 0.3) + (21 \\times 9.2) + (22 \\times 90.5)}{100} = 21.80$" },
      { text: "$\\frac{(20 \\times 90.5) + (22 \\times 9.2)}{2} = 1006.2$" }
    ],
    correctAnswer: 0,
    explanation: "* The relative atomic mass ($A_r$) takes into account the percentage abundance of all naturally occurring isotopes.\n* $A_r = \\frac{(20 \\times 90.5) + (21 \\times 0.3) + (22 \\times 9.2)}{100} = \\frac{1810 + 6.3 + 202.4}{100} = \\frac{2018.7}{100} \\approx 20.19$.",
    level: 3,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 23 Q6",
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l1_lv3_8-2024",
    question: "Which of the following species contains the same electronic configuration as a fluoride ion ($F^-$)? ($Z$: F = 9, Na = 11, Mg = 12, Al = 13, Ne = 10, O = 8, Cl = 17)",
    options: [
      { text: "$Na^+$, $Mg^{2+}$, and $O^{2-}$" },
      { text: "$Cl^-$, $K^+$, and $Ca^{2+}$" },
      { text: "$Li^+$, $Be^{2+}$, and $H^-$" },
      { text: "$Al^{3+}$, $Si^{4+}$, and $P^{3-}$" }
    ],
    correctAnswer: 0,
    explanation: "* Fluorine has $Z = 9$. The fluoride ion ($F^-$) has gained 1 electron, giving it 10 electrons ($2, 8$).\n* $Na^+$ ($11 - 1 = 10$), $Mg^{2+}$ ($12 - 2 = 10$), and $O^{2-}$ ($8 + 2 = 10$) are all isoelectronic with 10 electrons ($2, 8$).",
    level: 3,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 23 Q6",
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l1_lv3_9-2025",
    question: "An element Z forms an ion with a $3+$ charge. The electron configuration of this ion $Z^{3+}$ is $2, 8$. The nucleus contains 14 neutrons. What is the nucleon number of element Z?",
    options: [
      { text: "24" },
      { text: "27" },
      { text: "14" },
      { text: "17" }
    ],
    correctAnswer: 1,
    explanation: "* The ion $Z^{3+}$ has $2 + 8 = 10$ electrons.\n* Because it lost 3 electrons to form $Z^{3+}$, the neutral atom has $10 + 3 = 13$ electrons and therefore 13 protons (aluminum, Al).\n* Nucleon number = protons + neutrons = $13 + 14 = 27$.",
    level: 3,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 22 Q5",
    createdAt: "2025-06-01T10:00:00Z"
  }
];



