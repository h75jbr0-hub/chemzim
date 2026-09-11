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
    Legend
} from 'recharts';
import { Activity, Play, Pause, RotateCcw, Sliders, Info, Zap } from 'lucide-react';

interface KineticsRatePlotterProps {
    initialOrder?: 'zero' | 'first' | 'second';
}

export default function KineticsRatePlotter({ initialOrder = 'first' }: KineticsRatePlotterProps) {
    const [order, setOrder] = useState<'zero' | 'first' | 'second'>(initialOrder);
    const [initialConc, setInitialConc] = useState<number>(1.0); // mol/dm³
    const [rateConstant, setRateConstant] = useState<number>(0.05);
    const [showHalfLife, setShowHalfLife] = useState<boolean>(true);
    const [plotType, setPlotType] = useState<'conc_vs_time' | 'rate_vs_conc'>('conc_vs_time');
    const [isAnimating, setIsAnimating] = useState<boolean>(false);
    const [animProgress, setAnimProgress] = useState<number>(60); // max time = 60s

    // Calculate Half-life t_1/2
    const halfLifeInfo = useMemo(() => {
        if (order === 'zero') {
            const tHalf = initialConc / (2 * rateConstant);
            return {
                val: tHalf.toFixed(1),
                formula: 't₁/₂ = [A]₀ / 2k',
                note: 'Half-life decreases as concentration decreases'
            };
        } else if (order === 'first') {
            const tHalf = Math.LN2 / rateConstant;
            return {
                val: tHalf.toFixed(1),
                formula: 't₁/₂ = ln(2) / k',
                note: 'Half-life is CONSTANT (independent of concentration)'
            };
        } else {
            const tHalf = 1 / (rateConstant * initialConc);
            return {
                val: tHalf.toFixed(1),
                formula: 't₁/₂ = 1 / (k[A]₀)',
                note: 'Half-life doubles with each successive half-life'
            };
        }
    }, [order, initialConc, rateConstant]);

    // Generate Concentration vs Time & Rate vs Concentration data points
    const chartData = useMemo(() => {
        const points = [];
        const maxTime = animProgress;

        if (plotType === 'conc_vs_time') {
            for (let t = 0; t <= maxTime; t += 1) {
                let concA = initialConc;
                if (order === 'zero') {
                    concA = Math.max(0, initialConc - rateConstant * t);
                } else if (order === 'first') {
                    concA = initialConc * Math.exp(-rateConstant * t);
                } else if (order === 'second') {
                    concA = initialConc / (1 + rateConstant * t * initialConc);
                }

                const concP = Math.max(0, initialConc - concA);

                // Calculate instantaneous rate at this time
                let instRate = 0;
                if (order === 'zero') instRate = concA > 0 ? rateConstant : 0;
                else if (order === 'first') instRate = rateConstant * concA;
                else if (order === 'second') instRate = rateConstant * Math.pow(concA, 2);

                points.push({
                    time: t,
                    reactant: parseFloat(concA.toFixed(3)),
                    product: parseFloat(concP.toFixed(3)),
                    rate: parseFloat(instRate.toFixed(4)),
                });
            }
        } else {
            // Rate vs Concentration plot
            const step = initialConc / 30;
            for (let c = 0; c <= initialConc; c += step) {
                let rate = 0;
                if (order === 'zero') rate = rateConstant;
                else if (order === 'first') rate = rateConstant * c;
                else if (order === 'second') rate = rateConstant * Math.pow(c, 2);

                points.push({
                    conc: parseFloat(c.toFixed(3)),
                    rate: parseFloat(rate.toFixed(4))
                });
            }
        }

        return points;
    }, [order, initialConc, rateConstant, plotType, animProgress]);

    // Handle play animation
    React.useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isAnimating) {
            setAnimProgress(0);
            interval = setInterval(() => {
                setAnimProgress((prev) => {
                    if (prev >= 60) {
                        setIsAnimating(false);
                        return 60;
                    }
                    return prev + 2;
                });
            }, 50);
        }
        return () => clearInterval(interval);
    }, [isAnimating]);

    return (
        <div className="w-full flex-shrink-0 bg-slate-950/90 border border-indigo-500/20 rounded-2xl p-5 md:p-6 shadow-2xl backdrop-blur-xl text-slate-100 flex flex-col gap-5">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
                <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                        <Activity className="w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="text-base md:text-lg font-bold text-foreground flex items-center gap-2">
                            Interactive Reaction Kinetics Plotter 🧪
                        </h3>
                        <p className="text-xs text-slate-400">
                            Explore Concentration vs Time & Rate Equations for Zero, First, and Second Order reactions
                        </p>
                    </div>
                </div>

                {/* Plot Type Switch */}
                <div className="flex items-center bg-slate-900 border border-slate-800 p-1 rounded-xl self-start md:self-auto">
                    <button
                        onClick={() => setPlotType('conc_vs_time')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                            plotType === 'conc_vs_time'
                                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                                : 'text-slate-400 hover:text-slate-200'
                        }`}
                    >
                        [A] vs Time
                    </button>
                    <button
                        onClick={() => setPlotType('rate_vs_conc')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                            plotType === 'rate_vs_conc'
                                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                                : 'text-slate-400 hover:text-slate-200'
                        }`}
                    >
                        Rate vs [A]
                    </button>
                </div>
            </div>

            {/* Controls Bar */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-slate-900/60 p-4 rounded-xl border border-slate-800/60">
                {/* 1. Order Selector */}
                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-amber-400" />
                        Reaction Order (n):
                    </label>
                    <div className="grid grid-cols-3 gap-1.5 bg-slate-950 p-1 rounded-lg border border-slate-800">
                        {(['zero', 'first', 'second'] as const).map((o) => (
                            <button
                                key={o}
                                onClick={() => setOrder(o)}
                                className={`py-1.5 text-xs font-bold rounded-md capitalize transition-all ${
                                    order === o
                                        ? 'bg-emerald-500 text-slate-950 shadow'
                                        : 'text-slate-400 hover:text-slate-200'
                                }`}
                            >
                                {o}
                            </button>
                        ))}
                    </div>
                </div>

                {/* 2. Initial Concentration Slider */}
                <div className="flex flex-col gap-1.5">
                    <div className="flex justify-between items-center text-xs font-bold text-slate-300">
                        <span className="flex items-center gap-1.5">
                            <Sliders className="w-3.5 h-3.5 text-sky-400" />
                            Initial [A]₀:
                        </span>
                        <span className="text-sky-400 font-mono">{initialConc.toFixed(2)} mol/dm³</span>
                    </div>
                    <input
                        type="range"
                        min="0.2"
                        max="2.0"
                        step="0.1"
                        value={initialConc}
                        onChange={(e) => setInitialConc(parseFloat(e.target.value))}
                        className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400"
                    />
                </div>

                {/* 3. Rate Constant Slider */}
                <div className="flex flex-col gap-1.5">
                    <div className="flex justify-between items-center text-xs font-bold text-slate-300">
                        <span className="flex items-center gap-1.5">
                            <Sliders className="w-3.5 h-3.5 text-purple-400" />
                            Rate Constant (k):
                        </span>
                        <span className="text-purple-400 font-mono">{rateConstant.toFixed(3)}</span>
                    </div>
                    <input
                        type="range"
                        min="0.01"
                        max="0.20"
                        step="0.01"
                        value={rateConstant}
                        onChange={(e) => setRateConstant(parseFloat(e.target.value))}
                        className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-400"
                    />
                </div>
            </div>

            {/* Main Interactive Chart Display */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col gap-3">
                <div className="flex items-center justify-between px-2">
                    <span className="text-xs font-semibold text-slate-400">
                        {plotType === 'conc_vs_time'
                            ? `Concentration Curves & Progress over 60 seconds (${order.toUpperCase()} ORDER)`
                            : `Rate vs Concentration Curve (${order.toUpperCase()} ORDER)`}
                    </span>
                    {plotType === 'conc_vs_time' && (
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => setIsAnimating(true)}
                                disabled={isAnimating}
                                className="flex items-center gap-1.5 px-3 py-1 bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 border border-indigo-500/30 rounded-lg text-xs font-semibold transition disabled:opacity-50"
                            >
                                {isAnimating ? <Pause className="w-3.5 h-3.5 animate-spin" /> : <Play className="w-3.5 h-3.5" />}
                                Simulate Run
                            </button>
                            <button
                                onClick={() => {
                                    setIsAnimating(false);
                                    setAnimProgress(60);
                                }}
                                className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white rounded-lg text-xs transition"
                                title="Reset Graph"
                            >
                                <RotateCcw className="w-3.5 h-3.5" />
                            </button>
                        </div>
                    )}
                </div>

                <div className="h-72 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        {plotType === 'conc_vs_time' ? (
                            <LineChart data={chartData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                                <XAxis
                                    dataKey="time"
                                    label={{ value: 'Time (s)', position: 'insideBottomRight', offset: -5, fill: '#64748b', fontSize: 11 }}
                                    stroke="#475569"
                                    tick={{ fill: '#94a3b8', fontSize: 11 }}
                                />
                                <YAxis
                                    label={{ value: 'Concentration (mol/dm³)', angle: -90, position: 'insideLeft', fill: '#64748b', fontSize: 11 }}
                                    stroke="#475569"
                                    tick={{ fill: '#94a3b8', fontSize: 11 }}
                                    domain={[0, Math.ceil(initialConc * 1.1)]}
                                />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#090d16', borderColor: '#334155', borderRadius: '12px', fontSize: '12px' }}
                                />
                                <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                                <Line
                                    type="monotone"
                                    dataKey="reactant"
                                    name="Reactant [A]"
                                    stroke="#38bdf8"
                                    strokeWidth={3}
                                    dot={false}
                                    activeDot={{ r: 5 }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="product"
                                    name="Product [P]"
                                    stroke="#10b981"
                                    strokeWidth={2.5}
                                    strokeDasharray="4 4"
                                    dot={false}
                                />
                            </LineChart>
                        ) : (
                            <LineChart data={chartData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                                <XAxis
                                    dataKey="conc"
                                    label={{ value: 'Concentration [A] (mol/dm³)', position: 'insideBottomRight', offset: -5, fill: '#64748b', fontSize: 11 }}
                                    stroke="#475569"
                                    tick={{ fill: '#94a3b8', fontSize: 11 }}
                                />
                                <YAxis
                                    label={{ value: 'Rate (mol/dm³/s)', angle: -90, position: 'insideLeft', fill: '#64748b', fontSize: 11 }}
                                    stroke="#475569"
                                    tick={{ fill: '#94a3b8', fontSize: 11 }}
                                />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#090d16', borderColor: '#334155', borderRadius: '12px', fontSize: '12px' }}
                                />
                                <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                                <Line
                                    type="monotone"
                                    dataKey="rate"
                                    name="Initial Rate"
                                    stroke="#a855f7"
                                    strokeWidth={3}
                                    dot={false}
                                />
                            </LineChart>
                        )}
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Dynamic Educational Insights Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Rate Law & Half-Life Info */}
                <div className="bg-slate-900/80 p-4 rounded-xl border border-indigo-500/20 flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs uppercase tracking-wider">
                        <Info className="w-4 h-4" />
                        Mathematical Rate Law
                    </div>
                    <div className="flex flex-col gap-1.5 text-xs text-slate-300">
                        <div>
                            <span className="text-slate-400">Rate Equation: </span>
                            <span className="font-mono font-bold text-amber-400 text-sm">
                                Rate = k {order === 'zero' ? '[A]⁰ = k' : order === 'first' ? '[A]' : '[A]²'}
                            </span>
                        </div>
                        <div>
                            <span className="text-slate-400">Half-Life (t₁/₂): </span>
                            <span className="font-mono font-bold text-emerald-400">{halfLifeInfo.val} s</span>
                            <span className="text-slate-500 text-[11px] ml-2">({halfLifeInfo.formula})</span>
                        </div>
                        <p className="text-[11px] text-slate-400 italic bg-slate-950/50 p-2 rounded-lg border border-slate-800/80 mt-1">
                            💡 {halfLifeInfo.note}
                        </p>
                    </div>
                </div>

                {/* Key Characteristics Summary */}
                <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-sky-400 font-bold text-xs uppercase tracking-wider">
                        <Activity className="w-4 h-4" />
                        Graph Shape Characteristics
                    </div>
                    <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside">
                        {order === 'zero' && (
                            <>
                                <li><strong>[A] vs Time:</strong> Straight line with negative slope (<code className="text-amber-400">slope = -k</code>).</li>
                                <li><strong>Rate vs [A]:</strong> Horizontal straight line (Rate is constant).</li>
                                <li>Doubling concentration does <strong>not</strong> affect the rate.</li>
                            </>
                        )}
                        {order === 'first' && (
                            <>
                                <li><strong>[A] vs Time:</strong> Exponential decay curve with a constant half-life.</li>
                                <li><strong>Rate vs [A]:</strong> Straight line passing through the origin (<code className="text-amber-400">slope = k</code>).</li>
                                <li>Doubling concentration <strong>doubles</strong> the rate.</li>
                            </>
                        )}
                        {order === 'second' && (
                            <>
                                <li><strong>[A] vs Time:</strong> Steep hyperbolic curve; half-life doubles as reaction proceeds.</li>
                                <li><strong>Rate vs [A]:</strong> Parabolic curve sloping upwards (<code className="text-amber-400">Rate ∝ [A]²</code>).</li>
                                <li>Doubling concentration <strong>quadruples (4×)</strong> the rate.</li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}
