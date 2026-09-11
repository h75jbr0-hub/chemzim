'use client';

import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ChevronRight, Sparkles, BookOpen, Lock } from 'lucide-react';
import { Topic } from '@/data/curriculum';
import Link from 'next/link';

interface CurriculumJourney3DProps {
    topics: Topic[];
    curriculumId: string;
    isLocked?: boolean;
    onLockedClick?: () => void;
}

export const CurriculumJourney3D: React.FC<CurriculumJourney3DProps> = ({ 
    topics, 
    curriculumId,
    isLocked = false,
    onLockedClick
}) => {
    return (
        <div className="w-full relative py-6">
            {/* Connecting Neon Path Background Line */}
            <div className="hidden lg:block absolute left-1/2 top-12 bottom-12 w-1 bg-gradient-to-b from-indigo-500/0 via-indigo-500/40 to-emerald-500/0 -translate-x-1/2 blur-[1px] pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {topics.map((topic, index) => (
                    <TiltCard 
                        key={topic.id} 
                        topic={topic} 
                        index={index} 
                        curriculumId={curriculumId} 
                        isLocked={isLocked}
                        onLockedClick={onLockedClick}
                    />
                ))}
            </div>
        </div>
    );
};

interface TiltCardProps {
    topic: Topic;
    index: number;
    curriculumId: string;
    isLocked?: boolean;
    onLockedClick?: () => void;
}

const TiltCard: React.FC<TiltCardProps> = ({ 
    topic, 
    index, 
    curriculumId,
    isLocked = false,
    onLockedClick
}) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Mouse positions for 3D Tilt Effect
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
    };

    const subtopicsCount = topic.subtopics?.length || 0;
    const completionPercent = Math.min(100, Math.round(((index + 1) * 25) % 100)); // Dynamic presentation percent

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            style={{ perspective: 1000 }}
            className="w-full"
        >
            <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX: isHovered ? rotateX : 0,
                    rotateY: isHovered ? rotateY : 0,
                    transformStyle: "preserve-3d",
                }}
                className="group relative w-full rounded-3xl p-6 transition-shadow duration-300 bg-gradient-to-br from-[#0c162c] via-[#091124] to-[#060c1a] border border-indigo-500/20 hover:border-indigo-500/60 shadow-xl hover:shadow-[0_0_30px_rgba(99,102,241,0.25)] flex flex-col justify-between overflow-hidden"
            >
                {/* 3D Floating Background Neon Glow */}
                <div 
                    style={{ transform: "translateZ(-20px)" }}
                    className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/25 transition-all pointer-events-none" 
                />
                <div 
                    style={{ transform: "translateZ(-20px)" }}
                    className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all pointer-events-none" 
                />

                {/* Card Top: Unit Badge & Number */}
                <div style={{ transform: "translateZ(30px)" }} className="relative z-10 flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center font-black text-xl text-white shadow-inner group-hover:scale-110 transition-transform ${
                            isLocked 
                                ? 'bg-amber-500/20 border-amber-500/40 text-amber-300 shadow-amber-500/20' 
                                : 'bg-gradient-to-tr from-indigo-500/20 to-emerald-500/20 border-indigo-500/30 shadow-indigo-500/30'
                        }`}>
                            {isLocked ? <Lock className="w-5 h-5 text-amber-400" /> : topic.number}
                        </div>
                        <div>
                            <span className={`text-[10px] font-extrabold uppercase tracking-widest border px-2.5 py-0.5 rounded-full ${
                                isLocked
                                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                                    : 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30'
                            }`}>
                                Unit {topic.number}
                            </span>
                            <div className="text-xs text-slate-400 mt-0.5">{subtopicsCount} Interactive Lessons</div>
                        </div>
                    </div>

                    {isLocked ? (
                        <div className="flex items-center gap-1.5 text-xs font-bold text-amber-300 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full shadow-sm">
                            <Lock className="w-3.5 h-3.5" />
                            <span>Locked</span>
                        </div>
                    ) : (
                        <div className="flex items-center gap-1 text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>{completionPercent}%</span>
                        </div>
                    )}
                </div>

                {/* Card Title & Description */}
                <div style={{ transform: "translateZ(25px)" }} className="relative z-10 my-2">
                    {isLocked ? (
                        <div onClick={onLockedClick} className="cursor-pointer">
                            <h3 className="text-xl font-extrabold text-white group-hover:text-amber-300 transition-colors line-clamp-2">
                                {topic.title}
                            </h3>
                        </div>
                    ) : (
                        <Link href={`/dashboard/curriculum/${curriculumId}/${topic.id}?lesson=1`}>
                            <h3 className="text-xl font-extrabold text-white group-hover:text-indigo-300 transition-colors cursor-pointer line-clamp-2">
                                {topic.title}
                            </h3>
                        </Link>
                    )}
                </div>

                {/* Subtopics List */}
                <div style={{ transform: "translateZ(20px)" }} className="relative z-10 space-y-2 mt-3 mb-6 max-h-[220px] overflow-y-auto pr-1 custom-scrollbar">
                    {topic.subtopics?.map((sub, i) => (
                        isLocked ? (
                            <div 
                                key={i}
                                onClick={onLockedClick}
                                className="flex items-center justify-between text-xs text-slate-400 hover:text-amber-300 p-2 rounded-xl bg-slate-950/40 border border-slate-800/80 hover:border-amber-500/30 transition-all cursor-pointer"
                            >
                                <span className="truncate pr-2">• {sub}</span>
                                <Lock className="w-3.5 h-3.5 text-amber-400/70 flex-shrink-0" />
                            </div>
                        ) : (
                            <Link 
                                key={i} 
                                href={`/dashboard/curriculum/${curriculumId}/${topic.id}?lesson=${i + 1}`}
                                className="flex items-center justify-between text-xs text-slate-300 hover:text-emerald-400 p-2 rounded-xl bg-slate-950/40 border border-slate-800/80 hover:border-emerald-500/30 transition-all"
                            >
                                <span className="truncate pr-2">• {sub}</span>
                                <ChevronRight className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />
                            </Link>
                        )
                    ))}
                </div>

                {/* Card Footer: Action Button */}
                <div style={{ transform: "translateZ(35px)" }} className="relative z-10 pt-4 border-t border-indigo-500/15 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold">
                        <BookOpen className="w-4 h-4 text-indigo-400" />
                        <span>Full Syllabus</span>
                    </div>

                    {isLocked ? (
                        <button
                            type="button"
                            onClick={onLockedClick}
                            className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white font-bold text-xs px-4 py-2 rounded-xl transition-all shadow-md shadow-amber-500/20 group-hover:shadow-amber-500/40"
                        >
                            <Lock className="w-3.5 h-3.5" />
                            <span>Unlock Unit</span>
                        </button>
                    ) : (
                        <Link 
                            href={`/dashboard/curriculum/${curriculumId}/${topic.id}`}
                            className="inline-flex items-center gap-1.5 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-bold text-xs px-4 py-2 rounded-xl transition-all shadow-md shadow-indigo-500/20 group-hover:shadow-indigo-500/40"
                        >
                            <span>Explore 3D Unit</span>
                            <ChevronRight className="w-4 h-4" />
                        </Link>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
};
