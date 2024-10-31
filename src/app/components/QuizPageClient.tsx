// components/QuizPageClient.tsx

'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Quiz, Question } from '../data/quizzes';

interface QuizStatus {
    completed: boolean;
    score: number;
    selections: number[];
}

interface QuizPageClientProps {
    quiz: Quiz;
}

export default function QuizPageClient({ quiz }: QuizPageClientProps) {
    const router = useRouter();

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
    const [showExplanation, setShowExplanation] = useState<boolean>(false);
    const [score, setScore] = useState<number>(0);
    const [quizCompleted, setQuizCompleted] = useState<boolean>(false);
    const [selections, setSelections] = useState<number[]>([]);

    useEffect(() => {
        // Load previous selections if they exist
        const storedData = JSON.parse(localStorage.getItem('quizStatus') || '{}') as {
            [key: number]: QuizStatus;
        };
        const quizStatus = storedData[quiz.id];

        if (quizStatus && quizStatus.completed) {
            setSelections(quizStatus.selections);
            setScore(quizStatus.score);
            setQuizCompleted(true);
        }
    }, [quiz.id]);

    useEffect(() => {
        if (quizCompleted) {
            if (typeof window !== 'undefined') {
                const storedData = JSON.parse(localStorage.getItem('quizStatus') || '{}') as {
                    [key: number]: QuizStatus;
                };
                storedData[quiz.id] = {
                    completed: true,
                    score: score,
                    selections: selections,
                };
                localStorage.setItem('quizStatus', JSON.stringify(storedData));
            }
        }
    }, [quizCompleted, quiz.id, score, selections]);

    const handleBackClick = () => {
        router.push('/');
    };

    const question: Question = quiz.questions[currentQuestionIndex];

    const handleOptionClick = (index: number) => {
        if (selectedOptionIndex !== null) return; // Prevent re-selection
        setSelectedOptionIndex(index);
        setSelections([...selections, index]);

        if (index === question.correctAnswerIndex) {
            setScore(score + 1);
        }
    };

    const handleNextClick = () => {
        if (!showExplanation) {
            setShowExplanation(true);
        } else {
            setShowExplanation(false);
            setSelectedOptionIndex(null);
            if (currentQuestionIndex + 1 < quiz.questions.length) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
            } else {
                setQuizCompleted(true);
            }
        }
    };

    const progressPercentage = ((currentQuestionIndex + 1) / quiz.questions.length) * 100;

    const ProgressBar = ({ progress }: { progress: number }) => {
        return (
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-4">
                <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
            </div>
        );
    };

    if (quizCompleted && selections.length === quiz.questions.length) {
        // Display the completed quiz with previous selections
        return (
            <div className="flex flex-col items-center py-10">
                {/* Back Button */}
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
                        Your score: <span className="font-semibold">{score}</span> out of{' '}
                        <span className="font-semibold">{quiz.questions.length}</span>
                    </p>
                    {quiz.questions.map((q, index: number) => {
                        const userSelection = selections[index];
                        const isCorrect = userSelection === q.correctAnswerIndex;
                        return (
                            <div key={index} className="mb-6">
                                <p className="text-lg mb-2 text-gray-800 dark:text-gray-100">
                                    <strong>Question {index + 1}:</strong> {q.question}
                                </p>
                                <ul className="space-y-2">
                                    {q.options.map((option, optIndex: number) => {
                                        let optionClasses =
                                            'w-full p-4 text-left rounded-md transition-colors duration-300';

                                        if (optIndex === q.correctAnswerIndex) {
                                            optionClasses += ' bg-green-500 text-white';
                                        } else if (optIndex === userSelection) {
                                            optionClasses += ' bg-red-500 text-white';
                                        } else {
                                            optionClasses +=
                                                ' bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100';
                                        }

                                        return (
                                            <li key={optIndex} className={optionClasses}>
                                                {option}
                                            </li>
                                        );
                                    })}
                                </ul>
                                <div className="mt-2">
                                    <h3 className="text-md font-semibold mb-1 text-gray-800 dark:text-gray-100">
                                        Explanation:
                                    </h3>
                                    <p className="text-gray-800 dark:text-gray-100">{q.explanation}</p>
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

    return (
        <div className="flex flex-col items-center py-10">
            {/* Back Button */}
            <div className="w-full max-w-2xl mb-4">
                <button
                    className="flex items-center text-white hover:text-gray-200 font-medium"
                    onClick={handleBackClick}
                >
                    <span className="mr-1 text-lg">&#8592;</span> Back to Home
                </button>
            </div>

            <div className="w-full max-w-2xl bg-white dark:bg-gray-800 dark:bg-opacity-90 rounded-lg shadow-md p-6">
                {/* Title with Icon */}
                <div className="flex items-center mb-4">
                    <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
                        Question {currentQuestionIndex + 1} of {quiz.questions.length}
                    </h2>
                </div>

                {/* Progress Bar */}
                <ProgressBar progress={progressPercentage} />

                <p className="text-lg mb-6 text-gray-800 dark:text-gray-100">{question.question}</p>
                <ul className="space-y-4">
                    {question.options.map((option, index: number) => {
                        const isSelected = selectedOptionIndex === index;
                        const isCorrect = index === question.correctAnswerIndex;
                        let optionClasses =
                            'w-full p-4 text-left rounded-md cursor-pointer transition-colors duration-300';

                        if (selectedOptionIndex === null) {
                            optionClasses +=
                                ' bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-100';
                        } else if (isCorrect) {
                            optionClasses += ' bg-green-500 text-white';
                        } else if (isSelected) {
                            optionClasses += ' bg-red-500 text-white';
                        } else {
                            optionClasses += ' bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100';
                        }

                        return (
                            <li
                                key={index}
                                className={optionClasses}
                                onClick={() => handleOptionClick(index)}
                            >
                                {option}
                            </li>
                        );
                    })}
                </ul>
                {selectedOptionIndex !== null && (
                    <button
                        className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
                        onClick={handleNextClick}
                    >
                        {showExplanation ? 'Next Question' : 'Show Explanation'}
                    </button>
                )}
                {showExplanation && (
                    <div className="mt-6 bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-400 dark:border-blue-600 p-4">
                        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
                            Explanation:
                        </h3>
                        <p className="text-gray-800 dark:text-gray-100">{question.explanation}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
