'use client';

import React, { useState } from 'react';
import { 
    Eye, 
    CheckSquare, 
    Square, 
    Award, 
    AlertTriangle, 
    Sparkles, 
    HelpCircle, 
    ChevronDown, 
    ChevronUp 
} from 'lucide-react';
import { Question } from '@/data/exams/types';
import { InlineMath, BlockMath } from 'react-katex';
import { sanitizeKatex } from '@/lib/katex-sanitizer';

interface StructuredQuestionCardProps {
    question: Question;
    questionNumber?: number;
    onScoreChange?: (score: number, totalMarks: number) => void;
}

export const StructuredQuestionCard: React.FC<StructuredQuestionCardProps> = ({
    question,
    questionNumber = 1,
    onScoreChange
}) => {
    const [userAnswer, setUserAnswer] = useState<string>('');
    const [showMarkingScheme, setShowMarkingScheme] = useState<boolean>(false);
    const [showExaminerEye, setShowExaminerEye] = useState<boolean>(false);
    const [checkedMarks, setCheckedMarks] = useState<Record<number, boolean>>({});

    const markingScheme = question.markingScheme || {
        marks: 3,
        points: [
            { mark: 1, keyword: "rate-determining step", text: "Identify that Step 1 is the rate-determining step (slow step)." },
            { mark: 1, keyword: "stoichiometry match", text: "Reactants in Step 1 match the species and orders in the rate equation." },
            { mark: 1, keyword: "zero order species", text: "State that H+ is zero order and does not appear in the rate-determining step." }
        ],
        examinerTips: "Examiners report students often confuse the overall reaction stoichiometry with the rate equation coefficients."
    };

    const toggleMark = (index: number) => {
        const updated = { ...checkedMarks, [index]: !checkedMarks[index] };
        setCheckedMarks(updated);
        
        const earnedScore = Object.values(updated).filter(Boolean).length;
        if (onScoreChange) {
            onScoreChange(earnedScore, markingScheme.marks);
        }
    };

    const earnedMarks = Object.values(checkedMarks).filter(Boolean).length;

    // KaTeX helper
    const renderMathText = (text: string) => {
        if (!text) return null;
        const parts = text.split(/(\$[^\$]+\$)/g);
        return parts.map((part, idx) => {
            if (part.startsWith('$') && part.endsWith('$')) {
                const math = part.slice(1, -1);
                return <InlineMath key={idx} math={sanitizeKatex(math)} />;
            }
            return <span key={idx}>{part}</span>;
        });
    };

    return (
        <div className="w-full bg-[#0b162c] border border-indigo-500/30 rounded-3xl p-6 md:p-8 shadow-xl relative overflow-hidden my-6 shrink-0">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Header: Question Metadata & Paper Tag */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-indigo-500/20 mb-6">
                <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center font-black text-indigo-300 text-sm">
                        Q{questionNumber}
                    </span>
                    <div>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-amber-500/20 text-amber-300 border border-amber-500/30">
                            Paper 4 / Structured Theory
                        </span>
                        {question.source && (
                            <span className="text-xs text-slate-400 ml-2">Source: {question.source}</span>
                        )}
                    </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-bold bg-slate-900/80 px-3 py-1.5 rounded-xl border border-slate-800 text-slate-300">
                    <Award className="w-4 h-4 text-emerald-400" />
                    <span>Total Marks: {markingScheme.marks}</span>
                </div>
            </div>

            {/* Question Text */}
            <div className="text-base font-semibold text-white leading-relaxed mb-6">
                {renderMathText(question.question)}
            </div>

            {/* Student Answer Box */}
            <div className="space-y-2 mb-6">
                <label className="text-xs font-bold text-slate-400 flex justify-between items-center">
                    <span>✍️ Write your structured response below:</span>
                    <span className="text-[11px] text-indigo-400 font-normal">Auto-saves draft</span>
                </label>
                <textarea
                    rows={4}
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    placeholder="Type your step-by-step chemical reasoning here..."
                    className="w-full bg-slate-950/80 border border-slate-800 rounded-2xl p-4 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/40 transition-all font-mono"
                />
            </div>

            {/* Interactive Action Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-indigo-500/20">
                <button
                    onClick={() => setShowMarkingScheme(!showMarkingScheme)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                        showMarkingScheme 
                            ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20' 
                            : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/20'
                    }`}
                >
                    <Sparkles className="w-4 h-4" />
                    {showMarkingScheme ? 'Hide Marking Scheme' : 'Reveal Marking Scheme'}
                </button>

                <button
                    onClick={() => setShowExaminerEye(!showExaminerEye)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all border ${
                        showExaminerEye 
                            ? 'bg-amber-500/20 text-amber-300 border-amber-500/40' 
                            : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border-slate-800'
                    }`}
                >
                    <Eye className="w-4 h-4 text-amber-400" />
                    <span>Examiner Eye 👁️</span>
                </button>
            </div>

            {/* Marking Scheme & Keyword Highlighting Panel */}
            {showMarkingScheme && (
                <div className="mt-6 p-6 rounded-2xl bg-slate-950/90 border border-emerald-500/30 space-y-4 animate-fade-in-up">
                    <div className="flex items-center justify-between border-b border-emerald-500/20 pb-3">
                        <div className="flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-emerald-400" />
                            <h4 className="text-sm font-bold text-white">Official Marking Scheme & Self-Grading</h4>
                        </div>
                        <div className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                            Earned: {earnedMarks} / {markingScheme.marks} Marks
                        </div>
                    </div>

                    <p className="text-xs text-slate-400">
                        Check the boxes next to the key marking points you included in your response:
                    </p>

                    <div className="space-y-3">
                        {markingScheme.points.map((pt, idx) => {
                            const isChecked = !!checkedMarks[idx];
                            return (
                                <div 
                                    key={idx} 
                                    onClick={() => toggleMark(idx)}
                                    className={`flex items-start gap-3 p-3.5 rounded-xl border text-xs cursor-pointer transition-all ${
                                        isChecked 
                                            ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-200' 
                                            : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                                    }`}
                                >
                                    {isChecked ? (
                                        <CheckSquare className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                    ) : (
                                        <Square className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
                                    )}
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold">
                                                [+{pt.mark} mark]
                                            </span>
                                            <span className="font-bold text-emerald-400 font-mono underline">
                                                Key Phrase: "{pt.keyword}"
                                            </span>
                                        </div>
                                        <div>{renderMathText(pt.text)}</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}

            {/* Examiner Eye Panel (Common Pitfalls & Insights) */}
            {showExaminerEye && (
                <div className="mt-4 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 space-y-2 animate-fade-in-up">
                    <div className="flex items-center gap-2 font-bold text-amber-300 text-xs">
                        <AlertTriangle className="w-4 h-4 text-amber-400" />
                        <span>Examiner Eye 👁️ • Common Pitfalls & Cambridge/Edexcel Guidance</span>
                    </div>
                    <p className="text-xs leading-relaxed">
                        {markingScheme.examinerTips || "Examiners emphasize using precise chemical terminology. Always check state symbols and balance charges when writing intermediate ionic steps."}
                    </p>
                </div>
            )}
        </div>
    );
};
