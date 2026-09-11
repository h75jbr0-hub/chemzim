import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Air Composition, Atmospheric Pollutants & Acid Rain";
export const lessonNumber = 3;

export const theoryMarkdown = `
## Air Composition, Atmospheric Pollutants & Acid Rain
This lesson covers the percentage composition of clean, dry air, major atmospheric gaseous and particulate pollutants, their adverse effects on health and ecosystems, and the formation, consequences, and remediation of acid rain (including flue-gas desulfurisation).
`;

const airPollutionSvg = `
<svg viewBox="0 0 680 320" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="airBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
  </defs>

  <rect width="680" height="320" fill="url(#airBg)" stroke="#1e293b" stroke-width="2" rx="16" />

  <text x="340" y="24" fill="#f8fafc" font-size="14" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Composition of Clean Air &amp; Common Air Pollutants</text>

  <!-- Left: Clean Air Composition Pie Representation -->
  <g transform="translate(30, 45)">
    <rect width="260" height="255" rx="12" fill="#0f172a" stroke="#38bdf8" stroke-opacity="0.3" stroke-width="1.5" />
    <text x="130" y="24" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">Clean, Dry Air (By Volume)</text>

    <g transform="translate(20, 45)">
      <!-- Nitrogen -->
      <rect width="220" height="42" rx="6" fill="#0284c7" fill-opacity="0.2" stroke="#0284c7" stroke-width="1" />
      <text x="10" y="18" fill="#38bdf8" font-size="11" font-weight="bold">Nitrogen (N₂) — 78%</text>
      <text x="10" y="34" fill="#94a3b8" font-size="9">Dilutes oxygen; unreactive gas</text>

      <!-- Oxygen -->
      <g transform="translate(0, 52)">
        <rect width="220" height="42" rx="6" fill="#10b981" fill-opacity="0.2" stroke="#10b981" stroke-width="1" />
        <text x="10" y="18" fill="#34d399" font-size="11" font-weight="bold">Oxygen (O₂) — 21%</text>
        <text x="10" y="34" fill="#94a3b8" font-size="9">Supports respiration and combustion</text>
      </g>

      <!-- Noble gases & other -->
      <g transform="translate(0, 104)">
        <rect width="220" height="42" rx="6" fill="#f59e0b" fill-opacity="0.2" stroke="#f59e0b" stroke-width="1" />
        <text x="10" y="18" fill="#fbbf24" font-size="11" font-weight="bold">Noble Gases (Argon) — ~0.9%</text>
        <text x="10" y="34" fill="#94a3b8" font-size="9">Inert monoatomic gas</text>
      </g>

      <!-- CO2 -->
      <g transform="translate(0, 156)">
        <rect width="220" height="38" rx="6" fill="#f43f5e" fill-opacity="0.2" stroke="#f43f5e" stroke-width="1" />
        <text x="10" y="16" fill="#fca5a5" font-size="11" font-weight="bold">Carbon Dioxide (CO₂) — 0.04%</text>
        <text x="10" y="30" fill="#94a3b8" font-size="9">Essential for plant photosynthesis</text>
      </g>
    </g>
  </g>

  <!-- Right: Major Pollutants Matrix -->
  <g transform="translate(310, 45)">
    <rect width="340" height="255" rx="12" fill="#0f172a" stroke="#f43f5e" stroke-opacity="0.3" stroke-width="1.5" />
    <text x="170" y="24" fill="#f43f5e" font-size="13" font-weight="bold" text-anchor="middle">Harmful Atmospheric Pollutants</text>

    <g transform="translate(15, 38)" font-family="system-ui, sans-serif">
      <!-- CO -->
      <text x="0" y="14" fill="#fca5a5" font-size="11" font-weight="bold">Carbon Monoxide (CO):</text>
      <text x="0" y="28" fill="#94a3b8" font-size="10">• Incomplete combustion; toxic (binds to hemoglobin)</text>

      <!-- SO2 -->
      <text x="0" y="52" fill="#fca5a5" font-size="11" font-weight="bold">Sulfur Dioxide (SO₂):</text>
      <text x="0" y="66" fill="#94a3b8" font-size="10">• Combustion of fossil fuels containing sulfur; causes acid rain</text>

      <!-- NOx -->
      <text x="0" y="90" fill="#fca5a5" font-size="11" font-weight="bold">Oxides of Nitrogen (NO, NO₂):</text>
      <text x="0" y="104" fill="#94a3b8" font-size="10">• High temp reaction in car engines; acid rain &amp; smog</text>

      <!-- Lead -->
      <text x="0" y="128" fill="#fca5a5" font-size="11" font-weight="bold">Lead Compounds (Pb):</text>
      <text x="0" y="142" fill="#94a3b8" font-size="10">• From leaded petrol; causes brain &amp; nerve damage</text>

      <!-- Particulates -->
      <text x="0" y="166" fill="#fca5a5" font-size="11" font-weight="bold">Particulates (Unburned Carbon Soot):</text>
      <text x="0" y="180" fill="#94a3b8" font-size="10">• Respiratory illnesses, asthma, global dimming</text>

      <!-- Methane -->
      <text x="0" y="202" fill="#fca5a5" font-size="11" font-weight="bold">Methane (CH₄):</text>
      <text x="0" y="214" fill="#94a3b8" font-size="10">• Cattle digestion &amp; decomposing vegetation; greenhouse gas</text>
    </g>
  </g>
</svg>
`;

export const lessonParts: LessonPart[] = [
  {
    id: "composition-of-air-and-pollutants",
    title: "Air Composition & Primary Atmospheric Pollutants",
    type: "text",
    content: `
### 🌬️ Composition of Clean, Dry Air

Clean, dry air is a homogeneous mixture of gases:
* **$78\\%$ Nitrogen ($\text{N}_2$)**
* **$21\\%$ Oxygen ($\text{O}_2$)**
* **$1\\%$ Other gases:** predominantly Argon ($\\approx 0.93\\%$) with tiny amounts of Carbon dioxide ($0.04\\%$) and noble gases.
* *(Note: Hydrogen and carbon monoxide are NOT components of clean air).*

> ${svgToken(airPollutionSvg)}

> [!IMPORTANT]
> ### 🏭 Summary of Common Atmospheric Pollutants
> | Pollutant | Source | Adverse Environmental / Health Effect |
> | :--- | :--- | :--- |
> | **Carbon Monoxide ($\text{CO}$)** | Incomplete combustion of carbon-containing fuels (gasoline, wood, coal) | **Toxic:** Binds irreversibly to hemoglobin in red blood cells, cutting off oxygen transport (causes asphyxiation). |
> | **Sulfur Dioxide ($\text{SO}_2$)** | Burning of fossil fuels (coal, heavy fuel oil) containing sulfur impurities | **Acid Rain:** Causes respiratory distress, attacks limestone buildings and kills aquatic life. |
> | **Oxides of Nitrogen ($\text{NO}, \text{NO}_2$)** | Car engines (high temperatures force atmospheric $\text{N}_2$ and $\text{O}_2$ to combine) | **Acid rain**, photochemical smog, breathing difficulties and asthma. |
> | **Particulates (Soot / Lead)** | Incomplete combustion of diesel / Old leaded fuels | Cancer, respiratory illnesses, brain damage in children. |
> | **Methane ($\text{CH}_4$)** | Decomposing organic matter, rice paddy fields, cattle digestive gas | Powerful **greenhouse gas** that drives global climate change. |
`,
    keyPoints: [
      "Clean air consists of 78% nitrogen, 21% oxygen, ~0.9% argon, and 0.04% carbon dioxide.",
      "Carbon monoxide is toxic because it binds to hemoglobin and prevents oxygen transport.",
      "Sulfur dioxide and oxides of nitrogen react with atmospheric moisture to form acid rain."
    ]
  },
  {
    id: "acid-rain-and-flue-gas-desulfurisation",
    title: "Acid Rain & Flue-Gas Desulfurisation (FGD)",
    type: "text",
    content: `
### 🌧️ Acid Rain: Formation & Destruction

Normal unpolluted rain has a pH of about $5.6$ (mildly acidic due to dissolved atmospheric $\text{CO}_2$ forming carbonic acid).
**Acid rain** has a **$\text{pH} < 5.0$**, caused by dissolved acidic industrial gases:
$$\text{SO}_2\text{(g)} + \text{H}_2\text{O(l)} \rightarrow \text{H}_2\text{SO}_3\text{(aq)} \quad \text{(sulfurous acid)}$$
$$2\text{NO}_2\text{(g)} + \text{H}_2\text{O(l)} \rightarrow \text{HNO}_2\text{(aq)} + \text{HNO}_3\text{(aq)} \quad \text{(nitric acid)}$$

> [!WARNING]
> ### 🛑 Destructive Effects of Acid Rain
> 1. **Crumbling of Limestone Buildings & Statues:**
>    * Marble and limestone consist of calcium carbonate ($\text{CaCO}_3$). Acid rain chemically corrodes them:
>      $$\text{CaCO}_3\text{(s)} + \text{H}_2\text{SO}_4\text{(aq)} \rightarrow \text{CaSO}_4\text{(s)} + \text{H}_2\text{O(l)} + \text{CO}_2\text{(g)}$$
> 2. **Destruction of Aquatic Life:**
>    * Acidifies rivers and freshwater lakes ($\text{pH} < 4$), leaching toxic $\text{Al}^{3+}$ ions that kill fish eggs and adult fish.
> 3. **Deforestation & Crop Damage:**
>    * Damages the protective waxy cuticle on leaves and leaches vital nutrients ($\text{Mg}^{2+}, \text{Ca}^{2+}$) out of the soil.

> [!TIP]
> ### 🛡️ Flue-Gas Desulfurisation (FGD): Remediation of SO₂
> Power stations remove sulfur dioxide from waste flue gases before releasing them into the chimneys by spraying them with an aqueous slurry of **calcium oxide ($\text{CaO}$)** or **calcium carbonate ($\text{CaCO}_3$)**:
> $$\text{CaO(s)} + \text{SO}_2\text{(g)} \rightarrow \text{CaSO}_3\text{(s)} \quad \text{(calcium sulfite)}$$
> $$2\text{CaSO}_3\text{(s)} + \text{O}_2\text{(g)} + 4\text{H}_2\text{O(l)} \rightarrow 2\text{CaSO}_4\cdot 2\text{H}_2\text{O(s)} \quad \text{(synthetic gypsum)}$$
> * **Type of Reaction:** **Neutralisation** (basic metal oxide neutralising an acidic gas).
> * The resulting gypsum ($\text{CaSO}_4\cdot 2\text{H}_2\text{O}$) is sold to make plasterboard for the building industry!
`,
    keyPoints: [
      "Acid rain is caused by sulfur dioxide and oxides of nitrogen.",
      "Acid rain corrodes limestone buildings (CaCO₃), acidifies lakes, and damages forests.",
      "Flue-gas desulfurisation uses calcium oxide (a basic oxide) to neutralise acidic SO₂."
    ]
  }
];
