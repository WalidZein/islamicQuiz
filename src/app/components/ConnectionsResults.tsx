'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ConnectionsGameConfig, ConnectionsGameSubmissionData } from '@/types/connections';
import { shareContent, trackShare } from '@/utils/shareUtils';
import { getUserSettings } from '@/utils/userManager';

interface ConnectionsResultsProps {
    game: ConnectionsGameConfig;
    submission: ConnectionsGameSubmissionData;
    isOpen: boolean;
    onClose: () => void;
}

const DIFFICULTY_EMOJIS = {
    'Easy': '🟨',
    'Medium': '🟩',
    'Hard': '🟦',
    'Very Hard': '🟪'
};

export default function ConnectionsResults({ game, submission, isOpen, onClose }: ConnectionsResultsProps) {
    const [timeLeft, setTimeLeft] = useState('');
    const [resultText, setResultText] = useState('');

    useEffect(() => {
        const puzzleNumber = game.id;
        const emojiRows = submission.attempts.map(attempt => {
            const attemptEmoji = attempt.map(word => {
                const category = game.groups.find(group => group.words.includes(word));
                return category ? DIFFICULTY_EMOJIS[category.difficulty] : '⬛';
            });
            return attemptEmoji.join('');
        });
        const text = emojiRows.join('\n');
        setResultText(text);
    }, [game, submission]);

    useEffect(() => {
        const updateTimer = () => {
            const releaseTime = new Date(game.releaseTime);
            const nextGame = new Date(releaseTime.getTime() + 24 * 60 * 60 * 1000);
            const now = new Date();
            const diff = nextGame.getTime() - now.getTime();

            if (diff <= 0) {
                setTimeLeft('Next game available now!');
                return;
            }

            const hours = Math.floor(diff / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            const formattedHours = String(hours).padStart(2, '0');
            const formattedMinutes = String(minutes).padStart(2, '0');
            const formattedSeconds = String(seconds).padStart(2, '0');

            setTimeLeft(`${formattedHours}:${formattedMinutes}:${formattedSeconds}`);
        };

        updateTimer();
        const interval = setInterval(updateTimer, 1000);
        return () => clearInterval(interval);
    }, [game.releaseTime]);

    const handleCopyResults = () => {
        navigator.clipboard.writeText(resultText);
    };

    const handleShare = async () => {
        const userSettings = getUserSettings();
        const shareText = `Islamic Connections #${game.id}\n\n${resultText}`;

        try {
            const shareSuccess = await shareContent({

                text: shareText,

            });

            if (shareSuccess) {
                await trackShare(userSettings.uuid, 'quiz');
            }
        } catch (error) {
            console.error('Error sharing results:', error);
        }
    };

    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
                    onClick={(e) => {
                        // Only close if clicking the overlay background
                        if (e.target === e.currentTarget) {
                            onClose();
                        }
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-md"
                        // Prevent clicks inside modal from bubbling to overlay
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="border-b border-gray-200 dark:border-gray-700 p-4">
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100">
                                    Game Results
                                </h2>
                                <button
                                    onClick={onClose}
                                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                                >
                                    ✕
                                </button>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-4 space-y-6">
                            {/* Game Status */}
                            <div className="text-center">
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    {submission.completed && submission.strikes < 4 ? "MashAllah!" : "InshAllah"}
                                </p>
                                <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">
                                    {submission.completed && submission.strikes < 4
                                        ? 'You found all the connections!'
                                        : 'Next Time!'}
                                </h3>
                            </div>

                            {/* Results Grid */}
                            <div className=" p-2 rounded-lg">
                                <p className="font-mono text-lg md:text-xl text-center leading-none whitespace-pre-line">
                                    {resultText}
                                </p>
                            </div>

                            {/* Next Game Timer */}
                            <div className="text-center space-y-2">
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Next puzzle in
                                </p>
                                <p className="font-mono text-lg md:text-xl font-bold text-gray-800 dark:text-gray-100">
                                    {timeLeft}
                                </p>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="border-t border-gray-200 dark:border-gray-700 p-4">
                            <button
                                onClick={handleShare}
                                className="w-full py-2.5 bg-blue-500 hover:bg-blue-600 text-black dark:text-white rounded-lg transition-colors duration-200 font-medium text-sm md:text-base"
                            >
                                Share Results
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </>
    );
} 