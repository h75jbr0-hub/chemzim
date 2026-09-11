export const lessonQuiz = [
    {
        id: "EDEXCEL-U1-L2-Q1-EASY-20260106",
        question: "Which of the following describes the relationship between isotopes of the same element?",
        options: [
            { text: "They have the same mass number but different atomic numbers." },
            { text: "They have the same number of neutrons but different numbers of protons." },
            { text: "They have the same number of protons but different numbers of neutrons.", isCorrect: true },
            { text: "They have different chemical properties due to the difference in mass." }
        ],
        explanation: "Isotopes are atoms of the same element containing the same number of protons (atomic number) but a different number of neutrons (mass number), leading to different physical masses."
    },
    {
        id: "EDEXCEL-U1-L2-Q2-EASY-20260106",
        question: "How many protons, neutrons, and electrons are present in the phosphide ion (${}^{31}_{15}\\text{P}^{3-}$)?",
        options: [
            { text: "15 protons, 16 neutrons, 15 electrons" },
            { text: "15 protons, 16 neutrons, 18 electrons", isCorrect: true },
            { text: "15 protons, 31 neutrons, 18 electrons" },
            { text: "16 protons, 15 neutrons, 18 electrons" }
        ],
        explanation: "Phosphorus has an atomic number of 15, so protons = 15. Neutrons = Mass number - Atomic number = 31 - 15 = 16. The 3- charge means it has gained 3 electrons, so electrons = 15 + 3 = 18"
    },
    {
        id: "EDEXCEL-U1-L2-Q3-MEDIUM-20260106",
        question: "Why do isotopes of carbon (${}^{12}\\text{C}$ and ${}^{13}\\text{C}$) behave identically in chemical reactions?",
        options: [
            { text: "They have the same number of neutrons." },
            { text: "They have the same mass number." },
            { text: "They have the same number of valence electrons and electronic configuration.", isCorrect: true },
            { text: "Their nuclei have the same total mass." }
        ],
        explanation: "Chemical reactivity is determined by the number of outer shell electrons and their arrangements. Because carbon isotopes have identical electron configurations ($1s^2 2s^2 2p^2$), they have identical chemical properties"
    },
    {
        id: "EDEXCEL-U1-L2-Q4-MEDIUM-20260106",
        question: "Which of the following ions contains the largest number of neutrons?",
        options: [
            { text: "${}^{37}\\text{Cl}^{-}$" },
            { text: "${}^{39}\\text{K}^{+}$" },
            { text: "${}^{40}\\text{Ca}^{2+}$" },
            { text: "${}^{45}\\text{Sc}^{3+}$", isCorrect: true }
        ],
        explanation: "Neutrons = Mass Number (A) - Proton Number (Z). Let's calculate:\n- ${}^{37}\\text{Cl}^-$ (Z=17): 37 - 17 = 20\n- ${}^{39}\\text{K}^+$ (Z=19): 39 - 19 = 20\n- ${}^{40}\\text{Ca}^{2+}$ (Z=20): 40 - 20 = 20\n- ${}^{45}\\text{Sc}^{3+}$ (Z=21): 45 - 21 = 24 neutrons. Scandium contains the most"
    },
    {
        id: "EDEXCEL-U1-L2-Q5-MEDIUM-20260106",
        question: "A species has 26 protons, 30 neutrons, and 24 electrons. What is the correct symbol for this species?",
        options: [
            { text: "${}^{56}\\text{Fe}^{2+}$", isCorrect: true },
            { text: "${}^{56}\\text{Fe}^{2-}$" },
            { text: "${}^{56}\\text{Ni}^{2+}$" },
            { text: "${}^{56}\\text{Cr}^{2-}$" }
        ],
        explanation: "26 protons corresponds to Iron (Fe). Mass number = Protons + Neutrons = 26 + 30 = 56. Since there are 24 electrons (which is 2 fewer than protons), the species has a 2+ charge (${}^{56}\\text{Fe}^{2+}$)"
    },
    {
        id: "EDEXCEL-U1-L2-Q6-EASY-20260106",
        question: "What is the function of the magnetic field in the mass spectrometer described in the lesson?",
        options: [
            { text: "To accelerate the positive ions to high speeds." },
            { text: "To vaporise the sample before ionisation." },
            { text: "To deflect the accelerated positive ions based on their mass-to-charge ratio.", isCorrect: true },
            { text: "To detect the abundance of the isotopes." }
        ],
        explanation: "In this mass spectrometer, the magnetic field is used in the deflection stage to bend the path of the accelerated positive ions. The degree of deflection is determined by the mass-to-charge ($m/z$) ratio of each ion."
    },
    {
        id: "EDEXCEL-U1-L2-Q7-MEDIUM-20260106",
        question: "A sample of gallium consists of ${}^{69}\\text{Ga}$ and ${}^{71}\\text{Ga}$. If the relative atomic mass of this sample is 69.80, what is the percentage abundance of the ${}^{69}\\text{Ga}$ isotope?",
        options: [
            { text: "30.0%" },
            { text: "40.0%" },
            { text: "60.0%", isCorrect: true },
            { text: "70.0%" }
        ],
        explanation: "Let the abundance of ${}^{69}\\text{Ga}$ be $x\\%$. Then ${}^{71}\\text{Ga}$ is $(100 - x)\\%$.\n69.80 = [69x + 71(100 - x)] / 100\n6980 = 69x + 7100 - 71x\n-2x = -120\nx = 60. Therefore, the abundance of ${}^{69}\\text{Ga}$ is 60.0%"
    },
    {
        id: "EDEXCEL-U1-L2-Q8-MEDIUM-20260106",
        question: "Which of the following factors determines the degree of deflection of an ion in the magnetic field of the mass spectrometer?",
        options: [
            { text: "Only the charge of the ion." },
            { text: "Both the mass and the charge of the ion (mass-to-charge ratio).", isCorrect: true },
            { text: "Only the mass of the ion." },
            { text: "The chemical reactivity of the element." }
        ],
        explanation: "The amount of deflection depends on the mass-to-charge ratio ($m/z$). Ions with a smaller $m/z$ (lighter ions or those with a higher charge) are deflected more, while ions with a larger $m/z$ (heavier ions or those with a lower charge) are deflected less."
    },
    {
        id: "EDEXCEL-U1-L2-Q9-HARD-20260106",
        question: "How are positive ions formed during the ionisation stage in the mass spectrometer?",
        options: [
            { text: "The vaporised sample is bombarded with high-energy electrons from an electron gun to knock off one or more electrons.", isCorrect: true },
            { text: "The sample gains protons from a volatile polar solvent." },
            { text: "The sample reacts with a gaseous catalyst to produce positive ions." },
            { text: "The sample loses protons due to high-voltage electric discharge." }
        ],
        explanation: "In the ionisation stage of the mass spectrometer, vaporised gaseous particles are bombarded with high-energy electrons. This collision knocks off one or more electrons from the atoms or molecules, forming positive ions (typically $\\text{M}^+$)."
    },
    {
        id: "EDEXCEL-U1-L2-Q10-EASY-20260106",
        question: "What is the maximum number of electrons that can occupy a single d-orbital?",
        options: [
            { text: "2", isCorrect: true },
            { text: "6" },
            { text: "10" },
            { text: "14" }
        ],
        explanation: "Regardless of the subshell type (s, p, d, or f), any single orbital can hold a maximum of 2 electrons with opposite spins, according to the Pauli Exclusion Principle."
    },
    {
        id: "EDEXCEL-U1-L2-Q11-MEDIUM-20260106",
        question: "Which of the following is the correct electronic configuration of a neutral copper ($\\text{Cu}$) atom ($Z = 29$)?",
        options: [
            { text: "$1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^9$" },
            { text: "$1s^2 2s^2 2p^6 3s^2 3p^6 4s^1 3d^{10}$", isCorrect: true },
            { text: "$1s^2 2s^2 2p^6 3s^2 3p^6 3d^{11}$" },
            { text: "$1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^{10}$" }
        ],
        explanation: "Copper is an exception to the Aufbau principle. An electron is promoted from the $4s$ subshell to the $3d$ subshell to achieve a full, more stable $3d^{10}$ d-subshell arrangement ($[\\text{Ar}] 4s^1 3d^{10}$)"
    },
    {
        id: "EDEXCEL-U1-L2-Q12-MEDIUM-20260106",
        question: "What is the correct electronic configuration of the iron(II) ion ($\\text{Fe}^{2+}$, $Z = 26$)?",
        options: [
            { text: "$1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^4$" },
            { text: "$1s^2 2s^2 2p^6 3s^2 3p^6 3d^6$", isCorrect: true },
            { text: "$1s^2 2s^2 2p^6 3s^2 3p^6 4s^1 3d^5$" },
            { text: "$1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^6$" }
        ],
        explanation: "When transition metals form positive ions, they lose their $4s$ electrons before losing $3d$ electrons. Neutral iron is $[\\text{Ar}] 4s^2 3d^6$, so removing two electrons gives the $\\text{Fe}^{2+}$ configuration $[\\text{Ar}] 3d^6$"
    },
    {
        id: "EDEXCEL-U1-L2-Q13-MEDIUM-20260106",
        question: "Degenerate orbitals are occupied singly with parallel spins before pairing occurs. This statement is known as:",
        options: [
            { text: "The Aufbau Principle" },
            { text: "Hund's Rule", isCorrect: true },
            { text: "The Pauli Exclusion Principle" },
            { text: "Avogadro's Hypothesis" }
        ],
        explanation: "Hund's Rule states that single electrons occupy degenerate orbitals (such as the three p-orbitals) with parallel spins first, before they begin pairing up. This minimizes electron-electron repulsion."
    },
    {
        id: "EDEXCEL-U1-L2-Q14-HARD-20260106",
        question: "Which of the following elements has the highest number of unpaired electrons in its ground state?",
        options: [
            { text: "Carbon ($\\text{C}$, $Z=6$)" },
            { text: "Nitrogen ($\\text{N}$, $Z=7$)" },
            { text: "Chromium ($\\text{Cr}$, $Z=24$)", isCorrect: true },
            { text: "Iron ($\\text{Fe}$, $Z=26$)" }
        ],
        explanation: "Let's check the configurations:\n- C: $[\\text{He}] 2s^2 2p^2$ (2 unpaired electrons)\n- N: $[\\text{He}] 2s^2 2p^3$ (3 unpaired electrons)\n- Fe: $[\\text{Ar}] 4s^2 3d^6$ (4 unpaired electrons)\n- Cr: $[\\text{Ar}] 4s^1 3d^5$ (6 unpaired electrons: 1 in 4s, 5 in 3d). Chromium has the most"
    },
    {
        id: "EDEXCEL-U1-L2-Q15-EASY-20260106",
        question: "Which of the following equations represents the first ionisation energy of oxygen?",
        options: [
            { text: "$\\text{O}_{(g)} + e^- \\rightarrow \\text{O}^-_{(g)}$" },
            { text: "$\\text{O}_{(g)} \\rightarrow \\text{O}^+_{(g)} + e^-$", isCorrect: true },
            { text: "$\\text{O}_{2(g)} \\rightarrow 2\\text{O}^+_{(g)} + 2e^-$" },
            { text: "$\\text{O}_{(s)} \\rightarrow \\text{O}^+_{(g)} + e^-$" }
        ],
        explanation: "The first ionisation energy is defined as the energy required to remove one mole of electrons from one mole of gaseous atoms to form one mole of gaseous 1+ ions. Oxygen must be in gaseous state, $\\text{O}_{(g)} \\rightarrow \\text{O}^+_{(g)} + e^-$"
    },
    {
        id: "EDEXCEL-U1-L2-Q16-MEDIUM-20260106",
        question: "Why does the first ionisation energy generally increase across Period 3 from sodium to argon?",
        options: [
            { text: "Atomic radius increases." },
            { text: "The shielding effect increases significantly." },
            { text: "The nuclear charge increases while shielding remains constant.", isCorrect: true },
            { text: "Electrons are removed from inner shells." }
        ],
        explanation: "Across a period, the nuclear charge increases (more protons) while the shielding effect remains approximately constant (electrons go into the same principal quantum shell). This pulls the outer electrons closer, making them harder to remove."
    },
    {
        id: "EDEXCEL-U1-L2-Q17-MEDIUM-20260106",
        question: "The first ionisation energy of aluminum ($Z = 13$) is lower than that of magnesium ($Z = 12$). Which statement explains this anomaly?",
        options: [
            { text: "Magnesium has a higher nuclear charge than aluminum." },
            { text: "Aluminum's outer electron is in a higher-energy 3p subshell and is more shielded.", isCorrect: true },
            { text: "Aluminum's outer electron experiences spin-pair repulsion in a 3s orbital." },
            { text: "Magnesium has a stable fully-filled 3p subshell." }
        ],
        explanation: "Magnesium's outer electron is in the $3s$ subshell. Aluminum's outer electron is in a $3p$ subshell, which is higher in energy and further from the nucleus than the $3s$ subshell. It also experiences shielding from the $3s^2$ electrons, making it easier to remove"
    },
    {
        id: "EDEXCEL-U1-L2-Q18-MEDIUM-20260106",
        question: "Why is the first ionisation energy of sulfur ($Z = 16$) lower than that of phosphorus ($Z = 15$)?",
        options: [
            { text: "Sulfur has a larger atomic radius than phosphorus." },
            { text: "Phosphorus has a stable fully-filled p-subshell." },
            { text: "Sulfur has spin-pair repulsion in one of its 3p orbitals.", isCorrect: true },
            { text: "Sulfur has more shielding electrons than phosphorus." }
        ],
        explanation: "Sulfur has four $3p$ electrons, meaning one of the $3p$ orbitals contains a paired set of electrons ($3p_x^2 3p_y^1 3p_z^1$). The electrostatic repulsion between these two paired electrons makes it easier to remove the outer electron in sulfur compared to the unpaired $3p$ electrons in phosphorus"
    },
    {
        id: "EDEXCEL-U1-L2-Q19-MEDIUM-20260106",
        question: "The successive ionisation energies (in $\\text{kJ mol}^{-1}$) of an element in Period 3 are: 578, 1817, 2745, 11577, 14842. In which group of the periodic table is this element located?",
        options: [
            { text: "Group 1" },
            { text: "Group 2" },
            { text: "Group 13 (3)", isCorrect: true },
            { text: "Group 14 (4)" }
        ],
        explanation: "Look at the jumps: $578 \\rightarrow 1817 \\rightarrow 2745 \\rightarrow 11577$. The massive jump occurs between the 3rd and 4th ionisation energies, indicating that the 4th electron is removed from an inner core shell. This shows there are 3 valence electrons, locating the element in Group 13 (Al)"
    },
    {
        id: "EDEXCEL-U1-L2-Q20-HARD-20260106",
        question: "Which of the following elements has the lowest first ionisation energy?",
        options: [
            { text: "Helium ($\\text{He}$)" },
            { text: "Lithium ($\\text{Li}$)" },
            { text: "Sodium ($\\text{Na}$)" },
            { text: "Potassium ($\\text{K}$)", isCorrect: true }
        ],
        explanation: "First ionisation energy decreases down Group 1. Potassium ($\\text{K}$) is further down the group than lithium ($\\text{Li}$) and sodium ($\\text{Na}$). It has a larger atomic radius and more shielding shells, making its outer electron the most weakly attracted and easiest to remove"
    },
    {
        id: "EDEXCEL-U1-L2-Q21-HARD-20260106",
        question: "Which of the following lists the elements phosphorus, sulfur, chlorine, and argon in order of decreasing melting temperature?",
        options: [
            { text: "$\\text{S} > \\text{P} > \\text{Cl} > \\text{Ar}$", isCorrect: true },
            { text: "$\\text{P} > \\text{S} > \\text{Cl} > \\text{Ar}$" },
            { text: "$\\text{Ar} > \\text{Cl} > \\text{P} > \\text{S}$" },
            { text: "$\\text{S} > \\text{Cl} > \\text{P} > \\text{Ar}$" }
        ],
        explanation: "Sulfur exists as $\\text{S}_8$ molecules, phosphorus as $\\text{P}_4$ molecules, chlorine as $\\text{Cl}_2$ molecules, and argon as monoatomic $\\text{Ar}$ atoms. The strength of London dispersion forces increases with the number of electrons per molecule. Since $\\text{S}_8$ has 128 electrons, $\\text{P}_4$ has 60, $\\text{Cl}_2$ has 34, and $\\text{Ar}$ has 18, the melting temperatures follow the order $\\text{S}_8 > \\text{P}_4 > \\text{Cl}_2 > \\text{Ar}$"
    },
    {
        id: "EDEXCEL-U1-L2-Q22-HARD-20260106",
        question: "Both carbon (diamond) and silicon form giant covalent lattices in Group 14. However, the melting temperature of carbon ($3550^\\circ\\text{C}$) is significantly higher than that of silicon ($1414^\\circ\\text{C}$). What is the primary reason for this difference?",
        options: [
            { text: "Carbon forms stronger London forces between its molecules than silicon." },
            { text: "Silicon atoms have more shielding, which completely prevents covalent bonding." },
            { text: "Carbon forms a giant lattice while silicon forms simple molecular structures." },
            { text: "The $\\text{C-C}$ covalent bonds are shorter and stronger than $\\text{Si-Si}$ bonds due to the smaller atomic radius of carbon", isCorrect: true }
        ],
        explanation: "Both elements form giant covalent lattices. Carbon has a smaller atomic radius than silicon. Because the carbon atoms are smaller, the shared electron pairs in the $\\text{C-C}$ bond are closer to the nuclei, resulting in shorter and stronger covalent bonds. Breaking these stronger bonds requires more energy, leading to a much higher melting point"
    },
    {
        id: "EDEXCEL-U1-L2-Q23-HARD-20260106",
        question: "A stable ion $\\text{W}^{3+}$ contains 18 electrons. In which block of the periodic table is element $\\text{W}$ found?",
        options: [
            { text: "s-block" },
            { text: "p-block" },
            { text: "d-block", isCorrect: true },
            { text: "f-block" }
        ],
        explanation: "A 3+ ion with 18 electrons comes from a neutral atom with $18 + 3 = 21$ electrons. Element 21 is Scandium (Sc), which has the configuration $[\\text{Ar}] 4s^2 3d^1$. The highest energy subshell being filled is the $3d$ subshell, so Scandium is in the d-block"
    },
    {
        id: "EDEXCEL-U1-L2-Q24-HARD-20260106",
        question: "The species $\\text{N}^{3-}$, $\\text{O}^{2-}$, $\\text{F}^-$, and $\\text{Na}^+$ all have the same electronic configuration. Which of the following lists these species in order of increasing ionic radius (smallest first)?",
        options: [
            { text: "$\\text{F}^- < \\text{Na}^+ < \\text{O}^{2-} < \\text{N}^{3-}$" },
            { text: "$\\text{N}^{3-} < \\text{O}^{2-} < \\text{F}^- < \\text{Na}^+$" },
            { text: "$\\text{Na}^+ < \\text{F}^- < \\text{O}^{2-} < \\text{N}^{3-}$", isCorrect: true },
            { text: "$\\text{Na}^+ < \\text{N}^{3-} < \\text{O}^{2-} < \\text{F}^-$" }
        ],
        explanation: "These species are isoelectronic (all have 10 electrons: $1s^2 2s^2 2p^6$). As the proton number (nuclear charge) increases, the electrostatic attraction between the nucleus and the electrons becomes stronger, pulling them closer and decreasing the ionic radius. The proton numbers are: $\\text{Na}^+ = 11$, $\\text{F}^- = 9$, $\\text{O}^{2-} = 8$, $\\text{N}^{3-} = 7$. Thus, the smallest is $\\text{Na}^+$ and the largest is $\\text{N}^{3-}$, giving the order: $\\text{Na}^+ < \\text{F}^- < \\text{O}^{2-} < \\text{N}^{3-}$"
    },
    {
        id: "EDEXCEL-U1-L2-Q25-HARD-20260106",
        question: "What is the correct electronic configuration of the $\\text{Cu}^{2+}$ ion in its ground state?",
        options: [
            { text: "$1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^7$" },
            { text: "$1s^2 2s^2 2p^6 3s^2 3p^6 4s^1 3d^8$" },
            { text: "$1s^2 2s^2 2p^6 3s^2 3p^6 3d^9$", isCorrect: true },
            { text: "$1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^9$" }
        ],
        explanation: "A neutral copper atom has the anomalous configuration $[\\text{Ar}] 4s^1 3d^{10}$. When transition metals form ions, they lose their $4s$ electrons first. To form the $\\text{Cu}^{2+}$ ion, we remove the 1 electron from the $4s$ orbital and then 1 electron from the $3d$ subshell, resulting in $[\\text{Ar}] 3d^9$, or $1s^2 2s^2 2p^6 3s^2 3p^6 3d^9$"
    },
    {
        id: "EDEXCEL-U1-L2-Q26-HARD-20260106",
        question: "A graph of successive ionisation energies (log scale) against ionisation number for an element in Period 3 shows a major jump between the 2nd and 3rd ionisation energies, and another major jump between the 10th and 11th ionisation energies. What is the element?",
        options: [
            { text: "Magnesium", isCorrect: true },
            { text: "Sodium" },
            { text: "Aluminium" },
            { text: "Silicon" }
        ],
        explanation: "The first major jump is between $I_2$ and $I_3$, indicating 2 valence electrons (Group 2). The second major jump is between $I_{10}$ and $I_{11}$, indicating that the 11th electron is removed from the innermost shell ($1s^2$). A Period 3 element in Group 2 is Magnesium ($Z = 12$, configuration $[\\text{Ne}] 3s^2$)"
    },
    {
        id: "EDEXCEL-U1-L2-Q27-HARD-20260106",
        question: "Which of the following metal chlorides has the greatest covalent character due to cation polarization?",
        options: [
            { text: "$\\text{NaCl}$" },
            { text: "$\\text{MgCl}_2$" },
            { text: "$\\text{AlCl}_3$", isCorrect: true },
            { text: "$\\text{CaCl}_2$" }
        ],
        explanation: "As the charge on the metal cation increases ($\\text{Na}^+ < \\text{Mg}^{2+} < \\text{Al}^{3+}$) and its ionic radius decreases, its polarizing power increases. The highly polarizing $\\text{Al}^{3+}$ ion distorts the electron cloud of the chloride ion towards itself, giving $\\text{AlCl}_3$ significant covalent character"
    },
    {
        id: "EDEXCEL-U1-L2-Q28-HARD-20260106",
        question: "Why does the melting point of Group 2 metals generally decrease down the group?",
        options: [
            { text: "The number of delocalised electrons per atom decreases down the group." },
            { text: "The metallic bonding weakens because the metal ions increase in size, increasing the distance between the nuclei and delocalised electrons", isCorrect: true },
            { text: "The elements change structure from giant metallic to simple molecular." },
            { text: "The ionisation energy increases, making it harder to delocalise electrons." }
        ],
        explanation: "Down Group 2, the number of delocalised electrons per metal atom remains the same (2 electrons). However, the ionic radius of the metal cation increases. The electrostatic attraction between the positive nuclei and the delocalised valence electrons weakens because they are further apart, decreasing the melting point"
    },
    {
        id: "EDEXCEL-U1-L2-Q29-HARD-20260106",
        question: "A Period 4 d-block element has successive ionisation energies where a large jump is observed between $I_3$ and $I_4$. What is the element?",
        options: [
            { text: "Potassium" },
            { text: "Calcium" },
            { text: "Scandium", isCorrect: true },
            { text: "Titanium" }
        ],
        explanation: "Scandium has 3 valence electrons ($4s^2 3d^1$). The first three electrons are relatively easy to remove. The 4th electron ($I_4$) must be removed from the inner core $[\\text{Ar}]$ configuration, causing a very large jump in ionisation energy"
    },
    {
        id: "EDEXCEL-U1-L2-Q30-HARD-20260106",
        question: "Which of the following lists the elements in order of increasing first ionisation energy?",
        options: [
            { text: "$\\text{Al} < \\text{Mg} < \\text{S} < \\text{P}$", isCorrect: true },
            { text: "$\\text{Mg} < \\text{Al} < \\text{P} < \\text{S}$" },
            { text: "$\\text{Al} < \\text{Mg} < \\text{P} < \\text{S}$" },
            { text: "$\\text{Mg} < \\text{Al} < \\text{S} < \\text{P}$" }
        ],
        explanation: "Generally, first ionisation energy increases across a period due to increasing nuclear charge and decreasing atomic size. However, there are two exceptions: 1. $\\text{Al}$ ($3s^2 3p^1$) is lower than $\\text{Mg}$ ($3s^2$) because the outer electron is in a higher energy $3p$ subshell. 2. $\\text{S}$ ($3p^4$) is lower than $\\text{P}$ ($3p^3$) due to spin-pair repulsion in sulfur's orbital. This gives the order: $\\text{Al} < \\text{Mg} < \\text{S} < \\text{P}$"
    },
    {
        id: "EDEXCEL-U1-L2-Q31-MEDIUM-2026",
        question: "In 1919, which scientist invented the mass spectrometer and used it to provide the first experimental evidence of the existence of isotopes?",
        options: [
            { text: "Francis Aston", isCorrect: true },
            { text: "J.J. Thomson" },
            { text: "Ernest Rutherford" },
            { text: "James Chadwick" }
        ],
        explanation: "Francis Aston invented the mass spectrometer in 1919 and demonstrated that atoms of the same element could have different masses (isotopes), for which he received the Nobel Prize."
    },
    {
        id: "EDEXCEL-U1-L2-Q32-HARD-2026",
        question: "How many protons, neutrons, and electrons are present in one deuterated ammonium ion (${}^{14}_7\\text{N}^2_1\\text{H}_4^+$)?",
        options: [
            { text: "11 protons, 11 neutrons, 10 electrons", isCorrect: true },
            { text: "11 protons, 7 neutrons, 10 electrons" },
            { text: "11 protons, 11 neutrons, 11 electrons" },
            { text: "10 protons, 7 neutrons, 10 electrons" }
        ],
        explanation: "Let's calculate each value:\n* Protons = 7 (from nitrogen) + 4 × 1 (from hydrogen) = 11\n* Neutrons = (14 − 7) in nitrogen + 4 × (2 − 1) in hydrogen-2 (deuterium) = 7 + 4 = 11\n* Electrons = 11 protons − 1 (due to the +1 positive charge) = 10 electrons."
    },
    {
        id: "EDEXCEL-U1-L2-Q33-HARD-2026",
        question: "Based on the subatomic particle table below, which statement is correct?\n\n| Particle | Protons | Neutrons | Electrons |\n| :---: | :---: | :---: | :---: |\n| A | 12 | 13 | 12 |\n| B | 17 | 18 | 18 |\n| C | 11 | 14 | 10 |\n| D | 12 | 12 | 12 |",
        options: [
            { text: "Particles A and C have the same mass number.", isCorrect: true },
            { text: "Particles A and D are positive ions." },
            { text: "Particle B is a positive ion, and C is a negative ion." },
            { text: "Particles B and D are isotopes of the same element." }
        ],
        explanation: "Let's verify:\n* Mass number of A = 12 protons + 13 neutrons = 25. Mass number of C = 11 protons + 14 neutrons = 25. Thus, both have the same mass number (25).\n* Particles A and D are neutral atoms, not positive ions.\n* B is a negative ion (17 protons, 18 electrons) and C is a positive ion (11 protons, 10 electrons).\n* A and D are isotopes (both have 12 protons)."
    },
    {
        id: "EDEXCEL-U1-L2-Q34-HARD-2026",
        question: "For a sample of bromine gas ($\\\\text{Br}_2$) containing isotopes $^{79}\\\\text{Br}$ and $^{81}\\\\text{Br}$ in a $1:1$ abundance ratio, which particle is responsible for the peak at $m/z = 160$ in its mass spectrum?",
        options: [
            { text: "$[^{79}\\\\text{Br}^{81}\\\\text{Br}]^+$", isCorrect: true },
            { text: "$[^{79}\\\\text{Br}^{79}\\\\text{Br}]^+$" },
            { text: "$[^{81}\\\\text{Br}^{81}\\\\text{Br}]^+$" },
            { text: "$[^{79}\\\\text{Br}^{81}\\\\text{Br}]^{2+}$" }
        ],
        explanation: "The molecular ion peak at $m/z = 160$ corresponds to the singly charged diatomic bromine molecular ion containing one $^{79}\\\\text{Br}$ isotope and one $^{81}\\\\text{Br}$ isotope: $[^{79}\\\\text{Br}^{81}\\\\text{Br}]^+$."
    },
    {
        id: "EDEXCEL-U1-L2-Q35-HARD-2026",
        question: "Which of the following explains why the relative molecular ion peaks for $\\\\text{Cl}_2$ gas at $m/z = 70, 72, 74$ appear in an approximate ratio of $9:6:1$ in the mass spectrum?",
        options: [
            { text: "The probability of choosing combinations of $^{35}\\\\text{Cl}$ ($75\\\\%$ abundance) and $^{37}\\\\text{Cl}$ ($25\\\\%$ abundance) results in $(\\\\frac{3}{4})^2 : 2(\\\\frac{3}{4} \\\\times \\\\frac{1}{4}) : (\\\\frac{1}{4})^2$", isCorrect: true },
            { text: "Chlorine-35 is nine times more abundant than chlorine-37" },
            { text: "The magnetic field deflects the heavier $^{37}\\\\text{Cl}$ isotopes nine times more easily" },
            { text: "The ionisation chamber produces 2+ ions that triple the heights of the peaks" }
        ],
        explanation: "Chlorine isotopes have fractional abundances of $0.75$ ($\\\\frac{3}{4}$) and $0.25$ ($\\\\frac{1}{4}$). The probability of having:\n* $^{70}\\\\text{Cl}_2^+ = \\\\frac{3}{4} \\\\times \\\\frac{3}{4} = \\\\frac{9}{16}$\n* $^{72}\\\\text{Cl}_2^+ = 2 \\\\times \\\\frac{3}{4} \\\\times \\\\frac{1}{4} = \\\\frac{6}{16}$\n* $^{74}\\\\text{Cl}_2^+ = \\\\frac{1}{4} \\\\times \\\\frac{1}{4} = \\\\frac{1}{16}$\nThis gives the characteristic $9:6:1$ peak height ratio."
    },
    {
        id: "EDEXCEL-U1-L2-Q36-HARD-2026",
        question: "For elements from scandium ($Z = 21$) to zinc ($Z = 30$), why are two electrons filled in the higher-energy $4s$ orbital even though the $3d$ orbitals are lower in energy?",
        options: [
            { text: "The $3d$ orbitals are more compact, so electrons entering them experience greater mutual repulsion than they do in the $4s$ orbital", isCorrect: true },
            { text: "The $4s$ orbital completely shields the $3d$ orbitals from the positive nuclear charge" },
            { text: "The Pauli Exclusion Principle forbids the filling of $3d$ orbitals before the $4s$ orbital is completely filled" },
            { text: "The $3d$ subshell has a lower maximum capacity of electrons than the $4s$ subshell" }
        ],
        explanation: "For transition metals after calcium, the $3d$ orbitals are lower in energy than $4s$ but are much more compact. Placing electrons in the compact $3d$ orbitals results in higher electron-electron repulsion, so they occupy the larger $4s$ orbital first to minimize repulsion."
    },
    {
        id: "EDEXCEL-U1-L2-Q37-MEDIUM-2026",
        question: "In the context of the quantum theory presented by Max Planck in 1900, which of the following is correct regarding electrons in quantum shells?",
        options: [
            { text: "All electrons in the same quantum shell have similar, but not identical, energies", isCorrect: true },
            { text: "All electrons in the same quantum shell have exactly identical energies" },
            { text: "An electron can occupy any position between two quantum shells at stable energy states" },
            { text: "The energy of electrons in the first quantum shell is the highest of all shells in the atom" }
        ],
        explanation: "Within any principal quantum shell (except the first), the subshells ($s, p, d, f$) represent slightly different sublevel energy states, meaning the electrons in the same quantum shell have similar, but not identical, energies."
    },
    {
        id: "EDEXCEL-U1-L2-Q38-MEDIUM-2026",
        question: "What is the physical significance of the letters $x, y, z$ in the box notation of the $2p$ subshell?",
        options: [
            { text: "They represent the perpendicular spatial orientations of the three degenerate $p$ orbitals along the 3D Cartesian axes", isCorrect: true },
            { text: "They represent the different spin states of the electrons inside the orbitals" },
            { text: "They represent the increasing energy levels of the three degenerate $p$ sub-shells" },
            { text: "They represent the relative mass ratio of the subatomic particles in the sub-shells" }
        ],
        explanation: "The letters $x, y, z$ correspond to the three Cartesian coordinates, showing that the three degenerate $p$ orbitals ($p_x, p_y, p_z$) are oriented perpendicular to each other in 3D space."
    },
    {
        id: "EDEXCEL-U1-L2-Q39-HARD-2026",
        question: "Which of the following elements has a first ionization energy that is an anomaly down its group, being HIGHER than the element directly above it?",
        options: [
            { text: "Lead (Pb) in Group 14", isCorrect: true },
            { text: "Cesium (Cs) in Group 1" },
            { text: "Barium (Ba) in Group 2" },
            { text: "Fluorine (F) in Group 17" }
        ],
        explanation: "Down Group 14, lead (Pb) has a first ionization energy that is higher than tin (Sn) directly above it, which is an anomaly in group trends due to relativistic contraction and poor shielding by the inner $4f$ electrons."
    },
    {
        id: "EDEXCEL-U1-L2-Q40-MEDIUM-2026",
        question: "Which of the following correctly describes what represents an 'infinite distance' in the definition of ionization energy?",
        options: [
            { text: "The distance at which the removed electron no longer experiences any attractive electrostatic force from the nucleus", isCorrect: true },
            { text: "The boundary representing the 90% probability of finding the electron inside its orbital" },
            { text: "The distance equal to the bond length in a diatomic molecule" },
            { text: "The average radius of the outermost principal quantum shell of a noble gas" }
        ],
        explanation: "In the definition of ionization energy, removing an electron to an infinite distance means pulling it far enough that the electrostatic attraction between the positive nucleus and the electron becomes zero."
    },
    {
        id: "EDEXCEL-U1-L2-Q41-HARD-2026",
        question: "Consider five elements A, B, C, D, and E. Their first and second ionization energies (in $\\\\text{kJ mol}^{-1}$) are:\n* A: 496, 4563\n* B: 738, 1451\n* C: 578, 1817\n* D: 900, 1757\n* E: 631, 1235\nWhich of these elements requires the LEAST energy to form a gaseous $2+$ ion from a neutral gaseous atom?",
        options: [
            { text: "Element E", isCorrect: true },
            { text: "Element A" },
            { text: "Element B" },
            { text: "Element D" }
        ],
        explanation: "The energy required to form a $2+$ ion from a neutral atom is the sum of the first and second ionization energies ($I_1 + I_2$). Let's calculate the sums:\n* A: $496 + 4563 = 5059\\\\text{ kJ mol}^{-1}$\n* B: $738 + 1451 = 2189\\\\text{ kJ mol}^{-1}$\n* C: $578 + 1817 = 2395\\\\text{ kJ mol}^{-1}$\n* D: $900 + 1757 = 2657\\\\text{ kJ mol}^{-1}$\n* E: $631 + 1235 = 1866\\\\text{ kJ mol}^{-1}$\nTherefore, Element E requires the least energy (1866)."
    },
    {
        id: "EDEXCEL-U1-L2-Q42-HARD-2026",
        question: "Why is it not a like-for-like comparison to compare the covalent radii of elements across Period 2 directly with the atomic radius of Neon?",
        options: [
            { text: "Neon only has a measurable van der Waals radius since it does not form covalent bonds, and the van der Waals radius is always larger than the covalent radius", isCorrect: true },
            { text: "Neon is a monoatomic gas and does not possess a measurable nucleus or electron cloud" },
            { text: "The shielding effect in Neon is completely different because the 2p subshell is empty" },
            { text: "Covalent radius measures the distance between adjacent metallic ions in a giant lattice" }
        ],
        explanation: "Neon and Argon do not form chemical bonds, so they do not have covalent radii. Only their van der Waals radius can be measured, which is always larger than the covalent radius because bonded atoms are drawn closer together."
    },
    {
        id: "EDEXCEL-U1-L2-Q43-HARD-2026",
        question: "Which of the following is correct regarding the stability of the boron ion (B$^+$) compared to the neutral boron atom?",
        options: [
            { text: "The boron ion (B$^+$) is energetically less stable than the neutral boron atom because removing an electron is always an endothermic process", isCorrect: true },
            { text: "The boron ion (B$^+$) is energetically more stable because it achieves a full $2s^2$ subshell" },
            { text: "The boron ion (B$^+$) has the exact same energy and stability because the electron is lost from the $2p$ subshell" },
            { text: "The boron atom becomes more stable after losing an electron due to the loss of shielding from inner shells" }
        ],
        explanation: "Losing an electron is an endothermic process (energy must be supplied). Therefore, any positive ion formed is energetically less stable (at a higher energy state) than its corresponding neutral atom. The lower first ionization energy of boron is simply due to the higher energy of the $2p$ subshell and increased shielding, not because the ion is 'more stable'."
    },
    {
        id: "EDEXCEL-U1-L2-Q44-HARD-2026",
        question: "Predict whether the first ionization energy of gallium (Ga, $Z=31$) is higher or lower than that of calcium (Ca, $Z=20$) and explain why.",
        options: [
            { text: "Lower, because the outermost electron of Gallium is in a $4p$ orbital which is higher in energy than the $4s$ orbital of Calcium and experiences additional shielding from the $4s^2$ electrons", isCorrect: true },
            { text: "Higher, because Gallium has a much larger nuclear charge (+31) than Calcium (+20)" },
            { text: "Higher, because Gallium's outermost electron is in a $3d$ orbital which experiences zero shielding" },
            { text: "Lower, because Gallium's atomic radius is larger than Calcium's, making the outer shell much further from the nucleus" }
        ],
        explanation: "Gallium's outermost electron is in the $4p$ subshell ($4s^2 4p^1$). Since the $4p$ subshell is higher in energy than the $4s$ subshell of Calcium ($4s^2$) and is shielded by the filled $4s^2$ subshell, the electron in Gallium requires less energy to be removed, making its first ionization energy lower than Calcium's."
    },
    {
        id: "EDEXCEL-U1-L2-Q45-MEDIUM-2026",
        question: "The relative atomic mass of boron is 10.8. A sample of boron contains the isotopes ${}^{10}_5\\\\text{B}$ and ${}^{11}_5\\\\text{B}$. What is the percentage of ${}^{11}_5\\\\text{B}$ atoms in the isotopic mixture of this sample?",
        options: [
            { text: "80%", isCorrect: true },
            { text: "20%" },
            { text: "8.0%" },
            { text: "0.8%" }
        ],
        explanation: "Let the fractional abundance of ${}^{11}\\\\text{B}$ be $x$. The abundance of ${}^{10}\\\\text{B}$ is $1-x$. The relative atomic mass is: $11x + 10(1-x) = 10.8 \\\\implies x + 10 = 10.8 \\\\implies x = 0.8$. Thus, ${}^{11}\\\\text{B}$ makes up 80% of the sample."
    },
    {
        id: "EDEXCEL-U1-L2-Q46-MEDIUM-2026",
        question: "Which of the following elements has no paired p electrons in a single uncombined ground-state atom?",
        options: [
            { text: "Carbon", isCorrect: true },
            { text: "Oxygen" },
            { text: "Fluorine" },
            { text: "Neon" }
        ],
        explanation: "Carbon's configuration is $1s^2 2s^2 2p^2$. By Hund's rule, the two $2p$ electrons occupy separate degenerate $p$ orbitals (e.g. $2p_x^1 2p_y^1$) with parallel spins, so they are unpaired. In Oxygen ($2p^4$), Fluorine ($2p^5$), and Neon ($2p^6$), there are paired electrons in the $2p$ subshell."
    },
    {
        id: "EDEXCEL-U1-L2-Q47-MEDIUM-2026",
        question: "Which of the following electronic configurations represents an atom of an element which forms a simple ion with a charge of $-3$?",
        options: [
            { text: "$1s^2 2s^2 2p^6 3s^2 3p^3$", isCorrect: true },
            { text: "$1s^2 2s^2 2p^6 3s^2 3p^1$" },
            { text: "$1s^2 2s^2 2p^6 3s^2 3p^6 3d^1 4s^2$" },
            { text: "$1s^2 2s^2 2p^6 3s^2 3p^6 3d^3 4s^2$" }
        ],
        explanation: "An element forming an ion with a $-3$ charge must belong to Group 15, meaning its outer shell has 5 valence electrons ($ns^2 np^3$). The configuration $1s^2 2s^2 2p^6 3s^2 3p^3$ corresponds to Phosphorus, which has 5 valence electrons and accepts 3 electrons to form a stable $\\\\text{P}^{3-}$ ion."
    },
    {
        id: "EDEXCEL-U1-L2-Q48-MEDIUM-2026",
        question: "A sample of chlorine containing isotopes with mass numbers 35 and 37 is analysed in a mass spectrometer. How many peaks corresponding to molecular ions ($\\\\text{Cl}_2^+$) are recorded?",
        options: [
            { text: "3", isCorrect: true },
            { text: "4" },
            { text: "2" },
            { text: "1" }
        ],
        explanation: "The chlorine molecules can be made of different combinations of the two isotopes: $[{}^{35}\\\\text{Cl}-{}^{35}\\\\text{Cl}]^+$ (mass 70), $[{}^{35}\\\\text{Cl}-{}^{37}\\\\text{Cl}]^+$ (mass 72), and $[{}^{37}\\\\text{Cl}-{}^{37}\\\\text{Cl}]^+$ (mass 74). This yields exactly 3 separate peaks in the mass spectrum."
    },
    {
        id: "EDEXCEL-U1-L2-Q49-MEDIUM-2026",
        question: "What is the atomic number of an element that contains atoms which have exactly four unpaired electrons in their ground state?",
        options: [
            { text: "26", isCorrect: true },
            { text: "16" },
            { text: "22" },
            { text: "6" }
        ],
        explanation: "The element with atomic number 26 is Iron (Fe). Its configuration is $[A_r] 3d^6 4s^2$. The $3d$ subshell has five degenerate orbitals. Hund's rule dictates that electrons occupy degenerate orbitals singly before pairing: 4 orbitals contain 1 unpaired electron each, and 1 orbital contains 1 pair of electrons. This results in exactly 4 unpaired electrons."
    },
    {
        id: "EDEXCEL-U1-L2-Q50-HARD-2026",
        question: "Which of the following ions has more electrons than protons, and also has more protons than neutrons?\n(Isotope data: ${}^1_1\\\\text{H}$, ${}^2_1\\\\text{D}$, ${}^4_2\\\\text{He}$, ${}^{16}_8\\\\text{O}$)",
        options: [
            { text: "$\\\\text{OH}^-$", isCorrect: true },
            { text: "$\\\\text{OD}^-$" },
            { text: "$\\\\text{D}_3\\\\text{O}^+$" },
            { text: "$\\\\text{He}^+$" }
        ],
        explanation: "Let's calculate for hydroxide ion ($\\\\text{OH}^-$):\n* Protons: $8$ (from O) + $1$ (from H) = $9$ protons.\n* Neutrons: $8$ (from ${}^{16}\\\\text{O}$) + $0$ (from ${}^1\\\\text{H}$) = $8$ neutrons. (Protons > Neutrons: $9 > 8$).\n* Electrons: $9 + 1$ (due to $-1$ charge) = $10$ electrons. (Electrons > Protons: $10 > 9$).\nThus, $\\\\text{OH}^-$ satisfies both conditions."
    },
    {
        id: "EDEXCEL-U1-L2-Q51-MEDIUM-2026",
        question: "The species $\\\\text{Ar}$, $\\\\text{K}^+$, and $\\\\text{Ca}^{2+}$ are isoelectronic. In what order do their radii increase (smallest to largest)?",
        options: [
            { text: "$\\\\text{Ca}^{2+} < \\\\text{K}^+ < \\\\text{Ar}$", isCorrect: true },
            { text: "$\\\\text{Ar} < \\\\text{K}^+ < \\\\text{Ca}^{2+}$" },
            { text: "$\\\\text{Ar} < \\\\text{Ca}^{2+} < \\\\text{K}^+$" },
            { text: "$\\\\text{Ca}^{2+} < \\\\text{Ar} < \\\\text{K}^+$" }
        ],
        explanation: "These three species are isoelectronic, each containing exactly 18 electrons ($1s^2 2s^2 2p^6 3s^2 3p^6$). As the nuclear charge increases ($\\\\text{Ar}$ = 18 protons, $\\\\text{K}^+$ = 19 protons, $\\\\text{Ca}^{2+}$ = 20 protons), the nucleus exerts a stronger electrostatic attraction on the same 18 electrons, drawing them closer. Therefore, the radius decreases as protons increase: $\\\\text{Ca}^{2+} < \\\\text{K}^+ < \\\\text{Ar}$."
    }
];
