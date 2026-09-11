'use client';

import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { sanitizeKatex } from '@/lib/katex-sanitizer';
import { Question } from '@/data/exams/types';

interface PrintableWorksheetProps {
  worksheetTitle: string;
  institutionName: string;
  teacherName: string;
  curriculumTitle: string;
  targetTopic: string;
  questions: Question[];
  includeMarkScheme: boolean;
  includeAnswerGrid: boolean;
}

export const PrintableWorksheet: React.FC<PrintableWorksheetProps> = ({
  worksheetTitle,
  institutionName,
  teacherName,
  curriculumTitle,
  targetTopic,
  questions,
  includeMarkScheme,
  includeAnswerGrid
}) => {
  // Math rendering helper
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
    <div className="w-full bg-white text-black p-6 md:p-12 font-serif print:p-0 print:m-0 print:w-full print:bg-white print:text-black">
      
      {/* ========================================================================= */}
      {/* 1. STUDENT QUESTION PAPER SECTION                                         */}
      {/* ========================================================================= */}
      <div className="worksheet-paper">
        
        {/* Official Header */}
        <header className="border-b-2 border-black pb-4 mb-6">
          <div className="flex justify-between items-start mb-3">
            <div>
              <span className="text-xs uppercase font-sans tracking-widest text-slate-600 block">
                {institutionName || 'ChemZim International Chemistry Academy'}
              </span>
              <h1 className="text-2xl md:text-3xl font-bold font-sans tracking-tight text-black mt-0.5">
                {worksheetTitle || 'Chemistry Topic Assessment Worksheet'}
              </h1>
              <p className="text-sm font-sans text-slate-700 mt-1">
                <strong>Curriculum:</strong> {curriculumTitle} • <strong>Topic:</strong> {targetTopic}
              </p>
            </div>

            <div className="text-right font-sans text-xs border border-black p-2.5 rounded bg-slate-50 min-w-[150px]">
              <div className="font-bold text-sm">TOTAL MARKS</div>
              <div className="text-xl font-extrabold mt-1">/ {questions.length}</div>
            </div>
          </div>

          {/* Student Fields Fill-in Strip */}
          <div className="grid grid-cols-3 gap-4 pt-3 border-t border-slate-300 font-sans text-xs">
            <div>
              <span className="font-bold text-slate-600">Student Name:</span>
              <div className="border-b border-black mt-1 h-5" />
            </div>
            <div>
              <span className="font-bold text-slate-600">Date:</span>
              <div className="border-b border-black mt-1 h-5" />
            </div>
            <div>
              <span className="font-bold text-slate-600">Teacher / Class:</span>
              <div className="border-b border-black mt-1 h-5">{teacherName}</div>
            </div>
          </div>
        </header>

        {/* Paper Instructions */}
        <div className="bg-slate-50 border border-slate-300 rounded p-3 mb-6 font-sans text-xs space-y-1">
          <div className="font-bold uppercase tracking-wider text-slate-800">Instructions to Candidates:</div>
          <ul className="list-disc list-inside text-slate-700 space-y-0.5">
            <li>Answer all questions. Each question carries <strong>1 mark</strong>.</li>
            <li>For each question there are four possible answers <strong>A, B, C</strong> and <strong>D</strong>.</li>
            <li>Choose the one you consider correct and record your choice clearly in the box provided.</li>
            <li>You may use a scientific calculator and an approved Periodic Table.</li>
          </ul>
        </div>

        {/* Questions List */}
        <div className="space-y-6">
          {questions.map((q, qIndex) => {
            const questionNumber = qIndex + 1;

            return (
              <div 
                key={q.id || qIndex} 
                className="break-inside-avoid border-b border-slate-200 pb-5 last:border-b-0"
              >
                {/* Question statement & source */}
                <div className="flex justify-between items-baseline gap-4 mb-2.5">
                  <div className="font-bold font-sans text-sm text-black flex items-baseline gap-2">
                    <span className="text-base font-extrabold">{questionNumber}.</span>
                    <span className="font-serif text-base font-normal leading-relaxed">
                      {renderTextWithMath(q.question)}
                    </span>
                  </div>

                  {/* Student Answer Box */}
                  <div className="flex-shrink-0 flex items-center gap-1.5 font-sans text-xs border-2 border-black px-3 py-1 rounded bg-white">
                    <span className="font-bold">Ans:</span>
                    <div className="w-5 h-5 flex items-center justify-center font-bold" />
                  </div>
                </div>

                {/* Optional Image */}
                {q.imageHtml && (
                  <div 
                    className="my-3 flex justify-center max-w-lg mx-auto"
                    dangerouslySetInnerHTML={{ __html: q.imageHtml }}
                  />
                )}

                {/* Optional Table */}
                {q.tableHtml && (
                  <div 
                    className="my-3 flex justify-center max-w-lg mx-auto overflow-x-auto text-black"
                    dangerouslySetInnerHTML={{ __html: q.tableHtml }}
                  />
                )}

                {/* Options Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 mt-2 font-sans text-sm pl-6">
                  {q.options.map((opt, optIndex) => {
                    const letter = String.fromCharCode(65 + optIndex);
                    return (
                      <div key={optIndex} className="flex items-start gap-2">
                        <span className="font-bold text-slate-900 min-w-[1.25rem]">
                          <strong>{letter}</strong>
                        </span>
                        <span className="text-slate-800 leading-snug">
                          {renderTextWithMath(opt.text)}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Source note (small) */}
                {q.source && (
                  <div className="text-[10px] font-sans text-slate-500 pl-6 mt-2 italic">
                    Ref: {q.source}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Optional Student Answer Grid at the end of the test */}
        {includeAnswerGrid && (
          <div className="mt-8 pt-6 border-t-2 border-black break-inside-avoid font-sans">
            <h3 className="font-bold text-sm uppercase tracking-wider mb-2">Student Answer Sheet</h3>
            <p className="text-xs text-slate-600 mb-3">Record your final answers in the grid below:</p>
            <div className="grid grid-cols-5 sm:grid-cols-10 gap-1.5 text-center text-xs">
              {questions.map((_, i) => (
                <div key={i} className="border border-black rounded p-1">
                  <span className="block font-bold text-slate-600 text-[10px]">Q{i + 1}</span>
                  <div className="h-6 flex items-center justify-center font-bold text-base" />
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* ========================================================================= */}
      {/* 2. EXAMINER MARK SCHEME SECTION (FORCED PAGE BREAK)                       */}
      {/* ========================================================================= */}
      {includeMarkScheme && (
        <div className="break-before-page pt-10 border-t-4 border-black mt-12 print:mt-0">
          
          <header className="border-b-2 border-black pb-4 mb-6">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-xs font-sans uppercase tracking-widest text-emerald-700 font-bold block">
                  Confidential • Official Examiner Key
                </span>
                <h2 className="text-2xl font-bold font-sans tracking-tight text-black">
                  Mark Scheme & Worked Explanations
                </h2>
                <p className="text-xs font-sans text-slate-600">
                  {worksheetTitle} — {curriculumTitle} ({questions.length} Marks Total)
                </p>
              </div>

              <div className="border border-emerald-600 bg-emerald-50 text-emerald-900 px-3 py-1.5 rounded font-sans text-xs font-bold text-right">
                TEACHER COPY
              </div>
            </div>
          </header>

          {/* Quick Answer Key Matrix */}
          <div className="mb-8 font-sans">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Quick Answer Key:
            </h3>
            <div className="grid grid-cols-5 sm:grid-cols-10 gap-2 text-center text-xs">
              {questions.map((q, i) => {
                const correctLetter = String.fromCharCode(65 + q.correctAnswer);
                return (
                  <div key={i} className="border border-slate-300 bg-slate-50 rounded p-1.5">
                    <span className="block text-[10px] text-slate-500 font-semibold">Q{i + 1}</span>
                    <span className="text-base font-extrabold text-emerald-700">{correctLetter}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Detailed Question Explanations */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3 font-sans">
              Detailed Examiner Guidance & Notes:
            </h3>

            {questions.map((q, i) => {
              const correctLetter = String.fromCharCode(65 + q.correctAnswer);
              const correctText = q.options[q.correctAnswer]?.text;

              return (
                <div 
                  key={i} 
                  className="break-inside-avoid border border-slate-200 rounded-lg p-3 bg-slate-50/50 font-sans text-xs space-y-1.5"
                >
                  <div className="flex justify-between items-center border-b border-slate-200 pb-1.5">
                    <span className="font-bold text-black text-sm">
                      Question {i + 1}
                    </span>
                    <span className="bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold px-2 py-0.5 rounded text-xs">
                      Correct Answer: {correctLetter}
                    </span>
                  </div>

                  <div className="text-slate-700">
                    <strong>Key Response:</strong> {renderTextWithMath(correctText)}
                  </div>

                  {q.explanation && (
                    <div className="bg-white border border-slate-200 rounded p-2 text-slate-800 leading-relaxed font-serif text-xs">
                      <span className="font-sans font-bold text-slate-600 block text-[10px] uppercase mb-0.5">
                        Explanation & Mark Allocation:
                      </span>
                      {renderTextWithMath(q.explanation)}
                    </div>
                  )}

                  {q.source && (
                    <div className="text-[10px] text-slate-500 italic">
                      Source: {q.source}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      )}

    </div>
  );
};
