'use client';

import React, { useState, useMemo } from 'react';
import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ReferenceLine
} from 'recharts';
import { Flame, Sparkles, Sliders, Info, ShieldAlert, Zap } from 'lucide-react';

interface MaxwellBoltzmannSimulatorProps {
    initialTemp?: number; // Kelvin
    initialEa?: number; // kJ/mol
}

export default function MaxwellBoltzmannSimulator({
    initialTemp = 300,
    initialEa = 50
}: MaxwellBoltzmannSimulatorProps) {
    const [temperature, setTemperature] = useState<number>(initialTemp); // 200K to 600K
    const [activationEnergy, setActivationEnergy] = useState<number>(initialEa); // 20 to 90 kJ/mol
    const [hasCatalyst, setHasCatalyst] = useState<boolean>(false);
    const [compareTemp, setCompareTemp] = useState<boolean>(true);
    const [secondTemp, setSecondTemp] = useState<number>(350); // Second T line (T2)

    // Effective activation energy considering catalyst (lowers Ea by 15 kJ/mol)
    const effectiveEa = useMemo(() => {
        return hasCatalyst ? Math.max(10, activationEnergy - 15) : activationEnergy;
    }, [activationEnergy, hasCatalyst]);

    // Generate Maxwell-Boltzmann Distribution Curves
    // Maxwell-Boltzmann speed/energy distribution approximation:
    // f(E) = 2 * sqrt(E / pi) * (1 / (k_B * T))^(3/2) * exp(-E / (k_B * T))
    const chartData = useMemo(() => {
        const points = [];
        const maxE = 120; // Max Energy scale (kJ/mol)

        // Scaling constants for clean visualization
        const R = 0.008314; // kJ / (mol K)

        for (let E = 0; E <= maxE; E += 1.5) {
            // Function f(E) for primary temperature T1
            const factor1 = 2 * Math.sqrt(E / Math.PI) * Math.pow(1 / (R * temperature), 1.5);
            const prob1 = factor1 * E * Math.exp(-E / (R * temperature));

            // Function f(E) for comparison temperature T2
            let prob2 = 0;
            if (compareTemp) {
                const factor2 = 2 * Math.sqrt(E / Math.PI) * Math.pow(1 / (R * secondTemp), 1.5);
                prob2 = factor2 * E * Math.exp(-E / (R * secondTemp));
            }

            // Flag points that have E >= effectiveEa for shaded area
            const isReactive1 = E >= effectiveEa ? parseFloat(prob1.toFixed(5)) : 0;
            const isReactive2 = E >= effectiveEa ? parseFloat(prob2.toFixed(5)) : 0;

            points.push({
                energy: E,
                probT1: parseFloat(prob1.toFixed(5)),
                probT2: compareTemp ? parseFloat(prob2.toFixed(5)) : 0,
                reactiveT1: isReactive1,
                reactiveT2: isReactive2
            });
        }
        return points;
    }, [temperature, secondTemp, effectiveEa, compareTemp]);

    // Calculate numerical statistics (% of molecules with E >= Ea)
    const stats = useMemo(() => {
        const R = 0.008314;
        // Arrhenius fraction = exp(-Ea / RT)
        const fractionT1 = Math.exp(-effectiveEa / (R * temperature));
        const fractionT2 = Math.exp(-effectiveEa / (R * secondTemp));
        
        const percT1 = (fractionT1 * 100).toFixed(2);
        const percT2 = (fractionT2 * 100).toFixed(2);

        const ratio = fractionT2 > 0 && fractionT1 > 0 ? (fractionT2 / fractionT1).toFixed(1) : '1.0';

        return {
            fractionT1: percT1,
            fractionT2: percT2,
            increaseFactor: ratio
        };
    }, [temperature, secondTemp, effectiveEa]);

    return (
        <div className="w-full flex-shrink-0 bg-slate-950/90 border border-emerald-500/20 rounded-2xl p-5 md:p-6 shadow-2xl backdrop-blur-xl text-slate-100 flex flex-col gap-5">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
                <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                        <Flame className="w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="text-base md:text-lg font-bold text-foreground flex items-center gap-2">
                            Maxwell-Boltzmann Energy Distribution Simulator 🧪
                        </h3>
                        <p className="text-xs text-slate-400">
                            Visualize molecular energy distribution, Activation Energy ($E_a$), Temperature shifts, & Catalysis
                        </p>
                    </div>
                </div>

                {/* Catalyst Toggle Switch */}
                <button
                    onClick={() => setHasCatalyst(!hasCatalyst)}
                    className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all border shadow-lg ${
                        hasCatalyst
                            ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-emerald-500/20'
                            : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-slate-500'
                    }`}
                >
                    <Sparkles className="w-4 h-4" />
                    {hasCatalyst ? 'Catalyst Applied (Lower Ea)' : '+ Add Catalyst'}
                </button>
            </div>

            {/* Interactive Control Sliders */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-slate-900/60 p-4 rounded-xl border border-slate-800/60">
                {/* 1. Primary Temperature (T1) */}
                <div className="flex flex-col gap-1.5">
                    <div className="flex justify-between items-center text-xs font-bold text-slate-300">
                        <span className="flex items-center gap-1.5">
                            <Flame className="w-3.5 h-3.5 text-sky-400" />
                            Temperature (T₁):
                        </span>
                        <span className="text-sky-400 font-mono">{temperature} K ({(temperature - 273).toFixed(0)} °C)</span>
                    </div>
                    <input
                        type="range"
                        min="200"
                        max="550"
                        step="10"
                        value={temperature}
                        onChange={(e) => setTemperature(parseInt(e.target.value))}
                        className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400"
                    />
                </div>

                {/* 2. Secondary Temperature (T2 - Comparison) */}
                <div className="flex flex-col gap-1.5">
                    <div className="flex justify-between items-center text-xs font-bold text-slate-300">
                        <span className="flex items-center gap-1.5">
                            <Flame className="w-3.5 h-3.5 text-amber-400" />
                            Comparison (T₂):
                        </span>
                        <span className="text-amber-400 font-mono">{secondTemp} K ({(secondTemp - 273).toFixed(0)} °C)</span>
                    </div>
                    <input
                        type="range"
                        min="200"
                        max="600"
                        step="10"
                        value={secondTemp}
                        onChange={(e) => setSecondTemp(parseInt(e.target.value))}
                        className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                    />
                </div>

                {/* 3. Activation Energy (Ea) */}
                <div className="flex flex-col gap-1.5">
                    <div className="flex justify-between items-center text-xs font-bold text-slate-300">
                        <span className="flex items-center gap-1.5">
                            <Zap className="w-3.5 h-3.5 text-emerald-400" />
                            Activation Energy (Eₐ):
                        </span>
                        <span className="text-emerald-400 font-mono">{effectiveEa} kJ/mol</span>
                    </div>
                    <input
                        type="range"
                        min="20"
                        max="90"
                        step="5"
                        value={activationEnergy}
                        onChange={(e) => setActivationEnergy(parseInt(e.target.value))}
                        className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                    />
                </div>
            </div>

            {/* Main Interactive Maxwell-Boltzmann Chart */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col gap-3">
                <div className="flex flex-wrap items-center justify-between gap-2 px-2">
                    <span className="text-xs font-semibold text-slate-400 flex items-center gap-2">
                        <span>Distribution Curve at {temperature} K (Blue) vs {secondTemp} K (Amber)</span>
                    </span>
                    <div className="flex items-center gap-4 text-xs">
                        <span className="flex items-center gap-1 text-sky-400">
                            <span className="w-2.5 h-2.5 rounded-full bg-sky-400 inline-block" /> T₁ = {temperature} K
                        </span>
                        <span className="flex items-center gap-1 text-amber-400">
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" /> T₂ = {secondTemp} K
                        </span>
                        <span className="flex items-center gap-1 text-emerald-400 font-bold">
                            <span className="w-2.5 h-0.5 bg-emerald-400 inline-block" /> Eₐ = {effectiveEa} kJ/mol
                        </span>
                    </div>
                </div>

                <div className="h-72 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={chartData}>
                            <defs>
                                <linearGradient id="colorT1" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.4} />
                                    <stop offset="95%" stopColor="#38bdf8" stopOpacity={0.0} />
                                </linearGradient>
                                <linearGradient id="colorT2" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.0} />
                                </linearGradient>
                                <linearGradient id="colorReactiveT1" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#10b981" stopOpacity={0.3} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                            <XAxis
                                dataKey="energy"
                                label={{ value: 'Molecular Energy E (kJ/mol)', position: 'insideBottomRight', offset: -5, fill: '#64748b', fontSize: 11 }}
                                stroke="#475569"
                                tick={{ fill: '#94a3b8', fontSize: 11 }}
                            />
                            <YAxis
                                label={{ value: 'Number / Fraction of Molecules', angle: -90, position: 'insideLeft', fill: '#64748b', fontSize: 11 }}
                                stroke="#475569"
                                tick={{ fill: '#94a3b8', fontSize: 11 }}
                            />
                            <Tooltip
                                contentStyle={{ backgroundColor: '#090d16', borderColor: '#334155', borderRadius: '12px', fontSize: '12px' }}
                            />
                            {/* Vertical Line for Activation Energy */}
                            <ReferenceLine
                                x={effectiveEa}
                                stroke="#10b981"
                                strokeWidth={2.5}
                                strokeDasharray="4 4"
                                label={{
                                    value: `Ea (${effectiveEa} kJ)`,
                                    fill: '#10b981',
                                    position: 'top',
                                    fontSize: 12,
                                    fontWeight: 'bold'
                                }}
                            />
                            {/* Area under curves */}
                            <Area
                                type="monotone"
                                dataKey="probT1"
                                name={`T1 (${temperature}K)`}
                                stroke="#38bdf8"
                                strokeWidth={2.5}
                                fillOpacity={1}
                                fill="url(#colorT1)"
                            />
                            <Area
                                type="monotone"
                                dataKey="probT2"
                                name={`T2 (${secondTemp}K)`}
                                stroke="#f59e0b"
                                strokeWidth={2.5}
                                fillOpacity={1}
                                fill="url(#colorT2)"
                            />
                            {/* Shaded Area for Molecules with Energy >= Ea at T1 */}
                            <Area
                                type="monotone"
                                dataKey="reactiveT1"
                                name="Reactive Molecules (E ≥ Ea at T1)"
                                stroke="#10b981"
                                strokeWidth={1}
                                fillOpacity={1}
                                fill="url(#colorReactiveT1)"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Quantitative Impact Card */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* 1. T1 Reactive Fraction */}
                <div className="bg-slate-900/80 p-4 rounded-xl border border-sky-500/20 flex flex-col gap-1 text-center">
                    <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Molecules with E &ge; Eₐ at T₁</span>
                    <span className="text-xl font-bold text-sky-400 font-mono">{stats.fractionT1}%</span>
                    <span className="text-[11px] text-slate-500">at {temperature} K ({(temperature - 273).toFixed(0)} °C)</span>
                </div>

                {/* 2. T2 Reactive Fraction */}
                <div className="bg-slate-900/80 p-4 rounded-xl border border-amber-500/20 flex flex-col gap-1 text-center">
                    <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Molecules with E &ge; Eₐ at T₂</span>
                    <span className="text-xl font-bold text-amber-400 font-mono">{stats.fractionT2}%</span>
                    <span className="text-[11px] text-slate-500">at {secondTemp} K ({(secondTemp - 273).toFixed(0)} °C)</span>
                </div>

                {/* 3. Rate Increase Factor */}
                <div className="bg-slate-900/80 p-4 rounded-xl border border-emerald-500/20 flex flex-col gap-1 text-center">
                    <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Reaction Rate Multiplier</span>
                    <span className="text-xl font-bold text-emerald-400 font-mono">{stats.increaseFactor}× Faster</span>
                    <span className="text-[11px] text-slate-500">due to increased fraction of reactive collisions</span>
                </div>
            </div>

            {/* Educational Maxwell-Boltzmann Rules Summary */}
            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs uppercase tracking-wider">
                    <Info className="w-4 h-4" />
                    Essential Exam Rules for Maxwell-Boltzmann Distributions
                </div>
                <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                    <li><strong>Origin Constraint:</strong> The curve MUST start at the origin $(0,0)$ because no molecules have zero energy.</li>
                    <li><strong>Area Under Curve:</strong> The total area under the curve represents the total number of molecules (which stays constant).</li>
                    <li><strong>Higher Temperature Shift (T₂ &gt; T₁):</strong>
                        <ul className="pl-5 space-y-0.5 list-circle text-slate-400 text-[11px]">
                            <li>The peak shifts to the <strong>right</strong> (higher average kinetic energy).</li>
                            <li>The peak is <strong>lower/flatter</strong> (to keep total area under the curve constant).</li>
                            <li>A significantly larger fraction of molecules have energy &ge; Eₐ (shaded green region expands).</li>
                        </ul>
                    </li>
                    <li><strong>Effect of Catalyst:</strong> A catalyst does NOT shift the curve; instead, it shifts the Eₐ line to the <strong>left</strong> (Eₐ,cat), increasing the shaded area.</li>
                </ul>
            </div>
        </div>
    );
}
