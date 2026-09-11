'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calculator, RotateCcw, Flame, Wind, TestTube2, Droplets } from 'lucide-react';

interface ChemistryCalculatorProps {
    isOpen: boolean;
    onClose: () => void;
}

export type CategoryType = 'stoichiometry' | 'gases' | 'energetics' | 'acids';

export type TabType = 
    | 'moles' | 'concentration' | 'dilution' | 'yield' | 'atomeconomy' | 'uncertainty'
    | 'idealgas' | 'gasvolume'
    | 'calorimetry' | 'enthalpy'
    | 'ph' | 'weakacid' | 'buffer';

interface CategoryConfig {
    id: CategoryType;
    label: string;
    icon: typeof TestTube2;
    tabs: { id: TabType; label: string; formula: string }[];
}

const CATEGORIES: CategoryConfig[] = [
    {
        id: 'stoichiometry',
        label: 'Stoichiometry & Solutions',
        icon: TestTube2,
        tabs: [
            { id: 'moles', label: 'Moles & Mass', formula: 'n = m / Mr' },
            { id: 'concentration', label: 'Concentration', formula: 'C = n / V' },
            { id: 'dilution', label: 'Dilution', formula: 'C₁V₁ = C₂V₂' },
            { id: 'yield', label: 'Percent Yield', formula: '% Yield = (Act/Theo) × 100' },
            { id: 'atomeconomy', label: 'Atom Economy', formula: '% AE = (Des. Mr / Tot. Mr) × 100' },
            { id: 'uncertainty', label: 'Uncertainty %', formula: '% Error = (Δ × n / Value) × 100' },
        ]
    },
    {
        id: 'gases',
        label: 'Gases & Volumes',
        icon: Wind,
        tabs: [
            { id: 'idealgas', label: 'Ideal Gas Law', formula: 'pV = nRT' },
            { id: 'gasvolume', label: 'Molar Gas Vol (24)', formula: 'V = n × Vm' },
        ]
    },
    {
        id: 'energetics',
        label: 'Energetics & Thermochemistry',
        icon: Flame,
        tabs: [
            { id: 'calorimetry', label: 'Heat Energy (q)', formula: 'q = mcΔT' },
            { id: 'enthalpy', label: 'Molar Enthalpy (ΔH)', formula: 'ΔH = -q / n' },
        ]
    },
    {
        id: 'acids',
        label: 'Acids, Bases & Equilibria',
        icon: Droplets,
        tabs: [
            { id: 'ph', label: 'pH & pOH', formula: 'pH = -log[H⁺]' },
            { id: 'weakacid', label: 'Weak Acid (Ka)', formula: 'Ka = [H⁺]² / [HA]' },
            { id: 'buffer', label: 'Buffer (H-H)', formula: 'pH = pKa + log([A⁻]/[HA])' },
        ]
    }
];

export default function ChemistryCalculator({ isOpen, onClose }: ChemistryCalculatorProps) {
    const [activeCategory, setActiveCategory] = useState<CategoryType>('stoichiometry');
    const [activeTab, setActiveTab] = useState<TabType>('moles');

    // 1. Stoichiometry States
    const [molesState, setMolesState] = useState({ mass: '', molarMass: '', moles: '' });
    const [concState, setConcState] = useState({ concentration: '', moles: '', volume: '' });
    const [dilState, setDilState] = useState({ c1: '', v1: '', c2: '', v2: '' });
    const [yieldState, setYieldState] = useState({ actual: '', theoretical: '', pct: '' });
    const [aeState, setAeState] = useState({ desired: '', totalReactants: '', pct: '' });
    const [uncState, setUncState] = useState({ absolute: '', measured: '', pct: '', readings: '1' });

    // 2. Gas States
    const [gasSubMode, setGasSubMode] = useState<'moles' | 'density' | 'molarmass'>('moles');
    const [idealGasState, setIdealGasState] = useState({
        p: '',     // pressure in Pa
        V: '',     // volume in m³
        n: '',     // moles
        T: '',     // temperature in K
        rho: '',   // density in g/dm³ or kg/m³
        M: '',     // molar mass in g/mol
        mass: '',  // mass in g
    });
    const [gasVolState, setGasVolState] = useState({
        v: '',     // volume in dm³ (or L)
        n: '',     // moles
        vm: '24.0' // molar volume in dm³/mol
    });

    // 3. Energetics States
    const [calorimetryState, setCalorimetryState] = useState({
        q: '',        // heat energy in J
        mass: '',     // mass of solution in g
        c: '4.18',    // specific heat capacity in J/(g·°C)
        deltaT: ''    // temperature change in °C or K
    });
    const [enthalpyState, setEnthalpyState] = useState({
        q: '',        // heat energy in kJ
        n: '',        // moles of limiting reactant
        deltaH: '',   // molar enthalpy change in kJ/mol
        isExo: true   // exothermic (releases heat) vs endothermic
    });

    // 4. Acids & Bases States
    const [phState, setPhState] = useState({ ph: '', hConc: '', poh: '', ohConc: '' });
    const [weakAcidState, setWeakAcidState] = useState({
        c: '',        // weak acid initial concentration (mol/dm³)
        ka: '',       // Ka (mol/dm³)
        pka: '',      // pKa
    });
    const [bufferState, setBufferState] = useState({
        pka: '',      // pKa
        acidConc: '', // [HA] weak acid (mol/dm³)
        saltConc: '', // [A-] conjugate base / salt (mol/dm³)
        ph: ''        // Buffer pH
    });

    const [result, setResult] = useState<{ value: string; unit: string; formula: string } | null>(null);
    const [error, setError] = useState<string | null>(null);

    const resetValues = () => {
        setMolesState({ mass: '', molarMass: '', moles: '' });
        setConcState({ concentration: '', moles: '', volume: '' });
        setDilState({ c1: '', v1: '', c2: '', v2: '' });
        setYieldState({ actual: '', theoretical: '', pct: '' });
        setAeState({ desired: '', totalReactants: '', pct: '' });
        setUncState({ absolute: '', measured: '', pct: '', readings: '1' });
        setIdealGasState({ p: '', V: '', n: '', T: '', rho: '', M: '', mass: '' });
        setGasVolState({ v: '', n: '', vm: '24.0' });
        setCalorimetryState({ q: '', mass: '', c: '4.18', deltaT: '' });
        setEnthalpyState({ q: '', n: '', deltaH: '', isExo: true });
        setPhState({ ph: '', hConc: '', poh: '', ohConc: '' });
        setWeakAcidState({ c: '', ka: '', pka: '' });
        setBufferState({ pka: '', acidConc: '', saltConc: '', ph: '' });
        setResult(null);
        setError(null);
    };

    const handleCategoryChange = (catId: CategoryType) => {
        setActiveCategory(catId);
        const cat = CATEGORIES.find(c => c.id === catId);
        if (cat && cat.tabs.length > 0) {
            setActiveTab(cat.tabs[0].id);
        }
        setResult(null);
        setError(null);
    };

    const handleTabChange = (tab: TabType) => {
        setActiveTab(tab);
        setResult(null);
        setError(null);
    };

    const handleCalculate = () => {
        setError(null);
        setResult(null);

        try {
            // === 1. MOLES & MASS ===
            if (activeTab === 'moles') {
                const { mass, molarMass, moles } = molesState;
                const m = parseFloat(mass);
                const M = parseFloat(molarMass);
                const n = parseFloat(moles);

                const filled = [mass, molarMass, moles].filter(x => x !== '').length;
                if (filled !== 2) {
                    setError('Please fill exactly two fields.');
                    return;
                }

                if (!moles && m && M) {
                    if (M <= 0) throw new Error('Molar mass must be greater than zero.');
                    setResult({
                        value: (m / M).toFixed(4),
                        unit: 'mol',
                        formula: 'n = m / Mr'
                    });
                } else if (!mass && n && M) {
                    if (n < 0 || M <= 0) throw new Error('Invalid input values.');
                    setResult({
                        value: (n * M).toFixed(4),
                        unit: 'g',
                        formula: 'm = n × Mr'
                    });
                } else if (!molarMass && m && n) {
                    if (n <= 0) throw new Error('Moles must be greater than zero.');
                    setResult({
                        value: (m / n).toFixed(4),
                        unit: 'g/mol',
                        formula: 'Mr = m / n'
                    });
                }
            } 
            // === 2. CONCENTRATION ===
            else if (activeTab === 'concentration') {
                const { concentration, moles, volume } = concState;
                const C = parseFloat(concentration);
                const n = parseFloat(moles);
                const V = parseFloat(volume);

                const filled = [concentration, moles, volume].filter(x => x !== '').length;
                if (filled !== 2) {
                    setError('Please fill exactly two fields.');
                    return;
                }

                if (!concentration && n && V) {
                    if (V <= 0) throw new Error('Volume must be greater than zero.');
                    setResult({
                        value: (n / V).toFixed(4),
                        unit: 'mol/dm³ (M)',
                        formula: 'C = n / V'
                    });
                } else if (!moles && C && V) {
                    if (C < 0 || V <= 0) throw new Error('Invalid input values.');
                    setResult({
                        value: (C * V).toFixed(4),
                        unit: 'mol',
                        formula: 'n = C × V'
                    });
                } else if (!volume && C && n) {
                    if (C <= 0) throw new Error('Concentration must be greater than zero.');
                    setResult({
                        value: (n / C).toFixed(4),
                        unit: 'dm³ (L)',
                        formula: 'V = n / C'
                    });
                }
            } 
            // === 3. DILUTION ===
            else if (activeTab === 'dilution') {
                const { c1, v1, c2, v2 } = dilState;
                const C1 = parseFloat(c1);
                const V1 = parseFloat(v1);
                const C2 = parseFloat(c2);
                const V2 = parseFloat(v2);

                const filled = [c1, v1, c2, v2].filter(x => x !== '').length;
                if (filled !== 3) {
                    setError('Please fill exactly three fields.');
                    return;
                }

                if (!c1 && V1 && C2 && V2) {
                    if (V1 <= 0) throw new Error('Volume V₁ must be greater than zero.');
                    setResult({
                        value: ((C2 * V2) / V1).toFixed(4),
                        unit: 'mol/dm³ (C₁)',
                        formula: 'C₁ = (C₂ × V₂) / V₁'
                    });
                } else if (!v1 && C1 && C2 && V2) {
                    if (C1 <= 0) throw new Error('Concentration C₁ must be greater than zero.');
                    setResult({
                        value: ((C2 * V2) / C1).toFixed(4),
                        unit: 'V₁ unit',
                        formula: 'V₁ = (C₂ × V₂) / C₁'
                    });
                } else if (!c2 && C1 && V1 && V2) {
                    if (V2 <= 0) throw new Error('Volume V₂ must be greater than zero.');
                    setResult({
                        value: ((C1 * V1) / V2).toFixed(4),
                        unit: 'mol/dm³ (C₂)',
                        formula: 'C₂ = (C₁ × V₁) / V₂'
                    });
                } else if (!v2 && C1 && V1 && C2) {
                    if (C2 <= 0) throw new Error('Concentration C₂ must be greater than zero.');
                    setResult({
                        value: ((C1 * V1) / C2).toFixed(4),
                        unit: 'V₂ unit',
                        formula: 'V₂ = (C₁ × V₁) / C₂'
                    });
                }
            } 
            // === 4. PERCENT YIELD ===
            else if (activeTab === 'yield') {
                const { actual, theoretical, pct } = yieldState;
                const act = parseFloat(actual);
                const theo = parseFloat(theoretical);
                const p = parseFloat(pct);

                const filled = [actual, theoretical, pct].filter(x => x !== '').length;
                if (filled !== 2) {
                    setError('Please fill exactly two fields.');
                    return;
                }

                if (!pct && act && theo) {
                    if (theo <= 0) throw new Error('Theoretical yield must be greater than zero.');
                    setResult({
                        value: ((act / theo) * 100).toFixed(2),
                        unit: '%',
                        formula: '% Yield = (Actual / Theoretical) × 100'
                    });
                } else if (!actual && p && theo) {
                    if (theo <= 0 || p < 0) throw new Error('Invalid input values.');
                    setResult({
                        value: ((p * theo) / 100).toFixed(4),
                        unit: 'g',
                        formula: 'Actual = (% Yield × Theoretical) / 100'
                    });
                } else if (!theoretical && act && p) {
                    if (p <= 0) throw new Error('Percentage yield must be greater than zero.');
                    setResult({
                        value: ((act * 100) / p).toFixed(4),
                        unit: 'g',
                        formula: 'Theoretical = (Actual × 100) / % Yield'
                    });
                }
            } 
            // === 5. ATOM ECONOMY ===
            else if (activeTab === 'atomeconomy') {
                const { desired, totalReactants, pct } = aeState;
                const des = parseFloat(desired);
                const tot = parseFloat(totalReactants);
                const p = parseFloat(pct);

                const filled = [desired, totalReactants, pct].filter(x => x !== '').length;
                if (filled !== 2) {
                    setError('Please fill exactly two fields.');
                    return;
                }

                if (!pct && des && tot) {
                    if (tot <= 0) throw new Error('Total reactants Mr must be greater than zero.');
                    setResult({
                        value: ((des / tot) * 100).toFixed(2),
                        unit: '%',
                        formula: '% Atom Economy = (Desired Mr / Total Mr) × 100'
                    });
                } else if (!desired && p && tot) {
                    if (tot <= 0 || p < 0) throw new Error('Invalid input values.');
                    setResult({
                        value: ((p * tot) / 100).toFixed(4),
                        unit: 'g/mol (Mr)',
                        formula: 'Desired Mr = (% AE × Total Mr) / 100'
                    });
                } else if (!totalReactants && des && p) {
                    if (p <= 0) throw new Error('Atom economy must be greater than zero.');
                    setResult({
                        value: ((des * 100) / p).toFixed(4),
                        unit: 'g/mol (Mr)',
                        formula: 'Total Mr = (Desired Mr × 100) / % AE'
                    });
                }
            } 
            // === 6. UNCERTAINTY ===
            else if (activeTab === 'uncertainty') {
                const { absolute, measured, pct, readings } = uncState;
                const abs = parseFloat(absolute);
                const meas = parseFloat(measured);
                const p = parseFloat(pct);
                const nReadings = parseFloat(readings) || 1;

                const filled = [absolute, measured, pct].filter(x => x !== '').length;
                if (filled !== 2) {
                    setError('Please fill exactly two fields.');
                    return;
                }

                if (!pct && abs && meas) {
                    if (meas <= 0) throw new Error('Measured value must be greater than zero.');
                    setResult({
                        value: (((abs * nReadings) / meas) * 100).toFixed(2),
                        unit: '%',
                        formula: '% Uncertainty = (Abs Error × Readings / Value) × 100'
                    });
                } else if (!absolute && p && meas) {
                    if (meas <= 0 || p < 0) throw new Error('Invalid input values.');
                    setResult({
                        value: ((p * meas) / (100 * nReadings)).toFixed(4),
                        unit: 'units',
                        formula: 'Abs Error = (% Uncertainty × Value) / (100 × Readings)'
                    });
                } else if (!measured && abs && p) {
                    if (p <= 0) throw new Error('Percentage uncertainty must be greater than zero.');
                    setResult({
                        value: (((abs * nReadings) * 100) / p).toFixed(4),
                        unit: 'units',
                        formula: 'Value = (Abs Error × Readings × 100) / % Uncertainty'
                    });
                }
            } 
            // === 7. IDEAL GAS LAW ===
            else if (activeTab === 'idealgas') {
                const { p, V, n, T, rho, M, mass } = idealGasState;
                const R = 8.314;

                if (gasSubMode === 'moles') {
                    const P_val = parseFloat(p);
                    const V_val = parseFloat(V);
                    const N_val = parseFloat(n);
                    const T_val = parseFloat(T);

                    const filled = [p, V, n, T].filter(x => x !== '').length;
                    if (filled !== 3) {
                        setError('Please fill exactly three fields.');
                        return;
                    }

                    if (!p) {
                        if (V_val <= 0 || T_val < 0 || N_val < 0) throw new Error('Invalid input values.');
                        setResult({
                            value: ((N_val * R * T_val) / V_val).toFixed(2),
                            unit: 'Pa',
                            formula: 'p = nRT / V'
                        });
                    } else if (!V) {
                        if (P_val <= 0 || T_val < 0 || N_val < 0) throw new Error('Invalid input values.');
                        setResult({
                            value: ((N_val * R * T_val) / P_val).toFixed(6),
                            unit: 'm³',
                            formula: 'V = nRT / p'
                        });
                    } else if (!n) {
                        if (P_val <= 0 || V_val <= 0 || T_val <= 0) throw new Error('Invalid input values.');
                        setResult({
                            value: ((P_val * V_val) / (R * T_val)).toFixed(4),
                            unit: 'mol',
                            formula: 'n = pV / RT'
                        });
                    } else if (!T) {
                        if (P_val <= 0 || V_val <= 0 || N_val <= 0) throw new Error('Invalid input values.');
                        setResult({
                            value: ((P_val * V_val) / (N_val * R)).toFixed(2),
                            unit: 'K',
                            formula: 'T = pV / nR'
                        });
                    }
                } else if (gasSubMode === 'density') {
                    const P_val = parseFloat(p);
                    const M_val = parseFloat(M);
                    const Rho_val = parseFloat(rho);
                    const T_val = parseFloat(T);

                    const filled = [p, M, rho, T].filter(x => x !== '').length;
                    if (filled !== 3) {
                        setError('Please fill exactly three fields.');
                        return;
                    }

                    if (!p) {
                        if (M_val <= 0 || T_val < 0 || Rho_val < 0) throw new Error('Invalid input values.');
                        setResult({
                            value: ((Rho_val * R * T_val) / (M_val * 1e-3)).toFixed(2),
                            unit: 'Pa',
                            formula: 'p = ρRT / (M × 10⁻³)'
                        });
                    } else if (!M) {
                        if (P_val <= 0 || T_val < 0 || Rho_val < 0) throw new Error('Invalid input values.');
                        setResult({
                            value: ((Rho_val * R * T_val) / (P_val * 1e-3)).toFixed(2),
                            unit: 'g/mol',
                            formula: 'M = ρRT / (p × 10⁻³)'
                        });
                    } else if (!rho) {
                        if (P_val <= 0 || M_val <= 0 || T_val <= 0) throw new Error('Invalid input values.');
                        setResult({
                            value: ((P_val * M_val * 1e-3) / (R * T_val)).toFixed(4),
                            unit: 'g/dm³ (kg/m³)',
                            formula: 'ρ = pM × 10⁻³ / RT'
                        });
                    } else if (!T) {
                        if (P_val <= 0 || M_val <= 0 || Rho_val <= 0) throw new Error('Invalid input values.');
                        setResult({
                            value: ((P_val * M_val * 1e-3) / (Rho_val * R)).toFixed(2),
                            unit: 'K',
                            formula: 'T = pM × 10⁻³ / ρR'
                        });
                    }
                } else if (gasSubMode === 'molarmass') {
                    const P_val = parseFloat(p);
                    const V_val = parseFloat(V);
                    const Mass_val = parseFloat(mass);
                    const M_val = parseFloat(M);
                    const T_val = parseFloat(T);

                    const filled = [p, V, mass, M, T].filter(x => x !== '').length;
                    if (filled !== 4) {
                        setError('Please fill exactly four fields.');
                        return;
                    }

                    if (!p) {
                        if (V_val <= 0 || M_val <= 0 || Mass_val < 0 || T_val < 0) throw new Error('Invalid input values.');
                        setResult({
                            value: ((Mass_val * R * T_val) / (M_val * V_val)).toFixed(2),
                            unit: 'Pa',
                            formula: 'p = mRT / MV'
                        });
                    } else if (!V) {
                        if (P_val <= 0 || M_val <= 0 || Mass_val < 0 || T_val < 0) throw new Error('Invalid input values.');
                        setResult({
                            value: ((Mass_val * R * T_val) / (M_val * P_val)).toFixed(6),
                            unit: 'm³',
                            formula: 'V = mRT / Mp'
                        });
                    } else if (!mass) {
                        if (P_val <= 0 || V_val <= 0 || M_val <= 0 || T_val <= 0) throw new Error('Invalid input values.');
                        setResult({
                            value: ((P_val * V_val * M_val) / (R * T_val)).toFixed(4),
                            unit: 'g',
                            formula: 'm = pVMr / RT'
                        });
                    } else if (!M) {
                        if (P_val <= 0 || V_val <= 0 || Mass_val <= 0 || T_val <= 0) throw new Error('Invalid input values.');
                        setResult({
                            value: ((Mass_val * R * T_val) / (P_val * V_val)).toFixed(2),
                            unit: 'g/mol',
                            formula: 'M = mRT / pV'
                        });
                    } else if (!T) {
                        if (P_val <= 0 || V_val <= 0 || Mass_val <= 0 || M_val <= 0) throw new Error('Invalid input values.');
                        setResult({
                            value: ((P_val * V_val * M_val) / (Mass_val * R)).toFixed(2),
                            unit: 'K',
                            formula: 'T = pVM / mR'
                        });
                    }
                }
            } 
            // === 8. MOLAR GAS VOLUME (24 dm³) ===
            else if (activeTab === 'gasvolume') {
                const { v, n, vm } = gasVolState;
                const V_val = parseFloat(v);
                const N_val = parseFloat(n);
                const Vm_val = parseFloat(vm) || 24.0;

                const filled = [v, n].filter(x => x !== '').length;
                if (filled !== 1) {
                    setError('Please fill either Volume (V) or Moles (n).');
                    return;
                }

                if (!v && n) {
                    if (N_val <= 0 || Vm_val <= 0) throw new Error('Invalid input values.');
                    setResult({
                        value: (N_val * Vm_val).toFixed(4),
                        unit: 'dm³ (L)',
                        formula: 'V = n × Vm'
                    });
                } else if (!n && v) {
                    if (V_val <= 0 || Vm_val <= 0) throw new Error('Invalid input values.');
                    setResult({
                        value: (V_val / Vm_val).toFixed(4),
                        unit: 'mol',
                        formula: 'n = V / Vm'
                    });
                }
            }
            // === 9. CALORIMETRY (q = mcΔT) ===
            else if (activeTab === 'calorimetry') {
                const { q, mass, c, deltaT } = calorimetryState;
                const Q_val = parseFloat(q);
                const M_val = parseFloat(mass);
                const C_val = parseFloat(c);
                const DT_val = parseFloat(deltaT);

                const filled = [q, mass, c, deltaT].filter(x => x !== '').length;
                if (filled !== 3) {
                    setError('Please fill exactly three fields to calculate the fourth.');
                    return;
                }

                if (!q) {
                    if (M_val <= 0 || C_val <= 0) throw new Error('Mass and specific heat must be positive numbers.');
                    const heatJ = M_val * C_val * DT_val;
                    const heatKJ = heatJ / 1000;
                    setResult({
                        value: `${heatJ.toFixed(2)} J\n= ${heatKJ.toFixed(4)} kJ`,
                        unit: 'Heat Released / Absorbed (q)',
                        formula: 'q = m × c × ΔT'
                    });
                } else if (!mass) {
                    if (C_val <= 0 || DT_val === 0) throw new Error('Specific heat and ΔT must not be zero.');
                    const mResult = Q_val / (C_val * DT_val);
                    setResult({
                        value: Math.abs(mResult).toFixed(3),
                        unit: 'g (Mass of solution)',
                        formula: 'm = q / (c × ΔT)'
                    });
                } else if (!c) {
                    if (M_val <= 0 || DT_val === 0) throw new Error('Mass and ΔT must not be zero.');
                    const cResult = Q_val / (M_val * DT_val);
                    setResult({
                        value: Math.abs(cResult).toFixed(3),
                        unit: 'J / (g·°C)',
                        formula: 'c = q / (m × ΔT)'
                    });
                } else if (!deltaT) {
                    if (M_val <= 0 || C_val <= 0) throw new Error('Mass and specific heat must be positive numbers.');
                    const dtResult = Q_val / (M_val * C_val);
                    setResult({
                        value: `${dtResult.toFixed(2)} °C (or K)`,
                        unit: 'Temperature Change (ΔT)',
                        formula: 'ΔT = q / (m × c)'
                    });
                }
            }
            // === 10. MOLAR ENTHALPY (ΔH = -q / n) ===
            else if (activeTab === 'enthalpy') {
                const { q, n, deltaH, isExo } = enthalpyState;
                const Q_val = parseFloat(q);
                const N_val = parseFloat(n);
                const DH_val = parseFloat(deltaH);

                const filled = [q, n, deltaH].filter(x => x !== '').length;
                if (filled !== 2) {
                    setError('Please fill exactly two fields.');
                    return;
                }

                if (!deltaH && q && n) {
                    if (N_val <= 0) throw new Error('Moles must be greater than zero.');
                    const sign = isExo ? -1 : 1;
                    const calculatedDH = (sign * Q_val) / N_val;
                    setResult({
                        value: `${calculatedDH > 0 ? '+' : ''}${calculatedDH.toFixed(2)} kJ/mol`,
                        unit: isExo ? 'Exothermic (ΔH < 0, Heat Released 🔥)' : 'Endothermic (ΔH > 0, Heat Absorbed ❄️)',
                        formula: isExo ? 'ΔH = -q / n' : 'ΔH = +q / n'
                    });
                } else if (!q && deltaH && n) {
                    if (N_val <= 0) throw new Error('Moles must be greater than zero.');
                    const heatEnergy = Math.abs(DH_val) * N_val;
                    setResult({
                        value: `${heatEnergy.toFixed(2)} kJ (${(heatEnergy * 1000).toFixed(1)} J)`,
                        unit: 'Heat Energy (q)',
                        formula: 'q = |ΔH| × n'
                    });
                } else if (!n && deltaH && q) {
                    if (Math.abs(DH_val) <= 0) throw new Error('Enthalpy change must not be zero.');
                    const molesResult = Math.abs(Q_val) / Math.abs(DH_val);
                    setResult({
                        value: molesResult.toFixed(4),
                        unit: 'mol (limiting reactant)',
                        formula: 'n = q / |ΔH|'
                    });
                }
            }
            // === 11. pH & pOH ===
            else if (activeTab === 'ph') {
                const { ph, hConc, poh, ohConc } = phState;
                const p = parseFloat(ph);
                const h = parseFloat(hConc);
                const po = parseFloat(poh);
                const oh = parseFloat(ohConc);

                const filled = [ph, hConc, poh, ohConc].filter(x => x !== '').length;
                if (filled !== 1) {
                    setError('Please fill exactly one field to solve for all others.');
                    return;
                }

                let finalPh = 0;

                if (ph) {
                    finalPh = p;
                } else if (hConc) {
                    if (h <= 0) throw new Error('H⁺ concentration must be greater than zero.');
                    finalPh = -Math.log10(h);
                } else if (poh) {
                    finalPh = 14 - po;
                } else if (ohConc) {
                    if (oh <= 0) throw new Error('OH⁻ concentration must be greater than zero.');
                    finalPh = 14 - (-Math.log10(oh));
                }

                const finalPoh = 14 - finalPh;
                const finalH = Math.pow(10, -finalPh);
                const finalOh = Math.pow(10, -finalPoh);

                setResult({
                    value: `pH: ${finalPh.toFixed(2)} | pOH: ${finalPoh.toFixed(2)}\n[H⁺]: ${finalH.toExponential(4)} mol/dm³\n[OH⁻]: ${finalOh.toExponential(4)} mol/dm³`,
                    unit: finalPh < 7 ? 'Acidic Solution 🍋' : finalPh === 7 ? 'Neutral Solution 💧' : 'Basic Solution 🧼',
                    formula: 'pH = -log[H⁺], pH + pOH = 14'
                });
            }
            // === 12. WEAK ACID DISSOCIATION (Ka, pKa, [H+], pH) ===
            else if (activeTab === 'weakacid') {
                const { c, ka, pka } = weakAcidState;
                const C_val = parseFloat(c);
                let Ka_val = parseFloat(ka);
                const Pka_val = parseFloat(pka);

                if (!C_val || C_val <= 0) {
                    setError('Please enter a valid Acid Concentration (C > 0).');
                    return;
                }

                if (!Ka_val && Pka_val) {
                    Ka_val = Math.pow(10, -Pka_val);
                }

                if (!Ka_val || Ka_val <= 0) {
                    setError('Please provide either Ka or pKa of the weak acid.');
                    return;
                }

                // Standard equilibrium approximation: [H+] = sqrt(Ka * C)
                const hConc = Math.sqrt(Ka_val * C_val);
                const calculatedPh = -Math.log10(hConc);
                const calculatedPka = -Math.log10(Ka_val);
                const dissociationPct = (hConc / C_val) * 100;

                setResult({
                    value: `pH: ${calculatedPh.toFixed(2)}\n[H⁺]: ${hConc.toExponential(4)} mol/dm³\npKa: ${calculatedPka.toFixed(2)} | Ka: ${Ka_val.toExponential(3)}\nDissociation: ${dissociationPct.toFixed(2)}%`,
                    unit: 'Weak Acid Equilibrium',
                    formula: '[H⁺] = √(Ka × C), pH = -log[H⁺]'
                });
            }
            // === 13. BUFFER SOLUTIONS (Henderson-Hasselbalch) ===
            else if (activeTab === 'buffer') {
                const { pka, acidConc, saltConc, ph } = bufferState;
                const Pka_val = parseFloat(pka);
                const Acid_val = parseFloat(acidConc);
                const Salt_val = parseFloat(saltConc);
                const Ph_val = parseFloat(ph);

                if (isNaN(Pka_val)) {
                    setError('Please provide the pKa of the weak acid system.');
                    return;
                }

                // If pH is empty, solve for pH using [Salt] and [Acid]
                if (!ph && acidConc && saltConc) {
                    if (Acid_val <= 0 || Salt_val <= 0) throw new Error('Concentrations must be positive.');
                    const calculatedPh = Pka_val + Math.log10(Salt_val / Acid_val);
                    const hConc = Math.pow(10, -calculatedPh);
                    const ratio = Salt_val / Acid_val;
                    setResult({
                        value: `Buffer pH: ${calculatedPh.toFixed(2)}\n[H⁺]: ${hConc.toExponential(4)} mol/dm³\nRatio [A⁻]/[HA]: ${ratio.toFixed(3)}`,
                        unit: 'Henderson-Hasselbalch Buffer',
                        formula: 'pH = pKa + log([A⁻]/[HA])'
                    });
                }
                // If Salt is empty, solve for [Salt] required for target pH
                else if (!saltConc && acidConc && ph) {
                    if (Acid_val <= 0) throw new Error('Acid concentration must be positive.');
                    const ratio = Math.pow(10, Ph_val - Pka_val);
                    const requiredSalt = Acid_val * ratio;
                    setResult({
                        value: `${requiredSalt.toFixed(4)} mol/dm³`,
                        unit: 'Required [A⁻] (Conjugate Base / Salt)',
                        formula: '[A⁻] = [HA] × 10^(pH - pKa)'
                    });
                }
                // If Acid is empty, solve for [Acid] required for target pH
                else if (!acidConc && saltConc && ph) {
                    if (Salt_val <= 0) throw new Error('Salt concentration must be positive.');
                    const ratio = Math.pow(10, Ph_val - Pka_val);
                    const requiredAcid = Salt_val / ratio;
                    setResult({
                        value: `${requiredAcid.toFixed(4)} mol/dm³`,
                        unit: 'Required [HA] (Weak Acid)',
                        formula: '[HA] = [A⁻] / 10^(pH - pKa)'
                    });
                } else {
                    setError('Fill pKa, and either both concentrations (to find pH) or one concentration + target pH.');
                }
            }
        } catch (err: any) {
            setError(err.message || 'Calculation error. Please check inputs.');
        }
    };

    const currentCatConfig = CATEGORIES.find(c => c.id === activeCategory) || CATEGORIES[0];

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-md z-[60]"
                    />

                    {/* Calculator Container */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, x: "-50%", y: "-50%" }}
                        animate={{ scale: 1, opacity: 1, x: "-50%", y: "-50%" }}
                        exit={{ scale: 0.9, opacity: 0, x: "-50%", y: "-50%" }}
                        className="fixed left-1/2 top-1/2 z-[61] w-[95vw] max-w-[540px] max-h-[88vh] bg-[#0a0a1a]/95 rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(99,102,241,0.25)] overflow-hidden flex flex-col font-sans"
                    >
                        {/* Header */}
                        <div className="p-5 border-b border-white/5 flex justify-between items-center bg-gradient-to-r from-indigo-500/10 via-purple-500/5 to-transparent">
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 bg-indigo-500/20 rounded-xl text-indigo-400">
                                    <Calculator size={22} />
                                </div>
                                <div>
                                    <h2 className="text-lg font-bold text-white tracking-tight font-[family-name:var(--font-space-grotesk)]">
                                        Chemistry Calculator
                                    </h2>
                                    <p className="text-xs text-slate-400 font-medium">Curriculum formulas & stoichiometric solver</p>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-white/5 rounded-full text-white/40 hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Category Selector (4 Pillars) */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 p-2.5 bg-white/[0.02] border-b border-white/5">
                            {CATEGORIES.map((cat) => {
                                const IconComponent = cat.icon;
                                const isSelected = activeCategory === cat.id;
                                return (
                                    <button
                                        key={cat.id}
                                        onClick={() => handleCategoryChange(cat.id)}
                                        className={`flex flex-col items-center justify-center p-2 rounded-xl text-xs font-semibold transition-all border ${
                                            isSelected
                                                ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40 shadow-sm shadow-indigo-500/20'
                                                : 'bg-white/[0.02] text-slate-400 hover:text-white hover:bg-white/5 border-white/5'
                                        }`}
                                    >
                                        <IconComponent size={16} className={`mb-1 ${isSelected ? 'text-indigo-400' : 'text-slate-400'}`} />
                                        <span className="truncate max-w-full text-[11px] leading-tight text-center">{cat.label}</span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Category Sub-Tabs */}
                        <div className="flex gap-1.5 p-2 bg-white/5 border-b border-white/5 text-[11px] overflow-x-auto scrollbar-none whitespace-nowrap">
                            {currentCatConfig.tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => handleTabChange(tab.id)}
                                    className={`py-1.5 px-3 rounded-lg font-semibold transition-all inline-block ${
                                        activeTab === tab.id
                                            ? 'bg-indigo-500 text-white shadow-md shadow-indigo-500/25'
                                            : 'text-slate-400 hover:text-white hover:bg-white/5'
                                    }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* Content Area */}
                        <div className="p-5 flex-1 flex flex-col gap-4 overflow-y-auto custom-scrollbar">
                            {/* Formula Box */}
                            <div className="bg-indigo-500/5 border border-indigo-500/10 rounded-2xl p-3.5 text-center">
                                <span className="text-[10px] font-bold tracking-widest text-indigo-400 uppercase">Current Equation</span>
                                <div className="text-lg font-bold text-white mt-1 font-mono tracking-wide">
                                    {activeTab === 'moles' && 'n = m / Mr'}
                                    {activeTab === 'concentration' && 'C = n / V'}
                                    {activeTab === 'dilution' && 'C₁V₁ = C₂V₂'}
                                    {activeTab === 'yield' && '% Yield = (Act/Theo) × 100'}
                                    {activeTab === 'atomeconomy' && '% AE = (Desired Mr / Total Mr) × 100'}
                                    {activeTab === 'uncertainty' && '% Uncertainty = (Abs Error × Readings / Value) × 100'}
                                    {activeTab === 'idealgas' && (
                                        gasSubMode === 'moles' ? 'pV = nRT' :
                                        gasSubMode === 'density' ? 'pM = ρRT' : 'pV = (m/M)RT'
                                    )}
                                    {activeTab === 'gasvolume' && 'V = n × Vm (Vm = 24.0 dm³/mol at RTP)'}
                                    {activeTab === 'calorimetry' && 'q = m × c × ΔT'}
                                    {activeTab === 'enthalpy' && 'ΔH = -q / n (kJ/mol)'}
                                    {activeTab === 'ph' && 'pH = -log[H⁺]  |  pH + pOH = 14'}
                                    {activeTab === 'weakacid' && 'Ka = [H⁺]² / [HA]  ⟹  [H⁺] = √(Ka × C)'}
                                    {activeTab === 'buffer' && 'pH = pKa + log([A⁻] / [HA])'}
                                </div>
                                <p className="text-[11px] text-slate-400 mt-1.5">
                                    {activeTab === 'dilution' && '💡 Fill exactly 3 values to calculate the remaining unknown.'}
                                    {activeTab === 'ph' && '💡 Fill exactly one value (pH, pOH, [H⁺], or [OH⁻]) to solve all others.'}
                                    {activeTab === 'idealgas' && '💡 Pressure in Pa, Volume in m³, Temperature in Kelvin (K). R = 8.314 J K⁻¹ mol⁻¹.'}
                                    {activeTab === 'gasvolume' && '💡 Volume in dm³ (or L). Vm defaults to 24.0 dm³/mol (RTP).'}
                                    {activeTab === 'calorimetry' && '💡 Fill 3 values to solve the 4th. Water specific heat c defaults to 4.18 J/(g·°C).'}
                                    {activeTab === 'enthalpy' && '💡 Enter Heat energy q (kJ) and moles n to calculate molar enthalpy ΔH.'}
                                    {activeTab === 'weakacid' && '💡 Enter weak acid concentration C and Ka (or pKa) to solve equilibrium pH.'}
                                    {activeTab === 'buffer' && '💡 Enter pKa and concentrations to solve buffer pH, or enter target pH to find required ratio.'}
                                    {activeTab !== 'dilution' && activeTab !== 'ph' && activeTab !== 'idealgas' && activeTab !== 'gasvolume' && activeTab !== 'calorimetry' && activeTab !== 'enthalpy' && activeTab !== 'weakacid' && activeTab !== 'buffer' && '💡 Fill exactly two values and leave the target field empty.'}
                                </p>
                            </div>

                            {/* Inputs Area */}
                            <div className="flex flex-col gap-3 text-left">
                                {/* 1. MOLES & MASS */}
                                {activeTab === 'moles' && (
                                    <>
                                        <div className="flex flex-col gap-1.5 text-left">
                                            <label className="text-xs text-slate-400 font-semibold flex justify-between">
                                                <span>Mass</span>
                                                <span className="text-slate-500 font-normal">m (g)</span>
                                            </label>
                                            <input
                                                type="number"
                                                step="any"
                                                placeholder="Leave blank to calculate..."
                                                value={molesState.mass}
                                                onChange={e => setMolesState(prev => ({ ...prev, mass: e.target.value }))}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1.5 text-left">
                                            <label className="text-xs text-slate-400 font-semibold flex justify-between">
                                                <span>Molar Mass</span>
                                                <span className="text-slate-500 font-normal">Mr (g/mol)</span>
                                            </label>
                                            <input
                                                type="number"
                                                step="any"
                                                placeholder="Leave blank to calculate..."
                                                value={molesState.molarMass}
                                                onChange={e => setMolesState(prev => ({ ...prev, molarMass: e.target.value }))}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1.5 text-left">
                                            <label className="text-xs text-slate-400 font-semibold flex justify-between">
                                                <span>Moles</span>
                                                <span className="text-slate-500 font-normal">n (mol)</span>
                                            </label>
                                            <input
                                                type="number"
                                                step="any"
                                                placeholder="Leave blank to calculate..."
                                                value={molesState.moles}
                                                onChange={e => setMolesState(prev => ({ ...prev, moles: e.target.value }))}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left"
                                            />
                                        </div>
                                    </>
                                )}

                                {/* 2. CONCENTRATION */}
                                {activeTab === 'concentration' && (
                                    <>
                                        <div className="flex flex-col gap-1.5 text-left">
                                            <label className="text-xs text-slate-400 font-semibold flex justify-between">
                                                <span>Concentration</span>
                                                <span className="text-slate-500 font-normal">C (mol/dm³)</span>
                                            </label>
                                            <input
                                                type="number"
                                                step="any"
                                                placeholder="Leave blank to calculate..."
                                                value={concState.concentration}
                                                onChange={e => setConcState(prev => ({ ...prev, concentration: e.target.value }))}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1.5 text-left">
                                            <label className="text-xs text-slate-400 font-semibold flex justify-between">
                                                <span>Moles</span>
                                                <span className="text-slate-500 font-normal">n (mol)</span>
                                            </label>
                                            <input
                                                type="number"
                                                step="any"
                                                placeholder="Leave blank to calculate..."
                                                value={concState.moles}
                                                onChange={e => setConcState(prev => ({ ...prev, moles: e.target.value }))}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1.5 text-left">
                                            <label className="text-xs text-slate-400 font-semibold flex justify-between">
                                                <span>Volume</span>
                                                <span className="text-slate-500 font-normal">V (dm³ or L)</span>
                                            </label>
                                            <input
                                                type="number"
                                                step="any"
                                                placeholder="Leave blank to calculate..."
                                                value={concState.volume}
                                                onChange={e => setConcState(prev => ({ ...prev, volume: e.target.value }))}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left"
                                            />
                                        </div>
                                    </>
                                )}

                                {/* 3. DILUTION */}
                                {activeTab === 'dilution' && (
                                    <>
                                        <div className="grid grid-cols-2 gap-3 text-left">
                                            <div className="flex flex-col gap-1.5 text-left">
                                                <label className="text-xs text-slate-400 font-semibold">
                                                    <span>Initial Conc. C₁</span>
                                                </label>
                                                <input
                                                    type="number"
                                                    step="any"
                                                    placeholder="C₁"
                                                    value={dilState.c1}
                                                    onChange={e => setDilState(prev => ({ ...prev, c1: e.target.value }))}
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left font-mono"
                                                />
                                            </div>
                                            <div className="flex flex-col gap-1.5 text-left">
                                                <label className="text-xs text-slate-400 font-semibold">
                                                    <span>Initial Vol. V₁</span>
                                                </label>
                                                <input
                                                    type="number"
                                                    step="any"
                                                    placeholder="V₁"
                                                    value={dilState.v1}
                                                    onChange={e => setDilState(prev => ({ ...prev, v1: e.target.value }))}
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left font-mono"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-3 text-left">
                                            <div className="flex flex-col gap-1.5 text-left">
                                                <label className="text-xs text-slate-400 font-semibold">
                                                    <span>Final Conc. C₂</span>
                                                </label>
                                                <input
                                                    type="number"
                                                    step="any"
                                                    placeholder="C₂"
                                                    value={dilState.c2}
                                                    onChange={e => setDilState(prev => ({ ...prev, c2: e.target.value }))}
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left font-mono"
                                                />
                                            </div>
                                            <div className="flex flex-col gap-1.5 text-left">
                                                <label className="text-xs text-slate-400 font-semibold">
                                                    <span>Final Vol. V₂</span>
                                                </label>
                                                <input
                                                    type="number"
                                                    step="any"
                                                    placeholder="V₂"
                                                    value={dilState.v2}
                                                    onChange={e => setDilState(prev => ({ ...prev, v2: e.target.value }))}
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left font-mono"
                                                />
                                            </div>
                                        </div>
                                    </>
                                )}

                                {/* 4. PERCENT YIELD */}
                                {activeTab === 'yield' && (
                                    <>
                                        <div className="flex flex-col gap-1.5 text-left">
                                            <label className="text-xs text-slate-400 font-semibold flex justify-between">
                                                <span>Actual Yield</span>
                                                <span className="text-slate-500 font-normal">m (g)</span>
                                            </label>
                                            <input
                                                type="number"
                                                step="any"
                                                placeholder="Leave blank to calculate..."
                                                value={yieldState.actual}
                                                onChange={e => setYieldState(prev => ({ ...prev, actual: e.target.value }))}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1.5 text-left">
                                            <label className="text-xs text-slate-400 font-semibold flex justify-between">
                                                <span>Theoretical Yield</span>
                                                <span className="text-slate-500 font-normal">m (g)</span>
                                            </label>
                                            <input
                                                type="number"
                                                step="any"
                                                placeholder="Leave blank to calculate..."
                                                value={yieldState.theoretical}
                                                onChange={e => setYieldState(prev => ({ ...prev, theoretical: e.target.value }))}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1.5 text-left">
                                            <label className="text-xs text-slate-400 font-semibold flex justify-between">
                                                <span>Percentage Yield</span>
                                                <span className="text-slate-500 font-normal">%</span>
                                            </label>
                                            <input
                                                type="number"
                                                step="any"
                                                placeholder="Leave blank to calculate..."
                                                value={yieldState.pct}
                                                onChange={e => setYieldState(prev => ({ ...prev, pct: e.target.value }))}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left"
                                            />
                                        </div>
                                    </>
                                )}

                                {/* 5. ATOM ECONOMY */}
                                {activeTab === 'atomeconomy' && (
                                    <>
                                        <div className="flex flex-col gap-1.5 text-left">
                                            <label className="text-xs text-slate-400 font-semibold flex justify-between">
                                                <span>Desired Product Molar Mass</span>
                                                <span className="text-slate-500 font-normal">Mr (g/mol)</span>
                                            </label>
                                            <input
                                                type="number"
                                                step="any"
                                                placeholder="Leave blank to calculate..."
                                                value={aeState.desired}
                                                onChange={e => setAeState(prev => ({ ...prev, desired: e.target.value }))}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1.5 text-left">
                                            <label className="text-xs text-slate-400 font-semibold flex justify-between">
                                                <span>Total Reactants Molar Mass</span>
                                                <span className="text-slate-500 font-normal">Mr (g/mol)</span>
                                            </label>
                                            <input
                                                type="number"
                                                step="any"
                                                placeholder="Leave blank to calculate..."
                                                value={aeState.totalReactants}
                                                onChange={e => setAeState(prev => ({ ...prev, totalReactants: e.target.value }))}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1.5 text-left">
                                            <label className="text-xs text-slate-400 font-semibold flex justify-between">
                                                <span>Atom Economy</span>
                                                <span className="text-slate-500 font-normal">%</span>
                                            </label>
                                            <input
                                                type="number"
                                                step="any"
                                                placeholder="Leave blank to calculate..."
                                                value={aeState.pct}
                                                onChange={e => setAeState(prev => ({ ...prev, pct: e.target.value }))}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left"
                                            />
                                        </div>
                                    </>
                                )}

                                {/* 6. UNCERTAINTY */}
                                {activeTab === 'uncertainty' && (
                                    <>
                                        <div className="flex flex-col gap-1.5 text-left">
                                            <label className="text-xs text-slate-400 font-semibold flex justify-between">
                                                <span>Absolute Uncertainty (per reading)</span>
                                                <span className="text-slate-500 font-normal">e.g. ±0.05</span>
                                            </label>
                                            <input
                                                type="number"
                                                step="any"
                                                placeholder="Leave blank to calculate..."
                                                value={uncState.absolute}
                                                onChange={e => setUncState(prev => ({ ...prev, absolute: e.target.value }))}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1.5 text-left">
                                            <label className="text-xs text-slate-400 font-semibold flex justify-between">
                                                <span>Number of Readings</span>
                                                <span className="text-slate-500 font-normal">e.g. 2 for burette titration, 1 for pipette</span>
                                            </label>
                                            <input
                                                type="number"
                                                step="1"
                                                min="1"
                                                placeholder="Number of readings..."
                                                value={uncState.readings}
                                                onChange={e => setUncState(prev => ({ ...prev, readings: e.target.value }))}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left font-mono"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1.5 text-left">
                                            <label className="text-xs text-slate-400 font-semibold flex justify-between">
                                                <span>Measured Value</span>
                                                <span className="text-slate-500 font-normal">value</span>
                                            </label>
                                            <input
                                                type="number"
                                                step="any"
                                                placeholder="Leave blank to calculate..."
                                                value={uncState.measured}
                                                onChange={e => setUncState(prev => ({ ...prev, measured: e.target.value }))}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1.5 text-left">
                                            <label className="text-xs text-slate-400 font-semibold flex justify-between">
                                                <span>Percentage Uncertainty</span>
                                                <span className="text-slate-500 font-normal">%</span>
                                            </label>
                                            <input
                                                type="number"
                                                step="any"
                                                placeholder="Leave blank to calculate..."
                                                value={uncState.pct}
                                                onChange={e => setUncState(prev => ({ ...prev, pct: e.target.value }))}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left"
                                            />
                                        </div>
                                    </>
                                )}

                                {/* 7. IDEAL GAS LAW */}
                                {activeTab === 'idealgas' && (
                                    <>
                                        <div className="flex gap-1 mb-2 p-1 bg-white/5 rounded-xl border border-white/10">
                                            <button
                                                type="button"
                                                onClick={() => { setGasSubMode('moles'); setResult(null); setError(null); }}
                                                className={`flex-1 py-1.5 rounded-lg text-[10px] font-semibold transition-all ${gasSubMode === 'moles' ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30' : 'text-slate-400 hover:text-white'}`}
                                            >
                                                Moles (pV = nRT)
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => { setGasSubMode('density'); setResult(null); setError(null); }}
                                                className={`flex-1 py-1.5 rounded-lg text-[10px] font-semibold transition-all ${gasSubMode === 'density' ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30' : 'text-slate-400 hover:text-white'}`}
                                            >
                                                Density (pM = ρRT)
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => { setGasSubMode('molarmass'); setResult(null); setError(null); }}
                                                className={`flex-1 py-1.5 rounded-lg text-[10px] font-semibold transition-all ${gasSubMode === 'molarmass' ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30' : 'text-slate-400 hover:text-white'}`}
                                            >
                                                Molar Mass (pV = mRT/M)
                                            </button>
                                        </div>

                                        <div className="flex flex-col gap-2.5">
                                            <div className="flex flex-col gap-1.5 text-left">
                                                <label className="text-xs text-slate-400 font-semibold flex justify-between">
                                                    <span>Pressure</span>
                                                    <span className="text-slate-500 font-normal">p (Pa)</span>
                                                </label>
                                                <input
                                                    type="number"
                                                    step="any"
                                                    placeholder="Leave blank to calculate..."
                                                    value={idealGasState.p}
                                                    onChange={e => setIdealGasState(prev => ({ ...prev, p: e.target.value }))}
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left"
                                                />
                                            </div>

                                            {(gasSubMode === 'moles' || gasSubMode === 'molarmass') && (
                                                <div className="flex flex-col gap-1.5 text-left">
                                                    <label className="text-xs text-slate-400 font-semibold flex justify-between">
                                                        <span>Volume</span>
                                                        <span className="text-slate-500 font-normal">V (m³)</span>
                                                    </label>
                                                    <input
                                                        type="number"
                                                        step="any"
                                                        placeholder="Leave blank to calculate..."
                                                        value={idealGasState.V}
                                                        onChange={e => setIdealGasState(prev => ({ ...prev, V: e.target.value }))}
                                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left"
                                                    />
                                                </div>
                                            )}

                                            {gasSubMode === 'moles' && (
                                                <div className="flex flex-col gap-1.5 text-left">
                                                    <label className="text-xs text-slate-400 font-semibold flex justify-between">
                                                        <span>Moles</span>
                                                        <span className="text-slate-500 font-normal">n (mol)</span>
                                                    </label>
                                                    <input
                                                        type="number"
                                                        step="any"
                                                        placeholder="Leave blank to calculate..."
                                                        value={idealGasState.n}
                                                        onChange={e => setIdealGasState(prev => ({ ...prev, n: e.target.value }))}
                                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left"
                                                    />
                                                </div>
                                            )}

                                            {gasSubMode === 'density' && (
                                                <div className="flex flex-col gap-1.5 text-left">
                                                    <label className="text-xs text-slate-400 font-semibold flex justify-between">
                                                        <span>Density</span>
                                                        <span className="text-slate-500 font-normal">ρ (g/dm³ or kg/m³)</span>
                                                    </label>
                                                    <input
                                                        type="number"
                                                        step="any"
                                                        placeholder="Leave blank to calculate..."
                                                        value={idealGasState.rho}
                                                        onChange={e => setIdealGasState(prev => ({ ...prev, rho: e.target.value }))}
                                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left"
                                                    />
                                                </div>
                                            )}

                                            {gasSubMode === 'molarmass' && (
                                                <div className="flex flex-col gap-1.5 text-left">
                                                    <label className="text-xs text-slate-400 font-semibold flex justify-between">
                                                        <span>Mass</span>
                                                        <span className="text-slate-500 font-normal">m (g)</span>
                                                    </label>
                                                    <input
                                                        type="number"
                                                        step="any"
                                                        placeholder="Leave blank to calculate..."
                                                        value={idealGasState.mass}
                                                        onChange={e => setIdealGasState(prev => ({ ...prev, mass: e.target.value }))}
                                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left"
                                                    />
                                                </div>
                                            )}

                                            {(gasSubMode === 'density' || gasSubMode === 'molarmass') && (
                                                <div className="flex flex-col gap-1.5 text-left">
                                                    <label className="text-xs text-slate-400 font-semibold flex justify-between">
                                                        <span>Molar Mass</span>
                                                        <span className="text-slate-500 font-normal">M / Mr (g/mol)</span>
                                                    </label>
                                                    <input
                                                        type="number"
                                                        step="any"
                                                        placeholder="Leave blank to calculate..."
                                                        value={idealGasState.M}
                                                        onChange={e => setIdealGasState(prev => ({ ...prev, M: e.target.value }))}
                                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left"
                                                    />
                                                </div>
                                            )}

                                            <div className="flex flex-col gap-1.5 text-left">
                                                <label className="text-xs text-slate-400 font-semibold flex justify-between">
                                                    <span>Temperature</span>
                                                    <span className="text-slate-500 font-normal">T (K)</span>
                                                </label>
                                                <input
                                                    type="number"
                                                    step="any"
                                                    placeholder="Leave blank to calculate..."
                                                    value={idealGasState.T}
                                                    onChange={e => setIdealGasState(prev => ({ ...prev, T: e.target.value }))}
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left"
                                                />
                                            </div>
                                        </div>
                                    </>
                                )}

                                {/* 8. MOLAR GAS VOLUME (24 dm³) */}
                                {activeTab === 'gasvolume' && (
                                    <>
                                        <div className="flex flex-col gap-3 text-left">
                                            <div className="flex flex-col gap-1.5 text-left">
                                                <label className="text-xs text-slate-400 font-semibold flex justify-between">
                                                    <span>Gas Volume</span>
                                                    <span className="text-slate-500 font-normal">V (dm³ or L)</span>
                                                </label>
                                                <input
                                                    type="number"
                                                    step="any"
                                                    placeholder="Leave blank to calculate..."
                                                    value={gasVolState.v}
                                                    onChange={e => setGasVolState(prev => ({ ...prev, v: e.target.value }))}
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left"
                                                />
                                            </div>
                                            <div className="flex flex-col gap-1.5 text-left">
                                                <label className="text-xs text-slate-400 font-semibold flex justify-between">
                                                    <span>Moles</span>
                                                    <span className="text-slate-500 font-normal">n (mol)</span>
                                                </label>
                                                <input
                                                    type="number"
                                                    step="any"
                                                    placeholder="Leave blank to calculate..."
                                                    value={gasVolState.n}
                                                    onChange={e => setGasVolState(prev => ({ ...prev, n: e.target.value }))}
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left"
                                                />
                                            </div>
                                            <div className="flex flex-col gap-1.5 text-left">
                                                <label className="text-xs text-slate-400 font-semibold flex justify-between">
                                                    <span>Molar Volume (Vm)</span>
                                                    <span className="text-slate-500 font-normal">dm³/mol</span>
                                                </label>
                                                <input
                                                    type="number"
                                                    step="any"
                                                    placeholder="e.g. 24.0"
                                                    value={gasVolState.vm}
                                                    onChange={e => setGasVolState(prev => ({ ...prev, vm: e.target.value }))}
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left font-mono"
                                                />
                                                <div className="flex gap-2 mt-1">
                                                    <button 
                                                        type="button" 
                                                        onClick={() => setGasVolState(prev => ({ ...prev, vm: '24.0' }))} 
                                                        className="px-2.5 py-1 bg-white/5 hover:bg-indigo-500/20 hover:text-indigo-400 border border-white/10 rounded-lg text-[10px] text-slate-300 transition-all font-mono"
                                                    >
                                                        RTP (24.0 dm³)
                                                    </button>
                                                    <button 
                                                        type="button" 
                                                        onClick={() => setGasVolState(prev => ({ ...prev, vm: '22.4' }))} 
                                                        className="px-2.5 py-1 bg-white/5 hover:bg-indigo-500/20 hover:text-indigo-400 border border-white/10 rounded-lg text-[10px] text-slate-300 transition-all font-mono"
                                                    >
                                                        STP (22.4 dm³)
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}

                                {/* 9. CALORIMETRY (q = mcΔT) */}
                                {activeTab === 'calorimetry' && (
                                    <>
                                        <div className="flex flex-col gap-3 text-left">
                                            <div className="flex flex-col gap-1.5 text-left">
                                                <label className="text-xs text-slate-400 font-semibold flex justify-between">
                                                    <span>Heat Energy (q)</span>
                                                    <span className="text-slate-500 font-normal">J (Joules)</span>
                                                </label>
                                                <input
                                                    type="number"
                                                    step="any"
                                                    placeholder="Leave blank to calculate q..."
                                                    value={calorimetryState.q}
                                                    onChange={e => setCalorimetryState(prev => ({ ...prev, q: e.target.value }))}
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left"
                                                />
                                            </div>

                                            <div className="grid grid-cols-2 gap-3">
                                                <div className="flex flex-col gap-1.5 text-left">
                                                    <label className="text-xs text-slate-400 font-semibold flex justify-between">
                                                        <span>Mass (m)</span>
                                                        <span className="text-slate-500 font-normal">g</span>
                                                    </label>
                                                    <input
                                                        type="number"
                                                        step="any"
                                                        placeholder="m (g)"
                                                        value={calorimetryState.mass}
                                                        onChange={e => setCalorimetryState(prev => ({ ...prev, mass: e.target.value }))}
                                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left"
                                                    />
                                                </div>

                                                <div className="flex flex-col gap-1.5 text-left">
                                                    <label className="text-xs text-slate-400 font-semibold flex justify-between">
                                                        <span>Temp Change (ΔT)</span>
                                                        <span className="text-slate-500 font-normal">°C or K</span>
                                                    </label>
                                                    <input
                                                        type="number"
                                                        step="any"
                                                        placeholder="ΔT"
                                                        value={calorimetryState.deltaT}
                                                        onChange={e => setCalorimetryState(prev => ({ ...prev, deltaT: e.target.value }))}
                                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left"
                                                    />
                                                </div>
                                            </div>

                                            <div className="flex flex-col gap-1.5 text-left">
                                                <label className="text-xs text-slate-400 font-semibold flex justify-between">
                                                    <span>Specific Heat Capacity (c)</span>
                                                    <span className="text-slate-500 font-normal">J / (g·°C)</span>
                                                </label>
                                                <input
                                                    type="number"
                                                    step="any"
                                                    placeholder="4.18"
                                                    value={calorimetryState.c}
                                                    onChange={e => setCalorimetryState(prev => ({ ...prev, c: e.target.value }))}
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left font-mono"
                                                />
                                                <div className="flex flex-wrap gap-1.5 mt-1">
                                                    <button 
                                                        type="button" 
                                                        onClick={() => setCalorimetryState(prev => ({ ...prev, c: '4.18' }))} 
                                                        className="px-2 py-0.5 bg-white/5 hover:bg-indigo-500/20 hover:text-indigo-400 border border-white/10 rounded-lg text-[10px] text-slate-300 transition-all"
                                                    >
                                                        Water (4.18)
                                                    </button>
                                                    <button 
                                                        type="button" 
                                                        onClick={() => setCalorimetryState(prev => ({ ...prev, c: '2.44' }))} 
                                                        className="px-2 py-0.5 bg-white/5 hover:bg-indigo-500/20 hover:text-indigo-400 border border-white/10 rounded-lg text-[10px] text-slate-300 transition-all"
                                                    >
                                                        Ethanol (2.44)
                                                    </button>
                                                    <button 
                                                        type="button" 
                                                        onClick={() => setCalorimetryState(prev => ({ ...prev, c: '0.90' }))} 
                                                        className="px-2 py-0.5 bg-white/5 hover:bg-indigo-500/20 hover:text-indigo-400 border border-white/10 rounded-lg text-[10px] text-slate-300 transition-all"
                                                    >
                                                        Aluminium (0.90)
                                                    </button>
                                                    <button 
                                                        type="button" 
                                                        onClick={() => setCalorimetryState(prev => ({ ...prev, c: '0.385' }))} 
                                                        className="px-2 py-0.5 bg-white/5 hover:bg-indigo-500/20 hover:text-indigo-400 border border-white/10 rounded-lg text-[10px] text-slate-300 transition-all"
                                                    >
                                                        Copper (0.385)
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}

                                {/* 10. MOLAR ENTHALPY (ΔH = -q / n) */}
                                {activeTab === 'enthalpy' && (
                                    <>
                                        <div className="flex flex-col gap-3 text-left">
                                            {/* Reaction Nature Selector */}
                                            <div className="grid grid-cols-2 gap-2 p-1 bg-white/5 rounded-xl border border-white/10">
                                                <button
                                                    type="button"
                                                    onClick={() => setEnthalpyState(prev => ({ ...prev, isExo: true }))}
                                                    className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
                                                        enthalpyState.isExo 
                                                            ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' 
                                                            : 'text-slate-400 hover:text-white'
                                                    }`}
                                                >
                                                    🔥 Exothermic (ΔH &lt; 0)
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => setEnthalpyState(prev => ({ ...prev, isExo: false }))}
                                                    className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
                                                        !enthalpyState.isExo 
                                                            ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' 
                                                            : 'text-slate-400 hover:text-white'
                                                    }`}
                                                >
                                                    ❄️ Endothermic (ΔH &gt; 0)
                                                </button>
                                            </div>

                                            <div className="flex flex-col gap-1.5 text-left">
                                                <label className="text-xs text-slate-400 font-semibold flex justify-between">
                                                    <span>Heat Energy Released / Absorbed (q)</span>
                                                    <span className="text-slate-500 font-normal">kJ (kilojoules)</span>
                                                </label>
                                                <input
                                                    type="number"
                                                    step="any"
                                                    placeholder="e.g. 5.25"
                                                    value={enthalpyState.q}
                                                    onChange={e => setEnthalpyState(prev => ({ ...prev, q: e.target.value }))}
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left"
                                                />
                                            </div>

                                            <div className="flex flex-col gap-1.5 text-left">
                                                <label className="text-xs text-slate-400 font-semibold flex justify-between">
                                                    <span>Moles of Limiting Reactant (n)</span>
                                                    <span className="text-slate-500 font-normal">mol</span>
                                                </label>
                                                <input
                                                    type="number"
                                                    step="any"
                                                    placeholder="e.g. 0.05"
                                                    value={enthalpyState.n}
                                                    onChange={e => setEnthalpyState(prev => ({ ...prev, n: e.target.value }))}
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left"
                                                />
                                            </div>

                                            <div className="flex flex-col gap-1.5 text-left">
                                                <label className="text-xs text-slate-400 font-semibold flex justify-between">
                                                    <span>Molar Enthalpy Change (ΔH)</span>
                                                    <span className="text-slate-500 font-normal">kJ / mol</span>
                                                </label>
                                                <input
                                                    type="number"
                                                    step="any"
                                                    placeholder="Leave blank to calculate..."
                                                    value={enthalpyState.deltaH}
                                                    onChange={e => setEnthalpyState(prev => ({ ...prev, deltaH: e.target.value }))}
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left font-mono"
                                                />
                                            </div>
                                        </div>
                                    </>
                                )}

                                {/* 11. pH & pOH */}
                                {activeTab === 'ph' && (
                                    <>
                                        <div className="grid grid-cols-2 gap-3 text-left">
                                            <div className="flex flex-col gap-1.5 text-left">
                                                <label className="text-xs text-slate-400 font-semibold">
                                                    <span>pH Value</span>
                                                </label>
                                                <input
                                                    type="number"
                                                    step="any"
                                                    placeholder="pH (0 - 14)"
                                                    value={phState.ph}
                                                    onChange={e => setPhState(prev => ({ ...prev, ph: e.target.value }))}
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left font-mono"
                                                />
                                            </div>
                                            <div className="flex flex-col gap-1.5 text-left">
                                                <label className="text-xs text-slate-400 font-semibold">
                                                    <span>pOH Value</span>
                                                </label>
                                                <input
                                                    type="number"
                                                    step="any"
                                                    placeholder="pOH"
                                                    value={phState.poh}
                                                    onChange={e => setPhState(prev => ({ ...prev, poh: e.target.value }))}
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left font-mono"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-3 text-left">
                                            <div className="flex flex-col gap-1.5 text-left">
                                                <label className="text-xs text-slate-400 font-semibold">
                                                    <span>[H⁺] (mol/dm³)</span>
                                                </label>
                                                <input
                                                    type="number"
                                                    step="any"
                                                    placeholder="e.g. 1e-7"
                                                    value={phState.hConc}
                                                    onChange={e => setPhState(prev => ({ ...prev, hConc: e.target.value }))}
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left font-mono"
                                                />
                                            </div>
                                            <div className="flex flex-col gap-1.5 text-left">
                                                <label className="text-xs text-slate-400 font-semibold">
                                                    <span>[OH⁻] (mol/dm³)</span>
                                                </label>
                                                <input
                                                    type="number"
                                                    step="any"
                                                    placeholder="e.g. 1e-7"
                                                    value={phState.ohConc}
                                                    onChange={e => setPhState(prev => ({ ...prev, ohConc: e.target.value }))}
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left font-mono"
                                                />
                                            </div>
                                        </div>
                                    </>
                                )}

                                {/* 12. WEAK ACID EQUILIBRIUM (Ka, pKa) */}
                                {activeTab === 'weakacid' && (
                                    <>
                                        <div className="flex flex-col gap-3 text-left">
                                            <div className="flex flex-col gap-1.5 text-left">
                                                <label className="text-xs text-slate-400 font-semibold flex justify-between">
                                                    <span>Acid Initial Concentration [HA]</span>
                                                    <span className="text-slate-500 font-normal">mol/dm³</span>
                                                </label>
                                                <input
                                                    type="number"
                                                    step="any"
                                                    placeholder="e.g. 0.10"
                                                    value={weakAcidState.c}
                                                    onChange={e => setWeakAcidState(prev => ({ ...prev, c: e.target.value }))}
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left"
                                                />
                                            </div>

                                            <div className="grid grid-cols-2 gap-3">
                                                <div className="flex flex-col gap-1.5 text-left">
                                                    <label className="text-xs text-slate-400 font-semibold flex justify-between">
                                                        <span>Ka Value</span>
                                                        <span className="text-slate-500 font-normal">mol/dm³</span>
                                                    </label>
                                                    <input
                                                        type="number"
                                                        step="any"
                                                        placeholder="e.g. 1.74e-5"
                                                        value={weakAcidState.ka}
                                                        onChange={e => setWeakAcidState(prev => ({ ...prev, ka: e.target.value, pka: e.target.value ? (-Math.log10(parseFloat(e.target.value))).toFixed(2) : '' }))}
                                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left font-mono"
                                                    />
                                                </div>

                                                <div className="flex flex-col gap-1.5 text-left">
                                                    <label className="text-xs text-slate-400 font-semibold flex justify-between">
                                                        <span>pKa Value</span>
                                                        <span className="text-slate-500 font-normal">-log(Ka)</span>
                                                    </label>
                                                    <input
                                                        type="number"
                                                        step="any"
                                                        placeholder="e.g. 4.76"
                                                        value={weakAcidState.pka}
                                                        onChange={e => setWeakAcidState(prev => ({ ...prev, pka: e.target.value, ka: e.target.value ? Math.pow(10, -parseFloat(e.target.value)).toExponential(3) : '' }))}
                                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left font-mono"
                                                    />
                                                </div>
                                            </div>

                                            {/* Presets */}
                                            <div className="flex flex-col gap-1">
                                                <span className="text-[10px] text-slate-500 font-medium">Quick Acid Presets:</span>
                                                <div className="flex flex-wrap gap-1.5">
                                                    <button 
                                                        type="button" 
                                                        onClick={() => setWeakAcidState(prev => ({ ...prev, pka: '4.76', ka: '1.74e-5' }))} 
                                                        className="px-2 py-0.5 bg-white/5 hover:bg-indigo-500/20 hover:text-indigo-400 border border-white/10 rounded-lg text-[10px] text-slate-300 transition-all"
                                                    >
                                                        Ethanoic / CH₃COOH (4.76)
                                                    </button>
                                                    <button 
                                                        type="button" 
                                                        onClick={() => setWeakAcidState(prev => ({ ...prev, pka: '3.75', ka: '1.78e-4' }))} 
                                                        className="px-2 py-0.5 bg-white/5 hover:bg-indigo-500/20 hover:text-indigo-400 border border-white/10 rounded-lg text-[10px] text-slate-300 transition-all"
                                                    >
                                                        Methanoic / HCOOH (3.75)
                                                    </button>
                                                    <button 
                                                        type="button" 
                                                        onClick={() => setWeakAcidState(prev => ({ ...prev, pka: '4.20', ka: '6.30e-5' }))} 
                                                        className="px-2 py-0.5 bg-white/5 hover:bg-indigo-500/20 hover:text-indigo-400 border border-white/10 rounded-lg text-[10px] text-slate-300 transition-all"
                                                    >
                                                        Benzoic / C₆H₅COOH (4.20)
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}

                                {/* 13. BUFFER SOLUTIONS (Henderson-Hasselbalch) */}
                                {activeTab === 'buffer' && (
                                    <>
                                        <div className="flex flex-col gap-3 text-left">
                                            <div className="flex flex-col gap-1.5 text-left">
                                                <label className="text-xs text-slate-400 font-semibold flex justify-between">
                                                    <span>Acid pKa</span>
                                                    <span className="text-slate-500 font-normal">e.g. 4.76</span>
                                                </label>
                                                <input
                                                    type="number"
                                                    step="any"
                                                    placeholder="e.g. 4.76"
                                                    value={bufferState.pka}
                                                    onChange={e => setBufferState(prev => ({ ...prev, pka: e.target.value }))}
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left font-mono"
                                                />
                                                <div className="flex flex-wrap gap-1.5 mt-1">
                                                    <button 
                                                        type="button" 
                                                        onClick={() => setBufferState(prev => ({ ...prev, pka: '4.76' }))} 
                                                        className="px-2 py-0.5 bg-white/5 hover:bg-indigo-500/20 hover:text-indigo-400 border border-white/10 rounded-lg text-[10px] text-slate-300 transition-all"
                                                    >
                                                        Acetate Buffer (4.76)
                                                    </button>
                                                    <button 
                                                        type="button" 
                                                        onClick={() => setBufferState(prev => ({ ...prev, pka: '9.25' }))} 
                                                        className="px-2 py-0.5 bg-white/5 hover:bg-indigo-500/20 hover:text-indigo-400 border border-white/10 rounded-lg text-[10px] text-slate-300 transition-all"
                                                    >
                                                        Ammonia Buffer (9.25)
                                                    </button>
                                                    <button 
                                                        type="button" 
                                                        onClick={() => setBufferState(prev => ({ ...prev, pka: '6.35' }))} 
                                                        className="px-2 py-0.5 bg-white/5 hover:bg-indigo-500/20 hover:text-indigo-400 border border-white/10 rounded-lg text-[10px] text-slate-300 transition-all"
                                                    >
                                                        Bicarbonate (6.35)
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-2 gap-3">
                                                <div className="flex flex-col gap-1.5 text-left">
                                                    <label className="text-xs text-slate-400 font-semibold flex justify-between">
                                                        <span>Weak Acid [HA]</span>
                                                        <span className="text-slate-500 font-normal">mol/dm³</span>
                                                    </label>
                                                    <input
                                                        type="number"
                                                        step="any"
                                                        placeholder="e.g. 0.10"
                                                        value={bufferState.acidConc}
                                                        onChange={e => setBufferState(prev => ({ ...prev, acidConc: e.target.value }))}
                                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left font-mono"
                                                    />
                                                </div>

                                                <div className="flex flex-col gap-1.5 text-left">
                                                    <label className="text-xs text-slate-400 font-semibold flex justify-between">
                                                        <span>Conjugate Base [A⁻]</span>
                                                        <span className="text-slate-500 font-normal">mol/dm³</span>
                                                    </label>
                                                    <input
                                                        type="number"
                                                        step="any"
                                                        placeholder="e.g. 0.15"
                                                        value={bufferState.saltConc}
                                                        onChange={e => setBufferState(prev => ({ ...prev, saltConc: e.target.value }))}
                                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left font-mono"
                                                    />
                                                </div>
                                            </div>

                                            <div className="flex flex-col gap-1.5 text-left">
                                                <label className="text-xs text-slate-400 font-semibold flex justify-between">
                                                    <span>Target Buffer pH (Optional)</span>
                                                    <span className="text-slate-500 font-normal">Leave blank to solve pH</span>
                                                </label>
                                                <input
                                                    type="number"
                                                    step="any"
                                                    placeholder="Leave blank to calculate pH..."
                                                    value={bufferState.ph}
                                                    onChange={e => setBufferState(prev => ({ ...prev, ph: e.target.value }))}
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left font-mono"
                                                />
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Buttons */}
                            <div className="flex gap-3 mt-1">
                                <button
                                    onClick={handleCalculate}
                                    className="flex-1 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-bold py-3 rounded-xl shadow-lg shadow-indigo-600/25 active:scale-[0.98] transition-all text-sm flex items-center justify-center gap-2"
                                >
                                    <Calculator size={18} />
                                    Calculate
                                </button>
                                <button
                                    onClick={resetValues}
                                    className="px-4 bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white rounded-xl border border-white/10 transition-all flex items-center justify-center active:scale-95"
                                    title="Reset All Inputs"
                                >
                                    <RotateCcw size={18} />
                                </button>
                            </div>

                            {/* Error Message */}
                            {error && (
                                <motion.div 
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-3 bg-rose-500/10 border border-rose-500/25 rounded-xl text-rose-300 text-xs text-center font-medium"
                                >
                                    ⚠️ {error}
                                </motion.div>
                            )}

                            {/* Result Display */}
                            {result && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.96 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="bg-gradient-to-br from-emerald-500/15 via-emerald-500/10 to-transparent border border-emerald-500/25 rounded-2xl p-4 text-center mt-1 shadow-lg shadow-emerald-500/5"
                                >
                                    <div className="flex items-center justify-center gap-2 mb-1">
                                        <span className="text-[10px] font-bold tracking-widest text-emerald-400 uppercase">Calculated Result</span>
                                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono">
                                            {result.formula}
                                        </span>
                                    </div>
                                    <div className="text-xl font-bold text-white mt-1 font-mono whitespace-pre-line leading-relaxed tracking-wide">
                                        {result.value}
                                    </div>
                                    <span className="text-xs text-emerald-400 font-semibold block mt-1">
                                        {result.unit}
                                    </span>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
