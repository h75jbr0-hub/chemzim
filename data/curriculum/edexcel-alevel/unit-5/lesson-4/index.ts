import { LessonPart } from '../../../registry';

export const lessonTitle = "Organic Nitrogen Compounds: Amines, Amides, Amino Acids & Proteins";
export const lessonNumber = 4;

export const theoryMarkdown = `
# Topic 19: Organic Nitrogen Compounds: Amines, Amides, Amino Acids and Proteins
This lesson covers the nomenclature and reactions of amines (aliphatic and aromatic), the preparation and properties of amides, the chemistry of amino acids and zwitterions, peptide bond formation, protein structure, and condensation polymers including nylon and proteins.
`;

export const parts: LessonPart[] = [
    {
        id: 'amines-structure-nomenclature-u5-l4',
        title: 'Amines: Structure, Nomenclature & Basicity',
        type: 'text',
        content: `
> [!NOTE]
> ### 🧪 What are Amines?
> Amines are organic compounds derived from ammonia ($\\text{NH}_3$) by replacing one or more hydrogen atoms with organic (alkyl or aryl) groups:
> * **Primary amine ($1°$):** One H replaced: $\\text{R-NH}_2$ (e.g. **butylamine**, methylamine, phenylamine)
> * **Secondary amine ($2°$):** Two H replaced: $\\text{R}_2\\text{NH}$ (e.g. dimethylamine)
> * **Tertiary amine ($3°$):** Three H replaced: $\\text{R}_3\\text{N}$ (e.g. trimethylamine)
> * **Quaternary ammonium salt:** All four H replaced: $[\\text{R}_4\\text{N}]^+\\text{X}^-$ (e.g. tetramethylammonium chloride)

> [!IMPORTANT]
> ### 🔬 Basicity of Amines
> Amines are bases because the nitrogen atom has a **lone pair of electrons** that can accept a proton ($\\text{H}^+$):
> $$\\text{R-NH}_2 + \\text{H}_2\\text{O} \\rightleftharpoons \\text{R-NH}_3^+ + \\text{OH}^-$$
> * **Aliphatic amines** (e.g. $\\text{CH}_3\\text{NH}_2$) are **stronger bases** than ammonia because alkyl groups donate electron density to the nitrogen atom (inductive effect), making its lone pair more available.
> * **Aromatic amines** (e.g. **phenylamine**, $\\text{C}_6\\text{H}_5\\text{NH}_2$) are **weaker bases** than ammonia because the lone pair on nitrogen is **delocalized into the benzene ring** $\\pi$-system, making it less available to accept a proton.
> * **Order of basicity:** Primary aliphatic amine > $\\text{NH}_3$ > Phenylamine (aromatic amine)
`,
        keyPoints: [
            'Primary amines have –NH₂; secondary have –NH; tertiary have –N (no H).',
            'Aliphatic amines are stronger bases than ammonia; aromatic amines are weaker because N lone pair delocalizes into the ring.',
            'All amines are bases: R-NH₂ + H⁺ → R-NH₃⁺'
        ]
    },
    {
        id: 'reactions-of-amines-u5-l4',
        title: 'Reactions of Amines (Aliphatic & Aromatic)',
        type: 'text',
        content: `
> [!NOTE]
> ### ⚗️ Key Reactions of Primary Aliphatic Amines (using butylamine, $\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{CH}_2\\text{NH}_2$)
> 1. **With water:** Form alkaline solutions: $\\text{RNH}_2 + \\text{H}_2\\text{O} \\rightleftharpoons \\text{RNH}_3^+ + \\text{OH}^-$
> 2. **With acids:** Form alkylammonium salts: $\\text{RNH}_2 + \\text{HCl} \\rightarrow \\text{RNH}_3^+\\text{Cl}^-$ (butylammonium chloride)
> 3. **With halogenoalkanes:** Nucleophilic substitution (N-alkylation) to give secondary, then tertiary amines
> 4. **With acyl chlorides ($\\text{RCOCl}$):** Give amides: $\\text{R'NH}_2 + \\text{RCOCl} \\rightarrow \\text{RCONHR'} + \\text{HCl}$
> 5. **With copper(II) ions:** Form complex ions (ligand exchange): e.g. $[\\text{Cu(NH}_2\\text{R)}_4]^{2+}$

> [!IMPORTANT]
> ### 🏭 Preparation of Primary Aliphatic Amines
> **From halogenoalkanes:** Nucleophilic substitution with excess concentrated ammonia under pressure and heat:
> $$\\text{R-Br} + 2\\text{NH}_3 \\xrightarrow{\\text{heat, pressure}} \\text{R-NH}_2 + \\text{NH}_4\\text{Br}$$
> **From nitriles (reduction):** Reduction using lithium aluminium hydride ($\\text{LiAlH}_4$) in dry ether:
> $$\\text{R-CN} + 4[\\text{H}] \\xrightarrow{\\text{LiAlH}_4 / \\text{dry ether}} \\text{R-CH}_2\\text{NH}_2$$

> [!BOX]
> ### 🌸 Aromatic Amines: Preparation of Phenylamine ($\\text{C}_6\\text{H}_5\\text{NH}_2$)
> Phenylamine is prepared by the **reduction** of nitrobenzene:
> $$\\text{C}_6\\text{H}_5\\text{NO}_2 + 6[\\text{H}] \\xrightarrow{\\text{Sn / conc. HCl, then NaOH}} \\text{C}_6\\text{H}_5\\text{NH}_2 + 2\\text{H}_2\\text{O}$$
> * Reagents: Tin (Sn) and concentrated hydrochloric acid, followed by aqueous sodium hydroxide.
`,
        keyPoints: [
            'Amines react with acids to form salts: R-NH₂ + HCl → R-NH₃⁺Cl⁻',
            'Aliphatic amines prepared from halogenoalkanes + excess NH₃, or by reduction of nitriles with LiAlH₄.',
            'Phenylamine prepared by reducing nitrobenzene with Sn/conc. HCl, then NaOH.'
        ]
    },
    {
        id: 'diazonium-azo-coupling-u5-l4',
        title: 'Diazonium Ions & Azo Coupling (Dyes)',
        type: 'text',
        content: `
> [!IMPORTANT]
> ### ⚗️ Formation of Benzenediazonium Ions
> Phenylamine reacts with nitrous acid ($\\text{HNO}_2$) generated in situ from $\\text{NaNO}_2 + \\text{HCl}$ at **$0–5°\\text{C}$**:
> $$\\text{C}_6\\text{H}_5\\text{NH}_2 + \\text{HNO}_2 + \\text{HCl} \\xrightarrow{0–5°\\text{C}} [\\text{C}_6\\text{H}_5\\text{N}_2]^+\\text{Cl}^- + 2\\text{H}_2\\text{O}$$
> The temperature must be kept below $5°\\text{C}$ because diazonium ions are **thermally unstable** and decompose rapidly above $5°\\text{C}$.

> [!BOX]
> ### 🎨 Azo Coupling Reaction (Formation of Azo Dyes)
> Benzenediazonium ion couples with phenol (in alkaline conditions, $pH \\approx 8–9$) or other activated aromatic compounds to form brilliantly coloured **azo dyes** containing the $-\\text{N=N-}$ (azo) group:
> $$[\\text{C}_6\\text{H}_5\\text{N}_2]^+ + \\text{C}_6\\text{H}_5\\text{OH} \\xrightarrow{\\text{NaOH(aq)}} \\text{C}_6\\text{H}_5\\text{-N=N-C}_6\\text{H}_4\\text{OH} + \\text{H}^+$$
> * Alkaline $pH$ deprotonates phenol to the highly reactive **phenoxide** anion $\\text{C}_6\\text{H}_5\\text{O}^-$.
> * The orange/red product is an **azo dye**.
`,
        keyPoints: [
            'Diazonium ion formed from phenylamine + HNO₂ (NaNO₂ + HCl) at 0–5°C.',
            'Above 5°C, the diazonium ion decomposes — temperature control is critical.',
            'Azo coupling in alkaline conditions with phenol forms brilliantly coloured azo dyes (–N=N– group).'
        ]
    },
    {
        id: 'amides-condensation-polymers-u5-l4',
        title: 'Amides & Condensation Polymers (Nylon)',
        type: 'text',
        content: `
> [!NOTE]
> ### 🧬 Amides
> Amides contain the functional group $\\text{-CO-NH-}$ (peptide/amide link).
> * **Preparation from acyl chlorides:** $\\text{RCOCl} + \\text{R'NH}_2 \\rightarrow \\text{RCONHR'} + \\text{HCl}$
> * **Hydrolysis of amides:** Heated under reflux with dilute acid or alkali:
>   * Acid hydrolysis: $\\text{RCONH}_2 + \\text{H}_2\\text{O} + \\text{HCl} \\rightarrow \\text{RCOOH} + \\text{NH}_4\\text{Cl}$

> [!IMPORTANT]
> ### 🏭 Condensation Polymerisation
> **Polyamides (Nylon)** are formed by condensation polymerisation between a diamine and a dicarboxylic acid (or diacyl chloride), eliminating small molecules ($\\text{H}_2\\text{O}$ or $\\text{HCl}$):

> **Nylon-6,6** (from hexane-1,6-diamine + hexanedioic acid):
> $$\\text{H}_2\\text{N-(CH}_2)_6\\text{-NH}_2 + \\text{HOOC-(CH}_2)_4\\text{-COOH} \\rightarrow [-\\text{NH-(CH}_2)_6\\text{-NH-CO-(CH}_2)_4\\text{-CO-}]_n + n\\text{H}_2\\text{O}$$

> **Addition polymer** (poly(ethanol) / PVA): different mechanism — no byproduct lost.

> [!BOX]
> ### 🔬 Physical Properties of Polyamides
> * Nylon fibres are **strong** because extensive **hydrogen bonding** between the $\\text{C=O}$ and $\\text{N-H}$ groups of adjacent polymer chains.
> * Poly(ethanol) is **soluble in water** due to hydrogen bonding between $\\text{-OH}$ groups and water molecules (used in laundry bags / liquid-detergent capsules).
`,
        keyPoints: [
            'Amides formed from acyl chlorides + amines, eliminating HCl.',
            'Nylon-6,6 formed by condensation polymerisation of hexane-1,6-diamine + hexanedioic acid, losing H₂O.',
            'Nylon is strong due to extensive H-bonding between –C=O and –N–H of adjacent chains.'
        ]
    },
    {
        id: 'amino-acids-proteins-u5-l4',
        title: 'Amino Acids, Zwitterions & Protein Structure',
        type: 'text',
        content: `
> [!NOTE]
> ### 🧬 Amino Acids
> Amino acids contain both an **amino group** ($\\text{-NH}_2$) and a **carboxyl group** ($\\text{-COOH}$) on the same carbon atom (the $\\alpha$-carbon):
> $$\\text{H}_2\\text{N-CHR-COOH}$$
> * **Amphoteric:** React with both acids AND bases.
> * **Optical activity:** Except glycine, all $\\alpha$-amino acids have a chiral centre and exist as enantiomers.

> [!IMPORTANT]
> ### ⚖️ Zwitterions and Isoelectric Point
> At a specific $pH$ called the **isoelectric point ($pI$)**, the amino group is protonated and the carboxyl group is deprotonated — forming a **zwitterion** (overall neutral dipolar ion):
> $$\\text{H}_3\\text{N}^+\\text{-CHR-COO}^- \\quad (\\text{Zwitterion})$$
> * In **acid ($pH < pI$):** The carboxylate group is protonated: $\\text{H}_3\\text{N}^+\\text{-CHR-COOH}$ (net positive charge, migrates to cathode in electrophoresis)
> * At **$pI$:** Zwitterion — net zero charge, does NOT migrate in electrophoresis.
> * In **alkali ($pH > pI$):** The ammonium group is deprotonated: $\\text{H}_2\\text{N-CHR-COO}^-$ (net negative charge, migrates to anode)

> [!BOX]
> ### 🧬 Peptide Bonds and Protein Structure
> Amino acids link together through **condensation** reactions, forming **peptide (amide) bonds** ($\\text{-CO-NH-}$) and releasing water:
> $$\\text{H}_2\\text{N-CHR}^1\\text{-COOH} + \\text{H}_2\\text{N-CHR}^2\\text{-COOH} \\rightarrow \\text{H}_2\\text{N-CHR}^1\\text{-CO-NH-CHR}^2\\text{-COOH} + \\text{H}_2\\text{O}$$
> * **Primary structure:** The specific sequence of amino acids joined by covalent peptide bonds.
> * **Secondary structure:** Regular spatial arrangement stabilised by hydrogen bonds between $\\text{C=O}$ and $\\text{N-H}$ groups ($\\alpha$-helix, $\\beta$-pleated sheet).
> * **Tertiary structure:** Overall 3D folding stabilised by disulfide bridges ($\\text{-S-S-}$), ionic interactions, and hydrophobic interactions.
> * **Hydrolysis of peptides:** Treating with $6\\text{ mol dm}^{-3}$ $\\text{HCl}$ at $110°\\text{C}$ for 24 h breaks all peptide bonds.
`,
        keyPoints: [
            'Amino acids contain –NH₂ and –COOH on the same α-carbon; they are amphoteric and (except glycine) chiral.',
            'At the isoelectric point (pI), amino acids exist as neutral zwitterions (H₃N⁺–CHR–COO⁻).',
            'Peptide bonds form by condensation between –COOH and –NH₂ groups, releasing H₂O.',
            'Protein secondary structure is held by H-bonds between C=O and N–H of the peptide backbone.',
            'Protein tertiary structure is stabilised by disulfide bridges, ionic bonds, and van der Waals forces.'
        ]
    }
];
