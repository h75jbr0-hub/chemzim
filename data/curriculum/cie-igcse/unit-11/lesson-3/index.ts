import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Alkanes: Properties, Combustion & Substitution";
export const lessonNumber = 3;

export const theoryMarkdown = `
## Alkanes: Properties, Combustion & Substitution
This lesson covers the homologous series of alkanes: their general formula, saturated nature, physical trends, complete and incomplete combustion reactions, free-radical photochemical mono-substitution with halogens (UV light requirement), and catalytic cracking of long-chain alkanes.
`;

const alkaneReactionsSvg = `
<svg viewBox="0 0 680 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="alkBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
  </defs>

  <rect width="680" height="300" fill="url(#alkBg)" stroke="#1e293b" stroke-width="2" rx="16" />

  <text x="340" y="24" fill="#f8fafc" font-size="14" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Key Chemical Reactions of Alkanes (Saturated Hydrocarbons)</text>

  <!-- Box 1: Combustion -->
  <g transform="translate(30, 45)">
    <rect width="290" height="230" rx="12" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5" />
    <rect x="0" y="0" width="290" height="35" rx="12" fill="#d97706" fill-opacity="0.2" />
    <text x="145" y="22" fill="#f59e0b" font-size="12" font-weight="bold" text-anchor="middle">1. Combustion Reactions</text>

    <text x="15" y="55" fill="#38bdf8" font-size="11" font-weight="bold">• Complete Combustion (Excess O₂):</text>
    <text x="20" y="75" fill="#f8fafc" font-size="10" font-family="monospace">CH₄ + 2O₂ → CO₂ + 2H₂O + heat</text>
    <text x="20" y="92" fill="#94a3b8" font-size="9">Produces harmless CO₂ and clean blue flame</text>

    <text x="15" y="125" fill="#ef4444" font-size="11" font-weight="bold">• Incomplete Combustion (Limited O₂):</text>
    <text x="20" y="145" fill="#fca5a5" font-size="10" font-family="monospace">2CH₄ + 3O₂ → 2CO + 4H₂O + heat</text>
    <text x="20" y="165" fill="#f87171" font-size="10" font-family="monospace">CH₄ + O₂ → C (soot) + 2H₂O</text>
    <text x="20" y="188" fill="#94a3b8" font-size="9">Produces toxic CO (carbon monoxide) &amp; soot</text>
    <text x="20" y="208" fill="#fbbf24" font-size="9">CO binds irreversibly to haemoglobin!</text>
  </g>

  <!-- Box 2: Substitution & Cracking -->
  <g transform="translate(350, 45)">
    <rect width="300" height="230" rx="12" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5" />
    <rect x="0" y="0" width="300" height="35" rx="12" fill="#0284c7" fill-opacity="0.2" />
    <text x="150" y="22" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">2. Photochemical Substitution &amp; Cracking</text>

    <text x="15" y="55" fill="#34d399" font-size="11" font-weight="bold">• Photochemical Substitution (UV Light):</text>
    <text x="20" y="75" fill="#f8fafc" font-size="10" font-family="monospace">C₂H₆ + Br₂ —(UV)→ C₂H₅Br + HBr</text>
    <text x="20" y="95" fill="#94a3b8" font-size="9">UV light provides activation energy (Ea) to</text>
    <text x="20" y="110" fill="#94a3b8" font-size="9">break halogen bonds into reactive radicals</text>

    <text x="15" y="140" fill="#c084fc" font-size="11" font-weight="bold">• Catalytic Cracking:</text>
    <text x="20" y="160" fill="#f8fafc" font-size="10" font-family="monospace">C₈H₁₈ —(Al₂O₃, 500°C)→ C₂H₄ + C₆H₁₄</text>
    <text x="20" y="180" fill="#94a3b8" font-size="9">Long alkane → Alkene + shorter alkane (or H₂)</text>
    <text x="20" y="200" fill="#86efac" font-size="9">Alkenes produced are used to make plastics!</text>
  </g>
</svg>
`;

export const lessonParts: LessonPart[] = [
  {
    id: "alkane-properties-and-combustion",
    title: "Alkane Characteristics & Combustion Reactions",
    type: "text",
    content: `
### 🕯️ Alkanes: Saturated Hydrocarbons

Alkanes are the simplest family of hydrocarbons. They form a homologous series with the general formula **$C_nH_{2n+2}$**.

> [!NOTE]
> ### 🧪 General Properties of Alkanes
> 1. **Saturated:** Contain only single covalent bonds between carbon atoms ($C-C$).
> 2. **Physical State at RTP ($20^\circ\text{C}, 1\text{ atm}$):**
>    * $C_1 - C_4$ (methane to butane): **Gases**.
>    * $C_5 - C_{16}$ (pentane to hexadecane): **Liquids**.
>    * $C_{17+}$: Waxy **solids**.
> 3. **Unreactive Nature:** Alkanes are relatively unreactive chemically because the single $C-C$ and $C-H$ bonds are strong and non-polar. They do NOT react with acids, bases, or oxidising agents under normal conditions.

> ${svgToken(alkaneReactionsSvg)}

> [!IMPORTANT]
> ### 🔥 Combustion of Alkanes
> Alkanes burn readily in oxygen in highly exothermic reactions, making them excellent domestic and vehicle fuels.
> 
> 1. **Complete Combustion (in plenty / excess of air or $O_2$):**
>    Produces **carbon dioxide ($CO_2$)** and **water ($H_2O$)**:
>    $$\text{CH}_4\text{(g)} + 2\text{O}_2\text{(g)} \rightarrow \text{CO}_2\text{(g)} + 2\text{H}_2\text{O(l)} + \text{heat}$$
>    $$2\text{C}_2\text{H}_6\text{(g)} + 7\text{O}_2\text{(g)} \rightarrow 4\text{CO}_2\text{(g)} + 6\text{H}_2\text{O(l)}$$
> 
> 2. **Incomplete Combustion (in a limited / insufficient supply of $O_2$):**
>    Produces toxic **carbon monoxide ($CO$)** gas and/or solid carbon particulates (**soot**, $C$):
>    $$2\text{CH}_4\text{(g)} + 3\text{O}_2\text{(g)} \rightarrow 2\text{CO(g)} + 4\text{H}_2\text{O(l)}$$
>    $$\text{CH}_4\text{(g)} + \text{O}_2\text{(g)} \rightarrow \text{C(s)} + 2\text{H}_2\text{O(l)}$$
> 
> > [!CAUTION]
> > ### ⚠️ Why Carbon Monoxide is a Silent Killer
> > Carbon monoxide is a colourless, odourless gas. It binds irreversibly to haemoglobin in red blood cells, preventing oxygen transport to the brain and vital organs, causing suffocation and death.
`,
    keyPoints: [
      "Alkanes have the general formula CₙH₂ₙ₊₂.",
      "C1–C4 are gases, C5–C16 are liquids, and C17+ are solids at room temperature.",
      "Complete combustion produces CO₂ and H₂O; incomplete combustion produces toxic CO and soot.",
      "Alkanes do not react with aqueous bromine in the dark."
    ]
  },
  {
    id: "substitution-and-cracking",
    title: "Substitution Reaction with Halogens & Cracking",
    type: "text",
    content: `
### ⚡ Substitution Reactions & Catalytic Cracking

> [!IMPORTANT]
> ### ☀️ Photochemical Substitution Reaction
> Alkanes undergo **substitution reactions** with halogens (chlorine, $Cl_2$, or bromine, $Br_2$), but only in the presence of **ultraviolet (UV) light** (sunlight).
> * **Role of UV Light:** Provides the activation energy ($E_a$) to break the covalent bond in the halogen molecule ($Cl-Cl$ or $Br-Br$), creating highly reactive free radicals.
> * **Reaction with Methane:**
>   $$\text{CH}_4\text{(g)} + \text{Cl}_2\text{(g)} \rightarrow \text{CH}_3\text{Cl(g)} + \text{HCl(g)} \quad \text{(UV light)}$$
>   *(Chloromethane + hydrogen chloride)*
> * **Reaction with Ethane:**
>   $$\text{C}_2\text{H}_6\text{(g)} + \text{Br}_2\text{(g)} \rightarrow \text{C}_2\text{H}_5\text{Br(l)} + \text{HBr(g)} \quad \text{(UV light)}$$
>   *(Bromoethane + hydrogen bromide)*
> * In this reaction, **one hydrogen atom is replaced (substituted) by a halogen atom**.
> * If excess halogen is present, further substitution occurs until all hydrogen atoms are replaced (forming $CH_2Cl_2, CHCl_3,$ and $CCl_4$).

> [!NOTE]
> ### 💥 Catalytic Cracking of Alkanes
> In petroleum refining, there is a high surplus of long-chain alkanes (low demand) and an acute shortage of short-chain alkanes (petrol) and reactive alkenes (for polymers).
> * **Cracking** is the thermal decomposition of large, long-chain alkane molecules into smaller, more useful alkanes, alkenes, and/or hydrogen:
> * **Conditions:** High temperature (**$400 - 700^\circ\text{C}$**) and a catalyst (**silica / alumina, $Al_2O_3$**, or zeolite), or steam at $> 800^\circ\text{C}$.
> 
> * **Examples of Cracking Equations:**
>   $$\text{C}_{10}\text{H}_{22}\text{(g)} \rightarrow \text{C}_8\text{H}_{18}\text{(g)} + \text{C}_2\text{H}_4\text{(g)} \quad \text{(Al}_2\text{O}_3, \text{heat)}$$
>   *(Decane $\rightarrow$ Octane + Ethene)*
>   $$\text{C}_2\text{H}_6\text{(g)} \rightarrow \text{C}_2\text{H}_4\text{(g)} + \text{H}_2\text{(g)} \quad \text{(steam, } >800^\circ\text{C)}$$
>   *(Ethane $\rightarrow$ Ethene + Hydrogen)*
`,
    keyPoints: [
      "Alkanes react with halogens by substitution, replacing a hydrogen atom.",
      "UV light is essential for halogen substitution to provide activation energy.",
      "Cracking breaks long-chain alkanes into smaller, more valuable alkanes, alkenes, and hydrogen.",
      "Industrial conditions for catalytic cracking: 400–700 °C and an aluminium oxide (Al₂O₃) / silica catalyst."
    ]
  }
];
