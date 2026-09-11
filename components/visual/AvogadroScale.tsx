'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Scale, Info } from 'lucide-react';

interface Substance {
    name: string;
    formula: string;
    mr: number;
    color: string;
    state: 'solid' | 'gas' | 'liquid';
}

const substances: Substance[] = [
    { name: 'Helium', formula: 'He', mr: 4.0, color: '#60a5fa', state: 'gas' },
    { name: 'Carbon', formula: 'C', mr: 12.0, color: '#94a3b8', state: 'solid' },
    { name: 'Water', formula: 'H₂O', mr: 18.0, color: '#38bdf8', state: 'liquid' },
    { name: 'Oxygen gas', formula: 'O₂', mr: 32.0, color: '#f87171', state: 'gas' },
    { name: 'Carbon Dioxide', formula: 'CO₂', mr: 44.0, color: '#a78bfa', state: 'gas' }
];

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    originalX: number; // for solid lattice vibration
    originalY: number; // for solid lattice vibration
}

function JarSimulator({ substance, moles }: { substance: Substance; moles: number }) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const particlesRef = useRef<Particle[]>([]);
    const requestRef = useRef<number | null>(null);
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

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const width = canvas.width;
        const height = canvas.height;
        const count = Math.min(Math.floor(moles * 20), 100);
        const tempParticles: Particle[] = [];

        if (substance.state === 'solid') {
            // Arrange solid particles (Carbon) in a structured crystal lattice at the bottom
            const cols = 8;
            const spacing = 12;
            const startX = (width - (cols - 1) * spacing) / 2;
            
            for (let i = 0; i < count; i++) {
                const row = Math.floor(i / cols);
                const col = i % cols;
                const px = startX + col * spacing;
                const py = height - 10 - row * spacing;

                tempParticles.push({
                    x: px,
                    y: py,
                    vx: 0,
                    vy: 0,
                    originalX: px,
                    originalY: py
                });
            }
        } else if (substance.state === 'liquid') {
            // Liquid particles: kept at the bottom portion, flowing/sliding slowly
            const speedMagnitude = 0.6;
            for (let i = 0; i < count; i++) {
                const angle = Math.random() * Math.PI * 2;
                tempParticles.push({
                    x: 15 + Math.random() * (width - 30),
                    y: height - 10 - Math.random() * 30,
                    vx: Math.cos(angle) * speedMagnitude,
                    vy: Math.sin(angle) * speedMagnitude,
                    originalX: 0,
                    originalY: 0
                });
            }
        } else {
            // Gas particles: Random positions with velocities inversely proportional to square root of molar mass (Graham's Law)
            const speedMagnitude = 3.5 / Math.sqrt(substance.mr); // Helium is fast, CO2 is slow

            for (let i = 0; i < count; i++) {
                const angle = Math.random() * Math.PI * 2;
                tempParticles.push({
                    x: 15 + Math.random() * (width - 30),
                    y: 20 + Math.random() * (height - 35),
                    vx: Math.cos(angle) * speedMagnitude,
                    vy: Math.sin(angle) * speedMagnitude,
                    originalX: 0,
                    originalY: 0
                });
            }
        }

        particlesRef.current = tempParticles;
    }, [substance, moles]);

    // Animation Loop
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        const render = () => {
            if (!isIntersecting) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const width = canvas.width;
            const height = canvas.height;

            // Draw jar boundaries visually inside the canvas
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(10, 15);
            ctx.lineTo(10, height - 5);
            ctx.lineTo(width - 10, height - 5);
            ctx.lineTo(width - 10, 15);
            ctx.stroke();

            // Update and draw particles
            particlesRef.current.forEach((p) => {
                if (substance.state === 'solid') {
                    // Solid vibration: Oscillate slightly around original coordinates
                    const vibrationAmplitude = 1.0;
                    p.x = p.originalX + (Math.random() - 0.5) * vibrationAmplitude;
                    p.y = p.originalY + (Math.random() - 0.5) * vibrationAmplitude;
                } else if (substance.state === 'liquid') {
                    // Liquid physics: gravity, viscosity, higher thermal jitter, and packing constraints with a wave/sloshing surface
                    p.vx += (Math.random() - 0.5) * 0.35;
                    p.vy += (Math.random() - 0.5) * 0.35 + 0.15; // gravity bias
                    
                    p.x += p.vx;
                    p.y += p.vy;

                    // Apply viscosity / damping
                    p.vx *= 0.94;
                    p.vy *= 0.94;

                    // Bounce left/right
                    if (p.x - 3.5 < 10) {
                        p.x = 10 + 3.5;
                        p.vx = -p.vx * 0.4;
                    } else if (p.x + 3.5 > width - 10) {
                        p.x = width - 10 - 3.5;
                        p.vx = -p.vx * 0.4;
                    }

                    // Bounce bottom
                    if (p.y + 3.5 > height - 5) {
                        p.y = height - 5 - 3.5;
                        p.vy = -p.vy * 0.2;
                    }

                    // Dynamic wave surface level constraint (rises with moles, ripples like a wave)
                    const time = Date.now() / 200;
                    const wave = Math.sin((p.x / width) * Math.PI * 2 + time) * 3.5;
                    const maxLiquidHeight = height - 10 - Math.ceil(particlesRef.current.length / 2.8) + wave;
                    if (p.y - 3.5 < maxLiquidHeight) {
                        p.y = maxLiquidHeight + 3.5;
                        p.vy = Math.abs(p.vy) * 0.4; // push downwards
                    }
                } else {
                    // Gas Brownian motion: move and bounce off boundaries
                    p.x += p.vx;
                    p.y += p.vy;

                    // Bounce left/right
                    if (p.x - 3.5 < 10) {
                        p.x = 10 + 3.5;
                        p.vx = -p.vx;
                    } else if (p.x + 3.5 > width - 10) {
                        p.x = width - 10 - 3.5;
                        p.vx = -p.vx;
                    }

                    // Bounce top/bottom
                    if (p.y - 3.5 < 15) {
                        p.y = 15 + 3.5;
                        p.vy = -p.vy;
                    } else if (p.y + 3.5 > height - 5) {
                        p.y = height - 5 - 3.5;
                        p.vy = -p.vy;
                    }
                }

                // Render particle
                ctx.beginPath();
                ctx.arc(p.x, p.y, 3.5, 0, Math.PI * 2);
                ctx.fillStyle = substance.color;
                ctx.fill();
            });

            requestRef.current = requestAnimationFrame(render);
        };

        requestRef.current = requestAnimationFrame(render);
        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, [substance, isIntersecting]);

    return (
        <canvas
            ref={canvasRef}
            width={120}
            height={130}
            className="w-full h-full block bg-white/[0.01]"
        />
    );
}

export default function AvogadroScale() {
    const [substanceA, setSubstanceA] = useState<Substance>(substances[0]);
    const [substanceB, setSubstanceB] = useState<Substance>(substances[3]);
    const [molesA, setMolesA] = useState<number>(1.0);
    const [molesB, setMolesB] = useState<number>(1.0);

    // Calculate physical quantities
    const massA = molesA * substanceA.mr;
    const massB = molesB * substanceB.mr;
    
    const particlesA = molesA * 6.02; // In units of 10^23
    const particlesB = molesB * 6.02;

    return (
        <div className="bg-[#0a0a1f]/40 border border-white/5 rounded-2xl p-5 flex flex-col gap-6 flex-shrink-0 backdrop-blur-md">
            <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <Scale size={14} className="text-indigo-400" />
                    Avogadro's Scale & Particle Counter
                </h4>
                <div className="text-[10px] text-slate-500 flex items-center gap-1">
                    <Info size={10} />
                    Compare different masses with the same particle count.
                </div>
            </div>

            {/* Scale Comparison Container */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* Panel A */}
                <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 flex flex-col gap-4">
                    <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-bold text-indigo-300">Substance A</span>
                        <select
                            value={substanceA.formula}
                            onChange={(e) => setSubstanceA(substances.find(s => s.formula === e.target.value) || substances[0])}
                            className="bg-slate-900 border border-white/10 text-white rounded-lg px-2.5 py-1 text-xs focus:outline-none focus:border-indigo-500 cursor-pointer max-w-[130px] sm:max-w-[160px] truncate"
                        >
                            {substances.map(s => (
                                <option key={s.formula} value={s.formula}>{s.name} ({s.formula})</option>
                            ))}
                        </select>
                    </div>

                    {/* Digital Scale Visualization */}
                    <div className="flex flex-col items-center py-4 bg-slate-950/40 rounded-xl border border-white/5 relative">
                        {/* The Jar */}
                        <div className="w-24 h-28 border-2 border-white/15 rounded-b-2xl rounded-t-lg relative bg-white/[0.01] overflow-hidden mb-2">
                            <div className="absolute top-0 inset-x-0 h-3 bg-white/10 border-b border-white/5 flex items-center justify-center text-[7px] text-slate-400 uppercase tracking-widest font-bold z-10">
                                Jar A
                            </div>
                            <JarSimulator substance={substanceA} moles={molesA} />
                        </div>

                        {/* Scale Base */}
                        <div className="w-36 h-2 bg-indigo-500/80 rounded-t-md shadow-md" />
                        <div className="w-24 h-8 bg-slate-900 border border-white/10 rounded-b-md flex items-center justify-center shadow-inner">
                            <span className="text-xs font-mono font-bold text-emerald-400 tracking-wider">
                                {massA.toFixed(2)} g
                            </span>
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                            <span>Set Moles (n)</span>
                            <span className="text-indigo-400">{molesA.toFixed(2)} mol</span>
                        </div>
                        <input
                            type="range"
                            min="0.1"
                            max="2.0"
                            step="0.1"
                            value={molesA}
                            onChange={(e) => setMolesA(parseFloat(e.target.value))}
                            className="w-full accent-indigo-500 cursor-pointer h-1 bg-white/10 rounded-lg appearance-none"
                        />
                        
                        {/* Stats Readout */}
                        <div className="grid grid-cols-2 gap-2 mt-2">
                            <div className="bg-slate-950/30 rounded-lg p-2 text-center border border-white/5">
                                <div className="text-[8px] text-slate-500 uppercase tracking-wider font-bold">Molar Mass (Mr)</div>
                                <div className="text-xs font-bold text-slate-300">{substanceA.mr.toFixed(1)} g/mol</div>
                            </div>
                            <div className="bg-slate-950/30 rounded-lg p-2 text-center border border-white/5">
                                <div className="text-[8px] text-slate-500 uppercase tracking-wider font-bold">Particles (N)</div>
                                <div className="text-xs font-bold text-indigo-300">{particlesA.toFixed(2)} × 10²³</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Panel B */}
                <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 flex flex-col gap-4">
                    <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-bold text-purple-300">Substance B</span>
                        <select
                            value={substanceB.formula}
                            onChange={(e) => setSubstanceB(substances.find(s => s.formula === e.target.value) || substances[3])}
                            className="bg-slate-900 border border-white/10 text-white rounded-lg px-2.5 py-1 text-xs focus:outline-none focus:border-purple-500 cursor-pointer max-w-[130px] sm:max-w-[160px] truncate"
                        >
                            {substances.map(s => (
                                <option key={s.formula} value={s.formula}>{s.name} ({s.formula})</option>
                            ))}
                        </select>
                    </div>

                    {/* Digital Scale Visualization */}
                    <div className="flex flex-col items-center py-4 bg-slate-950/40 rounded-xl border border-white/5 relative">
                        {/* The Jar */}
                        <div className="w-24 h-28 border-2 border-white/15 rounded-b-2xl rounded-t-lg relative bg-white/[0.01] overflow-hidden mb-2">
                            <div className="absolute top-0 inset-x-0 h-3 bg-white/10 border-b border-white/5 flex items-center justify-center text-[7px] text-slate-400 uppercase tracking-widest font-bold z-10">
                                Jar B
                            </div>
                            <JarSimulator substance={substanceB} moles={molesB} />
                        </div>

                        {/* Scale Base */}
                        <div className="w-36 h-2 bg-purple-500/80 rounded-t-md shadow-md" />
                        <div className="w-24 h-8 bg-slate-900 border border-white/10 rounded-b-md flex items-center justify-center shadow-inner">
                            <span className="text-xs font-mono font-bold text-emerald-400 tracking-wider">
                                {massB.toFixed(2)} g
                            </span>
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                            <span>Set Moles (n)</span>
                            <span className="text-purple-400">{molesB.toFixed(2)} mol</span>
                        </div>
                        <input
                            type="range"
                            min="0.1"
                            max="2.0"
                            step="0.1"
                            value={molesB}
                            onChange={(e) => setMolesB(parseFloat(e.target.value))}
                            className="w-full accent-purple-500 cursor-pointer h-1 bg-white/10 rounded-lg appearance-none"
                        />
                        
                        {/* Stats Readout */}
                        <div className="grid grid-cols-2 gap-2 mt-2">
                            <div className="bg-slate-950/30 rounded-lg p-2 text-center border border-white/5">
                                <div className="text-[8px] text-slate-500 uppercase tracking-wider font-bold">Molar Mass (Mr)</div>
                                <div className="text-xs font-bold text-slate-300">{substanceB.mr.toFixed(1)} g/mol</div>
                            </div>
                            <div className="bg-slate-950/30 rounded-lg p-2 text-center border border-white/5">
                                <div className="text-[8px] text-slate-500 uppercase tracking-wider font-bold">Particles (N)</div>
                                <div className="text-xs font-bold text-purple-300">{particlesB.toFixed(2)} × 10²³</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Avogadro's Concept Insight Callout */}
            <div className="bg-indigo-500/5 border border-indigo-500/10 rounded-xl p-3.5 text-xs text-slate-300 leading-relaxed">
                💡 <span className="font-semibold text-indigo-400">Avogadro's Principle:</span> Notice that if you set both Substance A and Substance B to <span className="text-white font-semibold">1.00 mol</span>, their jars contain the <span className="text-white font-semibold">exact same number of particles</span> (<span className="text-indigo-400 font-mono">6.02 × 10²³</span>), yet their weights on the scales are <span className="text-white font-semibold">vastly different</span> ({massA.toFixed(1)}g vs {massB.toFixed(1)}g) because the mass of each individual particle is different!
            </div>
        </div>
    );
}
