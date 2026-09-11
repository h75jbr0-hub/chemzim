import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Ions and Ionic Bonds";
export const lessonNumber = 3;

export const theoryMarkdown = `
## Ions and Ionic Bonds
This lesson covers the formation of ions, ionic bonding, the giant ionic lattice, and properties of ionic compounds.
`;

const ionicLatticeStableSvg = `
<svg viewBox="0 0 450 250" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
    <radialGradient id="sodiumGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="100%" stop-color="#0284c7" />
    </radialGradient>
    <radialGradient id="chlorideGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#34d399" />
      <stop offset="100%" stop-color="#059669" />
    </radialGradient>
  </defs>

  <rect width="450" height="250" fill="url(#bgGrad)" stroke="#1e293b" stroke-width="1.5" rx="12" />

  <text x="225" y="30" fill="#f8fafc" font-size="12" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Stable Giant Ionic Lattice (Alternating Charges)</text>

  <g stroke="#475569" stroke-width="1" stroke-dasharray="2 2">
    <line x1="100" y1="70" x2="350" y2="70" />
    <line x1="100" y1="115" x2="350" y2="115" />
    <line x1="100" y1="160" x2="350" y2="160" />
    <line x1="100" y1="205" x2="350" y2="205" />
    <line x1="100" y1="70" x2="100" y2="205" />
    <line x1="150" y1="70" x2="150" y2="205" />
    <line x1="200" y1="70" x2="200" y2="205" />
    <line x1="250" y1="70" x2="250" y2="205" />
    <line x1="300" y1="70" x2="300" y2="205" />
    <line x1="350" y1="70" x2="350" y2="205" />
  </g>

  <circle cx="100" cy="70" r="16" fill="url(#chlorideGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="150" cy="70" r="10" fill="url(#sodiumGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="200" cy="70" r="16" fill="url(#chlorideGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="250" cy="70" r="10" fill="url(#sodiumGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="300" cy="70" r="16" fill="url(#chlorideGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="350" cy="70" r="10" fill="url(#sodiumGrad)" stroke="#070f1e" stroke-width="0.5" />

  <circle cx="100" cy="115" r="10" fill="url(#sodiumGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="150" cy="115" r="16" fill="url(#chlorideGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="200" cy="115" r="10" fill="url(#sodiumGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="250" cy="115" r="16" fill="url(#chlorideGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="300" cy="115" r="10" fill="url(#sodiumGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="350" cy="115" r="16" fill="url(#chlorideGrad)" stroke="#070f1e" stroke-width="0.5" />

  <circle cx="100" cy="160" r="16" fill="url(#chlorideGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="150" cy="160" r="10" fill="url(#sodiumGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="200" cy="160" r="16" fill="url(#chlorideGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="250" cy="160" r="10" fill="url(#sodiumGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="300" cy="160" r="16" fill="url(#chlorideGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="350" cy="160" r="10" fill="url(#sodiumGrad)" stroke="#070f1e" stroke-width="0.5" />

  <circle cx="100" cy="205" r="10" fill="url(#sodiumGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="150" cy="205" r="16" fill="url(#chlorideGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="200" cy="205" r="10" fill="url(#sodiumGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="250" cy="205" r="16" fill="url(#chlorideGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="300" cy="205" r="10" fill="url(#sodiumGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="350" cy="205" r="16" fill="url(#chlorideGrad)" stroke="#070f1e" stroke-width="0.5" />

  <g fill="#ffffff" font-size="8" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">
    <text x="100" y="73">-</text>
    <text x="150" y="73">+</text>
    <text x="200" y="73">-</text>
    <text x="250" y="73">+</text>
    <text x="300" y="73">-</text>
    <text x="350" y="73">+</text>
    <text x="100" y="118">+</text>
    <text x="150" y="118">-</text>
    <text x="200" y="118">+</text>
    <text x="250" y="118">-</text>
    <text x="300" y="118">+</text>
    <text x="350" y="118">-</text>
    <text x="100" y="163">-</text>
    <text x="150" y="163">+</text>
    <text x="200" y="163">-</text>
    <text x="250" y="163">+</text>
    <text x="300" y="163">-</text>
    <text x="350" y="163">+</text>
    <text x="100" y="208">+</text>
    <text x="150" y="208">-</text>
    <text x="200" y="208">+</text>
    <text x="250" y="208">-</text>
    <text x="300" y="208">+</text>
    <text x="350" y="208">-</text>
  </g>
</svg>
`;

const ionicLatticeCleavageSvg = `
<svg viewBox="0 0 450 250" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
    <radialGradient id="sodiumGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="100%" stop-color="#0284c7" />
    </radialGradient>
    <radialGradient id="chlorideGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#34d399" />
      <stop offset="100%" stop-color="#059669" />
    </radialGradient>
  </defs>

  <rect width="450" height="250" fill="url(#bgGrad)" stroke="#1e293b" stroke-width="1.5" rx="12" />

  <text x="225" y="30" fill="#f8fafc" font-size="12" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Applied Force Cleaves Crystal (Like Charges Repel)</text>

  <path d="M 60 70 L 110 70" stroke="#ef4444" stroke-width="4" fill="none" />
  <path d="M 110 65 L 120 70 L 110 75 Z" fill="#ef4444" />
  <text x="50" y="60" fill="#ef4444" font-size="10" font-weight="bold" font-family="system-ui, sans-serif">Force</text>

  <line x1="80" y1="137.5" x2="420" y2="137.5" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4 4" />

  <g stroke="#ef4444" stroke-width="1.5" fill="none">
    <path d="M 195 125 Q 200 137 205 125" />
    <path d="M 195 150 Q 200 138 205 150" />
    <path d="M 245 125 Q 250 137 255 125" />
    <path d="M 245 150 Q 250 138 255 150" />
    <path d="M 295 125 Q 300 137 305 125" />
    <path d="M 295 150 Q 300 138 295 150" />
  </g>

  <circle cx="150" cy="70" r="16" fill="url(#chlorideGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="200" cy="70" r="10" fill="url(#sodiumGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="250" cy="70" r="16" fill="url(#chlorideGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="300" cy="70" r="10" fill="url(#sodiumGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="350" cy="70" r="16" fill="url(#chlorideGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="400" cy="70" r="10" fill="url(#sodiumGrad)" stroke="#070f1e" stroke-width="0.5" />

  <circle cx="150" cy="115" r="10" fill="url(#sodiumGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="200" cy="115" r="16" fill="url(#chlorideGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="250" cy="115" r="10" fill="url(#sodiumGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="300" cy="115" r="16" fill="url(#chlorideGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="350" cy="115" r="10" fill="url(#sodiumGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="400" cy="115" r="16" fill="url(#chlorideGrad)" stroke="#070f1e" stroke-width="0.5" />

  <circle cx="100" cy="160" r="16" fill="url(#chlorideGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="150" cy="160" r="10" fill="url(#sodiumGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="200" cy="160" r="16" fill="url(#chlorideGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="250" cy="160" r="10" fill="url(#sodiumGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="300" cy="160" r="16" fill="url(#chlorideGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="350" cy="160" r="10" fill="url(#sodiumGrad)" stroke="#070f1e" stroke-width="0.5" />

  <circle cx="100" cy="205" r="10" fill="url(#sodiumGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="150" cy="205" r="16" fill="url(#chlorideGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="200" cy="205" r="10" fill="url(#sodiumGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="250" cy="205" r="16" fill="url(#chlorideGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="300" cy="205" r="10" fill="url(#sodiumGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="350" cy="205" r="16" fill="url(#chlorideGrad)" stroke="#070f1e" stroke-width="0.5" />

  <g fill="#ffffff" font-size="8" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">
    <text x="150" y="73">-</text>
    <text x="200" y="73">+</text>
    <text x="250" y="73">-</text>
    <text x="300" y="73">+</text>
    <text x="350" y="73">-</text>
    <text x="400" y="73">+</text>
    <text x="150" y="118">+</text>
    <text x="200" y="118">-</text>
    <text x="250" y="118">+</text>
    <text x="300" y="118">-</text>
    <text x="350" y="118">+</text>
    <text x="400" y="118">-</text>
    <text x="100" y="163">-</text>
    <text x="150" y="163">+</text>
    <text x="200" y="163">-</text>
    <text x="250" y="163">+</text>
    <text x="300" y="163">-</text>
    <text x="350" y="163">+</text>
    <text x="100" y="208">+</text>
    <text x="150" y="208">-</text>
    <text x="200" y="208">+</text>
    <text x="250" y="208">-</text>
    <text x="300" y="208">+</text>
    <text x="350" y="208">-</text>
  </g>
</svg>
`;

const dotAndCrossIonicSvg = `
<svg viewBox="0 0 650 250" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgDotGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
  </defs>

  <rect width="650" height="250" fill="url(#bgDotGrad)" stroke="#1e293b" stroke-width="2" rx="14" />
  <text x="325" y="24" fill="#f8fafc" font-size="13" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Ionic Dot-and-Cross Electron Transfer Diagrams</text>

  <!-- Section 1: Sodium Chloride [Na]+ [Cl]- -->
  <g transform="translate(40, 45)">
    <rect width="260" height="180" rx="8" fill="#0f172a" stroke="#334155" stroke-width="1.2" />
    <text x="130" y="22" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">Sodium Chloride (NaCl)</text>
    <text x="130" y="38" fill="#94a3b8" font-size="9" text-anchor="middle">1 electron transferred: Na (2.8.1) → Cl (2.8.7)</text>

    <!-- [Na]+ -->
    <text x="35" y="110" fill="#38bdf8" font-size="28" font-family="sans-serif">[</text>
    <circle cx="65" cy="105" r="24" fill="none" stroke="#38bdf8" stroke-width="1.5" />
    <circle cx="65" cy="105" r="8" fill="#0284c7" />
    <text x="65" y="108" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">Na</text>
    <text x="96" y="110" fill="#38bdf8" font-size="28" font-family="sans-serif">]</text>
    <text x="105" y="85" fill="#38bdf8" font-size="14" font-weight="bold">+</text>
    <text x="65" y="145" fill="#cbd5e1" font-size="9" font-family="sans-serif" text-anchor="middle">2,8</text>

    <!-- [Cl]- -->
    <text x="145" y="110" fill="#34d399" font-size="28" font-family="sans-serif">[</text>
    <circle cx="180" cy="105" r="28" fill="none" stroke="#34d399" stroke-width="1.5" />
    <circle cx="180" cy="105" r="8" fill="#059669" />
    <text x="180" y="108" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">Cl</text>
    <!-- 7 dots + 1 transferred cross -->
    <circle cx="180" cy="77" r="2.5" fill="#34d399" />
    <circle cx="180" cy="133" r="2.5" fill="#34d399" />
    <circle cx="152" cy="105" r="2.5" fill="#34d399" />
    <!-- Transferred cross from Na -->
    <text x="208" y="109" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">×</text>
    <text x="215" y="110" fill="#34d399" font-size="28" font-family="sans-serif">]</text>
    <text x="225" y="85" fill="#34d399" font-size="14" font-weight="bold">-</text>
    <text x="180" y="145" fill="#cbd5e1" font-size="9" font-family="sans-serif" text-anchor="middle">2,8,8</text>
  </g>

  <!-- Section 2: Magnesium Oxide [Mg]2+ [O]2- -->
  <g transform="translate(340, 45)">
    <rect width="260" height="180" rx="8" fill="#0f172a" stroke="#334155" stroke-width="1.2" />
    <text x="130" y="22" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">Magnesium Oxide (MgO)</text>
    <text x="130" y="38" fill="#94a3b8" font-size="9" text-anchor="middle">2 electrons transferred: Mg (2.8.2) → O (2.6)</text>

    <!-- [Mg]2+ -->
    <text x="35" y="110" fill="#fbbf24" font-size="28" font-family="sans-serif">[</text>
    <circle cx="65" cy="105" r="24" fill="none" stroke="#fbbf24" stroke-width="1.5" />
    <circle cx="65" cy="105" r="8" fill="#d97706" />
    <text x="65" y="108" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">Mg</text>
    <text x="96" y="110" fill="#fbbf24" font-size="28" font-family="sans-serif">]</text>
    <text x="105" y="85" fill="#fbbf24" font-size="14" font-weight="bold">2+</text>
    <text x="65" y="145" fill="#cbd5e1" font-size="9" font-family="sans-serif" text-anchor="middle">2,8</text>

    <!-- [O]2- -->
    <text x="145" y="110" fill="#f87171" font-size="28" font-family="sans-serif">[</text>
    <circle cx="180" cy="105" r="26" fill="none" stroke="#f87171" stroke-width="1.5" />
    <circle cx="180" cy="105" r="8" fill="#dc2626" />
    <text x="180" y="108" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">O</text>
    <!-- 6 dots + 2 transferred crosses -->
    <circle cx="180" cy="79" r="2.5" fill="#f87171" />
    <circle cx="180" cy="131" r="2.5" fill="#f87171" />
    <circle cx="154" cy="105" r="2.5" fill="#f87171" />
    <text x="206" y="102" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">×</text>
    <text x="206" y="114" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">×</text>
    <text x="215" y="110" fill="#f87171" font-size="28" font-family="sans-serif">]</text>
    <text x="225" y="85" fill="#f87171" font-size="14" font-weight="bold">2-</text>
    <text x="180" y="145" fill="#cbd5e1" font-size="9" font-family="sans-serif" text-anchor="middle">2,8</text>
  </g>
</svg>
`;

export const lessonParts: LessonPart[] = [
  {
    id: "ionic-formation",
    title: "Formation of Ions",
    type: "text",
    content: `
### ⚛️ How Ions are Formed

An **ion** is an electrically charged particle formed when an atom loses or gains electrons to achieve a stable, full outer shell of electrons (a noble gas configuration).

> [!NOTE]
> ### 📋 Cations vs. Anions
> * **Cation (Positive Ion):**
>   * Formed when a metal atom **loses** valence electrons.
>   * Since it has more protons than electrons, it carries a positive charge.
>   * *Example:* A sodium atom ($2.8.1$) loses 1 electron to form a sodium ion, $Na^+$ ($2.8$).
> * **Anion (Negative Ion):**
>   * Formed when a non-metal atom **gains** electrons.
>   * Since it has more electrons than protons, it carries a negative charge.
>   * *Example:* A chlorine atom ($2.8.7$) gains 1 electron to form a chloride ion, $Cl^-$ ($2.8.8$).

> [!IMPORTANT]
> ### 🧮 Summary of Ion Charges by Group
> | Group | Valence Electrons | Action to gain full shell | Ion Charge | Examples |
> | :---: | :---: | :---: | :---: | :--- |
> | **Group I** | 1 | Loses $1e^-$ | $+1$ | $Li^+, Na^+, K^+$ |
> | **Group II** | 2 | Loses $2e^-$ | $+2$ | $Mg^{2+}, Ca^{2+}, Ba^{2+}$ |
> | **Group III** | 3 | Loses $3e^-$ | $+3$ | $Al^{3+}$ |
> | **Group IV** | 4 | Usually shares electrons (no simple ions) | - | $C, Si$ |
> | **Group V** | 5 | Gains $3e^-$ | $-3$ | $N^{3-}$ (nitride), $P^{3-}$ (phosphide) |
> | **Group VI** | 6 | Gains $2e^-$ | $-2$ | $O^{2-}$ (oxide), $S^{2-}$ (sulfide) |
> | **Group VII** | 7 | Gains $1e^-$ | $-1$ | $F^-, Cl^-, Br^-, I^-$ (halides) |
> | **Group VIII** | 8 | Already full outer shell | None (0) | Noble gases |

> [!EXAMPLE]
> #### 📝 Worked Example 1: Describing Positive Ions
> **Question:** Which statement correctly describes positive ions (cations)?
> 
> **A** Positive ions have more protons than electrons
> 
> **B** Positive ions have more protons than neutrons
> 
> **C** Positive ions have more neutrons than protons
> 
> **D** Positive ions have more electrons than protons
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Analyze Cation Formation:**
> >    * A cation forms when a neutral atom loses one or more negative electrons.
> >    * The number of positive protons in the nucleus remains unchanged.
> > 2. **Compare Particles:**
> >    * Number of protons ($+1$ each) $>$ Number of electrons ($-1$ each), giving a net positive charge.
> > 3. **Conclusion:**
> >    * The correct option is **A**.
        `,
    keyPoints: [
      "Metals lose electrons to form positive cations.",
      "Non-metals gain electrons to form negative anions.",
      "In a positive ion, the number of protons exceeds the number of electrons."
    ]
  },
  {
    id: "dot-and-cross-and-compound-ions",
    title: "Dot-and-Cross Diagrams & Compound Ions",
    type: "text",
    content: `
### ✏️ Dot-and-Cross Diagrams for Ionic Compounds

In Cambridge IGCSE, you must be able to draw and interpret **dot-and-cross diagrams** showing the transfer of electrons from metal atoms to non-metal atoms:

> [!IMPORTANT]
> ### 🔍 Cambridge Rules for Drawing Ionic Dot-and-Cross Diagrams
> 1. **Use Square Brackets:** Enclose each ion in square brackets $[\\dots]$.
> 2. **State the Charge Outside:** Write the charge at the top right of the bracket (e.g. $[Na]^+$, $[O]^{2-}$, $[Mg]^{2+}$).
> 3. **Distinguish Electrons:** Use dots ($\\bullet$) for one element's electrons and crosses ($\\times$) for the other element's electrons so the examiner can see which electrons were transferred.
> 4. **Cation Outer Shell:** Typically drawn with no valence electrons shown (or a full inner shell of 8 electrons).
> 5. **Anion Outer Shell:** Always drawn with 8 electrons (an octet), showing the gained electrons as the symbol of the metal.

> ${svgToken(dotAndCrossIonicSvg)}

> [!BOX]
> ### 📋 Compound (Polyatomic) Ions & Transition Metal Ions
> Compound ions are groups of bonded atoms carrying an overall charge:
> 
> | Name | Formula &amp; Charge | Valency |
> | :--- | :---: | :---: |
> | **Ammonium** | $NH_4^+$ | 1 |
> | **Hydroxide** | $OH^-$ | 1 |
> | **Nitrate** | $NO_3^-$ | 1 |
> | **Ethanoate (Acetate)** | $CH_3COO^-$ | 1 |
> | **Hydrogen carbonate** | $HCO_3^-$ | 1 |
> | **Sulfate** | $SO_4^{2-}$ | 2 |
> | **Carbonate** | $CO_3^{2-}$ | 2 |
> | **Phosphate** | $PO_4^{3-}$ | 3 |
> 
> * **Transition Metals:** Most transition metals form more than one type of positive ion (variable oxidation states):
>   * Iron forms Iron(II) $Fe^{2+}$ and Iron(III) $Fe^{3+}$.
>   * Copper forms Copper(I) $Cu^+$ and Copper(II) $Cu^{2+}$.
>   * **Exceptions with single valency:** Silver is always $Ag^+$, and Zinc is always $Zn^{2+}$.

> [!EXAMPLE]
> #### 📝 Worked Example 2: Particle Information Table
> **Question:** A particle has 11 protons, 10 electrons, and 12 neutrons. What is the symbol and charge of this particle?
> 
> **A** $^{23}_{11}\text{Na}$
> 
> **B** $^{23}_{11}\text{Na}^+$
> 
> **C** $^{23}_{11}\text{Na}^-$
> 
> **D** $^{23}_{12}\text{Mg}^{2+}$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify Element by Protons:**
> >    * Proton number $= 11 \rightarrow$ element is Sodium ($\text{Na}$).
> > 2. **Calculate Nucleon Number:**
> >    * $\text{Nucleon number} = \text{protons} + \text{neutrons} = 11 + 12 = 23$.
> > 3. **Calculate Net Charge:**
> >    * $\text{Charge} = \text{protons} - \text{electrons} = 11 - 10 = +1$.
> > 4. **Assemble Symbol:**
> >    * $^{23}_{11}\text{Na}^+$.
> > 5. **Conclusion:**
> >    * The correct option is **B**.
        `,
    keyPoints: [
      "In ionic dot-and-cross diagrams, use square brackets with charges outside.",
      "Compound ions (like NH₄⁺, OH⁻, NO₃⁻, SO₄²⁻, CO₃²⁻) act as single charged units.",
      "Transition metals have variable charges (e.g. Fe²⁺/Fe³⁺), while Ag is +1 and Zn is +2."
    ]
  },
  {
    id: "ionic-bonding-lattice",
    title: "The Ionic Bond & Lattice",
    type: "text",
    bondingSimulator: {
      initialMode: "ionic"
    },
    content: `
### ⚡ The Ionic Bond

> [!IMPORTANT]
> ### 🧮 Definition: Ionic Bonding
> **Ionic bonding** is the strong **electrostatic attraction** between oppositely charged ions (cations and anions) arranged in a giant 3D lattice structure.

#### 🏛️ The Giant Ionic Lattice
Ionic compounds do not exist as individual molecules. Instead, they form a **giant ionic lattice** where positive and negative ions are arranged in a regular, repeating three-dimensional grid. Each cation is surrounded by anions, and each anion is surrounded by cations.

> ${svgToken(ionicLatticeStableSvg)}
        `,
    keyPoints: [
      "Ionic bonding is the electrostatic attraction between oppositely charged ions.",
      "Ionic compounds form a regular 3D giant lattice structure."
    ]
  },
  {
    id: "ionic-properties",
    title: "Properties of Ionic Compounds",
    type: "text",
    content: `
### 📋 Key Properties of Ionic Structures

The physical properties of ionic compounds are directly caused by the nature of the giant ionic lattice and the strong electrostatic forces holding it together.

> [!BOX]
> ### 🏛️ Physical Properties
> 1. **High Melting & Boiling Points:**
>    * The electrostatic attraction between oppositely charged ions is extremely strong.
>    * It requires a massive amount of thermal energy to break these forces throughout the giant lattice.
> 2. **Electrical Conductivity:**
>    * **Solid State:** Non-conductors (insulators), because the ions are locked in fixed positions in the lattice and cannot move.
>    * **Liquid (Molten/Aqueous):** Good conductors, because the lattice breaks down, freeing the ions to move and carry charge.
> 3. **Brittleness:**
>    * Ionic crystals are highly brittle and shatter when hit.
>    * Applying mechanical stress (a hammer blow) shifts layers of the lattice, aligning like charges next to each other ($+$ next to $+$, and $-$ next to $-$). The resulting strong electrostatic repulsion shatters the crystal apart.

> ${svgToken(ionicLatticeCleavageSvg)}
        `,
    keyPoints: [
      "High melting points are due to strong electrostatic attractions.",
      "Ionic compounds conduct electricity only when molten or dissolved.",
      "Brittleness is caused by repulsion between like charges when layers slide."
    ]
  }
];

