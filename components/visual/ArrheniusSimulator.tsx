'use client';

import React, { useState, useMemo } from 'react';
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceDot
} from 'recharts';
import { Calculator, Sliders, Info, LineChart as ChartIcon, Zap, Thermometer } from 'lucide-react';

interface ArrheniusSimulatorProps {
    initialEa?: number; // kJ/mol
    initialA?: number; // Pre-exponential factor A
}

export default function ArrheniusSimulator({
    initialEa = 50,
    initialA = 1000000
}: ArrheniusSimulatorProps) {
    const [activationEnergy, setActivationEnergy] = useState<number>(initialEa); // 20 to 120 kJ/mol
    const [preExpFactor, setPreExpFactor] = useState<number>(initialA); // 1e4 to 1e8
    const [currentTemp, setCurrentTemp] = useState<number>(298); // Kelvin (250K to 450K)
    const [activeTab, setActiveTab] = useState<'exponential' | 'linear'>('linear');

    const R = 8.314; // J/(mol*K)

    // Current calculated k value
    const currentK = useMemo(() => {
        const Ea_J = activationEnergy * 1000;
        const val = preExpFactor * Math.exp(-Ea_J / (R * currentTemp));
        return val;
    }, [activationEnergy, preExpFactor, currentTemp]);

    // Data for Graphs
    const chartData = useMemo(() => {
        const points = [];
        const Ea_J = activationEnergy * 1000;

        if (activeTab === 'linear') {
            // Plot ln(k) vs 1/T (Arrhenius Plot)
            // T range: 270K to 450K => 1/T range: ~0.00222 to ~0.00370 K⁻¹
            for (let T = 450; T >= 270; T -= 10) {
                const invT = 1 / T;
                const k = preExpFactor * Math.exp(-Ea_J / (R * T));
                const lnK = Math.log(k);

                points.push({
                    T: T,
                    invT: parseFloat(invT.toFixed(5)),
                    lnK: parseFloat(lnK.toFixed(3)),
                    k: k.toExponential(2)
                });
            }
        } else {
            // Plot k vs T (Direct Exponential Relationship)
            for (let T = 250; T <= 450; T += 5) {
                const k = preExpFactor * Math.exp(-Ea_J / (R * T));

                points.push({
                    T: T,
                    tempC: T - 273,
                    k: parseFloat(k.toFixed(4)),
                });
            }
        }

        return points;
    }, [activationEnergy, preExpFactor, activeTab]);

    // Calculate Arrhenius Plot Gradient & Intercept
    const gradient = useMemo(() => {
        const Ea_J = activationEnergy * 1000;
        return (-Ea_J / R).toFixed(1);
    }, [activationEnergy]);

    const intercept = useMemo(() => {
        return Math.log(preExpFactor).toFixed(2);
    }, [preExpFactor]);

    return (
        <div className="w-full flex-shrink-0 bg-slate-950/90 border border-purple-500/20 rounded-2xl p-5 md:p-6 shadow-2xl backdrop-blur-xl text-slate-100 flex flex-col gap-5">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
                <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                        <Calculator className="w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="text-base md:text-lg font-bold text-foreground flex items-center gap-2">
                            Arrhenius Equation & Activation Energy Simulator 🧪
                        </h3>
                        <p className="text-xs text-slate-400">
                            Explore the mathematical dependence of Rate Constant ($k$) on Temperature ($T$) & Activation Energy ($E_a$)
                        </p>
                    </div>
                </div>

                {/* Graph View Toggle */}
                <div className="flex items-center bg-slate-900 border border-slate-800 p-1 rounded-xl self-start md:self-auto">
                    <button
                        onClick={() => setActiveTab('linear')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                            activeTab === 'linear'
                                ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                                : 'text-slate-400 hover:text-slate-200'
                        }`}
                    >
                        Arrhenius Plot (ln k vs 1/T)
                    </button>
                    <button
                        onClick={() => setActiveTab('exponential')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                            activeTab === 'exponential'
                                ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                                : 'text-slate-400 hover:text-slate-200'
                        }`}
                    >
                        Direct Curve (k vs T)
                    </button>
                </div>
            </div>

            {/* Interactive Controls Sliders */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-slate-900/60 p-4 rounded-xl border border-slate-800/60">
                {/* 1. Activation Energy Slider */}
                <div className="flex flex-col gap-1.5">
                    <div className="flex justify-between items-center text-xs font-bold text-slate-300">
                        <span className="flex items-center gap-1.5">
                            <Zap className="w-3.5 h-3.5 text-emerald-400" />
                            Activation Energy (Eₐ):
                        </span>
                        <span className="text-emerald-400 font-mono">{activationEnergy} kJ/mol</span>
                    </div>
                    <input
                        type="range"
                        min="20"
                        max="120"
                        step="2"
                        value={activationEnergy}
                        onChange={(e) => setActivationEnergy(parseFloat(e.target.value))}
                        className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                    />
                </div>

                {/* 2. Temperature Slider */}
                <div className="flex flex-col gap-1.5">
                    <div className="flex justify-between items-center text-xs font-bold text-slate-300">
                        <span className="flex items-center gap-1.5">
                            <Thermometer className="w-3.5 h-3.5 text-amber-400" />
                            Temperature (T):
                        </span>
                        <span className="text-amber-400 font-mono">{currentTemp} K ({(currentTemp - 273).toFixed(0)} °C)</span>
                    </div>
                    <input
                        type="range"
                        min="260"
                        max="450"
                        step="2"
                        value={currentTemp}
                        onChange={(e) => setCurrentTemp(parseFloat(e.target.value))}
                        className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                    />
                </div>

                {/* 3. Frequency Factor (A) Slider */}
                <div className="flex flex-col gap-1.5">
                    <div className="flex justify-between items-center text-xs font-bold text-slate-300">
                        <span className="flex items-center gap-1.5">
                            <Sliders className="w-3.5 h-3.5 text-sky-400" />
                            Arrhenius Constant (A):
                        </span>
                        <span className="text-sky-400 font-mono">{preExpFactor.toExponential(1)}</span>
                    </div>
                    <input
                        type="range"
                        min="100000"
                        max="10000000"
                        step="500000"
                        value={preExpFactor}
                        onChange={(e) => setPreExpFactor(parseFloat(e.target.value))}
                        className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400"
                    />
                </div>
            </div>

            {/* Main Interactive Chart Display */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col gap-3">
                <div className="flex items-center justify-between px-2 text-xs">
                    <span className="font-semibold text-slate-400">
                        {activeTab === 'linear'
                            ? 'Arrhenius Straight-Line Graph: ln(k) vs 1/T'
                            : 'Exponential Rate Constant Increase: k vs T (Kelvin)'}
                    </span>
                    <span className="text-purple-400 font-mono font-bold">
                        Current k = {currentK > 0.0001 ? currentK.toFixed(4) : currentK.toExponential(3)}
                    </span>
                </div>

                <div className="h-72 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        {activeTab === 'linear' ? (
                            <LineChart data={chartData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                                <XAxis
                                    dataKey="invT"
                                    label={{ value: '1/T (K⁻¹)', position: 'insideBottomRight', offset: -5, fill: '#64748b', fontSize: 11 }}
                                    stroke="#475569"
                                    tick={{ fill: '#94a3b8', fontSize: 11 }}
                                />
                                <YAxis
                                    label={{ value: 'ln k', angle: -90, position: 'insideLeft', fill: '#64748b', fontSize: 11 }}
                                    stroke="#475569"
                                    tick={{ fill: '#94a3b8', fontSize: 11 }}
                                />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#090d16', borderColor: '#334155', borderRadius: '12px', fontSize: '12px' }}
                                />
                                <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                                <Line
                                    type="monotone"
                                    dataKey="lnK"
                                    name="ln(k)"
                                    stroke="#a855f7"
                                    strokeWidth={3}
                                    dot={{ r: 3, fill: '#a855f7' }}
                                    activeDot={{ r: 6 }}
                                />
                                {/* Marker for selected T */}
                                <ReferenceDot
                                    x={parseFloat((1 / currentTemp).toFixed(5))}
                                    y={parseFloat(Math.log(currentK).toFixed(3))}
                                    r={6}
                                    fill="#f59e0b"
                                    stroke="#fff"
                                    strokeWidth={2}
                                />
                            </LineChart>
                        ) : (
                            <LineChart data={chartData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                                <XAxis
                                    dataKey="T"
                                    label={{ value: 'Temperature T (K)', position: 'insideBottomRight', offset: -5, fill: '#64748b', fontSize: 11 }}
                                    stroke="#475569"
                                    tick={{ fill: '#94a3b8', fontSize: 11 }}
                                />
                                <YAxis
                                    label={{ value: 'Rate Constant k', angle: -90, position: 'insideLeft', fill: '#64748b', fontSize: 11 }}
                                    stroke="#475569"
                                    tick={{ fill: '#94a3b8', fontSize: 11 }}
                                />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#090d16', borderColor: '#334155', borderRadius: '12px', fontSize: '12px' }}
                                />
                                <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                                <Line
                                    type="monotone"
                                    dataKey="k"
                                    name="k"
                                    stroke="#38bdf8"
                                    strokeWidth={3}
                                    dot={false}
                                />
                                <ReferenceDot
                                    x={currentTemp}
                                    y={parseFloat(currentK.toFixed(4))}
                                    r={6}
                                    fill="#f59e0b"
                                    stroke="#fff"
                                    strokeWidth={2}
                                />
                            </LineChart>
                        )}
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Calculated Values & Formulas Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Arrhenius Equation Parameters */}
                <div className="bg-slate-900/80 p-4 rounded-xl border border-purple-500/20 flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-purple-400 font-bold text-xs uppercase tracking-wider">
                        <Calculator className="w-4 h-4" />
                        Arrhenius Mathematical Equations
                    </div>
                    <div className="flex flex-col gap-1.5 text-xs text-slate-300">
                        <div>
                            <span className="text-slate-400">Exponential Form: </span>
                            <span className="font-mono font-bold text-purple-400">k = A · e^(-Eₐ / RT)</span>
                        </div>
                        <div>
                            <span className="text-slate-400">Logarithmic Form: </span>
                            <span className="font-mono font-bold text-amber-400">ln(k) = (-Eₐ / R) · (1/T) + ln(A)</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 mt-1 bg-slate-950 p-2 rounded-lg border border-slate-800 text-[11px]">
                            <div>
                                <span className="text-slate-400">Graph Gradient (m): </span>
                                <span className="font-mono text-emerald-400 font-bold">{gradient} K</span>
                            </div>
                            <div>
                                <span className="text-slate-400">Y-Intercept (c): </span>
                                <span className="font-mono text-sky-400 font-bold">{intercept}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Key Insights for Exam */}
                <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-sky-400 font-bold text-xs uppercase tracking-wider">
                        <Info className="w-4 h-4" />
                        Key Arrhenius Relationships
                    </div>
                    <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside">
                        <li><strong>Effect of Higher Temp (T):</strong> As T increases, (1/T) decreases, causing <code className="text-purple-400">ln(k)</code> and <code className="text-purple-400">k</code> to increase exponentially.</li>
                        <li><strong>Effect of Higher Eₐ:</strong> A reaction with a higher activation energy has a <strong>steeper negative slope</strong>, making $k$ more sensitive to temperature changes.</li>
                        <li><strong>Calculating Eₐ from Gradient:</strong> <code className="text-emerald-400 font-mono">Eₐ = - (Gradient × R)</code>. Always divide by 1000 to convert Joules to kJ/mol!</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
