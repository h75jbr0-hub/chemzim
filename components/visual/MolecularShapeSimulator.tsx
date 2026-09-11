'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';

interface ShapeData {
    name: string;
    formula: string;
    bondingPairs: number;
    lonePairs: number;
    bondAngle: string;
    shape: string;
    color: string;
    description: string;
    atomPositions3D: { x: number; y: number; z: number; label: string; isLone?: boolean }[];
    bonds: { from: number; to: number }[];
}

const SHAPES: Record<string, ShapeData> = {
    linear: {
        name: 'Linear',
        formula: 'BeCl₂ / CO₂',
        bondingPairs: 2,
        lonePairs: 0,
        bondAngle: '180°',
        shape: 'Linear',
        color: 'hsl(200, 85%, 55%)',
        description: '2 bonding pairs, 0 lone pairs. Bond pairs repel equally to maximise separation → 180° straight line.',
        atomPositions3D: [
            { x: 0, y: 0, z: 0, label: 'Be' },
            { x: -110, y: 0, z: 0, label: 'Cl' },
            { x: 110, y: 0, z: 0, label: 'Cl' },
        ],
        bonds: [{ from: 0, to: 1 }, { from: 0, to: 2 }],
    },
    trigonal_planar: {
        name: 'Trigonal Planar',
        formula: 'BF₃ / AlCl₃',
        bondingPairs: 3,
        lonePairs: 0,
        bondAngle: '120°',
        shape: 'Trigonal Planar',
        color: 'hsl(155, 75%, 45%)',
        description: '3 bonding pairs, 0 lone pairs. Equal repulsion places atoms at 120° in a flat triangle.',
        atomPositions3D: [
            { x: 0, y: 0, z: 0, label: 'B' },
            { x: 0, y: -110, z: 0, label: 'F' },
            { x: 95.3, y: 55, z: 0, label: 'F' },
            { x: -95.3, y: 55, z: 0, label: 'F' },
        ],
        bonds: [{ from: 0, to: 1 }, { from: 0, to: 2 }, { from: 0, to: 3 }],
    },
    tetrahedral: {
        name: 'Tetrahedral',
        formula: 'CH₄ / NH₄⁺',
        bondingPairs: 4,
        lonePairs: 0,
        bondAngle: '109.5°',
        shape: 'Tetrahedral',
        color: 'hsl(265, 80%, 60%)',
        description: '4 bonding pairs, 0 lone pairs. Maximum separation in 3D gives the classic 109.5° tetrahedral geometry.',
        atomPositions3D: [
            { x: 0, y: 0, z: 0, label: 'C' },
            { x: 0, y: -110, z: 0, label: 'H' },
            { x: 0, y: 36.7, z: 103.7, label: 'H' },
            { x: 89.8, y: 36.7, z: -51.8, label: 'H' },
            { x: -89.8, y: 36.7, z: -51.8, label: 'H' },
        ],
        bonds: [{ from: 0, to: 1 }, { from: 0, to: 2 }, { from: 0, to: 3 }, { from: 0, to: 4 }],
    },
    trigonal_pyramidal: {
        name: 'Trigonal Pyramidal',
        formula: 'NH₃ / H₃O⁺',
        bondingPairs: 3,
        lonePairs: 1,
        bondAngle: '107°',
        shape: 'Trigonal Pyramidal',
        color: 'hsl(35, 90%, 55%)',
        description: '3 bonding pairs, 1 lone pair. The lone pair repels more strongly, compressing bond angles from 109.5° to 107°.',
        atomPositions3D: [
            { x: 0, y: 15, z: 0, label: 'N' },
            { x: 0, y: -85, z: 0, label: 'e⁻e⁻', isLone: true },
            { x: 0, y: 51.7, z: 103.7, label: 'H' },
            { x: 89.8, y: 51.7, z: -51.8, label: 'H' },
            { x: -89.8, y: 51.7, z: -51.8, label: 'H' },
        ],
        bonds: [{ from: 0, to: 2 }, { from: 0, to: 3 }, { from: 0, to: 4 }],
    },
    bent: {
        name: 'Bent / V-shaped',
        formula: 'H₂O / SO₂',
        bondingPairs: 2,
        lonePairs: 2,
        bondAngle: '104.5°',
        shape: 'Bent',
        color: 'hsl(190, 85%, 50%)',
        description: '2 bonding pairs, 2 lone pairs. Two lone pairs compress bond angle further to 104.5°.',
        atomPositions3D: [
            { x: 0, y: 15, z: 0, label: 'O' },
            { x: -63.5, y: -70, z: 63.5, label: 'e⁻e⁻', isLone: true },
            { x: 63.5, y: -70, z: -63.5, label: 'e⁻e⁻', isLone: true },
            { x: 0, y: 75, z: 85, label: 'H' },
            { x: 0, y: 75, z: -85, label: 'H' },
        ],
        bonds: [{ from: 0, to: 3 }, { from: 0, to: 4 }],
    },
    trigonal_bipyramidal: {
        name: 'Trigonal Bipyramidal',
        formula: 'PCl₅',
        bondingPairs: 5,
        lonePairs: 0,
        bondAngle: '90°, 120°, 180°',
        shape: 'Trigonal Bipyramidal',
        color: 'hsl(330, 80%, 58%)',
        description: '5 bonding pairs, 0 lone pairs (expanded octet). Equatorial bonds at 120°, axial bonds at 90° to equatorial plane.',
        atomPositions3D: [
            { x: 0, y: 0, z: 0, label: 'P' },
            { x: 0, y: -105, z: 0, label: 'Cl' },
            { x: 0, y: 105, z: 0, label: 'Cl' },
            { x: 100, y: 0, z: 0, label: 'Cl' },
            { x: -50, y: 0, z: 86.6, label: 'Cl' },
            { x: -50, y: 0, z: -86.6, label: 'Cl' },
        ],
        bonds: [{ from: 0, to: 1 }, { from: 0, to: 2 }, { from: 0, to: 3 }, { from: 0, to: 4 }, { from: 0, to: 5 }],
    },
    seesaw: {
        name: 'Seesaw',
        formula: 'SF₄',
        bondingPairs: 4,
        lonePairs: 1,
        bondAngle: '102°, 173°',
        shape: 'Seesaw',
        color: 'hsl(160, 75%, 45%)',
        description: '4 bonding pairs, 1 lone pair. Derived from trigonal bipyramidal — the equatorial lone pair compresses axial bonds to ~173° and equatorial bonds to ~102°, giving a seesaw shape.',
        atomPositions3D: [
            { x: 0, y: 0, z: 0, label: 'S' },
            { x: 0, y: -105, z: 0, label: 'F' },
            { x: 0, y: 105, z: 0, label: 'F' },
            { x: 100, y: 0, z: 0, label: 'F' },
            { x: -50, y: 0, z: 86.6, label: 'F' },
            { x: -50, y: 0, z: -86.6, label: 'e⁻e⁻', isLone: true },
        ],
        bonds: [{ from: 0, to: 1 }, { from: 0, to: 2 }, { from: 0, to: 3 }, { from: 0, to: 4 }],
    },
    octahedral: {
        name: 'Octahedral',
        formula: 'SF₆',
        bondingPairs: 6,
        lonePairs: 0,
        bondAngle: '90°, 180°',
        shape: 'Octahedral',
        color: 'hsl(10, 80%, 58%)',
        description: '6 bonding pairs, 0 lone pairs (expanded octet). Maximum symmetry — all adjacent bonds at 90°, opposite at 180°.',
        atomPositions3D: [
            { x: 0, y: 0, z: 0, label: 'S' },
            { x: 0, y: -100, z: 0, label: 'F' },
            { x: 0, y: 100, z: 0, label: 'F' },
            { x: 100, y: 0, z: 0, label: 'F' },
            { x: -100, y: 0, z: 0, label: 'F' },
            { x: 0, y: 0, z: 100, label: 'F' },
            { x: 0, y: 0, z: -100, label: 'F' },
        ],
        bonds: [
            { from: 0, to: 1 }, { from: 0, to: 2 },
            { from: 0, to: 3 }, { from: 0, to: 4 },
            { from: 0, to: 5 }, { from: 0, to: 6 },
        ],
    },
    square_planar: {
        name: 'Square Planar',
        formula: 'XeF₄',
        bondingPairs: 4,
        lonePairs: 2,
        bondAngle: '90°',
        shape: 'Square Planar',
        color: 'hsl(50, 85%, 50%)',
        description: '4 bonding pairs, 2 lone pairs. The 2 lone pairs occupy axial positions (180° apart) to minimise lp-lp repulsion, leaving 4 bond pairs in a flat square.',
        atomPositions3D: [
            { x: 0, y: 0, z: 0, label: 'Xe' },
            { x: 0, y: -100, z: 0, label: 'e⁻e⁻', isLone: true },
            { x: 0, y: 100, z: 0, label: 'e⁻e⁻', isLone: true },
            { x: 100, y: 0, z: 0, label: 'F' },
            { x: -100, y: 0, z: 0, label: 'F' },
            { x: 0, y: 0, z: 100, label: 'F' },
            { x: 0, y: 0, z: -100, label: 'F' },
        ],
        bonds: [
            { from: 0, to: 3 }, { from: 0, to: 4 },
            { from: 0, to: 5 }, { from: 0, to: 6 },
        ],
    },
};

const SHAPE_KEYS = Object.keys(SHAPES);

export default function MolecularShapeSimulator() {
    const [selectedShape, setSelectedShape] = useState<string>('tetrahedral');
    const [rotX, setRotX] = useState<number>(-0.3);
    const [rotY, setRotY] = useState<number>(0.5);
    const [isDragging, setIsDragging] = useState(false);
    const [isAutoRotating, setIsAutoRotating] = useState(true);
    const dragStart = useRef({ x: 0, y: 0, rotX: 0, rotY: 0 });

    const shape = SHAPES[selectedShape];

    // Slow auto-rotation when user is not interacting and auto-rotation is enabled
    useEffect(() => {
        if (isDragging || !isAutoRotating) return;
        let animationFrameId: number;
        const tick = () => {
            setRotY(prev => (prev + 0.006) % (Math.PI * 2));
            animationFrameId = requestAnimationFrame(tick);
        };
        animationFrameId = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(animationFrameId);
    }, [isDragging, isAutoRotating]);

    // Drag-to-rotate handlers (Mouse)
    const handleMouseDown = (e: React.MouseEvent<SVGSVGElement>) => {
        setIsDragging(true);
        dragStart.current = {
            x: e.clientX,
            y: e.clientY,
            rotX,
            rotY,
        };
    };

    const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
        if (!isDragging) return;
        const deltaX = e.clientX - dragStart.current.x;
        const deltaY = e.clientY - dragStart.current.y;
        setRotY(dragStart.current.rotY + deltaX * 0.01);
        setRotX(Math.max(-Math.PI / 2.2, Math.min(Math.PI / 2.2, dragStart.current.rotX + deltaY * 0.01)));
    };

    const handleMouseUpOrLeave = () => {
        setIsDragging(false);
    };

    // Drag-to-rotate handlers (Touch for Mobile)
    const handleTouchStart = (e: React.TouchEvent<SVGSVGElement>) => {
        if (e.touches.length !== 1) return;
        setIsDragging(true);
        dragStart.current = {
            x: e.touches[0].clientX,
            y: e.touches[0].clientY,
            rotX,
            rotY,
        };
    };

    const handleTouchMove = (e: React.TouchEvent<SVGSVGElement>) => {
        if (!isDragging || e.touches.length !== 1) return;
        const deltaX = e.touches[0].clientX - dragStart.current.x;
        const deltaY = e.touches[0].clientY - dragStart.current.y;
        setRotY(dragStart.current.rotY + deltaX * 0.015);
        setRotX(Math.max(-Math.PI / 2.2, Math.min(Math.PI / 2.2, dragStart.current.rotX + deltaY * 0.015)));
    };

    // Projected coordinates based on rotation
    const centerX = 250;
    const centerY = 175;

    const rotatedAtoms = shape.atomPositions3D.map(atom => {
        // Rotate Y-axis (yaw)
        const cosY = Math.cos(rotY);
        const sinY = Math.sin(rotY);
        const x1 = atom.x * cosY - atom.z * sinY;
        const z1 = atom.x * sinY + atom.z * cosY;

        // Rotate X-axis (pitch)
        const cosX = Math.cos(rotX);
        const sinX = Math.sin(rotX);
        const y2 = atom.y * cosX - z1 * sinX;
        const z2 = atom.y * sinX + z1 * cosX;

        return {
            x: centerX + x1,
            y: centerY + y2,
            z: z2,
            label: atom.label,
            isLone: atom.isLone,
        };
    });

    // Sort atoms for depth rendering (painter's algorithm)
    const sortedAtomIndices = rotatedAtoms
        .map((atom, index) => ({ atom, index }))
        .sort((a, b) => a.atom.z - b.atom.z); // Render lower Z (further away) first

    return (
        <div className="flex-shrink-0 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-800/60 p-3 sm:p-5 shadow-xl w-full select-none">
            {/* Header */}
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div
                    className="w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0 rounded-xl flex items-center justify-center text-base sm:text-lg"
                    style={{ background: `${shape.color}22`, border: `1.5px solid ${shape.color}55` }}
                >
                    🔬
                </div>
                <div className="min-w-0">
                    <h3 className="font-bold text-white text-xs sm:text-sm leading-tight">VSEPR Molecular Shape Explorer</h3>
                    <p className="text-[10px] sm:text-xs text-slate-400 hidden xs:block">Drag to rotate • Interactive 3D visualiser</p>
                </div>
            </div>

            {/* Shape Selector */}
            <div className="overflow-x-auto pb-1 mb-3 sm:mb-4 -mx-1 px-1">
                <div className="flex gap-1.5 sm:flex-wrap sm:gap-1.5" style={{ minWidth: 'max-content' }}>
                    {SHAPE_KEYS.map((key) => (
                        <button
                            key={key}
                            onClick={() => {
                                setSelectedShape(key);
                                setRotX(-0.3);
                                setRotY(0.5);
                            }}
                            className="flex-shrink-0 px-2 sm:px-2.5 py-1 rounded-lg text-[10px] sm:text-[11px] font-medium transition-all duration-200 border whitespace-nowrap cursor-pointer"
                            style={selectedShape === key
                                ? { background: `${SHAPES[key].color}33`, borderColor: SHAPES[key].color, color: SHAPES[key].color }
                                : { background: 'transparent', borderColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)' }
                            }
                        >
                            {SHAPES[key].name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Main Content: SVG + Info */}
            <div className="flex flex-col lg:flex-row gap-4 items-center lg:items-start w-full">
                {/* SVG Diagram with Drag Events */}
                <div className="relative w-full max-w-[420px] lg:w-[360px] lg:max-w-none flex-shrink-0 rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-950 to-slate-900 cursor-grab active:cursor-grabbing">
                    <svg
                        viewBox="60 50 380 250"
                        preserveAspectRatio="xMidYMid meet"
                        className="block w-full h-auto touch-none"
                        style={{ maxHeight: 240 }}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUpOrLeave}
                        onMouseLeave={handleMouseUpOrLeave}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleMouseUpOrLeave}
                    >
                        {/* Defs: glow filters */}
                        <defs>
                            <filter id="vsepr-glow" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur stdDeviation="3" result="blur" />
                                <feMerge>
                                    <feMergeNode in="blur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                            <filter id="vsepr-loeglow" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur stdDeviation="5" result="blur" />
                                <feMerge>
                                    <feMergeNode in="blur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>

                        {/* Bond angle arc hint (Behind atoms) */}
                        <circle
                            cx={centerX}
                            cy={centerY}
                            r={42}
                            fill="none"
                            stroke={shape.color}
                            strokeWidth="1"
                            strokeDasharray="4 6"
                            opacity="0.25"
                        />

                        {/* Bonds (Drawn with depth cues) */}
                        {shape.bonds.map((bond, i) => {
                            const from = rotatedAtoms[bond.from];
                            const to = rotatedAtoms[bond.to];
                            // Average depth
                            const avgZ = (from.z + to.z) / 2;
                            // Make bonds in foreground thicker/brighter, background thinner/darker
                            const depthOpacity = Math.max(0.2, Math.min(0.85, 0.55 + avgZ / 250));
                            const depthStrokeWidth = Math.max(1.2, Math.min(4.5, 2.5 + avgZ / 80));

                            return (
                                <line
                                    key={i}
                                    x1={from.x} y1={from.y}
                                    x2={to.x}   y2={to.y}
                                    stroke={shape.color}
                                    strokeWidth={depthStrokeWidth}
                                    strokeLinecap="round"
                                    opacity={depthOpacity}
                                />
                            );
                        })}

                        {/* Atoms & lone pair blobs (Sorted back-to-front) */}
                        {sortedAtomIndices.map(({ atom, index }) => {
                            const isCenter = index === 0;
                            // Depth-based radius scaling
                            const depthScale = 1 + atom.z / 350;
                            const baseRadius = isCenter ? 22 : atom.isLone ? 16 : 18;
                            const radius = Math.max(8, baseRadius * depthScale);

                            // Depth-based opacity
                            const depthOpacity = Math.max(0.35, Math.min(1, 0.85 + atom.z / 300));

                            return (
                                <g
                                    key={index}
                                    filter={
                                        isCenter
                                            ? 'url(#vsepr-glow)'
                                            : atom.isLone
                                                ? 'url(#vsepr-loeglow)'
                                                : undefined
                                    }
                                    opacity={depthOpacity}
                                >
                                    <circle
                                        cx={atom.x}
                                        cy={atom.y}
                                        r={radius}
                                        fill={
                                            isCenter
                                                ? shape.color
                                                : atom.isLone
                                                    ? 'rgba(120,180,255,0.12)'
                                                    : 'rgba(255,255,255,0.08)'
                                        }
                                        stroke={
                                            atom.isLone
                                                ? 'rgba(100,160,255,0.5)'
                                                : isCenter
                                                    ? 'rgba(255,255,255,0.3)'
                                                    : shape.color
                                        }
                                        strokeWidth={isCenter ? 2 : 1.5}
                                        strokeDasharray={atom.isLone ? '3 3' : undefined}
                                    />
                                    <text
                                        x={atom.x}
                                        y={atom.y + 4}
                                        textAnchor="middle"
                                        fontSize={Math.max(7, (isCenter ? 13 : atom.isLone ? 10 : 12) * depthScale)}
                                        fontFamily="system-ui, sans-serif"
                                        fontWeight="bold"
                                        fill={
                                            isCenter
                                                ? '#fff'
                                                : atom.isLone
                                                    ? 'rgba(120,180,255,0.9)'
                                                    : 'rgba(255,255,255,0.85)'
                                        }
                                    >
                                        {atom.label}
                                    </text>
                                </g>
                            );
                        })}
                    </svg>

                    {/* Play/Pause Button overlay */}
                    <button
                        onClick={() => setIsAutoRotating(!isAutoRotating)}
                        className="absolute bottom-3 right-3 p-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-white/10 transition-all duration-200 cursor-pointer flex items-center justify-center"
                        title={isAutoRotating ? "Pause rotation" : "Start auto-rotation"}
                    >
                        {isAutoRotating ? <Pause size={14} /> : <Play size={14} />}
                    </button>
                </div>

                {/* Info Panel */}
                <div className="flex flex-col gap-2 sm:gap-3 flex-1 min-w-0 w-full">
                    {/* Shape name + formula */}
                    <div>
                        <div className="text-base sm:text-lg font-bold text-white leading-tight">{shape.name}</div>
                        <div className="text-xs sm:text-sm font-mono mt-0.5" style={{ color: shape.color }}>{shape.formula}</div>
                    </div>

                    {/* Summary pills */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        <span className="px-2 sm:px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-semibold bg-white/8 text-white border border-white/10">
                            🔗 {shape.bondingPairs} bonding pair{shape.bondingPairs !== 1 ? 's' : ''}
                        </span>
                        <span
                            className="px-2 sm:px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-semibold border"
                            style={{ background: 'rgba(100,160,255,0.1)', borderColor: 'rgba(100,160,255,0.25)', color: 'rgba(160,210,255,0.9)' }}
                        >
                            🔵 {shape.lonePairs} lone pair{shape.lonePairs !== 1 ? 's' : ''}
                        </span>
                        <span
                            className="px-2 sm:px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-semibold border"
                            style={{ background: `${shape.color}22`, borderColor: `${shape.color}55`, color: shape.color }}
                        >
                            ∠ {shape.bondAngle}
                        </span>
                    </div>

                    {/* Description */}
                    <p
                        className="text-[10px] sm:text-xs text-slate-400 leading-relaxed border-l-2 pl-2 sm:pl-3"
                        style={{ borderColor: shape.color + '66' }}
                    >
                        {shape.description}
                    </p>

                    {/* Repulsion Order */}
                    <div className="rounded-lg p-2 sm:p-2.5 text-[10px] sm:text-[11px] text-slate-400 bg-white/4 border border-white/8 leading-relaxed">
                        <span className="text-slate-300 font-semibold">Repulsion order: </span>
                        lp–lp &gt; lp–bp &gt; bp–bp<br />
                        Each lone pair compresses adjacent bond angles by ~2.5°
                    </div>
                </div>
            </div>

            {/* Legend */}
            <div className="mt-3 flex flex-wrap gap-2 sm:gap-3 text-[10px] sm:text-[11px] text-slate-500">
                <span className="flex items-center gap-1.5">
                    <span className="inline-block w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full flex-shrink-0" style={{ background: shape.color }} />
                    Central atom
                </span>
                <span className="flex items-center gap-1.5">
                    <span className="inline-block w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full flex-shrink-0 border border-white/30 bg-white/8" />
                    Terminal atom
                </span>
                <span className="flex items-center gap-1.5">
                    <span className="inline-block w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full flex-shrink-0 border border-dashed border-blue-400/50 bg-blue-400/10" />
                    Lone pair (e⁻e⁻)
                </span>
            </div>
        </div>
    );
}
