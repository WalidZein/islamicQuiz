'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Flame, Trophy } from 'lucide-react';
import { getUserSettings } from '@/utils/userManager';
import StreakTooltip from './StreakTooltip';

export default function Header() {
    const [userStreak, setUserStreak] = useState(0);
    const [showStreakExplanation, setShowStreakExplanation] = useState(false);

    useEffect(() => {
        const userSettings = getUserSettings();
        fetch(`/api/leaderboard/update?uuid=${userSettings.uuid}`)
            .then(res => res.json())
            .then(data => {
                if (data && data.currentStreak) {
                    setUserStreak(data.currentStreak);
                }
            })
            .catch(console.error);
    }, []);

    return (
        <header className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
                <Link href="/" className="flex items-center">
                    <img
                        src="/icon.png"
                        alt="Islamic Quiz Logo"
                        className="h-8 w-8 mr-2"
                    />
                    <span className="text-lg md:text-2xl font-bold">The Muslim Box</span>
                </Link>

                <div className="flex items-center space-x-4">
                    <div className="relative">
                        <button
                            onClick={() => setShowStreakExplanation(!showStreakExplanation)}
                            className="flex items-center bg-blue-700 rounded-full px-3 py-1.5 hover:bg-blue-600 transition-colors"
                        >
                            <Flame className="w-5 h-5 text-yellow-500 mr-1" />
                            <span className="text-sm font-medium">{userStreak}</span>
                        </button>

                        <StreakTooltip show={showStreakExplanation} />
                    </div>
                    <Link
                        href="/leaderboard"
                        className="bg-white text-blue-600 hover:bg-blue-100 rounded-full shadow-md flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all hover:scale-105"
                    >
                        <Trophy className="w-4 h-4" />
                        <span className="hidden sm:inline">Leaderboard</span>
                    </Link>
                </div>
            </div>
        </header>
    );
} 