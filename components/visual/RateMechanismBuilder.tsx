'use client';

import React, { useState, useMemo } from 'react';
import { GitCommit, ArrowRight, Play, CheckCircle2, XCircle, Info, RefreshCw, Zap } from 'lucide-react';

interface MechanismStep {
    id: number;
    reactants: string[];
    products: string[];
    equationStr: string;
    isFast: boolean;
}

interface PresetMechanism {
    title: string;
    description: string;
    steps: MechanismStep[];
    rdsStepIndex: number;
    expectedRateLaw: string;
    explanation: string;
}

const PRESET_MECHANISMS: PresetMechanism[] = [
    {
        title: 'SN1 Nucleophilic Substitution (Tertiary Alkyl Halide)',
        description: 'Two-step mechanism involving a carbocation intermediate.',
        steps: [
            { id: 1, reactants: ['(CH₃)₃CCl'], products: ['(CH₃)₃C⁺', 'Cl⁻'], equationStr: '(CH₃)₃CCl → (CH₃)₃C⁺ + Cl⁻', isFast: false },
            { id: 2, reactants: ['(CH₃)₃C⁺', 'OH⁻'], products: ['(CH₃)₃COH'], equationStr: '(CH₃)₃C⁺ + OH⁻ → (CH₃)₃COH', isFast: true }
        ],
        rdsStepIndex: 0, // Step 1 is RDS
        expectedRateLaw: 'Rate = k [(CH₃)₃CCl]',
        explanation: 'Step 1 is slow (RDS). Only (CH₃)₃CCl is involved in or before Step 1, so the reaction is 1st order w.r.t. (CH₃)₃CCl and 0-order w.r.t. OH⁻.'
    },
    {
        title: 'SN2 Nucleophilic Substitution (Primary Alkyl Halide)',
        description: 'Single-step concerted mechanism forming a transition state.',
        steps: [
            { id: 1, reactants: ['CH₃Br', 'OH⁻'], products: ['CH₃OH', 'Br⁻'], equationStr: 'CH₃Br + OH⁻ → CH₃OH + Br⁻', isFast: false }
        ],
        rdsStepIndex: 0,
        expectedRateLaw: 'Rate = k [CH₃Br][OH⁻]',
        explanation: 'Single slow step involving both CH₃Br and OH⁻ as collision partners. Both appear in the rate equation (2nd order overall).'
    },
    {
        title: 'Pre-Equilibrium Mechanism (2NO + O₂ → 2NO₂)',
        description: 'Fast reversible formation of N₂O₂ intermediate followed by slow step.',
        steps: [
            { id: 1, reactants: ['NO', 'NO'], products: ['N₂O₂'], equationStr: '2 NO ⇌ N₂O₂ (Fast Equilibrium)', isFast: true },
            { id: 2, reactants: ['N₂O₂', 'O₂'], products: ['2 NO₂'], equationStr: 'N₂O₂ + O₂ → 2 NO₂ (Slow)', isFast: false }
        ],
        rdsStepIndex: 1, // Step 2 is RDS
        expectedRateLaw: 'Rate = k [NO]²[O₂]',
        explanation: 'Step 2 is slow (RDS) and uses N₂O₂. But N₂O₂ comes from 2 NO in the prior fast equilibrium. Substituting gives Rate = k [NO]²[O₂].'
    }
];

export default function RateMechanismBuilder() {
    const [selectedPresetIndex, setSelectedPresetIndex] = useState<number>(0);
    const preset = PRESET_MECHANISMS[selectedPresetIndex];

    const [selectedRdsIndex, setSelectedRdsIndex] = useState<number>(preset.rdsStepIndex);

    // Derived Rate Law based on user's selected RDS
    const userDerivedRateLaw = useMemo(() => {
        const rdsStep = preset.steps[selectedRdsIndex];
        if (!rdsStep) return 'Rate = k';

        const reactantCounts: Record<string, number> = {};

        // Only process reactants involved in the selected RDS step
        rdsStep.reactants.forEach(r => {
            // Check if this reactant is an intermediate produced in a prior step
            let isIntermediate = false;
            for (let i = 0; i < selectedRdsIndex; i++) {
                if (preset.steps[i].products.includes(r)) {
                    isIntermediate = true;
                    // Substitute with reactants of that prior step
                    preset.steps[i].reactants.forEach(origR => {
                        reactantCounts[origR] = (reactantCounts[origR] || 0) + 1;
                    });
                    break;
                }
            }

            if (!isIntermediate) {
                reactantCounts[r] = (reactantCounts[r] || 0) + 1;
            }
        });

        // Format terms with superscript numbers (e.g., [NO]² instead of [NO]^2 or [NO]^4)
        const superscriptMap: Record<number, string> = {
            2: '²',
            3: '³',
            4: '⁴',
            5: '⁵'
        };

        const terms = Object.entries(reactantCounts).map(([species, count]) => {
            if (count === 1) return `[${species}]`;
            const sup = superscriptMap[count] || `^${count}`;
            return `[${species}]${sup}`;
        });

        return `Rate = k ${terms.join('')}`;
    }, [preset, selectedRdsIndex]);

    const isCorrectRds = selectedRdsIndex === preset.rdsStepIndex;

    return (
        <div className="w-full flex-shrink-0 bg-slate-950/90 border border-amber-500/20 rounded-2xl p-5 md:p-6 shadow-2xl backdrop-blur-xl text-slate-100 flex flex-col gap-5">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
                <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                        <GitCommit className="w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="text-base md:text-lg font-bold text-foreground flex items-center gap-2">
                            Rate-Determining Step & Mechanism Builder 🧪
                        </h3>
                        <p className="text-xs text-slate-400">
                            Select the Rate-Determining Step (RDS) to dynamically derive the experimental Rate Equation
                        </p>
                    </div>
                </div>

                {/* Preset Mechanism Selector */}
                <div className="flex items-center bg-slate-900 border border-slate-800 p-1 rounded-xl">
                    {PRESET_MECHANISMS.map((p, idx) => (
                        <button
                            key={idx}
                            onClick={() => {
                                setSelectedPresetIndex(idx);
                                setSelectedRdsIndex(PRESET_MECHANISMS[idx].rdsStepIndex);
                            }}
                            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                                selectedPresetIndex === idx
                                    ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                                    : 'text-slate-400 hover:text-slate-200'
                            }`}
                        >
                            Preset {idx + 1}
                        </button>
                    ))}
                </div>
            </div>

            {/* Current Mechanism Header Info */}
            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 flex flex-col gap-1">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">{preset.title}</span>
                <p className="text-xs text-slate-300">{preset.description}</p>
            </div>

            {/* Step Selection Cards */}
            <div className="flex flex-col gap-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Click to toggle which step is the Slow Rate-Determining Step (RDS):
                </span>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {preset.steps.map((step, idx) => {
                        const isSelectedAsRds = selectedRdsIndex === idx;
                        return (
                            <div
                                key={step.id}
                                onClick={() => setSelectedRdsIndex(idx)}
                                className={`p-4 rounded-xl border cursor-pointer transition-all flex flex-col gap-3 relative ${
                                    isSelectedAsRds
                                        ? 'bg-amber-500/10 border-amber-500/50 shadow-lg shadow-amber-500/10 ring-1 ring-amber-500/30'
                                        : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                                }`}
                            >
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-bold text-slate-300 flex items-center gap-2">
                                        <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${isSelectedAsRds ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-400'}`}>
                                            {idx + 1}
                                        </span>
                                        Step {idx + 1}
                                    </span>
                                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${isSelectedAsRds ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30' : 'bg-emerald-500/10 text-emerald-400'}`}>
                                        {isSelectedAsRds ? '🐌 SLOW (RDS)' : '⚡ FAST'}
                                    </span>
                                </div>

                                <div className="font-mono text-sm font-bold text-slate-100 bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-center">
                                    {step.equationStr}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Derived Rate Law Output Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Derived Equation */}
                <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Derived Rate Equation:</span>
                        {isCorrectRds ? (
                            <span className="flex items-center gap-1 text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                                <CheckCircle2 className="w-3.5 h-3.5" /> Consistent
                            </span>
                        ) : (
                            <span className="flex items-center gap-1 text-xs font-bold text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded-full border border-rose-500/20">
                                <XCircle className="w-3.5 h-3.5" /> Inconsistent RDS
                            </span>
                        )}
                    </div>
                    <div className="font-mono font-bold text-lg text-amber-400 bg-slate-950 p-3 rounded-xl border border-slate-800 text-center">
                        {userDerivedRateLaw}
                    </div>
                </div>

                {/* Explanation & Chemistry Rules */}
                <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-sky-400 font-bold text-xs uppercase tracking-wider">
                        <Info className="w-4 h-4" />
                        Mechanism Consistency Explanation
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/50 p-3 rounded-lg border border-slate-800">
                        {preset.explanation}
                    </p>
                </div>
            </div>
        </div>
    );
}
