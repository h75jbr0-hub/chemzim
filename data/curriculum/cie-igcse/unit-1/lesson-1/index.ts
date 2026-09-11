import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Solids, Liquids and Gases";
export const lessonNumber = 1;

const potassiumManganateSvg = `
<svg viewBox="0 0 1000 360" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
    <linearGradient id="purpleWater" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#d8b4fe" stop-opacity="0.6" />
      <stop offset="100%" stop-color="#8b5cf6" stop-opacity="0.8" />
    </linearGradient>
    <linearGradient id="crystalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#a855f7" />
      <stop offset="100%" stop-color="#4c1d95" />
    </linearGradient>
    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#c084fc" />
    </marker>
  </defs>
  <rect width="1000" height="360" fill="url(#bgGrad)" stroke="#1e293b" stroke-width="2" rx="16" />

  <g transform="translate(150, 40)">
    <text x="100" y="30" fill="#94a3b8" font-size="14" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Before Diffusion</text>
    <rect x="30" y="120" width="140" height="130" fill="#38bdf8" fill-opacity="0.15" rx="4" />
    <path d="M 25 80 L 30 85 L 30 250 A 10 10 0 0 0 40 260 L 160 260 A 10 10 0 0 0 170 250 L 170 85 L 175 80" fill="none" stroke="#64748b" stroke-width="4" stroke-linecap="round" />
    <line x1="30" y1="120" x2="170" y2="120" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4 2" />
    <path d="M 90 255 L 95 245 L 105 243 L 112 250 L 108 258 L 92 258 Z" fill="url(#crystalGrad)" />
    <text x="100" y="180" fill="#38bdf8" fill-opacity="0.7" font-size="12" font-family="system-ui, sans-serif" text-anchor="middle">Clear Water</text>
    <text x="100" y="290" fill="#c084fc" font-size="11" font-family="system-ui, sans-serif" text-anchor="middle">KMnO₄ Crystal</text>
    <path d="M 100 280 L 100 262" stroke="#c084fc" stroke-width="1" fill="none" marker-end="url(#arrow)" />
  </g>

  <g transform="translate(550, 40)">
    <text x="100" y="30" fill="#94a3b8" font-size="14" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">After Diffusion (Uniform Purple)</text>
    <rect x="30" y="120" width="140" height="130" fill="url(#purpleWater)" rx="4" />
    <path d="M 25 80 L 30 85 L 30 250 A 10 10 0 0 0 40 260 L 160 260 A 10 10 0 0 0 170 250 L 170 85 L 175 80" fill="none" stroke="#64748b" stroke-width="4" stroke-linecap="round" />
    <line x1="30" y1="120" x2="170" y2="120" stroke="#c084fc" stroke-width="2" stroke-dasharray="4 2" />
    <circle cx="50" cy="150" r="2.5" fill="#c084fc" />
    <circle cx="80" cy="180" r="3" fill="#c084fc" />
    <circle cx="120" cy="140" r="2.5" fill="#c084fc" />
    <circle cx="150" cy="200" r="3.5" fill="#c084fc" />
    <circle cx="70" cy="220" r="2.5" fill="#c084fc" />
    <circle cx="100" cy="240" r="3" fill="#c084fc" />
    <text x="100" y="180" fill="#ffffff" font-size="12" font-family="system-ui, sans-serif" text-anchor="middle">Purple Solution</text>
    <text x="100" y="290" fill="#cbd5e1" font-size="11" font-family="system-ui, sans-serif" text-anchor="middle">Particles evenly distributed</text>
  </g>
</svg>
`;

const bromineDiffusionSvg = `
<svg viewBox="0 0 1000 360" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
    <linearGradient id="bromineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ea580c" stop-opacity="0.85" />
      <stop offset="100%" stop-color="#7c2d12" stop-opacity="0.95" />
    </linearGradient>
    <linearGradient id="diffusedBromine" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ea580c" stop-opacity="0.45" />
      <stop offset="100%" stop-color="#7c2d12" stop-opacity="0.55" />
    </linearGradient>
    <marker id="arrow2" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#cbd5e1" />
    </marker>
  </defs>
  <rect width="1000" height="360" fill="url(#bgGrad2)" stroke="#1e293b" stroke-width="2" rx="16" />

  <g transform="translate(150, 40)">
    <text x="100" y="30" fill="#94a3b8" font-size="14" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Before Diffusion</text>
    <rect x="60" y="170" width="80" height="90" fill="url(#bromineGrad)" rx="2" />
    <path d="M 60 170 L 60 260 A 6 6 0 0 0 66 266 L 134 266 A 6 6 0 0 0 140 260 L 140 170" fill="none" stroke="#94a3b8" stroke-width="3" />
    <path d="M 60 166 L 60 76 A 6 6 0 0 1 66 70 L 134 70 A 6 6 0 0 1 140 76 L 140 166" fill="none" stroke="#94a3b8" stroke-width="3" />
    <line x1="50" y1="168" x2="150" y2="168" stroke="#cbd5e1" stroke-width="4" stroke-linecap="round" />
    <text x="100" y="115" fill="#94a3b8" font-size="11" font-family="system-ui, sans-serif" text-anchor="middle">Air (Colorless)</text>
    <text x="100" y="220" fill="#ffedd5" font-size="11" font-family="system-ui, sans-serif" text-anchor="middle">Bromine Gas</text>
    <text x="190" y="172" fill="#cbd5e1" font-size="10" font-family="system-ui, sans-serif" text-anchor="start">Glass Cover Plate</text>
    <path d="M 185 172 L 154 168" stroke="#cbd5e1" stroke-width="1" fill="none" marker-end="url(#arrow2)" />
  </g>

  <g transform="translate(550, 40)">
    <text x="100" y="30" fill="#94a3b8" font-size="14" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">After Diffusion</text>
    <rect x="60" y="70" width="80" height="196" fill="url(#diffusedBromine)" rx="6" />
    <path d="M 60 168 L 60 260 A 6 6 0 0 0 66 266 L 134 266 A 6 6 0 0 0 140 260 L 140 168" fill="none" stroke="#94a3b8" stroke-width="3" />
    <path d="M 60 168 L 60 76 A 6 6 0 0 1 66 70 L 134 70 A 6 6 0 0 1 140 76 L 140 168" fill="none" stroke="#94a3b8" stroke-width="3" />
    <circle cx="75" cy="90" r="3" fill="#ea580c" />
    <circle cx="120" cy="110" r="2.5" fill="#ea580c" />
    <circle cx="95" cy="140" r="3.5" fill="#ea580c" />
    <circle cx="70" cy="170" r="2" fill="#ea580c" />
    <circle cx="125" cy="190" r="3" fill="#ea580c" />
    <circle cx="90" cy="220" r="2.5" fill="#ea580c" />
    <circle cx="110" cy="245" r="3" fill="#ea580c" />
    <text x="100" y="165" fill="#ffedd5" font-size="11" font-family="system-ui, sans-serif" text-anchor="middle">Uniform mixture</text>
    <text x="100" y="290" fill="#cbd5e1" font-size="11" font-family="system-ui, sans-serif" text-anchor="middle">Cover plate removed</text>
  </g>
</svg>
`;

const solidStateSvg = `
<svg viewBox="0 0 150 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="solidGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="100%" stop-color="#0284c7" />
    </linearGradient>
  </defs>
  <rect x="2" y="2" width="146" height="96" rx="6" fill="#070f1e" stroke="#1e293b" stroke-width="1.5" />
  
  <circle cx="15" cy="14" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="27" cy="14" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="39" cy="14" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="51" cy="14" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="63" cy="14" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="75" cy="14" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="87" cy="14" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="99" cy="14" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="111" cy="14" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="123" cy="14" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="135" cy="14" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />

  <circle cx="15" cy="26" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="27" cy="26" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="39" cy="26" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="51" cy="26" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="63" cy="26" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="75" cy="26" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="87" cy="26" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="99" cy="26" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="111" cy="26" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="123" cy="26" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="135" cy="26" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />

  <circle cx="15" cy="38" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="27" cy="38" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="39" cy="38" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="51" cy="38" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="63" cy="38" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="75" cy="38" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="87" cy="38" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="99" cy="38" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="111" cy="38" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="123" cy="38" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="135" cy="38" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />

  <circle cx="15" cy="50" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="27" cy="50" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="39" cy="50" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="51" cy="50" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="63" cy="50" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="75" cy="50" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="87" cy="50" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="99" cy="50" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="111" cy="50" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="123" cy="50" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="135" cy="50" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />

  <circle cx="15" cy="62" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="27" cy="62" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="39" cy="62" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="51" cy="62" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="63" cy="62" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="75" cy="62" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="87" cy="62" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="99" cy="62" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="111" cy="62" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="123" cy="62" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="135" cy="62" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />

  <circle cx="15" cy="74" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="27" cy="74" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="39" cy="74" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="51" cy="74" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="63" cy="74" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="75" cy="74" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="87" cy="74" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="99" cy="74" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="111" cy="74" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="123" cy="74" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="135" cy="74" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />

  <circle cx="15" cy="86" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="27" cy="86" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="39" cy="86" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="51" cy="86" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="63" cy="86" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="75" cy="86" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="87" cy="86" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="99" cy="86" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="111" cy="86" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="123" cy="86" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="135" cy="86" r="5.5" fill="url(#solidGrad)" stroke="#070f1e" stroke-width="0.5" />
</svg>
`;

const liquidStateSvg = `
<svg viewBox="0 0 150 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="liquidGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" />
      <stop offset="100%" stop-color="#059669" />
    </linearGradient>
  </defs>
  <rect x="2" y="2" width="146" height="96" rx="6" fill="#070f1e" stroke="#1e293b" stroke-width="1.5" />
  
  <circle cx="15" cy="88" r="5.5" fill="url(#liquidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="26" cy="88" r="5.5" fill="url(#liquidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="37" cy="88" r="5.5" fill="url(#liquidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="49" cy="88" r="5.5" fill="url(#liquidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="61" cy="88" r="5.5" fill="url(#liquidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="73" cy="88" r="5.5" fill="url(#liquidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="85" cy="88" r="5.5" fill="url(#liquidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="97" cy="88" r="5.5" fill="url(#liquidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="109" cy="88" r="5.5" fill="url(#liquidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="121" cy="88" r="5.5" fill="url(#liquidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="133" cy="88" r="5.5" fill="url(#liquidGrad)" stroke="#070f1e" stroke-width="0.5" />


  <circle cx="12" cy="77" r="5.5" fill="url(#liquidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="24" cy="77" r="5.5" fill="url(#liquidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="36" cy="77" r="5.5" fill="url(#liquidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="47" cy="77" r="5.5" fill="url(#liquidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="59" cy="77" r="5.5" fill="url(#liquidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="71" cy="77" r="5.5" fill="url(#liquidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="82" cy="77" r="5.5" fill="url(#liquidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="94" cy="77" r="5.5" fill="url(#liquidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="106" cy="77" r="5.5" fill="url(#liquidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="118" cy="77" r="5.5" fill="url(#liquidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="130" cy="77" r="5.5" fill="url(#liquidGrad)" stroke="#070f1e" stroke-width="0.5" />

  <circle cx="16" cy="66" r="5.5" fill="url(#liquidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="28" cy="66" r="5.5" fill="url(#liquidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="39" cy="66" r="5.5" fill="url(#liquidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="51" cy="66" r="5.5" fill="url(#liquidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="62" cy="66" r="5.5" fill="url(#liquidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="74" cy="66" r="5.5" fill="url(#liquidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="85" cy="66" r="5.5" fill="url(#liquidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="97" cy="66" r="5.5" fill="url(#liquidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="109" cy="66" r="5.5" fill="url(#liquidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="121" cy="66" r="5.5" fill="url(#liquidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="132" cy="66" r="5.5" fill="url(#liquidGrad)" stroke="#070f1e" stroke-width="0.5" />

  <circle cx="10" cy="55" r="5.5" fill="url(#liquidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="22" cy="55" r="5.5" fill="url(#liquidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="33" cy="55" r="5.5" fill="url(#liquidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="45" cy="55" r="5.5" fill="url(#liquidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="57" cy="55" r="5.5" fill="url(#liquidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="69" cy="55" r="5.5" fill="url(#liquidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="81" cy="55" r="5.5" fill="url(#liquidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="93" cy="55" r="5.5" fill="url(#liquidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="105" cy="55" r="5.5" fill="url(#liquidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="117" cy="55" r="5.5" fill="url(#liquidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="129" cy="55" r="5.5" fill="url(#liquidGrad)" stroke="#070f1e" stroke-width="0.5" />

  <circle cx="15" cy="44" r="5.5" fill="url(#liquidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="27" cy="44" r="5.5" fill="url(#liquidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="38" cy="44" r="5.5" fill="url(#liquidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="50" cy="44" r="5.5" fill="url(#liquidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="62" cy="44" r="5.5" fill="url(#liquidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="74" cy="44" r="5.5" fill="url(#liquidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="86" cy="44" r="5.5" fill="url(#liquidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="97" cy="44" r="5.5" fill="url(#liquidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="109" cy="44" r="5.5" fill="url(#liquidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="121" cy="44" r="5.5" fill="url(#liquidGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="133" cy="44" r="5.5" fill="url(#liquidGrad)" stroke="#070f1e" stroke-width="0.5" />
</svg>
`;

const gasStateSvg = `
<svg viewBox="0 0 150 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gasGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f43f5e" />
      <stop offset="100%" stop-color="#be123c" />
    </linearGradient>
    <marker id="gasArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
      <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#f43f5e" />
    </marker>
  </defs>
  <rect x="2" y="2" width="146" height="96" rx="6" fill="#070f1e" stroke="#1e293b" stroke-width="1.5" />
  
  <path d="M 25 20 L 12 10" stroke="#f43f5e" stroke-width="1.2" stroke-linecap="round" marker-end="url(#gasArrow)" />
  <circle cx="25" cy="20" r="5.5" fill="url(#gasGrad)" stroke="#070f1e" stroke-width="0.5" />

  <path d="M 55 30 L 68 40" stroke="#f43f5e" stroke-width="1.2" stroke-linecap="round" marker-end="url(#gasArrow)" />
  <circle cx="55" cy="30" r="5.5" fill="url(#gasGrad)" stroke="#070f1e" stroke-width="0.5" />

  <path d="M 120 25 L 134 15" stroke="#f43f5e" stroke-width="1.2" stroke-linecap="round" marker-end="url(#gasArrow)" />
  <circle cx="120" cy="25" r="5.5" fill="url(#gasGrad)" stroke="#070f1e" stroke-width="0.5" />

  <path d="M 35 75 L 20 83" stroke="#f43f5e" stroke-width="1.2" stroke-linecap="round" marker-end="url(#gasArrow)" />
  <circle cx="35" cy="75" r="5.5" fill="url(#gasGrad)" stroke="#070f1e" stroke-width="0.5" />

  <path d="M 85 45 L 72 55" stroke="#f43f5e" stroke-width="1.2" stroke-linecap="round" marker-end="url(#gasArrow)" />
  <circle cx="85" cy="45" r="5.5" fill="url(#gasGrad)" stroke="#070f1e" stroke-width="0.5" />

  <path d="M 105 75 L 115 62" stroke="#f43f5e" stroke-width="1.2" stroke-linecap="round" marker-end="url(#gasArrow)" />
  <circle cx="105" cy="75" r="5.5" fill="url(#gasGrad)" stroke="#070f1e" stroke-width="0.5" />

  <path d="M 65 80 L 80 84" stroke="#f43f5e" stroke-width="1.2" stroke-linecap="round" marker-end="url(#gasArrow)" />
  <circle cx="65" cy="80" r="5.5" fill="url(#gasGrad)" stroke="#070f1e" stroke-width="0.5" />

  <path d="M 135 60 L 122 50" stroke="#f43f5e" stroke-width="1.2" stroke-linecap="round" marker-end="url(#gasArrow)" />
  <circle cx="135" cy="60" r="5.5" fill="url(#gasGrad)" stroke="#070f1e" stroke-width="0.5" />

  <path d="M 75 15 L 62 10" stroke="#f43f5e" stroke-width="1.2" stroke-linecap="round" marker-end="url(#gasArrow)" />
  <circle cx="75" cy="15" r="5.5" fill="url(#gasGrad)" stroke="#070f1e" stroke-width="0.5" />
</svg>
`;

export const theoryMarkdown = `
## Solids, Liquids and Gases
All matter is made of particles. Matter exists in three main physical states: solid, liquid, and gas.
`;

export const lessonParts: LessonPart[] = [
    {
        id: "three-states",
        title: "The Three States of Matter",
        type: "text",
        content: `
### 🧱 Matter and its Physical States

**Matter** is defined as anything that has mass and takes up space (volume). All matter is composed of extremely tiny pieces called **particles**, which have kinetic energy causing them to move or vibrate.

Depending on temperature and pressure, matter exists in three physical states (phases): **Solid (s)**, **Liquid (l)**, and **Gas (g)**.

> [!NOTE]
> ### 📋 Properties and Comparison of Physical States
> 
> | Property | Solid (s) | Liquid (l) | Gas (g) |
> | :--- | :--- | :--- | :--- |
> | How to draw | ${svgToken(solidStateSvg)} | ${svgToken(liquidStateSvg)} | ${svgToken(gasStateSvg)} |
> | Separation | Closely packed, touching | Close together, touching | Far apart with large gaps |
> | Arrangement | Regular rows (ordered lattice) | Randomly distributed | Randomly distributed |
> | Intermolecular Spaces | Negligible | Very small | Very large |
> | Intermolecular Forces | Very strong | Strong | Very weak or negligible |
> | Motion | Vibrate in fixed positions | Slide over each other randomly | Move freely in all directions |
> | Energy | Least energy | Moderate | Most energy |
> | Fluidity (Flow) | No | Flows easily | Flows easily |
> | Shape | Fixed | Not fixed (takes container shape) | Not fixed (fills entire volume) |
> | Volume | Fixed | Fixed | Fills entire container volume |
> | Compression | Cannot be compressed | Cannot be compressed | Easily compressed |

> [!EXAMPLE]
> #### 📝 Worked Example 1: Spacing and Arrangement of Particles
> **Question:** Which row describes the spacing and arrangement of particles?
> 
> | | Solid | Liquid | Gas |
> | :--- | :--- | :--- | :--- |
> | A | Close together and randomly arranged | Close together and regularly arranged | Far apart and randomly arranged |
> | B | Close together and randomly arranged | Far apart and randomly arranged | Close together and randomly arranged |
> | C | Close together and regularly arranged | Close together and regularly arranged | Close together and randomly arranged |
> | D | Close together and regularly arranged | Close together and randomly arranged | Far apart and randomly arranged |
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Analyze Solid State:**
> >    * Particles are close together and regularly arranged (ordered lattice). This narrows choices to C and D.
> > 2. **Analyze Liquid State:**
> >    * Particles are close together but randomly arranged (slide over each other). This narrows choices to A and D.
> > 3. **Analyze Gas State:**
> >    * Particles are far apart and randomly arranged. This matches D.
> > 4. **Conclusion:**
> >    * Row **D** is correct.

> [!EXAMPLE]
> #### 📝 Worked Example 2: Comparing Liquids and Gases
> **Question:** Some students are asked to describe differences between gases and liquids.
> 
> Three of their suggestions are:
> 1. Gas molecules are further apart.
> 2. Gas molecules are smaller.
> 3. Liquid molecules vibrate around fixed positions.
> 
> Which suggestions are correct?
> 
> **A** 1 only
> 
> **B** 2 only
> 
> **C** 3 only
> 
> **D** 1, 2 and 3
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Evaluate Suggestion 1:**
> >    * Gas molecules are indeed much further apart than liquid molecules, which are close together. This suggestion is correct.
> > 2. **Evaluate Suggestion 2:**
> >    * The size of the molecules does not change when a substance changes state; only the spacing and forces between them change. This suggestion is incorrect.
> > 3. **Evaluate Suggestion 3:**
> >    * Molecules in a liquid can slide over each other; they do not vibrate around fixed positions (that is a property of solids). This suggestion is incorrect.
> > 4. **Conclusion:**
> >    * Only suggestion 1 is correct. The correct option is **A**.

> [!EXAMPLE]
> #### 📝 Worked Example 3: Compressibility of Matter
> **Question:** Why can a gas be easily compressed, while solids and liquids cannot?
> 
> **A** Gas particles are larger and can be squeezed.
> 
> **B** Gas particles are far apart with large spaces between them.
> 
> **C** Gas particles move slower than liquid particles.
> 
> **D** Intermolecular forces in gases are very strong.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Analyze Particle Spacing:**
> >    * In solids and liquids, particles are closely packed and touching, leaving negligible spaces between them. They cannot be pushed closer together.
> >    * In gases, particles are widely spaced with large empty gaps between them.
> > 2. **Relate to Compression:**
> >    * Because of these large empty spaces, gas particles can easily be forced closer together when pressure is applied, making gases highly compressible.
> > 3. **Conclusion:**
> >    * Gases are easily compressed because of the large spaces between their particles. The correct option is **B**.

> [!EXAMPLE]
> #### 📝 Worked Example 4: Relative Densities of States
> **Question:** Which statement correctly explains why the gas state of a substance has a much lower density than its solid state?
> 
> **A** Gas particles have less mass than solid particles.
> 
> **B** Gas particles are smaller than solid particles.
> 
> **C** Gas particles are much further apart, so there are fewer particles in a given volume.
> 
> **D** Gas particles have less kinetic energy.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Understand Density:**
> >    * Density is defined as mass per unit volume ($\text{density} = \text{mass} / \text{volume}$). In terms of particles, it relates to how many particles are packed into a specific space.
> > 2. **Evaluate Particle Mass and Size:**
> >    * Changing state is a physical change; the individual particles themselves do not change size or mass. This rules out A and B.
> > 3. **Compare Spacing in Solid vs. Gas:**
> >    * Solid particles are closely packed, meaning a large number of particles fit into a small volume (high density).
> >    * Gas particles are widely separated with large gaps, meaning very few particles occupy the same volume (low density).
> > 4. **Conclusion:**
> >    * The lower density of gases is due to the large distance between their particles. The correct option is **C**.

> [!EXAMPLE]
> #### 📝 Worked Example 5: Spacing Changes during Melting
> **Question:** How does the spacing of particles change when ice (solid) melts to become water (liquid)?
> 
> **A** The particles move very far apart with large gaps.
> 
> **B** The particles remain close together and touching, but their ordered arrangement is lost.
> 
> **C** The particles become regularly arranged in rows.
> 
> **D** The particles stop touching completely.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Analyze Solid State (Ice):**
> >    * Particles are closely packed, touching, and arranged in a regular, repeating lattice structure.
> > 2. **Analyze Liquid State (Water):**
> >    * Particles in a liquid are still close together and touching, but they are randomly arranged and can slide past each other.
> > 3. **Compare Spacing Change:**
> >    * Melting breaks the regular lattice structure, but it does NOT separate the particles widely (that only happens during boiling/vaporization). The particles remain close and touching.
> > 4. **Conclusion:**
> >    * The particles remain close together and touching, losing their ordered arrangement. The correct option is **B**.
        `,
        keyPoints: [
            "Matter has mass, volume, and is composed of moving particles.",
            "Solids have fixed shape and volume, with strong forces keeping particles in a regular arrangement.",
            "Liquids flow to take container shapes, with particles sliding past one another.",
            "Gases fill all available space, are highly compressible, and have negligible forces between particles."
        ]
    },
    {
        id: "lattice-and-fluids",
        title: "Lattice Structure & Fluids",
        type: "text",
        content: `
### 🕸️ Lattice Structure in Solids

In a crystalline solid, particles are arranged in a highly organized three-dimensional framework.

> [!IMPORTANT]
> ### 🧮 Definition: Lattice
> A **lattice** is a regular, repeating three-dimensional arrangement of atoms, ions, or molecules in a crystalline solid.

Because of this rigid framework, solids maintain a fixed structure and do not flow or change shape under normal conditions.
### 🌊 Fluid Particle Behavior

Liquids and gases are collectively called **fluids** because their particles are free to move and flow. 

* The particles in a fluid show random motion.
* They continuously collide with each other and bounce off in straight lines in all directions.
* This continuous random motion and ability to flow explains why fluids take the shape of their containers.

> [!EXAMPLE]
> #### 📝 Worked Example 1: Particle Arrangements in Substances
> **Question:** In which of the following are the particles arranged in a regular pattern?
> 
> **A** a gas
> 
> **B** a metal
> 
> **C** a liquid
> 
> **D** a solution
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Understand 'Regular Pattern':**
> >    * A regular repeating pattern of particles is characteristic of crystalline solids (lattice structures).
> > 2. **Evaluate Options:**
> >    * **A (gas)**: Particles are randomly distributed.
> >    * **B (metal)**: Metals are solids with a regular lattice structure.
> >    * **C (liquid)**: Particles are randomly distributed.
> >    * **D (solution)**: Solute and solvent particles are randomly mixed and distributed.
> > 3. **Conclusion:**
> >    * The particles in a metal (solid) are arranged in a regular pattern. The correct option is **B**.

> [!EXAMPLE]
> #### 📝 Worked Example 2: Molecules in Different States of Water
> **Question:** Which statement about the molecules in ice, water and steam is correct?
> 
> **A** The H₂O molecules are on average closest together in steam.
> 
> **B** The H₂O molecules are on average furthest together in water.
> 
> **C** The H₂O molecules in steam have the second highest average velocity.
> 
> **D** The H₂O molecules in ice are able to vibrate.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Evaluate Option A:**
> >    * In steam (gas), molecules are furthest apart. This is incorrect.
> > 2. **Evaluate Option B:**
> >    * In water (liquid), molecules are much closer together than in steam. This is incorrect.
> > 3. **Evaluate Option C:**
> >    * Steam (gas) has the highest temperature and kinetic energy, so its molecules have the highest average velocity, not the second highest. This is incorrect.
> > 4. **Evaluate Option D:**
> >    * In ice (solid), molecules are held in fixed positions in a lattice but can still vibrate. This is correct.
> > 5. **Conclusion:**
> >    * Molecules in solid ice are in fixed positions and vibrate. The correct option is **D**.

> [!EXAMPLE]
> #### 📝 Worked Example 3: Shape and Fluidity in Liquids
> **Question:** Why does a liquid take the shape of its container but maintain a fixed volume?
> 
> **A** Liquid particles are widely separated and can compress.
> 
> **B** Liquid particles can slide past each other randomly, but are still held close together by strong forces.
> 
> **C** Liquid particles are arranged in a regular repeating lattice.
> 
> **D** Liquid particles move freely in straight lines without colliding.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Explain Shape Change (Fluidity):**
> >    * Unlike solids, liquid particles are not held in fixed positions. They can slide over and past each other randomly, which allows the liquid to flow and take the shape of whatever container it is poured into.
> > 2. **Explain Fixed Volume (Non-compressibility):**
> >    * Even though they can move, the intermolecular forces between liquid particles are still relatively strong, keeping them close together and touching. Because there are no large gaps between the particles, the volume remains fixed.
> > 3. **Conclusion:**
> >    * Particles slide past each other (changing shape) but remain close together (fixed volume). The correct option is **B**.

> [!EXAMPLE]
> #### 📝 Worked Example 4: Definition and Features of a Lattice
> **Question:** What is the defining structural arrangement of particles in a crystalline solid?
> 
> **A** A random, disordered collection of moving atoms.
> 
> **B** Widely spaced molecules moving rapidly in all directions.
> 
> **C** A regular, repeating three-dimensional arrangement of particles.
> 
> **D** Particles sliding over one another in a fixed shape.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Recall the Definition of a Lattice:**
> >    * In chemistry, a lattice refers to the highly organized three-dimensional framework of particles (atoms, ions, or molecules) inside a crystalline solid.
> > 2. **Identify Key Features:**
> >    * This framework is **regular** (ordered rows) and **repeating** (extends throughout the crystal in 3D).
> > 3. **Conclusion:**
> >    * A lattice is a regular, repeating three-dimensional arrangement. The correct option is **C**.

> [!EXAMPLE]
> #### 📝 Worked Example 5: Motion of Fluid Particles
> **Question:** Which statement correctly describes the motion and collisions of particles in fluids (liquids and gases)?
> 
> **A** Particles vibrate in fixed positions and never collide.
> 
> **B** Particles move in an organized, regular pathway without touching.
> 
> **C** Particles are in continuous random motion, colliding with each other and the container walls.
> 
> **D** Particles only move when heat is applied.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Understand Fluid Motion:**
> >    * Fluids include both liquids and gases because their particles are free to move.
> > 2. **Describe Particle Motion:**
> >    * According to kinetic theory, particles in fluids are in constant, continuous random motion.
> >    * As they move, they frequently collide with other particles and bounce off in different directions, as well as colliding with the walls of their container.
> > 3. **Conclusion:**
> >    * Fluid particles move in continuous random motion and collide constantly. The correct option is **C**.
         `,
        keyPoints: [
            "A lattice is a regular repeating 3D arrangement in crystalline solids.",
            "Liquids and gases are fluids because their particles can move and flow freely.",
            "Fluid particles move randomly, colliding and bouncing in straight lines."
        ]
    },
    {
        id: "evidence-for-particles",
        title: "Evidence for Particles",
        type: "text",
        content: `
### 🧪 Experimental Evidence for Particles

We can observe evidence that matter is made of moving particles through experiments in the laboratory and observations in daily life.
### 🥼 Inside the Laboratory

> [!TIP]
> ### 💡 Experiment 1: Potassium Manganate(VII) in Water
> When a purple crystal of **potassium manganate(VII) ($KMnO_4$)** is placed at the bottom of a beaker of water, the purple color slowly spreads throughout the liquid.
> * **Explanation:** First, moving water particles collide with the crystal, dissolving it into individual potassium and manganate(VII) ions. These dissolved particles and water molecules then continue in constant random motion, colliding and mixing to diffuse the color evenly without stirring.
> 
> ${svgToken(potassiumManganateSvg)}

> [!TIP]
> ### 💡 Experiment 2: Bromine Gas Diffusion
> If a drop of liquid bromine is placed in a gas jar of air, a red-brown vapor spreads upwards to fill the jar.
> * **Explanation:** Even though bromine vapor is heavier than air, the constant random collision of air and bromine particles spreads the red-brown color upwards.
> 
> ${svgToken(bromineDiffusionSvg)}
### 🏡 Outside the Laboratory (Daily Life)

* **Spreading Smells:** Gas particles from food, perfume, or waste evaporate and diffuse through the air to reach your nose.
* **Sunlight Dust:** Seeing dust and smoke particles "dancing" in a beam of bright sunlight is evidence of air particles continuously colliding with them (Brownian motion).

> [!EXAMPLE]
> #### 📝 Worked Example 1: Potassium Manganate(VII) Dissolving
> **Question:** A purple crystal of potassium manganate(VII) is placed at the bottom of a beaker of water. After some time, the entire liquid turns purple without stirring. What is the explanation for this observation?
> 
> **A** Gravity pulls the purple color upwards.
> 
> **B** Water molecules and manganate(VII) ions are in constant random motion, colliding and mixing.
> 
> **C** Potassium manganate(VII) reacts chemically with water to produce a purple gas.
> 
> **D** Water molecules are static, but the crystal particles expand to fill the beaker.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Analyze the Observation:**
> >    * The crystal dissolves, and the purple color spreads evenly throughout the liquid. This is a physical process called diffusion.
> > 2. **Apply Kinetic Particle Theory:**
> >    * Particles in liquids (both water molecules and the dissolved potassium manganate(VII) ions) are in continuous, rapid random motion.
> >    * These moving particles constantly collide with each other, which naturally mixes them and spreads the purple color until a uniform mixture is formed.
> > 3. **Conclusion:**
> >    * The spreading of color is due to the random motion and collisions of water and crystal particles. The correct option is **B**.

> [!EXAMPLE]
> #### 📝 Worked Example 2: Bromine Gas Vaporization
> **Question:** Bromine vapor is heavier than air, yet when a drop of liquid bromine vaporizes at the bottom of a jar, the red-brown gas spreads upwards to fill the entire jar. Why?
> 
> **A** Bromine gas molecules have a lower density than air.
> 
> **B** The air molecules push the bromine particles upwards due to chemical reaction.
> 
> **C** Gas particles move randomly and collide, spreading the gas in all directions regardless of gravity.
> 
> **D** Air molecules are absent at the top of the jar.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the Physical Process:**
> >    * The spreading of gas particles to fill a space is called gas diffusion.
> > 2. **Explain the Movement Against Gravity:**
> >    * Even though bromine molecules are heavier than air molecules, gas particles possess high kinetic energy and move at very high speeds in all directions.
> >    * The constant random movement and collisions with air molecules distribute the bromine particles evenly throughout the entire jar, both upwards and downwards.
> > 3. **Conclusion:**
> >    * Gas diffusion spreads particles in all directions due to random motion and collisions. The correct option is **C**.

> [!EXAMPLE]
> #### 📝 Worked Example 3: Smoke Particles under a Microscope (Brownian Motion)
> **Question:** When smoke particles in air are observed under a microscope, they are seen to move in random, jerky, zigzag paths.
> 
> What causes this movement?
> 
> **A** Smoke particles colliding with each other.
> 
> **B** Convection currents in the air.
> 
> **C** Invisible, fast-moving air molecules colliding unevenly with smoke particles.
> 
> **D** Smoke particles reacting with oxygen.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Define Brownian Motion:**
> >    * The random, zigzag movement of microscopic visible particles suspended in a fluid (liquid or gas) is called **Brownian motion**.
> > 2. **Identify the Cause:**
> >    * Air is composed of invisible gas molecules (nitrogen, oxygen, etc.) moving at very high speeds.
> >    * These tiny, fast-moving air molecules continuously collide with the much larger smoke particles from all directions.
> >    * At any instant, the collisions are unequal on different sides of a smoke particle, causing it to be pushed in a random, jerky path.
> > 3. **Conclusion:**
> >    * The movement is caused by invisible air molecules colliding with the smoke particles. The correct option is **C**.

> [!EXAMPLE]
> #### 📝 Worked Example 4: Spreading Smells (Daily Life)
> **Question:** Why can you smell perfume across a room shortly after someone sprays it?
> 
> **A** The perfume particles are carried by sound waves.
> 
> **B** Perfume particles evaporate into gas and diffuse randomly through the air.
> 
> **C** The perfume particles are attracted to human skin electrically.
> 
> **D** Air molecules absorb the perfume and turn into it.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the state change:**
> >    * The sprayed perfume evaporates from a liquid droplets state into gas particles.
> > 2. **Explain the movement:**
> >    * Gas particles are free to move rapidly and randomly in all directions.
> >    * Due to continuous random motion and collisions with air molecules, the perfume particles spread out (diffuse) from the high concentration area (where sprayed) to the rest of the room.
> > 3. **Conclusion:**
> >    * Perfume particles evaporate and diffuse randomly through the air. The correct option is **B**.

> [!EXAMPLE]
> #### 📝 Worked Example 5: Dissolving Sugar in Water
> **Question:** When a spoonful of sugar dissolves in a glass of water, the volume of the liquid does not increase significantly. Why?
> 
> **A** Sugar molecules have no volume of their own.
> 
> **B** Sugar molecules fit into the intermolecular spaces between the water molecules.
> 
> **C** Sugar molecules react with water and disappear.
> 
> **D** Water molecules compress to make room for sugar.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Understand Liquid Structure:**
> >    * Water is a liquid. In a liquid, particles are close together but randomly arranged, leaving small gaps called **intermolecular spaces** between them.
> > 2. **Explain Dissolving:**
> >    * When sugar dissolves, it breaks down into individual sugar molecules.
> >    * These tiny sugar molecules slide into the existing intermolecular spaces between the water molecules instead of pushing them apart.
> > 3. **Conclusion:**
> >    * Sugar molecules occupy the spaces between water molecules, so the total volume remains almost unchanged. The correct option is **B**.
        `,
        keyPoints: [
            "Potassium manganate(VII) dissolving in water shows particles colliding and diffusing.",
            "Heavy bromine vapor diffusing upwards in air demonstrates random gas collisions.",
            "Perfume smells and dust dancing in sunlight are everyday evidence of moving particles."
        ]
    }
];
