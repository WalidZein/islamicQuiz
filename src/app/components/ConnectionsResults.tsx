'use client';

import { useState, useEffect } from 'react';
import { shareContent, trackShare } from '@/utils/shareUtils';
import { getUserSettings } from '@/utils/userManager';
import JSConfetti from 'js-confetti';
import Link from 'next/link';
import Popup from './ui/Popup';
import { ConnectionsGameConfig, ConnectionsGameSubmissionData } from '@/types/connections';

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
    const [formattedElapsedTime, setFormattedElapsedTime] = useState('');
    const [confetti, setConfetti] = useState<JSConfetti | null>(null);

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

        // Format elapsed time if available
        if (submission.elapsedTime) {
            const minutes = Math.floor(submission.elapsedTime / 60);
            const seconds = submission.elapsedTime % 60;
            setFormattedElapsedTime(`${minutes}:${seconds.toString().padStart(2, '0')}`);
        }
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

    // Initialize confetti on client side
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setConfetti(new JSConfetti());
        }
    }, []);

    // Trigger confetti when quiz is completed with perfect score
    useEffect(() => {
        if (submission.completed && submission.strikes < 4 && confetti) {
            confetti.addConfetti({
                confettiColors: [
                    '#22c55e', // green-500
                    '#3b82f6', // blue-500
                    '#f59e0b', // amber-500
                    '#ef4444', // red-500
                    '#8b5cf6', // violet-500
                ],
                confettiNumber: 100,
            });
        }
    }, [submission.completed, submission.strikes, confetti]);

    const handleCopyResults = () => {
        navigator.clipboard.writeText(resultText);
    };

    const handleShare = async () => {
        const userSettings = getUserSettings();
        const timeText = formattedElapsedTime ? `Time taken: ${formattedElapsedTime}` : '';
        const shareText = `Islamic Connections #${game.id}\n${timeText}\n${resultText}`;

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

    const footerContent = (
        <>
            <button
                onClick={handleShare}
                className="w-full py-2.5 bg-blue-500 hover:bg-blue-600 text-black dark:text-white rounded-lg transition-colors duration-200 font-medium text-sm md:text-base"
            >
                Share Results
            </button>
            <Link
                href={`/connections/results/${game.id}`}
                className="block text-center mt-4 text-sm text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 underline"
            >
                View Detailed Statistics
            </Link>
        </>
    );

    return (
        <Popup
            isOpen={isOpen}
            onClose={onClose}
            title="Game Results"
            footer={footerContent}
        >
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
            <div className="p-2 rounded-lg text-center">
                {formattedElapsedTime && submission.completed && submission.strikes < 4 && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 pb-2">
                        Time taken: {formattedElapsedTime}
                    </p>
                )}
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
        </Popup>
    );
} 