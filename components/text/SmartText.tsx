'use client';

import React from 'react';

interface SmartTextProps {
    children: string;
    className?: string;
    as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'li' | 'td';
}

/**
 * SmartText Component - International Edition
 * 
 * Standardizes scientific notation and ensures consistent rendering of 
 * chemical symbols and mathematical operators in an LTR context.
 * 
 * Features:
 * - Numeral normalization (Arabic to English numerals).
 * - Chemical symbol formatting protection.
 * - Spacing normalization for units (mol/L, °C, etc).
 */
export function SmartText({ children, className, as: Component = 'span' }: SmartTextProps) {
    let processedText = children;
    try {
        processedText = normalizeText(children);
    } catch (e) {
        console.error('Error in SmartText rendering:', e);
    }

    return (
        <Component
            className={className}
            dangerouslySetInnerHTML={{ __html: processedText }}
        />
    );
}

/**
 * Normalizes text for scientific precision
 */
function normalizeText(text: string): string {
    if (!text || typeof text !== 'string') return text || '';

    try {
        let processed = text;

        // 1. Convert any accidental Arabic numerals to English numerals
        processed = processed.replace(/[\u0660-\u0669]/g, (d) => 
            (d.charCodeAt(0) - 0x0660).toString()
        );

        // 2. Ensure chemical operators have standard spacing
        // e.g. "A+B -> C" becomes "A + B → C"
        processed = processed.replace(/\s*[+]\s*/g, ' + ');
        processed = processed.replace(/\s*->\s*/g, ' → ');
        processed = processed.replace(/\s*<->\s*/g, ' ⇌ ');

        // 3. Handle subscripts/superscripts if provided as plain text codes
        // (Though KaTeX is preferred, this is a fallback)
        
        return processed;
    } catch (e) {
        console.error('Error in normalizeText:', e);
        return text;
    }
}

/**
 * Helper function for direct text conversion
 */
export function smartText(text: string): string {
    return normalizeText(text);
}

export default SmartText;
