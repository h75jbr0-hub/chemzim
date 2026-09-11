'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Hash } from 'lucide-react';
import { Topic } from '@/data/curriculum';
import Link from 'next/link';

interface TopicCardProps {
    topic: Topic;
    index: number;
    curriculumId: string;
}

export const TopicCard: React.FC<TopicCardProps> = ({ topic, index, curriculumId }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group relative bg-surface backdrop-blur-md border border-border rounded-2xl p-6 overflow-hidden hover:border-indigo-500/50 hover:bg-surface/80 transition-all duration-300 flex flex-col justify-between"
        >
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-bl-[100px] -z-10 group-hover:bg-indigo-500/10 transition-colors" />

            <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-emerald-500/20 border border-border flex items-center justify-center">
                    <span className="text-xl font-bold bg-gradient-to-br from-indigo-400 to-emerald-400 text-transparent bg-clip-text">
                        {topic.number}
                    </span>
                </div>

                <div className="flex-1">
                    <Link href={`/dashboard/curriculum/${curriculumId}/${topic.id}?lesson=1`}>
                        <h3 className="text-lg font-semibold text-foreground mb-2 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors cursor-pointer">
                            {topic.title}
                        </h3>
                    </Link>

                    {topic.subtopics && topic.subtopics.length > 0 && (
                        <div className="space-y-2 mt-4">
                            {topic.subtopics.map((sub, i) => (
                                <Link 
                                    key={i} 
                                    href={`/dashboard/curriculum/${curriculumId}/${topic.id}?lesson=${i + 1}`}
                                    className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer"
                                >
                                    <Hash className="w-3 h-3 text-emerald-500/70 mt-1 flex-shrink-0" />
                                    <span>{sub}</span>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <Link href={`/dashboard/curriculum/${curriculumId}/${topic.id}?lesson=1`} className="mt-6 pt-4 border-t border-border flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm font-medium text-indigo-500 dark:text-indigo-400">Study Topic</span>
                <ChevronRight className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
            </Link>
        </motion.div>
    );
};
