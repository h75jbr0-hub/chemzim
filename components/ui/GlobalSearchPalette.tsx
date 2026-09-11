'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X, ArrowRight, CornerDownLeft, Sparkles, BookOpen } from 'lucide-react';
import { searchKnowledgeBase, SearchResultItem } from '@/lib/search-index';

interface GlobalSearchPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GlobalSearchPalette({ isOpen, onClose }: GlobalSearchPaletteProps) {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResultItem[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input whenever palette opens
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setResults([]);
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Execute Search
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const res = searchKnowledgeBase(query, 7);
    setResults(res);
    setSelectedIndex(0);
  }, [query]);

  // Navigate to result
  const handleSelect = useCallback((item: SearchResultItem) => {
    onClose();
    router.push(item.href);
  }, [onClose, router]);

  // Keyboard navigation inside palette
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (results.length > 0 ? (prev + 1) % results.length : 0));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (results.length > 0 ? (prev - 1 + results.length) % results.length : 0));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (results.length > 0 && results[selectedIndex]) {
          handleSelect(results[selectedIndex]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, results, selectedIndex, handleSelect, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-2xl bg-[#090d1a] border border-white/10 rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[80vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Search Header Input */}
        <div className="flex items-center gap-3 px-6 py-4.5 border-b border-white/10 bg-white/[0.02]">
          <Search className="w-5 h-5 text-indigo-400 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search lessons, units, IGCSE/A-Level concepts, or exam questions..."
            className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-slate-500 text-sm md:text-base font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono text-slate-400 bg-white/5 border border-white/10 px-2 py-1 rounded-lg">
            ESC
          </kbd>
        </div>

        {/* Results Container */}
        <div className="flex-1 overflow-y-auto p-3 space-y-1.5 [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.1)_transparent]">
          {query.trim() === '' ? (
            <div className="py-12 px-6 text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mx-auto">
                <Sparkles className="w-6 h-6" />
              </div>
              <p className="text-white text-sm font-bold">Search the ChemZim Knowledge Base</p>
              <p className="text-slate-500 text-xs max-w-sm mx-auto">
                Type chemical concepts (e.g. <span className="text-indigo-300 font-mono">Titration</span>, <span className="text-indigo-300 font-mono">Polymers</span>, <span className="text-indigo-300 font-mono">Moles</span>, <span className="text-indigo-300 font-mono">Mock</span>) to jump directly to the lesson or practice question.
              </p>
            </div>
          ) : results.length === 0 ? (
            <div className="py-12 px-6 text-center space-y-2">
              <p className="text-slate-400 text-sm font-semibold">No direct matches found for &ldquo;{query}&rdquo;</p>
              <p className="text-slate-500 text-xs">Try searching for a simpler chemical keyword or topic name.</p>
            </div>
          ) : (
            results.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => handleSelect(item)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`px-4 py-3 rounded-2xl flex items-center justify-between gap-3 cursor-pointer transition-all border ${
                    isSelected
                      ? 'bg-indigo-500/15 border-indigo-500/30 text-white shadow-lg shadow-indigo-500/5'
                      : 'bg-transparent border-transparent text-slate-300 hover:bg-white/[0.03]'
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <span className="text-xl flex-shrink-0">{item.icon || '📖'}</span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="font-bold text-sm truncate text-white">{item.title}</p>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border flex-shrink-0 ${item.badgeColor}`}>
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 truncate mt-0.5">{item.subtitle}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    {isSelected ? (
                      <span className="hidden sm:inline-flex items-center gap-1 text-[10px] text-indigo-300 bg-indigo-500/20 px-2 py-1 rounded-lg font-mono">
                        Jump <CornerDownLeft className="w-3 h-3" />
                      </span>
                    ) : (
                      <ArrowRight className="w-4 h-4 text-slate-600" />
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer Navigation Hints */}
        <div className="px-6 py-3 border-t border-white/5 bg-white/[0.01] flex items-center justify-between text-[11px] text-slate-500">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <kbd className="bg-white/5 border border-white/10 px-1.5 py-0.5 rounded text-[10px] text-slate-400">↑</kbd>
              <kbd className="bg-white/5 border border-white/10 px-1.5 py-0.5 rounded text-[10px] text-slate-400">↓</kbd> Navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="bg-white/5 border border-white/10 px-1.5 py-0.5 rounded text-[10px] text-slate-400">↵</kbd> Select
            </span>
          </div>
          <span>ChemZim Omnisearch</span>
        </div>
      </div>
    </div>
  );
}
