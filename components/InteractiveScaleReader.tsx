'use client';

import React, { useState, useRef } from 'react';
import { 
    CheckCircle2, XCircle, AlertCircle, Eye, 
    RotateCcw, Sparkles, HelpCircle, ChevronRight, ZoomIn
} from 'lucide-react';

export interface ApparatusScaleConfig {
    type: 'burette' | 'measuring-cylinder' | 'thermometer' | 'gas-syringe';
    targetValue: number;
    unit: string;
    minScale: number;
    maxScale: number;
    step: number;
    subdivision?: number;
    tolerance: number;
    title?: string;
    initialReading?: number;
    liquidColor?: string;
}

export interface InteractiveScaleReaderProps {
    config: ApparatusScaleConfig;
    onComplete?: (score: number, maxScore: number, studentReading: number) => void;
}

export default function InteractiveScaleReader({ config, onComplete }: InteractiveScaleReaderProps) {
    const { 
        type, 
        targetValue, 
        unit, 
        minScale, 
        maxScale, 
        step, 
        subdivision = 0.1, 
        tolerance = 0.05, 
        title,
        initialReading,
        liquidColor = '#0284c7'
    } = config;

    // Student input reading
    const [inputVal, setInputVal] = useState<string>('');
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [showParallaxGuide, setShowParallaxGuide] = useState<boolean>(true);
    const [showMagnifier, setShowMagnifier] = useState<boolean>(false);
    const [showAnswer, setShowAnswer] = useState<boolean>(false);

    // SVG coordinates
    const width = 500;
    const height = 360;
    const tubeX = 180;
    const tubeY = 45;
    const tubeW = 46;
    const tubeH = 260;

    // In a burette: 0 is at the top, max is at the bottom!
    // In cylinder/thermometer: 0 is at bottom, max is at the top.
    const isBurette = type === 'burette';
    const isThermometer = type === 'thermometer';
    const isCylinder = type === 'measuring-cylinder';
    const isSyringe = type === 'gas-syringe';

    // Calculate Y position for a given reading
    const getYForValue = (val: number): number => {
        const ratio = (val - minScale) / (maxScale - minScale);
        if (isBurette) {
            // value increases downwards
            return tubeY + 20 + ratio * (tubeH - 40);
        } else {
            // value increases upwards
            return tubeY + tubeH - 20 - ratio * (tubeH - 40);
        }
    };

    const meniscusY = getYForValue(targetValue);

    // Generate Major and Minor scale ticks
    const ticks: { val: number; y: number; isMajor: boolean; label?: string }[] = [];
    const minorStep = subdivision;
    const majorStep = step;

    for (let v = minScale; v <= maxScale + 0.0001; v += minorStep) {
        const roundedV = Math.round(v * 100) / 100;
        const isMajor = Math.abs(roundedV % majorStep) < 0.001 || Math.abs(roundedV % majorStep - majorStep) < 0.001;
        const y = getYForValue(roundedV);
        ticks.push({
            val: roundedV,
            y,
            isMajor,
            label: isMajor ? roundedV.toString() : undefined
        });
    }

    // Checking student answer against target and tolerance
    const studentNum = parseFloat(inputVal.trim());
    const isInputValid = !isNaN(studentNum);
    const difference = isInputValid ? Math.abs(studentNum - targetValue) : Infinity;
    const isCorrect = difference <= tolerance + 0.0001;

    const handleSubmit = () => {
        if (!isInputValid) return;
        setSubmitted(true);
        if (onComplete) {
            onComplete(isCorrect ? 1 : 0, 1, studentNum);
        }
    };

    const handleReset = () => {
        setInputVal('');
        setSubmitted(false);
        setShowAnswer(false);
    };

    const adjustInput = (delta: number) => {
        const current = isInputValid ? studentNum : targetValue;
        const next = Math.round((current + delta) * 100) / 100;
        setInputVal(next.toFixed(2));
    };

    return (
        <div className="w-full bg-[#080d1a] border border-indigo-500/25 rounded-3xl p-5 md:p-7 shadow-2xl space-y-6">
            
            {/* Header Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-lg">
                        {isBurette ? '🧪' : isThermometer ? '🌡️' : isCylinder ? '⚗️' : '💉'}
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] font-black uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                                {isBurette ? 'Burette Reading' : isThermometer ? 'Thermometer Reading' : isCylinder ? 'Measuring Cylinder' : 'Gas Syringe'}
                            </span>
                            <span className="text-[10px] text-slate-400 font-mono">
                                Tolerance: ±{tolerance} {unit}
                            </span>
                        </div>
                        <h3 className="text-base font-bold text-white mt-0.5">
                            {title || `Interactive Laboratory Scale Reader (${unit})`}
                        </h3>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setShowParallaxGuide(!showParallaxGuide)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all flex items-center gap-1.5 cursor-pointer ${
                            showParallaxGuide
                                ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40'
                                : 'bg-white/5 text-slate-400 border-white/10 hover:text-white'
                        }`}
                    >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Parallax Line</span>
                    </button>
                    <button
                        onClick={() => setShowMagnifier(!showMagnifier)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all flex items-center gap-1.5 cursor-pointer ${
                            showMagnifier
                                ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                                : 'bg-white/5 text-slate-400 border-white/10 hover:text-white'
                        }`}
                    >
                        <ZoomIn className="w-3.5 h-3.5" />
                        <span>Magnifier</span>
                    </button>
                </div>
            </div>

            {/* Main Interactive Work Area */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                
                {/* SVG Scale Simulation */}
                <div className="lg:col-span-7 flex justify-center items-center bg-[#050914] border border-white/10 rounded-2xl p-4 overflow-hidden relative shadow-inner">
                    
                    <svg viewBox={`0 0 ${width} ${height}`} className="w-full max-w-[460px] h-auto select-none font-sans">
                        
                        {/* Background subtle grid */}
                        <defs>
                            <pattern id="scale-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                            </pattern>
                            <linearGradient id="liquid-grad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor={liquidColor} stopOpacity="0.75" />
                                <stop offset="100%" stopColor={liquidColor} stopOpacity="0.45" />
                            </linearGradient>
                            <linearGradient id="glass-reflection" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.15" />
                                <stop offset="30%" stopColor="#ffffff" stopOpacity="0.02" />
                                <stop offset="70%" stopColor="#ffffff" stopOpacity="0.0" />
                                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.12" />
                            </linearGradient>
                        </defs>
                        <rect width={width} height={height} fill="url(#scale-grid)" rx="12" />

                        {/* Title inside apparatus view */}
                        <text x="30" y="28" fill="#94a3b8" fontSize="11" fontWeight="bold">
                            {isBurette ? '▼ Inverted Scale (Numbers Increase Downwards)' : '▲ Ascending Scale (Numbers Increase Upwards)'}
                        </text>

                        {/* Liquid / Mercury Column inside Glass Tube */}
                        <path 
                            d={isBurette 
                                ? `M ${tubeX} ${meniscusY} Q ${tubeX + tubeW / 2} ${meniscusY + 6} ${tubeX + tubeW} ${meniscusY} L ${tubeX + tubeW} ${tubeY + tubeH} L ${tubeX} ${tubeY + tubeH} Z`
                                : isThermometer
                                ? `M ${tubeX + 12} ${meniscusY} L ${tubeX + tubeW - 12} ${meniscusY} L ${tubeX + tubeW - 12} ${tubeY + tubeH} L ${tubeX + 12} ${tubeY + tubeH} Z`
                                : `M ${tubeX} ${meniscusY} Q ${tubeX + tubeW / 2} ${meniscusY + 6} ${tubeX + tubeW} ${meniscusY} L ${tubeX + tubeW} ${tubeY + tubeH} L ${tubeX} ${tubeY + tubeH} Z`}
                            fill="url(#liquid-grad)"
                        />

                        {/* Thermometer Bottom Bulb */}
                        {isThermometer && (
                            <circle 
                                cx={tubeX + tubeW / 2} 
                                cy={tubeY + tubeH + 10} 
                                r="22" 
                                fill={liquidColor} 
                                stroke="#dc2626" 
                                strokeWidth="2" 
                            />
                        )}

                        {/* Meniscus Curve Line or Thermometer Cap */}
                        {!isThermometer ? (
                            <path 
                                d={`M ${tubeX} ${meniscusY} Q ${tubeX + tubeW / 2} ${meniscusY + 6} ${tubeX + tubeW} ${meniscusY}`}
                                fill="none"
                                stroke="#38bdf8"
                                strokeWidth="2.2"
                            />
                        ) : (
                            <line 
                                x1={tubeX + 12} 
                                y1={meniscusY} 
                                x2={tubeX + tubeW - 12} 
                                y2={meniscusY} 
                                stroke="#f87171" 
                                strokeWidth="3" 
                            />
                        )}

                        {/* Outer Glass Tube Body */}
                        <rect 
                            x={tubeX} 
                            y={tubeY} 
                            width={tubeW} 
                            height={tubeH} 
                            rx={isThermometer ? 8 : 4}
                            fill="url(#glass-reflection)" 
                            stroke="#475569" 
                            strokeWidth="1.8" 
                        />

                        {/* Scale Graduation Ticks and Numbers */}
                        {ticks.map((t, idx) => {
                            if (t.y < tubeY + 10 || t.y > tubeY + tubeH - 10) return null;
                            const tickLength = t.isMajor ? 14 : 7;
                            return (
                                <g key={idx}>
                                    {/* Left-side ticks */}
                                    <line 
                                        x1={tubeX} 
                                        y1={t.y} 
                                        x2={tubeX + tickLength} 
                                        y2={t.y} 
                                        stroke={t.isMajor ? '#f1f5f9' : '#94a3b8'} 
                                        strokeWidth={t.isMajor ? 1.6 : 1} 
                                    />
                                    {/* Major Number Labels */}
                                    {t.isMajor && t.label && (
                                        <text 
                                            x={tubeX - 10} 
                                            y={t.y + 4} 
                                            fill="#f8fafc" 
                                            fontSize="11" 
                                            fontWeight="bold" 
                                            textAnchor="end"
                                        >
                                            {t.label}
                                        </text>
                                    )}
                                </g>
                            );
                        })}

                        {/* Parallax Eye Level Guide Line */}
                        {showParallaxGuide && (
                            <g>
                                <line 
                                    x1="40" 
                                    y1={meniscusY + 6} 
                                    x2={width - 40} 
                                    y2={meniscusY + 6} 
                                    stroke="#ec4899" 
                                    strokeWidth="1.5" 
                                    strokeDasharray="4,3" 
                                />
                                {/* Eye Icon representation */}
                                <g transform={`translate(${width - 45}, ${meniscusY - 4})`}>
                                    <path d="M 0 10 Q 15 0 30 10 Q 15 20 0 10 Z" fill="none" stroke="#ec4899" strokeWidth="1.6" />
                                    <circle cx="15" cy="10" r="4" fill="#ec4899" />
                                    <text x="35" y="14" fill="#ec4899" fontSize="9" fontWeight="bold">Eye Level</text>
                                </g>
                                <text x={tubeX + tubeW + 10} y={meniscusY + 4} fill="#ec4899" fontSize="9.5" fontWeight="bold">
                                    Bottom of Meniscus
                                </text>
                            </g>
                        )}

                        {/* Magnifier View Box (Inset Zoom of Meniscus Region) */}
                        {showMagnifier && (
                            <g transform="translate(290, 45)">
                                <rect x="0" y="0" width="160" height="150" rx="16" fill="#091122" stroke="#f59e0b" strokeWidth="2" filter="drop-shadow(0 10px 15px rgba(0,0,0,0.6))" />
                                <text x="80" y="20" fill="#fbbf24" fontSize="10" fontWeight="bold" textAnchor="middle">
                                    🔍 2.5× Magnified View
                                </text>
                                
                                {/* Zoomed tube section */}
                                <g transform="translate(20, 25)">
                                    <rect x="25" y="5" width="70" height="110" fill="#030712" stroke="#64748b" strokeWidth="1.5" />
                                    <path d="M 25 60 Q 60 72 95 60 L 95 115 L 25 115 Z" fill={liquidColor} fillOpacity="0.4" />
                                    <path d="M 25 60 Q 60 72 95 60" fill="none" stroke="#38bdf8" strokeWidth="3" />
                                    
                                    {/* Magnified ticks */}
                                    <line x1="25" y1="20" x2="45" y2="20" stroke="#f8fafc" strokeWidth="2" />
                                    <line x1="25" y1="35" x2="38" y2="35" stroke="#94a3b8" strokeWidth="1.5" />
                                    <line x1="25" y1="50" x2="38" y2="50" stroke="#94a3b8" strokeWidth="1.5" />
                                    <line x1="25" y1="65" x2="45" y2="65" stroke="#ec4899" strokeWidth="2" />
                                    <line x1="25" y1="80" x2="38" y2="80" stroke="#94a3b8" strokeWidth="1.5" />
                                    <line x1="25" y1="95" x2="38" y2="95" stroke="#94a3b8" strokeWidth="1.5" />

                                    {/* Reading indicator */}
                                    <line x1="15" y1="66" x2="105" y2="66" stroke="#ec4899" strokeWidth="1.5" strokeDasharray="3,3" />
                                    <text x="60" y="80" fill="#ec4899" fontSize="8.5" fontWeight="bold" textAnchor="middle">
                                        Read at lowest point
                                    </text>
                                </g>
                            </g>
                        )}

                        {/* Reveal Official Mark Scheme Answer Overlay */}
                        {showAnswer && (
                            <g transform={`translate(${tubeX - 110}, ${meniscusY - 14})`}>
                                <rect x="0" y="0" width="95" height="28" rx="6" fill="#047857" stroke="#10b981" strokeWidth="1.5" />
                                <text x="47.5" y="18" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">
                                    {targetValue.toFixed(2)} {unit}
                                </text>
                                <polygon points="95,14 102,10 102,18" fill="#10b981" />
                            </g>
                        )}

                    </svg>

                </div>

                {/* Controls & Input Section */}
                <div className="lg:col-span-5 space-y-5">
                    
                    <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-5 space-y-4">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
                            Your Recorded Reading:
                        </label>

                        <div className="flex items-center gap-2">
                            <div className="relative flex-1">
                                <input
                                    type="text"
                                    value={inputVal}
                                    onChange={(e) => setInputVal(e.target.value)}
                                    placeholder={`e.g. ${targetValue.toFixed(2)}`}
                                    disabled={submitted}
                                    className="w-full bg-[#030612] border border-white/10 focus:border-indigo-500 rounded-xl px-4 py-3 text-white font-mono text-base font-bold outline-none transition-all placeholder:text-slate-600 disabled:opacity-60"
                                />
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 font-mono">
                                    {unit}
                                </span>
                            </div>

                            <button
                                onClick={handleSubmit}
                                disabled={!isInputValid || submitted}
                                className="px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white font-bold text-xs shadow-lg shadow-indigo-500/20 disabled:opacity-40 disabled:cursor-not-allowed transition-all active:scale-95 cursor-pointer"
                            >
                                Submit
                            </button>
                        </div>

                        {/* Nudge buttons for fine-tuning decimal places */}
                        {!submitted && (
                            <div className="flex items-center gap-2 pt-1">
                                <span className="text-[10px] text-slate-500 font-semibold">Fine Nudge:</span>
                                <button
                                    onClick={() => adjustInput(-0.05)}
                                    className="px-2 py-1 bg-white/5 hover:bg-white/10 rounded-lg text-[10px] font-mono font-bold text-slate-300 border border-white/5"
                                >
                                    -0.05
                                </button>
                                <button
                                    onClick={() => adjustInput(-0.01)}
                                    className="px-2 py-1 bg-white/5 hover:bg-white/10 rounded-lg text-[10px] font-mono font-bold text-slate-300 border border-white/5"
                                >
                                    -0.01
                                </button>
                                <button
                                    onClick={() => adjustInput(+0.01)}
                                    className="px-2 py-1 bg-white/5 hover:bg-white/10 rounded-lg text-[10px] font-mono font-bold text-slate-300 border border-white/5"
                                >
                                    +0.01
                                </button>
                                <button
                                    onClick={() => adjustInput(+0.05)}
                                    className="px-2 py-1 bg-white/5 hover:bg-white/10 rounded-lg text-[10px] font-mono font-bold text-slate-300 border border-white/5"
                                >
                                    +0.05
                                </button>
                            </div>
                        )}

                        {/* Evaluation Result Feedback */}
                        {submitted && (
                            <div className={`p-4 rounded-xl border text-xs space-y-2 animate-in fade-in duration-300 ${
                                isCorrect 
                                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300' 
                                    : 'bg-rose-500/10 border-rose-500/30 text-rose-300'
                            }`}>
                                <div className="flex items-center justify-between font-bold">
                                    <span className="flex items-center gap-1.5">
                                        {isCorrect ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <XCircle className="w-4 h-4 text-rose-400" />}
                                        <span>{isCorrect ? 'Accurate Reading Awarded! (+1 Mark)' : 'Outside Tolerance Range'}</span>
                                    </span>
                                    <span className="font-mono">{studentNum.toFixed(2)} {unit}</span>
                                </div>
                                <p className="text-[11px] opacity-90 leading-relaxed">
                                    {isCorrect 
                                        ? `Spot on! Your recorded reading falls well within the Cambridge examination tolerance of ±${tolerance} ${unit}.`
                                        : `Exam Mark Scheme Target: ${targetValue.toFixed(2)} ${unit} (Acceptable: ${(targetValue - tolerance).toFixed(2)} to ${(targetValue + tolerance).toFixed(2)} ${unit}).`}
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Cambridge Paper 6 Practical Advice Box */}
                    <div className="bg-indigo-500/5 border border-indigo-500/15 rounded-2xl p-4 text-xs space-y-2 text-slate-300">
                        <span className="font-bold text-indigo-300 uppercase tracking-wider text-[10px] flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                            <span>Cambridge / Edexcel Practical Exam Rules:</span>
                        </span>
                        <ul className="space-y-1 text-[11px] text-slate-400 list-disc list-inside">
                            {isBurette ? (
                                <>
                                    <li>Always read at <strong>eye level</strong> with the <strong>bottom of the meniscus</strong> to eliminate parallax error.</li>
                                    <li>Burette scales run <strong>downwards</strong> (0.00 cm³ at the top).</li>
                                    <li>Record burette volumes to <strong>2 decimal places</strong> ending in .00 or .05 cm³ (e.g. 24.45 cm³).</li>
                                </>
                            ) : isThermometer ? (
                                <>
                                    <li>Always view the top of the liquid/mercury column at <strong>perpendicular eye level</strong>.</li>
                                    <li>Record temperatures to <strong>1 decimal place</strong> (e.g. 14.0 °C or 21.5 °C).</li>
                                    <li>Thermometer bulb must remain fully immersed in solution without touching vessel walls.</li>
                                </>
                            ) : isCylinder ? (
                                <>
                                    <li>Place measuring cylinder on a <strong>flat, horizontal bench</strong>.</li>
                                    <li>Read the horizontal graduation aligned with the <strong>lowest curve of the meniscus</strong>.</li>
                                    <li>Select the smallest capacity cylinder that accommodates the required volume for minimal percentage uncertainty.</li>
                                </>
                            ) : (
                                <>
                                    <li>Ensure the gas syringe barrel is clean, dry, and moves with <strong>zero friction</strong>.</li>
                                    <li>Read the graduation aligned with the <strong>front edge of the piston/plunger</strong>.</li>
                                    <li>Ensure all joints and delivery tubes are airtight to prevent gas leakage.</li>
                                </>
                            )}
                        </ul>
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center justify-between gap-3 pt-2">
                        <button
                            onClick={() => setShowAnswer(!showAnswer)}
                            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-bold transition-all border border-white/5 cursor-pointer"
                        >
                            <Eye className="w-3.5 h-3.5" />
                            <span>{showAnswer ? 'Hide Mark Scheme' : 'Reveal Target'}</span>
                        </button>

                        {submitted && (
                            <button
                                onClick={handleReset}
                                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 text-xs font-bold transition-all border border-indigo-500/30 cursor-pointer"
                            >
                                <RotateCcw className="w-3.5 h-3.5" />
                                <span>Try Again</span>
                            </button>
                        )}
                    </div>

                </div>

            </div>

        </div>
    );
}
