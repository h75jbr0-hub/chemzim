import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Fertilisers & The Haber Process Applications";
export const lessonNumber = 2;

export const theoryMarkdown = `
## Fertilisers & The Haber Process Applications
This lesson covers the NPK elements essential for plant growth, synthetic nitrogen, phosphorus, and potassium fertilisers, the displacement of ammonia by strong bases, and environmental implications.
`;

const npkFertiliserSvg = `
<svg viewBox="0 0 680 280" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="npkBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
  </defs>

  <rect width="680" height="280" fill="url(#npkBg)" stroke="#1e293b" stroke-width="2" rx="16" />

  <text x="340" y="26" fill="#f8fafc" font-size="15" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">NPK: Essential Macro-Nutrients for Plant Nutrition</text>

  <!-- Nitrogen (N) Card -->
  <g transform="translate(30, 50)">
    <rect width="190" height="200" rx="12" fill="#0f172a" stroke="#38bdf8" stroke-opacity="0.4" stroke-width="1.5" />
    <rect x="0" y="0" width="190" height="36" rx="12" fill="#0284c7" fill-opacity="0.2" />
    <text x="95" y="24" fill="#38bdf8" font-size="14" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">N - Nitrogen</text>

    <text x="15" y="60" fill="#f8fafc" font-size="11" font-weight="bold">Plant Function:</text>
    <text x="15" y="78" fill="#94a3b8" font-size="10">• Promotes leafy green growth</text>
    <text x="15" y="94" fill="#94a3b8" font-size="10">• Synthesis of plant proteins</text>
    <text x="15" y="110" fill="#94a3b8" font-size="10">• Chlorophyll production</text>

    <text x="15" y="138" fill="#38bdf8" font-size="11" font-weight="bold">Chemical Forms:</text>
    <text x="15" y="156" fill="#f8fafc" font-size="10">• Nitrate ions (NO₃⁻)</text>
    <text x="15" y="172" fill="#f8fafc" font-size="10">• Ammonium ions (NH₄⁺)</text>
    <text x="15" y="188" fill="#64748b" font-size="9">e.g. NH₄NO₃, (NH₄)₂SO₄</text>
  </g>

  <!-- Phosphorus (P) Card -->
  <g transform="translate(245, 50)">
    <rect width="190" height="200" rx="12" fill="#0f172a" stroke="#f59e0b" stroke-opacity="0.4" stroke-width="1.5" />
    <rect x="0" y="0" width="190" height="36" rx="12" fill="#d97706" fill-opacity="0.2" />
    <text x="95" y="24" fill="#f59e0b" font-size="14" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">P - Phosphorus</text>

    <text x="15" y="60" fill="#f8fafc" font-size="11" font-weight="bold">Plant Function:</text>
    <text x="15" y="78" fill="#94a3b8" font-size="10">• Stimulates healthy root growth</text>
    <text x="15" y="94" fill="#94a3b8" font-size="10">• Accelerates crop ripening</text>
    <text x="15" y="110" fill="#94a3b8" font-size="10">• Energy transfer (ATP)</text>

    <text x="15" y="138" fill="#f59e0b" font-size="11" font-weight="bold">Chemical Forms:</text>
    <text x="15" y="156" fill="#f8fafc" font-size="10">• Phosphate ions (PO₄³⁻)</text>
    <text x="15" y="172" fill="#64748b" font-size="9">e.g. (NH₄)₃PO₄</text>
    <text x="15" y="188" fill="#64748b" font-size="9">e.g. Ca(H₂PO₄)₂ (Superphosphate)</text>
  </g>

  <!-- Potassium (K) Card -->
  <g transform="translate(460, 50)">
    <rect width="190" height="200" rx="12" fill="#0f172a" stroke="#10b981" stroke-opacity="0.4" stroke-width="1.5" />
    <rect x="0" y="0" width="190" height="36" rx="12" fill="#059669" fill-opacity="0.2" />
    <text x="95" y="24" fill="#10b981" font-size="14" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">K - Potassium</text>

    <text x="15" y="60" fill="#f8fafc" font-size="11" font-weight="bold">Plant Function:</text>
    <text x="15" y="78" fill="#94a3b8" font-size="10">• Flowers &amp; fruit development</text>
    <text x="15" y="94" fill="#94a3b8" font-size="10">• Disease resistance</text>
    <text x="15" y="110" fill="#94a3b8" font-size="10">• Water balance regulation</text>

    <text x="15" y="138" fill="#10b981" font-size="11" font-weight="bold">Chemical Forms:</text>
    <text x="15" y="156" fill="#f8fafc" font-size="10">• Potassium ions (K⁺)</text>
    <text x="15" y="172" fill="#64748b" font-size="9">e.g. KNO₃ (Potassium nitrate)</text>
    <text x="15" y="188" fill="#64748b" font-size="9">e.g. KCl, K₂SO₄</text>
  </g>
</svg>
`;

export const lessonParts: LessonPart[] = [
  {
    id: "npk-fertilisers",
    title: "NPK Fertilisers & Soil Nutrition",
    type: "text",
    content: `
### 🌾 What are Fertilisers?

A **fertiliser** is any chemical substance added to soil to provide essential elements needed for healthy plant growth, making the soil more fertile.

> ${svgToken(npkFertiliserSvg)}

> [!IMPORTANT]
> ### 🧮 The Essential Elements: N, P, and K
> Plants cannot absorb pure elements directly (e.g. plants cannot take in insoluble atmospheric $\text{N}_2$ through roots). Instead, they MUST absorb these elements as **soluble mineral salts** dissolved in soil water:
> 
> 1. **Nitrogen (N):**
>    * Absorbed as **nitrate ions** ($\text{NO}_3^-$) and **ammonium ions** ($\text{NH}_4^+$).
>    * Promotes lush, healthy **leaf and stem growth** and is the building block of plant proteins.
> 
> 2. **Phosphorus (P):**
>    * Absorbed as **phosphate ions** ($\text{PO}_4^{3-}$).
>    * Essential for healthy **root system development** and seed germination.
> 
> 3. **Potassium (K):**
>    * Absorbed as **potassium ions** ($\text{K}^+$).
>    * Needed for **flower and fruit growth** and protects plants against fungal and bacterial diseases.

> [!BOX]
> ### 📋 Common Synthetic Fertilisers
> * **Ammonium nitrate ($\text{NH}_4\text{NO}_3$):** Rich in nitrogen ($35\% \text{ N}$ by mass), provides nitrogen in both fast-acting ($\text{NO}_3^-$) and long-acting ($\text{NH}_4^+$) forms.
> * **Ammonium sulfate ($(\text{NH}_4)_2\text{SO}_4$):** Prepared by neutralising ammonia with sulfuric acid.
> * **Potassium nitrate ($\text{KNO}_3$):** Dual-action fertiliser providing both potassium and nitrogen.
`,
    keyPoints: [
      "Fertilisers provide the three primary nutrients: Nitrogen (N), Phosphorus (P), and Potassium (K).",
      "Nutrients must be supplied as water-soluble salts so plant roots can absorb them.",
      "Nitrogen promotes leaf growth; phosphorus promotes root development; potassium promotes flowering and disease resistance."
    ]
  },
  {
    id: "displacement-of-ammonia",
    title: "Displacement of Ammonia from Fertilisers",
    type: "text",
    content: `
### ⚠️ Why Alkalis Must Never be Mixed with Ammonium Fertilisers

Farmers frequently use **slaked lime** ($\text{Ca(OH)}_2$) or **quicklime** ($\text{CaO}$) to neutralise acidic soil. However, if lime is spread onto the soil at the same time as ammonium fertilisers, a disastrous displacement reaction occurs!

> [!CAUTION]
> ### 🛑 The Displacement Reaction
> Strong bases react with ammonium salts to displace volatile **ammonia gas**:
> $$NH₄Cl(aq) + NaOH(aq) \\rightarrow NaCl(aq) + H₂O(l) + NH₃(g) \\uparrow$$
> $$Ca(OH)₂(s) + (NH₄)₂SO₄(s) \\rightarrow CaSO₄(s) + 2H₂O(l) + 2NH₃(g) \\uparrow$$
> 
> * **Consequence for Farmers:** The nitrogen from the expensive fertiliser escapes into the atmosphere as pungent ammonia gas, depriving crops of essential nitrogen nutrients!
> * **Agricultural Rule:** Farmers must always leave several weeks between liming the soil and adding ammonium fertilisers.
`,
    keyPoints: [
      "Strong bases react with ammonium salts to release ammonia gas.",
      "Liming soil simultaneously with adding ammonium fertilisers causes loss of nitrogen to the atmosphere."
    ]
  }
];
