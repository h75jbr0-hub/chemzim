'use client';

import React, { useState } from 'react';
import { 
    Layers, 
    Zap, 
    Share2, 
    Sparkles, 
    CheckCircle2, 
    ArrowRight, 
    RotateCcw,
    ShieldCheck,
    Boxes
} from 'lucide-react';

export type BondingMode = 'ionic' | 'covalent';
export type IonicPair = 'nacl' | 'mgo' | 'cacl2';
export type CovalentMolecule = 'cl2' | 'o2' | 'n2' | 'ch4' | 'h2o';

interface IonicPreset {
    name: string;
    formula: string;
    metal: { name: string; symbol: string; initialConfig: string; finalConfig: string; charge: string; electronLoss: number };
    nonMetal: { name: string; symbol: string; initialConfig: string; finalConfig: string; charge: string; electronGain: number; count?: number };
    description: string;
    latticeProperties: string[];
}

interface CovalentPreset {
    name: string;
    formula: string;
    bondType: 'Single Bond (1 Pair)' | 'Double Bond (2 Pairs)' | 'Triple Bond (3 Pairs)';
    atoms: { name: string; symbol: string; valenceNeeded: number; config: string }[];
    sharedPairsCount: number;
    description: string;
    properties: string[];
}

const IONIC_PRESETS: Record<IonicPair, IonicPreset> = {
    nacl: {
        name: 'Sodium Chloride (Table Salt)',
        formula: 'NaCl',
        metal: { name: 'Sodium', symbol: 'Na', initialConfig: '2.8.1', finalConfig: '2.8', charge: '+', electronLoss: 1 },
        nonMetal: { name: 'Chlorine', symbol: 'Cl', initialConfig: '2.8.7', finalConfig: '2.8.8', charge: '-', electronGain: 1 },
        description: 'Sodium loses 1 valence electron to become Na⁺ [2.8]. Chlorine gains that electron to become Cl⁻ [2.8.8]. Both achieve stable noble gas octets.',
        latticeProperties: [
            'High melting point (801°C) due to strong electrostatic attraction across 3D giant lattice.',
            'Conducts electricity in molten or aqueous state, but not in solid state.',
            'Brittle crystalline solid: mechanical stress shifts like charges together, shattering lattice.'
        ]
    },
    mgo: {
        name: 'Magnesium Oxide',
        formula: 'MgO',
        metal: { name: 'Magnesium', symbol: 'Mg', initialConfig: '2.8.2', finalConfig: '2.8', charge: '2+', electronLoss: 2 },
        nonMetal: { name: 'Oxygen', symbol: 'O', initialConfig: '2.6', finalConfig: '2.8', charge: '2-', electronGain: 2 },
        description: 'Magnesium transfers 2 electrons to Oxygen. Stronger 2+/2- charges produce nearly 4x stronger electrostatic lattice energy than NaCl.',
        latticeProperties: [
            'Extremely high melting point (2852°C) — widely used as a refractory lining for blast furnaces.',
            'Higher charge density (Mg²⁺ and O²⁻) yields significantly stronger electrostatic bonds than 1+/1- pairs.',
            'Insoluble/sparingly soluble in water compared to alkali metal halides.'
        ]
    },
    cacl2: {
        name: 'Calcium Chloride',
        formula: 'CaCl₂',
        metal: { name: 'Calcium', symbol: 'Ca', initialConfig: '2.8.8.2', finalConfig: '2.8.8', charge: '2+', electronLoss: 2 },
        nonMetal: { name: 'Chlorine', symbol: 'Cl', initialConfig: '2.8.7', finalConfig: '2.8.8', charge: '-', electronGain: 1, count: 2 },
        description: 'One Calcium atom transfers 2 electrons: 1 electron to each of two Chlorine atoms, forming Ca²⁺ and two Cl⁻ ions.',
        latticeProperties: [
            '1:2 cation-to-anion stoichiometry maintaining overall electrical neutrality.',
            'High melting point (772°C) and highly hygroscopic (absorbs moisture from air).',
            'Strong ionic conductance in aqueous solution (releases 3 moles of ions per mole).'
        ]
    }
};

const COVALENT_PRESETS: Record<CovalentMolecule, CovalentPreset> = {
    cl2: {
        name: 'Chlorine Gas',
        formula: 'Cl₂',
        bondType: 'Single Bond (1 Pair)',
        atoms: [
            { name: 'Chlorine (1)', symbol: 'Cl', valenceNeeded: 1, config: '2.8.7' },
            { name: 'Chlorine (2)', symbol: 'Cl', valenceNeeded: 1, config: '2.8.7' }
        ],
        sharedPairsCount: 1,
        description: 'Each Chlorine atom shares 1 electron with the other, forming 1 covalent bond (1 shared pair) so both achieve a full outer octet [2.8.8].',
        properties: [
            'Simple molecular structure with weak intermolecular forces.',
            'Gas at room temperature (low boiling point: -34°C).',
            'Non-conductor of electricity in all states (no free ions or delocalised electrons).'
        ]
    },
    o2: {
        name: 'Oxygen Gas',
        formula: 'O₂',
        bondType: 'Double Bond (2 Pairs)',
        atoms: [
            { name: 'Oxygen (1)', symbol: 'O', valenceNeeded: 2, config: '2.6' },
            { name: 'Oxygen (2)', symbol: 'O', valenceNeeded: 2, config: '2.6' }
        ],
        sharedPairsCount: 2,
        description: 'Each Oxygen atom shares 2 electrons, resulting in a strong double covalent bond (O=O, 2 shared electron pairs) and 2 lone pairs per atom.',
        properties: [
            'Stronger bond dissociation energy (498 kJ/mol) than single bonds.',
            'Gas at room temperature with low boiling point (-183°C).',
            'Diatomic non-polar covalent molecule.'
        ]
    },
    n2: {
        name: 'Nitrogen Gas',
        formula: 'N₂',
        bondType: 'Triple Bond (3 Pairs)',
        atoms: [
            { name: 'Nitrogen (1)', symbol: 'N', valenceNeeded: 3, config: '2.5' },
            { name: 'Nitrogen (2)', symbol: 'N', valenceNeeded: 3, config: '2.5' }
        ],
        sharedPairsCount: 3,
        description: 'Two Nitrogen atoms share 3 pairs of electrons (N≡N), creating an extraordinarily strong triple bond (945 kJ/mol).',
        properties: [
            'Chemically very inert at standard conditions due to the tremendous energy needed to break the triple bond.',
            'Forms roughly 78% of Earth\'s atmosphere.',
            'Requires harsh industrial catalysts and high temperature/pressure to react (Haber Process).'
        ]
    },
    ch4: {
        name: 'Methane (Tetrahedral Hydrocarbon)',
        formula: 'CH₄',
        bondType: 'Single Bond (1 Pair)',
        atoms: [
            { name: 'Carbon', symbol: 'C', valenceNeeded: 4, config: '2.4' },
            { name: 'Hydrogen (x4)', symbol: 'H', valenceNeeded: 1, config: '1' }
        ],
        sharedPairsCount: 4,
        description: 'Central Carbon atom shares 4 electrons with 4 separate Hydrogen atoms, forming 4 single C-H covalent bonds.',
        properties: [
            'Tetrahedral geometry with 109.5° bond angles (VSEPR theory).',
            'Primary component of natural gas (clean-burning hydrocarbon).',
            'Completely non-polar and insoluble in water.'
        ]
    },
    h2o: {
        name: 'Water (V-Shaped / Bent Molecule)',
        formula: 'H₂O',
        bondType: 'Single Bond (1 Pair)',
        atoms: [
            { name: 'Oxygen', symbol: 'O', valenceNeeded: 2, config: '2.6' },
            { name: 'Hydrogen (x2)', symbol: 'H', valenceNeeded: 1, config: '1' }
        ],
        sharedPairsCount: 2,
        description: 'Oxygen shares 1 electron pair with each of two Hydrogen atoms, leaving 2 lone pairs on Oxygen that repel bonds into a 104.5° bent shape.',
        properties: [
            'Bent / V-shaped geometry with 2 bonding pairs and 2 lone pairs.',
            'Highly polar molecule capable of extensive intermolecular hydrogen bonding.',
            'High boiling point (100°C) relative to other simple molecular hydrides.'
        ]
    }
};

export default function BondingSimulator() {
    const [mode, setMode] = useState<BondingMode>('ionic');
    const [ionicPair, setIonicPair] = useState<IonicPair>('nacl');
    const [covalentMolecule, setCovalentMolecule] = useState<CovalentMolecule>('cl2');
    const [isBonded, setIsBonded] = useState<boolean>(false);

    const ionicData = IONIC_PRESETS[ionicPair];
    const covalentData = COVALENT_PRESETS[covalentMolecule];

    const resetState = () => {
        setIsBonded(false);
    };

    return (
        <div className="flex-shrink-0 w-full rounded-3xl bg-[#0a0f1d] border border-slate-800/80 shadow-2xl p-5 md:p-8 space-y-6 overflow-hidden">
            {/* Header & Mode Switcher */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
                <div>
                    <div className="flex items-center gap-2 mb-1.5">
                        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-sm">
                            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Interactive Chemical Bonding Explorer</span>
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono bg-slate-800/60 px-2 py-0.5 rounded-full border border-slate-700/50">
                            Cambridge 0620 • Unit 2
                        </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-black text-white flex items-center gap-2">
                        <span>Electron Transfer vs. Shared Electron Pairs</span>
                    </h3>
                    <p className="text-xs md:text-sm text-slate-400 mt-1 max-w-2xl">
                        Simulate full valence shell octet completion, dot-and-cross diagrams, and compare giant ionic lattices with simple covalent structures.
                    </p>
                </div>

                {/* Mode Selector Tabs */}
                <div className="flex items-center gap-1 p-1 bg-slate-900/90 rounded-2xl border border-slate-800 self-start md:self-auto">
                    <button
                        onClick={() => { setMode('ionic'); resetState(); }}
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                            mode === 'ionic'
                                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                                : 'text-slate-400 hover:text-white'
                        }`}
                    >
                        <Zap className="w-3.5 h-3.5" />
                        <span>Ionic Bonding</span>
                    </button>
                    <button
                        onClick={() => { setMode('covalent'); resetState(); }}
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                            mode === 'covalent'
                                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                                : 'text-slate-400 hover:text-white'
                        }`}
                    >
                        <Share2 className="w-3.5 h-3.5" />
                        <span>Covalent Bonding</span>
                    </button>
                </div>
            </div>

            {/* Molecule / Pair Selection Strip */}
            <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mr-2">
                    {mode === 'ionic' ? 'Select Ionic Compound:' : 'Select Molecule:'}
                </span>

                {mode === 'ionic' ? (
                    (Object.keys(IONIC_PRESETS) as IonicPair[]).map((key) => {
                        const p = IONIC_PRESETS[key];
                        const isSelected = ionicPair === key;
                        return (
                            <button
                                key={key}
                                onClick={() => { setIonicPair(key); resetState(); }}
                                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                                    isSelected
                                        ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/50 shadow-md'
                                        : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:bg-slate-800'
                                }`}
                            >
                                <span className="font-mono text-amber-400 mr-1.5">{p.formula}</span>
                                <span>{p.name.split('(')[0]}</span>
                            </button>
                        );
                    })
                ) : (
                    (Object.keys(COVALENT_PRESETS) as CovalentMolecule[]).map((key) => {
                        const m = COVALENT_PRESETS[key];
                        const isSelected = covalentMolecule === key;
                        return (
                            <button
                                key={key}
                                onClick={() => { setCovalentMolecule(key); resetState(); }}
                                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                                    isSelected
                                        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50 shadow-md'
                                        : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:bg-slate-800'
                                }`}
                            >
                                <span className="font-mono text-emerald-400 mr-1.5">{m.formula}</span>
                                <span>{m.name.split('(')[0]}</span>
                            </button>
                        );
                    })
                )}
            </div>

            {/* Interactive Stage */}
            {mode === 'ionic' ? (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    {/* Visual Stage Card (8 Cols) */}
                    <div className="lg:col-span-8 bg-[#070b16] rounded-2xl border border-slate-800 p-6 flex flex-col items-center justify-between min-h-[360px] relative overflow-hidden">
                        {/* Simulation Visual Header */}
                        <div className="w-full flex items-center justify-between text-xs font-mono text-slate-400 border-b border-slate-800/80 pb-3">
                            <span>Status: {isBonded ? '⚡ Electrostatic Lattice Formed' : '⏳ Neutral Isolated Atoms'}</span>
                            <span className="text-indigo-400 font-bold">{ionicData.name}</span>
                        </div>

                        {/* Visual Atoms / Ions Display */}
                        <div className="flex flex-col sm:flex-row items-center justify-around w-full py-8 gap-8">
                            {/* Metal Atom / Cation */}
                            <div className="flex flex-col items-center space-y-3">
                                <div className="relative flex items-center justify-center">
                                    <div className={`w-28 h-28 rounded-full border-2 border-dashed flex items-center justify-center transition-all duration-700 ${
                                        isBonded
                                            ? 'border-indigo-400/80 bg-indigo-500/15 scale-90 shadow-[0_0_30px_rgba(99,102,241,0.3)]'
                                            : 'border-slate-600 bg-slate-900/60'
                                    }`}>
                                        <div className="text-center">
                                            <div className="text-2xl font-black text-white">{ionicData.metal.symbol}</div>
                                            <div className={`text-xs font-mono font-bold mt-1 ${isBonded ? 'text-amber-400' : 'text-slate-400'}`}>
                                                {isBonded ? ionicData.metal.finalConfig : ionicData.metal.initialConfig}
                                            </div>
                                        </div>
                                    </div>
                                    {isBonded && (
                                        <span className="absolute -top-2 -right-2 px-2.5 py-0.5 rounded-full bg-indigo-500 text-white font-mono text-xs font-extrabold shadow-lg animate-bounce">
                                            {ionicData.metal.charge}
                                        </span>
                                    )}
                                </div>
                                <span className="text-xs font-bold text-slate-300">
                                    {isBonded ? `${ionicData.metal.name} Ion (Cation)` : `${ionicData.metal.name} Atom`}
                                </span>
                            </div>

                            {/* Electron Transfer Arrow & Animation */}
                            <div className="flex flex-col items-center gap-2">
                                <div className={`p-3 rounded-full transition-all duration-500 ${
                                    isBonded ? 'bg-amber-400/20 text-amber-400 scale-110' : 'bg-slate-800 text-slate-500'
                                }`}>
                                    <ArrowRight className="w-6 h-6" />
                                </div>
                                <span className="text-[11px] font-mono font-bold text-amber-300">
                                    {isBonded ? `Transferred ${ionicData.metal.electronLoss} e⁻` : `Loses ${ionicData.metal.electronLoss} e⁻ ➔`}
                                </span>
                            </div>

                            {/* Non-Metal Atom / Anion */}
                            <div className="flex flex-col items-center space-y-3">
                                <div className="relative flex items-center justify-center">
                                    <div className={`w-32 h-32 rounded-full border-2 border-dashed flex items-center justify-center transition-all duration-700 ${
                                        isBonded
                                            ? 'border-emerald-400/80 bg-emerald-500/15 scale-105 shadow-[0_0_35px_rgba(16,185,129,0.3)]'
                                            : 'border-slate-600 bg-slate-900/60'
                                    }`}>
                                        <div className="text-center">
                                            <div className="text-2xl font-black text-white">{ionicData.nonMetal.symbol}</div>
                                            <div className={`text-xs font-mono font-bold mt-1 ${isBonded ? 'text-emerald-400' : 'text-slate-400'}`}>
                                                {isBonded ? ionicData.nonMetal.finalConfig : ionicData.nonMetal.initialConfig}
                                            </div>
                                        </div>
                                    </div>
                                    {isBonded && (
                                        <span className="absolute -top-2 -right-2 px-2.5 py-0.5 rounded-full bg-emerald-500 text-white font-mono text-xs font-extrabold shadow-lg animate-bounce">
                                            {ionicData.nonMetal.charge}
                                        </span>
                                    )}
                                </div>
                                <span className="text-xs font-bold text-slate-300">
                                    {isBonded ? `${ionicData.nonMetal.name} Ion (Anion)` : `${ionicData.nonMetal.name} Atom`}
                                </span>
                            </div>
                        </div>

                        {/* Action Control Button */}
                        <div className="w-full pt-4 border-t border-slate-800/80 flex items-center justify-between">
                            <span className="text-xs text-slate-400">
                                {isBonded ? 'Oppositely charged ions attract via strong electrostatic force.' : 'Click to transfer valence electrons and complete outer shells.'}
                            </span>
                            <button
                                onClick={() => setIsBonded(!isBonded)}
                                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-extrabold text-xs transition-all shadow-md active:scale-95 ${
                                    isBonded
                                        ? 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                                        : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/30'
                                }`}
                            >
                                {isBonded ? <RotateCcw className="w-4 h-4" /> : <Zap className="w-4 h-4" />}
                                <span>{isBonded ? 'Reset to Neutral Atoms' : 'Transfer Electrons & Bond'}</span>
                            </button>
                        </div>
                    </div>

                    {/* Scientific Properties Panel (4 Cols) */}
                    <div className="lg:col-span-4 space-y-4">
                        <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                            <div className="flex items-center gap-2 text-indigo-400 font-extrabold text-xs uppercase tracking-wider">
                                <Boxes className="w-4 h-4" />
                                <span>Giant 3D Ionic Lattice Properties</span>
                            </div>
                            <p className="text-xs text-slate-300 leading-relaxed">
                                {ionicData.description}
                            </p>
                            <ul className="space-y-2 text-xs text-slate-400 list-disc pl-4 pt-1">
                                {ionicData.latticeProperties.map((prop, idx) => (
                                    <li key={idx} className="leading-relaxed">{prop}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="p-4 rounded-2xl bg-indigo-950/20 border border-indigo-500/20 text-xs text-indigo-200 leading-relaxed">
                            <strong>💡 Exam Key Fact:</strong> Ionic compounds never form individual molecules. They exist solely as a continuous repeating 3D lattice of alternating positive and negative ions.
                        </div>
                    </div>
                </div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    {/* Visual Covalent Card (8 Cols) */}
                    <div className="lg:col-span-8 bg-[#070b16] rounded-2xl border border-slate-800 p-6 flex flex-col items-center justify-between min-h-[360px] relative overflow-hidden">
                        <div className="w-full flex items-center justify-between text-xs font-mono text-slate-400 border-b border-slate-800/80 pb-3">
                            <span>Type: <strong className="text-emerald-400">{covalentData.bondType}</strong></span>
                            <span className="text-slate-200 font-bold">{covalentData.name} ({covalentData.formula})</span>
                        </div>

                        {/* Overlapping Electron Shells (Venn-Diagram Style) */}
                        <div className="flex items-center justify-center w-full py-10">
                            <div className="relative flex items-center justify-center">
                                {/* Left Atom Shell */}
                                <div className={`w-36 h-36 rounded-full border-2 flex items-center justify-start pl-6 transition-all duration-700 ${
                                    isBonded
                                        ? 'border-emerald-400/80 bg-emerald-500/10 -mr-6 shadow-[0_0_30px_rgba(16,185,129,0.2)]'
                                        : 'border-slate-600 bg-slate-900/50 mr-8'
                                }`}>
                                    <div>
                                        <div className="text-2xl font-black text-white">{covalentData.atoms[0].symbol}</div>
                                        <div className="text-[10px] font-mono text-slate-400 mt-0.5">{covalentData.atoms[0].config}</div>
                                    </div>
                                </div>

                                {/* Shared Intersection Zone */}
                                {isBonded && (
                                    <div className="z-10 px-3 py-1.5 rounded-full bg-emerald-500/30 border border-emerald-400 text-center backdrop-blur-md animate-in zoom-in-50 duration-500 shadow-lg">
                                        <div className="text-[10px] font-mono font-black text-emerald-300">
                                            {covalentData.sharedPairsCount} Shared Pair{covalentData.sharedPairsCount > 1 ? 's' : ''}
                                        </div>
                                        <div className="text-xs font-bold text-white mt-0.5 tracking-widest">
                                            {'●× '.repeat(covalentData.sharedPairsCount).trim()}
                                        </div>
                                    </div>
                                )}

                                {/* Right Atom Shell */}
                                <div className={`w-36 h-36 rounded-full border-2 flex items-center justify-end pr-6 transition-all duration-700 ${
                                    isBonded
                                        ? 'border-emerald-400/80 bg-emerald-500/10 -ml-6 shadow-[0_0_30px_rgba(16,185,129,0.2)]'
                                        : 'border-slate-600 bg-slate-900/50 ml-8'
                                }`}>
                                    <div className="text-right">
                                        <div className="text-2xl font-black text-white">{covalentData.atoms[1]?.symbol || covalentData.atoms[0].symbol}</div>
                                        <div className="text-[10px] font-mono text-slate-400 mt-0.5">{covalentData.atoms[1]?.config || covalentData.atoms[0].config}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer Controls */}
                        <div className="w-full pt-4 border-t border-slate-800/80 flex items-center justify-between">
                            <span className="text-xs text-slate-400">
                                {isBonded ? 'Shared electron pairs attract both positive nuclei, cementing the covalent bond.' : 'Click to overlap valence shells and share electron pairs.'}
                            </span>
                            <button
                                onClick={() => setIsBonded(!isBonded)}
                                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-extrabold text-xs transition-all shadow-md active:scale-95 ${
                                    isBonded
                                        ? 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                                        : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/30'
                                }`}
                            >
                                {isBonded ? <RotateCcw className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
                                <span>{isBonded ? 'Separate Atoms' : 'Overlap & Share Pairs'}</span>
                            </button>
                        </div>
                    </div>

                    {/* Scientific Properties Panel (4 Cols) */}
                    <div className="lg:col-span-4 space-y-4">
                        <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                            <div className="flex items-center gap-2 text-emerald-400 font-extrabold text-xs uppercase tracking-wider">
                                <ShieldCheck className="w-4 h-4" />
                                <span>Simple Molecular Properties</span>
                            </div>
                            <p className="text-xs text-slate-300 leading-relaxed">
                                {covalentData.description}
                            </p>
                            <ul className="space-y-2 text-xs text-slate-400 list-disc pl-4 pt-1">
                                {covalentData.properties.map((prop, idx) => (
                                    <li key={idx} className="leading-relaxed">{prop}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/20 text-xs text-emerald-200 leading-relaxed">
                            <strong>💡 Crucial Exam Distinction:</strong> When simple covalent substances melt or boil, the strong covalent bonds inside the molecules NEVER break. Only weak intermolecular forces between molecules are overcome!
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}