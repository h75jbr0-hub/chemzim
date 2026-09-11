import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Carbon Cycle, Greenhouse Effect & Catalytic Converters";
export const lessonNumber = 4;

export const theoryMarkdown = `
## Carbon Cycle, Greenhouse Effect & Catalytic Converters
This lesson covers the global carbon cycle, the greenhouse effect and climate change, photosynthesis and respiration equations, strategies for reducing emissions, and the chemical reactions in vehicular catalytic converters.
`;

const catalyticConverterSvg = `
<svg viewBox="0 0 680 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="catBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
    <marker id="catArrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#38bdf8" />
    </marker>
  </defs>

  <rect width="680" height="300" fill="url(#catBg)" stroke="#1e293b" stroke-width="2" rx="16" />

  <text x="340" y="26" fill="#f8fafc" font-size="15" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Inside a Vehicular Catalytic Converter (Redox System)</text>

  <!-- Exhaust pipe left (Toxic Gases IN) -->
  <g transform="translate(30, 80)">
    <rect width="130" height="130" rx="8" fill="#ef4444" fill-opacity="0.1" stroke="#ef4444" stroke-width="1.5" />
    <text x="65" y="24" fill="#f87171" font-size="12" font-weight="bold" text-anchor="middle">Toxic Gases In</text>
    <text x="15" y="55" fill="#fca5a5" font-size="11" font-weight="bold">• CO (Carbon monoxide)</text>
    <text x="15" y="80" fill="#fca5a5" font-size="11" font-weight="bold">• NO / NO₂ (Nitrogen oxides)</text>
    <text x="15" y="105" fill="#fca5a5" font-size="11" font-weight="bold">• Unburned Hydrocarbons</text>
  </g>
  <path d="M 165 145 L 215 145" fill="none" stroke="#ef4444" stroke-width="3" marker-end="url(#catArrow)" />

  <!-- Catalytic Chamber Center (Ceramic Honeycomb with Pt/Pd/Rh) -->
  <g transform="translate(225, 60)">
    <rect width="230" height="170" rx="12" fill="#0f172a" stroke="#f59e0b" stroke-width="2" />
    <rect x="0" y="0" width="230" height="30" rx="12" fill="#d97706" fill-opacity="0.2" />
    <text x="115" y="20" fill="#fbbf24" font-size="12" font-weight="bold" text-anchor="middle">Honeycomb Catalyst (Pt, Pd, Rh)</text>

    <g transform="translate(15, 45)" font-family="system-ui, sans-serif">
      <text x="0" y="15" fill="#38bdf8" font-size="10" font-weight="bold">Step 1: Reduction of Nitrogen Oxides</text>
      <text x="0" y="32" fill="#f8fafc" font-size="10">2NO(g) → N₂(g) + O₂(g)</text>

      <text x="0" y="60" fill="#f59e0b" font-size="10" font-weight="bold">Step 2: Oxidation of Toxic Carbon Monoxide</text>
      <text x="0" y="77" fill="#f8fafc" font-size="10">2CO(g) + O₂(g) → 2CO₂(g)</text>

      <line x1="0" y1="92" x2="200" y2="92" stroke="#334155" stroke-width="1" />
      <text x="100" y="110" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">Combined Overall Reaction:</text>
      <text x="100" y="126" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">2CO + 2NO → 2CO₂ + N₂</text>
    </g>
  </g>
  <path d="M 460 145 L 510 145" fill="none" stroke="#34d399" stroke-width="3" marker-end="url(#catArrow)" />

  <!-- Exhaust pipe right (Harmless Gases OUT) -->
  <g transform="translate(515, 80)">
    <rect width="135" height="130" rx="8" fill="#10b981" fill-opacity="0.1" stroke="#10b981" stroke-width="1.5" />
    <text x="67" y="24" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">Harmless Gases Out</text>
    <text x="15" y="55" fill="#86efac" font-size="11" font-weight="bold">• N₂ (Clean Nitrogen)</text>
    <text x="15" y="80" fill="#86efac" font-size="11" font-weight="bold">• CO₂ (Carbon dioxide)</text>
    <text x="15" y="105" fill="#86efac" font-size="11" font-weight="bold">• H₂O (Water vapour)</text>
  </g>

  <!-- Summary note below -->
  <text x="340" y="265" fill="#94a3b8" font-size="11" font-family="system-ui, sans-serif" text-anchor="middle">Note: Although CO₂ is not toxic to breathe directly, it is a greenhouse gas contributing to global warming.</text>
</svg>
`;

export const lessonParts: LessonPart[] = [
  {
    id: "carbon-cycle-and-greenhouse-effect",
    title: "The Carbon Cycle & The Greenhouse Effect",
    type: "text",
    content: `
### 🌍 The Global Carbon Cycle

Carbon is continuously cycled through the Earth's atmosphere, hydrosphere, and living organisms via balanced natural processes:

> [!NOTE]
> ### 🍃 1. Photosynthesis (Removes CO₂ from Air)
> Green plants capture solar energy using the green pigment **chlorophyll** to produce glucose and oxygen:
> $$6CO₂(g) + 6H₂O(l) \\rightarrow C₆H₁₂O₆(s) + 6O₂(g)$$
> * Photosynthesis is an **endothermic** process that replenishes atmospheric oxygen!

> [!NOTE]
> ### 🫁 2. Respiration & Combustion (Releases CO₂ into Air)
> * **Respiration in all living cells:**
>   $$C₆H₁₂O₆ + 6O₂ \\rightarrow 6CO₂ + 6H₂O + \\text{Energy}$$
> * **Combustion of fossil fuels:**
>   $$CH₄(g) + 2O₂(g) \\rightarrow CO₂(g) + 2H₂O(l)$$
> * *Carbon Neutrality:* Burning biomass/waste crop material does NOT increase overall atmospheric $CO₂$ concentration because plants absorbed the exact same amount of $CO₂$ during their growth.

> [!IMPORTANT]
> ### ☀️ The Greenhouse Effect & Climate Change
> * **Definition:** A natural physical phenomenon in which greenhouse gases ($\text{CO}_2$ and $\text{CH}_4$) trap thermal energy (infrared radiation) emitted by the Earth's surface.
> * **Mechanism:**
>   1. Short-wavelength radiation from the Sun passes through the atmosphere and warms the Earth's surface.
>   2. The Earth absorbs this energy and re-emits it as longer-wavelength **infrared (thermal) radiation**.
>   3. Greenhouse gases **absorb this emitted infrared radiation**, preventing it from escaping into space, and re-radiate it in all directions.
> * **Consequences of Enhanced Greenhouse Effect:** Global warming, melting of polar ice caps, sea-level rise, and more frequent extreme weather events.
`,
    keyPoints: [
      "Photosynthesis absorbs CO₂ and releases O₂; respiration and combustion consume O₂ and release CO₂.",
      "Greenhouse gases (CO₂ and CH₄) trap infrared thermal radiation emitted by Earth's surface.",
      "Enhanced greenhouse effect causes global warming and climate change."
    ]
  },
  {
    id: "reducing-emissions-catalytic-converters",
    title: "Catalytic Converters & Reducing Air Pollution",
    type: "text",
    content: `
### 🚗 Catalytic Converters in Vehicle Exhausts

Internal combustion engines emit harmful exhaust gases. A **catalytic converter** fitted to the exhaust pipe converts toxic gases into harmless substances before release.

> ${svgToken(catalyticConverterSvg)}

> [!IMPORTANT]
> ### ⚙️ Chemical Reactions inside Catalytic Converters
> The catalyst consists of transition metals (**Platinum**, **Palladium**, and **Rhodium**) coated onto a high-surface-area ceramic honeycomb:
> 
> 1. **Reduction of Oxides of Nitrogen:**
>    $$2\text{NO(g)} \rightarrow \text{N}_2\text{(g)} + \text{O}_2\text{(g)}$$
> 2. **Oxidation of Carbon Monoxide:**
>    $$2\text{CO(g)} + \text{O}_2\text{(g)} \rightarrow 2\text{CO}_2\text{(g)}$$
> 3. **Overall Combined Reaction (Cambridge Mark Scheme Equation):**
>    $$2\text{CO(g)} + 2\text{NO(g)} \rightarrow 2\text{CO}_2\text{(g)} + \text{N}_2\text{(g)}$$
> 4. **Oxidation of Unburned Hydrocarbons:**
>    $$\text{Hydrocarbon} + \text{Oxygen} \rightarrow \text{CO}_2 + \text{H}_2\text{O}$$

> [!TIP]
> ### 🌿 Strategies for Mitigating Climate Change & Pollution
> 1. **Planting Trees (Afforestation):** Increases removal of $\text{CO}_2$ through photosynthesis.
> 2. **Renewable Energy:** Transitioning to wind, solar, and green hydrogen power instead of burning coal and petrol.
> 3. **Reducing Livestock Farming:** Reduces digestive emissions of methane ($\text{CH}_4$).
> 4. **Flue-Gas Desulfurisation:** Using $\text{CaO}$ to scrub $\text{SO}_2$ emissions at power stations.
`,
    keyPoints: [
      "Catalytic converters contain platinum, palladium, and rhodium catalysts on a ceramic honeycomb.",
      "The primary redox reaction is: 2CO + 2NO → 2CO₂ + N₂.",
      "Harmful CO and NO are converted into harmless nitrogen (N₂) and carbon dioxide (CO₂)."
    ]
  }
];
