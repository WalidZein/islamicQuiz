'use client';

import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ConnectionsGameConfig, ConnectionsGameState } from '@/types/connections';
import { getUserSettings, loadUserSelections, clearUserSelections } from '@/utils/userManager';
import { useConnectionsGame } from '@/hooks/useConnectionsGame';
import styles from './ConnectionsGame.module.css';
import ConnectionsResults from './ConnectionsResults';
import { Textfit } from 'react-textfit';
import HelpModal from './HelpModal';
import ConnectionsGameSkeleton from './ConnectionsGameSkeleton';
import { Shuffle } from 'lucide-react';

export const DIFFICULTY_COLORS = {
    'Easy': 'bg-yellow-400 dark:bg-yellow-700 ',
    'Medium': 'bg-green-400 dark:bg-green-700 ',
    'Hard': 'bg-blue-400 dark:bg-blue-700 ',
    'Very Hard': 'bg-purple-400 dark:bg-purple-700'
};

const MAX_STRIKES = 4;

export default function ConnectionsGameClient() {
    const router = useRouter();
    const [showHelp, setShowHelp] = useState(false);
    const [shake, setShake] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [game, setGame] = useState<ConnectionsGameConfig | null>(null);
    const [existingSubmission, setExistingSubmission] = useState<any | null>(null);
    const [showResults, setShowResults] = useState(false);
    const [submitResult, setSubmitResult] = useState<any>(null);
    const [showToolTip, setShowToolTip] = useState(false);

    const { gameState, selectWord, submitGuess, shuffleWords, unselectAllWords, updateGameStateFromAttempts } = useConnectionsGame(game);

    // Load game data and check for existing submission
    useEffect(() => {
        async function loadGame() {
            try {
                // Try to get current game from API
                const response = await fetch('/api/connections/getCurrentGame');
                if (response.ok) {
                    const game = await response.json();
                    setGame(game);

                    // Check for existing submission
                    const userSettings = getUserSettings();
                    const submissionResponse = await fetch(
                        `/api/connections/loadUserSubmission?userId=${userSettings.uuid}&gameId=${game.id}`
                    );
                    if (submissionResponse.ok) {
                        const submission = await submissionResponse.json();
                        setExistingSubmission(submission);
                    }
                }
            } catch (error) {
                console.error('Error loading game:', error);
            } finally {
                setIsLoading(false);
            }
        }

        loadGame();
    }, []);

    //update game state from existing submission
    useEffect(() => {
        if (existingSubmission) {
            updateGameStateFromAttempts(existingSubmission.attempts);
        }
    }, [existingSubmission])

    // update game state from existing submission
    useEffect(() => {
        if (game && !existingSubmission) {
            const cachedSelections = loadUserSelections(game.id);
            if (cachedSelections) {
                // Initialize game with cached selections
                updateGameStateFromAttempts(cachedSelections);
            }
        }
    }, [game, existingSubmission]);

    useEffect(() => {
        if (gameState.gameCompleted && !existingSubmission) {
            handleGameComplete(!!gameState.isWon);
        }
        if (gameState.gameCompleted) {
            setShowResults(true);
        }
    }, [gameState.gameCompleted, existingSubmission])

    const handleWordClick = (word: string) => {
        selectWord(word);
    };

    const handleSubmit = () => {
        const result = submitGuess();
        if (!result) return;

        setSubmitResult(result);

        if (result.isDuplicate || result.isOneAway) {
            setShowToolTip(true);
            setTimeout(() => setShowToolTip(false), 2000);
        }

        if (!result.success) {
            setShake(true);
            setTimeout(() => setShake(false), 500);
        }
    };

    const handleGameComplete = async (isWon: boolean) => {
        if (!game) return;

        const userSettings = getUserSettings();

        try {
            // Always submit when game is complete (won or lost)
            await fetch('/api/connections/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userId: userSettings.uuid,
                    gameId: game.id,
                    completed: true,
                    strikes: MAX_STRIKES - gameState.strikes,
                    attempts: gameState.attempts,
                    isWon
                })
            });

            // Clear cached selections after successful submission
            clearUserSelections(game.id);

            // Reload the submission to show correct answers
            const submissionResponse = await fetch(
                `/api/connections/loadUserSubmission?userId=${userSettings.uuid}&gameId=${game.id}`
            );
            if (submissionResponse.ok) {
                const submission = await submissionResponse.json();
                setExistingSubmission(submission);
            }
        } catch (error) {
            console.error('Error submitting connections game:', error);
        }
    };

    const handleBackClick = () => {
        router.push('/');
    };

    if (isLoading) {
        return <ConnectionsGameSkeleton />;
    }

    if (!game) {
        return <div className="flex justify-center items-center min-h-screen">
            <div className="text-center">
                <h1 className="text-2xl font-bold mb-4">No Active Game</h1>
                <p>Check back later for today's connections game!</p>
            </div>
        </div>;
    }

    return (
        <div className="flex flex-col items-center py-10">
            <div className="w-full max-w-2xl mb-4">
                <button
                    className="flex items-center text-white hover:text-gray-200 font-medium"
                    onClick={handleBackClick}
                >
                    <span className="mr-1 text-lg">&#8592;</span> Back to Home
                </button>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-2xl bg-gray-50 dark:bg-gray-800 dark:bg-opacity-90 rounded-lg shadow-md p-5 relative"
            >
                <div className="flex justify-between items-center mb-3">
                    <h1 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100">
                        Islamic Connections
                    </h1>
                    <button
                        onClick={() => setShowHelp(!showHelp)}
                        className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-blue-500 flex items-center justify-center text-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-200 text-lgmd:text-xl font-semibold"
                    >
                        ?
                    </button>
                </div>

                <HelpModal
                    isOpen={showHelp}
                    onClose={() => setShowHelp(false)}
                />

                {/* Solved Categories */}
                {!gameState.gameCompleted && (
                    <AnimatePresence>
                        {gameState.solvedGroups.map((group, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className={`mb-4 p-4 rounded-lg ${DIFFICULTY_COLORS[group.difficulty]} ${styles.solved}`}
                            >
                                <h3 className="font-bold">{group.category}</h3>
                                <p>{group.words.join(', ')}</p>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                )}

                {/* Game Over State */}
                {gameState.gameCompleted ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center mb-6"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-4"
                        >
                            {game.groups
                                .filter(group => existingSubmission || !gameState.solvedGroups.includes(group))
                                .map((group, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className={`mb-4 p-4 rounded-lg text-black dark:text-white ${DIFFICULTY_COLORS[group.difficulty]}`}
                                    >
                                        <p className="font-semibold">{group.category}</p>
                                        <p>{group.words.join(', ')}</p>
                                    </motion.div>
                                ))
                            }
                        </motion.div>
                        <button
                            onClick={() => setShowResults(true)}
                            className=" text-black dark:text-white mt-6 py-2 px-6 bg-blue-500 rounded-lg transition-all duration-200 active:scale-95 hover:-translate-y-0.5"
                        >
                            View Results
                        </button>
                    </motion.div>
                ) : (
                    <>
                        {/* Remaining Words Grid */}
                        <div className={`grid grid-cols-4 gap-1 mb-4 ${shake ? styles.shake : ''}`}>
                            {gameState.remainingWords.map((word, index) => {
                                const isSelected = gameState.selectedWords.includes(word);

                                return (
                                    <button
                                        key={index}
                                        onClick={() => handleWordClick(word)}
                                        className={`rounded  flex items-center justify-center min-h-[70px] overflow-hidden hover:-translate-y-1 translate-y-0 duration-200 ${isSelected
                                            ? 'bg-blue-500 text-white'
                                            : 'bg-gray-200 dark:bg-gray-700'
                                            } ${styles.tile} ${isSelected ? styles.selected : ''}`}
                                    >
                                        <Textfit
                                            mode="single"
                                            max={15} // Adjust this maximum font size if needed
                                            className="text-center w-full whitespace-nowrap font-bold px-1 text-black dark:text-white"
                                        >
                                            {word}
                                        </Textfit>
                                    </button>
                                );
                            })}
                        </div>

                        {showToolTip && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="absolute inset-x-0 mx-auto w-fit top-2
                                           bg-gray-800 text-white px-3 py-1.5 rounded-md shadow-lg 
                                           text-sm font-medium z-10"
                            >
                                {submitResult?.isOneAway ? "One away..." : "Already guessed!"}
                            </motion.div>
                        )}

                        {/* Mistakes Indicator */}
                        <div className="mb-4">
                            <div className="flex items-center justify-center gap-4">
                                <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
                                    Mistakes remaining:
                                </p>
                                <div className="flex gap-2">
                                    {Array.from({ length: MAX_STRIKES }).map((_, i) => (
                                        <div
                                            key={i}
                                            className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full ${i < gameState.strikes
                                                ? 'bg-blue-500'
                                                : 'bg-gray-300 dark:bg-gray-600'
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Buttons */}

                        <div className="flex gap-2">
                            <button
                                onClick={shuffleWords}
                                className="py-2 px-4 flex flex-row items-center gap-1 bg-gray-500 text-white rounded-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                            >
                                <span className='text-sm'> <Shuffle size={16} /></span> Shuffle
                            </button>

                            <button
                                onClick={unselectAllWords}
                                disabled={gameState.selectedWords.length === 0}
                                className="py-2 px-4 bg-gray-500 text-white rounded-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
                            >
                                Deselect All
                            </button>

                            <button
                                onClick={handleSubmit}
                                disabled={gameState.selectedWords.length !== 4}
                                className="flex-1 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                            >
                                Submit
                            </button>
                        </div>

                    </>
                )}

                {/* Results Modal */}
                {game && existingSubmission && (
                    <ConnectionsResults
                        game={game}
                        submission={existingSubmission}
                        isOpen={showResults}
                        onClose={() => setShowResults(false)}
                    />
                )}
            </motion.div>
        </div>
    );
} 