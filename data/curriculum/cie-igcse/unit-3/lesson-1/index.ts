import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Chemical Names and Formulae";
export const lessonNumber = 1;

export const theoryMarkdown = `
## Chemical Names and Formulae
This lesson covers the systematic IUPAC nomenclature, valency rules, formula writing using charges and valencies, and naming conventions for binary and polyatomic compounds in Cambridge IGCSE Chemistry.
`;

const valencyCrossoverSvg = `
<svg viewBox="0 0 680 240" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="valGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
    <marker id="crossArrowCyan" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#38bdf8" />
    </marker>
    <marker id="crossArrowRose" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#f43f5e" />
    </marker>
  </defs>

  <rect width="680" height="240" fill="url(#valGrad)" stroke="#1e293b" stroke-width="2" rx="16" />

  <text x="340" y="28" fill="#f8fafc" font-size="14" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">The Valency Crossover (Swap &amp; Drop) Method</text>

  <!-- Example 1: Aluminium Oxide -->
  <g transform="translate(60, 48)">
    <rect width="240" height="160" rx="12" fill="#0f172a" stroke="#38bdf8" stroke-opacity="0.3" stroke-width="1.5" />
    <text x="120" y="25" fill="#38bdf8" font-size="13" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Aluminium Oxide</text>
    
    <!-- Symbols -->
    <text x="70" y="65" fill="#ffffff" font-size="20" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Al</text>
    <text x="170" y="65" fill="#ffffff" font-size="20" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">O</text>

    <!-- Valencies -->
    <circle cx="70" cy="95" r="14" fill="#38bdf8" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1.5" />
    <text x="70" y="100" fill="#38bdf8" font-size="13" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">3</text>

    <circle cx="170" cy="95" r="14" fill="#f43f5e" fill-opacity="0.2" stroke="#f43f5e" stroke-width="1.5" />
    <text x="170" y="100" fill="#f43f5e" font-size="13" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">2</text>

    <!-- Crossover Arrows -->
    <path d="M 85 95 Q 120 125 155 125" fill="none" stroke="#38bdf8" stroke-width="1.5" marker-end="url(#crossArrowCyan)" />
    <path d="M 155 95 Q 120 125 85 125" fill="none" stroke="#f43f5e" stroke-width="1.5" marker-end="url(#crossArrowRose)" />

    <!-- Result -->
    <text x="120" y="148" fill="#34d399" font-size="16" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Al₂O₃</text>
  </g>

  <!-- Example 2: Sodium Carbonate -->
  <g transform="translate(380, 48)">
    <rect width="240" height="160" rx="12" fill="#0f172a" stroke="#c084fc" stroke-opacity="0.3" stroke-width="1.5" />
    <text x="120" y="25" fill="#c084fc" font-size="13" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Sodium Carbonate</text>

    <!-- Symbols -->
    <text x="70" y="65" fill="#ffffff" font-size="20" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Na⁺</text>
    <text x="170" y="65" fill="#ffffff" font-size="18" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">CO₃²⁻</text>

    <!-- Charges -->
    <circle cx="70" cy="95" r="14" fill="#38bdf8" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1.5" />
    <text x="70" y="100" fill="#38bdf8" font-size="13" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">1</text>

    <circle cx="170" cy="95" r="14" fill="#f43f5e" fill-opacity="0.2" stroke="#f43f5e" stroke-width="1.5" />
    <text x="170" y="100" fill="#f43f5e" font-size="13" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">2</text>

    <!-- Crossover Arrows -->
    <path d="M 85 95 Q 120 125 155 125" fill="none" stroke="#38bdf8" stroke-width="1.5" marker-end="url(#crossArrowCyan)" />
    <path d="M 155 95 Q 120 125 85 125" fill="none" stroke="#f43f5e" stroke-width="1.5" marker-end="url(#crossArrowRose)" />

    <!-- Result -->
    <text x="120" y="148" fill="#34d399" font-size="16" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Na₂CO₃</text>
  </g>
</svg>
`;

export const lessonParts: LessonPart[] = [
    {
        id: "naming-compounds",
        title: "Rules of Naming Compounds",
        type: "text",
        content: `
### 🏷️ Systematic Rules for Naming Compounds

In chemistry, standard IUPAC nomenclature rules ensure that each chemical compound has a clear, unambiguous name.

> [!NOTE]
> ### 📋 Fundamental Naming Conventions
> 
> 1. **Start with the Metal:** If a compound contains a metal and a non-metal, always write and pronounce the metal first:
>    * $\\text{AgBr} \\rightarrow$ Silver bromide
>    * $\\text{NaF} \\rightarrow$ Sodium fluoride
>    * $\\text{K}_2\\text{O} \\rightarrow$ Potassium oxide
> 
> 2. **Roman Numerals for Variable Oxidation States:** If a transition metal can form more than one ion, include its valency (charge) in brackets using Roman numerals:
>    * $\\text{FeCl}_2 \\rightarrow$ Iron(II) chloride (contains $\\text{Fe}^{2+}$)
>    * $\\text{FeCl}_3 \\rightarrow$ Iron(III) chloride (contains $\\text{Fe}^{3+}$)
>    * $\\text{CuO} \\rightarrow$ Copper(II) oxide (contains $\\text{Cu}^{2+}$)
>    * $\\text{Cu}_2\\text{O} \\rightarrow$ Copper(I) oxide (contains $\\text{Cu}^{+}$)
> 
> 3. **Binary Compounds End in '-ide':** Compounds containing only two elements end with the suffix **-ide**:
>    * $\\text{NaCl} \\rightarrow$ Sodium chloride
>    * $\\text{CaBr}_2 \\rightarrow$ Calcium bromide
>    * $\\text{Mg}_3\\text{N}_2 \\rightarrow$ Magnesium nitride
>    * *(Exception: Hydroxides containing the compound ion $\\text{OH}^-$ also end in -ide, e.g. $\\text{NaOH}$ sodium hydroxide).*
> 
> 4. **Compound Ions (with Oxygen) End in '-ate':** Compounds containing polyatomic compound ions (usually containing oxygen) end with the suffix **-ate**:
>    * $\\text{CaCO}_3 \\rightarrow$ Calcium carbonate
>    * $\\text{NaHCO}_3 \\rightarrow$ Sodium hydrogen carbonate
>    * $\\text{KNO}_3 \\rightarrow$ Potassium nitrate
>    * $\\text{MgSO}_4 \\rightarrow$ Magnesium sulfate
>    * $\\text{CH}_3\\text{COONa} \\rightarrow$ Sodium ethanoate
>    * $(\\text{NH}_4)_3\\text{PO}_4 \\rightarrow$ Ammonium phosphate
>    * $(\\text{NH}_4)_2\\text{CO}_3 \\rightarrow$ Ammonium carbonate
> 
> 5. **Molecular Prefixes for Non-Metals:** For covalent compounds formed between two non-metals, Greek prefixes indicate the number of atoms present:
>    * $\\text{CO} \\rightarrow$ Carbon monoxide
>    * $\\text{CO}_2 \\rightarrow$ Carbon dioxide
>    * $\\text{NO} \\rightarrow$ Nitrogen monoxide
>    * $\\text{NO}_2 \\rightarrow$ Nitrogen dioxide
>    * $\\text{N}_2\\text{O}_4 \\rightarrow$ Dinitrogen tetroxide
>    * $\\text{SO}_2 \\rightarrow$ Sulfur dioxide
>    * $\\text{SO}_3 \\rightarrow$ Sulfur trioxide
> 
> 6. **Traditional Common Names:** Memorize these essential standard formulas:
>    * $\\text{H}_2\\text{SO}_4 \\rightarrow$ Sulfuric acid
>    * $\\text{HCl} \\rightarrow$ Hydrochloric acid
>    * $\\text{HNO}_3 \\rightarrow$ Nitric acid
>    * $\\text{H}_2\\text{O} \\rightarrow$ Water
>    * $\\text{NH}_3 \\rightarrow$ Ammonia
>    * $\\text{CH}_4 \\rightarrow$ Methane

### ✍️ Rules for Writing Compound Symbols

1. **Metal + Non-Metal:** Always begin with the metal symbol: $\\text{NaF}$, $\\text{K}_2\\text{O}$, $\\text{MgCl}_2$.
2. **Non-Metal + Non-Metal:**
   * If hydrogen is present, it comes first: $\\text{H}_2\\text{S}$ (hydrogen sulfide), $\\text{HBr}$ (hydrogen bromide).
   * Otherwise, the element with the **lower group number** in the Periodic Table is placed first: $\\text{CO}_2$ (Carbon in Group IV, Oxygen in Group VI), $\\text{NO}$ (Nitrogen in Group V, Oxygen in Group VI).

> [!EXAMPLE]
> #### 📝 Worked Example 1: Naming Polyatomic Salts
> **Question:** What is the correct chemical name of $(\\text{NH}_4)_2\\text{CO}_3$?
> 
> **A** Ammonia carbonate
> 
> **B** Nitrogen hydrogen carbonate
> 
> **C** Ammonium carbonate
> 
> **D** Ammonium carbon oxide
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the Cation (Positive Ion):**
> >    * $\\text{NH}_4^+$ is the **ammonium** ion (not ammonia, which is the neutral gas $\\text{NH}_3$).
> > 2. **Identify the Anion (Negative Ion):**
> >    * $\\text{CO}_3^{2-}$ is the polyatomic **carbonate** ion.
> > 3. **Combine Cation and Anion Names:**
> >    * The compound is named **Ammonium carbonate**.
> > 4. **Conclusion:**
> >    * The correct option is **C**.

> [!EXAMPLE]
> #### 📝 Worked Example 2: Deducing Formula of Transition Metal Oxides
> **Question:** What is the chemical formula of Copper(II) oxide?
> 
> **A** CuO
> 
> **B** Cu₂O
> 
> **C** CuO₂
> 
> **D** Cu₂O₃
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Determine Charges from Name:**
> >    * Copper(II) indicates $\\text{Cu}^{2+}$ (charge of $+2$).
> >    * Oxide is from Group VI, forming $\\text{O}^{2-}$ (charge of $-2$).
> > 2. **Balance the Charges:**
> >    * One $\\text{Cu}^{2+}$ balances one $\\text{O}^{2-}$: $+2 + (-2) = 0$.
> > 3. **Conclusion:**
> >    * The ratio is $1:1$, so the formula is **CuO**. The correct option is **A**.
        `,
        keyPoints: [
            "Start with the metal name; binary compounds of two elements end in -ide.",
            "Compounds containing oxygen-rich polyatomic ions end in -ate.",
            "Roman numerals specify the oxidation state of transition metals.",
            "Non-metal binary compounds use numerical prefixes (mono-, di-, tri-, tetra-)."
        ]
    },
    {
        id: "valency-and-formulae",
        title: "Valency & Writing Chemical Formulae",
        type: "text",
        content: `
### ⚖️ What Does a Chemical Formula Tell Us?

* **In Giant Structures (e.g. NaCl, SiO₂):** The formula gives the simplest whole-number ratio of ions or atoms in the lattice.
* **In Molecular Compounds (e.g. H₂O, CO₂):** The formula gives the exact actual number of atoms bonded together in a single molecule.

### 🔢 Valency (Combining Power)

> [!IMPORTANT]
> ### 🧮 Definition: Valency
> **Valency** is the combining power of an atom or radical, representing the number of electrons that an atom must lose, gain, or share to attain a stable noble-gas electron configuration.

> [!NOTE]
> ### 📋 Periodic Table Group Valencies
> 
> | Group | I | II | III | IV | V | VI | VII | VIII |
> | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
> | **Valency (Combining Power)** | **1** | **2** | **3** | **4** | **3** | **2** | **1** | **0** |
> | **Typical Compound** | NaCl | MgCl₂ | AlCl₃ | SiCl₄ | PH₃ | H₂S | HCl | — |

### 🔄 The Crossover Method (Swap and Drop)

To balance formulas so the overall charge is zero:
1. Write the symbols of the elements or compound ions side by side.
2. Write their valencies (or charges without sign) above each symbol.
3. Cross over the numbers to become subscripts of the opposite symbol.
4. Simplify the ratio to the lowest whole numbers (if both are 2, simplify to 1, e.g. $\\text{Ca}_2\\text{O}_2 \\rightarrow \\text{CaO}$).
5. Use brackets around polyatomic ions if the subscript is greater than 1, e.g. $\\text{Mg}(\\text{NO}_3)_2$.

${svgToken(valencyCrossoverSvg)}

> [!EXAMPLE]
> #### 📝 Worked Example 1: Formula of Magnesium Phosphate
> **Question:** What is the correct chemical formula of magnesium phosphate?
> 
> **A** MgSO₄
> 
> **B** Mg₃(PO₄)₂
> 
> **C** MgPO₄
> 
> **D** Mg₂(PO₄)₃
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the Ions and Their Charges:**
> >    * Magnesium is in Group II: forms $\\text{Mg}^{2+}$ (valency = 2).
> >    * Phosphate is a polyatomic ion: forms $\\text{PO}_4^{3-}$ (valency = 3).
> > 2. **Apply the Crossover Method:**
> >    * Swap valencies: The 3 from phosphate becomes the subscript for Mg, and the 2 from magnesium becomes the subscript for $\\text{PO}_4$.
> > 3. **Apply Brackets to Polyatomic Ion:**
> >    * Because there are two phosphate groups, wrap $\\text{PO}_4$ in brackets: $\\text{Mg}_3(\\text{PO}_4)_2$.
> > 4. **Verify Charge Neutrality:**
> >    * $3 \\times (+2) + 2 \\times (-3) = +6 - 6 = 0$.
> > 5. **Conclusion:**
> >    * The formula is **Mg₃(PO₄)₂**. The correct option is **B**.

> [!EXAMPLE]
> #### 📝 Worked Example 2: Formula of Barium Nitrate
> **Question:** What is the correct chemical formula of Barium nitrate?
> 
> **A** Ba(NO₂)₂
> 
> **B** BaNO₃
> 
> **C** Ba(NO₃)₂
> 
> **D** Ba₂NO₃
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify Ions:**
> >    * Barium (Ba) is in Group II $\\rightarrow \\text{Ba}^{2+}$ (valency 2).
> >    * Nitrate is $\\text{NO}_3^-$ (valency 1).
> > 2. **Cross Over Subscripts:**
> >    * $\\text{Ba}_1(\\text{NO}_3)_2 \\rightarrow \\text{Ba}(\\text{NO}_3)_2$.
> > 3. **Conclusion:**
> >    * The correct option is **C** (or D in original options matching $\\text{Ba}(\\text{NO}_3)_2$).
        `,
        keyPoints: [
            "Valency is the combining power of an element (electrons lost, gained, or shared).",
            "Group I-IV valencies equal Group Number; Group V-VII valencies equal (8 - Group Number).",
            "Use brackets around compound ions whenever a subscript of 2 or more is applied."
        ]
    }
];
