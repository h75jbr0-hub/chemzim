'use client';

import { motion } from 'framer-motion';

interface LeaderboardSkeletonProps {
    count?: number;
}

export default function LeaderboardSkeleton({ count = 6 }: LeaderboardSkeletonProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {Array.from({ length: count }).map((_, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="skeleton-card"
                >
                    <div className="skeleton-left">
                        <div className="skeleton-rank" />
                        <div className="skeleton-avatar" />
                    </div>
                    <div className="skeleton-right">
                        <div className="skeleton-name" />
                        <div className="skeleton-badge" />
                        <div className="skeleton-stats">
                            <div className="skeleton-stat" />
                            <div className="skeleton-stat" />
                        </div>
                    </div>
                    <div className="skeleton-xp" />

                    <style jsx>{`
                        .skeleton-card {
                            display: flex;
                            align-items: flex-start;
                            gap: 1rem;
                            padding: 1rem;
                            border-radius: 1rem;
                            background: linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
                            border: 1px solid rgba(255, 255, 255, 0.05);
                            position: relative;
                            overflow: hidden;
                        }

                        .skeleton-card::after {
                            content: '';
                            position: absolute;
                            top: 0;
                            left: -100%;
                            width: 100%;
                            height: 100%;
                            background: linear-gradient(
                                90deg,
                                transparent,
                                rgba(255, 255, 255, 0.05),
                                transparent
                             );
                            animation: shimmer 1.5s infinite;
                        }

                        @keyframes shimmer {
                            100% { left: 100%; }
                        }

                        .skeleton-left {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            gap: 0.5rem;
                        }

                        .skeleton-rank {
                            width: 2rem;
                            height: 2rem;
                            border-radius: 0.5rem;
                            background: rgba(255, 255, 255, 0.1);
                        }

                        .skeleton-avatar {
                            width: 3.5rem;
                            height: 3.5rem;
                            border-radius: 0.75rem;
                            background: rgba(255, 255, 255, 0.1);
                        }

                        .skeleton-right {
                            flex: 1;
                            display: flex;
                            flex-direction: column;
                            gap: 0.5rem;
                        }

                        .skeleton-name {
                            width: 60%;
                            height: 1.25rem;
                            border-radius: 0.25rem;
                            background: rgba(255, 255, 255, 0.1);
                        }

                        .skeleton-badge {
                            width: 40%;
                            height: 1rem;
                            border-radius: 9999px;
                            background: rgba(255, 255, 255, 0.08);
                        }

                        .skeleton-stats {
                            display: grid;
                            grid-template-columns: 1fr 1fr;
                            gap: 0.5rem;
                            margin-top: 0.5rem;
                        }

                        .skeleton-stat {
                            height: 2.5rem;
                            border-radius: 0.5rem;
                            background: rgba(255, 255, 255, 0.06);
                        }

                        .skeleton-xp {
                            position: absolute;
                            top: 1rem;
                            right: 1rem;
                            width: 4rem;
                            height: 1.5rem;
                            border-radius: 0.25rem;
                            background: rgba(139, 92, 246, 0.15);
                        }
                    `}</style>
                </motion.div>
            ))}
        </div>
    );
}

export function PodiumSkeleton() {
    return (
        <div className="podium-skeleton" style={{ direction: 'ltr' }}>
            {[2, 1, 3].map((rank) => (
                <div
                    key={rank}
                    className={`podium-card ${rank === 1 ? 'first' : ''}`}
                >
                    <div className="podium-avatar" />
                    <div className="podium-body">
                        <div className="podium-name" />
                        <div className="podium-xp" />
                        <div className="podium-rank-badge" />
                    </div>
                </div>
            ))}

            <style jsx>{`
                .podium-skeleton {
                    display: flex;
                    justify-content: center;
                    align-items: flex-end;
                    gap: 1rem;
                    height: 320px;
                    margin-bottom: 4rem;
                }

                .podium-card {
                    width: 110px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    position: relative;
                    animation: pulse 1.5s ease-in-out infinite;
                }

                .podium-card.first {
                    width: 140px;
                    padding-bottom: 1rem;
                }

                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.6; }
                }

                .podium-avatar {
                    width: 80px;
                    height: 80px;
                    border-radius: 1rem;
                    background: rgba(255, 255, 255, 0.1);
                    margin-bottom: -30px;
                    z-index: 1;
                }

                .podium-card.first .podium-avatar {
                    width: 96px;
                    height: 96px;
                }

                .podium-body {
                    width: 100%;
                    padding: 2.5rem 0.5rem 1rem;
                    border-radius: 1rem;
                    background: rgba(20, 20, 25, 0.8);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0.5rem;
                }

                .podium-name {
                    width: 70%;
                    height: 1rem;
                    border-radius: 0.25rem;
                    background: rgba(255, 255, 255, 0.15);
                }

                .podium-xp {
                    width: 50%;
                    height: 1.5rem;
                    border-radius: 0.25rem;
                    background: rgba(255, 255, 255, 0.1);
                }

                .podium-rank-badge {
                    width: 2rem;
                    height: 2rem;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.1);
                    margin-top: 0.5rem;
                }

                @media (min-width: 768px) {
                    .podium-card { width: 150px; }
                    .podium-card.first { width: 180px; }
                    .podium-avatar { width: 96px; height: 96px; }
                    .podium-card.first .podium-avatar { width: 128px; height: 128px; }
                }
            `}</style>
        </div>
    );
}
