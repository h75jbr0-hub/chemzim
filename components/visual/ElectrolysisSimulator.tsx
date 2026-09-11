'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
    Zap, 
    Play, 
    Pause, 
    RotateCcw,
    CheckCircle2, 
    Sparkles, 
    ChevronRight,
    Beaker,
    ShieldAlert
} from 'lucide-react';

export type ElectrolyteType = 'molten_pbbr2' | 'aqueous_nacl' | 'aqueous_cusa4' | 'dilute_h2so4';

interface ElectrolyteConfig {
    name: string;
    state: string;
    description: string;
    formula: string;
    solutionColor: string;
    ionsInSolution: { cation: string; anion: string; extraCation?: string; extraAnion?: string };
    cathodeHalfEq: string;
    anodeHalfEq: string;
    cathodeProduct: string;
    anodeProduct: string;
    cathodeObservation: string;
    anodeObservation: string;
    explanation: string;
}

const ELECTROLYTES: Record<ElectrolyteType, ElectrolyteConfig> = {
    molten_pbbr2: {
        name: 'Molten Lead(II) Bromide',
        state: 'Molten (Liquid)',
        description: 'Classic molten binary salt decomposition for IGCSE.',
        formula: 'PbBr₂(l)',
        solutionColor: '#f59e0b',
        ionsInSolution: { cation: 'Pb²⁺', anion: 'Br⁻' },
        cathodeHalfEq: 'Pb²⁺(l) + 2e⁻ ➔ Pb(l)',
        anodeHalfEq: '2Br⁻(l) ➔ Br₂(g) + 2e⁻',
        cathodeProduct: 'Lead metal (Pb)',
        anodeProduct: 'Bromine gas (Br₂)',
        cathodeObservation: 'Silvery-grey shiny bead of molten lead forms.',
        anodeObservation: 'Pungent reddish-brown fumes of bromine gas evolved.',
        explanation: 'In molten state, no water is present. Pb²⁺ cations migrate to cathode to be reduced; Br⁻ anions migrate to anode to be oxidised.'
    },
    aqueous_nacl: {
        name: 'Concentrated Aqueous Sodium Chloride (Brine)',
        state: 'Aqueous Solution',
        description: 'Industrial Chlor-Alkali process demonstrating selective discharge.',
        formula: 'NaCl(aq) + H₂O(l)',
        solutionColor: '#38bdf8',
        ionsInSolution: { cation: 'Na⁺', anion: 'Cl⁻', extraCation: 'H⁺', extraAnion: 'OH⁻' },
        cathodeHalfEq: '2H⁺(aq) + 2e⁻ ➔ H₂(g)',
        anodeHalfEq: '2Cl⁻(aq) ➔ Cl₂(g) + 2e⁻',
        cathodeProduct: 'Hydrogen gas (H₂)',
        anodeProduct: 'Chlorine gas (Cl₂)',
        cathodeObservation: 'Rapid effervescence of colourless hydrogen gas (squeaky pop test).',
        anodeObservation: 'Pale green-yellow gas evolved; bleaches damp litmus paper white.',
        explanation: 'H⁺ is lower than Na⁺ in electrochemical series, so H⁺ is discharged at cathode. Cl⁻ is concentrated halide, so Cl⁻ discharges over OH⁻ at anode. Solution becomes alkaline NaOH.'
    },
    aqueous_cusa4: {
        name: 'Aqueous Copper(II) Sulfate',
        state: 'Aqueous Solution',
        description: 'Copper refining & electroplating with inert graphite electrodes.',
        formula: 'CuSO₄(aq) + H₂O(l)',
        solutionColor: '#2563eb',
        ionsInSolution: { cation: 'Cu²⁺', anion: 'SO₄²⁻', extraCation: 'H⁺', extraAnion: 'OH⁻' },
        cathodeHalfEq: 'Cu²⁺(aq) + 2e⁻ ➔ Cu(s)',
        anodeHalfEq: '4OH⁻(aq) ➔ O₂(g) + 2H₂O(l) + 4e⁻',
        cathodeProduct: 'Copper metal (Cu)',
        anodeProduct: 'Oxygen gas (O₂)',
        cathodeObservation: 'Salmon-pink / reddish-brown solid copper coats the cathode.',
        anodeObservation: 'Colourless gas bubbles of oxygen (relights glowing splint).',
        explanation: 'Cu²⁺ is lower than H⁺, so Cu²⁺ discharges easily to form solid copper. At anode, OH⁻ discharges in preference to polyatomic sulfate (SO₄²⁻). Blue colour fades over time as Cu²⁺ is depleted.'
    },
    dilute_h2so4: {
        name: 'Dilute Sulfuric Acid (Acidified Water)',
        state: 'Aqueous Solution',
        description: 'Hoffmann voltameter electrolysis of water producing 2:1 volume ratio.',
        formula: 'H₂SO₄(aq) + H₂O(l)',
        solutionColor: '#0ea5e9',
        ionsInSolution: { cation: 'H⁺', anion: 'SO₄²⁻', extraAnion: 'OH⁻' },
        cathodeHalfEq: '2H⁺(aq) + 2e⁻ ➔ H₂(g)',
        anodeHalfEq: '4OH⁻(aq) ➔ O₂(g) + 2H₂O(l) + 4e⁻',
        cathodeProduct: 'Hydrogen gas (H₂)',
        anodeProduct: 'Oxygen gas (O₂)',
        cathodeObservation: 'Vigorous bubbling of H₂ gas (twice the volume of oxygen: 2:1 ratio).',
        anodeObservation: 'Bubbles of O₂ gas evolved at half the rate of hydrogen.',
        explanation: 'Electrolysis of water produces 2 volumes of H₂ gas at the negative cathode for every 1 volume of O₂ gas at the positive anode.'
    }
};

export default function ElectrolysisSimulator() {
    const [selectedElectrolyte, setSelectedElectrolyte] = useState<ElectrolyteType>('molten_pbbr2');
    const [voltage, setVoltage] = useState<number>(6.0);
    const [isPowered, setIsPowered] = useState<boolean>(true);
    const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
    const [activeTab, setActiveTab] = useState<'visual' | 'half_equations' | 'exam_rules'>('visual');

    const config = ELECTROLYTES[selectedElectrolyte];
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isPowered && voltage > 0) {
            timer = setInterval(() => {
                setElapsedSeconds(prev => prev + 1);
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [isPowered, voltage]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        const width = canvas.width;
        const height = canvas.height;

        const cathodeX = width * 0.28;
        const anodeX = width * 0.72;
        const electrodeTop = 50;
        const electrodeBottom = height - 40;

        interface IonParticle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            type: 'cation' | 'anion';
            symbol: string;
            radius: number;
        }

        const particles: IonParticle[] = [];
        const numParticles = 26;

        for (let i = 0; i < numParticles; i++) {
            const isCation = i % 2 === 0;
            particles.push({
                x: width * 0.35 + Math.random() * (width * 0.3),
                y: electrodeTop + 30 + Math.random() * (electrodeBottom - electrodeTop - 60),
                vx: (Math.random() - 0.5) * 0.8,
                vy: (Math.random() - 0.5) * 0.8,
                type: isCation ? 'cation' : 'anion',
                symbol: isCation ? config.ionsInSolution.cation : config.ionsInSolution.anion,
                radius: isCation ? 11 : 13
            });
        }

        interface Bubble {
            x: number;
            y: number;
            radius: number;
            speed: number;
            color: string;
        }
        const bubbles: Bubble[] = [];

        const render = () => {
            ctx.clearRect(0, 0, width, height);

            const tankPadding = 30;
            const tankTop = 80;
            const tankBottom = height - 25;

            ctx.fillStyle = config.solutionColor + '22';
            ctx.fillRect(tankPadding, tankTop, width - 2 * tankPadding, tankBottom - tankTop);

            ctx.strokeStyle = '#334155';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(tankPadding, tankTop - 10);
            ctx.lineTo(tankPadding, tankBottom);
            ctx.lineTo(width - tankPadding, tankBottom);
            ctx.lineTo(width - tankPadding, tankTop - 10);
            ctx.stroke();

            ctx.strokeStyle = config.solutionColor;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(tankPadding, tankTop);
            ctx.lineTo(width - tankPadding, tankTop);
            ctx.stroke();

            ctx.strokeStyle = isPowered ? '#fbbf24' : '#475569';
            ctx.lineWidth = 3;

            ctx.beginPath();
            ctx.moveTo(cathodeX, electrodeTop);
            ctx.lineTo(cathodeX, 25);
            ctx.lineTo(width * 0.44, 25);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(anodeX, electrodeTop);
            ctx.lineTo(anodeX, 25);
            ctx.lineTo(width * 0.56, 25);
            ctx.stroke();

            ctx.fillStyle = '#0f172a';
            ctx.fillRect(width * 0.44 - 4, 10, width * 0.12 + 8, 30);
            ctx.strokeStyle = '#6366f1';
            ctx.lineWidth = 1.5;
            ctx.strokeRect(width * 0.44 - 4, 10, width * 0.12 + 8, 30);

            ctx.strokeStyle = '#f43f5e';
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.moveTo(width * 0.47, 16);
            ctx.lineTo(width * 0.47, 34);
            ctx.stroke();

            ctx.strokeStyle = '#10b981';
            ctx.lineWidth = 2.5;
            ctx.beginPath();
            ctx.moveTo(width * 0.53, 12);
            ctx.lineTo(width * 0.53, 38);
            ctx.stroke();

            ctx.font = 'bold 10px monospace';
            ctx.fillStyle = '#f43f5e';
            ctx.fillText('-', width * 0.455, 28);
            ctx.fillStyle = '#10b981';
            ctx.fillText('+', width * 0.545, 28);

            if (isPowered && voltage > 0) {
                const arrowOffset = (Date.now() / 60) % 30;
                ctx.fillStyle = '#fbbf24';
                ctx.font = '9px monospace';
                ctx.fillText('e⁻ ➔', cathodeX + 30 + arrowOffset, 21);
                ctx.fillText('e⁻ ➔', width * 0.60 + arrowOffset, 21);
            }

            const electrodeWidth = 24;

            const cathodeGrad = ctx.createLinearGradient(cathodeX - electrodeWidth/2, 0, cathodeX + electrodeWidth/2, 0);
            cathodeGrad.addColorStop(0, '#1e293b');
            cathodeGrad.addColorStop(0.5, '#475569');
            cathodeGrad.addColorStop(1, '#0f172a');
            ctx.fillStyle = cathodeGrad;
            ctx.fillRect(cathodeX - electrodeWidth/2, electrodeTop, electrodeWidth, electrodeBottom - electrodeTop);
            ctx.strokeStyle = '#64748b';
            ctx.lineWidth = 1;
            ctx.strokeRect(cathodeX - electrodeWidth/2, electrodeTop, electrodeWidth, electrodeBottom - electrodeTop);

            const anodeGrad = ctx.createLinearGradient(anodeX - electrodeWidth/2, 0, anodeX + electrodeWidth/2, 0);
            anodeGrad.addColorStop(0, '#1e293b');
            anodeGrad.addColorStop(0.5, '#475569');
            anodeGrad.addColorStop(1, '#0f172a');
            ctx.fillStyle = anodeGrad;
            ctx.fillRect(anodeX - electrodeWidth/2, electrodeTop, electrodeWidth, electrodeBottom - electrodeTop);
            ctx.strokeStyle = '#64748b';
            ctx.lineWidth = 1;
            ctx.strokeRect(anodeX - electrodeWidth/2, electrodeTop, electrodeWidth, electrodeBottom - electrodeTop);

            ctx.font = 'bold 11px system-ui';
            ctx.textAlign = 'center';
            ctx.fillStyle = '#f43f5e';
            ctx.fillText('CATHODE (-)', cathodeX, electrodeTop - 8);

            ctx.fillStyle = '#10b981';
            ctx.fillText('ANODE (+)', anodeX, electrodeTop - 8);

            const driftSpeed = isPowered ? (voltage / 12) * 1.2 : 0;

            particles.forEach(p => {
                if (isPowered) {
                    if (p.type === 'cation') {
                        p.x -= driftSpeed;
                        if (p.x <= cathodeX + electrodeWidth/2 + p.radius) {
                            p.x = width * 0.55 + Math.random() * 60;
                            p.y = electrodeTop + 40 + Math.random() * (electrodeBottom - electrodeTop - 70);
                        }
                    } else {
                        p.x += driftSpeed;
                        if (p.x >= anodeX - electrodeWidth/2 - p.radius) {
                            p.x = width * 0.45 - Math.random() * 60;
                            p.y = electrodeTop + 40 + Math.random() * (electrodeBottom - electrodeTop - 70);
                        }
                    }
                }

                p.x += p.vx;
                p.y += p.vy;

                if (p.y < tankTop + p.radius + 5) p.vy *= -1;
                if (p.y > tankBottom - p.radius - 5) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = p.type === 'cation' ? '#0284c7' : '#d97706';
                ctx.fill();
                ctx.strokeStyle = '#ffffff';
                ctx.lineWidth = 1;
                ctx.stroke();

                ctx.font = 'bold 9px monospace';
                ctx.fillStyle = '#ffffff';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(p.symbol, p.x, p.y);
            });

            if (isPowered && voltage > 1.5) {
                if (Math.random() < 0.35 && selectedElectrolyte !== 'molten_pbbr2' && selectedElectrolyte !== 'aqueous_cusa4') {
                    bubbles.push({
                        x: cathodeX - electrodeWidth/2 - Math.random() * 6,
                        y: tankBottom - 10,
                        radius: 2 + Math.random() * 3,
                        speed: 1.2 + Math.random() * 1.5,
                        color: 'rgba(255, 255, 255, 0.7)'
                    });
                }
                if (Math.random() < 0.4) {
                    bubbles.push({
                        x: anodeX + electrodeWidth/2 + Math.random() * 6,
                        y: tankBottom - 10,
                        radius: 2.5 + Math.random() * 3.5,
                        speed: 1.0 + Math.random() * 1.5,
                        color: selectedElectrolyte === 'molten_pbbr2' ? 'rgba(249, 115, 22, 0.75)' : 'rgba(163, 230, 53, 0.7)'
                    });
                }
            }

            for (let i = bubbles.length - 1; i >= 0; i--) {
                const b = bubbles[i];
                b.y -= b.speed;
                ctx.beginPath();
                ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
                ctx.fillStyle = b.color;
                ctx.fill();
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
                ctx.stroke();

                if (b.y < tankTop) {
                    bubbles.splice(i, 1);
                }
            }

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [selectedElectrolyte, isPowered, voltage, config]);

    return (
        <div className="flex-shrink-0 w-full rounded-3xl bg-[#0a0f1d] border border-slate-800/80 shadow-2xl p-5 md:p-8 space-y-6 overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
                <div>
                    <div className="flex items-center gap-2 mb-1.5">
                        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shadow-sm">
                            <Zap className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                            <span>Interactive Electrolysis Lab</span>
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono bg-slate-800/60 px-2 py-0.5 rounded-full border border-slate-700/50">
                            Cambridge 0620 • Unit 4
                        </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-black text-white flex items-center gap-2">
                        <span>Electrochemical Cell & Selective Discharge</span>
                    </h3>
                    <p className="text-xs md:text-sm text-slate-400 mt-1 max-w-2xl">
                        Observe cation reduction at the cathode, anion oxidation at the anode, electron transfer in wires, and predict real exam products.
                    </p>
                </div>

                <div className="flex items-center gap-1 p-1 bg-slate-900/90 rounded-2xl border border-slate-800 self-start md:self-auto">
                    <button
                        onClick={() => setActiveTab('visual')}
                        className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                            activeTab === 'visual'
                                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                                : 'text-slate-400 hover:text-white'
                        }`}
                    >
                        Lab Chamber
                    </button>
                    <button
                        onClick={() => setActiveTab('half_equations')}
                        className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                            activeTab === 'half_equations'
                                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                                : 'text-slate-400 hover:text-white'
                        }`}
                    >
                        Half-Equations
                    </button>
                    <button
                        onClick={() => setActiveTab('exam_rules')}
                        className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                            activeTab === 'exam_rules'
                                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                                : 'text-slate-400 hover:text-white'
                        }`}
                    >
                        PANIC Rules
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {(Object.keys(ELECTROLYTES) as ElectrolyteType[]).map((key) => {
                    const item = ELECTROLYTES[key];
                    const isSelected = selectedElectrolyte === key;
                    return (
                        <button
                            key={key}
                            onClick={() => setSelectedElectrolyte(key)}
                            className={`p-3.5 rounded-2xl text-left border transition-all duration-300 relative overflow-hidden ${
                                isSelected
                                    ? 'bg-indigo-500/15 border-indigo-500/50 shadow-lg shadow-indigo-500/10'
                                    : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-800/40 hover:border-slate-700'
                            }`}
                        >
                            <div className="flex items-center justify-between mb-1">
                                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                                    {item.state}
                                </span>
                                {isSelected && (
                                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                                )}
                            </div>
                            <div className="text-sm font-extrabold text-white truncate">
                                {item.name.split('(')[0]}
                            </div>
                            <div className="text-[11px] font-mono text-indigo-300 font-semibold mt-0.5">
                                {item.formula}
                            </div>
                        </button>
                    );
                })}
            </div>

            {activeTab === 'visual' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    <div className="lg:col-span-8 bg-[#070b16] rounded-2xl border border-slate-800/90 p-4 relative overflow-hidden flex flex-col items-center">
                        <canvas
                            ref={canvasRef}
                            width={650}
                            height={340}
                            className="w-full max-w-[650px] h-auto block rounded-xl shadow-inner"
                        />

                        <div className="w-full mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => setIsPowered(!isPowered)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-extrabold transition-all shadow-md active:scale-95 ${
                                        isPowered
                                            ? 'bg-rose-500 hover:bg-rose-600 text-white shadow-rose-500/20'
                                            : 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-emerald-500/20'
                                    }`}
                                >
                                    {isPowered ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                                    <span>{isPowered ? 'Cut Power' : 'Engage DC Power'}</span>
                                </button>

                                <div className="flex items-center gap-2">
                                    <span className="text-xs text-slate-400 font-semibold">DC Voltage:</span>
                                    <input
                                        type="range"
                                        min="0"
                                        max="12"
                                        step="0.5"
                                        value={voltage}
                                        onChange={(e) => setVoltage(parseFloat(e.target.value))}
                                        className="w-24 accent-indigo-500 cursor-pointer"
                                    />
                                    <span className="font-mono text-xs font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-md border border-amber-400/20">
                                        {voltage.toFixed(1)} V
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 text-xs font-mono">
                                <span className="text-slate-400">Current:</span>
                                <span className="text-indigo-300 font-bold bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                                    {isPowered && voltage > 0 ? (voltage * 0.25).toFixed(2) : '0.00'} A
                                </span>
                                <span className="text-slate-400">Time:</span>
                                <span className="text-slate-200 font-bold bg-slate-800 px-2 py-0.5 rounded">
                                    {elapsedSeconds}s
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-4 space-y-4">
                        <div className="p-4 rounded-2xl bg-slate-900/60 border border-rose-500/20 space-y-2">
                            <div className="flex items-center justify-between">
                                <span className="text-[10px] font-black uppercase tracking-wider text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded-full border border-rose-500/20">
                                    Cathode Discharge (-)
                                </span>
                                <span className="text-xs font-bold text-white">
                                    {config.cathodeProduct}
                                </span>
                            </div>
                            <div className="font-mono text-xs text-rose-300 bg-black/40 p-2 rounded-xl border border-rose-500/10">
                                {config.cathodeHalfEq}
                            </div>
                            <p className="text-xs text-slate-300 leading-relaxed">
                                <strong>Observation:</strong> {config.cathodeObservation}
                            </p>
                        </div>

                        <div className="p-4 rounded-2xl bg-slate-900/60 border border-emerald-500/20 space-y-2">
                            <div className="flex items-center justify-between">
                                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                                    Anode Discharge (+)
                                </span>
                                <span className="text-xs font-bold text-white">
                                    {config.anodeProduct}
                                </span>
                            </div>
                            <div className="font-mono text-xs text-emerald-300 bg-black/40 p-2 rounded-xl border border-emerald-500/10">
                                {config.anodeHalfEq}
                            </div>
                            <p className="text-xs text-slate-300 leading-relaxed">
                                <strong>Observation:</strong> {config.anodeObservation}
                            </p>
                        </div>

                        <div className="p-4 rounded-2xl bg-indigo-950/30 border border-indigo-500/20 text-xs space-y-1 text-slate-300 leading-relaxed">
                            <span className="text-[10px] font-black uppercase tracking-wider text-indigo-400 block mb-1">
                                💡 Cambridge Exam Insight:
                            </span>
                            <p>{config.explanation}</p>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'half_equations' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 animate-in fade-in duration-300">
                    <div className="p-6 rounded-3xl bg-slate-900/60 border border-rose-500/30 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center font-black">
                                C⁻
                            </div>
                            <div>
                                <h4 className="text-base font-extrabold text-white">Cathode: Reduction (Gain of Electrons)</h4>
                                <span className="text-xs text-rose-300 font-mono">OIL RIG: Reduction Is Gain</span>
                            </div>
                        </div>
                        <div className="p-4 rounded-2xl bg-black/50 border border-rose-500/20 font-mono text-sm text-white text-center">
                            {config.cathodeHalfEq}
                        </div>
                        <ul className="space-y-2 text-xs text-slate-300 list-disc pl-4">
                            <li>Positively charged cations are attracted to the negative cathode.</li>
                            <li>Electrons arrive from the DC power supply through the external wire.</li>
                            <li>Cations gain electrons to become neutral atoms or diatomic molecules.</li>
                        </ul>
                    </div>

                    <div className="p-6 rounded-3xl bg-slate-900/60 border border-emerald-500/30 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black">
                                A⁺
                            </div>
                            <div>
                                <h4 className="text-base font-extrabold text-white">Anode: Oxidation (Loss of Electrons)</h4>
                                <span className="text-xs text-emerald-300 font-mono">OIL RIG: Oxidation Is Loss</span>
                            </div>
                        </div>
                        <div className="p-4 rounded-2xl bg-black/50 border border-emerald-500/20 font-mono text-sm text-white text-center">
                            {config.anodeHalfEq}
                        </div>
                        <ul className="space-y-2 text-xs text-slate-300 list-disc pl-4">
                            <li>Negatively charged anions are attracted to the positive anode.</li>
                            <li>Anions surrender their excess electrons to the electrode surface.</li>
                            <li>Electrons leave the anode and travel through the circuit back to the positive battery terminal.</li>
                        </ul>
                    </div>
                </div>
            )}

            {activeTab === 'exam_rules' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 animate-in fade-in duration-300">
                    <div className="p-5 rounded-3xl bg-slate-900/60 border border-white/10 space-y-3">
                        <div className="text-indigo-400 font-extrabold text-sm uppercase tracking-wider flex items-center gap-2">
                            <span>1. The PANIC Mnemonic</span>
                        </div>
                        <div className="p-3 bg-black/40 rounded-xl font-mono text-xs text-indigo-300 leading-relaxed">
                            <strong>P</strong>ositive is <strong>A</strong>node<br/>
                            <strong>N</strong>egative <strong>I</strong>s <strong>C</strong>athode
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed">
                            Never mix up electrode polarities in electrolytic cells. Remember that PANIC applies to electrolysis cells connected to a battery!
                        </p>
                    </div>

                    <div className="p-5 rounded-3xl bg-slate-900/60 border border-white/10 space-y-3">
                        <div className="text-amber-400 font-extrabold text-sm uppercase tracking-wider flex items-center gap-2">
                            <span>2. Cathode Discharge Rule</span>
                        </div>
                        <div className="p-3 bg-black/40 rounded-xl font-mono text-xs text-amber-300 leading-relaxed">
                            If metal is MORE reactive than Hydrogen ➔ <strong>H₂ gas forms</strong>.<br/>
                            If metal is LESS reactive (Cu, Ag, Au) ➔ <strong>Metal deposits</strong>.
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed">
                            In aqueous solutions, water provides H⁺ and OH⁻ ions. The less reactive species is always preferentially reduced at the cathode.
                        </p>
                    </div>

                    <div className="p-5 rounded-3xl bg-slate-900/60 border border-white/10 space-y-3">
                        <div className="text-emerald-400 font-extrabold text-sm uppercase tracking-wider flex items-center gap-2">
                            <span>3. Anode Discharge Rule</span>
                        </div>
                        <div className="p-3 bg-black/40 rounded-xl font-mono text-xs text-emerald-300 leading-relaxed">
                            Concentrated Halide (Cl⁻, Br⁻, I⁻) ➔ <strong>Halogen gas forms</strong>.<br/>
                            Dilute or Sulfate/Nitrate ➔ <strong>O₂ gas forms</strong> from OH⁻.
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed">
                            Polyatomic ions (SO₄²⁻, NO₃⁻) are never discharged at the anode in aqueous solutions because OH⁻ oxidation is thermodynamically easier.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}