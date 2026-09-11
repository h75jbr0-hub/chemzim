'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Play, Square, RotateCcw, Eye, Clock, Thermometer, FlaskConical, CheckCircle2, Award } from 'lucide-react';

interface RunResult {
    concNa2S2O3: number; // mol/dm3
    temp: number; // Kelvin
    timeTaken: number; // seconds
    rate: number; // 1/t (s^-1)
}

export default function DisappearingCrossSimulator() {
    // Experimental parameters controlled by student
    const [concNa2S2O3, setConcNa2S2O3] = useState<number>(0.20); // 0.05 to 0.40 mol/dm3
    const [temperature, setTemperature] = useState<number>(298); // 288K (15°C) to 328K (55°C)
    
    // Virtual reaction state
    const [isReacting, setIsReacting] = useState<boolean>(false);
    const [elapsedTime, setElapsedTime] = useState<number>(0);
    const [opacity, setOpacity] = useState<number>(0); // Precipitate turbidity opacity (0 to 1)

    // Stored experiment trials table (Max 5 trials)
    const [history, setHistory] = useState<RunResult[]>([]);

    // Timer ref
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    // Calculated target time required for cross to completely disappear based on kinetics:
    const targetTime = Math.round(
        (15 / concNa2S2O3) * Math.exp(4500 * (1 / temperature - 1 / 298))
    );

    // Start simulation
    const handleStart = () => {
        setIsReacting(true);
        setElapsedTime(0);
        setOpacity(0);
    };

    // Stop timer (Student presses when they judge the cross has disappeared)
    const handleStop = () => {
        if (!isReacting) return;

        if (timerRef.current) clearInterval(timerRef.current);
        setIsReacting(false);

        const recordedTime = parseFloat(elapsedTime.toFixed(1));
        const rateRecorded = recordedTime > 0 ? parseFloat((1 / recordedTime).toFixed(4)) : 0;

        setHistory((prev) => {
            const newTrial: RunResult = {
                concNa2S2O3: concNa2S2O3,
                temp: temperature,
                timeTaken: recordedTime,
                rate: rateRecorded
            };

            // Limit to 5 trials max
            const updated = [newTrial, ...prev];
            return updated.slice(0, 5);
        });
    };

    // Reset current run
    const handleReset = () => {
        if (timerRef.current) clearInterval(timerRef.current);
        setIsReacting(false);
        setElapsedTime(0);
        setOpacity(0);
    };

    // Reaction progression timer loop
    useEffect(() => {
        if (isReacting) {
            timerRef.current = setInterval(() => {
                setElapsedTime((prevTime) => {
                    const nextTime = prevTime + 0.2;
                    const newOpacity = Math.min(1, nextTime / targetTime);
                    setOpacity(newOpacity);
                    return nextTime;
                });
            }, 50);
        }

        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [isReacting, targetTime]);

    return (
        <div className="w-full flex-shrink-0 bg-slate-950/90 border border-emerald-500/20 rounded-2xl p-5 md:p-6 shadow-2xl backdrop-blur-xl text-slate-100 flex flex-col gap-5">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
                <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                        <FlaskConical className="w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="text-base md:text-lg font-bold text-foreground flex items-center gap-2">
                            Disappearing Cross Virtual Lab (Initial Rates) 🧪
                        </h3>
                        <p className="text-xs text-slate-400">
                            Observe sulfur precipitate formation (Na₂S₂O₃ + 2HCl → 2NaCl + SO₂ + S↓ + H₂O)
                        </p>
                    </div>
                </div>

                {/* Control Action Buttons */}
                <div className="flex items-center gap-2">
                    {!isReacting ? (
                        <button
                            onClick={handleStart}
                            disabled={history.length >= 5}
                            className="flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 text-slate-950 rounded-xl text-xs font-bold transition shadow-lg shadow-emerald-500/20"
                        >
                            <Play className="w-4 h-4 fill-slate-950" />
                            {history.length >= 5 ? 'Max 5 Trials Reached' : 'Mix & Start Stopwatch'}
                        </button>
                    ) : (
                        <button
                            onClick={handleStop}
                            className="flex items-center gap-2 px-4 py-2 bg-rose-500 hover:bg-rose-600 text-white rounded-xl text-xs font-bold transition shadow-lg shadow-rose-500/30 animate-pulse"
                        >
                            <Square className="w-4 h-4 fill-white" />
                            STOP (Cross Disappeared!)
                        </button>
                    )}
                    <button
                        onClick={handleReset}
                        className="p-2 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white rounded-xl border border-slate-800 text-xs transition"
                        title="Reset Flask"
                    >
                        <RotateCcw className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Controls & Beaker View Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Control Panel */}
                <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800/60 flex flex-col gap-4">
                    <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                        <FlaskConical className="w-4 h-4 text-emerald-400" /> Reaction Parameters
                    </span>

                    {/* 1. Concentration Slider */}
                    <div className="flex flex-col gap-1.5">
                        <div className="flex justify-between items-center text-xs font-bold text-slate-300">
                            <span>[Na₂S₂O₃] Concentration:</span>
                            <span className="text-emerald-400 font-mono">{concNa2S2O3.toFixed(2)} mol/dm³</span>
                        </div>
                        <input
                            type="range"
                            min="0.05"
                            max="0.40"
                            step="0.05"
                            disabled={isReacting}
                            value={concNa2S2O3}
                            onChange={(e) => setConcNa2S2O3(parseFloat(e.target.value))}
                            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400 disabled:opacity-50"
                        />
                    </div>

                    {/* 2. Temperature Slider */}
                    <div className="flex flex-col gap-1.5">
                        <div className="flex justify-between items-center text-xs font-bold text-slate-300">
                            <span className="flex items-center gap-1">
                                <Thermometer className="w-3.5 h-3.5 text-amber-400" /> Temperature (T):
                            </span>
                            <span className="text-amber-400 font-mono">{temperature} K ({(temperature - 273).toFixed(0)} °C)</span>
                        </div>
                        <input
                            type="range"
                            min="288"
                            max="328"
                            step="2"
                            disabled={isReacting}
                            value={temperature}
                            onChange={(e) => setTemperature(parseInt(e.target.value))}
                            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400 disabled:opacity-50"
                        />
                    </div>

                    {/* Digital Timer Display */}
                    <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold">
                            <Clock className="w-4 h-4 text-sky-400" /> Stopwatch Time:
                        </div>
                        <div className="font-mono text-2xl font-bold text-emerald-400">
                            {elapsedTime.toFixed(1)} <span className="text-xs text-slate-400 font-normal">seconds</span>
                        </div>
                    </div>
                </div>

                {/* Beaker & Cross Visualizer */}
                <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 flex flex-col items-center justify-center gap-4 relative overflow-hidden">
                    <div className="text-xs text-slate-400 font-semibold flex items-center gap-2">
                        <Eye className="w-4 h-4 text-emerald-400" /> Top-Down View of Conical Flask
                    </div>

                    {/* Top-down Flask Graphic */}
                    <div className="relative w-48 h-48 rounded-full border-4 border-slate-400 bg-slate-100 shadow-2xl overflow-hidden flex items-center justify-center">
                        {/* Black Cross underneath (subtle contrast underneath solution) */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative w-24 h-24">
                                <div className="absolute top-1/2 left-0 w-full h-3 bg-slate-800 -translate-y-1/2 rounded-full" />
                                <div className="absolute left-1/2 top-0 h-full w-3 bg-slate-800 -translate-x-1/2 rounded-full" />
                            </div>
                        </div>

                        {/* Yellow Precipitating Fluid Layer (Sulfur Turbidity) - Fully opaque when opacity = 1 */}
                        <div
                            className="absolute inset-0 bg-amber-400 transition-opacity duration-150"
                            style={{ opacity: Math.min(1, opacity) }}
                        />
                    </div>

                    {/* Status Alert Badge */}
                    <div className="text-xs font-semibold">
                        {isReacting ? (
                            <span className="text-amber-400 animate-pulse">
                                🧪 Precipitate forming... Click <strong>STOP</strong> when cross disappears!
                            </span>
                        ) : (
                            <span className="text-slate-500 italic">
                                Set parameters and click Start to begin trial.
                            </span>
                        )}
                    </div>
                </div>
            </div>

            {/* Experimental Results Table (Fixed 5 Rows Max) */}
            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                        <Award className="w-4 h-4" /> Student Experimental Table (Max 5 Trials)
                    </span>
                    {history.length > 0 && (
                        <button
                            onClick={() => setHistory([])}
                            className="text-[11px] text-slate-500 hover:text-slate-300 underline"
                        >
                            Reset Table
                        </button>
                    )}
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs text-slate-300">
                        <thead className="bg-slate-950 text-slate-400 border-b border-slate-800 uppercase text-[10px]">
                            <tr>
                                <th className="p-2.5">Trial #</th>
                                <th className="p-2.5">[Na₂S₂O₃] (mol/dm³)</th>
                                <th className="p-2.5">Temp (K)</th>
                                <th className="p-2.5">Time t (s)</th>
                                <th className="p-2.5 text-emerald-400">Initial Rate (1/t s⁻¹)</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/60 font-mono">
                            {[0, 1, 2, 3, 4].map((slotIdx) => {
                                const run = history[slotIdx];
                                return (
                                    <tr key={slotIdx} className={run ? 'hover:bg-slate-800/30' : 'opacity-40'}>
                                        <td className="p-2.5 font-bold text-slate-400">Trial {slotIdx + 1}</td>
                                        <td className="p-2.5 text-sky-400">{run ? run.concNa2S2O3.toFixed(2) : '—'}</td>
                                        <td className="p-2.5 text-amber-400">{run ? `${run.temp} K` : '—'}</td>
                                        <td className="p-2.5 text-white font-bold">{run ? `${run.timeTaken} s` : '—'}</td>
                                        <td className="p-2.5 text-emerald-400 font-bold">{run ? run.rate.toFixed(4) : '—'}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

