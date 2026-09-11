import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Atomic Structure & The Periodic Table";
export const lessonNumber = 2;




export const theoryMarkdown = `
# Topic 2: Atomic Structure & The Periodic Table
This lesson covers subatomic particles, mass spectrometry, relative isotopic and atomic masses, electronic configurations (s, p, d orbitals), and trends in first ionization energies.
`;

export const parts: LessonPart[] = [
  {
    id: 'subatomic-particles-20260106',
    title: 'Subatomic Particles & Isotopes',
    type: 'text',
    content: `
> [!NOTE]
> ### ⚛️ Who Discovered Electrons, Protons and Neutrons?
> Our current understanding of the structure of atoms is influenced by theories put forward by:
> * **J.J. Thomson (1897):** Discovered the electron.
> * **Ernest Rutherford (1917):** Discovered the proton, and suggested the atom has a very small, dense nucleus containing the bulk of its mass
> * **James Chadwick (1932):** Discovered the neutron.

> [!NOTE]
> ### ⚛️ Fundamental Subatomic Particles
> Although scientists have discovered many other subatomic particles, chemistry is only concerned with protons, neutrons, and electrons:
> 
> | Particle | Symbol | Relative Mass | Relative Charge | Position in the Atom |
> | :--- | :---: | :--- | :---: | :--- |
> | proton | p | 1 | +1 | nucleus |
> | neutron | n | 1 | 0 | nucleus |
> | electron | e⁻ | $\frac{1}{1840}$ | -1 | quantum shells surrounding the nucleus |

> [!TIP]
> ### 💡 Learning Tip: Electron Mass & Scale
> * **Never state that the mass of an electron is zero.** It has a real mass (relative mass $\frac{1}{1840}$)
> * You do not need to know the exact masses of subatomic particles in grams, or the exact charges in coulombs. You only need to know the relative values.

> [!IMPORTANT]
> ### 🧮 Atomic and Mass Numbers
> * **Atomic number (proton number $Z$):** Number of protons in the nucleus of an atom. It uniquely identifies any element ($p = e$ in a neutral atom)
> * **Charge Neutrality:** Any atom has zero net charge because it has the same number of positive protons and negative electrons
> * **Nucleon number (mass number $A$):** The total number of protons and neutrons in the nucleus of an atom
> * **Whole Numbers:** The mass number of an isotope is always a whole number because it is the sum of protons and neutrons in the nucleus of one atom of the isotope

> [!TIP]
> ### 🧪 Isotopes and Chemical Reactivity
> * **Isotopes:** Atoms of the same element (same proton number), with different numbers of neutrons
> * **Chemical Properties:** Isotopes have identical chemical properties because they have identical electronic configurations (the same number of valence electrons and outer shell arrangements)
> * **Physical Properties:** Isotopes have slightly different physical properties (e.g. density, rate of diffusion) due to their difference in mass
> * **Relative Atomic Mass ($A_r$):** Weighted mean mass of an atom of an element compared to $\frac{1}{12}$ the mass of carbon-12

> [!BOX]
> ### 📋 Subject Vocabulary
> * **atomic number (Z):** the number of protons in the nucleus of an atom
> * **mass number (A):** the sum of the number of protons and the number of neutrons in the nucleus of an atom
> * **isotopes:** atoms of the same element that have the same atomic number but different mass numbers

> [!EXAMPLE]
> #### 📝 Worked Example 1: Particles in a Neutral Atom
> **Question:** Determine the number of protons, neutrons, and electrons in a neutral atom of Calcium-40 ($^{40}_{20}\text{Ca}$)
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify atomic and mass numbers:**
> >    * Atomic number ($Z$) = $20$
> >    * Mass number ($A$) = $40$
> > 2. **Calculate subatomic particles:**
> >    * Protons = $Z = 20$
> >    * Neutrons = $A - Z = 40 - 20 = 20$
> >    * Electrons = Protons (since it is a neutral atom) = $20$

> [!EXAMPLE]
> #### 📝 Worked Example 2: Particles in an Ion
> **Question:** Determine the number of protons, neutrons, and electrons in a Calcium ion ($^{40}_{20}\text{Ca}^{2+}$)
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify numbers and charge:**
> >    * Protons = $20$ (proton count never changes in chemical reactions)
> >    * Neutrons = $A - Z = 40 - 20 = 20$
> > 2. **Calculate electrons:**
> >    * The $+2$ charge indicates a loss of 2 electrons
> >    * Electrons = Protons $-$ Charge = $20 - 2 = 18$

> [!EXAMPLE]
> #### 📝 Worked Example 3: Particles in a Negative Isotopic Ion
> **Question:** Determine the number of protons, neutrons, and electrons in a Chloride ion formed from the Chlorine-37 isotope ($^{37}_{17}\text{Cl}^-$)
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify atomic and mass numbers:**
> >    * Atomic number ($Z$) = $17$
> >    * Mass number ($A$) = $37$
> > 2. **Calculate protons and neutrons:**
> >    * Protons = $17$
> >    * Neutrons = $A - Z = 37 - 17 = 20$
> > 3. **Calculate electrons:**
> >    * The $-1$ charge indicates a gain of 1 electron
> >    * Electrons = Protons $+$ Charge magnitude = $17 + 1 = 18$

> [!EXAMPLE]
> #### 📝 Worked Example 5: Explaining Physical Differences between Isotopes
> **Question:** State and explain why a sample of gas containing the Chlorine-37 isotope, $^{37}\text{Cl}_2$, diffuses more slowly than a sample containing the Chlorine-35 isotope, $^{35}\text{Cl}_2$, at the same temperature
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate the relative molecular masses of both gas molecules:**
> >    * $Mr(^{35}\text{Cl}_2) = 2 \times 35.0 = 70.0$
> >    * $Mr(^{37}\text{Cl}_2) = 2 \times 37.0 = 74.0$
> > 
> > 2. **Relate molecular mass to rate of physical diffusion:**
> >    * At any given temperature, all gas molecules share the same average kinetic energy ($KE = \frac{1}{2}mv^2$)
> >    * Consequently, molecules with a larger mass ($m$) must travel at a lower average velocity ($v$)
> >    * Since $^{37}\text{Cl}_2$ molecules are heavier ($Mr = 74.0$) than $^{35}\text{Cl}_2$ molecules ($Mr = 70.0$), they move slower at the same temperature and therefore diffuse at a lower rate

> [!EXAMPLE]
> #### 📝 Worked Example 6: Identifying Species from Subatomic Particle Tables
> **Question:** Use the table below to identify:
> (a) Which two particles are isotopes of the same element?
> (b) Which two particles are positive ions?
> (c) Which two particles are negative ions?
> (d) Which two particles have the same mass number?
> 
> | Particle | Number of Protons | Number of Neutrons | Number of Electrons |
> | :---: | :---: | :---: | :---: |
> | **A** | 12 | 13 | 12 |
> | **B** | 17 | 18 | 18 |
> | **C** | 11 | 14 | 10 |
> | **D** | 12 | 12 | 12 |
> | **E** | 35 | 44 | 36 |
> | **F** | 19 | 21 | 18 |
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify isotopes of the same element (a):**
> >    * Isotopes must have the same number of protons (atomic number).
> >    * Particles **A** and **D** both have 12 protons, so they are isotopes of magnesium (Mg)
> > 
> > 2. **Identify positive ions (b):**
> >    * Positive ions (cations) have more protons than electrons.
> >    * **C** (11 protons, 10 electrons) and **F** (19 protons, 18 electrons) are positive ions
> > 
> > 3. **Identify negative ions (c):**
> >    * Negative ions (anions) have more electrons than protons.
> >    * **B** (17 protons, 18 electrons) and **E** (35 protons, 36 electrons) are negative ions
> > 
> > 4. **Calculate and compare mass numbers (d):**
> >    * Mass number ($A$) = Protons + Neutrons.
> >    * $A(\text{A}) = 12 + 13 = 25$
> >    * $A(\text{B}) = 17 + 18 = 35$
> >    * $A(\text{C}) = 11 + 14 = 25$
> >    * $A(\text{D}) = 12 + 12 = 24$
> >    * $A(\text{E}) = 35 + 44 = 79$
> >    * $A(\text{F}) = 19 + 21 = 40$
> >    * Therefore, particles **A** and **C** have the same mass number (25)

> [!EXAMPLE]
> #### 📝 Worked Example 7: Calculating Particles in Isotopes, Molecules, and Ions
> **Question:** Determine the number of protons, neutrons, and electrons in each of the following chemical species:
> (a) Tritium ($^3_1\text{H}$)
> (b) Oxygen-18 ion ($^{18}_8\text{O}^{2-}$)
> (c) Magnesium-24 ion ($^{24}_{12}\text{Mg}^{2+}$)
> (d) Ammonia molecule ($^{14}_7\text{N}^1_1\text{H}_3$)
> (e) Deuterated ammonium ion ($^{14}_7\text{N}^2_1\text{H}_4^+$)
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **For Tritium ($^3_1\text{H}$):**
> >    * Protons = atomic number = 1
> >    * Neutrons = mass number $-$ atomic number = $3 - 1 = 2$
> >    * Electrons = protons (neutral atom) = 1
> > 
> > 2. **For Oxygen-18 ion ($^{18}_8\text{O}^{2-}$):**
> >    * Protons = atomic number = 8
> >    * Neutrons = mass number $-$ atomic number = $18 - 8 = 10$
> >    * Electrons = protons + magnitude of negative charge = $8 + 2 = 10$
> > 
> > 3. **For Magnesium-24 ion ($^{24}_{12}\text{Mg}^{2+}$):**
> >    * Protons = atomic number = 12
> >    * Neutrons = mass number $-$ atomic number = $24 - 12 = 12$
> >    * Electrons = protons $-$ positive charge = $12 - 2 = 10$
> > 
> > 4. **For Ammonia ($^{14}_7\text{N}^1_1\text{H}_3$):**
> >    * Protons = protons in N + 3 $\times$ protons in H = $7 + 3(1) = 10$
> >    * Neutrons = neutrons in N + 3 $\times$ neutrons in H = $(14 - 7) + 3(1 - 1) = 7 + 0 = 7$
> >    * Electrons = protons (neutral molecule) = 10
> > 
> > 5. **For Deuterated Ammonium ($^{14}_7\text{N}^2_1\text{H}_4^+$):**
> >    * Protons = protons in N + 4 $\times$ protons in H = $7 + 4(1) = 11$
> >    * Neutrons = neutrons in N + 4 $\times$ neutrons in H-2 (deuterium) = $(14 - 7) + 4(2 - 1) = 7 + 4 = 11$
> >    * Electrons = protons $-$ positive charge = $11 - 1 = 10$
`,
    keyPoints: [
      'Protons and neutrons occupy the dense central nucleus.',
      'Isotopes share identical electronic structures, resulting in identical chemical reactivity.',
      'Cations are formed by losing electrons; anions are formed by gaining electrons.'
    ]
  },
  {
    id: 'mass-spectrometry-20260106',
    title: 'Mass Spectrometry',
    type: 'text',
    massSpecSimulator: true,
    content: `
> [!NOTE]
> ### ⚙️ Principles of Mass Spectrometry
> * **Francis Aston (1919):** Invented the mass spectrometer and discovered that not all the atoms of an element have the same mass, confirming the existence of isotopes.
> 
> The operation of a mass spectrometer follows five key steps:
> 
> 1. **Vaporisation:** The sample must be in a gaseous state so that the particles can move freely and fast
> 2. **Ionisation:** Vaporised particles are bombarded with high-energy electrons from an electron gun. This knocks off one or more electrons from the gaseous particles to form positive ions
> 3. **Acceleration:** Gaseous positive ions are accelerated by an electric field (potential difference) to give all ions the same kinetic energy, causing them to travel in straight paths
> 4. **Deflection:** The accelerated ions are deflected by a magnetic field. The degree of deflection depends on the mass-to-charge ratio ($m/z$) of each ion
> 5. **Detection:** Deflected ions hit a metallic detector plate, generating an electric current. The size of the current is directly proportional to the abundance of each isotope

> [!IMPORTANT]
> ### 🧪 Ionisation Equations & Vacuum Conditions
> * **Single Ionisation ($1+$ Ions):**
>   $$\\text{M(g)} + e^- \\rightarrow \\text{M}^+\\text{(g)} + 2e^-$$
> * **Double Ionisation ($2+$ Ions):**
>   $$\\text{M(g)} + e^- \\rightarrow \\text{M}^{2+}\\text{(g)} + 3e^-$$
> * **Deflection Proportion:** The degree of deflection is inversely proportional to the mass-to-charge ratio ($m/z$). Ions with a smaller $m/z$ (lighter/more charged) deflect more, while ions with a larger $m/z$ (heavier/less charged) deflect less
> * **Vacuum Requirement:** The entire system must operate under a high vacuum to prevent gaseous ions from colliding with air particles, which would deflect them from their path and form false peaks on the spectrum

> [!BOX]
> ### 📋 Key Applications & Uses of Mass Spectrometry
> Mass spectrometers are widely used across research, medicine, and space exploration:
> 
> 1. **Isotopic Analysis:** Determine the exact mass and relative abundance of each isotope of an element
> 2. **Structure Determination:** Determine the relative molecular mass ($M_r$) of a compound to identify its structure
> 3. **Archaeological Dating:** Determine the age of fossils or human remains (Radioactive carbon dating)
> 4. **Drug & Sports Testing:** Detect illegal use of anabolic steroids in sports or measure alcohol blood levels
> 5. **Space Analysis:** Analyse materials brought back from space missions
> 6. **Pharmaceutical Quality Control:** Identify breakdown products of drugs and verify whether the desired compound has been successfully synthesised
> 7. **Drug Discovery:** Identify molecules from biological samples with potential therapeutic activity


> [!NOTE]
> ### 📊 Understanding Mass Spectra
> * **Relative Isotopic Mass:** The mass of an individual atom of a particular isotope relative to $\\frac{1}{12}$ of the mass of an atom of carbon-12
> * **Molecular (Parent) Ion Peak ($M$ peak):**
>   1. The peak with the highest $m/z$ ratio in the mass spectrum of a molecular compound
>   2. Located at the far right of the spectrum, it represents the relative molecular mass ($M_r$) of the intact molecule
> * **Fragment Ion Peaks:** The peaks with smaller $m/z$ values represent fragment ions formed when the molecular ion breaks down. The positively charged species detected can be positive atoms, molecules, or molecular fragments
> * **The $M+1$ Peak:** In large organic compounds (like ethyl benzoate), a very small peak is observed at $m/z = M+1$. This is caused by the naturally occurring carbon-13 isotope ($1.11\%$) present in the molecules

${svgToken(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 360" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
    <linearGradient id="barBlue" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#60a5fa" />
      <stop offset="100%" stop-color="#2563eb" />
    </linearGradient>
    <linearGradient id="barAmber" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#fbbf24" />
      <stop offset="100%" stop-color="#d97706" />
    </linearGradient>
    <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#1e293b" stroke-width="1" opacity="0.3"/>
    </pattern>
    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8" />
    </marker>
  </defs>

  <rect width="1000" height="360" fill="url(#bgGrad)" stroke="#1e293b" stroke-width="2" rx="8" />
  <rect width="1000" height="360" fill="url(#grid)" rx="8" />

  <!-- Title -->
  <text x="500" y="30" fill="#c7d2fe" font-size="14" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">Typical Mass Spectrum of an Organic Compound</text>

  <!-- Y-Axis Grid Lines & Labels -->
  <g stroke="#1e293b" stroke-width="1" opacity="0.5">
    <line x1="100" y1="50" x2="900" y2="50" stroke-dasharray="4 4" />
    <line x1="100" y1="100" x2="900" y2="100" stroke-dasharray="4 4" />
    <line x1="100" y1="150" x2="900" y2="150" stroke-dasharray="4 4" />
    <line x1="100" y1="200" x2="900" y2="200" stroke-dasharray="4 4" />
    <line x1="100" y1="250" x2="900" y2="250" stroke-dasharray="4 4" />
  </g>

  <g fill="#94a3b8" font-size="11" font-family="system-ui, sans-serif" text-anchor="end">
    <text x="90" y="54">100</text>
    <text x="90" y="104">80</text>
    <text x="90" y="154">60</text>
    <text x="90" y="204">40</text>
    <text x="90" y="254">20</text>
    <text x="90" y="304">0</text>
  </g>

  <!-- Axes -->
  <line x1="100" y1="40" x2="100" y2="300" stroke="#475569" stroke-width="2" />
  <line x1="100" y1="300" x2="920" y2="300" stroke="#475569" stroke-width="2" />

  <!-- Axis Titles -->
  <text x="45" y="170" fill="#94a3b8" font-size="12" font-weight="600" transform="rotate(-90,45,170)" text-anchor="middle" font-family="system-ui, sans-serif">Relative Intensity (%)</text>
  <text x="510" y="342" fill="#94a3b8" font-size="12" font-weight="600" text-anchor="middle" font-family="system-ui, sans-serif">m/z (Mass-to-Charge Ratio)</text>

  <!-- X-Axis Labels -->
  <g fill="#94a3b8" font-size="11" font-family="system-ui, sans-serif" text-anchor="middle">
    <text x="225" y="318">25</text>
    <text x="350" y="318">50</text>
    <text x="475" y="318">75</text>
    <text x="600" y="318">100</text>
    <text x="725" y="318">125</text>
    <text x="850" y="318">150</text>
  </g>

  <!-- Spectrum Peaks -->
  <!-- Fragment Peak at m/z = 39 (x=295) height=10% (y=275) -->
  <line x1="295" y1="300" x2="295" y2="275" stroke="#3b82f6" stroke-width="3" stroke-linecap="round" />
  <!-- Fragment Peak at m/z = 51 (x=355) height=20% (y=250) -->
  <line x1="355" y1="300" x2="355" y2="250" stroke="#3b82f6" stroke-width="3" stroke-linecap="round" />
  <!-- Fragment Peak at m/z = 77 (x=485) height=40% (y=200) -->
  <line x1="485" y1="300" x2="485" y2="200" stroke="#3b82f6" stroke-width="3" stroke-linecap="round" />
  <!-- Base Peak at m/z = 105 (x=625) height=100% (y=50) -->
  <line x1="625" y1="300" x2="625" y2="50" stroke="url(#barAmber)" stroke-width="4" stroke-linecap="round" />
  <!-- Fragment Peak at m/z = 120 (x=700) height=15% (y=262.5) -->
  <line x1="700" y1="300" x2="700" y2="262.5" stroke="#3b82f6" stroke-width="3" stroke-linecap="round" />
  <!-- Molecular Ion Peak (M) at m/z = 150 (x=850) height=25% (y=237.5) -->
  <line x1="850" y1="300" x2="850" y2="237.5" stroke="#ef4444" stroke-width="4" stroke-linecap="round" />
  <!-- M+1 Peak at m/z = 151 (x=855) height=2.5% (y=293.75) -->
  <line x1="855" y1="300" x2="855" y2="293.75" stroke="#f43f5e" stroke-width="2.5" stroke-linecap="round" />

  <!-- Label Annotations -->
  <!-- Base Peak Label -->
  <g font-family="system-ui, sans-serif" font-size="11">
    <text x="635" y="70" fill="#fbbf24" font-weight="700">Base Peak (100% abundance)</text>
    <text x="635" y="85" fill="#94a3b8">The most intense/stable peak in the spectrum</text>
    <path d="M 630 75 L 627 75" stroke="#fbbf24" stroke-width="1" marker-end="url(#arrow)" />

    <!-- Fragment Peaks Label -->
    <text x="375" y="145" fill="#60a5fa" font-weight="700">Fragment Ion Peaks</text>
    <text x="375" y="160" fill="#94a3b8">Formed when the molecular ion breaks down</text>
    <path d="M 430 168 L 475 190" stroke="#94a3b8" stroke-width="1" fill="none" marker-end="url(#arrow)" />
    <path d="M 400 168 L 362 235" stroke="#94a3b8" stroke-width="1" fill="none" marker-end="url(#arrow)" />

    <!-- Molecular Ion Peak (M) Label -->
    <text x="690" y="215" fill="#f87171" font-weight="700" text-anchor="end">Molecular Ion Peak (M)</text>
    <text x="690" y="230" fill="#94a3b8" text-anchor="end">Represents the intact molecule (Mr = 150)</text>
    <path d="M 695 225 L 840 242" stroke="#f87171" stroke-width="1" fill="none" marker-end="url(#arrow)" />

    <!-- M+1 Peak Label -->
    <text x="880" y="270" fill="#f43f5e" font-weight="700">M+1 Peak</text>
    <text x="880" y="285" fill="#94a3b8">Due to natural 13C abundance</text>
    <path d="M 875 280 L 858 293" stroke="#f43f5e" stroke-width="1" fill="none" marker-end="url(#arrow)" />
  </g>
</svg>`)}

> [!BOX]
> ### 🧪 Isotopic Patterns & Chlorine Spectrum
> * **Relative Atomic Mass Standard:** In 1961, carbon-12 ($^{12}\text{C}$) was universally adopted as the international standard for relative atomic masses, where 1 unit is exactly $\frac{1}{12}$ of the mass of a carbon-12 atom
> * **Chlorine Isotopic Abundance:** In nature, Chlorine exists as $^{35}\text{Cl}$ (approximately $75\%$ abundance) and $^{37}\text{Cl}$ (approximately $25\%$ abundance), showing a ratio of $3:1$ (or probabilities of $\frac{3}{4}$ and $\frac{1}{4}$ respectively)
> * **Diatomic Chlorine ($\text{Cl}_2$) Pattern:** In the mass spectrum of chlorine gas ($\text{Cl}_2$), three molecular ion peaks appear at $m/z = 70$ ($^{35}\text{Cl}_2^+$), $72$ ($^{35}\text{Cl}^{37}\text{Cl}^+$), and $74$ ($^{37}\text{Cl}_2^+$)
> * **Mathematical Peak Ratios:** The relative heights of these molecular ion peaks ($\text{Cl}_2$) are approximately in a **$9:6:1$ ratio**:
>   1. Probability of selecting $^{35}\text{Cl}$ is $\frac{3}{4}$. The probability of two $^{35}\text{Cl}$ atoms joining ($^{35}\text{Cl}_2^+$ at $m/z=70$) is: $\frac{3}{4} \times \frac{3}{4} = \frac{9}{16}$
>   2. The probability of $^{35}\text{Cl}$ and $^{37}\text{Cl}$ joining ($^{35}\text{Cl}^{37}\text{Cl}^+$ at $m/z=72$ in either order) is: $2 \times \left(\frac{3}{4} \times \frac{1}{4}\right) = \frac{6}{16}$
>   3. The probability of two $^{37}\text{Cl}$ atoms joining ($^{37}\text{Cl}_2^+$ at $m/z=74$) is: $\frac{1}{4} \times \frac{1}{4} = \frac{1}{16}$
>   * *Learning Tip:* The peak heights will not be *exactly* $9:6:1$ because the relative isotopic masses are not exact whole numbers, and abundances vary slightly.

> [!TIP]
> ### 💡 Exam Hints & Tips
> * **Exam Hint:** The calculated relative atomic mass ($A_r$) will always be a number between the relative isotopic masses. If your calculated value falls outside this range, you have made a mistake
> * **Learning Tip:** The atomic number ($Z$) is not the same as the relative isotopic mass; the mass number is always a whole number (sum of protons and neutrons), whereas the relative isotopic mass is relative to carbon-12 and is not likely to be an exact whole number.
> * **Learning Tip:** Always use the relative atomic masses given in the question (e.g. magnesium given as 24.3, or occasionally a more precise value like 24.305).

${svgToken(`<svg viewBox="0 0 700 260" xmlns="http://www.w3.org/2000/svg" style="background:linear-gradient(135deg,#070f1e 0%,#0b1b35 100%);border-radius:16px;border:1px solid #1e293b;font-family:Inter,sans-serif">
  <defs>
    <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#818cf8"/>
      <stop offset="100%" stop-color="#4f46e5"/>
    </linearGradient>
  </defs>
  <!-- Axes -->
  <line x1="80" y1="30" x2="80" y2="205" stroke="#475569" stroke-width="1.5"/>
  <line x1="80" y1="205" x2="660" y2="205" stroke="#475569" stroke-width="1.5"/>
  <!-- Y-axis label -->
  <text x="20" y="120" fill="#94a3b8" font-size="11" transform="rotate(-90,20,120)" text-anchor="middle">Relative abundance</text>
  <!-- X-axis label -->
  <text x="370" y="240" fill="#94a3b8" font-size="11" text-anchor="middle">m/z</text>
  <!-- Title -->
  <text x="370" y="20" fill="#c7d2fe" font-size="12" text-anchor="middle" font-weight="600">Mass Spectrum of Cl&#x2082; — Isotopic Pattern (9:6:1)</text>
  <!-- Bar m/z=70 height 9/9=100% => 160px -->
  <rect x="175" y="45" width="60" height="160" fill="url(#barGrad)" rx="4"/>
  <text x="205" y="40" fill="#a5b4fc" font-size="11" text-anchor="middle">9</text>
  <text x="205" y="222" fill="#cbd5e1" font-size="11" text-anchor="middle">70</text>
  <text x="205" y="234" fill="#64748b" font-size="9" text-anchor="middle">&#x00B3;&#x2075;Cl&#x2082;&#x207A;</text>
  <!-- Bar m/z=72 height 6/9 => ~107px -->
  <rect x="325" y="98" width="60" height="107" fill="url(#barGrad)" rx="4"/>
  <text x="355" y="93" fill="#a5b4fc" font-size="11" text-anchor="middle">6</text>
  <text x="355" y="222" fill="#cbd5e1" font-size="11" text-anchor="middle">72</text>
  <text x="355" y="234" fill="#64748b" font-size="9" text-anchor="middle">&#x00B3;&#x2075;Cl&#x00B3;&#x2077;Cl&#x207A;</text>
  <!-- Bar m/z=74 height 1/9 => ~18px -->
  <rect x="475" y="187" width="60" height="18" fill="url(#barGrad)" rx="4"/>
  <text x="505" y="182" fill="#a5b4fc" font-size="11" text-anchor="middle">1</text>
  <text x="505" y="222" fill="#cbd5e1" font-size="11" text-anchor="middle">74</text>
  <text x="505" y="234" fill="#64748b" font-size="9" text-anchor="middle">&#x00B3;&#x2077;Cl&#x2082;&#x207A;</text>
</svg>`)}



> [!EXAMPLE]
> #### 📝 Worked Example 1: Calculating Relative Atomic Mass (Ar)
> **Question:** A sample of neon consists of three isotopes: $^{20}\text{Ne}$ (abundance $90.9\%$), $^{21}\text{Ne}$ (abundance $0.3\%$), and $^{22}\text{Ne}$ (abundance $8.8\%$). Calculate the relative atomic mass (Ar) of this neon sample to 2 decimal places
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Apply the weighted average formula:**
> >    $$A_r = \frac{\sum (\text{Isotopic Mass} \times \text{Percentage Abundance})}{100}$$
> > 2. **Substitute values:**
> >    $$A_r = \frac{(20 \times 90.9) + (21 \times 0.3) + (22 \times 8.8)}{100}$$
> >    $$A_r = \frac{1818.0 + 6.3 + 193.6}{100} = \frac{2017.9}{100} = 20.179$$
> > 3. **Round to 2 decimal places:**
> >    $$A_r = 20.18\text{ (no units)}$$

> [!EXAMPLE]
> #### 📝 Worked Example 1a: Calculating Relative Atomic Mass of Magnesium
> **Question:** A sample of magnesium has the following isotopic composition:
> * magnesium-24: 78.6%
> * magnesium-25: 10.1%
> * magnesium-26: 11.3%
> Calculate the relative atomic mass of this magnesium sample. Give your answer to 3 significant figures
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Apply the weighted average formula:**
> >    $$A_r = \frac{\sum (\text{Isotopic Mass} \times \text{Percentage Abundance})}{100}$$
> > 2. **Substitute values:**
> >    $$A_r = \frac{(24 \times 78.6) + (25 \times 10.1) + (26 \times 11.3)}{100}$$
> >    $$A_r = \frac{1886.4 + 252.5 + 293.8}{100} = \frac{2432.7}{100} = 24.327$$
> > 3. **Round to 3 significant figures:**
> >    $$A_r = 24.3\text{ (no units)}$$

> [!EXAMPLE]
> #### 📝 Worked Example 1b: Calculating Isotopic Abundance from Relative Atomic Mass (Reverse Calculation)
> **Question:** A sample of copper contains two isotopes of relative isotopic mass 63.0 and 65.0. If the relative atomic mass of copper is 63.5, calculate the relative abundance of each isotope
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Set up the variables:**
> >    * Let the percentage abundance of $^{63.0}\text{Cu}$ be $x\%$
> >    * Therefore, the percentage abundance of $^{65.0}\text{Cu}$ must be $(100 - x)\%$
> > 2. **Set up the equation using the $A_r$ formula:**
> >    $$63.5 = \frac{63.0(x) + 65.0(100 - x)}{100}$$
> > 3. **Solve for $x$:**
> >    $$6350 = 63.0x + 6500 - 65.0x$$
> >    $$-150 = -2.0x \implies x = 75.0$$
> > 4. **Deduce both abundances:**
> >    * Abundance of $^{63.0}\text{Cu} = 75.0\%$
> >    * Abundance of $^{65.0}\text{Cu} = 100 - 75.0 = 25.0\%$

> [!EXAMPLE]
> #### 📝 Worked Example 2: Properties of Isotopes & Spectrometry Deflection
> **Question:** Explain why isotopes of an element have the same chemical properties but deflect differently in a mass spectrometer
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Chemical Properties (Outer Shells):**
> >    * Isotopes have the same number of protons and electrons, resulting in identical electronic configurations (they are isoelectronic)
> >    * Since chemical reactions depend entirely on the arrangement of outer-shell valence electrons, they exhibit identical chemical properties
> > 2. **Physical Deflection (m/z values):**
> >    * Isotopes have different numbers of neutrons, resulting in different isotopic masses
> >    * Because mass spectrometer deflection depends on the mass-to-charge ratio ($m/z$), the different masses (and thus different $m/z$ values) cause the isotopes to deflect differently in the magnetic field under the same conditions

> [!EXAMPLE]
> #### 📝 Worked Example 3: Subatomic Ion Deflection Paths
> **Question:** Four $\\text{X}$ ions ($^{54}\\text{X}^{2+}$, $^{56}\\text{X}^{2+}$, $^{54}\\text{X}^{+}$, $^{56}\\text{X}^{+}$) are present in a stream of gaseous ions inside a mass spectrometer. Which of these ions will follow paths 1–4 shown in the diagram?
> 
> ${svgToken(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 360" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
    <linearGradient id="magnetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e293b" />
      <stop offset="100%" stop-color="#334155" />
    </linearGradient>
    <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#1e293b" stroke-width="1" opacity="0.3"/>
    </pattern>
  </defs>
  
  <rect width="1000" height="360" fill="url(#bgGrad)" stroke="#1e293b" stroke-width="2" rx="8" />
  <rect width="1000" height="360" fill="url(#grid)" rx="8" />

  <rect x="250" y="60" width="180" height="240" fill="#1e293b" fill-opacity="0.2" stroke="#334155" stroke-width="1.5" stroke-dasharray="4 4" rx="10" />
  <text x="340" y="50" fill="#94a3b8" font-size="12" font-weight="600" text-anchor="middle" font-family="system-ui, sans-serif">MAGNETIC FIELD (B)</text>
  <text x="340" y="80" fill="#475569" font-size="10" text-anchor="middle" font-family="system-ui, sans-serif">Field Direction (into page ⊗)</text>

  <g stroke="#334155" stroke-width="1.5" fill="none">
    <circle cx="280" cy="110" r="6" /><line x1="276" y1="106" x2="284" y2="114" /><line x1="284" y1="106" x2="276" y2="114" />
    <circle cx="340" cy="110" r="6" /><line x1="336" y1="106" x2="344" y2="114" /><line x1="344" y1="106" x2="336" y2="114" />
    <circle cx="400" cy="110" r="6" /><line x1="396" y1="106" x2="404" y2="114" /><line x1="404" y1="106" x2="396" y2="114" />
    <circle cx="280" cy="170" r="6" /><line x1="276" y1="166" x2="284" y2="174" /><line x1="284" y1="166" x2="276" y2="174" />
    <circle cx="340" cy="170" r="6" /><line x1="336" y1="166" x2="344" y2="174" /><line x1="344" y1="166" x2="336" y2="174" />
    <circle cx="400" cy="170" r="6" /><line x1="396" y1="166" x2="404" y2="174" /><line x1="404" y1="166" x2="396" y2="174" />
    <circle cx="280" cy="230" r="6" /><line x1="276" y1="226" x2="284" y2="234" /><line x1="284" y1="226" x2="276" y2="234" />
    <circle cx="340" cy="230" r="6" /><line x1="336" y1="226" x2="344" y2="234" /><line x1="344" y1="226" x2="336" y2="234" />
    <circle cx="400" cy="230" r="6" /><line x1="396" y1="226" x2="404" y2="234" /><line x1="404" y1="226" x2="396" y2="234" />
  </g>

  <g fill="url(#magnetGrad)" stroke="#475569" stroke-width="1.5">
    <rect x="50" y="120" width="15" height="50" rx="2" />
    <rect x="50" y="190" width="15" height="50" rx="2" />
    <rect x="120" y="120" width="15" height="55" rx="2" />
    <rect x="120" y="185" width="15" height="55" rx="2" />
  </g>
  <text x="85" y="105" fill="#94a3b8" font-size="11" text-anchor="middle" font-family="system-ui, sans-serif">Slits Align Beam</text>

  <line x1="20" y1="170" x2="135" y2="170" stroke="#f1f5f9" stroke-width="2" stroke-dasharray="3 3" />
  <line x1="135" y1="170" x2="250" y2="170" stroke="#f1f5f9" stroke-width="2.5" />
  <polygon points="250,170 242,165 242,175" fill="#f1f5f9" />
  <text x="70" y="265" fill="#e2e8f0" font-size="12" font-weight="bold" font-family="system-ui, sans-serif">Stream of Ions</text>
  <text x="70" y="280" fill="#94a3b8" font-size="10" font-family="system-ui, sans-serif">(2+ and 1+ charges)</text>

  <path d="M 250 170 C 350 170, 500 170, 850 185" fill="none" stroke="#60a5fa" stroke-width="3" />
  <path d="M 250 170 C 350 170, 480 175, 820 220" fill="none" stroke="#34d399" stroke-width="3" />
  <path d="M 250 170 C 340 170, 430 190, 720 290" fill="none" stroke="#fbbf24" stroke-width="3" />
  <path d="M 250 170 C 330 170, 410 190, 680 310" fill="none" stroke="#f87171" stroke-width="3" />

  <circle cx="850" cy="185" r="5" fill="#60a5fa" />
  <text x="865" y="189" fill="#60a5fa" font-size="12" font-weight="bold" font-family="system-ui, sans-serif">Path 1</text>
  <circle cx="820" cy="220" r="5" fill="#34d399" />
  <text x="835" y="224" fill="#34d399" font-size="12" font-weight="bold" font-family="system-ui, sans-serif">Path 3</text>
  <circle cx="720" cy="290" r="5" fill="#fbbf24" />
  <text x="735" y="294" fill="#fbbf24" font-size="12" font-weight="bold" font-family="system-ui, sans-serif">Path 2</text>
  <circle cx="680" cy="310" r="5" fill="#f87171" />
  <text x="695" y="314" fill="#f87171" font-size="12" font-weight="bold" font-family="system-ui, sans-serif">Path 4</text>

  <rect x="680" y="25" width="280" height="120" fill="#0f172a" fill-opacity="0.7" stroke="#1e293b" stroke-width="1.5" rx="6" />
  <text x="820" y="45" fill="#f8fafc" font-size="12" font-weight="bold" text-anchor="middle" font-family="system-ui, sans-serif">Deflection vs. m/z Ratio</text>
  
  <text x="700" y="70" fill="#94a3b8" font-size="10" font-family="system-ui, sans-serif">Path 1: Least Deflection (m/z = 56)</text>
  <text x="700" y="88" fill="#94a3b8" font-size="10" font-family="system-ui, sans-serif">Path 3: Moderate Deflection (m/z = 54)</text>
  <text x="700" y="106" fill="#94a3b8" font-size="10" font-family="system-ui, sans-serif">Path 2: High Deflection (m/z = 28)</text>
  <text x="700" y="124" fill="#94a3b8" font-size="10" font-family="system-ui, sans-serif">Path 4: Most Deflection (m/z = 27)</text>
  
  <circle cx="692" cy="67" r="3" fill="#60a5fa" />
  <circle cx="692" cy="85" r="3" fill="#34d399" />
  <circle cx="692" cy="103" r="3" fill="#fbbf24" />
  <circle cx="692" cy="121" r="3" fill="#f87171" />
</svg>`)}
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate the mass-to-charge ratio ($m/z$) for each ion:**
> >    * $^{54}\\text{X}^{2+} \\implies m/z = 54 / 2 = 27$
> >    * $^{56}\\text{X}^{2+} \\implies m/z = 56 / 2 = 28$
> >    * $^{54}\\text{X}^{+} \\implies m/z = 54 / 1 = 54$
> >    * $^{56}\\text{X}^{+} \\implies m/z = 56 / 1 = 56$
> > 2. **Understand the deflection principle:**
> >    * The degree of deflection in a magnetic field is inversely proportional to $m/z$
> >    * Smaller $m/z$ values deflect MORE (bend more sharply downwards)
> >    * Larger $m/z$ values deflect LESS (follow a wider/flatter curvature)
> > 3. **Match ions to paths:**
> >    * **Path 4 (Most Deflection):** $^{54}\\text{X}^{2+}$ (smallest $m/z = 27$)
> >    * **Path 2 (Second Most):** $^{56}\\text{X}^{2+}$ ($m/z = 28$)
> >    * **Path 3 (Third Most):** $^{54}\\text{X}^{+}$ ($m/z = 54$)
> >    * **Path 1 (Least Deflection):** $^{56}\\text{X}^{+}$ (largest $m/z = 56$)

> [!EXAMPLE]
> #### 📝 Worked Example 4: Organic Fragmentation of Propanone
> **Question:** In the mass spectrum of propanone ($\\text{CH}_3\\text{COCH}_3$), major peaks are observed at $m/z = 58$, $43$, and $15$. Identify the species responsible for each of these peaks and write the equation for the formation of the fragment ion at $m/z = 43$ from the molecular ion
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the molecular ion peak (M):**
> >    * The peak at $m/z = 58$ corresponds to the relative molecular mass of propanone ($12 \\times 3 + 1 \\times 6 + 16 = 58$)
> >    * The species is the molecular ion: $[\\text{CH}_3\\text{COCH}_3]^+$
> > 2. **Identify the fragment peaks:**
> >    * $m/z = 15$ corresponds to the methyl group fragment: $[\\text{CH}_3]^+$
> >    * $m/z = 43$ corresponds to the remaining acylium ion fragment: $[\\text{CH}_3\\text{CO}]^+$ (since $58 - 15 = 43$)
> >    * **Note:** All detected species in a mass spectrometer must carry a positive charge
> > 3. **Write the fragmentation equation:**
> >    * Gaseous molecular ion breaks down to form a positive ion fragment and a neutral radical:
> >      $$[\\text{CH}_3\\text{COCH}_3]^+(\\text{g}) \\rightarrow [\\text{CH}_3\\text{CO}]^+(\\text{g}) + \\cdot\\text{CH}_3(\\text{g})$$

> [!EXAMPLE]
> #### 📝 Worked Example 5: Isotopic Peak Patterns of Bromine (Br₂)
> **Question:** Bromine has two naturally occurring isotopes: $^{79}\text{Br}$ (abundance $50.7\%$) and $^{81}\text{Br}$ (abundance $49.3\%$), which can be approximated as a $1:1$ ratio. Describe the expected molecular ion peaks in the mass spectrum of diatomic bromine gas ($\text{Br}_2$) and deduce their relative peak height ratio
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Deduce possible isotopic combinations for $\text{Br}_2$:**
> >    * Combination 1: $^{79}\text{Br} - ^{79}\text{Br} \implies m/z = 79 + 79 = 158$
> >    * Combination 2: $^{79}\text{Br} - ^{81}\text{Br}$ or $^{81}\text{Br} - ^{79}\text{Br} \implies m/z = 79 + 81 = 160$
> >    * Combination 3: $^{81}\text{Br} - ^{81}\text{Br} \implies m/z = 81 + 81 = 162$
> > 2. **Calculate the probability of each combination (using $1:1$ ratio):**
> >    * Probability of $^{158}\text{Br}_2^+ = \frac{1}{2} \times \frac{1}{2} = \frac{1}{4}$
> >    * Probability of $^{160}\text{Br}_2^+ = 2 \times \left(\frac{1}{2} \times \frac{1}{2}\right) = \frac{1}{2}$
> >    * Probability of $^{162}\text{Br}_2^+ = \frac{1}{2} \times \frac{1}{2} = \frac{1}{4}$
> > 3. **Deduce peak height ratio:**
> >    * Converting probabilities ($\frac{1}{4} : \frac{2}{4} : \frac{1}{4}$) gives a simplified ratio:
> >      $$\text{Ratio of peaks (158 : 160 : 162)} = 1:2:1$$

> [!EXAMPLE]
> #### 📝 Worked Example 6: Time-of-Flight (TOF) Mass Calculations
> **Question:** In a Time-of-Flight (TOF) mass spectrometer, all ions are accelerated to have the same kinetic energy ($KE$). An ion of $^{79}\text{Br}^+$ has a flight time of $2.73 \times 10^{-5}\text{ s}$ to travel along a drift tube of length $d$. Calculate the flight time, in seconds, of a $^{81}\text{Br}^+$ ion traveling through the same drift tube under the same conditions. Give your answer to 3 significant figures
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Deduce the relationship between flight time ($t$) and isotopic mass ($m$):**
> >    * Kinetic energy is constant for all accelerated ions: $KE = \frac{1}{2}mv^2$
> >    * Since velocity is distance over time ($v = \frac{d}{t}$), we can substitute and rearrange:
> >      $$KE = \frac{1}{2}m\left(\frac{d}{t}\right)^2 \implies t = d\sqrt{\frac{m}{2KE}}$$
> >    * Since drift tube length ($d$) and kinetic energy ($KE$) are constant, flight time is directly proportional to the square root of mass. Therefore the ratio of flight times equals the square root of the ratio of masses:
> >      $$\frac{t_1}{t_2} = \sqrt{\frac{m_1}{m_2}}$$
> > 
> > 2. **Rearrange the formula to solve for the flight time of the heavier $^{81}\text{Br}^+$ ion ($t_2$):**
> >    $$t_2 = t_1 \times \sqrt{\frac{m_2}{m_1}}$$
> > 
> > 3. **Substitute the values and calculate the final flight time:**
> >    * Let $t_1 = 2.73 \times 10^{-5}\text{ s}$, $m_1 = 79$ (mass of $^{79}\text{Br}^+$), and $m_2 = 81$ (mass of $^{81}\text{Br}^+$)
> >    $$t_2 = (2.73 \times 10^{-5}\text{ s}) \times \sqrt{\frac{81}{79}}$$
> >    $$t_2 = (2.73 \times 10^{-5}\text{ s}) \times 1.0126 = 2.76 \times 10^{-5}\text{ s}$$
         `,
    keyPoints: [
      'All ions in a TOF spectrometer are accelerated to have the same kinetic energy.',
      'Velocity is inversely proportional to the square root of isotopic mass; lighter ions reach the detector first.',
      'The abundance signal corresponds to the current generated as ions hit the detector.'
    ]
  },
  {
    id: 'electronic-configurations-20260106',
    title: 'Electronic Configurations & Periodic Trends',
    type: 'text',
    content: `
> [!NOTE]
> ### ⚛️ Principal Quantum Shells and Sublevels
> * **Quantum Theory & Shells:** Max Planck first presented the quantum theory in 1900. According to this theory, electrons can only exist in certain well-defined energy levels called **quantum shells** (represented by the principal quantum number $n = 1, 2, 3, 4$).
> * **Quantum Shell capacity:** Each main shell can hold a maximum of $2n^2$ electrons. All electrons in a quantum shell have similar, but not identical, energies.
> * **Sublevels:** Each main quantum shell (except the first) is further divided into sublevels of slightly different energies (designated as $s, p, d, f$ subshells).
> * **Valence Electrons:** The outermost electrons that determine the chemical properties of an element.
> 
> > [!IMPORTANT]
> > ### 🧮 Orbitals and Filling Sequence
> > * **Orbital:** A region within an atom where there is a **90% probability** of finding an electron. Each orbital can hold up to 2 electrons with opposite spins.
> > * **s orbital:** One spherical orbital per shell, present in all shells (1s, 2s, etc. representing regions of 90% probability).
> > * **p orbitals:** Three dumbbell-shaped orbitals ($p_x, p_y, p_z$) orientated along perpendicular axes, present from $n \ge 2$.

${svgToken(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 360" width="100%" height="100%">
  <defs>
    <linearGradient id="orbBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
    <linearGradient id="orbSGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8" />
      <stop offset="100%" stop-color="#4f46e5" />
    </linearGradient>
    <linearGradient id="orbPPos" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" />
      <stop offset="100%" stop-color="#059669" />
    </linearGradient>
    <linearGradient id="orbPNeg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f87171" />
      <stop offset="100%" stop-color="#dc2626" />
    </linearGradient>
    <pattern id="orbGrid" width="30" height="30" patternUnits="userSpaceOnUse">
      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#1e293b" stroke-width="1" opacity="0.3"/>
    </pattern>
  </defs>

  <rect width="1000" height="360" fill="url(#orbBg)" stroke="#1e293b" stroke-width="2" rx="8" />
  <rect width="1000" height="360" fill="url(#orbGrid)" rx="8" />

  <text x="500" y="30" fill="#c7d2fe" font-size="14" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">Shapes and Spatial Orientation of s and p Orbitals</text>

  <!-- 1. s ORBITAL -->
  <g>
    <line x1="200" y1="90" x2="200" y2="270" stroke="#475569" stroke-width="1.5" opacity="0.5" stroke-dasharray="2 2" />
    <line x1="100" y1="180" x2="300" y2="180" stroke="#475569" stroke-width="1.5" opacity="0.5" stroke-dasharray="2 2" />
    <line x1="130" y1="250" x2="270" y2="110" stroke="#475569" stroke-width="1.5" opacity="0.5" stroke-dasharray="2 2" />
    <text x="200" y="82" fill="#64748b" font-size="10" font-family="system-ui, sans-serif" text-anchor="middle">z</text>
    <text x="308" y="184" fill="#64748b" font-size="10" font-family="system-ui, sans-serif">y</text>
    <text x="276" y="108" fill="#64748b" font-size="10" font-family="system-ui, sans-serif">x</text>
    <circle cx="200" cy="180" r="55" fill="url(#orbSGrad)" opacity="0.85" />
    <text x="200" y="295" fill="#c7d2fe" font-size="13" font-weight="700" font-family="system-ui, sans-serif" text-anchor="middle">s Orbital</text>
    <text x="200" y="315" fill="#94a3b8" font-size="11" font-family="system-ui, sans-serif" text-anchor="middle">Spherical &amp; Non-directional</text>
  </g>

  <!-- 2. px ORBITAL -->
  <g>
    <line x1="450" y1="90" x2="450" y2="270" stroke="#475569" stroke-width="1.5" opacity="0.5" stroke-dasharray="2 2" />
    <line x1="350" y1="180" x2="550" y2="180" stroke="#475569" stroke-width="1.5" opacity="0.5" stroke-dasharray="2 2" />
    <line x1="380" y1="250" x2="520" y2="110" stroke="#475569" stroke-width="1.5" opacity="0.5" stroke-dasharray="2 2" />
    <text x="450" y="82" fill="#64748b" font-size="10" font-family="system-ui, sans-serif" text-anchor="middle">z</text>
    <text x="558" y="184" fill="#64748b" font-size="10" font-family="system-ui, sans-serif">y</text>
    <text x="526" y="108" fill="#64748b" font-size="10" font-family="system-ui, sans-serif">x</text>
    <g transform="rotate(-45, 450, 180)">
      <ellipse cx="415" cy="180" rx="38" ry="22" fill="url(#orbPPos)" opacity="0.85" />
      <ellipse cx="485" cy="180" rx="38" ry="22" fill="url(#orbPNeg)" opacity="0.85" />
    </g>
    <text x="450" y="295" fill="#c7d2fe" font-size="13" font-weight="700" font-family="system-ui, sans-serif" text-anchor="middle">p<tspan dy="3" font-size="9">x</tspan> Orbital</text>
    <text x="450" y="315" fill="#94a3b8" font-size="11" font-family="system-ui, sans-serif" text-anchor="middle">Lobe alignment along x-axis</text>
  </g>

  <!-- 3. py ORBITAL -->
  <g>
    <line x1="700" y1="90" x2="700" y2="270" stroke="#475569" stroke-width="1.5" opacity="0.5" stroke-dasharray="2 2" />
    <line x1="600" y1="180" x2="800" y2="180" stroke="#475569" stroke-width="1.5" opacity="0.5" stroke-dasharray="2 2" />
    <line x1="630" y1="250" x2="770" y2="110" stroke="#475569" stroke-width="1.5" opacity="0.5" stroke-dasharray="2 2" />
    <text x="700" y="82" fill="#64748b" font-size="10" font-family="system-ui, sans-serif" text-anchor="middle">z</text>
    <text x="808" y="184" fill="#64748b" font-size="10" font-family="system-ui, sans-serif">y</text>
    <text x="776" y="108" fill="#64748b" font-size="10" font-family="system-ui, sans-serif">x</text>
    <ellipse cx="660" cy="180" rx="38" ry="22" fill="url(#orbPPos)" opacity="0.85" />
    <ellipse cx="740" cy="180" rx="38" ry="22" fill="url(#orbPNeg)" opacity="0.85" />
    <text x="700" y="295" fill="#c7d2fe" font-size="13" font-weight="700" font-family="system-ui, sans-serif" text-anchor="middle">p<tspan dy="3" font-size="9">y</tspan> Orbital</text>
    <text x="700" y="315" fill="#94a3b8" font-size="11" font-family="system-ui, sans-serif" text-anchor="middle">Lobe alignment along y-axis</text>
  </g>

  <!-- 4. pz ORBITAL -->
  <g>
    <line x1="900" y1="90" x2="900" y2="270" stroke="#475569" stroke-width="1.5" opacity="0.5" stroke-dasharray="2 2" />
    <line x1="800" y1="180" x2="1000" y2="180" stroke="#475569" stroke-width="1.5" opacity="0.5" stroke-dasharray="2 2" />
    <line x1="830" y1="250" x2="970" y2="110" stroke="#475569" stroke-width="1.5" opacity="0.5" stroke-dasharray="2 2" />
    <text x="900" y="82" fill="#64748b" font-size="10" font-family="system-ui, sans-serif" text-anchor="middle">z</text>
    <text x="1008" y="184" fill="#64748b" font-size="10" font-family="system-ui, sans-serif">y</text>
    <text x="976" y="108" fill="#64748b" font-size="10" font-family="system-ui, sans-serif">x</text>
    <ellipse cx="900" cy="140" rx="22" ry="38" fill="url(#orbPPos)" opacity="0.85" />
    <ellipse cx="900" cy="220" rx="22" ry="38" fill="url(#orbPNeg)" opacity="0.85" />
    <text x="900" y="295" fill="#c7d2fe" font-size="13" font-weight="700" font-family="system-ui, sans-serif" text-anchor="middle">p<tspan dy="3" font-size="9">z</tspan> Orbital</text>
    <text x="900" y="315" fill="#94a3b8" font-size="11" font-family="system-ui, sans-serif" text-anchor="middle">Lobe alignment along z-axis</text>
  </g>
</svg>`)}

> [!NOTE]
> ### 🔋 Aufbau Energy Sequence & Electronic Structure Evidence
> * **Energy Sequence:** Electrons fill orbitals in order of increasing energy:
>   $$1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^{10} 4p^6 5s^2 4d^{10} 5p^6 6s^2 4f^{14} 5d^{10} 6p^6 7s^2 5f^{14} 6d^{10} 7p^6 8s^2$$
> * **Model Development:** The electronic structure model has been developed from:
>    * Successive ionization energies of an element, which provide evidence for the existence of quantum shells and the group to which the element belongs
>    * First ionization energy of successive elements, which provides evidence for electron sub-shells


> [!TIP]
> ### 🧪 Rules for Filling Orbitals
> * **Aufbau Principle:** Electrons fill orbitals of lowest energy first (e.g., $1s$ before $2s$, $2s$ before $2p$)
> * **Pauli Exclusion Principle:** An atomic orbital can hold a maximum of two electrons, and these two electrons must have opposite spins
> * **Hund's Rule:** For degenerate orbitals (orbitals of the same energy, like the three $2p$ orbitals), electrons will fill them singly with parallel spins before pairing up to minimize electron-electron repulsion

> [!WARNING]
> ### ⚠️ Energies of 3d and 4s Orbitals (Scandium to Zinc)
> * **Krypton Limit:** You must be able to predict electronic configurations for atoms and ions of elements from hydrogen up to krypton ($Z = 36$) inclusive
> * **The $3d$ and $4s$ Energy Crossover:** 
>   * For potassium and calcium, the $4s$ subshell is lower in energy than the $3d$ subshell. Thus, K is $[Ar] 4s^1$ and Ca is $[Ar] 4s^2$
>   * **For all elements after calcium (Scandium to Zinc):** The energy of the $3d$ orbitals is actually **less** than that of the $4s$ orbitals. 
>   * **The Compactness Repulsion (Eric Scerri Theory):** If $3d$ is lower in energy, why does Scandium have the configuration $[Ar] 3d^1 4s^2$ instead of $[Ar] 3d^3$? Because $3d$ orbitals are much more compact than $4s$ orbitals. Any electrons entering $3d$ experience greater mutual electrostatic repulsion than they would in the larger $4s$ orbital. Pushing them to the outer $4s$ orbital reduces overall repulsion
>   * **Transition Metal Ionisation:** When transition metals ionise, they always lose the $4s$ electrons first. This is because, once the $3d$ sublevel is occupied, the $4s$ electrons are at a higher energy level (and are physically further out), making them the easiest to remove
> * **Anomalous Atoms (Chromium and Copper):**
>   * **Chromium ($Z = 24$):** expected $[Ar] 4s^2 3d^4$ → actual configuration is $[Ar] 4s^1 3d^5$ (six unpaired electrons, minimizing repulsion)
>   * **Copper ($Z = 29$):** expected $[Ar] 4s^2 3d^9$ → actual configuration is $[Ar] 4s^1 3d^{10}$ (stable fully filled $3d$ sublevel)

> [!BOX]
> ### 📋 Periodic Table Blocks and Structure
> * **Blocks:** The Periodic Table is divided into $s$, $p$, $d$, and $f$ blocks depending on which subshell contains the outer valence electrons
> * **Period Number:** Indicates the number of quantum energy shells containing electrons
> * **Group Number:** Indicates the number of electrons in the outer shell (valence electrons)
> * **Shielding Effect:** The repulsion between filled inner (core) shells and the furthest (outer) valence electrons, which reduces the nuclear attraction felt by the outer electrons

> [!NOTE]
> ### 📏 Factors Determining Atomic Radius
> Three key factors determine atomic radius (in order of priority):
> 
> 1. **Outer Shell Number (Quantum Shells):** As the number of quantum shells increases, the shielding shells increase, which increases the atomic radius:
>    * e.g. $^{23}\\_{ 11}\\text{Na}$ (2,8,1) > $^{7}\\_{ 3}\\text{Li}$ (2,1)
> 2. **Nuclear Charge (Proton Number):** For species with the same shielding, as the nuclear charge increases, the electrostatic attraction between the nucleus and the valence electrons becomes stronger, decreasing the atomic radius:
>    * e.g. $^{23}\\_{ 11}\\text{Na} > {}^{24}\\_{ 12}\\text{Mg}$
> 3. **Electron Number (Repulsion):** For species with the same nuclear charge (isotopes or ions), as the number of electrons increases, the electron-electron repulsion increases, which increases the volume (radius):
>    * e.g. $^{35.5}\\_{ 17}\\text{Cl}^- > {}^{35.5}\\_{ 17}\\text{Cl}$

> [!IMPORTANT]
> ### ⚖️ Definitions and Radius Trends
> * **Covalent Radius:** Half the distance between the nuclei of two covalently bonded atoms in a diatomic molecule.
> * **Van der Waals Radius:** Half the distance between the nuclei of two non-bonded touching atoms (in a solid lattice). The van der Waals radius is **always larger** than the covalent radius for the same element because bonded atoms are pulled much closer together.
> * **Metallic Radius:** Half the distance between the nuclei of two adjacent metal atoms in a giant metallic lattice.
> * **Noble Gas Exclusions:** Neon and Argon do not form covalent bonds under standard conditions, so only their van der Waals radius can be measured. Comparing noble gas radii directly to covalent radii of other elements is not a like-for-like comparison.
> * **Periodic Trend (Across a Period):** Atomic (covalent) radius decreases across a period because the nuclear charge increases (more protons) while electron shielding remains constant.
> * **Group Trend (Down a Group):** Atomic radius increases down a group because the number of quantum shells increases.

> [!BOX]
> ### 📋 Ionic Radius Trends
> * **Positive Ions (Cations):** Cations are smaller than their parent atoms because they have fewer shells or have the same number of protons but fewer shielding electrons:
>   * e.g. $^{23}\\_{ 11}\\text{Na}$ (2,8,1) > $^{23}\\_{ 11}\\text{Na}^+$ (2,8)
> * **Cations with Higher Charge:** A cation with a higher charge is smaller than one with a lower charge because it has the same proton number, same shielding, but less electron repulsion:
>   * e.g. $^{56}\\_{ 26}\\text{Fe}^{2+} > {}^{56}\\_{ 26}\\text{Fe}^{3+}$
> * **Negative Ions (Anions):** Anions are larger than their parent atoms because they have the same proton number but increased electron repulsion:
>   * e.g. $^{35.5}\\_{ 17}\\text{Cl}^- > {}^{35.5}\\_{ 17}\\text{Cl}$
> * **Isoelectronic Ions:** Ions that have the same number of electrons (same electronic configuration):
>   * e.g. $\\text{Na}^+$, $\\text{F}^-$, $\\text{Mg}^{2+}$, $\\text{O}^{2-}$
>   * For these ions, radius decreases as nuclear charge (proton number) increases: $\\text{O}^{2-} > \\text{F}^- > \\text{Na}^+ > \\text{Mg}^{2+}$
> 

> [!EXAMPLE]
> #### 📝 Worked Example 1: Electronic Configuration of Chromium
> **Question:** Write the full electronic configuration of a Chromium atom ($^{52}\\_{ 24}\\text{Cr}$) and explain why it is anomalous
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Determine the number of electrons:**
> >    * Chromium has an atomic number of $24$, meaning a neutral atom has $24$ electrons
> > 2. **Apply the Aufbau principle and identify the anomaly:**
> >    * Following regular filling, the expected configuration is $1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^4$
> >    * However, having a half-filled $d$-subshell ($3d^5$) is more stable than a partially filled $3d^4$ subshell
> > 3. **Write the actual configuration:**
> >    * One electron from $4s$ is promoted to $3d$ to achieve two half-filled subshells:
> >      * Cr = $1s^2 2s^2 2p^6 3s^2 3p^6 4s^1 3d^5$

> [!EXAMPLE]
> #### 📝 Worked Example 2: Comparing Ionic Radii of Isoelectronic Species
> **Question:** Arrange the following isoelectronic species in order of decreasing radius: $\\text{O}^{2-}$, $\\text{F}^-$, $\\text{Na}^+$, $\\text{Mg}^{2+}$ and justify your arrangement
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Count the number of electrons and protons for each ion:**
> >    * All four ions have $10$ electrons (isoelectronic)
> >    * $\\text{O}^{2-}$ has $8$ protons
> >    * $\\text{F}^-$ has $9$ protons
> >    * $\\text{Na}^+$ has $11$ protons
> >    * $\\text{Mg}^{2+}$ has $12$ protons
> > 2. **Analyze the nuclear charge effect:**
> >    * As proton number increases, nuclear charge increases while shielding remains the same (all have $10$ core/valence electrons in $1s^2 2s^2 2p^6$)
> >    * A stronger nuclear charge pulls the electrons closer, decreasing the radius
> > 3. **Order by decreasing radius (largest to smallest):**
> >    * $\\text{O}^{2-} > \\text{F}^- > \\text{Na}^+ > \\text{Mg}^{2+}$

> [!EXAMPLE]
> #### 📝 Worked Example 3: Unpaired Electrons in Transition Metal Ions
> **Question:** Identify which of the following transition metal ions contains the greatest number of unpaired electrons in its ground state: $\\text{Cr}^{3+}$, $\\text{Fe}^{2+}$, $\\text{Fe}^{3+}$, or $\\text{Ni}^{2+}$ (Atomic numbers: $\\text{Cr} = 24$, $\\text{Fe} = 26$, $\\text{Ni} = 28$)
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Write the electronic configuration of the neutral atoms:**
> >    * $\\text{Cr} = [\\text{Ar}] 4s^1 3d^5$ (anomalous stability)
> >    * $\\text{Fe} = [\\text{Ar}] 4s^2 3d^6$
> >    * $\\text{Ni} = [\\text{Ar}] 4s^2 3d^8$
> > 2. **Remove electrons to form the cations (losing $4s$ electrons first):**
> >    * $\\text{Cr}^{3+}$: Lose one $4s$ and two $3d$ electrons $\\implies [\\text{Ar}] 3d^3$
> >    * $\\text{Fe}^{2+}$: Lose two $4s$ electrons $\\implies [\\text{Ar}] 3d^6$
> >    * $\\text{Fe}^{3+}$: Lose two $4s$ and one $3d$ electron $\\implies [\\text{Ar}] 3d^5$
> >    * $\\text{Ni}^{2+}$: Lose two $4s$ electrons $\\implies [\\text{Ar}] 3d^8$
> > 3. **Apply Hund's rule to find the number of unpaired electrons in the $3d$ subshell:**
> >    * $3d^3$: 3 unpaired electrons (singly occupied orbitals)
> >    * $3d^6$: 4 unpaired electrons (1 pair, 4 singly occupied orbitals)
> >    * $3d^5$: 5 unpaired electrons (5 singly occupied orbitals)
> >    * $3d^8$: 2 unpaired electrons (3 pairs, 2 singly occupied orbitals)
> >    * Therefore, the ion with the greatest number of unpaired electrons is $\\text{Fe}^{3+}$

> [!EXAMPLE]
> #### 📝 Worked Example 4: Electronic Configuration of Copper(II) Ion
> **Question:** Deduce the correct electronic configuration of the $\\text{Cu}^{2+}$ ion in its ground state (Atomic number: $\\text{Cu} = 29$)
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Write the electronic configuration of a neutral Copper atom:**
> >    * A neutral Copper atom has 29 electrons. Due to the extra stability of a fully-filled $3d$ subshell, its configuration is:
> >      $$\\text{Cu} = 1s^2 2s^2 2p^6 3s^2 3p^6 4s^1 3d^{10}$$
> > 2. **Apply the rule for transition metal ion formation:**
> >    * When transition metals form ions, electrons are always lost from the $4s$ subshell before the $3d$ subshell
> > 3. **Remove two electrons to form the $2+$ ion:**
> >    * We remove the single electron from the $4s$ orbital and one electron from the $3d$ orbitals:
> >      $$\\text{Cu}^{2+} = 1s^2 2s^2 2p^6 3s^2 3p^6 3d^9$$

> [!EXAMPLE]
> #### 📝 Worked Example 5: Occupied Orbitals in a Sulfur Atom
> **Question:** Determine how many orbitals contain at least one electron in a ground-state Sulfur atom, $\\text{S}$ (Atomic number $Z = 16$)
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Write the full electronic configuration of Sulfur:**
> >    * Sulfur has 16 electrons:
> >      $$\\text{S} = 1s^2 2s^2 2p^6 3s^2 3p^4$$
> > 2. **Break down the orbitals in each subshell:**
> >    * The $1s$ subshell has 1 orbital containing 2 electrons
> >    * The $2s$ subshell has 1 orbital containing 2 electrons
> >    * The $2p$ subshell has 3 orbitals containing 6 electrons
> >    * The $3s$ subshell has 1 orbital containing 2 electrons
> > 3. **Apply Hund's rule to the $3p$ subshell:**
> >    * The $3p$ subshell contains 4 electrons distributed across 3 orbitals
> >    * According to Hund's rule, electrons fill degenerate orbitals singly first before pairing:
> >      * 1 orbital contains a pair of electrons
> >      * 2 orbitals each contain a single unpaired electron
> >      * Thus, all 3 orbitals in the $3p$ subshell contain at least one electron
> > 4. **Calculate the total number of occupied orbitals:**
> >    * Total occupied orbitals = $1 \\text{ (from } 1s) + 1 \\text{ (from } 2s) + 3 \\text{ (from } 2p) + 1 \\text{ (from } 3s) + 3 \\text{ (from } 3p)$
> >    * This gives a total of 9 occupied orbitals

> [!EXAMPLE]
> #### 📝 Worked Example 6: Explaining the Trend in Atomic Radius Across Period 3
> **Question:** Describe and explain the trend in atomic radius for the elements across Period 3 from Sodium (Na) to Argon (Ar)
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **State the general trend across the period:**
> >    * Atomic radius decreases across Period 3 from Sodium to Argon
> > 
> > 2. **Explain the effect of nuclear charge:**
> >    * Across Period 3, the number of protons in the nucleus increases (nuclear charge increases from $+11$ in Na to $+18$ in Ar)
> > 
> > 3. **Explain the shielding effect:**
> >    * The outer-shell valence electrons are added to the same principal quantum shell ($n=3$), which means the shielding effect remains approximately constant across the period
> > 
> > 4. **Combine these factors to explain the final attraction:**
> >    * Because the nuclear charge increases while the shielding remains constant, the electrostatic attraction between the positive nucleus and the negative outer-shell electrons becomes stronger
> >    * This stronger pull draws the outer electrons closer to the nucleus, resulting in a smaller atomic radius
 
> [!EXAMPLE]
> #### 📝 Worked Example 7: Deducing Electronic Configuration from Period and Group
> **Question:** An element is located in Period 4 and Group 15 of the Periodic Table (Arsenic, As). Write its full electronic configuration, and deduce its outer (valence) electronic configuration, explaining how it relates to Carbon's outer configuration ($2s^2 2p^2$).
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the group and period information:**
> >    * Arsenic (As, $Z = 33$) is in Period 4, which means its valence electrons occupy the $n = 4$ principal quantum shell.
> >    * It is in Group 15 (Group 5), meaning it has $5$ outer valence electrons.
> > 
> > 2. **Write the full configuration:**
> >    * As = $1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^{10} 4p^3$
> > 
> > 3. **Identify the outer (valence) configuration:**
> >    * The outermost shell is $n=4$. The $3d^{10}$ subshell is filled and belongs to the inner third quantum shell, so it does not count as part of the outermost valence configuration.
> >    * Therefore, the outer configuration is **$4s^2 4p^3$**.
> > 
> > 4. **Compare to Carbon's outer configuration ($2s^2 2p^2$):**
> >    * Carbon is in Period 2, Group 14 (Group 4) with $4$ valence electrons: $2s^2 2p^2$.
> >    * Arsenic is in Period 4 (so principal quantum number is $4$ instead of $2$) and Group 15 (Group 5, so it has one additional $p$ electron). Thus, its outer configuration is $4s^2 4p^3$.

> [!EXAMPLE]
> #### 📝 Worked Example 8: Explaining Hund's Rule and Pauli Exclusion in Box Notation
> **Question:** Refer to the box notation diagram representing a ground-state Carbon atom ($1s^2 2s^2 2p_x^1 2p_y^1$):
> (a) State the physical meaning of the arrows ↑ and ↓ inside a box
> (b) Explain the significance of the letters $x, y, z$ in the $2p$ subshell boxes
> (c) Explain why the two $2p$ electrons in Carbon occupy separate orbitals rather than pairing up in the $2p_x$ orbital
> (d) Deduce the electronic configurations (using box/subshell notation) for Ground State Phosphorus ($Z=15$) and Chromium ($Z=24$)
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Explain the arrow notation (a):**
> >    * The arrows represent electrons, and their opposite directions (↑ and ↓) represent opposite electron spins, as required by the Pauli Exclusion Principle to minimize magnetic repulsion
> > 
> > 2. **Explain the letters (b):**
> >    * The letters $x, y, z$ represent 3D Cartesian coordinates. They indicate that the three degenerate $2p$ orbitals are oriented at mutual right angles (perpendicularly in space)
> > 
> > 3. **Explain Hund's Rule application (c):**
> >    * Degenerate orbitals (like $2p$) are filled singly before pairing begins (Hund's Rule). 
> >    * By occupying separate orbitals ($2p_x$ and $2p_y$), the electrons are in different regions of space, which minimizes electron-electron repulsion and results in a lower, more stable ground state energy
> > 
> > 4. **Deduce configurations (d):**
> >    * **Phosphorus ($Z=15$):** $1s^2 2s^2 2p^6 3s^2 3p_x^1 3p_y^1 3p_z^1$ (or condensed $[Ne] 3s^2 3p^3$)
> >    * **Chromium ($Z=24$):** $[Ar] 3d^5 4s^1$ (or $1s^2 2s^2 2p^6 3s^2 3p^6 3d^5 4s^1$) with all six valence electrons in half-filled subshells to reduce mutual repulsion
`,
    keyPoints: [
      'An orbital is a probability density map holding at most two paired electrons.',
      '4s is filled before 3d because it is at a lower energy level in neutral atoms.',
      '4s is lost before 3d when transition metal cations are formed.'
    ]
  },
  {
    id: 'ionization-energies-20260106',
    title: 'Ionization Energies & Periodic Trends',
    type: 'text',
    content: `
> [!NOTE]
> ### ⚡ Evidence for Electronic Structure
> The modern model of the atom and its electronic structure was developed based on key experimental evidence:
> 
> 1. **Successive Ionization Energies:** The energy patterns when removing electrons one by one from an element provide direct evidence for the existence of quantum shells (energy levels) and the specific group to which the element belongs
> 2. **First Ionization Energies of Successive Elements:** The trends across periods and groups provide direct evidence for the existence of electron sub-shells ($s$, $p$, $d$, and $f$ orbitals)

> [!IMPORTANT]
> ### 🧮 What is Ionization Energy?
> * **Ionization Energy ($I.E.$):** The amount of energy required (an endothermic process, $\Delta H > 0$) to completely remove an electron from each gaseous atom or ion in one mole to an **infinite distance** from the nucleus (so that it experiences zero attractive force).
> * **Energy Equation:** $I.E. = \text{energy of electron when removed} - \text{energy of electron in its orbital}$
> * **Shielding (or Screening):** The electrostatic repulsion that inner-shell electrons exert on outer-shell electrons, reducing the effective nuclear charge felt by those outer electrons.
> 
> * **First Ionization Energy ($I_1$):**
>   $$\text{A(g)} \rightarrow \text{A}^+\text{(g)} + e^-$$
> * **Second Ionization Energy ($I_2$):**
>   $$\text{A}^+\text{(g)} \rightarrow \text{A}^{2+}\text{(g)} + e^-$$
> * **Third Ionization Energy ($I_3$):**
>   $$\text{A}^{2+}\text{(g)} \rightarrow \text{A}^{3+}\text{(g)} + e^-$$

> [!TIP]
> ### 🧪 Factors Determining Electron Energy
> Three key factors determine the magnitude of the ionization energy:
> 
> 1. **The orbital in which the electron exists:** Electrons in higher energy shells (e.g. $2s$ vs $1s$) are further from the nucleus, requiring less energy to be removed.
> 2. **The nuclear charge (proton number):** A greater positive charge in the nucleus exerts a stronger attractive force, pulling electrons closer and raising the ionization energy.
> 3. **The repulsion (shielding/screening) experienced by the electron:** More shielding shells reduce the effective nuclear charge, making the outermost electron easier to remove.

> [!NOTE]
> ### 📈 Successive Ionization Energy Patterns
> * **Gradual/Steady Rise:** Successive ionization energies of an element always increase gradually because as each electron is removed, the remaining electrons experience less electron-electron repulsion and are pulled closer by the constant nuclear charge.
> * **Quantum Shell Jumps:** A massive, sharp jump in ionization energy occurs when an electron is removed from a lower principal quantum shell ($n-1$), which is closer to the nucleus and experiences far less shielding.
> * **Logarithmic Scale:** Because successive ionization energies span an extremely large range of values, they are managed and plotted using a logarithmic scale (e.g. $\log_{10} I.E.$ against the order of electron removed).
> * **Group 3 and 4 Anomalies Down Groups:**
>   * **Group 4 anomaly:** Lead (Pb) has a first ionization energy that is **higher** than that of Tin (Sn) directly above it, due to poor shielding by $d$ and $f$ electrons.
>   * **Group 3 anomaly:** There is **no general trend** in first ionization energy in Group 3 (from Boron to Thallium) due to varying orbital configurations and core structures.

> [!BOX]
> ### 📋 Electronegativity
> * **Definition:** The relative ability of an atom in a covalent bond to attract the shared pair of electrons towards itself
> * **Periodic Trends:** Electronegativity increases across a period (due to increasing nuclear charge and decreasing atomic size) and increases going up a group (due to less shielding and smaller atomic size)
> * **Highest Electronegativity Order:** $\text{F} > \text{O} > \text{Cl} > \text{N} > \text{Br} > \text{I}$
> [!NOTE]
> ### 📈 Periodic Trends in First Ionization Energy
> 1. **Down a Group (Decreases):**
>    * The atomic radius increases as the number of quantum shells increases
>    * Shielding from inner shells increases significantly
>    * The outer electron is further from the nucleus, weakening the electrostatic attraction forces and making it easier to remove
> 2. **Across a Period (Increases):**
>    * The nuclear charge increases (more protons in the nucleus)
>    * The atomic radius decreases (electrons are pulled closer)
>    * Shielding remains relatively constant because electrons are added to the same outer quantum shell
>    * Consequently, the electrostatic attraction between the nucleus and outer electrons increases, requiring more energy to remove an electron

> [!WARNING]
> ### ⚠️ Key Anomalies in First Ionization Energy
> While first ionization energy generally increases across a period, there are two distinct dips (anomalies) that provide evidence for sub-shells and orbital filling:
> 
> 1. **Group 2 vs Group 3 Dip (e.g. Be vs B, and Mg vs Al):**
>    * **Boron ($1s^2 2s^2 2p^1$)** has a lower first ionization energy than **Beryllium ($1s^2 2s^2$)**.
>    * **Reason:** The outer electron of Boron is in a $2p$ sub-shell, which is higher in energy and experiences additional shielding from the filled $2s^2$ sub-shell, making it easier to remove than Beryllium's $2s$ electron.
>    * **Debunking the "Full-Subshell Stability" Myth:** Do not suggest that Boron has a lower ionization energy because losing an electron gives it a "stable full $2s$ orbital". Removing an electron is always endothermic, so the resulting boron ion ($\text{B}^+$) is energetically **less stable** than the neutral boron atom.
> 
> 2. **Group 5 vs Group 6 Dip (e.g. N vs O, and P vs S):**
>    * **Oxygen ($1s^2 2s^2 2p^4$)** has a lower first ionization energy than **Nitrogen ($1s^2 2s^2 2p^3$)**.
>    * **Reason:** In Oxygen, two electrons are paired in the same $2p_x$ orbital. This generates **spin-pair repulsion**, making it easier to remove one of the paired electrons.
>    * **Debunking the "Half-Full Stability" and "Distance" Myths:** 
>      * There is **no special stability** associated with a half-full $2p$ subshell; the oxygen ion ($\text{O}^+$) is still energetically **less stable** than the neutral oxygen atom.
>      * Do not suggest that the outer electron in Oxygen is further from the nucleus than in Nitrogen. In fact, Oxygen has a higher nuclear charge and a **smaller atomic radius** than Nitrogen, so the electron is actually closer; it is purely spin-pair repulsion that lowers its ionization energy.
> [!IMPORTANT]
> ### 🧱 Physical Structure of Elements and Compounds
> The structure of elements and compounds determines their physical properties:
> 
> #### 1. Structure of Elements (Across Period 2 & 3):
> * **Giant Metallic Lattice:** Metals (Group I to III, e.g. $\\\\text{Li}$, $\\\\text{Be}$, $\\\\text{Na}$, $\\\\text{Mg}$, $\\\\text{Al}$) form giant structures held by metallic bonding (delocalized electrons)
> * **Giant Covalent Lattice:** Carbon (diamond/graphite), Silicon, and Boron (which forms a giant covalent lattice) form giant covalent structures with strong, directional covalent bonds throughout the lattice
> * **Simple Covalent Molecules:** Non-metals (Group V to VII, e.g. $\\\\text{P}_4$, $\\\\text{S}_8$, $\\\\text{Cl}_2$, $\\\\text{O}_2$, $\\\\text{N}_2$, $\\\\text{F}_2$) exist as individual molecules held together by weak intermolecular London forces
> * **Monoatomic Elements:** Noble gases (Group VIII/0, e.g. $\\\\text{He}$, $\\\\text{Ne}$, $\\\\text{Ar}$) exist as single, unbonded atoms held by extremely weak London forces
> 
> #### 2. Structure of Compounds:
> * **Ionic Bonding (Metal + Non-metal):** Formed when metals lose electrons and non-metals gain electrons to achieve stable octets (except Boron and Beryllium compounds, which tend to be covalent due to high charge density)
> * **Covalent Bonding (Non-metal + Non-metal/Semi-metal):** Formed by the sharing of valence electron pairs

> [!TIP]
> ### 🌡️ Melting and Boiling Point Trends
> Melting and boiling points depend on the type of structure and strength of bonding forces:
> 
> 1. **Across a Period (Period 2 & 3):**
>    * **Group I to III (Metals):** MP and BP increase because the number of delocalized electrons per atom increases and the ionic charge increases, resulting in stronger metallic bonding attraction
>    * **Group IV (C or Si):** Peaks dramatically (maximum MP/BP) because they form giant covalent lattices. Breaking the strong, extensive covalent bonds requires massive thermal energy
>    * **Group V to VIII (Non-metals & Noble gases):** MP and BP drop sharply because they have simple molecular (or monoatomic) structures. Melting only requires overcoming weak London forces, which need very little energy. Within simple molecules, the MP/BP depends on size: $\\\\text{S}_8 > \\\\text{P}_4 > \\\\text{Cl}_2 > \\\\text{Ar}$
> 2. **Down Non-metallic Groups (Increases):**
>    * The total number of electrons in the molecules increases, which increases the strength of temporary dipoles and thus the strength of London forces between molecules
> 3. **Down Metallic Groups (Decreases):**
>    * The atomic radius increases, placing the delocalized valence electrons further away from the positive metal nuclei, which weakens the metallic bond
> [!EXAMPLE]
> #### 📝 Worked Example 1: Interpreting Successive Ionization Energies
> **Question:** The successive ionization energies (in $\\\\text{kJ mol}^{-1}$) of a Period 3 element $\\\\text{Y}$ are: $I_1 = 789$, $I_2 = 1577$, $I_3 = 3232$, $I_4 = 4356$, $I_5 = 16091$, $I_6 = 19785$
> Identify element $\\\\text{Y}$ and justify your answer.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Analyze successive differences to find the largest jump:**
> >    * $I_1 \\\\rightarrow I_2$: approx. $2\\\\times$ increase
> >    * $I_2 \\\\rightarrow I_3$: approx. $2\\\\times$ increase
> >    * $I_3 \\\\rightarrow I_4$: approx. $1.35\\\\times$ increase
> >    * $I_4 \\\\rightarrow I_5$: huge jump ($4356 \\\\rightarrow 16091$), which is a nearly $4\\\\times$ increase
> > 2. **Determine the number of valence electrons:**
> >    * The sharp increase between $I_4$ and $I_5$ indicates that the fifth electron is removed from a shell closer to the nucleus (inner core shell)
> >    * Therefore, the element has 4 valence electrons, placing it in Group 14 (Group IV)
> > 3. **Identify the element:**
> >    * The Period 3 element in Group 14 is Silicon (Si)

> [!EXAMPLE]
> #### 📝 Worked Example 2: Explaining first ionization energy exceptions
> **Question:** Explain why the first ionization energy of Oxygen is lower than that of Nitrogen, despite Oxygen having a greater nuclear charge
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Write the electronic configurations:**
> >    * Nitrogen ($Z = 7$): $1s^2 2s^2 2p^3$ (or $1s^2 2s^2 2p_x^1 2p_y^1 2p_z^1$)
> >    * Oxygen ($Z = 8$): $1s^2 2s^2 2p^4$ (or $1s^2 2s^2 2p_x^2 2p_y^1 2p_z^1$)
> > 2. **Compare orbital occupancy:**
> >    * Nitrogen has a stable, half-filled $2p$ sub-shell where each of the three $2p$ orbitals contains a single unpaired electron
> >    * Oxygen has four electrons in the $2p$ sub-shell, meaning one of the $2p$ orbitals must contain a pair of electrons
> > 3. **Analyze electron-electron interaction:**
> >    * The paired electrons in the same $2p$ orbital in Oxygen experience spin-pair repulsion
> >    * This repulsion makes it easier to remove one of these paired electrons from Oxygen than an unpaired electron from Nitrogen

> [!EXAMPLE]
> #### 📝 Worked Example 2a: Determining Group and Ionization Sums from Data Tables
> **Question:** Refer to the first four ionization energies (in $\text{kJ mol}^{-1}$) of five elements A, B, C, D, and E:
> 
> | Element | 1st I.E. | 2nd I.E. | 3rd I.E. | 4th I.E. |
> | :---: | :---: | :---: | :---: | :---: |
> | **A** | 496 | 4563 | 6913 | 9544 |
> | **B** | 738 | 1451 | 7733 | 10541 |
> | **C** | 578 | 1817 | 2745 | 11578 |
> | **D** | 900 | 1757 | 14849 | 21007 |
> | **E** | 631 | 1235 | 2389 | 7089 |
> 
> (a) Identify which two elements are in the same group. Explain your answer.
> (b) In which group of the Periodic Table is element C likely to occur? Explain your answer.
> (c) Which element requires the least amount of energy to form a $2+$ ion from a neutral gaseous atom? Explain your answer.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify elements in the same group (a):**
> >    * Elements in the same group show a similar pattern of jumps in ionization energy.
> >    * **Element A:** Huge jump between $I_1$ and $I_2$ ($496 \rightarrow 4563$), indicating $1$ valence electron (Group 1).
> >    * **Element B:** Huge jump between $I_2$ and $I_3$ ($1451 \rightarrow 7733$), indicating $2$ valence electrons (Group 2).
> >    * **Element C:** Huge jump between $I_3$ and $I_4$ ($2745 \rightarrow 11578$), indicating $3$ valence electrons (Group 13).
> >    * **Element D:** Huge jump between $I_2$ and $I_3$ ($1757 \rightarrow 14849$), indicating $2$ valence electrons (Group 2).
> >    * **Element E:** Huge jump between $I_3$ and $I_4$ ($2389 \rightarrow 7089$), indicating $3$ valence electrons (Group 13).
> >    * Thus, **B and D** are in Group 2, and **C and E** are in Group 13.
> > 
> > 2. **Deduce Group for C (b):**
> >    * Element C shows a relatively steady increase for the first three ionization energies ($578, 1817, 2745$) followed by a very large jump to the fourth ($11578$). 
> >    * This indicates that the fourth electron is removed from a shell closer to the nucleus (inner core shell). Thus, C has $3$ valence electrons and belongs to **Group 13** (Group 3).
> > 
> > 3. **Find the least energy to form a $2+$ ion (c):**
> >    * The energy required to form a $2+$ ion from a neutral gaseous atom is the sum of the first and second ionization energies ($I_1 + I_2$):
> >      * **A:** $496 + 4563 = 5059\text{ kJ mol}^{-1}$
> >      * **B:** $738 + 1451 = 2189\text{ kJ mol}^{-1}$
> >      * **C:** $578 + 1817 = 2395\text{ kJ mol}^{-1}$
> >      * **D:** $900 + 1757 = 2657\text{ kJ mol}^{-1}$
> >      * **E:** $631 + 1235 = 1866\text{ kJ mol}^{-1}$
> >    * Therefore, **Element E** requires the least energy ($1866\text{ kJ mol}^{-1}$) to form a $2+$ ion.

> [!EXAMPLE]
> #### 📝 Worked Example 2b: Comparing Ionization Energies of H, He, and Li
> **Question:** Explain the following observations:
> (a) Helium ($2370\text{ kJ mol}^{-1}$) has a higher first ionization energy than Hydrogen ($1310\text{ kJ mol}^{-1}$).
> (b) Lithium ($519\text{ kJ mol}^{-1}$) has a lower first ionization energy than Helium ($2370\text{ kJ mol}^{-1}$).
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Explain H vs He (a):**
> >    * Both Hydrogen ($1s^1$) and Helium ($1s^2$) have their outer electrons in the same $1s$ orbital, experiencing similar shielding.
> >    * However, Helium has a nuclear charge of $+2$ (two protons) compared to Hydrogen's $+1$ (one proton).
> >    * The effect of the doubled nuclear charge outweighs the mutual electron-electron repulsion (shielding) within the same orbital, drawing the electrons closer and making them harder to remove.
> > 
> > 2. **Explain He vs Li (b):**
> >    * Lithium ($1s^2 2s^1$) has a nuclear charge of $+3$ (three protons) which is larger than Helium's $+2$.
> >    * However, Lithium's outer electron is in the second quantum shell ($2s$ orbital), which is at a higher energy level and further from the nucleus.
> >    * Furthermore, the $2s$ electron experiences shielding from the two inner-shell $1s^2$ electrons.
> >    * These two factors (increased distance and shielding) outweigh the increase in nuclear charge, resulting in a much weaker attraction and a lower ionization energy for Lithium.

> [!EXAMPLE]
> #### 📝 Worked Example 2c: Writing Ionization Energy Equations
> **Question:** Write chemical equations, including state symbols, to represent:
> (a) The first ionization energy of Sodium.
> (b) The second ionization energy of Calcium.
> (c) The third ionization energy of Carbon.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **First Ionization of Sodium (a):**
> >    * Sodium starts as a gaseous neutral atom and loses one electron:
> >      $$\text{Na(g)} \rightarrow \text{Na}^+\text{(g)} + e^-$$
> > 
> > 2. **Second Ionization of Calcium (b):**
> >    * Calcium starts as a gaseous $1+$ cation and loses a second electron:
> >      $$\text{Ca}^+\text{(g)} \rightarrow \text{Ca}^{2+}\text{(g)} + e^-$$
> > 
> > 3. **Third Ionization of Carbon (c):**
> >    * Carbon starts as a gaseous $2+$ cation and loses a third electron:
> >      $$\text{C}^{2+}\text{(g)} \rightarrow \text{C}^{3+}\text{(g)} + e^-$$

> [!EXAMPLE]
> #### 📝 Worked Example 3: Melting Point Trends of Period 3 Elements
> **Question:** Explain the difference in melting points between Silicon ($1687\\\\text{ K}$) and Phosphorus ($317\\\\text{ K}$)
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the structure and bonding of Silicon:**
> >    * Silicon has a giant covalent lattice structure
> >    * Each Silicon atom is covalently bonded to four other Silicon atoms in a tetrahedral arrangement
> >    * Melting Silicon requires breaking many strong, directional covalent bonds throughout the entire structure, which requires a large amount of energy
> > 2. **Identify the structure and bonding of Phosphorus:**
> >    * Phosphorus exists as simple molecular $\\\\text{P}_4$ molecules
> >    * In the solid state, these molecules are held together only by weak intermolecular London forces (instantaneous dipole-induced dipole attractions)
> >    * Melting Phosphorus only requires overcoming these weak London forces between molecules, leaving the strong covalent bonds within the $\\\\text{P}_4$ molecules intact
> > 3. **Conclude the comparison:**
> >    * Much less thermal energy is required to overcome the weak London forces in Phosphorus than to break the strong covalent bonds in Silicon, explaining why Silicon has a significantly higher melting point

> [!EXAMPLE]
> #### 📝 Worked Example 4: Identifying periodic table block from ion electronic structure
> **Question:** A stable ion $W^{3+}$ contains 18 electrons. Determine the block in the periodic table where element $W$ is located.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Find the number of electrons in the neutral atom:**
> >    * The ion has a $3+$ charge, which means the neutral atom has lost 3 electrons
> >    * Number of electrons in neutral atom $W = 18 + 3 = 21$
> > 2. **Identify the atomic number and element:**
> >    * Since atomic number is the number of protons (equal to electrons in a neutral atom), $Z = 21$
> >    * Element 21 is Scandium (Sc)
> > 3. **Determine the block based on electronic configuration:**
> >    * The electronic configuration of Scandium is $[\\\\text{Ar}] 4s^2 3d^1$
> >    * Since the highest energy subshell being filled is the $3d$ subshell, element $W$ belongs to the **d-block**

> [!EXAMPLE]
> #### 📝 Worked Example 5: Melting Point Difference of Group 4 Elements (Carbon vs Silicon)
> **Question:** Both carbon (diamond) and silicon form giant covalent lattices in Group 14 (Group IV). However, the melting temperature of carbon ($3550^\\circ\\text{C}$) is significantly higher than that of silicon ($1414^\\circ\\text{C}$). What is the primary reason for this difference?
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Compare atomic sizes of Carbon and Silicon:**
> >    * Carbon is in Period 2 and has a smaller atomic radius than Silicon, which is in Period 3
> > 
> > 2. **Analyze the effect on covalent bond strength:**
> >    * Because the Carbon atoms are smaller, the shared electron pairs in the $\text{C-C}$ bond are closer to the nuclei, resulting in stronger electrostatic attraction forces
> >    * Therefore, $\text{C-C}$ covalent bonds are shorter and significantly stronger than $\text{Si-Si}$ covalent bonds
> > 
> > 3. **Relate bond strength to melting point:**
> >    * Since the giant covalent lattice of diamond is held together by these stronger and shorter $\text{C-C}$ bonds, much more thermal energy is required to break them compared to the weaker $\text{Si-Si}$ bonds in silicon, leading to a much higher melting point

> [!EXAMPLE]
> #### 📝 Worked Example 6: Writing Successive Ionization Energy Equations
> **Question:** Write the chemical equation, including state symbols, representing the second ionization energy of Magnesium (Mg)
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Understand the definition of Second Ionization Energy:**
> >    * It is the energy required to remove one electron from each $1+$ ion in one mole of gaseous ions to form one mole of gaseous $2+$ ions
> > 
> > 2. **Identify reactants and products:**
> >    * Reactant: Gaseous Magnesium cation, $\text{Mg}^+\text{(g)}$
> >    * Products: Gaseous Magnesium $2+$ cation, $\text{Mg}^{2+}\text{(g)}$, and the removed electron, $e^-$
> > 
> > 3. **Write the balanced chemical equation:**
> >    $$\\\\text{Mg}^+\\\\text{(g)} \\\\rightarrow \\\\text{Mg}^{2+}\\\\text{(g)} + e^-$$
> >    * *Warning:* Writing $\\\\text{Mg(g)} \\\\rightarrow \\\\text{Mg}^{2+}\\\\text{(g)} + 2e^-$ is incorrect as this represents the sum of the first and second ionization energies

> [!EXAMPLE]
> #### 📝 Worked Example 7: Explaining Ionization Energy Dip between Group 2 and Group 13
> **Question:** Explain why the first ionization energy of Aluminium (Al, $I_1 = 578\\\\text{ kJ mol}^{-1}$) is lower than that of Magnesium (Mg, $I_1 = 738\\\\text{ kJ mol}^{-1}$), despite Aluminium having a greater nuclear charge
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Write the electronic configurations of both elements:**
> >    * Magnesium ($Z = 12$): $1s^2 2s^2 2p^6 3s^2$
> >    * Aluminium ($Z = 13$): $1s^2 2s^2 2p^6 3s^2 3p^1$
> > 
> > 2. **Compare the orbitals of the outer-shell electrons being removed:**
> >    * For Magnesium, the outermost electron is removed from the $3s$ subshell
> >    * For Aluminium, the outermost electron is removed from the $3p$ subshell
> > 
> > 3. **Analyze energy level and shielding differences:**
> >    * The $3p$ subshell is at a higher energy level than the $3s$ subshell, meaning the electron is further from the nucleus
> >    * The $3p^1$ electron in Aluminium also experiences additional shielding from the inner filled $3s^2$ subshell
> > 
> > 4. **Conclude the comparison:**
> >    * Due to the higher energy level and increased shielding, the electrostatic attraction between the positive nucleus and the outer $3p$ electron is weaker in Aluminium, making it easier to remove than the outer $3s$ electron in Magnesium
`,
    keyPoints: [
      'First ionization energy equations must always include gaseous state symbols (g).',
      'Successive ionization energies always increase because the remaining electrons are pulled closer by a constant positive nuclear charge.',
      'Dips in ionization energy across a period provide evidence for subshells and orbital electron pairing repulsion.'
    ]
  }
];
