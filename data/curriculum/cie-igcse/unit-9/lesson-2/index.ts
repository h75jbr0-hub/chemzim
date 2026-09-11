import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Reactivity Series";
export const lessonNumber = 2;

export const theoryMarkdown = `
## The Reactivity Series of Metals
This lesson covers the order of reactivity (K, Na, Li, Ca, Mg, Al, [C], Zn, Fe, Sn, Pb, [H], Cu, Ag, Au, Pt), deduced from reactions with water, steam, and acids, displacement reactions, thermal stability of metal carbonates, and determining reactivity order experimentally.
`;

// Compact SVG Diagram: Reactivity Series & Reactions (650x260)
const reactivitySeriesSvg = `
<svg viewBox="0 0 650 260" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgRsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
    <marker id="arrowUpGreen" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#10b981" />
    </marker>
  </defs>

  <rect width="650" height="260" fill="url(#bgRsGrad)" stroke="#1e293b" stroke-width="2" rx="14" />
  <text x="325" y="24" fill="#f8fafc" font-size="13" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">The Reactivity Series of Metals (Reactions &amp; Extraction)</text>

  <!-- Left Card: The Series with extraction limits -->
  <g transform="translate(25, 42)">
    <rect width="320" height="198" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="1.2" />

    <g transform="translate(15, 20)">
      <!-- Arrow Up -->
      <line x1="20" y1="160" x2="20" y2="15" stroke="#10b981" stroke-width="2.5" marker-end="url(#arrowUpGreen)" />
      <text x="10" y="90" fill="#34d399" font-size="8.5" font-weight="bold" transform="rotate(-90 10 90)" text-anchor="middle">Most Reactive ↑</text>

      <!-- Elements -->
      <text x="40" y="25" fill="#f87171" font-size="9" font-weight="bold">K, Na, Li, Ca</text>
      <text x="145" y="25" fill="#94a3b8" font-size="8">React with cold water | Extracted by electrolysis</text>

      <text x="40" y="55" fill="#fbbf24" font-size="9" font-weight="bold">Mg, Al</text>
      <text x="145" y="55" fill="#94a3b8" font-size="8">React with steam | Extracted by electrolysis</text>

      <rect x="35" y="65" width="250" height="18" fill="#334155" rx="3" opacity="0.5" />
      <text x="40" y="78" fill="#38bdf8" font-size="8.5" font-weight="bold">[Carbon, C]</text>
      <text x="110" y="78" fill="#e2e8f0" font-size="7.5">Reference non-metal for reduction</text>

      <text x="40" y="105" fill="#a3e635" font-size="9" font-weight="bold">Zn, Fe, Sn, Pb</text>
      <text x="145" y="105" fill="#94a3b8" font-size="8">React with acid | Reduced by Carbon (smelting)</text>

      <rect x="35" y="115" width="250" height="18" fill="#334155" rx="3" opacity="0.5" />
      <text x="40" y="128" fill="#f59e0b" font-size="8.5" font-weight="bold">[Hydrogen, H]</text>
      <text x="115" y="128" fill="#e2e8f0" font-size="7.5">Metals below cannot react with dilute acid</text>

      <text x="40" y="155" fill="#94a3b8" font-size="9" font-weight="bold">Cu, Ag, Au, Pt</text>
      <text x="145" y="155" fill="#cbd5e1" font-size="8">Unreactive | Found native as uncombined elements</text>
    </g>
  </g>

  <!-- Right Card: Displacement & Thermal Stability -->
  <g transform="translate(360, 42)">
    <rect width="265" height="198" rx="10" fill="#0f172a" stroke="#fbbf24" stroke-width="1.2" />
    <text x="132" y="22" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">Displacement &amp; Heat Stability</text>

    <!-- Displacement Box -->
    <rect x="15" y="40" width="235" height="65" rx="6" fill="#1e293b" stroke="#334155" />
    <text x="25" y="55" fill="#38bdf8" font-size="9" font-weight="bold">Displacement Reaction:</text>
    <text x="25" y="70" fill="#f8fafc" font-size="8.5">Zn(s) + CuSO₄(aq) → ZnSO₄(aq) + Cu(s)</text>
    <text x="25" y="85" fill="#cbd5e1" font-size="7.5">• Blue solution turns colorless</text>
    <text x="25" y="96" fill="#cbd5e1" font-size="7.5">• Zinc dissolves &amp; reddish-brown copper deposits</text>

    <!-- Carbonates Thermal Decomposition -->
    <rect x="15" y="115" width="235" height="70" rx="6" fill="#1e293b" stroke="#334155" />
    <text x="25" y="130" fill="#f87171" font-size="9" font-weight="bold">Thermal Stability of Carbonates:</text>
    <text x="25" y="146" fill="#cbd5e1" font-size="7.5">• Group I (Na, K): Do NOT decompose on heating</text>
    <text x="25" y="160" fill="#cbd5e1" font-size="7.5">• CaCO₃ → CaO + CO₂ (needs strong heating)</text>
    <text x="25" y="174" fill="#cbd5e1" font-size="7.5">• CuCO₃ → CuO + CO₂ (decomposes very easily: green → black)</text>
  </g>
</svg>
`;

export const lessonParts: LessonPart[] = [
  {
    id: 'ci-u9-l2-part1',
    title: 'The Reactivity Series of Metals',
    type: 'text',
    content: `
> [!NOTE]
> ### 🪜 The Order of Reactivity
> The **reactivity series** places metals in order of their chemical reactivity, governed by their tendency to **lose electrons and form positive ions**:
>
> $$\\\\text{K} > \\\\text{Na} > \\\\text{Li} > \\\\text{Ca} > \\\\text{Mg} > \\\\text{Al} > [\\\\text{C}] > \\\\text{Zn} > \\\\text{Fe} > \\\\text{Sn} > \\\\text{Pb} > [\\\\text{H}] > \\\\text{Cu} > \\\\text{Ag} > \\\\text{Au} > \\\\text{Pt}$$
>
> * **Mnemonic:** *"Please Send Little Cats, Monkeys And Cute Zebras In Large Heavy Cages, Securely Guarded by Platypus"*

> [!BOX]
> ### 📊 Reactivity Summary & Extraction Connections
>
> ${svgToken(reactivitySeriesSvg)}

> [!IMPORTANT]
> ### 🔍 Deducing Reactivity Experimentally
> 1. **Reaction with Cold Water:**
>    * $K, Na, Li, Ca$ react rapidly with cold water producing $H_2(g)$ and alkaline hydroxide.
> 2. **Reaction with Steam:**
>    * $Mg, Al, Zn, Fe$ react with steam when heated to form metal oxide $+ H_2(g)$.
> 3. **Reaction with Dilute Hydrochloric Acid:**
>    * Metals above $[H]$ react to produce hydrogen gas. The higher the metal, the more vigorous the effervescence.
>    * Metals below $[H]$ ($Cu, Ag, Au$) show **no reaction**.
    `,
    keyPoints: [
      "Metals higher in the series lose electrons more easily to form cations.",
      "Metals above hydrogen react with dilute acids; metals below hydrogen do not.",
      "Carbon and hydrogen are non-metals included in the series for comparison."
    ]
  },
  {
    id: 'ci-u9-l2-part2',
    title: 'Displacement Reactions & Thermal Stability',
    type: 'text',
    content: `
> [!TIP]
> ### 🔄 Metal Displacement Reactions
> A **more reactive metal will displace a less reactive metal** from an aqueous solution of its salt or from its solid metal oxide:
> 
> 1. **Displacement in Aqueous Solution:**
>    $$Zn(s) + CuSO_4(aq) \\\\rightarrow ZnSO_4(aq) + Cu(s)$$
>    * **Observations:**
>      * Blue color of copper(II) sulfate fades to a **colorless** solution of zinc sulfate.
>      * Grey zinc granules dissolve, and a **red-brown solid** (copper metal) precipitates.
> 
> 2. **The Thermite Reaction (Oxide Displacement):**
>    $$2Al(s) + Fe_2O_3(s) \\\\rightarrow Al_2O_3(s) + 2Fe(l)$$
>    * Aluminum is more reactive than iron and reduces iron(III) oxide in an extremely exothermic reaction.
>    * The heat generated melts the iron ($>1500^\\\\circ\\\\text{C}$), which is used to **weld railway and tram tracks** together on-site.

> [!WARNING]
> ### 🔥 Thermal Stability of Metal Compounds
> * The **more reactive the metal**, the more stable its chemical compounds, and the **more resistant it is to thermal decomposition**:
>   1. **Group I Carbonates ($Na_2CO_3, K_2CO_3$):** **Do NOT decompose** upon heating with a laboratory Bunsen burner.
>   2. **Middle Metal Carbonates ($CaCO_3, MgCO_3, ZnCO_3$):** Decompose on strong heating:
>      $$CaCO_3(s) \\\\xrightarrow{\\\\Delta} CaO(s) + CO_2(g) \\\\quad (\\\\text{white solid stays white})$$
>   3. **Low Reactivity Carbonates ($CuCO_3$):** Decompose very easily on gentle heating:
>      $$CuCO_3(s) \\\\xrightarrow{\\\\Delta} CuO(s) + CO_2(g) \\\\quad (\\\\text{green solid turns black})$$
    `,
    keyPoints: [
      "A more reactive metal displaces a less reactive metal from its salts and oxides.",
      "Thermite reaction (Al + Fe₂O₃ → Al₂O₃ + 2Fe) produces molten iron to weld railway lines.",
      "Group I carbonates do not decompose on heating; CuCO₃ decomposes readily from green to black."
    ]
  }
];


