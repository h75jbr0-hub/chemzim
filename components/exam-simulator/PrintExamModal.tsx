'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Printer, X, FileText, CheckSquare, Settings2, Sparkles } from 'lucide-react';
import { PrintableWorksheet } from '@/components/worksheet/PrintableWorksheet';
import { Question } from '@/data/exams/types';

interface PrintExamModalProps {
  isOpen: boolean;
  onClose: () => void;
  questions: any[];
  defaultExamTitle?: string;
  defaultCurriculumTitle?: string;
  defaultTopicTitle?: string;
  defaultInstitution?: string;
  defaultTeacher?: string;
}

export const PrintExamModal: React.FC<PrintExamModalProps> = ({
  isOpen,
  onClose,
  questions,
  defaultExamTitle = 'Chemistry Examination Paper',
  defaultCurriculumTitle = 'Cambridge & Edexcel Chemistry',
  defaultTopicTitle = 'Comprehensive Assessment',
  defaultInstitution = 'ChemZim International Chemistry Academy',
  defaultTeacher = 'Chemistry Department'
}) => {
  const [mounted, setMounted] = useState(false);
  const [examTitle, setExamTitle] = useState(defaultExamTitle);
  const [institutionName, setInstitutionName] = useState(defaultInstitution);
  const [teacherName, setTeacherName] = useState(defaultTeacher);
  const [curriculumTitle, setCurriculumTitle] = useState(defaultCurriculumTitle);
  const [targetTopic, setTargetTopic] = useState(defaultTopicTitle);
  const [includeMarkScheme, setIncludeMarkScheme] = useState(true);
  const [includeAnswerGrid, setIncludeAnswerGrid] = useState(true);
  const [showConfig, setShowConfig] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !mounted) return null;

  // Normalize questions to Question format
  const normalizedQuestions: Question[] = questions.map((q, idx) => ({
    id: q.id || `exam-q-${idx + 1}`,
    question: q.question,
    options: (q.options || []).map((opt: any) => typeof opt === 'string' ? { text: opt } : { text: opt.text, isCorrect: opt.isCorrect }),
    correctAnswer: q.correctAnswer !== undefined ? q.correctAnswer : (q.correctAnswerIndex !== undefined ? q.correctAnswerIndex : 0),
    explanation: q.explanation || '',
    level: (q.rawLevel || (q.level === 'Easy' ? 1 : q.level === 'Hard' ? 3 : 2)) as any,
    topic: (q.rawUnitId || q.topic || 'general') as any,
    curriculum: (q.board === 'cambridge' ? 'cie-igcse' : 'edexcel-as') as any,
    paperType: q.paperType,
    source: q.sourceRef || q.source || '',
    createdAt: q.createdAt || new Date().toISOString(),
    imageHtml: q.imageHtml,
    tableHtml: q.tableHtml
  }));

  const handlePrint = () => {
    window.print();
  };

  return createPortal(
    <div className="fixed inset-0 z-[99999] bg-black/85 backdrop-blur-md flex flex-col overflow-hidden print:static print:bg-white print:overflow-visible print:p-0 print:m-0 print:block">
      
      {/* Pinned Top Toolbar (Always in view on screen, hidden on print) */}
      <div className="flex-shrink-0 bg-[#0a0f1d] border-b border-white/10 px-4 sm:px-8 py-3.5 print:hidden shadow-2xl z-20">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 flex-shrink-0">
              <Printer className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">Print & Export Exam Paper</h2>
                <span className="text-[10px] uppercase font-extrabold tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  A4 Print Ready
                </span>
              </div>
              <p className="text-xs text-slate-400">
                {normalizedQuestions.length} Questions loaded • Official Examination Layout
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <button
              onClick={() => setShowConfig(!showConfig)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all ${
                showConfig 
                  ? 'bg-white/10 border-white/20 text-white' 
                  : 'bg-white/5 border-white/10 text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <Settings2 className="w-3.5 h-3.5 text-indigo-400" />
              Customize Header
            </button>

            <button
              onClick={handlePrint}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white rounded-xl text-xs font-bold shadow-lg shadow-emerald-500/20 active:scale-95 transition-all cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              Print / Save as PDF (Ctrl + P)
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors cursor-pointer"
              title="Close Preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Expandable Customization Settings */}
        {showConfig && (
          <div className="max-w-5xl mx-auto mt-4 pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 animate-in fade-in duration-200 text-xs">
            <div>
              <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Exam Title</label>
              <input
                type="text"
                value={examTitle}
                onChange={e => setExamTitle(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-2.5 py-1.5 text-white focus:outline-none focus:border-indigo-500/50"
              />
            </div>
            <div>
              <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Institution / Academy</label>
              <input
                type="text"
                value={institutionName}
                onChange={e => setInstitutionName(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-2.5 py-1.5 text-white focus:outline-none focus:border-indigo-500/50"
              />
            </div>
            <div>
              <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Teacher / Department</label>
              <input
                type="text"
                value={teacherName}
                onChange={e => setTeacherName(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-2.5 py-1.5 text-white focus:outline-none focus:border-indigo-500/50"
              />
            </div>
            <div>
              <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Curriculum & Topic</label>
              <input
                type="text"
                value={curriculumTitle}
                onChange={e => setCurriculumTitle(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-2.5 py-1.5 text-white focus:outline-none focus:border-indigo-500/50"
              />
            </div>

            <div className="sm:col-span-2 lg:col-span-4 flex flex-wrap items-center gap-6 pt-2 text-slate-300">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeMarkScheme}
                  onChange={e => setIncludeMarkScheme(e.target.checked)}
                  className="rounded border-white/20 bg-white/5 text-emerald-500 focus:ring-0"
                />
                <span>Include <strong>Mark Scheme & Solutions</strong> (Separate Page)</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeAnswerGrid}
                  onChange={e => setIncludeAnswerGrid(e.target.checked)}
                  className="rounded border-white/20 bg-white/5 text-emerald-500 focus:ring-0"
                />
                <span>Include <strong>Student Answer Sheet Grid</strong></span>
              </label>
            </div>
          </div>
        )}
      </div>

      {/* Scrollable Document Preview Area */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-8 print:p-0 print:m-0 print:overflow-visible print:block">
        <div className="max-w-4xl mx-auto bg-white text-black rounded-2xl shadow-2xl overflow-hidden print:rounded-none print:shadow-none print:w-full print:max-w-none print:m-0 print:p-0">
          <PrintableWorksheet
            worksheetTitle={examTitle}
            institutionName={institutionName}
            teacherName={teacherName}
            curriculumTitle={curriculumTitle}
            targetTopic={targetTopic}
            questions={normalizedQuestions}
            includeMarkScheme={includeMarkScheme}
            includeAnswerGrid={includeAnswerGrid}
          />
        </div>
      </div>
    </div>,
    document.body
  );
};
