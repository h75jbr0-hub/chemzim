'use client';

import React, { useState, useMemo, useCallback } from 'react';
import Link from 'next/link';
import { 
  Printer, ArrowLeft, RefreshCw, Sliders, CheckSquare, 
  FileText, Download, Sparkles, BookOpen, Layers, CheckCircle2, ChevronRight 
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { allCurricula } from '@/data/curriculum';
import { questionBank } from '@/data/exams';
import { Question } from '@/data/exams/types';
import { PrintableWorksheet } from '@/components/worksheet/PrintableWorksheet';

export default function WorksheetGeneratorPage() {
  const { user } = useAuth();

  // Configurations
  const [worksheetTitle, setWorksheetTitle] = useState<string>('Chemistry Topical Practice Worksheet');
  const [institutionName, setInstitutionName] = useState<string>('ChemZim International Chemistry Academy');
  const [teacherName, setTeacherName] = useState<string>('Mr. Hazim Jaber');
  
  // Board & Track
  const [selectedBoard, setSelectedBoard] = useState<string>('all');
  const [selectedUnit, setSelectedUnit] = useState<string>('all');
  const [selectedSeries, setSelectedSeries] = useState<string>('all');
  const [selectedPaperType, setSelectedPaperType] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [questionCount, setQuestionCount] = useState<number>(20);

  // Print Settings
  const [includeMarkScheme, setIncludeMarkScheme] = useState<boolean>(true);
  const [includeAnswerGrid, setIncludeAnswerGrid] = useState<boolean>(true);

  // Selected Questions Pool
  const [generatedQuestions, setGeneratedQuestions] = useState<Question[]>([]);
  const [hasGenerated, setHasGenerated] = useState<boolean>(false);

  // Active curriculum based on selected board (or user context if 'all')
  const activeCurriculum = useMemo(() => {
    if (selectedBoard !== 'all') {
      const match = allCurricula.find(c => c.id.toLowerCase().startsWith(selectedBoard.toLowerCase()));
      if (match) return match;
    }
    const track = (user?.track || user?.grade || 'cie-igcse').toLowerCase();
    if (track.includes('edexcel') && (track.includes('a2') || track.includes('unit-4') || track.includes('unit-5') || track.includes('unit-6'))) {
      return allCurricula.find(c => c.id.startsWith('edexcel-a2')) || allCurricula[0];
    }
    if (track.includes('edexcel')) {
      return allCurricula.find(c => c.id.startsWith('edexcel-as')) || allCurricula[0];
    }
    return allCurricula.find(c => c.id.startsWith('cie-igcse')) || allCurricula[0];
  }, [selectedBoard, user]);

  // Topic Options matching active curriculum
  const topicsList = useMemo(() => {
    return activeCurriculum.topics.map(t => ({
      id: t.id,
      number: t.number,
      title: /^unit\s+\d+:/i.test(t.title) ? t.title : `Unit ${t.number}: ${t.title}`
    }));
  }, [activeCurriculum]);

  // Series Display Label
  const selectedSeriesLabel = useMemo(() => {
    switch (selectedSeries) {
      case 'oct2026': return 'Oct 2026 Series';
      case 'june2026': return 'June 2026 Series';
      case 'jan2026': return 'Jan 2026 Series';
      case 'oct2025': return 'Oct 2025 Series';
      case 'june2025': return 'June 2025 Series';
      case 'jan2025': return 'Jan 2025 Series';
      case 'specimen': return 'Specimen Papers';
      default: return '';
    }
  }, [selectedSeries]);

  // Resolve Human Readable Topic Title for Header
  const currentTopicDisplayTitle = useMemo(() => {
    let base = 'Comprehensive Assessment (All Units)';
    if (selectedUnit !== 'all') {
      const found = topicsList.find(t => t.id === selectedUnit);
      base = found ? found.title : selectedUnit.replace(/-/g, ' ');
    }
    if (selectedPaperType === 'practical') {
      base += ' • Practical Skills Focus';
    }
    if (selectedSeriesLabel) {
      base += ` (${selectedSeriesLabel})`;
    }
    return base;
  }, [selectedUnit, topicsList, selectedPaperType, selectedSeriesLabel]);

  // Curriculum Display Title for Header
  const currentCurriculumDisplayTitle = useMemo(() => {
    if (selectedBoard === 'all') return 'All Curricula (Comprehensive)';
    return activeCurriculum.title;
  }, [selectedBoard, activeCurriculum]);

  // Generate Questions Function
  const generateQuestions = useCallback(() => {
    let pool = [...questionBank];

    // 1. Filter by curriculum / board
    if (selectedBoard !== 'all') {
      const b = selectedBoard.toLowerCase();
      pool = pool.filter(q => {
        const c = (q.curriculum || '').toLowerCase();
        const s = (q.source || '').toLowerCase();
        if (b === 'cie-igcse') return c === 'igcse' || c === 'cie-igcse' || s.includes('0620') || s.includes('cambridge');
        if (b === 'cie-as') return c === 'cie-as' || s.includes('9701');
        if (b === 'cie-alevel') return c === 'cie-alevel' || c === 'cie-a2' || s.includes('9701');
        if (b === 'edexcel-as') {
          return (c.includes('edexcel') || s.includes('edexcel')) &&
            (q.topic?.includes('unit-1') || q.topic?.includes('unit-2') || q.topic?.includes('unit-3') || (q.lessonNum && q.lessonNum <= 10));
        }
        if (b === 'edexcel-a2') {
          return (c.includes('edexcel') || s.includes('edexcel')) &&
            (q.topic?.includes('unit-4') || q.topic?.includes('unit-5') || q.topic?.includes('unit-6'));
        }
        return c.includes(b) || s.includes(b);
      });
    }

    // 2. Filter by unit if specified
    if (selectedUnit !== 'all') {
      const selectedTopicObj = topicsList.find(t => t.id === selectedUnit);
      const unitNum = selectedTopicObj?.number;
      const unitSlug = selectedUnit.toLowerCase();

      pool = pool.filter(q => {
        if (!q.topic) return false;
        const qTopic = q.topic.toLowerCase();
        
        // Match unit number (e.g. unit-1, unit 1, u1)
        if (unitNum !== undefined) {
          if (qTopic.includes(`unit-${unitNum}`) || qTopic.includes(`unit ${unitNum}`) || qTopic === `u${unitNum}`) {
            return true;
          }
        }
        // Match slug or title
        return qTopic.includes(unitSlug) || 
               unitSlug.includes(qTopic) || 
               qTopic.replace(/-/g, ' ').includes(unitSlug.replace(/-/g, ' '));
      });
    }

    // 3. Filter by Examination Series
    if (selectedSeries !== 'all') {
      pool = pool.filter(q => {
        const s = q.source || '';
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

    // 4. Filter by Paper Type / Practical Skills
    if (selectedPaperType !== 'all') {
      pool = pool.filter(q => {
        const isPractical = q.paperType === 'practical' || 
          q.topic?.includes('unit-3') || 
          q.topic?.includes('unit-6') || 
          (q.source && (q.source.includes('WCH13') || q.source.includes('WCH16') || q.source.includes('Paper 6') || q.source.includes('0620/6')));

        if (selectedPaperType === 'practical') return isPractical;
        if (selectedPaperType === 'mcq') return !isPractical && (!q.paperType || q.paperType === 'mcq');
        if (selectedPaperType === 'structured') return q.paperType === 'structured' || (q.source && (q.source.includes('Paper 4') || q.source.includes('0620/4')));
        return true;
      });
    }

    // 5. Filter by difficulty
    if (selectedDifficulty !== 'all') {
      const targetLevel = selectedDifficulty === 'easy' ? 1 : selectedDifficulty === 'medium' ? 2 : 3;
      pool = pool.filter(q => q.level === targetLevel);
    }

    // Fallback if very narrow filter yielded nothing
    if (pool.length === 0) {
      // Relax difficulty & series first
      pool = questionBank.filter(q => {
        if (selectedBoard === 'all') return true;
        const c = (q.curriculum || '').toLowerCase();
        return c.includes(selectedBoard.split('-')[0]);
      });
    }

    // Shuffle and pick desired count
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, Math.min(questionCount, shuffled.length));

    setGeneratedQuestions(selected);
    setHasGenerated(true);
  }, [selectedBoard, selectedUnit, selectedSeries, selectedPaperType, selectedDifficulty, questionCount, topicsList]);

  // When board changes, reset unit to 'all' so stale units from other curricula are not kept
  const handleBoardChange = (newBoard: string) => {
    setSelectedBoard(newBoard);
    setSelectedUnit('all');
  };

  // Auto regenerate whenever configuration filters change
  React.useEffect(() => {
    generateQuestions();
  }, [generateQuestions]);

  // Print Handler
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#070b14] text-white font-sans selection:bg-indigo-500/30">
      
      {/* ========================================================================= */}
      {/* 1. CONFIGURATION DASHBOARD (HIDDEN ON PRINT)                              */}
      {/* ========================================================================= */}
      <div className="print:hidden max-w-6xl mx-auto p-4 md:p-8 space-y-8 animate-in fade-in duration-300">
        
        {/* Header Ribbon */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/5 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 rounded-full">
                Print & PDF Engine
              </span>
              <span className="text-[10px] font-bold px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full">
                A4 Print Ready + Mark Scheme
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Smart Worksheet & Assessment Generator
            </h1>
            <p className="text-slate-400 text-xs mt-1">
              Select questions from Cambridge and Edexcel official series (2025–2026) and generate print-perfect worksheets with complete solutions.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/dashboard/quizzes"
              className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-xs font-bold transition-all flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Exam Hub</span>
            </Link>

            <button
              onClick={handlePrint}
              disabled={generatedQuestions.length === 0}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-extrabold text-xs shadow-lg shadow-emerald-500/20 active:scale-95 transition-all"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save as PDF</span>
            </button>
          </div>
        </div>

        {/* Configuration Panel */}
        <div className="bg-[#0b101e] border border-white/10 rounded-3xl p-6 md:p-8 space-y-6">
          <div className="flex items-center justify-between border-b border-white/5 pb-4">
            <h2 className="text-sm font-bold text-white flex items-center gap-2">
              <Sliders className="w-4 h-4 text-indigo-400" />
              <span>Customize Worksheet & Paper Options</span>
            </h2>
            <button
              onClick={generateQuestions}
              className="flex items-center gap-1.5 text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reshuffle Questions</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Title */}
            <div>
              <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1.5">
                Worksheet Header Title
              </label>
              <input
                type="text"
                value={worksheetTitle}
                onChange={e => setWorksheetTitle(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500/50"
              />
            </div>

            {/* School / Center */}
            <div>
              <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1.5">
                Academy / School Name
              </label>
              <input
                type="text"
                value={institutionName}
                onChange={e => setInstitutionName(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500/50"
              />
            </div>

            {/* Teacher Name */}
            <div>
              <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1.5">
                Teacher / Class Note
              </label>
              <input
                type="text"
                value={teacherName}
                onChange={e => setTeacherName(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500/50"
              />
            </div>
          </div>

          {/* Filters Row 1: Board, Unit, Series */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2 border-t border-white/5">
            {/* Exam Board */}
            <div>
              <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1.5">
                Exam Board Specification
              </label>
              <select
                value={selectedBoard}
                onChange={e => handleBoardChange(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500/50"
              >
                <option value="all" className="bg-[#0b101e]">All Boards (Mixed)</option>
                <option value="cie-igcse" className="bg-[#0b101e]">Cambridge IGCSE (0620)</option>
                <option value="cie-as" className="bg-[#0b101e]">Cambridge AS-Level (9701)</option>
                <option value="cie-alevel" className="bg-[#0b101e]">Cambridge A-Level (9701)</option>
                <option value="edexcel-as" className="bg-[#0b101e]">Pearson Edexcel AS-Level (WCH11-13)</option>
                <option value="edexcel-a2" className="bg-[#0b101e]">Pearson Edexcel A2-Level (WCH14-16)</option>
              </select>
            </div>

            {/* Target Topic */}
            <div>
              <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1.5">
                Target Topic / Unit
              </label>
              <select
                value={selectedUnit}
                onChange={e => setSelectedUnit(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500/50"
              >
                <option value="all" className="bg-[#0b101e]">All Topics (Comprehensive)</option>
                {topicsList.map(t => (
                  <option key={t.id} value={t.id} className="bg-[#0b101e]">{t.title}</option>
                ))}
              </select>
            </div>

            {/* Examination Series */}
            <div>
              <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1.5">
                Examination Series
              </label>
              <select
                value={selectedSeries}
                onChange={e => setSelectedSeries(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500/50"
              >
                <option value="all" className="bg-[#0b101e]">All Series (Comprehensive)</option>
                <option value="oct2026" className="bg-[#0b101e]">🍁 Autumn 2026 Series (Oct 2026)</option>
                <option value="june2026" className="bg-[#0b101e]">✨ Summer 2026 Series (June 2026)</option>
                <option value="jan2026" className="bg-[#0b101e]">❄️ Winter 2026 Series (Jan 2026)</option>
                <option value="oct2025" className="bg-[#0b101e]">🍂 Autumn 2025 Series (Oct 2025)</option>
                <option value="june2025" className="bg-[#0b101e]">☀️ Summer 2025 Series (June 2025)</option>
                <option value="jan2025" className="bg-[#0b101e]">🧊 Winter 2025 Series (Jan 2025)</option>
                <option value="specimen" className="bg-[#0b101e]">📜 Official Specimen Papers</option>
              </select>
            </div>
          </div>

          {/* Filters Row 2: Paper Type, Difficulty, Question Count */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2 border-t border-white/5">
            {/* Paper Type / Practical Skills */}
            <div>
              <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1.5">
                Paper Type & Skills
              </label>
              <select
                value={selectedPaperType}
                onChange={e => setSelectedPaperType(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500/50"
              >
                <option value="all" className="bg-[#0b101e]">All Question Types</option>
                <option value="mcq" className="bg-[#0b101e]">🔘 Multiple Choice (MCQ)</option>
                <option value="practical" className="bg-[#0b101e]">🧪 Practical Skills (Unit 3, Unit 6 & P6)</option>
                <option value="structured" className="bg-[#0b101e]">📝 Structured / Theory Questions</option>
              </select>
            </div>

            {/* Difficulty */}
            <div>
              <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1.5">
                Question Difficulty
              </label>
              <select
                value={selectedDifficulty}
                onChange={e => setSelectedDifficulty(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500/50"
              >
                <option value="all" className="bg-[#0b101e]">All Levels (Balanced)</option>
                <option value="easy" className="bg-[#0b101e]">Easy (Level 1)</option>
                <option value="medium" className="bg-[#0b101e]">Medium (Level 2)</option>
                <option value="hard" className="bg-[#0b101e]">Hard (Level 3)</option>
              </select>
            </div>

            {/* Question Count */}
            <div>
              <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1.5">
                Number of Questions
              </label>
              <div className="flex gap-1.5">
                {[10, 15, 20, 30, 40].map(count => (
                  <button
                    key={count}
                    onClick={() => setQuestionCount(count)}
                    className={`flex-1 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                      questionCount === count
                        ? 'bg-indigo-500/20 border-indigo-500/50 text-indigo-300'
                        : 'bg-white/5 border-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    {count}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Print Options Checkboxes */}
          <div className="flex flex-wrap items-center gap-6 pt-3 border-t border-white/5 text-xs text-slate-300">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={includeMarkScheme}
                onChange={e => setIncludeMarkScheme(e.target.checked)}
                className="rounded border-white/20 bg-white/5 text-indigo-500 focus:ring-0"
              />
              <span>Include <strong>Mark Scheme & Solutions</strong> (Separate Page)</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={includeAnswerGrid}
                onChange={e => setIncludeAnswerGrid(e.target.checked)}
                className="rounded border-white/20 bg-white/5 text-indigo-500 focus:ring-0"
              />
              <span>Include <strong>Student Answer Grid</strong> Sheet</span>
            </label>
          </div>
        </div>

        {/* Live Paper Preview Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-400 font-semibold">
            <FileText className="w-4 h-4 text-emerald-400" />
            <span>Interactive Live Paper Preview ({generatedQuestions.length} Questions Loaded)</span>
          </div>

          <button
            onClick={handlePrint}
            className="flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Worksheet (Ctrl + P)</span>
          </button>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 2. PRINTABLE WORKSHEET COMPONENT                                          */}
      {/* ========================================================================= */}
      <div className="max-w-4xl mx-auto shadow-2xl rounded-2xl overflow-hidden print:shadow-none print:max-w-none print:m-0 print:p-0">
        <PrintableWorksheet
          worksheetTitle={worksheetTitle}
          institutionName={institutionName}
          teacherName={teacherName}
          curriculumTitle={currentCurriculumDisplayTitle}
          targetTopic={currentTopicDisplayTitle}
          questions={generatedQuestions}
          includeMarkScheme={includeMarkScheme}
          includeAnswerGrid={includeAnswerGrid}
        />
      </div>

    </div>
  );
}
