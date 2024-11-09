'use client';

import { useEffect, useState } from 'react';
import { LeaderboardEntry, UserSettings } from '@/types/leaderboard';
import { getUserSettings, updateUserSettings } from '@/utils/userManager';

export default function Leaderboard() {
    const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
    const [userSettings, setUserSettings] = useState<UserSettings | null>(null);
    const [newName, setNewName] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const settings = getUserSettings();
        setUserSettings(settings);
        setNewName(settings.name || '');
        fetchLeaderboard();
    }, []);

    const fetchLeaderboard = async () => {
        try {
            const response = await fetch('/api/leaderboard/update');
            const data = await response.json();
            setLeaderboard(data);
        } catch (error) {
            console.error('Error fetching leaderboard:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleNameSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newName.trim()) return;

        const updated = updateUserSettings({
            name: newName,
            optIn: true
        });
        setUserSettings(updated);

        // Update leaderboard entry
        await fetch('/api/leaderboard/update', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                uuid: updated.uuid,
                name: newName,
                optIn: true,
                score: 0 // Initial score for new users
            })
        });

        await fetchLeaderboard();
    };

    const toggleOptIn = async () => {
        if (!userSettings?.name) return;

        const updated = updateUserSettings({
            optIn: !userSettings.optIn
        });
        setUserSettings(updated);

        await fetch('/api/leaderboard/update', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                uuid: updated.uuid,
                name: updated.name,
                optIn: updated.optIn,
                score: 0
            })
        });

        await fetchLeaderboard();
    };

    if (isLoading) {
        return <div className="text-center py-8">Loading leaderboard...</div>;
    }

    return (
        <div className="w-full max-w-2xl mx-auto p-6">
            {!userSettings?.name ? (
                <form onSubmit={handleNameSubmit} className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Join the Leaderboard</h3>
                    <div className="flex gap-4">
                        <input
                            type="text"
                            value={newName}
                            onChange={(e) => setNewName(e.target.value)}
                            placeholder="Enter your name"
                            className="flex-1 px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                            required
                        />
                        <button
                            type="submit"
                            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                        >
                            Set Name
                        </button>
                    </div>
                </form>
            ) : (
                <div className="mb-8 flex items-center justify-between">
                    <div>
                        <h3 className="text-xl font-semibold">Welcome, {userSettings.name}!</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            {userSettings.optIn ? 'You are visible on the leaderboard' : 'You are hidden from the leaderboard'}
                        </p>
                    </div>
                    <button
                        onClick={toggleOptIn}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        {userSettings.optIn ? 'Hide from Leaderboard' : 'Show on Leaderboard'}
                    </button>
                </div>
            )}

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold p-6 border-b dark:border-gray-700">
                    Leaderboard
                </h2>
                <div className="divide-y dark:divide-gray-700">
                    {leaderboard.map((entry, index) => (
                        <div
                            key={entry.uuid}
                            className={`p-4 flex justify-between items-center ${userSettings?.uuid === entry.uuid ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                                }`}
                        >
                            <div className="flex items-center gap-4">
                                <span className="text-lg font-semibold w-8">{index + 1}</span>
                                <span className="font-medium">{entry.name}</span>
                            </div>
                            <span className="font-semibold">{entry.totalScore} points</span>
                        </div>
                    ))}
                    {leaderboard.length === 0 && (
                        <div className="p-6 text-center text-gray-500">
                            No entries yet. Be the first to join!
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
} 