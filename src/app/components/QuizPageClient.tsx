// components/QuizPageClient.tsx

'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import JSConfetti from 'js-confetti';
import { Quiz } from '../../types/quiz';
import { useQuizStatus } from '../../hooks/useQuizStatus';
import { ProgressBar } from './ProgressBar';
import { QuizOption } from './QuizOption';
import { getUserSettings } from '@/utils/userManager';

interface QuizPageClientProps {
    quiz: Quiz;
}

export default function QuizPageClient({ quiz }: QuizPageClientProps) {
    const router = useRouter();
    const { state, dispatch } = useQuizStatus(quiz);
    const [confetti, setConfetti] = useState<JSConfetti | null>(null);

    // Initialize confetti on client side
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setConfetti(new JSConfetti());
        }
    }, []);

    // Trigger confetti when quiz is completed with perfect score
    useEffect(() => {
        if (state.quizCompleted && state.score === quiz.questions.length && confetti) {
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
    }, [state.quizCompleted, state.score, quiz.questions.length, confetti]);

    const handleBackClick = () => {
        router.push('/');
    };

    const handleOptionClick = (index: number) => {
        if (state.selectedOptionIndex !== null) return;
        dispatch({ type: 'SELECT_OPTION', payload: index });

        if (index === quiz.questions[state.currentQuestionIndex].correctAnswerIndex) {
            dispatch({ type: 'INCREMENT_SCORE' });
        }
    };

    const handleNextClick = () => {
        if (state.finalQuestion) {
            dispatch({ type: 'COMPLETE_QUIZ' });
            const userSettings = getUserSettings();

            fetch('/api/leaderboard/update', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    uuid: userSettings.uuid,
                    name: userSettings.name,
                    score: state.score,
                    optIn: userSettings.optIn,
                    isQuizSubmission: true,
                })
            }).catch(console.error);
            return;
        }
        if (state.currentQuestionIndex == quiz.questions.length - 1
            || state.currentQuestionIndex == quiz.questions.length - 2) {
            dispatch({ type: 'FINAL_QUESTION' })
        }
        if (state.currentQuestionIndex + 1 < quiz.questions.length) {
            dispatch({ type: 'NEXT_QUESTION' });
        }

    };

    const progressPercentage = ((state.currentQuestionIndex + 1) / quiz.questions.length) * 100;

    if (state.quizCompleted && state.selections.length === quiz.questions.length) {
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

                <div className="w-full max-w-2xl bg-white dark:bg-gray-800 dark:bg-opacity-90 rounded-lg shadow-md p-6">
                    <h2 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
                        Quiz Completed!
                    </h2>
                    <p className="text-xl mb-6 text-gray-800 dark:text-gray-100">
                        Your score: <span className="font-semibold">{state.score}</span> out of{' '}
                        <span className="font-semibold">{quiz.questions.length}</span>
                        {state.score === quiz.questions.length && (
                            <span className="block mt-2 text-green-500">
                                🎉 Perfect Score! Congratulations! 🎉
                            </span>
                        )}
                    </p>
                    {quiz.questions.map((q, index) => {
                        const userSelection = state.selections[index];
                        return (
                            <div key={index} className="mb-6">
                                <p className="text-lg mb-2 text-gray-800 dark:text-gray-100 whitespace-pre-line">
                                    <strong>Question {index + 1}:</strong> {q.question}
                                </p>
                                <ul className="space-y-2">
                                    {q.options.map((option, optIndex) => (
                                        <QuizOption
                                            key={optIndex}
                                            option={option}
                                            index={optIndex}
                                            isSelected={userSelection === optIndex}
                                            isCorrect={optIndex === q.correctAnswerIndex}
                                            showResult={true}
                                            onSelect={() => { }}
                                        />
                                    ))}
                                </ul>
                                <div className="mt-2">
                                    <h3 className="text-md font-semibold mb-1 text-gray-800 dark:text-gray-100">
                                        Explanation:
                                    </h3>
                                    <p className="text-gray-800 dark:text-gray-100 whitespace-pre-line">{q.explanation}</p>
                                </div>
                            </div>
                        );
                    })}
                    <button
                        className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
                        onClick={handleBackClick}
                    >
                        Go back to Home
                    </button>
                </div>
            </div>
        );
    }

    const currentQuestion = quiz.questions[state.currentQuestionIndex];

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

            <div className="w-full max-w-2xl bg-white dark:bg-gray-800 dark:bg-opacity-90 rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                    <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
                        Question {state.currentQuestionIndex + 1} of {quiz.questions.length}
                    </h2>
                </div>

                <ProgressBar progress={progressPercentage} />

                <p className="text-lg mb-6 text-gray-800 dark:text-gray-100 whitespace-pre-line">
                    {currentQuestion.question}
                </p>

                <ul className="space-y-4">
                    {currentQuestion.options.map((option, index) => (
                        <QuizOption
                            key={index}
                            option={option}
                            index={index}
                            isSelected={state.selectedOptionIndex === index}
                            isCorrect={index === currentQuestion.correctAnswerIndex}
                            showResult={state.selectedOptionIndex !== null}
                            onSelect={handleOptionClick}
                        />
                    ))}
                </ul>

                {state.selectedOptionIndex !== null && (
                    <button
                        className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
                        onClick={handleNextClick}
                    >
                        {!state.finalQuestion ? "Next Question" : "Submit Quiz"}
                    </button>
                )}

                {state.showExplanation && (
                    <div className="mt-6 bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-400 dark:border-blue-600 p-4">
                        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
                            Explanation:
                        </h3>
                        <p className="text-gray-800 dark:text-gray-100 whitespace-pre-line">
                            {currentQuestion.explanation}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
