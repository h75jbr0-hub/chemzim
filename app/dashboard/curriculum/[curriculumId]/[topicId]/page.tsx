'use client';

import React, { use, useState, useEffect, useMemo, useRef } from 'react';
import dynamic from 'next/dynamic';
import { allCurricula } from '@/data/curriculum';

import Link from 'next/link';
import { ArrowLeft, BookOpen, BrainCircuit, ChevronLeft, ChevronRight, CheckCircle, Lock } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import confetti from 'canvas-confetti';

import { getLessonFromRegistry, LessonPart } from '@/data/curriculum/registry';
import TextToSpeech from '@/components/visual/TextToSpeech';
import LessonNotes from '@/components/visual/LessonNotes';
import MarkdownCarousel from '@/components/visual/MarkdownCarousel';
import SafeHTML from '@/components/ui/SafeHTML';
import { sanitizeKatex } from '@/lib/katex-sanitizer';
import { CurriculumUpsellModal } from '@/components/ui/CurriculumUpsellModal';

const EquationAnimator = dynamic(() => import('@/components/visual/EquationAnimator'), { 
    ssr: false,
    loading: () => <div className="h-[220px] animate-pulse bg-slate-800/10 rounded-2xl border border-white/5 flex-shrink-0" />
});
const GasLawSimulator = dynamic(() => import('@/components/visual/GasLawSimulator'), {
    ssr: false,
    loading: () => <div className="h-[350px] animate-pulse bg-slate-800/10 rounded-xl border border-white/5" />
});
const AvogadroScale = dynamic(() => import('@/components/visual/AvogadroScale'), {
    ssr: false,
    loading: () => <div className="h-[300px] animate-pulse bg-slate-800/10 rounded-xl border border-white/5" />
});
const MassSpecSimulator = dynamic(() => import('@/components/visual/MassSpecSimulator'), {
    ssr: false,
    loading: () => <div className="h-[250px] animate-pulse bg-slate-800/10 rounded-xl border border-white/5" />
});
const TitrationSimulator = dynamic(() => import('@/components/visual/TitrationSimulator'), {
    ssr: false,
    loading: () => <div className="h-[400px] animate-pulse bg-slate-800/10 rounded-xl border border-white/5" />
});
const MolecularShapeSimulator = dynamic(() => import('@/components/visual/MolecularShapeSimulator'), {
    ssr: false,
    loading: () => <div className="h-[300px] animate-pulse bg-slate-800/10 rounded-xl border border-white/5" />
});
const FlashcardsDeck = dynamic(() => import('@/components/visual/FlashcardsDeck'), {
    ssr: false,
    loading: () => <div className="h-[300px] animate-pulse bg-slate-800/10 rounded-xl border border-white/5" />
});
const KineticsRatePlotter = dynamic(() => import('@/components/visual/KineticsRatePlotter'), {
    ssr: false,
    loading: () => <div className="h-[350px] animate-pulse bg-slate-800/10 rounded-xl border border-white/5" />
});
const MaxwellBoltzmannSimulator = dynamic(() => import('@/components/visual/MaxwellBoltzmannSimulator'), {
    ssr: false,
    loading: () => <div className="h-[350px] animate-pulse bg-slate-800/10 rounded-xl border border-white/5" />
});
const ArrheniusSimulator = dynamic(() => import('@/components/visual/ArrheniusSimulator'), {
    ssr: false,
    loading: () => <div className="h-[350px] animate-pulse bg-slate-800/10 rounded-xl border border-white/5" />
});
const RateMechanismBuilder = dynamic(() => import('@/components/visual/RateMechanismBuilder'), {
    ssr: false,
    loading: () => <div className="h-[350px] animate-pulse bg-slate-800/10 rounded-xl border border-white/5" />
});
const DisappearingCrossSimulator = dynamic(() => import('@/components/visual/DisappearingCrossSimulator'), {
    ssr: false,
    loading: () => <div className="h-[350px] animate-pulse bg-slate-800/10 rounded-xl border border-white/5" />
});
const ElectrolysisSimulator = dynamic(() => import('@/components/visual/ElectrolysisSimulator'), {
    ssr: false,
    loading: () => <div className="h-[380px] animate-pulse bg-slate-800/10 rounded-xl border border-white/5" />
});
const BondingSimulator = dynamic(() => import('@/components/visual/BondingSimulator'), {
    ssr: false,
    loading: () => <div className="h-[380px] animate-pulse bg-slate-800/10 rounded-xl border border-white/5" />
});

import { edexcelAlevelFlashcards } from '@/data/curriculum/edexcel-alevel/flashcards';
import { cieIgcseFlashcards } from '@/data/curriculum/cie-igcse/flashcards';
import { useGamification } from '@/contexts/GamificationContext';
import { useAuth } from '@/contexts/AuthContext';

interface TopicPageProps {
    params: Promise<{
        curriculumId: string;
        topicId: string;
    }>;
    searchParams: Promise<{
        tab?: string;
        lesson?: string;
    }>;
}

const renderTableFromLines = (tableLines: string[], keyIdx: number): React.ReactNode => {
    const rows = tableLines
        .map(line => {
            const cleanLine = line.trim().replace(/^>\s*/, '');
            return cleanLine.split('|').map(cell => cell.trim()).filter((_, idx, arr) => idx > 0 && idx < arr.length - 1);
        })
        .filter(row => row.length > 0 && !row.every(cell => /^:?-+:?$/.test(cell)));

    if (rows.length === 0) return null;

    const headers = rows[0];
    const bodyRows = rows.slice(1);

    return (
        <div key={`table-wrapper-${keyIdx}`} className="overflow-x-auto my-6 rounded-2xl border border-white/10 shadow-lg">
            <table className="min-w-full divide-y divide-white/10 bg-[#0d0d26]/80 backdrop-blur-md">
                <thead className="bg-white/[0.04]">
                    <tr>
                        {headers.map((header, hIdx) => (
                            <th key={hIdx} className="px-6 py-4 text-left text-xs font-bold text-indigo-300 uppercase tracking-wider border-b border-white/10">
                                {renderTextWithMath(header)}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                    {bodyRows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-white/[0.02] transition-colors">
                            {row.map((cell, cIdx) => (
                                <td key={cIdx} className="px-6 py-4 text-sm text-slate-300">
                                    {renderTextWithMath(cell)}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const renderTextWithMath = (children: React.ReactNode): React.ReactNode => {
    if (!children) return null;

    if (typeof children !== 'string') {
        if (Array.isArray(children)) {
            return (
                <React.Fragment>
                    {children.map((child, idx) =>
                        typeof child === 'string' ? <React.Fragment key={idx}>{renderTextWithMath(child)}</React.Fragment> : <React.Fragment key={idx}>{renderTextWithMath(child)}</React.Fragment>
                    )}
                </React.Fragment>
            );
        }
        if (React.isValidElement(children)) {
            const element = children as React.ReactElement<any>;
            return React.cloneElement(element, {
                ...element.props,
                children: renderTextWithMath(element.props.children)
            });
        }
        return children;
    }

    if (children.includes('<svg') && children.includes('</svg>')) {
        const parts = children.split(/(<svg[\s\S]*?<\/svg>)/g);
        return (
            <React.Fragment>
                {parts.map((part, i) => {
                    if (i % 2 === 1) {
                        return <div key={i} className="w-full overflow-x-auto flex justify-center my-4" dangerouslySetInnerHTML={{ __html: part }} />;
                    }
                    return <React.Fragment key={i}>{renderTextWithMath(part)}</React.Fragment>;
                })}
            </React.Fragment>
        );
    }

    if (children.includes('@@@CUSTOM_TABLE_START@@@')) {
        const parts = children.split(/@@@CUSTOM_TABLE_START@@@([\s\S]*?)@@@CUSTOM_TABLE_END@@@/g);
        if (parts.length > 1) {
            return (
                <React.Fragment>
                    {parts.map((part, i) => {
                        if (i % 2 === 1) {
                            try {
                                const tableLines = decodeURIComponent(part).split('\n');
                                return renderTableFromLines(tableLines, i);
                            } catch (e) {
                                return `[Error decoding table]`;
                            }
                        }
                        return <React.Fragment key={i}>{renderTextWithMath(part)}</React.Fragment>;
                    })}
                </React.Fragment>
            );
        }
    }

    if (children.includes('STARTINLINESVG')) {
        const parts = children.split(/STARTINLINESVG([\s\S]*?)ENDINLINESVG/g);
        if (parts.length > 1) {
            return (
                <React.Fragment>
                    {parts.map((part, i) => {
                         if (i % 2 === 1) {
                             try {
                                 // Decode from Base64 supporting Unicode safely
                                 const binString = atob(part);
                                 const bytes = Uint8Array.from(binString, (char) => char.charCodeAt(0));
                                 const svgHtml = new TextDecoder().decode(bytes);
                                 return (
                                     <div
                                         key={i}
                                         className="w-full overflow-x-auto flex justify-center my-4"
                                         dangerouslySetInnerHTML={{ __html: svgHtml }}
                                     />
                                 );
                             } catch {
                                 return null;
                             }
                         }
                         return <React.Fragment key={i}>{renderTextWithMath(part)}</React.Fragment>;
                    })}
                </React.Fragment>
            );
        }
        // Fallback: if children includes the token but split failed for some reason, don't return undefined.
        return children;
    }

    if (children.includes('[NOWRAP:')) {

        const parts = children.split(/\[NOWRAP:(.*?)\]/g);
        if (parts.length > 1) {
            return (
                <React.Fragment>
                    {parts.map((part, i) => {
                        if (i % 2 === 1) {
                            return (
                                <span key={i} className="inline-block whitespace-nowrap">
                                    {renderTextWithMath(part)}
                                </span>
                            );
                        }
                        return <React.Fragment key={i}>{renderTextWithMath(part)}</React.Fragment>;
                    })}
                </React.Fragment>
            );
        }
    }

    if (children.includes('$$')) {
        const parts = children.split('$$');
        return (
            <React.Fragment>
                {parts.map((part, i) => {
                    if (i % 2 === 1) {
                        return <BlockMath key={i} math={sanitizeKatex(part)} />;
                    }
                    return <React.Fragment key={i}>{renderTextWithMath(part)}</React.Fragment>;
                })}
            </React.Fragment>
        );
    }

    if (children.includes('$')) {
        const parts = children.split('$');
        return (
            <React.Fragment>
                {parts.map((part, i) => {
                    if (i % 2 === 1) {
                        return <InlineMath key={i} math={sanitizeKatex(part)} />;
                    }
                    return <React.Fragment key={i}>{part}</React.Fragment>;
                })}
            </React.Fragment>
        );
    }

    return children;
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

const formatTrailingSymbolsAndUnits = (text: string): string => {
    if (!text) return text;

    // 1. Manually parenthesized expressions followed by a period at the end of sentences/lines.
    // e.g. (NaCl). or ($...$). or (g mol⁻¹).
    const parenthesizedRegex = /\(([^)]{1,12})\)\./g;

    // 2. Specific units at the end of sentences/lines: mol⁻¹, g mol⁻¹, dm³, cm³, m³, kPa, Pa, K, mol, g
    const unitRegex = /\b(mol⁻¹|g\s*mol⁻¹|dm³|cm³|m³|kPa|Pa|K|mol|g)\./g;

    // 3. Chemical formulas/symbols: e.g. NaCl., CO2., H2O., He.
    const chemRegex = /\b(NaCl|CO₂|CO_2|H₂O|H_2O|He|O₂|O_2|H₂|H_2|Fe|CuSO₄|CuSO_4|Fe₂O₃|Fe_2O_3|CO)\./g;

    const numberRegex = /(?<!(?:^|\n)\s*|>\s*|#\s|##\s|###\s|####\s|\bLesson\s|\bTopic\s)\b(\d+(?:\.\d+)?)\.(?!\d)/g;

    // 5. Inline math ending with a number/unit/symbol followed by a period.
    const mathRegex = /\$([^\$]+?(?:\d+|mol|g|dm³|cm³|m³|Pa|kPa|K|NaCl|CO_2|H_2O|Fe|atoms|molecules))\$\./g;

    const parts = text.split(/(@@@CUSTOM_TABLE_START@@@[\s\S]*?@@@CUSTOM_TABLE_END@@@)/g);
    for (let i = 0; i < parts.length; i++) {
        if (i % 2 === 0) {
            let processed = parts[i];
            processed = processed.replace(parenthesizedRegex, '[NOWRAP:($1).]');
            processed = processed.replace(unitRegex, '[NOWRAP:($1).]');
            processed = processed.replace(chemRegex, '[NOWRAP:($1).]');
            processed = processed.replace(mathRegex, '[NOWRAP:$$$1$$.]');
            processed = processed.replace(/\b(carbon)-(\d+)\./gi, '[NOWRAP:$1-($2).]');
            processed = processed.replace(numberRegex, '[NOWRAP:($1).]');
            parts[i] = processed;
        }
    }

    return parts.join('');
};

const mdComponents: any = {
    pre: ({ node, children, ...props }: any) => {
        const isCarousel = node?.children?.[0]?.properties?.className?.includes('language-carousel');
        if (isCarousel) {
            return <>{children}</>;
        }
        return <pre className="bg-slate-900/50 p-4 rounded-xl border border-white/10 overflow-x-auto my-4 text-sm font-mono text-slate-300" {...props}>{children}</pre>;
    },
    code: ({ node, inline, className, children, ...props }: any) => {
        const match = /language-(\w+)/.exec(className || '');
        if (!inline && match && match[1] === 'carousel') {
            const content = String(children).replace(/\n$/, '');
            const slides = content.split('<!-- slide -->').map((s: string) => s.trim()).filter((s: string) => s !== '');

            // Custom components for carousel to render SVGs at full width and correct aspect ratio
            const carouselMdComponents = {
                ...mdComponents,
                img: ({ node, src, alt, ...imgProps }: any) => {
                    const srcWithBuster = src ? `${src}?v=${Date.now()}` : src;
                    return (
                        <div className="flex justify-center w-full max-w-[500px] my-2">
                            <img
                                src={srcWithBuster}
                                alt={alt || ''}
                                style={{ width: '100%', height: 'auto', aspectRatio: '400 / 250' }}
                                className="rounded-xl border border-white/10 shadow-lg"
                                {...imgProps}
                            />
                        </div>
                    );
                }
            };

            const slideNodes = slides.map((slide: string, idx: number) => (
                <ReactMarkdown key={idx} components={carouselMdComponents}>
                    {slide}
                </ReactMarkdown>
            ));
            return <MarkdownCarousel slides={slideNodes} />;
        }
        return (
            <code className={className} {...props}>
                {children}
            </code>
        );
    },
    p: ({ node, children, ...props }: any) => <div className="text-foreground/90 leading-relaxed mb-4" {...props}>{renderTextWithMath(children)}</div>,
    h2: ({ node, children, ...props }: any) => <h2 className="text-2xl font-bold text-foreground mt-8 mb-4 border-b border-border pb-2" {...props}>{renderTextWithMath(children)}</h2>,
    h3: ({ node, children, ...props }: any) => <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-300 mt-6 mb-3" {...props}>{renderTextWithMath(children)}</h3>,
    h4: ({ node, children, ...props }: any) => <h4 {...props}>{renderTextWithMath(children)}</h4>,
    h5: ({ node, children, ...props }: any) => <h5 {...props}>{renderTextWithMath(children)}</h5>,
    h6: ({ node, children, ...props }: any) => <h6 {...props}>{renderTextWithMath(children)}</h6>,
    ul: ({ node, ...props }: any) => <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6" {...props} />,
    ol: ({ node, ...props }: any) => <ol className="list-decimal pl-6 space-y-2 text-foreground/80 mb-6" {...props} />,
    li: ({ node, children, ...props }: any) => <li className="marker:text-indigo-500" {...props}>{renderTextWithMath(children)}</li>,
    strong: ({ node, children, ...props }: any) => <strong className="text-foreground font-semibold" {...props}>{renderTextWithMath(children)}</strong>,
    em: ({ node, children, ...props }: any) => <em {...props}>{renderTextWithMath(children)}</em>,
    img: ({ node, src, alt, ...props }: any) => (
        <div className="flex justify-center my-4 w-full">
            <img
                src={src}
                alt={alt || ''}
                style={{ maxWidth: '85%', height: 'auto' }}
                className="rounded-xl border border-border shadow-lg bg-[#070f1e]/40"
                {...props}
            />
        </div>
    ),

    a: ({ node, children, ...props }: any) => {
        const hrefStr = props.href || '';
        const childStr = typeof children === 'string' ? children : (Array.isArray(children) ? children.join('') : '');

        // Handle [INLINE_SVG:...] tokens that ReactMarkdown misinterprets as links
        // Support regex that matches with or without surrounding square brackets
        const cleanStr = childStr.trim();
        const inlineSvgMatch = cleanStr.match(/^\[?INLINE_SVG:([\s\S]+?)\]?$/);
        if (inlineSvgMatch) {
            try {
                const svgHtml = decodeURIComponent(inlineSvgMatch[1]);
                return (
                    <div className="flex justify-center my-4 w-full" dangerouslySetInnerHTML={{ __html: svgHtml }} />
                );
            } catch {
                return null;
            }
        }

        const hasCustomTable = hrefStr.includes('CUSTOM_TABLE') || childStr.includes('CUSTOM_TABLE');
        if (hasCustomTable) {
            return <>{renderTextWithMath(children)}</>;
        }
        return <a className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 underline transition-colors" {...props}>{renderTextWithMath(children)}</a>;
    },
    blockquote: ({ node, children, ...props }: any) => {
        const getFirstText = (n: any): string => {
            if (!n) return '';
            if (n.type === 'text') {
                if (n.value.trim() === '') return '';
                return n.value;
            }
            if (n.children && n.children.length > 0) {
                for (const child of n.children) {
                    const text = getFirstText(child);
                    if (text) return text;
                }
            }
            return '';
        };

        const getAllText = (n: any): string => {
            if (!n) return '';
            if (n.type === 'text') return n.value;
            if (n.children && n.children.length > 0) {
                return n.children.map((child: any) => getAllText(child)).join(' ');
            }
            return '';
        };

        const firstText = getFirstText(node);
        const match = firstText.match(/^\[!(NOTE|TIP|WARNING|IMPORTANT|CAUTION|EXAMPLE|BOX)\]/i);

        if (match) {
            const type = match[1].toLowerCase();
            const cleanPrefix = (childrenList: React.ReactNode[]): React.ReactNode[] => {
                if (childrenList.length === 0) return childrenList;

                let targetIdx = -1;
                for (let i = 0; i < childrenList.length; i++) {
                    const item = childrenList[i];
                    if (typeof item === 'string' && item.trim() !== '') {
                        targetIdx = i;
                        break;
                    }
                    if (React.isValidElement(item)) {
                        targetIdx = i;
                        break;
                    }
                }

                if (targetIdx === -1) return childrenList;

                const item = childrenList[targetIdx];
                if (typeof item === 'string') {
                    const cleanText = item.replace(/^\[!(NOTE|TIP|WARNING|IMPORTANT|CAUTION|EXAMPLE|BOX)\]\s*/i, '');
                    const newList = [...childrenList];
                    newList[targetIdx] = cleanText;
                    return newList;
                }

                if (React.isValidElement(item)) {
                    const element = item as React.ReactElement<any>;
                    const nestedChildren = React.Children.toArray(element.props.children);
                    const newList = [...childrenList];
                    newList[targetIdx] = React.cloneElement(element, {
                        ...element.props,
                        children: cleanPrefix(nestedChildren)
                    });
                    return newList;
                }

                return childrenList;
            };

            const cleanedChildren = cleanPrefix(React.Children.toArray(children));

            let bgClass = 'bg-blue-500/10 border-blue-500/20 text-blue-700 dark:text-blue-300';
            let title = 'Note';
            let icon = 'ℹ️';
            let showHeader = type === 'example';

            if (type === 'tip') {
                bgClass = 'bg-emerald-500/10 border-emerald-500/20 text-emerald-700 dark:text-emerald-300';
                title = 'Tip';
                icon = '💡';
            } else if (type === 'warning') {
                bgClass = 'bg-amber-500/10 border-amber-500/20 text-amber-700 dark:text-amber-300';
                title = 'Warning';
                icon = '⚠️';
            } else if (type === 'important') {
                bgClass = 'bg-indigo-500/10 border-indigo-500/20 text-indigo-700 dark:text-indigo-300';
                title = 'Important';
                icon = '📌';
            } else if (type === 'caution') {
                bgClass = 'bg-rose-500/10 border-rose-500/20 text-rose-700 dark:text-rose-300';
                title = 'Caution';
                icon = '🛑';
            } else if (type === 'example') {
                bgClass = 'bg-purple-500/10 border-purple-500/20 text-purple-700 dark:text-purple-300';
                title = 'Worked Example';
                icon = '📝';
            } else if (type === 'box') {
                bgClass = 'bg-blue-500/10 border-blue-500/20 text-foreground/90';
            }

            const isStepByStep = getAllText(node).toLowerCase().includes('step-by-step solution');

            return (
                <div className={`border rounded-2xl p-5 my-6 flex flex-col gap-2 ${bgClass} backdrop-blur-md overflow-x-auto w-full`}>
                    {showHeader && !isStepByStep && (
                        <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-xs">
                            <span>{icon}</span>
                            <span>{title}</span>
                        </div>
                    )}
                    <div className="text-sm leading-relaxed">
                        {cleanedChildren}
                    </div>
                </div>
            );
        }

        return (
            <blockquote className="border-l-4 border-indigo-500/30 pl-4 my-4 text-foreground/70 italic">
                {children}
            </blockquote>
        );
    }
};

const renderContentWithTables = (content: string) => {
    if (!content) return null;

    // Pre-extract [INLINE_SVG:...] tokens before ReactMarkdown sees the content.
    // ReactMarkdown misinterprets these large tokens (it splits them or treats them as links).
    // We split the full content at SVG boundaries and render each piece independently.
    const svgSplitPattern = /STARTINLINESVG([\s\S]*?)ENDINLINESVG/g;
    const segments: Array<{ type: 'text' | 'svg'; content: string }> = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    const isIndexInTableLine = (str: string, index: number): boolean => {
        const lineStart = str.lastIndexOf('\n', index) + 1;
        let lineEnd = str.indexOf('\n', index);
        if (lineEnd === -1) lineEnd = str.length;
        const line = str.substring(lineStart, lineEnd);
        return /^[>\s]*\|/.test(line.trim());
    };

    const isIndexInBlockquoteLine = (str: string, index: number): boolean => {
        const lineStart = str.lastIndexOf('\n', index) + 1;
        let lineEnd = str.indexOf('\n', index);
        if (lineEnd === -1) lineEnd = str.length;
        const line = str.substring(lineStart, lineEnd);
        return /^[>\s]*>/.test(line.trim());
    };

    while ((match = svgSplitPattern.exec(content)) !== null) {
        if (isIndexInTableLine(content, match.index) || isIndexInBlockquoteLine(content, match.index)) {
            continue;
        }
        if (match.index > lastIndex) {
            segments.push({ type: 'text', content: content.slice(lastIndex, match.index) });
        }
        segments.push({ type: 'svg', content: match[1] });
        lastIndex = match.index + match[0].length;
    }
    if (lastIndex < content.length) {
        segments.push({ type: 'text', content: content.slice(lastIndex) });
    }

    // Group consecutive svg segments, skipping empty whitespace segments to allow merging
    const groupedSegments: Array<{ type: 'text'; content: string } | { type: 'svg-group'; svgs: string[] }> = [];
    for (const seg of segments) {
        if (seg.type === 'text') {
            if (seg.content.trim() === '' && groupedSegments.length > 0 && groupedSegments[groupedSegments.length - 1].type === 'svg-group') {
                continue;
            }
            groupedSegments.push({ type: 'text', content: seg.content });
        } else if (seg.type === 'svg') {
            const last = groupedSegments[groupedSegments.length - 1];
            if (last && last.type === 'svg-group') {
                last.svgs.push(seg.content);
            } else {
                groupedSegments.push({ type: 'svg-group', svgs: [seg.content] });
            }
        }
    }

    // If no SVG tokens found, process as before
    if (groupedSegments.length === 0 || (groupedSegments.length === 1 && groupedSegments[0].type === 'text')) {
        return renderMarkdownSegment(segments[0]?.content ?? content);
    }

    return (
        <React.Fragment>
            {groupedSegments.map((seg, idx) => {
                if (seg.type === 'svg-group') {
                    const decodeSvg = (b64: string) => {
                        const binString = atob(b64);
                        const bytes = Uint8Array.from(binString, (char) => char.charCodeAt(0));
                        return new TextDecoder().decode(bytes);
                    };

                    if (seg.svgs.length === 1) {
                        try {
                            const svgHtml = decodeSvg(seg.svgs[0]);
                            return (
                                <div key={idx} className="flex justify-center my-4 w-full overflow-x-auto" dangerouslySetInnerHTML={{ __html: svgHtml }} />
                            );
                        } catch {
                            return null;
                        }
                    }

                    return (
                        <div key={idx} className="flex flex-col lg:flex-row gap-6 my-6 w-full justify-center items-stretch">
                            {seg.svgs.map((svgContent, sIdx) => {
                                try {
                                    const svgHtml = decodeSvg(svgContent);
                                    return (
                                        <div key={sIdx} className="flex-1 min-w-[280px] flex justify-center overflow-x-auto rounded-lg" dangerouslySetInnerHTML={{ __html: svgHtml }} />
                                    );
                                } catch {
                                    return null;
                                }
                            })}
                        </div>
                    );
                }
                return <React.Fragment key={idx}>{renderMarkdownSegment(seg.content)}</React.Fragment>;
            })}
        </React.Fragment>
    );
};

const renderMarkdownSegment = (content: string) => {
    if (!content || !content.trim()) return null;

    const lines = content.split('\n');
    const processedLines: string[] = [];
    let currentTableLines: string[] = [];

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const trimmed = line.trim();
        const isTableLine = /^[>\s]*\|/.test(trimmed);

        if (isTableLine) {
            currentTableLines.push(line);
        } else {
            if (currentTableLines.length > 0) {
                const match = currentTableLines[0].match(/^([>\s]*)\|/);
                const prefix = match ? match[1] : '';
                const encoded = encodeURIComponent(currentTableLines.join('\n'))
                    .replace(/\*/g, '%2A')
                    .replace(/_/g, '%5F')
                    .replace(/\(/g, '%28')
                    .replace(/\)/g, '%29')
                    .replace(/!/g, '%21')
                    .replace(/~/g, '%7E')
                    .replace(/-/g, '%2D')
                    .replace(/\./g, '%2E');
                processedLines.push(`${prefix}@@@CUSTOM_TABLE_START@@@${encoded}@@@CUSTOM_TABLE_END@@@`);
                currentTableLines = [];
            }
            processedLines.push(line);
        }
    }

    if (currentTableLines.length > 0) {
        const match = currentTableLines[0].match(/^([>\s]*)\|/);
        const prefix = match ? match[1] : '';
        const encoded = encodeURIComponent(currentTableLines.join('\n'))
            .replace(/\*/g, '%2A')
            .replace(/_/g, '%5F')
            .replace(/\(/g, '%28')
            .replace(/\)/g, '%29')
            .replace(/!/g, '%21')
            .replace(/~/g, '%7E')
            .replace(/-/g, '%2D')
            .replace(/\./g, '%2E');
        processedLines.push(`${prefix}@@@CUSTOM_TABLE_START@@@${encoded}@@@CUSTOM_TABLE_END@@@`);
    }

    return (
        <ReactMarkdown components={mdComponents}>
            {formatTrailingSymbolsAndUnits(processedLines.join('\n'))}
        </ReactMarkdown>
    );
};


export default function TopicPage({ params, searchParams }: TopicPageProps) {
    const { curriculumId, topicId } = use(params);
    const { tab = 'theory', lesson = '1' } = use(searchParams);

    const curriculum = allCurricula.find(c => c.id === curriculumId);
    const topic = curriculum?.topics.find(t => t.id === topicId);

    const track = curriculumId;
    const currentLessonNum = parseInt(lesson, 10);
    const lessonData = getLessonFromRegistry(track, topic?.number || 1, currentLessonNum);
    const theoryContent = lessonData ? lessonData.theory : (topic ? topic.theory : '');


    // Gamification & Auth hooks
    const { completeLesson, addXP } = useGamification();
    const { user, updateUser } = useAuth();
    const [showUpsell, setShowUpsell] = useState(false);

    // Synchronize active track with localStorage and global events
    useEffect(() => {
        if (curriculumId && typeof window !== 'undefined') {
            const clean = curriculumId.replace(/-2026\d+$/, '').toLowerCase().trim();
            localStorage.setItem('chemzim_active_track', clean);
            window.dispatchEvent(new CustomEvent('chemzim_track_changed', { detail: { trackId: clean } }));
        }
    }, [curriculumId]);

    // Determine next / prev lessons and topics
    const { prevLink, nextLink } = useMemo(() => {
        let prev = null;
        let next = null;

        if (topic && curriculum) {
            // Check if there is a previous lesson in the current topic
            if (currentLessonNum > 1) {
                const prevLessonData = getLessonFromRegistry(track, topic.number, currentLessonNum - 1);
                if (prevLessonData) {
                    prev = `/dashboard/curriculum/${curriculumId}/${topicId}?lesson=${currentLessonNum - 1}`;
                }
            } else {
                // Check if there is a previous topic
                const prevTopic = curriculum.topics.find(t => t.number === topic.number - 1);
                if (prevTopic) {
                    // Find the last lesson of the previous topic by probing
                    let lastLessonNum = 1;
                    while (getLessonFromRegistry(track, prevTopic.number, lastLessonNum + 1) !== null) {
                        lastLessonNum++;
                    }
                    prev = `/dashboard/curriculum/${curriculumId}/${prevTopic.id}?lesson=${lastLessonNum}`;
                }
            }

            // Check if there is a next lesson in the current topic
            const nextLessonData = getLessonFromRegistry(track, topic.number, currentLessonNum + 1);
            if (nextLessonData) {
                next = `/dashboard/curriculum/${curriculumId}/${topicId}?lesson=${currentLessonNum + 1}`;
            } else {
                // Check if there is a next topic
                const nextTopic = curriculum.topics.find(t => t.number === topic.number + 1);
                if (nextTopic) {
                    next = `/dashboard/curriculum/${curriculumId}/${nextTopic.id}?lesson=1`;
                }
            }
        }

        return { prevLink: prev, nextLink: next };
    }, [curriculum, topic, currentLessonNum, curriculumId, topicId, track]);

    // State for interactive lesson player
    const [currentPartIndex, setCurrentPartIndex] = useState(0);
    const [completed, setCompleted] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(true);

    // Interactive Quiz State
    const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
    const [quizFirstAttempts, setQuizFirstAttempts] = useState<Record<number, boolean>>({});
    const [quizActiveIndex, setQuizActiveIndex] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);

    // Reset part index and quiz states when changing lessons
    useEffect(() => {
        setCurrentPartIndex(0);
        setCompleted(false);
        setQuizAnswers({});
        setQuizFirstAttempts({});
        setQuizActiveIndex(0);
        setQuizCompleted(false);
    }, [lesson, topicId, curriculumId]);

    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Scroll back to top when switching between lesson parts or changing lessons
    useEffect(() => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTop = 0;
        }
    }, [currentPartIndex, lesson]);

    // Save last studied lesson state
    useEffect(() => {
        if (lessonData && topic && curriculum) {
            const saveLastStudied = async () => {
                try {
                    const lastStudied = {
                        curriculumId,
                        topicId,
                        lessonNum: currentLessonNum,
                        lessonTitle: lessonData.title || topic.title || 'Chemistry Lesson',
                        updatedAt: new Date().toISOString()
                    };
                    await fetch('/api/profile', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ lastStudiedLesson: lastStudied }),
                    });
                    updateUser({ lastStudiedLesson: lastStudied } as any);
                } catch (e) {
                    console.error('Failed to save last studied lesson:', e);
                }
            };
            saveLastStudied();
        }
    }, [curriculumId, topicId, currentLessonNum, lessonData, topic, curriculum]);

    if (!curriculum || !topic) {
        return (
            <div className="flex flex-col items-center justify-center h-full text-center py-20">
                <h1 className="text-2xl font-bold text-white mb-2">Topic not found</h1>
                <Link href="/dashboard/curriculum" className="text-indigo-400 hover:text-indigo-300">
                    Return to Syllabus
                </Link>
            </div>
        );
    }

    // Check if the current curriculum track is locked for the user
    const isSystemAdmin = user?.isAdmin === true || user?.role === 'admin' || user?.role === 'moderator';
    const userTracks = user?.enrolledTracks && user.enrolledTracks.length > 0
        ? user.enrolledTracks
        : (user?.track ? [user.track] : []);

    const isLocked = !isSystemAdmin && userTracks.length > 0 && !userTracks.some(
        t => curriculumId === t || curriculumId === `${t}-20260106` || curriculumId.startsWith(t + '-')
    );

    if (isLocked) {
        return (
            <div className="w-full min-h-[calc(100vh-140px)] flex items-center justify-center p-4">
                <CurriculumUpsellModal 
                    isOpen={showUpsell}
                    onClose={() => setShowUpsell(false)}
                    curriculum={curriculum}
                />

                <div className="max-w-lg w-full rounded-3xl bg-gradient-to-b from-slate-900/90 via-[#0c162c]/95 to-slate-950/95 border border-amber-500/30 p-8 shadow-2xl backdrop-blur-2xl text-center relative overflow-hidden">
                    <div className="absolute -top-20 -right-20 w-44 h-44 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-20 -left-20 w-44 h-44 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

                    <div className="w-16 h-16 rounded-2xl bg-amber-500/15 border border-amber-500/30 mx-auto flex items-center justify-center text-amber-400 mb-6 shadow-inner shadow-amber-500/20">
                        <Lock className="w-8 h-8" />
                    </div>

                    <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
                        Track Access Required
                    </span>

                    <h2 className="text-2xl font-black text-white mt-4 mb-2">
                        {curriculum.title}
                    </h2>
                    <p className="text-sm text-slate-300 mb-6">
                        This unit is part of a premium curriculum not currently unlocked on your account.
                    </p>

                    <div className="flex flex-col gap-3">
                        <button
                            onClick={() => setShowUpsell(true)}
                            className="w-full py-3 px-5 rounded-2xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white font-bold text-sm shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.02] cursor-pointer"
                        >
                            View Curriculum Features & Unlock
                        </button>
                        <Link
                            href="/dashboard/curriculum"
                            className="w-full py-3 px-5 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white font-semibold text-xs transition-colors border border-white/10"
                        >
                            Return to Available Syllabuses
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    // Dynamically build parts if not defined (fallback for simple markdown lessons to run them in slide player)
    const rawPartsList = useMemo(() => {
        if (lessonData && lessonData.parts && lessonData.parts.length > 0) {
            return lessonData.parts;
        }
        if (theoryContent) {
            const sections = theoryContent.split(/(?=###\s+\d+\.\s+|###\s+)/);
            if (sections.length > 1) {
                return sections.map((section, idx) => {
                    const match = section.match(/###\s+(?:\d+\.\s+)?([^\n]+)/);
                    const title = match ? match[1].trim() : (idx === 0 ? 'Introduction' : `Part ${idx + 1}`);
                    return {
                        id: `part-${idx + 1}`,
                        title: title,
                        type: 'text' as const,
                        content: section
                    } as LessonPart;
                });
            }
            return [{
                id: 'intro',
                title: 'Lesson Overview',
                type: 'text' as const,
                content: theoryContent
            } as LessonPart];
        }
        return [] as LessonPart[];
    }, [lessonData, theoryContent]);

    const hasParts = rawPartsList.length > 0;
    const rawLessonQuiz = lessonData?.quiz || [];

    // Shuffle options once when the lesson data changes
    const lessonQuiz = useMemo(() => {
        return rawLessonQuiz.map(question => {
            const options = [...question.options];
            for (let i = options.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [options[i], options[j]] = [options[j], options[i]];
            }
            return {
                ...question,
                options
            };
        });
    }, [rawLessonQuiz]);

    const partsList = [...rawPartsList];
    if (hasParts && lessonQuiz.length > 0) {
        partsList.push({
            id: 'interactive-quiz',
            title: 'Test Your Knowledge 📝',
            type: 'quiz',
            content: '',
        } as LessonPart);
    }
    const safePartIndex = currentPartIndex >= partsList.length ? 0 : currentPartIndex;
    const currentPart = (partsList[safePartIndex] || { id: '', title: '', type: 'text', content: '' }) as LessonPart;

    const handleNext = () => {
        if (currentPartIndex < partsList.length - 1) {
            setCurrentPartIndex(prev => prev + 1);
        } else {
            setCompleted(true);
            completeLesson(`${curriculumId}-${topicId}-lesson-${currentLessonNum}`);
            confetti({
                particleCount: 150,
                spread: 80,
                origin: { y: 0.6 }
            });
        }
    };

    const handlePrev = () => {
        if (currentPartIndex > 0) {
            setCurrentPartIndex(prev => prev - 1);
            setCompleted(false);
        }
    };

    const handleSelectOption = (questionIdx: number, optionIdx: number) => {
        if (quizAnswers[questionIdx] !== undefined) return;
        const question = lessonQuiz[questionIdx];
        const isCorrect = question.options[optionIdx].isCorrect;
        setQuizAnswers(prev => ({ ...prev, [questionIdx]: optionIdx }));

        const isFirstAttempt = quizFirstAttempts[questionIdx] === undefined;
        if (isFirstAttempt) {
            setQuizFirstAttempts(prev => ({ ...prev, [questionIdx]: isCorrect }));
            if (isCorrect) {
                addXP(5);
            }
        }
    };

    const handleNextQuizQuestion = () => {
        if (quizActiveIndex < lessonQuiz.length - 1) {
            setQuizActiveIndex(prev => prev + 1);
        }
    };

    const allQuestionsAnswered = Object.keys(quizAnswers).length === lessonQuiz.length;
    const isNextDisabled = currentPart?.id === 'interactive-quiz' && !allQuestionsAnswered;
    const progress = hasParts ? ((safePartIndex + 1) / partsList.length) * 100 : 100;

    return (
        <div className="w-full max-w-none h-full flex flex-col overflow-hidden pb-0">
            {/* Header - Sticky at top */}
            <div className="flex-shrink-0 bg-background border-b border-border py-2.5 mb-3.5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <Link
                        href={`/dashboard/curriculum?track=${curriculumId}`}
                        className="inline-flex items-center gap-1.5 text-slate-400 hover:text-foreground transition-colors mb-1 text-[10px] font-semibold"
                    >
                        <ArrowLeft className="w-2.5 h-2.5" />
                        Back to Syllabus
                    </Link>
                    <h1 className="text-lg md:text-xl font-bold text-foreground leading-tight">
                        {(() => {
                            const prefix = curriculumId.startsWith('edexcel-as') || curriculumId.startsWith('edexcel-a2')
                                ? (() => {
                                    // Edexcel topics are numbered cumulatively across units:
                                    // AS: Unit 1 = Topics 1-5, Unit 2 = Topics 6-10, Unit 3 = no numbered topics
                                    // A2: Unit 4 = Topics 11-15, Unit 5 = Topics 16-20, Unit 6 = no numbered topics
                                    if (topic.number === 3 || topic.number === 6) {
                                        // Both Unit3 and Unit6 have no numbered topics, just show lesson title
                                        return '';
                                    }
                                    const edexcelTopicOffset: Record<number, number> = { 1: 0, 2: 5, 4: 10, 5: 15 };
                                    const offset = edexcelTopicOffset[topic.number] ?? 0;
                                    return `Unit ${topic.number} - Topic ${offset + currentLessonNum}`;
                                })()
                                : `Topic ${topic.number} - Lesson ${currentLessonNum}`;

                            const title = lessonData?.title || topic.title;
                            return prefix ? `${prefix}: ${title}` : title;
                        })()}
                    </h1>
                    <p className="text-emerald-500 dark:text-emerald-400 font-medium text-[10px] mt-0.5">
                        {curriculum.title}
                    </p>
                </div>
            </div>

            {/* Content Area - Immersive layout with independent column scrolls */}
            <div className="bg-surface/60 backdrop-blur-md border border-border rounded-3xl overflow-hidden flex flex-col flex-1 min-h-0">
                {/* Interactive Lesson Player (Slide-by-slide) */}
                {hasParts ? (
                    <div className="flex flex-1 overflow-hidden min-h-0">
                        {/* Sidebar list of lesson parts - Independently scrollable */}
                        {sidebarOpen && (
                            <aside className="w-64 flex-shrink-0 border-r border-border overflow-y-auto p-5 bg-background/25 hidden md:block">
                                <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Lesson Parts</h3>
                                <div className="flex flex-col gap-2">
                                    {partsList.map((part, idx) => (
                                        <button
                                            key={part.id}
                                            onClick={() => {
                                                setCurrentPartIndex(idx);
                                                setCompleted(false);
                                            }}
                                            className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-2.5 cursor-pointer ${safePartIndex === idx
                                                ? 'bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 dark:text-indigo-400'
                                                : 'border border-transparent text-slate-400 hover:text-foreground hover:bg-white/5'
                                                }`}
                                        >
                                            <div className={`w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-bold border ${safePartIndex === idx ? 'border-indigo-500 dark:border-indigo-400 text-indigo-500 dark:text-indigo-400' : 'border-slate-600 text-slate-500'
                                                }`}>
                                                {idx + 1}
                                            </div>
                                            <span className="truncate flex-1">{part.title}</span>
                                            {idx < safePartIndex && <CheckCircle size={12} className="text-emerald-500 ml-auto flex-shrink-0" />}
                                        </button>
                                    ))}
                                </div>
                            </aside>
                        )}

                        {/* Active Slide Content Area - Independently scrollable */}
                        <div className="flex-1 flex flex-col overflow-hidden min-h-0">
                            {/* Scrollable Container */}
                            <div ref={scrollContainerRef} className="flex-1 overflow-y-auto p-6 md:p-8 flex flex-col gap-6">
                                {/* Progress Bar inside card */}
                                <div className="w-full h-1 bg-border rounded-full overflow-hidden flex-shrink-0">
                                    <div
                                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300"
                                        style={{ width: `${progress}%` }}
                                    />
                                </div>

                                {/* Title Header with TextToSpeech */}
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-surface/30 p-4 rounded-xl border border-border flex-shrink-0">
                                    <div className="flex items-center gap-3">
                                        <button 
                                            onClick={() => setSidebarOpen(!sidebarOpen)}
                                            className="p-2 rounded-xl bg-surface/50 hover:bg-surface/80 text-slate-400 hover:text-foreground transition-all cursor-pointer hidden md:flex items-center justify-center border border-border"
                                            title={sidebarOpen ? "Collapse Lesson Parts" : "Expand Lesson Parts"}
                                        >
                                            {sidebarOpen ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                                        </button>
                                        <div>
                                            <span className="text-[10px] text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-wider">Part {safePartIndex + 1} of {partsList.length}</span>
                                            <h2 className="text-lg font-bold text-foreground mt-0.5">{currentPart.title}</h2>
                                        </div>
                                    </div>
                                    {currentPart.id !== 'interactive-quiz' && (
                                        <TextToSpeech text={currentPart.content} title={currentPart.title} />
                                    )}
                                </div>

                                {/* Completion Card */}
                                {completed && (
                                    <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-6 text-center animate-fade-in-up flex flex-col items-center gap-4">
                                        <div>
                                            <span className="text-3xl">🎉</span>
                                            <h3 className="text-lg font-bold text-emerald-400 mt-2">Lesson Completed!</h3>
                                            <p className="text-slate-400 text-sm mt-1">Excellent work completing this lesson. You have earned +25 XP!</p>
                                        </div>
                                        <div className="flex flex-wrap gap-3 justify-center mt-2">
                                            <Link
                                                href={`/dashboard/curriculum?track=${curriculumId}`}
                                                className="bg-white/5 hover:bg-white/10 text-white px-5 py-2.5 rounded-xl text-xs font-semibold transition-all border border-white/10"
                                            >
                                                Return to Syllabus
                                            </Link>
                                            {nextLink && (
                                                <Link
                                                    href={nextLink}
                                                    className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2.5 rounded-xl text-xs font-semibold transition-all shadow-lg shadow-indigo-500/20 flex items-center gap-1.5"
                                                >
                                                    Next Lesson
                                                    <ChevronRight className="w-4 h-4" />
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {/* Dynamic reaction animator rendered when defined on the active lesson part */}
                                {currentPart.equationVisualizer && (
                                    <EquationAnimator
                                        reactants={currentPart.equationVisualizer.reactants}
                                        products={currentPart.equationVisualizer.products}
                                        description={currentPart.equationVisualizer.description}
                                    />
                                )}

                                {/* Dynamic gas law simulator rendered when defined on the active lesson part */}
                                {currentPart.gasLawSimulator && (
                                    <GasLawSimulator
                                        law={currentPart.gasLawSimulator.law}
                                    />
                                )}

                                {/* Dynamic Avogadro Scale simulator rendered when defined on the active lesson part */}
                                {currentPart.avogadroScale && (
                                    <AvogadroScale />
                                )}

                                {/* Dynamic Mass Spectrometer simulator rendered when defined on the active lesson part */}
                                {currentPart.massSpecSimulator && (
                                    <MassSpecSimulator />
                                )}

                                {/* Dynamic Titration Virtual Lab simulator rendered when defined on the active lesson part */}
                                {currentPart.titrationSimulator && (
                                    <TitrationSimulator />
                                )}

                                {/* Dynamic Molecular Shape (VSEPR) Explorer rendered when defined on the active lesson part */}
                                {currentPart.molecularShapeSimulator && (
                                    <MolecularShapeSimulator />
                                )}

                                {/* Dynamic Kinetics Rate Plotter simulator rendered when defined on the active lesson part */}
                                {currentPart.kineticsRatePlotter && (
                                    <KineticsRatePlotter
                                        initialOrder={currentPart.kineticsRatePlotter.initialOrder}
                                    />
                                )}

                                {/* Dynamic Maxwell-Boltzmann Energy Distribution simulator rendered when defined on the active lesson part */}
                                {currentPart.maxwellBoltzmannSimulator && (
                                    <MaxwellBoltzmannSimulator
                                        initialTemp={currentPart.maxwellBoltzmannSimulator.initialTemp}
                                        initialEa={currentPart.maxwellBoltzmannSimulator.initialEa}
                                    />
                                )}

                                {/* Dynamic Arrhenius Equation simulator rendered when defined on the active lesson part */}
                                {currentPart.arrheniusSimulator && (
                                    <ArrheniusSimulator
                                        initialEa={currentPart.arrheniusSimulator.initialEa}
                                        initialA={currentPart.arrheniusSimulator.initialA}
                                    />
                                )}

                                {/* Dynamic Rate Mechanism Builder rendered when defined on the active lesson part */}
                                {currentPart.rateMechanismBuilder && (
                                    <RateMechanismBuilder />
                                )}

                                {/* Dynamic Disappearing Cross Simulator rendered when defined on the active lesson part */}
                                {currentPart.disappearingCrossSimulator && (
                                    <DisappearingCrossSimulator />
                                )}

                                {/* Dynamic Electrolysis Simulator rendered when defined on the active lesson part */}
                                {currentPart.electrolysisSimulator && (
                                    <ElectrolysisSimulator />
                                )}

                                {/* Dynamic Bonding Simulator rendered when defined on the active lesson part */}
                                {currentPart.bondingSimulator && (
                                    <BondingSimulator />
                                )}

                                {/* Slide Main Content */}
                                <div className="bg-surface/30 border border-border rounded-2xl p-6 md:p-8">
                                    {currentPart.id === 'interactive-quiz' ? (
                                        (() => {
                                            const activeQuestion = lessonQuiz[quizActiveIndex];
                                            if (!activeQuestion) return null;
                                            const selectedIdx = quizAnswers[quizActiveIndex];
                                            const isAnswered = selectedIdx !== undefined;

                                            return (
                                                <div className="flex flex-col gap-6">
                                                    {/* Warm-Up Flashcards Deck at beginning of Quiz */}
                                                    {(() => {
                                                        const activeDataset = curriculumId.includes('edexcel') ? edexcelAlevelFlashcards : cieIgcseFlashcards;
                                                        // Filter by current unit and exact lesson number
                                                        const unitMatch = topicId.match(/unit-(\d+)/);
                                                        const currentUnitNum = unitMatch ? parseInt(unitMatch[1], 10) : 1;
                                                        
                                                        const filteredCards = activeDataset.filter(c => 
                                                            c.unitNum === currentUnitNum && (c.lessonNum === currentLessonNum || !c.lessonNum)
                                                        );
                                                        const finalCards = filteredCards.length > 0 ? filteredCards : activeDataset.filter(c => c.unitNum === currentUnitNum);

                                                        return (
                                                            <FlashcardsDeck 
                                                                title={`Topic ${currentLessonNum} Active Recall Warm-Up 🃏`}
                                                                cards={finalCards}
                                                            />
                                                        );
                                                    })()}
                                                    {allQuestionsAnswered && (
                                                        <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 text-center animate-fade-in-up">
                                                            <div className="text-emerald-500 dark:text-emerald-400 font-bold text-sm">🏆 Quiz Completed!</div>
                                                            <div className="text-foreground/80 text-xs mt-1">
                                                                You answered {Object.values(quizFirstAttempts).filter(Boolean).length} of {lessonQuiz.length} questions correctly on the first attempt.
                                                                <span className="block mt-1 font-semibold text-emerald-500 dark:text-emerald-400">Click 'Finish Lesson' below to collect your +25 XP!</span>
                                                            </div>
                                                        </div>
                                                    )}
                                                    <div className="flex flex-col gap-2 bg-surface px-4 py-3 rounded-xl border border-border text-xs font-semibold text-foreground/80">
                                                        <div className="flex justify-between items-center">
                                                            <span className="text-muted">Question {quizActiveIndex + 1} of {lessonQuiz.length}</span>
                                                            <span className="text-emerald-500 dark:text-emerald-400 font-bold">First Attempt Correct: {Object.values(quizFirstAttempts).filter(Boolean).length} / {lessonQuiz.length}</span>
                                                        </div>
                                                        {activeQuestion.id && (
                                                            <div className="text-[10px] text-indigo-500 dark:text-indigo-400/80 font-mono border-t border-border pt-1.5 mt-0.5">
                                                                ID: {activeQuestion.id}
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="text-foreground text-lg font-semibold leading-relaxed my-2">
                                                        {renderQuestionContent(activeQuestion.question)}
                                                    </div>

                                                    {activeQuestion.imageHtml && (
                                                        <div className="my-4 max-w-full overflow-x-auto flex justify-center" dangerouslySetInnerHTML={{ __html: activeQuestion.imageHtml }} />
                                                    )}

                                                    <div className="grid grid-cols-1 gap-3.5">
                                                        {activeQuestion.options.map((opt: { text: string; isCorrect: boolean }, oIdx: number) => {
                                                            const isSelected = selectedIdx === oIdx;
                                                            const isCorrect = opt.isCorrect;

                                                            let optionStyle = "bg-surface border-border text-foreground hover:bg-surface-hover hover:border-border-bright";

                                                            if (isAnswered) {
                                                                if (isCorrect) {
                                                                    optionStyle = "bg-emerald-500/10 border-emerald-500/50 text-emerald-600 dark:text-emerald-400 font-medium";
                                                                } else if (isSelected) {
                                                                    optionStyle = "bg-rose-500/10 border-rose-500/50 text-rose-600 dark:text-rose-400 font-medium";
                                                                } else {
                                                                    optionStyle = "bg-background border-border text-slate-400 opacity-60";
                                                                }
                                                            }

                                                            return (
                                                                <button
                                                                    key={oIdx}
                                                                    disabled={isAnswered}
                                                                    onClick={() => handleSelectOption(quizActiveIndex, oIdx)}
                                                                    className={`w-full text-left p-4 rounded-xl border transition-all text-sm flex items-center justify-between ${optionStyle} ${!isAnswered ? 'cursor-pointer' : ''}`}
                                                                >
                                                                    <span dir="ltr" className="text-left flex-1">{String.fromCharCode(65 + oIdx)}. {renderTextWithMath(opt.text)}</span>
                                                                    {isAnswered && isCorrect && <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold bg-emerald-500/10 px-2 py-0.5 rounded-md">Correct</span>}
                                                                    {isAnswered && isSelected && !isCorrect && <span className="text-rose-600 dark:text-rose-400 text-xs font-bold bg-rose-500/10 px-2 py-0.5 rounded-md">Incorrect</span>}
                                                                </button>
                                                            );
                                                        })}
                                                    </div>

                                                    <div className="flex justify-between items-center gap-4 mt-6 border-t border-border pt-4">
                                                        <button
                                                            disabled={quizActiveIndex === 0}
                                                            onClick={() => setQuizActiveIndex(prev => prev - 1)}
                                                            className="bg-surface hover:bg-surface-hover text-foreground font-semibold py-2.5 px-4 rounded-xl border border-border transition-all text-xs flex items-center gap-1.5 cursor-pointer disabled:opacity-20 disabled:cursor-not-allowed"
                                                        >
                                                            <ChevronLeft className="w-3.5 h-3.5" />
                                                            Previous Question
                                                        </button>

                                                        <button
                                                            disabled={quizActiveIndex === lessonQuiz.length - 1}
                                                            onClick={handleNextQuizQuestion}
                                                            className="bg-surface hover:bg-surface-hover text-foreground font-semibold py-2.5 px-4 rounded-xl border border-border transition-all text-xs flex items-center gap-1.5 cursor-pointer disabled:opacity-20 disabled:cursor-not-allowed"
                                                        >
                                                            Next Question
                                                            <ChevronRight className="w-3.5 h-3.5" />
                                                        </button>
                                                    </div>

                                                    {isAnswered && activeQuestion.explanation && (
                                                        <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-5 mt-4 animate-fade-in-up">
                                                            <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-1.5 block">Explanation</span>
                                                            <div className="text-indigo-900 dark:text-indigo-300 text-sm leading-relaxed flex flex-col gap-1">
                                                                {(() => {
                                                                    const clean = activeQuestion.explanation
                                                                        .replace(/\\n/g, '\n')
                                                                        .replace(/([^\n])\s+(?=\d+\.\s+)/g, '$1\n')
                                                                        .replace(/([^\n])\s+(?=[•\*]\s+)/g, '$1\n');
                                                                    const lines = clean
                                                                        .split('\n')
                                                                        .map((line: string) => line.trim())
                                                                        .filter((line: string) => line !== '' && line !== '*' && line !== '•')
                                                                        .map((line: string) => line.replace(/^[\*\•]\s+(?=\d+\.)/, ''));
                                                                    return lines.map((line: string, lineIdx: number) => (
                                                                        <div key={lineIdx}>{renderTextWithMath(line)}</div>
                                                                    ));
                                                                })()}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })()
                                    ) : (
                                        // Standard Lesson Player Slide Content
                                        <>
                                            {renderContentWithTables(currentPart.content)}

                                            {/* Key Points */}
                                            {currentPart.keyPoints && currentPart.keyPoints.length > 0 && (
                                                <div className="bg-indigo-500/5 border border-indigo-500/10 rounded-2xl p-5 mt-6">
                                                    <h4 className="text-xs font-bold text-indigo-500 dark:text-indigo-400 uppercase tracking-widest mb-3">Key Study Points</h4>
                                                    <ul className="space-y-2.5">
                                                        {currentPart.keyPoints.map((point: string, i: number) => (
                                                            <li key={i} className="flex gap-2.5 items-start text-sm text-foreground/80">
                                                                <span className="text-indigo-500 dark:text-indigo-400 mt-0.5">•</span>
                                                                <span>{renderTextWithMath(formatTrailingSymbolsAndUnits(point))}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </>
                                    )}
                                </div>



                                {/* Lesson Notes Section */}
                                {currentPart.id !== 'interactive-quiz' && (
                                    <div className="border-t border-white/5 pt-6 mt-2 flex-shrink-0">
                                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">📝 Study Notes</h4>
                                        <LessonNotes lessonId={`${curriculumId}-${topicId}-lesson-${currentLessonNum}`} />
                                    </div>
                                )}

                            </div>

                            {/* Sticky Navigation Footer */}
                            <div className="flex justify-between items-center gap-4 py-2.5 px-5 border-t border-white/10 bg-white/[0.02] flex-shrink-0">
                                <button
                                    onClick={handlePrev}
                                    disabled={safePartIndex === 0}
                                    className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-5 py-2.5 rounded-xl text-xs font-semibold transition-all border border-white/10 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                                >
                                    <ChevronLeft className="w-4 h-4" />
                                    Previous
                                </button>
                                {completed && nextLink ? (
                                    <Link
                                        href={nextLink}
                                        className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer shadow-lg shadow-indigo-500/20"
                                    >
                                        Next Lesson
                                        <ChevronRight className="w-4 h-4" />
                                    </Link>
                                ) : (
                                    <button
                                        onClick={handleNext}
                                        disabled={isNextDisabled}
                                        className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer shadow-lg shadow-indigo-500/20 disabled:opacity-30 disabled:cursor-not-allowed"
                                    >
                                        {safePartIndex === partsList.length - 1 ? 'Finish Lesson' : 'Next Part'}
                                        <ChevronRight className="w-4 h-4" />
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                ) : (
                    /* Classic Single Page Scroll (Fallback for simple markdown lessons) - scrollable layout */
                    <div className="flex-1 overflow-y-auto p-6 md:p-10">
                        {theoryContent ? (
                            <>
                                <ReactMarkdown
                                    components={mdComponents}
                                >
                                    {formatTrailingSymbolsAndUnits(theoryContent)}
                                </ReactMarkdown>

                                {/* Lesson Notes Section */}
                                <div className="border-t border-white/10 pt-8 mt-10">
                                    <h3 className="text-lg font-bold text-white mb-4">📝 Study Notes</h3>
                                    <LessonNotes lessonId={`${curriculumId}-${topicId}-lesson-${currentLessonNum}`} />
                                </div>
                            </>
                        ) : (
                            <div className="text-center py-12">
                                <BookOpen className="w-12 h-12 text-slate-500 mx-auto mb-4 opacity-50" />
                                <p className="text-slate-400">Theory content is currently being written for this topic.</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
// Force compile update 20260627
