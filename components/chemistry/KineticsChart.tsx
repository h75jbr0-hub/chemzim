'use client';

import React, { useState } from 'react';
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from 'recharts';

interface KineticsChartProps {
    order?: 'zero' | 'first' | 'second';
    title?: string;
}

export default function KineticsChart({
    order = 'first',
    title = 'Reaction Kinetics - Concentration vs Time'
}: KineticsChartProps) {
    const [selectedOrder, setSelectedOrder] = useState<'zero' | 'first' | 'second'>(order);

    const generateData = () => {
        const points = [];
        const k = 0.05;
        const initialConcentration = 1.0;

        for (let t = 0; t <= 60; t += 5) {
            let conc = initialConcentration;
            if (selectedOrder === 'zero') {
                conc = Math.max(0, initialConcentration - k * t);
            } else if (selectedOrder === 'first') {
                conc = initialConcentration * Math.exp(-k * t);
            } else if (selectedOrder === 'second') {
                conc = initialConcentration / (1 + k * t * initialConcentration);
            }
            points.push({
                time: t,
                concentration: parseFloat(conc.toFixed(3))
            });
        }
        return points;
    };

    const data = generateData();

    return (
        <div className="w-full p-5 bg-slate-900/90 border border-slate-800 rounded-xl text-white shadow-xl">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-3">
                <h3 className="text-lg font-bold text-emerald-400">{title}</h3>
                <div className="flex gap-2 bg-slate-800 p-1 rounded-lg">
                    <button
                        onClick={() => setSelectedOrder('zero')}
                        className={`px-3 py-1 text-xs rounded-md font-semibold transition ${
                            selectedOrder === 'zero' ? 'bg-emerald-500 text-slate-950' : 'text-slate-300 hover:text-white'
                        }`}
                    >
                        Zero Order
                    </button>
                    <button
                        onClick={() => setSelectedOrder('first')}
                        className={`px-3 py-1 text-xs rounded-md font-semibold transition ${
                            selectedOrder === 'first' ? 'bg-emerald-500 text-slate-950' : 'text-slate-300 hover:text-white'
                        }`}
                    >
                        First Order
                    </button>
                    <button
                        onClick={() => setSelectedOrder('second')}
                        className={`px-3 py-1 text-xs rounded-md font-semibold transition ${
                            selectedOrder === 'second' ? 'bg-emerald-500 text-slate-950' : 'text-slate-300 hover:text-white'
                        }`}
                    >
                        Second Order
                    </button>
                </div>
            </div>

            <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                        <XAxis dataKey="time" label={{ value: 'Time (s)', position: 'insideBottomRight', offset: -5, fill: '#94a3b8' }} stroke="#94a3b8" />
                        <YAxis label={{ value: '[A] (mol/dm³)', angle: -90, position: 'insideLeft', fill: '#94a3b8' }} stroke="#94a3b8" />
                        <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', color: '#10b981' }} />
                        <Legend />
                        <Line type="monotone" dataKey="concentration" name="Reactant [A]" stroke="#10b981" strokeWidth={3} dot={{ r: 4 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
