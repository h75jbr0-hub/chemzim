import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Group VIII/0 - Noble Gases";
export const lessonNumber = 4;

export const theoryMarkdown = `
## Group VIII (0): The Noble Gases (He, Ne, Ar, Kr, Xe, Rn)
This lesson covers the inert electronic configuration of noble gases, their monotonic nature, down-group physical trends, and commercial/industrial applications in lighting, balloons, and inert atmospheres.
`;

// Compact SVG Diagram: Noble Gases & Uses (650x260)
const nobleGasesSvg = `
<svg viewBox="0 0 650 260" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgG0Grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
  </defs>

  <rect width="650" height="260" fill="url(#bgG0Grad)" stroke="#1e293b" stroke-width="2" rx="14" />
  <text x="325" y="24" fill="#f8fafc" font-size="13" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Group VIII (0) Noble Gases: Monatomic Inert Elements &amp; Uses</text>

  <!-- Left Card: Chemical Inertness & Electronic Configuration -->
  <g transform="translate(25, 42)">
    <rect width="285" height="198" rx="10" fill="#0f172a" stroke="#a855f7" stroke-width="1.2" />
    <text x="142" y="22" fill="#c084fc" font-size="11" font-weight="bold" text-anchor="middle">1. Electronic Structure &amp; Inertness</text>

    <!-- Helium & Neon representations -->
    <rect x="15" y="40" width="255" height="65" rx="6" fill="#1e293b" stroke="#334155" />
    <text x="25" y="58" fill="#f8fafc" font-size="9.5" font-weight="bold">Helium (He):</text>
    <text x="110" y="58" fill="#a5b4fc" font-size="8.5">Configuration: 2 (duplet)</text>
    <text x="25" y="78" fill="#f8fafc" font-size="9.5" font-weight="bold">Neon (Ne):</text>
    <text x="110" y="78" fill="#a5b4fc" font-size="8.5">Configuration: 2,8 (octet)</text>
    <text x="25" y="96" fill="#f8fafc" font-size="9.5" font-weight="bold">Argon (Ar):</text>
    <text x="110" y="96" fill="#a5b4fc" font-size="8.5">Configuration: 2,8,8 (octet)</text>

    <!-- Reason for inertness -->
    <rect x="15" y="115" width="255" height="70" rx="6" fill="#1e293b" stroke="#334155" />
    <text x="25" y="132" fill="#e879f9" font-size="9" font-weight="bold">Why are they totally unreactive (valency = 0)?</text>
    <text x="25" y="150" fill="#cbd5e1" font-size="8">• Full outer shell of electrons (stable octet / duplet).</text>
    <text x="25" y="164" fill="#cbd5e1" font-size="8">• No tendency to lose, gain, or share electrons.</text>
    <text x="25" y="178" fill="#cbd5e1" font-size="8">• Exist as MONATOMIC single atoms (He, Ne, Ar).</text>
  </g>

  <!-- Right Card: Commercial & Industrial Uses -->
  <g transform="translate(340, 42)">
    <rect width="285" height="198" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="1.2" />
    <text x="142" y="22" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">2. Major Cambridge Exam Applications</text>

    <!-- Helium use -->
    <rect x="15" y="38" width="255" height="46" rx="5" fill="#1e293b" />
    <text x="25" y="54" fill="#fde047" font-size="9.5" font-weight="bold">🎈 Helium (He): Weather &amp; Party Balloons</text>
    <text x="25" y="72" fill="#cbd5e1" font-size="8">• Much lower density than air AND completely non-flammable.</text>

    <!-- Argon use -->
    <rect x="15" y="90" width="255" height="46" rx="5" fill="#1e293b" />
    <text x="25" y="106" fill="#38bdf8" font-size="9.5" font-weight="bold">💡 Argon (Ar): Incandescent Light Bulbs</text>
    <text x="25" y="124" fill="#cbd5e1" font-size="8">• Inert atmosphere stops hot tungsten filament burning.</text>

    <!-- Neon use -->
    <rect x="15" y="142" width="255" height="46" rx="5" fill="#1e293b" />
    <text x="25" y="158" fill="#f43f5e" font-size="9.5" font-weight="bold">🚨 Neon (Ne): Advertising Signs &amp; Lasers</text>
    <text x="25" y="176" fill="#cbd5e1" font-size="8">• Glows bright orange-red when high-voltage current passes.</text>
  </g>
</svg>
`;

export const lessonParts: LessonPart[] = [
  {
    id: 'ci-u8-l4-part1',
    title: 'Electronic Structure & Chemical Inertness',
    type: 'text',
    content: `
> [!NOTE]
> ### 🪨 What are Noble Gases?
> The elements in **Group VIII (or Group 0)** of the periodic table are known as the **Noble (or Inert) Gases**: Helium ($He$), Neon ($Ne$), Argon ($Ar$), Krypton ($Kr$), Xenon ($Xe$), and Radon ($Rn$).
> * **Monatomic Nature:**
>   * Unlike other gaseous elements which form diatomic molecules ($H_2, O_2, N_2, Cl_2$), noble gases exist as **single unbonded atoms** (monatomic).
> * **Why are they completely unreactive (chemically inert)?**
>   * They possess a **complete, stable outer shell of electrons**:
>     * Helium has a full first shell of **2 electrons** (duplet).
>     * All other noble gases have a full outer shell of **8 electrons** (octet: $Ne = 2,8$; $Ar = 2,8,8$).
>   * Having full outer shells, they have **zero tendency to lose, gain, or share electrons**, giving them a **valency of 0**.

> [!BOX]
> ### 📊 Noble Gases & Electronic Configurations
>
> ${svgToken(nobleGasesSvg)}

> [!IMPORTANT]
> ### 📉 Physical Trends Down Group VIII
> As you go down Group VIII from Helium to Radon:
> 1. **Boiling points and melting points INCREASE:**
>    * The atomic size and total number of electrons increase.
>    * This increases the strength of temporary induced dipole-dipole attractions (London dispersion forces) between atoms, requiring more thermal energy to separate them.
> 2. **Density INCREASES:**
>    * Helium is the second lightest gas after hydrogen; radon is a very heavy, dense radioactive gas.
    `,
    keyPoints: [
      "Noble gases exist as monatomic gases with a valency of 0.",
      "They are chemically inert because their outer electron shell is completely filled (He: 2, others: 8).",
      "Melting point, boiling point, and density increase down the group."
    ]
  },
  {
    id: 'ci-u8-l4-part2',
    title: 'Industrial Uses & Cambridge Exam Questions',
    type: 'text',
    content: `
> [!TIP]
> ### 🎯 Industrial and Everyday Applications (Cambridge Mark Schemes)
> 1. **Helium ($He$):**
>    * **Filling weather balloons and airships:**
>      * **Why?** It has a much lower density than air (providing buoyancy) and is **completely non-flammable and safe** (unlike hydrogen gas, which is explosive).
> 2. **Argon ($Ar$):**
>    * **Filling incandescent light bulbs:**
>      * **Why?** The hot tungsten filament would rapidly oxidise and burn out if exposed to air/oxygen. Inert argon protects the filament at high temperatures.
>    * **Inert shielding in arc welding:**
>      * Prevents hot molten metals from reacting with oxygen and nitrogen in the air.
> 3. **Neon ($Ne$):**
>    * **Advertising signs and airport beacons:**
>      * **Why?** It glows with an intense red-orange light when high voltage electricity passes through it under low pressure.
> 4. **Krypton and Xenon ($Kr, Xe$):**
>    * Used in high-intensity photographic flash units, lighthouse lamps, and hospital laser eye surgery.

> [!EXAMPLE]
> #### 📝 Cambridge Exam Worked Example: Comparing Noble Gas Properties
> **Question:** Which statement about noble gases is **correct**?
> 
> **A** Helium atoms possess eight electrons in their outer shell  
> **B** Noble gases exist naturally as diatomic molecules  
> **C** There are no naturally occurring chemical compounds of helium  
> **D** Helium is used in light bulbs to conduct electricity through the glass  
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Evaluate Option A:** False — helium has atomic number 2, with only **two electrons** in its single outer shell.
> > 2. **Evaluate Option B:** False — noble gases are **monatomic** ($He, Ne, Ar$), not diatomic.
> > 3. **Evaluate Option C:** **True** — due to helium's stable duplet of electrons and very high ionization energy, helium forms no naturally occurring chemical compounds.
> > 4. **Evaluate Option D:** False — argon is used in incandescent light bulbs as an inert atmosphere, not helium.
> > 5. **Conclusion:** **C** is the correct statement.
    `,
    keyPoints: [
      "Helium is used in balloons because it is lighter than air and non-flammable.",
      "Argon is used in light bulbs and welding to provide an unreactive inert atmosphere.",
      "Neon is used in glowing advertising signs."
    ]
  }
];


