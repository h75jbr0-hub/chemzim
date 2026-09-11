'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
    Search, Filter, ShieldAlert, ArrowLeft, Check, AlertTriangle, Eye, Calendar, BookOpen, Layers, CheckCircle2, RefreshCw, X
} from 'lucide-react';
import { questionBank, examsRegistry } from '@/data/exams';
import { curriculumRegistry } from '@/data/curriculum/registry';
import { allCurricula } from '@/data/curriculum';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { sanitizeKatex } from '@/lib/katex-sanitizer';
import InteractiveGraphPlotter from '@/components/InteractiveGraphPlotter';
import SelfMarkingRubric from '@/components/SelfMarkingRubric';
import InteractiveScaleReader from '@/components/InteractiveScaleReader';

interface AuditedQuestion {
    source: 'quiz' | 'exam';
    id: string;
    question: string;
    options: { text: string; isCorrect?: boolean }[];
    correctAnswerIndex: number;
    explanation?: string;
    level: string;
    track: string;
    unitTitle: string;
    lessonTitle: string;
    createdAt?: string;
    imageHtml?: string;
    paperType?: 'mcq' | 'structured' | 'practical';
    markingScheme?: {
        marks: number;
        points: { mark: number; keyword: string; text: string }[];
        examinerTips?: string;
    };
    graphConfig?: any;
    apparatusScaleConfig?: any;
    sourceRef?: string;
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
    
    // Pearson Edexcel A-Level split by unit number
    if (cleanId === 'edexcel-alevel') {
        if (cleanUnit.includes('unit-4') || cleanUnit.includes('unit-5') || cleanUnit.includes('unit-6') || cleanUnit.includes('u4') || cleanUnit.includes('u5') || cleanUnit.includes('u6')) {
            return 'Edexcel A2-Level';
        }
        return 'Edexcel AS-Level';
    }
    
    return id;
};

const resolveUnitTitle = (unitId: string, trackId: string): string => {
    if (/^\d+\./.test(unitId)) return unitId;
    
    const cleanUnitId = unitId.toLowerCase().trim();
    const cleanUnitIdWithoutSuffix = cleanUnitId.replace(/-\d{8}$/, '');
    let cleanTrackId = trackId.toLowerCase().trim();
    
    // Normalize track IDs
    if (cleanTrackId === 'igcse' || cleanTrackId === 'cambridge igcse') cleanTrackId = 'cie-igcse';
    if (cleanTrackId === 'cie-alevel' || cleanTrackId === 'cie-a2' || cleanTrackId === 'cambridge a-level') cleanTrackId = 'cie-alevel';
    if (cleanTrackId === 'cie-as' || cleanTrackId === 'cambridge as-level') cleanTrackId = 'cie-as';
    if (cleanTrackId === 'edexcel-igcse' || cleanTrackId === 'edexcel igcse') cleanTrackId = 'edexcel-igcse';
    if (cleanTrackId === 'edexcel-as' || cleanTrackId === 'edexcel as-level') cleanTrackId = 'edexcel-as';
    if (cleanTrackId === 'edexcel-a2' || cleanTrackId === 'edexcel a2-level') cleanTrackId = 'edexcel-a2';
    
    // Direct robust mapping for Edexcel units
    if (cleanTrackId.includes('edexcel')) {
        if (cleanUnitId.includes('unit-4') || cleanUnitId.includes('u4')) {
            return "Unit 4: Rates, Equilibria & Further Organic";
        }
        if (cleanUnitId.includes('unit-5') || cleanUnitId.includes('u5')) {
            return "Unit 5: Transition Metals & Organic Nitrogen Chemistry";
        }
        if (cleanUnitId.includes('unit-6') || cleanUnitId.includes('u6')) {
            return "Unit 6: Practical Skills in Chemistry II";
        }
        if (cleanUnitId.includes('unit-1') || cleanUnitId.includes('u1')) {
            return "Unit 1: Structure, Bonding & Intro Organic";
        }
        if (cleanUnitId.includes('unit-2') || cleanUnitId.includes('u2')) {
            return "Unit 2: Energetics, Group Chem & Halogenoalkanes";
        }
        if (cleanUnitId.includes('unit-3') || cleanUnitId.includes('u3')) {
            return "Unit 3: Practical Skills in Chemistry I";
        }
    }
    
    let curriculum = allCurricula.find(c => c.id.toLowerCase().replace(/-\d{8}$/, '').startsWith(cleanTrackId));
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
        
        const topicById = curriculum.topics.find(t => t.id.toLowerCase().replace(/-\d{8}$/, '') === cleanUnitIdWithoutSuffix);
        if (topicById) {
            if (/^unit\s+\d+:/i.test(topicById.title)) {
                return topicById.title;
            }
            return `Unit ${topicById.number}: ${topicById.title}`;
        }
    }
    
    return unitId.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
};

const getSyllabusTopicLabel = (curriculumId: string, unitNumber: number, lessonNumber: number, defaultTitle: string): string => {
    const cleanCurriculum = curriculumId.toLowerCase().trim();
    if (cleanCurriculum.includes('edexcel')) {
        if (unitNumber === 1) {
            return `Topic ${lessonNumber}: ${defaultTitle}`;
        } else if (unitNumber === 2) {
            return `Topic ${lessonNumber + 5}: ${defaultTitle}`;
        } else if (unitNumber === 3) {
            return `Unit 3 Practical: ${defaultTitle}`;
        } else if (unitNumber === 4) {
            return `Topic ${lessonNumber + 10}: ${defaultTitle}`;
        } else if (unitNumber === 5) {
            return `Topic ${lessonNumber + 15}: ${defaultTitle}`;
        } else if (unitNumber === 6) {
            return `Unit 6 Practical: ${defaultTitle}`;
        }
    }
    
    // Fallback for Cambridge or other tracks: keep simple numbering
    return `${lessonNumber}. ${defaultTitle}`;
};

export default function QuestionAuditorPage() {
    const { user, isLoading } = useAuth();
    const router = useRouter();

    const [allQuestions, setAllQuestions] = useState<AuditedQuestion[]>([]);
    
    // Filters State
    const [selectedTrack, setSelectedTrack] = useState<string>('all');
    const [selectedSource, setSelectedSource] = useState<string>('all');
    const [selectedPaperType, setSelectedPaperType] = useState<string>('all');
    const [selectedUnit, setSelectedUnit] = useState<string>('all');
    const [selectedLesson, setSelectedLesson] = useState<string>('all');
    const [selectedLevel, setSelectedLevel] = useState<string>('all');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [dateFrom, setDateFrom] = useState<string>('');

    // Load and build unified question list
    useEffect(() => {
        // 1. Map Exam questions
        const staticExamQuestions: AuditedQuestion[] = questionBank.map(q => {
            const unitTitle = resolveUnitTitle(q.topic, q.curriculum);
            const track = resolveCurriculumTitle(q.curriculum, q.topic);
            const level = q.level === 1 ? 'Easy' : q.level === 2 ? 'Medium' : 'Hard';
            
            // Resolve exact curriculum lesson title if available
            let lessonTitle = 'Exam Practice Bank';
            if (q.lessonNum) {
                const matchNum = q.topic.match(/unit-(\d+)/) || q.topic.match(/u(\d+)/);
                const unitNumber = matchNum ? parseInt(matchNum[1], 10) : null;
                if (unitNumber !== null) {
                    const registryKey = `${q.curriculum}-unit-${unitNumber}`;
                    const curriculumLesson = curriculumRegistry[registryKey]?.[q.lessonNum];
                    lessonTitle = curriculumLesson 
                        ? getSyllabusTopicLabel(q.curriculum, unitNumber, q.lessonNum, curriculumLesson.title)
                        : `Lesson ${q.lessonNum}`;
                }
            }
            
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
                track,
                unitTitle,
                lessonTitle,
                createdAt: q.createdAt,
                imageHtml: q.imageHtml,
                paperType: q.paperType,
                markingScheme: q.markingScheme,
                graphConfig: q.graphConfig,
                apparatusScaleConfig: (q as any).apparatusScaleConfig,
                sourceRef: q.source
            };
        });

        // B. Modular exam questions (from examsRegistry)
        const modularExamQuestions: AuditedQuestion[] = [];
        Object.entries(examsRegistry).forEach(([curriculumId, unitRegistry]) => {
            Object.entries(unitRegistry).forEach(([unitNumKey, lessonRegistry]) => {
                const unitNumber = parseInt(unitNumKey, 10);
                const track = resolveCurriculumTitle(curriculumId, `unit-${unitNumber}`);
                const unitTitle = resolveUnitTitle(`unit-${unitNumber}`, curriculumId);
                
                Object.entries(lessonRegistry).forEach(([lessonNumKey, questions]) => {
                    const lessonNumber = parseInt(lessonNumKey, 10);
                    
                    // Resolve exact curriculum lesson title if available
                    const registryKey = `${curriculumId}-unit-${unitNumber}`;
                    const curriculumLesson = curriculumRegistry[registryKey]?.[lessonNumber];
                    const lessonTitle = curriculumLesson 
                        ? getSyllabusTopicLabel(curriculumId, unitNumber, lessonNumber, curriculumLesson.title)
                        : `Lesson ${lessonNumber}`;
                        
                    questions.forEach(q => {
                        const level = q.level === 1 ? 'Easy' : q.level === 2 ? 'Medium' : 'Hard';
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
                            track,
                            unitTitle,
                            lessonTitle,
                            createdAt: q.createdAt,
                            imageHtml: q.imageHtml,
                            paperType: q.paperType,
                            markingScheme: q.markingScheme,
                            graphConfig: q.graphConfig,
                            apparatusScaleConfig: (q as any).apparatusScaleConfig,
                            sourceRef: q.source
                        });
                    });
                });
            });
        });

        // Filter out static duplicates if already loaded in modular
        const modularIds = new Set(modularExamQuestions.map(q => q.id));
        const filteredStatic = staticExamQuestions.filter(q => !modularIds.has(q.id));

        // 2. Map Quiz questions
        const quizQuestions: AuditedQuestion[] = [];
        Object.entries(curriculumRegistry).forEach(([registryKey, unitLessons]) => {
            const match = registryKey.match(/^(.+)-unit-(\d+)$/);
            if (!match) return;
            const curriculumId = match[1];
            const unitNumber = parseInt(match[2], 10);
            
            const unitTitle = resolveUnitTitle(`unit-${unitNumber}`, curriculumId);
            const track = resolveCurriculumTitle(curriculumId, `unit-${unitNumber}`);
            
            Object.entries(unitLessons).forEach(([lessonNumKey, lessonItem]) => {
                const lessonNumber = parseInt(lessonNumKey, 10);
                const lessonQuiz = lessonItem.quiz || [];
                
                lessonQuiz.forEach((q, idx) => {
                    const isCorrectIndex = q.options.findIndex((opt: any) => opt.isCorrect);
                    let level = 'Medium';
                    if (q.id && q.id.includes('EASY')) level = 'Easy';
                    else if (q.id && q.id.includes('HARD')) level = 'Hard';
                    else if (q.id && q.id.includes('MEDIUM')) level = 'Medium';
                    
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
                        track,
                        unitTitle,
                        lessonTitle: getSyllabusTopicLabel(curriculumId, unitNumber, lessonNumber, lessonItem.title),
                        createdAt: q.id && q.id.match(/\d{8}/) ? `${q.id.match(/\d{8}/)![0].replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3')}` : undefined
                    });
                });
            });
        });

        const merged = [...filteredStatic, ...modularExamQuestions, ...quizQuestions];
        console.log("Total mapped questions:", merged.length);
        console.log("Static exam questions:", filteredStatic.length);
        console.log("Modular exam questions:", modularExamQuestions.length);
        console.log("Quiz questions:", quizQuestions.length);

        setAllQuestions(merged);
    }, []);

    // Redirect non-admins
    useEffect(() => {
        if (!isLoading && (!user?.isAdmin)) {
            router.push('/dashboard');
        }
    }, [user, isLoading, router]);

    if (isLoading || !user?.isAdmin) {
        return (
            <div className="min-h-screen bg-[#050510] flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
            </div>
        );
    }

    // Get unique Units, Lessons, Levels for filter lists based on Curriculum and Type
    const unitsList = Array.from(new Set(
        allQuestions
            .filter(q => (selectedTrack === 'all' || q.track === selectedTrack) &&
                         (selectedSource === 'all' || q.source === selectedSource))
            .map(q => q.unitTitle)
    )).sort((a, b) => {
        const numA = parseInt(a.match(/\d+/)?.[0] || '0', 10);
        const numB = parseInt(b.match(/\d+/)?.[0] || '0', 10);
        if (numA !== numB) return numA - numB;
        return a.localeCompare(b);
    });
    
    const lessonsList = Array.from(new Set(
        allQuestions
            .filter(q => (selectedTrack === 'all' || q.track === selectedTrack) &&
                         (selectedSource === 'all' || q.source === selectedSource) &&
                         (selectedUnit === 'all' || q.unitTitle === selectedUnit))
            .map(q => q.lessonTitle)
    )).filter(title => title !== 'Exam Practice Bank')
      .sort((a, b) => {
          const numA = parseInt(a.match(/\d+/)?.[0] || '0', 10);
          const numB = parseInt(b.match(/\d+/)?.[0] || '0', 10);
          if (numA !== numB) return numA - numB;
          return a.localeCompare(b);
      });

    // Filtering Logic
    const filteredQuestions = allQuestions.filter(q => {
        const matchesTrack = selectedTrack === 'all' || q.track === selectedTrack;
        const matchesSource = selectedSource === 'all' || q.source === selectedSource;
        const matchesUnit = selectedUnit === 'all' || q.unitTitle === selectedUnit;
        const matchesLesson = selectedLesson === 'all' || q.lessonTitle === selectedLesson;
        const matchesLevel = selectedLevel === 'all' || q.level.toLowerCase() === selectedLevel.toLowerCase();
        const matchesPaperType = selectedPaperType === 'all' || 
            (selectedPaperType === 'mcq' && (!q.paperType || q.paperType === 'mcq')) ||
            q.paperType === selectedPaperType;
        
        const matchesSearch = 
            q.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
            q.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (q.sourceRef && q.sourceRef.toLowerCase().includes(searchQuery.toLowerCase())) ||
            (q.explanation && q.explanation.toLowerCase().includes(searchQuery.toLowerCase())) ||
            (q.markingScheme?.examinerTips && q.markingScheme.examinerTips.toLowerCase().includes(searchQuery.toLowerCase()));
        
        let matchesDate = true;
        if (dateFrom) {
            if (q.createdAt) {
                const filterDate = new Date(dateFrom);
                const questionDate = new Date(q.createdAt);
                matchesDate = questionDate >= filterDate;
            } else {
                matchesDate = false;
            }
        }

        return matchesTrack && matchesSource && matchesPaperType && matchesUnit && matchesLesson && matchesLevel && matchesSearch && matchesDate;
    });

    return (
        <div className="min-h-screen bg-[#050510] text-white font-sans p-6 lg:p-12" dir="ltr">
            <div className="max-w-7xl mx-auto space-y-8">
                
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/5 pb-6">
                    <div className="space-y-1.5">
                        <Link 
                            href="/admin" 
                            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-xs font-bold uppercase tracking-wider mb-2"
                        >
                            <ArrowLeft className="w-3.5 h-3.5" />
                            Admin Dashboard
                        </Link>
                        <h1 className="text-3xl lg:text-4xl font-black tracking-tight flex items-center gap-3">
                            Smart Question Auditor
                            <span className="bg-indigo-500/10 text-indigo-400 text-xs font-bold px-3 py-1 rounded-full border border-indigo-500/20">
                                {filteredQuestions.length} Questions
                            </span>
                        </h1>
                        <p className="text-slate-500 text-sm font-medium">
                            Review all curriculum questions with precision filtering.
                        </p>
                    </div>

                    <div className="flex gap-3">
                        <button 
                            onClick={() => {
                                setSelectedTrack('all');
                                setSelectedSource('all');
                                setSelectedPaperType('all');
                                setSelectedUnit('all');
                                setSelectedLesson('all');
                                setSelectedLevel('all');
                                setSearchQuery('');
                                setDateFrom('');
                            }}
                            className="px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white rounded-xl font-bold text-xs transition-all flex items-center gap-2 cursor-pointer"
                        >
                            <RefreshCw className="w-3.5 h-3.5" />
                            Reset Filters
                        </button>
                    </div>
                </div>

                {/* Filters Board */}
                <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-4">
                    
                    {/* 1. Curriculum */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Curriculum</label>
                        <select 
                            value={selectedTrack}
                            onChange={e => {
                                setSelectedTrack(e.target.value);
                                setSelectedUnit('all');
                                setSelectedLesson('all');
                            }}
                            className="bg-[#0b0b1a] border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-indigo-500/50 outline-none text-slate-300 w-full"
                        >
                            <option value="all">All Curricula</option>
                            <option value="Cambridge IGCSE">Cambridge IGCSE</option>
                            <option value="Cambridge AS-Level">Cambridge AS-Level</option>
                            <option value="Cambridge A-Level">Cambridge A-Level</option>
                            <option value="Edexcel IGCSE">Edexcel IGCSE</option>
                            <option value="Edexcel AS-Level">Edexcel AS-Level</option>
                            <option value="Edexcel A2-Level">Edexcel A2-Level</option>
                        </select>
                    </div>

                    {/* 2. Type */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Type</label>
                        <select 
                            value={selectedSource}
                            onChange={e => {
                                setSelectedSource(e.target.value);
                                setSelectedUnit('all');
                                setSelectedLesson('all');
                            }}
                            className="bg-[#0b0b1a] border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-indigo-500/50 outline-none text-slate-300 w-full"
                        >
                            <option value="all">All Sources</option>
                            <option value="quiz">Lesson Quiz</option>
                            <option value="exam">Exam Practice</option>
                        </select>
                    </div>

                    {/* 2.5 Paper Format */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Paper Format</label>
                        <select 
                            value={selectedPaperType}
                            onChange={e => setSelectedPaperType(e.target.value)}
                            className="bg-[#0b0b1a] border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-indigo-500/50 outline-none text-slate-300 w-full"
                        >
                            <option value="all">All Formats</option>
                            <option value="mcq">🔘 Paper 1/2: MCQ</option>
                            <option value="structured">📝 Paper 3/4: Theory / Written</option>
                            <option value="practical">🧪 Paper 6: Practical Skills</option>
                        </select>
                    </div>

                    {/* 3. Unit */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Unit</label>
                        <select 
                            value={selectedUnit}
                            onChange={e => {
                                setSelectedUnit(e.target.value);
                                setSelectedLesson('all');
                            }}
                            className="bg-[#0b0b1a] border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-indigo-500/50 outline-none text-slate-300 w-full"
                        >
                            <option value="all">All Units</option>
                            {unitsList.map(unit => (
                                <option key={unit} value={unit}>{unit}</option>
                            ))}
                        </select>
                    </div>

                    {/* 4. Lesson */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Lesson</label>
                        <select 
                            value={selectedLesson}
                            onChange={e => setSelectedLesson(e.target.value)}
                            className="bg-[#0b0b1a] border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-indigo-500/50 outline-none text-slate-300 w-full"
                        >
                            <option value="all">All Lessons</option>
                            {lessonsList.map(lesson => (
                                <option key={lesson} value={lesson}>{lesson}</option>
                            ))}
                        </select>
                    </div>

                    {/* 5. Difficulty */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Difficulty</label>
                        <select 
                            value={selectedLevel}
                            onChange={e => setSelectedLevel(e.target.value)}
                            className="bg-[#0b0b1a] border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-indigo-500/50 outline-none text-slate-300 w-full"
                        >
                            <option value="all">All Levels</option>
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </div>

                    {/* 6. Date Added */}
                    <div className="flex flex-col gap-1.5">
                        <div className="flex justify-between items-center">
                            <label className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Date Added</label>
                            {dateFrom && (
                                <button 
                                    onClick={() => setDateFrom('')}
                                    className="text-rose-400 hover:text-rose-300 transition-all cursor-pointer p-0.5"
                                    title="Clear date"
                                >
                                    <X className="w-3 h-3" />
                                </button>
                            )}
                        </div>
                        <input 
                            type="date"
                            value={dateFrom}
                            onChange={e => setDateFrom(e.target.value)}
                            className="bg-[#0b0b1a] border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-indigo-500/50 outline-none text-slate-300 w-full text-slate-400"
                        />
                    </div>

                    {/* 7. Search / Filter */}
                    <div className="flex flex-col gap-1.5">
                        <div className="flex justify-between items-center">
                            <label className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Search / Filter</label>
                            {searchQuery && (
                                <button 
                                    onClick={() => setSearchQuery('')}
                                    className="text-rose-400 hover:text-rose-300 transition-all cursor-pointer p-0.5"
                                    title="Clear search"
                                >
                                    <X className="w-3 h-3" />
                                </button>
                            )}
                        </div>
                        <div className="relative">
                            <input 
                                type="text"
                                placeholder="Search by text..."
                                value={searchQuery}
                                onChange={e => setSearchQuery(e.target.value)}
                                className="bg-[#0b0b1a] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm focus:border-indigo-500/50 outline-none text-slate-300 w-full"
                            />
                            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        </div>
                    </div>
                </div>


                {/* Questions Grid/List */}
                <div className="space-y-6">
                    {filteredQuestions.length > 0 ? (
                        filteredQuestions.map((q, qIdx) => (
                            <div 
                                key={q.id} 
                                className="bg-white/[0.02] hover:bg-white/[0.03] border border-white/5 rounded-3xl p-6 md:p-8 transition-all flex flex-col gap-6 relative overflow-hidden group"
                            >
                                {/* Track Tags Header */}
                                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/5 pb-4">
                                    <div className="flex flex-wrap gap-2.5 items-center text-xs">
                                        <span className="bg-indigo-500/10 text-indigo-400 font-bold px-2.5 py-1 rounded-md border border-indigo-500/20">
                                            {q.track}
                                        </span>
                                        <span className="text-slate-500">•</span>
                                        <span className="text-slate-400 font-medium">{q.unitTitle}</span>
                                        <span className="text-slate-500">•</span>
                                        <span className="text-slate-400 font-semibold flex items-center gap-1">
                                            <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                                            {q.lessonTitle}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                                            q.level === 'Easy' ? 'bg-emerald-500/10 border-emerald-500/25 text-emerald-400' :
                                            q.level === 'Medium' ? 'bg-amber-500/10 border-amber-500/25 text-amber-400' :
                                            'bg-rose-500/10 border-rose-500/25 text-rose-400'
                                        }`}>
                                            {q.level}
                                        </span>

                                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                                            q.source === 'quiz' ? 'bg-purple-500/10 border-purple-500/25 text-purple-400' :
                                            'bg-sky-500/10 border-sky-500/25 text-sky-400'
                                        }`}>
                                            {q.source === 'quiz' ? 'Lesson Quiz' : 'Exam Bank'}
                                        </span>
                                    </div>
                                </div>

                                {/* ID and Date info */}
                                <div className="flex flex-wrap justify-between items-center gap-2 text-[10px] font-mono text-slate-500 bg-white/[0.01] px-4 py-1.5 rounded-xl border border-white/5">
                                    <span>ID: <strong className="text-indigo-400">{q.id}</strong></span>
                                    {q.sourceRef && (
                                        <span className="text-indigo-300/80 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                                            {q.sourceRef}
                                        </span>
                                    )}
                                    {q.createdAt && (
                                        <span className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            Added: {q.createdAt}
                                        </span>
                                    )}
                                </div>

                                {/* Paper Type & Marking Scheme Badge */}
                                {q.paperType && q.paperType !== 'mcq' && (
                                    <div className="flex items-center gap-2">
                                        <span className={`text-xs font-black px-3 py-1 rounded-xl border flex items-center gap-1.5 ${
                                            q.paperType === 'structured' 
                                                ? 'bg-amber-500/15 border-amber-500/30 text-amber-300' 
                                                : 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300'
                                        }`}>
                                            <span>{q.paperType === 'structured' ? '📝 Paper 4 Theory / Structured' : '🧪 Paper 6 Practical Skills'}</span>
                                            {q.markingScheme && (
                                                <span className="bg-white/10 px-1.5 py-0.5 rounded text-[10px]">
                                                    [{q.markingScheme.marks} Marks]
                                                </span>
                                            )}
                                        </span>
                                    </div>
                                )}

                                {/* Question Content */}
                                <div className="text-white text-base md:text-lg font-medium leading-relaxed whitespace-pre-line">
                                    {renderQuestionContent(q.question)}
                                </div>

                                {/* Interactive Graph Plotter for Practical Graph Questions */}
                                {q.graphConfig && (
                                    <div className="my-6">
                                        <InteractiveGraphPlotter config={q.graphConfig} />
                                    </div>
                                )}

                                {/* Interactive Apparatus Scale Reader for Practical Questions */}
                                {q.apparatusScaleConfig && (
                                    <div className="my-6">
                                        <InteractiveScaleReader config={q.apparatusScaleConfig} />
                                    </div>
                                )}

                                {/* Question Graph / Image */}
                                {q.imageHtml && !q.graphConfig && (
                                    <div className="my-4 max-w-full overflow-x-auto flex justify-center" dangerouslySetInnerHTML={{ __html: q.imageHtml }} />
                                )}

                                {/* Marking Scheme Breakdown for Paper 4/6 */}
                                {q.markingScheme ? (
                                    <SelfMarkingRubric 
                                        markingScheme={q.markingScheme}
                                    />
                                ) : (
                                    /* Options for MCQ */
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                                        {q.options.map((opt, oIdx) => {
                                            const isCorrect = opt.isCorrect || oIdx === q.correctAnswerIndex;
                                            return (
                                                <div 
                                                    key={oIdx}
                                                    className={`p-4 rounded-2xl border transition-all text-sm flex items-center justify-between ${
                                                        isCorrect 
                                                            ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 font-bold' 
                                                            : 'bg-white/[0.01] border-white/5 text-slate-400'
                                                    }`}
                                                >
                                                    <span dir="ltr" className="text-left flex-1">{String.fromCharCode(65 + oIdx)}. {renderTextWithMath(opt.text)}</span>
                                                    {isCorrect && (
                                                        <span className="text-[10px] font-black uppercase tracking-wider bg-emerald-500/10 px-2 py-0.5 rounded">
                                                            Correct Answer
                                                        </span>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}

                                {/* Explanation */}
                                {q.explanation && (
                                    <div className="bg-indigo-500/5 border border-indigo-500/10 rounded-2xl p-5 mt-2">
                                        <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-2 block">Explanation</span>
                                        <div className="text-slate-300 text-sm leading-relaxed flex flex-col gap-1 font-sans">
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
                                )}
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-20 bg-white/[0.02] border border-white/5 rounded-[2.5rem] space-y-4">
                            <AlertTriangle className="w-12 h-12 text-slate-500 mx-auto opacity-50" />
                            <h3 className="text-lg font-bold">No questions found</h3>
                            <p className="text-slate-500 text-sm max-w-md mx-auto font-sans">
                                No questions match the selected filter criteria. Try resetting filters.
                            </p>
                        </div>
                    )}
                </div>
                
            </div>
        </div>
    );
}
