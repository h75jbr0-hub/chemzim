import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Kinetics";
export const lessonNumber = 1;

export const theoryMarkdown = `
# Topic 11: Kinetics
This lesson covers reaction rates, orders of reaction, rate equations, continuous and initial rate experimental methods, reaction mechanisms, the rate-determining step, and the Arrhenius equation.
`;

const gasCollectionSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 460" class="w-full max-w-2xl mx-auto h-auto rounded-lg" style="background: linear-gradient(to bottom right, #070f1e, #0b1b35); border: 1px solid #1e293b; font-family: system-ui, -apple-system, sans-serif;">
  <text x="50%" y="28" text-anchor="middle" fill="#f8fafc" font-size="16" font-weight="bold">Experimental Gas Collection Techniques</text>
  
  <!-- Method 1: Gas Syringe -->
  <g transform="translate(15, 45)">
    <rect x="0" y="0" width="620" height="190" rx="8" fill="#38bdf8" fill-opacity="0.04" stroke="#38bdf8" stroke-opacity="0.2" />
    <text x="310" y="24" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">1. Gas Syringe Method (High Precision / All Gases)</text>
    
    <!-- Conical Flask -->
    <path d="M 60,160 L 90,90 L 90,70 L 120,70 L 120,90 L 150,160 Z" fill="none" stroke="#cbd5e1" stroke-width="2" />
    <path d="M 65,155 L 145,155 L 135,120 L 75,120 Z" fill="#38bdf8" fill-opacity="0.15" />
    <circle cx="90" cy="140" r="3" fill="#38bdf8" />
    <circle cx="120" cy="130" r="2" fill="#38bdf8" />
    <text x="105" y="180" fill="#cbd5e1" font-size="12" font-weight="bold" text-anchor="middle">Conical Flask</text>
    
    <!-- Cork & Tube -->
    <rect x="88" y="62" width="34" height="10" fill="#a16207" rx="2" />
    <path d="M 105,65 L 105,45 L 220,45 L 220,90 L 240,90" fill="none" stroke="#cbd5e1" stroke-width="2.5" />
    
    <!-- Gas Syringe -->
    <rect x="240" y="75" width="220" height="32" rx="4" fill="none" stroke="#cbd5e1" stroke-width="2" />
    <line x1="280" y1="75" x2="280" y2="82" stroke="#94a3b8" stroke-width="1.5" />
    <line x1="320" y1="75" x2="320" y2="82" stroke="#94a3b8" stroke-width="1.5" />
    <line x1="360" y1="75" x2="360" y2="82" stroke="#94a3b8" stroke-width="1.5" />
    <line x1="400" y1="75" x2="400" y2="82" stroke="#94a3b8" stroke-width="1.5" />
    <rect x="340" y="80" width="180" height="22" rx="2" fill="#3b82f6" fill-opacity="0.3" stroke="#3b82f6" stroke-width="1.5" />
    <line x1="520" y1="91" x2="570" y2="91" stroke="#3b82f6" stroke-width="4" />
    <line x1="570" y1="75" x2="570" y2="107" stroke="#3b82f6" stroke-width="4" />
    <rect x="241" y="77" width="98" height="28" fill="#10b981" fill-opacity="0.2" />
    <text x="290" y="95" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">Collected Gas</text>
    <text x="350" y="125" fill="#f8fafc" font-size="12" font-weight="bold" text-anchor="middle">Graduated Gas Syringe (cm³)</text>
  </g>

  <!-- Method 2: Collection Over Water -->
  <g transform="translate(15, 250)">
    <rect x="0" y="0" width="620" height="195" rx="8" fill="#10b981" fill-opacity="0.04" stroke="#10b981" stroke-opacity="0.2" />
    <text x="310" y="24" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">2. Collection Over Water (Low-Solubility Gases Only)</text>
    
    <!-- Conical Flask -->
    <path d="M 40,165 L 70,95 L 70,75 L 100,75 L 100,95 L 130,165 Z" fill="none" stroke="#cbd5e1" stroke-width="2" />
    <path d="M 45,160 L 125,160 L 115,125 L 55,125 Z" fill="#38bdf8" fill-opacity="0.15" />
    <rect x="68" y="67" width="34" height="10" fill="#a16207" rx="2" />
    
    <!-- Delivery Tube -->
    <path d="M 85,70 L 85,48 L 220,48 L 220,165 L 290,165 L 290,145" fill="none" stroke="#cbd5e1" stroke-width="2.5" />
    
    <!-- Water Trough -->
    <rect x="230" y="125" width="220" height="45" rx="4" fill="none" stroke="#3b82f6" stroke-width="2" />
    <rect x="231" y="135" width="218" height="34" fill="#3b82f6" fill-opacity="0.25" />
    <text x="340" y="183" fill="#cbd5e1" font-size="12" font-weight="bold" text-anchor="middle">Water Trough</text>
    
    <!-- Inverted Cylinder -->
    <rect x="270" y="45" width="45" height="105" fill="none" stroke="#cbd5e1" stroke-width="2" />
    <rect x="271" y="46" width="43" height="45" fill="#10b981" fill-opacity="0.25" />
    <rect x="271" y="91" width="43" height="58" fill="#3b82f6" fill-opacity="0.35" />
    <circle cx="292" cy="105" r="3" fill="#f8fafc" />
    <circle cx="288" cy="120" r="4" fill="#f8fafc" />
    <text x="292" y="36" fill="#f8fafc" font-size="12" font-weight="bold" text-anchor="middle">Inverted Cylinder</text>
    
    <!-- Warning Badge -->
    <rect x="470" y="55" width="135" height="90" rx="6" fill="#ef4444" fill-opacity="0.1" stroke="#ef4444" stroke-opacity="0.3" />
    <text x="537" y="75" fill="#f87171" font-size="11" font-weight="bold" text-anchor="middle">⚠️ Limitation</text>
    <text x="537" y="93" fill="#cbd5e1" font-size="10" text-anchor="middle">Unsuitable for soluble</text>
    <text x="537" y="108" fill="#cbd5e1" font-size="10" text-anchor="middle">gases (SO₂, HCl, NH₃)</text>
    <text x="537" y="125" fill="#cbd5e1" font-size="10" text-anchor="middle">as gas dissolves in H₂O</text>
  </g>
</svg>`;

const colorimeterSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 250" class="w-full max-w-2xl mx-auto h-auto rounded-lg" style="background: linear-gradient(to bottom right, #070f1e, #0b1b35); border: 1px solid #1e293b; font-family: system-ui, -apple-system, sans-serif;">
  <text x="50%" y="28" text-anchor="middle" fill="#f8fafc" font-size="15" font-weight="bold">Colorimeter Optical Path & Components</text>
  <defs>
    <linearGradient id="rainbow-c" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#ef4444" />
      <stop offset="25%" stop-color="#f97316" />
      <stop offset="50%" stop-color="#eab308" />
      <stop offset="75%" stop-color="#22c55e" />
      <stop offset="100%" stop-color="#3b82f6" />
    </linearGradient>
  </defs>

  <!-- Light Beam Lines -->
  <line x1="90" y1="120" x2="180" y2="120" stroke="#f1f5f9" stroke-width="4.5" />
  <polygon points="220,120 320,95 320,145" fill="url(#rainbow-c)" opacity="0.45" />
  <line x1="220" y1="120" x2="340" y2="120" stroke="#10b981" stroke-width="4" />
  <line x1="380" y1="120" x2="490" y2="120" stroke="#10b981" stroke-width="2.5" stroke-dasharray="3 2" />
  <line x1="530" y1="120" x2="600" y2="120" stroke="#38bdf8" stroke-width="2.5" />

  <!-- Component 1: Light Source -->
  <g transform="translate(30, 60)">
    <circle cx="30" cy="60" r="22" fill="#eab308" fill-opacity="0.2" />
    <path d="M 22,72 C 14,64 14,52 22,44 C 30,36 38,36 46,44 C 54,52 54,64 46,72 L 42,76 L 42,80 L 34,80 L 34,76 Z" fill="none" stroke="#eab308" stroke-width="2.5" />
    <text x="30" y="115" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">1. Light Source</text>
    <text x="30" y="132" fill="#cbd5e1" font-size="11" text-anchor="middle">White light</text>
  </g>

  <!-- Component 2: Filter / Prism -->
  <g transform="translate(160, 60)">
    <polygon points="40,30 10,90 70,90" fill="none" stroke="#38bdf8" stroke-width="2.5" />
    <text x="40" y="115" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">2. Filter / Prism</text>
    <text x="40" y="132" fill="#cbd5e1" font-size="11" text-anchor="middle">Selects λ</text>
  </g>

  <!-- Component 3: Cuvette -->
  <g transform="translate(320, 60)">
    <rect x="20" y="30" width="40" height="70" rx="3" fill="none" stroke="#cbd5e1" stroke-width="2.5" />
    <rect x="23" y="42" width="34" height="56" fill="#f97316" fill-opacity="0.3" />
    <text x="40" y="115" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">3. Cuvette</text>
    <text x="40" y="132" fill="#cbd5e1" font-size="11" text-anchor="middle">Sample solution</text>
    <text x="5" y="95" fill="#34d399" font-size="12" font-weight="bold">I₀</text>
    <text x="68" y="95" fill="#34d399" font-size="12" font-weight="bold">I</text>
  </g>

  <!-- Component 4: Detector -->
  <g transform="translate(470, 60)">
    <rect x="15" y="32" width="55" height="56" rx="5" fill="#1e293b" stroke="#475569" stroke-width="2.5" />
    <circle cx="42" cy="60" r="12" fill="#38bdf8" fill-opacity="0.3" stroke="#38bdf8" stroke-width="2" />
    <text x="42" y="115" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">4. Detector</text>
    <text x="42" y="132" fill="#cbd5e1" font-size="11" text-anchor="middle">Measures I</text>
  </g>

  <!-- Component 5: Display -->
  <g transform="translate(600, 60)">
    <rect x="10" y="35" width="95" height="50" rx="6" fill="#020617" stroke="#334155" stroke-width="2.5" />
    <text x="57" y="68" fill="#34d399" font-size="20" font-family="monospace" font-weight="bold" text-anchor="middle">0.65</text>
    <text x="57" y="115" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">5. Display</text>
    <text x="57" y="132" fill="#cbd5e1" font-size="11" text-anchor="middle">Absorbance</text>
  </g>
</svg>`;

const massLossSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 310" class="w-full max-w-2xl mx-auto h-auto rounded-lg" style="background: linear-gradient(to bottom right, #070f1e, #0b1b35); border: 1px solid #1e293b; font-family: system-ui, -apple-system, sans-serif;">
  <text x="50%" y="28" text-anchor="middle" fill="#f8fafc" font-size="16" font-weight="bold">Continuous Mass Loss Measurement Setup</text>

  <!-- Left Note: Cotton Wool Plug -->
  <g transform="translate(20, 60)">
    <rect x="0" y="0" width="180" height="95" rx="6" fill="#38bdf8" fill-opacity="0.05" stroke="#38bdf8" stroke-opacity="0.25" />
    <text x="90" y="24" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">Cotton Wool Plug</text>
    <text x="90" y="45" fill="#cbd5e1" font-size="11" text-anchor="middle">Allows gas (CO₂) to</text>
    <text x="90" y="62" fill="#cbd5e1" font-size="11" text-anchor="middle">escape freely while</text>
    <text x="90" y="79" fill="#cbd5e1" font-size="11" text-anchor="middle">stopping acid spray</text>
    <line x1="180" y1="48" x2="265" y2="105" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="3 3" />
  </g>

  <!-- Central Setup: Flask + Balance -->
  <g transform="translate(220, 45)">
    <!-- Flask -->
    <path d="M 75,200 L 105,100 L 105,75 L 135,75 L 135,100 L 165,200 Z" fill="none" stroke="#cbd5e1" stroke-width="2.5" />
    <path d="M 80,195 L 160,195 L 150,155 L 90,155 Z" fill="#38bdf8" fill-opacity="0.15" />
    <circle cx="105" cy="180" r="3" fill="#38bdf8" />
    <circle cx="135" cy="170" r="2" fill="#38bdf8" />
    <text x="120" y="145" fill="#cbd5e1" font-size="11" text-anchor="middle">Reaction Mixture</text>

    <!-- Cotton Plug inside Neck -->
    <path d="M 100,75 Q 90,65 105,60 Q 120,55 135,60 Q 148,65 138,75 Z" fill="#e2e8f0" fill-opacity="0.9" stroke="#cbd5e1" stroke-width="1" />

    <!-- Gas Escaping -->
    <path d="M 115,50 Q 105,30 115,12" fill="none" stroke="#f59e0b" stroke-dasharray="3 3" stroke-width="2" />
    <path d="M 125,50 Q 135,30 125,12" fill="none" stroke="#f59e0b" stroke-dasharray="3 3" stroke-width="2" />

    <!-- Digital Balance -->
    <rect x="20" y="200" width="200" height="45" rx="6" fill="#1e293b" stroke="#475569" stroke-width="2" />
    <rect x="60" y="210" width="120" height="25" rx="3" fill="#020617" stroke="#475569" />
    <text x="120" y="228" fill="#34d399" font-size="16" font-family="monospace" text-anchor="middle" font-weight="bold">245.82 g</text>
  </g>

  <!-- Right Callout: Gas Density Limit -->
  <g transform="translate(470, 60)">
    <rect x="0" y="0" width="190" height="180" rx="8" fill="#ef4444" fill-opacity="0.05" stroke="#ef4444" stroke-opacity="0.3" />
    <text x="95" y="24" fill="#f87171" font-size="13" font-weight="bold" text-anchor="middle">⚠️ Gas Density Rules</text>
    <text x="15" y="52" fill="#34d399" font-size="12" font-weight="bold">✓ Suitable For:</text>
    <text x="15" y="70" fill="#cbd5e1" font-size="11">Heavy gases like CO₂</text>
    <text x="15" y="87" fill="#cbd5e1" font-size="11">(Mᵣ = 44.0 g mol⁻¹)</text>
    
    <text x="15" y="118" fill="#f87171" font-size="12" font-weight="bold">✗ Unsuitable For:</text>
    <text x="15" y="136" fill="#cbd5e1" font-size="11">Light H₂ gas (Mᵣ = 2.0)</text>
    <text x="15" y="153" fill="#cbd5e1" font-size="11">Mass change is too small!</text>
  </g>
</svg>`;

const disappearingCrossSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 260" class="w-full max-w-2xl mx-auto h-auto rounded-lg" style="background: linear-gradient(to bottom right, #070f1e, #0b1b35); border: 1px solid #1e293b; font-family: system-ui, -apple-system, sans-serif;">
  <text x="50%" y="28" text-anchor="middle" fill="#f8fafc" font-size="16" font-weight="bold">Disappearing Cross Method (Initial Rate Setup)</text>

  <!-- Setup 1: t = 0 -->
  <g transform="translate(40, 45)">
    <rect x="0" y="0" width="280" height="195" rx="8" fill="#38bdf8" fill-opacity="0.04" stroke="#38bdf8" stroke-opacity="0.2" />
    <text x="140" y="25" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">Start of Reaction (t = 0)</text>

    <!-- Cardboard with Cross -->
    <rect x="40" y="150" width="200" height="30" rx="3" fill="#cbd5e1" stroke="#94a3b8" stroke-width="1.5" />
    <line x1="125" y1="156" x2="155" y2="174" stroke="#000" stroke-width="4.5" stroke-linecap="round" />
    <line x1="155" y1="156" x2="125" y2="174" stroke="#000" stroke-width="4.5" stroke-linecap="round" />

    <!-- Flask -->
    <path d="M 90,155 L 115,85 L 115,65 L 165,65 L 165,85 L 190,155 Z" fill="none" stroke="#f8fafc" stroke-width="2.5" />
    <path d="M 95,150 L 185,150 L 175,115 L 105,115 Z" fill="#38bdf8" fill-opacity="0.08" />

    <text x="140" y="190" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">✓ Cross is clearly visible</text>
  </g>

  <!-- Setup 2: t = end -->
  <g transform="translate(360, 45)">
    <rect x="0" y="0" width="280" height="195" rx="8" fill="#eab308" fill-opacity="0.04" stroke="#eab308" stroke-opacity="0.2" />
    <text x="140" y="25" text-anchor="middle" fill="#eab308" font-size="14" font-weight="bold">End of Reaction (t = t_end)</text>

    <!-- Cardboard with Cross -->
    <rect x="40" y="150" width="200" height="30" rx="3" fill="#cbd5e1" stroke="#94a3b8" stroke-width="1.5" />

    <!-- Flask with Precipitate -->
    <path d="M 90,155 L 115,85 L 115,65 L 165,65 L 165,85 L 190,155 Z" fill="none" stroke="#f8fafc" stroke-width="2.5" />
    <path d="M 92,153 L 188,153 L 175,115 L 105,115 Z" fill="#eab308" fill-opacity="0.8" />
    <circle cx="120" cy="140" r="3" fill="#fef08a" />
    <circle cx="140" cy="130" r="2.5" fill="#fef08a" />
    <circle cx="160" cy="145" r="3" fill="#fef08a" />

    <text x="140" y="190" fill="#f87171" font-size="12" font-weight="bold" text-anchor="middle">✗ Cross is completely obscured</text>
  </g>
</svg>`;

const zeroOrderSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 220" class="w-full max-w-2xl mx-auto h-auto rounded-lg" style="background: linear-gradient(to bottom right, #070f1e, #0b1b35); border: 1px solid #1e293b; font-family: system-ui, -apple-system, sans-serif;">
  <defs>
    <marker id="arrow-z" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#94a3b8" />
    </marker>
  </defs>
  <rect x="10" y="10" width="680" height="200" rx="10" fill="#ef4444" fill-opacity="0.05" stroke="#ef4444" stroke-opacity="0.25" />
  <rect x="230" y="22" width="240" height="32" rx="6" fill="#ef4444" fill-opacity="0.2" stroke="#ef4444" stroke-opacity="0.4" />
  <text x="350" y="43" text-anchor="middle" fill="#f87171" font-size="15" font-weight="bold">Zero Order (Rate = k)</text>

  <!-- Graph 1: Concentration vs Time -->
  <g transform="translate(15, 10)">
    <text x="160" y="65" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">Concentration vs Time</text>
    <line x1="50" y1="175" x2="270" y2="175" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow-z)" />
    <line x1="50" y1="175" x2="50" y2="80" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow-z)" />
    <text x="282" y="180" fill="#cbd5e1" font-size="13" font-weight="bold">Time</text>
    <text x="50" y="70" fill="#cbd5e1" font-size="13" font-weight="bold" text-anchor="middle">[A]</text>
    <line x1="50" y1="90" x2="250" y2="175" stroke="#ef4444" stroke-width="3.5" stroke-linecap="round" />
  </g>

  <!-- Graph 2: Rate vs Concentration -->
  <g transform="translate(365, 10)">
    <text x="160" y="65" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">Rate vs Concentration</text>
    <line x1="50" y1="175" x2="270" y2="175" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow-z)" />
    <line x1="50" y1="175" x2="50" y2="80" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow-z)" />
    <text x="282" y="180" fill="#cbd5e1" font-size="13" font-weight="bold">[A]</text>
    <text x="50" y="70" fill="#cbd5e1" font-size="13" font-weight="bold" text-anchor="middle">Rate</text>
    <line x1="50" y1="115" x2="250" y2="115" stroke="#ef4444" stroke-width="3.5" stroke-linecap="round" />
  </g>
</svg>`;

const firstOrderSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 220" class="w-full max-w-2xl mx-auto h-auto rounded-lg" style="background: linear-gradient(to bottom right, #070f1e, #0b1b35); border: 1px solid #1e293b; font-family: system-ui, -apple-system, sans-serif;">
  <defs>
    <marker id="arrow-f" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#94a3b8" />
    </marker>
  </defs>
  <rect x="10" y="10" width="680" height="200" rx="10" fill="#10b981" fill-opacity="0.05" stroke="#10b981" stroke-opacity="0.25" />
  <rect x="230" y="22" width="240" height="32" rx="6" fill="#10b981" fill-opacity="0.2" stroke="#10b981" stroke-opacity="0.4" />
  <text x="350" y="43" text-anchor="middle" fill="#34d399" font-size="15" font-weight="bold">First Order (Rate = k[A])</text>

  <!-- Graph 1: Concentration vs Time -->
  <g transform="translate(15, 10)">
    <text x="160" y="65" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">Concentration vs Time</text>
    <line x1="50" y1="175" x2="270" y2="175" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow-f)" />
    <line x1="50" y1="175" x2="50" y2="80" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow-f)" />
    <text x="282" y="180" fill="#cbd5e1" font-size="13" font-weight="bold">Time</text>
    <text x="50" y="70" fill="#cbd5e1" font-size="13" font-weight="bold" text-anchor="middle">[A]</text>
    <path d="M 50,90 Q 110,170 250,173" fill="none" stroke="#10b981" stroke-width="3.5" stroke-linecap="round" />
  </g>

  <!-- Graph 2: Rate vs Concentration -->
  <g transform="translate(365, 10)">
    <text x="160" y="65" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">Rate vs Concentration</text>
    <line x1="50" y1="175" x2="270" y2="175" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow-f)" />
    <line x1="50" y1="175" x2="50" y2="80" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow-f)" />
    <text x="282" y="180" fill="#cbd5e1" font-size="13" font-weight="bold">[A]</text>
    <text x="50" y="70" fill="#cbd5e1" font-size="13" font-weight="bold" text-anchor="middle">Rate</text>
    <line x1="50" y1="175" x2="250" y2="90" stroke="#10b981" stroke-width="3.5" stroke-linecap="round" />
  </g>
</svg>`;

const secondOrderSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 220" class="w-full max-w-2xl mx-auto h-auto rounded-lg" style="background: linear-gradient(to bottom right, #070f1e, #0b1b35); border: 1px solid #1e293b; font-family: system-ui, -apple-system, sans-serif;">
  <defs>
    <marker id="arrow-s" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#94a3b8" />
    </marker>
  </defs>
  <rect x="10" y="10" width="680" height="200" rx="10" fill="#3b82f6" fill-opacity="0.05" stroke="#3b82f6" stroke-opacity="0.25" />
  <rect x="230" y="22" width="240" height="32" rx="6" fill="#3b82f6" fill-opacity="0.2" stroke="#3b82f6" stroke-opacity="0.4" />
  <text x="350" y="43" text-anchor="middle" fill="#60a5fa" font-size="15" font-weight="bold">Second Order (Rate = k[A]²)</text>

  <!-- Graph 1: Concentration vs Time -->
  <g transform="translate(15, 10)">
    <text x="160" y="65" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">Concentration vs Time</text>
    <line x1="50" y1="175" x2="270" y2="175" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow-s)" />
    <line x1="50" y1="175" x2="50" y2="80" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow-s)" />
    <text x="282" y="180" fill="#cbd5e1" font-size="13" font-weight="bold">Time</text>
    <text x="50" y="70" fill="#cbd5e1" font-size="13" font-weight="bold" text-anchor="middle">[A]</text>
    <path d="M 50,90 Q 75,165 250,173" fill="none" stroke="#3b82f6" stroke-width="3.5" stroke-linecap="round" />
  </g>

  <!-- Graph 2: Rate vs Concentration -->
  <g transform="translate(365, 10)">
    <text x="160" y="65" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">Rate vs Concentration</text>
    <line x1="50" y1="175" x2="270" y2="175" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow-s)" />
    <line x1="50" y1="175" x2="50" y2="80" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow-s)" />
    <text x="282" y="180" fill="#cbd5e1" font-size="13" font-weight="bold">[A]</text>
    <text x="50" y="70" fill="#cbd5e1" font-size="13" font-weight="bold" text-anchor="middle">Rate</text>
    <path d="M 50,175 Q 130,170 250,90" fill="none" stroke="#3b82f6" stroke-width="3.5" stroke-linecap="round" />
  </g>
</svg>`;

const activationEnergyProfileSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 300" class="w-full max-w-2xl mx-auto h-auto rounded-lg" style="background: linear-gradient(to bottom right, #070f1e, #0b1b35); border: 1px solid #1e293b; font-family: system-ui, -apple-system, sans-serif;">
  <defs>
    <marker id="profilearrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#94a3b8" />
    </marker>
  </defs>
  <text x="50%" y="26" text-anchor="middle" fill="#f8fafc" font-size="15" font-weight="bold">Reaction Energy Profile: Activation Energy &amp; Enthalpy Change</text>
  
  <g transform="translate(35, 15)">
    <!-- Axes -->
    <line x1="60" y1="230" x2="60" y2="35" stroke="#cbd5e1" stroke-width="2.5" marker-end="url(#profilearrow)" />
    <line x1="60" y1="230" x2="570" y2="230" stroke="#cbd5e1" stroke-width="2.5" marker-end="url(#profilearrow)" />
    
    <text x="60" y="22" fill="#cbd5e1" font-size="12" font-weight="bold" text-anchor="middle">Energy</text>
    <text x="585" y="234" fill="#cbd5e1" font-size="12" font-weight="bold">Extent of reaction</text>

    <!-- Dashed Reference Lines -->
    <line x1="60" y1="150" x2="400" y2="150" stroke="#475569" stroke-width="1.5" stroke-dasharray="4 4" />
    <line x1="60" y1="200" x2="530" y2="200" stroke="#475569" stroke-width="1.5" stroke-dasharray="4 4" />

    <!-- Uncatalyzed Path Curve -->
    <path d="M 60,150 L 120,150 C 180,150 240,60 300,60 C 360,60 410,200 480,200 L 530,200" fill="none" stroke="#38bdf8" stroke-width="3.5" stroke-linecap="round" />

    <!-- Catalyzed Path Curve -->
    <path d="M 60,150 L 120,150 C 180,150 240,95 300,95 C 360,95 410,200 480,200 L 530,200" fill="none" stroke="#10b981" stroke-width="3" stroke-dasharray="6 4" stroke-linecap="round" />

    <!-- Labels for Reactants and Products -->
    <text x="95" y="136" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">Reactants</text>
    <text x="505" y="186" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">Products</text>
    <text x="300" y="45" fill="#f8fafc" font-size="12" font-weight="bold" text-anchor="middle">Transition state</text>
    <circle cx="300" cy="60" r="4.5" fill="#ef4444" />
    <circle cx="300" cy="95" r="4.5" fill="#10b981" />

    <!-- Ea Uncatalyzed Arrow -->
    <line x1="210" y1="150" x2="210" y2="65" stroke="#ef4444" stroke-width="2" marker-end="url(#profilearrow)" />
    <text x="200" y="110" fill="#ef4444" font-size="12" font-weight="bold" text-anchor="end">Ea (uncatalyzed)</text>

    <!-- Ea Catalyzed Arrow -->
    <line x1="255" y1="150" x2="255" y2="100" stroke="#10b981" stroke-width="2" marker-end="url(#profilearrow)" />
    <text x="265" y="130" fill="#10b981" font-size="12" font-weight="bold">Ea (cat)</text>

    <!-- Delta H Arrow -->
    <line x1="430" y1="150" x2="430" y2="195" stroke="#f59e0b" stroke-width="2" marker-end="url(#profilearrow)" />
    <text x="445" y="178" fill="#f59e0b" font-size="13" font-weight="bold">ΔH</text>

    <!-- Legend -->
    <rect x="375" y="245" width="190" height="24" rx="4" fill="#070f1e" stroke="#1e293b" stroke-width="1" />
    <line x1="385" y1="257" x2="410" y2="257" stroke="#38bdf8" stroke-width="3" />
    <text x="415" y="261" fill="#94a3b8" font-size="10" font-weight="bold">Uncatalyzed</text>
    <line x1="480" y1="257" x2="505" y2="257" stroke="#10b981" stroke-width="2.5" stroke-dasharray="4 3" />
    <text x="510" y="261" fill="#94a3b8" font-size="10" font-weight="bold">Catalyzed</text>
  </g>
</svg>`;

const autocatalysisCurveSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 280" class="w-full max-w-2xl mx-auto h-auto rounded-lg" style="background: linear-gradient(to bottom right, #070f1e, #0b1b35); border: 1px solid #1e293b; font-family: system-ui, -apple-system, sans-serif;">
  <defs>
    <marker id="axisarrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#94a3b8" />
    </marker>
    <marker id="labelarrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
      <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#38bdf8" />
    </marker>
  </defs>
  <text x="50%" y="26" text-anchor="middle" fill="#f8fafc" font-size="15" font-weight="bold">Autocatalysis Rate Curve: Reactant Concentration vs. Time</text>
  
  <g transform="translate(35, 15)">
    <!-- Axes -->
    <line x1="60" y1="210" x2="60" y2="35" stroke="#cbd5e1" stroke-width="2.5" marker-end="url(#axisarrow)" />
    <line x1="60" y1="210" x2="570" y2="210" stroke="#cbd5e1" stroke-width="2.5" marker-end="url(#axisarrow)" />
    
    <text x="60" y="22" fill="#cbd5e1" font-size="12" font-weight="bold" text-anchor="middle">[Reactant]</text>
    <text x="585" y="214" fill="#cbd5e1" font-size="12" font-weight="bold">Time</text>

    <!-- Curve -->
    <path d="M 60,55 L 120,55 C 180,55 190,75 230,120 C 270,165 310,200 450,200 L 530,200" fill="none" stroke="#38bdf8" stroke-width="3.5" stroke-linecap="round" />

    <!-- Labels & Arrows -->
    <rect x="135" y="38" width="195" height="22" rx="4" fill="#0b1b35" stroke="#38bdf8" stroke-width="1" />
    <text x="232" y="53" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">1. Starts slow (No Mn²⁺ catalyst)</text>

    <rect x="300" y="90" width="210" height="22" rx="4" fill="#0b1b35" stroke="#10b981" stroke-width="1" />
    <text x="405" y="105" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle">2. Rapid acceleration (Mn²⁺ forms)</text>

    <rect x="360" y="165" width="200" height="22" rx="4" fill="#0b1b35" stroke="#f59e0b" stroke-width="1" />
    <text x="460" y="180" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">3. Slows down (Reactants depleted)</text>
  </g>
</svg>`;

const halfLifeSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 280" class="w-full max-w-2xl mx-auto h-auto rounded-lg" style="background: linear-gradient(to bottom right, #070f1e, #0b1b35); border: 1px solid #1e293b; font-family: system-ui, -apple-system, sans-serif;">
  <defs>
    <marker id="halflifearrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#94a3b8" />
    </marker>
  </defs>
  <text x="50%" y="28" text-anchor="middle" fill="#f8fafc" font-size="15" font-weight="bold">First-Order Reaction: Constant Half-Life (t₁/₂)</text>

  <g transform="translate(35, 20)">
    <!-- Axes -->
    <line x1="80" y1="210" x2="80" y2="30" stroke="#cbd5e1" stroke-width="2" marker-end="url(#halflifearrow)" />
    <line x1="80" y1="210" x2="550" y2="210" stroke="#cbd5e1" stroke-width="2" marker-end="url(#halflifearrow)" />
    <text x="80" y="20" fill="#cbd5e1" font-size="12" font-weight="bold" text-anchor="middle">[A] / mol dm⁻³</text>
    <text x="565" y="214" fill="#cbd5e1" font-size="13" font-weight="bold">Time / s</text>

    <!-- Grid lines -->
    <line x1="80" y1="50" x2="540" y2="50" stroke="#1e293b" stroke-width="1" stroke-dasharray="2 2" />
    <line x1="80" y1="95" x2="540" y2="95" stroke="#1e293b" stroke-width="1" stroke-dasharray="2 2" />
    <line x1="80" y1="140" x2="540" y2="140" stroke="#1e293b" stroke-width="1" stroke-dasharray="2 2" />
    <line x1="80" y1="185" x2="540" y2="185" stroke="#1e293b" stroke-width="1" stroke-dasharray="2 2" />

    <!-- Y-axis scale -->
    <text x="70" y="54" fill="#cbd5e1" font-size="11" font-weight="bold" text-anchor="end">120</text>
    <text x="70" y="99" fill="#cbd5e1" font-size="11" font-weight="bold" text-anchor="end">60</text>
    <text x="70" y="144" fill="#cbd5e1" font-size="11" font-weight="bold" text-anchor="end">30</text>
    <text x="70" y="189" fill="#cbd5e1" font-size="11" font-weight="bold" text-anchor="end">15</text>

    <!-- Curve: Exponential decay passing EXACTLY through (80,50), (230,95), (380,140), (530,185) -->
    <path d="M 80,50 C 135,65 180,80 230,95 C 280,110 330,125 380,140 C 430,155 480,170 530,185 C 555,192 575,198 595,202" fill="none" stroke="#10b981" stroke-width="3.5" stroke-linecap="round" />

    <!-- Half-life 1 indicators -->
    <line x1="230" y1="95" x2="230" y2="210" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4 4" />
    <line x1="80" y1="95" x2="230" y2="95" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4 4" />
    <text x="230" y="228" fill="#f87171" font-size="12" font-weight="bold" text-anchor="middle">100</text>

    <!-- Half-life 2 indicators -->
    <line x1="380" y1="140" x2="380" y2="210" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4 4" />
    <line x1="80" y1="140" x2="380" y2="140" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4 4" />
    <text x="380" y="228" fill="#f87171" font-size="12" font-weight="bold" text-anchor="middle">200</text>

    <!-- Half-life 3 indicators -->
    <line x1="530" y1="185" x2="530" y2="210" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4 4" />
    <line x1="80" y1="185" x2="530" y2="185" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4 4" />
    <text x="530" y="228" fill="#f87171" font-size="12" font-weight="bold" text-anchor="middle">300</text>

    <!-- Data points -->
    <circle cx="80" cy="50" r="5" fill="#10b981" stroke="#070f1e" stroke-width="1.5" />
    <circle cx="230" cy="95" r="5" fill="#ef4444" stroke="#070f1e" stroke-width="1.5" />
    <circle cx="380" cy="140" r="5" fill="#ef4444" stroke="#070f1e" stroke-width="1.5" />
    <circle cx="530" cy="185" r="5" fill="#ef4444" stroke="#070f1e" stroke-width="1.5" />

    <!-- Constant t1/2 badge -->
    <rect x="365" y="80" width="165" height="26" rx="5" fill="#0b1b35" stroke="#38bdf8" stroke-width="1.5" />
    <text x="447" y="97" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">Constant t₁/₂ = 100 s</text>
  </g>
</svg>`;

const compoundPDecompositionSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 310" class="w-full max-w-2xl mx-auto h-auto rounded-lg" style="background: linear-gradient(to bottom right, #070f1e, #0b1b35); border: 1px solid #1e293b; font-family: system-ui, -apple-system, sans-serif;">
  <defs>
    <marker id="parrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#94a3b8" />
    </marker>
  </defs>
  <text x="50%" y="28" text-anchor="middle" fill="#f8fafc" font-size="15" font-weight="bold">Decomposition Curve of Compound P</text>

  <g transform="translate(35, 20)">
    <!-- Axes -->
    <line x1="80" y1="230" x2="80" y2="35" stroke="#cbd5e1" stroke-width="2" marker-end="url(#parrow)" />
    <line x1="80" y1="230" x2="570" y2="230" stroke="#cbd5e1" stroke-width="2" marker-end="url(#parrow)" />
    <text x="80" y="22" fill="#cbd5e1" font-size="12" font-weight="bold" text-anchor="middle">[P] / arbitrary units</text>
    <text x="585" y="234" fill="#cbd5e1" font-size="13" font-weight="bold">Time / s</text>

    <!-- Horizontal Grid & Y-scale -->
    <line x1="80" y1="50" x2="550" y2="50" stroke="#1e293b" stroke-width="1" stroke-dasharray="2 2" />
    <line x1="80" y1="120" x2="550" y2="120" stroke="#1e293b" stroke-width="1" stroke-dasharray="2 2" />
    <line x1="80" y1="155" x2="550" y2="155" stroke="#1e293b" stroke-width="1" stroke-dasharray="2 2" />
    <line x1="80" y1="172" x2="550" y2="172" stroke="#1e293b" stroke-width="1" stroke-dasharray="2 2" />

    <text x="70" y="54" fill="#cbd5e1" font-size="11" font-weight="bold" text-anchor="end">5.80</text>
    <text x="70" y="124" fill="#cbd5e1" font-size="11" font-weight="bold" text-anchor="end">2.90</text>
    <text x="70" y="159" fill="#cbd5e1" font-size="11" font-weight="bold" text-anchor="end">1.45</text>
    <text x="70" y="176" fill="#cbd5e1" font-size="11" font-weight="bold" text-anchor="end">0.72</text>

    <!-- Curve: Smooth Exponential Decay -->
    <path d="M 80,50 C 135,78 180,102 230,120 C 280,138 330,148 380,155 C 430,162 480,168 530,172 C 555,174 575,176 595,177" fill="none" stroke="#38bdf8" stroke-width="3.5" stroke-linecap="round" />

    <!-- Dashed projection lines -->
    <line x1="230" y1="120" x2="230" y2="230" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4 4" />
    <line x1="80" y1="120" x2="230" y2="120" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4 4" />
    <text x="230" y="248" fill="#f87171" font-size="12" font-weight="bold" text-anchor="middle">350</text>

    <line x1="380" y1="155" x2="380" y2="230" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4 4" />
    <line x1="80" y1="155" x2="380" y2="155" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4 4" />
    <text x="380" y="248" fill="#f87171" font-size="12" font-weight="bold" text-anchor="middle">700</text>

    <line x1="530" y1="172" x2="530" y2="230" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4 4" />
    <line x1="80" y1="172" x2="530" y2="172" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4 4" />
    <text x="530" y="248" fill="#f87171" font-size="12" font-weight="bold" text-anchor="middle">1050</text>

    <!-- Data points -->
    <circle cx="80" cy="50" r="5" fill="#38bdf8" stroke="#070f1e" stroke-width="1.5" />
    <circle cx="230" cy="120" r="5" fill="#ef4444" stroke="#070f1e" stroke-width="1.5" />
    <circle cx="380" cy="155" r="5" fill="#ef4444" stroke="#070f1e" stroke-width="1.5" />
    <circle cx="530" cy="172" r="5" fill="#ef4444" stroke="#070f1e" stroke-width="1.5" />

    <!-- Value Labels near points -->
    <text x="95" y="45" fill="#f8fafc" font-size="11" font-weight="bold">(0, 5.80)</text>
    <text x="240" y="112" fill="#f8fafc" font-size="11" font-weight="bold">(350, 2.90)</text>
    <text x="390" y="148" fill="#f8fafc" font-size="11" font-weight="bold">(700, 1.45)</text>
    <text x="540" y="166" fill="#f8fafc" font-size="11" font-weight="bold">(1050, 0.72)</text>
  </g>
</svg>`;

const sn2ProfileSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 500" class="w-full max-w-3xl mx-auto h-auto rounded-lg" style="background: linear-gradient(to bottom right, #070f1e, #0b1b35); border: 1px solid #1e293b; font-family: system-ui, -apple-system, sans-serif;">
  <defs>
    <marker id="sn2arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#94a3b8" />
    </marker>
    <marker id="sn2bluearrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#3b82f6" />
    </marker>
  </defs>
  <text x="50%" y="28" text-anchor="middle" fill="#f8fafc" font-size="16" font-weight="bold">SN2 Mechanism: Reaction Energy Profile (Single Transition State)</text>

  <g transform="translate(60, 40)">
    <!-- Axes -->
    <line x1="20" y1="380" x2="20" y2="40" stroke="#cbd5e1" stroke-width="2" marker-end="url(#sn2arrow)" />
    <line x1="20" y1="380" x2="820" y2="380" stroke="#cbd5e1" stroke-width="2" marker-end="url(#sn2arrow)" />
    <text x="20" y="25" fill="#cbd5e1" font-size="14" font-weight="bold" text-anchor="middle">Energy</text>
    <text x="810" y="405" fill="#cbd5e1" font-size="14" font-weight="bold" text-anchor="end">Reaction Coordinate</text>

    <!-- Reference Level Lines -->
    <line x1="20" y1="310" x2="320" y2="310" stroke="#334155" stroke-width="1" stroke-dasharray="3 3" />

    <!-- Reaction Path Curve (Single Peak) -->
    <path d="M 40,310 L 100,310 C 180,310 240,110 320,110 C 400,110 460,230 540,230 L 600,230" fill="none" stroke="#38bdf8" stroke-width="3.5" stroke-linecap="round" />

    <!-- Reactants Structure (at x=15, y=230) -->
    <g transform="translate(15, 230)">
      <!-- Central Carbon -->
      <text x="70" y="30" fill="#f87171" font-size="15" font-weight="bold" text-anchor="middle">C</text>
      <!-- Methyl Groups -->
      <line x1="62" y1="32" x2="48" y2="42" stroke="#fb7185" stroke-width="1.5" />
      <text x="44" y="50" fill="#fb7185" font-size="13" font-weight="bold" text-anchor="end">H₃C</text>
      
      <line x1="70" y1="18" x2="70" y2="6" stroke="#fb7185" stroke-width="1.5" />
      <text x="70" y="2" fill="#fb7185" font-size="13" font-weight="bold" text-anchor="middle">CH₃</text>
      
      <polygon points="76,32 88,42 85,45" fill="#fb7185" />
      <text x="92" y="51" fill="#fb7185" font-size="13" font-weight="bold" text-anchor="start">CH₃</text>
      
      <!-- C-Cl Bond -->
      <line x1="78" y1="26" x2="94" y2="18" stroke="#34d399" stroke-width="1.5" />
      <text x="98" y="16" fill="#34d399" font-size="14" font-weight="bold" text-anchor="start">Cl</text>

      <!-- Nucleophile above Cl -->
      <text x="95" y="-5" fill="#38bdf8" font-size="14" font-weight="bold">+ OH⁻</text>
      
      <!-- Reactants Label (below green line) -->
      <text x="70" y="98" fill="#cbd5e1" font-size="13" font-weight="bold" text-anchor="middle">Reactants</text>
    </g>

    <!-- Transition State structure (at Peak x=320, y=110) -->
    <g transform="translate(240, 10)">
      <!-- Brackets -->
      <path d="M 25,25 L 20,25 L 20,85 L 25,85" stroke="#cbd5e1" stroke-width="1.2" fill="none" />
      <path d="M 135,25 L 140,25 L 140,85 L 135,85" stroke="#cbd5e1" stroke-width="1.2" fill="none" />
      <text x="144" y="30" fill="#cbd5e1" font-size="14" font-weight="bold">‡</text>
      
      <!-- Transition State Text Label -->
      <text x="80" y="12" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">Transition State</text>

      <!-- Central Carbon -->
      <text x="80" y="55" fill="#f87171" font-size="15" font-weight="bold" text-anchor="middle">C</text>
      <!-- delta+ on top-right of C -->
      <text x="88" y="46" fill="#f87171" font-size="10">δ+</text>

      <!-- Planar Methyls -->
      <line x1="72" y1="58" x2="62" y2="67" stroke="#fb7185" stroke-width="1.5" />
      <text x="58" y="75" fill="#fb7185" font-size="12" font-weight="bold" text-anchor="end">H₃C</text>
      
      <line x1="80" y1="43" x2="80" y2="34" stroke="#fb7185" stroke-width="1.5" />
      <text x="80" y="30" fill="#fb7185" font-size="12" font-weight="bold" text-anchor="middle">CH₃</text>
      
      <polygon points="86,57 96,65 94,68" fill="#fb7185" />
      <text x="100" y="74" fill="#fb7185" font-size="12" font-weight="bold" text-anchor="start">CH₃</text>

      <!-- Forming C...OH bond (left) -->
      <line x1="70" y1="52" x2="48" y2="52" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="2,2" />
      <text x="44" y="56" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="end">HO</text>
      <!-- delta- above HO -->
      <text x="36" y="44" fill="#38bdf8" font-size="10">δ-</text>

      <!-- Breaking C...Cl bond (right) -->
      <line x1="90" y1="52" x2="112" y2="52" stroke="#34d399" stroke-width="1.5" stroke-dasharray="2,2" />
      <text x="116" y="56" fill="#34d399" font-size="14" font-weight="bold" text-anchor="start">Cl</text>
      <!-- delta- above Cl -->
      <text x="116" y="44" fill="#34d399" font-size="10">δ-</text>
    </g>

    <!-- Products Structure (at x=500, y=230) -->
    <g transform="translate(500, 150)">
      <!-- Central Carbon -->
      <text x="70" y="40" fill="#f87171" font-size="15" font-weight="bold" text-anchor="middle">C</text>
      <!-- Methyl Groups -->
      <line x1="62" y1="42" x2="48" y2="52" stroke="#fb7185" stroke-width="1.5" />
      <text x="44" y="60" fill="#fb7185" font-size="13" font-weight="bold" text-anchor="end">H₃C</text>
      
      <line x1="70" y1="28" x2="70" y2="16" stroke="#fb7185" stroke-width="1.5" />
      <text x="70" y="12" fill="#fb7185" font-size="13" font-weight="bold" text-anchor="middle">CH₃</text>
      
      <polygon points="76,42 88,52 85,55" fill="#fb7185" />
      <text x="92" y="61" fill="#fb7185" font-size="13" font-weight="bold" text-anchor="start">CH₃</text>
      
      <!-- C-OH Bond -->
      <line x1="78" y1="36" x2="94" y2="28" stroke="#38bdf8" stroke-width="1.5" />
      <text x="98" y="26" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="start">OH</text>

      <!-- Leaving Group -->
      <text x="120" y="40" fill="#cbd5e1" font-size="13" font-weight="bold">
        + <tspan fill="#34d399">Cl⁻</tspan>
      </text>
      
      <!-- Products Label (below green line) -->
      <text x="70" y="98" fill="#10b981" font-size="13" font-weight="bold" text-anchor="middle">Products</text>
    </g>

    <!-- Activation Energy Arrow -->
    <line x1="320" y1="310" x2="320" y2="120" stroke="#3b82f6" stroke-width="2" marker-end="url(#sn2bluearrow)" />
    <text x="328" y="210" fill="#38bdf8" font-size="14" font-weight="bold">Eₐ (Single Step)</text>
  </g>
</svg>`;

const sn1ProfileSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 500" class="w-full max-w-3xl mx-auto h-auto rounded-lg" style="background: linear-gradient(to bottom right, #070f1e, #0b1b35); border: 1px solid #1e293b; font-family: system-ui, -apple-system, sans-serif;">
  <defs>
    <marker id="sn1arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#94a3b8" />
    </marker>
    <marker id="sn1bluearrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#10b981" />
    </marker>
    <marker id="sn1redarrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#38bdf8" />
    </marker>
  </defs>
  <text x="50%" y="28" text-anchor="middle" fill="#f8fafc" font-size="16" font-weight="bold">SN1 Mechanism: Reaction Energy Profile (Two Peaks &amp; Carbocation Intermediate)</text>

  <g transform="translate(60, 40)">
    <!-- Axes -->
    <line x1="20" y1="380" x2="20" y2="40" stroke="#cbd5e1" stroke-width="2" marker-end="url(#sn1arrow)" />
    <line x1="20" y1="380" x2="820" y2="380" stroke="#cbd5e1" stroke-width="2" marker-end="url(#sn1arrow)" />
    <text x="20" y="25" fill="#cbd5e1" font-size="14" font-weight="bold" text-anchor="middle">Energy</text>
    <text x="810" y="405" fill="#cbd5e1" font-size="14" font-weight="bold" text-anchor="end">Reaction Coordinate</text>

    <!-- Reference Level Lines -->
    <line x1="20" y1="310" x2="240" y2="310" stroke="#334155" stroke-width="1" stroke-dasharray="3 3" />
    <line x1="420" y1="230" x2="560" y2="230" stroke="#334155" stroke-width="1" stroke-dasharray="3 3" />

    <!-- Two Peaks Curve -->
    <path d="M 40,310 L 100,310 C 160,310 190,110 240,110 C 290,110 340,230 420,230 C 490,230 520,160 560,160 C 600,160 640,350 700,350 L 760,350" fill="none" stroke="#10b981" stroke-width="3.5" stroke-linecap="round" />

    <!-- Reactants Structure (at x=15, y=230) -->
    <g transform="translate(15, 230)">
      <!-- Central Carbon -->
      <text x="70" y="30" fill="#f87171" font-size="15" font-weight="bold" text-anchor="middle">C</text>
      <!-- Methyl Groups -->
      <line x1="62" y1="32" x2="48" y2="42" stroke="#fb7185" stroke-width="1.5" />
      <text x="44" y="50" fill="#fb7185" font-size="13" font-weight="bold" text-anchor="end">H₃C</text>
      
      <line x1="70" y1="18" x2="70" y2="6" stroke="#fb7185" stroke-width="1.5" />
      <text x="70" y="2" fill="#fb7185" font-size="13" font-weight="bold" text-anchor="middle">CH₃</text>
      
      <polygon points="76,32 88,42 85,45" fill="#fb7185" />
      <text x="92" y="51" fill="#fb7185" font-size="13" font-weight="bold" text-anchor="start">CH₃</text>
      
      <!-- C-Cl Bond -->
      <line x1="78" y1="26" x2="94" y2="18" stroke="#34d399" stroke-width="1.5" />
      <text x="98" y="16" fill="#34d399" font-size="14" font-weight="bold" text-anchor="start">Cl</text>

      <!-- Nucleophile above Cl -->
      <text x="95" y="-5" fill="#38bdf8" font-size="14" font-weight="bold">+ OH⁻</text>
      
      <!-- Reactants Label (below green line) -->
      <text x="70" y="98" fill="#cbd5e1" font-size="13" font-weight="bold" text-anchor="middle">Reactants</text>
    </g>

    <!-- Transition State 1 (at Peak x=240, y=110) -->
    <g transform="translate(160, 10)">
      <!-- Brackets -->
      <path d="M 25,25 L 20,25 L 20,85 L 25,85" stroke="#cbd5e1" stroke-width="1.2" fill="none" />
      <path d="M 135,25 L 140,25 L 140,85 L 135,85" stroke="#cbd5e1" stroke-width="1.2" fill="none" />
      <text x="144" y="30" fill="#cbd5e1" font-size="14" font-weight="bold">‡</text>
      
      <!-- Transition State Text Label -->
      <text x="80" y="12" fill="#ef4444" font-size="13" font-weight="bold" text-anchor="middle">Transition State 1</text>

      <!-- Central Carbon -->
      <text x="80" y="55" fill="#f87171" font-size="15" font-weight="bold" text-anchor="middle">C</text>
      <!-- delta+ left of C -->
      <text x="65" y="58" fill="#f87171" font-size="10">δ+</text>

      <!-- Planar Methyls -->
      <line x1="72" y1="58" x2="62" y2="67" stroke="#fb7185" stroke-width="1.5" />
      <text x="58" y="75" fill="#fb7185" font-size="12" font-weight="bold" text-anchor="end">H₃C</text>
      
      <line x1="80" y1="43" x2="80" y2="34" stroke="#fb7185" stroke-width="1.5" />
      <text x="80" y="30" fill="#fb7185" font-size="12" font-weight="bold" text-anchor="middle">CH₃</text>
      
      <polygon points="86,57 96,65 94,68" fill="#fb7185" />
      <text x="100" y="74" fill="#fb7185" font-size="12" font-weight="bold" text-anchor="start">CH₃</text>

      <!-- Breaking C...Cl bond (right) -->
      <line x1="90" y1="52" x2="112" y2="52" stroke="#34d399" stroke-width="1.5" stroke-dasharray="2,2" />
      <text x="116" y="56" fill="#34d399" font-size="14" font-weight="bold" text-anchor="start">Cl</text>
      <!-- delta- above Cl -->
      <text x="116" y="44" fill="#34d399" font-size="10">δ-</text>
    </g>

    <!-- Intermediate Carbocation (at well x=420, y=230) -->
    <g transform="translate(340, 130)">
      <!-- Central Carbon -->
      <text x="80" y="45" fill="#f87171" font-size="15" font-weight="bold" text-anchor="middle">C</text>
      <!-- + on top-left of C -->
      <text x="68" y="36" fill="#f59e0b" font-size="12" font-weight="bold">+</text>
      
      <!-- Planar carbocation methyls -->
      <line x1="72" y1="48" x2="60" y2="52" stroke="#fb7185" stroke-width="1.5" />
      <text x="56" y="57" fill="#fb7185" font-size="11" font-weight="bold" text-anchor="end">H₃C</text>
      
      <line x1="86" y1="40" x2="93" y2="34" stroke="#fb7185" stroke-width="1.5" />
      <text x="98" y="30" fill="#fb7185" font-size="11" font-weight="bold" text-anchor="start">CH₃</text>
      
      <line x1="86" y1="50" x2="93" y2="56" stroke="#fb7185" stroke-width="1.5" />
      <text x="98" y="62" fill="#fb7185" font-size="11" font-weight="bold" text-anchor="start">CH₃</text>

      <!-- Colored leaving groups + nucleophile -->
      <text x="120" y="45" fill="#cbd5e1" font-size="13" font-weight="bold">
        + <tspan fill="#38bdf8">OH⁻</tspan> + <tspan fill="#34d399">Cl⁻</tspan>
      </text>
      <text x="80" y="75" fill="#f59e0b" font-size="13" font-weight="bold" text-anchor="middle">Intermediate</text>
    </g>

    <!-- Transition State 2 (at Peak x=560, y=160) -->
    <g transform="translate(480, 50)">
      <!-- Brackets -->
      <path d="M 25,25 L 20,25 L 20,85 L 25,85" stroke="#cbd5e1" stroke-width="1.2" fill="none" />
      <path d="M 135,25 L 140,25 L 140,85 L 135,85" stroke="#cbd5e1" stroke-width="1.2" fill="none" />
      <text x="144" y="30" fill="#cbd5e1" font-size="14" font-weight="bold">‡</text>
      
      <!-- Transition State Text Label -->
      <text x="80" y="12" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">Transition State 2</text>

      <!-- Central Carbon -->
      <text x="80" y="55" fill="#f87171" font-size="15" font-weight="bold" text-anchor="middle">C</text>
      <!-- delta+ on top-right of C -->
      <text x="88" y="46" fill="#f87171" font-size="10">δ+</text>

      <!-- Planar Methyls -->
      <line x1="72" y1="58" x2="62" y2="67" stroke="#fb7185" stroke-width="1.5" />
      <text x="58" y="75" fill="#fb7185" font-size="12" font-weight="bold" text-anchor="end">H₃C</text>
      
      <line x1="80" y1="43" x2="80" y2="34" stroke="#fb7185" stroke-width="1.5" />
      <text x="80" y="30" fill="#fb7185" font-size="12" font-weight="bold" text-anchor="middle">CH₃</text>
      
      <polygon points="86,57 96,65 94,68" fill="#fb7185" />
      <text x="100" y="74" fill="#fb7185" font-size="12" font-weight="bold" text-anchor="start">CH₃</text>

      <!-- Forming C...OH bond (left) -->
      <line x1="70" y1="52" x2="48" y2="52" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="2,2" />
      <text x="44" y="56" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="end">HO</text>
      <!-- delta- above HO -->
      <text x="36" y="44" fill="#38bdf8" font-size="10">δ-</text>
    </g>

    <!-- Products Structure (at x=720, y=350) -->
    <g transform="translate(660, 270)">
      <!-- Central Carbon -->
      <text x="70" y="40" fill="#f87171" font-size="15" font-weight="bold" text-anchor="middle">C</text>
      <!-- Methyl Groups -->
      <line x1="62" y1="42" x2="48" y2="52" stroke="#fb7185" stroke-width="1.5" />
      <text x="44" y="60" fill="#fb7185" font-size="13" font-weight="bold" text-anchor="end">H₃C</text>
      
      <line x1="70" y1="28" x2="70" y2="16" stroke="#fb7185" stroke-width="1.5" />
      <text x="70" y="12" fill="#fb7185" font-size="13" font-weight="bold" text-anchor="middle">CH₃</text>
      
      <polygon points="76,42 88,52 85,55" fill="#fb7185" />
      <text x="92" y="61" fill="#fb7185" font-size="13" font-weight="bold" text-anchor="start">CH₃</text>
      
      <!-- C-OH Bond -->
      <line x1="78" y1="36" x2="94" y2="28" stroke="#38bdf8" stroke-width="1.5" />
      <text x="98" y="26" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="start">OH</text>

      <!-- Leaving Group -->
      <text x="120" y="40" fill="#cbd5e1" font-size="13" font-weight="bold">
        + <tspan fill="#34d399">Cl⁻</tspan>
      </text>
      
      <!-- Products Label (below green line) -->
      <text x="70" y="98" fill="#10b981" font-size="13" font-weight="bold" text-anchor="middle">Products</text>
    </g>

    <!-- Activation Energy Arrow 1 (RDS) -->
    <line x1="240" y1="310" x2="240" y2="120" stroke="#10b981" stroke-width="2" marker-end="url(#sn1bluearrow)" />
    <text x="246" y="210" fill="#10b981" font-size="14" font-weight="bold">Eₐ1</text>
    
    <!-- Activation Energy Arrow 2 (Fast Step) -->
    <line x1="560" y1="230" x2="560" y2="170" stroke="#38bdf8" stroke-width="2" marker-end="url(#sn1redarrow)" />
    <text x="566" y="200" fill="#38bdf8" font-size="14" font-weight="bold">Eₐ2</text>

    <!-- Slow / Fast steps aligned below their respective activation energy arrows -->
    <text x="240" y="330" fill="#94a3b8" font-size="12" font-weight="bold" text-anchor="middle">slow step</text>
    <text x="560" y="250" fill="#94a3b8" font-size="12" font-weight="bold" text-anchor="middle">fast step</text>
  </g>
</svg>`;


const maxwellBoltzmannSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 360" class="w-full h-auto rounded-lg" style="background: linear-gradient(to bottom right, #070f1e, #0b1b35); border: 1px solid #1e293b; font-family: system-ui, -apple-system, sans-serif;">
  <defs>
    <marker id="boltzmannarrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#64748b" />
    </marker>
    <!-- Shaded area patterns -->
    <pattern id="diagonalHatch1" width="10" height="10" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
      <line x1="0" y1="0" x2="0" y2="10" stroke="#10b981" stroke-width="2" opacity="0.4" />
    </pattern>
    <pattern id="diagonalHatch2" width="10" height="10" patternTransform="rotate(-45 0 0)" patternUnits="userSpaceOnUse">
      <line x1="0" y1="0" x2="0" y2="10" stroke="#f59e0b" stroke-width="2" opacity="0.4" />
    </pattern>
    <!-- Clip paths to constrain shading under the curves -->
    <clipPath id="clipBlueCurve">
      <path d="M 50,260 C 100,60 200,60 300,120 C 400,180 500,220 800,240 L 800,260 Z" />
    </clipPath>
    <clipPath id="clipRedCurve">
      <path d="M 50,260 C 130,120 250,120 350,150 C 450,180 550,200 800,230 L 800,260 Z" />
    </clipPath>
  </defs>
  <text x="50%" y="30" text-anchor="middle" fill="#f8fafc" font-size="15" font-weight="bold">Maxwell-Boltzmann Energy Distribution &amp; Catalysis</text>
  
  <g transform="translate(100, 40)">
    <!-- Axes -->
    <line x1="50" y1="260" x2="50" y2="40" stroke="#94a3b8" stroke-width="2" marker-end="url(#boltzmannarrow)" />
    <line x1="50" y1="260" x2="850" y2="260" stroke="#94a3b8" stroke-width="2" marker-end="url(#boltzmannarrow)" />
    <text x="30" y="35" fill="#94a3b8" font-size="11" font-weight="600" transform="rotate(-90 30 35)" text-anchor="end">Fraction of Molecules</text>
    <text x="840" y="275" fill="#94a3b8" font-size="11" font-weight="600" text-anchor="end">Energy (E)</text>

    <!-- Shaded Areas under curves for Ea and Ea(cat) using clip-paths -->
    <!-- Ea catalyzed at T (X from 380 to 800, clipped under blue curve) -->
    <rect x="380" y="0" width="420" height="260" fill="url(#diagonalHatch1)" clip-path="url(#clipBlueCurve)" />
    <!-- Ea uncatalyzed at T+10K (X from 550 to 800, clipped under red curve) -->
    <rect x="550" y="0" width="250" height="260" fill="url(#diagonalHatch2)" clip-path="url(#clipRedCurve)" />

    <!-- Curve 1 at Temperature T (steeper, peaks early) -->
    <path d="M 50,260 C 100,60 200,60 300,120 C 400,180 500,220 800,240" fill="none" stroke="#3b82f6" stroke-width="3" />
    <text x="210" y="80" fill="#3b82f6" font-size="11" font-weight="bold">T</text>

    <!-- Curve 2 at Temperature T + 10 K (flatter, peaks later) -->
    <path d="M 50,260 C 130,120 250,120 350,150 C 450,180 550,200 800,230" fill="none" stroke="#ef4444" stroke-width="3" />
    <text x="310" y="130" fill="#ef4444" font-size="11" font-weight="bold">T + 10 K</text>

    <!-- Activation Energy Limits -->
    <!-- Uncatalyzed Ea -->
    <line x1="550" y1="40" x2="550" y2="260" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="4 2" />
    <text x="555" y="55" fill="#f59e0b" font-size="11" font-weight="bold">E_a (uncatalyzed)</text>

    <!-- Catalyzed Ea -->
    <line x1="380" y1="40" x2="380" y2="260" stroke="#10b981" stroke-width="2.5" stroke-dasharray="4 2" />
    <text x="385" y="55" fill="#10b981" font-size="11" font-weight="bold">E_a (catalyzed)</text>

    <!-- Legend/Notes -->
    <rect x="580" y="120" width="200" height="90" rx="4" fill="#070f1e" stroke="#1e293b" stroke-width="1.5" />
    <text x="590" y="140" fill="#10b981" font-size="10" font-weight="bold">■ Extra molecules reacting</text>
    <text x="590" y="155" fill="#10b981" font-size="9">with catalyst at T</text>
    
    <text x="590" y="180" fill="#ef4444" font-size="10" font-weight="bold">■ Molecules reacting at</text>
    <text x="590" y="195" fill="#ef4444" font-size="9">higher temperature T+10K</text>
  </g>
</svg>`;

const arrheniusGraphSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 280" class="w-full max-w-2xl mx-auto h-auto rounded-lg" style="background: linear-gradient(to bottom right, #070f1e, #0b1b35); border: 1px solid #1e293b; font-family: system-ui, -apple-system, sans-serif;">
  <defs>
    <marker id="arrh-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#94a3b8" />
    </marker>
  </defs>
  <text x="50%" y="28" text-anchor="middle" fill="#f8fafc" font-size="16" font-weight="bold">The Arrhenius Plot: ln k vs. 1/T</text>
  
  <g transform="translate(35, 15)">
    <!-- Axes -->
    <line x1="70" y1="210" x2="70" y2="35" stroke="#cbd5e1" stroke-width="2.5" marker-end="url(#arrh-arrow)" />
    <line x1="70" y1="210" x2="570" y2="210" stroke="#cbd5e1" stroke-width="2.5" marker-end="url(#arrh-arrow)" />
    
    <!-- Axis Labels -->
    <text x="70" y="22" fill="#cbd5e1" font-size="13" font-weight="bold" text-anchor="middle">ln k</text>
    <text x="585" y="214" fill="#cbd5e1" font-size="13" font-weight="bold">1/T (K⁻¹)</text>
    
    <!-- Arrhenius Straight Line -->
    <line x1="70" y1="60" x2="510" y2="185" stroke="#ef4444" stroke-width="3.5" stroke-linecap="round" />
    
    <!-- Intercept Indicator -->
    <circle cx="70" cy="60" r="6" fill="#ef4444" stroke="#070f1e" stroke-width="1.5" />
    <line x1="70" y1="60" x2="140" y2="60" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="4 4" />
    <rect x="145" y="47" width="135" height="26" rx="4" fill="#0b1b35" stroke="#38bdf8" stroke-width="1" />
    <text x="212" y="64" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">Intercept = ln A</text>
    
    <!-- Gradient Indicator -->
    <path d="M 290,122 L 390,122 L 390,151" fill="none" stroke="#eab308" stroke-width="1.5" stroke-dasharray="4 4" />
    <rect x="398" y="132" width="175" height="26" rx="4" fill="#0b1b35" stroke="#eab308" stroke-width="1" />
    <text x="485" y="149" fill="#eab308" font-size="13" font-weight="bold" text-anchor="middle">Gradient (m) = -Ea / R</text>
    
    <!-- Data Points -->
    <circle cx="180" cy="91" r="5" fill="#f8fafc" stroke="#070f1e" stroke-width="1.5" />
    <circle cx="260" cy="114" r="5" fill="#f8fafc" stroke="#070f1e" stroke-width="1.5" />
    <circle cx="340" cy="137" r="5" fill="#f8fafc" stroke="#070f1e" stroke-width="1.5" />
    <circle cx="420" cy="160" r="5" fill="#f8fafc" stroke="#070f1e" stroke-width="1.5" />
    <circle cx="500" cy="182" r="5" fill="#f8fafc" stroke="#070f1e" stroke-width="1.5" />
  </g>
</svg>`;

const heterogeneousCatalysisSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 320" class="w-full max-w-2xl mx-auto h-auto rounded-lg" style="background: linear-gradient(to bottom right, #070f1e, #0b1b35); border: 1px solid #1e293b; font-family: system-ui, -apple-system, sans-serif;">
  <defs>
    <marker id="arrowBlue" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L0,8 L8,4 Z" fill="#38bdf8"/>
    </marker>
    <marker id="arrowGreen" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L0,8 L8,4 Z" fill="#34d399"/>
    </marker>
  </defs>

  <!-- Title -->
  <text x="325" y="26" text-anchor="middle" fill="#f8fafc" font-size="15" font-weight="bold">Heterogeneous Catalysis: Three Stages on a Solid Surface</text>

  <!-- Stage labels -->
  <text x="108" y="52" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="bold">1. Adsorption</text>
  <text x="325" y="52" text-anchor="middle" fill="#f59e0b" font-size="13" font-weight="bold">2. Reaction</text>
  <text x="542" y="52" text-anchor="middle" fill="#34d399" font-size="13" font-weight="bold">3. Desorption</text>

  <!-- Arrows between stages -->
  <text x="218" y="178" text-anchor="middle" fill="#94a3b8" font-size="22">&#8594;</text>
  <text x="435" y="178" text-anchor="middle" fill="#94a3b8" font-size="22">&#8594;</text>

  <!-- ===== STAGE 1: ADSORPTION ===== -->
  <g transform="translate(18, 65)">
    <rect x="0" y="195" width="182" height="42" rx="4" fill="#334155" stroke="#475569" stroke-width="1.5"/>
    <text x="91" y="221" text-anchor="middle" fill="#94a3b8" font-size="11" font-weight="bold">SURFACE OF CATALYST</text>
    <ellipse cx="36" cy="195" rx="12" ry="6" fill="#475569" stroke="#64748b" stroke-width="1"/>
    <ellipse cx="91" cy="195" rx="12" ry="6" fill="#475569" stroke="#64748b" stroke-width="1"/>
    <ellipse cx="146" cy="195" rx="12" ry="6" fill="#475569" stroke="#64748b" stroke-width="1"/>
    <!-- Reactant A (green) being adsorbed -->
    <circle cx="36" cy="155" r="13" fill="#22c55e" fill-opacity="0.85" stroke="#16a34a" stroke-width="1.5"/>
    <text x="36" y="159" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">A</text>
    <circle cx="91" cy="155" r="13" fill="#22c55e" fill-opacity="0.85" stroke="#16a34a" stroke-width="1.5"/>
    <text x="91" y="159" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">A</text>
    <circle cx="146" cy="155" r="13" fill="#22c55e" fill-opacity="0.85" stroke="#16a34a" stroke-width="1.5"/>
    <text x="146" y="159" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">A</text>
    <!-- Bond lines to surface -->
    <line x1="36" y1="168" x2="36" y2="189" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="3,2"/>
    <line x1="91" y1="168" x2="91" y2="189" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="3,2"/>
    <line x1="146" y1="168" x2="146" y2="189" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="3,2"/>
    <!-- Reactant B (orange) approaching -->
    <circle cx="36" cy="108" r="13" fill="#f97316" fill-opacity="0.85" stroke="#ea580c" stroke-width="1.5"/>
    <text x="36" y="112" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">B</text>
    <circle cx="91" cy="108" r="13" fill="#f97316" fill-opacity="0.85" stroke="#ea580c" stroke-width="1.5"/>
    <text x="91" y="112" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">B</text>
    <circle cx="146" cy="108" r="13" fill="#f97316" fill-opacity="0.85" stroke="#ea580c" stroke-width="1.5"/>
    <text x="146" y="112" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">B</text>
    <!-- Down arrows -->
    <line x1="36" y1="122" x2="36" y2="140" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrowBlue)"/>
    <line x1="91" y1="122" x2="91" y2="140" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrowBlue)"/>
    <line x1="146" y1="122" x2="146" y2="140" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrowBlue)"/>
    <text x="91" y="252" text-anchor="middle" fill="#94a3b8" font-size="10">Reactants bond to active sites</text>
    <text x="91" y="265" text-anchor="middle" fill="#94a3b8" font-size="10">Covalent bonds weakened</text>
  </g>

  <!-- ===== STAGE 2: REACTION ===== -->
  <g transform="translate(235, 65)">
    <rect x="0" y="195" width="182" height="42" rx="4" fill="#334155" stroke="#475569" stroke-width="1.5"/>
    <text x="91" y="221" text-anchor="middle" fill="#94a3b8" font-size="11" font-weight="bold">SURFACE OF CATALYST</text>
    <ellipse cx="36" cy="195" rx="12" ry="6" fill="#475569" stroke="#64748b" stroke-width="1"/>
    <ellipse cx="91" cy="195" rx="12" ry="6" fill="#475569" stroke="#64748b" stroke-width="1"/>
    <ellipse cx="146" cy="195" rx="12" ry="6" fill="#475569" stroke="#64748b" stroke-width="1"/>
    <!-- A+B pairs reacting on surface -->
    <circle cx="26" cy="170" r="13" fill="#22c55e" fill-opacity="0.8" stroke="#16a34a" stroke-width="1.5"/>
    <text x="26" y="174" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">A</text>
    <circle cx="46" cy="170" r="13" fill="#f97316" fill-opacity="0.8" stroke="#ea580c" stroke-width="1.5"/>
    <text x="46" y="174" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">B</text>
    <text x="36" y="153" text-anchor="middle" fill="#fbbf24" font-size="13">&#9889;</text>
    <circle cx="81" cy="170" r="13" fill="#22c55e" fill-opacity="0.8" stroke="#16a34a" stroke-width="1.5"/>
    <text x="81" y="174" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">A</text>
    <circle cx="101" cy="170" r="13" fill="#f97316" fill-opacity="0.8" stroke="#ea580c" stroke-width="1.5"/>
    <text x="101" y="174" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">B</text>
    <text x="91" y="153" text-anchor="middle" fill="#fbbf24" font-size="13">&#9889;</text>
    <circle cx="136" cy="170" r="13" fill="#22c55e" fill-opacity="0.8" stroke="#16a34a" stroke-width="1.5"/>
    <text x="136" y="174" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">A</text>
    <circle cx="156" cy="170" r="13" fill="#f97316" fill-opacity="0.8" stroke="#ea580c" stroke-width="1.5"/>
    <text x="156" y="174" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">B</text>
    <text x="146" y="153" text-anchor="middle" fill="#fbbf24" font-size="13">&#9889;</text>
    <!-- Product AB forming above -->
    <circle cx="36" cy="108" r="13" fill="#a78bfa" fill-opacity="0.7" stroke="#7c3aed" stroke-width="1.5"/>
    <text x="36" y="112" text-anchor="middle" fill="#fff" font-size="9">AB</text>
    <circle cx="91" cy="100" r="13" fill="#a78bfa" fill-opacity="0.7" stroke="#7c3aed" stroke-width="1.5"/>
    <text x="91" y="104" text-anchor="middle" fill="#fff" font-size="9">AB</text>
    <circle cx="146" cy="108" r="13" fill="#a78bfa" fill-opacity="0.7" stroke="#7c3aed" stroke-width="1.5"/>
    <text x="146" y="112" text-anchor="middle" fill="#fff" font-size="9">AB</text>
    <text x="91" y="252" text-anchor="middle" fill="#94a3b8" font-size="10">Bonds break and new bonds form</text>
    <text x="91" y="265" text-anchor="middle" fill="#94a3b8" font-size="10">Product AB molecules created</text>
  </g>

  <!-- ===== STAGE 3: DESORPTION ===== -->
  <g transform="translate(452, 65)">
    <rect x="0" y="195" width="182" height="42" rx="4" fill="#334155" stroke="#475569" stroke-width="1.5"/>
    <text x="91" y="221" text-anchor="middle" fill="#94a3b8" font-size="11" font-weight="bold">SURFACE OF CATALYST</text>
    <!-- Free active sites (green outline) -->
    <ellipse cx="36" cy="195" rx="12" ry="6" fill="#475569" stroke="#34d399" stroke-width="1.5"/>
    <ellipse cx="91" cy="195" rx="12" ry="6" fill="#475569" stroke="#34d399" stroke-width="1.5"/>
    <ellipse cx="146" cy="195" rx="12" ry="6" fill="#475569" stroke="#34d399" stroke-width="1.5"/>
    <!-- Products leaving surface -->
    <circle cx="36" cy="168" r="13" fill="#a78bfa" fill-opacity="0.85" stroke="#7c3aed" stroke-width="1.5"/>
    <text x="36" y="172" text-anchor="middle" fill="#fff" font-size="9">AB</text>
    <line x1="36" y1="154" x2="36" y2="135" stroke="#34d399" stroke-width="2" marker-end="url(#arrowGreen)"/>
    <circle cx="91" cy="168" r="13" fill="#a78bfa" fill-opacity="0.85" stroke="#7c3aed" stroke-width="1.5"/>
    <text x="91" y="172" text-anchor="middle" fill="#fff" font-size="9">AB</text>
    <line x1="91" y1="154" x2="91" y2="135" stroke="#34d399" stroke-width="2" marker-end="url(#arrowGreen)"/>
    <circle cx="146" cy="168" r="13" fill="#a78bfa" fill-opacity="0.85" stroke="#7c3aed" stroke-width="1.5"/>
    <text x="146" y="172" text-anchor="middle" fill="#fff" font-size="9">AB</text>
    <line x1="146" y1="154" x2="146" y2="135" stroke="#34d399" stroke-width="2" marker-end="url(#arrowGreen)"/>
    <!-- Products freely diffusing away -->
    <circle cx="36" cy="108" r="13" fill="#a78bfa" fill-opacity="0.55" stroke="#7c3aed" stroke-width="1.5"/>
    <text x="36" y="112" text-anchor="middle" fill="#fff" font-size="9">AB</text>
    <circle cx="91" cy="100" r="13" fill="#a78bfa" fill-opacity="0.55" stroke="#7c3aed" stroke-width="1.5"/>
    <text x="91" y="104" text-anchor="middle" fill="#fff" font-size="9">AB</text>
    <circle cx="146" cy="108" r="13" fill="#a78bfa" fill-opacity="0.55" stroke="#7c3aed" stroke-width="1.5"/>
    <text x="146" y="112" text-anchor="middle" fill="#fff" font-size="9">AB</text>
    <text x="91" y="252" text-anchor="middle" fill="#94a3b8" font-size="10">Products leave the surface</text>
    <text x="91" y="265" text-anchor="middle" fill="#94a3b8" font-size="10">Active sites freed for reuse</text>
  </g>

  <!-- Legend -->
  <g transform="translate(18, 298)">
    <circle cx="10" cy="8" r="7" fill="#22c55e" stroke="#16a34a" stroke-width="1"/>
    <text x="22" y="12" fill="#cbd5e1" font-size="10">Reactant A</text>
    <circle cx="95" cy="8" r="7" fill="#f97316" stroke="#ea580c" stroke-width="1"/>
    <text x="107" y="12" fill="#cbd5e1" font-size="10">Reactant B</text>
    <circle cx="180" cy="8" r="7" fill="#a78bfa" stroke="#7c3aed" stroke-width="1"/>
    <text x="192" y="12" fill="#cbd5e1" font-size="10">Product AB</text>
    <ellipse cx="280" cy="8" rx="10" ry="5" fill="#475569" stroke="#34d399" stroke-width="1.5"/>
    <text x="294" y="12" fill="#cbd5e1" font-size="10">Free active site</text>
    <ellipse cx="390" cy="8" rx="10" ry="5" fill="#475569" stroke="#64748b" stroke-width="1"/>
    <text x="404" y="12" fill="#cbd5e1" font-size="10">Occupied active site</text>
  </g>
</svg>`;

export const parts: LessonPart[] = [
  {
    id: 'experimental-rates-u4-l1',
    title: 'Experimental Determination of Rates',
    type: 'text',
    disappearingCrossSimulator: true,
    content: `
> [!NOTE]
> ### 📋 Selecting and Justifying Experimental Techniques
> To follow a reaction, we must choose an analytical technique based on the chemical nature of the species involved, their state symbols, and their physical properties.
> 
> Here are the key methods categorized by their experimental approaches:

> [!BOX]
> ### 🧪 Measuring Gas Volume Evolved
> * **Justification:** Suitable if one of the products is a gas.
> * **Apparatus & Selection:**
>   * **Gas Syringe:** Preferred for high precision.
>   * **Collection over Water (inverted measuring cylinder):** Suitable only for gases with low solubility in water (such as $\\\\text{O}_2$ and $\\\\text{H}_2$).
> * **Example:** Reaction of calcium carbonate with hydrochloric acid:
>   $$\\\\text{CaCO}_3\\\\text{(s)} + 2\\\\text{HCl}\\\\text{(aq)} \\\\rightarrow \\\\text{CaCl}_2\\\\text{(aq)} + \\\\text{H}_2\\\\text{O}\\\\text{(l)} + \\\\text{CO}_2\\\\text{(g)}$$
> 
> ${svgToken(gasCollectionSvg)}

> 
> > [!WARNING]
> > ### ⚠️ Gas Collection Limitations & Systematic Error Prevention
> > * **Solubility Limitation:** Gases that are soluble in water (such as carbon dioxide $\\\\text{CO}_2$) cannot be collected accurately over water because some gas dissolves, underestimating volume. A gas syringe must be used.
> > * **Exam Hint (Highly Soluble Gases):** Highly soluble gases such as sulfur dioxide ($\\\\text{SO}_2$), hydrogen chloride ($\\\\text{HCl}$), and ammonia ($\\\\text{NH}_3$) cannot be collected over water under any circumstances. A gas syringe must be used.
> > * **Systematic Error Prevention (Divided Flask Technique):** Pouring acid onto solid reactants and then attaching the stopper causes gas loss before sealing. To prevent this systematic error, keep solid and liquid separated inside a sealed divided flask (or suspended tube), then tilt/shake the apparatus to initiate the reaction without gas loss.

> [!BOX]
> ### 🎨 Continuous Colorimetry Monitoring
> * **Justification:** Suitable when a reactant or product in solution is colored (e.g., brown aqueous iodine, $\\\\text{I}_2\\\\text{(aq)}$) and changes in concentration over time. A colorimeter measures light absorbance.
> * **Advantages:** Provides objective, quantitative, and continuous measurements of concentration change.
> * **Example:** Reaction of propanone with iodine:
>   $$\\\\text{CH}_3\\\\text{COCH}_3\\\\text{(aq)} + \\\\text{I}_2\\\\text{(aq)} \\\\rightarrow \\\\text{CH}_3\\\\text{COCH}_2\\\\text{I}\\\\text{(aq)} + \\\\text{H}^+\\\\text{(aq)} + \\\\text{I}^-\\\\text{(aq)}$$
>   *Here, iodine is the only colored species, so we track its color intensity decay.*
> 
> ${svgToken(colorimeterSvg)}
> 
> > [!TIP]
> > ### 🎯 Key Complementary Color Filter Pairs (For Maximum Absorbance)
> > To ensure maximum absorbance when using a colorimeter, always select a filter of the complementary color:
> > * **Orange / Yellow / Brown Solution** (e.g., Iodine $\\\\text{I}_2$, Bromine $\\\\text{Br}_2$): Absorbs **Blue light** $\\\\rightarrow$ Select a **Blue filter**.
> > * **Purple / Pink Solution** (e.g., Permanganate $\\\\text{MnO}_4^-$): Absorbs **Green light** $\\\\rightarrow$ Select a **Green filter**.
> > * **Blue Solution** (e.g., Copper(II) ions $\\\\text{Cu}^{2+}$): Absorbs **Orange / Red light** $\\\\rightarrow$ Select an **Orange / Red filter**.
> > * **Red Solution:** Absorbs **Green / Cyan light** $\\\\rightarrow$ Select a **Green / Cyan filter**.


> [!BOX]
> ### ⚖️ Quenching and Chemical Titration
> * **Process:** Taking samples (aliquots) of the reaction mixture at regular intervals, stopping or slowing the reaction immediately (**quenching**), and then titrating the sample to determine reactant/product concentration.
> * **Selecting the Correct Quenching Method:**
>   * **Rapid Cooling & Dilution (Ice-Cold Water):** Required when titrating an **acid or alkali product/catalyst** (e.g., ester hydrolysis). Dilution and cooling stop the reaction without consuming any of the acid being titrated.
>   * **Chemical Neutralization ($\\\\text{NaHCO}_3$):** Used ONLY when titrating a **non-acidic species** (e.g., titrating iodine $\\\\text{I}_2$ with sodium thiosulfate in propanone iodination). Adding $\\\\text{NaHCO}_3$ neutralizes the $\\\\text{H}^+$ catalyst to halt the reaction without reacting with iodine.
> * **Titration Reaction Example (Iodine Titration):**
>   $$\\\\text{I}_2\\\\text{(aq)} + 2\\\\text{S}_2\\\\text{O}_3^{2-}\\\\text{(aq)} \\\\rightarrow 2\\\\text{I}^-\\\\text{(aq)} + \\\\text{S}_4\\\\text{O}_6^{2-}\\\\text{(aq)}$$
> 
> > [!WARNING]
> > ### ⚠️ Exam Trap: Choosing the Correct Quenching Agent
> > When the aliquot is quenched and then **titrated against a base** (e.g., $\\\\text{NaOH}$ or $\\\\text{NaHCO}_3$), the quenching agent must **not react with any species being titrated**.
> > * **Ester hydrolysis (acid-catalysed):** Do NOT add $\\\\text{NaHCO}_3$ — it will neutralize the ethanoic acid product, ruining the titration. Use **rapid cooling in ice-cold water** instead.
> > * **Propanone iodination:** $\\\\text{NaHCO}_3$ IS correct — it only neutralizes the $\\\\text{H}^+$ catalyst without affecting the iodine being titrated with thiosulfate.
> > * **General rule:** If the reaction involves an acid or alkali, only quench with a reagent that removes the catalyst/reactant **without** consuming the analyte species.

> [!BOX]
> ### ⚖️ Measuring Mass Change
> * **Justification:** Suitable if a heavy gas (e.g. $\\\\text{CO}_2$) escapes from the flask. A cotton wool plug allows gas to escape but prevents loss of liquid droplets.
> * **Constraint:** Highly precise for high relative molecular mass gases like $\\\\text{CO}_2$ ($M_r = 44.0$). Ineffective for very light gases like $\\\\text{H}_2$ ($M_r = 2.0$) due to large measurement uncertainties.
> 
> ${svgToken(massLossSvg)}

> [!BOX]
> ### ⏱️ Disappearing Cross Method
> * **Justification:** Suitable for reactions that produce an insoluble solid precipitate that makes the solution cloudy.
> * **Example:** Sodium thiosulfate and hydrochloric acid:
>   $$\\\\text{Na}_2\\\\text{S}_2\\\\text{O}_3\\\\text{(aq)} + 2\\\\text{HCl}\\\\text{(aq)} \\\\rightarrow 2\\\\text{NaCl}\\\\text{(aq)} + \\\\text{SO}_2\\\\text{(g)} + \\\\text{S}\\\\text{(s)} + \\\\text{H}_2\\\\text{O}\\\\text{(l)}$$
> 
> ${svgToken(disappearingCrossSvg)}

> [!BOX]
> ### 📋 Other Physical Monitoring Methods
> For other reactions, specific physical properties can be monitored continuously:
> 
> 1. **Electrical Conductivity:**
>    * **Justification:** Suitable if the concentration, charge, or mobility of ions changes during the reaction, causing a drop or increase in conductivity.
>    * **Key Exam Justification Rationale:**
>      * **Ion Mobility & Size:** Replacement of fast-moving, highly conductive ions (e.g., $\\\\text{OH}^-$) by larger, lower-mobility ions (e.g., $\\\\text{CH}_3\\\\text{COO}^-$).
>      * **Change in Ion Moles:** Reduction in total ion count/charge (e.g., $3\text{ moles}$ of reactant ions $1\\\\text{S}_2\\\\text{O}_8^{2-} + 2\\\\text{I}^-$ changing to $2\text{ moles}$ of product ions $2\\\\text{SO}_4^{2-}$).
>    * **Example:**
>      $$5\\\\text{Br}^-\\\\text{(aq)} + \\\\text{BrO}_3^-\\\\text{(aq)} + 6\\\\text{H}^+\\\\text{(aq)} \\\\rightarrow 3\\\\text{Br}_2\\\\text{(aq)} + 3\\\\text{H}_2\\\\text{O}\\\\text{(l)}$$
> 
> 2. **pH Measurement:**
>    * **Justification:** Suitable for reactions where the concentration of hydrogen ions ($\\\\text{H}^+$) changes significantly as the reaction proceeds.
>    * **Apparatus:** A digital pH probe or meter records continuous pH readings.
> 
> 3. **Dilatometry (Volume Change):**
>    * **Justification:** Used for liquid-phase reactions where the density of the reactants and products differ, causing a measurable change in the total volume of the reaction mixture.
>    * **How it works:** The reaction mixture is sealed in a flask fitted with a narrow capillary tube. As the reaction proceeds, the volume change (expansion or contraction) causes the liquid level in the capillary to rise or fall — this tiny change can be read precisely against a calibrated scale.
>    * **Limitation:** Only applicable to liquid-phase reactions; not useful if a gas is produced.
> 
> 4. **Refractive Index:**
>    * **Justification:** Used for liquid-phase reactions where the refractive index of the solution changes as reactants are converted to products (because different compounds bend light differently).
>    * **How it works:** A refractometer continuously measures how much the solution bends a beam of light. As the composition of the mixture changes, the refractive index changes at a rate proportional to the rate of reaction.
>    * **Limitation:** Only suitable when there is a significant difference in refractive index between reactants and products, and when no gas is evolved.
> 
> 5. **Optical Activity (Polarimetry):**
>    * **Justification:** Used for reactions involving **chiral (optically active) molecules** — i.e., molecules that rotate the plane of polarised light. As one enantiomer is converted to another (or to an optically inactive product), the angle of rotation changes measurably.
>    * **How it works:** Plane-polarised light is passed through the reaction mixture inside a polarimeter tube. A detector continuously measures the angle of rotation ($\alpha$). As the concentration of the optically active species changes, so does $\alpha$ — allowing rate monitoring.
>    * **Example:** Mutarotation of glucose (interconversion of $\alpha$- and $\beta$-glucose), or the SN1 hydrolysis of a chiral halogenoalkane leading to racemisation.
>    * **Limitation:** Only applicable to reactions involving chiral species with different optical rotations.
> 

> [!BOX]
> ### ⏱️ Clock Reactions & Initial Rates Method
> * **Definition:** A chemical reaction that goes through a clear, observable transitional stage (such as a sudden color change or appearance of a precipitate) after a specific time period ($t$).
> * **Purpose:** Provides a practical and mathematically valid alternative to continuous monitoring for determining initial reaction rates.
> * **Core Assumption:** Instead of measuring concentrations moment by moment, we measure the time ($t$) required for a fixed, small amount of product to form (monitored for $<10\%$ of completion). Because the amount of product formed is fixed in every trial, reactant concentrations remain virtually constant, so:
>   $$\\\\text{Initial Rate} \\\\propto \\\\frac{1}{t}$$
> * **The Iodine Clock Reaction Equations:**
>   $$\\\\text{Reaction 1 (Slow / Main): } \\\\text{S}_2\\\\text{O}_8^{2-}\\\\text{(aq)} + 2\\\\text{I}^-\\\\text{(aq)} \\\\rightarrow 2\\\\text{SO}_4^{2-}\\\\text{(aq)} + \\\\text{I}_2\\\\text{(aq)}$$
>   $$\\\\text{Reaction 2 (Fast / Scavenger): } \\\\text{I}_2\\\\text{(aq)} + 2\\\\text{S}_2\\\\text{O}_3^{2-}\\\\text{(aq)} \\\\rightarrow 2\\\\text{I}^-\\\\text{(aq)} + \\\\text{S}_4\\\\text{O}_6^{2-}\\\\text{(aq)}$$
> * **Detailed Mechanics & Delay Explanation:**
>   1. Mixing clear solutions initiates the slow Reaction 1, producing iodine ($\\\\text{I}_2$).
>   2. A small, known limiting quantity of sodium thiosulfate ($\\\\text{Na}_2\\\\text{S}_2\\\\text{O}_3$) is added at the start. It rapidly consumes any $\\\\text{I}_2$ as soon as it forms, converting it back to colorless $\\\\text{I}^-$ via Reaction 2.
>   3. As long as thiosulfate ions ($\\\\text{S}_2\\\\text{O}_3^{2-}$) remain, no free iodine can accumulate, so the solution stays completely clear.
>   4. The moment all thiosulfate is fully consumed, free $\\\\text{I}_2$ begins to accumulate and immediately reacts with starch indicator to form a sharp, dark blue-black complex.
>   5. A shorter time ($t$) until the blue-black color appears means a faster initial reaction rate.


> [!EXAMPLE]
> #### 📝 Worked Example 1: Justifying Experimental Techniques
> **Question:** Identify the most suitable experimental technique to follow the rate of each of the following reactions, and explain your choice:
> 1. Magnesium with acid:
>    $$\\\\text{Mg}\\\\text{(s)} + 2\\\\text{H}^+\\\\text{(aq)} \\\\rightarrow \\\\text{Mg}^{2+}\\\\text{(aq)} + \\\\text{H}_2\\\\text{(g)}$$
> 2. Hydrolysis of ethyl ethanoate:
>    $$\\\\text{CH}_3\\\\text{COOCH}_2\\\\text{CH}_3\\\\text{(l)} + \\\\text{OH}^-\\\\text{(aq)} \\\\rightarrow \\\\text{CH}_3\\\\text{COO}^-\\\\text{(aq)} + \\\\text{CH}_3\\\\text{CH}_2\\\\text{OH}\\\\text{(aq)}$$
> 3. Reaction of hydrogen and iodine:
>    $$\\\\text{H}_2\\\\text{(g)} + \\\\text{I}_2\\\\text{(g)} \\\\rightarrow 2\\\\text{HI}\\\\text{(g)}$$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Magnesium with acid:**
> >    * *Technique:* Measuring the volume of gas evolved using a gas syringe.
> >    * *Explanation:* $\\\\text{H}_2$ gas is produced. Measuring mass loss is unsuitable because hydrogen gas ($\\\\text{H}_2$) has a very low molar mass ($2.0\\\\text{ g mol}^{-1}$), meaning the decrease in mass as the gas escapes is extremely small and cannot be measured accurately with standard laboratory balances.
> > 
> > 2. **Ethyl ethanoate with sodium hydroxide:**
> >    * This reaction can be followed using either a chemical or a physical method:
> >      * **a) Chemical method (Titration):** Withdraw samples at regular time intervals. Quench the reaction in each sample by adding it to a known excess of standard acid. Then titrate the remaining unreacted acid with standard alkali.
> >      * **b) Physical method (Electrical Conductivity):** Monitor the decrease in electrical conductivity over time, as the highly conductive $\\\\text{OH}^-$ ions are replaced by larger and less conductive $\\\\text{CH}_3\\\\text{COO}^-$ ions.
> > 
> > 3. **Hydrogen gas with iodine gas:**
> >    * This reaction can be followed using either a physical or a chemical method:
> >      * **a) Physical method (Colorimetry):** Measure the decrease in the purple/violet color intensity of iodine gas ($\\\\text{I}_2$) over time using a colorimeter (since $\\\\text{H}_2$ and $\\\\text{HI}$ are colorless).
> >      * **b) Chemical method (Quenching and Titration):** Quench samples by rapid cooling (causing deposition and then dissolution of solid $\\\\text{I}_2$), and titrate the mixture with standard sodium thiosulfate solution ($\\\\text{Na}_2\\\\text{S}_2\\\\text{O}_3$) to determine the remaining iodine concentration.

> [!EXAMPLE]
> #### 📝 Worked Example 2: Evaluating Experimental Design & Systematic Errors
> **Question:** In an experiment to follow the rate of carbon dioxide evolution from the reaction of calcium carbonate with hydrochloric acid:
> $$\\\\text{CaCO}_3\\\\text{(s)} + 2\\\\text{HCl}\\\\text{(aq)} \\\\rightarrow \\\\text{CaCl}_2\\\\text{(aq)} + \\\\text{H}_2\\\\text{O}\\\\text{(l)} + \\\\text{CO}_2\\\\text{(g)}$$
> A student evaluates two possible experimental setups:
> * **Setup A:** Adding calcium carbonate chips to the flask, then pouring HCl from a measuring cylinder and quickly sealing the flask with a rubber bung connected to a gas syringe.
> * **Setup B:** Using a divided flask (or suspending the solid in a small tube above the acid using a thread), sealing the flask first, and then tilting/shaking it to mix the reactants and start the reaction.
> 
> 1. Explain the major source of systematic error in **Setup A** and how it affects the recorded rate.
> 2. Explain how **Setup B** eliminates this error.
> 3. Suggest one advantage of using a gas syringe over gas collection over water if the laboratory temperature fluctuates during the experiment.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Systematic error in Setup A:**
> >    * *Source:* Gas loss occurs during the delay between pouring the acid and sealing the rubber bung.
> >    * *Effect on rate:* The measured volume of carbon dioxide will be lower than the true volume, resulting in an underestimated initial reaction rate.
> > 
> > 2. **Mitigation in Setup B:**
> >    * *Explanation:* By keeping reactants separate until the apparatus is fully sealed, no gas can escape when the reaction is initiated by tilting/shaking. This ensures all evolved gas is captured.
> > 
> > 3. **Advantage of Gas Syringe:**
> >    * *Explanation:* Carbon dioxide gas ($\\\\text{CO}_2$) is moderately soluble in water. If collected over water, some of the $\\\\text{CO}_2$ dissolves, leading to underestimated volume readings. A gas syringe avoids water contact entirely. Furthermore, temperature fluctuations affect gas solubility in water (solubility decreases as temperature increases), introducing unpredictable errors.

> [!EXAMPLE]
> #### 📝 Worked Example 3: Chemical Selection for Quenching
> **Question:** In the acid-catalyzed hydrolysis of an ester:
> $$\\\\text{CH}_3\\\\text{COOCH}_2\\\\text{CH}_3\\\\text{(l)} + \\\\text{H}_2\\\\text{O}\\\\text{(l)} \\\\xrightarrow{\\\\text{H}^+\\\\text{(aq)}} \\\\text{CH}_3\\\\text{COOH}\\\\text{(aq)} + \\\\text{CH}_3\\\\text{CH}_2\\\\text{OH}\\\\text{(aq)}$$
> Aliquots (samples) of the reaction mixture are withdrawn at regular intervals to determine the concentration of ethanoic acid produced by titration with sodium hydroxide ($\\\\text{NaOH}$).
> 
> Before titrating, each aliquot must be quenched. A student suggests quenching the mixture by adding an excess of a strong alkali, sodium hydroxide ($\\\\text{NaOH}$), to neutralize the acid catalyst ($\\\\text{H}^+$).
> 
> Evaluate the student\'s suggestion, explaining why it is unsuitable, and suggest a correct alternative chemical method to quench the reaction.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Evaluation of the student\'s suggestion:**
> >    * *Verdict:* The suggestion is highly unsuitable.
> >    * *Reasoning:* Adding a strong alkali like $\\\\text{NaOH}$ would catalyze and cause rapid alkaline hydrolysis (saponification) of the remaining unreacted ester. This would destroy the ester and change the concentration of ethanoic acid, introducing a massive error.
> > 
> > 2. **Correct alternative quenching method:**
> >    * *Method:* Quench by pipetting the aliquot into a large, known volume of ice-cold water (or plunging the sample tube directly into an ice-water bath).
> >    * *Reasoning:* Rapid cooling significantly drops the kinetic energy/temperature, and dilution dramatically reduces the concentration of reactants and the $\\\\text{H}^+$ catalyst. Together, this effectively stops (or drastically slows down) the reaction, allowing the total acid present (catalyst $\\\\text{H}^+$ + produced ethanoic acid) to be titrated accurately with standard $\\\\text{NaOH}$.
> >    * *Important Distinction:* Adding a neutralizing agent like $\\\\text{NaHCO}_3$ is correct for reactions where the remaining reactant being titrated is not an acid (such as iodine in the iodination of propanone). In ester hydrolysis, adding $\\\\text{NaHCO}_3$ would neutralize the ethanoic acid itself, ruining the titration.

> [!EXAMPLE]
> #### 📝 Worked Example 4: Comparing Monitoring Techniques
> **Question:** Consider the reaction between peroxodisulfate ions and iodide ions:
> $$\\\\text{S}_2\\\\text{O}_8^{2-}\\\\text{(aq)} + 2\\\\text{I}^-\\\\text{(aq)} \\\\rightarrow 2\\\\text{SO}_4^{2-}\\\\text{(aq)} + \\\\text{I}_2\\\\text{(aq)}$$
> 
> 1. Suggest two different continuous physical methods that could be used to monitor the rate of this reaction.
> 2. For each method, justify your choice by referencing the species involved.
> 3. State which method is easier to set up in a standard school laboratory and why.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Method 1: Electrical Conductivity**
> >    * *Justification:* There is a decrease in the total number of ions in solution. The reactants contain $3\text{ moles}$ of ions (one $\\\\text{S}_2\\\\text{O}_8^{2-}$ and two $\\\\text{I}^-$), whereas the products contain only $2\text{ moles}$ of ions (two $\\\\text{SO}_4^{2-}$). This decrease in the number of mobile charge carriers leads to a measurable drop in electrical conductivity over time.
> > 
> > 2. **Method 2: Colorimetry**
> >    * *Justification:* Iodine ($\\\\text{I}_2$) is produced, which has a distinct brown/yellow color in aqueous solution. The reactants are colorless. The increase in color intensity (absorbance) can be monitored continuously.
> > 
> > 3. **Comparison and Feasibility:**
> >    * *Verdict:* Colorimetry is preferred and easier.
> >    * *Reasoning:* Colorimetry directly measures the concentration of a single product ($\\\\text{I}_2$) without interference. Conductivity can be affected by spectator ions (e.g., $\\\\text{Na}^+$ or $\\\\text{K}^+$ associated with the reactants) and temperature fluctuations, making calibration more complex.

> [!EXAMPLE]
> #### 📝 Worked Example 5: Iodine Clock Reaction Mechanics
> **Question:** In the Landolt "Iodine Clock" reaction, peroxodisulfate and iodide ions react to produce iodine. A small, fixed amount of sodium thiosulfate ($\\\\text{Na}_2\\\\text{S}_2\\\\text{O}_3$) and starch indicator are added to the initial mixture:
> $$\\\\text{Reaction 1 (Slow): } \\\\text{S}_2\\\\text{O}_8^{2-}\\\\text{(aq)} + 2\\\\text{I}^-\\\\text{(aq)} \\\\rightarrow 2\\\\text{SO}_4^{2-}\\\\text{(aq)} + \\\\text{I}_2\\\\text{(aq)}$$
> $$\\\\text{Reaction 2 (Fast): } \\\\text{I}_2\\\\text{(aq)} + 2\\\\text{S}_2\\\\text{O}_3^{2-}\\\\text{(aq)} \\\\rightarrow 2\\\\text{I}^-\\\\text{(aq)} + \\\\text{S}_4\\\\text{O}_6^{2-}\\\\text{(aq)}$$
> 
> 1. Explain why the solution remains colorless for a period of time and then suddenly turns blue-black.
> 2. Explain why this setup allows the calculation of the initial rate of reaction.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Delayed color change mechanism:**
> >    * *Explanation:* Iodine ($\\\\text{I}_2$) produced by the slow Reaction 1 is immediately reduced back to colorless iodide ions ($\\\\text{I}^-$) by the rapid Reaction 2. As long as thiosulfate ions ($\\\\text{S}_2\\\\text{O}_3^{2-}$) are present, no free iodine can accumulate. Once all thiosulfate is completely consumed, free iodine accumulates and immediately reacts with starch to form the dark blue-black complex.
> > 
> > 2. **Justification for Initial Rate calculation:**
> >    * *Explanation:* The amount of thiosulfate added is very small relative to the reactants (less than 10%). The blue-black color appears when only a tiny fraction of the reactants has reacted. Therefore, the rate ($\\\\frac{1}{t}$) represents the initial rate before reactant concentrations change significantly.

> [!EXAMPLE]
> #### 📝 Worked Example 6: Colorimeter Filter Selection
> **Question:** A student uses a colorimeter to follow the rate of a reaction that produces bromine dissolved in water ($\\\\text{Br}_2\\\\text{(aq)}$), which is orange-brown.
> 
> 1. State the color of the filter that should be selected for the colorimeter.
> 2. Explain your choice of filter.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Filter Selection:**
> >    * Blue filter.
> > 
> > 2. **Explanation:**
> >    * **M1 (Color Absorbed):** The orange-brown solution absorbs blue light (blue is the complementary color of orange).
> >    * **M2 (Maximum Absorbance):** Selecting a blue filter provides maximum absorbance.

> [!EXAMPLE]
> #### 📝 Worked Example 7: Evaluating Mass Loss vs Gas Syringe for H₂-Producing Reactions
> **Question:** Zinc metal reacts with dilute sulfuric acid according to the equation:
> $$\\\\text{Zn(s)} + \\\\text{H}_2\\\\text{SO}_4\\\\text{(aq)} \\\\rightarrow \\\\text{ZnSO}_4\\\\text{(aq)} + \\\\text{H}_2\\\\text{(g)}$$
> A student suggests following the reaction rate by placing the flask on a balance and recording the decrease in mass over time.
>
> 1. Explain why measuring mass loss is **not** a suitable technique for this reaction, despite a gas being produced.
> 2. Suggest a more appropriate experimental technique and justify your choice.
> 3. State one advantage of using a gas syringe over collecting the $\\\\text{H}_2$ gas over water in a measuring cylinder.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> >
> > 1. **Why mass loss is unsuitable:**
> >    * Hydrogen gas ($\\\\text{H}_2$) has a very low molar mass of only $2.0\text{ g mol}^{-1}$.
> >    * Even when several moles of $\\\\text{H}_2$ are produced, the total mass lost from the flask is extremely small (e.g., producing $0.01\text{ mol } \text{H}_2$ loses only $0.020\text{ g}$).
> >    * This mass loss falls within the uncertainty of standard laboratory balances (typically $\pm 0.01\text{ g}$), making the measurements unreliable and the calculated rates inaccurate.
> >
> > 2. **More appropriate technique:**
> >    * Use a **gas syringe** connected to the sealed flask to measure the volume of $\\\\text{H}_2$ evolved over time.
> >    * *Justification:* The gas syringe directly measures volume changes, which are large and easily measurable even for small amounts of $\\\\text{H}_2$ produced, giving an accurate and continuous record of gas evolution.
> >
> > 3. **Advantage of Gas Syringe over Collection over Water:**
> >    * *Advantage:* A gas syringe measures the dry gas directly and avoids the issue of water vapour mixing with the collected gas. (When gas is collected over water, the recorded volume includes water vapour, introducing a small systematic error in the measured volume of $\\\\text{H}_2$). Additionally, it is generally easier to set up and read continuously without managing water levels.

> [!EXAMPLE]
> #### 📝 Worked Example 8: Evaluating Unsuitable Techniques for Bromine & Methanoic Acid Reaction
> **Question:** Bromine oxidizes methanoic acid to carbon dioxide according to the equation:
> $$\\\\text{HCOOH(aq)} + \\\\text{Br}_2\\\\text{(aq)} \\\\rightarrow 2\\\\text{H}^+\\\\text{(aq)} + 2\\\\text{Br}^-\\\\text{(aq)} + \\\\text{CO}_2\\\\text{(g)}$$
> Which of the following experimental methods would **not** be suitable for measuring the progress of this reaction?
> * **A)** Colorimetry
> * **B)** Measuring electrical conductivity
> * **C)** Quenching and titrating with acid
> * **D)** Measuring the volume of gas
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > **Correct Answer:** **C (Quenching and titrating with acid)**
> > 
> > **Reasoning:**
> > * **Option A is suitable:** Bromine ($\\\\text{Br}_2$) is orange-brown while all other species are colorless, so colorimetry can continuously track $[\\\\text{Br}_2]$.
> > * **Option B is suitable:** The reaction produces ionic charge carriers ($2\\\\text{H}^+$ and $2\\\\text{Br}^-$) from neutral/weak species, so electrical conductivity increases measurably over time.
> > * **Option D is suitable:** Carbon dioxide gas ($\\\\text{CO}_2$) is evolved, so gas volume can be measured using a gas syringe.
> > * **Option C is UNSUITABLE:** Methanoic acid ($\\\\text{HCOOH}$) is a weak acid reactant and $\\\\text{H}^+$ is an acid product. Titrating aliquots with an acid would not differentiate or measure the progress accurately without reacting with/destroying the species present.
`,
    keyPoints: [
      'Continuous monitoring yields concentration-time graphs, from which tangent gradients at t = 0 give initial rates.',
      'Quenching stops reactions by rapid cooling or chemical neutralization; weak bases (like $\\\\text{NaHCO}_3$) are used to neutralize acid catalysts without causing side-hydrolysis of esters.',
      'In colorimetry, a filter matching the complementary color of the solution (e.g., a blue filter for an orange-brown bromine solution) must be chosen to ensure maximum light absorbance.',
      'Clock reactions use a small, limiting reagent to delay color change, allowing the calculation of initial rate (1/t) before reactant concentrations change significantly.',
      'Mass loss is an unreliable technique for reactions producing low molar mass gases (e.g., $\\\\text{H}_2$, $M_r = 2.0$) because the mass change is too small to measure accurately; a gas syringe is preferred.'
    ]
  },
  {
    id: 'rate-equations-orders-u4-l1',
    title: 'Rate Equations & Reaction Orders',
    type: 'text',
    kineticsRatePlotter: {
      initialOrder: 'first'
    },
    content: `
> [!NOTE]
> ### ⏱️ Rate of Reaction and Concentrations
> The rate of a chemical reaction is proportional to the concentration of reactants raised to a certain power.
> * **Rate of Reaction Definition:** The rate of reaction can be expressed in two ways:
>   1. How the concentration of a product increases with time:
>      $$\\\\text{Rate} = \\\\frac{d[\\\\text{product}]}{dt}$$
>   2. How the concentration of a reactant decreases with time:
>      $$\\\\text{Rate} = -\\\\frac{d[\\\\text{reactant}]}{dt}$$
> *    *The negative sign shows that the concentration of the reactant is decreasing, ensuring the calculated rate has a positive value.*
> * **Stoichiometry and Relative Rates:** For any general chemical reaction:
>   $$a\\\\text{A} + b\\\\text{B} \\\\rightarrow c\\\\text{C} + d\\\\text{D}$$
>   The rate of reaction is related to the rate of change of concentration of any reactant or product by dividing by its stoichiometric coefficient:
>   $$\\\\text{Rate} = -\\\\frac{1}{a}\\\\frac{d[\\\\text{A}]}{dt} = -\\\\frac{1}{b}\\\\frac{d[\\\\text{B}]}{dt} = +\\\\frac{1}{c}\\\\frac{d[\\\\text{C}]}{dt} = +\\\\frac{1}{d}\\\\frac{d[\\\\text{D}]}{dt}$$
>   *Reactants carry negative signs (being consumed), while products carry positive signs (being formed). This ensures the overall rate of reaction is always a single, positive value regardless of which species is monitored.*


> [!EXAMPLE]
> #### 📝 Worked Example 1: Stoichiometry and Reaction Rates
> **Question:** In the industrial synthesis of ammonia:
> $$\\\\text{N}_2\\\\text{(g)} + 3\\\\text{H}_2\\\\text{(g)} \\\\rightarrow 2\\\\text{NH}_3\\\\text{(g)}$$
> At a specific instant during the reaction, hydrogen gas is reacting at a rate of $0.150\\\\text{ mol dm}^{-3}\\\\text{ s}^{-1}$.
> 
> 1. Write the mathematical expressions relating the rate of reaction to the changes in concentration of all three species over time.
> 2. Calculate the rate of consumption of nitrogen gas ($\\\\text{N}_2$) at this instant.
> 3. Calculate the rate of formation of ammonia gas ($\\\\text{NH}_3$) at this instant.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Mathematical rate expressions:**
> >    * *Equation:*
> >      $$\\\\text{Rate} = -\\\\frac{d[\\\\text{N}_2]}{dt} = -\\\\frac{1}{3}\\\\frac{d[\\\\text{H}_2]}{dt} = +\\\\frac{1}{2}\\\\frac{d[\\\\text{NH}_3]}{dt}$$
> > 
> > 2. **Calculate the rate of consumption of nitrogen ($\\\\text{N}_2$):**
> >    * *Reasoning:* From the equation stoichiometry, $1\\\\text{ mol}$ of $\\\\text{N}_2$ is consumed for every $3\\\\text{ mol}$ of $\\\\text{H}_2$.
> >    * *Calculation:*
> >      $$\\\\text{Rate of consumption of N}_2 = \\\\frac{1}{3} \\\\times \\\\text{Rate of consumption of H}_2$$
> >      $$\\\\text{Rate} = \\\\frac{1}{3} \\\\times 0.150 = 0.050\\\\text{ mol dm}^{-3}\\\\text{ s}^{-1}$$
> > 3. **Calculate the rate of formation of ammonia ($\\\\text{NH}_3$):**
> >    * *Reasoning:* $2\\\\text{ mol}$ of $\\\\text{NH}_3$ are formed for every $3\\\\text{ mol}$ of $\\\\text{H}_2$ consumed.
> >    * *Calculation:*
> >      $$\\\\text{Rate of formation of NH}_3 = \\\\frac{2}{3} \\\\times \\\\text{Rate of consumption of H}_2$$
> >      $$\\\\text{Rate} = \\\\frac{2}{3} \\\\times 0.150 = 0.100\\\\text{ mol dm}^{-3}\\\\text{ s}^{-1}$$

> [!EXAMPLE]
> #### 📝 Worked Example 2: Calculating Average Reaction Rate
> **Question:** The decomposition of hydrogen peroxide was monitored by measuring its concentration over time:
> $$2\\\\text{H}_2\\\\text{O}_2\\\\text{(aq)} \\\\rightarrow 2\\\\text{H}_2\\\\text{O}\\\\text{(l)} + \\\\text{O}_2\\\\text{(g)}$$
> At $t = 0\\\\text{ s}$, the concentration of $\\\\text{H}_2\\\\text{O}_2$ was $2.00\\\\text{ mol dm}^{-3}$. After $120\\\\text{ s}$, the concentration dropped to $1.40\\\\text{ mol dm}^{-3}$.
> 
> Calculate the average rate of decomposition of $\\\\text{H}_2\\\\text{O}_2$ during this $120$-second time interval, and state its units.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the average rate formula:**
> >    * *Equation:*
> >      $$\\\\text{Average Rate} = -\\\\frac{\\\\Delta[\\\\text{H}_2\\\\text{O}_2]}{\\\\Delta t} = -\\\\frac{[\\\\text{H}_2\\\\text{O}_2]\\\\text{ (final)} - [\\\\text{H}_2\\\\text{O}_2]\\\\text{ (initial)}}{t\\\\text{ (final)} - t\\\\text{ (initial)}}$$
> > 
> > 2. **Substitute values and calculate:**
> >    * *Calculation:*
> >      $$\\\\text{Average Rate} = -\\\\frac{1.40 - 2.00}{120 - 0} = -\\\\frac{-0.60}{120}$$
> >      $$\\\\text{Average Rate} = 0.0050\\\\text{ mol dm}^{-3}\\\\text{ s}^{-1} \\\\text{ (or } 5.0 \\\\times 10^{-3}\\\\text{ mol dm}^{-3}\\\\text{ s}^{-1}\\\\text{)}$$
> > 
> > > [!WARNING]
> > > **💡 Top-Tier Exam Note (Overall Rate vs. Rate of Consumption):**
> > > If the question specifically asked for the **overall Rate of Reaction**, you would divide this answer by its stoichiometric coefficient $2$ to get $0.0025\text{ mol dm}^{-3}\text{ s}^{-1}$. Knowing this distinction will save top-tier students from falling for one of the most frustrating trick questions in the syllabus!

> [!IMPORTANT]
> ### 🧮 The Rate Equation and Reaction Orders
> * **Rate Equation:** An expression showing how the rate of reaction relates to the concentrations of the reactants:
>   $$\\text{Rate} = k[\\text{A}]^x\\text[\\text{B}]^y$$
> * **Rate Constant ($k$):** A proportionality constant that links reaction rate to concentrations at a specific temperature.
> * **Reaction Orders:** The powers ($x$ and $y$) to which the concentration terms are raised.
>   * *The order with respect to a reactant indicates the number of species (atoms, molecules, or ions) of that reactant involved in the rate-determining step (RDS) of the reaction mechanism.*
> 
> > [!WARNING]
> > ### ⚠️ Exam Order Limit
> > The values for orders of reaction in rate equations will only ever be $0$, $1$, or $2$ at International A Level.


> [!IMPORTANT]
> ### 🧮 Types of Reaction Orders
> 1. **Zero Order ($x = 0$):**
>    * The rate is independent of the reactant concentration.
>    * Tripling concentration has no effect on rate.
> 
> ${svgToken(zeroOrderSvg)}
> 
> 2. **First Order ($x = 1$):**
>    * The rate is directly proportional to the reactant concentration.
>    * Doubling concentration doubles the rate.
> 
> ${svgToken(firstOrderSvg)}
> 
> 3. **Second Order ($x = 2$):**
>    * The rate is proportional to the square of the reactant concentration.
>    * Doubling concentration increases the rate by a factor of 4 ($2^2 = 4$).
> 
> ${svgToken(secondOrderSvg)}
> 
> 4. **Overall Order:** The sum of all individual orders in the rate equation ($x + y$).


> [!BOX]
> ### 📋 Common Rate Constant Units
> Since the rate is always in $\\\\text{mol dm}^{-3}\\\\text{ s}^{-1}$ and concentration is in $\\\\text{mol dm}^{-3}$, the units of $k$ depend on the overall order:
> * **Zero Order:** $k = \\\\text{Rate}$, units: $\\\\text{mol dm}^{-3}\\\\text{ s}^{-1}$
> * **First Order:** $k = \\\\dfrac{\\\\text{Rate}}{[\\\\text{A}]}$, units: $\\\\text{s}^{-1}$
> * **Second Order:** $k = \\\\dfrac{\\\\text{Rate}}{[\\\\text{A}][\\\\text{B}]}$, units: $\\\\text{dm}^3\\\\text{ mol}^{-1}\\\\text{ s}^{-1}$
> * **Third Order:** $k = \\\\dfrac{\\\\text{Rate}}{[\\\\text{A}]^2[\\\\text{B}]}$, units: $\\\\text{dm}^6\\\\text{ mol}^{-2}\\\\text{ s}^{-1}$

> [!IMPORTANT]
> ### 🧮 Concentration-Time Graphs & Half-Life (t₁/₂)
> Plotting reactant concentration against time gives a curve from which we can determine the reaction order and half-life:
> * **Half-Life (t₁/₂):** The time taken for the concentration of a reactant to fall to half of its initial value.
> * **First-Order Half-Life:** For a first-order reaction, the half-life is constant and is independent of the initial concentration:
>   **t₁/₂ = ln(2) / k**
>   *As shown in the graph below, the time taken for [A] to decrease from 120 to 60 is 100 s, from 60 to 30 is another 100 s, and from 30 to 15 is also 100 s. This constant half-life of 100 s confirms a first-order reaction.*
> 
> ${svgToken(halfLifeSvg)}

> [!EXAMPLE]
> #### 📝 Worked Example 3: Graph Analysis of Compound P Decomposition
> **Question:** A compound P decomposes when heated. The graph shows the change in concentration when a sample of P is heated:
> 
> ${svgToken(compoundPDecompositionSvg)}
> 
> 1. State what is meant by the term half-life of reaction.
> 2. Use the data to show that the decomposition of P is a first-order reaction.
> 3. Explain the effect on the half-life of doubling the initial concentration of P.
> 4. Calculate the rate constant, k, for this reaction using the expression k = 0.693 / t₁/₂.
> 5. Write the rate equation for this reaction.
> 6. Use the data to:
>    a) Determine the concentration of P at 800 s (given as 1.75 units).
>    b) Calculate the rate of reaction at 800 s.
> 7. Describe how you could determine the reaction rate at 800 s directly from the graph.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Definition of Half-life:**
> >    The time taken for the concentration of a reactant to decrease to half of its initial value.
> > 
> > 2. **Show First-order Reaction:**
> >    * First half-life (from 5.8 to 2.9 units): t₁/₂ = 350 - 0 = 350 s.
> >    * Second half-life (from 2.9 to 1.45 units): t₁/₂ = 700 - 350 = 350 s.
> >    * Third half-life (from 1.45 to 0.72 units): t₁/₂ = 1050 - 700 = 350 s.
> >    * *Conclusion:* Since successive half-lives are constant (350 s), the reaction is first-order with respect to P.
> > 
> > 3. **Effect of Doubling Concentration:**
> >    The half-life will remain unchanged because the half-life of a first-order reaction is independent of the initial concentration.
> > 
> > 4. **Calculate rate constant, k:**
> >    k = 0.693 / t₁/₂ = 0.693 / 350 s = 1.98 × 10⁻³ s⁻¹
> > 
> > 5. **Write rate equation:**
> >    rate = k[P]
> > 
> > 6. **Calculations at 800 s:**
> >    * **a)** From the graph, concentration of P at 800 s is 1.75 units.
> >    * **b)** rate = k[P] = (1.98 × 10⁻³ s⁻¹) × (1.75 units) = 3.47 × 10⁻³ units s⁻¹
> > 
> > 7. **Determine rate directly from graph:**
> >    Draw a tangent to the curve at t = 800 s and calculate the gradient (slope) of this tangent: gradient = Δconcentration / Δtime. The magnitude of this gradient represents the rate at that instant.

> [!EXAMPLE]
> #### 📝 Worked Example 4: Deducing Rate Equation & Rate Constant from Table Data
> **Question:** The initial rate of reaction between bromomethane ($\\\\text{CH}_3\\\\text{Br}$) and hydroxide ions ($\\\\text{OH}^-$) was measured at $298\\\\text{ K}$ for different initial concentrations:
> $$\\\\text{CH}_3\\\\text{Br(aq)} + \\\\text{OH}^-\\\\text{(aq)} \\\\rightarrow \\\\text{CH}_3\\\\text{OH(aq)} + \\\\text{Br}^-\\\\text{(aq)}$$
>
> | Experiment | [CH₃Br] / mol dm⁻³ | [OH⁻] / mol dm⁻³ | Initial Rate / mol dm⁻³ s⁻¹ |
> | :---: | :---: | :---: | :---: |
> | 1 | 0.10 | 0.10 | 1.50 × 10⁻⁴ |
> | 2 | 0.20 | 0.10 | 3.00 × 10⁻⁴ |
> | 3 | 0.10 | 0.30 | 4.50 × 10⁻⁴ |
> 
> 1. Deduce the order of reaction with respect to $\\\\text{CH}_3\\\\text{Br}$ and $\\\\text{OH}^-$, showing your reasoning.
> 2. Write the overall rate equation for the reaction.
> 3. Calculate the value of the rate constant, $k$, at $298\\\\text{ K}$ and state its units.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Deduce Reaction Orders:**
> >    * **Order w.r.t $\\\\text{CH}_3\\\\text{Br}$:** Compare Experiments 1 & 2 where [$\\\\text{OH}^-$] is constant ($0.10\\\\text{ mol dm}^{-3}$). Doubling [$\\\\text{CH}_3\\\\text{Br}$] (from $0.10$ to $0.20$) doubles the rate (from $1.50 \\\\times 10^{-4}$ to $3.00 \\\\times 10^{-4}$). Since $2^1 = 2$, the order w.r.t $\\\\text{CH}_3\\\\text{Br}$ is **1** (First Order).
> >    * **Order w.r.t $\\\\text{OH}^-$:** Compare Experiments 1 & 3 where [$\\\\text{CH}_3\\\\text{Br}$] is constant ($0.10\\\\text{ mol dm}^{-3}$). Tripling [$\\\\text{OH}^-$] (from $0.10$ to $0.30$) triples the rate (from $1.50 \\\\times 10^{-4}$ to $4.50 \\\\times 10^{-4}$). Since $3^1 = 3$, the order w.r.t $\\\\text{OH}^-$ is **1** (First Order).
> > 
> > 2. **Overall Rate Equation:**
> >    $$\\\\text{Rate} = k[\\\\text{CH}_3\\\\text{Br}][\\\\text{OH}^-]$$
> > 
> > 3. **Calculate Rate Constant $k$ and Units:**
> >    * Rearranging: $k = \\\\dfrac{\\\\text{Rate}}{[\\\\text{CH}_3\\\\text{Br}][\\\\text{OH}^-]}$
> >    * Using Exp 1: $k = \\\\dfrac{1.50 \\\\times 10^{-4}}{(0.10)(0.10)} = 1.50 \\\\times 10^{-2}$
> >    * **Units:** $\\\\dfrac{\\\\text{mol dm}^{-3}\\\\text{ s}^{-1}}{(\\\\text{mol dm}^{-3})(\\\\text{mol dm}^{-3})} = \\\\text{dm}^3\\\\text{ mol}^{-1}\\\\text{ s}^{-1}$

> [!EXAMPLE]
> #### 📝 Worked Example 5: Deducing Rate Equation & Constant for 3-Reactant Bromate Reaction
> **Question:** The reaction between bromate ions ($\\\\text{BrO}_3^-$), bromide ions ($\\\\text{Br}^-$), and hydrogen ions ($\\\\text{H}^+$) was investigated:
> $$\\\\text{BrO}_3^-\\\\text{(aq)} + 5\\\\text{Br}^-\\\\text{(aq)} + 6\\\\text{H}^+\\\\text{(aq)} \\\\rightarrow 3\\\\text{Br}_2\\\\text{(aq)} + 3\\\\text{H}_2\\\\text{O(l)}$$
>
> | Experiment | [BrO₃⁻] / mol dm⁻³ | [Br⁻] / mol dm⁻³ | [H⁺] / mol dm⁻³ | Initial Rate / mol dm⁻³ s⁻¹ |
> | :---: | :---: | :---: | :---: | :---: |
> | 1 | 0.10 | 0.10 | 0.10 | 1.20 × 10⁻³ |
> | 2 | 0.20 | 0.10 | 0.10 | 2.40 × 10⁻³ |
> | 3 | 0.10 | 0.30 | 0.10 | 3.60 × 10⁻³ |
> | 4 | 0.10 | 0.10 | 0.20 | 4.80 × 10⁻³ |
>
> 1. Deduce the order of reaction with respect to $\\\\text{BrO}_3^-$, $\\\\text{Br}^-$, and $\\\\text{H}^+$.
> 2. State the overall order of reaction.
> 3. Calculate the rate constant, $k$, stating its units.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Deduce Reaction Orders:**
> >    * **W.r.t $\\\\text{BrO}_3^-$:** Compare Exp 1 & 2 ([$\\\\text{Br}^-$] and [$\\\\text{H}^+$] constant). Doubling [$\\\\text{BrO}_3^-$] doubles rate ($2.40/1.20 = 2$). Order = **1**.
> >    * **W.r.t $\\\\text{Br}^-$:** Compare Exp 1 & 3 ([$\\\\text{BrO}_3^-$] and [$\\\\text{H}^+$] constant). Tripling [$\\\\text{Br}^-$] triples rate ($3.60/1.20 = 3$). Order = **1**.
> >    * **W.r.t $\\\\text{H}^+$:** Compare Exp 1 & 4 ([$\\\\text{BrO}_3^-$] and [$\\\\text{Br}^-$] constant). Doubling [$\\\\text{H}^+$] quadruples rate ($4.80/1.20 = 4 = 2^2$). Order = **2**.
> > 
> > 2. **Overall Order:**
> >    $$\\\\text{Overall order} = 1 + 1 + 2 = 4 \\\\text{ (Fourth order overall)}$$
> > 
> > 3. **Calculate Rate Constant $k$ and Units:**
> >    * $k = \\\\dfrac{\\\\text{Rate}}{[\\\\text{BrO}_3^-][\\\\text{Br}^-][\\\\text{H}^+]^2} = \\\\dfrac{1.20 \\\\times 10^{-3}}{(0.10)(0.10)(0.10)^2} = 12.0$
> >    * **Units:** $\\\\dfrac{\\\\text{mol dm}^{-3}\\\\text{ s}^{-1}}{(\\\\text{mol dm}^{-3})^4} = \\\\text{dm}^9\\\\text{ mol}^{-3}\\\\text{ s}^{-1}$

> [!EXAMPLE]
> #### 📝 Worked Example 6: Deducing Orders with Non-Isolated Conditions (Ratio Method)
> **Question:** Consider the gas-phase reaction: $\\\\text{A(g)} + 2\\\\text{B(g)} \\\\rightarrow \\\\text{C(g)}$. A student collects the following initial rates data:
>
> | Experiment | [A] / mol dm⁻³ | [B] / mol dm⁻³ | Initial Rate / mol dm⁻³ s⁻¹ |
> | :---: | :---: | :---: | :---: |
> | 1 | 0.20 | 0.20 | 4.0 × 10⁻³ |
> | 2 | 0.40 | 0.20 | 1.6 × 10⁻² |
> | 3 | 0.60 | 0.40 | 1.44 × 10⁻¹ |
>
> 1. Deduce the order of reaction with respect to $\\\\text{A}$.
> 2. Deduce the order of reaction with respect to $\\\\text{B}$ using the ratio method between Exp 2 and Exp 3, where [$\\\\text{A}$] is not constant.
> 3. Write the rate equation.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Order w.r.t A:**
> >    * Compare Exp 1 & 2 ([$\\\\text{B}$] constant at $0.20$). Doubling [$\\\\text{A}$] (from $0.20$ to $0.40$) increases rate by a factor of 4 ($1.6 \\\\times 10^{-2} / 4.0 \\\\times 10^{-3} = 4 = 2^2$).
> >    * Order w.r.t $\\\\text{A}$ = **2** (Second order).
> > 
> > 2. **Order w.r.t B using Ratio Method:**
> >    * Set up the ratio of rate equations for Exp 3 to Exp 2:
> >      $$\\\\dfrac{\\\\text{Rate}_3}{\\\\text{Rate}_2} = \\\\dfrac{k[\\\\text{A}]_3^2[\\\\text{B}]_3^y}{k[\\\\text{A}]_2^2[\\\\text{B}]_2^y}$$
> >    * Substitute values:
> >      $$\\\\dfrac{1.44 \\\\times 10^{-1}}{1.6 \\\\times 10^{-2}} = \\\\left(\\\\dfrac{0.60}{0.40}\\\\right)^2 \\\\times \\\\left(\\\\dfrac{0.40}{0.20}\\\\right)^y$$
> >      $$9.0 = (1.5)^2 \\\\times (2.0)^y = 2.25 \\\\times 2^y$$
> >      $$2^y = \\\\dfrac{9.0}{2.25} = 4.0 \\\\implies y = 2 \\\\text{ (Second order w.r.t B)}$$
> > 
> > 3. **Rate Equation:**
> >    $$\\\\text{Rate} = k[\\\\text{A}]^2[\\\\text{B}]^2$$

> [!EXAMPLE]
> #### 📝 Worked Example 7: Isolation Method & Pseudo-First-Order Kinetics
> **Question:** The reaction between propanone ($\\\\text{CH}_3\\\\text{COCH}_3$) and iodine ($\\\\text{I}_2$) is acid-catalyzed:
> $$\\\\text{CH}_3\\\\text{COCH}_3 + \\\\text{I}_2 \\\\xrightarrow{\\\\text{H}^+} \\\\text{CH}_3\\\\text{COCH}_2\\\\text{I} + \\\\text{H}^+ + \\\\text{I}^-$$
> The true rate equation is: $\\\\text{Rate} = k[\\\\text{CH}_3\\\\text{COCH}_3][\\\\text{H}^+]$ (zero-order with respect to $\\\\text{I}_2$).
> In an experiment, propanone ($1.0\\\\text{ mol dm}^{-3}$) and acid ($1.0\\\\text{ mol dm}^{-3}$) are present in massive excess compared to iodine ($0.005\\\\text{ mol dm}^{-3}$).
>
> 1. Explain why the reaction exhibits **pseudo-zero-order kinetics** with respect to concentrations during the reaction.
> 2. Express the observed rate constant, $k_{\\\\text{obs}}$, in terms of the true rate constant $k$ and the reactant concentrations.
> 3. If $k = 5.6 \\\\times 10^{-5}\\\\text{ dm}^3\\\\text{ mol}^{-1}\\\\text{ s}^{-1}$, calculate the value of $k_{\\\\text{obs}}$.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Explanation of Pseudo Kinetics:**
> >    * Since [$\\\\text{CH}_3\\\\text{COCH}_3$] and [$\\\\text{H}^+$] are in massive excess ($1.0\\\\text{ mol dm}^{-3}$) compared to [$\\\\text{I}_2$] ($0.005\\\\text{ mol dm}^{-3}$), their concentrations remain virtually unchanged throughout the entire reaction.
> >    * Therefore, the product $k[\\\\text{CH}_3\\\\text{COCH}_3][\\\\text{H}^+]$ stays constant, making the rate appear constant (pseudo-zero order).
> > 
> > 2. **Expression for $k_{\\\\text{obs}}$:**
> >    $$k_{\\\\text{obs}} = k[\\\\text{CH}_3\\\\text{COCH}_3][\\\\text{H}^+]$$
> > 
> > 3. **Calculation:**
> >    $$k_{\\\\text{obs}} = (5.6 \\\\times 10^{-5}\\\\text{ dm}^3\\\\text{ mol}^{-1}\\\\text{ s}^{-1}) \\\\times (1.0\\\\text{ mol dm}^{-3}) \\\\times (1.0\\\\text{ mol dm}^{-3}) = 5.6 \\\\times 10^{-5}\\\\text{ s}^{-1}$$`,
    keyPoints: [
      'Concentration-time graphs allow determining reaction orders and half-life (t₁/₂ = ln(2)/k for a first-order reaction).',
      'Reaction orders can only be determined experimentally (e.g. using initial rates table data) and cannot be predicted from the balanced equation stoichiometry.',
      'The rate constant k links reaction rate to concentrations at a specific temperature; its value is constant at a constant temperature but increases as temperature rises.',
      'The units of k vary depending on the overall order of the reaction and are deduced by rearranging the rate equation.',
      'Average rate of reaction is calculated by dividing the change in reactant/product concentration by the time interval (\\Delta[C]/\\Delta t).',
      'Predicting the effect of changing concentration on rate involves raising the change factor to the power of the reactant order (e.g., doubling concentration for a second-order reactant increases rate by 2^2 = 4).',
      'In tables where no two experiments keep a reactant constant, use a previously determined order to set up a ratio equation and isolate the unknown order.',
      'Under pseudo-first-order conditions (isolation method), a reactant in massive excess has a virtually constant concentration; its term is absorbed into the observed rate constant (k_obs).'
    ],
    equationVisualizer: {
      reactants: [['NO', '#ef4444'], ['O₂', '#3b82f6']],
      products: [['NO₂', '#10b981']],
      description: "Nitrogen monoxide reacts with oxygen where the rate depends on [NO]² and [O₂]"
    }
  },
  {
    id: 'reaction-mechanisms-rds-u4-l1',
    title: 'Reaction Mechanisms & Rate-Determining Step',
    type: 'text',
    rateMechanismBuilder: true,
    content: `
> [!NOTE]
> ### ⛓️ Multi-Step Reactions & Mechanisms
> Most chemical reactions do not occur in a single collision. For example, consider the acidic redox reaction:
> $$\\\\text{MnO}_4^-\\\\text{(aq)} + 8\\\\text{H}^+\\\\text{(aq)} + 5\\\\text{Fe}^{2+}\\\\text{(aq)} \\\\rightarrow \\\\text{Mn}^{2+}\\\\text{(aq)} + 4\\\\text{H}_2\\\\text{O}\\\\text{(l)} + 5\\\\text{Fe}^{3+}\\\\text{(aq)}$$
> For this reaction to occur in a single step, $14$ particles would have to collide simultaneously, with the correct orientation and sufficient energy. The probability of this is statistically zero. Therefore, reactions proceed via a series of simple steps called a **reaction mechanism**.
> * **Elementary Step:** An individual step in a mechanism.
> * **Intermediate:** A species formed in one step and consumed in a subsequent step (does not appear in the overall balanced equation).
> * **Rate-Determining Step (RDS):** The slowest step in a reaction mechanism. It acts as a bottleneck and controls the overall rate.
> 
> > [!BOX]
> > ### 🔬 Elementary vs. Non-Elementary Reactions
> > * **Elementary Reaction:** A reaction that occurs via a single collision between reactant particles.
> >   * *Rate Deduction:* The rate equation can be deduced directly from its stoichiometric coefficients:
> >     $$x\\\\text{A} + y\\\\text{B} \\\\rightarrow \\\\text{AB} \\\\implies \\\\text{Rate} = k[\\\\text{A}]^x[\\\\text{B}]^y$$
> >   * *Example:*
> >     $$\\\\text{NO(g)} + \\\\text{O}_3\\\\text{(g)} \\\\rightarrow \\\\text{NO}_2\\\\text{(g)} + \\\\text{O}_2\\\\text{(g)} \\\\implies \\\\text{Rate} = k[\\\\text{NO}][\\\\text{O}_3]$$
> > 
> > * **Non-Elementary Reaction:** A reaction that takes place through a series of elementary steps (a reaction mechanism).
> >   * *Rate Deduction:* The rate equation cannot be predicted from the stoichiometry of the overall equation and must be determined experimentally.
> >   * *Example 1:*
> >     $$2\\\\text{N}_2\\\\text{O}_5\\\\text{(g)} \\\\rightarrow 4\\\\text{NO}_2\\\\text{(g)} + \\\\text{O}_2\\\\text{(g)} \\\\implies \\\\text{Rate} = k[\\\\text{N}_2\\\\text{O}_5]$$
> >     *Mechanism:*
> >     1. $\\\\text{N}_2\\\\text{O}_5 \\\\rightarrow \\\\text{NO}_2 + \\\\text{NO}_3$ (Slow / RDS)
> >     2. $\\\\text{NO}_2 + \\\\text{NO}_3 \\\\rightarrow \\\\text{NO}_2 + \\\\text{NO} + \\\\text{O}_2$ (Fast)
> >     3. $\\\\text{NO} + \\\\text{NO}_3 \\\\rightarrow 2\\\\text{NO}_2$ (Fast)
> >   * *Example 2:*
> >     $$\\\\text{NO}_2\\\\text{(g)} + \\\\text{CO(g)} \\\\rightarrow \\\\text{NO(g)} + \\\\text{CO}_2\\\\text{(g)} \\\\implies \\\\text{Rate} = k[\\\\text{NO}_2]^2$$
> >     *Mechanism:*
> >     1. $\\\\text{NO}_2 + \\\\text{NO}_2 \\\\rightarrow \\\\text{NO}_3 + \\\\text{NO}$ (Slow / RDS)
> >     2. $\\\\text{NO}_3 + \\\\text{CO} \\\\rightarrow \\\\text{NO}_2 + \\\\text{CO}_2$ (Fast)
> 
> > [!TIP]
> > ### 📋 The Student Notes Analogy
> > Imagine three students preparing study notes:
> > * **Student 1:** Collects sheets from 10 piles (**SLOW**).
> > * **Student 2:** Tidies the sheets (**FAST**).
> > * **Student 3:** Staples the sheets (**FAST**).
> > 
> > The overall rate of producing finished notes depends entirely on the speed of **Student 1**. The other students do nothing but wait for Student 1 to finish. Thus, Student 1 represents the rate-determining step.
> 
> > [!TIP]
> > ### 🧮 Theoretical Example of RDS
> > Consider a multi-step reaction:
> > $$\\\\text{A} + \\\\text{B} + \\\\text{C} \\\\rightarrow \\\\text{D} + \\\\text{E}$$
> > If the experimentally determined rate equation is:
> > $$\\\\text{Rate} = k[\\\\text{A}]^m[\\\\text{B}]^n$$
> > This tells us that species $\\\\text{A}$ and $\\\\text{B}$ must be involved in or before the rate-determining step, while reactant $\\\\text{C}$ participates only in a subsequent fast step.
> > * **Step 1 (Slow / RDS):** $\\\\text{A} + \\\\text{B} \\\\rightarrow \\\\text{Z}$
> > * **Step 2 (Fast):** $\\\\text{Z} + \\\\text{C} \\\\rightarrow \\\\text{D} + \\\\text{E}$
> 
>  > [!IMPORTANT]
>  > ### 🗮️ Rules for Connecting Mechanisms to Rate Equations
>  > 1. **Reactant Presence:** All reactant species involved either in, or before, the rate-determining step have an effect on the rate and will appear in the rate equation.
>  > 2. **Reaction Order:** The coefficients of reactants in the RDS (or steps preceding it) match the order of those reactants in the rate equation.
>  > 3. **Species After RDS (Zero Order):** Any reactant participating ONLY in fast steps *after* the RDS will have a **Zero Order** ($order = 0$) with respect to the rate equation and will not appear in it.
>  > 4. **Species in Large Excess:** A reactant present in such a large excess that its concentration change is negligible will not have a measurable effect on the rate and won't appear in the rate equation.
>  > 5. **Catalysts in Rate Equations:** If a catalyst participates in or before the RDS, it **will appear in the rate equation**, even though it cancels out and does **not** appear in the overall balanced chemical equation.

> [!BOX]
> ### 📊 Reaction Energy Profiles: SN1 vs. SN2 Mechanisms
> The kinetic evidence of halogenoalkane hydrolysis directly distinguishes between two mechanism types:
> 
> 1. **Transition State vs. Intermediate:**
>    * **Intermediate:** A definite chemical species with a finite lifetime (e.g., carbocations, lifetime $\\\\approx 10^{-6}\\\\text{ s}$). Appears as an **energy minimum** (well) on a reaction profile.
>    * **Transition State:** An unstable arrangement of atoms at the **energy maximum** (peak) of a step. It has a negligible lifetime ($\\\\approx 10^{-15}\\\\text{ s}$, the time of molecular collision).
> 
> 2. **SN2 Hydrolysis (Primary Halogenoalkanes):**
>    * **Rate Equation:** $\\\\text{Rate} = k[\\\\text{RHal}][\\\\text{OH}^-]$ (Bimolecular)
>    * **Reaction Profile:** Shows a **single peak** (one transition state) representing the simultaneous nucleophilic attack and leaving group departure. No intermediate is formed.
>    * **Steric Crowding Effect:** Primary halogenoalkanes have small hydrogen atoms surrounding the central carbon, allowing the nucleophile to attack easily. In tertiary halogenoalkanes, three bulky alkyl groups cause steric hindrance/crowding, making the transition state highly unstable (higher $E_a$). Thus, SN2 rates increase in the order: $3^\\\\circ < 2^\\\\circ < 1^\\\\circ$.
> 
> ${svgToken(sn2ProfileSvg)}
> 
> 3. **SN1 Hydrolysis (Tertiary Halogenoalkanes):**
>    * **Rate Equation:** $\\\\text{Rate} = k[\\\\text{RHal}]$ (Unimolecular)
>    * **Reaction Profile:** Shows **two peaks** (two transition states) separated by a well (the carbocation intermediate minimum).
>    * **RDS Activation Energy:** The activation energy for the first step (ionization to form the carbocation) is much higher than the second step ($E_a(1) > E_a(2)$), making it the rate-determining step.
>    * **Inductive Effect:** Alkyl groups donate electrons towards the carbocation carbon, stabilizing the $3^\\\\circ$ carbocation intermediate far more than a $1^\\\\circ$ one. This dramatically lowers $E_a(1)$. Thus, SN1 rates increase in the order: $1^\\\\circ < 2^\\\\circ < 3^\\\\circ$.
> 
> ${svgToken(sn1ProfileSvg)}
> 
> *Secondary halogenoalkane hydrolysis proceeds via a mixture of both SN1 and SN2 mechanisms.*

> [!EXAMPLE]
> #### 📝 Worked Example 1: Deducing a Mechanism from a Rate Equation
> **Question:** The reaction $\\\\text{NO}_2\\\\text{(g)} + \\\\text{CO(g)} \\\\rightarrow \\\\text{NO(g)} + \\\\text{CO}_2\\\\text{(g)}$ has the experimental rate equation $\\\\text{Rate} = k[\\\\text{NO}_2]\\\^2 . $ Explain why the following two-step mechanism is consistent with the rate equation:
> 
> * **Step 1 (slow):** $\\\\text{NO}_2 + \\\\text{NO}_2 \\\\rightarrow \\\\text{NO}_3 + \\\\text{NO}$
> * **Step 2 (fast):** $\\\\text{NO}_3 + \\\\text{CO} \\\\rightarrow \\\\text{NO}_2 + \\\\text{CO}_2$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the rate-determining step:**
> >    * Step 1 is specified as the slow step, meaning it is the RDS.
> > 
> > 2. **Formulate the rate equation from the RDS:**
> >    * The reactants in Step 1 are two molecules of $\\\\text{NO}_2$
> >    * Therefore, the rate equation is:
> >      $$\\\\text{Rate} = k[\\\\text{NO}_2][\\\\text{NO}_2] = k[\\\\text{NO}_2]^2$$
> >    * This matches the experimentally determined rate equation.
> > 
> > 3. **Verify the overall stoichiometry:**
> >    * Add Step 1 and Step 2:
> >      $$2\\\\text{NO}_2 + \\\\text{NO}_3 + \\\\text{CO} \\\\rightarrow \\\\text{NO}_3 + \\\\text{NO} + \\\\text{NO}_2 + \\\\text{CO}_2$$
> >    * Cancel intermediate $\\\\text{NO}_3$ and one $\\\\text{NO}_2$ from both sides:
> >    * The mechanism yields the correct overall equation, proving it is consistent.

&nbsp;

> [!TIP]
> ### ⚖️ Advanced Concept: Fast Pre-Equilibrium Mechanisms
> When Step 1 is a **fast equilibrium step** and Step 2 is the **slow RDS**:
> 1. The initial rate equation formulated from the RDS contains an **intermediate** (e.g., $rate = k_2[Z][B]$).
> 2. Because intermediates **cannot** remain in the final rate equation, we express $[Z]$ in terms of original reactants using the equilibrium expression ($K_c = \frac{[Z]}{[A]^2} \implies [Z] = K_c [A]^2$).
> 3. Substituting $[Z]$ back into the RDS rate equation gives the overall rate equation: $rate = k[A]^2[B]$ (where $k = k_2 \times K_c$).

&nbsp;

> [!EXAMPLE]
> #### 📝 Worked Example 2: Mechanism with a Fast Pre-Equilibrium Step
> **Question:** The oxidation of nitrogen monoxide $2\\\\text{NO(g)} + \\\\text{O}_2\\\\text{(g)} \\\\rightarrow 2\\\\text{NO}_2\\\\text{(g)}$ has the experimental rate equation $\\\\text{Rate} = k[\\\\text{NO}]^2[\\\\text{O}_2]$. Explain how the following mechanism is consistent with this rate equation:
> 
> * **Step 1 (fast equilibrium):** $\\\\text{NO} + \\\\text{NO} \\\\rightleftharpoons \\\\text{N}_2\\\\text{O}_2$
> * **Step 2 (slow / RDS):** $\\\\text{N}_2\\\\text{O}_2 + \\\\text{O}_2 \\\\rightarrow 2\\\\text{NO}_2$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the rate-determining step and its reactants:**
> >    * Step 2 is the rate-determining step (slow step), which involves one $\\\\text{N}_2\\\\text{O}_2$ molecule and one $\\\\text{O}_2$ molecule.
> > 
> > 2. **Trace the intermediate back to the fast step reactants:**
> >    * $\\\\text{N}_2\\\\text{O}_2$ is an intermediate formed in the preceding fast step (Step 1) from two $\\\\text{NO}$ molecules.
> > 
> > 3. **Determine the overall rate dependence:**
> >    * Therefore, the overall rate depends on two $\\\\text{NO}$ molecules and one $\\\\text{O}_2$ molecule, which matches the given rate equation: $\\\\text{Rate} = k[\\\\text{NO}]^2[\\\\text{O}_2]$.

> [!EXAMPLE]
> #### 📝 Worked Example 3: Identifying Catalysts vs. Intermediates from Mechanisms
> **Question:** Stratospheric ozone depletion occurs via the following two-step mechanism:
> 
> * **Step 1:** $\\\\text{O}_3\\\\text{(g)} + \\\\text{Cl(g)} \\\\rightarrow \\\\text{ClO(g)} + \\\\text{O}_2\\\\text{(g)}$
> * **Step 2:** $\\\\text{ClO(g)} + \\\\text{O(g)} \\\\rightarrow \\\\text{Cl(g)} + \\\\text{O}_2\\\\text{(g)}$
> 
> 1. Write the overall balanced equation for the reaction.
> 2. Identify the **catalyst** and the **intermediate**, justifying your choices.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Overall Balanced Equation:**
> >    * Sum both steps and cancel species appearing on both sides ($\\\\text{Cl}$ and $\\\\text{ClO}$):
> >      $$\\\\text{O}_3\\\\text{(g)} + \\\\text{O(g)} \\\\rightarrow 2\\\\text{O}_2\\\\text{(g)}$$
> > 
> > 2. **Identifying Catalyst & Intermediate:**
> >    * **Catalyst:** Chlorine free radicals ($\\\\text{Cl}$).
> >      * *Justification:* $\\\\text{Cl}$ is consumed in Step 1 as a reactant and regenerated in Step 2 as a product. It increases the rate without being permanently used up.
> >    * **Intermediate:** Chlorine monoxide radicals ($\\\\text{ClO}$).
> >      * *Justification:* $\\\\text{ClO}$ is produced in Step 1 as a product and subsequently consumed in Step 2 as a reactant. It does not appear in the overall equation.

> [!EXAMPLE]
> #### 📝 Worked Example 4: Distinguishing SN1 vs. SN2 Kinetic Data & Bromoalkane Selection
> **Question 1:** Hydrolysis of primary 1-chlorobutane follows the rate equation $\\\\text{Rate} = k[\\\\text{C}_4\\\\text{H}_9\\\\text{Cl}][\\\\text{OH}^-]$, whereas tertiary 2-chloro-2-methylpropane follows $\\\\text{Rate} = k[\\\\text{C}_4\\\\text{H}_9\\\\text{Cl}]$.
> 
> 1. State the mechanism type ($S_N1$ or $S_N2$) for each compound.
> 2. Explain why tertiary halogenoalkanes undergo $S_N1$ hydrolysis rather than $S_N2$.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Mechanism Classification:**
> >    * **1-chlorobutane:** $S_N2$ mechanism (second-order overall, bimolecular RDS involving both haloalkane and $\\\\text{OH}^-$).
> >    * **2-chloro-2-methylpropane:** $S_N1$ mechanism (first-order overall, unimolecular RDS involving ionization of haloalkane only).
> > 
> > 2. **Explanation of Mechanism Preference:**
> >    * **Steric Hindrance:** Tertiary halogenoalkanes have three bulky methyl groups surrounding the central carbon, preventing the $\\\\text{OH}^-$ nucleophile from approaching for an $S_N2$ direct attack.
> >    * **Carbocation Stability:** The $3^\\\\circ$ carbocation formed in $S_N1$ is strongly stabilized by the electron-donating inductive effect of three alkyl groups, lowering $E_a(1)$.
> 
> **Question 2:** A bromoalkane was hydrolyzed by an aqueous alkaline solution. The reaction was found to be first order with respect to the bromoalkane and zero order with respect to hydroxide ions.
> Which bromoalkane is consistent with this information?
> * **A)** $\\\\text{CH}_3\\\\text{Br}$
> * **B)** $\\\\text{CH}_3\\\\text{CH}_2\\\\text{Br}$
> * **C)** $\\\\text{CH}_3\\\\text{CH}_2\\\\text{CH}_2\\\\text{Br}$
> * **D)** $(\\\\text{CH}_3)_3\\\\text{CBr}$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > **Correct Answer:** **D ($(\\\\text{CH}_3)_3\\\\text{CBr}$)**
> > 
> > **Reasoning:**
> > * First order w.r.t bromoalkane and zero order w.r.t $\\\\text{OH}^-$ dictates an **$S_N1$ mechanism**.
> > * $S_N1$ mechanisms proceed via a unimolecular rate-determining step to form a stable $3^{\\circ}$ carbocation intermediate.
> > * Options A, B, and C are all primary ($1^{\\circ}$) bromoalkanes which undergo $S_N2$ hydrolysis. Option D is 2-bromo-2-methylpropane, a tertiary ($3^{\\circ}$) bromoalkane, which undergoes $S_N1$ hydrolysis.

> [!EXAMPLE]
> #### 📝 Worked Example 5: Proposing a Multi-step Mechanism from Initial Rates Data
> **Question:** A reaction between $\\\\text{A}$, $\\\\text{B}$, and $\\\\text{C}$ has the overall equation $\\\\text{A} + 2\\\\text{B} + \\\\text{C} \\\\rightarrow \\\\text{D} + \\\\text{E}$. Initial rates experiments show the reaction is first-order with respect to $\\\\text{A}$, first-order with respect to $\\\\text{B}$, and zero-order with respect to $\\\\text{C}$. Propose a plausible two-step mechanism.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Deduce the rate equation:**
> >    * $\\\\text{Rate} = k[\\\\text{A}][\\\\text{B}]$ (species $\\\\text{C}$ is zero-order and does not appear in the RDS).
> > 
> > 2. **Formulate Step 1 (Slow / RDS):**
> >    * One molecule of $\\\\text{A}$ reacts with one molecule of $\\\\text{B}$ to form an intermediate $\\\\text{X}$:
> >      $$\\\\text{Step 1 (slow / RDS): } \\\\text{A} + \\\\text{B} \\\\rightarrow \\\\text{X}$$
> > 
> > 3. **Formulate Step 2 (Fast step):**
> >    * Intermediate $\\\\text{X}$ reacts with the remaining reactants ($\\\\text{B}$ and $\\\\text{C}$) to give products:
> >      $$\\\\text{Step 2 (fast): } \\\\text{X} + \\\\text{B} + \\\\text{C} \\\\rightarrow \\\\text{D} + \\\\text{E}$$
> >    * Summing Step 1 + Step 2 gives the overall stoichiometry $\\\\text{A} + 2\\\\text{B} + \\\\text{C} \\\\rightarrow \\\\text{D} + \\\\text{E}$.

&nbsp;

> [!EXAMPLE]
> #### 📝 Worked Example 6: Evaluating Proposed Mechanisms for Ethanal & HCN
> **Question:** The reaction between ethanal ($\\\\text{CH}_3\\\\text{CHO}$) and hydrogen cyanide ($\\\\text{HCN}$) is given by:
> $$\\\\text{CH}_3\\\\text{CHO} + \\\\text{HCN} \\\\rightarrow \\\\text{CH}_3\\\\text{CH(OH)CN}$$
> Two mechanisms have been proposed for this reaction:
> * **Mechanism 1:**
>   * Step 1: $\\\\text{CH}_3\\\\text{CHO} + \\\\text{H}^+ \\\\rightarrow [\\\\text{CH}_3\\\\text{CHOH}]^+$
>   * Step 2: $[\\\\text{CH}_3\\\\text{CHOH}]^+ + \\\\text{CN}^- \\\\rightarrow \\\\text{CH}_3\\\\text{CH(OH)CN}$
> * **Mechanism 2:**
>   * Step 1: $\\\\text{CH}_3\\\\text{CHO} + \\\\text{CN}^- \\\\rightarrow [\\\\text{CH}_3\\\\text{CHOCN}]^-$
>   * Step 2: $[\\\\text{CH}_3\\\\text{CHOCN}]^- + \\\\text{H}^+ \\\\rightarrow \\\\text{CH}_3\\\\text{CH(OH)CN}$
> 
> The experimentally determined rate equation is rate = k[CH₃CHO][CN⁻][H⁺]⁰.
> 1. Explain which of the two mechanisms is consistent with the rate equation.
> 2. Identify which step in this mechanism is the rate-determining step (RDS).
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Mechanism Selection:**
> >    * **Mechanism 2 is consistent.**
> >    * *Explanation:* The rate equation is rate = k[CH₃CHO][CN⁻] (since [H⁺]⁰ = 1). This dictates that the rate-determining step must involve exactly one molecule of ethanal ($\\\\text{CH}_3\\\\text{CHO}$) and one cyanide ion ($\\\\text{CN}^-$) as reactants. Assuming Step 1 is the RDS for both proposed mechanisms, Step 1 of Mechanism 2 has $\\\\text{CH}_3\\\\text{CHO}$ and $\\\\text{CN}^-$ as reactants (matching the rate equation), whereas Step 1 of Mechanism 1 involves $\\\\text{H}^+$ (which is zero-order and cannot participate in the RDS).
> > 
> > 2. **Identify the Rate-Determining Step:**
> >    * **Step 1** is the rate-determining step because its reactants match the species and stoichiometry found in the rate equation.

&nbsp;

> [!EXAMPLE]
> #### 📝 Worked Example 7: Proving Pre-Equilibrium Mechanism Consistency (2H₂ + 2NO)
> **Question:** The overall equation for the reaction between hydrogen and nitrogen monoxide is:
> $$2\\\\text{H}_2\\\\text{(g)} + 2\\\\text{NO(g)} \\\\rightarrow 2\\\\text{H}_2\\\\text{O(g)} + \\\\text{N}_2\\\\text{(g)}$$
> The experimentally determined rate equation is rate = k[H₂][NO]².
> A proposed mechanism is:
> * **Step 1 (fast equilibrium):** $2\\\\text{NO(g)} \\\\rightleftharpoons \\\\text{N}_2\\\\text{O}_2\\\\text{(g)}$
> * **Step 2 (slow):** $\\\\text{N}_2\\\\text{O}_2\\\\text{(g)} + \\\\text{H}_2\\\\text{(g)} \\\\rightarrow \\\\text{H}_2\\\\text{O(g)} + \\\\text{N}_2\\\\text{O(g)}$
> * **Step 3 (fast):** $\\\\text{N}_2\\\\text{O(g)} + \\\\text{H}_2\\\\text{(g)} \\\\rightarrow \\\\text{N}_2\\\\text{(g)} + \\\\text{H}_2\\\\text{O(g)}$
> 
> Is this mechanism consistent with the rate equation? Explain your answer.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > **Answer:** Yes, it is consistent.
> > 
> > **Explanation:**
> > 
> > 1. **Identify the rate-determining step and its reactants:**
> >    * Step 2 is the rate-determining step (slow step), which involves one $\\\\text{N}_2\\\\text{O}_2$ molecule and one $\\\\text{H}_2$ molecule.
> > 
> > 2. **Trace the intermediate back to the fast step reactants:**
> >    * $\\\\text{N}_2\\\\text{O}_2$ is an intermediate produced in the preceding fast step (Step 1) from two $\\\\text{NO}$ molecules.
> > 
> > 3. **Determine the overall rate dependence:**
> >    * Therefore, the overall rate depends on two $\\\\text{NO}$ molecules and one $\\\\text{H}_2$ molecule, which perfectly matches the given rate equation: $\\\\text{Rate} = k[\\\\text{H}_2][\\\\text{NO}]^2$.

&nbsp;

> [!EXAMPLE]
> #### 📝 Worked Example 8: Chlorine Mechanism & Pseudo-First-Order Kinetics in Large Excess
> **Question 1:** Assume the following proposed reaction mechanism is correct:
> * **Step 1 (slow):** $\\\\text{Cl}_2 \\\\rightarrow 2\\\\text{Cl}^\\\\bullet$
> * **Step 2 (fast):** $\\\\text{H}_2 + \\\\text{Cl}^\\\\bullet \\\\rightarrow \\\\text{HCl} + \\\\text{H}^\\\\bullet$
> * **Step 3 (fast):** $\\\\text{H}^\\\\bullet + \\\\text{Cl}^\\\\bullet \\\\rightarrow \\\\text{HCl}$
> 
> a) Write the overall equation for the reaction.
> b) Write a rate equation consistent with this mechanism.
> c) Predict the effect on the rate of doubling $[\\\\text{Cl}_2]$ and doubling $[\\\\text{H}_2]$.
> 
> **Question 2:** The nucleophilic substitution of $\\\\text{CH}_3\\\\text{Cl}$ with $\\\\text{OH}^-$ is second-order overall ($\\\\text{rate} = k[\\\\text{CH}_3\\\\text{Cl}][\\\\text{OH}^-]$). However, when carried out using a large excess of $\\\\text{OH}^-$, the reaction becomes first-order overall. Explain this observation.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Chlorine Mechanism Analysis:**
> >    * **a) Overall Equation:** Sum all steps and cancel intermediates ($\\\\text{Cl}^\\\\bullet$ and $\\\\text{H}^\\\\bullet$):
> >      $$\\\\text{Cl}_2\\\\text{(g)} + \\\\text{H}_2\\\\text{(g)} \\\\rightarrow 2\\\\text{HCl(g)}$$
> >    * **b) Rate Equation:** Since Step 1 is the slow step (RDS), $\\\\text{rate} = k[\\\\text{Cl}_2]$.
> >    * **c) Effect of doubling concentrations:**
> >      * Doubling $[\\\\text{Cl}_2]$ doubles the rate ($\\\\times 2$) because the reaction is first-order w.r.t. $\\\\text{Cl}_2$.
> >      * Doubling $[\\\\text{H}_2]$ has no effect on the rate (zero-order) because $\\\\text{H}_2$ only reacts in fast steps after the RDS.
> > 
> > 2. **Pseudo-First-Order Kinetics:**
> >    * When $\\\\text{OH}^-$ is present in a large excess, its concentration change during the reaction is negligible ($[\\\\text{OH}^-] \\\\approx \\\\text{constant}$).
> >    * The term $[\\\\text{OH}^-]$ is absorbed into the rate constant:
> >      $$k' = k [\\\\text{OH}^-]$$
> >    * The rate equation simplifies to $\\\\text{rate} = k'[\\\\text{CH}_3\\\\text{Cl}]$, causing the reaction to display **pseudo-first-order kinetics**.

&nbsp;

> [!EXAMPLE]
> #### 📝 Worked Example 9: 4-Step Mechanism & Intermediates Cancellation
> **Question:** Bromine can be formed by the oxidation of hydrogen bromide with oxygen. A proposed 4-step mechanism is:
> * **Step 1:** $\\\\text{HBr} + \\\\text{O}_2 \\\\rightarrow \\\\text{HBrO}_2$
> * **Step 2:** $\\\\text{HBrO}_2 + \\\\text{HBr} \\\\rightarrow 2\\\\text{HBrO}$
> * **Step 3:** $\\\\text{HBrO} + \\\\text{HBr} \\\\rightarrow \\\\text{Br}_2 + \\\\text{H}_2\\\\text{O}$
> * **Step 4:** $\\\\text{HBrO} + \\\\text{HBr} \\\\rightarrow \\\\text{Br}_2 + \\\\text{H}_2\\\\text{O}$
> 
> The experimentally determined rate equation is $\\\\text{rate} = k[\\\\text{HBr}][\\\\text{O}_2]$.
> 1. Explain which of the four steps is the rate-determining step.
> 2. Write the overall balanced equation for the reaction.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the Rate-Determining Step:**
> >    * **Step 1 is the rate-determining step.**
> >    * *Reasoning:* The rate equation $\\\\text{rate} = k[\\\\text{HBr}][\\\\text{O}_2]$ shows first-order dependence on both $\\\\text{HBr}$ and $\\\\text{O}_2$. Step 1 is the only step whose reactants match these exact species and 1:1 stoichiometry, making it the slow bottleneck step.
> > 
> > 2. **Write the Overall Balanced Equation:**
> >    * Add all 4 steps together:
> >      $$4\\\\text{HBr} + \\\\text{O}_2 + \\\\text{HBrO}_2 + 2\\\\text{HBrO} \\\\rightarrow \\\\text{HBrO}_2 + 2\\\\text{HBrO} + 2\\\\text{Br}_2 + 2\\\\text{H}_2\\\\text{O}$$
> >    * Cancel intermediates ($\\\\text{HBrO}_2$ and $2\\\\text{HBrO}$) appearing on both sides:
> >      $$4\\\\text{HBr(aq)} + \\\\text{O}_2\\\\text{(g)} \\\\rightarrow 2\\\\text{Br}_2\\\\text{(l)} + 2\\\\text{H}_2\\\\text{O(l)}$$

`,
    keyPoints: [
      'Intermediate species are unstable products formed in early steps and consumed in later steps; they must never appear in the final rate equation.',
      'Reactants with a zero order of reaction do not participate in or before the rate-determining step (RDS), reacting only in subsequent fast steps.',
      'If the RDS is preceded by a fast equilibrium step, reactants from that equilibrium will appear in the overall rate equation (resolved via Kc substitution).',
      'A catalyst enters the reaction in an early step and is regenerated in a later step, whereas an intermediate is produced first and then consumed.',
      'SN1 mechanisms proceed via two steps (carbocation intermediate) with a first-order rate equation, while SN2 mechanisms occur in a single transition-state step with a second-order rate equation.'
    ]
  },
  {
    id: 'arrhenius-equation-u4-l1',
    title: 'Arrhenius Equation & Activation Energy',
    type: 'text',
    maxwellBoltzmannSimulator: {
      initialTemp: 300,
      initialEa: 50
    },
    arrheniusSimulator: {
      initialEa: 50,
      initialA: 1000000
    },
    content: `
> [!NOTE]
> ### 🌡️ Effect of Temperature on Rate Constants
> Increasing the temperature increases the rate of reaction by increasing the rate constant $k$. There are two reasons for this:
> 1. **Fraction of Active Molecules (Major):** A significant increase in the fraction of molecules with energy equal to or greater than the activation energy ($E \\\\ge E_a$).
> 2. **Collision Frequency (Minor):** A small increase in the frequency of collisions between molecules as they move faster.
> 
> *The increase in the fraction of molecules with sufficient energy is by far the most significant factor, while the collision frequency effect is negligible and effectively ignored.*
> 
> * **The Arrhenius Equation (Exponential Form):**
>   $$k = A e^{-\\\\frac{E_a}{RT}}$$
> * **The Arrhenius Equation (Logarithmic Form):**
>   $$\\\\ln k = -\\\\frac{E_a}{R} \\\\left(\\\\frac{1}{T}\\\\right) + \\\\ln A$$
> * Where:
>   * **$k$** = Rate constant
>   * **$T$** = Absolute temperature (in Kelvin, $\\\\text{K}$)
>   * **$E_a$** = Activation energy (in $\\\\text{J mol}^{-1}$)
>   * **$R$** = Gas constant ($8.31\\\\text{ J K}^{-1}\\\\text{ mol}^{-1}$)
>   * **$A$** = Pre-exponential factor (Arrhenius constant, related to collision frequency and orientation)
>   * **$e^{-\\\\frac{E_a}{RT}}$** = Represents the fraction of collisions that have energy $E \\\\ge E_a$
> 
> > [!TIP]
> > ### 💡 Graphical Determination of Activation Energy (Ea)
> > By plotting $\\\\ln k$ against $\\\\frac{1}{T}$, a straight line ($y = mx + c$) is obtained:
> > * **$y$-axis:** $\\\\ln k$
> > * **$x$-axis:** $\\\\frac{1}{T}$ (in $\\\\text{K}^{-1}$)
> > * **Gradient ($m$):** $-\\\\frac{E_a}{R}$
> > * **Intercept ($c$):** $\\\\ln A$
> > 
> > *Assumption in Arrhenius Linearity: Although $E_a$ and $A$ vary slightly with temperature, this change is negligible compared to the effect on $k$ and is therefore ignored.*
> 
> > [!IMPORTANT]
> > ### 🧮 Peroxydisulfate and Iodide Reaction Data
> > The table shows experimental kinetics data for the reaction:
> > $$\\\\text{S}_2\\\\text{O}_8^{2-}\\\\text{(aq)} + 2\\\\text{I}^-\\\\text{(aq)} \\\\rightarrow 2\\\\text{SO}_4^{2-}\\\\text{(aq)} + \\\\text{I}_2\\\\text{(aq)}$$
> > 
> > | $T$ (K) | $k$ | ln $k$ | 1/$T$ (K⁻¹) |
> > | :--- | :--- | :--- | :--- |
> > | 300 | 0.00513 | -5.27 | 0.00333 |
> > | 310 | 0.00833 | -4.79 | 0.00323 |
> > | 320 | 0.0128 | -4.36 | 0.00313 |
> > | 330 | 0.0201 | -3.91 | 0.00303 |
> > | 340 | 0.0301 | -3.50 | 0.00294 |
> 
> > [!WARNING]
> > ### ⚠️ Calculations Hint
> > When calculating $E_a$ from the gradient, your initial answer will be in $\\\\text{J mol}^{-1}$. Always convert it to $\\\\text{kJ mol}^{-1}$ by dividing by 1000 for your final exam answers.
> 
> > [!EXAMPLE]
> > #### 📝 Worked Example 1: Calculating Activation Energy from Experimental Data
> > **Question:** Using the peroxydisulfate and iodide ions reaction data table above:
> > 1. Plot a graph of $\\\\ln k$ against $\\\\frac{1}{T}$ to determine the gradient.
> > 2. Calculate the activation energy ($E_a$) in $\\\\text{kJ mol}^{-1}$ ($R = 8.31\\\\text{ J K}^{-1}\\\\text{ mol}^{-1}$).
> > 
> > > [!TIP]
> > > **🔑 Step-by-step Solution:**
> > > 
> > > 1. **Plot the Arrhenius Graph & Determine the Gradient:**
> > >    * Plotting $\\ln k$ on the y-axis against $\\frac{1}{T}$ (in $\\text{K}^{-1}$) on the x-axis gives a straight line with a negative gradient:
> > > 
> > > ${svgToken(arrheniusGraphSvg)}
> > > 
> > >    * Choose two coordinate points from the plotted data line:
> > >      * $\\\\text{Point 1: } (0.00294, -3.50)$
> > >      * $\\\\text{Point 2: } (0.00333, -5.27)$
> > >    * Calculate the gradient:
> > >      $$\\\\text{Gradient (m)} = \\\\frac{y_2 - y_1}{x_2 - x_1} = \\\\frac{-3.50 - (-5.27)}{0.00294 - 0.00333}$$
> > >      $$\\\\text{Gradient (m)} = \\\\frac{1.77}{-0.00039} \\\\approx -4538\\\\text{ K}$$
> > > 
> > > 2. **Calculate the Activation Energy ($E_a$):**
> > >    * Use the relationship: $\\\\text{Gradient} = -\\\\frac{E_a}{R}$
> > >      $$-4538 = -\\\\frac{E_a}{8.31}$$
> > >      $$E_a = 4538 \\\\times 8.31 \\\\approx 37710\\\\text{ J mol}^{-1}$$
> > > 
> > > 3. **Convert to $\\\\text{kJ mol}^{-1}$:**
> > >      $$E_a = \\\\frac{37710}{1000} = 37.7\\\\text{ kJ mol}^{-1}$$
> 
> > [!EXAMPLE]
> > #### 📝 Worked Example 2: Calculating $E_a$ using Two Temperatures
> > **Question:** The rate constant for a reaction is $1.50 \\\\times 10^{-4}\\\\text{ s}^{-1}$ at $300\\\\text{ K}$ and $7.50 \\\\times 10^{-4}\\\\text{ s}^{-1}$ at $320\\\\text{ K}$.
> > Calculate the activation energy ($E_a$) of this reaction in $\\\\text{kJ mol}^{-1}$ ($R = 8.31\\\\text{ J K}^{-1}\\\\text{ mol}^{-1}$).
> > 
> > > [!TIP]
> > > **🔑 Step-by-step Solution:**
> > > 
> > > 1. **State the two-point Arrhenius equation:**
> > >    $$\\\\ln\\\\left(\\\\frac{k_2}{k_1}\\\\right) = -\\\\frac{E_a}{R}\\\\left(\\\\frac{1}{T_2} - \\\\frac{1}{T_1}\\\\right)$$
> > > 
> > > 2. **Substitute the given values into the equation:**
> > >    * $k_1 = 1.50 \\\\times 10^{-4}\\\\text{ s}^{-1}$ at $T_1 = 300\\\\text{ K}$
> > >    * $k_2 = 7.50 \\\\times 10^{-4}\\\\text{ s}^{-1}$ at $T_2 = 320\\\\text{ K}$
> > >    $$\\\\ln\\\\left(\\\\frac{7.50 \\\\times 10^{-4}}{1.50 \\\\times 10^{-4}}\\\\right) = -\\\\frac{E_a}{8.31}\\\\left(\\\\frac{1}{320} - \\\\frac{1}{300}\\\\right)$$
> > > 
> > > 3. **Simplify both sides of the equation:**
> > >    * Left side: $\\\\ln(5) \\\\approx 1.6094$
> > >    * Right side temperature bracket: $\\\\frac{1}{320} - \\\\frac{1}{300} = 0.003125 - 0.003333 = -2.083 \\\\times 10^{-4}\\\\text{ K}^{-1}$
> > >    $$1.6094 = -\\\\frac{E_a}{8.31} \\\\times (-2.083 \\\\times 10^{-4})$$
> > > 
> > > 4. **Solve for $E_a$:**
> > >    $$1.6094 = E_a \\\\times \\\\frac{2.083 \\\\times 10^{-4}}{8.31}$$
> > >    $$1.6094 = E_a \\\\times (2.507 \\\\times 10^{-5})$$
> > >    $$E_a = \\\\frac{1.6094}{2.507 \\\\times 10^{-5}} \\\\approx 64200\\\\text{ J mol}^{-1}$$
> > > 
> > > 5. **Convert the activation energy to $\\\\text{kJ mol}^{-1}$:**
> > >    $$E_a = \\\\frac{64200}{1000} = 64.2\\\\text{ kJ mol}^{-1}$$
> 
> > [!WARNING]
> > ### ⚠️ Exam Pitfall: Axis Scale Factor ($\\\\times 10^{-3}\\\\text{ K}^{-1}$)
> > In A-Level exam questions, the $x$-axis ($\\\\frac{1}{T}$) is almost always plotted as $\\\\frac{1}{T} \\\\times 10^{-3}\\\\text{ K}^{-1}$.
> > When calculating the gradient ($\\\\frac{\\\\Delta y}{\\\\Delta x}$), students often read the coordinate difference on the $x$-axis as (for example) $0.4$ instead of $0.4 \\\\times 10^{-3}$.
> > **Always multiply your $\\\\Delta x$ value by $10^{-3}$ (or the scale factor shown on the axis) to avoid getting an activation energy that is 1000 times too small!**
> 
> &nbsp;
> 
> > [!EXAMPLE]
> > #### 📝 Worked Example 3: Calculating the Arrhenius Constant ($A$) and its Units
> > **Question:** A first-order reaction has a rate constant $k = 3.46 \\times 10^{-5}\text{ s}^{-1}$ at $298\text{ K}$ and an activation energy $E_a = 50.0\text{ kJ mol}^{-1}$.
> > Calculate the Arrhenius pre-exponential factor, $A$, for this reaction and state its units ($R = 8.31\text{ J K}^{-1}\text{ mol}^{-1}$).
> > 
> > > [!TIP]
> > > **🔑 Step-by-step Solution:**
> > > 
> > > 1. **Convert $E_a$ to $\text{J mol}^{-1}$:**
> > >    * $E_a = 50.0 \\times 1000 = 50000\text{ J mol}^{-1}$
> > > 
> > > 2. **Rearrange the Arrhenius equation to solve for $A$:**
> > >    * Starting from: $k = A e^{-\frac{E_a}{RT}}$
> > >    * Rearranging gives: $A = \frac{k}{e^{-\frac{E_a}{RT}}} = k e^{\frac{E_a}{RT}}$
> > > 
> > > 3. **Calculate the exponent term $\frac{E_a}{RT}$:**
> > >    $$\frac{E_a}{RT} = \frac{50000}{8.31 \\times 298} = \frac{50000}{2476.38} \approx 20.191$$
> > > 
> > > 4. **Calculate $A$:**
> > >    $$A = 3.46 \\times 10^{-5} \\times e^{20.191}$$
> > >    $$A = 3.46 \\times 10^{-5} \\times (5.873 \\times 10^{8})$$
> > >    $$A \approx 20300\text{ or } 2.03 \\times 10^4$$
> > > 
> > > 5. **Determine the units of $A$:**
> > >    * The exponential term $e^{-\frac{E_a}{RT}}$ has no units (dimensionless).
> > >    * Therefore, the units of $A$ are identical to the units of $k$.
> > >    * Since $k$ is given in $\text{s}^{-1}$, the unit of $A$ is $\text{s}^{-1}$.
> > >    * **Final Answer:** $A = 2.03 \\times 10^4\text{ s}^{-1}$

&nbsp;

> [!EXAMPLE]
> #### 📝 Worked Example 4: Explaining Temperature Effect via Arrhenius Equation
> **Question:** Use the Arrhenius equation to explain why an increase in temperature results in an increase in the rate of reaction.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **State the Arrhenius Equation:**
> >    * The relationship is given by:
> >      $$k = A e^{-\\\\frac{E_a}{RT}}$$
> > 
> > 2. **Analyze the Exponential Term:**
> >    * As temperature ($T$) increases, the fraction term $\\\\frac{E_a}{RT}$ decreases.
> >    * Consequently, the negative exponent term $-\\\\frac{E_a}{RT}$ becomes less negative.
> >    * This causes the exponential factor $e^{-\\\\frac{E_a}{RT}}$ to increase significantly.
> > 
> > 3. **Link to Rate of Reaction:**
> >    * Since $k$ is directly proportional to $e^{-\\\\frac{E_a}{RT}}$, the rate constant ($k$) increases.
> >    * Because the rate of reaction is directly proportional to the rate constant ($\\\\text{rate} = k[\\\\text{reactants}]^n$), a larger $k$ results in an increased rate of reaction.
> >    * *(Note: Physically, at higher temperatures, a much larger fraction of molecules possess energy greater than or equal to the activation energy, $E_a$).*
> 
> &nbsp;
> 
> > [!EXAMPLE]
> > #### 📝 Worked Example 5: Predicting the Temperature Required to Double Reaction Rate
> > **Question:** A reaction has an activation energy $E_a = 50.0\text{ kJ mol}^{-1}$ and a rate constant $k_1 = 1.20 \times 10^{-3}\text{ s}^{-1}$ at $T_1 = 298\text{ K}$.
> > Calculate the temperature, $T_2$, in Kelvin required for the rate constant to **double** ($k_2 = 2.40 \times 10^{-3}\text{ s}^{-1}$). ($R = 8.31\text{ J K}^{-1}\text{ mol}^{-1}$).
> > 
> > > [!TIP]
> > > **🔑 Step-by-step Solution:**
> > > 
> > > 1. **Convert $E_a$ to $\\\\text{J mol}^{-1}$:**
> > >    * $E_a = 50.0 \\\\times 1000 = 50000\\\\text{ J mol}^{-1}$
> > > 
> > > 2. **State the two-point Arrhenius relationship:**
> > >    $$\\\\ln\\\\left(\\\\frac{k_2}{k_1}\\\\right) = -\\\\frac{E_a}{R}\\\\left(\\\\frac{1}{T_2} - \\\\frac{1}{T_1}\\\\right)$$
> > > 
> > > 3. **Substitute known values (since $k_2 / k_1 = 2$):**
> > >    $$\\\\ln(2) = -\\\\frac{50000}{8.31} \\\\left(\\\\frac{1}{T_2} - \\\\frac{1}{298}\\\\right)$$
> > >    $$0.69315 = -6016.85 \\\\left(\\\\frac{1}{T_2} - 0.0033557\\\\right)$$
> > > 
> > > 4. **Solve for $\\\\frac{1}{T_2}$:**
> > >    $$\\\\frac{0.69315}{-6016.85} = \\\\frac{1}{T_2} - 0.0033557$$
> > >    $$-0.0001152 = \\\\frac{1}{T_2} - 0.0033557$$
> > >    $$\\\\frac{1}{T_2} = 0.0033557 - 0.0001152 = 0.0032405\\\\text{ K}^{-1}$$
> > > 
> > > 5. **Calculate $T_2$:**
> > >    $$T_2 = \\\\frac{1}{0.0032405} \\\\approx 308.6\\\\text{ K} \\\\quad (\\\\approx 35.6^\\\\circ\\\\text{C})$$
> > >    * *Conclusion:* An increase of about $10.6\text{ K}$ doubles the rate of this reaction.
> 
> &nbsp;
> 

`,
    keyPoints: [
      'Always convert temperature to Kelvin (K) when using the Arrhenius equation.',
      'Ensure the units of Ea match the gas constant units (J/mol) before converting to kJ/mol.',
      'The exponential term represents the fraction of collisions with energy equal to or greater than the activation energy.'
    ]
  },
  {
    id: 'catalysis-autocatalysis-u4-l1',
    title: 'Activation Energy, Catalysis & Autocatalysis',
    type: 'text',
    content: `
> [!BOX]
> ### ⚡ Catalysts and Activation Energy
> A catalyst is a substance that increases the rate of a chemical reaction by providing an alternative reaction pathway with a lower activation energy ($E_a$), while remaining chemically unchanged at the end of the reaction. There are two main types of catalysts: homogeneous and heterogeneous.
> 
> ${svgToken(activationEnergyProfileSvg)}

> [!BOX]
> ### 🧪 Why Transition Metals make Excellent Catalysts
> Transition metals and their compounds are widely used as catalysts due to three main features:
> 1. **Partially filled d-orbitals:** They can accept electron density from reactant molecules, helping to weaken their chemical bonds.
> 2. **Variable oxidation states:** They can easily gain or lose electrons, allowing them to participate in oxidation-reduction cycles (such as $\\\\text{Fe}^{2+}/\\\\text{Fe}^{3+}$ in homogeneous catalysis) to form intermediate compounds.
> 3. **Ability to form coordinate bonds:** The surface of transition metals has active sites where reactants can adsorb through temporary dative covalent bonds.


> [!BOX]
> ### 🧪 Homogeneous Catalysis
> A homogeneous catalyst is in the **same phase** as the reactants (typically all in aqueous solution or all in the gas phase).
> 
> * **Mechanism:** Transition metal homogeneous catalysts work by temporarily changing oxidation states, forming intermediate species, and providing a pathway with a lower activation energy.
> * **Key Examples:**
>   1. **Acid Catalysis:** Many reactions in aqueous solution are catalyzed by H⁺ ions.
>   2. **Chlorine Radicals in Gas Phase:** UV light breaks C-Cl bonds in CFCs to form chlorine radicals, which catalyze ozone depletion:
>      * CF₂Cl₂ (g) → •CF₂Cl (g) + Cl• (g)
>      * Cl• (g) + O₃ (g) → •ClO (g) + O₂ (g)
>      * •ClO (g) + O₃ (g) → 2O₂ (g) + Cl• (g)
>   3. **Peroxydisulfate and Iodide Reaction:** Catalyzed by Fe²⁺(aq) or Fe³⁺(aq) ions:
>      * **Overall Reaction:** S₂O₈²⁻(aq) + 2I⁻(aq) → 2SO₄²⁻(aq) + I₂(aq)
>      * **Step 1:** S₂O₈²⁻(aq) + 2Fe²⁺(aq) → 2SO₄²⁻(aq) + 2Fe³⁺(aq)
>      * **Step 2:** 2Fe³⁺(aq) + 2I⁻(aq) → 2Fe²⁺(aq) + I₂(aq)
>      * *The overall reaction is slow because it requires collision between two negatively charged reactants (S₂O₈²⁻ and I⁻) which repel each other. The iron catalyst provides steps with collisions between oppositely charged species, greatly lowering the activation energy.*
>   4. **Cobalt(II) Salts:** $\text{Co}^{2+}$ ions act as a homogeneous catalyst in the reaction between potassium sodium tartrate and hydrogen peroxide ($\text{H}_2\text{O}_2$). The transition metal ions temporarily change oxidation state from $\text{Co}^{2+}$ (pink) to $\text{Co}^{3+}$ (green) as an intermediate complex forms, and then return back to $\text{Co}^{2+}$ (pink), providing an alternative reaction pathway with a lower activation energy ($E_a$).
>   5. **The Enzyme Urease:** A highly specific biological homogeneous catalyst that rapidly speeds up the hydrolysis of urea into ammonia ($\text{NH}_3$) and carbon dioxide ($\text{CO}_2$):
>      $$(\text{NH}_2)_2\text{CO(aq)} + \text{H}_2\text{O(l)} \Rightarrow 2\text{NH}_{3(\text{aq})} + \text{CO}_{2(\text{g})}$$
>      *Structurally related molecules like thiourea can interact with the enzyme active site (often acting as competitive inhibitors) to demonstrate enzyme specificity and kinetic inhibition.*

> [!EXAMPLE]
> #### 📝 Worked Example 1: Explaining Homogeneous Catalysis
> **Question:** Explain why the reaction between iodide ions ($\\\\text{I}^-$) and peroxydisulfate ions ($\\\\text{S}_2\\\\text{O}_8^{2-}$) is very slow at room temperature without a catalyst, and write two equations to show how $\\\\text{Fe}^{2+}\\\\text{(aq)}$ ions act as a homogeneous catalyst.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Explain the high activation energy of the uncatalyzed reaction:**
> >    * Both reactant species, $\\\\text{I}^-$ and $\\\\text{S}_2\\\\text{O}_8^{2-}$, are negatively charged ions.
> >    * They experience strong electrostatic repulsion when they approach each other, which creates a very high activation energy barrier.
> > 
> > 2. **Explain the role of the iron catalyst:**
> >    * $\\\\text{Fe}^{2+}$ is a positively charged ion, which attracts the negatively charged reactant ions, avoiding electrostatic repulsion.
> >    * Iron is a transition metal that can readily change its oxidation state between $+2$ and $+3$.
> > 
> > 3. **Write the equation for Step 1 (oxidation of the catalyst):**
> >    * The $\\\\text{Fe}^{2+}$ ions react with $\\\\text{S}_2\\\\text{O}_8^{2-}$ first:
> >      $$\\\\text{S}_2\\\\text{O}_8^{2-}\\\\text{(aq)} + 2\\\\text{Fe}^{2+}\\\\text{(aq)} \\\\rightarrow 2\\\\text{SO}_4^{2-}\\\\text{(aq)} + 2\\\\text{Fe}^{3+}\\\\text{(aq)}$$
> > 
> > 4. **Write the equation for Step 2 (regeneration of the catalyst):**
> >    * The newly formed $\\\\text{Fe}^{3+}$ ions then oxidize the iodide ions, regenerating $\\\\text{Fe}^{2+}$:
> >      $$2\\\\text{Fe}^{3+}\\\\text{(aq)} + 2\\\\text{I}^-\\\\text{(aq)} \\\\rightarrow 2\\\\text{Fe}^{2+}\\\\text{(aq)} + \\\\text{I}_2\\\\text{(aq)}$$

> [!BOX]
> ### 🏭 Heterogeneous Catalysis
> A heterogeneous catalyst is in a **different phase** from the reactants (most commonly a solid catalyst with gaseous or liquid reactants).
> 
> * **The Three Stages of Heterogeneous Catalysis:**
>   1. **Adsorption:** Reactant molecules form weak bonds with active sites on the solid catalyst surface.
>   2. **Reaction:** The bonds within the reactant molecules are weakened/broken, and new bonds are formed to create the products.
>   3. **Desorption:** The product molecules break their bonds to the surface active sites and diffuse away.
> 
> ${svgToken(heterogeneousCatalysisSvg)}
> * **Key Industrial Examples:**
>   * **Haber Process:** Solid iron (Fe) catalyst.
>     N₂ (g) + 3H₂ (g) ⇌ 2NH₃ (g)
>   * **Contact Process:** Solid vanadium(V) oxide (V₂O₅) catalyst.
>     2SO₂ (g) + O₂ (g) ⇌ 2SO₃ (g)
>   * **Catalytic Converters:** Platinum (Pt), palladium (Pd), and rhodium (Rh) catalysts used in car exhaust systems to convert pollutant gases into less harmful ones:
>     * **Reduction/Oxidation Reaction:** 2CO(g) + 2NO(g) → 2CO₂(g) + N₂(g)
>     * **Hydrocarbon Combustion:** C₈H₁₈(g) + 12.5O₂(g) → 8CO₂(g) + 9H₂O(g)
> * **Promoters and Poisoning:**
>   * **Promoters:** Additives that increase catalyst efficiency by creating more active sites (e.g., potassium oxide and aluminum oxide in the Haber process).
>   * **Poisoning:** Impurities (such as sulfur, or lead from leaded petrol in catalytic converters) adsorb irreversibly to active sites, blocking them and making the catalyst permanently ineffective.


> [!IMPORTANT]
> ### 🧲 Adsorption Strength & Catalyst Selection
> For a heterogeneous catalyst to be effective, the strength of adsorption of reactants onto the solid surface must be optimized:
> * **Too Strong (e.g., Tungsten, W):** Reactants form very strong chemical bonds with the surface. They become immobile on the active sites, and products cannot desorb (leave the surface). This blocks the active sites and stops further reaction.
> * **Too Weak (e.g., Silver, Ag):** Reactants do not adsorb strongly enough, meaning bonds in the reactants are not weakened, and they do not remain on the surface long enough to react.
> * **Intermediate Strength (e.g., Pt, Pd, Fe):** Reactants adsorb strongly enough to weaken their internal bonds and hold them in place to react, but weakly enough to allow the products to desorb easily.

> [!EXAMPLE]
> #### 📝 Worked Example 2: Heterogeneous Catalysis and Catalyst Poisoning
> **Question:** In a catalytic converter, pollutant gases such as carbon monoxide ($\\\\text{CO}$) and nitrogen monoxide ($\\\\text{NO}$) react on the surface of a platinum catalyst.
> 1. Describe the three stages of this heterogeneous catalysis.
> 2. Explain why leaded petrol must not be used in cars equipped with catalytic converters.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Describe the three stages of the reaction on the catalyst surface:**
> >    * **Adsorption:** Reactant molecules ($\\\\text{CO}$ and $\\\\text{NO}$) form weak bonds with the active sites on the platinum surface. This brings the reactants closer together and weakens their covalent bonds.
> >    * **Reaction:** The weakened bonds break, and new covalent bonds form to produce carbon dioxide ($\\\\text{CO}_2$) and nitrogen ($\\\\text{N}_2$).
> >    * **Desorption:** The product molecules ($\\\\text{CO}_2$ and $\\\\text{N}_2$) break their bonds with the platinum surface and diffuse away, freeing up the active sites for new reactant molecules.
> > 
> > 2. **Explain the effect of leaded petrol (poisoning):**
> >    * Lead compounds from the fuel adsorb irreversibly and very strongly onto the active sites of the platinum catalyst.
> >    * This blocks the active sites, preventing reactant molecules ($\\\\text{CO}$ and $\\\\text{NO}$) from adsorbing.
> >    * The catalyst is "poisoned" and becomes permanently ineffective.

> [!BOX]
> ### 🔄 Autocatalysis
> * **Definition:** A reaction where one of the products acts as a catalyst for the reaction.
> * **Example:** The oxidation of ethanedioic acid by manganate(VII) ions, catalyzed by the product manganese(II) ions ($\\\\text{Mn}^{2+}$):
>   $$5\\\\text{(COOH)}_2\\\\text{(aq)} + 2\\\\text{MnO}_4^-\\\\text{(aq)} + 6\\\\text{H}^+\\\\text{(aq)} \\\\rightarrow 10\\\\text{CO}_2\\\\text{(g)} + 2\\\\text{Mn}^{2+}\\\\text{(aq)} + 8\\\\text{H}_2\\\\text{O}\\\\text{(l)}$$
> * **The Autocatalytic Rate Curve (S-Curve):**
>   1. **Initially slow:** The rate is low at the start because there is no $\\\\text{Mn}^{2+}$ catalyst present.
>   2. **Rapid acceleration:** As $\\\\text{Mn}^{2+}$ is produced, it catalyzes the reaction, causing the rate to increase rapidly (steep curve).
>   3. **Deceleration:** The rate slows down as reactants are depleted, eventually stopping when a reactant is fully consumed.
> 
> ${svgToken(autocatalysisCurveSvg)}

> [!BOX]
> ### ⚖️ Comparing Homogeneous & Heterogeneous Catalysis
> | Feature | Homogeneous Catalysis | Heterogeneous Catalysis |
> | :--- | :--- | :--- |
> | Phase of Catalyst | Same phase as reactants | Different phase from reactants |
> | Reaction Site | Throughout the entire volume of the mixture | Only on the solid catalyst surface |
> | Ease of Separation | Hard and expensive to separate from products | Easy to separate (usually by filtration or simple flow-through) |
> | Industrial Use | Less preferred for continuous processes | Highly preferred for large-scale continuous processes |
> | Risk of Poisoning | Low | High (active sites easily blocked by impurities) |

> [!EXAMPLE]
> #### 📝 Worked Example 3: Explaining Autocatalysis and its Mechanism
> **Question:** In the oxidation of ethanedioic acid by acidified potassium manganate(VII) solution:
> 1. Explain why the reaction is initially slow.
> 2. Write two equations showing how $\\\\text{Mn}^{2+}$ acts as an autocatalyst.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Explain the initial slow rate:**
> >    * The reaction is between two negatively charged ions ($\\\\text{MnO}_4^-$ and $\\\\text{C}_2\\\\text{O}_4^{2-}$).
> >    * These ions repel each other, leading to a high activation energy.
> >    * Initially, no catalyst ($\\\\text{Mn}^{2+}$) is present to lower the activation energy.
> > 
> > 2. **Write the first step of the catalytic mechanism:**
> >    * The $\\\\text{MnO}_4^-$ ions react with the produced $\\\\text{Mn}^{2+}$ catalyst to form intermediate manganese ions in a lower oxidation state (e.g., $+3$):
> >      $$4\\\\text{Mn}^{2+}\\\\text{(aq)} + \\\\text{MnO}_4^-\\\\text{(aq)} + 8\\\\text{H}^+\\\\text{(aq)} \\\\rightarrow 5\\\\text{Mn}^{3+}\\\\text{(aq)} + 4\\\\text{H}_2\\\\text{O}\\\\text{(l)}$$
> > 
> > 3. **Write the second step of the catalytic mechanism:**
> >    * The intermediate $\\\\text{Mn}^{3+}$ ions then oxidize the ethanedioate ions, regenerating the $\\\\text{Mn}^{2+}$ catalyst:
> >      $$2\\\\text{Mn}^{3+}\\\\text{(aq)} + \\\\text{C}_2\\\\text{O}_4^{2-}\\\\text{(aq)} \\\\rightarrow 2\\\\text{Mn}^{2+}\\\\text{(aq)} + 2\\\\text{CO}_2\\\\text{(g)}$$

&nbsp;

> [!EXAMPLE]
> #### 📝 Worked Example 4: Quantities Required for Homogeneous Catalysts
> **Question:** Explain why only a small quantity of a homogeneous catalyst is required in order for it to be effective in a chemical reaction.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Catalyst Regeneration:**
> >    * A catalyst is not consumed (used up) during the overall reaction.
> >    * It participates in an intermediate step to provide an alternative pathway with a lower activation energy, but it is regenerated intact at the end of the catalytic cycle.
> > 
> > 2. **Continuous Recycling:**
> >    * Because the catalyst molecule is continually regenerated, a small initial amount can process large quantities of reactant molecules in rapid succession.

&nbsp;

> [!EXAMPLE]
> #### 📝 Worked Example 5: Tetraethyl Lead & Poisoning of Catalytic Converters
> **Question:** Cars in some parts of the world run on leaded petrol. Leaded petrol contains a compound called tetraethyl lead, $(\\\\text{CH}_3\\\\text{CH}_2)_4\\\\text{Pb}$. Tetraethyl lead reacts in the engine with oxygen to form lead and lead(II) oxide ($\\\\text{PbO}$), which remove radical intermediates in combustion. 1,2-dibromoethane is added to remove excess lead as volatile lead(II) bromide ($\\\\text{PbBr}_2$).
> 
> Suggest why a catalytic converter cannot be used in a car running on leaded petrol.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the Poisoning Mechanism:**
> >    * Lead and lead(II) oxide compounds (or lead particles) coat and bind strongly to the active sites on the platinum/palladium/rhodium surface inside the catalytic converter.
> > 
> > 2. **Explain the Effect on Catalytic Activity:**
> >    * This strong, irreversible binding **blocks active sites**, preventing reactant gases ($\\\\text{CO}$, $\\\\text{NO}$, and unburnt hydrocarbons) from adsorbing onto the catalyst surface.
> >    * As a result, the catalyst is permanently **poisoned** and rendered completely ineffective.
`,
    keyPoints: [
      'Homogeneous catalysts are in the same phase as reactants; heterogeneous catalysts are in a different phase.',
      'Heterogeneous catalysis involves adsorption of reactants onto active sites, reaction, and desorption of products.',
      'Catalytic poisoning occurs when impurities block active sites, whereas promoters increase the number of active sites.',
      'In autocatalysis, the reaction starts slowly, accelerates as the catalyst product forms, and then slows down as reactants are depleted.'
    ]
  }
];
