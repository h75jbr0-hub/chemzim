import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Organic Formulae, Homologous Series & Isomerism";
export const lessonNumber = 1;

export const theoryMarkdown = `
## Organic Formulae, Homologous Series & Isomerism
This lesson covers the fundamentals of organic chemistry for Cambridge IGCSE (0620): the definition of organic compounds and hydrocarbons, molecular, structural, and displayed formulae, functional groups, characteristics of homologous series, and structural isomerism in alkanes and alkenes.
`;

const homologousSeriesSvg = `
<svg viewBox="0 0 680 320" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="orgBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
  </defs>

  <rect width="680" height="320" fill="url(#orgBg)" stroke="#1e293b" stroke-width="2" rx="16" />

  <text x="340" y="24" fill="#f8fafc" font-size="14" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Key Functional Groups &amp; Homologous Families in IGCSE Chemistry</text>

  <!-- Card 1: Alkane -->
  <g transform="translate(25, 45)">
    <rect width="145" height="120" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5" />
    <text x="72" y="22" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">Alkanes</text>
    <text x="72" y="42" fill="#94a3b8" font-size="10" text-anchor="middle">General: CₙH₂ₙ₊₂</text>
    <text x="72" y="60" fill="#f8fafc" font-size="10" text-anchor="middle">Single C–C bonds</text>
    <text x="72" y="78" fill="#a5f3fc" font-size="9" text-anchor="middle">Saturated</text>
    <text x="72" y="102" fill="#64748b" font-size="9" text-anchor="middle">e.g. Propane C₃H₈</text>
  </g>

  <!-- Card 2: Alkene -->
  <g transform="translate(185, 45)">
    <rect width="145" height="120" rx="10" fill="#0f172a" stroke="#34d399" stroke-width="1.5" />
    <text x="72" y="22" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">Alkenes</text>
    <text x="72" y="42" fill="#94a3b8" font-size="10" text-anchor="middle">General: CₙH₂ₙ</text>
    <text x="72" y="60" fill="#f8fafc" font-size="10" text-anchor="middle">Double C=C bond</text>
    <text x="72" y="78" fill="#86efac" font-size="9" text-anchor="middle">Unsaturated</text>
    <text x="72" y="102" fill="#64748b" font-size="9" text-anchor="middle">e.g. Ethene C₂H₄</text>
  </g>

  <!-- Card 3: Alcohol -->
  <g transform="translate(345, 45)">
    <rect width="145" height="120" rx="10" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5" />
    <text x="72" y="22" fill="#f59e0b" font-size="12" font-weight="bold" text-anchor="middle">Alcohols</text>
    <text x="72" y="42" fill="#94a3b8" font-size="10" text-anchor="middle">General: CₙH₂ₙ₊₁OH</text>
    <text x="72" y="60" fill="#f8fafc" font-size="10" text-anchor="middle">Hydroxyl group (-OH)</text>
    <text x="72" y="78" fill="#fde68a" font-size="9" text-anchor="middle">Suffix: -ol</text>
    <text x="72" y="102" fill="#64748b" font-size="9" text-anchor="middle">e.g. Ethanol C₂H₅OH</text>
  </g>

  <!-- Card 4: Carboxylic Acid -->
  <g transform="translate(505, 45)">
    <rect width="150" height="120" rx="10" fill="#0f172a" stroke="#ef4444" stroke-width="1.5" />
    <text x="75" y="22" fill="#f87171" font-size="12" font-weight="bold" text-anchor="middle">Carboxylic Acids</text>
    <text x="75" y="42" fill="#94a3b8" font-size="10" text-anchor="middle">General: CₙH₂ₙ₊₁COOH</text>
    <text x="75" y="60" fill="#f8fafc" font-size="10" text-anchor="middle">Carboxyl (-COOH)</text>
    <text x="75" y="78" fill="#fca5a5" font-size="9" text-anchor="middle">Suffix: -oic acid</text>
    <text x="75" y="102" fill="#64748b" font-size="9" text-anchor="middle">e.g. Ethanoic acid</text>
  </g>

  <!-- Bottom Panel: Isomerism illustration -->
  <g transform="translate(25, 180)">
    <rect width="630" height="120" rx="12" fill="#0f172a" stroke="#6366f1" stroke-width="1.5" />
    <text x="315" y="24" fill="#a5b4fc" font-size="12" font-weight="bold" text-anchor="middle">Structural Isomerism in Butane (C₄H₁₀)</text>
    
    <!-- Left: unbranched butane -->
    <g transform="translate(60, 40)">
      <rect width="210" height="60" rx="8" fill="#1e1b4b" fill-opacity="0.4" stroke="#818cf8" stroke-width="1" />
      <text x="105" y="24" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">Butane (unbranched)</text>
      <text x="105" y="44" fill="#94a3b8" font-size="10" font-family="monospace" text-anchor="middle">CH₃–CH₂–CH₂–CH₃</text>
    </g>

    <text x="315" y="75" fill="#f59e0b" font-size="14" font-weight="bold" text-anchor="middle">vs.</text>

    <!-- Right: branched 2-methylpropane -->
    <g transform="translate(360, 40)">
      <rect width="210" height="60" rx="8" fill="#1e1b4b" fill-opacity="0.4" stroke="#818cf8" stroke-width="1" />
      <text x="105" y="24" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">2-Methylpropane (branched)</text>
      <text x="105" y="44" fill="#94a3b8" font-size="10" font-family="monospace" text-anchor="middle">CH₃–CH(CH₃)–CH₃</text>
    </g>
  </g>
</svg>
`;

export const lessonParts: LessonPart[] = [
  {
    id: "formulae-and-homologous-series",
    title: "Formulae, Functional Groups & Homologous Series",
    type: "text",
    content: `
### 🧪 Fundamentals of Organic Chemistry

Organic chemistry is the study of covalent carbon-containing compounds, originally obtained from plants and animals.

> [!NOTE]
> ### 🧬 Essential Formula Definitions
> 1. **General Formula:** A formula that represents the chemical composition of any member of an entire homologous series (e.g. $C_nH_{2n+2}$ for alkanes).
> 2. **Molecular Formula:** The actual number of atoms of each element present in one molecule of a compound (e.g. $C_3H_8$).
> 3. **Structural Formula:** An unambiguous description of the way the atoms in a molecule are arranged, showing which groups are bonded together without necessarily displaying every individual bond (e.g. $CH_3CH_2CH_3$).
> 4. **Displayed Formula:** Shows **ALL** the atoms and **ALL** the covalent bonds in the molecule, showing every single, double, or functional bond explicitly.

> ${svgToken(homologousSeriesSvg)}

> [!BOX]
> ### 📋 Major Homologous Series in Cambridge IGCSE
>
> | Homologous Series | Functional Group | General Formula | Suffix / Ending | Example | Structural Formula |
> | :--- | :--- | :--- | :--- | :--- | :--- |
> | **Alkane** | $C-C$ (single bond) | $C_nH_{2n+2}$ | -ane | Propane | $CH_3CH_2CH_3$ |
> | **Alkene** | $C=C$ (double bond) | $C_nH_{2n}$ | -ene | Propene | $CH_3CH=CH_2$ |
> | **Alcohol** | $-OH$ (hydroxyl) | $C_nH_{2n+1}OH$ | -ol | Propan-1-ol | $CH_3CH_2CH_2OH$ |
> | **Carboxylic Acid** | $-COOH$ (carboxyl) | $C_nH_{2n+1}COOH$ | -oic acid | Propanoic acid | $CH_3CH_2COOH$ |
> | **Ester** | $-COO-$ (ester linkage) | $C_nH_{2n+1}COOC_mH_{2m+1}$ | -oate | Methyl ethanoate | $CH_3COOCH_3$ |

> [!IMPORTANT]
> ### 🔬 Characteristics of a Homologous Series
> A **homologous series** is a family of organic compounds that:
> 1. Have the **same general formula**.
> 2. Have the **same functional group**.
> 3. Possess **similar chemical properties** (because their reactions are dictated by the functional group).
> 4. Exhibit a **gradual trend in physical properties** (e.g. boiling points, melting points, and viscosity increase as carbon chain length increases due to stronger intermolecular forces).
> 5. Consecutive members differ by a **$-CH_2-$ unit** (and a relative molecular mass difference of 14).
`,
    keyPoints: [
      "A displayed formula must show every atom and every single bond explicitly.",
      "Members of a homologous series share the same general formula and functional group.",
      "Consecutive members differ by a CH₂ unit and show a smooth gradation in physical properties."
    ]
  },
  {
    id: "structural-isomerism-and-naming",
    title: "Structural Isomerism & Saturated vs. Unsaturated",
    type: "text",
    content: `
### 🔀 Saturated, Unsaturated & Structural Isomers

> [!NOTE]
> ### ⚛️ Saturated vs. Unsaturated Compounds
> * **Saturated Compounds:** Compounds containing **only single carbon-carbon bonds** ($C-C$, sigma bonds). Carbon atoms hold the maximum possible number of hydrogen atoms (e.g. alkanes).
> * **Unsaturated Compounds:** Compounds containing **one or more carbon-carbon double (or triple) bonds** ($C=C$, pi bonds) (e.g. alkenes).

> [!IMPORTANT]
> ### 🧩 Structural Isomers
> **Structural isomers** are compounds that have the **same molecular formula**, but **different structural formulae** (different connectivity and arrangements of atoms).
> 
> * **Isomers of Butane ($C_4H_{10}$):**
>   1. **Butane (unbranched):** $CH_3-CH_2-CH_2-CH_3$ (Boiling point: $-0.5^\circ\text{C}$)
>   2. **2-Methylpropane (branched):** $CH_3-CH(CH_3)-CH_3$ (Boiling point: $-11.7^\circ\text{C}$)
>   * *Notice:* Branched isomers have lower boiling points because their branching prevents molecules from packing closely together, weakening the intermolecular attractive forces!
> 
> * **Isomers of Butene ($C_4H_8$):**
>   1. **But-1-ene:** $CH_2=CH-CH_2-CH_3$ (Double bond at carbon-1)
>   2. **But-2-ene:** $CH_3-CH=CH-CH_3$ (Double bond at carbon-2)
>   3. **2-Methylpropene (branched):** $CH_2=C(CH_3)-CH_3$

> [!EXAMPLE]
> #### 📝 Worked Example 1: Identifying Homologous Series
> **Question:** Which homologous series is NOT represented in the following compounds: $CH_3CH_2CH_3$, $CH_3CH_2OH$, $CH_3COOH$, and $CH_3CH(CH_3)CH_3$?
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Analyse each formula:**
> >    * $CH_3CH_2CH_3$ is propane (an alkane).
> >    * $CH_3CH_2OH$ is ethanol (an alcohol).
> >    * $CH_3COOH$ is ethanoic acid (a carboxylic acid).
> >    * $CH_3CH(CH_3)CH_3$ is 2-methylpropane (an alkane isomer).
> > 2. **Check the series:** Alkanes, alcohols, and carboxylic acids are all present.
> > 3. **Conclusion:** Alkenes (compounds containing $C=C$) are NOT represented!

> [!EXAMPLE]
> #### 📝 Worked Example 2: Common Chemical Bonds
> **Question:** A student writes down four organic compounds: ethane, ethanoic acid, ethanol, and ethene. Which bond do all four compounds contain?
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Inspect the bonds in each:**
> >    * Ethane ($C_2H_6$): Contains $C-C$ and $C-H$ bonds.
> >    * Ethanoic acid ($CH_3COOH$): Contains $C-C$, $C-H$, $C=O$, $C-O$, and $O-H$ bonds.
> >    * Ethanol ($C_2H_5OH$): Contains $C-C$, $C-H$, $C-O$, and $O-H$ bonds.
> >    * Ethene ($C_2H_4$): Contains a $C=C$ double bond and $C-H$ bonds.
> > 2. **Notice:** Ethene has NO single $C-C$ bond (it has a double $C=C$ bond). Ethane and ethene have NO oxygen atoms.
> > 3. **Conclusion:** All four compounds contain **$C-H$ single bonds**!
`,
    keyPoints: [
      "Structural isomers have identical molecular formulae but different structural arrangements.",
      "Branched alkanes have lower boiling points than straight-chain isomers due to weaker intermolecular surface contacts.",
      "Saturated hydrocarbons contain only single C–C bonds; unsaturated hydrocarbons contain at least one C=C double bond."
    ]
  }
];
