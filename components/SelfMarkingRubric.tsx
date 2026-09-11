'use client';

import React, { useState, useEffect } from 'react';
import { 
    CheckCircle2, XCircle, AlertCircle, Award, Sparkles, 
    BookOpen, HelpCircle, ChevronDown, ChevronUp, CheckSquare, Square
} from 'lucide-react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { sanitizeKatex } from '@/lib/katex-sanitizer';
import { MarkingPoint } from '@/lib/keyword-evaluator';

export interface SelfMarkingRubricProps {
    markingScheme: {
        marks: number;
        points: MarkingPoint[];
        examinerTips?: string;
    };
    studentText?: string;
    autoEvaluation?: {
        awardedMarks: number;
        pointResults: { matched: boolean; matchedKeywords: string[] }[];
    };
    onMarksChanged?: (studentSelfMark: number, maxMarks: number) => void;
}

export default function SelfMarkingRubric({
    markingScheme,
    studentText = '',
    autoEvaluation,
    onMarksChanged
}: SelfMarkingRubricProps) {
    // State of student checked points: array of boolean matching markingScheme.points
    const [checkedPoints, setCheckedPoints] = useState<boolean[]>(() => {
        if (autoEvaluation && autoEvaluation.pointResults.length === markingScheme.points.length) {
            return autoEvaluation.pointResults.map(r => r.matched);
        }
        return new Array(markingScheme.points.length).fill(false);
    });

    const [isExpanded, setIsExpanded] = useState<boolean>(true);

    // Synchronize if autoEvaluation changes
    useEffect(() => {
        if (autoEvaluation && autoEvaluation.pointResults.length === markingScheme.points.length) {
            setCheckedPoints(autoEvaluation.pointResults.map(r => r.matched));
        }
    }, [autoEvaluation, markingScheme.points.length]);

    // Calculate total awarded marks
    const totalSelfAwarded = checkedPoints.reduce((acc, isChecked, idx) => {
        return acc + (isChecked ? (markingScheme.points[idx]?.mark || 1) : 0);
    }, 0);

    const cappedScore = Math.min(markingScheme.marks, totalSelfAwarded);

    const togglePoint = (index: number) => {
        setCheckedPoints(prev => {
            const next = [...prev];
            next[index] = !next[index];
            const newScore = next.reduce((acc, isChecked, idx) => {
                return acc + (isChecked ? (markingScheme.points[idx]?.mark || 1) : 0);
            }, 0);
            const capped = Math.min(markingScheme.marks, newScore);
            if (onMarksChanged) {
                onMarksChanged(capped, markingScheme.marks);
            }
            return next;
        });
    };

    const renderTextWithMath = (text: string): React.ReactNode => {
        if (!text) return null;
        if (text.includes('$$')) {
            const parts = text.split('$$');
            return (
                <React.Fragment>
                    {parts.map((part, i) => (
                        i % 2 === 1 ? <BlockMath key={i} math={sanitizeKatex(part)} /> : <span key={i}>{renderTextWithMath(part)}</span>
                    ))}
                </React.Fragment>
            );
        }
        if (text.includes('$')) {
            const parts = text.split('$');
            return (
                <React.Fragment>
                    {parts.map((part, i) => (
                        i % 2 === 1 ? <InlineMath key={i} math={sanitizeKatex(part)} /> : <span key={i}>{part}</span>
                    ))}
                </React.Fragment>
            );
        }
        return text;
    };

    return (
        <div className="bg-[#091224] border border-indigo-500/30 rounded-2xl p-5 shadow-xl space-y-4 font-sans select-none">
            {/* Header / Score Banner */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-indigo-500/20 pb-4">
                <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                        <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                        <h4 className="text-sm font-bold text-white flex items-center gap-2">
                            <span>Official Cambridge Mark Scheme &amp; Self-Marking Checklist</span>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-mono">
                                {markingScheme.marks} Marks Max
                            </span>
                        </h4>
                        <p className="text-[11px] text-slate-400">
                            Check each criterion you fulfilled in your written response to compute your awarded marks.
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-center">
                    <div className="px-3.5 py-1.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-extrabold text-xs font-mono flex items-center gap-1.5 shadow-sm">
                        <Award className="w-3.5 h-3.5" />
                        <span>{cappedScore} / {markingScheme.marks} Marks</span>
                    </div>
                    <button
                        onClick={() => setIsExpanded(prev => !prev)}
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                        title={isExpanded ? "Collapse" : "Expand"}
                    >
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                </div>
            </div>

            {/* Checklist Items */}
            {isExpanded && (
                <div className="space-y-2.5">
                    {markingScheme.points.map((pt, idx) => {
                        const isChecked = checkedPoints[idx];
                        const wasAutoDetected = autoEvaluation?.pointResults[idx]?.matched;

                        return (
                            <div
                                key={idx}
                                onClick={() => togglePoint(idx)}
                                className={`cursor-pointer border rounded-xl p-3.5 flex items-start gap-3 transition-all duration-150 ${
                                    isChecked
                                        ? 'bg-emerald-500/10 border-emerald-500/30 text-slate-100 shadow-sm'
                                        : 'bg-white/[0.02] border-white/5 text-slate-300 hover:bg-white/[0.04]'
                                }`}
                            >
                                {/* Checkbox icon */}
                                <div className="pt-0.5 flex-shrink-0">
                                    {isChecked ? (
                                        <div className="w-5 h-5 rounded-md bg-emerald-500 text-white flex items-center justify-center shadow">
                                            <CheckSquare className="w-4 h-4" />
                                        </div>
                                    ) : (
                                        <div className="w-5 h-5 rounded-md border border-slate-600 bg-black/20 flex items-center justify-center text-transparent hover:border-indigo-400">
                                            <Square className="w-4 h-4" />
                                        </div>
                                    )}
                                </div>

                                {/* Mark badge & point description */}
                                <div className="flex-1 space-y-1">
                                    <div className="flex items-center justify-between gap-2">
                                        <div className="text-xs md:text-sm font-medium leading-relaxed">
                                            {renderTextWithMath(pt.text)}
                                        </div>
                                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded border flex-shrink-0 font-mono ${
                                            isChecked 
                                                ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300' 
                                                : 'bg-white/5 border-white/10 text-slate-400'
                                        }`}>
                                            +{pt.mark} Mark
                                        </span>
                                    </div>

                                    {/* Keyword Tag and Auto-detected indicator */}
                                    <div className="flex flex-wrap items-center gap-2 pt-0.5 text-[11px]">
                                        <div className="flex items-center gap-1 font-mono text-amber-300/90 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                                            <span className="text-slate-500 text-[10px]">Key terms:</span>
                                            <span>{pt.keyword}</span>
                                        </div>

                                        {wasAutoDetected && (
                                            <span className="flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-semibold">
                                                <Sparkles className="w-3 h-3 text-emerald-400" />
                                                Auto-matched in your answer
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                    {/* Examiner Tips */}
                    {markingScheme.examinerTips && (
                        <div className="bg-amber-500/10 border border-amber-500/25 rounded-xl p-3.5 flex items-start gap-2.5 text-xs text-amber-300/90 leading-relaxed mt-3">
                            <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                            <div>
                                <strong className="text-amber-300 font-bold block mb-0.5">Examiner Advice &amp; Pitfalls:</strong>
                                <span>{markingScheme.examinerTips}</span>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
