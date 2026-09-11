import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Acids, Bases & The Theory of Strong vs. Weak";
export const lessonNumber = 2;

export const theoryMarkdown = `
## Acids, Bases & The Theory of Strong vs. Weak
This lesson covers the Brønsted-Lowry definition of acids (proton donors) and bases (proton acceptors), the vital distinction between strong and weak acids/alkalis based on degree of dissociation, and how this impacts electrical conductivity.
`;

const conductivitySvg = `
<svg viewBox="0 0 680 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="condBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
  </defs>

  <rect width="680" height="300" fill="url(#condBg)" stroke="#1e293b" stroke-width="2" rx="16" />

  <text x="340" y="24" fill="#f8fafc" font-size="14" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Electrical Conductivity: Strong Acid vs. Weak Acid</text>

  <!-- Left: Strong Acid (Bright Bulb) -->
  <g transform="translate(40, 45)">
    <rect width="280" height="235" rx="12" fill="#0f172a" stroke="#38bdf8" stroke-opacity="0.3" stroke-width="1.5" />
    <text x="140" y="22" fill="#38bdf8" font-size="13" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Strong Acid (e.g. 1.0 mol/dm³ HCl)</text>

    <!-- Circuit & Bulb -->
    <!-- Bulb (Bright glowing) -->
    <circle cx="140" cy="55" r="14" fill="#fde047" fill-opacity="0.9" stroke="#eab308" stroke-width="2" />
    <!-- Glow rays -->
    <line x1="140" y1="32" x2="140" y2="24" stroke="#fde047" stroke-width="2" />
    <line x1="160" y1="42" x2="168" y2="36" stroke="#fde047" stroke-width="2" />
    <line x1="162" y1="65" x2="170" y2="70" stroke="#fde047" stroke-width="2" />
    <line x1="120" y1="42" x2="112" y2="36" stroke="#fde047" stroke-width="2" />
    <line x1="118" y1="65" x2="110" y2="70" stroke="#fde047" stroke-width="2" />
    <text x="140" y="59" fill="#0f172a" font-size="10" font-weight="bold" text-anchor="middle">BRIGHT</text>

    <!-- Wires -->
    <path d="M 126 55 L 70 55 L 70 120" fill="none" stroke="#64748b" stroke-width="2" />
    <path d="M 154 55 L 210 55 L 210 120" fill="none" stroke="#64748b" stroke-width="2" />

    <!-- Beaker -->
    <rect x="50" y="110" width="180" height="95" rx="6" fill="#0284c7" fill-opacity="0.15" stroke="#475569" stroke-width="1.5" />

    <!-- Electrodes -->
    <rect x="75" y="95" width="16" height="85" fill="#334155" stroke="#94a3b8" />
    <rect x="189" y="95" width="16" height="85" fill="#334155" stroke="#94a3b8" />

    <!-- Ions (many H+ and Cl-) -->
    <g fill="#f87171" font-size="10" font-weight="bold" text-anchor="middle">
      <text x="108" y="135">H⁺</text>
      <text x="135" y="150">H⁺</text>
      <text x="165" y="132">H⁺</text>
      <text x="110" y="170">H⁺</text>
      <text x="145" y="180">H⁺</text>
    </g>
    <g fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">
      <text x="135" y="130">Cl⁻</text>
      <text x="160" y="160">Cl⁻</text>
      <text x="115" y="150">Cl⁻</text>
      <text x="170" y="175">Cl⁻</text>
    </g>

    <text x="140" y="220" fill="#34d399" font-size="11" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">100% ionised → High [H⁺] → Good Conductor</text>
  </g>

  <!-- Right: Weak Acid (Dim Bulb) -->
  <g transform="translate(360, 45)">
    <rect width="280" height="235" rx="12" fill="#0f172a" stroke="#c084fc" stroke-opacity="0.3" stroke-width="1.5" />
    <text x="140" y="22" fill="#c084fc" font-size="13" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Weak Acid (e.g. 1.0 mol/dm³ CH₃COOH)</text>

    <!-- Circuit & Bulb -->
    <!-- Bulb (Dim glowing) -->
    <circle cx="140" cy="55" r="14" fill="#78350f" fill-opacity="0.5" stroke="#b45309" stroke-width="1.5" />
    <text x="140" y="59" fill="#fde047" font-size="10" font-weight="bold" text-anchor="middle">DIM</text>

    <!-- Wires -->
    <path d="M 126 55 L 70 55 L 70 120" fill="none" stroke="#64748b" stroke-width="2" />
    <path d="M 154 55 L 210 55 L 210 120" fill="none" stroke="#64748b" stroke-width="2" />

    <!-- Beaker -->
    <rect x="50" y="110" width="180" height="95" rx="6" fill="#c084fc" fill-opacity="0.1" stroke="#475569" stroke-width="1.5" />

    <!-- Electrodes -->
    <rect x="75" y="95" width="16" height="85" fill="#334155" stroke="#94a3b8" />
    <rect x="189" y="95" width="16" height="85" fill="#334155" stroke="#94a3b8" />

    <!-- Mostly un-ionised molecules + very few ions -->
    <g fill="#94a3b8" font-size="9" font-family="system-ui, sans-serif" text-anchor="middle">
      <text x="140" y="130">CH₃COOH</text>
      <text x="110" y="152">CH₃COOH</text>
      <text x="165" y="155">CH₃COOH</text>
      <text x="140" y="175">CH₃COOH</text>
    </g>
    <g fill="#f87171" font-size="10" font-weight="bold" text-anchor="middle">
      <text x="115" y="172">H⁺</text>
    </g>
    <g fill="#c084fc" font-size="9" font-weight="bold" text-anchor="middle">
      <text x="165" y="172">CH₃COO⁻</text>
    </g>

    <text x="140" y="220" fill="#f87171" font-size="11" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">&lt; 1% ionised → Low [H⁺] → Poor Conductor</text>
  </g>
</svg>
`;

export const lessonParts: LessonPart[] = [
  {
    id: "proton-donor-acceptor",
    title: "Brønsted-Lowry Definition: Proton Donors & Acceptors",
    type: "text",
    content: `
### ⚛️ The Brønsted-Lowry Theory

In Cambridge IGCSE Chemistry, acids and bases are defined in terms of **proton transfer**:

> [!IMPORTANT]
> ### 🧮 Core Definitions
> * **Acid:** A **proton donor** (a substance that releases $\text{H}^+$ ions in aqueous solution).
>   * *Remember:* A hydrogen atom has 1 proton and 1 electron. When it loses its electron to become $\text{H}^+$, only a single proton remains. Therefore, an $\text{H}^+$ ion is literally a **proton**!
> * **Base:** A **proton acceptor** (a substance that accepts $\text{H}^+$ ions).
> * **Alkali:** A **soluble base** that dissolves in water to produce hydroxide ions ($\text{OH}^-$).
>   * *Rule:* "All alkalis are bases, but not all bases are alkalis!" (e.g. $\text{CuO}$ is an insoluble base, while $\text{NaOH}$ is a soluble base/alkali).

> [!NOTE]
> ### 💧 Soluble vs. Insoluble Hydroxides & Oxides
> * **Soluble Bases (Alkalis):**
>   * Group I metal hydroxides: Sodium hydroxide ($\text{NaOH}$), Potassium hydroxide ($\text{KOH}$).
>   * Aqueous ammonia: $\text{NH}_3\text{(aq)} / \text{NH}_4\text{OH}$.
>   * Calcium hydroxide ($\text{Ca(OH)}_2$): Partially soluble (used as **limewater**).
>   * Barium hydroxide ($\text{Ba(OH)}_2$).
> * **Insoluble Bases:**
>   * Transition metal oxides and hydroxides: Copper(II) oxide ($\text{CuO}$), Iron(III) oxide ($\text{Fe}_2\text{O}_3$), Copper(II) hydroxide ($\text{Cu(OH)}_2$).
>   * They accept protons from acids to form salts, but do not dissolve in neutral water.
`,
    keyPoints: [
      "Acids are proton donors (release H⁺ ions).",
      "Bases are proton acceptors (accept H⁺ ions).",
      "Alkalis are soluble bases that produce OH⁻ ions in aqueous solution."
    ]
  },
  {
    id: "strong-vs-weak-acids-bases",
    title: "Strong vs. Weak Acids and Alkalis",
    type: "text",
    content: `
### 🔬 Degree of Dissociation (Ionisation)

The terms **strong** and **weak** refer strictly to the **extent of ionisation** in water, NOT the concentration!

> ${svgToken(conductivitySvg)}

> [!IMPORTANT]
> ### ⚡ Strong Acids vs. Weak Acids
> 
> 1. **Strong Acids:**
>    * Completely dissociate (**100% ionised**) into ions in aqueous solution.
>    * Reaction goes to completion (single arrow $\\rightarrow$):
>      $$\\text{HCl(g)} \\rightarrow \\text{H}^+\\text{(aq)} + \\text{Cl}^-\\text{(aq)}$$
>    * **Examples:** Hydrochloric acid ($\text{HCl}$), Sulfuric acid ($\text{H}_2\text{SO}_4$), Nitric acid ($\text{HNO}_3$), Hydrobromic acid ($\text{HBr}$).
>    * High concentration of $\text{H}^+$ $\rightarrow$ **$\text{pH } 0 - 3$**.
>    * **Electrical Conductivity:** Excellent conductor of electricity (test bulb shines **brightly**).
> 
> 2. **Weak Acids:**
>    * Only **partially dissociate** (much less than $1\%$, reversible equilibrium $\rightleftharpoons$):
>      $$\text{CH}_3\text{COOH(aq)} \rightleftharpoons \text{H}^+\text{(aq)} + \text{CH}_3\text{COO}^-\text{(aq)}$$
>    * Most molecules remain intact and unionised.
>    * **Examples (Organic acids):** Ethanoic acid (vinegar), Citric acid (lemons/oranges), Methanoic acid (ant stings), Carbonic acid (fizzy drinks).
>    * Low concentration of $\text{H}^+$ $\rightarrow$ **$\text{pH } 4 - 6$**.
>    * **Electrical Conductivity:** Poor conductor (test bulb glows **dimly**).

> [!NOTE]
> ### 🧪 Strong Alkalis vs. Weak Alkalis
> * **Strong Alkalis:** Fully ionised in solution to produce a high $[\text{OH}^-]$ ($\text{pH } 11 - 14$).
>   * $\text{NaOH(s)} \rightarrow \text{Na}^+\text{(aq)} + \text{OH}^-\text{(aq)}$
>   * Examples: $\text{NaOH}$, $\text{KOH}$, $\text{Ba(OH)}_2$.
> * **Weak Alkalis:** Partially ionised in solution to produce a low $[\text{OH}^-]$ ($\text{pH } 8 - 10$).
>   * $\text{NH}_3\text{(aq)} + \text{H}_2\text{O(l)} \rightleftharpoons \text{NH}_4^+\text{(aq)} + \text{OH}^-\text{(aq)}$
>   * Examples: Aqueous ammonia ($\text{NH}_3\text{(aq)}$), amines ($\text{CH}_3\text{NH}_2$).
`,
    keyPoints: [
      "Strong acids/alkalis dissociate completely in water; weak acids/alkalis dissociate only partially.",
      "Strong acids (HCl, H₂SO₄, HNO₃) have pH 0-3 and show high electrical conductivity (bright bulb).",
      "Weak acids (ethanoic acid, citric acid) have pH 4-6 and show low electrical conductivity (dim bulb)."
    ]
  }
];
