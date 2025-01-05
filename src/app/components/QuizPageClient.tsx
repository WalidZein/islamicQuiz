// components/QuizPageClient.tsx

'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import JSConfetti from 'js-confetti';
import { QuestionType, Quiz } from '../../types/quiz';
import { useQuizStatus } from '../../hooks/useQuizStatus';
import { ProgressBar } from './ProgressBar';
import { QuizOption } from './QuizOption';
import { getUserSettings } from '@/utils/userManager';
import { ShareQuiz } from './ShareQuiz';
import QuizLoadingSkeleton from './QuizLoadingSkeleton';
import FriendsLeaderboard from './FriendsLeaderboard';

interface QuizPageClientProps {
    quiz: Quiz;
}

export interface QuizSubmission {
    quizId: number;
    completed: boolean;
    score: number;
    selections: number[][];
    submissionDate: string;
}

export default function QuizPageClient({ quiz }: QuizPageClientProps) {
    const router = useRouter();
    const { state, dispatch } = useQuizStatus(quiz);
    const [confetti, setConfetti] = useState<JSConfetti | null>(null);
    const [visibleExplanations, setVisibleExplanations] = useState<Set<number>>(new Set());
    const [existingSubmission, setExistingSubmission] = useState<QuizSubmission | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isFriendsOpen, setIsFriendsOpen] = useState(false);

    // Calculate max possible score
    const maxScore = quiz.questions.reduce((total, question) => {
        if (question.type === QuestionType.MULTI) {
            // For multi-select, add 1 point for each correct answer
            return total + (question.correctAnswerIndex as number[]).length;
        }
        // For single-select, add 1 point
        return total + 1;
    }, 0);

    // Check for existing submission
    useEffect(() => {
        const checkExistingSubmission = async () => {
            try {
                const userSettings = getUserSettings();
                const response = await fetch(`/api/quizStatus?uuid=${userSettings.uuid}&quizId=${quiz.id}`);
                const data = await response.json();

                if (data[quiz.id]) {
                    setExistingSubmission(data[quiz.id]);
                    // Initialize state with existing submission
                    dispatch({ type: 'LOAD_SUBMISSION', payload: data[quiz.id] });
                }
            } catch (error) {
                console.error('Error checking quiz submission:', error);
            } finally {
                // Add a 3 second delay before showing content
                setIsLoading(false);
            }
        };

        checkExistingSubmission();
    }, [quiz.id]);

    // Initialize confetti on client side
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setConfetti(new JSConfetti());
        }
    }, []);

    // Trigger confetti when quiz is completed with perfect score
    useEffect(() => {
        if (state.quizCompleted && state.score === maxScore && confetti) {
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
    }, [state.quizCompleted, state.score, maxScore, confetti]);

    useEffect(() => {
        if (quiz.questions.length === 1) {
            dispatch({ type: 'FINAL_QUESTION' });
        }
    }, []);

    useEffect(() => {
        const submitQuiz = async () => {
            const userSettings = getUserSettings();

            try {
                const response = await fetch('/api/quizSubmit', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        uuid: userSettings.uuid,
                        quizId: quiz.id,
                        score: state.score,
                        selectedOptions: state.selections
                    })
                });

                if (!response.ok) {
                    throw new Error('Failed to submit quiz');
                }
            } catch (error) {
                console.error('Error submitting quiz:', error);
            }
        };
        if (state.quizCompleted && !state.existingSubmission) { submitQuiz(); }
    }, [state.quizCompleted]);

    const handleBackClick = () => {
        router.push('/');
    };

    const handleOptionClick = (index: number) => {
        const currentQuestion = quiz.questions[state.currentQuestionIndex];

        if (currentQuestion.type === QuestionType.MULTI) {
            dispatch({ type: 'TOGGLE_MULTI_OPTION', payload: index });
        } else {

            dispatch({ type: 'TOGGLE_OPTION', payload: index });


            //dispatch({ type: 'SHOW_EXPLANATION' });
        }
    };

    const handleQuestionSubmitClick = async () => {
        const currentQuestion = quiz.questions[state.currentQuestionIndex];
        const currentSelection = state.selectedOptionIndex;
        if (currentSelection) {
            switch (currentQuestion.type) {
                case QuestionType.MULTI:
                    // For multiselect questions, validate and score here
                    if (Array.isArray(currentSelection) && Array.isArray(currentQuestion.correctAnswerIndex)) {
                        let score = 0;
                        // Add points for correct selections
                        currentSelection.forEach(selection => {
                            if (currentQuestion.correctAnswerIndex.includes(selection)) {
                                score++;
                            } else {
                                score--;
                            }
                        });
                        // Ensure score doesn't go below 0
                        score = Math.max(0, score);

                        dispatch({ type: 'INCREMENT_SCORE', payload: score });

                    }
                    dispatch({ type: 'SELECT_OPTION', payload: currentSelection });
                    break;
                default:
                    dispatch({ type: 'SELECT_OPTION', payload: currentSelection });
                    if (currentSelection.every(i => (currentQuestion.correctAnswerIndex as number[]).includes(i))) {
                        dispatch({ type: 'INCREMENT_SCORE' });
                    }
                    break;
            }
        }
        dispatch({ type: 'QUESTION_SUBMIT' });
        dispatch({ type: 'SHOW_EXPLANATION' });
    };

    const handleNextClick = () => {
        if (state.finalQuestion) {
            dispatch({ type: 'COMPLETE_QUIZ' });
        } else {
            dispatch({ type: 'NEXT_QUESTION' });
            if (state.currentQuestionIndex === quiz.questions.length - 2) {
                dispatch({ type: 'FINAL_QUESTION' });
            }
        }
    };

    // Show loading state
    if (isLoading) {
        return <QuizLoadingSkeleton />;
    }

    const progressPercentage = ((state.currentQuestionIndex + 1) / quiz.questions.length) * 100;

    const toggleExplanation = (questionIndex: number) => {
        setVisibleExplanations(prev => {
            const newSet = new Set(prev);
            if (newSet.has(questionIndex)) {
                newSet.delete(questionIndex);
            } else {
                newSet.add(questionIndex);
            }
            return newSet;
        });
    };

    if (state.quizCompleted && state.selections.length === quiz.questions.length) {
        return (
            <div className="flex flex-col items-center py-10 relative w-full overflow-hidden">
                <div className="w-full max-w-[90rem] mx-auto">
                    <div className="w-full mb-4 px-4">
                        <button
                            className="flex items-center text-white hover:text-gray-200 font-medium"
                            onClick={handleBackClick}
                        >
                            <span className="mr-1 text-lg">&#8592;</span> Back to Home
                        </button>
                    </div>

                    {/* Desktop view: Grid layout */}
                    <div className="hidden md:grid md:grid-cols-2 gap-6 px-4">
                        {/* Quiz Results Card */}
                        <div className="bg-gray-50 dark:bg-gray-800 dark:bg-opacity-90 rounded-lg shadow-md p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
                                    Quiz Completed!
                                </h2>
                                <ShareQuiz
                                    quiz={quiz}
                                    selections={state.selections}
                                    score={state.score}
                                    uuid={getUserSettings().uuid}
                                />
                            </div>
                            <p className="text-xl mb-6 text-gray-800 dark:text-gray-100">
                                Your score: <span className="font-semibold">{state.score}</span> out of{' '}
                                <span className="font-semibold">{maxScore}</span>
                                {state.score === maxScore ? (
                                    <span className="block mt-2 text-green-500">
                                        🎉 Perfect Score! MashAllah! 🎉
                                    </span>
                                ) : (
                                    <span className="block mt-2 text-lg">
                                        🎉 Alhamdulillah! You learned something new today!
                                    </span>
                                )}
                            </p>
                            {quiz.questions.map((q, index) => {
                                const userSelection = state.selections[index];
                                const isExplanationVisible = visibleExplanations.has(index);
                                const isMultiSelect = q.type === QuestionType.MULTI;

                                return (
                                    <div key={index} className="mb-6">
                                        <p className="text-lg mb-2 text-gray-800 dark:text-gray-100 whitespace-pre-line">
                                            <strong>Question {index + 1}:</strong> {q.question}
                                        </p>
                                        <ul className="space-y-2">
                                            {q.options.map((option, optIndex) => {
                                                const isSelected = isMultiSelect
                                                    ? (userSelection as number[])?.includes(optIndex)
                                                    : userSelection.includes(optIndex);
                                                const isCorrect = (q.correctAnswerIndex as number[]).includes(optIndex)

                                                return (
                                                    <QuizOption
                                                        key={optIndex}
                                                        option={option}
                                                        index={optIndex}
                                                        isSelected={isSelected}
                                                        isCorrect={isCorrect}
                                                        showResult={true}
                                                        isMultiSelect={isMultiSelect}
                                                        onSelect={() => { }}
                                                    />
                                                );
                                            })}
                                        </ul>
                                        <button
                                            onClick={() => toggleExplanation(index)}
                                            className="mt-2 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                                        >
                                            {isExplanationVisible ? 'Hide Explanation' : 'Show Explanation'}
                                        </button>
                                        {isExplanationVisible && (
                                            <div className="mt-2">
                                                <h3 className="text-md font-semibold mb-1 text-gray-800 dark:text-gray-100">
                                                    Explanation:
                                                </h3>
                                                <p className="text-gray-800 dark:text-gray-100 whitespace-pre-line">{q.explanation}</p>
                                            </div>
                                        )}
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

                        {/* Friends Leaderboard - Desktop */}
                        <div className="relative">
                            <FriendsLeaderboard
                                isOpen={true}
                                onClose={() => setIsFriendsOpen(!isFriendsOpen)}
                                inQuizCompletion={true}
                                currentQuizId={quiz.id}
                            />
                        </div>
                    </div>

                    {/* Mobile view: Horizontal scroll */}
                    <div className="md:hidden flex flex-nowrap overflow-x-auto snap-x snap-mandatory">
                        {/* Quiz Results Card - Mobile */}
                        <div className="flex-none w-[95%] snap-center px-4">
                            <div className="bg-gray-50 dark:bg-gray-800 dark:bg-opacity-90 rounded-lg shadow-md p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
                                        Quiz Completed!
                                    </h2>
                                    <ShareQuiz
                                        quiz={quiz}
                                        selections={state.selections}
                                        score={state.score}
                                        uuid={getUserSettings().uuid}
                                    />
                                </div>
                                <p className="text-xl mb-6 text-gray-800 dark:text-gray-100">
                                    Your score: <span className="font-semibold">{state.score}</span> out of{' '}
                                    <span className="font-semibold">{maxScore}</span>
                                    {state.score === maxScore ? (
                                        <span className="block mt-2 text-green-500">
                                            🎉 Perfect Score! MashAllah! 🎉
                                        </span>
                                    ) : (
                                        <span className="block mt-2 text-lg">
                                            🎉 Alhamdulillah! You learned something new today!
                                        </span>
                                    )}
                                </p>
                                {quiz.questions.map((q, index) => {
                                    const userSelection = state.selections[index];
                                    const isExplanationVisible = visibleExplanations.has(index);
                                    const isMultiSelect = q.type === QuestionType.MULTI;

                                    return (
                                        <div key={index} className="mb-6">
                                            <p className="text-lg mb-2 text-gray-800 dark:text-gray-100 whitespace-pre-line">
                                                <strong>Question {index + 1}:</strong> {q.question}
                                            </p>
                                            <ul className="space-y-2">
                                                {q.options.map((option, optIndex) => {
                                                    const isSelected = isMultiSelect
                                                        ? (userSelection as number[])?.includes(optIndex)
                                                        : userSelection.includes(optIndex);
                                                    const isCorrect = (q.correctAnswerIndex as number[]).includes(optIndex)

                                                    return (
                                                        <QuizOption
                                                            key={optIndex}
                                                            option={option}
                                                            index={optIndex}
                                                            isSelected={isSelected}
                                                            isCorrect={isCorrect}
                                                            showResult={true}
                                                            isMultiSelect={isMultiSelect}
                                                            onSelect={() => { }}
                                                        />
                                                    );
                                                })}
                                            </ul>
                                            <button
                                                onClick={() => toggleExplanation(index)}
                                                className="mt-2 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                                            >
                                                {isExplanationVisible ? 'Hide Explanation' : 'Show Explanation'}
                                            </button>
                                            {isExplanationVisible && (
                                                <div className="mt-2">
                                                    <h3 className="text-md font-semibold mb-1 text-gray-800 dark:text-gray-100">
                                                        Explanation:
                                                    </h3>
                                                    <p className="text-gray-800 dark:text-gray-100 whitespace-pre-line">{q.explanation}</p>
                                                </div>
                                            )}
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

                        {/* Friends Leaderboard - Mobile */}
                        <div className="flex-none w-[93%] snap-center pr-8">
                            <FriendsLeaderboard
                                isOpen={true}
                                onClose={() => setIsFriendsOpen(!isFriendsOpen)}
                                inQuizCompletion={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const currentQuestion = quiz.questions[state.currentQuestionIndex];
    const isMultiSelect = currentQuestion.type === QuestionType.MULTI;
    const hasSelection = state.selectedOptionIndex.length > 0;

    return (
        <div className="flex flex-col items-center py-10">
            <div className="w-full max-w-2xl px-4 mx-auto">
                <div className="w-full mb-4">
                    <button
                        className="flex items-center text-white hover:text-gray-200 font-medium"
                        onClick={handleBackClick}
                    >
                        <span className="mr-1 text-lg">&#8592;</span> Back to Home
                    </button>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 dark:bg-opacity-90 rounded-lg shadow-md p-6">
                    <div className="flex items-center mb-4">
                        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
                            Question {state.currentQuestionIndex + 1} of {quiz.questions.length}
                        </h2>
                    </div>

                    <ProgressBar progress={progressPercentage} />

                    <p className="text-lg mb-6 text-gray-800 dark:text-gray-100 whitespace-pre-line">
                        {currentQuestion.question}
                        {isMultiSelect && (
                            <span className="block text-sm text-blue-500 mt-2">
                                Select all that apply
                            </span>
                        )}
                    </p>

                    <ul className="space-y-4">
                        {currentQuestion.options.map((option, index) => {
                            const isSelected = (isMultiSelect
                                ? state.selectedOptionIndex.includes(index)
                                : state.selectedOptionIndex.includes(index)) || false;

                            return (
                                <QuizOption
                                    key={index}
                                    option={option}
                                    index={index}
                                    isSelected={isSelected}
                                    isCorrect={(currentQuestion.correctAnswerIndex as number[]).includes(index)}
                                    showResult={state.questionSubmitted}
                                    isMultiSelect={isMultiSelect}
                                    onSelect={handleOptionClick}
                                />
                            );
                        })}
                    </ul>
                    {hasSelection && !state.questionSubmitted && (
                        <button
                            className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
                            onClick={handleQuestionSubmitClick}
                        >
                            Submit Question
                        </button>
                    )}

                    {state.questionSubmitted && (
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
        </div>
    );
}
