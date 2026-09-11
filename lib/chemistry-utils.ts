// Chemistry utility functions for pH calculations and simulations

export function calculatePH(hConcentration: number): number {
    if (hConcentration <= 0) return 14;
    const ph = -Math.log10(hConcentration);
    return Math.max(0, Math.min(14, ph));
}

export function calculatePOH(ohConcentration: number): number {
    if (ohConcentration <= 0) return 14;
    const poh = -Math.log10(ohConcentration);
    return Math.max(0, Math.min(14, poh));
}

export function pHtoPOH(ph: number): number {
    return 14 - ph;
}

export function pOHtoPH(poh: number): number {
    return 14 - poh;
}

export function hConcentrationFromPH(ph: number): number {
    return Math.pow(10, -ph);
}

export function ohConcentrationFromPOH(poh: number): number {
    return Math.pow(10, -poh);
}

export function getPHColor(ph: number): string {
    const colors = [
        '#ff0000', '#ff3300', '#ff6600', '#ff9900', '#ffcc00',
        '#ffff00', '#ccff00', '#00ff00', '#00ffcc', '#00ccff',
        '#0099ff', '#0066ff', '#0033ff', '#0000ff', '#3300cc'
    ];
    const index = Math.max(0, Math.min(14, Math.round(ph)));
    return colors[index];
}

export function getPHDescription(ph: number): string {
    if (ph < 3) return 'Very Strong Acid';
    if (ph < 5) return 'Moderate Acid';
    if (ph < 7) return 'Weak Acid';
    if (ph === 7) return 'Neutral';
    if (ph < 9) return 'Weak Base';
    if (ph < 12) return 'Moderate Base';
    return 'Very Strong Base';
}

export interface Solution {
    name: string;
    ph: number;
    formula: string;
    type: 'acid' | 'base' | 'neutral';
}

export const commonSolutions: Solution[] = [
    { name: 'Battery Acid', ph: 0.5, formula: 'H₂SO₄', type: 'acid' },
    { name: 'Stomach Acid', ph: 1.5, formula: 'HCl', type: 'acid' },
    { name: 'Lemon Juice', ph: 2.5, formula: 'C₆H₈O₇', type: 'acid' },
    { name: 'Vinegar', ph: 2.9, formula: 'CH₃COOH', type: 'acid' },
    { name: 'Cola', ph: 3.5, formula: 'H₃PO₄', type: 'acid' },
    { name: 'Coffee', ph: 5.0, formula: '-', type: 'acid' },
    { name: 'Rain Water', ph: 5.6, formula: 'H₂O', type: 'acid' },
    { name: 'Pure Water', ph: 7.0, formula: 'H₂O', type: 'neutral' },
    { name: 'Blood', ph: 7.4, formula: '-', type: 'base' },
    { name: 'Sea Water', ph: 8.0, formula: '-', type: 'base' },
    { name: 'Baking Soda', ph: 9.0, formula: 'NaHCO₃', type: 'base' },
    { name: 'Ammonia', ph: 11.0, formula: 'NH₃', type: 'base' },
    { name: 'Bleach', ph: 12.5, formula: 'NaClO', type: 'base' },
    { name: 'Drain Cleaner', ph: 14.0, formula: 'NaOH', type: 'base' },
];

export interface Indicator {
    name: string;
    acidColor: string;
    baseColor: string;
    transitionPH: [number, number];
}

export const indicators: Indicator[] = [
    { name: 'Methyl Violet', acidColor: '#f1c40f', baseColor: '#3498db', transitionPH: [0, 2] },
    { name: 'Methyl Orange', acidColor: '#e74c3c', baseColor: '#f1c40f', transitionPH: [2.9, 4.0] },
    { name: 'Methyl Red', acidColor: '#e74c3c', baseColor: '#f1c40f', transitionPH: [4.2, 6.3] },
    { name: 'Bromothymol Blue', acidColor: '#f1c40f', baseColor: '#3498db', transitionPH: [6.0, 7.6] },
    { name: 'Phenol Red', acidColor: '#f1c40f', baseColor: '#e74c3c', transitionPH: [6.6, 8.0] },
    { name: 'Phenolphthalein', acidColor: 'transparent', baseColor: '#ec4899', transitionPH: [8.2, 10.0] },
    { name: 'Indigo Carmine', acidColor: '#3498db', baseColor: '#f1c40f', transitionPH: [11.5, 14] },
];

export function getIndicatorColor(indicator: Indicator, ph: number): string {
    if (ph < indicator.transitionPH[0]) return indicator.acidColor;
    if (ph > indicator.transitionPH[1]) return indicator.baseColor;

    // Interpolate
    const ratio = (ph - indicator.transitionPH[0]) / (indicator.transitionPH[1] - indicator.transitionPH[0]);

    // Simple hex interpolation
    const hex = (color: string) => {
        if (color === 'transparent') return [255, 255, 255, 0]; // Treat transparent as white/clear
        if (color.startsWith('#')) return [
            parseInt(color.slice(1, 3), 16),
            parseInt(color.slice(3, 5), 16),
            parseInt(color.slice(5, 7), 16),
            1
        ];
        return [0, 0, 0, 1];
    };

    const c1 = hex(indicator.acidColor);
    const c2 = hex(indicator.baseColor);

    const r = Math.round(c1[0] + (c2[0] - c1[0]) * ratio);
    const g = Math.round(c1[1] + (c2[1] - c1[1]) * ratio);
    const b = Math.round(c1[2] + (c2[2] - c1[2]) * ratio);

    return `rgb(${r}, ${g}, ${b})`;
}


