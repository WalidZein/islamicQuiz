'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import ResultsPageSkeleton from '@/app/components/ResultsPageSkeleton';

interface GameStats {
    completedGames: number;
    strikeDistribution: { strikes: number; count: number }[];
}

const DIFFICULTY_COLORS = {
    0: 'bg-yellow-500/80 dark:bg-yellow-700/80',  // Easy
    1: 'bg-green-500/80 dark:bg-green-700/80',    // Medium
    2: 'bg-blue-500/80 dark:bg-blue-700/80',      // Hard
    3: 'bg-purple-500/80 dark:bg-purple-700/80',  // Very Hard
    4: 'bg-red-500/80 dark:bg-red-700/80'         // Failed
};

type ResultsPageProps = {
    params: Promise<{
        id: string;
    }>
};
export default function ConnectionsResultsPage({ params }: ResultsPageProps) {
    const router = useRouter();
    const [stats, setStats] = useState<GameStats | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [currentGameId, setCurrentGameId] = useState<string | null>(null);

    useEffect(() => {
        async function fetchCurrentGame() {
            try {
                // const response = await fetch('/api/connections/getCurrentGame');
                // if (!response.ok) throw new Error('Failed to fetch current game');
                // const data = await response.json();
                const gameId = (await params).id;
                setCurrentGameId(gameId);
            } catch (err) {
                setError('Failed to load current game');
                console.error(err);
                setLoading(false);
            }
        }

        fetchCurrentGame();
    }, []);

    useEffect(() => {
        if (!currentGameId) return;

        async function fetchStats() {
            try {
                const response = await fetch(`/api/connections/getGameStats?gameId=${currentGameId}`);
                if (!response.ok) throw new Error('Failed to fetch stats');
                const data = await response.json();
                setStats(data);
            } catch (err) {
                setError('Failed to load game statistics');
                console.error(err);
            } finally {
                setLoading(false);
            }
        }

        fetchStats();
    }, [currentGameId]);

    const handleBackClick = () => {
        router.push('/connections');
    };

    if (loading) {
        return <ResultsPageSkeleton />;
    }

    if (error || !stats) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-center text-red-500">{error || 'Failed to load statistics'}</div>
            </div>
        );
    }

    // Create a map of existing strike data
    const strikeMap = new Map(
        stats.strikeDistribution.map(({ strikes, count }) => [
            strikes,
            Number(((count / stats.completedGames) * 100).toFixed(1))
        ])
    );

    // Generate complete chart data for all strikes 0-4
    const chartData = Array.from({ length: 5 }, (_, i) => ({
        strikes: i,
        percentage: strikeMap.get(i) || 0
    }));

    return (
        <div className="flex flex-col items-center py-10 px-4 pb-20">
            <div className="w-full max-w-xl mx-auto mb-4">
                <button
                    className="flex items-center text-white hover:text-gray-200 font-medium"
                    onClick={handleBackClick}
                >
                    <span className="mr-1 text-lg">&#8592;</span> Back to Game
                </button>
            </div>

            <div className="w-full max-w-xl mx-auto my-auto bg-white/95 dark:bg-gray-900/95 border border-gray-200 dark:border-gray-800 rounded-lg shadow-md">
                <div className="border-b border-gray-200 dark:border-gray-800 p-4">
                    <h1 className="text-2xl font-semibold text-center text-gray-900 dark:text-gray-100">
                        Today&apos;s Results
                    </h1>
                </div>
                <div className="p-6">
                    <div className="flex">
                        {/* Vertical "Mistakes" label */}
                        <div className="flex items-center justify-center mr-2 w-7">
                            <div className="transform -rotate-90 origin-center whitespace-nowrap">
                                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                    Mistakes
                                </span>
                            </div>
                        </div>

                        {/* Chart content */}
                        <div className="flex flex-col space-y-4 w-full flex-1">
                            {chartData.map(({ strikes, percentage }, index) => (
                                <div key={strikes} className="flex items-center gap-4">
                                    <div className="w-fit text-right">
                                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                            {strikes}
                                        </span>
                                    </div>
                                    <div className="flex-1 h-8 bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${percentage}%` }}
                                            transition={{
                                                duration: 0.8,
                                                delay: index * 0.1,
                                                ease: "easeOut",
                                            }}
                                            className={`h-full ${DIFFICULTY_COLORS[strikes as keyof typeof DIFFICULTY_COLORS]}`}
                                        />
                                    </div>
                                    <div className="w-10">
                                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                            {percentage}%
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 