import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Redox Chemistry & Groups 1, 2 and 7";
export const lessonNumber = 3;

const redoxElectronTransferSvg = `<svg viewBox="0 0 650 220" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e"/>
      <stop offset="100%" stop-color="#0b1b35"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bgGrad)" rx="8" stroke="#1e293b" stroke-width="1.5"/>
  <text x="50%" y="25" text-anchor="middle" fill="#f8fafc" font-size="15" font-weight="bold">Electron Transfer in Redox Reactions (OIL RIG)</text>
  
  <g transform="translate(40, 40)">
    <rect x="0" y="20" width="220" height="120" rx="10" fill="#ef4444" fill-opacity="0.1" stroke="#ef4444" stroke-width="1.5"/>
    <text x="110" y="45" text-anchor="middle" fill="#ef4444" font-size="13" font-weight="bold">OXIDATION: Loss of Electrons</text>
    <circle cx="110" cy="90" r="20" fill="#334155" stroke="#94a3b8" stroke-width="1.5"/>
    <text x="110" y="94" text-anchor="middle" fill="#f8fafc" font-size="11" font-weight="bold">Mg</text>
    <line x1="135" y1="90" x2="175" y2="90" stroke="#f8fafc" stroke-width="2"/>
    <circle cx="185" cy="85" r="8" fill="#e0f2fe"/>
    <text x="185" y="88" text-anchor="middle" fill="#0369a1" font-size="8" font-weight="bold">e⁻</text>
    <circle cx="185" cy="95" r="8" fill="#e0f2fe"/>
    <text x="185" y="98" text-anchor="middle" fill="#0369a1" font-size="8" font-weight="bold">e⁻</text>
    <text x="110" y="130" text-anchor="middle" fill="#94a3b8" font-size="10">Mg → Mg²⁺ + 2e⁻</text>
  </g>
  
  <path d="M 285 100 Q 325 80 365 100" fill="none" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="4 4"/>
  <text x="325" y="70" text-anchor="middle" fill="#f59e0b" font-size="11" font-weight="bold">Electron Transfer</text>
  
  <g transform="translate(390, 40)">
    <rect x="0" y="20" width="220" height="120" rx="10" fill="#34d399" fill-opacity="0.1" stroke="#34d399" stroke-width="1.5"/>
    <text x="110" y="45" text-anchor="middle" fill="#34d399" font-size="13" font-weight="bold">REDUCTION: Gain of Electrons</text>
    <circle cx="70" cy="90" r="16" fill="#10b981"/>
    <text x="70" y="94" text-anchor="middle" fill="#f8fafc" font-size="11" font-weight="bold">O</text>
    <circle cx="35" cy="85" r="8" fill="#e0f2fe"/>
    <text x="35" y="88" text-anchor="middle" fill="#0369a1" font-size="8" font-weight="bold">e⁻</text>
    <circle cx="35" cy="95" r="8" fill="#e0f2fe"/>
    <text x="35" y="98" text-anchor="middle" fill="#0369a1" font-size="8" font-weight="bold">e⁻</text>
    <line x1="47" y1="90" x2="52" y2="90" stroke="#f8fafc" stroke-width="1.5"/>
    <circle cx="150" cy="90" r="18" fill="#047857"/>
    <text x="150" y="94" text-anchor="middle" fill="#f8fafc" font-size="11" font-weight="bold">O²⁻</text>
    <text x="110" y="130" text-anchor="middle" fill="#94a3b8" font-size="10">O + 2e⁻ → O²⁻</text>
  </g>
</svg>`;

const disproportionationSvg = `<svg viewBox="0 0 650 220" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e"/>
      <stop offset="100%" stop-color="#0b1b35"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bgGrad2)" rx="8" stroke="#1e293b" stroke-width="1.5"/>
  <text x="50%" y="25" text-anchor="middle" fill="#f8fafc" font-size="15" font-weight="bold">Disproportionation of Copper(I) Ions</text>
  
  <g transform="translate(80, 50)">
    <rect x="-10" y="10" width="140" height="110" rx="8" fill="#334155" fill-opacity="0.3" stroke="#475569" stroke-width="1.5"/>
    <text x="60" y="30" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="bold">Reactant Species</text>
    <circle cx="35" cy="80" r="18" fill="#f59e0b"/>
    <text x="35" y="84" text-anchor="middle" fill="#f8fafc" font-size="10" font-weight="bold">Cu⁺</text>
    <circle cx="85" cy="80" r="18" fill="#f59e0b"/>
    <text x="85" y="84" text-anchor="middle" fill="#f8fafc" font-size="10" font-weight="bold">Cu⁺</text>
    <text x="60" y="112" text-anchor="middle" fill="#94a3b8" font-size="11">Oxidation State: +1</text>
  </g>
  
  <path d="M 220 90 L 320 60" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="3 3"/>
  <text x="270" y="65" text-anchor="middle" fill="#ef4444" font-size="10" font-weight="bold">Loses e⁻</text>
  
  <path d="M 220 110 L 320 140" fill="none" stroke="#34d399" stroke-width="2" stroke-dasharray="3 3"/>
  <text x="270" y="145" text-anchor="middle" fill="#34d399" font-size="10" font-weight="bold">Gains e⁻</text>
  
  <g transform="translate(380, 30)">
    <g transform="translate(0, 0)">
      <circle cx="60" cy="30" r="18" fill="#0284c7"/>
      <text x="60" y="34" text-anchor="middle" fill="#f8fafc" font-size="10" font-weight="bold">Cu²⁺</text>
      <text x="170" y="34" fill="#ef4444" font-size="12" font-weight="bold">OXIDISED (+2)</text>
    </g>
    <g transform="translate(0, 80)">
      <circle cx="60" cy="30" r="18" fill="#b45309"/>
      <text x="60" y="34" text-anchor="middle" fill="#f8fafc" font-size="10" font-weight="bold">Cu</text>
      <text x="170" y="34" fill="#34d399" font-size="12" font-weight="bold">REDUCED (0)</text>
    </g>
  </g>
</svg>`;

const groupTrendsSvg = `<svg viewBox="0 0 650 250" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e"/>
      <stop offset="100%" stop-color="#0b1b35"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bgGrad3)" rx="8" stroke="#1e293b" stroke-width="1.5"/>
  <text x="50%" y="25" text-anchor="middle" fill="#f8fafc" font-size="15" font-weight="bold">Group 1 &amp; 2 Down-the-Group Trends</text>
  
  <g transform="translate(30, 40)">
    <text x="100" y="20" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="bold">Atomic Radius Increases</text>
    <circle cx="50" cy="70" r="12" fill="#0284c7"/>
    <text x="50" y="73" text-anchor="middle" fill="#f8fafc" font-size="9">Li</text>
    <text x="120" y="73" fill="#94a3b8" font-size="10">0.152 nm</text>
    <circle cx="50" cy="115" r="16" fill="#0284c7"/>
    <text x="50" y="118" text-anchor="middle" fill="#f8fafc" font-size="9">Na</text>
    <text x="120" y="118" fill="#94a3b8" font-size="10">0.186 nm</text>
    <circle cx="50" cy="170" r="21" fill="#0284c7"/>
    <text x="50" y="173" text-anchor="middle" fill="#f8fafc" font-size="10" font-weight="bold">K</text>
    <text x="120" y="173" fill="#94a3b8" font-size="10">0.231 nm</text>
    <path d="M 50 85 L 50 95 M 50 135 L 50 145" stroke="#f8fafc" stroke-width="1.5" marker-end="url(#arrow)"/>
  </g>
  
  <g transform="translate(230, 40)">
    <rect x="0" y="30" width="190" height="130" rx="8" fill="#334155" fill-opacity="0.2" stroke="#1e293b" stroke-width="1.5"/>
    <text x="95" y="55" text-anchor="middle" fill="#f59e0b" font-size="11" font-weight="bold">Outermost s-electrons:</text>
    <text x="95" y="75" text-anchor="middle" fill="#f8fafc" font-size="10">More shells = further away</text>
    <text x="95" y="95" text-anchor="middle" fill="#f8fafc" font-size="10">More shielding from core</text>
    <text x="95" y="125" text-anchor="middle" fill="#34d399" font-size="11" font-weight="bold">Reactivity INCREASES</text>
    <text x="95" y="145" text-anchor="middle" fill="#ef4444" font-size="11" font-weight="bold">1st IE DECREASES</text>
  </g>
  
  <g transform="translate(450, 40)">
    <text x="100" y="20" text-anchor="middle" fill="#34d399" font-size="13" font-weight="bold">First Ionisation Energy</text>
    <rect x="20" y="55" width="80" height="20" fill="#10b981" rx="3"/>
    <text x="110" y="69" fill="#94a3b8" font-size="10">519 kJ</text>
    <rect x="20" y="103" width="70" height="20" fill="#10b981" rx="3"/>
    <text x="110" y="117" fill="#94a3b8" font-size="10">494 kJ</text>
    <rect x="20" y="150" width="55" height="20" fill="#10b981" rx="3"/>
    <text x="110" y="164" fill="#94a3b8" font-size="10">418 kJ</text>
  </g>
</svg>`;

const steamReactionSvg = `<svg viewBox="0 0 650 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e"/>
      <stop offset="100%" stop-color="#0b1b35"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bgGrad4)" rx="8" stroke="#1e293b" stroke-width="1.5"/>
  <text x="50%" y="25" text-anchor="middle" fill="#f8fafc" font-size="14" font-weight="bold">Experimental Setup: Magnesium reacting with Steam</text>
  
  <rect x="100" y="70" width="380" height="40" rx="5" fill="#334155" fill-opacity="0.2" stroke="#94a3b8" stroke-width="2"/>
  <rect x="110" y="75" width="60" height="30" rx="3" fill="#cbd5e1" fill-opacity="0.6"/>
  <text x="140" y="125" text-anchor="middle" fill="#cbd5e1" font-size="10">Wet mineral wool (steam source)</text>
  
  <g transform="translate(280, 75)">
    <path d="M 0 15 Q 10 5 20 15 T 40 15 T 60 15" fill="none" stroke="#f59e0b" stroke-width="3"/>
    <text x="30" y="-15" text-anchor="middle" fill="#f59e0b" font-size="10" font-weight="bold">Magnesium ribbon</text>
  </g>
  
  <path d="M 310 160 Q 300 130 310 120 Q 320 130 310 160" fill="#f97316"/>
  <text x="310" y="175" text-anchor="middle" fill="#f97316" font-size="10">Heat</text>
  
  <path d="M 140 160 Q 130 140 140 130 Q 150 140 140 160" fill="#f97316" transform="scale(0.8) translate(35, 30)"/>
  
  <path d="M 480 90 L 530 90 L 550 60" fill="none" stroke="#94a3b8" stroke-width="2"/>
  <path d="M 550 60 Q 545 40 550 30 Q 555 40 550 60" fill="#38bdf8"/>
  <text x="550" y="20" text-anchor="middle" fill="#38bdf8" font-size="10" font-weight="bold">Hydrogen gas burning</text>
</svg>`;

const halogenCyclohexaneSvg = `<svg viewBox="0 0 650 220" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad5" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e"/>
      <stop offset="100%" stop-color="#0b1b35"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bgGrad5)" rx="8" stroke="#1e293b" stroke-width="1.5"/>
  <text x="50%" y="25" text-anchor="middle" fill="#f8fafc" font-size="15" font-weight="bold">Halogens in Cyclohexane (Organic Upper Layer)</text>
  
  <g transform="translate(60, 40)">
    <rect x="20" y="20" width="40" height="120" rx="20" fill="none" stroke="#94a3b8" stroke-width="2"/>
    <path d="M 21 100 L 59 100 A 19 19 0 0 1 21 100" fill="#cbd5e1" fill-opacity="0.1"/>
    <rect x="21" y="60" width="38" height="40" fill="#86efac" fill-opacity="0.3"/>
    <line x1="21" y1="100" x2="59" y2="100" stroke="#f8fafc" stroke-width="1" stroke-dasharray="2 2"/>
    <text x="40" y="165" text-anchor="middle" fill="#f8fafc" font-size="11" font-weight="bold">Chlorine (Cl₂)</text>
    <text x="40" y="180" text-anchor="middle" fill="#a7f3d0" font-size="10">Pale Green</text>
  </g>
  
  <g transform="translate(240, 40)">
    <rect x="20" y="20" width="40" height="120" rx="20" fill="none" stroke="#94a3b8" stroke-width="2"/>
    <path d="M 21 100 L 59 100 A 19 19 0 0 1 21 100" fill="#cbd5e1" fill-opacity="0.1"/>
    <rect x="21" y="60" width="38" height="40" fill="#f97316" fill-opacity="0.6"/>
    <line x1="21" y1="100" x2="59" y2="100" stroke="#f8fafc" stroke-width="1" stroke-dasharray="2 2"/>
    <text x="40" y="165" text-anchor="middle" fill="#f8fafc" font-size="11" font-weight="bold">Bromine (Br₂)</text>
    <text x="40" y="180" text-anchor="middle" fill="#fdba74" font-size="10">Orange</text>
  </g>
  
  <g transform="translate(420, 40)">
    <rect x="20" y="20" width="40" height="120" rx="20" fill="none" stroke="#94a3b8" stroke-width="2"/>
    <path d="M 21 100 L 59 100 A 19 19 0 0 1 21 100" fill="#cbd5e1" fill-opacity="0.1"/>
    <rect x="21" y="60" width="38" height="40" fill="#c084fc" fill-opacity="0.6"/>
    <line x1="21" y1="100" x2="59" y2="100" stroke="#f8fafc" stroke-width="1" stroke-dasharray="2 2"/>
    <text x="40" y="165" text-anchor="middle" fill="#f8fafc" font-size="11" font-weight="bold">Iodine (I₂)</text>
    <text x="40" y="180" text-anchor="middle" fill="#e9d5ff" font-size="10">Purple / Violet</text>
  </g>
</svg>`;

const gasDiffusionSvg = `<svg viewBox="0 0 650 160" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad6" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e"/>
      <stop offset="100%" stop-color="#0b1b35"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bgGrad6)" rx="8" stroke="#1e293b" stroke-width="1.5"/>
  <text x="50%" y="25" text-anchor="middle" fill="#f8fafc" font-size="14" font-weight="bold">Gas Diffusion: Concentrated NH₃(aq) vs. HCl(aq)</text>
  
  <rect x="80" y="65" width="490" height="30" fill="#334155" fill-opacity="0.1" stroke="#94a3b8" stroke-width="1.5"/>
  <rect x="85" y="70" width="35" height="20" rx="3" fill="#cbd5e1"/>
  <text x="102" y="115" text-anchor="middle" fill="#cbd5e1" font-size="9">NH₃ cotton</text>
  <rect x="530" y="70" width="35" height="20" rx="3" fill="#cbd5e1"/>
  <text x="548" y="115" text-anchor="middle" fill="#cbd5e1" font-size="9">HCl cotton</text>
  <rect x="410" y="66" width="12" height="28" fill="#ffffff" fill-opacity="0.8"/>
  <text x="416" y="50" text-anchor="middle" fill="#ffffff" font-size="10" font-weight="bold">White NH₄Cl Ring</text>
  <text x="416" y="145" text-anchor="middle" fill="#94a3b8" font-size="9">(Closer to HCl end)</text>
  
  <path d="M 130 80 L 380 80" fill="none" stroke="#38bdf8" stroke-width="2.5" marker-end="url(#arrow)"/>
  <text x="240" y="74" text-anchor="middle" fill="#38bdf8" font-size="9" font-weight="bold">NH₃ gas diffuses faster (Mr = 17)</text>
  <path d="M 520 80 L 440 80" fill="none" stroke="#ef4444" stroke-width="2.5" marker-end="url(#arrow)"/>
  <text x="480" y="74" text-anchor="middle" fill="#ef4444" font-size="9" font-weight="bold">HCl (Mr = 36.5)</text>
</svg>`;

const titrationSetupSvg = `<svg viewBox="0 0 650 250" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad7" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e"/>
      <stop offset="100%" stop-color="#0b1b35"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bgGrad7)" rx="8" stroke="#1e293b" stroke-width="1.5"/>
  <text x="50%" y="25" text-anchor="middle" fill="#f8fafc" font-size="15" font-weight="bold">Titration Apparatus and Key Techniques</text>
  
  <!-- Stand & Burette -->
  <g transform="translate(60, 40)">
    <!-- Stand rod -->
    <rect x="20" y="10" width="8" height="170" fill="#94a3b8"/>
    <rect x="0" y="170" width="100" height="10" fill="#475569" rx="3"/>
    
    <!-- White tile -->
    <rect x="110" y="165" width="80" height="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
    
    <!-- Conical Flask -->
    <path d="M 130 165 L 140 120 L 160 120 L 170 165 Z" fill="#38bdf8" fill-opacity="0.2" stroke="#94a3b8" stroke-width="1.5"/>
    <!-- Liquid in flask -->
    <path d="M 133 155 L 142 122 L 158 122 L 167 155 Z" fill="#ec4899" fill-opacity="0.4"/>
    
    <!-- Burette body -->
    <rect x="145" y="10" width="10" height="100" fill="#38bdf8" fill-opacity="0.1" stroke="#94a3b8" stroke-width="1.5"/>
    <!-- liquid in burette -->
    <rect x="146.5" y="30" width="7" height="80" fill="#0284c7" fill-opacity="0.5"/>
    <!-- burette tip and tap -->
    <line x1="150" y1="110" x2="150" y2="135" stroke="#94a3b8" stroke-width="2"/>
    <circle cx="150" cy="118" r="4" fill="#ef4444"/>
    
    <!-- Clamp holding burette -->
    <rect x="28" y="50" width="120" height="4" fill="#64748b"/>
  </g>
  
  <!-- Guidelines panel -->
  <g transform="translate(290, 40)">
    <rect width="320" height="180" rx="8" fill="#334155" fill-opacity="0.3" stroke="#1e293b" stroke-width="1.5"/>
    <text x="15" y="25" fill="#f59e0b" font-size="12" font-weight="bold">🔑 4 Rules of Volumetric Techniques:</text>
    <text x="15" y="55" fill="#f8fafc" font-size="11">1. Fill burette tap space to remove air bubbles</text>
    <text x="15" y="85" fill="#f8fafc" font-size="11">2. Remove filter funnel before taking readings</text>
    <text x="15" y="115" fill="#f8fafc" font-size="11">3. Swirl conical flask constantly on a white tile</text>
    <text x="15" y="145" fill="#f8fafc" font-size="11">4. Rinse flask with water ONLY (not reactants)</text>
  </g>
</svg>`;

export const theoryMarkdown = `
# Topic 8: Redox Chemistry and Groups 1, 2 and 7
This topic covers the principles of oxidation and reduction in terms of electron transfer and oxidation numbers, followed by the periodic trends and chemical reactions of Group 1, 2, and 7 elements.
`;

export const parts: LessonPart[] = [
    {
        id: '8a1-electron-transfer-redox',
        title: 'Oxidation & Reduction (Electron Transfer)',
        type: 'text',
        content: `
> [!NOTE]
> ### ⚛️ What is a Redox Reaction?
> A **redox (reduction-oxidation)** reaction is a chemical process that involves the transfer of electrons between species.
> * We define oxidation and reduction using the classic mnemonic **OIL RIG**:
>   * **O**xidation **I**s **L**oss of electrons
>   * **R**eduction **I**s **G**ain of electrons
> * An **oxidising agent** is a species that oxidises another by gaining electrons itself (it is reduced during the process)
> * A **reducing agent** is a species that reduces another by losing electrons itself (it is oxidised during the process)
> 
> ${svgToken(redoxElectronTransferSvg)}

> [!TIP]
> ### ⚡ Representing Redox via Ionic Half-Equations
> Any redox process can be split into two half-equations representing electron loss and electron gain:
> * **Example:** Magnesium reacting with oxygen to form magnesium oxide ($2Mg + O_2 \\\\rightarrow 2MgO$):
>   * Magnesium is oxidised:
>     $$Mg \\\\rightarrow Mg^{2+} + 2e^-$$
>   * Oxygen is reduced:
>     $$O_2 + 4e^- \\\\rightarrow 2O^{2-}$$
> * **Constructing full ionic equations:** Combine the half-equations such that the number of electrons lost equals the number of electrons gained.

> [!EXAMPLE]
> #### 📝 Worked Example 1: Deducing Redox from a Displacement Reaction
> **Question:** Zinc reacts with aqueous copper(II) sulfate:
> $$Zn\\text{(s)} + CuSO_4\\text{(aq)} \\\\rightarrow ZnSO_4\\text{(aq)} + Cu\\text{(s)}$$
> Write the ionic half-equations for this reaction and identify the oxidising and reducing agents.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the ions present:**
> >    * Reactants: $Zn(s)$, $Cu^{2+}(aq)$, and $SO_4^{2-}(aq)$
> >    * Products: $Zn^{2+}(aq)$, $SO_4^{2-}(aq)$, and $Cu(s)$
> >    * $SO_4^{2-}$ is a spectator ion and is removed.
> > 
> > 2. **Write the oxidation half-equation (OIL):**
> >    * Zinc metal loses electrons to form zinc ions:
> >      $$Zn\\text{(s)} \\\\rightarrow Zn^{2+}\\text{(aq)} + 2e^-$$
> >    * Zinc is oxidised, so **Zinc is the reducing agent**.
> > 
> > 3. **Write the reduction half-equation (RIG):**
> >    * Copper(II) ions gain electrons to form copper metal:
> >      $$Cu^{2+}\\text{(aq)} + 2e^- \\\\rightarrow Cu\\text{(s)}$$
> >    * Copper(II) ions are reduced, so **Copper(II) ions ($Cu^{2+}$) are the oxidising agent**.
`,
        keyPoints: [
            'Oxidation is the loss of electrons, while reduction is the gain of electrons.',
            'Oxidising agents accept electrons, whereas reducing agents donate electrons.',
            'In any redox reaction, the total number of electrons lost must equal the total number of electrons gained.'
        ]
    },
    {
        id: '8a2-disproportionation',
        title: 'Disproportionation Reactions',
        type: 'text',
        content: `
> [!NOTE]
> ### ⚖️ What is Disproportionation?
> A **disproportionation** reaction is a special type of redox reaction in which **the same element in a single species is simultaneously oxidised and reduced**.
> * Part of the element increases in oxidation number (oxidation)
> * Another part of the same element decreases in oxidation number (reduction)
> 
> ${svgToken(disproportionationSvg)}

> [!TIP]
> ### 🧪 Classic Disproportionation of Copper(I)
> When solid copper(I) oxide ($Cu_2O$) reacts with dilute sulfuric acid, it decomposes into a blue solution of copper(II) sulfate and a brown precipitate of copper metal:
> $$Cu_2O\\text{(s)} + H_2SO_4\\text{(aq)} \\\\rightarrow CuSO_4\\text{(aq)} + Cu\\text{(s)} + H_2O\\text{(l)}$$
> 
> Let's analyze the oxidation states of copper:
> * In $Cu_2O$: Copper is in the $+1$ oxidation state ($Cu^+$)
> * In $CuSO_4$: Copper is in the $+2$ oxidation state ($Cu^{2+}$) - an increase (oxidation)
> * In $Cu$: Copper is in the $0$ oxidation state - a decrease (reduction)
> 
> Because $Cu^+$ has been simultaneously oxidised and reduced, this is a disproportionation reaction.

> [!EXAMPLE]
> #### 📝 Worked Example 2: Analyzing Chlorine in Cold Alkali
> **Question:** Chlorine gas reacts with cold, dilute aqueous sodium hydroxide to form bleach:
> $$Cl_2\\text{(g)} + 2NaOH\\text{(aq)} \\\\rightarrow NaCl\\text{(aq)} + NaClO\\text{(aq)} + H_2O\\text{(l)}$$
> Explain in terms of oxidation numbers why this is a disproportionation reaction.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Assign oxidation numbers to chlorine in reactants:**
> >    * In $Cl_2(g)$ (elemental state): Chlorine oxidation number = 0
> > 
> > 2. **Assign oxidation numbers to chlorine in products:**
> >    * In $NaCl(aq)$ (chloride ion): Chlorine oxidation number = -1
> >    * In $NaClO(aq)$ (chlorate(I) ion): Sodium is +1, Oxygen is -2, so Chlorine = +1
> > 
> > 3. **Conclude:**
> >    * Chlorine has been reduced from 0 to -1 (in $NaCl$)
> >    * Chlorine has been oxidised from 0 to +1 (in $NaClO$)
> >    * Since the same chlorine element in a single reactant species ($Cl_2$) has been simultaneously oxidised and reduced, the reaction is a disproportionation.
`,
        keyPoints: [
            'Disproportionation involves the simultaneous oxidation and reduction of the same element in a single species.',
            'Copper(I) oxide reacting with sulfuric acid disproportionates into copper(II) ions and copper metal.',
            'Chlorine reacting with cold alkali disproportionates into chloride (Cl⁻) and chlorate(I) (ClO⁻) ions.'
        ]
    },
    {
        id: '8a3-oxidation-numbers',
        title: 'Oxidation Numbers & Rules',
        type: 'text',
        content: `
> [!NOTE]
> ### 🧮 What is an Oxidation Number?
> An **oxidation number** (or oxidation state) represents the charge an atom would have if all its bonds were completely ionic. 
> * It is a useful tool to keep track of electron movements in chemical reactions
> * Oxidation numbers are written with the sign first (e.g., $+2$ or $-1$), distinguishing them from ionic charges (written as $2+$ or $1-$)

> [!IMPORTANT]
> ### 📋 Rules for Assigning Oxidation Numbers
> 
> | Rule | Description | Examples |
> | :--- | :--- | :--- |
> | **Elements** | The oxidation number of any uncombined element is $0$ | $H_2$, $O_2$, $Na$, $S_8$ are all $0$ |
> | **Monatomic Ions** | The oxidation number equals the charge of the ion | $Na^+$ is $+1$, $Cl^-$ is $-1$, $O^{2-}$ is $-2$ |
> | **Compounds Sum** | The sum of oxidation numbers in a neutral compound is $0$ | In $H_2O$: $2(+1) + (-2) = 0$ |
> | **Polyatomic Ions Sum**| The sum of oxidation numbers in a polyatomic ion equals the charge | In $SO_4^{2-}$: $S + 4(-2) = -2 \\\\implies S = +6$ |
> | **Group 1 Metals** | Always $+1$ in compounds | $NaCl$, $K_2O$ |
> | **Group 2 Metals** | Always $+2$ in compounds | $MgCl_2$, $CaCO_3$ |
> | **Fluorine** | Always $-1$ in compounds | $HF$, $NaF$ |
> | **Hydrogen** | $+1$, **except** in metal hydrides where it is $-1$ | $+1$ in $H_2O$, $-1$ in $NaH$ and $CaH_2$ |
> | **Oxygen** | $-2$, **except** in peroxides ($-1$) and $OF_2$ ($+2$) | $-2$ in $H_2O$, $-1$ in $H_2O_2$, $+2$ in $OF_2$ |

> [!EXAMPLE]
> #### 📝 Worked Example 3: Calculating Oxidation State in a Complex Ion
> **Question:** Determine the oxidation number of manganese in the manganate(VII) ion, $\\\\text{MnO}_4^-$.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **State the overall charge:**
> >    * The manganate ion has an overall charge of $1-$, so the sum of oxidation numbers is $-1$.
> > 
> > 2. **Apply the oxygen rule:**
> >    * Oxygen in compounds has an oxidation state of $-2$. There are four oxygen atoms:
> >      $$4 \\\\times (-2) = -8$$
> > 
> > 3. **Set up the algebraic equation:**
> >    * Let $x$ be the oxidation number of Mn:
> >      $$x + (-8) = -1$$
> >      $$x = -1 + 8 = +7$$
> >    * Therefore, the oxidation number of manganese is $+7$ (written using Roman numerals as Manganese(VII)).
`,
        keyPoints: [
            'Oxidation number is the charge an atom would have if the compound were fully ionic.',
            'Hydrogen is always +1 in compounds, except in metal hydrides where it is -1.',
            'Oxygen is always -2 in compounds, except in peroxides where it is -1, and in oxygen difluoride where it is +2.'
        ]
    },
    {
        id: '8a5-ionic-equations',
        title: 'Constructing Full Ionic Equations',
        type: 'text',
        content: `
> [!NOTE]
> ### ⚖️ Balancing by Counting Electrons
> To combine two ionic half-equations into a balanced full ionic equation:
> 1. Find the lowest common multiple (LCM) of the electrons lost in the oxidation half-equation and gained in the reduction half-equation.
> 2. Multiply each half-equation by the appropriate factor to make the electron counts equal.
> 3. Add the half-equations together and cancel the electrons.
> 4. Simplify any common spectator ions or molecules (like $\\\\text{H}^+$ or $\\\\text{H}_2\\\\text{O}$) present on both sides.

> [!TIP]
> ### 🧮 Balancing Acidified Manganate(VII) and Hydrogen Peroxide
> Let's balance the reaction between acidified manganate(VII) ions and hydrogen peroxide:
> * Reduction half-equation:
>   $$MnO_4^-\\text{(aq)} + 8H^+\\text{(aq)} + 5e^- \\\\rightarrow Mn^{2+}\\text{(aq)} + 4H_2O\\text{(l)}$$
> * Oxidation half-equation:
>   $$H_2O_2\\text{(aq)} \\\\rightarrow 2H^+\\text{(aq)} + O_2\\text{(g)} + 2e^-$$
> * The lowest common multiple of 5 and 2 is 10. Multiply the first by 2, and the second by 5:
>   $$2MnO_4^- + 16H^+ + 10e^- \\\\rightarrow 2Mn^{2+} + 8H_2O$$
>   $$5H_2O_2 \\\\rightarrow 10H^+ + 5O_2 + 10e^-$$
> * Add together and cancel electrons:
>   $$2MnO_4^- + 16H^+ + 5H_2O_2 \\\\rightarrow 2Mn^{2+} + 8H_2O + 10H^+ + 5O_2$$
> * Subtract $10H^+$ from both sides to simplify:
>   $$2MnO_4^-\\text{(aq)} + 6H^+\\text{(aq)} + 5H_2O_2\\text{(aq)} \\\\rightarrow 2Mn^{2+}\\text{(aq)} + 8H_2O\\text{(l)} + 5O_2\\text{(g)}$$

> [!EXAMPLE]
> #### 📝 Worked Example 4: Balancing via Oxidation Numbers
> **Question:** Use oxidation numbers to balance the following redox equation:
> $$\\\\text{SO}_2\\text{(g)} + \\\\text{Ag}^+\\text{(aq)} + \\\\text{H}_2\\\\text{O(l)} \\\\rightarrow \\\\text{SO}_4^{2-}\\text{(aq)} + \\\\text{Ag(s)} + \\\\text{H}^+\\text{(aq)}$$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the oxidation state changes:**
> >    * Sulfur in $SO_2$ is $+4$, and in $SO_4^{2-}$ is $+6$ (an increase of $2$, representing a 2-electron change).
> >    * Silver in $Ag^+$ is $+1$, and in $Ag(s)$ is $0$ (a decrease of $1$, representing a 1-electron change).
> > 
> > 2. **Apply multipliers to balance the electron transfer:**
> >    * The ratio of sulfur to silver must be 1:2 to balance the electron transfer ($1 \\\\times 2 = 2 \\\\times 1$):
> >      $$SO_2 + 2Ag^+ \\\\rightarrow SO_4^{2-} + 2Ag$$
> > 
> > 3. **Balance the atoms (Oxygen and Hydrogen) and charges:**
> >    * There are 2 oxygens on the left (in $SO_2$) and 4 on the right (in $SO_4^{2-}$). Add $2H_2O$ to the left:
> >      $$SO_2 + 2H_2O + 2Ag^+ \\\\rightarrow SO_4^{2-} + 2Ag$$
> >    * Now balance hydrogen by adding $4H^+$ to the right:
> >      $$SO_2\\text{(g)} + 2H_2O\\text{(l)} + 2Ag^+\\text{(aq)} \\\\rightarrow SO_4^{2-}\\text{(aq)} + 2Ag\\text{(s)} + 4H^+\\text{(aq)}$$
> >    * *Check charge balance:* Left = $+2$, Right = $-2 + 4 = +2$. The equation is balanced.
`,
        keyPoints: [
            'Half-equations are combined by matching electron counts using multipliers.',
            'Oxidation number changes can balance equation stoichiometry directly.',
            'Final balanced equations must be verified for both atom and charge counts.'
        ]
    },
    {
        id: '8b1-group-trends',
        title: 'Trends in Groups 1 and 2',
        type: 'text',
        content: `
> [!NOTE]
> ### 📋 Introduction to Groups 1 and 2
> * **Group 1 (Alkali Metals - $s^1$):** Lithium ($Li$), Sodium ($Na$), Potassium ($K$), Rubidium ($Rb$), Caesium ($Cs$). Highly reactive metals stored under oil.
> * **Group 2 (Alkaline Earth Metals - $s^2$):** Beryllium ($Be$), Magnesium ($Mg$), Calcium ($Ca$), Strontium ($Sr$), Barium ($Ba$).
> * Both groups are located in the s-block of the periodic table, as their valence electrons reside in an $s$ orbital.
> 
> ${svgToken(groupTrendsSvg)}

> [!TIP]
> ### ⚡ Down-the-Group Ionisation Energy Trend
> Down both groups, the **first ionisation energy decreases**. This trend is governed by three factors:
> 
> 1. **Atomic Radius:** Down the group, new quantum shells are added. The distance between the outermost s-electron and the positive nucleus increases, reducing electrostatic attraction
> 2. **Shielding Effect:** The number of inner electron shells increases, repelling the valence electron and shielding it from nuclear attraction
> 3. **Nuclear Charge:** Although the number of protons in the nucleus increases, the combined shielding and distance factors completely override the increased nuclear charge
> 
> Therefore, it becomes easier to remove the outermost electron down the group.

> [!BOX]
> ### 📋 Ionisation Energies & Radii Values
> 
> **Group 1 elements:**
> | Element | Metallic Radius / nm | First Ionisation Energy / $\\\\text{kJ mol}^{-1}$ |
> | :--- | :---: | :---: |
> | Lithium, Li | 0.152 | 519 |
> | Sodium, Na | 0.186 | 494 |
> | Potassium, K | 0.231 | 418 |
> 
> **Group 2 elements:**
> | Element | Metallic Radius / nm | First Ionisation Energy / $\\\\text{kJ mol}^{-1}$ | Second Ionisation Energy / $\\\\text{kJ mol}^{-1}$ | Sum (1st + 2nd) / $\\\\text{kJ mol}^{-1}$ |
> | :--- | :---: | :---: | :---: | :---: |
> | Beryllium, Be | 0.112 | 900 | 1757 | 2657 |
> | Magnesium, Mg | 0.160 | 738 | 1451 | 2189 |
> | Calcium, Ca | 0.197 | 590 | 1145 | 1735 |
> | Barium, Ba | 0.224 | 503 | 965 | 1468 |

> [!IMPORTANT]
> ### 📈 Reactivity Trend Down Groups 1 & 2
> In all their reactions, Group 1 and 2 metals lose their valence s-electrons to form positive ions ($M^+$ or $M^{2+}$).
> * Because ionisation energy decreases down the group, **less energy is required to remove these electrons**
> * Consequently, **reactivity increases down the group** (e.g., potassium reacts more vigorously with water than sodium; barium is far more reactive than beryllium or magnesium)

> [!EXAMPLE]
> #### 📝 Worked Example 5: Writing Ionisation Equations
> **Question:** Write the equations, including state symbols, representing the first ionisation of beryllium and the second ionisation of barium.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Recall ionisation definitions:**
> >    * Ionisation processes must occur in the **gaseous state** (indicated by state symbol $g$ for both atoms and ions).
> > 
> > 2. **First Ionisation of Beryllium:**
> >    * One electron is removed from a gaseous beryllium atom to form a $1+$ gaseous cation:
> >      $$Be\\text{(g)} \\\\rightarrow Be^+\\text{(g)} + e^-$$
> > 
> > 3. **Second Ionisation of Barium:**
> >    * One electron is removed from a $1+$ gaseous barium ion to form a $2+$ gaseous cation:
> >      $$Ba^+\\text{(g)} \\\\rightarrow Ba^{2+}\\text{(g)} + e^-$$
`,
        keyPoints: [
            'First ionisation energy decreases down both Groups 1 and 2.',
            'Atomic radius and shielding increase down the group, lowering nuclear attraction to the outer electron.',
            'Reactivity increases down the group as outer electrons are lost more easily.'
        ]
    },
    {
        id: '8b2-reactions-metals',
        title: 'Chemical Reactions of Group 1 and 2 Elements',
        type: 'text',
        content: `
> [!NOTE]
> ### 🧪 Reactions with Oxygen and Chlorine
> Both Group 1 and Group 2 metals burn in oxygen and chlorine with increasing vigor down the group:
> * **Reactions with Oxygen:**
>   * Group 1: $4M(s) + O_2(g) \\\\rightarrow 2M_2O(s)$ (form oxides with $M^+$ and $O^{2-}$ ions)
>   * Group 2: $2M(s) + O_2(g) \\\\rightarrow 2MO(s)$ (form oxides with $M^{2+}$ and $O^{2-}$ ions)
>   * *Example:* Magnesium burns with a blinding, bright white flame to form a white powder of MgO.
> * **Reactions with Chlorine:**
>   * Group 1: $2M(s) + Cl_2(g) \\\\rightarrow 2MCl(s)$
>   * Group 2: $M(s) + Cl_2(g) \\\\rightarrow MCl_2(s)$

> [!IMPORTANT]
> ### 💧 Reactions with Water & Steam
> * **Group 1 Metals:** React vigorously with cold water to form hydroxides and hydrogen:
>   $$2M\\text{(s)} + 2H_2O\\text{(l)} \\\\rightarrow 2MOH\\text{(aq)} + H_2\\text{(g)}$$
>   * fizzes and floats (Lithium).
>   * melts into a silver ball and moves rapidly, sometimes igniting hydrogen with an orange/yellow flame (Sodium).
>   * reacts so violently that the hydrogen instantly ignites with a lilac flame (Potassium).
> * **Group 2 Metals:** React with water with increasing vigor:
>   * **Magnesium:** Reacts very slowly with cold water, but reacts vigorously with **steam** to form magnesium oxide (white solid) and hydrogen gas:
>     $$Mg\\text{(s)} + H_2O\\text{(g)} \\\\rightarrow MgO\\text{(s)} + H_2\\text{(g)}$$
>   * **Calcium & Barium:** React readily with cold water to form hydroxides:
>     $$Ca\\text{(s)} + 2H_2O\\text{(l)} \\\\rightarrow Ca(OH)_2\\text{(s/aq)} + H_2\\text{(g)}$$
>     (Note: $Ca(OH)_2$ is only slightly soluble, making the liquid go cloudy as a precipitate forms).
> 
> ${svgToken(steamReactionSvg)}

> [!EXAMPLE]
> #### 📝 Worked Example 6: Group 2 Fire Hazard
> **Question:** Explain why water should not be used to extinguish a fire involving burning magnesium metal.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the reaction between hot magnesium and water/steam:**
> >    * Hot magnesium reacts vigorously with water or steam to produce magnesium oxide and hydrogen gas:
> >      $$Mg\\text{(s)} + H_2O\\text{(g/l)} \\\\rightarrow MgO\\text{(s)} + H_2\\text{(g)}$$
> > 
> > 2. **Analyze the safety hazard:**
> >    * The hydrogen gas produced is highly flammable and forms an explosive mixture with air.
> >    * The heat of the fire will ignite the hydrogen, causing a severe explosion and spreading the fire rapidly.
`,
        keyPoints: [
            'Group 1 and 2 metals burn in oxygen and chlorine to form solid ionic oxides and chlorides.',
            'Group 1 reacts with cold water to form aqueous hydroxides and hydrogen.',
            'Magnesium reacts slowly with cold water, but reacts vigorously with steam to form MgO and H₂.'
        ]
    },
    {
        id: '8b4-oxides-hydroxides',
        title: 'Oxides, Hydroxides, and Solubility Trends',
        type: 'text',
        content: `
> [!NOTE]
> ### 🧪 Reactions of Basic Oxides with Water
> Group 1 and 2 metal oxides are **basic oxides**. They react with water to form alkaline solutions of hydroxides:
> * Group 1 oxides: $M_2O(s) + H_2O(l) \\\\rightarrow 2MOH(aq)$
> * Group 2 oxides: $MO(s) + H_2O(l) \\\\rightarrow M(OH)_2(aq)$
> * Net ionic equation:
>   $$O^{2-} + H_2O \\\\rightarrow 2OH^-$$
> 
> All of these oxides and hydroxides react with dilute acids in typical **neutralisation reactions** to form salts and water (e.g. $CaO + 2HNO_3 \\\\rightarrow Ca(NO_3)_2 + H_2O$).

> [!IMPORTANT]
> ### 📈 Solubility Trends in Group 2 Compounds
> The solubility of Group 2 hydroxides and sulfates shows opposite trends down the group:
> 
> 1. **Group 2 Hydroxides ($M(OH)_2$): Solubility INCREASES down the group**
>    * $Mg(OH)_2$ is very insoluble (used as a suspension in "Milk of Magnesia" to neutralise stomach acid safely)
>    * $Ca(OH)_2$ is slightly soluble (saturated solution is "limewater")
>    * $Ba(OH)_2$ is highly soluble, forming strongly alkaline solutions
> 2. **Group 2 Sulfates ($MSO_4$): Solubility DECREASES down the group**
>    * $MgSO_4$ is highly soluble
>    * $CaSO_4$ is slightly soluble
>    * $BaSO_4$ is completely insoluble (forms a dense white precipitate)

> [!BOX]
> ### 📋 Key Qualitative Tests & Applications
> * **Testing for Carbon Dioxide ($CO_2$):** Bubble gas through limewater (saturated $Ca(OH)_2$). A white precipitate of calcium carbonate forms, turning the solution cloudy:
>   $$CO_2\\text{(g)} + Ca(OH)_2\\text{(aq)} \\\\rightarrow CaCO_3\\text{(s)} + H_2O\\text{(l)}$$
> * **Testing for Sulfate Ions ($SO_4^{2-}$):** Add dilute hydrochloric acid (to prevent $BaCO_3$ precipitation), then add barium chloride ($BaCl_2$) solution. A thick white precipitate of barium sulfate forms:
>   $$Ba^{2+}\\text{(aq)} + SO_4^{2-}\\text{(aq)} \\\\rightarrow BaSO_4\\text{(s)}$$
> * **Barium Meals in Medicine:** $Ba^{2+}$ ions are highly toxic. However, $BaSO_4$ is completely insoluble in water and stomach acid, so it cannot be absorbed into the bloodstream. Ingested as a "barium meal", it coats the digestive tract, showing up clearly on X-rays due to its high electron density.

> [!EXAMPLE]
> #### 📝 Worked Example 7: Limewater Test Preservation
> **Question:** Limewater is used to test for carbon dioxide. Why must a bottle of limewater not be left open to the air before being used in this test?
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the component in the air that reacts:**
> >    * Air contains carbon dioxide gas ($CO_2$).
> > 
> > 2. **Write the reaction that occurs:**
> >    * Saturated calcium hydroxide (limewater) will react slowly with atmospheric $CO_2$:
> >      $$CO_2\\text{(g)} + Ca(OH)_2\\text{(aq)} \\\\rightarrow CaCO_3\\text{(s)} + H_2O\\text{(l)}$$
> > 
> > 3. **Conclude:**
> >    * A white precipitate of insoluble calcium carbonate will form, making the limewater cloudy before the actual experiment is performed, ruining the test.
`
    },
    {
        id: '8b5-thermal-stability',
        title: 'Thermal Stability of Compounds in Groups 1 and 2',
        type: 'text',
        content: `
> [!NOTE]
> ### 🛡️ Cation Charge Density & Polarisation
> **Thermal stability** is a measure of the extent to which a compound decomposes when heated.
> * Larger, complex anions (like nitrate $\\\\text{NO}_3^-$ and carbonate $\\\\text{CO}_3^{2-}$) decompose when heated rather than melting.
> * Cations with high **charge density** (large positive charge, small ionic radius) exert a strong electrostatic pull on the electron cloud of these anions.
> * This **polarisation** weakens the covalent bonds within the anion (e.g. C–O or N–O bonds), making the anion decompose more easily (at lower temperatures).
> * **Be²⁺** (charge +2, radius 0.027 nm) has the greatest polarising power, whereas **Cs⁺** (charge +1, radius 0.170 nm) has the least.

> [!IMPORTANT]
> ### 🔥 Thermal Stability of Nitrates
> * **Group 1 Nitrates (except $LiNO_3$):** Undergo **lesser decomposition** to form a solid metal nitrite and oxygen gas:
>   $$2MNO_3\\text{(s)} \\\\rightarrow 2MNO_2\\text{(s)} + O_2\\text{(g)}$$
>   (No brown fumes observed; oxygen gas relights a glowing splint).
> * **Lithium Nitrate & Group 2 Nitrates:** Undergo **greater decomposition** to form metal oxide, brown nitrogen dioxide gas, and oxygen gas:
>   $$4LiNO_3\\text{(s)} \\\\rightarrow 2Li_2O\\text{(s)} + 4NO_2\\text{(g)} + O_2\\text{(g)}$$
>   $$2M(NO_3)_2\\text{(s)} \\\\rightarrow 2MO\\text{(s)} + 4NO_2\\text{(g)} + O_2\\text{(g)}$$
>   (Thick brown toxic fumes of $\\\\text{NO}_2$ and colourless $\\\\text{O}_2$ gas are observed).

> [!IMPORTANT]
> ### 🌋 Thermal Stability of Carbonates
> * **Group 1 Carbonates (except $Li_2CO_3$):** Are **thermally stable** at Bunsen burner temperatures. They do not decompose.
> * **Lithium Carbonate & Group 2 Carbonates:** Decompose on heating to form the solid metal oxide and carbon dioxide gas:
>   $$MCO_3\\text{(s)} \\\\rightarrow MO\\text{(s)} + CO_2\\text{(g)}$$
> * **Stability Trend:** Thermal stability **increases down the group** (requires higher temperature to decompose) because ionic radius increases, decreasing the charge density and polarising power of the cation.

> [!EXAMPLE]
> #### 📝 Worked Example 8: Nitrate Decomposition Observations
> **Question:** Describe the observations made when solid calcium nitrate, $\\\\text{Ca(NO}_3)_2$, is heated strongly in a test tube over a Bunsen flame.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the group of the cation and the type of decomposition:**
> >    * Calcium is a Group 2 metal, so its nitrate undergoes greater decomposition:
> >      $$2Ca(NO_3)_2\\text{(s)} \\\\rightarrow 2CaO\\text{(s)} + 4NO_2\\text{(g)} + O_2\\text{(g)}$$
> > 
> > 2. **State the observations for each product:**
> >    * **$NO_2$ gas:** Brown, toxic fumes will be visible in the tube.
> >    * **$O_2$ gas:** A glowing splint held at the mouth of the tube will relight.
> >    * **$CaO$ solid:** The white solid reactant decomposes to leave a white solid residue.
`
    },
    {
        id: '8b6-flame-tests',
        title: 'Flame Tests & Ammonium Ion Test',
        type: 'text',
        content: `
> [!NOTE]
> ### 🎨 Flame Tests Procedure & Colors
> A **flame test** is a simple qualitative test to identify specific metal cations based on their emission spectra:
> 
> 1. Dip a clean platinum or nichrome wire loop in **concentrated hydrochloric acid** (HCl).
> 2. Dip the wire into the solid sample to convert the metal compound to a **volatile chloride** (chlorides evaporate more easily in the flame, giving stronger colors).
> 3. Place the wire loop in the hot, blue Bunsen burner flame and observe the color.
> 
> | Metal Cation | Flame Color | Metal Cation | Flame Color |
> | :--- | :---: | :--- | :---: |
> | Lithium, $\\\\text{Li}^+$ | Red | Beryllium, $\\\\text{Be}^{2+}$ | No color |
> | Sodium, $\\\\text{Na}^+$ | Yellow / Orange | Magnesium, $\\\\text{Mg}^{2+}$ | No color |
> | Potassium, $\\\\text{K}^+$ | Lilac | Calcium, $\\\\text{Ca}^{2+}$ | Brick red |
> | Rubidium, $\\\\text{Rb}^+$ | Red / Purple | Strontium, $\\\\text{Sr}^{2+}$ | Crimson red |
> | Caesium, $\\\\text{Cs}^+$ | Blue / Violet | Barium, $\\\\text{Ba}^{2+}$ | Apple green |

> [!TIP]
> ### 🔬 What Causes the Colors?
> 1. **Excitation:** The thermal energy of the Bunsen flame absorbs into valence electrons, excited them to higher energy levels.
> 2. **Relaxation:** The excited electrons are unstable and fall back to their ground state (lower energy orbitals).
> 3. **Emission:** As they relax, they release a specific quantum of energy as electromagnetic radiation (light). If the wavelength ($\\\\lambda$) falls within the visible light spectrum ($400$ to $700$ nm), a characteristic color is seen.
> * **No Color for Be²⁺ & Mg²⁺:** Their valence electrons are held very tightly by the nucleus due to their small sizes. The flame energy is insufficient to excite them, or the emitted light wavelength falls outside the visible spectrum.

> [!BOX]
> ### 🧪 Chemical Test for Ammonium Ions ($NH_4^+$)
> To test for the presence of ammonium ions in a compound:
> 1. Add **sodium hydroxide solution** (NaOH) to the sample and warm gently.
> 2. Alkaline **ammonia gas** ($NH_3$) is released:
>    $$NH_4^+\\text{(aq)} + OH^-\\text{(aq)} \\\\rightarrow NH_3\\text{(g)} + H_2O\\text{(l)}$$
> 3. **Testing the gas:**
>    * Damp red litmus paper turns blue (ammonia is the only common alkaline gas).
>    * Alternatively, open a bottle of concentrated hydrochloric acid near the gas; white dense smoke of ammonium chloride forms:
>      $$NH_3\\text{(g)} + HCl\\text{(g)} \\\\rightarrow NH_4Cl\\text{(s)}$$

> [!EXAMPLE]
> #### 📝 Worked Example 9: Flame Test Mechanics
> **Question:** Explain why barium compounds give a characteristic green flame color during a flame test, whereas magnesium compounds produce no color.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Compare electron configurations and shielding:**
> >    * Barium ($Ba$) has a larger atomic radius and more electron shielding than Magnesium ($Mg$).
> >    * Magnesium's outer s-electrons are held much closer to the nucleus and are more strongly attracted.
> > 
> > 2. **Relate to excitation energy:**
> >    * The thermal energy of the Bunsen flame is sufficient to excite barium's valence electrons, but is not enough to excite magnesium's outer electrons.
> >    * Alternatively, the energy transition of relaxing electrons in magnesium corresponds to a wavelength outside the visible spectrum.
`
    },
    {
        id: '8c1-group-7-trends',
        title: 'Physical Properties & Periodic Trends of Group 7',
        type: 'text',
        content: `
> [!NOTE]
> ### 📋 Introduction to the Halogens
> Group 7 of the periodic table contains five non-metal elements: Fluorine ($F_2$), Chlorine ($Cl_2$), Bromine ($Br_2$), Iodine ($I_2$), and Astatine ($At_2$).
> * They exist as **diatonic molecules** containing a single covalent bond.
> * They are highly electronegative non-metals that react by gaining one electron to achieve a noble gas configuration, forming halide ions ($X^-$).
> 
> **Physical properties of Group 7 elements:**
> | Element | Formula | State at Room Temp | Color | Melting Point / °C | Boiling Point / °C | Electronegativity |
> | :--- | :---: | :---: | :---: | :---: | :---: | :---: |
> | Fluorine | $F_2$ | Gas | Pale yellow | -220 | -188 | 4.0 |
> | Chlorine | $Cl_2$ | Gas | Pale green | -101 | -35 | 3.0 |
> | Bromine | $Br_2$ | Liquid | Red-brown | -7 | 59 | 2.8 |
> | Iodine | $I_2$ | Solid | Grey-black | 114 | 184 | 2.5 |
> | Astatine | $At_2$ | Solid | Black | 302 | 337 | 2.2 |

> [!TIP]
> ### 📈 Boiling & Melting Points Trend
> Down Group 7, the **melting and boiling temperatures increase**.
> * Halogen molecules are non-polar diatomic molecules.
> * The only intermolecular forces acting between them are weak **London dispersion forces** (instantaneous dipole-induced dipole forces).
> * Down the group, the number of electrons per molecule increases, expanding the size of the electron cloud.
> * This leads to stronger London forces between molecules, requiring more thermal energy to overcome.
> * **Equations representing physical state changes:**
>   * Bromine evaporation: $Br_2\\text{(l)} \\\\rightarrow Br_2\\text{(g)}$ (brown vapour)
>   * Iodine **sublimation** (solid directly to gas): $I_2\\text{(s)} \\\\rightarrow I_2\\text{(g)}$ (purple vapour)

> [!IMPORTANT]
> ### 📉 Trends in Electronegativity & Reactivity
> Down Group 7, both **electronegativity and reactivity decrease**:
> 
> 1. **Electronegativity:** The ability of an atom to attract a bonding pair of electrons in a covalent bond decreases down the group because:
>    * The atomic radius increases, placing the outer bonding electrons further from the nucleus.
>    * Inner shells increase, boosting the shielding effect and reducing electrostatic pull from the nucleus.
> 2. **Reactivity:** Halogens react by acting as **oxidising agents** (gaining electrons). Because shielding and atomic radius increase down the group:
>    * The incoming electron is less strongly attracted to the positive nucleus.
>    * Therefore, the ability to gain an electron decreases, making halogens less reactive down the group (Fluorine is the most reactive, Astatine is the least).

> [!EXAMPLE]
> #### 📝 Worked Example 10: Halogen Boiling Points
> **Question:** Explain why bromine has a higher boiling point than chlorine, even though chlorine has a higher electronegativity.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Compare molecular structures and intermolecular forces:**
> >    * Both $Cl_2$ and $Br_2$ exist as simple non-polar diatomic molecules.
> >    * The intermolecular forces between their molecules are London dispersion forces.
> > 
> > 2. **Compare electron count:**
> >    * Bromine molecules ($Br_2$) contain significantly more electrons than chlorine molecules ($Cl_2$).
> > 
> > 3. **Relate to boiling point:**
> >    * The greater number of electrons in $Br_2$ creates larger, more polarisable electron clouds, leading to stronger London forces.
> >    * More thermal energy is required to overcome these intermolecular forces in bromine than in chlorine, yielding a higher boiling point. Electronegativity is irrelevant here as it affects intramolecular bonding pairs, not intermolecular attraction.
`
    },
    {
        id: '8c2-halogen-reactions',
        title: 'Redox & Disproportionation Reactions of Halogens',
        type: 'text',
        content: `
> [!NOTE]
> ### 🧪 Reactions with s-block Metals
> Halogens react vigorously with Group 1 and Group 2 metals to form white, crystalline ionic halides:
> * Group 1: $2M\\text{(s)} + X_2\\text{(g/l/s)} \\\\rightarrow 2MX\\text{(s)}$
> * Group 2: $M\\text{(s)} + X_2\\text{(g/l/s)} \\\\rightarrow MX_2\\text{(s)}$
> * **Redox nature:** The metal is oxidised (oxidation state increases from $0$ to $+1$ or $+2$) and the halogen is reduced (oxidation state decreases from $0$ to $-1$).
> * Reactivity is greatest between metals at the bottom of the s-block (most electropositive, e.g. Cs) and halogens at the top of Group 7 (most electronegative, e.g. F).

> [!IMPORTANT]
> ### 🔄 Halogen-Halide Displacement Reactions
> A more reactive halogen will displace a less reactive halide ion from its aqueous solution.
> * **Chlorine** displaces bromide and iodide:
>   $$Cl_2\\text{(aq)} + 2Br^-\\text{(aq)} \\\\rightarrow 2Cl^-\\text{(aq)} + Br_2\\text{(aq)}$$ (solution turns orange/yellow)
>   $$Cl_2\\text{(aq)} + 2I^-\\text{(aq)} \\\\rightarrow 2Cl^-\\text{(aq)} + I_2\\text{(aq)}$$ (solution turns brown)
> * **Bromine** displaces iodide only:
>   $$Br_2\\text{(aq)} + 2I^-\\text{(aq)} \\\\rightarrow 2Br^-\\text{(aq)} + I_2\\text{(aq)}$$
> * **Iodine** cannot displace either chloride or bromide.
> * **Cyclohexane Extraction:** Because halogens are non-polar, they dissolve much better in organic solvents like **cyclohexane** than in water. Adding cyclohexane and shaking separates the mixture into an upper organic layer with characteristic colors:
>   * Chlorine: **pale green**
>   * Bromine: **orange**
>   * Iodine: **purple / violet**
> 
> ${svgToken(halogenCyclohexaneSvg)}

> [!IMPORTANT]
> ### ⚖️ Disproportionation of Chlorine
> Chlorine undergoes disproportionation reactions under three conditions:
> 
> 1. **In Water (Disinfection):**
>    $$Cl_2\\text{(aq)} + H_2O\\text{(l)} \\\\rightarrow HCl\\text{(aq)} + HClO\\text{(aq)}$$
>    * Chlorine is reduced from $0$ to $-1$ (in $HCl$) and oxidised from $0$ to $+1$ (in chloric(I) acid, $HClO$).
>    * $HClO$ acts as a powerful disinfectant, killing bacteria in drinking water and swimming pools.
> 2. **In Cold, Dilute Alkali (Bleach Formation at ~15°C):**
>    $$Cl_2\\text{(g)} + 2NaOH\\text{(aq)} \\\\rightarrow NaCl\\text{(aq)} + NaClO\\text{(aq)} + H_2O\\text{(l)}$$
>    * Chlorine is reduced to $-1$ (in $NaCl$) and oxidised to $+1$ (in sodium chlorate(I), $NaClO$, the active ingredient in household bleach).
> 3. **In Hot, Concentrated Alkali (Weed Killer Formation at ~70°C):**
>    $$3Cl_2\\text{(g)} + 6NaOH\\text{(aq)} \\\\rightarrow 5NaCl\\text{(aq)} + NaClO_3\\text{(aq)} + 3H_2O\\text{(l)}$$
>    * Chlorine is reduced to $-1$ (in $NaCl$) and oxidised to $+5$ (in sodium chlorate(V), $NaClO_3$, used as a weed killer).

> [!EXAMPLE]
> #### 📝 Worked Example 11: Astatine and Alkali Disproportionation
> **Question:** Based on the periodic trends of halogens, write the chemical equation for the reaction of bromine gas with hot concentrated sodium hydroxide solution, naming the organic/inorganic products.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Recall the hot concentrated alkali disproportionation pattern:**
> >    * Halogens react with hot concentrated NaOH to form the halide ion ($-1$ state) and the chlorate(V) analog ($+5$ state).
> > 
> > 2. **Apply to Bromine:**
> >    * Set up the reactants and products using bromine ($Br_2$):
> >      $$3Br_2 + 6NaOH \\\\rightarrow 5NaBr + NaBrO_3 + 3H_2O$$
> > 
> > 3. **Name the products:**
> >    * $NaBr$ is sodium bromide.
> >    * $NaBrO_3$ is sodium bromate(V).
`
    },
    {
        id: '8c3-halides-sulfuric-acid',
        title: 'Reactions of Halides with Sulfuric Acid',
        type: 'text',
        content: `
> [!NOTE]
> ### ⚡ Cation Reducing Power Trend
> In these reactions, halide ions act as **reducing agents** by losing electrons:
> $$2X^- \\\\rightarrow X_2 + 2e^-$$
> * **The Trend:** The reducing power of halide ions **increases down the group** ($F^- < Cl^- < Br^- < I^-$).
> * **Reason:** Down the group, ionic radius increases. The outermost electrons are further from the nucleus and experience more shielding, weakening the electrostatic attraction. It becomes easier for the halide ion to lose its outer electron.
> * **Sulfuric Acid:** Acts as an acid and an **oxidising agent** (reduced during these reactions). The extent to which sulfuric acid is reduced depends on the reducing power of the halide ion:
>   * Reduction to $SO_2$ (sulfur state $+6 \\\\rightarrow +4$, 2-electron change):
>     $$H_2SO_4 + 2H^+ + 2e^- \\\\rightarrow 2H_2O + SO_2$$
>   * Reduction to $S$ (sulfur state $+6 \\\\rightarrow 0$, 6-electron change):
>     $$H_2SO_4 + 6H^+ + 6e^- \\\\rightarrow 4H_2O + S$$
>   * Reduction to $H_2S$ (sulfur state $+6 \\\\rightarrow -2$, 8-electron change):
>     $$H_2SO_4 + 8H^+ + 8e^- \\\\rightarrow 4H_2O + H_2S$$

> [!IMPORTANT]
> ### 📋 Observations & Equations
> 
> **1. Sodium Fluoride & Sodium Chloride (Acid-Base only):**
> * Fluoride and chloride ions are weak reducing agents. No redox reaction occurs. Sulfuric acid behaves only as an acid.
> * **Observations:** Misty white fumes.
> * **Equation:**
>   $$NaCl\\text{(s)} + H_2SO_4\\text{(l)} \\\\rightarrow NaHSO_4\\text{(s)} + HCl\\text{(g)}$$
> 
> **2. Sodium Bromide (Acid-Base & Redox):**
> * Bromide is a stronger reducing agent. It reduces sulfur from $+6$ to $+4$ ($SO_2$).
> * **Observations:** Misty fumes ($HBr$), brown fumes ($Br_2$), and a colourless gas with a choking smell ($SO_2$).
> * **Equation:**
>   $$2NaBr\\text{(s)} + 2H_2SO_4\\text{(l)} \\\\rightarrow Na_2SO_4\\text{(s)} + SO_2\\text{(g)} + Br_2\\text{(g)} + 2H_2O\\text{(l)}$$
> 
> **3. Sodium Iodide (Heavy Redox):**
> * Iodide is the strongest reducing agent. It reduces sulfur to $+4$ ($SO_2$), $0$ ($S$), and $-2$ ($H_2S$).
> * **Observations:** Misty fumes ($HI$), purple fumes/black solid ($I_2$), choking gas ($SO_2$), yellow solid ($S$), and rotten-egg smell ($H_2S$).
> * **Equations:**
>   * Forming $SO_2$: $2NaI + 2H_2SO_4 \\\\rightarrow Na_2SO_4 + SO_2 + I_2 + 2H_2O$
>   * Forming $S$: $6NaI + 4H_2SO_4 \\\\rightarrow 3Na_2SO_4 + S + 3I_2 + 4H_2O$
>   * Forming $H_2S$: $8NaI + 5H_2SO_4 \\\\rightarrow 4Na_2SO_4 + H_2S + 4I_2 + 4H_2O$

> [!EXAMPLE]
> #### 📝 Worked Example 12: Balancing Iodide and Sulfuric Acid to Hydrogen Sulfide
> **Question:** Use ionic half-equations to construct the balanced redox equation for the reaction of iodide ions with concentrated sulfuric acid to produce hydrogen sulfide.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Write the half-equations:**
> >    * Oxidation: $2I^- \\\\rightarrow I_2 + 2e^-$
> >    * Reduction (forming $H_2S$): $H_2SO_4 + 8H^+ + 8e^- \\\\rightarrow H_2S + 4H_2O$
> > 
> > 2. **Balance the electrons:**
> >    * Multiply the oxidation half-equation by 4 to supply 8 electrons:
> >      $$8I^- \\\\rightarrow 4I_2 + 8e^-$$
> > 
> > 3. **Combine and cancel electrons:**
> >    * Add the equations:
> >      $$8I^-\\text{(aq)} + H_2SO_4\\text{(l)} + 8H^+\\text{(aq)} \\\\rightarrow 4I_2\\text{(s)} + H_2S\\text{(g)} + 4H_2O\\text{(l)}$$
`
    },
    {
        id: '8c4-qualitative-tests-hx',
        title: 'Qualitative Tests & Hydrogen Halides',
        type: 'text',
        content: `
> [!NOTE]
> ### 📋 Qualitative Tests for Aqueous Halides
> Aqueous halides ($Cl^-, Br^-, I^-$) are tested by adding **dilute nitric acid** ($HNO_3$, to remove interfering carbonate ions) followed by **silver nitrate solution** ($AgNO_3$):
> * General precipitation equation:
>   $$Ag^+\\text{(aq)} + X^-\\text{(aq)} \\\\rightarrow AgX\\text{(s)}$$
> 
> | Halide Ion | Silver Halide Precipitate | Color | Solubility in Dilute Ammonia ($NH_3$) | Solubility in Concentrated Ammonia ($NH_3$) |
> | :--- | :---: | :---: | :---: | :---: |
> | **Fluoride, $F^-$** | $AgF$ | Soluble / No ppt | — | — |
> | **Chloride, $Cl^-$** | $AgCl$ | White ppt | Soluble (clears to colorless) | Soluble |
> | **Bromide, $Br^-$** | $AgBr$ | Cream ppt | Insoluble | Soluble |
> | **Iodide, $I^-$** | $AgI$ | Yellow ppt | Insoluble | Insoluble |
> 
> * **Complex ion formation:** $AgCl$ dissolves in ammonia by forming a soluble diammine silver(I) complex:
>   $$AgCl\\text{(s)} + 2NH_3\\text{(aq)} \\\\rightarrow [Ag(NH_3)_2]^+\\text{(aq)} + Cl^-\\text{(aq)}$$

> [!TIP]
> ### 🧪 Acid Strength of Hydrogen Halides
> Hydrogen halides ($HF, HCl, HBr, HI$) are colourless, polar gases at room temperature:
> * They react with water to form acidic solutions:
>   $$HX\\text{(g)} + H_2O\\text{(l)} \\\\rightarrow H_3O^+\\text{(aq)} + X^-\\text{(aq)}$$
> * **HF is a weak acid** (partially dissociates, written with $\\\\rightleftharpoons$) due to the extremely strong H–F covalent bond.
> * **HCl, HBr, and HI are strong acids** (fully dissociate in water) because their bonds are longer and weaker, releasing $H^+$ easily.

> [!IMPORTANT]
> ### ⚗️ Reaction with Ammonia & Gas Diffusion
> Hydrogen halides react with ammonia gas to form white solid ammonium salts:
> $$HX\\text{(g)} + NH_3\\text{(g)} \\\\rightarrow NH_4X\\text{(s)}$$
> 
> * **The Diffusion Tube Experiment:** Soaking cotton wool in concentrated ammonia ($NH_3$) and concentrated hydrochloric acid ($HCl$) and placing them at opposite ends of a sealed glass tube results in a white solid ring of ammonium chloride ($NH_4Cl$).
> * **Ring Location:** The ring forms **closer to the HCl end** because:
>   * Ammonia ($NH_3$, $M_r = 17.0$) is lighter than hydrogen chloride ($HCl$, $M_r = 36.5$).
>   * According to Graham's Law, lighter gas molecules diffuse faster and cover a greater distance in the same time.
> 
> ${svgToken(gasDiffusionSvg)}

> [!EXAMPLE]
> #### 📝 Worked Example 13: Bromide Test Equations
> **Question:** Write the ionic equation for the formation of the precipitate when testing for bromide ions with silver nitrate, and write the complex equation for dissolving this precipitate in concentrated ammonia.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Write the precipitation equation:**
> >    * Silver ions react with bromide ions to form insoluble cream silver bromide:
> >      $$Ag^+\\text{(aq)} + Br^-\\text{(aq)} \\\\rightarrow AgBr\\text{(s)}$$
> > 
> > 2. **Write the complexation equation:**
> >    * Silver bromide dissolves in concentrated ammonia by forming a soluble complex:
> >      $$AgBr\\text{(s)} + 2NH_3\\text{(aq)} \\\\rightarrow [Ag(NH_3)_2]^+\\text{(aq)} + Br^-\\text{(aq)}$$
`
    },
    {
        id: '8d1-standard-solutions',
        title: 'Preparing a Standard Solution',
        type: 'text',
        content: `
> [!NOTE]
> ### ⚗️ What is a Standard Solution?
> A **standard solution** is a chemical solution whose concentration is accurately known.
> * To prepare a standard solution, we dissolve a known mass of a solute in water and dilute it to an exact volume using a **volumetric flask**
> * The solute used should ideally be a **primary standard**

> [!IMPORTANT]
> ### 📋 Key Criteria for a Primary Standard
> A primary standard is a highly stable chemical substance used to prepare standard solutions. It must satisfy:
> 
> 1. **High Purity:** Available in a high degree of purity (typically $>99.9\\%$)
> 2. **High Chemical Stability:** Neither decomposes nor reacts with constituents in the air (e.g. oxygen, carbon dioxide)
> 3. **Non-hygroscopic:** Does not absorb water or moisture from the atmosphere
> 4. **High Molar Mass:** Minimises percentage weighing uncertainty on the balance
> 5. **High Solubility:** Dissolves completely in water at room temperature
> 
> * **Excellent Example:** **Sulfamic acid** ($NH_2SO_3H$, molar mass $= 97.1\\text{ g mol}^{-1}$) is a stable, non-hygroscopic solid used as a primary standard.
> * **Unsuitable Examples:**
>   * **NaOH:** Highly hygroscopic (solid pellets absorb moisture and react with atmospheric $CO_2$ to form a white powder of sodium carbonate, $Na_2CO_3$), making its exact weighed mass uncertain.
>   * **HCl:** Exists as volatile gas and its concentration in solution decreases over time due to evaporation.

> [!TIP]
> ### 🧪 Step-by-Step Preparation (CP3)
> 
> 1. **Weighing by Difference:** Weigh a weighing bottle containing the solid (e.g. sulfamic acid) on a 3-decimal place balance. Transfer the solid to a clean beaker and re-weigh the empty bottle. The difference yields the exact mass of solid transferred.
> 2. **Dissolving:** Add about $100\\text{ cm}^3$ of deionised water to the beaker, stirring with a glass rod until all the solid dissolves completely.
> 3. **Transfer:** Pour the solution into a $250\\text{ cm}^3$ volumetric flask using a small funnel.
> 4. **Rinsing:** Rinse the beaker, glass rod, and funnel several times with deionised water from a wash bottle, transferring all rinsings into the flask (prevents solute loss).
> 5. **Dilution to the Meniscus:** Add deionised water until the bottom of the liquid curve (**meniscus**) aligns perfectly with the graduation mark at eye level.
> 6. **Mixing:** Stopper the flask and invert it several times to ensure a completely uniform concentration.

> [!EXAMPLE]
> #### 📝 Worked Example 14: Calculated Concentration
> **Question:** A student prepares a standard solution of sodium carbonate ($M = 106.0\\text{ g mol}^{-1}$) in a $500\\text{ cm}^3$ volumetric flask. The initial weighing bottle + solid mass is $23.382\\text{ g}$, and the re-weighed empty bottle is $18.218\\text{ g}$. Calculate the concentration of the prepared solution.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate the mass of sodium carbonate transferred:**
> >    $$\\text{Mass} = 23.382\\text{ g} - 18.218\\text{ g} = 5.164\\text{ g}$$
> > 
> > 2. **Calculate the amount in moles:**
> >    $$n = \\frac{\\text{mass}}{M} = \\frac{5.164}{106.0} = 0.048717\\text{ mol}$$
> > 
> > 3. **Calculate concentration in mol dm⁻³:**
> >    * Volume $= 500\\text{ cm}^3 = 0.500\\text{ dm}^3$
> >    $$c = \\frac{n}{V} = \\frac{0.048717}{0.500} = 0.0974\\text{ mol dm}^{-3}$$
`
    },
    {
        id: '8d2-doing-titrations',
        title: 'Doing Titrations & Titration Calculations',
        type: 'text',
        content: `
> [!NOTE]
> ### ⚗️ Titration Principles
> A **titration** is a volumetric analysis technique used to determine the concentration of an unknown solution by reacting it completely with a standard solution:
> * **Pipette:** Measures and transfers an exact volume of one solution (usually $25.0\\text{ cm}^3$ of alkali) into a conical flask.
> * **Burette:** Slowly adds the other solution (usually acid) into the conical flask until the reaction is complete.
> * **Equivalence Point:** The point at which the added acid stoichiometrically matches the alkali in the flask.
> * **End Point:** The point at which the chemical indicator permanently changes color, signalling that the titration is complete.
> 
> ${svgToken(titrationSetupSvg)}

> [!IMPORTANT]
> ### 📋 Key Titration Techniques & Rules
> * **Burette Tip Filling:** Ensure the space between the tap and the tip of the burette is filled with solution (and has no air bubbles) before taking initial readings. An air bubble will be replaced by solution during titration, causing a false high titre reading.
> * **Funnel Removal:** Remove the filter funnel from the burette before taking readings and titrating. Drops of liquid could drip from the funnel during titration, giving a false low titre reading.
> * **White Tile:** Place a white tile under the conical flask to make the indicator color change easy to see.
> * **Concordant Titres:** Repeat the titration until you obtain concordant titres—values within $0.20\\text{ cm}^3$ of each other. Only average these concordant values to calculate the mean titre (ignore the rough first titre).

> [!BOX]
> ### 🎨 Indicators & Acid-Base Combinations
> 
> | Indicator | Color in Acid | Color in Alkali | Suitable Acid-Base Combination |
> | :--- | :---: | :---: | :---: |
> | **Methyl Orange** | Red | Yellow | Strong acid – Weak base / Strong acid – Strong base |
> | **Phenolphthalein**| Colorless | Pink | Weak acid – Strong base / Strong acid – Strong base |

> [!EXAMPLE]
> #### 📝 Worked Example 15: Sodium Carbonate Titration Calculation
> **Question:** A titration is performed to determine the concentration of a nitric acid ($HNO_3$) solution using a standard $0.108\\text{ mol dm}^{-3}$ solution of sodium carbonate ($Na_2CO_3$). The equation is:
> $$Na_2CO_3\\text{(aq)} + 2HNO_3\\text{(aq)} \\\\rightarrow 2NaNO_3\\text{(aq)} + H_2O\\text{(l)} + CO_2\\text{(g)}$$
> The mean concordant titre of $HNO_3$ used is $27.25\\text{ cm}^3$, reacting with $25.0\\text{ cm}^3$ of $Na_2CO_3$. Calculate the concentration of the nitric acid.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate the moles of sodium carbonate used:**
> >    $$n(Na_2CO_3) = c \\\\times V = 0.108 \\\\times \\frac{25.0}{1000} = 0.00270\\text{ mol}$$
> > 
> > 2. **Determine moles of HNO₃ using the reacting ratio (1:2):**
> >    $$n(HNO_3) = 0.00270 \\\\times 2 = 0.00540\\text{ mol}$$
> > 
> > 3. **Calculate concentration of nitric acid:**
> >    * Volume of acid $= 27.25\\text{ cm}^3 = 0.02725\\text{ dm}^3$
> >    $$c = \\frac{n}{V} = \\frac{0.00540}{0.02725} = 0.198\\text{ mol dm}^{-3}$$
`,
        titrationSimulator: true
    },
    {
        id: '8d4-errors-uncertainties',
        title: 'Mistakes, Errors, and Uncertainties in Volumetric Analysis',
        type: 'text',
        content: `
> [!NOTE]
> ### 🛡️ Mistakes vs. Errors
> * **Mistakes:** Careless actions that a skilled operator can avoid (e.g. spillages, misreading burette numbers, leaving the funnel in, forgetting to tare the balance).
> * **Errors:** Unavoidable limitations of the experimental setup and equipment:
>   * **Random Errors:** Unpredictable fluctuations (e.g. lab temperature changes, slight shifts in reading meniscus angle). Minimised by repeating and averaging.
>   * **Systematic Errors:** Constant, one-sided shifts (e.g. a pipette calibrated wrongly at factory, balance reading too high). Repeating does not reduce systematic errors.

> [!TIP]
> ### 🎯 Accuracy vs. Precision
> * **Accuracy:** How close a measured value is to the true value (e.g. low systematic error).
> * **Precision:** How close repeated measurements are to each other (e.g. low random error, tight spread of concordant titres).

> [!BOX]
> ### 📏 Apparatus Uncertainties (Class B)
> 
> | Apparatus | Capacity | Measurement Uncertainty | Number of Readings | Total Absolute Uncertainty |
> | :--- | :---: | :---: | :---: | :---: |
> | **Volumetric Flask** | $250\\text{ cm}^3$ | $\\pm 0.3\\text{ cm}^3$ | 1 | $\\pm 0.3\\text{ cm}^3$ |
> | **Pipette** | $25\\text{ cm}^3$ | $\\pm 0.06\\text{ cm}^3$ | 1 | $\\pm 0.06\\text{ cm}^3$ |
> | **Burette** | $50\\text{ cm}^3$ | $\\pm 0.05\\text{ cm}^3$ | 2 (initial & final) | $\\pm 0.10\\text{ cm}^3$ |
> | **2-decimal Balance** | — | $\\pm 0.005\\text{ g}$ | 2 (zero & mass) | $\\pm 0.010\\text{ g}$ |
> | **3-decimal Balance** | — | $\\pm 0.0005\\text{ g}$ | 4 (weighing by diff) | $\\pm 0.0020\\text{ g}$ |
> | **Thermometer** | — | $\\pm 1\\text{ }^{\\circ}\\text{C}$ | 2 (initial & final) | $\\pm 2\\text{ }^{\\circ}\\text{C}$ |
> 
> * **The Double Reading Rule:** Any measurement involving a change or difference (such as a titre in a burette or temperature rise in a thermometer) requires two readings. Thus, the absolute uncertainty is doubled.
> * **The Weighing by Difference Rule:** Subtracting two masses ($m_{\\text{solid}} = m_{\\text{bottle+solid}} - m_{\\text{empty bottle}}$) where each mass itself is measured relative to zero means we sum the uncertainties of four separate readings, yielding $4 \\\\times \\text{balance uncertainty}$.

> [!IMPORTANT]
> ### 🧮 Calculating Percentage Uncertainty
> To find the percentage uncertainty of a measurement:
> $$\\text{Percentage Uncertainty} = \\frac{\\text{Total Absolute Uncertainty}}{\\text{Measured Value}} \\\\times 100$$
> 
> * **Adding uncertainties:** The overall percentage uncertainty of an experiment is estimated by summing the individual percentage uncertainties of all the apparatus used.
>   $$\\text{Overall Uncertainty} = \\text{Uncertainty}_{\\text{balance}} + \\text{Uncertainty}_{\\text{pipette}} + \\text{Uncertainty}_{\\text{burette}} + \\dots$$
> * **Minimising uncertainties:**
>   1. **Use larger mass/volumes:** Weighing a larger mass or using a larger titre volume (e.g. $30\\text{ cm}^3$ instead of $10\\text{ cm}^3$) reduces the percentage uncertainty since the measured value in the denominator is larger.
>   2. **Use high-precision apparatus:** Class A glassware has lower uncertainties than Class B. A 3-decimal place balance has a lower percentage uncertainty than a 2-decimal place balance.

> [!EXAMPLE]
> #### 📝 Worked Example 16: Weighing by Difference Uncertainty
> **Question:** A student uses a 3-decimal place balance (uncertainty $\\pm 0.0005\\text{ g}$) to weigh out a sample of primary standard by difference.
> * Mass of weighing bottle + solid $= 20.354\\text{ g}$
> * Mass of weighing bottle $= 19.816\\text{ g}$
> Calculate the percentage uncertainty in the mass of solid added.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate the mass of solid added:**
> >    $$\\text{Mass} = 20.354\\text{ g} - 19.816\\text{ g} = 0.538\\text{ g}$$
> > 
> > 2. **Calculate the total absolute uncertainty:**
> >    * Since weighing by difference involves two mass values (each requiring a zero and object reading), the uncertainty is counted 4 times:
> >      $$\\text{Total Uncertainty} = 4 \\\\times 0.0005\\text{ g} = 0.0020\\text{ g}$$
> > 
> > 3. **Calculate percentage uncertainty:**
> >    $$\\text{Percentage Uncertainty} = \\frac{0.0020}{0.538} \\\\times 100 = 0.372\\%$$
`
    }
];
export const lessonParts = parts;
