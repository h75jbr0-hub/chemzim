import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Acid-Base Equilibria";
export const lessonNumber = 4;

export const theoryMarkdown = `
# Topic 14: Acid-Base Equilibria
This lesson covers the Brønsted-Lowry acid-base theory, pH calculations for strong and weak acids and bases, the ionic product of water (Kw), Ka and pKa, and buffer solutions.
`;

const protonTransferSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 360" class="w-full h-auto rounded-lg flex-shrink-0" style="background: linear-gradient(to bottom right, #070f1e, #0b1b35); border: 1px solid #1e293b; font-family: system-ui, -apple-system, sans-serif;">
  <text x="50%" y="30" text-anchor="middle" fill="#f8fafc" font-size="15" font-weight="bold">Brønsted-Lowry Proton Transfer &amp; Conjugate Pairs</text>
  
  <g transform="translate(100, 80)">
    <rect x="0" y="20" width="160" height="80" rx="8" fill="#3b82f6" fill-opacity="0.1" stroke="#3b82f6" stroke-width="2" />
    <text x="80" y="45" fill="#f8fafc" font-size="14" font-weight="bold" text-anchor="middle">CH₃COOH</text>
    <text x="80" y="65" fill="#94a3b8" font-size="11" text-anchor="middle">Ethanoic Acid</text>
    <text x="80" y="85" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">ACID 1</text>
    
    <text x="200" y="65" fill="#f8fafc" font-size="20" font-weight="bold" text-anchor="middle">+</text>
    
    <rect x="240" y="20" width="160" height="80" rx="8" fill="#10b981" fill-opacity="0.1" stroke="#10b981" stroke-width="2" />
    <text x="320" y="45" fill="#f8fafc" font-size="14" font-weight="bold" text-anchor="middle">H₂O</text>
    <text x="320" y="65" fill="#94a3b8" font-size="11" text-anchor="middle">Water</text>
    <text x="320" y="85" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">BASE 2</text>
  </g>
  
  <g transform="translate(500, 80)">
    <text x="0" y="55" fill="#f59e0b" font-size="24" text-anchor="middle">⇌</text>
    <path d="M -180,10 Q -50,-40 80,10" fill="none" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="4 2" marker-end="url(#arrow)" />
    <text x="-50" y="-20" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">Proton Transfer (H⁺)</text>
  </g>
  
  <g transform="translate(600, 80)">
    <rect x="0" y="20" width="160" height="80" rx="8" fill="#3b82f6" fill-opacity="0.1" stroke="#3b82f6" stroke-dasharray="4 4" stroke-width="2" />
    <text x="80" y="45" fill="#f8fafc" font-size="14" font-weight="bold" text-anchor="middle">CH₃COO⁻</text>
    <text x="80" y="65" fill="#94a3b8" font-size="11" text-anchor="middle">Ethanoate Ion</text>
    <text x="80" y="85" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">CONJUGATE BASE 1</text>
    
    <text x="200" y="65" fill="#f8fafc" font-size="20" font-weight="bold" text-anchor="middle">+</text>
    
    <rect x="240" y="20" width="160" height="80" rx="8" fill="#10b981" fill-opacity="0.1" stroke="#10b981" stroke-dasharray="4 4" stroke-width="2" />
    <text x="320" y="45" fill="#f8fafc" font-size="14" font-weight="bold" text-anchor="middle">H₃O⁺</text>
    <text x="320" y="65" fill="#94a3b8" font-size="11" text-anchor="middle">Hydronium Ion</text>
    <text x="320" y="85" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">CONJUGATE ACID 2</text>
  </g>

  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 2 L 10 5 L 0 8 z" fill="#f59e0b" />
    </marker>
  </defs>
  
  <path d="M 180,180 C 180,240 680,240 680,180" fill="none" stroke="#3b82f6" stroke-width="2" />
  <rect x="380" y="205" width="240" height="20" rx="10" fill="#1e293b" stroke="#3b82f6" stroke-width="1" />
  <text x="500" y="219" fill="#93c5fd" font-size="11" font-weight="bold" text-anchor="middle">Conjugate Acid-Base Pair 1 (differs by 1 H⁺)</text>

  <path d="M 420,180 C 420,300 920,300 920,180" fill="none" stroke="#10b981" stroke-width="2" />
  <rect x="620" y="265" width="240" height="20" rx="10" fill="#1e293b" stroke="#10b981" stroke-width="1" />
  <text x="740" y="279" fill="#6ee7b7" font-size="11" font-weight="bold" text-anchor="middle">Conjugate Acid-Base Pair 2 (differs by 1 H⁺)</text>
</svg>`;

const diphoticAcidSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 380" class="w-full max-w-[460px] mx-auto rounded-lg flex-shrink-0" style="background: linear-gradient(to bottom right, #070f1e, #0b1b35); border: 1px solid #1e293b; font-family: system-ui, -apple-system, sans-serif;">
  <!-- Grid Lines (horizontal) -->
  <line x1="60" y1="320" x2="480" y2="320" stroke="#1e293b" stroke-width="1" />
  <line x1="60" y1="280" x2="480" y2="280" stroke="#1e293b" stroke-width="1" />
  <line x1="60" y1="240" x2="480" y2="240" stroke="#1e293b" stroke-width="1" />
  <line x1="60" y1="200" x2="480" y2="200" stroke="#1e293b" stroke-width="1" stroke-dasharray="3,3" />
  <line x1="60" y1="160" x2="480" y2="160" stroke="#1e293b" stroke-width="1" />
  <line x1="60" y1="120" x2="480" y2="120" stroke="#1e293b" stroke-width="1" />
  <line x1="60" y1="80" x2="480" y2="80" stroke="#1e293b" stroke-width="1" />
  <line x1="60" y1="40" x2="480" y2="40" stroke="#1e293b" stroke-width="1" />
  <!-- Red dashed equivalence indicators -->
  <line x1="60" y1="190" x2="200" y2="190" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4,4" />
  <line x1="200" y1="190" x2="200" y2="320" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4,4" />
  <line x1="60" y1="100" x2="340" y2="100" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4,4" />
  <line x1="340" y1="100" x2="340" y2="320" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4,4" />
  <!-- Axes -->
  <line x1="60" y1="20" x2="60" y2="320" stroke="#94a3b8" stroke-width="2" />
  <line x1="60" y1="320" x2="490" y2="320" stroke="#94a3b8" stroke-width="2" />
  <!-- Y-Axis Ticks & Labels (pH 0 to 14) -->
  <line x1="55" y1="320" x2="60" y2="320" stroke="#94a3b8" stroke-width="2" /><text x="45" y="324" fill="#94a3b8" font-size="12" font-weight="bold" text-anchor="end">0</text>
  <line x1="55" y1="300" x2="60" y2="300" stroke="#94a3b8" stroke-width="2" /><text x="45" y="304" fill="#94a3b8" font-size="12" font-weight="bold" text-anchor="end">1</text>
  <line x1="55" y1="280" x2="60" y2="280" stroke="#94a3b8" stroke-width="2" /><text x="45" y="284" fill="#94a3b8" font-size="12" font-weight="bold" text-anchor="end">2</text>
  <line x1="55" y1="260" x2="60" y2="260" stroke="#94a3b8" stroke-width="2" /><text x="45" y="264" fill="#94a3b8" font-size="12" font-weight="bold" text-anchor="end">3</text>
  <line x1="55" y1="240" x2="60" y2="240" stroke="#94a3b8" stroke-width="2" /><text x="45" y="244" fill="#94a3b8" font-size="12" font-weight="bold" text-anchor="end">4</text>
  <line x1="55" y1="220" x2="60" y2="220" stroke="#94a3b8" stroke-width="2" /><text x="45" y="224" fill="#94a3b8" font-size="12" font-weight="bold" text-anchor="end">5</text>
  <line x1="55" y1="200" x2="60" y2="200" stroke="#94a3b8" stroke-width="2" /><text x="45" y="204" fill="#94a3b8" font-size="12" font-weight="bold" text-anchor="end">6</text>
  <line x1="55" y1="180" x2="60" y2="180" stroke="#94a3b8" stroke-width="2" /><text x="45" y="184" fill="#94a3b8" font-size="12" font-weight="bold" text-anchor="end">7</text>
  <line x1="55" y1="160" x2="60" y2="160" stroke="#94a3b8" stroke-width="2" /><text x="45" y="164" fill="#94a3b8" font-size="12" font-weight="bold" text-anchor="end">8</text>
  <line x1="55" y1="140" x2="60" y2="140" stroke="#94a3b8" stroke-width="2" /><text x="45" y="144" fill="#94a3b8" font-size="12" font-weight="bold" text-anchor="end">9</text>
  <line x1="55" y1="120" x2="60" y2="120" stroke="#94a3b8" stroke-width="2" /><text x="45" y="124" fill="#94a3b8" font-size="12" font-weight="bold" text-anchor="end">10</text>
  <line x1="55" y1="100" x2="60" y2="100" stroke="#94a3b8" stroke-width="2" /><text x="45" y="104" fill="#94a3b8" font-size="12" font-weight="bold" text-anchor="end">11</text>
  <line x1="55" y1="80" x2="60" y2="80" stroke="#94a3b8" stroke-width="2" /><text x="45" y="84" fill="#94a3b8" font-size="12" font-weight="bold" text-anchor="end">12</text>
  <line x1="55" y1="60" x2="60" y2="60" stroke="#94a3b8" stroke-width="2" /><text x="45" y="64" fill="#94a3b8" font-size="12" font-weight="bold" text-anchor="end">13</text>
  <line x1="55" y1="40" x2="60" y2="40" stroke="#94a3b8" stroke-width="2" /><text x="45" y="44" fill="#94a3b8" font-size="12" font-weight="bold" text-anchor="end">14</text>
  <text x="20" y="170" fill="#f8fafc" font-size="14" font-weight="bold" transform="rotate(-90 20 170)" text-anchor="middle">pH</text>
  <!-- X-Axis Ticks & Labels (Volume 0 to 50) -->
  <line x1="60" y1="320" x2="60" y2="325" stroke="#94a3b8" stroke-width="2" /><text x="60" y="342" fill="#94a3b8" font-size="12" font-weight="bold" text-anchor="middle">0</text>
  <line x1="100" y1="320" x2="100" y2="325" stroke="#94a3b8" stroke-width="2" /><text x="100" y="342" fill="#94a3b8" font-size="12" font-weight="bold" text-anchor="middle">5</text>
  <line x1="140" y1="320" x2="140" y2="325" stroke="#94a3b8" stroke-width="2" /><text x="140" y="342" fill="#94a3b8" font-size="12" font-weight="bold" text-anchor="middle">10</text>
  <line x1="180" y1="320" x2="180" y2="325" stroke="#94a3b8" stroke-width="2" /><text x="180" y="342" fill="#94a3b8" font-size="12" font-weight="bold" text-anchor="middle">15</text>
  <line x1="220" y1="320" x2="220" y2="325" stroke="#94a3b8" stroke-width="2" /><text x="220" y="342" fill="#94a3b8" font-size="12" font-weight="bold" text-anchor="middle">20</text>
  <line x1="260" y1="320" x2="260" y2="325" stroke="#94a3b8" stroke-width="2" /><text x="260" y="342" fill="#94a3b8" font-size="12" font-weight="bold" text-anchor="middle">25</text>
  <line x1="300" y1="320" x2="300" y2="325" stroke="#94a3b8" stroke-width="2" /><text x="300" y="342" fill="#94a3b8" font-size="12" font-weight="bold" text-anchor="middle">30</text>
  <line x1="340" y1="320" x2="340" y2="325" stroke="#94a3b8" stroke-width="2" /><text x="340" y="342" fill="#94a3b8" font-size="12" font-weight="bold" text-anchor="middle">35</text>
  <line x1="380" y1="320" x2="380" y2="325" stroke="#94a3b8" stroke-width="2" /><text x="380" y="342" fill="#94a3b8" font-size="12" font-weight="bold" text-anchor="middle">40</text>
  <line x1="420" y1="320" x2="420" y2="325" stroke="#94a3b8" stroke-width="2" /><text x="420" y="342" fill="#94a3b8" font-size="12" font-weight="bold" text-anchor="middle">45</text>
  <line x1="460" y1="320" x2="460" y2="325" stroke="#94a3b8" stroke-width="2" /><text x="460" y="342" fill="#94a3b8" font-size="12" font-weight="bold" text-anchor="middle">50</text>
  <text x="270" y="365" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">Volume of base added/cm³</text>
  <!-- The Diprotic Curve Path (Blue S-shape) -->
  <path d="M 60 260 C 100 240, 140 240, 180 220 C 192 210, 196 200, 200 190 C 204 180, 208 150, 220 150 C 250 150, 290 150, 320 140 C 334 135, 338 120, 340 100 C 342 80, 346 55, 370 50 C 400 44, 440 40, 480 38" fill="none" stroke="#38bdf8" stroke-width="3" />
  <!-- Labels & Pointers -->
  <text x="80" y="145" fill="#f8fafc" font-size="12" font-weight="bold">First equivalence point</text>
  <path d="M 190 142 L 198 180" fill="none" stroke="#f8fafc" stroke-width="1" />
  <polygon points="198,180 195,174 201,176" fill="#f8fafc" />
  <text x="140" y="85" fill="#f8fafc" font-size="12" font-weight="bold">Second equivalence point</text>
  <path d="M 270 82 L 333 97" fill="none" stroke="#f8fafc" stroke-width="1" />
  <polygon points="333,97 326,94 329,100" fill="#f8fafc" />
</svg>`;

const hclAmmoniaTitrationSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 380" class="w-full max-w-[460px] mx-auto rounded-lg flex-shrink-0" style="background: linear-gradient(to bottom right, #070f1e, #0b1b35); border: 1px solid #1e293b; font-family: system-ui, -apple-system, sans-serif;">
  <!-- Grid Lines -->
  <line x1="60" y1="320" x2="480" y2="320" stroke="#1e293b" stroke-width="1" />
  <line x1="60" y1="280" x2="480" y2="280" stroke="#1e293b" stroke-width="1" />
  <line x1="60" y1="240" x2="480" y2="240" stroke="#1e293b" stroke-width="1" />
  <line x1="60" y1="200" x2="480" y2="200" stroke="#1e293b" stroke-width="1" />
  <line x1="60" y1="160" x2="480" y2="160" stroke="#1e293b" stroke-width="1" />
  <line x1="60" y1="120" x2="480" y2="120" stroke="#1e293b" stroke-width="1" />
  <line x1="60" y1="80" x2="480" y2="80" stroke="#1e293b" stroke-width="1" />
  <line x1="60" y1="40" x2="480" y2="40" stroke="#1e293b" stroke-width="1" />
  <!-- Axes -->
  <line x1="60" y1="20" x2="60" y2="320" stroke="#94a3b8" stroke-width="2" />
  <line x1="60" y1="320" x2="490" y2="320" stroke="#94a3b8" stroke-width="2" />
  <!-- Y-Axis Ticks & Labels (pH 0 to 14) -->
  <line x1="55" y1="320" x2="60" y2="320" stroke="#94a3b8" stroke-width="2" /><text x="45" y="324" fill="#94a3b8" font-size="11" font-weight="bold" text-anchor="end">0</text>
  <line x1="55" y1="300" x2="60" y2="300" stroke="#94a3b8" stroke-width="2" /><text x="45" y="304" fill="#94a3b8" font-size="11" font-weight="bold" text-anchor="end">1</text>
  <line x1="55" y1="280" x2="60" y2="280" stroke="#94a3b8" stroke-width="2" /><text x="45" y="284" fill="#94a3b8" font-size="11" font-weight="bold" text-anchor="end">2</text>
  <line x1="55" y1="260" x2="60" y2="260" stroke="#94a3b8" stroke-width="2" /><text x="45" y="264" fill="#94a3b8" font-size="11" font-weight="bold" text-anchor="end">3</text>
  <line x1="55" y1="240" x2="60" y2="240" stroke="#94a3b8" stroke-width="2" /><text x="45" y="244" fill="#94a3b8" font-size="11" font-weight="bold" text-anchor="end">4</text>
  <line x1="55" y1="220" x2="60" y2="220" stroke="#94a3b8" stroke-width="2" /><text x="45" y="224" fill="#94a3b8" font-size="11" font-weight="bold" text-anchor="end">5</text>
  <line x1="55" y1="200" x2="60" y2="200" stroke="#94a3b8" stroke-width="2" /><text x="45" y="204" fill="#94a3b8" font-size="11" font-weight="bold" text-anchor="end">6</text>
  <line x1="55" y1="180" x2="60" y2="180" stroke="#94a3b8" stroke-width="2" /><text x="45" y="184" fill="#94a3b8" font-size="11" font-weight="bold" text-anchor="end">7</text>
  <line x1="55" y1="160" x2="60" y2="160" stroke="#94a3b8" stroke-width="2" /><text x="45" y="164" fill="#94a3b8" font-size="11" font-weight="bold" text-anchor="end">8</text>
  <line x1="55" y1="140" x2="60" y2="140" stroke="#94a3b8" stroke-width="2" /><text x="45" y="144" fill="#94a3b8" font-size="11" font-weight="bold" text-anchor="end">9</text>
  <line x1="55" y1="120" x2="60" y2="120" stroke="#94a3b8" stroke-width="2" /><text x="45" y="124" fill="#94a3b8" font-size="11" font-weight="bold" text-anchor="end">10</text>
  <line x1="55" y1="100" x2="60" y2="100" stroke="#94a3b8" stroke-width="2" /><text x="45" y="104" fill="#94a3b8" font-size="11" font-weight="bold" text-anchor="end">11</text>
  <line x1="55" y1="80" x2="60" y2="80" stroke="#94a3b8" stroke-width="2" /><text x="45" y="84" fill="#94a3b8" font-size="11" font-weight="bold" text-anchor="end">12</text>
  <line x1="55" y1="60" x2="60" y2="60" stroke="#94a3b8" stroke-width="2" /><text x="45" y="64" fill="#94a3b8" font-size="11" font-weight="bold" text-anchor="end">13</text>
  <line x1="55" y1="40" x2="60" y2="40" stroke="#94a3b8" stroke-width="2" /><text x="45" y="44" fill="#94a3b8" font-size="11" font-weight="bold" text-anchor="end">14</text>
  <text x="20" y="170" fill="#f8fafc" font-size="14" font-weight="bold" transform="rotate(-90 20 170)" text-anchor="middle">pH</text>
  <!-- X-Axis Ticks & Labels (Volume 0 to 50) -->
  <line x1="60" y1="320" x2="60" y2="325" stroke="#94a3b8" stroke-width="2" /><text x="60" y="342" fill="#94a3b8" font-size="11" font-weight="bold" text-anchor="middle">0</text>
  <line x1="100" y1="320" x2="100" y2="325" stroke="#94a3b8" stroke-width="2" /><text x="100" y="342" fill="#94a3b8" font-size="11" font-weight="bold" text-anchor="middle">5</text>
  <line x1="140" y1="320" x2="140" y2="325" stroke="#94a3b8" stroke-width="2" /><text x="140" y="342" fill="#94a3b8" font-size="11" font-weight="bold" text-anchor="middle">10</text>
  <line x1="180" y1="320" x2="180" y2="325" stroke="#94a3b8" stroke-width="2" /><text x="180" y="342" fill="#94a3b8" font-size="11" font-weight="bold" text-anchor="middle">15</text>
  <line x1="220" y1="320" x2="220" y2="325" stroke="#94a3b8" stroke-width="2" /><text x="220" y="342" fill="#94a3b8" font-size="11" font-weight="bold" text-anchor="middle">20</text>
  <line x1="260" y1="320" x2="260" y2="325" stroke="#94a3b8" stroke-width="2" /><text x="260" y="342" fill="#94a3b8" font-size="11" font-weight="bold" text-anchor="middle">25</text>
  <line x1="300" y1="320" x2="300" y2="325" stroke="#94a3b8" stroke-width="2" /><text x="300" y="342" fill="#94a3b8" font-size="11" font-weight="bold" text-anchor="middle">30</text>
  <line x1="340" y1="320" x2="340" y2="325" stroke="#94a3b8" stroke-width="2" /><text x="340" y="342" fill="#94a3b8" font-size="11" font-weight="bold" text-anchor="middle">35</text>
  <line x1="380" y1="320" x2="380" y2="325" stroke="#94a3b8" stroke-width="2" /><text x="380" y="342" fill="#94a3b8" font-size="11" font-weight="bold" text-anchor="middle">40</text>
  <line x1="420" y1="320" x2="420" y2="325" stroke="#94a3b8" stroke-width="2" /><text x="420" y="342" fill="#94a3b8" font-size="11" font-weight="bold" text-anchor="middle">45</text>
  <line x1="460" y1="320" x2="460" y2="325" stroke="#94a3b8" stroke-width="2" /><text x="460" y="342" fill="#94a3b8" font-size="11" font-weight="bold" text-anchor="middle">50</text>
  <text x="275" y="365" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">Volume of ammonia solution added/cm³</text>
  <!-- Curve: Strong Acid + Ammonia (Weak Base) -->
  <path d="M 60 286 C 100 282, 140 270, 164 250 C 176 230, 178 180, 180 170 C 182 160, 184 120, 200 112 C 240 108, 340 108, 440 108" fill="none" stroke="#0284c7" stroke-width="3" />
</svg>`;

const weakAcidKaDeterminationSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 380" class="w-full max-w-[460px] mx-auto rounded-lg flex-shrink-0" style="background: linear-gradient(to bottom right, #070f1e, #0b1b35); border: 1px solid #1e293b; font-family: system-ui, -apple-system, sans-serif;">
  <!-- Grid Lines -->
  <line x1="60" y1="320" x2="480" y2="320" stroke="#1e293b" stroke-width="1" />
  <line x1="60" y1="280" x2="480" y2="280" stroke="#1e293b" stroke-width="1" />
  <line x1="60" y1="240" x2="480" y2="240" stroke="#1e293b" stroke-width="1" />
  <line x1="60" y1="200" x2="480" y2="200" stroke="#1e293b" stroke-width="1" />
  <line x1="60" y1="160" x2="480" y2="160" stroke="#1e293b" stroke-width="1" />
  <line x1="60" y1="120" x2="480" y2="120" stroke="#1e293b" stroke-width="1" />
  <line x1="60" y1="80" x2="480" y2="80" stroke="#1e293b" stroke-width="1" />
  <line x1="60" y1="40" x2="480" y2="40" stroke="#1e293b" stroke-width="1" />

  <!-- Dotted lines for half-equivalence (10 cm3 -> pH 4.76) -->
  <line x1="140" y1="320" x2="140" y2="225" stroke="#10b981" stroke-width="1.5" stroke-dasharray="3,3" />
  <line x1="60" y1="225" x2="140" y2="225" stroke="#10b981" stroke-width="1.5" stroke-dasharray="3,3" />
  <circle cx="140" cy="225" r="5" fill="#10b981" />
  <text x="150" y="220" fill="#10b981" font-size="11" font-weight="bold">Half-equivalence (pH = 4.76)</text>

  <!-- Dotted lines for equivalence (20 cm3 -> pH 8.8) -->
  <line x1="220" y1="320" x2="220" y2="144" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="3,3" />
  <line x1="60" y1="144" x2="220" y2="144" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="3,3" />
  <circle cx="220" cy="144" r="5" fill="#ef4444" />
  <text x="230" y="140" fill="#ef4444" font-size="11" font-weight="bold">Equivalence Point (pH = 8.8)</text>

  <!-- Axes -->
  <line x1="60" y1="20" x2="60" y2="320" stroke="#94a3b8" stroke-width="2" />
  <line x1="60" y1="320" x2="490" y2="320" stroke="#94a3b8" stroke-width="2" />

  <!-- Y-Axis Ticks & Labels (pH 0 to 14) -->
  <line x1="55" y1="320" x2="60" y2="320" stroke="#94a3b8" stroke-width="2" /><text x="45" y="324" fill="#94a3b8" font-size="11" font-weight="bold" text-anchor="end">0</text>
  <line x1="55" y1="280" x2="60" y2="280" stroke="#94a3b8" stroke-width="2" /><text x="45" y="284" fill="#94a3b8" font-size="11" font-weight="bold" text-anchor="end">2</text>
  <line x1="55" y1="240" x2="60" y2="240" stroke="#94a3b8" stroke-width="2" /><text x="45" y="244" fill="#94a3b8" font-size="11" font-weight="bold" text-anchor="end">4</text>
  <line x1="55" y1="200" x2="60" y2="200" stroke="#94a3b8" stroke-width="2" /><text x="45" y="204" fill="#94a3b8" font-size="11" font-weight="bold" text-anchor="end">6</text>
  <line x1="55" y1="160" x2="60" y2="160" stroke="#94a3b8" stroke-width="2" /><text x="45" y="164" fill="#94a3b8" font-size="11" font-weight="bold" text-anchor="end">8</text>
  <line x1="55" y1="120" x2="60" y2="120" stroke="#94a3b8" stroke-width="2" /><text x="45" y="124" fill="#94a3b8" font-size="11" font-weight="bold" text-anchor="end">10</text>
  <line x1="55" y1="80" x2="60" y2="80" stroke="#94a3b8" stroke-width="2" /><text x="45" y="84" fill="#94a3b8" font-size="11" font-weight="bold" text-anchor="end">12</text>
  <line x1="55" y1="40" x2="60" y2="40" stroke="#94a3b8" stroke-width="2" /><text x="45" y="44" fill="#94a3b8" font-size="11" font-weight="bold" text-anchor="end">14</text>
  <text x="20" y="170" fill="#f8fafc" font-size="14" font-weight="bold" transform="rotate(-90 20 170)" text-anchor="middle">pH</text>

  <!-- X-Axis Ticks & Labels (Volume 0 to 50) -->
  <line x1="60" y1="320" x2="60" y2="325" stroke="#94a3b8" stroke-width="2" /><text x="60" y="342" fill="#94a3b8" font-size="11" font-weight="bold" text-anchor="middle">0</text>
  <line x1="140" y1="320" x2="140" y2="325" stroke="#94a3b8" stroke-width="2" /><text x="140" y="342" fill="#94a3b8" font-size="11" font-weight="bold" text-anchor="middle">10</text>
  <line x1="220" y1="320" x2="220" y2="325" stroke="#94a3b8" stroke-width="2" /><text x="220" y="342" fill="#94a3b8" font-size="11" font-weight="bold" text-anchor="middle">20</text>
  <line x1="300" y1="320" x2="300" y2="325" stroke="#94a3b8" stroke-width="2" /><text x="300" y="342" fill="#94a3b8" font-size="11" font-weight="bold" text-anchor="middle">30</text>
  <line x1="380" y1="320" x2="380" y2="325" stroke="#94a3b8" stroke-width="2" /><text x="380" y="342" fill="#94a3b8" font-size="11" font-weight="bold" text-anchor="middle">40</text>
  <line x1="460" y1="320" x2="460" y2="325" stroke="#94a3b8" stroke-width="2" /><text x="460" y="342" fill="#94a3b8" font-size="11" font-weight="bold" text-anchor="middle">50</text>
  <text x="275" y="365" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">Volume of NaOH added/cm³</text>

  <!-- Curve: Weak Acid + Strong Base -->
  <path d="M 60 260 
           C 90 250, 110 235, 140 225 
           C 180 215, 210 205, 218 170
           C 220 150, 220 120, 222 100
           C 225 80, 260 65, 340 55
           C 400 50, 440 50, 480 50" 
        fill="none" stroke="#a855f7" stroke-width="3" />
</svg>`;

const titrationCurvesDashboardSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 980 410" class="w-full h-auto rounded-lg flex-shrink-0" style="background: linear-gradient(to bottom right, #070f1e, #0b1b35); border: 1px solid #1e293b; font-family: system-ui, -apple-system, sans-serif;">
  <text x="490" y="24" text-anchor="middle" fill="#f8fafc" font-size="14" font-weight="bold">pH Titration Curves &amp; Indicator Transition Ranges</text>

  <!-- ===== PANEL 1: Strong Acid / Strong Base ===== -->
  <g transform="translate(10, 38)">
    <rect x="0" y="0" width="228" height="355" rx="8" fill="#0f172a" fill-opacity="0.7" stroke="#334155" stroke-width="1.5"/>
    <text x="114" y="20" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="bold">Strong Acid / Strong Base</text>

    <!-- Indicator bands (within plot area x=42..210, y=40..310) -->
    <rect x="42" y="117" width="168" height="36" fill="#ef4444" fill-opacity="0.12" stroke="#ef4444" stroke-dasharray="3 2" stroke-width="0.8"/>
    <text x="46" y="130" fill="#fca5a5" font-size="11" font-weight="bold">Phenolphthalein (8.2 – 10.0)</text>
    <rect x="42" y="225" width="168" height="26" fill="#f59e0b" fill-opacity="0.12" stroke="#f59e0b" stroke-dasharray="3 2" stroke-width="0.8"/>
    <text x="46" y="241" fill="#fcd34d" font-size="11" font-weight="bold">Methyl Orange (3.1 – 4.4)</text>

    <!-- Axes: plot area x=42..210, y=40..310 -->
    <line x1="42" y1="310" x2="210" y2="310" stroke="#64748b" stroke-width="1.5"/>
    <line x1="42" y1="310" x2="42" y2="40" stroke="#64748b" stroke-width="1.5"/>

    <!-- Y-axis labels (pH 0-14, every 2) -->
    <text x="36" y="314" fill="#94a3b8" font-size="11" text-anchor="end">0</text>
    <text x="36" y="276" fill="#94a3b8" font-size="11" text-anchor="end">2</text>
    <text x="36" y="237" fill="#94a3b8" font-size="11" text-anchor="end">4</text>
    <text x="36" y="195" fill="#94a3b8" font-size="11" text-anchor="end">6</text>
    <text x="36" y="176" fill="#94a3b8" font-size="11" text-anchor="end">7</text>
    <text x="36" y="157" fill="#94a3b8" font-size="11" text-anchor="end">8</text>
    <text x="36" y="118" fill="#94a3b8" font-size="11" text-anchor="end">10</text>
    <text x="36" y="79" fill="#94a3b8" font-size="11" text-anchor="end">12</text>
    <text x="36" y="44" fill="#94a3b8" font-size="11" text-anchor="end">14</text>
    <text x="12" y="175" fill="#94a3b8" font-size="12" text-anchor="middle" transform="rotate(-90,12,175)">pH</text>

    <!-- X-axis labels (0,10,20,25,30,40,50) -->
    <text x="42" y="324" fill="#94a3b8" font-size="11" text-anchor="middle">0</text>
    <text x="76" y="324" fill="#94a3b8" font-size="11" text-anchor="middle">10</text>
    <text x="109" y="324" fill="#94a3b8" font-size="11" text-anchor="middle">20</text>
    <text x="126" y="324" fill="#94a3b8" font-size="11" text-anchor="middle">25</text>
    <text x="143" y="324" fill="#94a3b8" font-size="11" text-anchor="middle">30</text>
    <text x="176" y="324" fill="#94a3b8" font-size="11" text-anchor="middle">40</text>
    <text x="210" y="324" fill="#94a3b8" font-size="11" text-anchor="middle">50</text>
    <text x="126" y="337" fill="#94a3b8" font-size="12" text-anchor="middle">Vol / cm³</text>

    <!-- Guide grid -->
    <line x1="42" y1="175" x2="210" y2="175" stroke="#334155" stroke-width="0.8" stroke-dasharray="3 3"/>
    <line x1="126" y1="310" x2="126" y2="40" stroke="#334155" stroke-width="0.8" stroke-dasharray="3 3"/>

    <!-- Red equivalence dashed lines -->
    <line x1="42" y1="175" x2="126" y2="175" stroke="#ef4444" stroke-width="1.2" stroke-dasharray="4 2.5"/>
    <line x1="126" y1="175" x2="126" y2="310" stroke="#ef4444" stroke-width="1.2" stroke-dasharray="4 2.5"/>

    <path d="M 42,291 C 76,288 109,278 123,251 C 124.5,238 125,205 126,175 C 126.5,145 127,119 130,100 C 137,85 176,75 210,74" fill="none" stroke="#38bdf8" stroke-width="2.5" stroke-linecap="round"/>

    <!-- Equivalence dot -->
    <circle cx="126" cy="175" r="4" fill="#ef4444"/>
    <text x="132" y="172" fill="#ef4444" font-size="11" font-weight="bold">pH=7, V=25 cm³</text>

    <text x="114" y="348" fill="#38bdf8" font-size="12" text-anchor="middle" font-weight="600">Vertical section: pH 3 → 11</text>
  </g>

  <!-- ===== PANEL 2: Strong Acid / Weak Base ===== -->
  <g transform="translate(253, 38)">
    <rect x="0" y="0" width="228" height="355" rx="8" fill="#0f172a" fill-opacity="0.7" stroke="#334155" stroke-width="1.5"/>
    <text x="114" y="20" text-anchor="middle" fill="#fb7185" font-size="12" font-weight="bold">Strong Acid / Weak Base</text>

    <line x1="42" y1="310" x2="210" y2="310" stroke="#64748b" stroke-width="1.5"/>
    <line x1="42" y1="310" x2="42" y2="40" stroke="#64748b" stroke-width="1.5"/>

    <text x="36" y="314" fill="#94a3b8" font-size="11" text-anchor="end">0</text>
    <text x="36" y="276" fill="#94a3b8" font-size="11" text-anchor="end">2</text>
    <text x="36" y="237" fill="#94a3b8" font-size="11" text-anchor="end">4</text>
    <text x="36" y="195" fill="#94a3b8" font-size="11" text-anchor="end">6</text>
    <text x="36" y="176" fill="#94a3b8" font-size="11" text-anchor="end">7</text>
    <text x="36" y="157" fill="#94a3b8" font-size="11" text-anchor="end">8</text>
    <text x="36" y="118" fill="#94a3b8" font-size="11" text-anchor="end">10</text>
    <text x="36" y="79" fill="#94a3b8" font-size="11" text-anchor="end">12</text>
    <text x="36" y="44" fill="#94a3b8" font-size="11" text-anchor="end">14</text>
    <text x="12" y="175" fill="#94a3b8" font-size="12" text-anchor="middle" transform="rotate(-90,12,175)">pH</text>

    <text x="42" y="324" fill="#94a3b8" font-size="11" text-anchor="middle">0</text>
    <text x="76" y="324" fill="#94a3b8" font-size="11" text-anchor="middle">10</text>
    <text x="109" y="324" fill="#94a3b8" font-size="11" text-anchor="middle">20</text>
    <text x="126" y="324" fill="#94a3b8" font-size="11" text-anchor="middle">25</text>
    <text x="143" y="324" fill="#94a3b8" font-size="11" text-anchor="middle">30</text>
    <text x="176" y="324" fill="#94a3b8" font-size="11" text-anchor="middle">40</text>
    <text x="210" y="324" fill="#94a3b8" font-size="11" text-anchor="middle">50</text>
    <text x="126" y="337" fill="#94a3b8" font-size="12" text-anchor="middle">Vol / cm³</text>

    <line x1="42" y1="175" x2="210" y2="175" stroke="#334155" stroke-width="0.8" stroke-dasharray="3 3"/>
    <line x1="126" y1="310" x2="126" y2="40" stroke="#334155" stroke-width="0.8" stroke-dasharray="3 3"/>

    <!-- Equivalence at pH≈5.2 -->
    <line x1="42" y1="210" x2="126" y2="210" stroke="#ef4444" stroke-width="1.2" stroke-dasharray="4 2.5"/>
    <line x1="126" y1="210" x2="126" y2="310" stroke="#ef4444" stroke-width="1.2" stroke-dasharray="4 2.5"/>

    <path d="M 42,291 C 76,287 109,272 123,256 C 124.5,246 125,228 126,210 C 127,192 128,177 130,168 C 137,152 176,139 210,136" fill="none" stroke="#fb7185" stroke-width="2.5" stroke-linecap="round"/>

    <circle cx="126" cy="210" r="4" fill="#ef4444"/>
    <text x="132" y="208" fill="#ef4444" font-size="11" font-weight="bold">pH &lt; 7</text>

    <text x="114" y="348" fill="#fb7185" font-size="12" text-anchor="middle" font-weight="600">Vertical section: pH 3 → 7</text>
  </g>

  <!-- ===== PANEL 3: Weak Acid / Strong Base ===== -->
  <g transform="translate(496, 38)">
    <rect x="0" y="0" width="228" height="355" rx="8" fill="#0f172a" fill-opacity="0.7" stroke="#334155" stroke-width="1.5"/>
    <text x="114" y="20" text-anchor="middle" fill="#34d399" font-size="12" font-weight="bold">Weak Acid / Strong Base</text>

    <line x1="42" y1="310" x2="210" y2="310" stroke="#64748b" stroke-width="1.5"/>
    <line x1="42" y1="310" x2="42" y2="40" stroke="#64748b" stroke-width="1.5"/>

    <text x="36" y="314" fill="#94a3b8" font-size="11" text-anchor="end">0</text>
    <text x="36" y="276" fill="#94a3b8" font-size="11" text-anchor="end">2</text>
    <text x="36" y="237" fill="#94a3b8" font-size="11" text-anchor="end">4</text>
    <text x="36" y="195" fill="#94a3b8" font-size="11" text-anchor="end">6</text>
    <text x="36" y="176" fill="#94a3b8" font-size="11" text-anchor="end">7</text>
    <text x="36" y="157" fill="#94a3b8" font-size="11" text-anchor="end">8</text>
    <text x="36" y="118" fill="#94a3b8" font-size="11" text-anchor="end">10</text>
    <text x="36" y="79" fill="#94a3b8" font-size="11" text-anchor="end">12</text>
    <text x="36" y="44" fill="#94a3b8" font-size="11" text-anchor="end">14</text>
    <text x="12" y="175" fill="#94a3b8" font-size="12" text-anchor="middle" transform="rotate(-90,12,175)">pH</text>

    <text x="42" y="324" fill="#94a3b8" font-size="11" text-anchor="middle">0</text>
    <text x="76" y="324" fill="#94a3b8" font-size="11" text-anchor="middle">10</text>
    <text x="109" y="324" fill="#94a3b8" font-size="11" text-anchor="middle">20</text>
    <text x="126" y="324" fill="#94a3b8" font-size="11" text-anchor="middle">25</text>
    <text x="143" y="324" fill="#94a3b8" font-size="11" text-anchor="middle">30</text>
    <text x="176" y="324" fill="#94a3b8" font-size="11" text-anchor="middle">40</text>
    <text x="210" y="324" fill="#94a3b8" font-size="11" text-anchor="middle">50</text>
    <text x="126" y="337" fill="#94a3b8" font-size="12" text-anchor="middle">Vol / cm³</text>

    <line x1="42" y1="175" x2="210" y2="175" stroke="#334155" stroke-width="0.8" stroke-dasharray="3 3"/>
    <line x1="126" y1="310" x2="126" y2="40" stroke="#334155" stroke-width="0.8" stroke-dasharray="3 3"/>

    <!-- Equivalence at pH≈8.87 -->
    <line x1="42" y1="139" x2="126" y2="139" stroke="#ef4444" stroke-width="1.2" stroke-dasharray="4 2.5"/>
    <line x1="126" y1="139" x2="126" y2="310" stroke="#ef4444" stroke-width="1.2" stroke-dasharray="4 2.5"/>

    <path d="M 42,255 C 76,240 109,211 122,191 C 124,179 125,160 126,139 C 127,118 128,92 130,84 C 137,76 176,70 210,69" fill="none" stroke="#34d399" stroke-width="2.5" stroke-linecap="round"/>

    <circle cx="126" cy="139" r="4" fill="#ef4444"/>
    <text x="132" y="137" fill="#ef4444" font-size="11" font-weight="bold">pH &gt; 7</text>

    <text x="114" y="348" fill="#34d399" font-size="12" text-anchor="middle" font-weight="600">Vertical section: pH 7 → 11</text>
  </g>

  <!-- ===== PANEL 4: Weak Acid / Weak Base ===== -->
  <g transform="translate(739, 38)">
    <rect x="0" y="0" width="228" height="355" rx="8" fill="#0f172a" fill-opacity="0.7" stroke="#334155" stroke-width="1.5"/>
    <text x="114" y="20" text-anchor="middle" fill="#a78bfa" font-size="12" font-weight="bold">Weak Acid / Weak Base</text>

    <line x1="42" y1="310" x2="210" y2="310" stroke="#64748b" stroke-width="1.5"/>
    <line x1="42" y1="310" x2="42" y2="40" stroke="#64748b" stroke-width="1.5"/>

    <text x="36" y="314" fill="#94a3b8" font-size="11" text-anchor="end">0</text>
    <text x="36" y="276" fill="#94a3b8" font-size="11" text-anchor="end">2</text>
    <text x="36" y="237" fill="#94a3b8" font-size="11" text-anchor="end">4</text>
    <text x="36" y="195" fill="#94a3b8" font-size="11" text-anchor="end">6</text>
    <text x="36" y="176" fill="#94a3b8" font-size="11" text-anchor="end">7</text>
    <text x="36" y="157" fill="#94a3b8" font-size="11" text-anchor="end">8</text>
    <text x="36" y="118" fill="#94a3b8" font-size="11" text-anchor="end">10</text>
    <text x="36" y="79" fill="#94a3b8" font-size="11" text-anchor="end">12</text>
    <text x="36" y="44" fill="#94a3b8" font-size="11" text-anchor="end">14</text>
    <text x="12" y="175" fill="#94a3b8" font-size="12" text-anchor="middle" transform="rotate(-90,12,175)">pH</text>

    <text x="42" y="324" fill="#94a3b8" font-size="11" text-anchor="middle">0</text>
    <text x="76" y="324" fill="#94a3b8" font-size="11" text-anchor="middle">10</text>
    <text x="109" y="324" fill="#94a3b8" font-size="11" text-anchor="middle">20</text>
    <text x="126" y="324" fill="#94a3b8" font-size="11" text-anchor="middle">25</text>
    <text x="143" y="324" fill="#94a3b8" font-size="11" text-anchor="middle">30</text>
    <text x="176" y="324" fill="#94a3b8" font-size="11" text-anchor="middle">40</text>
    <text x="210" y="324" fill="#94a3b8" font-size="11" text-anchor="middle">50</text>
    <text x="126" y="337" fill="#94a3b8" font-size="12" text-anchor="middle">Vol / cm³</text>

    <line x1="42" y1="175" x2="210" y2="175" stroke="#334155" stroke-width="0.8" stroke-dasharray="3 3"/>
    <line x1="126" y1="310" x2="126" y2="40" stroke="#334155" stroke-width="0.8" stroke-dasharray="3 3"/>

    <!-- Inflection near pH=7 -->
    <line x1="42" y1="175" x2="126" y2="175" stroke="#ef4444" stroke-width="1.2" stroke-dasharray="4 2.5"/>
    <line x1="126" y1="175" x2="126" y2="310" stroke="#ef4444" stroke-width="1.2" stroke-dasharray="4 2.5"/>

    <path d="M 42,255 C 76,242 109,217 126,175 C 143,133 176,128 210,127" fill="none" stroke="#a78bfa" stroke-width="2.5" stroke-linecap="round"/>

    <circle cx="126" cy="175" r="4" fill="#ef4444"/>
    <text x="132" y="172" fill="#ef4444" font-size="11" font-weight="bold">Inflection ~7</text>

    <text x="114" y="348" fill="#f43f5e" font-size="12" text-anchor="middle" font-weight="bold">No Vertical Section!</text>
  </g>
</svg>`;



export const parts: LessonPart[] = [
  {
    id: 'bronsted-lowry-ph-u4-l4',
    title: 'Brønsted-Lowry Theory & pH',
    type: 'text',
    content: `
${svgToken(protonTransferSvg)}

> [!NOTE]
> ### 🧪 Brønsted-Lowry Acid-Base Theory
> Johannes Nicolaus Brønsted and Thomas Martin Lowry independently proposed a theory defining acids and bases by how they react with each other:
> 
> * **Brønsted-Lowry Acid:** A substance that can donate a proton — a **proton donor** (hydrogen ion, $\\text{H}^+$)
>   * *Example:* The ammonium ion ($\\text{NH}_4^+$) acts as a proton donor.
> * **Brønsted-Lowry Base:** A substance that can accept a proton — a **proton acceptor**
>   * *Examples:* The hydroxide ion ($\\text{OH}^-$), acetate ion ($\\text{CH}_3\\text{COO}^-$), carbonate ion ($\\text{CO}_3^{2-}$), and phosphate ion ($\\text{PO}_4^{3-}$) act as proton acceptors.
> * **Proton Transfer:** Acid-base reactions involve the transfer of a proton from an acid to a base.
> * **Lone Pairs:** To accept a proton, a base must contain an atom with a lone pair of electrons to form a dative covalent bond with the incoming proton.

> [!IMPORTANT]
> ### 👥 Conjugate Acid-Base Pairs
> A conjugate pair consists of two species that differ by exactly one proton.
> When a Brønsted-Lowry acid donates a proton, it forms a species that can accept a proton in the reverse reaction. This species is called its **conjugate base**.
> Similarly, when a base accepts a proton, it forms its **conjugate acid**.
> 
> **Example 1: Ethanoic acid in water**
> $$\\text{CH}_3\\text{COOH(aq)} + \\text{H}_2\\text{O(l)} \\rightleftharpoons \\text{CH}_3\\text{COO}^-\\text{(aq)} + \\text{H}_3\\text{O}^+\\text{(aq)}$$
> * **Acid 1:** $\\text{CH}_3\\text{COOH}$ (Ethanoic acid) — The species that donates the proton.
> * **Base 1:** $\\text{CH}_3\\text{COO}^-$ (Ethanoate ion) — The conjugate base formed after the acid donates its proton.
> * **Base 2 / Acid 2:** In aqueous solution, the free proton $\\text{H}^+\\text{(aq)}$ reacts with the solvent water $\\text{H}_2\\text{O(l)}$. Thus, water acts as **Base 2** and the resulting hydronium ion $\\text{H}_3\\text{O}^+$ acts as **Acid 2**
> 
> **Example 2: Ammonia in water**
> $$\\text{NH₃(aq)} + \\text{H₂O(l)} \\rightleftharpoons \\text{NH₄}^+\\text{(aq)} + \\text{OH}^-\\text{(aq)}$$
> * **Forward Reaction:** $\\text{H₂O}$ donates a proton to $\\text{NH₃}$, so $\\text{H₂O}$ is the acid and $\\text{NH₃}$ is the base.
> * **Reverse Reaction:** $\\text{NH₄}^+$ donates a proton to $\\text{OH}^-$, so $\\text{NH₄}^+$ is the conjugate acid and $\\text{OH}^-$ is the conjugate base.
> * **Pairs:** Conjugate pair 1 is $\\text{NH₄}^+$ / $\\text{NH₃}$; Conjugate pair 2 is $\\text{H₂O}$ / $\\text{OH}^-$

> [!BOX]
> ### 🌀 Amphiprotic vs Amphoteric
> Some substances can act as both acids and bases:
> 
> * **Amphoteric:** Any substance that can react as both an acid and a base (e.g., aluminium oxide $\\text{Al₂O₃}$ reacts with both acids and bases, though it does not transfer protons in all cases)
> * **Amphiprotic:** A substance that can *both* donate and accept protons (e.g., water $\\text{H₂O}$, hydrogen carbonate $\\text{HCO₃}^-$, and hydrogen sulfate $\\text{HSO₄}^-$)
> * **Key Rule:** All amphiprotic substances are amphoteric, but not all amphoteric substances are amphiprotic.

> [!IMPORTANT]
> ### 🧮 Acid-Base Proticity (Monoprotic vs Polyprotic)
> * **Monoprotic (Monobasic) Acids:** Can donate only one proton per molecule (e.g., $\\text{HCl}$, $\\text{HNO₃}$)
> * **Diprotic (Dibasic) Acids:** Can donate two protons per molecule, dissociating in two sequential steps (e.g., sulfuric acid, $\\text{H₂SO₄}$):
>   * **Step 1:** $\\text{H₂SO₄(aq)} \\rightarrow \\text{H}^+\\text{(aq)} + \\text{HSO₄}^-\\text{(aq)}$ (Fully dissociated)
>   * **Step 2:** $\\text{HSO₄}^-\\text{(aq)} \\rightleftharpoons \\text{H}^+\\text{(aq)} + \\text{SO₄}^{2-}\\text{(aq)}$ (Partially dissociated)
> * **Diprotic (Diacidic) Bases:** Can accept up to two protons per formula unit (e.g., carbonate ion, $\\text{CO₃}^{2-}$):
>   * **Step 1:** $\\text{CO₃}^{2-}\\text{(aq)} + \\text{H}^+\\text{(aq)} \\rightarrow \\text{HCO₃}^-\\text{(aq)}$
>   * **Step 2:** $\\text{HCO₃}^-\\text{(aq)} + \\text{H}^+\\text{(aq)} \\rightleftharpoons \\text{H₂CO₃(aq)}$

> [!BOX]
> ### 🧪 Nitric Acid as a Base (The Nitrating Mixture)
> In organic chemistry, benzene undergoes nitration using a mixture of concentrated sulfuric acid and concentrated nitric acid. In this mixture:
> $$\\text{H₂SO₄} + \\text{HNO₃} \\rightleftharpoons \\text{HSO₄}^- + \\text{H₂NO₃}^+$$
> 
> * **Acid 1:** $\\text{H₂SO₄}$ (acts as an acid because it donates a proton to nitric acid)
> * **Base 2:** Concentrated nitric acid, $\\text{HNO₃}$
> * **Conjugate Base 1:** $\\text{HSO₄}^-$
> * **Conjugate Acid 2:** $\\text{H₂NO₃}^+$ (which subsequently dissociates to form the $\\text{NO₂}^+$ electrophile)

> [!IMPORTANT]
> ### 🧮 Strong vs Weak Acids & The pH Scale
> * **Strong Acids:** Almost completely dissociated in aqueous solution:
>   $$\\\\text{HCl(aq)} \\\\rightarrow \\\\text{H}^+\\\\text{aq} + \\\\text{Cl}^-\\\\text{aq}$$
>   * For strong acids like $\\\\text{HCl}$, $[\\\\text{H}^+] = [\\\\text{HCl}]$
> * **Weak Acids:** Only partially dissociated (typically less than 10%) in aqueous solution:
>   $$\\\\text{CH₃COOH(aq)} \\\\rightleftharpoons \\\\text{CH₃COO}^-\\\\text{aq} + \\\\text{H}^+\\\\text{aq}$$
> * **The pH Formulas:**
>   $$\\\\text{pH} = -\\\\log_{10}[\\\\text{H}^+] \\\\quad \\\\Leftrightarrow \\\\quad [\\\\text{H}^+] = 10^{-\\\\text{pH}}$$
> * **The pOH Relationship:**
>   $$\\\\text{pOH} = -\\\\log_{10}[\\\\text{OH}^-] \\\\quad \\\\Leftrightarrow \\\\quad [\\\\text{OH}^-] = 10^{-\\\\text{pOH}}$$
>   * At $298\\\\text{ K}$, the relationship is: $\\\\text{pH} + \\\\text{pOH} = 14$
> * **Strong Bases Concentration Relation:**
>   * E.g., for a strong dibasic base like $\\\\text{Mg(OH)₂}$, each mole yields two moles of hydroxide ions:
>     $$[\\\\text{OH}^-] = 2 \\\\times [\\\\text{Mg(OH)₂}]$$

> [!BOX]
> ### 🌡️ The Ionic Product of Water ($K_w$)
> Water self-ionises:
> $$\\text{H₂O(l)} \\rightleftharpoons \\text{H}^+\\text{(aq)} + \\text{OH}^-\\text{(aq)}$$
> $$K_w = [\\text{H}^+\\text{(aq)}][\\text{OH}^-\\text{(aq)}]$$
> 
> * **At 298 K:** $K_w = 1.00 \\times 10^{-14}\\text{ mol}^2\\text{ dm}^{-6}$, giving neutral $\\text{pH} = 7.00$
> * **$pK_w$ relation:** $\\text{p}K_w = -\\log_{10}K_w = 14.00\\text{ (at } 298\\text{ K)}$
> 
> #### Table B: Values of Kw and pKw at Various Temperatures
> | Temperature (T / K) | Kw / mol² dm⁻⁶ | pKw | Neutral pH |
> | :--- | :--- | :--- | :--- |
> | 273 K | $1.14 \\times 10^{-15}$ | $14.94$ | $7.47$ |
> | 283 K | $2.93 \\times 10^{-15}$ | $14.53$ | $7.27$ |
> | 288 K | $4.52 \\times 10^{-15}$ | $14.34$ | $7.17$ |
> | 293 K | $6.81 \\times 10^{-15}$ | $14.17$ | $7.08$ |
> | 298 K | $1.00 \\times 10^{-14}$ | $14.00$ | $7.00$ |
> | 303 K | $1.47 \\times 10^{-14}$ | $13.83$ | $6.92$ |
> | 308 K | $2.31 \\times 10^{-14}$ | $13.68$ | $6.84$ |
> | 313 K | $2.92 \\times 10^{-14}$ | $13.53$ | $6.77$ |
> 
> * **Physical meaning:** Since water self-ionisation is an **endothermic** process, increasing temperature shifts the equilibrium to the right, raising $K_w$ and yielding a higher concentration of both $\\text{H}^+$ and $\\text{OH}^-$ ions. Thus, neutral water at higher temperatures has a pH **less than 7.00**

> [!BOX]
> ### 🔬 pH and Activity & Concentrated Acids
> * **pH and Activity:** In concentrated acid solutions, effective concentration (activity) is lower than actual concentration due to ion interactions. E.g., $1.00\\text{ mol dm}^{-3}$ HCl has active $[\\text{H}^+] = 0.81\\text{ mol dm}^{-3}$ (pH = 0.09)
> * Concentrated acids can have negative pH (e.g., pH of $-0.74$ for $10.00\\text{ mol dm}^{-3}$ HCl that is 55% dissociated)

> [!EXAMPLE]
> #### 📝 Worked Example 1: pH of a Strong Base
> **Question:** Calculate pH of $0.0500\\text{ mol dm}^{-3}$ KOH at $298\\text{ K}$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. $[\\text{OH}^-] = 0.0500\\text{ mol dm}^{-3}$
> > 2. $[\\text{H}^+] = \\frac{K_w}{[\\text{OH}^-]} = \\frac{1.00 \\times 10^{-14}}{0.0500} = 2.00 \\times 10^{-13}\\text{ mol dm}^{-3}$
> > 3. $\\text{pH} = -\\log(2.00 \\times 10^{-13}) = 12.70$

> [!EXAMPLE]
> #### 📝 Worked Example 2: Conjugate Acids
> **Question:** Give the formula of the conjugate acid of:
> * (a) $\\text{CH₃COO}^-$
> * (b) $\\text{CH₃NH₂}$
> * (c) $\\text{HSO₄}^-$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > * (a) $\\text{CH₃COO}^- + \\text{H}^+ \\rightarrow \\text{CH₃COOH}$ (Adding $\\text{H}^+$ to the acetate/ethanoate ion forms ethanoic/acetic acid)
> > * (b) $\\text{CH₃NH₂} + \\text{H}^+ \\rightarrow \\text{CH₃NH₃}^+$ (Adding $\\text{H}^+$ to methylamine forms the methylammonium ion)
> > * (c) $\\text{HSO₄}^- + \\text{H}^+ \\rightarrow \\text{H₂SO₄}$ (Adding $\\text{H}^+$ to hydrogen sulfate forms sulfuric acid)

> [!EXAMPLE]
> #### 📝 Worked Example 3: Conjugate Bases
> **Question:** Give conjugate base of:
> * (a) $\\text{HClO₄}$
> * (b) $\\text{H₃O}^+$
> * (c) $\\text{HSO₄}^-$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > * (a) $\\text{ClO₄}^-$ (Removing $\\text{H}^+$ from perchloric acid forms the perchlorate ion)
> > * (b) $\\text{H₂O}$ (Removing $\\text{H}^+$ from the hydronium ion leaves water)
> > * (c) $\\text{SO₄}^{2-}$ (Removing $\\text{H}^+$ from hydrogen sulfate forms the sulfate ion)

> [!EXAMPLE]
> #### 📝 Worked Example 4: Identifying Conjugate Pairs
> **Question:** Identify the conjugate acid-base pairs and the species acting as Brønsted-Lowry acids in the forward and reverse directions:
> * (a) $\\text{H₂CO₃} + \\text{H₂O} \\rightleftharpoons \\text{HCO₃}^- + \\text{H₃O}^+$
> * (b) $\\text{HCO₃}^- + \\text{H₂O} \\rightleftharpoons \\text{CO₃}^{2-} + \\text{H₃O}^+$
> * (c) $\\text{CH₃COOH} + \\text{HNO₃} \\rightleftharpoons \\text{CH₃COOH₂}^+ + \\text{NO₃}^-$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > * **(a)** Conjugate pairs: ($\\text{H₂CO₃}$ / $\\text{HCO₃}^-$) and ($\\text{H₃O}^+$ / $\\text{H₂O}$)
> >   * Brønsted-Lowry Acids: $\\text{H₂CO₃}$ (forward) and $\\text{H₃O}^+$ (reverse)
> > * **(b)** Conjugate pairs: ($\\text{HCO₃}^-$ / $\\text{CO₃}^{2-}$) and ($\\text{H₃O}^+$ / $\\text{H₂O}$)
> >   * Brønsted-Lowry Acids: $\\text{HCO₃}^-$ (forward) and $\\text{H₃O}^+$ (reverse)
> > * **(c)** Conjugate pairs: ($\\text{HNO₃}$ / $\\text{NO₃}^-$) and ($\\text{CH₃COOH₂}^+$ / $\\text{CH₃COOH}$)
> >   * Brønsted-Lowry Acids: $\\text{HNO₃}$ (forward) and $\\text{CH₃COOH₂}^+$ (reverse)

> [!EXAMPLE]
> #### 📝 Worked Example 5: Explaining Acid-Base Reactions
> **Question:** Explain why the reaction $\\text{NH₄}^+ + \\text{NH₂}^- \\rightarrow 2\\text{NH₃}$ may be described as a Brønsted-Lowry acid-base reaction.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Proton Transfer:** It involves a proton ($\\text{H}^+$) transfer.
> > 2. **Ammonium Ion:** $\\text{NH₄}^+$ acts as the acid by donating a proton to $\\text{NH₂}^-$
> > 3. **Amide Ion:** $\\text{NH₂}^-$ acts as the base by accepting the proton, producing two molecules of ammonia ($\\text{NH₃}$)

> [!EXAMPLE]
> #### 📝 Worked Example 6: pH of Strong Monobasic Acids (A)
> **Question:** Calculate the pH of:
> * (a) $0.00100\\text{ mol dm}^{-3}$ HCl
> * (b) $0.0500\\text{ mol dm}^{-3}$ $\\text{HNO₃}$
> * (c) $0.150\\text{ mol dm}^{-3}$ HBr
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > * (a) Since HCl fully dissociates, $[\\text{H}^+] = 0.00100\\text{ mol dm}^{-3} \\implies \\text{pH} = -\\log_{10}(0.00100) = 3.00$
> > * (b) Since $\\text{HNO₃}$ fully dissociates, $[\\text{H}^+] = 0.0500\\text{ mol dm}^{-3} \\implies \\text{pH} = -\\log_{10}(0.0500) = 1.30$
> > * (c) Since HBr fully dissociates, $[\\text{H}^+] = 0.150\\text{ mol dm}^{-3} \\implies \\text{pH} = -\\log_{10}(0.150) = 0.82$

> [!EXAMPLE]
> #### 📝 Worked Example 7: pH of Strong Monoprotic Acids (B)
> **Question:** Calculate the pH of:
> * (a) $0.0100\\\\text{ mol dm}^{-3}$ HI
> * (b) $0.500\\\\text{ mol dm}^{-3}$ $\\\\text{HNO₃}$
> * (c) $0.00405\\\\text{ mol dm}^{-3}$ HCl
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > * (a) $\\\\text{pH} = -\\\\log_{10}(0.0100) = 2.00$
> > * (b) $\\\\text{pH} = -\\\\log_{10}(0.500) = 0.30$
> > * (c) $\\\\text{pH} = -\\\\log_{10}(0.00405) = 2.39$

> [!EXAMPLE]
> #### 📝 Worked Example 8: pH of Concentrated Partially Dissociated Acid
> **Question:** Calculate pH of $10.00\\text{ mol dm}^{-3}$ HCl, 55% dissociated
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. $[\\text{H}^+] = 0.55 \\times 10.00 = 5.50\\text{ mol dm}^{-3}$
> > 2. $\\text{pH} = -\\log(5.50) = -0.74$

> [!EXAMPLE]
> #### 📝 Worked Example 9: Calculating [H⁺] from pH
> **Question:** Calculate $[\\text{H}^+]$ for solution of pH 4.80
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. $[\\text{H}^+] = 10^{-4.80} = 1.58 \\times 10^{-5}\\text{ mol dm}^{-3}$

> [!EXAMPLE]
> #### 📝 Worked Example 10: pH of Mixtures of Strong Acids & Bases
> **Question:** Calculate the pH at $298\\\\text{ K}$ of:
> * **(a) Acid in Excess:** A mixture of $20.0\\\\text{ cm}^3$ of $1.00\\\\text{ mol dm}^{-3}\\\\text{ HCl}$ and $5.0\\\\text{ cm}^3$ of $1.00\\\\text{ mol dm}^{-3}\\\\text{ NaOH}$.
> * **(b) Base in Excess:** A mixture of $10.0\\\\text{ cm}^3$ of $0.100\\\\text{ mol dm}^{-3}\\\\text{ HCl}$ and $40.0\\\\text{ cm}^3$ of $0.200\\\\text{ mol dm}^{-3}\\\\text{ NaOH}$.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > **(a) Acid in Excess Solution:**
> > * 1. **Calculate moles of each reactant:**
> >      $$\\\\text{Moles of H}^+ = 0.0200\\\\text{ dm}^3 \\\\times 1.00\\\\text{ mol dm}^{-3} = 0.0200\\\\text{ mol}$$
> >      $$\\\\text{Moles of OH}^- = 0.0050\\\\text{ dm}^3 \\\\times 1.00\\\\text{ mol dm}^{-3} = 0.0050\\\\text{ mol}$$
> > * 2. **Calculate excess moles of H⁺:**
> >      $$\\\\text{Excess Moles of H}^+ = 0.0200\\\\text{ mol} - 0.0050\\\\text{ mol} = 0.0150\\\\text{ mol}$$
> > * 3. **Calculate total volume of mixture:**
> >      $$\\\\text{Total Volume} = 20.0\\\\text{ cm}^3 + 5.0\\\\text{ cm}^3 = 25.0\\\\text{ cm}^3 = 0.0250\\\\text{ dm}^3$$
> > * 4. **Calculate [H⁺] and pH:**
> >      $$[\\\\text{H}^+] = \\\\frac{0.0150\\\\text{ mol}}{0.0250\\\\text{ dm}^3} = 0.600\\\\text{ mol dm}^{-3}$$
> >      $$\\\\text{pH} = -\\\\log_{10}(0.600) = \\\\mathbf{0.22}$$
> > 
> > **(b) Base in Excess Solution:**
> > * 1. **Calculate moles of each reactant:**
> >      $$\\\\text{Moles of H}^+ = 0.0100\\\\text{ dm}^3 \\\\times 0.100\\\\text{ mol dm}^{-3} = 1.00 \\\\times 10^{-3}\\\\text{ mol}$$
> >      $$\\\\text{Moles of OH}^- = 0.0400\\\\text{ dm}^3 \\\\times 0.200\\\\text{ mol dm}^{-3} = 8.00 \\\\times 10^{-3}\\\\text{ mol}$$
> > * 2. **Calculate excess moles of OH⁻:**
> >      $$\\\\text{Excess Moles of OH}^- = 8.00 \\\\times 10^{-3}\\\\text{ mol} - 1.00 \\\\times 10^{-3}\\\\text{ mol} = 7.00 \\\\times 10^{-3}\\\\text{ mol}$$
> > * 3. **Calculate total volume of mixture:**
> >      $$\\\\text{Total Volume} = 10.0\\\\text{ cm}^3 + 40.0\\\\text{ cm}^3 = 50.0\\\\text{ cm}^3 = 0.0500\\\\text{ dm}^3$$
> > * 4. **Calculate [OH⁻] and pOH:**
> >      $$[\\\\text{OH}^-] = \\\\frac{7.00 \\\\times 10^{-3}\\\\text{ mol}}{0.0500\\\\text{ dm}^3} = 0.140\\\\text{ mol dm}^{-3}$$
> >      $$\\\\text{pOH} = -\\\\log_{10}(0.140) = 0.85$$
> > * 5. **Calculate pH at 298 K:**
> >      $$\text{pH} = 14.00 - \text{pOH} = 14.00 - 0.85 = \mathbf{13.15}$$

> [!IMPORTANT]
> ### 🧮 Calculating the pH of a Dibasic Acid
> Sulfuric acid ($\\\\text{H}_2\\\\text{SO}_4$) dissociates:
> * $\\\\text{Stage 1: H}_2\\\\text{SO}_4\\\\text{(aq)} \\\\rightarrow \\\\text{H}^+\\\\text{(aq)} + \\\\text{HSO}_4^-\\\\text{(aq)}$ (100% dissociated)
> * $\\\\text{Stage 2: HSO}_4^-\\\\text{(aq)} \\\\rightleftharpoons \\\\text{H}^+\\\\text{(aq)} + \\\\text{SO}_4^{2-}\\\\text{(aq)}$ ($K_a = 0.0100\\\\text{ mol dm}^{-3}$)
> 
> For a $0.500\\\\text{ mol dm}^{-3}$ solution of $\\\\text{H}_2\\\\text{SO}_4$:
> 1. Stage 1 yields $[\\\\text{H}^+] = 0.500\\\\text{ mol dm}^{-3}$ and $[\\\\text{HSO}_4^-] = 0.500\\\\text{ mol dm}^{-3}$
> 2. Let $x$ be the Stage 2 $\\\\text{H}^+$ concentration:
>    $$K_a = \\\\frac{(0.500 + x)x}{0.500 - x} = 0.0100$$
> 3. Solving the quadratic gives $x = 0.0098\\\\text{ mol dm}^{-3}$
> 4. Total $[\\\\text{H}^+] = 0.5098\\\\text{ mol dm}^{-3} \\\\implies \\\\text{pH} = -\\\\log_{10}(0.5098) = 0.293$
 
> [!EXAMPLE]
> #### 📝 Worked Example 11: pH of Diluted Acids & Bases
> **Question:** Calculate the pH at $298\\\\text{ K}$ of the following diluted solutions:
> * **(a) Acid Dilution:** A $10.0\\\\text{ cm}^3$ sample of $0.100\\\\text{ mol dm}^{-3}\\\\text{ HCl(aq)}$ is diluted with distilled water to make a total volume of $1.00\\\\text{ dm}^3$.
> * **(b) Base Dilution:** A $25.0\\\\text{ cm}^3$ sample of $0.0500\\\\text{ mol dm}^{-3}\\\\text{ NaOH(aq)}$ is diluted with distilled water to make a total volume of $500\\\\text{ cm}^3$.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > **(a) Acid Dilution Solution:**
> > * 1. **Calculate the moles of H⁺ in the original sample:**
> >      $$\\\\text{Moles of H}^+ = C_1 \\\\times V_1 = 0.100\\\\text{ mol dm}^{-3} \\\\times 0.0100\\\\text{ dm}^3 = 1.00 \\\\times 10^{-3}\\\\text{ mol}$$
> > * 2. **Calculate the new concentration (C₂) in the diluted volume (V₂ = 1.00 dm³):**
> >      $$C_2 = \\\\frac{\\\\text{Moles}}{V_2} = \\\\frac{1.00 \\\\times 10^{-3}\\\\text{ mol}}{1.00\\\\text{ dm}^3} = 1.00 \\\\times 10^{-3}\\\\text{ mol dm}^{-3}$$
> > * 3. **Calculate the new pH:**
> >      $$\\\\text{pH} = -\\\\log_{10}(1.00 \\\\times 10^{-3}) = \\\\mathbf{3.00}$$
> > 
> > **(b) Base Dilution Solution:**
> > * 1. **Calculate the moles of OH⁻ in the original sample:**
> >      $$\\\\text{Moles of OH}^- = C_1 \\\\times V_1 = 0.0500\\\\text{ mol dm}^{-3} \\\\times 0.0250\\\\text{ dm}^3 = 1.25 \\\\times 10^{-3}\\\\text{ mol}$$
> > * 2. **Calculate the new concentration (C₂) in the diluted volume (V₂ = 0.500 dm³):**
> >      $$C_2 = \\\\frac{\\\\text{Moles}}{V_2} = \\\\frac{1.25 \\\\times 10^{-3}\\\\text{ mol}}{0.500\\\\text{ dm}^3} = 2.50 \\\\times 10^{-3}\\\\text{ mol dm}^{-3}$$
> > * 3. **Calculate pOH of the diluted solution:**
> >      $$\\\\text{pOH} = -\\\\log_{10}(2.50 \\\\times 10^{-3}) = 2.60$$
> > * 4. **Calculate pH at 298 K:**
> >      $$\\\\text{pH} = 14.00 - \\\\text{pOH} = 14.00 - 2.60 = \\\\mathbf{11.40}$$
 
> [!EXAMPLE]
> #### 📝 Worked Example 12: pH of Water at Different Temperatures
> **Question:** Calculate water pH at (i) $298\\\\text{ K}$ and (ii) $293\\\\text{ K}$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > * **(i) At $298\\\\text{ K}$:** $[\\\\text{H}^+] = 1.00 \\\\times 10^{-7}\\\\text{ mol dm}^{-3} \\\\implies \\\\text{pH} = 7.00$
> > * **(ii) At $293\\\\text{ K}$:** $[\\\\text{H}^+] = \\\\sqrt{6.81 \\\\times 10^{-15}} = 8.252 \\\\times 10^{-8}\\\\text{ mol dm}^{-3} \\\\implies \\\\text{pH} = 7.08$
> > * **Neutrality:** Since $[\\\\text{H}^+] = [\\\\text{OH}^-]$ holds true at all temperatures in pure water, it remains neutral.
> > * **Endothermic nature:** Heating water from $293\\\\text{ K}$ to $298\\\\text{ K}$ increases $K_w$. According to Le Chatelier's Principle, this shifts the equilibrium to the endothermic direction. Hence, self-ionisation is endothermic.
 
> [!EXAMPLE]
> #### 📝 Worked Example 13: pH of Strong Bases
> **Question:** Calculate the pH at $298\\\\text{ K}$ of: (a) $0.0100\\\\text{ mol dm}^{-3}\\\\text{ NaOH}$, (b) $0.0500\\\\text{ mol dm}^{-3}\\\\text{ Ca(OH)}_2$, (c) $0.0315\\\\text{ mol dm}^{-3}\\\\text{ KOH}$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > * **(a) NaOH:** $[\\\\text{OH}^-] = 0.0100\\\\text{ mol dm}^{-3} \\\\implies \\\\text{pOH} = 2.00 \\\\implies \\\\text{pH} = 12.00$
> > * **(b) $\\\\text{Ca(OH)}_2$:** Releases 2 moles of hydroxide: $[\\\\text{OH}^-] = 0.100\\\\text{ mol dm}^{-3} \\\\implies \\\\text{pOH} = 1.00 \\\\implies \\\\text{pH} = 13.00$
> > * **(c) KOH:** $[\\\\text{OH}^-] = 0.0315\\\\text{ mol dm}^{-3} \\\\implies \\\\text{pOH} = 1.50 \\\\implies \\\\text{pH} = 12.50$
 
`,
    keyPoints: [
      'A Brønsted-Lowry acid is a proton donor; a base is a proton acceptor.',
      'Conjugate acid-base pairs differ by exactly one H⁺ ion.',
      'Amphiprotic substances can both donate and accept protons.',
      'Strong acids and bases dissociate fully, whereas weak ones dissociate partially.',
      'For mixtures of strong acids and bases, the pH is determined by the concentration of the excess reactant.',
      'Dilution of a strong acid or base changes the pH according to the new total volume of the solution.'
    ],
    equationVisualizer: {
      reactants: [['HCl', '#3b82f6'], ['H₂O', '#10b981']],
      products: [['H₃O⁺', '#ef4444'], ['Cl⁻', '#f59e0b']],
      description: "Proton transfer from hydrochloric acid to water to form hydronium and chloride ions."
    }
  },
  {
    id: 'weak-acids-ka-pka-u4-l4',
    title: 'Weak Acids, Ka & pKa',
    type: 'text',
    content: `
> [!NOTE]
> ### 🧪 Strong vs. Weak Electrolytes
> * **Strong Electrolytes:** Dissociate fully in aqueous solution.
>   * *Examples:* Fully dissociated ions from strong acids/bases, such as the hydroxide ion ($\\\\text{OH}^-$), chloride ion ($\\\\text{Cl}^-$), and nitrate ion ($\\\\text{NO}_3^-$)
> * **Weak Electrolytes:** Dissociate only partially in aqueous solution, establishing an equilibrium.
>   * *Example:* Ethanoic acid ($\\\\text{CH}_3\\\\text{COOH}$). In a $0.1\\\\text{ mol dm}^{-3}$ solution, only approximately 1% of the molecules are present as ions.
 
> [!IMPORTANT]
> ### 🧮 Derivation of the Acid Dissociation Constant ($K_a$)
> For a weak acid dissociation in water:
> $$\\\\text{HA(aq)} + \\\\text{H}_2\\\\text{O(l)} \\\\rightleftharpoons \\\\text{A}^-\\\\text{(aq)} + \\\\text{H}_3\\\\text{O}^+\\\\text{(aq)}$$
> 
> The initial equilibrium expression ($K_c$) is:
> $$K_c = \\\\frac{[\\\\text{H}_3\\\\text{O}^+][\\\\text{A}^-]}{[\\\\text{HA}][\\\\text{H}_2\\\\text{O}]}$$
> 
> Since the concentration of water is vast ($\\\\approx 55.6\\\\text{ mol dm}^{-3}$) and remains effectively constant, it is incorporated into the equilibrium constant ($K_a = K_c \\\\times [\\\\text{H}_2\\\\text{O}]$):
> $$K_a = \\\\frac{[\\\\text{H}_3\\\\text{O}^+][\\\\text{A}^-]}{[\\\\text{HA}]}$$
> 
> * **pKa and Acid Strength:**
>   $$\\\\text{p}K_a = -\\\\log_{10}K_a \\\\quad \\\\Leftrightarrow \\\\quad K_a = 10^{-\\\\text{p}K_a}$$
>   * A larger $K_a$ value indicates a stronger acid (greater dissociation).
>   * Conversely, a smaller $\\\\text{p}K_a$ value indicates a stronger acid.
 
> [!IMPORTANT]
> ### 🧮 Weak Acid Calculation Assumptions
> To calculate the pH of a weak acid HA of initial concentration $c$, we make two key simplifying assumptions:
> 
> 1. **Negligible water contribution:** We assume all H⁺ ions come solely from HA (the auto-ionisation of water is negligible), so:
>    $$[\\\\text{H}^+] \\\\approx [\\\\text{A}^-]$$ (at equilibrium)
> 2. **Negligible dissociation:** We assume the amount of HA that dissociates is extremely small compared to the initial concentration (undissociated HA is effectively unchanged), so:
>    $$[\\\\text{HA}] \\\\approx c$$ (at equilibrium)
> 
> Combining these into the $K_a$ expression gives:
> $$K_a = \\\\frac{[\\\\text{H}^+]^2}{c} \\\\implies [\\\\text{H}^+] = \\\\sqrt{K_a \\\\times c}$$

> [!BOX]
> ### 📊 Table A: Weak Monobasic Organic Acids (at 298 K)
> | Name of Acid | Formula of Acid | Ka / mol dm⁻³ | pKa |
> | :--- | :--- | :--- | :--- |
> | propanoic acid | CH₃CH₂COOH | 1.35 × 10⁻⁵ | 4.87 |
> | ethanoic acid | CH₃COOH | 1.74 × 10⁻⁵ | 4.76 |
> | benzoic acid | C₆H₅COOH | 6.31 × 10⁻⁵ | 4.20 |
> | methanoic acid | HCOOH | 1.60 × 10⁻⁴ | 3.80 |
> | chloroethanoic acid | CH₂ClCOOH | 1.38 × 10⁻³ | 2.86 |
> | dichloroethanoic acid | CHCl₂COOH | 5.13 × 10⁻² | 1.29 |
> | trichloroethanoic acid | CCl₃COOH | 2.24 × 10⁻¹ | 0.65 |

> [!BOX]
> ### 📊 Comparing Solutions via pH
> Measuring pH of equimolar ($0.100\\\\text{ mol dm}^{-3}$) solutions at $298\\\\text{ K}$ demonstrates relative strengths of acids, bases, and salts:
> 
> **Acid Strengths:**
> * $\\\\text{HCl}$ (strong, pH = 1.00) $\\\\rightarrow$ $\\\\text{CHCl₂COOH}$ (pH = 1.14) $\\\\rightarrow$ $\\\\text{CH₂ClCOOH}$ (pH = 1.93) $\\\\rightarrow$ $\\\\text{HCOOH}$ (pH = 2.38) $\\\\rightarrow$ $\\\\text{CH₃COOH}$ (pH = 2.87) $\\\\rightarrow$ $\\\\text{CH₃CH₂COOH}$ (pH = 2.93)
> * **Rule:** The higher the pH, the weaker the acid.
> 
> **Base Strengths:**
> * $\\\\text{NH₃}$ (weak base, pH = 11.13) $\\\\rightarrow$ $\\\\text{CH₃NH₂}$ (pH = 11.82) $\\\\rightarrow$ $\\\\text{NaOH}$ (strong base, pH = 13.00)
> * **Rule:** The higher the pH, the stronger the base.

> [!IMPORTANT]
> ### 📋 Salt Hydrolysis
> Salts formed from weak acids or weak bases are not neutral because their ions react with water. The pH of an aqueous salt solution ($0.100\\\\text{ mol dm}^{-3}$) at $298\\\\text{ K}$ depends on the acid-base nature of its parent species:
> 
> * **Strong Acid + Strong Base (Neutral, pH = 7.00):** E.g., \\\\text{NaCl}, \\\\text{KNO₃}. Neither ion hydrolyses water.
> * **Weak Acid + Strong Base (Alkaline, pH > 7):** Conjugate base hydrolyses water.
>   * *Acetate Hydrolysis:* The acetate ion reacts with water to produce hydroxide ($\\\\text{OH}^-$) ions:
>     $$\\\\text{CH}_3\\\\text{COO}^-\\\\text{(aq)} + \\\\text{H}_2\\\\text{O(l)} \\\\rightleftharpoons \\\\text{CH}_3\\\\text{COOH(aq)} + \\\\text{OH}^-\\\\text{(aq)}$$
> * **Strong Acid + Weak Base (Acidic, pH < 7):** Conjugate acid hydrolyses water.
>   * *Ammonium Hydrolysis:* The ammonium ion reacts with water to produce hydronium ($\\\\text{H}_3\\\\text{O}^+$) ions:
>     $$\\\\text{NH}_4^+\\\\text{(aq)} + \\\\text{H}_2\\\\text{O(l)} \\\\rightleftharpoons \\\\text{NH}_3\\\\text{(aq)} + \\\\text{H}_3\\\\text{O}^+\\\\text{(aq)}$$
> * **Strong Acids:** pH increases by exactly **1.0 unit** for each 10-fold dilution (e.g. $0.100\\\\text{ mol dm}^{-3}$ HCl pH = 1.00; diluted to $0.0100$ pH = 2.00)
>   * *Dilution Limit:* A $1.00 \\\\times 10^{-8}\\\\text{ mol dm}^{-3}$ solution of HCl is not pH 8.00. Water self-ionisation contributes $1.00 \\\\times 10^{-7}\\\\text{ mol dm}^{-3}$ $\\\\text{H}^+$, keeping pH close to 7.00 ($\\\\approx 6.98$)
> * **Weak Acids:** pH increases by approximately **0.5 units** for each 10-fold dilution (e.g. $0.100\\\\text{ mol dm}^{-3}$ ethanoic acid pH = 2.88; diluted to $0.0100$ pH = 3.38)
>   * *Proof:* Since $[\\\\text{H}^+] = \\\\sqrt{K_a \\\\times c}$, dividing $c$ by 10 divides $[\\\\text{H}^+]$ by $\\\\sqrt{10}$. Taking negative logarithms: $\\\\log_{10}(\\\\sqrt{10}) = 0.5$ units.
 
> [!BOX]
> ### 🧪 Core Practical 11 (CP11): Finding Experimental Ka
> We can determine $K_a$ by dissolving benzoic acid in water, diluting to $250\\\\text{ cm}^3$, and measuring pH:
> 
> * **Sample Results:**
>   * Mass of benzoic acid = $0.49\\\\text{ g}$
>   * pH of $250\\\\text{ cm}^3$ solution = $3.00$
> * **Analysis of Results:**
>   1. Molar mass of benzoic acid = $122\\\\text{ g mol}^{-1}$
>   2. Moles of acid = $\\\\frac{0.49}{122} = 4.016 \\\\times 10^{-3}\\\\text{ mol}$
>   3. Concentration $c = \\\\frac{4.016 \\\\times 10^{-3}}{0.250} = 1.607 \\\\times 10^{-2}\\\\text{ mol dm}^{-3}$
>   4. $[\\\\text{H}^+] = 10^{-3.00} = 1.00 \\\\times 10^{-3}\\\\text{ mol dm}^{-3}$
>   5. $K_a = \\\\frac{[\\\\text{H}^+]^2}{c} = 6.22 \\\\times 10^{-5}\\\\text{ mol dm}^{-3}$
 
> [!EXAMPLE]
> #### 📝 Worked Example 1: Calculating Ka of a Weak Acid from pH
> **Question:** The pH of an aqueous solution of a weak acid, $\\\\text{HA}$, of concentration $0.0305\\\\text{ mol dm}^{-3}$ is $4.97$. Calculate the dissociation constant, $K_a$, for this weak acid
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Find $[\\\\text{H}^+]$ from pH:**
> >    $$[\\\\text{H}^+] = 10^{-\\\\text{pH}} = 10^{-4.97} = 1.0715 \\\\times 10^{-5}\\\\text{ mol dm}^{-3}$$
> > 2. **Use the weak acid expression:**
> >    $$K_a = \\\\frac{[\\\\text{H}^+]^2}{[\\\\text{HA}]} = \\\\frac{(1.0715 \\\\times 10^{-5})^2}{0.0305} = 3.76 \\\\times 10^{-9}\\\\text{ mol dm}^{-3}$$
 
> [!EXAMPLE]
> #### 📝 Worked Example 2: pH of Weak Monobasic Acids
> **Question:** Calculate the pH of each of the following aqueous solutions of weak monobasic acids. Give your answers to two decimal places:
> (a) $0.100\\\\text{ mol dm}^{-3}$ $\\\\text{HCOOH}$ [$K_a(\\\\text{HCOOH}) = 1.60 \\\\times 10^{-4}\\\\text{ mol dm}^{-3}$]
> (b) $1.00\\\\text{ mol dm}^{-3}$ $\\\\text{HF}$ [$K_a(\\\\text{HF}) = 5.62 \\\\times 10^{-4}\\\\text{ mol dm}^{-3}$]
> (c) $0.505\\\\text{ mol dm}^{-3}$ $\\\\text{NH}_4\\\\text{Cl}$ [$K_a(\\\\text{NH}_4^+) = 5.62 \\\\times 10^{-10}\\\\text{ mol dm}^{-3}$]
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > * **(a) HCOOH:**
> >   1. $[\\\\text{H}^+] = \\\\sqrt{K_a \\\\times [\\\\text{HA}]} = \\\\sqrt{(1.60 \\\\times 10^{-4}) \\\\times 0.100} = 4.00 \\\\times 10^{-3}\\\\text{ mol dm}^{-3}$
> >   2. $\\\\text{pH} = -\\\\log_{10}(4.00 \\\\times 10^{-3}) = 2.40$
> > * **(b) HF:**
> >   1. $[\\\\text{H}^+] = \\\\sqrt{(5.62 \\\\times 10^{-4}) \\\\times 1.00} = 2.37 \\\\times 10^{-2}\\\\text{ mol dm}^{-3}$
> >   2. $\\\\text{pH} = -\\\\log_{10}(2.37 \\\\times 10^{-2}) = 1.63$
> > * **(c) $\\\\text{NH}_4\\\\text{Cl}$:**
> >   1. $[\\\\text{H}^+] = \\\\sqrt{(5.62 \\\\times 10^{-10}) \\\\times 0.505} = 1.685 \\\\times 10^{-5}\\\\text{ mol dm}^{-3}$
> >   2. $\\\\text{pH} = -\\\\log_{10}(1.685 \\\\times 10^{-5}) = 4.77$
 
> [!EXAMPLE]
> #### 📝 Worked Example 3: Salt Hydrolysis Prediction
> **Question:** Predict whether aqueous solutions of the following salts will be neutral, acidic, or alkaline. Justify your answers:
> (a) Ammonium nitrate, $\\\\text{NH}_4\\\\text{NO}_3$
> (b) Potassium propanoate, $\\\\text{CH}_3\\\\text{CH}_2\\\\text{COOK}$
> (c) Sodium nitrate, $\\\\text{NaNO}_3$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > * **(a) Ammonium nitrate ($\\\\text{NH}_4\\\\text{NO}_3$): Acidic**
> >   * Justification: It is formed from a weak base ($\\\\text{NH}_3$) and a strong acid ($\\\\text{HNO}_3$). The cation $\\\\text{NH}_4^+$ undergoes hydrolysis to produce hydrogen ions ($\\\\text{NH}_4^+ \\\\rightleftharpoons \\\\text{NH}_3 + \\\\text{H}^+$), while $\\\\text{NO}_3^-$ is a spectator ion.
> > * **(b) Potassium propanoate ($\\\\text{CH}_3\\\\text{CH}_2\\\\text{COOK}$): Alkaline**
> >   * Justification: It is formed from a strong base ($\\\\text{KOH}$) and a weak acid ($\\\\text{CH}_3\\\\text{CH}_2\\\\text{COOH}$). The anion $\\\\text{CH}_3\\\\text{CH}_2\\\\text{COO}^-$ hydrolyses to produce hydroxide ions ($\\\\text{CH}_3\\\\text{CH}_2\\\\text{COO}^- + \\\\text{H}_2\\\\text{O} \\\\rightleftharpoons \\\\text{CH}_3\\\\text{CH}_2\\\\text{COOH} + \\\\text{OH}^-$), while $\\\\text{K}^+$ is a spectator ion.
> > * **(c) Sodium nitrate ($\\\\text{NaNO}_3$): Neutral**
> >   * Justification: It is formed from a strong base ($\\\\text{NaOH}$) and a strong acid ($\\\\text{HNO}_3$). Neither ion ($\\\\text{Na}^+$ or $\\\\text{NO}_3^-$) undergoes hydrolysis.
 
> [!EXAMPLE]
> #### 📝 Worked Example 4: Experimental Ka of Chloroethanoic Acid
> **Question:** Calculate $K_a$ for chloroethanoic acid from the following data. $1.89\\\\text{ g}$ of chloroethanoic acid was dissolved in $50\\\\text{ cm}^3$ of water and the solution was diluted to $250\\\\text{ cm}^3$ in a volumetric flask. The pH of this solution was $1.99$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate molar mass of chloroethanoic acid ($\\\\text{CH}_2\\\\text{ClCOOH}$):**
> >    $$M_r = 12.01 \\\\times 2 + 1.01 \\\\times 3 + 35.45 + 16.00 \\\\times 2 = 94.48\\\\text{ g mol}^{-1}$$
> > 2. **Calculate initial concentration of the acid ($[\\\\text{HA}]$):**
> >    $$\\\\text{Moles} = \\\\frac{1.89\\\\text{ g}}{94.48\\\\text{ g mol}^{-1}} = 0.0200\\\\text{ mol}$$
> >    $$[\\\\text{HA}] = \\\\frac{0.0200\\\\text{ mol}}{0.250\\\\text{ dm}^3} = 0.0800\\\\text{ mol dm}^{-3}$$
> > 3. **Calculate $[\\\\text{H}^+]$ from pH:**
> >    $$[\\\\text{H}^+] = 10^{-\\\\text{pH}} = 10^{-1.99} = 0.01023\\\\text{ mol dm}^{-3}$$
> > 4. **Calculate $K_a$:**
> >    * *Method A (using simplified denominator $[\\\\text{HA}]$):*
> >      $$K_a = \\\\frac{[\\\\text{H}^+]^2}{[\\\\text{HA}]} = \\\\frac{(0.01023)^2}{0.0800} = 1.31 \\\\times 10^{-3}\\\\text{ mol dm}^{-3}$$
> >    * *Method B (using precise denominator $[\\\\text{HA}] - [\\\\text{H}^+]$):*
> >      $$K_a = \\\\frac{(0.01023)^2}{0.0800 - 0.01023} = 1.50 \\\\times 10^{-3}\\\\text{ mol dm}^{-3}$$
 
> [!EXAMPLE]
> #### 📝 Worked Example 5: Predicting pH of Ammonium Methanoate
> **Question:** What information is required in order to make a prediction about the pH of an aqueous solution of ammonium methanoate, $\\\\text{HCOONH}_4$?
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Required Values:** You need the acid dissociation constant of methanoic acid ($K_a$ of $\\\\text{HCOOH}$) and the base dissociation constant of ammonia ($K_b$ of $\\\\text{NH}_3$), or the $K_a$ of the ammonium ion ($\\\\text{NH}_4^+$).
> > 2. **Comparison Logic:** Comparing $K_a(\\\\text{HCOOH})$ and $K_a(\\\\text{NH}_4^+)$ determines the pH outcome:
> >    * If $K_a(\\\\text{HCOOH}) > K_a(\\\\text{NH}_4^+)$, the solution is slightly acidic.
> >    * If $K_a(\\\\text{HCOOH}) < K_a(\\\\text{NH}_4^+)$, the solution is alkaline.

> [!EXAMPLE]
> #### 📝 Worked Example 6: Percentage Dissociation and Dilution
> **Question:** Ethanoic acid ($\\\\text{CH}_3\\\\text{COOH}$) has $K_a = 1.74 \\\\times 10^{-5}\\\\text{ mol dm}^{-3}$ at $298\\\\text{ K}$.
> 1. Calculate the pH and the percentage dissociation of ethanoic acid in a $0.100\\\\text{ mol dm}^{-3}$ solution.
> 2. Calculate the pH and the percentage dissociation of ethanoic acid in a diluted $0.00100\\\\text{ mol dm}^{-3}$ solution.
> 3. Compare these values and explain the effect of dilution on percentage dissociation using Le Chatelier's principle.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > **(a) Calculation for $0.100\\\\text{ mol dm}^{-3}$ solution:**
> > * 1. **Calculate [H⁺]:**
> >      $$[\\\\text{H}^+] = \\\\sqrt{K_a \\\\times c} = \\\\sqrt{1.74 \\\\times 10^{-5} \\\\times 0.100} = 1.319 \\\\times 10^{-3}\\\\text{ mol dm}^{-3}$$
> > * 2. **Calculate pH:**
> >      $$\\\\text{pH} = -\\\\log_{10}(1.319 \\\\times 10^{-3}) = \\\\mathbf{2.88}$$
> > * 3. **Calculate percentage dissociation:**
> >      $$\\\\text{Percentage dissociation} = \\\\frac{[\\\\text{H}^+]}{c} \\\\times 100\\\\% = \\\\frac{1.319 \\\\times 10^{-3}}{0.100} \\\\times 100\\\\% = \\\\mathbf{1.32\\\\%}$$
> > 
> > **(b) Calculation for diluted $0.00100\\\\text{ mol dm}^{-3}$ solution:**
> > * 1. **Calculate [H⁺]:**
> >      $$[\\\\text{H}^+] = \\\\sqrt{K_a \\\\times c} = \\\\sqrt{1.74 \\\\times 10^{-5} \\\\times 0.00100} = 1.319 \\\\times 10^{-4}\\\\text{ mol dm}^{-3}$$
> > * 2. **Calculate pH:**
> >      $$\\\\text{pH} = -\\\\log_{10}(1.319 \\\\times 10^{-4}) = \\\\mathbf{3.88}$$
> > * 3. **Calculate percentage dissociation:**
> >      $$\\\\text{Percentage dissociation} = \\\\frac{[\\\\text{H}^+]}{c} \\\\times 100\\\\% = \\\\frac{1.319 \\\\times 10^{-4}}{0.00100} \\\\times 100\\\\% = \\\\mathbf{13.2\\\\%}$$
> > 
> > **(c) Effect of Dilution & Le Chatelier's Principle:**
> > * 1. **Comparison:** Dilution of the acid by a factor of 100 (from $0.100$ to $0.00100\\\\text{ mol dm}^{-3}$) increases the percentage dissociation from $1.32\\\\%$ to $13.2\\\\%$ (a 10-fold increase).
> > * 2. **Equilibrium explanation:** The dissociation equation is:
> >      $$\\\\text{CH}_3\\\\text{COOH(aq)} + \\\\text{H}_2\\\\text{O(l)} \\\\rightleftharpoons \\\\text{CH}_3\\\\text{COO}^-\\\\text{(aq)} + \\\\text{H}_3\\\\text{O}^+\\\\text{(aq)}$$
> > * 3. Diluting the solution decreases the concentration of all aqueous particles. According to Le Chatelier's principle, the system shifts to the right (the side with more aqueous species, $2$ ions vs $1$ molecule) to oppose the decrease in concentration, leading to a higher fraction of dissociated acid.

> [!EXAMPLE]
> #### 📝 Worked Example 7: Comparing Acid Strength (Inductive Effect)
> **Question:** Explain why chloroethanoic acid ($\\\\text{CH}_2\\\\text{ClCOOH}$, $\\\\text{p}K_a = 2.86$) is a significantly stronger acid than ethanoic acid ($\\\\text{CH}_3\\\\text{COOH}$, $\\\\text{p}K_a = 4.76$) at $298\\\\text{ K}$.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > * 1. **Identify the structural difference:**
> >      Chloroethanoic acid contains a highly electronegative chlorine atom in place of one hydrogen atom in the methyl group of ethanoic acid.
> > * 2. **Explain the electron-withdrawing inductive effect:**
> >      * The chlorine atom is highly electronegative and pulls electron density towards itself through the $\\\\sigma$-bonds.
> >      * This is known as the **electron-withdrawing inductive effect**.
> > * 3. **Explain conjugate base stability:**
> >      * When the acid dissociates, it forms a conjugate base: the chloroethanoate anion ($\\\\text{CH}_2\\\\text{ClCOO}^-$).
> >      * The electron-withdrawing chlorine atom disperses (spreads out) the negative charge of the carboxylate group ($\\\\text{-COO}^-$).
> >      * Dispersing the negative charge stabilizes the conjugate base anion.
> > * 4. **Compare with the ethanoate anion:**
> >      * In the ethanoate anion ($\\\\text{CH}_3\\\\text{COO}^-$), the methyl group ($\\\\text{-CH}_3$) has an electron-donating inductive effect, which concentrates the negative charge on the carboxylate group, making it less stable and more reactive.
> > * 5. **Relate stability to acid strength:**
> >      * Because the chloroethanoate conjugate base is more stable, the dissociation equilibrium lies further to the right:
> >        $$\\\\text{CH}_2\\\\text{ClCOOH(aq)} + \\\\text{H}_2\\\\text{O(l)} \\\\rightleftharpoons \\\\text{CH}_2\\\\text{ClCOO}^-\\\\text{(aq)} + \\\\text{H}_3\\\\text{O}^+\\\\text{(aq)}$$
> >      * Therefore, chloroethanoic acid dissociates to a greater extent, yielding a higher $K_a$ (and a lower $\\\\text{p}K_a = 2.86$ compared to $4.76$).
`,
    keyPoints: [
      'Ka is the acid dissociation constant and is temperature-dependent.',
      'pKa is a logarithmic index of Ka, where lower pKa indicates a stronger acid.',
      'The simplified formula [H⁺] = √(Ka × c) assumes negligible dissociation of HA.',
      'Diluting a weak acid increases its percentage dissociation as the equilibrium shifts to oppose the concentration drop.',
      'Carboxylic acid strength is increased by electron-withdrawing substituents (like chlorine) which stabilize the conjugate base anion.'
    ]
  },
  {
    id: 'titrations-indicators-u4-l4',
    title: 'Titrations & Indicators',
    type: 'text',
    content: `
${svgToken(titrationCurvesDashboardSvg)}

> [!NOTE]
> ### 📊 Acid-Base Titrations & Equivalence Point
> * **Equivalence Point:**
>   1. The point during a titration (strong base with strong or weak acid/base) where the quantity of added titrant is chemically equivalent to the quantity of the substance being titrated.
>   2. In an acid-base titration, it occurs when the moles of H⁺ ions exactly equal the moles of OH⁻ ions ($n_{\text{acid}} = n_{\text{base}}$), resulting in a complete neutralization of the solution.
> * **End Point:** The point in a titration where the indicator undergoes a complete colour change.
> * **Neutralisation vs Equivalence:** The equivalence point is **only pH 7.00** for strong acid-strong base titrations. For weak-strong combinations, the pH at equivalence is determined by salt hydrolysis and is either above or below 7.00.


> [!IMPORTANT]
> ### 📈 The Four pH Titration Curves & Profiles
> pH curves plot the pH of the solution against the volume of acid/base added from the burette:
> 
> 1. **Strong Acid / Strong Base:**
>    * Large vertical section spanning **pH 3–11**
>    * Equivalence point at **pH 7.00**
> 2. **Strong Acid / Weak Base:**
>    * Vertical section in the acidic region (**pH 3–7**)
>    * Equivalence point **< pH 7.00**
> 3. **Weak Acid / Strong Base:**
>    * Vertical section in the basic region (**pH 7–11**)
>    * Equivalence point **> pH 7.00**
> 4. **Weak Acid / Weak Base:**
>    * **No vertical section exists.** This makes it impossible to select a suitable indicator as there is no rapid pH change at the equivalence point.
 
> [!BOX]
> ### 🧪 Indicator Theory
> An indicator is a weak acid ($\\\\text{HIn}$) that has a different colour from its conjugate base ($\\\\text{In}^-$):
> $$\\\\text{HIn(aq)} \\\\rightleftharpoons \\\\text{H}^+\\\\text{(aq)} + \\\\text{In}^-\\\\text{(aq)}$$
> 
> * **End Point:** At the end point of the titration, the indicator is halfway through its colour change, meaning $[\\\\text{HIn}] = [\\\\text{In}^-]$.
> * Therefore, $[\\\\text{H}^+] = K_{\\\\text{In}}$, and the **pH at colour change is equal to $\\\\text{p}K_{\\\\text{In}}$**.
> * **Colour Range:** Colour change occurs over a pH range of approximately $\\\\text{pH} = \\\\text{p}K_{\\\\text{In}} \\\\pm 1.0$
> 
> #### Table C: Common Acid-Base Indicators
> | Indicator | pKIn | pH Range | Acid Colour (HIn) | Base Colour (In⁻) |
> | :--- | :--- | :--- | :--- | :--- |
> | Methyl orange | $3.70$ | $3.10-4.40$ | red | yellow |
> | Bromophenol blue | $4.00$ | $2.80-4.60$ | yellow | blue |
> | Bromothymol blue | $7.00$ | $6.00-7.60$ | yellow | blue |
> | Phenol red | $7.90$ | $6.80-8.40$ | yellow | red |
> | Phenolphthalein | $9.30$ | $8.20-10.00$ | colourless | red |
> 
> **Choosing an Indicator:**
> * An indicator is suitable only if its entire pH transition range lies within the **steep vertical section** of the pH titration curve.
 
> [!IMPORTANT]
> ### 🧮 Titration Curves with Diprotic Acids
> 
> ${svgToken(diphoticAcidSvg)}
> 
> * **Diprotic Acid:** An acid that produces two $\\\\text{H}^+$ ions per acid molecule. Examples of diprotic acids are sulfuric acid ($\\\\text{H}_2\\\\text{SO}_4$) and carbonic acid ($\\\\text{H}_2\\\\text{CO}_3$).
> * **Dissociation Stages:** Dissociates in water in two stages:
>   $$\\\\text{H}_2\\\\text{X(aq)} \\\\rightleftharpoons \\\\text{H}^+\\\\text{(aq)} + \\\\text{HX}^-\\\\text{(aq)}$$
>   $$\\\\text{HX}^-\\\\text{(aq)} \\\\rightleftharpoons \\\\text{H}^+\\\\text{(aq)} + \\\\text{X}^{2-}\\\\text{(aq)}$$
> * **Two Equivalence Points:** The titration curves of diprotic acids feature two equivalence points.
>   * *From the beginning to the first equivalence point:* $\\\\text{H}_2\\\\text{X} + \\\\text{NaOH} \\\\rightarrow \\\\text{NaHX} + \\\\text{H}_2\\\\text{O}$
>   * *From the first equivalence point to the second equivalence point:* $\\\\text{NaHX} + \\\\text{NaOH} \\\\rightarrow \\\\text{Na}_2\\\\text{X} + 2\\\\text{H}_2\\\\text{O}$
>   * *Overall reaction (from beginning through to the second equivalence point):* $\\\\text{H}_2\\\\text{X} + 2\\\\text{NaOH} \\\\rightarrow \\\\text{Na}_2\\\\text{X} + 2\\\\text{H}_2\\\\text{O}$
>   * *Volume relationship:* The volume of $\\\\text{NaOH}$ added to reach the second equivalence point is exactly **twice** the volume required to reach the first equivalence point.

> [!EXAMPLE]
> #### 📝 Worked Example 1: Hydrochloric Acid & Ammonia Titration
> **Question:** The equation for the reaction between hydrochloric acid and ammonia is:
> $$\\\\text{HCl(aq)} + \\\\text{NH}_3\\\\text{(aq)} \\\\rightarrow \\\\text{NH}_4\\\\text{Cl(aq)}$$
> A $25.0\\\\text{ cm}^3$ sample of $0.0200\\\\text{ mol dm}^{-3}\\\\text{ HCl(aq)}$ was placed in a conical flask. Aqueous ammonia was added gradually from a burette and the pH was measured after each addition, until the pH no longer changed. The pH curve for this titration is shown below.
> 
> ${svgToken(hclAmmoniaTitrationSvg)}
> 
> 1. State how the curve suggests that ammonia is a weak base.
> 2. Use the information given to calculate the concentration of the ammonia solution.
> 3. Explain which of these three indicators is the most suitable for this titration: Methyl Orange (range 3.1-4.4), Methyl Red (range 4.2-6.3), or Phenolphthalein (range 8.2-10.0).
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > **(a) Weak base evidence:**
> > * The final pH levels off around pH 10.5 - 11 (rather than high pH 12 - 14), and the equivalence point lies in the acidic region below pH 7.
> > 
> > **(b) Ammonia concentration calculation:**
> > * 1. **Calculate moles of HCl used:**
> >      $$\\\\text{Moles of HCl} = 0.0250\\\\text{ dm}^3 \\\\times 0.0200\\\\text{ mol dm}^{-3} = 5.00 \\\\times 10^{-4}\\\\text{ mol}$$
> > * 2. **Read equivalence volume of ammonia from the graph:**
> >      $$\\\\text{Volume} = 15.0\\\\text{ cm}^3 = 0.0150\\\\text{ dm}^3$$
> > * 3. **Calculate concentration of ammonia:**
> >      $$[\\\\text{NH}_3] = \\\\frac{5.00 \\\\times 10^{-4}\\\\text{ mol}}{0.0150\\\\text{ dm}^3} = \\\\mathbf{0.0333\\\\text{ mol dm}^{-3}}$$
> > 
> > **(c) Suitable indicator:**
> > * **Methyl red**. Because its pH color change range (4.2 to 6.3) falls completely within the steep vertical section of the titration curve (pH 3.5 to 7.5).

> [!EXAMPLE]
> #### 📝 Worked Example 2: Weak Acid-Strong Base Titration Curve
> **Question:** This question is about an aqueous solution of $0.100\\\\text{ mol dm}^{-3}\\\\text{ CH}_3\\\\text{COOH}$:
> 1. Calculate the pH at $298\\\\text{ K}$ of this solution $[K_a = 1.74 \\\\times 10^{-5}\\\\text{ mol dm}^{-3}\\\\text{ at }298\\\\text{ K}]$.
> 2. Sketch the pH titration curve for the addition of $50.0\\\\text{ cm}^3$ of $0.100\\\\text{ mol dm}^{-3}\\\\text{ NaOH(aq)}$ to $25.0\\\\text{ cm}^3$ of the solution.
> 3. State two differences in the pH curve that would be obtained if the titration were repeated using $25.0\\\\text{ cm}^3$ of $0.0500\\\\text{ mol dm}^{-3}\\\\text{ CH}_3\\\\text{COOH(aq)}$ instead of $25.0\\\\text{ cm}^3$ of $0.100\\\\text{ mol dm}^{-3}\\\\text{ CH}_3\\\\text{COOH(aq)}$.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > **(a) pH calculation:**
> > * $[\\\\text{H}^+] = \\\\sqrt{K_a \\\\times [\\\\text{CH}_3\\\\text{COOH}]} = \\\\sqrt{1.74 \\\\times 10^{-5} \\\\times 0.100} = 1.319 \\\\times 10^{-3}\\\\text{ mol dm}^{-3}$
> > * $\\\\text{pH} = -\\\\log_{10}(1.319 \\\\times 10^{-3}) = \\\\mathbf{2.88}$
> > 
> > **(b) Key Features to Include on Your Sketch:**
> > * **Start Point:** Begins at pH 2.88 (on the y-axis at $0\\\\text{ cm}^3$).
> > * **Buffer Region:** Curves gently upward from $0\\\\text{ cm}^3$ to $25\\\\text{ cm}^3$, passing through $\\\\text{pH} = \\\\text{p}K_a = 4.76$ at $12.5\\\\text{ cm}^3$.
> > * **Equivalence Point:** Vertical region occurs at $25.0\\\\text{ cm}^3$ of NaOH, centered above neutral ($\\\\text{pH} \\\\approx 8.7$).
> > * **Final Plateau:** Curve flattens out around pH 12.5 - 13 as total volume reaches $50.0\\\\text{ cm}^3$.
> > 
> > **(c) Differences with dilute acid ($0.0500\\\\text{ mol dm}^{-3}$):**
> > * 1. The initial pH will be higher (less acidic, starting around pH 3.03).
> > * 2. The volume of NaOH required to reach equivalence will be halved ($12.5\\\\text{ cm}^3$ instead of $25.0\\\\text{ cm}^3$).
 
> [!EXAMPLE]
> #### 📝 Worked Example 3: Ka Determination & Diprotic Stoichiometry
> **Question:** 
> 1. A student titrates $25.0\\\\text{ cm}^3$ of an unknown weak monoprotic acid ($\\\\text{HA}$) with $0.100\\\\text{ mol dm}^{-3}\\\\text{ NaOH(aq)}$. The resulting titration curve is shown below. Use the graph to determine:
>    * The volume of $\\\\text{NaOH}$ required to reach equivalence.
>    * The $\\\\text{p}K_a$ and the acid dissociation constant ($K_a$) of the weak acid.
> 
> ${svgToken(weakAcidKaDeterminationSvg)}
> 
> 2. The student then titrates a separate $25.0\\\\text{ cm}^3$ sample of a diprotic acid ($\\\\text{H}_2\\\\text{Y}$) of concentration $0.0500\\\\text{ mol dm}^{-3}$ with the same $0.100\\\\text{ mol dm}^{-3}\\\\text{ NaOH(aq)}$. Calculate the volume of $\\\\text{NaOH}$ required to reach the second equivalence point.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > **(a) Monoprotic Acid Ka Determination:**
> > * **Equivalence volume:** Read the volume at the center of the steep vertical section of the curve:
> >   $$\\\\text{Volume} = \\\\mathbf{20.0\\\\text{ cm}^3}$$
> > * **pKa & Ka calculation:**
> >   * 1. The half-equivalence point occurs at exactly half the equivalence volume:
> >        $$\\\\text{Half-equivalence volume} = \\\\frac{20.0\\\\text{ cm}^3}{2} = 10.0\\\\text{ cm}^3$$
> >   * 2. At the half-equivalence point, exactly half the acid $\\\\text{HA}$ has been neutralized into its conjugate base $\\\\text{A}^-$, so $[\\\\text{HA}] = [\\\\text{A}^-]$.
> >   * 3. Substituting this into the $K_a$ expression gives $\\\\text{pH} = \\\\text{p}K_a$.
> >   * 4. Read the pH at $10.0\\\\text{ cm}^3$ from the graph:
> >        $$\\\\text{p}K_a = \\\\text{pH} = \\\\mathbf{4.76}$$
> >   * 5. Convert $\\\\text{p}K_a$ to $K_a$:
> >        $$K_a = 10^{-\\\\text{p}K_a} = 10^{-4.76} = \\\\mathbf{1.74 \\\\times 10^{-5}\\\\text{ mol dm}^{-3}}$$
> > 
> > **(b) Diprotic Acid Stoichiometry:**
> > * 1. **Write the overall neutralization equation:**
> >      $$\\\\text{H}_2\\\\text{Y(aq)} + 2\\\\text{NaOH(aq)} \\\\rightarrow \\\\text{Na}_2\\\\text{Y(aq)} + 2\\\\text{H}_2\\\\text{O(l)}$$
> > * 2. **Determine reactant stoichiometry:**
> >      One mole of diprotic acid reacts with two moles of sodium hydroxide:
> >      $$\\\\text{Reacting mole ratio } \\\\text{H}_2\\\\text{Y} : \\\\text{NaOH} = 1 : 2$$
> >      $$\\\\text{Volume} = \\\\frac{\\\\text{Moles}}{\\\\text{Concentration}} = \\\\frac{2.50 \\\\times 10^{-3}\\\\text{ mol}}{0.100\\\\text{ mol dm}^{-3}} = 0.0250\\\\text{ dm}^3 = \\\\mathbf{25.0\\\\text{ cm}^3}$$
`,
    keyPoints: [
      'Equivalence point pH is determined by salt hydrolysis and depends on acid/base strengths.',
      'An indicator is suitable only if its transition range lies within the steep vertical section of the titration curve.',
      'Diprotic acids display two distinct equivalence points on their pH titration curves.',
      'At the half-equivalence point of a weak acid titration, pH = pKa, allowing experimental determination of Ka.',
      'The volume of base required to reach the second equivalence point of a diprotic acid is exactly twice that of the first.'
    ]
  },
  {
    id: 'buffer-solutions-u4-l4',
    title: 'Buffer Solutions',
    type: 'text',
    content: `
> [!NOTE]
> ### 🛡️ What is a Buffer Solution?
> A **buffer solution** is a system that minimizes the change in pH (resists pH change) when small amounts of acid or base are added to it:
> 
> * **Acidic Buffer Solution:** Prepared by mixing a weak acid ($\\\\text{HA}$) with its conjugate base salt ($\\\\text{A}^-$), e.g., ethanoic acid ($\\\\text{CH}_3\\\\text{COOH}$) and sodium ethanoate ($\\\\text{CH}_3\\\\text{COONa}$). It maintains a pH less than 7.00
> * **Basic Buffer Solution:** Prepared by mixing a weak base and its conjugate acid salt, e.g., ammonia ($\\\\text{NH}_3$) and ammonium chloride ($\\\\text{NH}_4\\\\text{Cl}$). It maintains a pH greater than 7.00

> [!IMPORTANT]
> ### ⚙️ How Buffer Action Works (Le Chatelier's Principle)
> **1. Acidic Buffer (e.g., $\\\\text{CH}_3\\\\text{COOH}$ / $\\\\text{CH}_3\\\\text{COO}^-$):**
> * **Reaction equilibria:**
>   * Ethanoic acid dissociation:
>     $$\\\\text{CH}_3\\\\text{COOH(aq)} \\\\rightleftharpoons \\\\text{CH}_3\\\\text{COO}^-\\\\text{(aq)} + \\\\text{H}^+\\\\text{(aq)}$$
>     (Slight dissociation, providing a large reservoir of unreacted $\\\\text{CH}_3\\\\text{COOH}$ molecules)
>   * Sodium ethanoate dissociation:
>     $$\\\\text{CH}_3\\\\text{COONa(aq)} \\\\rightarrow \\\\text{CH}_3\\\\text{COO}^-\\\\text{(aq)} + \\\\text{Na}^+\\\\text{(aq)}$$
>     (Complete dissociation, providing a large reservoir of conjugate base $\\\\text{CH}_3\\\\text{COO}^-$ ions)
> * **When acid ($\\\\text{H}^+$) is added:**
>   * The added protons react with the large reservoir of conjugate base ($\\\\text{CH}_3\\\\text{COO}^-$) to form $\\\\text{CH}_3\\\\text{COOH}$:
>     $$\\\\text{CH}_3\\\\text{COO}^-\\\\text{(aq)} + \\\\text{H}^+\\\\text{(aq)} \\\\rightarrow \\\\text{CH}_3\\\\text{COOH(aq)}$$
>   * The dissociation equilibrium shifts to the left, removing the added $\\\\text{H}^+$ ions.
> * **When base ($\\\\text{OH}^-$) is added:**
>   * The added hydroxide ions react with $\\\\text{H}^+$ to form water:
>     $$\\\\text{H}^+\\\\text{(aq)} + \\\\text{OH}^-\\\\text{(aq)} \\\\rightarrow \\\\text{H}_2\\\\text{O(l)}$$
>   * This removes $\\\\text{H}^+$ from the system, causing the weak acid ($\\\\text{CH}_3\\\\text{COOH}$) to dissociate further.
>   * The equilibrium shifts to the right, restoring the $[\\\\text{H}^+]$:
>     $$\\\\text{CH}_3\\\\text{COOH(aq)} + \\\\text{OH}^-\\\\text{(aq)} \\\\rightarrow \\\\text{CH}_3\\\\text{COO}^-\\\\text{(aq)} + \\\\text{H}_2\\\\text{O(l)}$$
> 
> **2. Basic Buffer (e.g., $\\\\text{NH}_3$ / $\\\\text{NH}_4^+$):**
> * **Reaction equilibrium:**
>   $$\\\\text{NH}_4^+\\\\text{(aq)} \\\\rightleftharpoons \\\\text{NH}_3\\\\text{(aq)} + \\\\text{H}^+\\\\text{(aq)}$$
> * **When acid ($\\\\text{H}^+$) is added:**
>   * The added protons react with the ammonia reservoir:
>     $$\\\\text{NH}_3\\\\text{(aq)} + \\\\text{H}^+\\\\text{(aq)} \\\\rightarrow \\\\text{NH}_4^+\\\\text{(aq)}$$
> * **When base ($\\\\text{OH}^-$) is added:**
>   * The hydroxide ions react with the ammonium reservoir:
>     $$\\\\text{NH}_4^+\\\\text{(aq)} + \\\\text{OH}^-\\\\text{(aq)} \\\\rightarrow \\\\text{NH}_3\\\\text{(aq)} + \\\\text{H}_2\\\\text{O(l)}$$

> [!BOX]
> ### 🧮 Mathematical Proof of Buffer Efficiency
> Imagine $1.00\\\\text{ dm}^3$ of buffer made by mixing equal volumes of $1.00\\\\text{ mol dm}^{-3}$ ethanoic acid and $1.00\\\\text{ mol dm}^{-3}$ sodium ethanoate:
> * Due to equal volume mixing, both concentrations are halved to $0.500\\\\text{ mol dm}^{-3}$ each.
> * Initial pH ($K_a = 1.74 \\\\times 10^{-5}\\\\text{ mol dm}^{-3}$):
>   $$[\\\\text{H}^+] = K_a \\\\times \\\\frac{[\\\\text{acid}]}{[\\\\text{salt}]} = 1.74 \\\\times 10^{-5} \\\\implies \\\\text{pH} = 4.76$$
> * Now add $1.00 \\\\times 10^{-2}\\\\text{ mol}$ of $\\\\text{HCl}$ ($0.0100\\\\text{ mol}$ of $\\\\text{H}^+$) to the buffer:
>   * Moles of $\\\\text{CH}_3\\\\text{COOH}$ increases: $0.510\\\\text{ mol}$
>   * Moles of $\\\\text{CH}_3\\\\text{COO}^-$ decreases: $0.490\\\\text{ mol}$
>   * New $[\\\\text{H}^+]$ calculation:
>     $$[\\\\text{H}^+] = 1.74 \\\\times 10^{-5} \\\\times \\\\frac{0.510}{0.490} = 1.81 \\\\times 10^{-5}\\\\text{ mol dm}^{-3} \\\\implies \\\\text{pH} = 4.74$$
>   * The pH dropped by only **0.02 units** (from 4.76 to 4.74)
>   * **Comparison:** Adding $0.0100\\\\text{ mol}$ of $\\\\text{HCl}$ to $1.00\\\\text{ dm}^3$ of pure water changes pH from 7.00 to 2.00 (a drop of **5.00 units**).

> [!IMPORTANT]
> ### 🧮 Henderson-Hasselbalch Equation
> Rearranging the acid dissociation expression $[\\\\text{H}^+] = K_a \\\\times \\\\frac{[\\\\text{HA}]}{[\\\\text{A}^-]}$ and taking negative logarithms yields:
> $$\\\\text{pH} = \\\\text{p}K_a + \\\\log_{10}\\\\left(\\\\frac{[\\\\text{A}^-]}{[\\\\text{HA}]}\\\\right)$$
> * Alternatively, written as:
>   $$\\\\text{pH} = \\\\text{p}K_a + \\\\log_{10}\\\\left(\\\\frac{[\\\\text{salt}]}{[\\\\text{acid}]}\\\\right) \\\\quad \\\\text{or} \\\\quad \\\\text{pH} = \\\\text{p}K_a - \\\\log_{10}\\\\left(\\\\frac{[\\\\text{acid}]}{[\\\\text{salt}]}\\\\right)$$
> * For a basic buffer:
>   $$\\\\text{pH} = \\\\text{p}K_a + \\\\log_{10}\\\\left(\\\\frac{[\\\\text{base}]}{[\\\\text{conjugate acid}]}\\\\right)$$

> [!BOX]
> ### 🩸 Biological Applications of Buffers: Blood pH
> * **Blood pH Maintenance:** Human arterial blood plasma pH must be kept within a narrow range between **7.35 and 7.45** to ensure proper enzyme function and oxygen transport.
> * **The Carbonic Acid System:** This is the primary buffer in blood, utilizing hydrogen carbonate (HCO₃⁻) and carbonic acid (H₂CO₃):
>   $$CO₂\\\\text{(aq)} + H₂O\\\\text{(l)} \\\\rightleftharpoons H₂CO₃\\\\text{(aq)} \\\\rightleftharpoons HCO₃^-\\\\text{(aq)} + H^+\\\\text{(aq)}$$
> * **Mechanism of Action:**
>   * If blood becomes too acidic (excess H⁺), the hydrogen carbonate (HCO₃⁻) reacts with H⁺ to form carbonic acid (H₂CO₃), shifting the equilibrium to the left.
>   * If blood becomes too alkaline (depleted H⁺), carbonic acid (H₂CO₃) dissociates to release more H⁺ ions, shifting the equilibrium to the right.

> [!EXAMPLE]
> #### 📝 Worked Example 1: Preparing an Acidic Buffer of Specific pH
> **Question:** How would you prepare an acidic buffer solution of pH 5.00 at a temperature of $298\\\\text{ K}$ using ethanoic acid and sodium ethanoate? $[K_a = 1.74 \\\\times 10^{-5}\\\\text{ mol dm}^{-3}]$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Determine the required hydrogen ion concentration:**
> >      $$[\\\\text{H}^+] = 10^{-\\\\text{pH}} = 10^{-5.00} = 1.00 \\\\times 10^{-5}\\\\text{ mol dm}^{-3}$$
> > 
> > 2. **Rearrange the buffer expression to solve for the acid-to-salt ratio:**
> >      $$[\\\\text{H}^+] = K_a \\\\times \\\\frac{[\\\\text{acid}]}{[\\\\text{salt}]} \\\\implies \\\\frac{[\\\\text{acid}]}{[\\\\text{salt}]} = \\\\frac{[\\\\text{H}^+]}{K_a}$$
> >      $$\\\\frac{[\\\\text{acid}]}{[\\\\text{salt}]} = \\\\frac{1.00 \\\\times 10^{-5}}{1.74 \\\\times 10^{-5}} = 0.575$$
> > 
> > 3. **State the preparation details:**
> >      * Mix equal volumes of $0.575\\\\text{ mol dm}^{-3}$ ethanoic acid and $1.00\\\\text{ mol dm}^{-3}$ sodium ethanoate.
> >      * Or mix any concentrations of acid and salt that maintain a $0.575 : 1$ molar ratio.
> [!EXAMPLE]
> #### 📝 Worked Example 2: Preparing a Basic Buffer of Specific pH
> **Question:** In what proportions should we mix $0.100\\\\text{ mol dm}^{-3}$ solutions of ammonia and ammonium chloride to obtain a buffer of pH 9.80? $[K_a(\\\\text{NH}_4^+) = 5.62 \\\\times 10^{-10}\\\\text{ mol dm}^{-3}]$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Write the dissociation equation:**
> >      $$\\\\text{NH}_4^+\\\\text{(aq)} \\\\rightleftharpoons \\\\text{NH}_3\\\\text{(aq)} + \\\\text{H}^+\\\\text{(aq)}$$
> > 
> > 2. **Rearrange the Ka expression for the base-to-acid ratio:**
> >      $$\\\\frac{[\\\\text{NH}_3]}{[\\\\text{NH}_4^+]} = \\\\frac{K_a}{[\\\\text{H}^+]}$$
> > 
> > 3. **Calculate the hydrogen ion concentration from the target pH:**
> >      $$[\\\\text{H}^+] = 10^{-\\\\text{pH}} = 10^{-9.80} = 1.58 \\\\times 10^{-10}\\\\text{ mol dm}^{-3}$$
> > 
> > 4. **Calculate the ratio:**
> >      $$\\\\frac{[\\\\text{NH}_3]}{[\\\\text{NH}_4^+]} = \\\\frac{5.62 \\\\times 10^{-10}}{1.58 \\\\times 10^{-10}} = 3.56$$
> > 
> > 5. **State the volume ratio:**
> >      * Mix the solutions in a volume ratio of $3.56$ of $\\\\text{NH}_3\\\\text{(aq)}$ to $1$ of $\\\\text{NH}_4\\\\text{Cl(aq)}$ (a ratio of $3.56 : 1$).

> [!EXAMPLE]
> #### 📝 Worked Example 3: Methanoic Acid Buffer Action
> **Question:** Explain how an aqueous solution containing a mixture of methanoic acid, $\\\\text{HCOOH}$, and potassium methanoate, $\\\\text{HCOOK}$, acts as a buffer.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the reservoirs present in the mixture:**
> >      * The weak acid $\\\\text{HCOOH}$ dissociates only slightly, providing a large reservoir of un-dissociated acid molecules.
> >      * The soluble salt $\\\\text{HCOOK}$ dissociates completely, providing a large reservoir of conjugate base methanoate ions ($\\\\text{HCOO}^-$).
> > 
> > 2. **Show the reaction when acid is added:**
> >      * Added $\\\\text{H}^+$ ions react with the conjugate base reservoir:
> >        $$\\\\text{HCOO}^-\\\\text{(aq)} + \\\\text{H}^+\\\\text{(aq)} \\\\rightarrow \\\\text{HCOOH(aq)}$$
> > 
> > 3. **Show the reaction when alkali is added:**
> >      * Added $\\\\text{OH}^-$ ions react with the weak acid reservoir:
> >        $$\\\\text{HCOOH(aq)} + \\\\text{OH}^-\\\\text{(aq)} \\\\rightarrow \\\\text{HCOO}^-\\\\text{(aq)} + \\\\text{H}_2\\\\text{O(l)}$$

> [!EXAMPLE]
> #### 📝 Worked Example 4: Effect of Adding Salt on Buffer pH
> **Question:** A buffer solution contains equal concentrations of methanoic acid and potassium methanoate. Explain the effect on the pH of this solution of adding some solid potassium methanoate.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Predict pH change:**
> >      * The pH will increase slightly (become more basic).
> > 
> > 2. **Explain using the buffer relationship:**
> >      * Adding solid $\\\\text{HCOOK}$ increases the concentration of conjugate base ions, $[\\\\text{HCOO}^-]$
> >      * According to the expression $[\\\\text{H}^+] = K_a \\\\times \\\\frac{[\\\\text{HCOOH}]}{[\\\\text{HCOO}^-]}$, increasing the denominator $[\\\\text{HCOO}^-]$ decreases the hydrogen ion concentration $[\\\\text{H}^+]$
> >      * A lower $[\\\\text{H}^+]$ results in a higher pH value.

> [!EXAMPLE]
> #### 📝 Worked Example 5: Methanoic Acid Buffer Calculation
> **Question:** Calculate the pH, at $298\\\\text{ K}$, of a buffer solution made by mixing equal volumes of $1.00\\\\text{ mol dm}^{-3}$ methanoic acid and $0.500\\\\text{ mol dm}^{-3}$ potassium methanoate. $[K_a(\\\\text{HCOOH}) = 1.79 \\\\times 10^{-4}\\\\text{ mol dm}^{-3}]$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Determine concentrations after mixing:**
> >      * Since equal volumes are mixed, the total volume doubles, halving both concentrations:
> >        $$[\\\\text{HCOOH}] = 0.500\\\\text{ mol dm}^{-3}$$
> >        $$[\\\\text{HCOO}^-] = 0.250\\\\text{ mol dm}^{-3}$$
> > 
> > 2. **Calculate $[H^+]$:**
> >      $$[\\\\text{H}^+] = K_a \\\\times \\\\frac{[\\\\text{HCOOH}]}{[\\\\text{HCOO}^-]} = 1.79 \\\\times 10^{-4} \\\\times \\\\frac{0.500}{0.250} = 3.58 \\\\times 10^{-4}\\\\text{ mol dm}^{-3}$$
> > 
> > 3. **Calculate pH:**
> >      $$\\\\text{pH} = -\\\\log_{10}(3.58 \\\\times 10^{-4}) = 3.45$$

> [!EXAMPLE]
> #### 📝 Worked Example 6: Identifying Buffer Solutions
> **Question:** A student prepares two solutions.
> * **Solution A** is prepared by mixing $50\\\\text{ cm}^3$ of $0.100\\\\text{ mol dm}^{-3}\\\\text{ CH}_3\\\\text{COOH}$ with $25\\\\text{ cm}^3$ of $0.100\\\\text{ mol dm}^{-3}\\\\text{ NaOH}$
> * **Solution B** is prepared by mixing $25\\\\text{ cm}^3$ of $0.200\\\\text{ mol dm}^{-3}\\\\text{ CH}_3\\\\text{COOH}$ with $50\\\\text{ cm}^3$ of $0.100\\\\text{ mol dm}^{-3}\\\\text{ NaOH}$
> Explain why Solution A is a buffer solution but Solution B is not.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Analyze Solution A:**
> >      * Moles of $\\\\text{CH}_3\\\\text{COOH} = 0.0500 \\\\times 0.100 = 0.0050\\\\text{ mol}$
> >      * Moles of $\\\\text{NaOH} = 0.0250 \\\\times 0.100 = 0.0025\\\\text{ mol}$
> >      * The strong base $\\\\text{NaOH}$ reacts completely with the acid:
> >        $$\\\\text{CH}_3\\\\text{COOH} + \\\\text{NaOH} \\\\rightarrow \\\\text{CH}_3\\\\text{COONa} + \\\\text{H}_2\\\\text{O}$$
> >      * Remaining acid: $0.0050 - 0.0025 = 0.0025\\\\text{ mol}$
> >      * Conjugate base salt formed: $0.0025\\\\text{ mol}$
> >      * Since it contains significant amounts of both weak acid and its conjugate base, Solution A acts as a buffer.
> > 
> > 2. **Analyze Solution B:**
> >      * Moles of $\\\\text{CH}_3\\\\text{COOH} = 0.0250 \\\\times 0.200 = 0.0050\\\\text{ mol}$
> >      * Moles of $\\\\text{NaOH} = 0.0500 \\\\times 0.100 = 0.0050\\\\text{ mol}$
> >      * Complete neutralization occurs because moles of acid equal moles of base.
> >      * No unreacted weak acid remains in solution, only salt and water. Therefore, Solution B is not a buffer.

> [!EXAMPLE]
> #### 📝 Worked Example 7: Basic Buffer Concentration Calculation
> **Question:** A buffer solution was made by mixing $50\\\\text{ cm}^3$ of $0.200\\\\text{ mol dm}^{-3}$ aqueous ammonia, $\\\\text{NH}_3\\\\text{(aq)}$, with $50\\\\text{ cm}^3$ of aqueous ammonium chloride. The pH of the resulting solution was $9.55$ Calculate the concentration of the $\\\\text{NH}_4\\\\text{Cl}$ used. $[K_a(\\\\text{NH}_4^+) = 5.62 \\\\times 10^{-10}\\\\text{ mol dm}^{-3}]$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate the hydrogen ion concentration from pH:**
> >      $$[\\\\text{H}^+] = 10^{-9.55} = 2.82 \\\\times 10^{-10}\\\\text{ mol dm}^{-3}$$
> > 
> > 2. **Calculate ammonia concentration in the mixture:**
> >      * Since equal volumes ($50\\\\text{ cm}^3$ each) are mixed, the total volume is doubled, halving the concentration:
> >        $$[\\\\text{NH}_3]_{\\\\text{mix}} = \\\\frac{0.200}{2} = 0.100\\\\text{ mol dm}^{-3}$$
> > 
> > 3. **Use the Ka expression to find the ammonium concentration in the mixture:**
> >      $$K_a = \\\\frac{[\\\\text{NH}_3][\\\\text{H}^+]}{[\\\\text{NH}_4^+]} \\\\implies [\\\\text{NH}_4^+]_{\\\\text{mix}} = \\\\frac{[\\\\text{NH}_3]_{\\\\text{mix}} [\\\\text{H}^+]}{K_a}$$
> >      $$[\\\\text{NH}_4^+]_{\\\\text{mix}} = \\\\frac{0.100 \\\\times 2.82 \\\\times 10^{-10}}{5.62 \\\\times 10^{-10}} = 0.0501\\\\text{ mol dm}^{-3}$$
> > 
> > 4. **Calculate the initial concentration of ammonium chloride used:**
> >      * The concentration in the mixture was halved during mixing, so multiply by 2:
> >        $$\\\\text{Initial } [\\\\text{NH}_4\\\\text{Cl}] = 0.0501 \\\\times 2 = 0.100\\\\text{ mol dm}^{-3}$$

> [!EXAMPLE]
> #### 📝 Worked Example 8: Benzoic Acid Buffer Calculation
> **Question:** Calculate the pH, at $298\\\\text{ K}$, of a buffer solution containing $12.20\\\\text{ g}$ of benzoic acid ($\\\\text{C}_6\\\\text{H}_5\\\\text{COOH}$) and $7.20\\\\text{ g}$ of sodium benzoate ($\\\\text{C}_6\\\\text{H}_5\\\\text{COONa}$) in $1.00\\\\text{ dm}^3$ of solution. $[\\\\text{p}K_a(\\\\text{C}_6\\\\text{H}_5\\\\text{COOH}) = 4.20]$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate the molar masses:**
> >      * $M_r(\\\\text{C}_6\\\\text{H}_5\\\\text{COOH}) = 122.12\\\\text{ g mol}^{-1}$
> >      * $M_r(\\\\text{C}_6\\\\text{H}_5\\\\text{COONa}) = 144.10\\\\text{ g mol}^{-1}$
> > 
> > 2. **Calculate the moles of acid and salt:**
> >      * $\\\\text{Moles of acid} = \\\\frac{12.20}{122.12} = 0.0999\\\\text{ mol}$
> >      * $\\\\text{Moles of salt} = \\\\frac{7.20}{144.10} = 0.0500\\\\text{ mol}$
> > 
> > 3. **Apply the Henderson-Hasselbalch equation:**
> >      $$\\\\text{pH} = \\\\text{p}K_a + \\\\log_{10}\\\\left(\\\\frac{[\\\\text{salt}]}{[\\\\text{acid}]}\\\\right)$$
> >      $$\\\\text{pH} = 4.20 + \\\\log_{10}\\\\left(\\\\frac{0.0500}{0.0999}\\\\right) = 4.20 + (-0.301) = 3.90$$

> [!EXAMPLE]
> #### 📝 Worked Example 9: Self-Dissociation of Liquid Ammonia
> **Question:** Like water, liquid ammonia undergoes self-dissociation:
> $$2\\\\text{NH}_3 \\\\rightleftharpoons \\\\text{NH}_4^+ + \\\\text{NH}_2^-$$
> 1. Explain why ammonia can be classified as an amphoteric substance in this system.
> 2. For each of the following substances, indicate whether a solution of it in liquid ammonia will be 'acidic', 'basic', or 'neutral':
>    * Ammonium chloride ($\\\\text{NH}_4\\\\text{Cl}$)
>    * Sodium amide ($\\\\text{NaNH}_2$)
>    * Potassium hydroxide ($\\\\text{KOH}$)
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Explain the amphoteric nature:**
> >      * An amphoteric substance can act as both a Brønsted-Lowry acid and base.
> >      * In this self-dissociation, one ammonia molecule acts as an acid by donating a proton ($\\\\text{H}^+$) to form the amide ion ($\\\\text{NH}_2^-$).
> >      * Another ammonia molecule acts as a base by accepting a proton to form the ammonium ion ($\\\\text{NH}_4^+$).
> > 
> > 2. **Classify the solute solutions:**
> >      * **Ammonium chloride ($\\\\text{NH}_4\\\\text{Cl}$):** **Acidic** (it increases the concentration of $\\\\text{NH}_4^+$, which is the solvent cation).
> >      * **Sodium amide ($\\\\text{NaNH}_2$):** **Basic** (it increases the concentration of $\\\\text{NH}_2^-$, which is the solvent anion).
> >      * **Potassium hydroxide ($\\\\text{KOH}$):** **Basic** (hydroxide ions accept protons from $\\\\text{NH}_4^+$ or react with $\\\\text{NH}_3$ to generate $\\\\text{NH}_2^-$).
`,
    keyPoints: [
      'Buffers require a reservoir of both weak acid/base and its conjugate salt.',
      'Henderson-Hasselbalch allows direct calculation of buffer pH from concentrations.',
      'When acid and salt concentrations are equal, pH equals pKa.'
    ],
    equationVisualizer: {
      reactants: [['NH₃', '#3b82f6'], ['NH₃', '#3b82f6']],
      products: [['NH₄⁺', '#10b981'], ['NH₂⁻', '#ef4444']],
      description: "Self-dissociation of liquid ammonia (one molecule acts as a proton donor/acid, the other as a proton acceptor/base)."
    }
  },
  {
    id: 'buffer-titrations-ka-u4-l4',
    title: 'Ka from pH Curves',
    type: 'text',
    content: `
> [!NOTE]
> ### 📊 Buffer Action during a Titration
> In the titration curve of a weak acid with a strong base (or a weak base with a strong acid):
> * **Initial pH Jump:** When the titrant is first added, there is a fairly rapid initial change of about $1.5$ pH units before the buffer region is established
> * **Buffer Region:** Following the initial jump, the curve features a very gradual slope called the **buffer range**
> * **Species Coexistence:** Within this range, significant concentrations of both the unreacted weak species and its conjugate partner coexist in solution, creating a buffer system that resists rapid pH changes.
>   * *For Weak Acid + Strong Base:* The solution contains a reservoir of unreacted weak acid ($\\\\text{HA}$) and its conjugate base ($\\\\text{A}^-$)
>   * *For Weak Base + Strong Acid:* The solution contains a reservoir of unreacted weak base ($\\\\text{NH}_3$) and its conjugate acid ($\\\\text{NH}_4^+$)

> [!IMPORTANT]
> ### 🧮 Determining Ka from a pH Titration Curve
> The **half-equivalence point** is the point during the titration of a weak acid (or weak base) where exactly half of the original analyte has been neutralized by the titrant:
> 1. At this specific point, the concentration of the weak acid equals the concentration of its conjugate base salt:
>    $$[\\\\text{HA}] = [\\\\text{A}^-]$$
> 2. Substituting this equality into the acid dissociation constant ($K_a$) expression:
>    $$K_a = \\\\frac{[\\\\text{H}^+][\\\\text{A}^-]}{[\\\\text{HA}]} \\\\implies K_a = [\\\\text{H}^+]$$
> 3. Taking the negative logarithm of both sides:
>    $$\\\\text{pH} = \\\\text{p}K_a$$
> * **Exam Tip:** Always use the term **half-equivalence point** (and not half-neutralisation point) when explaining the experimental determination of $\\\\text{p}K_a$ from a pH curve

> [!BOX]
> ### 🧪 The Half-Volume Method (Practical Skills CP11)
> This standard experimental procedure determines the $K_a$ of an unknown weak acid:
> 1. Pipette $25.0\\\\text{ cm}^3$ of the weak acid into a conical flask and add a few drops of phenolphthalein indicator.
> 2. Titrate against sodium hydroxide of known concentration until a permanent pale pink end-point is reached. Note the equivalence volume ($V_{\\\\text{eq}}$).
> 3. Pipette a fresh, separate $25.0\\\\text{ cm}^3$ sample of the same weak acid into another conical flask (do NOT add indicator).
> 4. Add exactly **half the volume** of sodium hydroxide solution ($\\\\frac{V_{\\\\text{eq}}}{2}$) to this flask.
> 5. Measure the pH of this mixture using a calibrated pH meter.
> 6. Because this is the half-equivalence point, the measured $\\\\text{pH}$ value is directly equal to $\\\\text{p}K_a$
> 7. Calculate $K_a$ using the relation:
>    $$K_a = 10^{-\\\\text{p}K_a}$$

> [!EXAMPLE]
> #### 📝 Worked Example 1: Ringed Region on HCl-Ammonia Titration Curve
> **Question:** A student carried out a titration by adding hydrochloric acid to ammonia solution. A sketch graph of pH against volume of hydrochloric acid added shows a ringed region near the start where the pH decreases very gradually.
> 1. Name the type of solution formed in this ringed region.
> 2. Explain how you deduced your answer.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the solution type:**
> >    * A **buffer solution**
> > 
> > 2. **Explain the deduction:**
> >    * In this region, only some of the weak base ammonia ($\\\\text{NH}_3$) has reacted with the hydrochloric acid.
> >    * Therefore, unreacted weak base ($\\\\text{NH}_3$) and its conjugate acid ($\\\\text{NH}_4^+$ from the formed $\\\\text{NH}_4\\\\text{Cl}$) co-exist in significant concentrations.
> >    * The curve shows a very gradual change in pH upon adding acid, which is the characteristic behavior of a buffer system resisting pH change.

> [!EXAMPLE]
> #### 📝 Worked Example 2: Determining Ka from a Titration Curve
> **Question:** A student titrates $25.0\\\\text{ cm}^3$ of a weak monoprotic acid ($\\\\text{HA}$) with $0.100\\\\text{ mol dm}^{-3}\\\\text{ NaOH(aq)}$. The equivalence point is reached after adding $25.0\\\\text{ cm}^3$ of $\\\\text{NaOH}$. The pH at the half-equivalence point ($12.5\\\\text{ cm}^3$ of $\\\\text{NaOH}$ added) is $4.80$. Calculate the acid dissociation constant ($K_a$) of the weak acid.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the half-equivalence volume:**
> >    * The equivalence volume is $25.0\\\\text{ cm}^3$
> >    * The half-equivalence volume occurs at:
> >      $$\\\\text{Volume} = \\\\frac{25.0\\\\text{ cm}^3}{2} = 12.5\\\\text{ cm}^3$$
> > 
> > 2. **State the pH-pKa relationship:**
> >    * At the half-equivalence point, $[\\\\text{HA}] = [\\\\text{A}^-]$
> >    * Therefore, $\\\\text{pH} = \\\\text{p}K_a = 4.80$
> > 
> > 3. **Calculate Ka:**
> >    * Convert $\\\\text{p}K_a$ to $K_a$:
> >      $$K_a = 10^{-\\\\text{p}K_a} = 10^{-4.80} = 1.58 \\\\times 10^{-5}\\\\text{ mol dm}^{-3}$$

> [!EXAMPLE]
> #### 📝 Worked Example 3: Finding pKa from a Curve
> **Question:** A titration curve for a weak acid shows that the vertical jump occurs at $16.0\\\\text{ cm}^3$ of $\\\\text{NaOH(aq)}$ added. Use the curve to determine the $\\\\text{p}K_a$ value for the acid and explain your steps.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify equivalence volume:**
> >    * The equivalence point occurs at the vertical jump at $16.0\\\\text{ cm}^3$
> > 
> > 2. **Calculate half-equivalence volume:**
> >    * Find the half-volume:
> >      $$\\\\text{Half-volume} = \\\\frac{16.0\\\\text{ cm}^3}{2} = 8.0\\\\text{ cm}^3$$
> > 
> > 3. **Read pKa from the graph:**
> >    * Locate $8.0\\\\text{ cm}^3$ on the x-axis, project vertically up to the titration curve, and read the corresponding pH value on the y-axis.
> >    * This pH value is equal to the $\\\\text{p}K_a$ of the acid, which is approximately $4.60$

`,
    keyPoints: [
      'At the half-equivalence point of a weak acid-strong base titration, pH equals pKa.',
      'The half-volume method is a practical way of determining pKa by measuring the pH of a half-neutralised mixture.',
      'The buffer region on a pH titration curve corresponds to the flat portion where both HA and A⁻ coexist.'
    ]
  }
];
