'use client';

import React, { useState } from 'react';
import { X, Search, Sparkles, BookOpen } from 'lucide-react';

interface ElementData {
  number: number;
  symbol: string;
  name: string;
  mass: number | string;
  group: number;
  period: number;
  category: 'alkali' | 'alkaline-earth' | 'transition' | 'post-transition' | 'metalloid' | 'nonmetal' | 'halogen' | 'noble-gas' | 'lanthanide' | 'actinide';
}

// Cambridge / Edexcel Chemistry Examination Periodic Table Standard Data
const ELEMENTS: ElementData[] = [
  { number: 1, symbol: 'H', name: 'Hydrogen', mass: 1, group: 1, period: 1, category: 'nonmetal' },
  { number: 2, symbol: 'He', name: 'Helium', mass: 4, group: 18, period: 1, category: 'noble-gas' },
  { number: 3, symbol: 'Li', name: 'Lithium', mass: 7, group: 1, period: 2, category: 'alkali' },
  { number: 4, symbol: 'Be', name: 'Beryllium', mass: 9, group: 2, period: 2, category: 'alkaline-earth' },
  { number: 5, symbol: 'B', name: 'Boron', mass: 11, group: 13, period: 2, category: 'metalloid' },
  { number: 6, symbol: 'C', name: 'Carbon', mass: 12, group: 14, period: 2, category: 'nonmetal' },
  { number: 7, symbol: 'N', name: 'Nitrogen', mass: 14, group: 15, period: 2, category: 'nonmetal' },
  { number: 8, symbol: 'O', name: 'Oxygen', mass: 16, group: 16, period: 2, category: 'nonmetal' },
  { number: 9, symbol: 'F', name: 'Fluorine', mass: 19, group: 17, period: 2, category: 'halogen' },
  { number: 10, symbol: 'Ne', name: 'Neon', mass: 20, group: 18, period: 2, category: 'noble-gas' },
  { number: 11, symbol: 'Na', name: 'Sodium', mass: 23, group: 1, period: 3, category: 'alkali' },
  { number: 12, symbol: 'Mg', name: 'Magnesium', mass: 24, group: 2, period: 3, category: 'alkaline-earth' },
  { number: 13, symbol: 'Al', name: 'Aluminium', mass: 27, group: 13, period: 3, category: 'post-transition' },
  { number: 14, symbol: 'Si', name: 'Silicon', mass: 28, group: 14, period: 3, category: 'metalloid' },
  { number: 15, symbol: 'P', name: 'Phosphorus', mass: 31, group: 15, period: 3, category: 'nonmetal' },
  { number: 16, symbol: 'S', name: 'Sulfur', mass: 32, group: 16, period: 3, category: 'nonmetal' },
  { number: 17, symbol: 'Cl', name: 'Chlorine', mass: 35.5, group: 17, period: 3, category: 'halogen' },
  { number: 18, symbol: 'Ar', name: 'Argon', mass: 40, group: 18, period: 3, category: 'noble-gas' },
  { number: 19, symbol: 'K', name: 'Potassium', mass: 39, group: 1, period: 4, category: 'alkali' },
  { number: 20, symbol: 'Ca', name: 'Calcium', mass: 40, group: 2, period: 4, category: 'alkaline-earth' },
  { number: 21, symbol: 'Sc', name: 'Scandium', mass: 45, group: 3, period: 4, category: 'transition' },
  { number: 22, symbol: 'Ti', name: 'Titanium', mass: 48, group: 4, period: 4, category: 'transition' },
  { number: 23, symbol: 'V', name: 'Vanadium', mass: 51, group: 5, period: 4, category: 'transition' },
  { number: 24, symbol: 'Cr', name: 'Chromium', mass: 52, group: 6, period: 4, category: 'transition' },
  { number: 25, symbol: 'Mn', name: 'Manganese', mass: 55, group: 7, period: 4, category: 'transition' },
  { number: 26, symbol: 'Fe', name: 'Iron', mass: 56, group: 8, period: 4, category: 'transition' },
  { number: 27, symbol: 'Co', name: 'Cobalt', mass: 59, group: 9, period: 4, category: 'transition' },
  { number: 28, symbol: 'Ni', name: 'Nickel', mass: 59, group: 10, period: 4, category: 'transition' },
  { number: 29, symbol: 'Cu', name: 'Copper', mass: 63.5, group: 11, period: 4, category: 'transition' },
  { number: 30, symbol: 'Zn', name: 'Zinc', mass: 65, group: 12, period: 4, category: 'transition' },
  { number: 31, symbol: 'Ga', name: 'Gallium', mass: 70, group: 13, period: 4, category: 'post-transition' },
  { number: 32, symbol: 'Ge', name: 'Germanium', mass: 73, group: 14, period: 4, category: 'metalloid' },
  { number: 33, symbol: 'As', name: 'Arsenic', mass: 75, group: 15, period: 4, category: 'metalloid' },
  { number: 34, symbol: 'Se', name: 'Selenium', mass: 79, group: 16, period: 4, category: 'nonmetal' },
  { number: 35, symbol: 'Br', name: 'Bromine', mass: 80, group: 17, period: 4, category: 'halogen' },
  { number: 36, symbol: 'Kr', name: 'Krypton', mass: 84, group: 18, period: 4, category: 'noble-gas' },
  { number: 37, symbol: 'Rb', name: 'Rubidium', mass: 85.5, group: 1, period: 5, category: 'alkali' },
  { number: 38, symbol: 'Sr', name: 'Strontium', mass: 88, group: 2, period: 5, category: 'alkaline-earth' },
  { number: 39, symbol: 'Y', name: 'Yttrium', mass: 89, group: 3, period: 5, category: 'transition' },
  { number: 40, symbol: 'Zr', name: 'Zirconium', mass: 91, group: 4, period: 5, category: 'transition' },
  { number: 47, symbol: 'Ag', name: 'Silver', mass: 108, group: 11, period: 5, category: 'transition' },
  { number: 50, symbol: 'Sn', name: 'Tin', mass: 119, group: 14, period: 5, category: 'post-transition' },
  { number: 53, symbol: 'I', name: 'Iodine', mass: 127, group: 17, period: 5, category: 'halogen' },
  { number: 54, symbol: 'Xe', name: 'Xenon', mass: 131, group: 18, period: 5, category: 'noble-gas' },
  { number: 56, symbol: 'Ba', name: 'Barium', mass: 137, group: 2, period: 6, category: 'alkaline-earth' },
  { number: 78, symbol: 'Pt', name: 'Platinum', mass: 195, group: 10, period: 6, category: 'transition' },
  { number: 79, symbol: 'Au', name: 'Gold', mass: 197, group: 11, period: 6, category: 'transition' },
  { number: 80, symbol: 'Hg', name: 'Mercury', mass: 201, group: 12, period: 6, category: 'transition' },
  { number: 82, symbol: 'Pb', name: 'Lead', mass: 207, group: 14, period: 6, category: 'post-transition' },
  { number: 92, symbol: 'U', name: 'Uranium', mass: 238, group: 3, period: 7, category: 'actinide' },
];

const CATEGORY_COLORS: Record<string, string> = {
  'alkali': 'bg-rose-500/20 text-rose-300 border-rose-500/30',
  'alkaline-earth': 'bg-amber-500/20 text-amber-300 border-amber-500/30',
  'transition': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  'post-transition': 'bg-teal-500/20 text-teal-300 border-teal-500/30',
  'metalloid': 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  'nonmetal': 'bg-sky-500/20 text-sky-300 border-sky-500/30',
  'halogen': 'bg-violet-500/20 text-violet-300 border-violet-500/30',
  'noble-gas': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  'lanthanide': 'bg-pink-500/20 text-pink-300 border-pink-500/30',
  'actinide': 'bg-orange-500/20 text-orange-300 border-orange-500/30',
};

interface PeriodicTableModalProps {
  isOpen: boolean;
  onClose: () => void;
  boardName?: string;
}

export const PeriodicTableModal: React.FC<PeriodicTableModalProps> = ({ isOpen, onClose, boardName = 'Official Exam' }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedElement, setSelectedElement] = useState<ElementData | null>(null);

  if (!isOpen) return null;

  const filtered = ELEMENTS.filter(e => 
    e.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    e.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
    e.number.toString() === searchTerm.trim()
  );

  return (
    <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-3 md:p-6 animate-in fade-in duration-200">
      <div className="bg-[#0b0f1d] border border-white/10 rounded-3xl w-full max-w-5xl max-h-[90vh] flex flex-col shadow-2xl shadow-indigo-500/10 overflow-hidden">
        
        {/* Modal Header */}
        <div className="p-4 md:p-6 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
                <span>The Periodic Table of Elements</span>
                <span className="text-[11px] bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-2 py-0.5 rounded-full font-normal">
                  {boardName} Standard
                </span>
              </h2>
              <p className="text-xs text-slate-400">Official atomic numbers and relative atomic masses ($A_r$)</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Quick Search */}
            <div className="relative hidden sm:block">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                placeholder="Find element or symbol..."
                className="bg-white/5 border border-white/10 rounded-xl pl-9 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 w-48"
              />
            </div>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4">
          
          {/* Key / Legend Banner */}
          <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-10 border border-indigo-500/30 bg-indigo-500/10 rounded flex flex-col items-center justify-center text-[9px] font-mono">
                  <span className="text-[8px] text-slate-400">12</span>
                  <span className="font-bold text-indigo-300 text-xs">Mg</span>
                  <span className="text-[8px] text-amber-300 font-semibold">24</span>
                </div>
                <div className="text-[11px] text-slate-400 leading-tight">
                  <span className="block text-slate-200 font-semibold">Key:</span>
                  <span>Top: Atomic number ($Z$)</span><br />
                  <span>Bottom: Relative atomic mass ($A_r$)</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 text-[10px]">
              <span className="px-2 py-0.5 rounded bg-rose-500/10 border border-rose-500/20 text-rose-300">Alkali</span>
              <span className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 text-amber-300">Alkaline Earth</span>
              <span className="px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-blue-300">Transition</span>
              <span className="px-2 py-0.5 rounded bg-teal-500/10 border border-teal-500/20 text-teal-300">Post-Transition</span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">Metalloid</span>
              <span className="px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/20 text-sky-300">Nonmetal</span>
              <span className="px-2 py-0.5 rounded bg-violet-500/10 border border-violet-500/20 text-violet-300">Halogen</span>
              <span className="px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20 text-purple-300">Noble Gas</span>
            </div>
          </div>

          {/* Elements Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-2">
            {filtered.map(el => {
              const colorClass = CATEGORY_COLORS[el.category] || 'bg-white/5 text-white border-white/10';
              const isSelected = selectedElement?.number === el.number;

              return (
                <button
                  key={el.number}
                  onClick={() => setSelectedElement(el)}
                  className={`p-2 rounded-xl border flex flex-col items-center justify-between transition-all hover:scale-105 active:scale-95 text-center ${colorClass} ${
                    isSelected ? 'ring-2 ring-indigo-400 shadow-lg shadow-indigo-500/20' : ''
                  }`}
                >
                  <span className="text-[10px] opacity-75 font-mono">{el.number}</span>
                  <span className="text-base font-black tracking-tight">{el.symbol}</span>
                  <span className="text-[10px] font-bold opacity-90">{el.mass}</span>
                  <span className="text-[9px] truncate w-full opacity-60 mt-0.5">{el.name}</span>
                </button>
              );
            })}
          </div>

          {/* Selected Element Detail Inspector */}
          {selectedElement && (
            <div className="mt-4 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 animate-in slide-in-from-bottom duration-150">
              <div className="flex items-center gap-4">
                <div className="w-14 h-16 rounded-xl bg-indigo-600/30 border border-indigo-400/40 flex flex-col items-center justify-center font-mono">
                  <span className="text-xs text-slate-300">{selectedElement.number}</span>
                  <span className="text-2xl font-black text-white">{selectedElement.symbol}</span>
                  <span className="text-xs text-amber-300 font-bold">{selectedElement.mass}</span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">{selectedElement.name}</h3>
                  <p className="text-xs text-slate-400 capitalize">
                    Category: <span className="text-indigo-300 font-medium">{selectedElement.category.replace('-', ' ')}</span> • Period {selectedElement.period} • Group {selectedElement.group}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedElement(null)}
                className="text-xs text-slate-400 hover:text-white px-3 py-1.5 rounded-lg bg-white/5 border border-white/10"
              >
                Clear Selection
              </button>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-3 md:p-4 border-t border-white/5 bg-white/[0.01] flex items-center justify-between text-xs text-slate-500">
          <span>Official Cambridge 0620 / Pearson Edexcel Reference Sheet</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold transition-all"
          >
            Close Sheet
          </button>
        </div>

      </div>
    </div>
  );
};
