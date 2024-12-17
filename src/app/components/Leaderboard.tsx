'use client';

import { useEffect, useState } from 'react';
import { LeaderboardEntry, UserSettings } from '@/types/leaderboard';
import { getUserSettings, updateUserSettings, setCachedLeaderboardData, getNameFromLeaderboard } from '@/utils/userManager';

const leaderboardOn = true;
export default function Leaderboard() {
    const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
    const [userSettings, setUserSettings] = useState<UserSettings | null>(null);
    const [newName, setNewName] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [name, setName] = useState('');

    useEffect(() => {
        const initializeUser = async () => {
            const settings = getUserSettings();
            setUserSettings(settings);
            if (settings.uuid) {
                const dbName = await getNameFromLeaderboard(settings.uuid);
                if (dbName) {
                    setName(dbName);
                }
            }
            fetchLeaderboard();
        };

        initializeUser();
    }, []);

    const fetchLeaderboard = async () => {
        try {
            const response = await fetch('/api/leaderboard');
            const data = await response.json();
            setCachedLeaderboardData(data);
            setLeaderboard(data);

            const settings = getUserSettings();
            if (settings.uuid) {
                const dbName = await getNameFromLeaderboard(settings.uuid);
                if (dbName) {
                    setName(dbName);
                }
            }
        } catch (error) {
            console.error('Error fetching leaderboard:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleNameSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newName.trim()) return;

        try {
            await fetch('/api/user/update', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    uuid: userSettings?.uuid,
                    name: newName,
                    optIn: true
                })
            });

            await fetchLeaderboard();
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    const toggleOptIn = async () => {
        if (!newName.trim()) return;

        await fetch('/api/user/update', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                uuid: userSettings?.uuid,
                optIn: false //TODO: fix me for toggle to work
            })
        });

        await fetchLeaderboard();
    };

    if (isLoading) {
        return <div className="text-center py-8">Loading leaderboard...</div>;
    }

    return (
        <div className="w-full max-w-2xl mx-auto p-6 pb-0">
            <div className="text-center mb-8">
                <p className="text-xl md:text-2xl font-arabic mb-1">وَفِي ذَٰلِكَ فَلْيَتَنَافَسِ الْمُتَنَافِسُونَ</p>
                <p className="text-sm md:text-lg text-gray-800 dark:text-gray-400 italic">"So for this let the competitors compete."</p>
            </div>
            {!name ? (
                <form onSubmit={handleNameSubmit} className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Join the Leaderboard</h3>
                    <div className="flex gap-4">
                        <input
                            type="text"
                            value={newName}
                            onChange={(e) => setNewName(e.target.value)}
                            placeholder="Enter your name"
                            className="flex-1 px-4 py-2 border rounded-md bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
                            required
                        />
                        <button
                            type="submit"
                            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-xs md:text-lg"
                        >
                            Set Name
                        </button>
                    </div>
                </form>
            ) : (
                <div className="mb-4 flex items-center justify-between">
                    <div>
                        <h3 className="text-xl font-semibold">Assalamualaikum, {name}!</h3>
                        <p className="text-gray-800 dark:text-gray-300">
                            {//userSettings.optIn ? 'You are visible on the leaderboard' : 'You are hidden from the leaderboard '
                            }

                        </p>

                    </div>
                    {/* <button
                        onClick={toggleOptIn}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        {userSettings.optIn ? 'Hide from Leaderboard' : 'Show on Leaderboard'}
                    </button> */}
                </div>
            )}

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md flex flex-col">
                <h2 className="text-2xl font-bold p-4 border-b border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 sticky top-0 bg-white dark:bg-gray-800 rounded-t-lg">
                    🏆 Leaderboard
                </h2>
                <div className="divide-y divide-gray-200 dark:divide-gray-700 overflow-y-auto max-h-[350px]">
                    {leaderboardOn && leaderboard.map((entry, index) => (
                        <div
                            key={entry.uuid}
                            className={`p-3 pl-6 flex justify-between items-center ${userSettings?.uuid === entry.uuid ? 'bg-blue-200 dark:bg-blue-600/20' : ''
                                }`}
                        >
                            <div className="flex items-center gap-4 min-w-0 flex-1">
                                <span className="text-lg font-semibold w-8 flex-shrink-0 text-gray-900 dark:text-gray-100">{index + 1}</span>
                                <span className="font-medium text-gray-900 dark:text-gray-100 truncate">{entry.name}</span>
                            </div>
                            <div className="flex items-center gap-4 flex-shrink-0">
                                <span className="font-semibold text-gray-900 dark:text-gray-100">🔥 {entry.currentStreak} </span>
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    (Best: {entry.highestStreak})
                                </span>
                            </div>
                        </div>
                    ))}
                    {(leaderboard.length === 0 || !leaderboardOn) && (
                        <div className="p-6 text-center text-gray-500 dark:text-gray-400">
                            {leaderboardOn ? "No entries yet. Be the first to join!" : <div className=' flex-row justify-between'><p>Leaderboard will be available with the start of the new season inshAllah!</p> <a className=" text-blue-600 hover:text-blue-800" href='https://chat.whatsapp.com/EzuGKEk8JFYCttCttg1YtG'>Join our whatsapp community for updates</a></div>}
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
}