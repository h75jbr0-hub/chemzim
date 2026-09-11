import { LessonPart } from '../../../registry';

export const lessonTitle = "Relative Masses of Atoms, Molecules and Formulae";
export const lessonNumber = 2;

export const theoryMarkdown = `
## Relative Masses
This lesson covers Relative Atomic Mass (Ar), Relative Molecular Mass (Mr), Relative Formula Mass, hydrated salts, and water of crystallisation in Cambridge IGCSE Chemistry.
`;

export const lessonParts: LessonPart[] = [
    {
        id: "atomic-and-molecular-mass",
        title: "Ar, Mr and Formula Units",
        type: "text",
        content: `
### ⚛️ Standards of Atomic Mass

Atoms have minuscule masses (around $10^{-24}\\text{ g}$), making it impractical to use grams for individual particles. Instead, chemists compare all atomic masses to a standard isotope: **Carbon-12 ($^{12}\\text{C}$)**.

> [!IMPORTANT]
> ### 🧮 1. Relative Atomic Mass ($A_r$)
> The **Relative Atomic Mass ($A_r$)** of an element is the average mass of its naturally occurring isotopes compared to $\\frac{1}{12}\\text{th}$ of the mass of a carbon-12 atom.
> * $A_r$ has **no units** because it is a relative ratio.
> * Example values from the Periodic Table: $\\text{H} = 1$, $\\text{C} = 12$, $\\text{O} = 16$, $\\text{Na} = 23$, $\\text{Cl} = 35.5$, $\\text{Cu} = 64$.

> [!IMPORTANT]
> ### 🧮 2. Relative Molecular Mass ($M_r$)
> The **Relative Molecular Mass ($M_r$)** is the sum of the relative atomic masses of all the atoms present in one molecule of a covalent substance.
> * For water ($\\text{H}_2\\text{O}$): $M_r = (2 \\times 1) + 16 = 18$.
> * For carbon dioxide ($\\text{CO}_2$): $M_r = 12 + (2 \\times 16) = 44$.

> [!IMPORTANT]
> ### 🧮 3. Relative Formula Mass ($M_r$ of Ionic Compounds)
> Ionic compounds like $\\text{NaCl}$ or $\\text{CaCO}_3$ do not exist as simple individual molecules; they exist as giant 3D ionic lattices.
> * The **Formula Unit** is the simplest empirical formula representing the ratio of ions in the crystal lattice.
> * The **Relative Formula Mass** is the sum of the relative atomic masses of all the atoms shown in its formula unit.
> * For Calcium Carbonate ($\\text{CaCO}_3$):
>   $$M_r = 40 + 12 + (3 \\times 16) = 100$$

> [!EXAMPLE]
> #### 📝 Worked Example 1: Deducing an Unknown Element from $M_r$
> **Question:** A compound with the formula $\\text{XF}_2$ has a relative formula mass of $78$. What is element $\\text{X}$? ($A_r$: $\\text{F} = 19$, $\\text{Ne} = 20$, $\\text{Ar} = 40$, $\\text{Ca} = 40$, $\\text{Zr} = 91$)
> 
> **A** Argon
> 
> **B** Neon
> 
> **C** Zirconium
> 
> **D** Calcium
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Set Up the Formula Mass Equation:**
> >    $$M_r(\\text{XF}_2) = A_r(\\text{X}) + 2 \\times A_r(\\text{F})$$
> > 2. **Substitute Known Values:**
> >    $$78 = A_r(\\text{X}) + (2 \\times 19)$$
> >    $$78 = A_r(\\text{X}) + 38$$
> > 3. **Solve for $A_r(\\text{X})$:**
> >    $$A_r(\\text{X}) = 78 - 38 = 40$$
> > 4. **Identify the Element:**
> >    * Both Argon and Calcium have $A_r = 40$.
> >    * However, Argon is a noble gas in Group VIII that does not form binary ionic compounds with fluorine.
> >    * Calcium is a metal in Group II that readily forms the ionic fluoride $\\text{CaF}_2$.
> > 5. **Conclusion:**
> >    * Element X is **Calcium**. The correct option is **D**.
        `,
        keyPoints: [
            "Ar is the average mass of isotopes compared to 1/12th the mass of a Carbon-12 atom.",
            "Mr is calculated by adding the Ar values of all constituent atoms in the chemical formula.",
            "Relative formula mass is used for giant ionic compounds with empirical formula units."
        ]
    },
    {
        id: "hydrates-and-water-of-crystallisation",
        title: "Hydrates & Water of Crystallisation",
        type: "text",
        content: `
### 💧 Water of Crystallisation

When some salts crystallise from an aqueous solution, water molecules become chemically bonded into their regular ionic crystal framework.

> [!IMPORTANT]
> ### 🧮 Key Definitions
> * **Water of Crystallisation:** Water molecules that are chemically bonded into the crystal structure of a salt.
> * **Hydrated Salt:** A compound containing water of crystallisation chemically incorporated in its crystal lattice.
>   * Represented with a dot ($\\cdot$), e.g. $\\text{CuSO}_4 \\cdot 5\\text{H}_2\\text{O}$ (hydrated copper(II) sulfate).
> * **Anhydrous Salt:** A salt that has lost all of its water of crystallisation (usually by heating), leaving a dry powder.
>   $$\\text{CuSO}_4 \\cdot 5\\text{H}_2\\text{O (blue)} \\xrightarrow{\\Delta} \\text{CuSO}_4 \\text{ (white anhydrous)} + 5\\text{H}_2\\text{O}$$

### 🧮 Step-by-Step Calculation of Hydrate Formula Masses

When calculating the $M_r$ of a hydrated compound, compute the anhydrous mass first, then add the total mass of the water molecules ($n \\times 18$):

> [!EXAMPLE]
> #### 📝 Worked Example: Calculating Formula Masses of Common Hydrates
> **1. Cobalt(II) chloride hexahydrate: $\\text{CoCl}_2 \\cdot 6\\text{H}_2\\text{O}$**
> * $A_r$: $\\text{Co} = 59$, $\\text{Cl} = 35.5$, $\\text{H} = 1$, $\\text{O} = 16$
> * Anhydrous $\\text{CoCl}_2 = 59 + (2 \\times 35.5) = 130$
> * Water $6\\text{H}_2\\text{O} = 6 \\times [ (2 \\times 1) + 16 ] = 6 \\times 18 = 108$
> * **Total $M_r = 130 + 108 = 238$**
> 
> **2. Copper(II) sulfate pentahydrate: $\\text{CuSO}_4 \\cdot 5\\text{H}_2\\text{O}$**
> * $A_r$: $\\text{Cu} = 64$, $\\text{S} = 32$, $\\text{O} = 16$, $\\text{H}_2\\text{O} = 18$
> * Anhydrous $\\text{CuSO}_4 = 64 + 32 + (4 \\times 16) = 160$
> * Water $5\\text{H}_2\\text{O} = 5 \\times 18 = 90$
> * **Total $M_r = 160 + 90 = 250$**
> 
> **3. Basic copper carbonate (Malachite): $\\text{Cu}_2\\text{CO}_3(\\text{OH})_2$**
> * $M_r = (2 \\times 64) + 12 + (3 \\times 16) + 2 \\times (16 + 1) = 128 + 12 + 48 + 34 = 222$
> 
> **4. Sulfuric acid: $\\text{H}_2\\text{SO}_4$**
> * $M_r = (2 \\times 1) + 32 + (4 \\times 16) = 98$

> [!EXAMPLE]
> #### 📝 Worked Example 2: Determining Value of $x$ in a Hydrate by Heating
> **Question:** A student prepares crystals of hydrated magnesium sulfate ($\\text{MgSO}_4 \\cdot x\\text{H}_2\\text{O}$).
> After drying the crystals, the student weighs them and heats them strongly until a constant mass is reached:
> $$\\text{MgSO}_4 \\cdot x\\text{H}_2\\text{O} \\rightarrow \\text{MgSO}_4 + x\\text{H}_2\\text{O}$$
> 
> | Experimental Measurement | Mass (g) |
> | :--- | :---: |
> | Mass of hydrated crystals | 17.2 |
> | Mass of dry crystals (anhydrous $\\text{MgSO}_4$) | 8.3 |
> 
> Determine the value of $x$ in $\\text{MgSO}_4 \\cdot x\\text{H}_2\\text{O}$. ($A_r$: $\\text{Mg} = 24$, $\\text{S} = 32$, $\\text{O} = 16$, $\\text{H} = 1$)
> 
> **A** 2
> 
> **B** 5
> 
> **C** 3
> 
> **D** 7
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Find Mass of Water Lost:**
> >    $$\\text{Mass of water} = \\text{Hydrated mass} - \\text{Anhydrous mass}$$
> >    $$\\text{Mass of water} = 17.2\\text{ g} - 8.3\\text{ g} = 8.9\\text{ g}$$
> > 2. **Calculate Moles of Anhydrous $\\text{MgSO}_4$ and Water:**
> >    * $M_r(\\text{MgSO}_4) = 24 + 32 + (4 \\times 16) = 120\\text{ g/mol}$
> >    * $\\text{Moles of } \\text{MgSO}_4 = \\frac{8.3}{120} \\approx 0.06917\\text{ mol}$
> >    * $M_r(\\text{H}_2\\text{O}) = 18\\text{ g/mol}$
> >    * $\\text{Moles of } \\text{H}_2\\text{O} = \\frac{8.9}{18} \\approx 0.4944\\text{ mol}$
> > 3. **Find the Mole Ratio ($x$):**
> >    $$x = \\frac{0.4944}{0.06917} \\approx 7.15 \\rightarrow 7$$
> > 4. **Conclusion:**
> >    * The formula is $\\text{MgSO}_4 \\cdot 7\\text{H}_2\\text{O}$ ($x = 7$). The correct option is **D**.
        `,
        keyPoints: [
            "Water of crystallisation is chemically bound in the salt lattice.",
            "Heating drives off water of crystallisation to produce an anhydrous salt.",
            "The value of x is found by calculating the mole ratio of water lost to anhydrous salt."
        ]
    }
];
