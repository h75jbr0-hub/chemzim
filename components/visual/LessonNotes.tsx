'use client';

import { useState, useEffect } from 'react';
import { Save, Trash2 } from 'lucide-react';

interface LessonNotesProps {
    lessonId: string;
}

export default function LessonNotes({ lessonId }: LessonNotesProps) {
    const [note, setNote] = useState('');
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        const savedNote = localStorage.getItem(`lesson-note-${lessonId}`);
        if (savedNote) setNote(savedNote);
    }, [lessonId]);

    const handleSave = () => {
        localStorage.setItem(`lesson-note-${lessonId}`, note);
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    const handleClear = () => {
        if (confirm('Are you sure you want to clear your notes?')) {
            setNote('');
            localStorage.removeItem(`lesson-note-${lessonId}`);
        }
    };

    return (
        <div className="w-full">
            <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Write your study notes here..."
                className="w-full min-h-[150px] p-4 rounded-2xl border border-border bg-surface/30 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-indigo-500/50 focus:bg-surface/50 transition-all text-sm mb-4 resize-y"
            />
            <div className="flex gap-3">
                <button
                    onClick={handleSave}
                    className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    disabled={!note}
                >
                    <Save size={18} />
                    {saved ? 'Saved!' : 'Save Notes'}
                </button>
                {note && (
                    <button
                        onClick={handleClear}
                        className="flex items-center gap-2 border border-red-500/30 hover:border-red-500 hover:bg-red-500/10 text-red-400 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer"
                    >
                        <Trash2 size={18} />
                        Clear
                    </button>
                )}
            </div>
        </div>
    );
}
