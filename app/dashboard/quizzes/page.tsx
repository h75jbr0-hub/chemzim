'use client';

import React, { useState, useEffect, useMemo, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { useGamification } from '@/contexts/GamificationContext';
import { allCurricula, edexcelAsCurriculum, edexcelA2Curriculum } from '@/data/curriculum';
import { questionBank, examsRegistry } from '@/data/exams';
import { curriculumRegistry } from '@/data/curriculum/registry';
import { 
    Trophy, Play, CheckCircle2, XCircle, ArrowRight, ArrowLeft, RefreshCw, 
    Clock, HelpCircle, Check, BookOpen, AlertCircle, Layers, Settings, Compass, Sliders,
    Flag, LayoutGrid, X, ChevronLeft, ChevronRight, FileText, FlaskConical, Printer, Sparkles, Zap
} from 'lucide-react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { sanitizeKatex } from '@/lib/katex-sanitizer';
import InteractiveGraphPlotter from '@/components/InteractiveGraphPlotter';
import InteractiveScaleReader from '@/components/InteractiveScaleReader';
import { PrintExamModal } from '@/components/exam-simulator/PrintExamModal';

export const EDEXCEL_UNITS = [
    { number: 1, title: 'Unit 1: Structure, Bonding & Intro Organic', shortTitle: 'Structure & Bonding', code: 'WCH11', level: 'AS' },
    { number: 2, title: 'Unit 2: Energetics, Group Chem & Halogenoalkanes', shortTitle: 'Energetics & Groups', code: 'WCH12', level: 'AS' },
    { number: 3, title: 'Unit 3: Practical Skills in Chemistry I', shortTitle: 'Practical Skills I', code: 'WCH13', level: 'AS' },
    { number: 4, title: 'Unit 4: Rates, Equilibria & Further Organic', shortTitle: 'Rates & Equilibria', code: 'WCH14', level: 'A2' },
    { number: 5, title: 'Unit 5: Transition Metals & Organic Nitrogen', shortTitle: 'Transition Metals & Arenes', code: 'WCH15', level: 'A2' },
    { number: 6, title: 'Unit 6: Practical Skills in Chemistry II', shortTitle: 'Practical Skills II', code: 'WCH16', level: 'A2' }
];

interface LocalQuestion {
    source: 'quiz' | 'exam';
    id: string;
    question: string;
    options: { text: string; isCorrect?: boolean }[];
    correctAnswerIndex: number;
    explanation?: string;
    level: string; // 'Easy' | 'Medium' | 'Hard'
    rawLevel: number; // 1 | 2 | 3
    track: string;
    trackId: string;
    board: 'cambridge' | 'edexcel';
    paperCode?: string; // 'p1' | 'p2' | 'p4' | 'p6' | 'other'
    paperType?: 'mcq' | 'structured' | 'practical';
    paperLabel?: string;
    unitNumber?: number; // 1 to 12
    unitTitle: string;
    rawUnitId: string;
    lessonTitle: string;
    rawLessonNum: number;
    imageHtml?: string;
    tableHtml?: string;
    sourceRef?: string;
    graphConfig?: any;
    apparatusScaleConfig?: any;
}

const renderTextWithMath = (text: string): React.ReactNode => {
    if (!text) return null;
    
    if (text.includes('$$')) {
        const parts = text.split('$$');
        return (
            <React.Fragment>
                {parts.map((part, i) => {
                    if (i % 2 === 1) {
                        return <BlockMath key={i} math={sanitizeKatex(part)} />;
                    }
                    return <span key={i}>{renderTextWithMath(part)}</span>;
                })}
            </React.Fragment>
        );
    }

    if (text.includes('$')) {
        const parts = text.split('$');
        return (
            <React.Fragment>
                {parts.map((part, i) => {
                    if (i % 2 === 1) {
                        return <InlineMath key={i} math={sanitizeKatex(part)} />;
                    }
                    return <span key={i}>{part}</span>;
                })}
            </React.Fragment>
        );
    }
    
    return text;
};

const renderQuestionContent = (text: string): React.ReactNode => {
    if (!text) return null;
    
    const cleanText = text.replace(/\\n/g, '\n');
    const lines = cleanText.split('\n');
    
    if (cleanText.includes('|')) {
        const elements: React.ReactNode[] = [];
        let tableRows: string[][] = [];
        let inTable = false;
        
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();
            if (line.startsWith('|')) {
                inTable = true;
                const cells = line.split('|').map(c => c.trim()).filter((_, idx, arr) => idx > 0 && idx < arr.length - 1);
                if (cells.every(c => c.startsWith(':') || c.startsWith('-') || c.endsWith(':') || c === '')) {
                    continue;
                }
                tableRows.push(cells);
            } else {
                if (inTable && tableRows.length > 0) {
                    const headers = tableRows[0];
                    const bodyRows = tableRows.slice(1);
                    elements.push(
                        <div key={`table-${i}`} className="overflow-x-auto my-4 rounded-xl border border-white/10 max-w-full">
                            <table className="min-w-full text-center border-collapse">
                                <thead className="bg-white/5 border-b border-white/10 text-xs font-bold uppercase tracking-wider text-slate-400">
                                    <tr>
                                        {headers.map((h, idx) => (
                                            <th key={idx} className="p-3">
                                                {renderTextWithMath(h)}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5 text-sm">
                                    {bodyRows.map((row, rIdx) => (
                                        <tr key={rIdx}>
                                            {row.map((cell, cIdx) => (
                                                <td key={cIdx} className="p-3 text-slate-300">
                                                    {renderTextWithMath(cell)}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    );
                    tableRows = [];
                    inTable = false;
                }
                if (line !== '') {
                    elements.push(
                        <div key={`line-${i}`} className="mb-2">
                            {renderTextWithMath(line)}
                        </div>
                    );
                }
            }
        }
        
        if (inTable && tableRows.length > 0) {
            const headers = tableRows[0];
            const bodyRows = tableRows.slice(1);
            elements.push(
                <div key="table-end" className="overflow-x-auto my-4 rounded-xl border border-white/10 max-w-full">
                    <table className="min-w-full text-center border-collapse">
                        <thead className="bg-white/5 border-b border-white/10 text-xs font-bold uppercase tracking-wider text-slate-400">
                            <tr>
                                {headers.map((h, idx) => (
                                    <th key={idx} className="p-3">
                                        {renderTextWithMath(h)}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5 text-sm">
                            {bodyRows.map((row, rIdx) => (
                                <tr key={rIdx}>
                                    {row.map((cell, cIdx) => (
                                        <td key={cIdx} className="p-3 text-slate-300">
                                            {renderTextWithMath(cell)}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
        }
        
        return <div className="flex flex-col">{elements}</div>;
    }
    
    return (
        <div className="flex flex-col gap-1.5">
            {lines.map((line, idx) => (
                line.trim() === ''
                    ? <div key={idx} className="h-2" />
                    : <div key={idx}>{renderTextWithMath(line)}</div>
            ))}
        </div>
    );
};

const resolveCurriculumTitle = (id: string, unitId: string): string => {
    const cleanId = id.toLowerCase().trim();
    const cleanUnit = unitId.toLowerCase().trim();

    if (cleanId === 'cie-igcse' || cleanId === 'igcse') return 'Cambridge IGCSE';
    if (cleanId === 'cie-as') return 'Cambridge AS-Level';
    if (cleanId === 'cie-alevel' || cleanId === 'cie-a2') return 'Cambridge A-Level';
    if (cleanId === 'edexcel-igcse') return 'Edexcel IGCSE';
    if (cleanId === 'edexcel-as') return 'Edexcel AS-Level';
    if (cleanId === 'edexcel-a2') return 'Edexcel A2-Level';
    if (cleanId === 'edexcel-alevel') return 'Edexcel IAL Chemistry';
    
    return id;
};

const resolveUnitTitle = (unitId: string, trackId: string): string => {
    if (/^\d+\./.test(unitId)) return unitId;
    
    const cleanUnitId = unitId.toLowerCase().trim();
    let cleanTrackId = trackId.toLowerCase().trim();
    
    if (cleanTrackId === 'igcse') cleanTrackId = 'cie-igcse';
    if (cleanTrackId === 'cie-alevel' || cleanTrackId === 'cie-a2') cleanTrackId = 'cie-alevel';
    
    // Direct check against canonical Edexcel units 1-6
    if (cleanTrackId.startsWith('edexcel') || cleanUnitId.includes('edexcel-unit') || cleanUnitId.match(/^unit-[1-6]$/)) {
        const matchNum = cleanUnitId.match(/unit-(\d+)/) || cleanUnitId.match(/u(\d+)/);
        if (matchNum) {
            const num = parseInt(matchNum[1], 10);
            const foundEdx = EDEXCEL_UNITS.find(u => u.number === num);
            if (foundEdx) return foundEdx.title;
        }
    }

    let curriculum = allCurricula.find(c => c.id.toLowerCase() === cleanTrackId || c.id.toLowerCase().startsWith(cleanTrackId));
    if (!curriculum && (cleanTrackId === 'edexcel-alevel' || cleanTrackId === 'edexcel-as' || cleanTrackId === 'edexcel-a2')) {
        if (cleanUnitId.includes('unit-4') || cleanUnitId.includes('unit-5') || cleanUnitId.includes('unit-6') || cleanUnitId.includes('u4') || cleanUnitId.includes('u5') || cleanUnitId.includes('u6')) {
            curriculum = allCurricula.find(c => c.id.startsWith('edexcel-a2'));
        } else {
            curriculum = allCurricula.find(c => c.id.startsWith('edexcel-as'));
        }
    }
    
    if (curriculum) {
        const matchNum = cleanUnitId.match(/unit-(\d+)/) || cleanUnitId.match(/u(\d+)/);
        if (matchNum) {
            const num = parseInt(matchNum[1], 10);
            const topic = curriculum.topics.find(t => t.number === num);
            if (topic) {
                if (/^unit\s+\d+:/i.test(topic.title)) {
                    return topic.title;
                }
                return `Unit ${topic.number}: ${topic.title}`;
            }
        }
        
        const topicById = curriculum.topics.find(t => t.id === cleanUnitId);
        if (topicById) {
            if (/^unit\s+\d+:/i.test(topicById.title)) {
                return topicById.title;
            }
            return `Unit ${topicById.number}: ${topicById.title}`;
        }
    }
    
    return unitId.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
};

const mapQuestionPaperAndUnit = (q: {
    id?: string;
    source?: string;
    paperType?: string;
    markingScheme?: any;
    topic?: string;
    rawUnitId?: string;
    curriculum?: string;
    trackId?: string;
    unitNumber?: number;
}): {
    board: 'cambridge' | 'edexcel';
    paperCode: string;
    paperType: 'mcq' | 'structured' | 'practical';
    paperLabel: string;
    unitNumber?: number;
} => {
    const rawTrack = (q.curriculum || q.trackId || '').toLowerCase().trim();
    const rawUnit = (q.topic || q.rawUnitId || '').toLowerCase().trim();
    const isEdx = rawTrack.includes('edexcel') || rawUnit.includes('edexcel') || (q.unitNumber !== undefined && rawTrack.startsWith('edexcel'));
    const board: 'cambridge' | 'edexcel' = isEdx ? 'edexcel' : 'cambridge';

    let unitNumber = q.unitNumber;
    if (unitNumber === undefined) {
        const uMatch = rawUnit.match(/unit[-_\s]*(\d+)/i) || rawUnit.match(/u(\d+)/i);
        if (uMatch) {
            unitNumber = parseInt(uMatch[1], 10);
        } else if (!isEdx) {
            const cambridgeTopicMap: Record<string, number> = {
                'states-of-matter': 1,
                'atoms-elements': 2,
                'stoichiometry': 3,
                'electrochemistry': 4,
                'chemical-energetics': 5,
                'chemical-reactions': 6,
                'acids-bases-salts': 7,
                'periodic-table': 8,
                'metals': 9,
                'chemistry-environment': 10,
                'organic-chemistry': 11,
                'experimental-techniques': 12
            };
            unitNumber = cambridgeTopicMap[rawUnit];
        }
    }

    if (board === 'edexcel') {
        if (unitNumber === 3 || unitNumber === 6) {
            return {
                board,
                unitNumber,
                paperCode: unitNumber === 3 ? 'u3' : 'u6',
                paperType: 'practical',
                paperLabel: unitNumber === 3 ? 'Unit 3 Practical Skills I' : 'Unit 6 Practical Skills II'
            };
        }
        return {
            board,
            unitNumber,
            paperCode: 'section-a',
            paperType: 'mcq',
            paperLabel: 'Section A (MCQs)'
        };
    }

    // Cambridge Paper mapping
    const src = (q.source || '').toLowerCase();
    const qid = (q.id || '').toLowerCase();
    const pt = (q.paperType || '').toLowerCase();

    if (pt === 'practical' || src.includes('paper 6') || src.includes('/61/') || src.includes('/62/') || src.includes('/63/') || src.includes('0620/6') || qid.includes('-p6-')) {
        return {
            board,
            unitNumber,
            paperCode: 'p6',
            paperType: 'practical',
            paperLabel: 'Paper 6 (Alternative to Practical)'
        };
    }
    if (pt === 'structured' || q.markingScheme || src.includes('paper 4') || src.includes('paper 3') || src.includes('/41/') || src.includes('/42/') || src.includes('/43/') || src.includes('0620/4') || qid.includes('-p4-')) {
        return {
            board,
            unitNumber,
            paperCode: 'p4',
            paperType: 'structured',
            paperLabel: 'Paper 4 (Theory & Structured)'
        };
    }
    if (src.includes('paper 1') || src.includes('/11/') || src.includes('/12/') || src.includes('0620/1') || qid.includes('-p1-')) {
        return {
            board,
            unitNumber,
            paperCode: 'p1',
            paperType: 'mcq',
            paperLabel: 'Paper 1 (Multiple Choice Core)'
        };
    }

    return {
        board,
        unitNumber,
        paperCode: 'p2',
        paperType: 'mcq',
        paperLabel: 'Paper 2 (Multiple Choice Extended)'
    };
};

function QuizzesContent() {
    const { user } = useAuth();
    const { addXP, solvedQuestions, saveQuestionAttempts, mistakeInbox } = useGamification();

    const searchParams = useSearchParams();
    const queryMode = searchParams.get('mode');
    const queryUnit = searchParams.get('unit');
    const queryUnitNum = searchParams.get('unitNum');
    const queryTrack = searchParams.get('track');

    const [allQuestions, setAllQuestions] = useState<LocalQuestion[]>([]);

    // Multi-step states
    const [step, setStep] = useState<'mode-select' | 'config' | 'playing' | 'result'>('mode-select');
    const [selectedMode, setSelectedMode] = useState<'comprehensive' | 'unit' | 'lesson' | 'custom' | 'spaced'>('comprehensive');
    const [selectedFilter, setSelectedFilter] = useState<'all' | 'new' | 'incorrect' | 'correct' | 'due'>('new');

    useEffect(() => {
        if (queryMode === 'speed' || queryMode === 'blitz') {
            window.location.href = '/dashboard/speed-challenge';
            return;
        }
        if (queryMode === 'spaced' || queryMode === 'mistakes') {
            setSelectedMode('spaced');
            setSelectedFilter('due');
            setStep('config');
        } else if (queryMode === 'unit' && (queryUnit || queryUnitNum)) {
            setSelectedMode('unit');
            if (queryUnit) setSelectedUnit(decodeURIComponent(queryUnit));
            if (queryUnitNum) {
                const uNum = parseInt(queryUnitNum, 10);
                if (!isNaN(uNum)) setSelectedEdexcelUnit(uNum);
            }
            if (queryTrack) setAdminSelectedTrackId(queryTrack);
            setSelectedFilter('all');
            setStep('config');
        }

        const handleTrackChanged = (e: any) => {
            if (e?.detail?.trackId) {
                setAdminSelectedTrackId(e.detail.trackId);
                setSelectedUnit('all');
                setSelectedLesson('all');
                setSelectedEdexcelUnit('all');
            }
        };
        window.addEventListener('chemzim_track_changed', handleTrackChanged);
        return () => window.removeEventListener('chemzim_track_changed', handleTrackChanged);
    }, [queryMode, queryUnit, queryUnitNum, queryTrack]);
    
    // Configuration states
    const [selectedSource, setSelectedSource] = useState<'all' | 'exam' | 'quiz'>('all');
    const [selectedPaper, setSelectedPaper] = useState<'all' | 'p2' | 'p4' | 'p6' | 'p1'>('all');
    const [selectedSeries, setSelectedSeries] = useState<string>('all');
    const [selectedEdexcelUnit, setSelectedEdexcelUnit] = useState<'all' | number>('all');
    const [selectedUnit, setSelectedUnit] = useState<string>('all');
    const [selectedLesson, setSelectedLesson] = useState<string>('all');
    const [selectedLevel, setSelectedLevel] = useState<string>('all');
    const [questionCount, setQuestionCount] = useState<number>(10);
    const [selectedCustomUnits, setSelectedCustomUnits] = useState<string[]>([]);

    // Active gameplay states
    const [questions, setQuestions] = useState<LocalQuestion[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
    const [score, setScore] = useState<number>(0);
    const [timeStart, setTimeStart] = useState<number>(0);
    const [timeTaken, setTimeTaken] = useState<number>(0);
    const [userAnswers, setUserAnswers] = useState<Array<{ questionId: string; selectedAnswer: number; isCorrect: boolean }>>([]);

    // Free-navigation exam states
    const [answers, setAnswers] = useState<Record<number, number>>({});
    const [flagged, setFlagged] = useState<Set<number>>(new Set());
    const [showDashboard, setShowDashboard] = useState<boolean>(false);
    const [elapsedTime, setElapsedTime] = useState<number>(0);
    const [showFinishConfirm, setShowFinishConfirm] = useState<boolean>(false);

    const [hasSavedSession, setHasSavedSession] = useState<boolean>(false);
    const [showPrintModal, setShowPrintModal] = useState<boolean>(false);
    const [printQuestions, setPrintQuestions] = useState<LocalQuestion[]>([]);

    // Live elapsed timer during exam
    useEffect(() => {
        if (step !== 'playing' || !timeStart) return;
        const interval = setInterval(() => {
            setElapsedTime(Math.floor((Date.now() - timeStart) / 1000));
        }, 1000);
        return () => clearInterval(interval);
    }, [step, timeStart]);

    // Save session state to sessionStorage
    useEffect(() => {
        if (step === 'playing' && questions.length > 0) {
            sessionStorage.setItem('chemzim_quiz_session', JSON.stringify({
                questions,
                currentQuestionIndex,
                answers,
                flagged: Array.from(flagged),
                timeStart
            }));
        } else if (step === 'result' || step === 'mode-select') {
            sessionStorage.removeItem('chemzim_quiz_session');
        }
    }, [step, questions, currentQuestionIndex, answers, flagged, timeStart]);

    // Check for saved session on mount
    useEffect(() => {
        const saved = sessionStorage.getItem('chemzim_quiz_session');
        if (saved) {
            setHasSavedSession(true);
        }
    }, []);

    const handleResumeSession = () => {
        const saved = sessionStorage.getItem('chemzim_quiz_session');
        if (saved) {
            try {
                const data = JSON.parse(saved);
                setQuestions(data.questions || []);
                setCurrentQuestionIndex(data.currentQuestionIndex || 0);
                setAnswers(data.answers || {});
                setFlagged(new Set(data.flagged || []));
                setTimeStart(data.timeStart || Date.now());
                setSelectedAnswer(null);
                setIsAnswerSubmitted(false);
                setScore(0);
                setUserAnswers([]);
                setStep('playing');
            } catch (e) {
                console.error('Failed to parse saved session:', e);
            }
        }
        setHasSavedSession(false);
    };

    const handleDiscardSession = () => {
        sessionStorage.removeItem('chemzim_quiz_session');
        setHasSavedSession(false);
    };

    // 1. Build and map all questions on mount
    useEffect(() => {
        const staticExamQuestions: LocalQuestion[] = questionBank.map(q => {
            const unitTitle = resolveUnitTitle(q.topic, q.curriculum);
            const track = resolveCurriculumTitle(q.curriculum, q.topic);
            const level = q.level === 1 ? 'Easy' : q.level === 2 ? 'Medium' : 'Hard';
            
            let trackId = q.curriculum.toLowerCase().trim();
            if (trackId === 'igcse') trackId = 'cie-igcse';
            if (trackId === 'cie-alevel' || trackId === 'cie-a2') trackId = 'cie-alevel';
            if (trackId === 'edexcel-alevel') {
                if (q.topic.includes('unit-4') || q.topic.includes('unit-5') || q.topic.includes('unit-6') || q.topic.includes('u4') || q.topic.includes('u5') || q.topic.includes('u6')) {
                    trackId = 'edexcel-a2';
                } else {
                    trackId = 'edexcel-as';
                }
            }

            const { board, paperCode, paperType, paperLabel, unitNumber } = mapQuestionPaperAndUnit({
                id: q.id,
                source: q.source,
                paperType: q.paperType,
                markingScheme: q.markingScheme,
                topic: q.topic,
                curriculum: q.curriculum,
                trackId
            });

            return {
                source: 'exam',
                id: q.id,
                question: q.question,
                options: q.options.map((opt, idx) => ({
                    text: opt.text,
                    isCorrect: idx === q.correctAnswer
                })),
                correctAnswerIndex: q.correctAnswer,
                explanation: q.explanation,
                level,
                rawLevel: q.level,
                track,
                trackId,
                board,
                paperCode,
                paperType,
                paperLabel,
                unitNumber,
                unitTitle,
                rawUnitId: q.topic,
                lessonTitle: 'Exam Practice Bank',
                rawLessonNum: 0,
                imageHtml: q.imageHtml,
                tableHtml: q.tableHtml,
                sourceRef: q.source,
                graphConfig: q.graphConfig,
                apparatusScaleConfig: q.apparatusScaleConfig
            };
        });

        const modularExamQuestions: LocalQuestion[] = [];
        Object.entries(examsRegistry).forEach(([curriculumId, unitRegistry]) => {
            Object.entries(unitRegistry).forEach(([unitNumKey, lessonRegistry]) => {
                const unitNumber = parseInt(unitNumKey, 10);
                const track = resolveCurriculumTitle(curriculumId, `unit-${unitNumber}`);
                const unitTitle = resolveUnitTitle(`unit-${unitNumber}`, curriculumId);
                
                let trackId = curriculumId.toLowerCase().trim();
                if (trackId === 'edexcel-alevel') {
                    if (unitNumber >= 4) {
                        trackId = 'edexcel-a2';
                    } else {
                        trackId = 'edexcel-as';
                    }
                }
                
                Object.entries(lessonRegistry).forEach(([lessonNumKey, questions]) => {
                    const lessonNumber = parseInt(lessonNumKey, 10);
                    const registryKey = `${curriculumId}-unit-${unitNumber}`;
                    const curriculumLesson = curriculumRegistry[registryKey]?.[lessonNumber];
                    const lessonTitle = curriculumLesson 
                        ? `${lessonNumber}. ${curriculumLesson.title}` 
                        : `Lesson ${lessonNumber}`;
                        
                    questions.forEach(q => {
                        const level = q.level === 1 ? 'Easy' : q.level === 2 ? 'Medium' : 'Hard';
                        const { board, paperCode, paperType, paperLabel } = mapQuestionPaperAndUnit({
                            id: q.id,
                            source: q.source,
                            paperType: q.paperType,
                            markingScheme: q.markingScheme,
                            curriculum: curriculumId,
                            unitNumber
                        });

                        modularExamQuestions.push({
                            source: 'exam',
                            id: q.id,
                            question: q.question,
                            options: q.options.map((opt, idx) => ({
                                text: opt.text,
                                isCorrect: idx === q.correctAnswer
                            })),
                            correctAnswerIndex: q.correctAnswer,
                            explanation: q.explanation,
                            level,
                            rawLevel: q.level,
                            track,
                            trackId,
                            board,
                            paperCode,
                            paperType,
                            paperLabel,
                            unitNumber,
                            unitTitle,
                            rawUnitId: `unit-${unitNumber}`,
                            lessonTitle,
                            rawLessonNum: lessonNumber,
                            imageHtml: q.imageHtml,
                            tableHtml: q.tableHtml,
                            sourceRef: q.source,
                            graphConfig: q.graphConfig,
                            apparatusScaleConfig: q.apparatusScaleConfig
                        });
                    });
                });
            });
        });

        const modularIds = new Set(modularExamQuestions.map(q => q.id));
        const filteredStatic = staticExamQuestions.filter(q => !modularIds.has(q.id));

        const quizQuestions: LocalQuestion[] = [];
        Object.entries(curriculumRegistry).forEach(([registryKey, unitLessons]) => {
            const match = registryKey.match(/^(.+)-unit-(\d+)$/);
            if (!match) return;
            const curriculumId = match[1];
            const unitNumber = parseInt(match[2], 10);
            
            const unitTitle = resolveUnitTitle(`unit-${unitNumber}`, curriculumId);
            const track = resolveCurriculumTitle(curriculumId, `unit-${unitNumber}`);
            
            let trackId = curriculumId.toLowerCase().trim();
            if (trackId === 'edexcel-alevel') {
                if (unitNumber >= 4) {
                    trackId = 'edexcel-a2';
                } else {
                    trackId = 'edexcel-as';
                }
            }
            
            Object.entries(unitLessons).forEach(([lessonNumKey, lessonItem]) => {
                const lessonNumber = parseInt(lessonNumKey, 10);
                const lessonQuiz = lessonItem.quiz || [];
                
                lessonQuiz.forEach((q, idx) => {
                    const isCorrectIndex = q.options.findIndex((opt: any) => opt.isCorrect);
                    let level = 'Medium';
                    let rawLevel = 2;
                    if (q.id && q.id.includes('EASY')) { level = 'Easy'; rawLevel = 1; }
                    else if (q.id && q.id.includes('HARD')) { level = 'Hard'; rawLevel = 3; }
                    
                    const { board, paperCode, paperType, paperLabel } = mapQuestionPaperAndUnit({
                        id: q.id,
                        curriculum: curriculumId,
                        unitNumber
                    });

                    quizQuestions.push({
                        source: 'quiz',
                        id: q.id || `${curriculumId}-u${unitNumber}-l${lessonNumber}-q${idx}`,
                        question: q.question,
                        options: q.options.map((opt: any) => ({
                            text: opt.text,
                            isCorrect: opt.isCorrect
                        })),
                        correctAnswerIndex: isCorrectIndex !== -1 ? isCorrectIndex : 0,
                        explanation: q.explanation,
                        level,
                        rawLevel,
                        track,
                        trackId,
                        board,
                        paperCode,
                        paperType,
                        paperLabel,
                        unitNumber,
                        unitTitle,
                        rawUnitId: `unit-${unitNumber}`,
                        lessonTitle: `${lessonNumber}. ${lessonItem.title}`,
                        rawLessonNum: lessonNumber
                    });
                });
            });
        });

        setAllQuestions([...filteredStatic, ...modularExamQuestions, ...quizQuestions]);
    }, []);

    // State to allow Admin/Teachers or multi-enrolled students to switch curriculum on the fly
    const [adminSelectedTrackId, setAdminSelectedTrackId] = useState<string | null>(null);

    // Available tracks for this user:
    // - Admin: all curricula
    // - Multi-track student: user.enrolledTracks
    // - Single-track student: single curriculum
    const availableTracks = useMemo(() => {
        if (user?.isAdmin) {
            return [
                { id: 'cie-igcse', title: 'Cambridge IGCSE Chemistry (0620)' },
                { id: 'cie-as', title: 'Cambridge AS-Level Chemistry (9701)' },
                { id: 'cie-alevel', title: 'Cambridge A-Level Chemistry (9701)' },
                { id: 'edexcel-as', title: 'Edexcel AS Chemistry (Units 1–3)' },
                { id: 'edexcel-a2', title: 'Edexcel A2 Chemistry (Units 4–6)' },
                { id: 'edexcel-alevel', title: 'Edexcel IAL Chemistry (Units 1–6)' },
                { id: 'edexcel-igcse', title: 'Edexcel IGCSE Chemistry (4CH1)' },
            ];
        }

        if (user?.enrolledTracks && user.enrolledTracks.length > 0) {
            return user.enrolledTracks.map(t => {
                const clean = t.replace(/-2026\d+$/, '').toLowerCase().trim();
                let title = t;
                if (clean === 'edexcel-as') title = 'Edexcel AS Chemistry (Units 1–3)';
                else if (clean === 'edexcel-a2') title = 'Edexcel A2 Chemistry (Units 4–6)';
                else if (clean === 'edexcel-alevel') title = 'Edexcel IAL Chemistry (Units 1–6)';
                else if (clean === 'cie-igcse') title = 'Cambridge IGCSE Chemistry (0620)';
                else if (clean === 'cie-as') title = 'Cambridge AS-Level Chemistry (9701)';
                else if (clean === 'cie-alevel') title = 'Cambridge A-Level Chemistry (9701)';
                else {
                    const matched = allCurricula.find(c => c.id.startsWith(clean));
                    if (matched) title = matched.title;
                }
                return { id: clean, title };
            });
        }

        return [];
    }, [user]);

    // 2. Identify student track ID and active curriculum object
    const studentTrackId = useMemo(() => {
        if (adminSelectedTrackId) return adminSelectedTrackId;

        // Check localStorage first for active track selected by student across dashboard
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('chemzim_active_track');
            if (saved) {
                const cleanSaved = saved.replace(/-2026\d+$/, '').toLowerCase().trim();
                const matchedTrack = availableTracks.find(t => t.id === cleanSaved || t.id.startsWith(cleanSaved) || cleanSaved.startsWith(t.id));
                if (matchedTrack) {
                    return matchedTrack.id;
                }
            }
        }

        // Check if student has enrolledTracks
        if (user?.enrolledTracks && user.enrolledTracks.length > 0) {
            const firstClean = user.enrolledTracks[0].replace(/-2026\d+$/, '').toLowerCase().trim();
            return firstClean;
        }

        const track = user?.track || (user?.grade?.toLowerCase().includes('edexcel') 
            ? (user?.grade?.toLowerCase().includes('a2') ? 'edexcel-a2' : (user?.grade?.toLowerCase().includes('as') ? 'edexcel-as' : 'edexcel-as'))
            : (user?.grade === 'AS Level' ? 'cie-as' : (user?.grade === 'A2 Level' || user?.grade === 'IB' || user?.grade === 'A Level' ? 'cie-alevel' : 'cie-igcse')));
        
        let normalized = track.toLowerCase().trim();
        if (normalized === 'igcse') normalized = 'cie-igcse';
        
        return normalized;
    }, [user, adminSelectedTrackId, availableTracks]);

    const activeCurriculum = useMemo(() => {
        if (studentTrackId === 'edexcel-alevel') {
            return {
                id: 'edexcel-alevel',
                code: 'WCH11-16',
                title: 'Edexcel IAL Chemistry (Units 1–6)',
                description: 'Pearson Edexcel International A Level Chemistry covering Units 1 to 6.',
                topics: [
                    ...edexcelAsCurriculum.topics,
                    ...edexcelA2Curriculum.topics
                ]
            };
        }
        return allCurricula.find(c => c.id.startsWith(studentTrackId)) || allCurricula[0];
    }, [studentTrackId]);

    const isCambridgeTrack = useMemo(() => {
        return studentTrackId.startsWith('cie') || studentTrackId === 'igcse';
    }, [studentTrackId]);

    const isEdexcelTrack = useMemo(() => {
        return studentTrackId.startsWith('edexcel');
    }, [studentTrackId]);

    const isEdexcelIalTrack = useMemo(() => {
        return studentTrackId === 'edexcel-alevel' || studentTrackId === 'edexcel-as' || studentTrackId === 'edexcel-a2';
    }, [studentTrackId]);

    const isEdexcelAs = useMemo(() => studentTrackId === 'edexcel-as', [studentTrackId]);
    const isEdexcelA2 = useMemo(() => studentTrackId === 'edexcel-a2', [studentTrackId]);

    const visibleEdexcelUnits = useMemo(() => {
        if (isEdexcelAs) {
            return EDEXCEL_UNITS.filter(u => u.number <= 3);
        }
        if (isEdexcelA2) {
            return EDEXCEL_UNITS.filter(u => u.number >= 4);
        }
        return EDEXCEL_UNITS;
    }, [isEdexcelAs, isEdexcelA2]);

    const subItemTerm = isEdexcelTrack ? 'Topic' : 'Lesson';

    // 3. Dynamic Lists and selections matching active curriculum ONLY
    const unitsList = useMemo(() => {
        if (isEdexcelIalTrack) {
            return visibleEdexcelUnits.map(u => u.title);
        }
        return activeCurriculum.topics.map(t => {
            if (/^unit\s+\d+:/i.test(t.title)) {
                return t.title;
            }
            return `Unit ${t.number}: ${t.title}`;
        });
    }, [activeCurriculum, isEdexcelIalTrack, visibleEdexcelUnits]);

    const lessonsList = useMemo(() => {
        let matchingUnitTitle = selectedUnit;
        if (isEdexcelIalTrack && selectedEdexcelUnit !== 'all') {
            const edx = EDEXCEL_UNITS.find(u => u.number === selectedEdexcelUnit);
            if (edx) matchingUnitTitle = edx.title;
        }

        return Array.from(new Set(
            allQuestions
                .filter(q => {
                    let matchBoard = false;
                    if (isEdexcelAs) {
                        matchBoard = q.board === 'edexcel' && ((q.unitNumber !== undefined && q.unitNumber <= 3) || q.trackId === 'edexcel-as');
                    } else if (isEdexcelA2) {
                        matchBoard = q.board === 'edexcel' && ((q.unitNumber !== undefined && q.unitNumber >= 4) || q.trackId === 'edexcel-a2');
                    } else if (isEdexcelIalTrack) {
                        matchBoard = q.board === 'edexcel' && q.trackId !== 'edexcel-igcse';
                    } else {
                        matchBoard = q.trackId === studentTrackId;
                    }
                    const matchSource = selectedSource === 'all' || q.source === selectedSource;
                    const matchUnit = matchingUnitTitle === 'all' || q.unitTitle === matchingUnitTitle;
                    return matchBoard && matchSource && matchUnit;
                })
                .map(q => q.lessonTitle)
        )).filter(title => title !== 'Exam Practice Bank');
    }, [allQuestions, studentTrackId, isEdexcelIalTrack, isEdexcelAs, isEdexcelA2, selectedUnit, selectedEdexcelUnit, selectedSource]);

    const todayStr = useMemo(() => new Date().toISOString().split('T')[0], []);
    const dueMistakeMap = useMemo(() => {
        const map = new Map<string, number>();
        (mistakeInbox || []).forEach(m => {
            if (m.nextReviewDate <= todayStr) {
                map.set(m.questionId, m.interval || 1);
            }
        });
        return map;
    }, [mistakeInbox, todayStr]);

    // 4. Reset config when mode changes
    const handleModeSelect = (mode: 'comprehensive' | 'unit' | 'lesson' | 'custom' | 'spaced') => {
        setSelectedMode(mode);
        setSelectedSource('all');
        setSelectedPaper('all');
        setSelectedSeries('all');
        setSelectedEdexcelUnit('all');
        setSelectedUnit('all');
        setSelectedLesson('all');
        setSelectedLevel('all');
        setSelectedCustomUnits([]);
        if (mode === 'spaced') {
            setSelectedFilter('due');
        } else {
            setSelectedFilter('new');
        }
        setStep('config');
    };

    // 4a. Base pool for real-time button counts
    const baseBoardPool = useMemo(() => {
        let pool = allQuestions.filter(q => {
            if (isEdexcelAs) {
                return q.board === 'edexcel' && ((q.unitNumber !== undefined && q.unitNumber <= 3) || q.trackId === 'edexcel-as');
            }
            if (isEdexcelA2) {
                return q.board === 'edexcel' && ((q.unitNumber !== undefined && q.unitNumber >= 4) || q.trackId === 'edexcel-a2');
            }
            if (isEdexcelIalTrack) {
                return q.board === 'edexcel' && q.trackId !== 'edexcel-igcse';
            }
            return q.trackId === studentTrackId;
        });
        if (selectedSource !== 'all') {
            pool = pool.filter(q => q.source === selectedSource);
        }
        if (selectedLevel !== 'all') {
            pool = pool.filter(q => q.level.toLowerCase() === selectedLevel.toLowerCase());
        }
        return pool;
    }, [allQuestions, studentTrackId, isEdexcelIalTrack, isEdexcelAs, isEdexcelA2, selectedSource, selectedLevel]);

    const paperCounts = useMemo(() => {
        if (!isCambridgeTrack) return { all: 0, p2: 0, p4: 0, p6: 0 };
        return {
            all: baseBoardPool.length,
            p2: baseBoardPool.filter(q => q.paperCode === 'p2' || q.paperCode === 'p1').length,
            p4: baseBoardPool.filter(q => q.paperCode === 'p4').length,
            p6: baseBoardPool.filter(q => q.paperCode === 'p6').length,
        };
    }, [isCambridgeTrack, baseBoardPool]);

    const edexcelUnitCounts = useMemo(() => {
        if (!isEdexcelIalTrack) return {} as Record<number, number>;
        const counts: Record<number, number> = {};
        for (let u = 1; u <= 6; u++) {
            counts[u] = baseBoardPool.filter(q => q.unitNumber === u).length;
        }
        return counts;
    }, [isEdexcelIalTrack, baseBoardPool]);

    const seriesCounts = useMemo(() => {
        const pool = baseBoardPool;
        return {
            all: pool.length,
            oct2026: pool.filter(q => (q.sourceRef || q.source || '').includes('Oct 2026')).length,
            june2026: pool.filter(q => (q.sourceRef || q.source || '').includes('June 2026')).length,
            jan2026: pool.filter(q => (q.sourceRef || q.source || '').includes('Jan 2026')).length,
            oct2025: pool.filter(q => (q.sourceRef || q.source || '').includes('Oct 2025')).length,
            june2025: pool.filter(q => (q.sourceRef || q.source || '').includes('June 2025')).length,
            jan2025: pool.filter(q => (q.sourceRef || q.source || '').includes('Jan 2025')).length,
            specimen: pool.filter(q => {
                const s = q.sourceRef || q.source || '';
                return s.includes('Specimen') || s.includes('Sample');
            }).length,
        };
    }, [baseBoardPool]);

    // 4b. Filter memos for smart filters and exam generation
    const filteredPool = useMemo(() => {
        let pool = allQuestions.filter(q => {
            if (isEdexcelAs) {
                return q.board === 'edexcel' && ((q.unitNumber !== undefined && q.unitNumber <= 3) || q.trackId === 'edexcel-as');
            }
            if (isEdexcelA2) {
                return q.board === 'edexcel' && ((q.unitNumber !== undefined && q.unitNumber >= 4) || q.trackId === 'edexcel-a2');
            }
            if (isEdexcelIalTrack) {
                return q.board === 'edexcel' && q.trackId !== 'edexcel-igcse';
            }
            return q.trackId === studentTrackId;
        });

        // A. Cambridge Paper Type Filter
        if (isCambridgeTrack && selectedPaper !== 'all') {
            if (selectedPaper === 'p2') {
                pool = pool.filter(q => q.paperCode === 'p2' || q.paperCode === 'p1');
            } else {
                pool = pool.filter(q => q.paperCode === selectedPaper);
            }
        }

        // B. Edexcel Unit Filter (1 to 6)
        if (isEdexcelIalTrack && selectedEdexcelUnit !== 'all') {
            pool = pool.filter(q => q.unitNumber === selectedEdexcelUnit);
        }

        // C. Examination Series Filter
        if (selectedSeries !== 'all') {
            pool = pool.filter(q => {
                const s = q.sourceRef || q.source || '';
                if (selectedSeries === 'oct2026') return s.includes('Oct 2026');
                if (selectedSeries === 'june2026') return s.includes('June 2026');
                if (selectedSeries === 'jan2026') return s.includes('Jan 2026');
                if (selectedSeries === 'oct2025') return s.includes('Oct 2025');
                if (selectedSeries === 'june2025') return s.includes('June 2025');
                if (selectedSeries === 'jan2025') return s.includes('Jan 2025');
                if (selectedSeries === 'specimen') return s.includes('Specimen') || s.includes('Sample');
                return true;
            });
        }

        // Filter by source
        if (selectedSource !== 'all') {
            pool = pool.filter(q => q.source === selectedSource);
        }

        // Mode specific filtering
        if (selectedMode === 'unit') {
            if (selectedUnit !== 'all') {
                pool = pool.filter(q => q.unitTitle === selectedUnit);
            }
        } else if (selectedMode === 'lesson') {
            if (selectedUnit !== 'all') {
                pool = pool.filter(q => q.unitTitle === selectedUnit);
            }
            if (selectedLesson !== 'all') {
                pool = pool.filter(q => q.lessonTitle === selectedLesson);
            }
        } else if (selectedMode === 'custom') {
            if (selectedCustomUnits.length > 0) {
                pool = pool.filter(q => selectedCustomUnits.includes(q.unitTitle));
            }
        }

        // Difficulty filtering
        if (selectedLevel !== 'all') {
            pool = pool.filter(q => q.level.toLowerCase() === selectedLevel.toLowerCase());
        }

        return pool;
    }, [allQuestions, studentTrackId, isEdexcelTrack, isEdexcelAs, isEdexcelA2, isCambridgeTrack, selectedPaper, selectedEdexcelUnit, selectedSeries, selectedSource, selectedMode, selectedUnit, selectedLesson, selectedCustomUnits, selectedLevel]);

    const filterCounts = useMemo(() => {
        const all = filteredPool.length;
        const newCount = filteredPool.filter(q => !solvedQuestions[q.id]).length;
        const incorrect = filteredPool.filter(q => solvedQuestions[q.id] && !solvedQuestions[q.id].isCorrect).length;
        const correct = filteredPool.filter(q => solvedQuestions[q.id] && solvedQuestions[q.id].isCorrect).length;
        const due = filteredPool.filter(q => dueMistakeMap.has(q.id)).length;

        return { all, new: newCount, incorrect, correct, due };
    }, [filteredPool, solvedQuestions, dueMistakeMap]);

    const activeFilteredQuestions = useMemo(() => {
        if (selectedFilter === 'due') {
            const dueList = filteredPool.filter(q => dueMistakeMap.has(q.id));
            // If no specific due questions, fallback to all incorrect mistakes
            if (dueList.length > 0) return dueList;
            return filteredPool.filter(q => solvedQuestions[q.id] && !solvedQuestions[q.id].isCorrect);
        }
        if (selectedFilter === 'new') {
            return filteredPool.filter(q => !solvedQuestions[q.id]);
        }
        if (selectedFilter === 'incorrect') {
            return filteredPool.filter(q => solvedQuestions[q.id] && !solvedQuestions[q.id].isCorrect);
        }
        if (selectedFilter === 'correct') {
            return filteredPool.filter(q => solvedQuestions[q.id] && solvedQuestions[q.id].isCorrect);
        }
        return filteredPool;
    }, [filteredPool, selectedFilter, solvedQuestions, dueMistakeMap]);

    // 5. Generate and start the exam
    const handleStartExam = () => {
        const pool = activeFilteredQuestions;

        if (pool.length === 0) {
            alert("No questions found matching your criteria. Please adjust your selections.");
            return;
        }

        // Shuffle questions
        const shuffled = [...pool].sort(() => Math.random() - 0.5);
        const selected = shuffled.slice(0, Math.min(questionCount, shuffled.length));

        // Shuffle options for each question
        const finalized = selected.map(q => {
            const originalCorrectText = q.options[q.correctAnswerIndex]?.text;
            const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
            const newIndex = shuffledOptions.findIndex(o => o.text === originalCorrectText);
            return {
                ...q,
                options: shuffledOptions,
                correctAnswerIndex: newIndex !== -1 ? newIndex : 0
            };
        });

        setQuestions(finalized);
        setCurrentQuestionIndex(0);
        setSelectedAnswer(null);
        setIsAnswerSubmitted(false);
        setScore(0);
        setUserAnswers([]);
        setAnswers({});
        setFlagged(new Set());
        setShowDashboard(false);
        setShowFinishConfirm(false);
        setElapsedTime(0);
        setTimeStart(Date.now());
        setStep('playing');
    };

    // Print & Export Handlers
    const handleOpenPrintModalFromConfig = () => {
        const pool = activeFilteredQuestions;
        if (pool.length === 0) {
            alert("No questions found matching your criteria. Please adjust your selections.");
            return;
        }
        const shuffled = [...pool].sort(() => Math.random() - 0.5);
        const selected = shuffled.slice(0, Math.min(questionCount, shuffled.length));
        setPrintQuestions(selected);
        setShowPrintModal(true);
    };

    const handleOpenPrintModalFromResults = () => {
        setPrintQuestions(questions);
        setShowPrintModal(true);
    };

    const printableExamTitle = useMemo(() => {
        if (isCambridgeTrack) {
            let pName = 'All Papers';
            if (selectedPaper === 'p2') pName = 'Paper 2 (Multiple Choice)';
            else if (selectedPaper === 'p4') pName = 'Paper 4 (Theory & Structured)';
            else if (selectedPaper === 'p6') pName = 'Paper 6 (Alternative to Practical)';
            else if (selectedPaper === 'p1') pName = 'Paper 1 (Multiple Choice Core)';
            return `Cambridge IGCSE Chemistry Assessment • ${pName}`;
        }
        if (isEdexcelTrack) {
            let uName = 'Units 1–6';
            if (typeof selectedEdexcelUnit === 'number') {
                const found = EDEXCEL_UNITS.find(u => u.number === selectedEdexcelUnit);
                if (found) uName = found.title;
            }
            return `Pearson Edexcel Chemistry Examination • ${uName}`;
        }
        return 'Chemistry Examination Paper';
    }, [isCambridgeTrack, isEdexcelTrack, selectedPaper, selectedEdexcelUnit]);

    const printableCurriculumTitle = isCambridgeTrack 
        ? 'Cambridge IGCSE Chemistry (0620)' 
        : isEdexcelTrack 
        ? 'Pearson Edexcel IAL Chemistry (WCH11–16)' 
        : 'Comprehensive Chemistry';

    const printableTopicTitle = selectedUnit !== 'all' 
        ? selectedUnit 
        : (isCambridgeTrack 
            ? (selectedPaper !== 'all' ? `Paper: ${selectedPaper.toUpperCase()}` : 'All Core & Extended Topics') 
            : (selectedEdexcelUnit !== 'all' ? `Unit ${selectedEdexcelUnit}` : 'All Units (1–6)'));

    // Format elapsed time as MM:SS
    const formatTime = (seconds: number): string => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    // Navigate to a specific question
    const handleNavigateTo = (index: number) => {
        if (index >= 0 && index < questions.length) {
            setCurrentQuestionIndex(index);
        }
    };

    // Toggle flag for current question
    const handleToggleFlag = (index: number) => {
        setFlagged(prev => {
            const next = new Set(prev);
            if (next.has(index)) {
                next.delete(index);
            } else {
                next.add(index);
            }
            return next;
        });
    };

    // Select answer for current question (free navigation — doesn't advance)
    const handleSelectAnswer = (questionIndex: number, optionIndex: number) => {
        setAnswers(prev => ({ ...prev, [questionIndex]: optionIndex }));
    };

    // Count stats for the dashboard
    const answeredCount = Object.keys(answers).length;
    const flaggedCount = flagged.size;
    const unansweredCount = questions.length - answeredCount;

    // Finish exam — calculate all scores at once
    const handleFinishExam = () => {
        setShowFinishConfirm(false);
        setShowDashboard(false);

        let finalScore = 0;
        const finalUserAnswers: Array<{ questionId: string; selectedAnswer: number; isCorrect: boolean }> = [];
        const finalAttempts: Array<{ questionId: string; difficulty: number; isCorrect: boolean; unitId?: string }> = [];

        questions.forEach((q, idx) => {
            const selectedOpt = answers[idx];
            const isCorrect = selectedOpt !== undefined && selectedOpt === q.correctAnswerIndex;
            if (isCorrect) finalScore++;

            finalUserAnswers.push({
                questionId: q.id,
                selectedAnswer: selectedOpt !== undefined ? selectedOpt : -1,
                isCorrect
            });
            finalAttempts.push({
                questionId: q.id,
                difficulty: q.rawLevel || 1,
                isCorrect,
                unitId: q.rawUnitId
            });
        });

        setScore(finalScore);
        setUserAnswers(finalUserAnswers);
        setTimeTaken(Math.floor((Date.now() - timeStart) / 1000));

        // Add XP
        const earnedXP = finalScore * 15;
        if (addXP && earnedXP > 0) {
            addXP(earnedXP);
        }

        // Save question solved status
        saveQuestionAttempts(finalAttempts);

        setStep('result');
    };

    return (
        <div className="w-full max-w-5xl mx-auto pb-20 font-sans text-white">
            {hasSavedSession && (
                <div className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-[#0b0b1a] border border-indigo-500/30 rounded-3xl p-6 md:p-8 max-w-md w-full shadow-2xl shadow-indigo-500/10 space-y-6 text-center animate-in scale-in duration-250">
                        <div className="w-16 h-16 bg-indigo-500/10 border border-indigo-500/20 rounded-full flex items-center justify-center mx-auto text-indigo-400">
                            <Clock className="w-8 h-8 animate-pulse" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold">Unfinished Quiz Detected</h3>
                            <p className="text-sm text-slate-400">
                                You have an incomplete quiz session. Would you like to resume where you left off?
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <button
                                onClick={handleDiscardSession}
                                className="flex-1 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold text-sm text-slate-300 transition-all"
                            >
                                Discard
                            </button>
                            <button
                                onClick={handleResumeSession}
                                className="flex-1 py-3 bg-gradient-to-r from-indigo-500 to-violet-600 text-white rounded-xl font-bold text-sm shadow-lg shadow-indigo-500/20 transition-all hover:opacity-90 active:scale-95"
                            >
                                Resume
                            </button>
                        </div>
                    </div>
                </div>
            )}
            
            {/* Step Indicator Header */}
            <div className="flex items-center justify-between border-b border-white/5 pb-6 mb-10">
                <div>
                    <h1 className="text-3xl font-black tracking-tight">Exam Designer</h1>
                    <p className="text-slate-500 text-sm font-medium mt-1">
                        Select a style, configure the curriculum details, and challenge your knowledge.
                    </p>
                </div>
                
                {/* Step Indicators */}
                <div className="hidden md:flex items-center gap-3 bg-white/[0.02] border border-white/5 px-4 py-2 rounded-2xl">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-lg ${step === 'mode-select' ? 'bg-indigo-500 text-white' : 'text-slate-500'}`}>1. Mode</span>
                    <span className="text-slate-700 text-xs">/</span>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-lg ${step === 'config' ? 'bg-indigo-500 text-white' : 'text-slate-500'}`}>2. Config</span>
                    <span className="text-slate-700 text-xs">/</span>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-lg ${step === 'playing' ? 'bg-indigo-500 text-white' : 'text-slate-500'}`}>3. Test</span>
                    <span className="text-slate-700 text-xs">/</span>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-lg ${step === 'result' ? 'bg-indigo-500 text-white' : 'text-slate-500'}`}>4. Review</span>
                </div>
            </div>

            {/* STEP 1: MODE SELECT */}
            {step === 'mode-select' && (
                <div className="space-y-8 animate-in fade-in duration-500">
                    <div className="text-center max-w-2xl mx-auto space-y-3">
                        <Compass className="w-12 h-12 text-indigo-400 mx-auto animate-pulse" />
                        <h2 className="text-2xl md:text-3xl font-extrabold">Choose Your Exam Mode</h2>
                        
                        {/* Curriculum Display & Admin Switcher */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-1">
                            <p className="text-slate-400 text-sm">
                                Currently building exams for:
                            </p>
                            
                            {availableTracks.length > 1 ? (
                                <div className="inline-flex items-center gap-2 bg-indigo-500/15 border border-indigo-500/30 px-3 py-1.5 rounded-2xl shadow-inner">
                                    <span className="text-[10px] font-black uppercase text-indigo-400 tracking-wider bg-indigo-500/20 px-2 py-0.5 rounded-md">
                                        {user?.isAdmin ? 'Admin Switcher' : 'My Curricula'}
                                    </span>
                                    <select
                                        value={studentTrackId}
                                        onChange={e => {
                                            const newTrack = e.target.value;
                                            setAdminSelectedTrackId(newTrack);
                                            setSelectedUnit('all');
                                            setSelectedLesson('all');
                                            setSelectedEdexcelUnit('all');
                                            setSelectedCustomUnits([]);
                                            if (typeof window !== 'undefined') {
                                                localStorage.setItem('chemzim_active_track', newTrack);
                                                window.dispatchEvent(new CustomEvent('chemzim_track_changed', { detail: { trackId: newTrack } }));
                                            }
                                        }}
                                        className="bg-transparent text-indigo-200 text-sm font-bold outline-none cursor-pointer pr-2"
                                    >
                                        {availableTracks.map(track => (
                                            <option key={track.id} value={track.id} className="bg-[#0b0f1d] text-white">
                                                {track.title}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            ) : (
                                <span className="text-indigo-400 font-bold text-sm bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full">
                                    {activeCurriculum.title}
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        <button 
                            onClick={() => handleModeSelect('spaced')}
                            className="bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-transparent hover:from-amber-500/15 hover:via-orange-500/10 border border-amber-500/30 hover:border-amber-400/50 rounded-3xl p-8 text-left transition-all group flex flex-col justify-between h-56 shadow-lg shadow-amber-500/5 col-span-1 relative overflow-hidden"
                        >
                            <div className="absolute top-4 right-4 bg-amber-500/20 text-amber-300 text-[10px] font-black uppercase px-2.5 py-1 rounded-full border border-amber-500/30 tracking-wider">
                                Adaptive AI
                            </div>
                            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 group-hover:scale-110 transition-transform">
                                <RefreshCw className="w-6 h-6 text-amber-400 group-hover:rotate-180 transition-transform duration-500" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1 text-amber-200">⚡ Spaced Review</h3>
                                <p className="text-slate-400 text-sm">Leitner memory schedule: Automatically pulls due questions from your Mistake Bank.</p>
                            </div>
                        </button>

                        <button 
                            onClick={() => handleModeSelect('comprehensive')}
                            className="bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 hover:border-indigo-500/30 rounded-3xl p-8 text-left transition-all group flex flex-col justify-between h-56"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 group-hover:scale-110 transition-transform">
                                <Layers className="w-6 h-6 text-indigo-400" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1">Comprehensive Exam</h3>
                                <p className="text-slate-400 text-sm">Test your knowledge across all units and lessons in the curriculum.</p>
                            </div>
                        </button>

                        <button 
                            onClick={() => handleModeSelect('unit')}
                            className="bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 hover:border-indigo-500/30 rounded-3xl p-8 text-left transition-all group flex flex-col justify-between h-56"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 group-hover:scale-110 transition-transform">
                                <BookOpen className="w-6 h-6 text-emerald-400" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1">Unit Exam</h3>
                                <p className="text-slate-400 text-sm">Focus strictly on one full unit at a specific difficulty level.</p>
                            </div>
                        </button>

                        <button 
                            onClick={() => handleModeSelect('lesson')}
                            className="bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 hover:border-indigo-500/30 rounded-3xl p-8 text-left transition-all group flex flex-col justify-between h-56"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-sky-500/10 flex items-center justify-center border border-sky-500/20 group-hover:scale-110 transition-transform">
                                <Trophy className="w-6 h-6 text-sky-400" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1">{subItemTerm} Exam</h3>
                                <p className="text-slate-400 text-sm">Focus strictly on a single {subItemTerm.toLowerCase()}'s quiz and exam questions.</p>
                            </div>
                        </button>

                        <button 
                            onClick={() => handleModeSelect('custom')}
                            className="bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 hover:border-indigo-500/30 rounded-3xl p-8 text-left transition-all group flex flex-col justify-between h-56"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20 group-hover:scale-110 transition-transform">
                                <Sliders className="w-6 h-6 text-purple-400" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1">Custom Exam</h3>
                                <p className="text-slate-400 text-sm">Choose multiple units, question source types, and difficulty level.</p>
                            </div>
                        </button>

                        <Link 
                            href="/dashboard/speed-challenge"
                            className="bg-gradient-to-br from-amber-500/15 via-orange-500/10 to-yellow-500/5 hover:from-amber-500/25 hover:via-orange-500/20 border border-amber-500/30 hover:border-amber-400/50 rounded-3xl p-8 text-left transition-all group flex flex-col justify-between h-56 shadow-lg shadow-amber-500/5 relative overflow-hidden"
                        >
                            <div className="absolute top-4 right-4 bg-amber-400/20 text-amber-300 text-[10px] font-black uppercase px-2.5 py-1 rounded-full border border-amber-400/30 tracking-wider flex items-center gap-1">
                                <span>⚡ Double XP</span>
                            </div>
                            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 flex items-center justify-center border border-amber-500/30 group-hover:scale-110 transition-transform">
                                <Zap className="w-6 h-6 text-amber-400 fill-current group-hover:scale-110 transition-transform" />
                            </div>
                            <div>
                                <h3 className="text-xl font-black mb-1 text-amber-200 flex items-center gap-1.5">
                                    <span>⚡ Speed Blitz</span>
                                    <span className="text-xs text-orange-400 font-semibold">🔥 Streak</span>
                                </h3>
                                <p className="text-slate-300 text-sm">Rapid reaction sprints: 1-min, 3-min, or 5-min drills with combo multipliers.</p>
                            </div>
                        </Link>
                    </div>
                </div>
            )}

            {/* STEP 2: CONFIGURATION */}
            {step === 'config' && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-in fade-in duration-500">
                    
                    {/* Filter Inputs Column */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-[#0a0a1f]/60 border border-white/5 rounded-3xl p-6 md:p-8 space-y-6">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/5 pb-4">
                                <h3 className="text-lg font-bold flex items-center gap-2">
                                    <Settings className="w-5 h-5 text-indigo-400" />
                                    Configure Selections
                                </h3>

                                <div className="flex items-center gap-2">
                                    <span className="text-xs text-slate-400">Curriculum:</span>
                                    {availableTracks.length > 1 ? (
                                        <div className="inline-flex items-center gap-1.5 bg-indigo-500/15 border border-indigo-500/30 px-2.5 py-1 rounded-xl shadow-inner">
                                            <select
                                                value={studentTrackId}
                                                onChange={e => {
                                                    const newTrack = e.target.value;
                                                    setAdminSelectedTrackId(newTrack);
                                                    setSelectedUnit('all');
                                                    setSelectedLesson('all');
                                                    setSelectedEdexcelUnit('all');
                                                    setSelectedCustomUnits([]);
                                                    if (typeof window !== 'undefined') {
                                                        localStorage.setItem('chemzim_active_track', newTrack);
                                                        window.dispatchEvent(new CustomEvent('chemzim_track_changed', { detail: { trackId: newTrack } }));
                                                    }
                                                }}
                                                className="bg-transparent text-indigo-200 text-xs font-bold outline-none cursor-pointer pr-1"
                                            >
                                                {availableTracks.map(track => (
                                                    <option key={track.id} value={track.id} className="bg-[#0b0f1d] text-white">
                                                        {track.title}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    ) : (
                                        <span className="text-indigo-300 font-bold text-xs bg-indigo-500/15 border border-indigo-500/30 px-2.5 py-1 rounded-xl">
                                            {activeCurriculum.title}
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                
                                {/* 1. Cambridge Paper Type Selector */}
                                {isCambridgeTrack && (
                                    <div className="flex flex-col gap-2.5 sm:col-span-2 bg-[#050515]/90 p-4 md:p-5 border border-indigo-500/20 rounded-2xl shadow-lg shadow-indigo-950/20">
                                        <div className="flex items-center justify-between">
                                            <label className="text-xs text-indigo-300 font-bold uppercase tracking-wider flex items-center gap-2">
                                                <FileText className="w-4 h-4 text-indigo-400" />
                                                <span>Cambridge Paper Type</span>
                                                <span className="text-[10px] bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded-full border border-indigo-500/30 font-mono">
                                                    0620 / 9701
                                                </span>
                                            </label>
                                            {selectedPaper !== 'all' && (
                                                <button
                                                    type="button"
                                                    onClick={() => setSelectedPaper('all')}
                                                    className="text-[11px] text-slate-400 hover:text-white transition-colors"
                                                >
                                                    Reset to All Papers
                                                </button>
                                            )}
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5">
                                            {[
                                                { id: 'all', title: 'All Papers', desc: 'Full Mixed Coverage', badge: 'Mixed', icon: '🌐', count: paperCounts.all },
                                                { id: 'p2', title: 'Paper 2', desc: 'Multiple Choice (MCQ)', badge: 'Extended', icon: '📝', count: paperCounts.p2 },
                                                { id: 'p4', title: 'Paper 4', desc: 'Theory & Structured', badge: 'Written', icon: '📑', count: paperCounts.p4 },
                                                { id: 'p6', title: 'Paper 6', desc: 'Alternative to Practical', badge: 'Lab Skills', icon: '🧪', count: paperCounts.p6 },
                                            ].map(paper => {
                                                const isActive = selectedPaper === paper.id;
                                                return (
                                                    <button
                                                        key={paper.id}
                                                        type="button"
                                                        onClick={() => setSelectedPaper(paper.id as any)}
                                                        className={`p-3.5 rounded-xl text-left transition-all flex flex-col justify-between border ${
                                                            isActive
                                                                ? 'bg-gradient-to-br from-indigo-500/25 to-violet-500/15 border-indigo-400 text-white shadow-lg shadow-indigo-500/20 ring-1 ring-indigo-400/40'
                                                                : 'bg-white/[0.02] border-white/5 text-slate-300 hover:bg-white/[0.05] hover:text-white hover:border-white/10'
                                                        }`}
                                                    >
                                                        <div className="flex items-center justify-between mb-1.5">
                                                            <span className="text-xl">{paper.icon}</span>
                                                            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                                                                isActive ? 'bg-indigo-400 text-slate-950' : 'bg-white/5 text-slate-400 border border-white/10'
                                                            }`}>
                                                                {paper.badge}
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <div className="font-extrabold text-sm text-white">{paper.title}</div>
                                                            <div className="text-[11px] text-slate-400 leading-tight mt-0.5">{paper.desc}</div>
                                                        </div>
                                                        <div className="mt-2 pt-2 border-t border-white/5 flex items-center justify-between text-[11px]">
                                                            <span className="text-slate-500">Available:</span>
                                                            <span className={`font-bold tabular-nums ${isActive ? 'text-indigo-300' : 'text-slate-400'}`}>
                                                                {paper.count} Qs
                                                            </span>
                                                        </div>
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}

                                {/* 2. Edexcel Unit Selector (Dynamic: AS 1-3, A2 4-6, or IAL 1-6) */}
                                {isEdexcelIalTrack && (
                                    <div className="flex flex-col gap-3 sm:col-span-2 bg-[#050515]/90 p-4 md:p-5 border border-indigo-500/20 rounded-2xl shadow-lg shadow-indigo-950/20">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                            <label className="text-xs text-indigo-300 font-bold uppercase tracking-wider flex items-center gap-2">
                                                <FlaskConical className="w-4 h-4 text-indigo-400" />
                                                <span>
                                                    {isEdexcelAs 
                                                        ? 'Edexcel AS Unit Selection (Units 1–3)' 
                                                        : isEdexcelA2 
                                                        ? 'Edexcel A2 Unit Selection (Units 4–6)' 
                                                        : 'Edexcel Unit Selection (Units 1–6)'}
                                                </span>
                                                <span className="text-[10px] bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded-full border border-indigo-500/30 font-mono">
                                                    {isEdexcelAs ? 'AS Units 1–3' : isEdexcelA2 ? 'A2 Units 4–6' : 'IAL Units 1–6'}
                                                </span>
                                            </label>

                                            {/* Quick Level Group Tabs (shown only for full IAL track) */}
                                            {studentTrackId === 'edexcel-alevel' ? (
                                                <div className="flex items-center gap-1.5 bg-black/40 p-1 rounded-xl border border-white/5 self-start sm:self-auto">
                                                    <button
                                                        type="button"
                                                        onClick={() => {
                                                            setSelectedEdexcelUnit('all');
                                                            setSelectedUnit('all');
                                                            setSelectedLesson('all');
                                                        }}
                                                        className={`px-2.5 py-1 text-[11px] font-bold rounded-lg transition-all ${
                                                            selectedEdexcelUnit === 'all'
                                                                ? 'bg-indigo-500 text-white shadow'
                                                                : 'text-slate-400 hover:text-white'
                                                        }`}
                                                    >
                                                        All Units (1–6)
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => {
                                                            if (selectedEdexcelUnit !== 1 && selectedEdexcelUnit !== 2 && selectedEdexcelUnit !== 3) {
                                                                setSelectedEdexcelUnit(1);
                                                                setSelectedUnit(EDEXCEL_UNITS[0].title);
                                                                setSelectedLesson('all');
                                                            }
                                                        }}
                                                        className={`px-2.5 py-1 text-[11px] font-bold rounded-lg transition-all ${
                                                            typeof selectedEdexcelUnit === 'number' && selectedEdexcelUnit <= 3
                                                                ? 'bg-indigo-500/30 text-indigo-200 border border-indigo-500/40'
                                                                : 'text-slate-400 hover:text-white'
                                                        }`}
                                                    >
                                                        AS (Units 1–3)
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => {
                                                            if (selectedEdexcelUnit !== 4 && selectedEdexcelUnit !== 5 && selectedEdexcelUnit !== 6) {
                                                                setSelectedEdexcelUnit(4);
                                                                setSelectedUnit(EDEXCEL_UNITS[3].title);
                                                                setSelectedLesson('all');
                                                            }
                                                        }}
                                                        className={`px-2.5 py-1 text-[11px] font-bold rounded-lg transition-all ${
                                                            typeof selectedEdexcelUnit === 'number' && selectedEdexcelUnit >= 4
                                                                ? 'bg-indigo-500/30 text-indigo-200 border border-indigo-500/40'
                                                                : 'text-slate-400 hover:text-white'
                                                        }`}
                                                    >
                                                        A2 (Units 4–6)
                                                    </button>
                                                </div>
                                            ) : (
                                                selectedEdexcelUnit !== 'all' && (
                                                    <button
                                                        type="button"
                                                        onClick={() => {
                                                            setSelectedEdexcelUnit('all');
                                                            setSelectedUnit('all');
                                                            setSelectedLesson('all');
                                                        }}
                                                        className="text-[11px] text-slate-400 hover:text-white transition-colors self-start sm:self-auto"
                                                    >
                                                        Reset to All {isEdexcelAs ? 'AS Units' : isEdexcelA2 ? 'A2 Units' : 'Units'}
                                                    </button>
                                                )
                                            )}
                                        </div>

                                        {/* Unit Interactive Cards (filtered dynamically to AS 1-3, A2 4-6, or IAL 1-6) */}
                                        <div className={`grid grid-cols-1 sm:grid-cols-2 ${visibleEdexcelUnits.length <= 3 ? 'md:grid-cols-3' : 'md:grid-cols-3'} gap-2.5`}>
                                            {visibleEdexcelUnits.map(u => {
                                                const isActive = selectedEdexcelUnit === u.number;
                                                const count = edexcelUnitCounts[u.number] || 0;
                                                return (
                                                    <button
                                                        key={u.number}
                                                        type="button"
                                                        onClick={() => {
                                                            if (isActive) {
                                                                setSelectedEdexcelUnit('all');
                                                                setSelectedUnit('all');
                                                                setSelectedLesson('all');
                                                            } else {
                                                                setSelectedEdexcelUnit(u.number as any);
                                                                setSelectedUnit(u.title);
                                                                setSelectedLesson('all');
                                                            }
                                                        }}
                                                        className={`p-3.5 rounded-xl text-left transition-all border flex flex-col justify-between ${
                                                            isActive
                                                                ? 'bg-gradient-to-br from-indigo-500/25 to-violet-500/15 border-indigo-400 text-white shadow-lg shadow-indigo-500/20 ring-1 ring-indigo-400/40'
                                                                : 'bg-white/[0.02] border-white/5 text-slate-300 hover:bg-white/[0.05] hover:text-white hover:border-white/10'
                                                        }`}
                                                    >
                                                        <div className="flex items-center justify-between mb-1">
                                                            <span className="font-mono text-xs font-black text-indigo-400 bg-indigo-500/20 border border-indigo-500/30 px-2 py-0.5 rounded-md">
                                                                Unit {u.number}
                                                            </span>
                                                            <span className="text-[10px] text-slate-400 font-bold">{u.level} • {u.code}</span>
                                                        </div>
                                                        <div className="font-bold text-xs line-clamp-2 mt-1 text-slate-200">
                                                            {u.title.replace(/^Unit\s+\d+:\s*/i, '')}
                                                        </div>
                                                        <div className="mt-2 pt-2 border-t border-white/5 flex items-center justify-between text-[11px]">
                                                            <span className="text-slate-500">Available:</span>
                                                            <span className={`font-bold tabular-nums ${isActive ? 'text-indigo-300' : 'text-slate-400'}`}>
                                                                {count} Qs
                                                            </span>
                                                        </div>
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}

                                {/* 3. Examination Series Selector (Oct 2026, June 2026, Jan 2026, Oct 2025, June 2025, Jan 2025, Specimen) */}
                                <div className="flex flex-col gap-2.5 sm:col-span-2 bg-[#050515]/90 p-4 md:p-5 border border-indigo-500/20 rounded-2xl shadow-lg shadow-indigo-950/20">
                                    <div className="flex items-center justify-between">
                                        <label className="text-xs text-indigo-300 font-bold uppercase tracking-wider flex items-center gap-2">
                                            <Sparkles className="w-4 h-4 text-amber-400" />
                                            <span>Examination Series Quick Filter</span>
                                            <span className="text-[10px] bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded-full border border-indigo-500/30 font-mono">
                                                2025–2026 Series
                                            </span>
                                        </label>
                                        {selectedSeries !== 'all' && (
                                            <button
                                                type="button"
                                                onClick={() => setSelectedSeries('all')}
                                                className="text-[11px] text-slate-400 hover:text-white transition-colors"
                                            >
                                                Reset to All Series
                                            </button>
                                        )}
                                    </div>

                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                        {[
                                            { id: 'all', label: 'All Series', desc: 'Comprehensive', icon: '🌐', count: seriesCounts.all },
                                            { id: 'oct2026', label: 'Oct 2026', desc: 'Autumn Series', icon: '🍁', count: seriesCounts.oct2026 },
                                            { id: 'june2026', label: 'June 2026', desc: 'Summer Series', icon: '✨', count: seriesCounts.june2026 },
                                            { id: 'jan2026', label: 'Jan 2026', desc: 'Winter Series', icon: '❄️', count: seriesCounts.jan2026 },
                                            { id: 'oct2025', label: 'Oct 2025', desc: 'Autumn Series', icon: '🍂', count: seriesCounts.oct2025 },
                                            { id: 'june2025', label: 'June 2025', desc: 'Summer Series', icon: '☀️', count: seriesCounts.june2025 },
                                            { id: 'jan2025', label: 'Jan 2025', desc: 'Winter Series', icon: '🧊', count: seriesCounts.jan2025 },
                                            { id: 'specimen', label: 'Specimen', desc: 'Sample Papers', icon: '📜', count: seriesCounts.specimen },
                                        ].map(ser => {
                                            const isActive = selectedSeries === ser.id;
                                            return (
                                                <button
                                                    key={ser.id}
                                                    type="button"
                                                    onClick={() => setSelectedSeries(ser.id)}
                                                    className={`p-2.5 rounded-xl text-left transition-all flex flex-col justify-between border ${
                                                        isActive
                                                            ? 'bg-gradient-to-br from-indigo-500/25 to-violet-500/15 border-indigo-400 text-white shadow-lg shadow-indigo-500/20 ring-1 ring-indigo-400/40'
                                                            : 'bg-white/[0.02] border-white/5 text-slate-300 hover:bg-white/[0.05] hover:text-white hover:border-white/10'
                                                    }`}
                                                >
                                                    <div className="flex items-center justify-between mb-1">
                                                        <span className="text-base">{ser.icon}</span>
                                                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                                                            isActive ? 'bg-indigo-400 text-slate-950' : 'bg-white/5 text-slate-400 border border-white/10'
                                                        }`}>
                                                            {ser.count} Qs
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <div className="font-extrabold text-xs text-white">{ser.label}</div>
                                                        <div className="text-[10px] text-slate-400 leading-tight">{ser.desc}</div>
                                                    </div>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                                
                                {/* A. Source Type */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Question Source</label>
                                    <div className="flex flex-col gap-2 bg-[#050515]/80 p-1.5 border border-white/5 rounded-2xl">
                                        {[
                                            { id: 'all', label: 'Mixed (Exam & Quiz)', icon: '🧪' },
                                            { id: 'exam', label: 'Exams Only', icon: '📝' },
                                            { id: 'quiz', label: 'Quizzes Only', icon: '📖' }
                                        ].map(src => {
                                            const isActive = selectedSource === src.id;
                                            return (
                                                <button
                                                    key={src.id}
                                                    type="button"
                                                    onClick={() => {
                                                        setSelectedSource(src.id as any);
                                                        setSelectedLesson('all');
                                                    }}
                                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold transition-all border ${
                                                        isActive
                                                            ? 'bg-indigo-500/15 border-indigo-500/30 text-indigo-300 shadow-inner'
                                                            : 'bg-white/[0.01] border-transparent text-slate-400 hover:text-white hover:bg-white/[0.03]'
                                                    }`}
                                                >
                                                    <span className="text-base">{src.icon}</span>
                                                    <span>{src.label}</span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* B. Difficulty */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Difficulty Level</label>
                                    <div className="flex flex-col gap-2 bg-[#050515]/80 p-1.5 border border-white/5 rounded-2xl">
                                        {[
                                            { id: 'all', label: 'All Difficulties', icon: '⚖️' },
                                            { id: 'easy', label: 'Easy', icon: '🟢' },
                                            { id: 'medium', label: 'Medium', icon: '🟡' },
                                            { id: 'hard', label: 'Hard', icon: '🔴' }
                                        ].map(lvl => {
                                            const isActive = selectedLevel === lvl.id;
                                            return (
                                                <button
                                                    key={lvl.id}
                                                    type="button"
                                                    onClick={() => setSelectedLevel(lvl.id)}
                                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold transition-all border ${
                                                        isActive
                                                            ? 'bg-indigo-500/15 border-indigo-500/30 text-indigo-300 shadow-inner'
                                                            : 'bg-white/[0.01] border-transparent text-slate-400 hover:text-white hover:bg-white/[0.03]'
                                                    }`}
                                                >
                                                    <span className="text-base">{lvl.icon}</span>
                                                    <span>{lvl.label}</span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Smart Filtering */}
                                <div className="flex flex-col gap-2 sm:col-span-2">
                                    <label className="text-[10px] text-slate-400 font-bold uppercase tracking-widest flex items-center justify-between">
                                        <span>Question Filtering</span>
                                        <span className="text-amber-400 font-bold">Leitner Smart Schedule</span>
                                    </label>
                                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 bg-[#050515]/80 p-1 border border-white/5 rounded-2xl">
                                        {[
                                            { id: 'due', label: '⚡ Due Review', count: filterCounts.due, highlight: true },
                                            { id: 'incorrect', label: '❌ Mistakes', count: filterCounts.incorrect },
                                            { id: 'new', label: '🆕 Unseen', count: filterCounts.new },
                                            { id: 'correct', label: '✅ Mastered', count: filterCounts.correct },
                                            { id: 'all', label: '🌐 All', count: filterCounts.all }
                                        ].map(tab => {
                                            const isActive = selectedFilter === tab.id;
                                            return (
                                                <button
                                                    key={tab.id}
                                                    type="button"
                                                    onClick={() => setSelectedFilter(tab.id as any)}
                                                    className={`py-3 px-2 rounded-xl text-xs font-bold transition-all flex flex-col items-center justify-center gap-1 ${
                                                        isActive
                                                            ? tab.highlight 
                                                                ? 'bg-amber-500/20 border border-amber-500/40 text-amber-300 shadow-lg shadow-amber-500/10'
                                                                : 'bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 shadow-lg'
                                                            : 'text-slate-500 hover:text-slate-300 hover:bg-white/[0.02] border border-transparent'
                                                    }`}
                                                >
                                                    <span>{tab.label}</span>
                                                    <span className={`text-[10px] font-medium opacity-80 ${isActive ? (tab.highlight ? 'text-amber-300' : 'text-indigo-400') : 'text-slate-600'}`}>
                                                        ({tab.count})
                                                    </span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                {activeFilteredQuestions.length === 0 && (
                                    <div className="sm:col-span-2 bg-rose-500/10 border border-rose-500/20 rounded-2xl p-4 flex items-start gap-3 text-rose-300 text-sm">
                                        <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                        <div className="space-y-1">
                                            <p className="font-bold">No questions match this filter!</p>
                                            <p className="text-xs text-rose-400/90">
                                                Try changing your filter settings, selecting another topic, or switching to "All Questions" to practice.
                                            </p>
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setSelectedFilter('all');
                                                    setSelectedPaper('all');
                                                    setSelectedSeries('all');
                                                    setSelectedEdexcelUnit('all');
                                                }}
                                                className="mt-2 text-xs font-bold bg-rose-500/20 hover:bg-rose-500/30 border border-rose-500/30 px-3 py-1.5 rounded-lg transition-colors text-white"
                                            >
                                                Switch to All Questions
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {/* C. Unit selection if applicable */}
                                {(selectedMode === 'unit' || selectedMode === 'lesson' || (!isCambridgeTrack && !isEdexcelIalTrack)) && (
                                    <div className="flex flex-col gap-1.5 sm:col-span-2">
                                        <label className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                                            {isEdexcelIalTrack ? 'Select Target Unit' : 'Select Target Unit / Topic'}
                                        </label>
                                        <select 
                                            value={selectedUnit}
                                            onChange={e => {
                                                const val = e.target.value;
                                                setSelectedUnit(val);
                                                setSelectedLesson('all');
                                                if (isEdexcelIalTrack) {
                                                    const matchNum = val.match(/unit\s+(\d+)/i);
                                                    if (matchNum) {
                                                        setSelectedEdexcelUnit(parseInt(matchNum[1], 10));
                                                    } else {
                                                        setSelectedEdexcelUnit('all');
                                                    }
                                                }
                                            }}
                                            className="bg-[#0b0b1a] border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-indigo-500/50 outline-none text-slate-300 w-full"
                                        >
                                            <option value="all">Choose a Unit...</option>
                                            {unitsList.map(unit => (
                                                <option key={unit} value={unit}>{unit}</option>
                                            ))}
                                        </select>
                                    </div>
                                )}

                                {/* D. Lesson selection if applicable */}
                                {selectedMode === 'lesson' && (
                                    <div className="flex flex-col gap-1.5 sm:col-span-2">
                                        <label className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                                            Select {subItemTerm}
                                        </label>
                                        <select 
                                            value={selectedLesson}
                                            onChange={e => setSelectedLesson(e.target.value)}
                                            className="bg-[#0b0b1a] border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-indigo-500/50 outline-none text-slate-300 w-full"
                                        >
                                            <option value="all">All {subItemTerm}s in Unit</option>
                                            {lessonsList.map(lesson => (
                                                <option key={lesson} value={lesson}>{lesson}</option>
                                            ))}
                                        </select>
                                    </div>
                                )}
                            </div>

                            {/* E. Custom Units Selection Checkboxes */}
                            {selectedMode === 'custom' && (
                                <div className="space-y-3 pt-4 border-t border-white/5">
                                    <label className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Select Units to Include</label>
                                    <div className="grid sm:grid-cols-2 gap-3">
                                        {unitsList.map(unit => {
                                            const isChecked = selectedCustomUnits.includes(unit);
                                            return (
                                                <button
                                                    key={unit}
                                                    onClick={() => {
                                                        setSelectedCustomUnits(prev => 
                                                            prev.includes(unit) ? prev.filter(u => u !== unit) : [...prev, unit]
                                                        );
                                                    }}
                                                    className={`flex items-center gap-3 p-4 rounded-xl border text-left transition-all ${
                                                        isChecked 
                                                            ? 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400 shadow-inner' 
                                                            : 'bg-white/[0.02] border-white/5 text-slate-400 hover:text-white hover:bg-white/5'
                                                    }`}
                                                >
                                                    <div className={`w-5 h-5 rounded flex items-center justify-center border ${
                                                        isChecked ? 'bg-indigo-500 border-indigo-400 text-white' : 'border-white/20'
                                                    }`}>
                                                        {isChecked && <Check className="w-3.5 h-3.5" />}
                                                    </div>
                                                    <span className="text-sm font-semibold truncate">{unit}</span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}

                            {/* F. Question Count Buttons */}
                            <div className="space-y-3 pt-4 border-t border-white/5">
                                <label className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Number of Questions</label>
                                <div className="flex gap-2">
                                    {[5, 10, 15, 20].map(count => (
                                        <button
                                            key={count}
                                            onClick={() => setQuestionCount(count)}
                                            className={`flex-1 py-3 rounded-xl border text-sm font-bold transition-all ${
                                                questionCount === count
                                                    ? 'bg-indigo-500/15 border-indigo-500/40 text-indigo-400'
                                                    : 'bg-white/5 border-white/5 text-slate-400 hover:text-white'
                                            }`}
                                        >
                                            {count}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Summary Sidebar Column */}
                    <div className="bg-[#0a0a1f]/60 border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col justify-between h-fit space-y-6">
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold">Exam Overview</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between items-center">
                                    <span className="text-slate-400">Curriculum:</span>
                                    {availableTracks.length > 1 ? (
                                        <select
                                            value={studentTrackId}
                                            onChange={e => {
                                                setAdminSelectedTrackId(e.target.value);
                                                setSelectedUnit('all');
                                                setSelectedLesson('all');
                                                setSelectedCustomUnits([]);
                                                setSelectedPaper('all');
                                                setSelectedEdexcelUnit('all');
                                            }}
                                            className="bg-[#0b0f1d] border border-white/10 rounded-lg text-white font-semibold text-xs px-2 py-1 outline-none max-w-[170px]"
                                        >
                                            {availableTracks.map(t => (
                                                <option key={t.id} value={t.id}>{t.title}</option>
                                            ))}
                                        </select>
                                    ) : (
                                        <span className="text-white font-semibold">{activeCurriculum.title}</span>
                                    )}
                                </div>

                                {/* Cambridge Paper in Overview */}
                                {isCambridgeTrack && (
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-400">Paper Type:</span>
                                        <span className="text-indigo-400 font-bold text-right text-xs">
                                            {selectedPaper === 'all' ? 'All Papers (Mixed)' :
                                             selectedPaper === 'p2' ? 'Paper 2 (MCQ)' :
                                             selectedPaper === 'p4' ? 'Paper 4 (Theory)' :
                                             selectedPaper === 'p6' ? 'Paper 6 (Practical)' : 'Paper 1 (Core)'}
                                        </span>
                                    </div>
                                )}

                                {/* Edexcel Unit in Overview */}
                                {isEdexcelIalTrack && (
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-400">Target Unit:</span>
                                        <span 
                                            className="text-indigo-400 font-bold text-right text-xs truncate max-w-[170px]" 
                                            title={typeof selectedEdexcelUnit === 'number' ? `Unit ${selectedEdexcelUnit}` : (isEdexcelAs ? 'All AS Units (1–3)' : isEdexcelA2 ? 'All A2 Units (4–6)' : 'All Units (1–6)')}
                                        >
                                            {typeof selectedEdexcelUnit === 'number' 
                                                ? `Unit ${selectedEdexcelUnit}` 
                                                : (isEdexcelAs ? 'AS Units (1–3)' : isEdexcelA2 ? 'A2 Units (4–6)' : 'All Units (1–6)')}
                                        </span>
                                    </div>
                                )}

                                {/* Series in Overview */}
                                {selectedSeries !== 'all' && (
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-400">Series:</span>
                                        <span className="text-amber-400 font-bold text-right text-xs">
                                            {selectedSeries === 'oct2026' ? '🍁 Oct 2026' :
                                             selectedSeries === 'june2026' ? '✨ June 2026' :
                                             selectedSeries === 'jan2026' ? '❄️ Jan 2026' :
                                             selectedSeries === 'oct2025' ? '🍂 Oct 2025' :
                                             selectedSeries === 'june2025' ? '☀️ June 2025' :
                                             selectedSeries === 'jan2025' ? '🧊 Jan 2025' :
                                             '📜 Specimen'}
                                        </span>
                                    </div>
                                )}

                                <div className="flex justify-between">
                                    <span className="text-slate-400">Mode:</span>
                                    <span className="text-indigo-400 font-bold capitalize">
                                        {selectedMode === 'lesson' ? `${subItemTerm} Exam` : `${selectedMode} Exam`}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-400">Source:</span>
                                    <span className="text-white font-semibold">
                                        {selectedSource === 'all' ? 'Mixed' : selectedSource === 'exam' ? 'Exams' : 'Quizzes'}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-400">Difficulty:</span>
                                    <span className="text-white font-semibold capitalize">{selectedLevel === 'all' ? 'All levels' : selectedLevel}</span>
                                </div>
                                <div className="flex justify-between border-t border-white/5 pt-2 mt-2">
                                    <span className="text-slate-400">Available:</span>
                                    <span className="text-indigo-400 font-bold">{activeFilteredQuestions.length} Questions</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <button
                                onClick={handleStartExam}
                                disabled={activeFilteredQuestions.length === 0}
                                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-violet-600 text-white py-4 rounded-2xl font-bold shadow-xl shadow-indigo-500/20 hover:opacity-90 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                            >
                                <Play className="w-5 h-5" />
                                Start Exam
                            </button>

                            <button
                                onClick={handleOpenPrintModalFromConfig}
                                disabled={activeFilteredQuestions.length === 0}
                                className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 py-3 rounded-2xl font-bold text-xs transition-all disabled:opacity-40"
                            >
                                <Printer className="w-4 h-4 text-emerald-400" />
                                <span>Export Configured Exam as PDF</span>
                            </button>

                            <button
                                onClick={() => setStep('mode-select')}
                                className="w-full text-center text-xs text-slate-500 hover:text-white py-2 transition-colors"
                            >
                                Back to Mode Select
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* STEP 3: GAMEPLAY — Free Navigation */}
            {step === 'playing' && questions.length > 0 && (
                <div className="space-y-4 animate-in fade-in duration-500">

                    {/* Top Bar: Timer + Controls */}
                    <div className="bg-[#0a0a1f]/60 border border-white/5 rounded-2xl p-3 md:p-4 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => setShowFinishConfirm(true)}
                                className="px-4 py-2 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 hover:border-rose-500/40 text-rose-400 text-xs font-bold rounded-xl transition-all"
                            >
                                Finish
                            </button>
                            <button
                                onClick={() => setShowDashboard(true)}
                                className="flex items-center gap-1.5 px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 text-xs font-bold rounded-xl transition-all"
                            >
                                <LayoutGrid className="w-3.5 h-3.5" />
                                <span className="hidden sm:inline">Dashboard</span>
                            </button>
                        </div>

                        <span className="text-sm font-bold text-slate-400">
                            {currentQuestionIndex + 1} / {questions.length}
                        </span>

                        <div className="flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-4 py-2 rounded-xl">
                            <Clock className="w-4 h-4 text-indigo-400" />
                            <span className="text-sm font-mono font-bold text-indigo-300 tabular-nums">{formatTime(elapsedTime)}</span>
                        </div>
                    </div>

                    {/* Horizontal Question Navigator Bar */}
                    <div className="bg-[#0a0a1f]/60 border border-white/5 rounded-2xl p-3 md:p-4">
                        <div className="flex items-center justify-center gap-1.5 flex-wrap">
                            {questions.map((_, idx) => {
                                const isCurrent = idx === currentQuestionIndex;
                                const isAnswered = answers[idx] !== undefined;
                                const isFlagged = flagged.has(idx);

                                let circleStyle = 'bg-white/5 border-white/10 text-slate-500 hover:bg-white/10 hover:text-white';
                                if (isCurrent) {
                                    circleStyle = 'bg-indigo-500 border-indigo-400 text-white shadow-lg shadow-indigo-500/30 scale-110';
                                } else if (isFlagged && isAnswered) {
                                    circleStyle = 'bg-amber-500/20 border-amber-500/40 text-amber-400';
                                } else if (isFlagged) {
                                    circleStyle = 'bg-amber-500/15 border-amber-500/30 text-amber-400';
                                } else if (isAnswered) {
                                    circleStyle = 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400';
                                }

                                return (
                                    <button
                                        key={idx}
                                        onClick={() => handleNavigateTo(idx)}
                                        className={`relative w-9 h-9 md:w-10 md:h-10 rounded-full border-2 flex items-center justify-center text-xs md:text-sm font-bold transition-all duration-200 ${circleStyle}`}
                                    >
                                        {idx + 1}
                                        {isFlagged && (
                                            <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-500 rounded-full border border-[#0a0a1f] flex items-center justify-center">
                                                <Flag className="w-1.5 h-1.5 text-white" />
                                            </span>
                                        )}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Legend */}
                        <div className="flex items-center justify-center gap-4 mt-3 text-[10px] text-slate-500">
                            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500 inline-block" /> Current</span>
                            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/40 inline-block" /> Answered</span>
                            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/40 inline-block" /> Flagged</span>
                            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-white/10 inline-block" /> Unanswered</span>
                        </div>
                    </div>

                    {/* Question Card */}
                    <div className="bg-[#0a0a1f]/60 border border-white/5 rounded-3xl p-6 md:p-10 space-y-6">
                        {/* Flag for Review */}
                        <div className="flex items-center justify-between">
                            <span className={`text-xs font-bold px-3 py-1 rounded-lg ${
                                questions[currentQuestionIndex].level === 'Easy' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                                questions[currentQuestionIndex].level === 'Hard' ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20' :
                                'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                            }`}>
                                {questions[currentQuestionIndex].level}
                            </span>
                            <button
                                onClick={() => handleToggleFlag(currentQuestionIndex)}
                                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                                    flagged.has(currentQuestionIndex)
                                        ? 'bg-amber-500/15 border-amber-500/30 text-amber-400'
                                        : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                                }`}
                            >
                                <Flag className="w-3.5 h-3.5" />
                                {flagged.has(currentQuestionIndex) ? 'Flagged for Review' : 'Flag for Review'}
                            </button>
                        </div>

                        {/* Question Text */}
                        <div className="text-xl md:text-2xl font-semibold text-white leading-relaxed">
                            {renderQuestionContent(questions[currentQuestionIndex].question)}
                        </div>

                        {/* Interactive Graph Plotter */}
                        {questions[currentQuestionIndex].graphConfig && (
                            <div className="my-6">
                                <InteractiveGraphPlotter config={questions[currentQuestionIndex].graphConfig} />
                            </div>
                        )}

                        {/* Interactive Apparatus Scale Reader */}
                        {questions[currentQuestionIndex].apparatusScaleConfig && (
                            <div className="my-6">
                                <InteractiveScaleReader config={questions[currentQuestionIndex].apparatusScaleConfig} />
                            </div>
                        )}

                        {questions[currentQuestionIndex].imageHtml && !questions[currentQuestionIndex].graphConfig && !questions[currentQuestionIndex].apparatusScaleConfig && (
                            <div className="my-4 max-w-full overflow-x-auto flex justify-center" dangerouslySetInnerHTML={{ __html: questions[currentQuestionIndex].imageHtml }} />
                        )}

                        {questions[currentQuestionIndex].tableHtml && (
                            <div className="my-4 max-w-full overflow-x-auto flex justify-center text-slate-200" dangerouslySetInnerHTML={{ __html: questions[currentQuestionIndex].tableHtml }} />
                        )}

                        {/* Options */}
                        <div className="grid gap-3">
                            {questions[currentQuestionIndex].options.map((option, idx) => {
                                const isSelected = answers[currentQuestionIndex] === idx;
                                
                                let cardStyle = 'bg-white/[0.02] border-white/5 text-slate-300 hover:bg-white/5';
                                if (isSelected) {
                                    cardStyle = 'bg-indigo-500/10 border-indigo-500/40 text-indigo-300 ring-1 ring-indigo-500/20';
                                }

                                return (
                                    <button
                                        key={idx}
                                        onClick={() => handleSelectAnswer(currentQuestionIndex, idx)}
                                        className={`w-full flex items-center p-4 md:p-5 rounded-2xl border text-left transition-all ${cardStyle}`}
                                    >
                                        <span className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 text-sm font-bold flex-shrink-0 ${
                                            isSelected ? 'bg-indigo-500 text-white' : 'bg-white/5 text-slate-500 border border-white/10'
                                        }`}>
                                            {String.fromCharCode(65 + idx)}
                                        </span>
                                        <span className="font-medium text-base">
                                            {renderTextWithMath(option.text)}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Navigation Arrows */}
                        <div className="flex items-center justify-between pt-4 border-t border-white/5">
                            <button
                                onClick={() => handleNavigateTo(currentQuestionIndex - 1)}
                                disabled={currentQuestionIndex === 0}
                                className="flex items-center gap-2 px-5 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-bold text-sm transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                            >
                                <ChevronLeft className="w-4 h-4" />
                                Previous
                            </button>

                            <span className="text-xs text-slate-500 font-medium">
                                {answeredCount}/{questions.length} answered
                                {flaggedCount > 0 && <span className="text-amber-500 ml-2">• {flaggedCount} flagged</span>}
                            </span>

                            {currentQuestionIndex < questions.length - 1 ? (
                                <button
                                    onClick={() => handleNavigateTo(currentQuestionIndex + 1)}
                                    className="flex items-center gap-2 px-5 py-3 bg-indigo-500/15 hover:bg-indigo-500/25 border border-indigo-500/30 text-indigo-300 rounded-xl font-bold text-sm transition-all"
                                >
                                    Next
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                            ) : (
                                <button
                                    onClick={() => setShowFinishConfirm(true)}
                                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-violet-600 text-white rounded-xl font-bold text-sm shadow-lg shadow-indigo-500/20 transition-all hover:opacity-90 active:scale-95"
                                >
                                    Finish Exam
                                    <CheckCircle2 className="w-4 h-4" />
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Question Dashboard Modal */}
                    {showDashboard && (
                        <div className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                            <div className="bg-[#0b0b1a] border border-white/10 rounded-3xl p-6 md:p-8 max-w-lg w-full shadow-2xl shadow-black/50 space-y-6 animate-in scale-in duration-250 max-h-[80vh] overflow-y-auto">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                        <LayoutGrid className="w-5 h-5 text-indigo-400" />
                                        Question Dashboard
                                    </h3>
                                    <button onClick={() => setShowDashboard(false)} className="text-slate-500 hover:text-white transition-colors">
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* Stats Summary */}
                                <div className="grid grid-cols-3 gap-3">
                                    <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3 text-center">
                                        <span className="text-lg font-black text-emerald-400">{answeredCount}</span>
                                        <span className="text-[10px] text-emerald-400/70 block">Answered</span>
                                    </div>
                                    <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-3 text-center">
                                        <span className="text-lg font-black text-amber-400">{flaggedCount}</span>
                                        <span className="text-[10px] text-amber-400/70 block">Flagged</span>
                                    </div>
                                    <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                                        <span className="text-lg font-black text-slate-300">{unansweredCount}</span>
                                        <span className="text-[10px] text-slate-500 block">Unanswered</span>
                                    </div>
                                </div>

                                {/* Question Grid */}
                                <div className="grid grid-cols-5 sm:grid-cols-8 gap-2">
                                    {questions.map((_, idx) => {
                                        const isAnswered = answers[idx] !== undefined;
                                        const isFlagged = flagged.has(idx);
                                        const isCurrent = idx === currentQuestionIndex;

                                        let style = 'bg-white/5 border-white/10 text-slate-500';
                                        if (isCurrent) {
                                            style = 'bg-indigo-500 border-indigo-400 text-white ring-2 ring-indigo-500/30';
                                        } else if (isFlagged && isAnswered) {
                                            style = 'bg-amber-500/20 border-amber-500/40 text-amber-400';
                                        } else if (isFlagged) {
                                            style = 'bg-amber-500/15 border-amber-500/30 text-amber-400';
                                        } else if (isAnswered) {
                                            style = 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400';
                                        }

                                        return (
                                            <button
                                                key={idx}
                                                onClick={() => { handleNavigateTo(idx); setShowDashboard(false); }}
                                                className={`relative w-full aspect-square rounded-xl border flex items-center justify-center text-sm font-bold transition-all hover:scale-105 ${style}`}
                                            >
                                                {idx + 1}
                                                {isFlagged && (
                                                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-500 rounded-full" />
                                                )}
                                            </button>
                                        );
                                    })}
                                </div>

                                <button
                                    onClick={() => setShowDashboard(false)}
                                    className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm font-bold text-slate-300 transition-all"
                                >
                                    Continue Exam
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Finish Confirmation Modal */}
                    {showFinishConfirm && (
                        <div className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                            <div className="bg-[#0b0b1a] border border-indigo-500/30 rounded-3xl p-6 md:p-8 max-w-md w-full shadow-2xl shadow-indigo-500/10 space-y-6 text-center animate-in scale-in duration-250">
                                <div className="w-16 h-16 bg-indigo-500/10 border border-indigo-500/20 rounded-full flex items-center justify-center mx-auto">
                                    <CheckCircle2 className="w-8 h-8 text-indigo-400" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold">Submit Exam?</h3>
                                    <div className="text-sm text-slate-400 space-y-1">
                                        <p>You have answered <strong className="text-white">{answeredCount}</strong> out of <strong className="text-white">{questions.length}</strong> questions.</p>
                                        {unansweredCount > 0 && (
                                            <p className="text-amber-400">
                                                ⚠️ {unansweredCount} question{unansweredCount > 1 ? 's' : ''} still unanswered!
                                            </p>
                                        )}
                                        {flaggedCount > 0 && (
                                            <p className="text-amber-400">
                                                🚩 {flaggedCount} question{flaggedCount > 1 ? 's' : ''} flagged for review.
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <button
                                        onClick={() => setShowFinishConfirm(false)}
                                        className="flex-1 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold text-sm text-slate-300 transition-all"
                                    >
                                        Continue Exam
                                    </button>
                                    <button
                                        onClick={handleFinishExam}
                                        className="flex-1 py-3 bg-gradient-to-r from-indigo-500 to-violet-600 text-white rounded-xl font-bold text-sm shadow-lg shadow-indigo-500/20 transition-all hover:opacity-90 active:scale-95"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* STEP 4: RESULTS */}
            {step === 'result' && (
                <div className="space-y-8 animate-in fade-in duration-500">
                    <div className="bg-[#0a0a1f]/60 border border-white/5 rounded-3xl p-8 md:p-12 text-center space-y-6">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 shadow-lg shadow-emerald-500/10 mb-2">
                            <Trophy className="w-10 h-10 text-emerald-400" />
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Exam Completed!</h2>
                            <p className="text-slate-400 mt-2 text-base">Great job practicing your chemistry skills.</p>
                        </div>

                        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto pt-6 border-t border-white/5">
                            <div className="bg-white/[0.02] border border-white/5 p-4 rounded-2xl">
                                <span className="text-xs text-slate-500 block mb-1">Score</span>
                                <span className="text-2xl font-black text-white">{score} / {questions.length}</span>
                            </div>
                            <div className="bg-white/[0.02] border border-white/5 p-4 rounded-2xl">
                                <span className="text-xs text-slate-500 block mb-1">Accuracy</span>
                                <span className="text-2xl font-black text-indigo-400">{Math.round((score / questions.length) * 100)}%</span>
                            </div>
                            <div className="bg-white/[0.02] border border-white/5 p-4 rounded-2xl">
                                <span className="text-xs text-slate-500 block mb-1">XP Earned</span>
                                <span className="text-2xl font-black text-amber-500">+{score * 15} XP</span>
                            </div>
                        </div>

                        <div className="pt-6 flex flex-wrap justify-center gap-4">
                            <button
                                onClick={() => setStep('mode-select')}
                                className="flex items-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white px-6 py-3.5 rounded-xl font-bold transition-all"
                            >
                                <RefreshCw className="w-4 h-4" />
                                Configure New Exam
                            </button>
                            <button
                                onClick={handleStartExam}
                                className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-violet-600 text-white px-8 py-3.5 rounded-xl font-bold transition-all hover:opacity-90 active:scale-95 shadow-lg shadow-indigo-500/20"
                            >
                                Retry Same Exam
                            </button>
                            <button
                                onClick={handleOpenPrintModalFromResults}
                                className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/25 hover:bg-emerald-500/20 text-emerald-400 px-6 py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-emerald-500/5"
                            >
                                <Printer className="w-4 h-4" />
                                Export Exam Paper (PDF)
                            </button>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-white">Review Questions</h3>
                        {questions.map((q, idx) => {
                            const ans = userAnswers.find(ua => ua.questionId === q.id);
                            const isCorrect = ans?.isCorrect || false;

                            return (
                                <div key={q.id} className="bg-[#0a0a1f]/60 border border-white/5 rounded-2xl p-6 space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${
                                            isCorrect ? 'bg-emerald-500/25 text-emerald-400' : 'bg-rose-500/25 text-rose-400'
                                        }`}>
                                            {idx + 1}
                                        </div>
                                        <div className="text-white font-medium text-lg pt-0.5">
                                            {renderTextWithMath(q.question)}
                                        </div>
                                    </div>

                                    {q.graphConfig && (
                                        <div className="pl-0 sm:pl-12 my-3">
                                            <InteractiveGraphPlotter config={q.graphConfig} />
                                        </div>
                                    )}

                                    {q.apparatusScaleConfig && (
                                        <div className="pl-0 sm:pl-12 my-3">
                                            <InteractiveScaleReader config={q.apparatusScaleConfig} />
                                        </div>
                                    )}

                                    {q.imageHtml && !q.graphConfig && !q.apparatusScaleConfig && (
                                        <div className="pl-0 sm:pl-12 my-3 max-w-full overflow-x-auto flex justify-center" dangerouslySetInnerHTML={{ __html: q.imageHtml }} />
                                    )}

                                    {q.tableHtml && (
                                        <div className="pl-0 sm:pl-12 my-3 max-w-full overflow-x-auto flex justify-center text-slate-200" dangerouslySetInnerHTML={{ __html: q.tableHtml }} />
                                    )}

                                    <div className="grid gap-2 pl-12">
                                        {q.options.map((opt, optIdx) => {
                                            const isCorrectAnswer = optIdx === q.correctAnswerIndex;
                                            const isUserChoice = optIdx === ans?.selectedAnswer;

                                            let optStyle = "bg-white/[0.01] border-white/5 text-slate-400";
                                            if (isCorrectAnswer) {
                                                optStyle = "bg-emerald-500/10 border-emerald-500/20 text-emerald-400";
                                            } else if (isUserChoice) {
                                                optStyle = "bg-rose-500/10 border-rose-500/20 text-rose-400";
                                            }

                                            return (
                                                <div key={optIdx} className={`p-3 rounded-xl border text-sm ${optStyle}`}>
                                                    <span className="font-bold mr-2">{String.fromCharCode(65 + optIdx)}.</span>
                                                    {renderTextWithMath(opt.text)}
                                                </div>
                                            );
                                        })}
                                    </div>

                                    {q.explanation && (
                                        <div className="pl-12">
                                            <div className="bg-indigo-500/5 border border-indigo-500/10 rounded-xl p-4 text-indigo-300 text-xs leading-relaxed">
                                                <span className="font-bold text-indigo-400 uppercase tracking-wider text-[10px] mb-1 block">Explanation</span>
                                                <div className="flex flex-col gap-1">
                                                    {(() => {
                                                        const clean = q.explanation
                                                            .replace(/\\n/g, '\n')
                                                            .replace(/([^\n])\s+(?=\d+\.\s+)/g, '$1\n')
                                                            .replace(/([^\n])\s+(?=[•\*]\s+)/g, '$1\n');
                                                        const lines = clean
                                                            .split('\n')
                                                            .map(line => line.trim())
                                                            .filter(line => line !== '' && line !== '*' && line !== '•')
                                                            .map(line => line.replace(/^[\*\•]\s+(?=\d+\.)/, ''));
                                                        return lines.map((line, lineIdx) => (
                                                            <div key={lineIdx}>{renderTextWithMath(line)}</div>
                                                        ));
                                                    })()}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}

            {/* Print & Export Exam Modal */}
            <PrintExamModal
                isOpen={showPrintModal}
                onClose={() => setShowPrintModal(false)}
                questions={printQuestions}
                defaultExamTitle={printableExamTitle}
                defaultCurriculumTitle={printableCurriculumTitle}
                defaultTopicTitle={printableTopicTitle}
            />
        </div>
    );
}

export default function QuizzesPage() {
    return (
        <Suspense fallback={
            <div className="flex items-center justify-center min-h-[60vh]">
                <div className="w-10 h-10 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
            </div>
        }>
            <QuizzesContent />
        </Suspense>
    );
}
