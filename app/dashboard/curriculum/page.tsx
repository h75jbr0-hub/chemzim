import React from 'react';
import { CurriculumView } from '@/components/ui/CurriculumView';
import { allCurricula } from '@/data/curriculum';
import { Metadata } from 'next';
import { getSessionFromCookies } from '@/lib/session';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
    title: 'Curriculum | ChemZim',
    description: 'Explore the Cambridge IGCSE and AS/A Level Chemistry curriculum.',
};

export default async function CurriculumPage() {
    const session = await getSessionFromCookies();
    if (!session) {
        redirect('/login');
    }

    const { track, isAdmin, role } = session;
    const isSystemAdmin = isAdmin === true || role === 'admin' || role === 'moderator';

    const resolvedTrack = track || (session.grade?.toLowerCase().includes('edexcel') ? 'edexcel-as' : (session.grade === 'AS Level' ? 'cie-as' : (session.grade === 'A2 Level' || session.grade === 'IB' || session.grade === 'A Level' ? 'cie-alevel' : 'cie-igcse')));

    const studentTracks = (session.enrolledTracks && session.enrolledTracks.length > 0)
        ? session.enrolledTracks
        : [resolvedTrack];

    const filteredCurricula = allCurricula.filter(c => {
        if (isSystemAdmin) return true; // Admin can see all
        return studentTracks.some(t => c.id === t || c.id === `${t}-20260106` || c.id.startsWith(t + '-'));
    });

    return (
        <div className="w-full h-full min-h-[calc(100vh-120px)] relative">
            {/* Header Area */}
            <div className="mb-10 text-center md:text-left relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 mb-6 shadow-inner shadow-indigo-500/20">
                    <span className="text-3xl">📚</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
                    Syllabus
                </h1>
                <p className="text-lg text-muted max-w-2xl">
                    Master your syllabus from the core principles to advanced concepts. Select your level to explore the curriculum.
                </p>
            </div>

            {/* Curriculum Viewer with Locked & Enrolled Tracks */}
            <CurriculumView 
                curricula={allCurricula} 
                enrolledTracks={studentTracks}
                isSystemAdmin={isSystemAdmin}
            />
        </div>
    );
}
