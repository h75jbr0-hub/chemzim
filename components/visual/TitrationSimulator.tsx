'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
    Play, 
    RotateCcw, 
    Droplet, 
    CheckCircle2, 
    Sparkles, 
    FlaskConical, 
    Activity, 
    Info 
} from 'lucide-react';

export interface TitrationSimulatorProps {
    acidName?: string;
    baseName?: string;
    indicatorName?: string;
    targetPh?: number;
    acidConcentration?: number; // M
    baseConcentration?: number; // M
}

export default function TitrationSimulator({
    acidName = "Hydrochloric Acid (HCl)",
    baseName = "Sodium Hydroxide (NaOH)",
    indicatorName = "Phenolphthalein",
    targetPh = 7,
    acidConcentration = 0.1,
    baseConcentration = 0.1
}: TitrationSimulatorProps) {
    const [volumeAdded, setVolumeAdded] = useState<number>(0); // Volume of NaOH added in cm³
    const [isAutoTitrating, setIsAutoTitrating] = useState<boolean>(false);
    const [ph, setPh] = useState<number>(1.0);
    const [indicatorColor, setIndicatorColor] = useState<string>("rgba(255, 255, 255, 0.05)"); // Colorless initially
    const [isEquivalenceReached, setIsEquivalenceReached] = useState<boolean>(false);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    // Initial acid volume = 25.0 cm³
    const initialAcidVol = 25.0; 
    const equivalenceVol = (initialAcidVol * acidConcentration) / baseConcentration; // 25.0 cm³

    // Calculate pH based on volume added
    useEffect(() => {
        let currentPh = 1.0;

        if (volumeAdded < equivalenceVol) {
            // Unreacted acid remaining
            const molesAcidRemaining = (initialAcidVol * acidConcentration - volumeAdded * baseConcentration) / 1000;
            const totalVolLiters = (initialAcidVol + volumeAdded) / 1000;
            const hPlusConc = molesAcidRemaining / totalVolLiters;
            currentPh = Math.max(1.0, -Math.log10(hPlusConc));
        } else if (Math.abs(volumeAdded - equivalenceVol) < 0.1) {
            // Equivalence point! Neutral solution
            currentPh = 7.0;
        } else {
            // Excess base added
            const molesBaseExcess = ((volumeAdded - equivalenceVol) * baseConcentration) / 1000;
            const totalVolLiters = (initialAcidVol + volumeAdded) / 1000;
            const ohMinusConc = molesBaseExcess / totalVolLiters;
            const pOH = -Math.log10(ohMinusConc);
            currentPh = Math.min(13.5, 14.0 - pOH);
        }

        setPh(parseFloat(currentPh.toFixed(2)));

        // Phenolphthalein color change (Colorless pH < 8.2 -> Vibrant Pink pH >= 8.2)
        if (currentPh < 8.2) {
            setIndicatorColor("rgba(255, 255, 255, 0.05)"); // Clear / Colorless
        } else if (currentPh >= 8.2 && currentPh < 10) {
            setIndicatorColor("rgba(236, 72, 153, 0.65)"); // Pale Pink
        } else {
            setIndicatorColor("rgba(219, 39, 119, 0.9)"); // Deep Pink / Magenta
        }

        if (Math.abs(volumeAdded - equivalenceVol) <= 0.2) {
            setIsEquivalenceReached(true);
        } else {
            setIsEquivalenceReached(false);
        }
    }, [volumeAdded, acidConcentration, baseConcentration, equivalenceVol, initialAcidVol]);

    // Auto Titration Interval
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isAutoTitrating) {
            interval = setInterval(() => {
                setVolumeAdded(prev => {
                    if (prev >= 40) {
                        setIsAutoTitrating(false);
                        return 40;
                    }
                    return parseFloat((prev + 0.1).toFixed(1));
                });
            }, 50);
        }
        return () => clearInterval(interval);
    }, [isAutoTitrating]);

    // Single Drop (+0.1 cm³)
    const handleAddDrop = () => {
        if (volumeAdded >= 40) return;
        setVolumeAdded(prev => parseFloat((prev + 0.1).toFixed(1)));
    };

    // Reset Lab
    const handleReset = () => {
        setIsAutoTitrating(false);
        setVolumeAdded(0);
    };

    // Render Canvas Animation for Burette & Flask Liquid Level
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const width = canvas.width;
        const height = canvas.height;

        // 1. Draw Burette (Top Glass Tube)
        ctx.strokeStyle = '#475569';
        ctx.lineWidth = 3;
        ctx.strokeRect(width / 2 - 12, 10, 24, 180);

        // Burette Liquid Level
        const buretteFillHeight = Math.max(0, 160 - (volumeAdded / 40) * 160);
        ctx.fillStyle = 'rgba(99, 102, 241, 0.35)'; // NaOH liquid color
        ctx.fillRect(width / 2 - 10, 10 + (160 - buretteFillHeight), 20, buretteFillHeight);

        // Burette Stopcock / Valve
        ctx.fillStyle = '#64748b';
        ctx.fillRect(width / 2 - 18, 190, 36, 8);

        // Burette Tip
        ctx.beginPath();
        ctx.moveTo(width / 2 - 4, 198);
        ctx.lineTo(width / 2 + 4, 198);
        ctx.lineTo(width / 2, 220);
        ctx.closePath();
        ctx.fillStyle = '#475569';
        ctx.fill();

        // Animated Drop Falling if Titrating
        if (isAutoTitrating || volumeAdded > 0) {
            ctx.beginPath();
            ctx.arc(width / 2, 230 + (Date.now() % 300) / 10, 3, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(99, 102, 241, 0.8)';
            ctx.fill();
        }

        // 2. Draw Erlenmeyer Flask (Conical Flask at Bottom)
        const flaskTopY = 250;
        const flaskBottomY = 380;
        const flaskTopWidth = 30;
        const flaskBottomWidth = 140;

        ctx.beginPath();
        ctx.moveTo(width / 2 - flaskTopWidth / 2, flaskTopY);
        ctx.lineTo(width / 2 + flaskTopWidth / 2, flaskTopY);
        ctx.lineTo(width / 2 + flaskBottomWidth / 2, flaskBottomY);
        ctx.lineTo(width / 2 - flaskBottomWidth / 2, flaskBottomY);
        ctx.closePath();
        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 3;
        ctx.stroke();

        // Flask Liquid Level & Color Dynamic Transition
        const flaskLiquidHeight = Math.min(90, 45 + (volumeAdded / 40) * 45);
        ctx.beginPath();
        ctx.moveTo(width / 2 - flaskBottomWidth / 2 + 10, flaskBottomY);
        ctx.lineTo(width / 2 + flaskBottomWidth / 2 - 10, flaskBottomY);
        ctx.lineTo(width / 2 + (flaskBottomWidth / 2 - 25), flaskBottomY - flaskLiquidHeight);
        ctx.lineTo(width / 2 - (flaskBottomWidth / 2 - 25), flaskBottomY - flaskLiquidHeight);
        ctx.closePath();

        ctx.fillStyle = indicatorColor;
        ctx.fill();

    }, [volumeAdded, indicatorColor, isAutoTitrating]);

    return (
        <div className="w-full bg-gradient-to-br from-[#070f1e] via-[#0b1b35] to-[#0d162a] border border-indigo-500/30 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden flex flex-col shrink-0">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-indigo-500/20 mb-6">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                        <FlaskConical className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                                🧪 Interactive Virtual Lab
                            </span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-black text-white mt-1">
                            Acid-Base Titration Simulator
                        </h3>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        onClick={handleReset}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-all border border-slate-700"
                    >
                        <RotateCcw className="w-4 h-4" /> Reset Lab
                    </button>
                </div>
            </div>

            {/* Main Interactive Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Visual Canvas (Left Column) */}
                <div className="lg:col-span-5 flex flex-col items-center justify-center bg-slate-950/60 rounded-2xl p-4 border border-slate-800/80 relative">
                    <canvas 
                        ref={canvasRef} 
                        width={300} 
                        height={400} 
                        className="w-full max-w-[280px] h-auto"
                    />

                    <div className="absolute bottom-4 left-4 right-4 flex justify-between text-[11px] font-mono text-slate-400 bg-slate-900/80 p-2 rounded-xl border border-slate-800">
                        <span>Burette: NaOH (0.1M)</span>
                        <span className="text-indigo-400 font-bold">{volumeAdded.toFixed(1)} cm³</span>
                    </div>
                </div>

                {/* Dashboard & Live pH Curve (Right Column) */}
                <div className="lg:col-span-7 space-y-6">
                    
                    {/* Live Parameters Card */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                            <div className="text-xs text-slate-400 font-semibold mb-1">Current pH</div>
                            <div className={`text-2xl font-extrabold ${ph < 7 ? 'text-indigo-400' : ph === 7 ? 'text-emerald-400' : 'text-pink-400'}`}>
                                {ph.toFixed(2)}
                            </div>
                        </div>

                        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                            <div className="text-xs text-slate-400 font-semibold mb-1">Base Added</div>
                            <div className="text-2xl font-extrabold text-white">
                                {volumeAdded.toFixed(1)} <span className="text-xs font-normal text-slate-400">cm³</span>
                            </div>
                        </div>

                        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 col-span-2 sm:col-span-1">
                            <div className="text-xs text-slate-400 font-semibold mb-1">Indicator State</div>
                            <div className="text-sm font-bold text-white flex items-center gap-1.5 mt-1">
                                <span className={`w-3 h-3 rounded-full ${ph >= 8.2 ? 'bg-pink-500 shadow-[0_0_10px_#ec4899]' : 'bg-slate-500'}`} />
                                {ph < 8.2 ? 'Colorless' : 'Pink End-Point'}
                            </div>
                        </div>
                    </div>

                    {/* Interactive Controls */}
                    <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-bold text-white">Burette Titration Control</span>
                            <span className="text-xs text-slate-400">Equivalence: 25.0 cm³</span>
                        </div>

                        <div className="flex gap-3">
                            <button
                                onClick={handleAddDrop}
                                disabled={volumeAdded >= 40}
                                className="flex-1 flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-4 rounded-xl text-xs transition-all shadow-lg shadow-indigo-600/20"
                            >
                                <Droplet className="w-4 h-4 fill-white" />
                                Add Single Drop (+0.1 cm³)
                            </button>

                            <button
                                onClick={() => setIsAutoTitrating(!isAutoTitrating)}
                                className={`flex-1 flex items-center justify-center gap-2 font-bold py-3 px-4 rounded-xl text-xs transition-all border ${
                                    isAutoTitrating 
                                        ? 'bg-amber-500/20 text-amber-300 border-amber-500/40' 
                                        : 'bg-emerald-600 hover:bg-emerald-500 text-white border-emerald-500/30'
                                }`}
                            >
                                <Play className="w-4 h-4 fill-current" />
                                {isAutoTitrating ? 'Pause Titration' : 'Auto Titrate'}
                            </button>
                        </div>
                    </div>

                    {/* Equivalence Notification Alert */}
                    {isEquivalenceReached && (
                        <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 flex items-center gap-3 animate-pulse">
                            <CheckCircle2 className="w-6 h-6 flex-shrink-0 text-emerald-400" />
                            <div className="text-xs">
                                <strong className="font-bold block text-sm">Equivalence Point Reached!</strong>
                                Neutralization complete at 25.0 cm³ of NaOH. Solution transitioned to neutral pH 7.0.
                            </div>
                        </div>
                    )}

                    {/* Scientific Note */}
                    <div className="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-500/20 text-xs text-slate-300 flex items-start gap-3">
                        <Info className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                        <div>
                            <strong>Examiner Key Concept:</strong> In strong acid-strong base titration ($HCl + NaOH$), the pH curve stays low until near the equivalence point, where 1 drop causes a sharp pH surge from 3 to 10, triggering the Phenolphthalein color change.
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}
