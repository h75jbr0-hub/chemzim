'use client';

import React, { useState, useEffect } from 'react';
import { FileText, Printer, Download, Trash2, BookOpen, ExternalLink, X } from 'lucide-react';
import Link from 'next/link';

export interface StudentNoteItem {
  key: string;
  lessonId: string;
  title: string;
  content: string;
  lastUpdated?: string;
  href: string;
}

interface AllNotesModalProps {
  isOpen: boolean;
  onClose: () => void;
  studentName?: string;
}

export function AllNotesModal({ isOpen, onClose, studentName }: AllNotesModalProps) {
  const [notes, setNotes] = useState<StudentNoteItem[]>([]);

  // Scan localStorage for all keys starting with 'lesson-note-'
  useEffect(() => {
    if (!isOpen) return;

    const collectedNotes: StudentNoteItem[] = [];

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('lesson-note-')) {
        const content = localStorage.getItem(key) || '';
        if (!content.trim()) continue;

        const rawLessonId = key.replace('lesson-note-', '');
        // e.g. "cie-igcse-unit-1-lesson-1"
        const parts = rawLessonId.split('-lesson-');
        const unitPart = parts[0] || 'Unit';
        const lessonNum = parts[1] || '1';

        // Format a readable title
        let formattedTitle = `Lesson ${lessonNum}`;
        let href = '/dashboard/curriculum';

        if (rawLessonId.includes('unit-')) {
          const uNum = rawLessonId.match(/unit-(\d+)/)?.[1] || '1';
          formattedTitle = `Unit ${uNum} • Lesson ${lessonNum}`;
          const track = rawLessonId.startsWith('edexcel') ? 'edexcel-alevel' : 'cie-igcse';
          href = `/dashboard/curriculum/${track}/unit-${uNum}?lesson=${lessonNum}`;
        }

        collectedNotes.push({
          key,
          lessonId: rawLessonId,
          title: formattedTitle,
          content: content.trim(),
          href
        });
      }
    }

    setNotes(collectedNotes);
  }, [isOpen]);

  const handlePrint = () => {
    window.print();
  };

  const handleExportText = () => {
    if (notes.length === 0) return;
    const header = `ChemZim International Chemistry Academy\nStudent Study Notes: ${studentName || 'Student'}\nGenerated Date: ${new Date().toLocaleDateString()}\n\n========================================\n\n`;
    const body = notes.map(n => `[${n.title}]\n${n.content}\n\n----------------------------------------\n`).join('\n');
    
    const blob = new Blob([header + body], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ChemZim-Study-Notes-${new Date().toISOString().split('T')[0]}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleDeleteNote = (key: string) => {
    if (confirm('Are you sure you want to delete this note?')) {
      localStorage.removeItem(key);
      setNotes(prev => prev.filter(n => n.key !== key));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-3xl bg-[#090d1a] border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] animate-in zoom-in-95 duration-200 print:max-h-none print:h-auto print:border-none print:bg-white print:text-black print:p-0"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/[0.02] print:hidden">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-extrabold text-white">My Personal Study Notes</h3>
              <p className="text-xs text-slate-400">
                {notes.length} note{notes.length !== 1 ? 's' : ''} captured across curriculum lessons
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {notes.length > 0 && (
              <>
                <button
                  type="button"
                  onClick={handleExportText}
                  className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                  title="Download as .txt"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Export Text</span>
                </button>
                <button
                  type="button"
                  onClick={handlePrint}
                  className="px-3 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-lg shadow-indigo-500/20 cursor-pointer"
                  title="Print Notes"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Print / PDF</span>
                </button>
              </>
            )}
            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all cursor-pointer ml-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Official Paper Header (Only visible on paper print) */}
        <div className="hidden print:block p-8 border-b-2 border-black">
          <span className="text-xs uppercase font-sans tracking-widest text-slate-600 block">ChemZim International Chemistry Academy</span>
          <h1 className="text-2xl font-bold font-sans text-black mt-1">Student Comprehensive Study Notes</h1>
          <p className="text-xs text-slate-700 mt-1 font-sans">
            Student: <strong>{studentName || 'Student'}</strong> • Date: <strong>{new Date().toLocaleDateString()}</strong> • Total Notes: <strong>{notes.length}</strong>
          </p>
        </div>

        {/* Notes Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.1)_transparent] print:overflow-visible print:p-8 print:space-y-6">
          {notes.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center mx-auto text-3xl">
                📝
              </div>
              <h4 className="text-base font-bold text-white">No Notes Saved Yet</h4>
              <p className="text-xs text-slate-400 max-w-sm mx-auto leading-relaxed">
                As you study through topics and units, use the &ldquo;Lesson Notes&rdquo; box at the bottom of each lesson to write personal summaries and formulas. They will all sync right here.
              </p>
            </div>
          ) : (
            notes.map((item) => (
              <div 
                key={item.key}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3 hover:border-indigo-500/20 transition-all print:border print:border-slate-300 print:bg-white print:rounded-lg print:break-inside-avoid"
              >
                <div className="flex items-center justify-between border-b border-white/5 pb-2.5 print:border-slate-200">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-indigo-400 print:text-black" />
                    <span className="font-extrabold text-white text-sm print:text-black">{item.title}</span>
                  </div>

                  <div className="flex items-center gap-3 print:hidden">
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="text-xs font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 hover:underline"
                    >
                      Go to Lesson <ExternalLink className="w-3 h-3" />
                    </Link>
                    <button
                      type="button"
                      onClick={() => handleDeleteNote(item.key)}
                      className="text-slate-500 hover:text-rose-400 transition-colors p-1 cursor-pointer"
                      title="Delete note"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="text-slate-200 text-xs sm:text-sm whitespace-pre-wrap leading-relaxed font-sans print:text-black">
                  {item.content}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-white/5 bg-white/[0.01] flex justify-end print:hidden">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 bg-white/5 hover:bg-white/10 text-white rounded-xl text-xs font-bold transition-all cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
