import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Carboxylic Acids, Esters & Synthetic Polymers";
export const lessonNumber = 6;

export const theoryMarkdown = `
## Carboxylic Acids, Esters & Synthetic Polymers
This lesson covers the homologous series of carboxylic acids (CnH2n+1COOH) and their weak acidic reactions, esterification reactions between carboxylic acids and alcohols (producing sweet-smelling esters), addition polymerisation (poly(ethene)), condensation polymerisation (nylon and PET polyester), and non-biodegradable plastics disposal challenges.
`;

const esterAndPolymerSvg = `
<svg viewBox="0 0 680 320" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="epBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
  </defs>

  <rect width="680" height="320" fill="url(#epBg)" stroke="#1e293b" stroke-width="2" rx="16" />

  <text x="340" y="24" fill="#f8fafc" font-size="14" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Esterification &amp; Polymerisation Mechanics in IGCSE Chemistry</text>

  <!-- Left: Esterification Reaction Box -->
  <g transform="translate(25, 45)">
    <rect width="305" height="255" rx="12" fill="#0f172a" stroke="#ec4899" stroke-width="1.5" />
    <rect x="0" y="0" width="305" height="35" rx="12" fill="#be185d" fill-opacity="0.2" />
    <text x="152" y="22" fill="#f472b6" font-size="12" font-weight="bold" text-anchor="middle">1. Esterification (Making Esters)</text>

    <text x="15" y="60" fill="#f8fafc" font-size="10" font-family="monospace">Ethanoic acid + Ethanol ⇌ Ethyl ethanoate + H₂O</text>
    <text x="15" y="80" fill="#94a3b8" font-size="9">CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O</text>

    <text x="15" y="112" fill="#38bdf8" font-size="11" font-weight="bold">Conditions:</text>
    <text x="15" y="130" fill="#94a3b8" font-size="10">• Heat gently under reflux</text>
    <text x="15" y="146" fill="#94a3b8" font-size="10">• Catalyst: Concentrated sulfuric acid (H₂SO₄)</text>

    <text x="15" y="178" fill="#34d399" font-size="11" font-weight="bold">Properties &amp; Uses of Esters:</text>
    <text x="15" y="196" fill="#f8fafc" font-size="10">• Volatile liquids with pleasant sweet/fruity smells</text>
    <text x="15" y="212" fill="#f8fafc" font-size="10">• Artificial food flavourings (e.g. apple, banana)</text>
    <text x="15" y="228" fill="#f8fafc" font-size="10">• Perfumes and cosmetics</text>
    <text x="15" y="244" fill="#f8fafc" font-size="10">• Organic solvents for paints, glues &amp; nail polish</text>
  </g>

  <!-- Right: Polymerisation Comparison Box -->
  <g transform="translate(350, 45)">
    <rect width="305" height="255" rx="12" fill="#0f172a" stroke="#8b5cf6" stroke-width="1.5" />
    <rect x="0" y="0" width="305" height="35" rx="12" fill="#6d28d9" fill-opacity="0.2" />
    <text x="152" y="22" fill="#a78bfa" font-size="12" font-weight="bold" text-anchor="middle">2. Addition vs. Condensation Polymers</text>

    <text x="15" y="58" fill="#38bdf8" font-size="11" font-weight="bold">• Addition Polymerisation:</text>
    <text x="15" y="76" fill="#94a3b8" font-size="10">Monomers contain C=C double bonds.</text>
    <text x="15" y="92" fill="#f8fafc" font-size="10">ONLY ONE product is formed (no small molecules lost).</text>
    <text x="15" y="108" fill="#64748b" font-size="9">e.g. Ethene → Poly(ethene)</text>

    <text x="15" y="138" fill="#a855f7" font-size="11" font-weight="bold">• Condensation Polymerisation:</text>
    <text x="15" y="156" fill="#94a3b8" font-size="10">Two different monomers with two functional groups.</text>
    <text x="15" y="172" fill="#f8fafc" font-size="10">Eliminates a small molecule (usually H₂O or HCl).</text>
    <text x="15" y="190" fill="#c084fc" font-size="9">1. Polyamide (Nylon): Amine + Carboxylic acid</text>
    <text x="15" y="206" fill="#c084fc" font-size="9">2. Polyester (Terylene/PET): Diol + Dicarboxylic acid</text>

    <text x="15" y="234" fill="#f87171" font-size="10" font-weight="bold">Environmental Issue: Non-biodegradable plastics</text>
  </g>
</svg>
`;

export const lessonParts: LessonPart[] = [
  {
    id: "carboxylic-acids-and-esters",
    title: "Carboxylic Acids & The Formation of Esters",
    type: "text",
    content: `
### 🍋 Carboxylic Acids & Esterification

Carboxylic acids form a homologous series with the general formula **$C_nH_{2n+1}COOH$** and the carboxyl functional group (**$-COOH$**).

> [!NOTE]
> ### 📋 Carboxylic Acid Characteristics
> * **General Formula:** $C_nH_{2n+1}COOH$ (with functional group $-COOH$).
> * **Physical Properties:** Colourless liquids with sharp, **pungent vinegar smells**.
> * **Indicator Test:** Turns **blue litmus paper red** (or turns universal indicator orange/yellow, $\text{pH} \approx 3 - 5$) because it produces $H^+$ ions in solution.
> 
> * **First Four Carboxylic Acids:**
>   * **Methanoic acid ($HCOOH$):** $H-COOH$ (ant stings and stinging nettles).
>   * **Ethanoic acid ($CH_3COOH$):** Vinegar (~$5\%$ aqueous solution).
>   * **Propanoic acid ($C_2H_5COOH$):** $CH_3CH_2COOH$.
>   * **Butanoic acid ($C_3H_7COOH$):** $CH_3CH_2CH_2COOH$.

> [!IMPORTANT]
> ### 🧪 Typical Weak Acid Reactions of Ethanoic Acid
> Ethanoic acid only **partially dissociates** in water ($\text{CH}_3\text{COOH} \rightleftharpoons \text{CH}_3\text{COO}^- + \text{H}^+$):
> 
> 1. **With Reactive Metals (e.g. Sodium / Magnesium):**
>    $$2\text{CH}_3\text{COOH(aq)} + 2\text{Na(s)} \rightarrow 2\text{CH}_3\text{COONa(aq)} + \text{H}_2\text{(g)}$$
>    *(Forms sodium ethanoate salt and bubbles of hydrogen gas)*
> 
> 2. **With Bases / Alkalis (e.g. Sodium hydroxide):**
>    $$\text{CH}_3\text{COOH(aq)} + \text{NaOH(aq)} \rightarrow \text{CH}_3\text{COONa(aq)} + \text{H}_2\text{O(l)}$$
>    *(Neutralisation producing sodium ethanoate and water)*
> 
> 3. **With Carbonates & Hydrogen carbonates:**
>    $$2\text{CH}_3\text{COOH(aq)} + \text{CaCO}_3\text{(s)} \rightarrow (\text{CH}_3\text{COO})_2\text{Ca(aq)} + \text{H}_2\text{O(l)} + \text{CO}_2\text{(g)}$$
>    *(Vigorous effervescence with carbon dioxide gas)*

> ${svgToken(esterAndPolymerSvg)}

> [!IMPORTANT]
> ### 🍓 Esters & Esterification
> An **ester** is formed when a carboxylic acid reacts with an alcohol in a reversible condensation reaction catalyzed by **concentrated sulfuric acid ($H_2SO_4$)**:
> 
> $$\text{CH}_3\text{COOH(l)} + \text{C}_2\text{H}_5\text{OH(l)} \rightleftharpoons \text{CH}_3\text{COOC}_2\text{H}_5\text{(l)} + \text{H}_2\text{O(l)} \quad \text{(conc. } \text{H}_2\text{SO}_4, \text{heat)}$$
> 
> * **Naming & Formula Rules for Esters:**
>   * In the **name**, the alcohol alkyl part comes first (e.g. *propyl* from propanol).
>   * In the **formula**, the acid comes first (e.g. $\text{CH}_3\text{COO}-$ from ethanoic acid).
>   * **Examples:**
>     1. $\text{HCOOC}_3\text{H}_7$ = **Propyl methanoate**
>     2. $\text{CH}_3\text{COOC}_2\text{H}_5$ = **Ethyl ethanoate**
>     3. $\text{CH}_3\text{CH}_2\text{COOCH}_3$ = **Methyl propanoate**
`,
    keyPoints: [
      "Carboxylic acids are weak acids that turn blue litmus red and react with metals, bases, and carbonates.",
      "Esters have sweet, fruity smells and are formed by condensing a carboxylic acid and alcohol using conc. H₂SO₄.",
      "In ester naming, the alcohol alkyl group comes first, followed by the carboxylate ending in -oate."
    ]
  },
  {
    id: "synthetic-polymers-and-environment",
    title: "Synthetic Polymers (Addition & Condensation) & Plastics",
    type: "text",
    content: `
### 🧵 Polymers: Natural, Synthetic & Environmental Issues

A **polymer** is a large molecule (macromolecule) built up from many smaller repeating units called **monomers**.
* The number $n$ represents a very large, variable number (chains are not all the exact same length).

> [!NOTE]
> ### 🌿 Types of Polymers
> 1. **Natural Polymers:** Proteins, starch, cellulose, keratin, and collagen.
> 2. **Synthetic Polymers (Plastics):** Can be molded into durable shapes without breaking.

> [!IMPORTANT]
> ### 🧬 Major Polymer Classes
> 
> | Polymer | Monomers | Type of Polymerisation | Linkage |
> | :--- | :--- | :--- | :--- |
> | **Protein** | Amino acids (contain $-NH_2$ and $-COOH$) | Condensation | **Amide (peptide) linkage** ($-CONH-$) |
> | **Nylon (Polyamide)** | Dicarboxylic acid + Diamine | Condensation | **Amide linkage** ($-CONH-$) |
> | **Terylene / PET (Polyester)** | Dicarboxylic acid + Diol | Condensation | **Ester linkage** ($-COO-$) |
> | **Poly(ethene)** | Ethene ($CH_2=CH_2$) | Addition | **Single $C-C$ bonds only** |

> [!BOX]
> ### 🧪 Addition vs. Condensation Polymers
> * **Addition:** Alkenes link together by opening their $C=C$ double bond; only ONE product is formed.
> * **Condensation:** Difunctional monomers react together with the loss of a small molecule ($H_2O$ or $HCl$).
> * **Hydrolysis:** Chemical breakdown of condensation polymers (proteins, polyesters) using water, acids, or enzymes. PET can be hydrolyzed back into monomers and re-polymerized!

> [!WARNING]
> ### 🛑 Properties & Environmental Problems of Plastics
> * **Properties:** Electrical and thermal insulators; chemically unreactive (not corroded by air, water, or acids); strong and lightweight.
> * **Environmental Challenges (Non-Biodegradable):**
>   1. **Landfills:** Persist for centuries, causing shortage of landfill sites and visual pollution.
>   2. **Oceans & Wildlife:** Ingestion blocks digestive tracts of marine animals.
>   3. **Toxic Incineration:** Burning produces greenhouse gases ($CO_2$) and toxic acidic fumes (e.g. $HCl$, $HCN$).
`,
    keyPoints: [
      "Addition polymers are made from alkenes without eliminating any small molecule.",
      "Proteins and nylon feature amide linkages (-CONH-); Terylene (PET) features ester linkages (-COO-).",
      "Hydrolysis breaks down condensation polymers using water and acid/enzyme catalysts.",
      "Plastics are non-biodegradable, causing landfill shortages, ocean hazards, and toxic fumes upon burning."
    ]
  }
];
