import { LessonPart } from '../../../registry';

export const lessonTitle = "Formulae, Equations and Amount of Substance";
export const lessonNumber = 1;

export const theoryMarkdown = `
# Topic 1: Formulae, Equations and Amount of Substance
This lesson covers fundamental stoichiometry, empirical formulas, gas volumes, reacting masses, concentrations, yields, and atom economy.
`;

export const parts: LessonPart[] = [
    {
        id: 'the-mole-20260106',
        title: 'The Mole & Avogadro',
        type: 'text',
        content: `
> [!NOTE]
> ### ⚛️ Fundamental Terms: Element, Compound, Atom, Molecule & Ion
> To master stoichiometry, you must accurately distinguish between these core chemical species:
> 
> 1. **Element:** A substance that contains atoms of only one type and cannot be chemically broken down into simpler substances.
>    * *Examples:* Helium ($\\text{He}$), Copper ($\\text{Cu}$), Nitrogen ($\\text{N}_2$), Phosphorus ($\\text{P}_4$)
> 2. **Compound:** A substance containing atoms of two or more different elements chemically combined together.
>    * *Examples:* Water ($\\text{H}_2\\text{O}$), Hydrogen bromide ($\\text{HBr}$), Carbon dioxide ($\\text{CO}_2$), Calcium oxide ($\\text{CaO}$)
> 3. **Atom:** The smallest part of an element that retains its chemical properties.
>    * *Examples:* $\\text{He}$, $\\text{H}$, $\\text{Na}$
> 4. **Molecule:** A particle composed of two or more atoms held together by covalent bonds.
>    * *Molecules of Elements (same element):* $\\text{H}_2$, $\\text{N}_2$, $\\text{O}_2$, $\\text{F}_2$, $\\text{Cl}_2$, $\\text{Br}_2$, $\\text{I}_2$, $\\text{P}_4$, $\\text{S}_8$, $\\text{O}_3$
>    * *Molecules of Compounds (different elements):* $\\text{H}_2\\text{O}$, $\\text{HBr}$, $\\text{H}_2\\text{O}_2$, $\\text{CH}_4$
> 5. **Ion:** A species consisting of one or more atoms with a net positive or negative electric charge.
>    * **Cation (Positive Ion):** Formed when an atom or group loses electrons (e.g., $\\text{Na}^+$, $\\text{Mg}^{2+}$, $\\text{Al}^{3+}$, $\\text{NH}_4^+$)
>    * **Anion (Negative Ion):** Formed when an atom or group gains electrons (e.g., $\\text{Cl}^-$, $\\text{OH}^-$, $\\text{NO}_3^-$, $\\text{SO}_4^{2-}$, $\\text{CO}_3^{2-}$)

> [!TIP]
> ### 🧪 Particle Atomicity: Monatomic, Diatomic & Polyatomic
> Chemical species (elements, compounds, and ions) are also categorized by the number of constituent atoms:
> 
> 1. **Monatomic (Single Atom):** Consists of a single unbonded atom or monoatomic ion.
>    * *Examples:* $\\text{He}$, $\\text{Ne}$, $\\text{Ar}$ (Group 0 noble gases); $\\text{Na}^+$, $\\text{Cl}^-$ ions
> 2. **Diatomic (Two Atoms):** Consists of exactly two atoms bonded together.
>    * *Diatomic Elements:* $\\text{H}_2$, $\\text{N}_2$, $\\text{O}_2$, $\\text{F}_2$, $\\text{Cl}_2$, $\\text{Br}_2$, $\\text{I}_2$
>    * *Diatomic Compounds:* $\\text{HBr}$, $\\text{CO}$
>    * *Diatomic Ions:* Hydroxide ($\\text{OH}^-$)
> 3. **Polyatomic (Three or More Atoms):** Consists of multiple bonded atoms.
>    * *Polyatomic Elements:* Phosphorus ($\\text{P}_4$), Sulfur ($\\text{S}_8$), Ozone ($\\text{O}_3$)
>    * *Polyatomic Compounds:* Hydrogen peroxide ($\\text{H}_2\\text{O}_2$), Methane ($\\text{CH}_4$)
>    * *Polyatomic Ions:* Carbonate ($\\text{CO}_3^{2-}$: 4 atoms), Sulfate ($\\text{SO}_4^{2-}$: 5 atoms), Ammonium ($\\text{NH}_4^+$: 5 atoms)

> [!WARNING]
> ### ⚠️ Learning Tip: Ambiguity in Chemical Names
> Always specify the exact symbol or formula alongside the name to prevent confusion:
> * The name **"hydrogen"** can refer to a hydrogen atom ($\\text{H}$), a hydrogen molecule ($\\text{H}_2$), or a hydrogen ion ($\\text{H}^+$)
> * *Did You Know?* The symbol $\\text{Cu}$ for copper comes from the Latin word *cuprum* (meaning "metal from Cyprus")

> [!BOX]
> ### ⚖️ The Mole & Avogadro's Constant
> * **The Mole ($n$):** The standard SI unit for measuring the amount of a substance. One mole contains the same number of elementary particles as the number of carbon atoms in exactly $12\\text{ g}$ of carbon-12
> * **Avogadro's Constant ($L$):**
>   * $L = 6.02 \\times 10^{23}\\text{ particles mol}^{-1}$
>   * It represents the number of particles in one mole of any given substance.
>   * Exactly equals the number of carbon atoms in $12\\text{ g}$ of $^{12}\\text{C}$

> [!BOX]
> ### 📋 Common Ionic Groups (Polyatomic Ions)
> It is essential to memorize the formulas and charges of these common ionic groups:

| Name | Formula | Name | Formula |
| :--- | :---: | :--- | :---: |
| ammonium | $\\text{NH}_4^+$ | hydroxide | $\\text{OH}^-$ |
| nitrate | $\\text{NO}_3^-$ | peroxide | $\\text{O}_2^{2-}$ |
| nitrite | $\\text{NO}_2^-$ | carbonate | $\\text{CO}_3^{2-}$ |
| acetate | $\\text{CH}_3\\text{COO}^-$ | sulfate | $\\text{SO}_4^{2-}$ |
| cyanide | $\\text{CN}^-$ | sulfite | $\\text{SO}_3^{2-}$ |
| manganate(VII) / permanganate | $\\text{MnO}_4^-$ | phosphate | $\\text{PO}_4^{3-}$ |
| iodate | $\\text{IO}_3^-$ | phosphite | $\\text{PO}_3^{3-}$ |
| perchlorate | $\\text{ClO}_4^-$ | chromate(VI) / chromate | $\\text{CrO}_4^{2-}$ |
| chlorate | $\\text{ClO}_3^-$ | dichromate(VI) / dichromate | $\\text{Cr}_2\\text{O}_7^{2-}$ |


> [!IMPORTANT]
> ### 🧮 The Molar Calculation Formulas
> To convert between mass, moles, and particles, use these core relations:
> 
> $$\\text{n} = \\frac{\\text{m}}{\\text{Mr}} \\quad \\text{and} \\quad \\text{Number of Particles} = \\text{n} \\times \\text{L}$$
> 
> Where:
> * **$n$** = amount of substance in moles ($\\text{mol}$)
> * **$m$** = mass of substance in grams ($\\text{g}$)
> * **$Mr$** = molar mass ($\\text{g mol}^{-1}$)
> * **$L$** = Avogadro's Constant ($6.02 \\times 10^{23}\\text{ particles mol}^{-1}$)

> [!EXAMPLE]
> #### 📝 Worked Example 1: Moles and Atoms (Helium)
> **Question:** Calculate the number of helium atoms in $4.00\\text{ g}$ of helium gas ($Ar(\\text{He}) = 4.00$)
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Find the number of moles ($n$):**
> > 
> >    $$n = \\frac{m}{Mr}$$
> > 
> >    $$n = \\frac{4.00\\text{ g}}{4.00\\text{ g mol}^{-1}} = 1.00\\text{ mol}$$
> > 
> > 2. **Multiply by Avogadro's Constant to find the number of particles:**
> > 
> >    $$\\text{Number of atoms} = n \\times L$$
> > 
> >    $$\\text{Number of atoms} = 1.00 \\times (6.02 \\times 10^{23}) = 6.02 \\times 10^{23}\\text{ atoms}$$

> [!EXAMPLE]
> #### 📝 Worked Example 2: Mass from Particle Count (Carbon Dioxide)
> **Question:** Calculate the mass of $3.01 \\times 10^{22}$ molecules of carbon dioxide ($\\text{CO}_2$, $Mr = 44.0$)
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Find the number of moles ($n$):**
> > 
> >    $$n = \\frac{\\text{Number of molecules}}{L}$$
> > 
> >    $$n = \\frac{3.01 \\times 10^{22}}{6.02 \\times 10^{23}} = 0.050\\text{ mol}$$
> > 
> > 2. **Calculate the mass ($m$):**
> > 
> >    $$m = n \\times Mr$$
> > 
> >    $$m = 0.050\\text{ mol} \\times 44.0\\text{ g mol}^{-1} = 2.20\\text{ g}$$

> [!EXAMPLE]
> #### 📝 Worked Example 3: Particle Comparison and Avogadro's Constant
> **Question:** Determine which of the following quantities is numerically equal to the Avogadro constant ($L$) and justify your answer:
> 1. Total number of ions in $1\\text{ mole}$ of sodium chloride, $\\text{NaCl}$
> 2. Total number of atoms in $1\\text{ mol}$ of hydrogen gas, $\\text{H}_2$
> 3. Total number of electrons in $1\\text{ mol}$ of helium gas, $\\text{He}$
> 4. Total number of molecules in $1\\text{ mol}$ of oxygen gas, $\\text{O}_2$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Analyze Sodium Chloride ($\\text{NaCl}$):**
> >    * $1\\text{ mol}$ of $\\text{NaCl}$ consists of $1\\text{ mol}$ of $\\text{Na}^+$ and $1\\text{ mol}$ of $\\text{Cl}^-$
> >    * Total ions = $2\\text{ mol}$ ($2 \\times L$ ions).
> >    * This does not equal $L$
> > 
> > 2. **Analyze Hydrogen Gas ($\\text{H}_2$):**
> >    * Hydrogen gas is diatomic.
> >    * $1\\text{ mol}$ of $\\text{H}_2$ molecules contains $2\\text{ mol}$ of hydrogen atoms.
> >    * Total atoms = $2 \\times L$ atoms, which does not equal $L$
> > 
> > 3. **Analyze Helium Gas ($\\text{He}$):**
> >    * Helium has an atomic number of 2 (2 electrons per atom).
> >    * $1\\text{ mol}$ of $\\text{He}$ gas contains $2\\text{ mol}$ of electrons.
> >    * Total electrons = $2 \\times L$ electrons, which does not equal $L$
> > 
> > 4. **Analyze Oxygen Gas ($\\text{O}_2$):**
> >    * Oxygen gas consists of diatomic molecules.
> >    * $1\\text{ mol}$ of $\\text{O}_2$ gas contains exactly $1\\text{ mol}$ of $\\text{O}_2$ molecules.
> >    * Total molecules = $1 \\times L$ molecules, which is exactly equal to $L$

> [!EXAMPLE]
> #### 📝 Worked Example 4: Classification Checkpoint (Species & Substance Types)
> **Question:** 
> 1. Classify each of the following symbols and formulae as an **atom**, **molecule**, or **ion**: $\\text{Ne}$, $\\text{CO}_2$, $\\text{H}^+$, $\\text{S}_8$, $\\text{Al}^{3+}$
> 2. State whether each formula represents an **element**, **compound**, or **neither**: $\\text{Br}_2$, $\\text{H}_2\\text{O}_2$, $\\text{NO}_3$, $\\text{O}_3$, $\\text{CaO}$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Classification by Particle Type:**
> >    * $\\text{Ne}$: **Atom** (single unbonded atom of neon)
> >    * $\\text{CO}_2$: **Molecule** (two or more covalently bonded atoms)
> >    * $\\text{H}^+$: **Ion** (cation with a $+1$ charge)
> >    * $\\text{S}_8$: **Molecule** (polyatomic molecule of sulfur)
> >    * $\\text{Al}^{3+}$: **Ion** (monoatomic cation with a $+3$ charge)
> > 
> > 2. **Classification by Substance Type:**
> >    * $\\text{Br}_2$: **Element** (contains atoms of only one element, bromine)
> >    * $\\text{H}_2\\text{O}_2$: **Compound** (contains atoms of hydrogen and oxygen combined)
> >    * $\\text{NO}_3$: **Neither** (this is an uncharged radical, not a stable neutral compound; the stable ion is nitrate, $\\text{NO}_3^-$)
> >    * $\\text{O}_3$: **Element** (ozone contains atoms of only oxygen)
> >    * $\\text{CaO}$: **Compound** (contains calcium and oxygen combined)

> [!EXAMPLE]
> #### 📝 Worked Example 5: Systematic Nomenclature of Manganese Compounds
> **Question:** An ionic compound has the formula $\\text{Mg}(\\text{MnO}_4)_2$. Calculate the oxidation state of the transition metal and determine the correct systematic IUPAC name for this compound.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the constituent ions:**
> >    * Magnesium cation: $\\text{Mg}^{2+}$
> >    * Manganate/permanganate anion: $\\text{MnO}_4^-$
> > 
> > 2. **Calculate the oxidation state of Manganese ($x$) in the $\\text{MnO}_4^-$ ion:**
> >    * Oxygen has a standard oxidation state of $-2$
> >    * The sum of oxidation states in $\\text{MnO}_4^-$ equals its charge ($-1$):
> >      $$x + 4(-2) = -1$$
> >      $$x - 8 = -1$$
> >      $$x = +7$$
> > 
> > 3. **Derive the systematic IUPAC name:**
> >    * Manganese is in the $+7$ oxidation state, so the anion is named **manganate(VII)**.
> >    * Combining with Magnesium cation gives: **Magnesium manganate(VII)**. *(Note: Permanganate is the common/trivial name).*

> [!EXAMPLE]
> #### 📝 Worked Example 6: Writing Ionic Formulae
> **Question:** Determine the correct chemical formula for the compound **ammonium dichromate(VI)** by balancing the charges of its constituent ions.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the formula and charge of each constituent ion:**
> >    * Ammonium cation: $\\text{NH}_4^+$ (charge of $+1$)
> >    * Dichromate(VI) anion: $\\text{Cr}_2\\text{O}_7^{2-}$ (charge of $-2$)
> > 
> > 2. **Balance the charges to form a neutral compound:**
> >    * The total positive charge must balance the negative charge.
> >    * We need two ammonium ions ($2 \\times +1 = +2$) to balance one dichromate(VI) ion ($-2$).
> >    * Equation: $$2 \\times (+1) + 1 \\times (-2) = 0$$
> > 
> > 3. **Write the final chemical formula:**
> >    * Place the polyatomic ammonium ion inside parentheses with a subscript of 2.
> >    * Combine with the dichromate formula: **$(\\text{NH}_4)_2\\text{Cr}_2\\text{O}_7$**

> [!BOX]
> ### ⚖️ Species Ambiguity & 1g Oxygen Table (Table A)
> When performing molar calculations, it is vital to specify the exact chemical species (atoms, molecules, or ions) being referred to.
> 
> **Table A: Comparing Amounts in 1.00 g of Oxygen Species:**
> 
> | Species | 1 g of Oxygen Atoms (O) | 1 g of Oxygen Molecules (O₂) | 1 g of Ozone Molecules (O₃) |
> | :--- | :---: | :---: | :---: |
> | Molar Mass (M) | 16.0 g mol⁻¹ | 32.0 g mol⁻¹ | 48.0 g mol⁻¹ |
> | Amount (n = m/M) | 0.0625 mol | 0.0313 mol | 0.0208 mol |
> 
> * **Comparing Moles in 9.40 g of Different Substances:**
>   * **9.40 g** of **O** atoms = **0.59 mol**
>   * **9.40 g** of **O₂** molecules = **0.29 mol**
>   * **9.40 g** of **O₃** molecules = **0.20 mol**
>   * **9.40 g** of **CO₂** molecules = **0.21 mol**
>   * **9.40 g** of **SO₄²⁻** ions = **0.098 mol**

> [!EXAMPLE]
> #### 📝 Worked Example 7: Molar Calculations Checkpoints (Sulfur, $\\\\text{SO}_2$, $\\\\text{SO}_4^{2-}$)
> **Question:** 
> 1. Calculate the amount of substance ($n$ in $\\\\text{mol}$) in each of the following:
>    * (a) $8.00\\\\text{ g}$ of sulfur, $\\\\text{S}$ ($A_r = 32.1$)
>    * (b) $8.00\\\\text{ g}$ of sulfur dioxide, $\\\\text{SO}_2$ ($M_r = 64.1$)
>    * (c) $8.00\\\\text{ g}$ of sulfate ions, $\\\\text{SO}_4^{2-}$ ($M_r = 96.1$)
> 2. How many elementary particles are there in each of the following?
>    * (a) Atoms in $2.00\\\\text{ g}$ of sulfur, $\\\\text{S}$
>    * (b) Molecules in $4.00\\\\text{ g}$ of sulfur dioxide, $\\\\text{SO}_2$
>    * (c) Ions in $8.00\\\\text{ g}$ of sulfate ions, $\\\\text{SO}_4^{2-}$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Part 1(a): Moles of Sulfur Atoms ($\\text{S}$):**
> >    $$n = \\frac{m}{A_r} = \\frac{8.00\\text{ g}}{32.1\\text{ g mol}^{-1}} = 0.249\\text{ mol}$$
> > 
> > 2. **Part 1(b): Moles of Sulfur Dioxide Molecules ($\\text{SO}_2$):**
> >    $$n = \\frac{m}{M_r} = \\frac{8.00\\text{ g}}{64.1\\text{ g mol}^{-1}} = 0.125\\text{ mol}$$
> > 
> > 3. **Part 1(c): Moles of Sulfate Ions ($\\text{SO}_4^{2-}$):**
> >    $$n = \\frac{m}{M_r} = \\frac{8.00\\text{ g}}{96.1\\text{ g mol}^{-1}} = 0.0832\\text{ mol}$$
> > 
> > 4. **Part 2(a): Atoms in $2.00\\text{ g}$ of Sulfur ($\\text{S}$):**
> >    $$n = \\frac{2.00}{32.1} = 0.0623\\text{ mol}$$
> >    $$\\text{Number of atoms} = 0.0623 \\times (6.02 \\times 10^{23}) = 3.75 \\times 10^{22}\\text{ atoms}$$
> > 
> > 5. **Part 2(b): Molecules in $4.00\\text{ g}$ of $\\text{SO}_2$:**
> >    $$n = \\frac{4.00}{64.1} = 0.0624\\text{ mol}$$
> >    $$\\text{Number of molecules} = 0.0624 \\times (6.02 \\times 10^{23}) = 3.76 \\times 10^{22}\\text{ molecules}$$
> > 
> > 6. **Part 2(c): Ions in $8.00\\text{ g}$ of $\\text{SO}_4^{2-}$:**
> >    $$n = \\frac{8.00}{96.1} = 0.0832\\text{ mol}$$
`,
        keyPoints: [
            'One mole is exactly 6.02 × 10²³ elementary particles (atoms, molecules, or ions).',
            'An element contains only one type of atom, whereas a compound contains different elements combined.',
            'Always specify the exact chemical species (atoms, molecules, ions) when calculating moles.',
            'Ions are charged species: cations are positive (e.g. Na⁺, NH₄⁺) and anions are negative (e.g. Cl⁻, SO₄²⁻).',
            'Particle atomicity describes single atoms (monatomic), two atoms (diatomic), or three+ atoms (polyatomic).'
        ],
        avogadroScale: true
    },
    {
        id: 'relative-masses-20260106',
        title: 'Relative Masses',
        type: 'text',
        content: `
> [!BOX]
> ### ⚖️ Relative Atomic Mass ($A_r$) Definition & Standards
> * **Relative Isotopic Mass:** The mass of an atom of an isotope of an element compared with $\\frac{1}{12}$ of the mass of a carbon-12 atom. (Each isotope has a specific mass, e.g., $^{35}\\text{Cl} = 35.0$, $^{37}\\text{Cl} = 37.0$).
> * **Relative Atomic Mass ($A_r$):** The weighted mean (average) mass of an atom of an element compared with $\\frac{1}{12}$ of the mass of an atom of carbon-12.
> * **Mathematical Formula for $A_r$:**
>   $$A_r = \\frac{\\text{weighted mean mass of an atom of an element}}{\\frac{1}{12} \\text{ of the mass of an atom of } {}^{12}\\text{C}}$$
>   *(Note: Relative masses are ratios and have **no physical units**).*
> * **Standard:** Carbon-12 ($^{12}\\text{C}$) is used as the international reference standard for relative atomic mass because it has a highly stable abundance and its atomic mass is defined as exactly 12.

> [!BOX]
> ### 🔗 Relative Molecular Mass ($M_r$), Formula Mass ($M_r$) & Molar Mass ($M$)
> * **Relative Molecular Mass ($M_r$):** The average mass of a molecule of a covalent substance compared with $\\frac{1}{12}$ of the mass of a carbon-12 atom.
>    * *Examples:* $M_r(\\text{H}_2) = 2.0$, $M_r(\\text{CO}_2) = 44.0$, $M_r(\\text{H}_2\\text{SO}_4) = 98.1$
> * **Relative Formula Mass ($M_r$):** The average mass of a formula unit of giant ionic or giant covalent structures (or hydrates) compared with $\\frac{1}{12}$ of the mass of a carbon-12 atom.
>    * *Examples:* Ionic $\\text{Na}_2\\text{O} = 62.0$, Giant covalent $\\text{SiO}_2 = 60.1$, Hydrated $\\text{CuSO}_4 \\cdot 5\\text{H}_2\\text{O} = 249.6$
> * **Molar Mass ($M$):** The mass per mole of any substance (molecular or ionic), expressed in grams per mole ($\\text{g mol}^{-1}$).
>   $$n = \\frac{m}{M} \\quad \\implies \\quad \\text{Amount (mol)} = \\frac{\\text{Mass (g)}}{\\text{Molar Mass (g mol}^{-1}\\text{)}}$$

> [!BOX]
> ### 📋 Molar Calculations Reference Table (Table B)
> Standard mole-mass conversions for common substances:
> 
> | Substance | $\\text{O}_2$ | $\\text{CH}_4$ | $\\text{H}_2\\text{O}$ | $\\text{NH}_4\\text{NO}_3$ |
> | :--- | :---: | :---: | :---: | :---: |
> | Mass in $\\text{g}$ ($m$) | $5.26\\text{ g}$ | $4.00\\text{ g}$ | $100\\text{ g}$ | $14.7\\text{ g}$ |
> | Molar Mass, $M$ ($\\text{g mol}^{-1}$) | $32.0$ | $16.0$ | $18.0$ | $80.0$ |
> | Amount in $\\text{mol}$ ($n = m/M$) | $0.164\\text{ mol}$ | $0.250\\text{ mol}$ | $5.56\\text{ mol}$ | $0.184\\text{ mol}$ |

> [!EXAMPLE]
> #### 📝 Worked Example 1: Handling Water of Crystallization
> **Question:** Calculate the relative formula mass ($M_r$) of copper(II) sulfate pentahydrate ($\\text{CuSO}_4 \\cdot 5\\text{H}_2\\text{O}$)  
> *(Relative atomic masses: $\\text{Cu} = 63.5, \\text{S} = 32.1, \\text{O} = 16.0, \\text{H} = 1.0$)*
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate the anhydrous $\\text{CuSO}_4$ part:**
> >    $$M_r(\\text{CuSO}_4) = 63.5 + 32.1 + (4 \\times 16.0) = 159.6$$
> > 
> > 2. **Calculate the water of crystallization part ($5\\text{H}_2\\text{O}$):**
> >    $$5 \\times M_r(\\text{H}_2\\text{O}) = 5 \\times [(2 \\times 1.0) + 16.0] = 5 \\times 18.0 = 90.0$$
> > 
> > 3. **Add the parts together:**
> >    $$M_r(\\text{CuSO}_4 \\cdot 5\\text{H}_2\\text{O}) = 159.6 + 90.0 = 249.6$$

> [!EXAMPLE]
> #### 📝 Worked Example 2: Determining Water of Crystallization from Experimental Data
> **Question:** Hydrated magnesium sulfate has the formula $\\text{MgSO}_4 \\cdot x\\text{H}_2\\text{O}$. A student heated a sample in a crucible to remove the water of crystallization. Use the following experimental data to calculate the value of $x$ to the nearest whole number.  
> *(Given relative atomic masses: $\\text{Mg} = 24.3, \\text{S} = 32.1, \\text{O} = 16.0, \\text{H} = 1.0$)*
>
> | Measurement | Mass (g) |
> | :--- | :---: |
> | Mass of empty crucible | 21.21 |
> | Mass of crucible and hydrated magnesium sulfate before heating | 26.71 |
> | Mass of crucible and anhydrous magnesium sulfate after heating | 24.12 |
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate the mass of the anhydrous salt ($\\text{MgSO}_4$) obtained:**
> >    $$\\text{Mass of MgSO}_4 = 24.12\\text{ g} - 21.21\\text{ g} = 2.91\\text{ g}$$
> > 
> > 2. **Calculate the mass of the water of crystallization lost:**
> >    $$\\text{Mass of H}_2\\text{O} = 26.71\\text{ g} - 24.12\\text{ g} = 2.59\\text{ g}$$
> > 
> > 3. **Calculate the moles of anhydrous $\\text{MgSO}_4$ ($M_r = 120.4\\text{ g mol}^{-1}$):**
> >    $$n(\\text{MgSO}_4) = \\frac{m}{M_r} = \\frac{2.91\\text{ g}}{120.4\\text{ g mol}^{-1}} \\approx 0.02417\\text{ mol}$$
> > 
> > 4. **Calculate the moles of water lost ($M_r = 18.0\\text{ g mol}^{-1}$):**
> >    $$n(\\text{H}_2\\text{O}) = \\frac{m}{M_r} = \\frac{2.59\\text{ g}}{18.0\\text{ g mol}^{-1}} \\approx 0.1439\\text{ mol}$$
> > 
> > 5. **Find the simplest mole ratio of water to anhydrous salt ($x$):**
> >    $$x = \\frac{n(\\text{H}_2\\text{O})}{n(\\text{MgSO}_4)} = \\frac{0.1439\\text{ mol}}{0.02417\\text{ mol}} \\approx 5.95$$
> >    * Giving the answer to the nearest whole number: **$x = 6$**
> >    * The formula is **$\\text{MgSO}_4 \\cdot 6\\text{H}_2\\text{O}$**

> [!EXAMPLE]
> #### 📝 Worked Example 3: Calculating Ions in a Given Mass
> **Question:** How many ions are there in $284\\text{ g}$ of sodium sulfate, $\\text{Na}_2\\text{SO}_4$?  
> *(Take Avogadro's constant, $L = 6.02 \\times 10^{23}\\text{ mol}^{-1}$, $A_r: \\text{Na}=23.0, \\text{S}=32.1, \\text{O}=16.0$)*
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate the molar mass ($M_r$) of $\\text{Na}_2\\text{SO}_4$:**
> >    $$M_r = (2 \\times 23.0) + 32.1 + (4 \\times 16.0) = 142.1\\text{ g mol}^{-1}$$
> > 
> > 2. **Calculate the number of moles ($n$) of $\\text{Na}_2\\text{SO}_4$:**
> >    $$n = \\frac{\\text{Mass}}{\\text{Molar Mass}} = \\frac{284\\text{ g}}{142.1\\text{ g mol}^{-1}} \\approx 2.00\\text{ mol}$$
> > 
> > 3. **Determine the dissociation and number of ions:**
> >    * One formula unit of $\\text{Na}_2\\text{SO}_4$ contains $2\\text{ Na}^+$ ions and $1\\text{ SO}_4^{2-}$ ion. Total = 3 ions.
> > 
> > 4. **Calculate the total number of ions:**
> >    $$\\text{Total ions} = 2.00 \\times (6.02 \\times 10^{23}) \\times 3 = 3.612 \\times 10^{24}\\text{ ions}$$

> [!EXAMPLE]
> #### 📝 Worked Example 4: Molecules in a Small Water Sample
> **Question:** How many $\\text{H}_2\\text{O}$ molecules are there in a $1.25\\text{ g}$ sample of water?  
> *(Given $M_r(\\text{H}_2\\text{O}) = 18.0\\text{ g mol}^{-1}$, $L = 6.02 \\times 10^{23}\\text{ mol}^{-1}$)*
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate the amount of water in moles ($n$):**
> >    $$n = \\frac{m}{M} = \\frac{1.25\\text{ g}}{18.0\\text{ g mol}^{-1}} \\approx 0.0694\\text{ mol}$$
> > 
> > 2. **Multiply by the Avogadro Constant ($L$) to find the number of molecules:**
> >    $$\\text{Number of molecules} = n \\times L$$
> >    $$\\text{Number of molecules} = 0.0694 \\times (6.02 \\times 10^{23}) = 4.18 \\times 10^{22}\\text{ molecules}$$

> [!EXAMPLE]
> #### 📝 Worked Example 5: Mass of Microscopic Particles (100 Million Gold Atoms)
> **Question:** What is the total mass in grams of 100 million ($100 \\times 10^6$) atoms of gold ($\\text{Au}$, $A_r = 197.0$)?
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate the amount of gold in moles ($n$):**
> >    $$n = \\frac{\\text{Number of atoms}}{L} = \\frac{100 \\times 10^6}{6.02 \\times 10^{23}} \\approx 1.66 \\times 10^{-16}\\text{ mol}$$
> > 
> > 2. **Calculate the mass in grams ($m$):**
> >    $$m = n \\times A_r = (1.66 \\times 10^{-16}\\text{ mol}) \\times 197.0\\text{ g mol}^{-1} = 3.27 \\times 10^{-14}\\text{ g}$$

> [!EXAMPLE]
> #### 📝 Worked Example 6: Textbook Checkpoints (Malachite & Sugar Molecules)
> **Question:** 
> 1. Malachite is an important copper mineral with the chemical formula **Cu₂CO₃(OH)₂**. Calculate its relative formula mass ($M_r$).  
>    *(Given $A_r$: $\\\\text{Cu} = 63.5, \\\\text{C} = 12.0, \\\\text{O} = 16.0, \\\\text{H} = 1.0$)*
> 2. How many sugar molecules (**C₁₂H₂₂O₁₁**) are present in a teaspoon measure of $4.20\\\\text{ g}$?
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Part 1 (Malachite Relative Formula Mass):**
> >    * Sum relative atomic masses for **Cu₂CO₃(OH)₂**:
> >      $$M_r = (2 \\\\times 63.5) + 12.0 + (3 \\\\times 16.0) + 2 \\\\times (16.0 + 1.0)$$
> >      $$M_r = 127.0 + 12.0 + 48.0 + 34.0 = 221.0$$
> > 
> > 2. **Part 2 (Sugar Molecules Calculation):**
> >    * Calculate $M_r$ of sucrose (**C₁₂H₂₂O₁₁**):
> >      $$M_r = (12 \\\\times 12.0) + (22 \\\\times 1.0) + (11 \\\\times 16.0) = 144.0 + 22.0 + 176.0 = 342.0\\\\text{ g mol}^{-1}$$
> >    * Calculate moles in $4.20\\\\text{ g}$:
> >      $$n = \\\\frac{m}{M} = \\\\frac{4.20\\\\text{ g}}{342.0\\\\text{ g mol}^{-1}} \\\\approx 0.01228\\\\text{ mol}$$
> >    * Calculate total sugar molecules:
> >      $$\\\\text{Molecules} = 0.01228 \\\\times (6.02 \\\\times 10^{23}) = 7.39 \\\\times 10^{21}\\\\text{ molecules}$$

> [!EXAMPLE]
> #### 📝 Worked Example 7: Determining Empirical Formula from Mass
> **Question:** A sample of an oxide of nitrogen contains $1.40\\text{ g}$ of nitrogen and $3.20\\text{ g}$ of oxygen. Calculate the empirical formula of this compound.  
> *(Given $A_r: \\text{N} = 14.0, \\text{O} = 16.0$)*
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate moles of each element:**
> >    * $n(\\text{N}) = \\frac{1.40\\text{ g}}{14.0\\text{ g mol}^{-1}} = 0.100\\text{ mol}$
> >    * $n(\\text{O}) = \\frac{3.20\\text{ g}}{16.0\\text{ g mol}^{-1}} = 0.200\\text{ mol}$
> > 
> > 2. **Find the simplest molar ratio:**
> >    * Divide by the smallest amount ($0.100$):
> >      $\text{N}: 0.100 / 0.100 = 1$
> >      $\text{O}: 0.200 / 0.100 = 2$
> > 
> > 3. **State the empirical formula:**
> >    * The ratio $\\text{N}:\\text{O}$ is $1:2$, so the empirical formula is **$\\text{NO}_2$**.
`,
        keyPoints: [
            'Relative atomic mass (Ar) is based on the carbon-12 standard and has no physical units.',
            'Molar mass (M) is the mass per mole in g mol⁻¹.',
            'Number of particles = n × L = (m / M) × L.',
            'Always add water of crystallization (X · nH₂O) rather than multiplying.'
        ],
        equationVisualizer: {
            reactants: [['CuSO₄', '#ef4444'], ['5H₂O', '#3b82f6']],
            products: [['CuSO₄·5H₂O', '#10b981']],
            description: "Anhydrous copper(II) sulfate (CuSO₄) reacts with 5 moles of water (H₂O) to form copper(II) sulfate pentahydrate (CuSO₄·5H₂O)"
        }
    },
    {
        id: 'chemical-equations-20260106',
        title: 'Chemical & Ionic Equations',
        type: 'text',
        content: `
> [!BOX]
> ### 🧪 Chemical Equations Fundamentals
> Chemical equations are symbolic representations of chemical reactions where reactants are converted to products.
> 
> * **Essential Formulae to Remember:**
>    * Diatomic elements: Oxygen ($\\\\text{O}_2$), Hydrogen ($\\\\text{H}_2$), Nitrogen ($\\\\text{N}_2$)
>    * Key compounds: Water ($\\\\text{H}_2\\\\text{O}$), Sodium hydroxide ($\\\\text{NaOH}$), Nitric acid ($\\\\text{HNO}_3$)
> 
> * **Exam Hint (Periodic Table Trends):** If you know the formula of magnesium sulfate ($\\\\text{MgSO}_4$), you can deduce that strontium sulfate is $\\\\text{SrSO}_4$ because $\\\\text{Mg}$ and $\\\\text{Sr}$ are in the same group (Group 2).
> 
> * **Reaction Arrows:**
>    * **Conventional arrow ($\\\\rightarrow$):** Used for irreversible reactions going to completion. Reaction conditions (temperature, pressure, catalyst) are written above or below the arrow.
>    * **Reversible arrow ($\\\\rightleftharpoons$):** Used for reversible reactions establishing dynamic equilibrium.

> [!BOX]
> ### ⚖️ Reacting Mass Ratios & Equations (Ammonia Manufacture)
> A balanced chemical equation displays both mole ratios and mass ratios of all species involved:
> 
> $$\\\\text{N}_2\\\\text{(g)} + 3\\\\text{H}_2\\\\text{(g)} \\\\rightarrow 2\\\\text{NH}_3\\\\text{(g)}$$
> 
> * **Molecular ratio:** $1\\\\text{ molecule N}_2 : 3\\\\text{ molecules H}_2 \\\\rightarrow 2\\\\text{ molecules NH}_3$
> * **Molar ratio:** $1\\\\text{ mol N}_2 : 3\\\\text{ mol H}_2 \\\\rightarrow 2\\\\text{ mol NH}_3$
> * **Reacting Mass ratio:** $28.0\\\\text{ g N}_2 : 6.0\\\\text{ g H}_2 \\\\rightarrow 34.0\\\\text{ g NH}_3$

> [!BOX]
> ### 🔍 Deducing Reaction Equations from Experimental Masses
> Experimental mass data allows chemists to determine unknown chemical formulas and confirm exact reaction pathways:
> 
> 1. **Decomposition of Hydrates:** Heating $16.7\\\\text{ g}$ of $\\\\text{Na}_2\\\\text{CO}_3 \\\\cdot 10\\\\text{H}_2\\\\text{O}$ releases $3.15\\\\text{ g}$ of water. Molar ratio of hydrate to lost water is $0.0584 : 0.175 = 1 : 3$, confirming the reaction equation:
>    $$\\\\text{Na}_2\\\\text{CO}_3 \\\\cdot 10\\\\text{H}_2\\\\text{O(s)} \\\\rightarrow \\\\text{Na}_2\\\\text{CO}_3 \\\\cdot 7\\\\text{H}_2\\\\text{O(s)} + 3\\\\text{H}_2\\\\text{O(g)}$$
> 
> 2. **Reduction of Metal Oxides:** Heating copper oxide in hydrogen gas yields $17.6\\\\text{ g}$ of $\\\\text{Cu}$ and $2.56\\\\text{ g}$ of $\\\\text{H}_2\\\\text{O}$. Molar ratio $\\\\text{Cu} : \\\\text{H}_2\\\\text{O} = 0.277 : 0.142 = 2 : 1$, proving the oxide is copper(I) oxide ($\\\\text{Cu}_2\\\\text{O}$):
>    $$\\\\text{Cu}_2\\\\text{O(s)} + \\\\text{H}_2\\\\text{(g)} \\\\rightarrow 2\\\\text{Cu(s)} + \\\\text{H}_2\\\\text{O(l)}$$

> [!EXAMPLE]
> #### 📝 Worked Example 9: Deducing Reaction Equations from Experimental Masses
> **Question:** 
> 1. A $16.7\\\\text{ g}$ sample of sodium carbonate decahydrate ($\\\\text{Na}_2\\\\text{CO}_3 \\\\cdot 10\\\\text{H}_2\\\\text{O}$) is heated to constant mass, driving off $3.15\\\\text{ g}$ of water. Deduce the equation for the reaction occurring.  
>    *(Given $M_r(\\\\text{Na}_2\\\\text{CO}_3 \\\\cdot 10\\\\text{H}_2\\\\text{O}) = 286.1\\\\text{ g mol}^{-1}, M_r(\\\\text{H}_2\\\\text{O}) = 18.0\\\\text{ g mol}^{-1}$)*
> 2. An oxide of copper is heated in a stream of hydrogen to constant mass, forming $17.6\\\\text{ g}$ of copper metal and $2.56\\\\text{ g}$ of water. Deduce whether the oxide reacted was $\\\\text{CuO}$ or $\\\\text{Cu}_2\\\\text{O}$.  
>    *(Given $A_r: \\\\text{Cu} = 63.5, \\\\text{H} = 1.0, \\\\text{O} = 16.0$)*
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Part 1 (Hydrate Decomposition Equation):**
> >    * Calculate moles of starting hydrate:
> >      $$n(\\\\text{Na}_2\\\\text{CO}_3 \\\\cdot 10\\\\text{H}_2\\\\text{O}) = \\\\frac{16.7\\\\text{ g}}{286.1\\\\text{ g mol}^{-1}} = 0.0584\\\\text{ mol}$$
> >    * Calculate moles of water lost:
> >      $$n(\\\\text{H}_2\\\\text{O}) = \\\\frac{3.15\\\\text{ g}}{18.0\\\\text{ g mol}^{-1}} = 0.175\\\\text{ mol}$$
> >    * Calculate simplest molar ratio:
> >      $$\\\\text{Ratio} = \\\\frac{0.175}{0.0584} = 3.00$$
> >    * For every 1 mole of decahydrate, 3 moles of water are released. The equation is:
> >      $$\\\\text{Na}_2\\\\text{CO}_3 \\\\cdot 10\\\\text{H}_2\\\\text{O(s)} \\\\rightarrow \\\\text{Na}_2\\\\text{CO}_3 \\\\cdot 7\\\\text{H}_2\\\\text{O(s)} + 3\\\\text{H}_2\\\\text{O(g)}$$
> > 
> > 2. **Part 2 (Copper Oxide Reduction Equation):**
> >    * Calculate moles of copper produced:
> >      $$n(\\\\text{Cu}) = \\\\frac{17.6\\\\text{ g}}{63.5\\\\text{ g mol}^{-1}} = 0.277\\\\text{ mol}$$
> >    * Calculate moles of water produced:
> >      $$n(\\\\text{H}_2\\\\text{O}) = \\\\frac{2.56\\\\text{ g}}{18.0\\\\text{ g mol}^{-1}} = 0.142\\\\text{ mol}$$
> >    * Calculate molar ratio $\\\\text{Cu} : \\\\text{H}_2\\\\text{O}$:
> >      $$\\\\text{Ratio} = \\\\frac{0.277}{0.142} \\\\approx 2.00$$
> >    * The reaction produces 2 moles of $\\\\text{Cu}$ for every 1 mole of $\\\\text{H}_2\\\\text{O}$.
> >    * The balanced equation is:
> >      $$\\\\text{Cu}_2\\\\text{O(s)} + \\\\text{H}_2\\\\text{(g)} \\\\rightarrow 2\\\\text{Cu(s)} + \\\\text{H}_2\\\\text{O(l)}$$
> >    * **Conclusion:** The oxide was **copper(I) oxide ($\\\\text{Cu}_2\\\\text{O}$)**.

> [!EXAMPLE]
> #### 📝 Worked Example 10: Reacting Mass Checkpoints (Industrial Fertilizer & Iron Oxide)
> **Question:** 
> 1. A fertilizer manufacturer produces $20.0\\\\text{ kg}$ of ammonium nitrate ($\\\\text{NH}_4\\\\text{NO}_3$). What mass of ammonia ($\\\\text{NH}_3$) in $\\\\text{kg}$ is required to react with nitric acid?  
>    *(Given $M_r(\\\\text{NH}_3) = 17.0\\\\text{ g mol}^{-1}, M_r(\\\\text{NH}_4\\\\text{NO}_3) = 80.0\\\\text{ g mol}^{-1}$)*
> 2. A sample of iron oxide is reduced to iron metal by heating with hydrogen gas. The mass of iron obtained is $4.35\\\\text{ g}$ and the mass of water formed is $1.86\\\\text{ g}$. Deduce the equation for the reaction that occurred.  
>    *(Given $A_r: \\\\text{Fe} = 55.8, \\\\text{H} = 1.0, \\\\text{O} = 16.0$)*
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Part 1 (Ammonia Mass Calculation):**
> >    * Write equation: $\\\\text{NH}_3 + \\\\text{HNO}_3 \\\\rightarrow \\\\text{NH}_4\\\\text{NO}_3$ (1:1 mole ratio)
> >    * Convert $20.0\\\\text{ kg}$ to grams ($20,000\\\\text{ g}$) and find moles of $\\\\text{NH}_4\\\\text{NO}_3$:
> >      $$n(\\\\text{NH}_4\\\\text{NO}_3) = \\\\frac{20000\\\\text{ g}}{80.0\\\\text{ g mol}^{-1}} = 250\\\\text{ mol}$$
> >    * Since ratio is $1:1$, $n(\\\\text{NH}_3) = 250\\\\text{ mol}$
> >    * Calculate mass of $\\\\text{NH}_3$:
> >      $$m(\\\\text{NH}_3) = 250\\\\text{ mol} \\\\times 17.0\\\\text{ g mol}^{-1} = 4250\\\\text{ g} = 4.25\\\\text{ kg}$$
> > 
> > 2. **Part 2 (Iron Oxide Reduction Equation):**
> >    * Calculate moles of iron ($\\\\text{Fe}$):
> >      $$n(\\\\text{Fe}) = \\\\frac{4.35\\\\text{ g}}{55.8\\\\text{ g mol}^{-1}} = 0.0780\\\\text{ mol}$$
> >    * Calculate moles of water ($\\\\text{H}_2\\\\text{O}$):
> >      $$n(\\\\text{H}_2\\\\text{O}) = \\\\frac{1.86\\\\text{ g}}{18.0\\\\text{ g mol}^{-1}} = 0.1033\\\\text{ mol}$$
> >    * Calculate simplest whole-number ratio $\\\\text{Fe} : \\\\text{H}_2\\\\text{O}$:
> >      $$\\\\text{Ratio} = \\\\frac{0.1033}{0.0780} = 1.324 \\\\approx \\\\frac{4}{3}$$
> >    * Ratio is $3\\\\text{ Fe} : 4\\\\text{ H}_2\\\\text{O}$.
> >    * The balanced equation for the reaction is:
> >      $$\\\\text{Fe}_3\\\\text{O}_4\\\\text{(s)} + 4\\\\text{H}_2\\\\text{(g)} \\\\rightarrow 3\\\\text{Fe(s)} + 4\\\\text{H}_2\\\\text{O(l)}$$

> [!BOX]
> ### 🏷️ State Symbols & Reaction Coefficients
> * **State Symbols:**
>    * **(s):** Solid
>    * **(l):** Pure liquid
>    * **(g):** Gas
>    * **(aq):** Aqueous / Dissolved in water
> 
> * **Coefficients (Stoichiometric Ratios):** The numbers in front of species representing mole ratios. Most equations use whole-number coefficients, but fractional or decimal coefficients (e.g. $6.5\\\\text{O}_2$ or $\\\\frac{13}{2}\\\\text{O}_2$ in butane combustion) are fully acceptable in organic chemistry:
> 
>   $$\\\\text{C₄H₁₀(g)} + 6.5\\\\text{O₂}\\\\text{(g)} \\\\rightarrow 4\\\\text{CO₂}\\\\text{(g)} + 5\\\\text{H₂O(l)}$$

> [!WARNING]
> ### ⚠️ Common Pitfalls: State Symbols & Water
> Be careful when assigning physical state symbols:
> * **Water is NEVER $\\\\text{H}_2\\\\text{O(aq)}$:** Water is a solvent / pure liquid, not something dissolved in water! Depending on temperature, water can be $\\\\text{H}_2\\\\text{O(s)}$ (ice), $\\\\text{H}_2\\\\text{O(l)}$ (liquid), or $\\\\text{H}_2\\\\text{O(g)}$ (steam/gas), but **never** $\\\\text{H}_2\\\\text{O(aq)}$.

> [!BOX]
> ### 💧 Hydrates & Water of Crystallization
> * **Hydrate:** A chemical compound containing chemically bound water molecules.
> * **Water of crystallization:** Water molecules chemically bonded into a crystalline lattice in fixed mole ratios.
> 
> #### 🔍 Two Tests for Water (Reversible Hydration Reactions)
> 1. **Cobalt(II) Chloride test:**
>    $$\\\\text{CoCl}_2\\\\text{(s)} + 6\\\\text{H}_2\\\\text{O(g)} \\\\rightleftharpoons \\\\text{CoCl}_2 \\\\cdot 6\\\\text{H}_2\\\\text{O(s)}$$
>    * **Anhydrous Cobalt(II) chloride:** Blue
>    * **Hydrated Cobalt(II) chloride:** Pink
> 
> 2. **Copper(II) Sulfate test:**
>    $$\\\\text{CuSO}_4\\\\text{(s)} + 5\\\\text{H}_2\\\\text{O(g)} \\\\rightleftharpoons \\\\text{CuSO}_4 \\\\cdot 5\\\\text{H}_2\\\\text{O(s)}$$
>    * **Anhydrous Copper(II) sulfate:** White
>    * **Hydrated Copper(II) sulfate:** Blue

> [!BOX]
> ### ⚡ Net Ionic Equations & Spectator Ions
> * **Ionic Equation:** Shows only the species (atoms, molecules, or ions) involved in the chemical change.
> * **Spectator ions:** Aqueous ions present before and after a reaction that remain unchanged and do not participate in the net chemical change.
> 
> #### 📝 3-Step Method to Write Net Ionic Equations:
> 1. **Step 1:** Write the full balanced symbol equation with correct state symbols.
> 2. **Step 2:** Replace all **soluble ionic compounds (aq)** with their separated constituent ions. *(Keep solids (s), liquids (l), gases (g), and covalent molecules intact).*
> 3. **Step 3:** Cross out all **spectator ions** appearing identical on both sides of the equation.

> [!BOX]
> ### 🧪 The 5 Core Reactions of Acids
> Acids react with different bases, metals, and carbonates to produce salts:
> 
> 1. **Acid + Metal:** $\\\\text{metal} + \\\\text{acid} \\\\rightarrow \\\\text{salt} + \\\\text{hydrogen}$
>    * *Observation:* Bubbles of $\\\\text{H}_2\\\\text{(g)}$ gas form, temperature rises, and solution forms.
>    * *Reactivity Rule:* Metal must be sufficiently reactive (e.g. $\\\\text{Mg}$, $\\\\text{Zn}$). Unreactive metals like copper ($\\\\text{Cu}$) **do not react**.
>    * *Net Ionic Equation:*
>      $$\\\\text{Mg(s)} + 2\\\\text{H}^+\\\\text{(aq)} \\\\rightarrow \\\\text{Mg}^{2+}\\\\text{(aq)} + \\\\text{H}_2\\\\text{(g)}$$
> 
> 2. **Acid + Metal Oxide / Insoluble Hydroxide:** $\\\\text{metal oxide} + \\\\text{acid} \\\\rightarrow \\\\text{salt} + \\\\text{water}$
>    * *Metal Hydroxide Equation:* $\\\\text{metal hydroxide} + \\\\text{acid} \\\\rightarrow \\\\text{salt} + \\\\text{water}$
>    * *Observation:* Solid oxide/hydroxide dissolves to form a clear solution.
>    * *Net Ionic Equations:*
>      $$\\\\text{CuO(s)} + 2\\\\text{H}^+\\\\text{(aq)} \\\\rightarrow \\\\text{Cu}^{2+}\\\\text{(aq)} + \\\\text{H}_2\\\\text{O(l)}$$
>      $$\\\\text{Zn(OH)}_2\\\\text{(s)} + 2\\\\text{H}^+\\\\text{(aq)} \\\\rightarrow \\\\text{Zn}^{2+}\\\\text{(aq)} + 2\\\\text{H}_2\\\\text{O(l)}$$
> 
> 3. **Acid + Alkali (Soluble Metal Hydroxide):** $\\\\text{alkali} + \\\\text{acid} \\\\rightarrow \\\\text{salt} + \\\\text{water}$
>    * *Observation:* No visible change (colorless solution), but measurable temperature rise (exothermic).
>    * *Universal Net Ionic Equation:*
>      $$\\\\text{H}^+\\\\text{(aq)} + \\\\text{OH}^-\\\\text{(aq)} \\\\rightarrow \\\\text{H}_2\\\\text{O(l)}$$
> 
> 4. **Acid + Metal Carbonate:** $\\\\text{metal carbonate} + \\\\text{acid} \\\\rightarrow \\\\text{salt} + \\\\text{water} + \\\\text{carbon dioxide}$
>    * *Observation:* Effervescence / bubbles of $\\\\text{CO}_2\\\\text{(g)}$ gas, solid carbonate dissolves.
>    * *Net Ionic Equation:*
>      $$\\\\text{CO}_3^{2-}\\\\text{(aq)} + 2\\\\text{H}^+\\\\text{(aq)} \\\\rightarrow \\\\text{H}_2\\\\text{O(l)} + \\\\text{CO}_2\\\\text{(g)}$$
> 
> 5. **Acid + Hydrogencarbonate (Bicarbonate):** $\\\\text{hydrogencarbonate} + \\\\text{acid} \\\\rightarrow \\\\text{salt} + \\\\text{water} + \\\\text{carbon dioxide}$
>    * *Net Ionic Equation:*
>      $$\\\\text{HCO}_3^-\\\\text{(aq)} + \\\\text{H}^+\\\\text{(aq)} \\\\rightarrow \\\\text{H}_2\\\\text{O(l)} + \\\\text{CO}_2\\\\text{(g)}$$

> [!WARNING]
> ### ⚠️ Critical Exam Distinction: Metal vs Acid (Redox vs Neutralisation)
> * **Acid + Metal is NOT Neutralisation:** When a metal reacts with an acid, $\\\\text{H}^+$ ions gain electrons from metal atoms to form $\\\\text{H}_2\\\\text{(g)}$. Since $\\\\text{H}^+$ is reduced, this is a **Redox Reaction**, not a neutralisation reaction!
> * **Acid + Metal Oxide / Hydroxide / Carbonate / Alkali IS Neutralisation:** $\\\\text{H}^+$ ions combine with $\\\\text{O}^{2-}$, $\\\\text{OH}^-$, or $\\\\text{CO}_3^{2-}$ without any change in oxidation numbers.

> [!TIP]
> ### 🍞 Everyday Chemistry: Baking Soda & Polyprotic Neutralisations
> * **Baking Soda ($\\\\text{NaHCO}_3$):** Used in baking (e.g. cakes). Citric acid in lemon juice or batter reacts with $\\\\text{NaHCO}_3$ to produce $\\\\text{CO}_2$ bubbles that make the cake mixture rise. Gas is confirmed using the **limewater test** ($\\\\text{CO}_2$ turns limewater cloudy).
> * **Polyprotic Acids (Phosphoric Acid, $\\\\text{H}_3\\\\text{PO}_4$):** Contains 3 replaceable hydrogens, forming 3 possible salts depending on mole ratios:
>   * $\\\\text{NaOH} + \\\\text{H}_3\\\\text{PO}_4 \\\\rightarrow \\\\text{NaH}_2\\\\text{PO}_4 + \\\\text{H}_2\\\\text{O}$
>   * $2\\\\text{NaOH} + \\\\text{H}_3\\\\text{PO}_4 \\\\rightarrow \\\\text{Na}_2\\\\text{HPO}_4 + 2\\\\text{H}_2\\\\text{O}$
>   * $3\\\\text{NaOH} + \\\\text{H}_3\\\\text{PO}_4 \\\\rightarrow \\\\text{Na}_3\\\\text{PO}_4 + 3\\\\text{H}_2\\\\text{O}$

> [!EXAMPLE]
> #### 📝 Worked Example 1: Net Ionic Equation for a Precipitation Reaction
> **Question:** When aqueous solutions of barium chloride, $\\\\text{BaCl}_2\\\\text{(aq)}$, and sodium sulfate, $\\\\text{Na}_2\\\\text{SO}_4\\\\text{(aq)}$, are mixed together, a white precipitate of barium sulfate forms. Write the full balanced chemical equation and deduce the net ionic equation for this precipitation reaction.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Write the full balanced molecular equation:**
> >    $$\\\\text{BaCl}_2\\\\text{(aq)} + \\\\text{Na}_2\\\\text{SO}_4\\\\text{(aq)} \\\\rightarrow \\\\text{BaSO}_4\\\\text{(s)} + 2\\\\text{NaCl(aq)}$$
> > 
> > 2. **Dissociate all soluble ionic compounds (aq) into their constituent ions:**
> >    $$\\\\text{Ba}^{2+}\\\\text{(aq)} + 2\\\\text{Cl}^-\\\\text{(aq)} + 2\\\\text{Na}^+\\\\text{(aq)} + \\\\text{SO}_4^{2-}\\\\text{(aq)} \\\\rightarrow \\\\text{BaSO}_4\\\\text{(s)} + 2\\\\text{Na}^+\\\\text{(aq)} + 2\\\\text{Cl}^-\\\\text{(aq)}$$
> > 
> > 3. **Identify and cross out spectator ions:**
> >    * Sodium ions ($2\\\\text{Na}^+$) and chloride ions ($2\\\\text{Cl}^-$) are identical on both sides of the equation
> > 
> > 4. **Write the net ionic equation:**
> >    $$\\\\text{Ba}^{2+}\\\\text{(aq)} + \\\\text{SO}_4^{2-}\\\\text{(aq)} \\\\rightarrow \\\\text{BaSO}_4\\\\text{(s)}$$

> [!EXAMPLE]
> #### 📝 Worked Example 2: Spectator Ions in Precipitation
> **Question:** Write the full equation, net ionic equation, and determine the spectator ions in the reaction between aqueous potassium iodide, $\\\\text{KI(aq)}$, and aqueous silver nitrate, $\\\\text{AgNO}_3\\\\text{(aq)}$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Write the balanced molecular equation:**
> >    $$\\\\text{KI(aq)} + \\\\text{AgNO}_3\\\\text{(aq)} \\\\rightarrow \\\\text{KNO}_3\\\\text{(aq)} + \\\\text{AgI(s)}$$
> > 
> > 2. **Dissociate aqueous compounds into ions:**
> >    $$\\\\text{K}^+\\\\text{(aq)} + \\\\text{I}^-\\\\text{(aq)} + \\\\text{Ag}^+\\\\text{(aq)} + \\\\text{NO}_3^-\\\\text{(aq)} \\\\rightarrow \\\\text{K}^+\\\\text{(aq)} + \\\\text{NO}_3^-\\\\text{(aq)} + \\\\text{AgI(s)}$$
> > 
> > 3. **Identify spectator ions:**
> >    * Spectator ions are $\\\\text{K}^+$ and $\\\\text{NO}_3^-$
> > 
> > 4. **Write the net ionic equation:**
> >    $$\\\\text{Ag}^+\\\\text{(aq)} + \\\\text{I}^-\\\\text{(aq)} \\\\rightarrow \\\\text{AgI(s)}$$

> [!EXAMPLE]
> #### 📝 Worked Example 3: Acid-Carbonate Net Ionic Equation
> **Question:** Write the full equation and deduce the net ionic equation for the reaction of hydroiodic acid, $\\\\text{HI(aq)}$, with solid sodium hydrogencarbonate, $\\\\text{NaHCO}_3\\\\text{(s)}$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Write the molecular equation:**
> >    $$\\\\text{HI(aq)} + \\\\text{NaHCO}_3\\\\text{(s)} \\\\rightarrow \\\\text{NaI(aq)} + \\\\text{H}_2\\\\text{O(l)} + \\\\text{CO}_2\\\\text{(g)}$$
> > 
> > 2. **Dissociate aqueous reactants and products:**
> >    $$\\\\text{H}^+\\\\text{(aq)} + \\\\text{I}^-\\\\text{(aq)} + \\\\text{NaHCO}_3\\\\text{(s)} \\\\rightarrow \\\\text{Na}^+\\\\text{(aq)} + \\\\text{I}^-\\\\text{(aq)} + \\\\text{H}_2\\\\text{O(l)} + \\\\text{CO}_2\\\\text{(g)}$$
> > 
> > 3. **Cross out spectator ions:**
> >    * Only iodide ion ($\\\\text{I}^-$) appears identical on both sides
> > 
> > 4. **Write the net ionic equation:**
> >    $$\\\\text{H}^+\\\\text{(aq)} + \\\\text{NaHCO}_3\\\\text{(s)} \\\\rightarrow \\\\text{Na}^+\\\\text{(aq)} + \\\\text{H}_2\\\\text{O(l)} + \\\\text{CO}_2\\\\text{(g)}$$

> [!EXAMPLE]
> #### 📝 Worked Example 4: Reactions of Gases with Solutions (Limewater Test)
> **Question:** Carbon dioxide gas reacts with calcium hydroxide solution (limewater) to form water and a precipitate of calcium carbonate. Write the full equation and derive its net ionic equation.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Write the full molecular equation with state symbols:**
> >    $$\\\\text{CO}_2\\\\text{(g)} + \\\\text{Ca(OH)}_2\\\\text{(aq)} \\\\rightarrow \\\\text{CaCO}_3\\\\text{(s)} + \\\\text{H}_2\\\\text{O(l)}$$
> > 
> > 2. **Separate only soluble ionic species ($\\\\text{aq}$):**
> >    * Note: $\\\\text{CO}_2\\\\text{(g)}$ and $\\\\text{H}_2\\\\text{O(l)}$ are covalent molecules and do not split into ions.
> >    $$\\\\text{CO}_2\\\\text{(g)} + \\\\text{Ca}^{2+}\\\\text{(aq)} + 2\\\\text{OH}^-\\\\text{(aq)} \\\\rightarrow \\\\text{CaCO}_3\\\\text{(s)} + \\\\text{H}_2\\\\text{O(l)}$$
> > 
> > 3. **Evaluate spectator ions:**
> >    * No ions appear identically on both sides, so no ions are crossed out.
> >    * The ionic equation is identical to the expanded equation above.

> [!EXAMPLE]
> #### 📝 Worked Example 5: Textbook Checkpoints (Thiosulfate & Heating Ammonium Sulfate)
> **Question:** 
> 1. Sodium thiosulfate ($\\\\text{Na}_2\\\\text{S}_2\\\\text{O}_3$) solution reacts with dilute hydrochloric acid to form a precipitate of sulfur, gaseous sulfur dioxide, water, and sodium chloride solution. Write a balanced symbol equation with state symbols.
> 
> 2. Solutions of ammonium sulfate and sodium hydroxide are warmed together to form sodium sulfate solution, water, and ammonia gas. Write the simplest ionic equation for this reaction.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Part 1 (Thiosulfate Reaction):**
> >    * Molecular Equation:
> >      $$\\\\text{Na}_2\\\\text{S}_2\\\\text{O}_3\\\\text{(aq)} + 2\\\\text{HCl(aq)} \\\\rightarrow \\\\text{S(s)} + \\\\text{SO}_2\\\\text{(g)} + \\\\text{H}_2\\\\text{O(l)} + 2\\\\text{NaCl(aq)}$$
> > 
> > 2. **Part 2 (Ammonium Sulfate + Sodium Hydroxide Net Ionic):**
> >    * Molecular Equation:
> >      $$(\\\\text{NH}_4)_2\\\\text{SO}_4\\\\text{(aq)} + 2\\\\text{NaOH(aq)} \\\\rightarrow \\\\text{Na}_2\\\\text{SO}_4\\\\text{(aq)} + 2\\\\text{H}_2\\\\text{O(l)} + 2\\\\text{NH}_3\\\\text{(g)}$$
> >    * Split into ions:
> >      $$2\\\\text{NH}_4^+\\\\text{(aq)} + \\\\text{SO}_4^{2-}\\\\text{(aq)} + 2\\\\text{Na}^+\\\\text{(aq)} + 2\\\\text{OH}^-\\\\text{(aq)} \\\\rightarrow 2\\\\text{Na}^+\\\\text{(aq)} + \\\\text{SO}_4^{2-}\\\\text{(aq)} + 2\\\\text{H}_2\\\\text{O(l)} + 2\\\\text{NH}_3\\\\text{(g)}$$
> >    * Cancel spectator ions ($\\\\text{Na}^+$ and $\\\\text{SO}_4^{2-}$):
> >      $$2\\\\text{NH}_4^+\\\\text{(aq)} + 2\\\\text{OH}^-\\\\text{(aq)} \\\\rightarrow 2\\\\text{H}_2\\\\text{O(l)} + 2\\\\text{NH}_3\\\\text{(g)}$$
> >    * Simplify coefficients:
> >      $$\\\\text{NH}_4^+\\\\text{(aq)} + \\\\text{OH}^-\\\\text{(aq)} \\\\rightarrow \\\\text{H}_2\\\\text{O(l)} + \\\\text{NH}_3\\\\text{(g)}$$

> [!EXAMPLE]
> #### 📝 Worked Example 6: Acid Reactions Checkpoints (Full & Net Ionic Equations)
> **Question:** 
> 1. Write full balanced equations with state symbols for:
>    * (a) Reaction between zinc and sulfuric acid
>    * (b) Reaction between aluminium oxide and hydrochloric acid
> 2. Write the simplest net ionic equations for:
>    * (a) Reaction between zinc and hydrochloric acid
>    * (b) Reaction between magnesium carbonate and nitric acid
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Part 1(a): Zinc + Sulfuric Acid (Full Equation):**
> >    $$\\\\text{Zn(s)} + \\\\text{H}_2\\\\text{SO}_4\\\\text{(aq)} \\\\rightarrow \\\\text{ZnSO}_4\\\\text{(aq)} + \\\\text{H}_2\\\\text{(g)}$$
> > 
> > 2. **Part 1(b): Aluminium Oxide + Hydrochloric Acid (Full Equation):**
> >    $$\\\\text{Al}_2\\\\text{O}_3\\\\text{(s)} + 6\\\\text{HCl(aq)} \\\\rightarrow 2\\\\text{AlCl}_3\\\\text{(aq)} + 3\\\\text{H}_2\\\\text{O(l)}$$
> > 
> > 3. **Part 2(a): Zinc + Hydrochloric Acid (Net Ionic Equation):**
> >    * **Full equation:**
> >      $$\\\\text{Zn(s)} + 2\\\\text{HCl(aq)} \\\\rightarrow \\\\text{ZnCl}_2\\\\text{(aq)} + \\\\text{H}_2\\\\text{(g)}$$
> >    * **Dissociate ions:**
> >      $$\\\\text{Zn(s)} + 2\\\\text{H}^+\\\\text{(aq)} + 2\\\\text{Cl}^-\\\\text{(aq)} \\\\rightarrow \\\\text{Zn}^{2+}\\\\text{(aq)} + 2\\\\text{Cl}^-\\\\text{(aq)} + \\\\text{H}_2\\\\text{(g)}$$
> >    * **Net Ionic Equation:**
> >      $$\\\\text{Zn(s)} + 2\\\\text{H}^+\\\\text{(aq)} \\\\rightarrow \\\\text{Zn}^{2+}\\\\text{(aq)} + \\\\text{H}_2\\\\text{(g)}$$
> > 
> > 4. **Part 2(b): Magnesium Carbonate + Nitric Acid (Net Ionic Equation):**
> >    * **Full equation:**
> >      $$\\\\text{MgCO}_3\\\\text{(s)} + 2\\\\text{HNO}_3\\\\text{(aq)} \\\\rightarrow \\\\text{Mg(NO}_3)_2\\\\text{(aq)} + \\\\text{H}_2\\\\text{O(l)} + \\\\text{CO}_2\\\\text{(g)}$$
> >    * **Dissociate ions:**
> >      $$\\\\text{MgCO}_3\\\\text{(s)} + 2\\\\text{H}^+\\\\text{(aq)} + 2\\\\text{NO}_3^-\\\\text{(aq)} \\\\rightarrow \\\\text{Mg}^{2+}\\\\text{(aq)} + 2\\\\text{NO}_3^-\\\\text{(aq)} + \\\\text{H}_2\\\\text{O(l)} + \\\\text{CO}_2\\\\text{(g)}$$
> >    * **Net Ionic Equation:**
> >      $$\\\\text{MgCO}_3\\\\text{(s)} + 2\\\\text{H}^+\\\\text{(aq)} \\\\rightarrow \\\\text{Mg}^{2+}\\\\text{(aq)} + \\\\text{H}_2\\\\text{O(l)} + \\\\text{CO}_2\\\\text{(g)}$$
> [!BOX]
> ### 🔄 Displacement Reactions (Aqueous, Thermite & Halogens)
> A **displacement reaction** occurs when a more reactive element displaces a less reactive element from its compound. All displacement reactions are **Redox reactions**.
> 
> 1. **Metal Displacement in Aqueous Solution:**
>    * *Example:* Magnesium ribbon in blue copper(II) sulfate solution:
>      $$\\\\text{Mg(s)} + \\\\text{CuSO}_4\\\\text{(aq)} \\\\rightarrow \\\\text{Cu(s)} + \\\\text{MgSO}_4\\\\text{(aq)}$$
>    * *Observations:* Blue $\\\\text{CuSO}_4$ solution fades to colorless ($\\\\text{MgSO}_4$). Silvery Mg ribbon turns brown as copper metal deposits on it.
>    * *Net Ionic Equation:*
>      $$\\\\text{Mg(s)} + \\\\text{Cu}^{2+}\\\\text{(aq)} \\\\rightarrow \\\\text{Cu(s)} + \\\\text{Mg}^{2+}\\\\text{(aq)}$$
>    * *Redox:* Mg atoms are oxidised (lose $2e^-$) to $\\\\text{Mg}^{2+}$, while $\\\\text{Cu}^{2+}$ ions are reduced (gain $2e^-$) to $\\\\text{Cu}$.
> 
> 2. **Metal Displacement in Solid State (The Thermite Reaction):**
>    * *Industrial Use:* Joining railway rails together by producing molten iron ($\\\\text{Fe(l)}$):
>      $$2\\\\text{Al(s)} + \\\\text{Fe}_2\\\\text{O}_3\\\\text{(s)} \\\\rightarrow 2\\\\text{Fe(s)} + \\\\text{Al}_2\\\\text{O}_3\\\\text{(s)}$$
>    * *Net Ionic Equation (Molten State):*
>      $$2\\\\text{Al(l)} + 2\\\\text{Fe}^{3+}\\\\text{(l)} \\\\rightarrow 2\\\\text{Fe(l)} + 2\\\\text{Al}^{3+}\\\\text{(l)}$$
>    * *Key Feature:* Highly exothermic reaction ignited by a magnesium fuse; molten iron flows into gaps between rails to weld them.
> 
> 3. **Halogen Displacement Reactions:**
>    * A more reactive halogen displaces a less reactive halide ion from solution (e.g. Chlorine displaces Bromine from $\\\\text{KBr}$):
>      $$\\\\text{Cl}_2\\\\text{(aq)} + 2\\\\text{KBr(aq)} \\\\rightarrow \\\\text{Br}_2\\\\text{(aq)} + 2\\\\text{KCl(aq)}$$
>    * *Net Ionic Equation:*
>      $$\\\\text{Cl}_2\\\\text{(aq)} + 2\\\\text{Br}^-\\\\text{(aq)} \\\\rightarrow \\\\text{Br}_2\\\\text{(aq)} + 2\\\\text{Cl}^-\\\\text{(aq)}$$
>    * *Redox:* Bromide ions ($\\\\text{Br}^-$) are oxidised to $\\\\text{Br}_2$, and $\\\\text{Cl}_2$ is reduced to $\\\\text{Cl}^-$.

> [!EXAMPLE]
> #### 📝 Worked Example 7: Displacement Reactions Checkpoints
> **Question:** 
> 1. Iron metal reacts with aqueous silver nitrate to form silver metal and iron(II) nitrate solution. Write full, ionic, and net ionic equations with state symbols.
> 2. A mixture of zinc metal and copper(II) oxide is ignited, causing an exothermic solid-state reaction. Write full, ionic, and net ionic equations (without state symbols).
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Part 1 (Iron + Silver Nitrate in Aqueous Solution):**
> >    * **Full Equation:**
> >      $$\\\\text{Fe(s)} + 2\\\\text{AgNO}_3\\\\text{(aq)} \\\\rightarrow 2\\\\text{Ag(s)} + \\\\text{Fe(NO}_3)_2\\\\text{(aq)}$$
> >    * **Full Ionic Equation:**
> >      $$\\\\text{Fe(s)} + 2\\\\text{Ag}^+\\\\text{(aq)} + 2\\\\text{NO}_3^-\\\\text{(aq)} \\\\rightarrow 2\\\\text{Ag(s)} + \\\\text{Fe}^{2+}\\\\text{(aq)} + 2\\\\text{NO}_3^-\\\\text{(aq)}$$
> >    * **Net Ionic Equation (cancel $\\\\text{NO}_3^-$ spectator ions):**
> >      $$\\\\text{Fe(s)} + 2\\\\text{Ag}^+\\\\text{(aq)} \\\\rightarrow 2\\\\text{Ag(s)} + \\\\text{Fe}^{2+}\\\\text{(aq)}$$
> > 
> > 2. **Part 2 (Zinc + Copper(II) Oxide Solid State Reaction):**
> >    * **Full Equation:**
> >      $$\\\\text{Zn} + \\\\text{CuO} \\\\rightarrow \\\\text{Cu} + \\\\text{ZnO}$$
> >    * **Full Ionic Equation:**
> >      $$\\\\text{Zn} + \\\\text{Cu}^{2+} + \\\\text{O}^{2-} \\\\rightarrow \\\\text{Cu} + \\\\text{Zn}^{2+} + \\\\text{O}^{2-}$$
> >    * **Net Ionic Equation (cancel $\\\\text{O}^{2-}$ spectator ions):**
> >      $$\\\\text{Zn} + \\\\text{Cu}^{2+} \\\\rightarrow \\\\text{Cu} + \\\\text{Zn}^{2+}$$

> [!BOX]
> ### 🧪 Precipitation Reactions in Qualitative Analysis & Stoichiometry
> A **precipitation reaction** occurs when two soluble aqueous solutions react to form an insoluble solid precipitate.
> 
> #### 🔍 1. Qualitative Chemical Tests Using Precipitation:
> * **Carbon Dioxide ($\\\\text{CO}_2$) Test:** Bubbling $\\\\text{CO}_2\\\\text{(g)}$ through limewater ($\\\\text{Ca(OH)}_2\\\\text{(aq)}$) forms a white precipitate of calcium carbonate ($\\\\text{CaCO}_3\\\\text{(s)}$), making limewater milky/cloudy:
>   $$\\\\text{Ca(OH)}_2\\\\text{(aq)} + \\\\text{CO}_2\\\\text{(g)} \\\\rightarrow \\\\text{CaCO}_3\\\\text{(s)} + \\\\text{H}_2\\\\text{O(l)}$$
> * **Sulfate Ion ($\\\\text{SO}_4^{2-}$) Test:** Adding aqueous barium ions ($\\\\text{Ba}^{2+}$, e.g. $\\\\text{BaCl}_2$) forms a dense white precipitate of barium sulfate ($\\\\text{BaSO}_4\\\\text{(s)}$):
>   $$\\\\text{Ba}^{2+}\\\\text{(aq)} + \\\\text{SO}_4^{2-}\\\\text{(aq)} \\\\rightarrow \\\\text{BaSO}_4\\\\text{(s)}$$
> * **Halide Ions ($\\\\text{Cl}^-, \\\\text{Br}^-, \\\\text{I}^-$) Test:** Adding aqueous silver ions ($\\\\text{Ag}^+$, e.g. $\\\\text{AgNO}_3$) forms silver halide precipitates (e.g. white $\\\\text{AgCl(s)}$):
>   $$\\\\text{Ag}^+\\\\text{(aq)} + \\\\text{Cl}^-\\\\text{(aq)} \\\\rightarrow \\\\text{AgCl(s)}$$
> 
> #### 📊 2. Working Out Reaction Stoichiometry via Precipitation Experiments:
> * **Continuous Variation Experiment:** Adding increasing volumes of $1.0\\\\text{ mol dm}^{-3}$ lead(II) nitrate solution ($\\\\text{Pb(NO}_3)_2$) to test tubes containing a fixed $5.0\\\\text{ cm}^3$ volume of $1.0\\\\text{ mol dm}^{-3}$ potassium iodide ($\\\\text{KI}$).
> * **Finding Complete Reaction (Tube 5):** The depth of yellow lead(II) iodide precipitate ($\\\\text{PbI}_2\\\\text{(s)}$) increases up to Tube 5 ($2.5\\\\text{ cm}^3$ of $\\\\text{Pb(NO}_3)_2$, depth $6.0\\\\text{ cm}$) and stays constant in Tubes 6 and 7.
> * **Determining Mole Ratio:**
>   * $n(\\\\text{KI}) = 0.0050\\\\text{ dm}^3 \\\\times 1.0\\\\text{ mol dm}^{-3} = 0.0050\\\\text{ mol}$
>   * $n(\\\\text{Pb(NO}_3)_2) = 0.0025\\\\text{ dm}^3 \\\\times 1.0\\\\text{ mol dm}^{-3} = 0.0025\\\\text{ mol}$
>   * Mole ratio $\\\\text{Pb(NO}_3)_2 : \\\\text{KI} = 1 : 2$, deriving the net ionic equation:
>     $$\\\\text{Pb}^{2+}\\\\text{(aq)} + 2\\\\text{I}^-\\\\text{(aq)} \\\\rightarrow \\\\text{PbI}_2\\\\text{(s)}$$

> [!EXAMPLE]
> #### 📝 Worked Example 8: Precipitation Tests & Continuous Variation Stoichiometry
> **Question:** 
> 1. Write the simplest net ionic equations (with state symbols) for:
>    * (a) The chemical test for sulfate ions using barium chloride
>    * (b) The chemical test for chloride ions using silver nitrate
> 2. In the continuous variation precipitation experiment (Fig B), Tube 7 contains $5.0\\\\text{ cm}^3$ of $1.0\\\\text{ mol dm}^{-3}$ $\\\\text{KI}$ and $3.5\\\\text{ cm}^3$ of $1.0\\\\text{ mol dm}^{-3}$ $\\\\text{Pb(NO}_3)_2$. Calculate the moles of each reactant added, the moles of $\\\\text{PbI}_2\\\\text{(s)}$ precipitate formed, and the moles of excess reactant remaining.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Part 1(a): Sulfate Test Net Ionic Equation:**
> >    $$\\\\text{Ba}^{2+}\\\\text{(aq)} + \\\\text{SO}_4^{2-}\\\\text{(aq)} \\\\rightarrow \\\\text{BaSO}_4\\\\text{(s)}$$
> > 
> > 2. **Part 1(b): Chloride Test Net Ionic Equation:**
> >    $$\\\\text{Ag}^+\\\\text{(aq)} + \\\\text{Cl}^-\\\\text{(aq)} \\\\rightarrow \\\\text{AgCl(s)}$$
> > 
> > 3. **Part 2: Tube 7 Quantitative Calculations:**
> >    * **Moles of reactants added:**
> >      $$n(\\\\text{KI}) = \\\\frac{5.0}{1000} \\\\times 1.0 = 0.0050\\\\text{ mol}$$
> >      $$n(\\\\text{Pb(NO}_3)_2) = \\\\frac{3.5}{1000} \\\\times 1.0 = 0.0035\\\\text{ mol}$$
> >    * **Determine limiting reagent and precipitate formed:**
> >      * From equation $\\\\text{Pb}^{2+} + 2\\\\text{I}^- \\\\rightarrow \\\\text{PbI}_2$, $0.0050\\\\text{ mol}$ of $\\\\text{I}^-$ requires exactly $0.0025\\\\text{ mol}$ of $\\\\text{Pb}^{2+}$.
> >      * Therefore, $\\\\text{KI}$ is the limiting reagent and completely reacts.
> >      * Moles of $\\\\text{PbI}_2\\\\text{(s)}$ formed = $0.0025\\\\text{ mol}$
> >    * **Moles of excess reactant remaining ($\\\\text{Pb(NO}_3)_2$):**
> >      $$\\\\text{Excess } n(\\\\text{Pb(NO}_3)_2) = 0.0035\\\\text{ mol} - 0.0025\\\\text{ mol} = 0.0010\\\\text{ mol}$$
`,
        keyPoints: [
            'State symbols indicate physical state: (s), (l), (g), (aq). Water is pure liquid (l) and NEVER (aq).',
            'Precipitation tests: Ba²⁺ tests for SO₄²⁻ (white BaSO₄), Ag⁺ tests for halides (white AgCl), limewater for CO₂.',
            'Continuous variation precipitation experiments determine reacting mole ratios from maximum precipitate height.',
            'Displacement reactions are Redox processes where a more reactive element displaces a less reactive element.',
            'Only split soluble (aq) ionic species when writing net ionic equations.'
        ],
        equationVisualizer: {
            reactants: [['CoCl₂ (blue)', '#3b82f6'], ['6H₂O', '#38bdf8']],
            products: [['CoCl₂·6H₂O (pink)', '#ec4899']],
            description: "Blue anhydrous cobalt(II) chloride reacts reversibly with water to form pink hydrated cobalt(II) chloride."
        }
    },
    {
        id: 'empirical-formulae-20260106',
        title: 'Empirical Formulae',
        type: 'text',
        content: `
> [!BOX]
> ### 🧬 Empirical & Molecular Formulae
> * **Empirical Formula:** The simplest whole-number ratio in which atoms combine to form a compound.
> * **Steps to Determine the Empirical Formula:**
>    * **Step 1:** Find the masses of each element that combine (in grams or percentage) by experiment.
>    * **Step 2:** Change masses into moles by dividing each mass by its relative atomic mass ($Ar$).
>    * **Step 3:** Calculate the ratio by dividing the number of moles of each element by the smallest mole value obtained.
>    * **Step 4:** If necessary, convert decimals into whole numbers to write the empirical formula subscripts.

> [!BOX]
> ### 📋 Molar Calculation Template Table
> Use this template structure to organize your calculations:

| Step / Property | Element A | Element B |
| :--- | :---: | :---: |
| Mass or % | $m_A$ or % of A | $m_B$ or % of B |
| Relative Atomic Mass ($Ar$) | $Ar(A)$ | $Ar(B)$ |
| Moles ($n = \\text{mass}/Ar$) | $n_A$ | $n_B$ |
| Ratio (divide by smallest) | Ratio $A$ | Ratio $B$ |
| Simplest Whole Number | Integer $A$ | Integer $B$ |

> [!BOX]
> ### 🧬 Molecular Formula Definition & Steps
> * **Molecular Formula:** The actual number of atoms of each element in a molecule of a compound (which is a multiplier version of the empirical formula).
> * **Formula:** $\\text{Molecular Formula} = (\\text{Empirical Formula}) \\times y$
> * **Steps to Determine the Molecular Formula:**
>    * **Step 1:** Determine the empirical formula of the compound.
>    * **Step 2:** Calculate the empirical formula mass ($Mr$ for EF).
>    * **Step 3:** Divide the relative molecular mass ($Mr$) of the compound by the empirical formula mass ($Mr$ of EF) to find the multiplier $y$


> [!EXAMPLE]
> #### 📝 Worked Example 1: Empirical & Molecular Formula of Compound X (Case 1)
> **Question:** Compound $X$ contains $54.54\\%$ carbon, $9.09\\%$ hydrogen, and $36.37\\%$ oxygen by mass, with a relative molecular mass of $88$. Determine both its empirical and molecular formulas.  
> *(Relative atomic masses: $\\text{C}=12.0, \\text{H}=1.0, \\text{O}=16.0$)*
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate Moles ($n$):**
> >    * $\\text{C} = \\frac{54.54}{12.0} = 4.545\\text{ mol}$
> >    * $\\text{H} = \\frac{9.09}{1.0} = 9.090\\text{ mol}$
> >    * $\\text{O} = \\frac{36.37}{16.0} = 2.273\\text{ mol}$
> > 2. **Find Molar Ratio (divide by smallest value $2.273$):**
> >    * $\\text{C} = \\frac{4.545}{2.273} = 2$
> >    * $\\text{H} = \\frac{9.090}{2.273} = 4$
> >    * $\\text{O} = \\frac{2.273}{2.273} = 1$
> > 3. **Formulate Empirical Formula:** $\\text{C}_2\\text{H}_4\\text{O}$
> > 4. **Calculate Empirical Formula Mass ($Mr$ of EF):**
> >    * $Mr(\\text{C}_2\\text{H}_4\\text{O}) = (2 \\times 12.0) + (4 \\times 1.0) + 16.0 = 44.0$
> > 5. **Calculate Multiplier ($y$):**
> >    * $y = \\frac{88}{44.0} = 2$
> > 6. **Determine Molecular Formula:**
> >    * $(\\text{C}_2\\text{H}_4\\text{O}) \\times 2 = \\text{C}_4\\text{H}_8\\text{O}_2$

> [!EXAMPLE]
> #### 📝 Worked Example 2: Empirical & Molecular Formula of Compound X (Case 2)
> **Question:** Compound $X$ contains $55.85\\%$ carbon, $6.97\\%$ hydrogen, and $37.18\\%$ oxygen by mass, with a relative molecular mass of $86$. Determine both its empirical and molecular formulas.  
> *(Relative atomic masses: $\\text{C}=12.0, \\text{H}=1.0, \\text{O}=16.0$)*
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate Moles ($n$):**
> >    * $\\text{C} = \\frac{55.85}{12.0} = 4.654\\text{ mol}$
> >    * $\\text{H} = \\frac{6.97}{1.0} = 6.970\\text{ mol}$
> >    * $\\text{O} = \\frac{37.18}{16.0} = 2.324\\text{ mol}$
> > 2. **Find Molar Ratio (divide by smallest value $2.324$):**
> >    * $\\text{C} = \\frac{4.654}{2.324} = 2$
> >    * $\\text{H} = \\frac{6.970}{2.324} = 3$
> >    * $\\text{O} = \\frac{2.324}{2.324} = 1$
> > 3. **Formulate Empirical Formula:** $\\text{C}_2\\text{H}_3\\text{O}$
> > 4. **Calculate Empirical Formula Mass ($Mr$ of EF):**
> >    * $Mr(\\text{C}_2\\text{H}_3\\text{O}) = (2 \\times 12.0) + (3 \\times 1.0) + 16.0 = 43.0$
> > 5. **Calculate Multiplier ($y$):**
> >    * $y = \\frac{86}{43.0} = 2$
> > 6. **Determine Molecular Formula:**
> >    * $(\\text{C}_2\\text{H}_3\\text{O}) \\times 2 = \\text{C}_4\\text{H}_6\\text{O}_2$

> [!EXAMPLE]
> #### 📝 Worked Example 3: Empirical & Molecular Formula of Potassium Iodate (Case 3)
> **Question:** Compound $X$ contains $18.2\\%$ K, $59.4\\%$ I, and the rest is O, with a relative formula mass of $214$. Determine both its empirical and molecular formulas.  
> *(Relative atomic masses: $\\text{K}=39.1, \\text{I}=126.9, \\text{O}=16.0$)*
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Find Oxygen Mass Percentage:**
> >    * $\%\\text{ O} = 100\\% - (18.2\\% + 59.4\\%) = 22.4\\%$
> > 2. **Calculate Moles ($n$):**
> >    * $\\text{K} = \\frac{18.2}{39.1} \\approx 0.465\\text{ mol}$
> >    * $\\text{I} = \\frac{59.4}{126.9} \\approx 0.468\\text{ mol}$
> >    * $\\text{O} = \\frac{22.4}{16.0} = 1.400\\text{ mol}$
> > 3. **Find Molar Ratio (divide by smallest value $0.465$):**
> >    * $\\text{K} = \\frac{0.465}{0.465} = 1$
> >    * $\\text{I} = \\frac{0.468}{0.465} \\approx 1$
> >    * $\\text{O} = \\frac{1.400}{0.465} \\approx 3$
> > 4. **Formulate Empirical Formula:** $\\text{KIO}_3$
> > 5. **Calculate Empirical Formula Mass ($Mr$ of EF):**
> >    * $Mr(\\text{KIO}_3) = 39.1 + 126.9 + (3 \\times 16.0) = 214$
> > 6. **Calculate Multiplier ($y$):**
> >    * $y = \\frac{214}{214} = 1$
> > 7. **Determine Molecular Formula:**
> >    * $(\\text{KIO}_3) \\times 1 = \\text{KIO}_3$

> [!EXAMPLE]
> #### 📝 Worked Example 4: Determining Molecular Formula from Empirical Formula and Mr
> **Question:** A compound has the empirical formula $\\text{CH}_2\\text{O}$ and a relative molecular mass $Mr$ of $180$. What is the molecular formula of this compound?  
> *(Given relative atomic masses: $\\text{C}=12.0, \\text{H}=1.0, \\text{O}=16.0$)*
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate the empirical formula mass ($Mr$ of EF) for $\\text{CH}_2\\text{O}$:**
> >    $$Mr = 12.0 + (2 \\times 1.0) + 16.0 = 30.0$$
> > 
> > 2. **Calculate the multiplier ratio ($y$):**
> >    $$y = \\frac{\\text{Relative Molecular Mass of Compound}}{\\text{Empirical Formula Mass}}$$
> >    $$y = \\frac{180}{30.0} = 6$$
> > 
> > 3. **Multiply the empirical formula subscripts by $y$:**
> >    $$\text{Molecular Formula} = (\text{CH}_2\text{O}) \times 6 = \text{C}_6\text{H}_{12}\text{O}_6$$

> [!BOX]
> ### 🧪 Copper Oxide Reduction Experiment & Constant Mass
> A classic experimental method for determining empirical formulas involves reducing copper oxide to pure copper metal in a tube heated under a stream of hydrogen (or natural gas):
> 
> $$\text{CuO(s)} + \text{H}_2\text{(g)} \rightarrow \text{Cu(s)} + \text{H}_2\text{O(g)}$$
> 
> * **Finding Oxygen Mass:** $m(\text{O}) = m(\text{Copper oxide sample}) - m(\text{Recovered Copper metal})$
> * **Heating to Constant Mass:** The solid copper product is repeatedly heated, cooled, and re-weighed until two consecutive weighings are identical. This guarantees that the reduction reaction was 100% complete.

> [!BOX]
> ### 🧮 Empirical Ratios & Fractional Multipliers Table
> When mole ratios yield decimal values, multiply all numbers in the ratio by the appropriate integer:
> 
> | Calculated Ratio | Decimal Fraction | Multiplier | Final Whole-Number Ratio |
> | :---: | :---: | :---: | :---: |
> | 1 : 1.25 | ¼ | × 4 | 4 : 5 |
> | 1 : 1.33 | ⅓ | × 3 | 3 : 4 |
> | 1 : 1.50 | ½ | × 2 | 2 : 3 |
> | 1 : 1.66 | ⅔ | × 3 | 3 : 5 |

> [!EXAMPLE]
> #### 📝 Worked Example 5: Organic Combustion Analysis Checkpoint ($\text{C}_2\text{H}_4\text{O}$)
> **Question:** Complete combustion of a $2.16\text{ g}$ sample of an organic compound containing carbon, hydrogen, and oxygen produced $4.33\text{ g}$ of carbon dioxide ($\text{CO}_2$) and $1.77\text{ g}$ of water ($\text{H}_2\text{O}$). Calculate the empirical formula of the compound.  
> *(Relative atomic masses: $\text{C}=12.0, \text{H}=1.0, \text{O}=16.0$)*
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate the mass of Carbon ($m_{\text{C}}$) in the sample:**
> >    $$m(\text{C}) = 4.33\text{ g} \times \left(\frac{12.0}{44.0}\right) = 1.1809\text{ g}$$
> > 
> > 2. **Calculate the mass of Hydrogen ($m_{\text{H}}$) in the sample:**
> >    $$m(\text{H}) = 1.77\text{ g} \times \left(\frac{2.0}{18.0}\right) = 0.1967\text{ g}$$
> > 
> > 3. **Calculate the mass of Oxygen ($m_{\text{O}}$) by subtraction:**
> >    $$m(\text{O}) = 2.16\text{ g} - (1.1809 + 0.1967)\text{ g} = 0.7824\text{ g}$$
> > 
> > 4. **Calculate the moles ($n$) of each element:**
> >    * $n(\text{C}) = \frac{1.1809}{12.0} = 0.09841\text{ mol}$
> >    * $n(\text{H}) = \frac{0.1967}{1.0} = 0.1967\text{ mol}$
> >    * $n(\text{O}) = \frac{0.7824}{16.0} = 0.04890\text{ mol}$
> > 
> > 5. **Find simplest whole-number ratio (divide by $0.04890$):**
> >    * $\text{C} = \frac{0.09841}{0.04890} = 2$
> >    * $\text{H} = \frac{0.1967}{0.04890} = 4$
> >    * $\text{O} = \frac{0.04890}{0.04890} = 1$
> > 
> > 6. **Empirical Formula:** **$\text{C}_2\text{H}_4\text{O}$**

> [!EXAMPLE]
> #### 📝 Worked Example 6: Calcium Nitrate Composition Checkpoint ($\text{Ca(NO}_3)_2$)
> **Question:** A hydrated salt sample has the percentage composition by mass: $\text{Ca} = 24.4\%$, $\text{N} = 17.1\%$, and $\text{O} = 58.5\%$. Determine its empirical formula.  
> *(Relative atomic masses: $\text{Ca}=40.1, \text{N}=14.0, \text{O}=16.0$)*
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate moles of each element in a $100\text{ g}$ sample:**
> >    * $n(\text{Ca}) = \frac{24.4}{40.1} = 0.6085\text{ mol}$
> >    * $n(\text{N}) = \frac{17.1}{14.0} = 1.2214\text{ mol}$
> >    * $n(\text{O}) = \frac{58.5}{16.0} = 3.6563\text{ mol}$
> > 
> > 2. **Divide by the smallest mole value ($0.6085$):**
> >    * $\text{Ca} = \frac{0.6085}{0.6085} = 1$
> >    * $\text{N} = \frac{1.2214}{0.6085} = 2$
> >    * $\text{O} = \frac{3.6563}{0.6085} = 6$
> > 
> > 3. **Empirical Formula:** **$\text{Ca(NO}_3)_2$** (Calcium nitrate)
`,
        keyPoints: [
            'Empirical formula is the simplified ratio.',
            'Molecular formula requires the total molar mass of the compound.'
        ],
        equationVisualizer: {
            reactants: [['C', '#f59e0b'], ['O₂', '#3b82f6']],
            products: [['CO₂', '#ef4444']],
            description: "1 mole of Carbon (C) reacts with 1 mole of Oxygen gas (O₂) to produce 1 mole of Carbon Dioxide (CO₂)."
        }
    },
    {
        id: 'acid-reactions-20260106',
        title: 'Reactions of Acids & Displacement',
        type: 'text',
        content: `
> [!BOX]
> ### ⚔️ Displacement Reactions
> A **displacement reaction** occurs when a more reactive element displaces a less reactive element from its chemical compounds.
> 
> * **Example:** Metals higher in the reactivity series displace hydrogen or copper from solutions.

> [!BOX]
> ### 🧪 Reactions of Acids
> Acids participate in highly exothermic reactions with various bases and metals:
> 
> 1. **Active Metals (Displacement & Redox):**
>    $$\\text{Active Metal(s)} + \\text{Acid(aq)} \\rightarrow \\text{Salt(aq)} + \\text{Hydrogen(g)}$$
>    * *Condition:* The metal must be more reactive than hydrogen (e.g., Magnesium).
>    * *Equation:* $\\text{Mg(s)} + \\text{H}_2\\text{SO}_4\\text{(aq)} \\rightarrow \\text{MgSO}_4\\text{(aq)} + \\text{H}_2\\text{(g)}$
> 
> 2. **Metal Oxides & Hydroxides (Neutralization):**
>    $$\\text{Metal Oxide/Hydroxide(s)} + \\text{Acid(aq)} \\rightarrow \\text{Salt(aq)} + \\text{Water(l)}$$
>    * *Condition:* Useful for unreactive metals less reactive than hydrogen (e.g., Copper).
>    * *Equation:* $\\text{CuO(s)} + \\text{H}_2\\text{SO}_4\\text{(aq)} \\rightarrow \\text{CuSO}_4\\text{(aq)} + \\text{H}_2\\text{O(l)}$
> 
> 3. **Bases & Alkalis (Neutralization):**
>    $$\\text{Soluble Base(aq)} + \\text{Acid(aq)} \\rightarrow \\text{Salt(aq)} + \\text{Water(l)}$$
>    * *Equation:* $\\text{NaOH(aq)} + \\text{HCl(aq)} \\rightarrow \\text{NaCl(aq)} + \\text{H}_2\\text{O(l)}$
>    * *Net Ionic Equation:* $\\text{H}^+\\text{(aq)} + \\text{OH}^-\\text{(aq)} \\rightarrow \\text{H}_2\\text{O(l)}$
>    * *Ammonia Reaction:* $2\\text{NH}_3\\text{(aq)} + \\text{H}_2\\text{SO}_4\\text{(aq)} \\rightarrow \\text{(NH}_4)_2\\text{SO}_4\\text{(aq)}$
> 
> 4. **Carbonates (Neutralization):**
>    $$\\text{Metal Carbonate(s)} + \\text{Acid(aq)} \\rightarrow \\text{Salt(aq)} + \\text{Water(l)} + \\text{Carbon Dioxide(g)}$$
>    * *Equation:* $\\text{CaCO}_3\\text{(s)} + 2\\text{HCl(aq)} \\rightarrow \\text{CaCl}_2\\text{(aq)} + \\text{H}_2\\text{O(l)} + \\text{CO}_2\\text{(g)}$
>    * *Gas Test:* Produced $\\text{CO}_2$ gas turns limewater cloudy/milky.

> [!BOX]
> ### ❄️ Precipitation & Double Salt Preparation
> * **Precipitation reaction:** A reaction producing an insoluble solid (precipitate) when two aqueous solutions are mixed.
> * **Double Salt Preparation:** Preparing compounds containing more than one simple salt in a combined structure, such as ammonium iron(II) sulfate:
>   $$\\text{Fe(s)} + 2\\text{NH}_3\\text{(aq)} + 2\\text{H}_2\\text{SO}_4\\text{(aq)} \\rightarrow \\text{(NH}_4)_2\\text{Fe(SO}_4)_2\\text{(aq)} + \\text{H}_2\\text{(g)}$$

> [!BOX]
> ### 📋 Rules of Salt Solubility
> It is essential to memorize these solubility rules to predict precipitation reactions:

| Soluble Salts | Insoluble Salts |
| :--- | :--- |
| All Sodium to Cesium salts ($\\text{Na}^+$ - $\\text{Cs}^+$), Ammonium salts ($\\text{NH}_4^+$) | None |
| All Nitrates ($\\text{NO}_3^-$) and Ethanoates ($\\text{CH}_3\\text{COO}^-$) | None |
| Most Halides ($\\text{Cl}^-$, $\\text{Br}^-$, $\\text{I}^-$) | Silver halides ($\\text{Ag}^+$), Lead halides ($\\text{Pb}^{2+}$), Mercury halides ($\\text{Hg}^+$) |
| Most Sulfates ($\\text{SO}_4^{2-}$) | Calcium to Barium sulfates ($\\text{Ca}^{2+}$ - $\\text{Ba}^{2+}$), Lead sulfate ($\\text{Pb}^{2+}$) |
| Sodium, Potassium, and Ammonium carbonates ($\\text{CO}_3^{2-}$), Sulfides ($\\text{S}^{2-}$) | Most other Carbonates and Sulfides |
| Sodium to Cesium ($\\text{Na}^+$ - $\\text{Cs}^+$), Ammonium ($\\text{NH}_4^+$), Calcium to Barium ($\\text{Ca}^{2+}$ - $\\text{Ba}^{2+}$) hydroxides | Most other Hydroxides |
| Sodium to Cesium ($\\text{Na}^+$ - $\\text{Cs}^+$), Ammonium ($\\text{NH}_4^+$), Strontium to Barium ($\\text{Sr}^{2+}$ - $\\text{Ba}^{2+}$) oxides | Most other Oxides |

> [!EXAMPLE]
> #### 📝 Worked Example 1: Predicting Displacement Reactions
> **Question:** Deduce which of the following mixtures will result in a displacement reaction taking place, and write the full balanced symbol equation for any reaction that occurs:
> 1. $\\text{Cu(s)} + \\text{H}_2\\text{SO}_4\\text{(aq)}$
> 2. $\\text{Fe(s)} + \\text{ZnSO}_4\\text{(aq)}$
> 3. $\\text{Zn(s)} + \\text{Pb(NO}_3)_2\\text{(aq)}$
> 4. $\\text{Ag(s)} + \\text{HCl(aq)}$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Analyze mixture 1 ($\\text{Cu} + \\text{H}_2\\text{SO}_4$):**
> >    * Copper is less reactive than hydrogen
> >    * No reaction occurs
> > 
> > 2. **Analyze mixture 2 ($\\text{Fe} + \\text{ZnSO}_4$):**
> >    * Iron is less reactive than zinc
> >    * No reaction occurs
> > 
> > 3. **Analyze mixture 3 ($\\text{Zn} + \\text{Pb(NO}_3)_2$):**
> >    * Zinc is more reactive than lead, so zinc displaces lead
> >    * Full equation: $\\text{Zn(s)} + \\text{Pb(NO}_3)_2\\text{(aq)} \\rightarrow \\text{Zn(NO}_3)_2\\text{(aq)} + \\text{Pb(s)}$
> > 
> > 4. **Analyze mixture 4 ($\\text{Ag} + \\text{HCl}$):**
> >    * Silver is less reactive than hydrogen
> >    * No reaction occurs

> [!EXAMPLE]
> #### 📝 Worked Example 2: Net Ionic Equation of an Acid-Metal Reaction
> **Question:** Write the full chemical equation and deduce the net ionic equation for the reaction of zinc metal with dilute sulfuric acid, identifying any spectator ions
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Write the balanced molecular equation:**
> >    $$\\text{Zn(s)} + \\text{H}_2\\text{SO}_4\\text{(aq)} \\rightarrow \\text{ZnSO}_4\\text{(aq)} + \\text{H}_2\\text{(g)}$$
> > 
> > 2. **Dissociate soluble aqueous ionic compounds (aq):**
> >    $$\\text{Zn(s)} + 2\\text{H}^+\\text{(aq)} + \\text{SO}_4^{2-}\\text{(aq)} \\rightarrow \\text{Zn}^{2+}\\text{(aq)} + \\text{SO}_4^{2-}\\text{(aq)} + \\text{H}_2\\text{(g)}$$
> > 
> > 3. **Identify spectator ions:**
> >    * Sulfate ions ($\\text{SO}_4^{2-}$) are identical in charge and state on both sides
> >    * Spectator ion: $\\text{SO}_4^{2-}$
> > 
> > 4. **Write the net ionic equation:**
> >    $$\\text{Zn(s)} + 2\\text{H}^+\\text{(aq)} \\rightarrow \\text{Zn}^{2+}\\text{(aq)} + \\text{H}_2\\text{(g)}$$

> [!EXAMPLE]
> #### 📝 Worked Example 3: Net Ionic Equation of an Acid-Thiosulfate Reaction
> **Question:** Write the full chemical equation and deduce the net ionic equation for the reaction of aqueous sodium thiosulfate, $\\text{Na}_2\\text{S}_2\\text{O}_3\\text{(aq)}$, with dilute hydrochloric acid, $\\text{HCl(aq)}$, to form a yellow precipitate of sulfur, sulfur dioxide gas, and sodium chloride solution
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Write the balanced molecular equation:**
> >    $$\\text{Na}_2\\text{S}_2\\text{O}_3\\text{(aq)} + 2\\text{HCl(aq)} \\rightarrow 2\\text{NaCl(aq)} + \\text{S(s)} + \\text{SO}_2\\text{(g)} + \\text{H}_2\\text{O(l)}$$
> > 
> > 2. **Dissociate soluble aqueous ionic compounds (aq):**
> >    $$2\\text{Na}^+\\text{(aq)} + \\text{S}_2\\text{O}_3^{2-}\\text{(aq)} + 2\\text{H}^+\\text{(aq)} + 2\\text{Cl}^-\\text{(aq)} \\rightarrow 2\\text{Na}^+\\text{(aq)} + 2\\text{Cl}^-\\text{(aq)} + \\text{S(s)} + \\text{SO}_2\\text{(g)} + \\text{H}_2\\text{O(l)}$$
> > 
> > 3. **Identify and cross out spectator ions:**
> >    * Sodium ions ($2\\text{Na}^+$) and chloride ions ($2\\text{Cl}^-$) are identical on both sides
> >    * Spectator ions: $\\text{Na}^+$ and $\\text{Cl}^-$
> > 
> > 4. **Write the net ionic equation:**
> >    $$\\text{S}_2\\text{O}_3^{2-}\\text{(aq)} + 2\\text{H}^+\\text{(aq)} \\rightarrow \\text{S(s)} + \\text{SO}_2\\text{(g)} + \\text{H}_2\\text{O(l)}$$

> [!EXAMPLE]
> #### 📝 Worked Example 4: Neutralization of an Insoluble Base
> **Question:** Write the full molecular equation and deduce the net ionic equation for the reaction of solid copper(II) oxide, $\\text{CuO(s)}$, with dilute sulfuric acid, $\\text{H}_2\\text{SO}_4\\text{(aq)}$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Write the balanced molecular equation:**
> >    $$\\text{CuO(s)} + \\text{H}_2\\text{SO}_4\\text{(aq)} \\rightarrow \\text{CuSO}_4\\text{(aq)} + \\text{H}_2\\text{O(l)}$$
> > 
> > 2. **Dissociate only soluble aqueous ionic compounds:**
> >    * Note: $\\text{CuO(s)}$ is solid and $\\text{H}_2\\text{O(l)}$ is liquid, so do not split them
> >    $$\\text{CuO(s)} + 2\\text{H}^+\\text{(aq)} + \\text{SO}_4^{2-}\\text{(aq)} \\rightarrow \\text{Cu}^{2+}\\text{(aq)} + \\text{SO}_4^{2-}\\text{(aq)} + \\text{H}_2\\text{O(l)}$$
> > 
> > 3. **Identify and cross out spectator ions:**
> >    * Sulfate ions ($\\text{SO}_4^{2-}$) are identical on both sides
> >    * Spectator ion: $\\text{SO}_4^{2-}$
> > 
> > 4. **Write the net ionic equation:**
> >    $$\\text{CuO(s)} + 2\\text{H}^+\\text{(aq)} \\rightarrow \\text{Cu}^{2+}\\text{(aq)} + \\text{H}_2\\text{O(l)}$$

> [!EXAMPLE]
> #### 📝 Worked Example 5: Net Ionic Equation of an Acid-Alkali Neutralization
> **Question:** Write the full chemical equation and deduce the net ionic equation for the reaction between aqueous sodium hydroxide, $\\text{NaOH(aq)}$, and dilute hydrochloric acid, $\\text{HCl(aq)}$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Write the balanced molecular equation:**
> >    $$\\text{NaOH(aq)} + \\text{HCl(aq)} \\rightarrow \\text{NaCl(aq)} + \\text{H}_2\\text{O(l)}$$
> > 
> > 2. **Dissociate soluble aqueous ionic compounds (aq):**
> >    $$\\text{Na}^+\\text{(aq)} + \\text{OH}^-\\text{(aq)} + \\text{H}^+\\text{(aq)} + \\text{Cl}^-\\text{(aq)} \\rightarrow \\text{Na}^+\\text{(aq)} + \\text{Cl}^-\\text{(aq)} + \\text{H}_2\\text{O(l)}$$
> > 
> > 3. **Identify spectator ions:**
> >    * Sodium ions ($\\text{Na}^+$) and chloride ions ($\\text{Cl}^-$) are spectator ions
> >    * Spectator ions: $\\text{Na}^+$ and $\\text{Cl}^-$
> > 
> > 4. **Write the net ionic equation:**
> >    $$\\text{H}^+\\text{(aq)} + \\text{OH}^-\\text{(aq)} \\rightarrow \\text{H}_2\\text{O(l)}$$
`,
        keyPoints: [
            'Displacement requires the reactant metal to be more reactive than the metal/hydrogen in solution.',
            'Acids react with carbonates to produce carbon dioxide gas, tested with limewater.',
            'Precipitation reactions occur when positive and negative ions of soluble salts combine to form an insoluble lattice.'
        ],
        equationVisualizer: {
            reactants: [['Mg(s)', '#f59e0b'], ['H₂SO₄(aq)', '#ef4444']],
            products: [['MgSO₄(aq)', '#10b981'], ['H₂(g)', '#38bdf8']],
            description: "Magnesium metal reacts exothermically with sulfuric acid to displace hydrogen gas and form magnesium sulfate."
        }
    },
    {
        id: 'salt-preparation-20260106',
        title: 'Preparation of Salts',
        type: 'text',
        content: `
> [!BOX]
> ### 🧪 Soluble Salt Preparation
> The method chosen to prepare a soluble salt depends on whether the starting base is soluble (alkali) or insoluble.
> 
> #### 1. Excess Method (Method A): Used when starting with an insoluble reactant
> Add excess of pure metal (used for moderately reactive metals like $\\text{Mg}$, $\\text{Zn}$, $\\text{Fe}$ but excluding dangerous Group 1 metals), metal oxide, hydroxide, or carbonate:
> * **Step A:** Measure a suitable volume of acid into a beaker.
> * **Step B:** Add the metal, metal oxide, or carbonate in small portions while warming and stirring until fizzing stops and the solid stops disappearing (meaning the acid is fully neutralized and the base is in excess).
>   * *Example:* Adding black copper(II) oxide ($\\text{CuO}$) to dilute sulfuric acid. The solution turns blue as copper(II) sulfate ($\\text{CuSO}_4$) forms.
> * **Step C:** Filter the mixture to remove the excess unreacted solid.
> * **Step D:** Heat the filtrate (remaining solution) in an evaporating basin to the crystallization point (saturated solution).
> * **Step E:** Cover with filter paper and leave to cool slowly, allowing crystals to form.
> * **Step F:** Filter the crystals and dry them with filter paper or in a warm oven.
> 
> #### 2. Titration Method (Method B): Used when starting with a soluble alkali
> Since both reactants (acid and alkali) are clear liquids, we cannot visually see when the reaction is complete without an indicator:
> * **Step A:** Use a pipette to accurately measure $25.0\\text{ cm}^3$ of the alkali (e.g., $\\text{NaOH}$) into a conical flask.
> * **Step B:** Add a few drops of indicator (e.g., thymolphthalein which turns blue in base).
> * **Step C:** Fill a burette with the acid (e.g., $\\text{HCl}$) and record the initial reading.
> * **Step D:** Add the acid slowly to the conical flask while swirling until the indicator reaches its endpoint (colorless for thymolphthalein). Record the final volume.
> * **Step E:** Repeat the titration several times until concordant results are obtained (at least two results within $0.2\\text{ cm}^3$ or less).
> * **Step F:** Repeat the procedure without the indicator, mixing the exact volumes of acid and alkali calculated from the concordant runs.
> * **Step G:** Heat the resulting neutral solution to the crystallization point, leave to cool, filter the crystals, and dry them.

> [!BOX]
> ### 🧪 Insoluble Salt Preparation (Precipitation)
> Insoluble salts are prepared by reacting two soluble salt solutions together, producing a solid precipitate.
> 
> #### Experimental Procedure (for example, preparing Barium Sulfate):
> * **Step 1:** Prepare solutions of two soluble salts (e.g., barium chloride $\\text{BaCl}_2\\text{(aq)}$ and magnesium sulfate $\\text{MgSO}_4\\text{(aq)}$).
> * **Step 2:** Mix the two solutions together. A dense white precipitate of barium sulfate forms instantly.
> * **Step 3:** Filter the mixture. The insoluble barium sulfate precipitate is trapped on the filter paper.
> * **Step 4:** Rinse the residue (the precipitate) on the filter paper thoroughly with distilled water to wash away spectator ions.
> * **Step 5:** Place the clean precipitate in a warm oven to dry.
> 
> #### Net Ionic Equations of Common Precipitation Reactions:
> * **Barium Sulfate:**
>   $$\\text{Ba}^{2+}\\text{(aq)} + \\text{SO}_4^{2-}\\text{(aq)} \\rightarrow \\text{BaSO}_4\\text{(s)} \\quad \\text{(white precipitate)}$$
> * **Silver Chloride:**
>   $$\\text{Ag}^+\\text{(aq)} + \\text{Cl}^-\\text{(aq)} \\rightarrow \\text{AgCl(s)} \\quad \\text{(white precipitate)}$$
> * **Lead(II) Iodide:**
>   $$\\text{Pb}^{2+}\\text{(aq)} + 2\\text{I}^-\\text{(aq)} \\rightarrow \\text{PbI}_2\\text{(s)} \\quad \\text{(yellow precipitate)}$$


> [!EXAMPLE]
> #### 📝 Worked Example 1: Reason for Excess Reactant in Salt Preparation
> **Question:** In the preparation of hydrated copper(II) sulfate crystals, an excess of copper(II) oxide is added to dilute sulfuric acid. Explain the reason for adding the copper(II) oxide in excess.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the limiting and excess reactants:**
> >    * Copper(II) oxide is added in excess, meaning sulfuric acid is the limiting reactant
> > 
> > 2. **Determine the chemical goal:**
> >    * The goal is to obtain pure copper(II) sulfate crystals free from acid impurities
> > 
> > 3. **Explain the role of the excess reactant:**
> >    * Adding excess copper(II) oxide ensures that all the sulfuric acid is completely neutralized and reacted
> >    * Unreacted copper(II) oxide is insoluble and can be easily filtered off, leaving a pure solution of copper(II) sulfate

> [!EXAMPLE]
> #### 📝 Worked Example 2: Calculating Mean Titre Volume from Titration Data
> **Question:** A student carries out a titration four times to find the volume of dilute hydrochloric acid, $\\text{HCl}$, needed to neutralize $25.0\\text{ cm}^3$ of sodium hydroxide, $\\text{NaOH}$, solution. The burette readings obtained are:
> * Run 1 (Rough): $24.50\\text{ cm}^3$
> * Run 2: $23.90\\text{ cm}^3$
> * Run 3: $24.10\\text{ cm}^3$
> * Run 4: $24.00\\text{ cm}^3$
> * Deduce the mean titre volume that the student should use for their calculations.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify concordant results:**
> >    * Concordant titres are within $0.20\\text{ cm}^3$ of each other
> >    * Run 1 ($24.50\\text{ cm}^3$) is rough and should be excluded
> >    * Run 2 ($23.90\\text{ cm}^3$), Run 3 ($24.10\\text{ cm}^3$), and Run 4 ($24.00\\text{ cm}^3$) are concordant as they all fall within a range of $0.20\\text{ cm}^3$
> > 
> > 2. **Calculate the average of the concordant results:**
> >    $$\\text{Mean Titre} = \\frac{23.90 + 24.10 + 24.00}{3} = 24.00\\text{ cm}^3$$
> > 
> > 3. **State the final titre volume:**
> >    * The student should use a mean titre of **$24.00\\text{ cm}^3$**

> [!EXAMPLE]
> #### 📝 Worked Example 3: Reagents for Insoluble Salt Preparation
> **Question:** Identify two soluble starting reagents that can react to prepare a pure, dry sample of the insoluble salt lead(II) sulfate, $\\text{PbSO}_4$, and write the net ionic equation for the reaction.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify soluble sources of lead(II) and sulfate ions:**
> >    * All nitrates are soluble, so **lead(II) nitrate**, $\\text{Pb(NO}_3)_2\\text{(aq)}$, is a suitable soluble lead source
> >    * Sodium sulfate, $\\text{Na}_2\\text{SO}_4\\text{(aq)}$, or magnesium sulfate, $\\text{MgSO}_4\\text{(aq)}$, are soluble sulfate sources
> > 
> > 2. **Formulate the reaction equation:**
> >    $$\\text{Pb(NO}_3)_2\\text{(aq)} + \\text{Na}_2\\text{SO}_4\\text{(aq)} \\rightarrow \\text{PbSO}_4\\text{(s)} + 2\\text{NaNO}_3\\text{(aq)}$$
> > 
> > 3. **Deduce the net ionic equation:**
> >    * Cross out spectator ions ($\\text{Na}^+$ and $\\text{NO}_3^-$)
> >    * Net ionic equation: **$\\text{Pb}^{2+}\\text{(aq)} + \\text{SO}_4^{2-}\\text{(aq)} \\rightarrow \\text{PbSO}_4\\text{(s)}$**

> [!EXAMPLE]
> #### 📝 Worked Example 4: Controlling Crystallization Conditions
> **Question:** In the preparation of soluble salts, explain why the solution is heated only to the crystallization point (saturated solution) rather than being evaporated to complete dryness.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Consider water of crystallization:**
> >    * Many soluble salts contain water molecules chemically bound in their crystal lattices (hydrated salts)
> > 
> > 2. **Explain the effect of heating to dryness:**
> >    * Evaporating to complete dryness would drive off the water of crystallization, leaving an anhydrous powder instead of hydrated crystals
> > 
> > 3. **Explain the risk of thermal decomposition:**
> >    * Heating the dry salt directly can cause it to thermally decompose, ruining the product

> [!EXAMPLE]
> #### 📝 Worked Example 5: Preparing a Salt from Soluble Reactants
> **Question:** Outline the steps required to prepare a pure, dry sample of sodium chloride crystals starting from hydrochloric acid and sodium hydroxide solution, explaining why an indicator is used.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Explain the purpose of the indicator:**
> >    * Since both starting reagents are colorless solutions, an indicator is needed to determine the exact neutralization endpoint
> > 
> > 2. **Perform the titration first:**
> >    * Titrate a fixed volume of sodium hydroxide with hydrochloric acid using an indicator until the neutral endpoint is reached
> > 
> > 3. **Prepare the salt without the indicator:**
> >    * Repeat the mixing using the exact volumes calculated from the titration, but without adding any indicator to prevent product contamination
> > 
> > 4. **Crystallize and dry the salt:**
> >    * Heat the resulting neutral solution to the crystallization point, allow to cool slowly to form crystals, filter, and dry with filter paper

> [!EXAMPLE]
> #### 📝 Worked Example 6: Testing for Saturation and Washing Precipitates
> **Question:** During the preparation of salt crystals, describe how a student can determine when a heated solution is ready for crystallization. Additionally, explain why an insoluble precipitate of lead(II) sulfate, PbSO₄, is washed with cold distilled water rather than warm water
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Explain the method to check for saturation (the crystallization point):**
> >    * Dip a clean, cold glass rod into the hot evaporating salt solution
> >    * Withdraw the rod and observe the tip for a few seconds
> >    * If small crystals form immediately on the cold glass surface, the solution has reached saturation and is ready for crystallization
> > 
> > 2. **Explain the purpose of washing the precipitate:**
> >    * Rinsing the residue with distilled water removes any remaining soluble spectator ions (e.g., sodium and nitrate ions) adhering to the surface of the crystals
> > 
> > 3. **Explain why cold water is preferred over warm water:**
> >    * Lead(II) sulfate has a very low solubility, but its solubility increases as temperature rises
> >    * Using *cold* water minimizes the amount of lead(II) sulfate that dissolves during the washing process, preventing loss of product and maximizing the percentage yield
`,
        keyPoints: [
            'Use the excess method when the starting base is insoluble; filter to remove excess solid.',
            'Use titration when both reactants are soluble; indicator must be removed or avoided for the final crystals.',
            'Always wash insoluble salts with distilled water to remove soluble impurities before drying.'
        ]
    },
    {
        id: 'solutions-concentrations-20260106',
        title: 'Solutions & Concentrations',
        type: 'text',
        content: `
> [!BOX]
> ### 🧪 Solutions and Concentrations
> Concentration describes the amount of solute dissolved in a volume of solvent.
> 
> * **Molar Concentration Equation (Molarity):**
>   $$C\\text{ (mol dm}^{-3}) = \\frac{n\\text{ (mol)}}{V\\text{ (dm}^3)}$$
> 
> * **Mass Concentration Equation:**
>   $$\\text{Concentration (g dm}^{-3}) = \\frac{m\\text{ (g)}}{V\\text{ (dm}^3)}$$
> 
> * **Parts per Million (ppm):** Useful for extremely dilute solutions and gases:
>   $$\\text{Concentration (ppm)} = \\frac{\\text{Mass of Solute}}{\\text{Total Mass of Solution}} \\times 10^6$$
> 
> * *Conversion:* $1\\text{ dm}^3 = 1000\\text{ cm}^3$.

> [!BOX]
> ### 🧪 Core Practical 1: Preparing a Standard Solution
> A **standard solution** is a solution of known concentration. The exact steps to prepare $250.0\text{ cm}^3$ of standard solution from a solid are:
> 
> 1. **Weigh the solid:** Weigh the mass of the solid beaker/weighing bottle on a 2-decimal balance. Transfer the solid to a clean beaker, and reweigh the empty bottle to calculate the exact mass transferred by difference.
> 2. **Dissolve the solid:** Add about $100\text{ cm}^3$ of distilled water to the beaker. Stir continuously with a glass rod until the solid has dissolved completely.
> 3. **Quantitative Transfer:** Pour the solution through a clean funnel into a $250.0\text{ cm}^3$ volumetric flask. Rinse the beaker, glass rod, and funnel several times with distilled water, transferring all washings into the volumetric flask.
> 4. **Make up to the mark:** Add distilled water to the flask until the level is just below the graduation mark. Use a teat pipette to add water dropwise until the bottom of the meniscus is exactly on the graduation line at eye level.
> 5. **Homogenize:** Insert the stopper securely into the flask and invert it several times to mix the solution thoroughly.

> [!NOTE]
> ### 🧪 Titration & Concordant Titres
> When analyzing titration results, we must only use **concordant titres** to calculate the mean titre.
> * **Definition:** Concordant titres are volume readings that are within $\pm 0.10\text{ cm}^3$ of each other.
> * **Rough Titre:** The initial rough titration is used to locate the approximate end point and is **never** included in the concordant calculations.
> * **Calculating Mean Titre:** Select only the concordant runs, and find their average.

> [!BOX]
> ### 🧪 Titration Equivalence
> In acid-base titrations, at the neutralization endpoint:
> $$\\text{Moles of } \\text{H}^+ = \\text{Moles of } \\text{OH}^- \\quad \\text{or} \\quad M_1 V_1 = M_2 V_2$$
> *(Where $M$ is molar concentration and $V$ is volume, assuming a 1:1 reaction stoichiometry).*

> [!EXAMPLE]
> #### 📝 Worked Example 1: Concentration Unit Conversion
> **Question:** A solution of sodium hydroxide, $\\text{NaOH}$, has a concentration of $0.200\\text{ mol dm}^{-3}$. Calculate the concentration of this solution in $\\text{g dm}^{-3}$.  
> *(Given molar mass: $\\text{NaOH} = 40.0\\text{ g mol}^{-1}$)*
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Recall the conversion formula:**
> >    $$\\text{Concentration in g dm}^{-3} = \\text{Concentration in mol dm}^{-3} \\times Mr(\\text{NaOH})$$
> > 
> > 2. **Calculate the concentration:**
> >    $$\\text{Concentration} = 0.200\\text{ mol dm}^{-3} \\times 40.0\\text{ g mol}^{-1} = 8.0\\text{ g dm}^{-3}$$

> [!EXAMPLE]
> #### 📝 Worked Example 2: Expressing Gas Concentration in Parts per Million
> **Question:** A sample of a gaseous mixture contains $2.19\\%$ carbon dioxide by mass. Calculate the concentration of carbon dioxide in parts per million (ppm) by mass in this sample.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Understand percentage by mass:**
> >    * A percentage of $2.19\\%$ by mass means that in every $100\\text{ g}$ of the gas mixture, there are $2.19\\text{ g}$ of carbon dioxide
> > 
> > 2. **Recall the ppm concentration equation:**
> >    $$\\text{Concentration (ppm)} = \\frac{\\text{Mass of Solute}}{\\text{Total Mass of Mixture}} \\times 10^6$$
> > 
> > 3. **Substitute the values and calculate:**
> >    $$\\text{Concentration (ppm)} = \\frac{2.19\\text{ g}}{100\\text{ g}} \\times 10^6 = 2.19 \\times 10^4\\text{ ppm}$$

> [!EXAMPLE]
> #### 📝 Worked Example 3: Mass from ppm Concentration
> **Question:** A solution of lead(II) nitrate has a concentration of $15\\text{ ppm}$ by mass. Calculate the mass of lead(II) nitrate, in kilograms, present in $400\\text{ g}$ of this solution.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Recall the ppm mass formula:**
> >    $$\\text{ppm} = \\frac{\\text{Mass of solute (g)}}{\\text{Total mass of solution (g)}} \\times 10^6$$
> > 
> > 2. **Rearrange the formula to solve for the mass of solute:**
> >    $$\\text{Mass of solute (g)} = \\frac{\\text{ppm} \\times \\text{Total mass of solution (g)}}{10^6}$$
> > 
> > 3. **Calculate the mass of solute in grams:**
> >    $$\\text{Mass of solute} = \\frac{15 \\times 400\\text{ g}}{10^6} = 6.00 \\times 10^{-3}\\text{ g}$$
> > 
> > 4. **Convert the mass to kilograms:**
> >    $$\\text{Mass in kg} = \\frac{6.00 \\times 10^{-3}\\text{ g}}{1000} = 6.00 \\times 10^{-6}\\text{ kg}$$

> [!EXAMPLE]
> #### 📝 Worked Example 4: Calculating Ions from Molar Concentration
> **Question:** How many ions are present in $30.0\\text{ cm}^3$ of $0.025\\text{ mol dm}^{-3}$ barium hydroxide, $\\text{Ba(OH)}_2$, solution?  
> *(Take Avogadro's constant, $L = 6.02 \\times 10^{23}\\text{ mol}^{-1}$)*
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate the moles of dissolved $\\text{Ba(OH)}_2$:**
> >    $$n(\\text{Ba(OH)}_2) = C \\times V$$
> >    $$n(\\text{Ba(OH)}_2) = 0.025\\text{ mol dm}^{-3} \\times \\left(\\frac{30.0}{1000}\\right)\\text{ dm}^3 = 7.50 \\times 10^{-4}\\text{ mol}$$
> > 
> > 2. **Determine the number of ions per formula unit:**
> >    * Barium hydroxide dissociates fully:
> >      $$\\text{Ba(OH)}_2\\text{(aq)} \\rightarrow \\text{Ba}^{2+}\\text{(aq)} + 2\\text{OH}^-\\text{(aq)}$$
> >    * One formula unit of $\\text{Ba(OH)}_2$ produces $3$ ions ($1 \\times \\text{Ba}^{2+}$ and $2 \\times \\text{OH}^-$)
> > 
> > 3. **Calculate the total moles of ions:**
> >    $$\\text{Total moles of ions} = 3 \\times n(\\text{Ba(OH)}_2) = 3 \\times (7.50 \\times 10^{-4}\\text{ mol}) = 2.25 \\times 10^{-3}\\text{ mol}$$
> > 
> > 4. **Calculate the total number of ions:**
> >    $$\\text{Number of ions} = \\text{Total moles of ions} \\times L$$
> >    $$\\text{Number of ions} = 2.25 \\times 10^{-3} \\times (6.02 \\times 10^{23}) = 1.35 \\times 10^{21}\\text{ ions}$$

> [!EXAMPLE]
> #### 📝 Worked Example 5: Concentration from Titration Data
> **Question:** In a titration, $25.0\\text{ cm}^3$ of a solution of hydrochloric acid, $\\text{HCl}$, is neutralized exactly by $20.0\\text{ cm}^3$ of $0.156\\text{ mol dm}^{-3}$ sodium hydroxide, $\\text{NaOH}$, solution. Calculate the concentration of the hydrochloric acid solution.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Write the balanced chemical equation:**
> >    $$\\text{HCl(aq)} + \\text{NaOH(aq)} \\rightarrow \\text{NaCl(aq)} + \\text{H}_2\\text{O(l)}$$
> >    * The mole ratio of $\\text{HCl}$ to $\\text{NaOH}$ is 1:1
> > 
> > 2. **Calculate the moles of $\\text{NaOH}$ used:**
> >    $$n(\\text{NaOH}) = C \\times V = 0.156\\text{ mol dm}^{-3} \\times \\left(\\frac{20.0}{1000}\\right)\\text{ dm}^3 = 3.12 \\times 10^{-3}\\text{ mol}$$
> > 
> > 3. **Determine the moles of $\\text{HCl}$ reacted (1:1 ratio):**
> >    $$n(\\text{HCl}) = 3.12 \\times 10^{-3}\\text{ mol}$$
> > 
> > 4. **Calculate the concentration of the $\\text{HCl}$ solution:**
> >    $$C(\\text{HCl}) = \\frac{n}{V} = \\frac{3.12 \\times 10^{-3}\\text{ mol}}{\\left(\\frac{25.0}{1000}\\right)\\text{ dm}^3} = 0.125\\text{ mol dm}^{-3}$$


> [!EXAMPLE]
> #### 📝 Worked Example 6: Titration with Dilution and Non-1:2 Stoichiometry
> **Question:** A student dissolves $1.325\\text{ g}$ of anhydrous sodium carbonate, $\\text{Na}_2\\text{CO}_3$, in distilled water and makes the volume up to $250.0\\text{ cm}^3$ in a volumetric flask. A $25.0\\text{ cm}^3$ aliquot of this solution is titrated against hydrochloric acid, HCl. It requires $20.00\\text{ cm}^3$ of the acid for complete neutralization. Calculate the concentration of the hydrochloric acid in $\\text{mol dm}^{-3}$
> *(Relative atomic masses: $\\text{Na}=23.0, \\text{C}=12.0, \\text{O}=16.0$)*
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate the molar mass ($Mr$) of sodium carbonate, $\\text{Na}_2\\text{CO}_3$:**
> >    $$Mr(\\\\text{Na}_2\\\\text{CO}_3) = (2 \\\\times 23.0) + 12.0 + (3 \\\\times 16.0) = 106.0\\\\text{ g mol}^{-1}$$
> > 
> > 2. **Calculate the total moles of $\\text{Na}_2\\text{CO}_3$ dissolved in $250.0\\text{ cm}^3$:**
> >    $$n_{\\\\text{total}} = \\\\frac{m}{Mr} = \\\\frac{1.325\\\\text{ g}}{106.0\\\\text{ g mol}^{-1}} = 0.0125\\\\text{ mol}$$
> > 
> > 3. **Calculate the moles of $\\text{Na}_2\\text{CO}_3$ present in the $25.0\\text{ cm}^3$ aliquot:**
> >    $$n_{\\\\text{aliquot}} = n_{\\\\text{total}} \\\\times \\\\frac{V_{\\\\text{aliquot}}}{V_{\\\\text{total}}}$$
> > 
> >    $$n_{\\\\text{aliquot}} = 0.0125\\\\text{ mol} \\\\times \\\\frac{25.0}{250.0} = 1.25 \\\\times 10^{-3}\\\\text{ mol}$$
> > 
> > 4. **Write the balanced chemical equation to find the stoichiometric ratio:**
> >    $$\\\\text{Na}_2\\\\text{CO}_3\\\\text{(aq)} + 2\\\\text{HCl(aq)} \\\\rightarrow 2\\\\text{NaCl(aq)} + \\\\text{H}_2\\\\text{O(l)} + \\\\text{CO}_2\\\\text{(g)}$$
> >    * The stoichiometric ratio of sodium carbonate to hydrochloric acid is 1:2
> > 
> > 5. **Calculate the moles of HCl reacted:**
> >    $$n(\\\\text{HCl}) = 2 \\\\times n_{\\\\text{aliquot}}$$
> > 
> >    $$n(\\\\text{HCl}) = 2 \\\\times (1.25 \\\\times 10^{-3}\\\\text{ mol}) = 2.50 \\\\times 10^{-3}\\\\text{ mol}$$
> > 
> > 6. **Calculate the concentration of the hydrochloric acid:**
> >    $$C(\\\\text{HCl}) = \\\\frac{n}{V}$$
> > 
> >    $$C(\\\\text{HCl}) = \\\\frac{2.50 \\\\times 10^{-3}\\\\text{ mol}}{\\\\left(\\\\frac{20.00}{1000}\\\\right)\\\\text{ dm}^3} = 0.125\\\\text{ mol dm}^{-3}$$

> [!EXAMPLE]
> #### 📝 Worked Example 7: Selecting Concordant Titres
> **Question:** A student performs a titration and records the following volume readings:
> * Rough Titre: $24.50\\\\text{ cm}^3$
> * Titre 1: $23.85\\\\text{ cm}^3$
> * Titre 2: $23.95\\\\text{ cm}^3$
> * Titre 3: $23.70\\\\text{ cm}^3$
> * Titre 4: $23.90\\\\text{ cm}^3$
> Identify the concordant titres and calculate the mean titre value that the student should use in their calculation.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Exclude the rough titre:**
> >    * The rough run ($24.50\\\\text{ cm}^3$) is only a rough guide and must be discarded from the final mean calculation
> > 
> > 2. **Identify the concordant titres (within $\\\\pm 0.10\\\\text{ cm}^3$ of each other):**
> >    * Titre 1 ($23.85\\\\text{ cm}^3$), Titre 2 ($23.95\\\\text{ cm}^3$), and Titre 4 ($23.90\\\\text{ cm}^3$) all lie within a range of $0.10\\\\text{ cm}^3$
> >    * Titre 3 ($23.70\\\\text{ cm}^3$) is not concordant as it is too far from the other values, so it is discarded
> > 
> > 3. **Calculate the average of the concordant titres:**
> >    $$\\\\text{Mean Titre} = \\\\frac{23.85 + 23.95 + 23.90}{3} = 23.90\\\\text{ cm}^3$$

> [!EXAMPLE]
> #### 📝 Worked Example 8: Molar Concentration Calculation Checkpoint ($\\\\text{NaOH}$)
> **Question:** $50.0\\\\text{ g}$ of sodium hydroxide ($\\\\text{NaOH}$) is dissolved in distilled water to make $1.50\\\\text{ dm}^3$ of solution. Calculate the molar concentration of the solution in $\\\\text{mol dm}^{-3}$.  
> *(Given relative atomic masses: $\\\\text{Na}=23.0, \\\\text{O}=16.0, \\\\text{H}=1.0$)*
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate the molar mass ($M_r$) of sodium hydroxide:**
> >    $$M_r(\\\\text{NaOH}) = 23.0 + 16.0 + 1.0 = 40.0\\\\text{ g mol}^{-1}$$
> > 
> > 2. **Calculate the amount of $\\\\text{NaOH}$ in moles ($n$):**
> >    $$n = \\\\frac{m}{M_r} = \\\\frac{50.0\\\\text{ g}}{40.0\\\\text{ g mol}^{-1}} = 1.25\\\\text{ mol}$$
> > 
> > 3. **Calculate the molar concentration ($C$):**
> >    $$C = \\\\frac{n}{V} = \\\\frac{1.25\\\\text{ mol}}{1.50\\\\text{ dm}^3} = 0.833\\\\text{ mol dm}^{-3}$$

> [!EXAMPLE]
> #### 📝 Worked Example 9: Precipitate Mass from Solution Concentration ($\\\\text{PbI}_2$)
> **Question:** $150\\\\text{ cm}^3$ of $0.125\\\\text{ mol dm}^{-3}$ lead(II) nitrate solution ($\\\\text{Pb(NO}_3)_2$) is mixed with an excess of potassium iodide solution ($\\\\text{KI}$). The reaction equation is:
> $$\\\\text{Pb(NO}_3)_2\\\\text{(aq)} + 2\\\\text{KI(aq)} \\\\rightarrow \\\\text{PbI}_2\\\\text{(s)} + 2\\\\text{KNO}_3\\\\text{(aq)}$$
> Calculate the mass, in grams, of lead(II) iodide precipitate formed.  
> *(Given relative atomic masses: $\\\\text{Pb}=207.2, \\\\text{I}=126.9$)*
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate the moles of lead(II) nitrate reactant ($n$):**
> >    $$n(\\\\text{Pb(NO}_3)_2) = C \\\\times V = 0.125\\\\text{ mol dm}^{-3} \\\\times \\\\left(\\\\frac{150}{1000}\\\\right)\\\\text{ dm}^3 = 0.01875\\\\text{ mol}$$
> > 
> > 2. **Determine the theoretical moles of $\\\\text{PbI}_2$ precipitate formed (1:1 ratio):**
> >    $$n(\\\\text{PbI}_2) = 0.01875\\\\text{ mol}$$
> > 
> > 3. **Calculate the molar mass ($M_r$) of lead(II) iodide ($\\\\text{PbI}_2$):**
> >    $$M_r(\\\\text{PbI}_2) = 207.2 + (2 \\\\times 126.9) = 461.0\\\\text{ g mol}^{-1}$$
> > 
> > 4. **Calculate the mass of $\\\\text{PbI}_2$ precipitate formed:**
> >    $$m = n \\\\times M_r = 0.01875\\\\text{ mol} \\\\times 461.0\\\\text{ g mol}^{-1} = 8.644\\\\text{ g} \\\\approx 8.64\\\\text{ g}$$

> [!BOX]
> ### 🌌 Atmospheric Pollutants & Gas Concentrations in ppmv
> While parts per million (ppm) for liquid solutions measures mass ratios ($m/m$), atmospheric pollutant gas concentrations are measured by volume (**ppmv**):
> 
> * **Formula for Gas Volume Concentration (ppmv):**
>   $$\\\\text{Concentration (ppmv)} = \\\\frac{\\\\text{Volume of pollutant gas}}{\\\\text{Total volume of air mixture}} \\\\times 10^6$$
> 
> * **Environmental Case Studies:**
>   * **Mauna Loa Observatory (Hawaii):** Tracks atmospheric $\\\\text{CO}_2$ levels, which rose from $316\\\\text{ ppmv}$ in 1960 to over $400\\\\text{ ppmv}$ today.
>   * **Urban Industrial Traffic (e.g. Dhaka Brick Kilns):** Brick factories and dense vehicle exhausts elevate toxic carbon monoxide ($\\\\text{CO}$) levels to $100\\\\text{ ppmv}$ alongside harmful $\\\\text{SO}_2$ gas and particulate matter.

> [!EXAMPLE]
> #### 📝 Worked Example 10: Solution Concentration in ppm Checkpoint ($\\\\text{K}_2\\\\text{SO}_4$)
> **Question:** A sample of $0.20\\\\text{ g}$ of potassium sulfate, $\\\\text{K}_2\\\\text{SO}_4$, is dissolved in distilled water to make $800\\\\text{ g}$ of solution. Calculate the concentration of the salt in parts per million (ppm).
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Check that mass units are identical:**
> >    * Solute mass: $0.20\\\\text{ g}$
> >    * Solution mass: $800\\\\text{ g}$ (both in grams)
> > 
> > 2. **Apply the ppm concentration formula:**
> >    $$\\\\text{Concentration (ppm)} = \\\\frac{\\\\text{Mass of Solute}}{\\\\text{Total Mass of Solution}} \\\\times 10^6$$
> > 
> > 3. **Calculate the concentration:**
> >    $$\\\\text{Concentration} = \\\\frac{0.20\\\\text{ g}}{800\\\\text{ g}} \\\\times 10^6 = 250\\\\text{ ppm}$$

> [!EXAMPLE]
> #### 📝 Worked Example 11: Atmospheric Chlorine Concentration in ppmv Checkpoint
> **Question:** A $200\\\\text{ dm}^3$ sample of contaminated air contains $58\\\\text{ cm}^3$ of chlorine gas. Calculate the concentration of chlorine in the air sample in parts per million by volume (ppmv).
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Convert gas volumes to identical units ($\\\\text{cm}^3$):**
> >    * Chlorine volume: $58\\\\text{ cm}^3$
> >    * Total air volume: $200\\\\text{ dm}^3 = 200 \\\\times 1000 = 200,000\\\\text{ cm}^3$
> > 
> > 2. **Apply the ppmv volume concentration formula:**
> >    $$\\\\text{Concentration (ppmv)} = \\\\frac{\\\\text{Volume of Pollutant Gas}}{\\\\text{Total Volume of Air}} \\\\times 10^6$$
> > 
> > 3. **Calculate the concentration in ppmv:**
> >    $$\\\\text{Concentration} = \\\\frac{58\\\\text{ cm}^3}{200,000\\\\text{ cm}^3} \\\\times 10^6 = 290\\\\text{ ppmv}$$


`,
        keyPoints: [
            '1 dm³ is exactly equal to 1000 cm³.',
            'To go from mol dm⁻³ to g dm⁻³, multiply by the molar mass.',
            'ppm calculations scale parts of solute against one million parts of solution.'
        ],
        equationVisualizer: {
            reactants: [['NaCl(s)', '#8b5cf6']],
            products: [['Na⁺(aq)', '#3b82f6'], ['Cl⁻(aq)', '#10b981']],
            description: "Solid Sodium Chloride (NaCl) dissociates in water into aqueous Sodium ions (Na⁺) and Chloride ions (Cl⁻)."
        }
    },
    {
        id: 'gas-volumes-20260106',
        title: 'Gas Volumes & Ideal Gas Equation',
        type: 'text',
        content: `
> [!BOX]
> ### 🎈 Gas Volumes & RTP vs STP
> The volume occupied by a gas depends on temperature and pressure, regardless of the chemical identity of the gas.
> 
> * **Standard Temperature and Pressure (STP):**
>    * *Conditions:* 0 °C (273.15 K) and 1 atm (101.3 kPa).
>    * *Avogadro's Law:* 1 mol of any gas occupies **22.4 dm³** at STP.
> 
> * **Room Temperature and Pressure (RTP):**
>    * *Conditions:* 25 °C (298 K) and 1 atm (101.3 kPa).
>    * *Avogadro's Law:* 1 mol of any gas occupies **24.0 dm³** at RTP.
> 
> * **Molar Gas Volume Calculation:**
>   $$\text{Moles } (n) = \frac{\text{Volume at RTP } (\text{dm}^3)}{24.0\text{ dm}^3\text{ mol}^{-1}}$$

> [!BOX]
> ### 🎈 The Ideal Gas Equation
> For gases outside standard room conditions, their state is governed by:
> 
>   $$P V = n R T$$
> 
> * **Where:**
>   * **$P$** = pressure in Pascals ($\\text{Pa}$)
>     * *Conversions:* $1\\text{ atm} = 101,325\\text{ Pa}$
>   * **$V$** = volume in cubic meters ($\\text{m}^3$)
>     * *Conversions:* $1\\text{ m}^3 = 10^3\\text{ dm}^3 = 10^6\\text{ cm}^3$
>   * **$T$** = temperature in Kelvin ($\\text{K}$)
>     * *Conversions:* $T(\\text{K}) = T(^\\circ\\text{C}) + 273$
>   * **$n$** = amount of substance ($\\text{mol}$)
>   * **$R$** = gas constant = $8.31\\text{ J mol}^{-1}\\text{ K}^{-1}$
> 
> * **Extended Formulas & Density ($d$):**
>   Since $n = \\frac{m}{M_r}$, we can substitute moles into the equation:
>   $$P = \\frac{nRT}{V} = \\frac{mRT}{M_r V}$$
>   Using density $d = \\frac{m}{V}$ (mass per unit volume), we get:
>   $$P = \\frac{RTd}{M_r} \\implies M_r = \\frac{RTd}{P}$$
>   *Note: If density $d$ is in $\\text{g dm}^{-3}$ or $\\text{g cm}^{-3}$, it must be converted to $\\text{g m}^{-3}$ to remain compatible with SI units ($P$ in $\\text{Pa}$ and $R = 8.31$):*
>   $$d(\\text{g m}^{-3}) = d(\\text{g dm}^{-3}) \\times 1000$$

> [!NOTE]
> ### 🎈 Assumptions of the Kinetic Theory of Ideal Gases
> For the ideal gas equation $PV = nRT$ to hold true, we assume that:
> 
> 1. **Negligible Molecular Volume:** The actual volume of the gas molecules themselves is completely negligible compared to the total volume occupied by the gas
> 2. **No Intermolecular Forces:** There are no attractive or repulsive forces between the gas molecules
> 3. **Elastic Collisions:** All collisions between gas molecules, and between the molecules and the container walls, are perfectly elastic (no kinetic energy is lost)
> 
> **Deviation in Real Gases:** Real gases deviate from ideal behavior at **very high pressures** (where molecular volume becomes significant relative to the compressed space) and **very low temperatures** (where molecules move slowly enough for weak intermolecular forces to hold them together)

> [!EXAMPLE]
> #### 📝 Worked Example 1: Calculating Moles of Nitrogen Gas
> **Question:** A sample of nitrogen gas occupies $4.00 \\times 10^{-3}\\text{ m}^3$ at a pressure of $100\\text{ kPa}$ and a temperature of $27.0^\\circ\\text{C}$. Calculate the number of moles of nitrogen gas present.  
> *($R = 8.31\\text{ J K}^{-1}\\text{ mol}^{-1}$)*
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Convert pressure to Pascals (Pa):**
> >    $$P = 100\\text{ kPa} = 100 \\times 10^3\\text{ Pa} = 100,000\\text{ Pa}$$
> > 
> > 2. **Convert temperature to Kelvin (K):**
> >    $$T = 27.0^\\circ\\text{C} + 273 = 300\\text{ K}$$
> > 
> > 3. **Rearrange the Ideal Gas Equation to solve for $n$:**
> >    $$n = \\frac{PV}{RT}$$
> > 
> > 4. **Substitute the values and calculate:**
> >    $$n = \\frac{100,000\\text{ Pa} \\times 4.00 \\times 10^{-3}\\text{ m}^3}{8.31\\text{ J mol}^{-1}\\text{ K}^{-1} \\times 300\\text{ K}}$$
> >    $$n = \\frac{400}{2493} \\approx 0.160\\text{ mol}$$

> [!EXAMPLE]
> #### 📝 Worked Example 2: Molar Mass of a Volatile Liquid
> **Question:** Compound X has a mass of $0.267\\text{ g}$ and vaporizes at $85.0^\\circ\\text{C}$ and $104\\text{ kPa}$, producing a gas sample with a volume of $98.0\\text{ cm}^3$. Calculate the molar mass ($M_r$) of compound X.  
> *($R = 8.31\\text{ J mol}^{-1}\\text{ K}^{-1}$)*
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Convert all values to standard SI units:**
> >    * Temperature: $T = 85.0 + 273 = 358\\text{ K}$
> >    * Pressure: $P = 104\\text{ kPa} = 104,000\\text{ Pa}$
> >    * Volume: $V = 98.0\\text{ cm}^3 = 98.0 \\times 10^{-6}\\text{ m}^3$
> > 
> > 2. **Calculate the moles of vaporized Compound X ($n$):**
> >    $$n = \\frac{PV}{RT}$$
> >    $$n = \\frac{104,000\\text{ Pa} \\times 98.0 \\times 10^{-6}\\text{ m}^3}{8.31\\text{ J mol}^{-1}\\text{ K}^{-1} \\times 358\\text{ K}}$$
> >    $$n = \\frac{10.192}{2974.98} \\approx 3.426 \\times 10^{-3}\\text{ mol}$$
> > 
> > 3. **Calculate the molar mass ($M_r$):**
> >    $$M_r = \\frac{m}{n}$$
> >    $$M_r = \\frac{0.267\\text{ g}}{3.426 \\times 10^{-3}\\text{ mol}} \\approx 77.9\\text{ g mol}^{-1}$$

> [!EXAMPLE]
> #### 📝 Worked Example 3: Identifying an Unknown Gas
> **Question:** When an evacuated glass bulb of volume $63.8\\text{ cm}^3$ is filled with an unknown gas at $24.0^\\circ\\text{C}$ and $99.5\\text{ kPa}$, the mass increases by $0.103\\text{ g}$. Deduce whether the gas is ammonia ($\\text{NH}_3$), nitrogen ($\\text{N}_2$), or argon ($\\text{Ar}$).  
> *($R = 8.31\\text{ J mol}^{-1}\\text{ K}^{-1}$, Relative atomic masses: $\\text{H} = 1.0, \\text{N} = 14.0, \\text{Ar} = 39.9$)*
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Convert all values to standard SI units:**
> >    * Volume: $V = 63.8\\text{ cm}^3 = 63.8 \\times 10^{-6}\\text{ m}^3$
> >    * Temperature: $T = 24.0 + 273 = 297\\text{ K}$
> >    * Pressure: $P = 99.5\\text{ kPa} = 99,500\\text{ Pa}$
> > 
> > 2. **Calculate the moles of gas inside the bulb ($n$):**
> >    $$n = \\frac{PV}{RT}$$
> >    $$n = \\frac{99,500\\text{ Pa} \\times 63.8 \\times 10^{-6}\\text{ m}^3}{8.31\\text{ J mol}^{-1}\\text{ K}^{-1} \\times 297\\text{ K}}$$
> >    $$n = \\frac{6.3481}{2468.07} \\approx 2.572 \\times 10^{-3}\\text{ mol}$$
> > 
> > 3. **Calculate the molar mass ($M_r$) of the gas:**
> >    $$M_r = \\frac{m}{n}$$
> >    $$M_r = \\frac{0.103\\text{ g}}{2.572 \\times 10^{-3}\\text{ mol}} \\approx 40.0\\text{ g mol}^{-1}$$
> > 
> > 4. **Compare with the expected molar masses of the candidate gases:**
> >    * Ammonia ($\\text{NH}_3$): $M_r = 14.0 + (3 \\times 1.0) = 17.0\\text{ g mol}^{-1}$
> >    * Nitrogen ($\\text{N}_2$): $M_r = 2 \\times 14.0 = 28.0\\text{ g mol}^{-1}$
> >    * Argon ($\\text{Ar}$): $M_r = 39.9\\text{ g mol}^{-1}$
> >    * The calculated molar mass of $40.0\\text{ g mol}^{-1}$ matches Argon ($\\text{Ar}$) extremely closely.
> >    * **Conclusion:** The gas is **argon**.

> [!EXAMPLE]
> #### 📝 Worked Example 4: Deducing the Correct Expression for Moles
> **Question:** A sample of an ideal gas occupies a volume of $400\\text{ cm}^3$ at a temperature of $27^\\circ\\text{C}$ and a pressure of $1.01 \\times 10^5\\text{ Pa}$. Deduce the mathematical expression that gives the correct number of moles ($n$) of this gas.  
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the variables and rearrange the Ideal Gas Equation:**
> >    * Formula: $PV = nRT \\implies n = \\frac{PV}{RT}$
> > 
> > 2. **Convert the units to SI standard equivalents:**
> >    * Pressure ($P$): Already in Pascals ($1.01 \\times 10^5\\text{ Pa}$).
> >    * Volume ($V$): Convert from $\\text{cm}^3$ to $\\text{m}^3$ by multiplying by $10^{-6}$.  
> >      $$V = 400 \\times 10^{-6}\\text{ m}^3$$
> >    * Temperature ($T$): Convert from $^\\circ\\text{C}$ to Kelvin ($\\text{K}$) by adding $273$.  
> >      $$T = 27 + 273\\text{ K}$$
> >    * Gas Constant ($R$): $8.31\\text{ J mol}^{-1}\\text{ K}^{-1}$.
> > 
> > 3. **Substitute conversions back into the rearranged equation to form the final expression:**
> >    $$n = \\frac{1.01 \\times 10^5 \\times 400 \\times 10^{-6}}{8.31 \\times (27 + 273)}$$

> [!EXAMPLE]
> #### 📝 Worked Example 5: Calculating Gas Volume from Mass
> **Question:** Calculate the volume, in $\\text{dm}^3$, occupied by $10.0\\text{ g}$ of carbon dioxide gas ($\\text{CO}_2$, $M_r = 44.0$) at a pressure of $150\\text{ kPa}$ and a temperature of $50.0^\\circ\\text{C}$.  
> *($R = 8.31\\text{ J mol}^{-1}\\text{ K}^{-1}$)*
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate the amount of substance in moles ($n$):**
> >    $$n(\\text{CO}_2) = \\frac{m}{M_r} = \\frac{10.0\\text{ g}}{44.0\\text{ g mol}^{-1}} \\approx 0.2273\\text{ mol}$$
> > 
> > 2. **Convert pressure and temperature to SI standard units:**
> >    * Pressure: $P = 150\\text{ kPa} = 150,000\\text{ Pa}$
> >    * Temperature: $T = 50.0 + 273 = 323\\text{ K}$
> > 
> > 3. **Rearrange the Ideal Gas Equation to solve for volume ($V$):**
> >    $$V = \\frac{nRT}{P}$$
> > 
> > 4. **Calculate the volume in cubic meters ($\\text{m}^3$):**
> >    $$V = \\frac{0.2273\\text{ mol} \\times 8.31\\text{ J mol}^{-1}\\text{ K}^{-1} \\times 323\\text{ K}}{150,000\\text{ Pa}}$$
> >    $$V = \\frac{610.1}{150,000} \\approx 4.067 \\times 10^{-3}\\text{ m}^3$$
> > 
> > 5. **Convert the volume from $\\text{m}^3$ to $\\text{dm}^3$:**
> >    * Since $1\\text{ m}^3 = 1000\\text{ dm}^3$:
> >      $$V = 4.067 \\times 10^{-3} \\times 1000 = 4.07\\text{ dm}^3$$

> [!EXAMPLE]
> #### 📝 Worked Example 6: Reacting Gas Volumes (Avogadro's Law)
> **Question:** Propane gas, C₃H₈, reacts with oxygen according to the equation:
> $$\\\\text{C}_3\\\\text{H}_8\\\\text{(g)} + 5\\\\text{O}_2\\\\text{(g)} \\\\rightarrow 3\\\\text{CO}_2\\\\text{(g)} + 4\\\\text{H}_2\\\\text{O(l)}$$
> A mixture containing $20\\\\text{ cm}^3$ of propane and $120\\\\text{ cm}^3$ of oxygen is ignited. After the reaction is complete, the mixture is cooled back to room temperature and pressure. Calculate the total volume of gas remaining.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Apply Avogadro's Law of reacting volumes:**
> >    * Under constant temperature and pressure, gas volume ratios are identical to the mole ratios in the balanced chemical equation
> > 
> > 2. **Determine the limiting and excess reactants:**
> >    * According to the equation, $1\\\\text{ volume of C}_3\\\\text{H}_8$ reacts with $5\\\\text{ volumes of O}_2$
> >    * To react all $20\\\\text{ cm}^3$ of propane, the volume of oxygen required is: $20 \\\\times 5 = 100\\\\text{ cm}^3$
> >    * Since we have $120\\\\text{ cm}^3$ of oxygen, oxygen is in excess and propane is the limiting reactant
> > 
> > 3. **Calculate the volume of unreacted excess oxygen gas remaining:**
> >    $$\\\\text{Remaining volume of O}_2 = 120\\\\text{ cm}^3 - 100\\\\text{ cm}^3 = 20\\\\text{ cm}^3$$
> > 
> > 4. **Calculate the volume of carbon dioxide gas produced:**
> >    * According to the equation, $1\\\\text{ volume of C}_3\\\\text{H}_8$ produces $3\\\\text{ volumes of CO}_2$
> >    $$\\\\text{Volume of CO}_2 \\\\text{ produced} = 20 \\\\times 3 = 60\\\\text{ cm}^3$$
> > 
> > 5. **Calculate the total volume of gas remaining:**
> >    * Note that water is formed as a liquid, so its volume is negligible
> >    * The remaining gas mixture consists only of unreacted oxygen and the carbon dioxide produced:
> >    $$\\\\text{Total gas volume} = V(\\\\text{unreacted O}_2) + V(\\\\text{produced CO}_2)$$
> >    $$\\\\text{Total gas volume} = 20\\\\text{ cm}^3 + 60\\\\text{ cm}^3 = 80\\\\text{ cm}^3$$

> [!BOX]
> ### 📐 SI Units Conversion Table for $pV = nRT$
> Always convert units into standard SI units before substituting into the ideal gas equation:
> 
> | Quantity | Symbol | Given Unit | Required SI Unit | Conversion Rule |
> | :--- | :---: | :---: | :---: | :--- |
> | Pressure | P | Kilopascals (kPa) | Pascals (Pa) | Multiply by 10³ (1 kPa = 1000 Pa) |
> | Volume | V | Cubic centimeters (cm³) | Cubic meters (m³) | Multiply by 10⁻⁶ (divide by 10⁶) |
> | Volume | V | Cubic decimeters (dm³) | Cubic meters (m³) | Multiply by 10⁻³ (divide by 1000) |
> | Temperature | T | Degrees Celsius (°C) | Kelvin (K) | Add 273 (T = °C + 273) |

> [!EXAMPLE]
> #### 📝 Worked Example 7: Molecular Formula from Percentage Composition & Gas Vapor Density
> **Question:** An organic compound contains $40.0\\\\%$ carbon, $6.7\\\\%$ hydrogen, and $53.3\\\\%$ oxygen by mass. A $0.146\\\\text{ g}$ sample of this compound, when vaporized at $63^\\\\circ\\\\text{C}$ and $98\\\\text{ kPa}$, occupies a volume of $69.5\\\\text{ cm}^3$. Determine both the empirical formula and the molecular formula of the compound.  
> *(Given $R = 8.31\\\\text{ J mol}^{-1}\\\\text{ K}^{-1}$, $A_r: \\\\text{C}=12.0, \\\\text{H}=1.0, \\\\text{O}=16.0$)*
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Determine the Empirical Formula:**
> >    * $n(\\\\text{C}) = \\\\frac{40.0}{12.0} = 3.333\\\\text{ mol}$
> >    * $n(\\\\text{H}) = \\\\frac{6.7}{1.0} = 6.700\\\\text{ mol}$
> >    * $n(\\\\text{O}) = \\\\frac{53.3}{16.0} = 3.331\\\\text{ mol}$
> >    * Divide by $3.331$: $\\\\text{C} = 1, \\\\text{H} = 2, \\\\text{O} = 1 \\\\implies$ **Empirical Formula: $\\\\text{CH}_2\\\\text{O}$**
> >    * Empirical Formula Mass ($M_{\\\\text{emp}}$) $= 12.0 + 2.0 + 16.0 = 30.0\\\\text{ g mol}^{-1}$
> > 
> > 2. **Convert Gas Data to Standard SI Units:**
> >    * $P = 98\\\\text{ kPa} = 98,000\\\\text{ Pa}$
> >    * $V = 69.5\\\\text{ cm}^3 = 69.5 \\\\times 10^{-6}\\\\text{ m}^3$
> >    * $T = 63^\\\\circ\\\\text{C} + 273 = 336\\\\text{ K}$
> > 
> > 3. **Calculate Moles ($n$) and Molar Mass ($M_r$) using $pV = nRT$:**
> >    $$n = \\\\frac{PV}{RT} = \\\\frac{98,000\\\\text{ Pa} \\\\times 69.5 \\\\times 10^{-6}\\\\text{ m}^3}{8.31 \\\\times 336} = \\\\frac{6.811}{2792.16} = 0.002439\\\\text{ mol}$$
> >    $$M_r = \\\\frac{m}{n} = \\\\frac{0.146\\\\text{ g}}{0.002439\\\\text{ mol}} = 59.86 \\\\approx 60.0\\\\text{ g mol}^{-1}$$
> > 
> > 4. **Calculate Multiplier Ratio ($y$) and Molecular Formula:**
> >    $$y = \\\\frac{M_r}{M_{\\\\text{emp}}} = \\\\frac{60.0}{30.0} = 2$$
> >    $$\\\\text{Molecular Formula} = (\\\\text{CH}_2\\\\text{O}) \\\\times 2 = \\\\text{C}_2\\\\text{H}_4\\\\text{O}_2$$
`,
        keyPoints: [
            'In pV = nRT, volume MUST be converted to m³.',
            'Temperature MUST always be in Kelvin.',
            'Remember that 1 mole of gas takes 24 dm³ at RTP and 22.4 dm³ at STP.'
        ],
        gasLawSimulator: {
            law: 'boyle'
        }
    },
    {
        id: 'yield-economy-20260106',
        title: 'Yield & Atom Economy',
        type: 'text',
        content: `
> [!BOX]
> ### 📈 Percentage Yield, Purity & Solubility
> * **Percentage Yield:** Measures the efficiency of a chemical reaction.
>   $$\\%\\text{ Yield} = \\frac{\\text{Actual mass obtained (g)}}{\\text{Calculated (theoretical) mass (g)}} \\times 100\\%$$
> 
> * **Percentage Purity:** Measures the purity of a recovered product.
>   $$\\%\\text{ Purity} = \\frac{\\text{Mass of the pure product (g)}}{\\text{Mass of the impure product obtained (g)}} \\times 100\\%$$
> 
> * **Solubility:** The maximum amount of solute that can be dissolved in $100\\text{ g}$ of water (solvent) at a certain temperature.

> [!BOX]
> ### ⚠️ Reasons why Percentage Yield is less than 100%:
> * **Reason 1 - Product Loss:** Loss of product during transfer or purification steps (such as filtration or crystallization).
> * **Reason 2 - Side Reactions:** Reactants may react in unexpected ways to form different byproducts.
> * **Reason 3 - Reversible Reactions:** The reaction may reach equilibrium, preventing complete conversion of reactants to products.

> [!BOX]
> ### ♻️ Atom Economy
> * **Percentage Atom Economy (by mass):** Measures the proportion of reactant atoms that become part of the desired product.
>   $$\\%\\text{ Atom Economy} = \\frac{Mr(\\text{desired product}) \\times \\text{its coefficient}}{\\text{Total } Mr(\\text{all products or reactants}) \\times \\text{their coefficients}} \\times 100\\%$$

> [!EXAMPLE]
> #### 📝 Worked Example 1: Percentage Yield
> **Question:** $12.0\\text{ g}$ of carbon reacts with excess oxygen to produce carbon dioxide:  
> $$\\text{C} + \\text{O}\\_2 \\rightarrow \\text{CO}\\_2$$  
> If the actual mass of carbon dioxide collected is $38.0\\text{ g}$, calculate the percentage yield.  
> *($Ar(\\text{C}) = 12.0, Mr(\\text{CO}\\_2) = 44.0$)*
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate the moles of carbon reactant:**
> >    $$n(\\text{C}) = \\frac{12.0\\text{ g}}{12.0\\text{ g mol}^{-1}} = 1.00\\text{ mol}$$
> > 
> > 2. **Determine the theoretical moles of $\\text{CO}\\_2$ (1:1 ratio):**
> >    $$n(\\text{CO}\\_2) = 1.00\\text{ mol}$$
> > 
> > 3. **Calculate the theoretical mass of $\\text{CO}\\_2$:**
> >    $$\\text{Theoretical Mass} = 1.00\\text{ mol} \\times 44.0\\text{ g mol}^{-1} = 44.0\\text{ g}$$
> > 
> > 4. **Calculate percentage yield:**
> >    $$\\%\\text{ Yield} = \\left(\\frac{38.0\\text{ g}}{44.0\\text{ g}}\\right) \\times 100 = 86.4\\%$$

> [!EXAMPLE]
> #### 📝 Worked Example 2: Reacting Potassium Iodide with Lead(II) Nitrate
> **Question:** $20.0\\text{ cm}^3$ of $1.0\\text{ mol dm}^{-3}$ potassium iodide ($\\text{KI}$) solution is reacted with $10.0\\text{ cm}^3$ of $1.0\\text{ mol dm}^{-3}$ lead(II) nitrate ($\\text{Pb(NO}\\_3)\\_2$) solution.
> * **1.** Write a word equation for the reaction.
> * **2.** Write a symbol equation for the reaction.
> * **3.** Write a net ionic equation for the reaction.
> * **4.** Calculate the amount of moles of each reactant and product remaining at the end of the reaction.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Write the word equation:**
> >    $$\\text{Potassium iodide} + \\text{Lead(II) nitrate} \\rightarrow \\text{Lead(II) iodide} + \\text{Potassium nitrate}$$
> > 
> > 2. **Write the symbol equation (with state symbols):**
> >    $$2\\text{KI(aq)} + \\text{Pb(NO}\\_3)\\_2\\text{(aq)} \\rightarrow \\text{PbI}\\_2\\text{(s)} + 2\\text{KNO}\\_3\\text{(aq)}$$
> > 
> > 3. **Write the net ionic equation:**
> >    $$\\text{Pb}^{2+}\\text{(aq)} + 2\\text{I}^-\\text{(aq)} \\rightarrow \\text{PbI}\\_2\\text{(s)}$$
> > 
> > 4. **Calculate the initial moles of reactants:**
> >    * Moles of $\\text{KI} = C \\times V = 1.0\\text{ mol dm}^{-3} \\times 0.020\\text{ dm}^3 = 0.020\\text{ mol}$
> >    * Moles of $\\text{Pb(NO}\\_3)\\_2 = C \\times V = 1.0\\text{ mol dm}^{-3} \\times 0.010\\text{ dm}^3 = 0.010\\text{ mol}$
> > 
> > 5. **Determine the limiting reactant and reaction stoichiometry:**
> >    * From the balanced equation, $2\\text{ moles}$ of $\\text{KI}$ react with $1\\text{ mole}$ of $\\text{Pb(NO}\\_3)\\_2$.
> >    * Therefore, $0.020\\text{ mol}$ of $\\text{KI}$ reacts exactly with $0.010\\text{ mol}$ of $\\text{Pb(NO}\\_3)\\_2$.
> > 
> > 6. **Find the moles of all species remaining at the end:**
> >    * Moles of $\\text{KI} = 0\\text{ mol}$ (fully consumed)
> >    * Moles of $\\text{Pb(NO}\\_3)\\_2 = 0\\text{ mol}$ (fully consumed)
> >    * Moles of $\\text{PbI}\\_2\\text{ precipitate produced} = 0.010\\text{ mol}$
> >    * Moles of $\\text{KNO}\\_3\\text{ produced} = 0.020\\text{ mol}$

> [!EXAMPLE]
> #### 📝 Worked Example 3: Atom Economy of Ethanol Production
> **Question:** Glucose is fermented to produce ethanol and carbon dioxide:
> $$\\text{C}\\_6\\text{H}\\_\\{12\\}\\text{O}\\_6 \\rightarrow 2\\text{C}\\_2\\text{H}\\_5\\text{OH} + 2\\text{CO}\\_2$$
> Calculate the percentage atom economy by mass for the production of ethanol in this reaction.  
> *(Relative atomic masses: $\\text{C}=12.0, \\text{H}=1.0, \\text{O}=16.0$)*
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the desired product:** Ethanol ($\\text{C}\\_2\\text{H}\\_5\\text{OH}$).
> > 
> > 2. **Calculate the molar mass ($Mr$) of the desired product:**
> >    $$Mr(\\text{C}\\_2\\text{H}\\_5\\text{OH}) = (2 \\times 12.0) + (5 \\times 1.0) + 16.0 + 1.0 = 46.0\\text{ g mol}^{-1}$$
> > 
> > 3. **Calculate the total mass of the desired product based on the coefficient (2):**
> >    $$\\text{Desired Mass} = 2 \\times 46.0 = 92.0\\text{ g mol}^{-1}$$
> > 
> > 4. **Calculate the total molar mass of the reactant (Glucose):**
> >    $$Mr(\\text{C}\\_6\\text{H}\\_\\{12\\}\\text{O}\\_6) = (6 \\times 12.0) + (12 \\times 1.0) + (6 \\times 16.0) = 180.0\\text{ g mol}^{-1}$$
> > 
> > 5. **Calculate the percentage atom economy:**
> >    $$\\%\\text{ Atom Economy} = \\frac{\\text{Desired Mass}}{\\text{Total Reactant Mass}} \\times 100\\%$$
> >    $$\\%\\text{ Atom Economy} = \\left(\\frac{92.0}{180.0}\\right) \\times 100 = 51.1\\%$$

> [!EXAMPLE]
> #### 📝 Worked Example 4: Solubility of Barium Nitrate upon Cooling
> **Question:** $20\\text{ cm}^3$ of a saturated solution of barium nitrate at $80^\\circ\\text{C}$ (containing $20\\text{ g}$ of water) was cooled to $20^\\circ\\text{C}$, resulting in $9.32\\text{ g}$ of crystals precipitating. The solubility of barium nitrate is $3.74\\text{ g}$ per $100\\text{ g}$ of water at $20^\\circ\\text{C}$. Calculate the solubility of barium nitrate at $80^\\circ\\text{C}$ in $\\text{g}$ per $100\\text{ g}$ of water.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate the mass of barium nitrate remaining dissolved at $20^\\circ\\text{C}$ in the $20\\text{ g}$ of water:**
> >    $$\\text{Solubility at } 20^\\circ\\text{C} = 3.74\\text{ g per } 100\\text{ g water}$$
> >    $$\\text{Mass dissolved in } 20\\text{ g water} = 3.74 \\times \\left(\\frac{20}{100}\\right) = 0.748\\text{ g}$$
> > 
> > 2. **Determine the total mass of barium nitrate dissolved in the solution initially at $80^\\circ\\text{C}$:**
> >    $$\\text{Initial Mass dissolved} = \\text{Mass remaining dissolved} + \\text{Mass precipitated}$$
> >    $$\\text{Initial Mass dissolved} = 0.748\\text{ g} + 9.32\\text{ g} = 10.068\\text{ g}$$
> > 
> > 3. **Calculate the solubility at $80^\\circ\\text{C}$ (scaled to $100\\text{ g}$ of water):**
> >    $$\\text{Solubility at } 80^\\circ\\text{C} = 10.068\\text{ g} \\times \\left(\\frac{100}{20}\\right) = 50.34\\text{ g per } 100\\text{ g water}$$
> >    *Therefore, the solubility of barium nitrate at $80^\\circ\\text{C}$ is approximately **$50.3\\text{ g}$ per $100\\text{ g}$ of water**.*

> [!EXAMPLE]
> #### 📝 Worked Example 5: Atom Economy of Iron Production
> **Question:** Calculate the percentage atom economy for producing iron from iron(III) oxide using carbon monoxide:  
> $$\\text{Fe}\\_2\\text{O}\\_3 + 3\\text{CO} \\rightarrow 2\\text{Fe} + 3\\text{CO}\\_2$$  
> *(Relative atomic masses: $\\text{Fe} = 55.8, \\text{O} = 16.0, \\text{C} = 12.0$)*
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the desired product:** Iron (Fe).
> > 
> > 2. **Calculate the total mass of the desired product (using its coefficient 2):**
> >    $$\\text{Desired Product Mass} = 2 \\times Ar(\\text{Fe}) = 2 \\times 55.8 = 111.6\\text{ g mol}^{-1}$$
> > 
> > 3. **Calculate the total mass of all reactants:**
> >    $$\\text{Total Reactants} = Mr(\\text{Fe}_2\\text{O}_3) + [3 \\times Mr(\\text{CO})]$$
> >    $$Mr(\\text{Fe}_2\\text{O}_3) = (2 \\times 55.8) + (3 \\times 16.0) = 159.6\\text{ g mol}^{-1}$$
> >    $$3 \\times Mr(\\text{CO}) = 3 \\times (12.0 + 16.0) = 84.0\\text{ g mol}^{-1}$$
> >    $$\\text{Total Reactants Mass} = 159.6 + 84.0 = 243.6\\text{ g mol}^{-1}$$
> > 
> > 4. **Calculate the percentage atom economy:**
> >    $$\\%\\text{ Atom Economy} = \\left(\\frac{111.6}{243.6}\\right) \\times 100 = 45.8\\%$$

> [!EXAMPLE]
> #### 📝 Worked Example 6: Combining Percentage Purity and Percentage Yield
> **Question:** A $5.00\\text{ g}$ sample of impure calcium carbonate, CaCO₃, reacts with excess hydrochloric acid according to the equation:
> $$\\\\text{CaCO}_3\\\\text{(s)} + 2\\\\text{HCl(aq)} \\\\rightarrow \\\\text{CaCl}_2\\\\text{(aq)} + \\\\text{H}_2\\\\text{O(l)} + \\\\text{CO}_2\\\\text{(g)}$$
> The sample is $80.0\\%$ pure calcium carbonate by mass. Calculate the mass of carbon dioxide gas, in grams, obtained if the reaction has a $85.0\\%$ percentage yield.
> *(Relative atomic masses: $\\text{Ca}=40.1, \\text{C}=12.0, \\text{O}=16.0$)*
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate the mass of pure calcium carbonate in the sample:**
> >    $$\\\\text{Mass of pure CaCO}_3 = 5.00\\\\text{ g} \\\\times \\\\frac{80.0}{100} = 4.00\\\\text{ g}$$
> > 
> > 2. **Calculate the molar mass ($Mr$) of calcium carbonate, $\\text{CaCO}_3$:**
> >    $$Mr(\\\\text{CaCO}_3) = 40.1 + 12.0 + (3 \\\\times 16.0) = 100.1\\\\text{ g mol}^{-1}$$
> > 
> > 3. **Calculate the moles of reacting calcium carbonate:**
> >    $$n(\\\\text{CaCO}_3) = \\\\frac{4.00\\\\text{ g}}{100.1\\\\text{ g mol}^{-1}} \\\\approx 0.0400\\\\text{ mol}$$
> > 
> > 4. **Determine the theoretical moles of carbon dioxide produced (1:1 ratio):**
> >    $$n(\\\\text{CO}_2) = 0.0400\\\\text{ mol}$$
> > 
> > 5. **Calculate the theoretical mass of carbon dioxide ($Mr = 44.0\\text{ g mol}^{-1}$):**
> > 6. **Apply the percentage yield to find the actual mass of carbon dioxide obtained:**
> >    $$\\\\text{Actual Mass} = \\\\text{Theoretical Mass} \\\\times \\\\frac{\\\\%\\\\text{ Yield}}{100}$$
> >    $$\\\\text{Actual Mass} = 1.76\\\\text{ g} \\\\times \\\\frac{85.0}{100} = 1.50\\\\text{ g}$$

> [!EXAMPLE]
> #### 📝 Worked Example 7: Industrial Methanol Yield Calculation (Tonnes & Kilograms)
> **Question:** A chemical plant manufactures methanol from carbon monoxide and hydrogen:
> $$\\\\text{CO(g)} + 2\\\\text{H}_2\\\\text{(g)} \\\\rightarrow \\\\text{CH}_3\\\\text{OH(l)}$$
> Starting from $4.32\\\\text{ tonnes}$ of carbon monoxide, the manufacturer obtains $4.07\\\\text{ tonnes}$ of methanol. Calculate the percentage yield of methanol.  
> *(Given $M_r(\\\\text{CO}) = 28.0\\\\text{ g mol}^{-1}, M_r(\\\\text{CH}_3\\\\text{OH}) = 32.0\\\\text{ g mol}^{-1}$, $1\\\\text{ tonne} = 1 \\\\times 10^6\\\\text{ g}$)*
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate the moles of carbon monoxide starting reactant ($n$):**
> >    $$n(\\\\text{CO}) = \\\\frac{4.32 \\\\times 10^6\\\\text{ g}}{28.0\\\\text{ g mol}^{-1}} = 1.543 \\\\times 10^5\\\\text{ mol}$$
> > 
> > 2. **Determine the theoretical moles of methanol produced (1:1 ratio):**
> >    $$n(\\\\text{CH}_3\\\\text{OH}) = 1.543 \\\\times 10^5\\\\text{ mol}$$
> > 
> > 3. **Calculate the theoretical mass of methanol:**
> >    $$\\\\text{Theoretical Mass} = (1.543 \\\\times 10^5\\\\text{ mol}) \\\\times 32.0\\\\text{ g mol}^{-1} = 4.937 \\\\times 10^6\\\\text{ g} = 4.937\\\\text{ tonnes}$$
> > 
> > 4. **Calculate the percentage yield:**
> >    $$\\\\text{Percentage Yield} = \\\\frac{\\\\text{Actual Yield}}{\\\\text{Theoretical Yield}} \\\\times 100\\\\%$$
> >    $$\\\\text{Percentage Yield} = \\\\frac{4.07\\\\text{ tonnes}}{4.937\\\\text{ tonnes}} \\\\times 100\\\\% = 82.4\\\\%$$

> [!EXAMPLE]
> #### 📝 Worked Example 8: Percentage Yield Checkpoints ($\\\\text{CuSO}_4 \\\\cdot 5\\\\text{H}_2\\\\text{O}$ & Ethanoic Acid)
> **Question:** 
> 1. A student prepares a sample of copper(II) sulfate crystals, $\\\\text{CuSO}_4 \\\\cdot 5\\\\text{H}_2\\\\text{O}$, weighing $7.85\\\\text{ g}$. She started with $4.68\\\\text{ g}$ of copper(II) oxide ($\\\\text{CuO}$). What is the percentage yield?  
>    *(Given $M_r(\\\\text{CuO}) = 79.5\\\\text{ g mol}^{-1}, M_r(\\\\text{CuSO}_4 \\\\cdot 5\\\\text{H}_2\\\\text{O}) = 249.6\\\\text{ g mol}^{-1}$)*
> 2. An industrial manufacturer makes ethanoic acid using the reaction:
>    $$\\\\text{CH}_3\\\\text{OH(l)} + \\\\text{CO(g)} \\\\rightarrow \\\\text{CH}_3\\\\text{COOH(l)}$$
>    Starting with $50.0\\\\text{ kg}$ of methanol, the manufacturer obtains $89.2\\\\text{ kg}$ of ethanoic acid. Calculate the percentage yield.  
>    *(Given $M_r(\\\\text{CH}_3\\\\text{OH}) = 32.0\\\\text{ g mol}^{-1}, M_r(\\\\text{CH}_3\\\\text{COOH}) = 60.0\\\\text{ g mol}^{-1}$)*
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Part 1 (Copper Sulfate Crystals Yield):**
> >    * Calculate moles of starting $\\\\text{CuO}$:
> >      $$n(\\\\text{CuO}) = \\\\frac{4.68\\\\text{ g}}{79.5\\\\text{ g mol}^{-1}} = 0.05887\\\\text{ mol}$$
> >    * Since mole ratio is $1:1$, theoretical moles of $\\\\text{CuSO}_4 \\\\cdot 5\\\\text{H}_2\\\\text{O} = 0.05887\\\\text{ mol}$
> >    * Calculate theoretical mass:
> >      $$\\\\text{Theoretical Mass} = 0.05887 \\\\times 249.6\\\\text{ g mol}^{-1} = 14.69\\\\text{ g}$$
> >    * Calculate percentage yield:
> >      $$\\\\text{Percentage Yield} = \\\\frac{7.85\\\\text{ g}}{14.69\\\\text{ g}} \\\\times 100\\\\% = 53.4\\\\%$$
> > 
> > 2. **Part 2 (Ethanoic Acid Production Yield):**
> >    * Calculate moles of methanol ($50.0\\\\text{ kg} = 50,000\\\\text{ g}$):
> >      $$n(\\\\text{CH}_3\\\\text{OH}) = \\\\frac{50000\\\\text{ g}}{32.0\\\\text{ g mol}^{-1}} = 1562.5\\\\text{ mol}$$
> >    * Since ratio is $1:1$, theoretical moles of $\\\\text{CH}_3\\\\text{COOH} = 1562.5\\\\text{ mol}$
> >    * Calculate theoretical mass:
> >      $$\\\\text{Theoretical Mass} = 1562.5 \\\\times 60.0\\\\text{ g mol}^{-1} = 93,750\\\\text{ g} = 93.75\\\\text{ kg}$$
> >    * Calculate percentage yield:
> >      $$\\\\text{Percentage Yield} = \\\\frac{89.2\\\\text{ kg}}{93.75\\\\text{ kg}} \\\\times 100\\\\% = 95.1\\\\%$$

> [!BOX]
> ### ⚛️ Barry Trost & Industrial Factors of Atom Economy
> Developed by American chemist **Barry Trost**, **atom economy** evaluates chemical reaction efficiency based on how many reactant atoms end up in the desired product.
> 
> * **Formula for Percentage Atom Economy:**
>   $$\\\\text{Atom Economy} = \\\\frac{M_r(\\\\text{desired product}) \\\\times \\\\text{coefficient}}{\\\\sum M_r(\\\\text{all products}) \\\\times \\\\text{coefficients}} \\\\times 100\\\\%$$
> 
> * **Industrial Factors Beyond Percentage Yield:**
>   * Scarcity and availability of non-renewable raw materials.
>   * Cost of raw materials.
>   * Quantity of thermal and electrical energy required.
>   * Cost and environmental impact of disposing of waste byproducts.

> [!BOX]
> ### ⚖️ Reaction Types & Atom Economy Rules
> * **Addition Reactions:** Have **$100\\\\%$ Atom Economy** because all reactant atoms combine into a single desired product (e.g. $\\\\text{C}_2\\\\text{H}_4 + \\\\text{H}_2\\\\text{O} \\\\rightarrow \\\\text{C}_2\\\\text{H}_5\\\\text{OH}$).
> * **Elimination & Substitution Reactions:** Have lower atom economies because they form waste byproducts alongside the desired product.
> * **Multistep Industrial Reactions:** Generally have low overall atom economies due to cumulative byproduct losses.

> [!EXAMPLE]
> #### 📝 Worked Example 9: Solvay Process & Rocket Fuel Hydrazine Atom Economy
> **Question:** 
> 1. Sodium carbonate is manufactured by the Solvay process:
>    $$\\\\text{CaCO}_3 \\\\text{(s)} + 2\\\\text{NaCl(aq)} \\\\rightarrow \\\\text{Na}_2\\\\text{CO}_3\\\\text{(s)} + \\\\text{CaCl}_2\\\\text{(aq)}$$
>    Starting with $75.0\\\\text{ kg}$ of $\\\\text{CaCO}_3$, a manufacturer obtains $76.5\\\\text{ kg}$ of $\\\\text{Na}_2\\\\text{CO}_3$. Calculate the percentage yield and atom economy.  
>    *(Given $M_r: \\\\text{CaCO}_3 = 100.1, \\\\text{Na}_2\\\\text{CO}_3 = 106.0, \\\\text{CaCl}_2 = 111.1$)*
> 2. Hydrazine ($\\\\text{N}_2\\\\text{H}_4$) rocket fuel is manufactured via:
>    $$2\\\\text{NH}_3 + \\\\text{NaOCl} \\\\rightarrow \\\\text{N}_2\\\\text{H}_4 + \\\\text{NaCl} + \\\\text{H}_2\\\\text{O}$$
>    Calculate the percentage atom economy for hydrazine production.  
>    *(Given $M_r: \\\\text{N}_2\\\\text{H}_4 = 32.0, \\\\text{NaCl} = 58.5, \\\\text{H}_2\\\\text{O} = 18.0$)*
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Part 1(a): Solvay Process Theoretical Yield & Percentage Yield:**
> >    $$\\\\text{Theoretical Mass} = \\\\frac{75.0\\\\text{ kg} \\\\times 106.0}{100.1} = 79.42\\\\text{ kg}$$
> >    $$\\\\text{Percentage Yield} = \\\\frac{76.5\\\\text{ kg}}{79.42\\\\text{ kg}} \\\\times 100\\\\% = 96.3\\\\%$$
> > 
> > 2. **Part 1(b): Solvay Process Atom Economy:**
> >    $$\\\\text{Atom Economy} = \\\\frac{106.0}{106.0 + 111.1} \\\\times 100\\\\% = \\\\frac{106.0}{217.1} \\\\times 100\\\\% = 48.8\\\\%$$
> > 
> > 3. **Part 2: Hydrazine Rocket Fuel Atom Economy:**
> >    $$\\\\text{Atom Economy} = \\\\frac{32.0}{32.0 + 58.5 + 18.0} \\\\times 100\\\\% = \\\\frac{32.0}{108.5} \\\\times 100\\\\% = 29.5\\\\%$$

> [!EXAMPLE]
> #### 📝 Worked Example 10: Ethene Hydration vs Dehydration Checkpoints
> **Question:** 
> 1. Ethanol is manufactured by the hydration of ethene:
>    $$\\\\text{C}_2\\\\text{H}_4\\\\text{(g)} + \\\\text{H}_2\\\\text{O(g)} \\\\rightarrow \\\\text{C}_2\\\\text{H}_5\\\\text{OH(g)}$$
>    What is the percentage atom economy of this process?
> 2. Ethene is manufactured by the dehydration of ethanol:
>    $$\\\\text{C}_2\\\\text{H}_5\\\\text{OH(g)} \\\\rightarrow \\\\text{C}_2\\\\text{H}_4\\\\text{(g)} + \\\\text{H}_2\\\\text{O(g)}$$
>    Calculate the percentage atom economy for producing ethene in this reaction.  
>    *(Given $M_r: \\\\text{C}_2\\\\text{H}_4 = 28.0, \\\\text{H}_2\\\\text{O} = 18.0, \\\\text{C}_2\\\\text{H}_5\\\\text{OH} = 46.0$)*
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Part 1 (Ethene Hydration Atom Economy):**
> >    * This is an **addition reaction** with a single product ($\\\\text{C}_2\\\\text{H}_5\\\\text{OH}$).
> >    * All reactant atoms are incorporated into the desired product.
> >    * **Atom Economy = $100\\\\%$**
> > 
> > 2. **Part 2 (Ethanol Dehydration Atom Economy for Ethene):**
> >    * Desired product: Ethene ($\\\\text{C}_2\\\\text{H}_4, M_r = 28.0$)
> >    * Waste byproduct: Water ($\\\\text{H}_2\\\\text{O}, M_r = 18.0$)
> >    * Formula:
> >      $$\\\\text{Atom Economy} = \\\\frac{28.0}{28.0 + 18.0} \\\\times 100\\\\% = \\\\frac{28.0}{46.0} \\\\times 100\\\\% = 60.9\\\\%$$
`,
        keyPoints: [
            'High yield does not necessarily mean high atom economy.',
            'Atom economy includes waste byproduct masses in the total reactants mass calculation.'
        ],
        equationVisualizer: {
            reactants: [['Fe₂O₃', '#ef4444'], ['3CO', '#f59e0b']],
            products: [['2Fe', '#10b981'], ['3CO₂', '#6b7280']],
            description: "1 mole of Iron(III) Oxide (Fe₂O₃) reacts with 3 moles of Carbon Monoxide (CO) to yield 2 moles of Iron (Fe) and 3 moles of Carbon Dioxide (CO₂)."
        }
    },
    {
        id: 'percentage-error-20260106',
        title: 'Experimental Uncertainty',
        type: 'text',
        content: `
> [!BOX]
> ### 🧮 Experimental Uncertainty & Percentage Error
> During practical laboratory work, every measuring instrument has an inherent limit of accuracy. This limit determines the uncertainty of the measurement.
> 
> * **Absolute Uncertainty:** The actual range of doubt in a measurement:
>   $$\\text{Absolute Uncertainty} = \\text{Apparatus accuracy} \\times \\text{Number of readings}$$
> 
> * **Percentage Uncertainty (Percentage Error):** Shows the uncertainty as a percentage of the total measurement:
>   $$\\text{Percentage Uncertainty} = \\frac{\\text{Absolute Uncertainty}}{\\text{Measurement value}} \\times 100\\%$$
> 
> * **Number of Readings Guide:**
>    * **1 reading:** Used when only one final value is read (e.g., volumetric pipette, measuring cylinder).
>    * **2 readings:** Used when a measurement is the difference between two readings (e.g., burette titration: initial and final volume; balance: mass of empty container and mass with sample; thermometer: initial and final temperature).

> [!EXAMPLE]
> #### 📝 Worked Example 1: Percentage Error in a Titration
> **Question:** A sample of $25.0\\text{ cm}^3$ of $0.205\\text{ mol dm}^{-3}$ sulfuric acid was titrated with sodium hydroxide solution. The titre obtained was $14.60\\text{ cm}^3$
> What is the percentage error in the titre?
> [The burette is accurate to $0.05\\text{ cm}^3$ per reading]
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Determine the number of readings:**
> >    * A burette titre is calculated from the difference between two readings (the initial and final readings)
> > 
> > 2. **Calculate the absolute uncertainty:**
> >    * Since two readings are taken, we multiply the accuracy per reading by 2
> >    * $\\text{Absolute Uncertainty} = 0.05\\text{ cm}^3 \\times 2 = 0.10\\text{ cm}^3$
> > 
> > 3. **Calculate the percentage uncertainty in the titre:**
> >    $$\\text{Percentage Error} = \\frac{\\text{Absolute Uncertainty}}{\\text{Titre Value}} \\times 100\\%$$
> >    $$\\text{Percentage Error} = \\left(\\frac{0.10}{14.60}\\right) \\times 100 \\approx 0.68\\%$$

> [!EXAMPLE]
> #### 📝 Worked Example 2: Percentage Error in Weighing by Difference
> **Question:** A student weighs a sample of sodium carbonate. The mass of the empty weighing bottle is $10.15\\text{ g}$. After adding the sample, the mass is $12.40\\text{ g}$
> Calculate the percentage uncertainty in the mass of the sodium carbonate.
> [The balance is accurate to $0.005\\text{ g}$ per reading]
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate the mass of sodium carbonate:**
> >    * $\\text{Mass of sample} = 12.40\\text{ g} - 10.15\\text{ g} = 2.25\\text{ g}$
> > 
> > 2. **Determine the number of readings:**
> >    * The mass is obtained by difference, which requires two readings (the empty bottle and the bottle with sample)
> > 
> > 3. **Calculate the absolute uncertainty:**
> >    * $\\text{Absolute Uncertainty} = 2 \\times 0.005\\text{ g} = 0.010\\text{ g}$
> > 
> > 4. **Calculate the percentage uncertainty:**
> >    $$\\text{Percentage Uncertainty} = \\left(\\frac{0.010}{2.25}\\right) \\times 100 \\approx 0.44\\%$$

> [!EXAMPLE]
> #### 📝 Worked Example 3: Percentage Error in Temperature Change
> **Question:** In an enthalpy change experiment, the temperature of $50.0\\text{ cm}^3$ of water rises from $19.5^\\circ\\text{C}$ to $31.2^\\circ\\text{C}$
> Calculate the percentage uncertainty in this temperature change.
> [The thermometer is accurate to $0.1^\\circ\\text{C}$ per reading]
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate the temperature rise:**
> >    * $\\Delta T = 31.2^\\circ\\text{C} - 19.5^\\circ\\text{C} = 11.7^\\circ\\text{C}$
> > 
> > 2. **Determine the number of readings:**
> >    * Finding a temperature change requires measuring both the initial and maximum temperatures, which is 2 readings
> > 
> > 3. **Calculate the absolute uncertainty:**
> >    * $\\text{Absolute Uncertainty} = 2 \\times 0.1^\\circ\\text{C} = 0.2^\\circ\\text{C}$
> > 
> > 4. **Calculate the percentage uncertainty:**
> >    $$\\text{Percentage Uncertainty} = \\left(\\frac{0.2}{11.7}\\right) \\times 100 \\approx 1.71\\%$$

> [!EXAMPLE]
> #### 📝 Worked Example 4: Percentage Error in a Volumetric Pipette
> **Question:** A student uses a $25.0\\text{ cm}^3$ volumetric pipette to measure a sample of sodium hydroxide solution. Calculate the percentage uncertainty in this measurement.
> [The pipette is accurate to $0.06\\text{ cm}^3$]
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Determine the number of readings:**
> >    * Unlike a burette or balance, a volumetric pipette is calibrated to deliver a single fixed volume, which requires only 1 reading
> > 
> > 2. **Calculate the absolute uncertainty:**
> >    * Since only one reading is taken, the absolute uncertainty is equal to the accuracy of the pipette
> >    * $\\text{Absolute Uncertainty} = 0.06\\text{ cm}^3 \\times 1 = 0.06\\text{ cm}^3$
> > 
> > 3. **Calculate the percentage uncertainty:**
> >    $$\\text{Percentage Uncertainty} = \\frac{\\text{Absolute Uncertainty}}{\\text{Volume Measured}} \\times 100\\%$$
> >    $$\\text{Percentage Uncertainty} = \\left(\\frac{0.06}{25.0}\\right) \\times 100 = 0.24\\%$$

> [!EXAMPLE]
> #### 📝 Worked Example 5: Percentage Error in a Measuring Cylinder
> **Question:** A student uses a $50.0\\text{ cm}^3$ measuring cylinder to measure a volume of dilute hydrochloric acid. Calculate the percentage uncertainty in this volume.
> [The measuring cylinder is accurate to $0.5\\text{ cm}^3$]
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Determine the number of readings:**
> >    * A measuring cylinder is read once to determine the volume of liquid, which requires only 1 reading
> > 
> > 2. **Calculate the absolute uncertainty:**
> >    * Since only one reading is taken, the absolute uncertainty is equal to the accuracy of the measuring cylinder
> >    * $\\text{Absolute Uncertainty} = 0.5\\text{ cm}^3 \\times 1 = 0.5\\text{ cm}^3$
> > 
> > 3. **Calculate the percentage uncertainty:**
> >    $$\\text{Percentage Uncertainty} = \\frac{\\text{Absolute Uncertainty}}{\\text{Volume Measured}} \\times 100\\%$$
> >    $$\\text{Percentage Uncertainty} = \\left(\\frac{0.5}{50.0}\\right) \\times 100 = 1.0\\%$$

> [!EXAMPLE]
> #### 📝 Worked Example 6: Calculating Total Percentage Uncertainty for an Experiment
> **Question:** In a calorimeter experiment to determine enthalpy change, a student:
> * Measures $50.0\\\\text{ cm}^3$ of water using a measuring cylinder (accuracy $\\\\pm 0.5\\\\text{ cm}^3$, 1 reading)
> * Weighs $2.50\\\\text{ g}$ of a salt by difference using a balance (accuracy $\\\\pm 0.005\\\\text{ g}$ per reading, 2 readings)
> * Records a temperature rise of $8.5^\\\\circ\\\\text{C}$ using a thermometer (accuracy $\\\\pm 0.1^\\\\circ\\\\text{C}$ per reading, 2 readings)
> Calculate the total percentage uncertainty for this experiment.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate the percentage uncertainty for the measuring cylinder:**
> >    $$\\\\%\\\\text{ Uncertainty}_{\\\\text{volume}} = \\\\frac{0.5}{50.0} \\\\times 100 = 1.00\\\\%$$
> > 
> > 2. **Calculate the percentage uncertainty for the balance (2 readings):**
> >    $$\\\\text{Absolute Uncertainty} = 2 \\\\times 0.005\\\\text{ g} = 0.010\\\\text{ g}$$
> >    $$\\\\%\\\\text{ Uncertainty}_{\\\\text{mass}} = \\\\frac{0.010}{2.50} \\\\times 100 = 0.40\\\\%$$
> > 
> > 3. **Calculate the percentage uncertainty for the thermometer (2 readings):**
> >    $$\\\\text{Absolute Uncertainty} = 2 \\\\times 0.1^\\\\circ\\\\text{C} = 0.2^\\\\circ\\\\text{C}$$
> >    $$\\\\%\\\\text{ Uncertainty}_{\\\\text{temperature}} = \\\\frac{0.2}{8.5} \\\\times 100 \\\\approx 2.35\\\\%$$
> > 
> > 4. **Add the individual percentage uncertainties together to find the total:**
> >    $$\\\\text{Total Percentage Uncertainty} = 1.00\\\\% + 0.40\\\\% + 2.35\\\\% = 3.75\\\\%$$

> [!EXAMPLE]
> #### 📝 Worked Example 7: Deducing the Minimum Measurement Value to Limit Error
> **Question:** A student weighs a sample of sodium hydrogencarbonate by difference (requiring two readings) on a balance accurate to $\\\\pm 0.001\\\\text{ g}$ per reading. Calculate the minimum mass of sample, in grams, that must be weighed to ensure the percentage uncertainty in the mass does not exceed $0.10\\\%$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate the absolute uncertainty for the two balance readings:**
> >    $$\\\\text{Absolute Uncertainty} = 2 \\\\times 0.001\\\\text{ g} = 0.002\\\\text{ g}$$
> > 
> > 2. **Set up the percentage uncertainty equation with the maximum limit of 0.10%:**
> >    $$\\\\%\\\\text{ Uncertainty} = \\\\frac{\\\\text{Absolute Uncertainty}}{\\\\text{Mass}} \\\\times 100 \\\\le 0.10\\\\%$$
> > 
> >    $$0.10 \\\\ge \\\\frac{0.002}{\\\\text{Mass}} \\\\times 100$$
> > 
> > 3. **Rearrange the inequality to solve for the mass:**
> >    $$\\\\text{Mass} \\\\ge \\\\frac{0.002 \\\\times 100}{0.10}$$
> >    $$\\\\text{Mass} \\\\ge 2.00\\\\text{ g}$$
> >    * Therefore, the minimum mass that must be weighed is **2.00 g**
`,
        keyPoints: [
            'Always count the number of readings taken with the measuring instrument, such as two readings for a burette titration.',
            'To minimize percentage error, use larger measurements or higher accuracy apparatus.'
        ]
    }
];
