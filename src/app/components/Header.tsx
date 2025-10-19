'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Flame, Trophy } from 'lucide-react';
import { getUserSettings } from '@/utils/userManager';
import StreakTooltip from './StreakTooltip';
import LeaderboardTooltip from './LeaderboardTooltip';

interface HeaderProps {
    showStats?: boolean;
    showName?: boolean;
    showLogo?: boolean;
}

export default function Header({ showStats = true, showName = true, showLogo = true }: HeaderProps) {
    const [userStreak, setUserStreak] = useState(0);
    const [showStreakExplanation, setShowStreakExplanation] = useState(false);
    const [showLeaderboardTooltip, setShowLeaderboardTooltip] = useState(false);

    useEffect(() => {
        if (!showStats) return;

        const userSettings = getUserSettings();
        fetch(`/api/leaderboard?uuid=${userSettings.uuid}`)
            .then(res => res.json())
            .then(data => {
                if (data && data.currentStreak) {
                    setUserStreak(data.currentStreak);
                }
            })
            .catch(console.error);

        const hasSeenTooltip = localStorage.getItem('hasSeenLeaderboardTooltip');
        if (!hasSeenTooltip) {
            setShowLeaderboardTooltip(true);
        }
    }, [showStats]);

    return (
        <header className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
                <Link href="/" className="flex items-center">
                    {showLogo && (
                        <img
                            src="/icon.png"
                            alt="Islamic Quiz Logo"
                            className="h-8 w-8 mr-2"
                        />
                    )}
                    {showName && (
                        <span className="text-lg md:text-2xl font-bold">The Muslim Box</span>
                    )}
                </Link>

                {false && (
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <button
                                onClick={() => setShowStreakExplanation(!showStreakExplanation)}
                                onMouseEnter={() => setShowStreakExplanation(true)}
                                onMouseLeave={() => setShowStreakExplanation(false)}
                                className="flex items-center bg-blue-700 rounded-full px-3 py-1.5 hover:bg-blue-600 transition-colors"
                            >
                                <Flame className="w-5 h-5 text-yellow-500 mr-1" />
                                <span className="text-sm font-medium">{userStreak}</span>
                            </button>

                            <StreakTooltip show={showStreakExplanation} />
                        </div>
                        <div className="relative">
                            <Link
                                href="/leaderboard"
                                onClick={() => {
                                    localStorage.setItem('hasSeenLeaderboardTooltip', 'true');
                                    setShowLeaderboardTooltip(false);
                                }}
                                className="bg-white text-blue-600 hover:bg-blue-100 rounded-full shadow-md flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all hover:scale-105"
                            >
                                <Trophy className="w-4 h-4" />
                                <span className="hidden sm:inline">Leaderboard</span>
                            </Link>
                            <LeaderboardTooltip show={showLeaderboardTooltip} />
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}