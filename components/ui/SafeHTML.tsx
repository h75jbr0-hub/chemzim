'use client';

import React from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';
import { smartText } from '@/components/text/SmartText';

interface SafeHTMLProps {
    /** The HTML content to render */
    content: string;
    /** Optional CSS class name */
    className?: string;
    /** Optional inline styles */
    style?: React.CSSProperties;
    /** The HTML element to render as (default: 'div') */
    as?: 'div' | 'span' | 'p' | 'li' | 'td' | 'th';
    /** Whether to apply SmartText processing (default: true) */
    processText?: boolean;
}

/**
 * Process LaTeX delimiters and convert to KaTeX HTML
 */
function processLatex(html: string): string {
    // Block math: $$...$$
    html = html.replace(/\$\$([^$]+)\$\$/g, (_, tex) => {
        try {
            return `<div class="katex-block" dir="ltr" style="text-align: center; margin: 16px 0;">${katex.renderToString(tex.trim(), { displayMode: true, throwOnError: false })}</div>`;
        } catch {
            return `<span dir="ltr" style="color: #ef4444;">$${tex}$</span>`;
        }
    });

    // Inline math: $...$
    html = html.replace(/\$([^$]+)\$/g, (_, tex) => {
        try {
            return `<span dir="ltr" style="display: inline-block;">${katex.renderToString(tex.trim(), { displayMode: false, throwOnError: false })}</span>`;
        } catch {
            return `<span dir="ltr" style="color: #ef4444;">$${tex}$</span>`;
        }
    });

    return html;
}

/**
 * SafeHTML Component - International Edition
 * 
 * Renders HTML content safely with full KaTeX support for scientific formulas.
 * Optimized for LTR (English) layout.
 */
export function SafeHTML({
    content,
    className,
    style,
    as: Component = 'div',
    processText = true
}: SafeHTMLProps) {
    if (!content) return null;

    // (1) Process LaTeX first
    const latexProcessed = processLatex(content);

    // (2) Process scientific text normalization
    const processedContent = processText ? smartText(latexProcessed) : latexProcessed;

    return (
        <Component
            className={className}
            style={style}
            dir="ltr"
            dangerouslySetInnerHTML={{ __html: processedContent }}
        />
    );
}

export default SafeHTML;
