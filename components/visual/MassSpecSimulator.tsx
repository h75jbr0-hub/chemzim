'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    mass: number;
    charge: number;
    color: string;
    trail: { x: number; y: number }[];
    detected: boolean;
    detectedY: number;
}

const STAGE_COLORS: Record<string, string> = {
    vaporisation: '#f59e0b',
    ionisation: '#8b5cf6',
    acceleration: '#3b82f6',
    deflection: '#10b981',
    detection: '#ef4444',
};

function getParticleColor(m: number, c: number): string {
    const palette: Record<string, string> = {
        '1_1': '#60a5fa', '1_2': '#34d399',
        '2_1': '#fbbf24', '2_2': '#f87171',
        '3_1': '#a78bfa', '3_2': '#fb923c',
    };
    return palette[String(c) + '_' + String(m % 2 === 0 ? 1 : 2)] ?? '#94a3b8';
}

export default function MassSpecSimulator() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animRef = useRef<number>(0);
    const particlesRef = useRef<Particle[]>([]);
    const lastFireRef = useRef<number>(0);
    const detectedRef = useRef<{ mz: number; color: string }[]>([]);
    const [isIntersecting, setIsIntersecting] = useState(true);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
        }, { threshold: 0.1 });

        observer.observe(canvas);
        return () => observer.disconnect();
    }, []);

    const [mass, setMass] = useState(40);
    const [charge, setCharge] = useState(1);
    const [fieldStrength, setFieldStrength] = useState(50);
    const [isRunning, setIsRunning] = useState(true);
    const [detectedMz, setDetectedMz] = useState<{ mz: number; color: string }[]>([]);
    const [activeStage, setActiveStage] = useState<string>('vaporisation');

    const massRef = useRef(mass);
    const chargeRef = useRef(charge);
    const fieldRef = useRef(fieldStrength);
    const runningRef = useRef(isRunning);

    useEffect(() => { massRef.current = mass; }, [mass]);
    useEffect(() => { chargeRef.current = charge; }, [charge]);
    useEffect(() => { fieldRef.current = fieldStrength; }, [fieldStrength]);
    useEffect(() => { runningRef.current = isRunning; }, [isRunning]);

    const spawnParticle = useCallback((canvas: HTMLCanvasElement) => {
        const m = massRef.current;
        const c = chargeRef.current;
        const color = getParticleColor(m, c);
        particlesRef.current.push({
            x: 44,
            y: 100 + (Math.random() - 0.5) * 3,
            vx: 2.6,
            vy: 0,
            mass: m,
            charge: c,
            color,
            trail: [],
            detected: false,
            detectedY: 0,
        });
    }, []);

    const draw = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const dpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;
        const rect = canvas.getBoundingClientRect();
        const cssW = rect.width || 530;
        const cssH = rect.height || 200;

        const targetWidth = Math.round(cssW * dpr);
        const targetHeight = Math.round(cssH * dpr);

        if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
            canvas.width = targetWidth;
            canvas.height = targetHeight;
        }

        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(targetWidth / 530, targetHeight / 200);

        const W = 530;
        const H = 200;
        const CY = H / 2;
        const DEFLECT_START = 220;
        const DEFLECT_END = 500;

        ctx.fillStyle = '#070f1e';
        ctx.fillRect(0, 0, W, H);
        ctx.strokeStyle = 'rgba(30,41,59,0.4)';
        ctx.lineWidth = 1;
        for (let x = 0; x < W; x += 40) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
        for (let y = 0; y < H; y += 40) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }

        const zoneData = [
            { x: 0, w: 58, color: '#f59e0b', label: 'Vaporise' },
            { x: 58, w: 58, color: '#8b5cf6', label: 'Ionise' },
            { x: 116, w: 104, color: '#3b82f6', label: 'Accelerate' },
            { x: 220, w: 280, color: '#10b981', label: 'Deflect (B)' },
            { x: 500, w: W - 500, color: '#ef4444', label: 'Detect' },
        ];
        zoneData.forEach((z, i) => {
            ctx.fillStyle = z.color + '0a'; ctx.fillRect(z.x, 0, z.w, H);
            ctx.strokeStyle = z.color + '22'; ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(z.x + z.w, 0); ctx.lineTo(z.x + z.w, H); ctx.stroke();
            ctx.fillStyle = z.color + 'cc'; ctx.font = 'bold 8px system-ui'; ctx.textAlign = 'center';
            ctx.fillText(String.fromCharCode(0x2460 + i) + ' ' + z.label, z.x + z.w / 2, 13);
        });

        // Sample reservoir
        ctx.fillStyle = '#1e293b'; ctx.strokeStyle = '#475569'; ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.roundRect(4, CY - 20, 38, 40, 5); ctx.fill(); ctx.stroke();
        ctx.fillStyle = '#94a3b8'; ctx.font = '7px system-ui'; ctx.textAlign = 'center';
        ctx.fillText('SAMPLE', 23, CY - 7);
        ctx.fillStyle = '#f59e0b'; ctx.font = '12px system-ui'; ctx.fillText('M', 23, CY + 7);

        // Electron gun
        ctx.fillStyle = '#1e1040'; ctx.strokeStyle = '#7c3aed'; ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.roundRect(61, CY - 26, 11, 20, 3); ctx.fill(); ctx.stroke();
        ctx.beginPath(); ctx.roundRect(61, CY + 6, 11, 20, 3); ctx.fill(); ctx.stroke();
        ctx.fillStyle = '#c4b5fd'; ctx.font = 'bold 9px system-ui'; ctx.textAlign = 'center';
        ctx.fillText('e\u207b', 67, CY + 2);

        // Accelerating plates
        for (let i = 0; i < 4; i++) {
            const px = 120 + i * 23;
            ctx.fillStyle = '#0c2240'; ctx.strokeStyle = '#3b82f6'; ctx.lineWidth = 2;
            ctx.beginPath(); ctx.roundRect(px, CY - 30, 7, 60, 2); ctx.fill(); ctx.stroke();
            ctx.fillStyle = '#93c5fd'; ctx.font = 'bold 9px system-ui'; ctx.textAlign = 'center';
            ctx.fillText(i % 2 === 0 ? '+' : '\u2212', px + 3.5, CY + 4);
        }

        // B-field dots
        for (let bx = 238; bx < DEFLECT_END - 10; bx += 28) {
            for (let by = 22; by < H - 14; by += 28) {
                ctx.beginPath(); ctx.arc(bx, by, 2.5, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(16,185,129,0.22)'; ctx.fill();
                ctx.strokeStyle = 'rgba(16,185,129,0.4)'; ctx.lineWidth = 0.8; ctx.stroke();
                ctx.beginPath(); ctx.arc(bx, by, 0.9, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(16,185,129,0.7)'; ctx.fill();
            }
        }
        ctx.fillStyle = '#34d399'; ctx.font = 'bold 7.5px system-ui'; ctx.textAlign = 'center';
        ctx.fillText('B field \u2299 (out of page)', 360, H - 7);

        // Detector wall
        ctx.fillStyle = '#1a0a0a'; ctx.strokeStyle = '#ef4444'; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.roundRect(501, 22, 12, H - 44, 3); ctx.fill(); ctx.stroke();
        ctx.fillStyle = '#fca5a5'; ctx.font = 'bold 7.5px system-ui'; ctx.textAlign = 'center';
        ctx.fillText('DET', 507, H - 26);

        // Guide line
        ctx.setLineDash([4, 5]); ctx.strokeStyle = 'rgba(241,245,249,0.1)'; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(44, CY); ctx.lineTo(DEFLECT_START, CY); ctx.stroke();
        ctx.setLineDash([]);

        // Particle physics
        particlesRef.current = particlesRef.current.filter(p => p.x < W + 10 && p.y > -10 && p.y < H + 10);
        particlesRef.current.forEach(p => {
            if (!runningRef.current) return;
            if (p.x >= DEFLECT_START && p.x <= DEFLECT_END && !p.detected) {
                const B = fieldRef.current / 50;
                const mz = p.mass / p.charge;
                p.vy += (p.charge * B) / (mz * 0.38) * 0.58;
            }
            p.trail.push({ x: p.x, y: p.y });
            if (p.trail.length > 90) p.trail.shift();
            p.x += p.vx; p.y += p.vy;
            if (p.x >= DEFLECT_END && !p.detected) {
                p.detected = true; p.detectedY = p.y;
                const mz = Math.round((p.mass / p.charge) * 10) / 10;
                if (!detectedRef.current.find(d => Math.abs(d.mz - mz) < 0.5)) {
                    detectedRef.current = [...detectedRef.current, { mz, color: p.color }].slice(-8);
                    setDetectedMz([...detectedRef.current]);
                }
            }
        });

        // Draw trails + glow
        particlesRef.current.forEach(p => {
            if (p.trail.length < 2) return;
            ctx.beginPath(); ctx.moveTo(p.trail[0].x, p.trail[0].y);
            for (let i = 1; i < p.trail.length; i++) ctx.lineTo(p.trail[i].x, p.trail[i].y);
            ctx.strokeStyle = p.color + '55'; ctx.lineWidth = 1.8; ctx.stroke();
            const tip = p.trail[p.trail.length - 1];
            const gr = ctx.createRadialGradient(tip.x, tip.y, 0, tip.x, tip.y, 7);
            gr.addColorStop(0, p.color + 'bb'); gr.addColorStop(1, 'transparent');
            ctx.fillStyle = gr; ctx.beginPath(); ctx.arc(tip.x, tip.y, 7, 0, Math.PI * 2); ctx.fill();
        });

        // Draw particle heads
        particlesRef.current.filter(p => !p.detected).forEach(p => {
            const gr = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 5);
            gr.addColorStop(0, '#ffffff'); gr.addColorStop(0.4, p.color); gr.addColorStop(1, p.color + '00');
            ctx.fillStyle = gr; ctx.beginPath(); ctx.arc(p.x, p.y, 5, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#f8fafc'; ctx.font = 'bold 7px system-ui'; ctx.textAlign = 'center';
            ctx.fillText(String(p.mass) + '/' + String(p.charge), p.x, p.y - 9);
        });

        // Detection sparks
        particlesRef.current.filter(p => p.detected && p.x < DEFLECT_END + 35).forEach(p => {
            ctx.fillStyle = '#fbbf24'; ctx.font = '10px system-ui'; ctx.textAlign = 'left';
            ctx.fillText('\u2736', DEFLECT_END + 2, p.detectedY + 4);
        });
    }, []);
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const loop = (ts: number) => {
            if (!isIntersecting) return;
            if (runningRef.current && ts - lastFireRef.current > 950) {
                spawnParticle(canvas); lastFireRef.current = ts;
            }
            draw();
            animRef.current = requestAnimationFrame(loop);
        };
        if (isIntersecting) {
            animRef.current = requestAnimationFrame(loop);
        }
        return () => cancelAnimationFrame(animRef.current);
    }, [draw, spawnParticle, isIntersecting]);

    useEffect(() => {
        const stages = Object.keys(STAGE_COLORS);
        let i = 0;
        const iv = setInterval(() => { setActiveStage(stages[i++ % stages.length]); }, 1800);
        return () => clearInterval(iv);
    }, []);

    const handleReset = () => {
        particlesRef.current = [];
        detectedRef.current = [];
        setDetectedMz([]);
    };

    const mzValue = (mass / charge).toFixed(1);
    const deflPct = Math.min(100, (100 / (mass / charge)) * fieldStrength / 1.5);

    return (
        <div className="flex-shrink-0 rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-[#050d1e] to-[#071525] overflow-hidden shadow-2xl shadow-emerald-900/20">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/5 bg-white/[0.02]">
                <div className="flex items-center gap-3">
                    <span className="text-xl">🔬</span>
                    <div>
                        <h3 className="text-sm font-bold text-white">Mass Spectrometer — Interactive Simulation</h3>
                        <p className="text-xs text-slate-500">Adjust mass, charge and field strength to observe ion deflection</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <button onClick={handleReset} className="px-3 py-1 text-xs rounded-lg bg-slate-700/50 hover:bg-slate-600/60 text-slate-300 transition-colors">Reset</button>
                    <button onClick={() => setIsRunning(r => !r)} className={`px-3 py-1 text-xs rounded-lg font-medium transition-colors ${isRunning ? 'bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300' : 'bg-amber-500/20 hover:bg-amber-500/30 text-amber-300'}`}>
                        {isRunning ? '\u23F8 Pause' : '\u25B6 Resume'}
                    </button>
                </div>
            </div>

            {/* Stage pills */}
            <div className="flex gap-1.5 px-5 pt-3 pb-1 flex-wrap">
                {Object.entries(STAGE_COLORS).map(([stage, color]) => (
                    <div key={stage} className="px-2.5 py-0.5 rounded-full text-xs font-medium transition-all duration-500"
                        style={{ backgroundColor: activeStage === stage ? color + '28' : color + '0d', color, border: `1px solid ${activeStage === stage ? color + '70' : color + '1a'}`, transform: activeStage === stage ? 'scale(1.06)' : 'scale(1)' }}>
                        {stage.charAt(0).toUpperCase() + stage.slice(1)}
                    </div>
                ))}
            </div>

            {/* Body */}
            <div className="flex flex-col lg:flex-row">
                <div className="flex-1 p-3">
                    <canvas ref={canvasRef} className="w-full rounded-xl border border-white/5" style={{ height: '200px' }} />
                </div>

                {/* Controls panel */}
                <div className="lg:w-56 p-4 border-t lg:border-t-0 lg:border-l border-white/5 flex flex-col gap-4">

                    {/* m/z display */}
                    <div className="text-center rounded-xl bg-white/[0.03] border border-white/5 p-3">
                        <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Current m/z ratio</p>
                        <p className="text-3xl font-bold text-white font-mono">{mzValue}</p>
                        <p className="text-[10px] text-slate-500 mt-0.5">{mass} u &divide; {charge}+</p>
                        <div className="mt-2 h-1.5 rounded-full" style={{ backgroundColor: getParticleColor(mass, charge) + '80' }} />
                    </div>

                    {/* Mass slider */}
                    <div>
                        <div className="flex justify-between text-xs text-slate-400 mb-1.5">
                            <span>Mass <span className="text-slate-300 font-medium">(m)</span></span>
                            <span className="font-mono text-slate-200">{mass} u</span>
                        </div>
                        <input type="range" min={20} max={100} step={2} value={mass}
                            onChange={e => { setMass(+e.target.value); handleReset(); }}
                            className="w-full accent-blue-500 cursor-pointer" />
                        <div className="flex justify-between text-[10px] text-slate-600 mt-0.5"><span>20</span><span>100</span></div>
                    </div>

                    {/* Charge */}
                    <div>
                        <p className="text-xs text-slate-400 mb-2">Charge <span className="text-slate-300 font-medium">(z)</span></p>
                        <div className="flex gap-2">
                            {[1, 2, 3].map(c => (
                                <button key={c} onClick={() => { setCharge(c); handleReset(); }}
                                    className={`flex-1 py-1.5 rounded-lg text-sm font-bold transition-all ${charge === c ? 'bg-violet-500/30 border border-violet-400/60 text-violet-200' : 'bg-white/[0.04] border border-white/5 text-slate-400 hover:bg-white/[0.08]'}`}>
                                    {c}+
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Field strength */}
                    <div>
                        <div className="flex justify-between text-xs text-slate-400 mb-1.5">
                            <span>Field <span className="text-slate-300 font-medium">(B)</span></span>
                            <span className="font-mono text-slate-200">{fieldStrength}%</span>
                        </div>
                        <input type="range" min={20} max={100} step={5} value={fieldStrength}
                            onChange={e => setFieldStrength(+e.target.value)}
                            className="w-full accent-emerald-500 cursor-pointer" />
                        <div className="flex justify-between text-[10px] text-slate-600 mt-0.5"><span>Weak</span><span>Strong</span></div>
                    </div>

                    {/* Deflection meter */}
                    <div className="rounded-lg bg-white/[0.03] border border-white/5 p-2.5">
                        <p className="text-[10px] text-slate-500 mb-2 uppercase tracking-wider">Deflection</p>
                        <div className="flex items-center gap-2">
                            <div className="flex-1 h-2 rounded-full bg-white/5 overflow-hidden">
                                <div className="h-full rounded-full transition-all duration-300"
                                    style={{ width: `${deflPct}%`, backgroundColor: getParticleColor(mass, charge) }} />
                            </div>
                            <span className="text-[10px] font-mono text-slate-400">{deflPct.toFixed(0)}%</span>
                        </div>
                        <p className="text-[10px] text-slate-600 mt-1">Deflection &prop; z&middot;B / m</p>
                    </div>

                    {/* Detected peaks */}
                    {detectedMz.length > 0 && (
                        <div className="rounded-lg bg-white/[0.03] border border-white/5 p-2.5">
                            <p className="text-[10px] text-slate-500 mb-1.5 uppercase tracking-wider">Detected Peaks</p>
                            <div className="flex flex-col gap-1">
                                {detectedMz.map((d, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: d.color }} />
                                        <span className="text-xs font-mono text-slate-300">m/z = {d.mz}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Insight bar */}
            <div className="px-5 pb-4">
                <div className="rounded-xl bg-blue-500/5 border border-blue-500/15 px-4 py-2.5">
                    <p className="text-xs text-blue-300/80">
                        💡 <span className="font-medium">Key Observation:</span> Ions with a <strong>smaller m/z</strong> deflect more sharply downward.
                        Increasing <strong>field (B)</strong> increases deflection for all ions, but heavier or lower-charge ions always deflect less.
                        The detector position maps directly to the <strong>m/z peak</strong> on a mass spectrum.
                    </p>
                </div>
            </div>
        </div>
    );
}
