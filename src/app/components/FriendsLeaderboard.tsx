'use client';

import { useState, useEffect } from 'react';
import { User } from '@/types/leaderboard';
import { getUserSettings } from '@/utils/userManager';
import { generateThemedName } from '@/utils/nameGenerator';

interface FriendsLeaderboardProps {
    isOpen: boolean;
    onClose: () => void;
    inQuizCompletion?: boolean;
    currentQuizId?: number;
}

export default function FriendsLeaderboard({ isOpen, onClose, inQuizCompletion = false, currentQuizId }: FriendsLeaderboardProps) {
    const [leaderboard, setLeaderboard] = useState<User[]>([]);
    const [inviteCode, setInviteCode] = useState<string>('');
    const [showInviteModal, setShowInviteModal] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchLeaderboard = async () => {
            try {
                const userSettings = getUserSettings();
                const response = await fetch(`/api/friends/leaderboard?uuid=${userSettings.uuid}${currentQuizId !== undefined ? `&quizId=${currentQuizId}` : ''}`);
                const data = await response.json();

                if (response.ok) {
                    setLeaderboard(Array.isArray(data) ? data : []);
                } else {
                    throw new Error(data.error || 'Failed to fetch leaderboard');
                }
            } catch (error) {
                console.error('Error fetching friends leaderboard:', error);
                setError('Failed to load friends leaderboard');
            } finally {
                setIsLoading(false);
            }
        };

        if (isOpen) {
            fetchLeaderboard();
        }
    }, [isOpen, currentQuizId]);

    const handleAddFriend = async () => {
        try {
            const userSettings = getUserSettings();
            const response = await fetch(`/api/friends/invite?uuid=${userSettings.uuid}`);
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to generate invite code');
            }

            setInviteCode(data.inviteCode);
            setShowInviteModal(true);
        } catch (error) {
            console.error('Error generating invite code:', error);
            setError('Failed to generate invite code');
        }
    };

    const handleShare = async () => {
        const inviteUrl = `${window.location.origin}/invite/${inviteCode}`;
        try {
            await navigator.share({
                title: 'Join me on The Muslim Box!',
                text: 'Let\'s compete together!',
                url: inviteUrl
            });
        } catch (error) {
            navigator.clipboard.writeText(inviteUrl);
            alert('Invite link copied to clipboard!');
        }
    };

    return (
        <>
            <div
                className={`${inQuizCompletion ? '' : 'fixed inset-y-0 right-0'} w-full bg-transparent`}
            >
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md flex flex-col h-full md:h-auto">
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">🤝 Friends</h2>
                        {!inQuizCompletion && (
                            <button
                                onClick={onClose}
                                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                            >
                                ✕
                            </button>
                        )}
                    </div>

                    {/* Main content */}
                    <div className="divide-y divide-gray-200 dark:divide-gray-700 overflow-y-auto max-h-[350px]">
                        {isLoading ? (
                            <div className="flex items-center justify-center h-32">
                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-gray-100"></div>
                            </div>
                        ) : error ? (
                            <div className="p-6 text-center text-red-500 dark:text-red-400">
                                {error}
                            </div>
                        ) : leaderboard.length === 0 ? (
                            <div className="p-6 text-center text-gray-500 dark:text-gray-400">
                                <p className="mb-2">You haven't added any friends yet!</p>
                                <p>Click below to invite friends and compete together.</p>
                            </div>
                        ) : (
                            leaderboard.map((entry, index) => (
                                <div
                                    key={entry.uuid}
                                    className="p-3 px-6 flex justify-between items-center"
                                >
                                    <div className="flex items-center gap-4 min-w-0 flex-1">
                                        <span className="text-lg font-semibold w-8 flex-shrink-0 text-gray-900 dark:text-gray-100">
                                            {index + 1}
                                        </span>
                                        <div>
                                            <span className="font-medium text-gray-900 dark:text-gray-100 truncate">
                                                {entry.name || generateThemedName(entry.uuid)}
                                            </span>
                                            {!entry.name && (
                                                <span className="text-gray-500 dark:text-gray-400 text-xs ml-1">
                                                    #{entry.uuid.slice(0, 4)}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 flex-shrink-0">
                                        <span className="font-semibold text-gray-900 dark:text-gray-100">
                                            {currentQuizId !== undefined && currentQuizId !== -1 ? (
                                                `✨ ${entry.quizScore}`
                                            ) : (
                                                `🔥 ${entry.currentStreak}`
                                            )}
                                        </span>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Footer */}
                    <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                        <button
                            onClick={handleAddFriend}
                            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center gap-2"
                        >
                            <span>+</span> Add Friend
                        </button>
                    </div>
                </div>
            </div>

            {/* Invite Modal */}
            {showInviteModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-md w-full mx-4">
                        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                            Invite Friends
                        </h3>
                        <p className="mb-4 text-gray-700 dark:text-gray-300">
                            Share this link with your friends to connect on Islamic Quiz:
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md mb-4">
                            <code className="text-sm break-all">
                                {`${window.location.origin}/invite/${inviteCode}`}
                            </code>
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={handleShare}
                                className="flex-1 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
                            >
                                Share
                            </button>
                            <button
                                onClick={() => setShowInviteModal(false)}
                                className="flex-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
} 