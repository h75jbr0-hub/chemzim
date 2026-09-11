'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Thermometer, Box, Gauge, Users, Layers, Activity, Plus, Minus } from 'lucide-react';

interface Gas {
    name: string;
    molarMass: number;
    color: string;
    radius: number;
}

const GAS_TYPES: Record<string, Gas> = {
    helium: { name: 'Helium (He)', molarMass: 4, color: 'hsl(190, 90%, 55%)', radius: 3 },
    neon: { name: 'Neon (Ne)', molarMass: 20, color: 'hsl(25, 95%, 60%)', radius: 5 },
    argon: { name: 'Argon (Ar)', molarMass: 40, color: 'hsl(275, 85%, 60%)', radius: 7 }
};

interface Molecule {
    x: number;
    y: number;
    vx: number;
    vy: number;
}

interface GasLawSimulatorProps {
    law?: 'boyle' | 'charles' | 'gay-lussac';
}

export default function GasLawSimulator({ law }: GasLawSimulatorProps) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(true);
    
    // Constant mode: 'none' | 'boyle' | 'charles' | 'gay-lussac'
    const [constantMode, setConstantMode] = useState<'none' | 'boyle' | 'charles' | 'gay-lussac'>('none');
    
    // Initialize constant mode from law prop if provided
    useEffect(() => {
        if (law) {
            setConstantMode(law);
        }
    }, [law]);
    
    // Gas type selection
    const [selectedGas, setSelectedGas] = useState<string>('neon');
    const gasInfo = GAS_TYPES[selectedGas];

    // Physical state variables
    const [volume, setVolume] = useState(100); // % of container height (50% to 150%)
    const [temperature, setTemperature] = useState(300); // Kelvin (150K to 600K)
    const [moles, setMoles] = useState(4); // Amount (1 to 20 particles)
    const [pressure, setPressure] = useState(1.0); // atm
    const [collisionRate, setCollisionRate] = useState(0);
    const collisionCountRef = useRef(0);
    const wallGlowRef = useRef({ left: 0, right: 0, top: 0, bottom: 0 });
    const [isIntersecting, setIsIntersecting] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setCollisionRate(collisionCountRef.current * 2);
            collisionCountRef.current = 0;
        }, 500);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
        }, { threshold: 0.1 });

        observer.observe(canvas);
        return () => observer.disconnect();
    }, []);

    const requestRef = useRef<number | null>(null);
    const moleculesRef = useRef<Molecule[]>([]);
    
    // Real Gas Constant in dm³·atm·mol⁻¹·K⁻¹
    const R = 0.08206;

    // Handle initial state locks when constant mode changes
    useEffect(() => {
        if (constantMode === 'boyle') {
            setTemperature(300);
            setVolume(100);
        } else if (constantMode === 'charles') {
            setTemperature(300);
            setVolume(100);
        } else if (constantMode === 'gay-lussac') {
            setVolume(100);
            setTemperature(300);
        }
    }, [constantMode]);

    // Calculate dependent variables based on physical laws
    useEffect(() => {
        if (constantMode === 'charles') {
            // Charles's Law: Constant P = 1.0 atm. Volume changes with T and moles: V = nRT/P
            const calcVolume = (moles * R * temperature) / 1.0;
            // Clamp Volume between 10 and 150 for rendering bounds
            setVolume(Math.min(150, Math.max(10, Number(calcVolume.toFixed(1)))));
            setPressure(1.0);
        } else {
            // General case / Boyle's / Gay-Lussac's: Calculate Pressure P = nRT/V
            const calcPressure = (moles * R * temperature) / volume;
            setPressure(Number(calcPressure.toFixed(2)));
        }
    }, [volume, temperature, moles, constantMode]);

    // Calculate density: d = (moles * molarMass) / volume
    const density = Number(((moles * gasInfo.molarMass) / volume).toFixed(2));

    // Initialize or adjust molecules array when moles count changes
    useEffect(() => {
        const currentCount = moleculesRef.current.length;
        const canvas = canvasRef.current;
        if (!canvas) return;

        const width = canvas.width;
        // Current container height boundary
        const containerHeight = (volume / 200) * canvas.height;
        const topWall = canvas.height - containerHeight;

        // Base speed is scaled by temperature and inversely proportional to square root of Molar Mass
        const baseSpeed = Math.sqrt(temperature / gasInfo.molarMass) * 0.8;

        const targetCount = moles * 6;

        if (currentCount < targetCount) {
            // Add new molecules
            for (let i = currentCount; i < targetCount; i++) {
                const angle = Math.random() * Math.PI * 2;
                moleculesRef.current.push({
                    x: Math.random() * (width - 20) + 10,
                    y: Math.random() * (containerHeight - 20) + topWall + 10,
                    vx: Math.cos(angle) * baseSpeed,
                    vy: Math.sin(angle) * baseSpeed
                });
            }
        } else if (currentCount > targetCount) {
            // Shrink molecules array
            moleculesRef.current = moleculesRef.current.slice(0, targetCount);
        }
    }, [moles, selectedGas]);

    // Update particle velocities when temperature or gas type changes
    useEffect(() => {
        const baseSpeed = Math.sqrt(temperature / gasInfo.molarMass) * 0.8;
        moleculesRef.current.forEach((m) => {
            const currentSpeed = Math.sqrt(m.vx * m.vx + m.vy * m.vy);
            if (currentSpeed > 0) {
                // Rescale to match new physical parameters
                m.vx = (m.vx / currentSpeed) * baseSpeed;
                m.vy = (m.vy / currentSpeed) * baseSpeed;
            } else {
                const angle = Math.random() * Math.PI * 2;
                m.vx = Math.cos(angle) * baseSpeed;
                m.vy = Math.sin(angle) * baseSpeed;
            }
        });
    }, [temperature, selectedGas]);

    // Animation Loop
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const updateMolecules = () => {
            if (!isPlaying) return;

            const width = canvas.width;
            const containerHeight = (volume / 200) * canvas.height;
            const topWall = canvas.height - containerHeight;
            const radius = gasInfo.radius;

            moleculesRef.current.forEach((m) => {
                m.x += m.vx;
                m.y += m.vy;

                // Horizontal walls collision
                if (m.x - radius < 0) {
                    m.x = radius;
                    m.vx = -m.vx;
                    collisionCountRef.current++;
                    wallGlowRef.current.left = 1.0;
                } else if (m.x + radius > width) {
                    m.x = width - radius;
                    m.vx = -m.vx;
                    collisionCountRef.current++;
                    wallGlowRef.current.right = 1.0;
                }

                // Vertical walls collision
                if (m.y - radius < topWall) {
                    m.y = topWall + radius;
                    m.vy = -m.vy;
                    collisionCountRef.current++;
                    wallGlowRef.current.top = 1.0;
                } else if (m.y + radius > canvas.height) {
                    m.y = canvas.height - radius;
                    m.vy = -m.vy;
                    collisionCountRef.current++;
                    wallGlowRef.current.bottom = 1.0;
                }
            });
        };
        const render = () => {
            if (!isIntersecting) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const containerHeight = (volume / 200) * canvas.height;
            const topWall = canvas.height - containerHeight;

            // Draw Background Container with Thermal color scheme
            const tempPercent = (temperature - 150) / (600 - 150); // 0 to 1
            const baseGlow = ctx.createLinearGradient(0, canvas.height, 0, topWall);
            
            // Colder = blue, Hotter = orange/red tone
            const red = Math.round(10 + tempPercent * 80);
            const green = Math.round(15 + tempPercent * 10);
            const blue = Math.round(45 - tempPercent * 30);
            baseGlow.addColorStop(0, `rgba(${red}, ${green}, ${blue}, 0.5)`);
            baseGlow.addColorStop(1, 'rgba(10, 10, 31, 0.75)');
            ctx.fillStyle = baseGlow;
            ctx.fillRect(0, topWall, canvas.width, containerHeight);
            
            // Draw Glowing boundaries on collision using the selected gas color
            ctx.lineWidth = 3;
            if (wallGlowRef.current.left > 0.05) {
                ctx.strokeStyle = `rgba(99, 102, 241, ${wallGlowRef.current.left * 0.4})`;
                ctx.beginPath();
                ctx.moveTo(0, topWall);
                ctx.lineTo(0, canvas.height);
                ctx.stroke();
            }
            if (wallGlowRef.current.right > 0.05) {
                ctx.strokeStyle = `rgba(99, 102, 241, ${wallGlowRef.current.right * 0.4})`;
                ctx.beginPath();
                ctx.moveTo(canvas.width, topWall);
                ctx.lineTo(canvas.width, canvas.height);
                ctx.stroke();
            }
            if (wallGlowRef.current.top > 0.05) {
                ctx.strokeStyle = `rgba(99, 102, 241, ${wallGlowRef.current.top * 0.4})`;
                ctx.beginPath();
                ctx.moveTo(0, topWall);
                ctx.lineTo(canvas.width, topWall);
                ctx.stroke();
            }
            if (wallGlowRef.current.bottom > 0.05) {
                ctx.strokeStyle = `rgba(99, 102, 241, ${wallGlowRef.current.bottom * 0.4})`;
                ctx.beginPath();
                ctx.moveTo(0, canvas.height);
                ctx.lineTo(canvas.width, canvas.height);
                ctx.stroke();
            }

            // Draw Container Border
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
            ctx.lineWidth = 2;
            ctx.strokeRect(0, topWall, canvas.width, containerHeight);

            // Draw Piston (represents volume limit)
            ctx.fillStyle = 'rgba(99, 102, 241, 0.8)';
            ctx.fillRect(0, topWall - 6, canvas.width, 6);
            ctx.fillStyle = 'rgba(99, 102, 241, 0.3)';
            ctx.fillRect(canvas.width / 2 - 10, 0, 20, topWall);

            // Draw molecules
            moleculesRef.current.forEach((m) => {
                ctx.beginPath();
                ctx.arc(m.x, m.y, gasInfo.radius, 0, Math.PI * 2);
                ctx.fillStyle = gasInfo.color;
                ctx.fill();
                
                // Add minor glow matching gas color
                ctx.shadowColor = gasInfo.color;
                ctx.shadowBlur = 4;
                ctx.beginPath();
                ctx.arc(m.x, m.y, gasInfo.radius, 0, Math.PI * 2);
                ctx.shadowBlur = 0; // reset
            });

            updateMolecules();

            // Decay wall glows
            wallGlowRef.current.left *= 0.85;
            wallGlowRef.current.right *= 0.85;
            wallGlowRef.current.top *= 0.85;
            wallGlowRef.current.bottom *= 0.85;

            requestRef.current = requestAnimationFrame(render);
        };

        requestRef.current = requestAnimationFrame(render);
        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, [isPlaying, volume, selectedGas, temperature, isIntersecting]);

    const handlePressureChange = (newPressurePa: number) => {
        if (constantMode === 'charles') return;
        const newPressureAtm = newPressurePa / 101325;
        
        if (constantMode === 'gay-lussac') {
            const newT = (newPressureAtm * volume) / (moles * R);
            setTemperature(Math.min(600, Math.max(150, Math.round(newT))));
        } else {
            const newV = (moles * R * temperature) / newPressureAtm;
            setVolume(Math.min(150, Math.max(10, Math.round(newV))));
        }
    };

    const handleReset = () => {
        setVolume(100);
        setTemperature(300);
        setMoles(4);
        setConstantMode('none');
        setSelectedGas('neon');
    };

    return (
        <div className="bg-[#0a0a1f]/40 border border-white/5 rounded-2xl p-5 flex flex-col lg:flex-row gap-6 flex-shrink-0 backdrop-blur-md">
            {/* Simulation Canvas Container */}
            <div className="flex-1 flex flex-col items-center gap-3">
                <div className="w-full flex items-center justify-between">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                        Ideal Gas Law Simulator (pV = nRT)
                    </h4>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setIsPlaying(!isPlaying)}
                            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors cursor-pointer"
                        >
                            {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                        </button>
                        <button
                            onClick={handleReset}
                            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors cursor-pointer"
                        >
                            <RotateCcw size={14} />
                        </button>
                    </div>
                </div>

                <div className="relative w-full aspect-[4/3] max-w-[340px] bg-slate-950/80 rounded-2xl overflow-hidden border border-white/10 flex items-end">
                    <canvas
                        ref={canvasRef}
                        width={340}
                        height={255}
                        className="w-full h-full block"
                    />
                    
                    {/* Live stats overlay */}
                    <div className="absolute top-3 left-3 bg-slate-950/85 border border-white/10 px-2 py-1 rounded-lg flex items-center gap-1.5 shadow-lg backdrop-blur-sm pointer-events-none">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span className="text-[10px] font-bold text-slate-300">Collisions:</span>
                        <span className="text-[10px] font-mono font-bold text-emerald-400">{collisionRate} / s</span>
                    </div>
                </div>

                {/* Educational Active Law Explanation */}
                <div className="w-full max-w-[340px] bg-white/[0.02] border border-white/5 rounded-xl p-3 flex flex-col gap-1.5 mt-1">
                    <div className="flex justify-between items-center">
                        <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider">
                            {constantMode === 'none' && 'Ideal Gas Law'}
                            {constantMode === 'boyle' && "Boyle's Law"}
                            {constantMode === 'charles' && "Charles's Law"}
                            {constantMode === 'gay-lussac' && "Gay-Lussac's Law"}
                        </span>
                        <span className="text-[10px] font-mono font-bold text-slate-300 bg-slate-950/50 px-1.5 py-0.5 rounded border border-white/5">
                            {constantMode === 'none' && 'pV = nRT'}
                            {constantMode === 'boyle' && 'p₁V₁ = p₂V₂'}
                            {constantMode === 'charles' && 'V₁/T₁ = V₂/T₂'}
                            {constantMode === 'gay-lussac' && 'p₁/T₁ = p₂/T₂'}
                        </span>
                    </div>
                    <p className="text-[10px] text-slate-400 leading-normal">
                        {constantMode === 'none' && 'All parameters are fully variable. Relates pressure (p), volume (V), amount (n), and temperature (T).'}
                        {constantMode === 'boyle' && 'Constant T and n. As volume decreases, gas particles collide with walls more frequently, increasing pressure.'}
                        {constantMode === 'charles' && 'Constant p and n. Increasing temperature speeds up particles; volume must expand to maintain constant pressure.'}
                        {constantMode === 'gay-lussac' && 'Constant V and n. Heating the gas speeds up particles, causing more frequent and energetic wall collisions.'}
                    </p>
                </div>
            </div>

            {/* Simulation Controls & Dials */}
            <div className="w-full lg:w-80 flex flex-col gap-4">
                {/* Dials Block */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-2.5">
                    {/* Temperature Dial */}
                    <div className="bg-white/[0.02] border border-white/5 rounded-xl p-2.5 flex flex-col items-center gap-1">
                        <Thermometer size={14} className="text-orange-400" />
                        <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Temp (T)</span>
                        <span className="text-xs font-bold text-white">{temperature} K</span>
                    </div>

                    {/* Volume Dial */}
                    <div className="bg-white/[0.02] border border-white/5 rounded-xl p-2.5 flex flex-col items-center gap-1">
                        <Box size={14} className="text-indigo-400" />
                        <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Volume (V)</span>
                        <span className="text-xs font-bold text-white">{volume} dm³</span>
                    </div>

                    {/* Moles Dial */}
                    <div className="bg-white/[0.02] border border-white/5 rounded-xl p-2.5 flex flex-col items-center gap-1">
                        <Users size={14} className="text-cyan-400" />
                        <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Moles (n)</span>
                        <span className="text-xs font-bold text-white">{moles} mol</span>
                    </div>

                    {/* Pressure Dial */}
                    <div className="bg-white/[0.02] border border-white/5 rounded-xl p-2.5 flex flex-col items-center gap-1">
                        <Gauge size={14} className="text-emerald-400" />
                        <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Pressure (P)</span>
                        <span className="text-xs font-bold text-white">{Math.round(pressure * 101325).toLocaleString()} Pa</span>
                    </div>

                    {/* Density Dial */}
                    <div className="bg-white/[0.02] border border-white/5 rounded-xl p-2.5 flex flex-col items-center gap-1">
                        <Layers size={14} className="text-purple-400" />
                        <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Density (ρ)</span>
                        <span className="text-xs font-bold text-white">{density} g/dm³</span>
                    </div>

                    {/* Gas Constant Dial */}
                    <div className="bg-white/[0.02] border border-white/5 rounded-xl p-2.5 flex flex-col items-center gap-1">
                        <Activity size={14} className="text-pink-400" />
                        <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Gas Constant (R)</span>
                        <span className="text-xs font-bold text-white">8.31 J·mol⁻¹·K⁻¹</span>
                    </div>
                </div>

                {/* Dropdowns Block */}
                <div className="grid grid-cols-2 gap-2 bg-white/[0.02] border border-white/5 rounded-xl p-3">
                    <div className="flex flex-col gap-1">
                        <label className="text-[8.5px] font-bold text-slate-400 uppercase tracking-wider">Gas Type</label>
                        <select
                             value={selectedGas}
                             onChange={(e) => setSelectedGas(e.target.value)}
                             className="bg-slate-950 border border-white/10 rounded-lg p-1.5 text-xs text-white cursor-pointer focus:outline-none focus:border-indigo-500"
                        >
                            <option value="helium">Helium (He)</option>
                            <option value="neon">Neon (Ne)</option>
                            <option value="argon">Argon (Ar)</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-[8.5px] font-bold text-slate-400 uppercase tracking-wider">Constant Mode</label>
                        <select
                            value={constantMode}
                            onChange={(e) => setConstantMode(e.target.value as any)}
                            className="bg-slate-950 border border-white/10 rounded-lg p-1.5 text-xs text-white cursor-pointer focus:outline-none focus:border-indigo-500"
                        >
                            <option value="none">None (Full Ideal)</option>
                            <option value="boyle">Constant T (Boyle)</option>
                            <option value="charles">Constant P (Charles)</option>
                            <option value="gay-lussac">Constant V (Lussac)</option>
                        </select>
                    </div>
                </div>

                {/* Interactive Sliders */}
                <div className="flex flex-col gap-3.5 bg-white/[0.02] border border-white/5 rounded-xl p-3.5">
                    {/* Temperature Slider */}
                    <div className="flex flex-col gap-1">
                        <label className="text-[9px] font-bold text-slate-400 uppercase tracking-wider flex justify-between">
                            <span>Temperature (T)</span>
                            <span className="text-orange-400">{temperature} K</span>
                        </label>
                        <div className="flex items-center gap-2">
                            <button
                                type="button"
                                disabled={constantMode === 'boyle'}
                                onClick={() => setTemperature((prev) => Math.max(150, prev - 10))}
                                className="p-1 rounded bg-white/5 hover:bg-white/10 text-white disabled:opacity-20 disabled:cursor-not-allowed transition-all active:scale-90 flex items-center justify-center border border-white/5 shadow-sm"
                            >
                                <Minus size={11} />
                            </button>
                            <input
                                type="range"
                                min="150"
                                max="600"
                                step="10"
                                value={temperature}
                                disabled={constantMode === 'boyle'}
                                onChange={(e) => setTemperature(Number(e.target.value))}
                                className="flex-1 accent-orange-500 cursor-pointer h-1 bg-white/10 rounded-lg appearance-none disabled:opacity-20 disabled:cursor-not-allowed"
                            />
                            <button
                                type="button"
                                disabled={constantMode === 'boyle'}
                                onClick={() => setTemperature((prev) => Math.min(600, prev + 10))}
                                className="p-1 rounded bg-white/5 hover:bg-white/10 text-white disabled:opacity-20 disabled:cursor-not-allowed transition-all active:scale-90 flex items-center justify-center border border-white/5 shadow-sm"
                            >
                                <Plus size={11} />
                            </button>
                        </div>
                    </div>

                    {/* Volume Slider */}
                    <div className="flex flex-col gap-1">
                        <label className="text-[9px] font-bold text-slate-400 uppercase tracking-wider flex justify-between">
                            <span>Volume (V)</span>
                            <span className="text-indigo-400">{volume} dm³</span>
                        </label>
                        <div className="flex items-center gap-2">
                            <button
                                type="button"
                                disabled={constantMode === 'charles' || constantMode === 'gay-lussac'}
                                onClick={() => setVolume((prev) => Math.max(10, prev - 1))}
                                className="p-1 rounded bg-white/5 hover:bg-white/10 text-white disabled:opacity-20 disabled:cursor-not-allowed transition-all active:scale-90 flex items-center justify-center border border-white/5 shadow-sm"
                            >
                                <Minus size={11} />
                            </button>
                            <input
                                type="range"
                                min="10"
                                max="150"
                                value={volume}
                                disabled={constantMode === 'charles' || constantMode === 'gay-lussac'}
                                onChange={(e) => setVolume(Number(e.target.value))}
                                className="flex-1 accent-indigo-500 cursor-pointer h-1 bg-white/10 rounded-lg appearance-none disabled:opacity-20 disabled:cursor-not-allowed"
                            />
                            <button
                                type="button"
                                disabled={constantMode === 'charles' || constantMode === 'gay-lussac'}
                                onClick={() => setVolume((prev) => Math.min(150, prev + 1))}
                                className="p-1 rounded bg-white/5 hover:bg-white/10 text-white disabled:opacity-20 disabled:cursor-not-allowed transition-all active:scale-90 flex items-center justify-center border border-white/5 shadow-sm"
                            >
                                <Plus size={11} />
                            </button>
                        </div>
                    </div>

                    {/* Moles Slider */}
                    <div className="flex flex-col gap-1">
                        <label className="text-[9px] font-bold text-slate-400 uppercase tracking-wider flex justify-between">
                            <span>Amount / Moles (n)</span>
                            <span className="text-cyan-400">{moles} mol</span>
                        </label>
                        <div className="flex items-center gap-2">
                            <button
                                type="button"
                                onClick={() => setMoles((prev) => Math.max(1, prev - 1))}
                                className="p-1 rounded bg-white/5 hover:bg-white/10 text-white disabled:opacity-20 disabled:cursor-not-allowed transition-all active:scale-90 flex items-center justify-center border border-white/5 shadow-sm"
                            >
                                <Minus size={11} />
                            </button>
                            <input
                                type="range"
                                min="1"
                                max="20"
                                value={moles}
                                onChange={(e) => setMoles(Number(e.target.value))}
                                className="w-full flex-1 accent-cyan-500 cursor-pointer h-1 bg-white/10 rounded-lg appearance-none"
                            />
                            <button
                                type="button"
                                onClick={() => setMoles((prev) => Math.min(20, prev + 1))}
                                className="p-1 rounded bg-white/5 hover:bg-white/10 text-white disabled:opacity-20 disabled:cursor-not-allowed transition-all active:scale-90 flex items-center justify-center border border-white/5 shadow-sm"
                            >
                                <Plus size={11} />
                            </button>
                        </div>
                    </div>

                    {/* Pressure Slider */}
                    <div className="flex flex-col gap-1">
                        <label className="text-[9px] font-bold text-slate-400 uppercase tracking-wider flex justify-between">
                            <span>Pressure (P)</span>
                            <span className="text-emerald-400">{Math.round(pressure * 101325).toLocaleString()} Pa</span>
                        </label>
                        <div className="flex items-center gap-2">
                            <button
                                type="button"
                                disabled={constantMode === 'charles'}
                                onClick={() => handlePressureChange(Math.max(10000, Math.round(pressure * 101325) - 10000))}
                                className="p-1 rounded bg-white/5 hover:bg-white/10 text-white disabled:opacity-20 disabled:cursor-not-allowed transition-all active:scale-90 flex items-center justify-center border border-white/5 shadow-sm"
                            >
                                <Minus size={11} />
                            </button>
                            <input
                                type="range"
                                min="10000"
                                max="1000000"
                                step="10000"
                                value={Math.round(pressure * 101325)}
                                disabled={constantMode === 'charles'}
                                onChange={(e) => handlePressureChange(Number(e.target.value))}
                                className="flex-1 accent-emerald-500 cursor-pointer h-1 bg-white/10 rounded-lg appearance-none disabled:opacity-20 disabled:cursor-not-allowed"
                            />
                            <button
                                type="button"
                                disabled={constantMode === 'charles'}
                                onClick={() => handlePressureChange(Math.min(1000000, Math.round(pressure * 101325) + 10000))}
                                className="p-1 rounded bg-white/5 hover:bg-white/10 text-white disabled:opacity-20 disabled:cursor-not-allowed transition-all active:scale-90 flex items-center justify-center border border-white/5 shadow-sm"
                            >
                                <Plus size={11} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
