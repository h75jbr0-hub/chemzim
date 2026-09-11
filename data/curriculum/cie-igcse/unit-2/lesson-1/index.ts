import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Atomic Structure";
export const lessonNumber = 1;

export const theoryMarkdown = `
## Atomic Structure
This lesson covers the fundamentals of Atomic Structure, subatomic particles, isotopes, and electron configurations as part of Unit 2 of IGCSE Chemistry.
`;

const atomDiagramSvg = `
<svg viewBox="0 0 1000 360" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
    <radialGradient id="nucleusGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#f59e0b" />
      <stop offset="70%" stop-color="#d97706" />
      <stop offset="100%" stop-color="#78350f" />
    </radialGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="4" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="1000" height="360" fill="url(#bgGrad)" stroke="#1e293b" stroke-width="2" rx="16" />

  <!-- Diagram Title -->
  <text x="500" y="35" fill="#f8fafc" font-size="14" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">General Structure of an Atom (Lithium Example)</text>

  <!-- Shell Orbits -->
  <circle cx="500" cy="190" r="70" fill="none" stroke="#334155" stroke-width="1.5" stroke-dasharray="4 4" />
  <circle cx="500" cy="190" r="130" fill="none" stroke="#334155" stroke-width="1.5" stroke-dasharray="4 4" />

  <!-- Nucleus -->
  <circle cx="500" cy="190" r="30" fill="url(#nucleusGrad)" stroke="#f59e0b" stroke-width="2" filter="url(#glow)" />
  <text x="500" y="194" fill="#ffffff" font-size="11" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Nucleus</text>

  <!-- Electrons (Lithium: 2 in first shell, 1 in second) -->
  <!-- Inner Shell Electrons -->
  <circle cx="500" cy="120" r="7" fill="#38bdf8" stroke="#0284c7" stroke-width="1.5" filter="url(#glow)" />
  <circle cx="500" cy="260" r="7" fill="#38bdf8" stroke="#0284c7" stroke-width="1.5" filter="url(#glow)" />

  <!-- Outer Shell Electron -->
  <circle cx="370" cy="190" r="7" fill="#38bdf8" stroke="#0284c7" stroke-width="1.5" filter="url(#glow)" />

  <!-- Labels -->
  <!-- Nucleus Label (pointing to center) -->
  <path d="M 620 190 L 525 190" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="2 2" fill="none" />
  <circle cx="525" cy="190" r="2" fill="#f59e0b" />
  <text x="630" y="194" fill="#f59e0b" font-size="12" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="start">Nucleus (Protons + Neutrons)</text>

  <!-- Electron Label (pointing to outer electron) -->
  <path d="M 320 120 L 370 185" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="2 2" fill="none" />
  <circle cx="370" cy="185" r="2" fill="#38bdf8" />
  <text x="310" y="115" fill="#38bdf8" font-size="12" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="end">Electrons in Shells</text>

  <!-- Orbit Label -->
  <path d="M 680 100 L 591 140" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="2 2" fill="none" />
  <circle cx="591" cy="140" r="2" fill="#94a3b8" />
  <text x="690" y="98" fill="#94a3b8" font-size="12" font-family="system-ui, sans-serif" text-anchor="start">Electron Shell (Energy Level)</text>

  <!-- Info Box -->
  <rect x="50" y="250" width="220" height="80" fill="#1e293b" fill-opacity="0.6" stroke="#334155" stroke-width="1.5" rx="8" />
  <text x="60" y="270" fill="#e2e8f0" font-size="11" font-weight="bold" font-family="system-ui, sans-serif">Subatomic Particles Summary:</text>
  <text x="60" y="290" fill="#f87171" font-size="10" font-family="system-ui, sans-serif">Proton: Mass = 1, Charge = +1</text>
  <text x="60" y="305" fill="#94a3b8" font-size="10" font-family="system-ui, sans-serif">Neutron: Mass = 1, Charge = None</text>
  <text x="60" y="320" fill="#38bdf8" font-size="10" font-family="system-ui, sans-serif">Electron: Mass = 1/1840, Charge = -1</text>
</svg>
`;

export const lessonParts: LessonPart[] = [
    {
        id: "atomic-subatomic",
        title: "Atomic Structure & Subatomic Particles",
        type: "text",
        content: `
### ⚛️ Inside the Atom

Every atom is composed of a central core called the **nucleus**, surrounded by orbiting **electrons** located in concentric regions called **shells** (or energy levels).

> [!BOX]
> ### 📋 Relative Mass, Charge, and Locations
> Since subatomic particles are extremely light, their masses are measured in relative atomic mass units rather than grams.
> 
> | Particle | Symbol | Site / Location | Relative Mass | Charge |
> | :--- | :---: | :--- | :---: | :---: |
> | **Proton** | p | Inside the Nucleus (Nucleon) | 1 | +1 |
> | **Neutron** | n | Inside the Nucleus (Nucleon) | 1 | Neutral (0) |
> | **Electron** | e¯ | Orbiting in shells around nucleus | 1/1840 | -1 |
### 🔍 Key Structural Principles
1. **The Nucleus:** Located at the center of the atom, it contains the nucleons (protons and neutrons) clustered tightly together. This is where almost all the mass of the atom is concentrated.
2. **Neutral Charge:** Every neutral atom has an overall charge of **zero**. This is because the number of positive protons in the nucleus is exactly equal to the number of negative electrons orbiting it ($p = e$).
3. **Empty Space:** The volume occupied by the electron shells is massive compared to the tiny nucleus, meaning most of the atom's volume is actually empty space.

${svgToken(atomDiagramSvg)}

> [!EXAMPLE]
> #### 📝 Worked Example 1: Location of Subatomic Particles
> **Question:** Which subatomic particles are found clustered inside the nucleus of an atom?
> 
> **A** Protons and electrons only
> 
> **B** Protons and neutrons only
> 
> **C** Electrons and neutrons only
> 
> **D** Protons, neutrons, and electrons
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify Nucleons:**
> >    * Nucleons are defined as the particles that occupy the central nucleus of the atom.
> > 2. **Recall Particle Locations:**
> >    * Protons and neutrons are located inside the nucleus.
> >    * Electrons orbit around the nucleus in shells.
> > 3. **Conclusion:**
> >    * The nucleus contains protons and neutrons only. The correct option is **B**.

> [!EXAMPLE]
> #### 📝 Worked Example 2: Relative Mass Comparisons
> **Question:** Which statement correctly compares the relative masses of subatomic particles?
> 
> **A** An electron is heavier than a neutron.
> 
> **B** A proton and an electron have the same relative mass.
> 
> **C** A proton and a neutron have the same relative mass.
> 
> **D** A neutron has a relative mass of zero.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Check Relative Masses:**
> >    * Proton relative mass = 1 unit.
> >    * Neutron relative mass = 1 unit.
> >    * Electron relative mass = 1/1840 unit (negligible).
> > 2. **Evaluate Options:**
> >    * A is incorrect (electron is much lighter).
> >    * B is incorrect (proton is 1840 times heavier than an electron).
> >    * C is correct (both protons and neutrons have a relative mass of 1).
> >    * D is incorrect (neutrons have a mass of 1; electrons are the ones with near-zero mass).
> > 3. **Conclusion:**
> >    * A proton and a neutron have the same relative mass. The correct option is **C**.

> [!EXAMPLE]
> #### 📝 Worked Example 3: Subatomic Particle Counts in Neutral Atoms
> **Question:** A neutral atom of sulfur has 16 protons in its nucleus. How many electrons does this neutral atom have?
> 
> **A** 8
> 
> **B** 16
> 
> **C** 32
> 
> **D** 48
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the Charge State:**
> >    * The question specifies that the atom is **neutral** (no overall electrical charge).
> > 2. **Relate Charges:**
> >    * For the net charge to be zero, the total positive charge from protons must balance the total negative charge from electrons.
> >    * Therefore, in any neutral atom: number of protons = number of electrons.
> > 3. **Conclusion:**
> >    * Since there are 16 protons, there must be 16 electrons. The correct option is **B**.

> [!EXAMPLE]
> #### 📝 Worked Example 4: Identifying Charge of Particles
> **Question:** An unknown particle contains 12 protons, 12 neutrons, and 10 electrons. What is the electrical charge of this particle?
> 
> **A** Neutral (0)
> 
> **B** -2
> 
> **C** +2
> 
> **D +12
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Add Positive Charges:**
> >    * Protons have a +1 charge. 12 protons = +12.
> > 2. **Add Negative Charges:**
> >    * Electrons have a -1 charge. 10 electrons = -10.
> > 3. **Add Neutral Particles:**
> >    * Neutrons carry no charge, so they do not affect the total electrical charge.
> > 4. **Calculate Net Charge:**
> >    * $\\text{Net Charge} = +12 + (-10) = +2$.
> > 5. **Conclusion:**
> >    * The particle has a charge of +2 (it is a cation). The correct option is **C**.

> [!EXAMPLE]
> #### 📝 Worked Example 5: Nucleons Definition
> **Question:** What is the term used to describe the total number of protons and neutrons in the nucleus of an atom?
> 
> **A** Atomic number
> 
> **B** Nucleons
> 
> **C** Isotopes
> 
> **D** Valency
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Define Candidates:**
> >    * Atomic number is the number of protons only.
> >    * Nucleons are the particles in the nucleus (protons and neutrons).
> > 2. **Match with Question:**
> >    * Protons and neutrons reside in the nucleus and are collectively referred to as nucleons.
> > 3. **Conclusion:**
> >    * The particles are nucleons. The correct option is **B**.
        `,
        keyPoints: [
            "Protons and neutrons reside in the nucleus; electrons orbit in outer shells.",
            "Protons and neutrons each have a relative mass of 1; electrons have a negligible mass (1/1840).",
            "In any neutral atom, the number of positive protons equals the number of negative electrons."
        ]
    },
    {
        id: "atomic-mass-isotopes",
        title: "Atomic/Mass Numbers & Isotopes",
        type: "text",
        content: `
### 🧮 Atomic and Nucleon Numbers

> [!IMPORTANT]
> ### 🧮 1. Atomic Number (Proton Number, Z)
> The number of protons in the nucleus of an atom. 
> * **Note:** This number is unique to each element and identifies the atom. In a neutral atom, this also equals the number of electrons.

> [!IMPORTANT]
> ### 🧮 2. Nucleon Number (Mass Number, A)
> The total number of protons and neutrons in the nucleus of an atom.
> $$\\text{Nucleon Number (A)} = \\text{Protons (Z)} + \\text{Neutrons}$$
> $$\\text{Number of Neutrons} = A - Z$$
### 🧬 Isotopes

> [!IMPORTANT]
> ### 🧮 Definition: Isotopes
> **Isotopes** are atoms of the same element containing the **same number of protons** but a **different number of neutrons** in their nuclei.

* **Chemical Properties:** Isotopes have **identical chemical properties** because they are isoelectronic (they have the same number of electrons and the exact same electronic configuration).
* **Physical Properties:** Isotopes have **different physical properties** (like density, melting point, and diffusion rate) because their masses are different due to the varying number of neutrons.
### 🧮 Relative Atomic Mass (Ar)

The relative atomic mass ($A_r$) is the average mass of an element's isotopes compared with a carbon-12 atom.

$$A_r = \\frac{(\\text{Abundance}_A \\% \\times \\text{Mass}_A) + (\\text{Abundance}_B \\% \\times \\text{Mass}_B) + \\dots}{100}$$

* **Relative Molecular Mass (Mr):** The sum of the relative atomic masses of all atoms in a covalent molecule.
* **Relative Formula Mass (Mr):** The sum of the relative atomic masses of all ions in an ionic compound.

> [!EXAMPLE]
> #### 📝 Worked Example 1: Calculating Neutrons
> **Question:** An atom is represented as $^{23}_{11}\\text{Na}$. How many neutrons are present in the nucleus of this sodium atom?
> 
> **A** 11
> 
> **B** 12
> 
> **C** 23
> 
> **D** 34
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the Symbols:**
> >    * The top number is the Nucleon/Mass Number ($A = 23$).
> >    * The bottom number is the Atomic/Proton Number ($Z = 11$).
> > 2. **Apply the Formula:**
> >    * $\\text{Neutrons} = A - Z = 23 - 11 = 12$.
> > 3. **Conclusion:**
> >    * The sodium atom has 12 neutrons. The correct option is **B**.

> [!EXAMPLE]
> #### 📝 Worked Example 2: Chemical Properties of Isotopes
> **Question:** Why do isotopes of the same element show identical chemical behavior?
> 
> **A** They have the same number of neutrons.
> 
> **B** They have the same mass number.
> 
> **C** They have the same number of outer-shell valence electrons.
> 
> **D** They have different physical densities.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Define Chemical Reactions:**
> >    * Chemical properties and reactions are determined by the electronic configuration, specifically the number of electrons in the outer shell (valency electrons).
> > 2. **Check Isotope Electron Counts:**
> >    * Isotopes have the same proton number, which means neutral isotopes have the same number of electrons and the same configuration.
> > 3. **Conclusion:**
> >    * Identical outer shell electrons dictate identical chemical properties. The correct option is **C**.

> [!EXAMPLE]
> #### 📝 Worked Example 3: Physical Properties of Isotopes
> **Question:** Which property is different between two isotopes of carbon, carbon-12 ($^{12}\\text{C}$) and carbon-14 ($^{14}\\text{C}$)?
> 
> **A** Rate of reaction with oxygen gas
> 
> **B** Density of the solid element
> 
> **C** Number of protons in the nucleus
> 
> **D** Electronic configuration
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify Physical vs. Chemical properties:**
> >    * Chemical properties (reaction rate with oxygen, electron arrangements, proton numbers) are identical for isotopes.
> >    * Physical properties depend on mass. Since $^{14}\\text{C}$ has two more neutrons than $^{12}\\text{C}$, it is heavier.
> > 2. **Evaluate Mass-dependent properties:**
> >    * Density is mass per unit volume. The heavier isotope will have a higher density.
> > 3. **Conclusion:**
> >    * Density is different. The correct option is **B**.

> [!EXAMPLE]
> #### 📝 Worked Example 4: Relative Atomic Mass Calculation
> **Question:** Chlorine consists of two isotopes: $^{35}\text{Cl}$ (abundance 75%) and $^{37}\text{Cl}$ (abundance 25%). Calculate the relative atomic mass ($A_r$) of chlorine.
> 
> **A** 35.0
> 
> **B** 35.5
> 
> **C** 36.0
> 
> **D** 36.5
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Apply the Weighted Average Formula:**
> >    * $A_r = \frac{(\text{Abundance}_1 \times \text{Mass}_1) + (\text{Abundance}_2 \times \text{Mass}_2)}{100}$
> > 2. **Substitute values:**
> >    * $A_r = \frac{(75 \times 35) + (25 \times 37)}{100}$
> >    * $A_r = \frac{2625 + 925}{100} = \frac{3550}{100} = 35.5$
> > 3. **Conclusion:**
> >    * The relative atomic mass is 35.5. The correct option is **B**.

> [!EXAMPLE]
> #### 📝 Worked Example 5: Finding Ar from Fractional Abundance
> **Question:** A sample of element X contains 80% of $^{10}\text{X}$ and 20% of $^{11}\text{X}$. What is the average relative atomic mass ($A_r$) of this sample?
> 
> **A** 10.0
> 
> **B** 10.2
> 
> **C** 10.5
> 
> **D** 10.8
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Apply Formula:**
> >    * $A_r = \\frac{(80 \\times 10) + (20 \\times 11)}{100}$
> > 2. **Calculate:**
> >    * $A_r = \\frac{800 + 220}{100} = \\frac{1020}{100} = 10.2$
> > 3. **Conclusion:**
> >    * The $A_r$ of element X is 10.2. The correct option is **B**.

> [!EXAMPLE]
> #### 📝 Worked Example 6: Cambridge Silicon Isotopic Abundance
> **Question:** The table shows the percentage composition by mass of a sample of silicon:
> 
> | Isotope | $^{28}\\text{Si}$ | $^{29}\\text{Si}$ | $^{30}\\text{Si}$ |
> | :---: | :---: | :---: | :---: |
> | **Percentage (%)** | $92.2$ | $4.70$ | $3.10$ |
> 
> Calculate the relative atomic mass ($A_r$) of this sample of silicon. Give your answer to **one decimal place**.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Apply the Relative Atomic Mass Formula:**
> >    * $A_r = \\frac{(92.2 \\times 28) + (4.70 \\times 29) + (3.10 \\times 30)}{100}$
> > 2. **Compute Each Product:**
> >    * $92.2 \\times 28 = 2581.6$
> >    * $4.70 \\times 29 = 136.3$
> >    * $3.10 \\times 30 = 93.0$
> > 3. **Sum and Divide by 100:**
> >    * $\\text{Sum} = 2581.6 + 136.3 + 93.0 = 2810.9$
> >    * $A_r = \\frac{2810.9}{100} = 28.109$
> > 4. **Round to 1 Decimal Place (Cambridge Standard):**
> >    * $A_r = 28.1$
        `,
        keyPoints: [
            "Atomic number (Z) is the proton count; nucleon number (A) is the total protons + neutrons.",
            "Isotopes have identical chemical properties (same electrons) but different physical properties (different mass).",
            "Relative atomic mass is the weighted average mass of an element's isotopes relative to carbon-12."
        ]
    },
    {
        id: "electron-config-table",
        title: "Electron Configuration & Periodic Table",
        type: "text",
        content: `
### orbit Electron Arrangements

Electrons orbit the nucleus in energy levels or **shells**.

> [!NOTE]
> ### 📋 Shell Capacity Limits
> * **1st Shell** (closest to nucleus): Holds up to **2 electrons**
> * **2nd Shell**: Holds up to **8 electrons**
> * **3rd Shell**: Holds up to **8 electrons** (for the first 20 elements)

For example, Sodium (Atomic Number 11) has 11 electrons. The arrangement is: **2, 8, 1**.
### 📅 Connections to the Periodic Table

The electron configuration of an element determines its exact location in the Periodic Table:

> [!IMPORTANT]
> ### 🧮 1. Period Number (Shell Count)
> The period (horizontal row) number is equal to the **number of occupied electron shells**.
> * *Example:* Sodium (2, 8, 1) has 3 shells occupied, so it is in **Period 3**.

> [!IMPORTANT]
> ### 🧮 2. Group Number (Outer Electrons)
> The group (vertical column) number is equal to the **number of electrons in the outer shell** (valence electrons).
> * *Example:* Sodium (2, 8, 1) has 1 outer electron, so it is in **Group I**.
### 🛡️ Group VIII: The Stable Noble Gases

Group VIII elements (Helium, Neon, Argon, etc.) are called **Noble Gases** or **Inert Gases**.
* They have a **very stable, full outer shell** (Helium has 2, others have 8).
* Because of this full valence shell (octet rule), they are extremely **unreactive (inert)**.
* **Valency:** The number of electrons an atom loses, gains, or shares to achieve a stable, full outer shell. Group VIII elements have a valency of **0**.
### 📐 Valency of Main Groups
* **Group I:** 1 (loses 1e¯ to become +1 cation)
* **Group II:** 2 (loses 2e¯ to become +2 cation)
* **Group III:** 3 (loses 3e¯ to become +3 cation)
* **Group IV:** 4 (shares 4e¯)
* **Group V:** 3 (gains/shares 3e¯ to become -3 anion)
* **Group VI:** 2 (gains/shares 2e¯ to become -2 anion)
* **Group VII:** 1 (gains/shares 1e¯ to become -1 anion)
* **Group VIII:** 0 (stable)

> [!EXAMPLE]
> #### 📝 Worked Example 1: Finding Electron Configuration
> **Question:** Chlorine has an atomic number of 17. What is the electronic configuration of a neutral chlorine atom?
> 
> **A** 2, 8, 7
> 
> **B** 2, 8, 8
> 
> **C** 2, 7, 8
> 
> **D** 7, 8, 2
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Determine Electron Count:**
> >    * Neutral chlorine has 17 protons, so it has 17 electrons.
> > 2. **Fill Shells in Order:**
> >    * 1st shell fills first: holds 2 electrons (15 remaining).
> >    * 2nd shell fills next: holds 8 electrons (7 remaining).
> >    * 3rd shell holds the remaining 7 electrons.
> > 3. **Write Configuration:**
> >    * The arrangement is 2, 8, 7.
> > 4. **Conclusion:**
> >    * Configuration is 2, 8, 7. The correct option is **A**.

> [!EXAMPLE]
> #### 📝 Worked Example 2: Identifying Period from Configuration
> **Question:** An element has the electronic configuration 2, 8, 8, 2. Which period of the Periodic Table does this element belong to?
> 
> **A** Period 2
> 
> **B** Period 4
> 
> **C** Period 8
> 
> **D** Period 10
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Count Occupied Shells:**
> >    * The configuration 2, 8, 8, 2 occupies 4 shells in total.
> > 2. **Relate Shells to Period:**
> >    * The number of occupied shells is equal to the period number.
> >    * Since there are 4 shells, it belongs to Period 4 (Calcium).
> > 3. **Conclusion:**
> >    * The period number is 4. The correct option is **B**.

> [!EXAMPLE]
> #### 📝 Worked Example 3: Valence Electrons and Group Number
> **Question:** An atom belongs to Group VI and Period 3 of the Periodic Table. What is the electronic configuration of this atom?
> 
> **A** 2, 8, 6
> 
> **B** 2, 6
> 
> **C** 6, 8, 2
> 
> **D** 2, 8, 8, 6
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Interpret Period Number:**
> >    * Period 3 means the atom must have exactly 3 occupied shells.
> > 2. **Interpret Group Number:**
> >    * Group VI means the atom must have exactly 6 electrons in its outermost shell.
> > 3. **Assemble Configuration:**
> >    * 3 shells means: 1st shell (2 electrons), 2nd shell (8 electrons), and 3rd shell (6 electrons).
> >    * Arrangement: 2, 8, 6.
> > 4. **Conclusion:**
> >    * The electronic configuration is 2, 8, 6 (Sulfur). The correct option is **A**.

> [!EXAMPLE]
> #### 📝 Worked Example 4: Unreactivity of Noble Gases
> **Question:** Why are Group VIII elements (He, Ne, Ar) extremely unreactive?
> 
> **A** They are light monoatomic gases.
> 
> **B** They have stable, full outer shells of electrons.
> 
> **C** They are located at the far right of the Periodic Table.
> 
> **D** They have strong intermolecular attractions.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Define Chemical Stability:**
> >    * Atoms react to lose, gain, or share electrons to achieve a stable full outer shell.
> > 2. **Evaluate Noble Gas Electron Shells:**
> >    * Noble gases already have a full outer shell (Helium has 2, Neon and Argon have 8). They do not need to react to achieve stability.
> > 3. **Conclusion:**
> >    * They are unreactive because of their full, stable valence electron shells. The correct option is **B**.

> [!EXAMPLE]
> #### 📝 Worked Example 5: Group VII Valency
> **Question:** What is the valency of a Group VII element, such as fluorine or chlorine?
> 
> **A** 1
> 
> **B** 2
> 
> **C** 7
> 
> **D** 8
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Define Valency:**
> >    * Valency is the number of electrons an atom must gain, lose, or share to obtain a full outer shell.
> > 2. **Check Group VII Properties:**
> >    * Group VII elements have 7 electrons in their outer shell.
> >    * To complete their octet (8 electrons), they need to gain or share exactly 1 electron.
> > 3. **Conclusion:**
> >    * The valency of Group VII elements is 1. The correct option is **A**.
        `,
        keyPoints: [
            "Electron shells hold electrons in a 2, 8, 8 arrangement.",
            "Period number equals the number of occupied shells; Group number equals valence (outer) electrons.",
            "Noble gases (Group VIII) are unreactive because they have stable, full valence shells."
        ]
    }
];
