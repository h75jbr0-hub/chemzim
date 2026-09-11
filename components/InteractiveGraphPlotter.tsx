'use client';

import React, { useState, useRef, useMemo, useCallback } from 'react';
import { 
    PenTool, CheckCircle2, RotateCcw, Eye, Sparkles, 
    Trash2, Award, Info, AlertCircle 
} from 'lucide-react';

export interface GraphPoint {
    x: number;
    y: number;
    id?: string;
}

export interface InteractiveGraphPlotterProps {
    config: {
        xAxis: {
            label: string;
            unit: string;
            min: number;
            max: number;
            step: number;
        };
        yAxis: {
            label: string;
            unit: string;
            min: number;
            max: number;
            step: number;
        };
        targetPoints: { x: number; y: number; label?: string }[];
        curveType: 'line' | 'curve';
        tolerance?: number;
        anomalousPointIndex?: number;
        title?: string;
    };
    onComplete?: (score: number, maxScore: number) => void;
}

export default function InteractiveGraphPlotter({ config, onComplete }: InteractiveGraphPlotterProps) {
    const [studentPoints, setStudentPoints] = useState<GraphPoint[]>([]);
    const [hasFitted, setHasFitted] = useState(false);
    const [showMarkScheme, setShowMarkScheme] = useState(false);
    const [activeHoverPoint, setActiveHoverPoint] = useState<{ x: number; y: number } | null>(null);

    const svgRef = useRef<SVGSVGElement>(null);

    // Coordinate space settings
    const svgWidth = 640;
    const svgHeight = 440;
    const padLeft = 70;
    const padRight = 40;
    const padTop = 45;
    const padBottom = 60;

    const plotWidth = svgWidth - padLeft - padRight;
    const plotHeight = svgHeight - padTop - padBottom;

    const { xAxis, yAxis, targetPoints, curveType, tolerance = 1.5, title } = config;

    // Convert data (x, y) to SVG (px, py)
    const toScreenX = useCallback((x: number) => {
        return padLeft + ((x - xAxis.min) / (xAxis.max - xAxis.min)) * plotWidth;
    }, [xAxis.min, xAxis.max, padLeft, plotWidth]);

    const toScreenY = useCallback((y: number) => {
        return padTop + plotHeight - ((y - yAxis.min) / (yAxis.max - yAxis.min)) * plotHeight;
    }, [yAxis.min, yAxis.max, padTop, plotHeight]);

    // Convert SVG (px, py) back to data (x, y)
    const toDataCoords = useCallback((screenX: number, screenY: number) => {
        const clampedX = Math.max(padLeft, Math.min(padLeft + plotWidth, screenX));
        const clampedY = Math.max(padTop, Math.min(padTop + plotHeight, screenY));

        const dataX = xAxis.min + ((clampedX - padLeft) / plotWidth) * (xAxis.max - xAxis.min);
        const dataY = yAxis.min + ((padTop + plotHeight - clampedY) / plotHeight) * (yAxis.max - yAxis.min);

        // Snap to step / 4 resolution for natural feel
        const snapX = Math.round(dataX / (xAxis.step / 4)) * (xAxis.step / 4);
        const snapY = Math.round(dataY / (yAxis.step / 4)) * (yAxis.step / 4);

        return {
            x: Number(snapX.toFixed(2)),
            y: Number(snapY.toFixed(2))
        };
    }, [padLeft, padTop, plotWidth, plotHeight, xAxis, yAxis]);

    // Handle touch or mouse click to add / remove point
    const handleSvgClick = (e: React.MouseEvent<SVGSVGElement> | React.TouchEvent<SVGSVGElement>) => {
        if (hasFitted && showMarkScheme) return;
        if (!svgRef.current) return;

        const rect = svgRef.current.getBoundingClientRect();
        let clientX = 0;
        let clientY = 0;

        if ('touches' in e) {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        } else {
            clientX = e.clientX;
            clientY = e.clientY;
        }

        // Scale factor in case SVG is scaled via CSS
        const scaleX = svgWidth / rect.width;
        const scaleY = svgHeight / rect.height;

        const screenX = (clientX - rect.left) * scaleX;
        const screenY = (clientY - rect.top) * scaleY;

        // Ignore clicks outside the grid area
        if (
            screenX < padLeft - 10 || 
            screenX > padLeft + plotWidth + 10 || 
            screenY < padTop - 10 || 
            screenY > padTop + plotHeight + 10
        ) {
            return;
        }

        const dataPt = toDataCoords(screenX, screenY);

        // If clicked very close to an existing student point, remove it
        const existingIdx = studentPoints.findIndex(p => {
            const sx = toScreenX(p.x);
            const sy = toScreenY(p.y);
            return Math.hypot(sx - screenX, sy - screenY) < 16;
        });

        if (existingIdx !== -1) {
            setStudentPoints(prev => prev.filter((_, i) => i !== existingIdx));
            setHasFitted(false);
            setShowMarkScheme(false);
        } else {
            setStudentPoints(prev => [...prev, { ...dataPt, id: `${Date.now()}-${Math.random()}` }]);
            setHasFitted(false);
            setShowMarkScheme(false);
        }
    };

    // Calculate Best-Fit Line / Smooth Curve for Student Points
    const studentFitPath = useMemo(() => {
        if (studentPoints.length < 2) return '';

        const pts = [...studentPoints].sort((a, b) => a.x - b.x);

        if (curveType === 'line') {
            // Linear regression: y = mx + c
            const n = pts.length;
            let sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0;
            for (const p of pts) {
                sumX += p.x;
                sumY += p.y;
                sumXY += p.x * p.y;
                sumX2 += p.x * p.x;
            }
            const denominator = (n * sumX2 - sumX * sumX);
            if (Math.abs(denominator) < 1e-6) return '';
            const m = (n * sumXY - sumX * sumY) / denominator;
            const c = (sumY - m * sumX) / n;

            const xStart = Math.min(xAxis.min, pts[0].x);
            const xEnd = Math.max(xAxis.max, pts[pts.length - 1].x);
            const yStart = m * xStart + c;
            const yEnd = m * xEnd + c;

            return `M ${toScreenX(xStart)} ${toScreenY(yStart)} L ${toScreenX(xEnd)} ${toScreenY(yEnd)}`;
        } else {
            // Smooth natural cubic / catmull-rom curve
            let d = `M ${toScreenX(pts[0].x)} ${toScreenY(pts[0].y)}`;
            for (let i = 0; i < pts.length - 1; i++) {
                const p0 = pts[Math.max(i - 1, 0)];
                const p1 = pts[i];
                const p2 = pts[i + 1];
                const p3 = pts[Math.min(i + 2, pts.length - 1)];

                const cp1x = toScreenX(p1.x + (p2.x - p0.x) / 6);
                const cp1y = toScreenY(p1.y + (p2.y - p0.y) / 6);
                const cp2x = toScreenX(p2.x - (p3.x - p1.x) / 6);
                const cp2y = toScreenY(p2.y - (p3.y - p1.y) / 6);

                d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${toScreenX(p2.x)} ${toScreenY(p2.y)}`;
            }
            return d;
        }
    }, [studentPoints, curveType, xAxis, toScreenX, toScreenY]);

    // Model (Mark Scheme) Ideal Path
    const targetIdealPath = useMemo(() => {
        if (!targetPoints || targetPoints.length < 2) return '';
        const pts = [...targetPoints].sort((a, b) => a.x - b.x);

        if (curveType === 'line') {
            const pFirst = pts[0];
            const pLast = pts[pts.length - 1];
            return `M ${toScreenX(pFirst.x)} ${toScreenY(pFirst.y)} L ${toScreenX(pLast.x)} ${toScreenY(pLast.y)}`;
        } else {
            let d = `M ${toScreenX(pts[0].x)} ${toScreenY(pts[0].y)}`;
            for (let i = 0; i < pts.length - 1; i++) {
                const p0 = pts[Math.max(i - 1, 0)];
                const p1 = pts[i];
                const p2 = pts[i + 1];
                const p3 = pts[Math.min(i + 2, pts.length - 1)];

                const cp1x = toScreenX(p1.x + (p2.x - p0.x) / 6);
                const cp1y = toScreenY(p1.y + (p2.y - p0.y) / 6);
                const cp2x = toScreenX(p2.x - (p3.x - p1.x) / 6);
                const cp2y = toScreenY(p2.y - (p3.y - p1.y) / 6);

                d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${toScreenX(p2.x)} ${toScreenY(p2.y)}`;
            }
            return d;
        }
    }, [targetPoints, curveType, toScreenX, toScreenY]);

    // Evaluation: Calculate how many points fall within tolerance
    const evaluation = useMemo(() => {
        if (!hasFitted) return null;

        let matchedCount = 0;
        const matches: { target: { x: number; y: number }; closestStudent?: GraphPoint; distance: number; isCorrect: boolean }[] = [];

        for (const target of targetPoints) {
            let closestPt: GraphPoint | undefined;
            let minDistance = Infinity;

            for (const sp of studentPoints) {
                // Euclidean distance in normalized grid units
                const dx = (sp.x - target.x) / (xAxis.step || 1);
                const dy = (sp.y - target.y) / (yAxis.step || 1);
                const dist = Math.hypot(dx, dy);

                if (dist < minDistance) {
                    minDistance = dist;
                    closestPt = sp;
                }
            }

            const isCorrect = minDistance <= tolerance;
            if (isCorrect) matchedCount++;

            matches.push({
                target,
                closestStudent: closestPt,
                distance: minDistance,
                isCorrect
            });
        }

        const pointScore = Math.round((matchedCount / targetPoints.length) * 3); // 3 marks for points
        const lineScore = studentPoints.length >= targetPoints.length - 1 ? 1 : 0; // 1 mark for line
        const totalMarks = pointScore + lineScore;
        const maxMarks = 4;

        return {
            matchedCount,
            totalTarget: targetPoints.length,
            pointScore,
            lineScore,
            totalMarks,
            maxMarks,
            matches
        };
    }, [hasFitted, studentPoints, targetPoints, xAxis.step, yAxis.step, tolerance]);

    // Grid Lines Generator
    const gridTicks = useMemo(() => {
        const xMajor: number[] = [];
        const xMinor: number[] = [];
        for (let x = xAxis.min; x <= xAxis.max; x += xAxis.step) {
            xMajor.push(x);
        }
        for (let x = xAxis.min; x <= xAxis.max; x += xAxis.step / 5) {
            xMinor.push(x);
        }

        const yMajor: number[] = [];
        const yMinor: number[] = [];
        for (let y = yAxis.min; y <= yAxis.max; y += yAxis.step) {
            yMajor.push(y);
        }
        for (let y = yAxis.min; y <= yAxis.max; y += yAxis.step / 5) {
            yMinor.push(y);
        }

        return { xMajor, xMinor, yMajor, yMinor };
    }, [xAxis, yAxis]);

    return (
        <div className="bg-[#070e1c] border border-indigo-500/25 rounded-3xl p-5 md:p-7 shadow-2xl space-y-5 select-none">
            {/* Header / Instructions */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
                <div className="space-y-1">
                    <div className="flex items-center gap-2">
                        <PenTool className="w-5 h-5 text-indigo-400" />
                        <h4 className="text-base md:text-lg font-bold text-white">
                            {title || 'Interactive Graph Plotter (Paper 6 Practical)'}
                        </h4>
                    </div>
                    <p className="text-xs text-slate-400">
                        Tap on the coordinate grid to plot experimental points (<span className="text-indigo-400 font-bold">✕</span>). Tap an existing point to remove it.
                    </p>
                </div>

                {/* Counter & Status */}
                <div className="flex items-center gap-2">
                    <span className="text-xs px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 font-mono">
                        Points: <strong className="text-indigo-400">{studentPoints.length}</strong> / {targetPoints.length}
                    </span>
                    {hasFitted && evaluation && (
                        <span className="text-xs px-3 py-1.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-bold flex items-center gap-1.5">
                            <Award className="w-4 h-4" />
                            {evaluation.totalMarks} / {evaluation.maxMarks} Marks
                        </span>
                    )}
                </div>
            </div>

            {/* Target Data Table Reminder */}
            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-3 text-xs text-slate-300 overflow-x-auto">
                <span className="font-bold text-slate-400 block mb-2">📋 Experimental Values to Plot:</span>
                <div className="flex gap-2 min-w-max">
                    {targetPoints.map((pt, idx) => (
                        <div 
                            key={idx} 
                            className="bg-[#0b1426] border border-white/10 rounded-lg px-2.5 py-1 text-center font-mono"
                        >
                            <div className="text-[10px] text-slate-400">{xAxis.label.slice(0, 10)} = <span className="text-indigo-300 font-bold">{pt.x}</span></div>
                            <div className="text-[10px] text-slate-400">{yAxis.label.slice(0, 10)} = <span className="text-amber-300 font-bold">{pt.y}</span></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* SVG Graph Canvas */}
            <div className="relative w-full overflow-hidden flex justify-center bg-[#030712] rounded-2xl border border-[#1e293b] shadow-inner">
                <svg
                    ref={svgRef}
                    viewBox={`0 0 ${svgWidth} ${svgHeight}`}
                    className="w-full max-w-[640px] h-auto cursor-crosshair touch-none select-none font-sans"
                    onClick={handleSvgClick}
                    onTouchStart={handleSvgClick}
                    onMouseMove={(e) => {
                        if (!svgRef.current) return;
                        const rect = svgRef.current.getBoundingClientRect();
                        const scaleX = svgWidth / rect.width;
                        const scaleY = svgHeight / rect.height;
                        const sx = (e.clientX - rect.left) * scaleX;
                        const sy = (e.clientY - rect.top) * scaleY;
                        if (sx >= padLeft && sx <= padLeft + plotWidth && sy >= padTop && sy <= padTop + plotHeight) {
                            setActiveHoverPoint(toDataCoords(sx, sy));
                        } else {
                            setActiveHoverPoint(null);
                        }
                    }}
                    onMouseLeave={() => setActiveHoverPoint(null)}
                >
                    {/* Background */}
                    <rect x="0" y="0" width={svgWidth} height={svgHeight} fill="#050a17"/>

                    {/* Plot Background Grid Area */}
                    <rect 
                        x={padLeft} 
                        y={padTop} 
                        width={plotWidth} 
                        height={plotHeight} 
                        fill="#070f23" 
                        stroke="#334155" 
                        strokeWidth="1.5"
                    />

                    {/* Minor Grid Lines (Millimeter paper emulation) */}
                    {gridTicks.xMinor.map((xVal, i) => (
                        <line 
                            key={`xminor-${i}`}
                            x1={toScreenX(xVal)}
                            y1={padTop}
                            x2={toScreenX(xVal)}
                            y2={padTop + plotHeight}
                            stroke="#1e293b"
                            strokeWidth="0.5"
                        />
                    ))}
                    {gridTicks.yMinor.map((yVal, i) => (
                        <line 
                            key={`yminor-${i}`}
                            x1={padLeft}
                            y1={toScreenY(yVal)}
                            x2={padLeft + plotWidth}
                            y2={toScreenY(yVal)}
                            stroke="#1e293b"
                            strokeWidth="0.5"
                        />
                    ))}

                    {/* Major Grid Lines */}
                    {gridTicks.xMajor.map((xVal, i) => (
                        <g key={`xmajor-${i}`}>
                            <line 
                                x1={toScreenX(xVal)}
                                y1={padTop}
                                x2={toScreenX(xVal)}
                                y2={padTop + plotHeight}
                                stroke="#334155"
                                strokeWidth="1"
                            />
                            {/* X Axis Tick Numbers */}
                            <text 
                                x={toScreenX(xVal)} 
                                y={padTop + plotHeight + 18} 
                                fill="#94a3b8" 
                                fontSize="10" 
                                textAnchor="middle" 
                                fontFamily="monospace"
                            >
                                {xVal}
                            </text>
                        </g>
                    ))}
                    {gridTicks.yMajor.map((yVal, i) => (
                        <g key={`ymajor-${i}`}>
                            <line 
                                x1={padLeft}
                                y1={toScreenY(yVal)}
                                x2={padLeft + plotWidth}
                                y2={toScreenY(yVal)}
                                stroke="#334155"
                                strokeWidth="1"
                            />
                            {/* Y Axis Tick Numbers */}
                            <text 
                                x={padLeft - 10} 
                                y={toScreenY(yVal) + 4} 
                                fill="#94a3b8" 
                                fontSize="10" 
                                textAnchor="end" 
                                fontFamily="monospace"
                            >
                                {yVal}
                            </text>
                        </g>
                    ))}

                    {/* X Axis Label */}
                    <text 
                        x={padLeft + plotWidth / 2} 
                        y={svgHeight - 15} 
                        fill="#cbd5e1" 
                        fontSize="12" 
                        fontWeight="bold" 
                        textAnchor="middle"
                    >
                        {xAxis.label} {xAxis.unit ? `(${xAxis.unit})` : ''}
                    </text>

                    {/* Y Axis Label */}
                    <text 
                        x={-(padTop + plotHeight / 2)} 
                        y="22" 
                        fill="#cbd5e1" 
                        fontSize="12" 
                        fontWeight="bold" 
                        textAnchor="middle" 
                        transform="rotate(-90)"
                    >
                        {yAxis.label} {yAxis.unit ? `(${yAxis.unit})` : ''}
                    </text>

                    {/* Student Plotted Line / Curve (Drawn when student clicks "Draw Best-Fit") */}
                    {hasFitted && studentFitPath && (
                        <path 
                            d={studentFitPath} 
                            fill="none" 
                            stroke="#38bdf8" 
                            strokeWidth="2.5" 
                            strokeLinecap="round"
                        />
                    )}

                    {/* Official Mark Scheme Curve / Line (Visible when student clicks "View Mark Scheme") */}
                    {showMarkScheme && targetIdealPath && (
                        <g>
                            <path 
                                d={targetIdealPath} 
                                fill="none" 
                                stroke="#10b981" 
                                strokeWidth="3" 
                                strokeDasharray="6,4"
                                opacity="0.9"
                            />
                            {/* Official Target Points (Circles with halo) */}
                            {targetPoints.map((tp, idx) => (
                                <g key={`target-${idx}`}>
                                    <circle 
                                        cx={toScreenX(tp.x)} 
                                        cy={toScreenY(tp.y)} 
                                        r="6" 
                                        fill="none" 
                                        stroke="#10b981" 
                                        strokeWidth="2"
                                    />
                                    <circle 
                                        cx={toScreenX(tp.x)} 
                                        cy={toScreenY(tp.y)} 
                                        r="2" 
                                        fill="#10b981"
                                    />
                                </g>
                            ))}
                        </g>
                    )}

                    {/* Student Plotted Points (Rendered as X Crosses) */}
                    {studentPoints.map((pt, idx) => {
                        const sx = toScreenX(pt.x);
                        const sy = toScreenY(pt.y);
                        const crossSize = 5;

                        return (
                            <g key={pt.id || idx} className="cursor-pointer">
                                {/* Invisible touch/click hit area */}
                                <circle cx={sx} cy={sy} r="14" fill="transparent" />
                                {/* Cross arms */}
                                <line 
                                    x1={sx - crossSize} 
                                    y1={sy - crossSize} 
                                    x2={sx + crossSize} 
                                    y2={sy + crossSize} 
                                    stroke="#ec4899" 
                                    strokeWidth="2.5" 
                                    strokeLinecap="round"
                                />
                                <line 
                                    x1={sx + crossSize} 
                                    y1={sy - crossSize} 
                                    x2={sx - crossSize} 
                                    y2={sy + crossSize} 
                                    stroke="#ec4899" 
                                    strokeWidth="2.5" 
                                    strokeLinecap="round"
                                />
                                {/* Point coordinates tooltip */}
                                <text 
                                    x={sx + 8} 
                                    y={sy - 8} 
                                    fill="#f472b6" 
                                    fontSize="9" 
                                    fontFamily="monospace"
                                    fontWeight="bold"
                                >
                                    ({pt.x}, {pt.y})
                                </text>
                            </g>
                        );
                    })}

                    {/* Hover Crosshair Preview */}
                    {activeHoverPoint && !hasFitted && (
                        <g opacity="0.6">
                            <line 
                                x1={toScreenX(activeHoverPoint.x)} 
                                y1={padTop} 
                                x2={toScreenX(activeHoverPoint.x)} 
                                y2={padTop + plotHeight} 
                                stroke="#94a3b8" 
                                strokeWidth="0.8" 
                                strokeDasharray="3,3"
                            />
                            <line 
                                x1={padLeft} 
                                y1={toScreenY(activeHoverPoint.y)} 
                                x2={padLeft + plotWidth} 
                                y2={toScreenY(activeHoverPoint.y)} 
                                stroke="#94a3b8" 
                                strokeWidth="0.8" 
                                strokeDasharray="3,3"
                            />
                            <circle 
                                cx={toScreenX(activeHoverPoint.x)} 
                                cy={toScreenY(activeHoverPoint.y)} 
                                r="4" 
                                fill="#ec4899" 
                                opacity="0.5"
                            />
                        </g>
                    )}
                </svg>
            </div>

            {/* Interactive Control Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <div className="flex items-center gap-2">
                    {/* Clear Button */}
                    <button
                        onClick={() => {
                            setStudentPoints([]);
                            setHasFitted(false);
                            setShowMarkScheme(false);
                        }}
                        disabled={studentPoints.length === 0}
                        className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-rose-400 bg-rose-500/10 border border-rose-500/20 hover:bg-rose-500/20 disabled:opacity-40 transition-all"
                    >
                        <Trash2 className="w-3.5 h-3.5" />
                        Clear Grid
                    </button>
                    {/* Reset Zoom/State */}
                    <button
                        onClick={() => {
                            setHasFitted(false);
                            setShowMarkScheme(false);
                        }}
                        className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-400 bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                    >
                        <RotateCcw className="w-3.5 h-3.5" />
                        Replot Points
                    </button>
                </div>

                <div className="flex items-center gap-2.5">
                    {/* Draw Best Fit Button */}
                    <button
                        onClick={() => {
                            if (studentPoints.length < 2) return;
                            setHasFitted(true);
                            if (onComplete && evaluation) {
                                onComplete(evaluation.totalMarks, evaluation.maxMarks);
                            }
                        }}
                        disabled={studentPoints.length < 2}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-lg ${
                            studentPoints.length >= 2
                                ? 'bg-gradient-to-r from-indigo-500 to-blue-600 text-white hover:from-indigo-600 hover:to-blue-700 shadow-indigo-500/20'
                                : 'bg-white/5 border border-white/10 text-slate-500 cursor-not-allowed'
                        }`}
                    >
                        <Sparkles className="w-4 h-4 text-amber-300" />
                        Draw Best-Fit {curveType === 'line' ? 'Straight Line' : 'Smooth Curve'}
                    </button>

                    {/* Show Mark Scheme Overlay */}
                    {hasFitted && (
                        <button
                            onClick={() => setShowMarkScheme(prev => !prev)}
                            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all border ${
                                showMarkScheme
                                    ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                                    : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                            }`}
                        >
                            <Eye className="w-4 h-4 text-emerald-400" />
                            {showMarkScheme ? 'Hide Mark Scheme' : 'Compare with Mark Scheme'}
                        </button>
                    )}
                </div>
            </div>

            {/* Evaluation Breakdown Card */}
            {hasFitted && evaluation && (
                <div className="bg-[#0c182e] border border-indigo-500/30 rounded-2xl p-4 md:p-5 space-y-3 animation-fadeIn">
                    <div className="flex items-center justify-between border-b border-indigo-500/20 pb-2.5">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider">
                                Examiner Plotting Evaluation &amp; Mark Breakdown
                            </span>
                        </div>
                        <span className="text-xs font-bold text-emerald-400 font-mono">
                            Score: {evaluation.totalMarks} / {evaluation.maxMarks} Marks
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                        {/* Point Accuracy */}
                        <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3 space-y-1">
                            <div className="flex justify-between font-bold">
                                <span className="text-slate-300">Point Plotting Accuracy:</span>
                                <span className={evaluation.pointScore >= 2 ? 'text-emerald-400' : 'text-amber-400'}>
                                    +{evaluation.pointScore} / 3 Marks
                                </span>
                            </div>
                            <p className="text-slate-400 text-[11px]">
                                Plotted {evaluation.matchedCount} of {evaluation.totalTarget} points within examination tolerance (±1 small grid square).
                            </p>
                        </div>

                        {/* Best Fit Line Quality */}
                        <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3 space-y-1">
                            <div className="flex justify-between font-bold">
                                <span className="text-slate-300">Line / Curve Smoothness:</span>
                                <span className={evaluation.lineScore === 1 ? 'text-emerald-400' : 'text-rose-400'}>
                                    +{evaluation.lineScore} / 1 Mark
                                </span>
                            </div>
                            <p className="text-slate-400 text-[11px]">
                                {evaluation.lineScore === 1
                                    ? 'Continuous smooth best-fit path with balanced distribution of points.'
                                    : 'Plot at least ' + (evaluation.totalTarget - 1) + ' points to generate an accurate best-fit curve.'}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
