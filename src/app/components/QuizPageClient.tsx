// components/QuizPageClient.tsx

'use client';

import { useRouter } from 'next/navigation';
import { Quiz } from '../../types/quiz';
import { useQuizStatus } from '../../hooks/useQuizStatus';
import { ProgressBar } from './ProgressBar';
import { QuizOption } from './QuizOption';

interface QuizPageClientProps {
    quiz: Quiz;
}

export default function QuizPageClient({ quiz }: QuizPageClientProps) {
    const router = useRouter();
    const { state, dispatch } = useQuizStatus(quiz);

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
        if (!state.showExplanation) {
            dispatch({ type: 'SHOW_EXPLANATION' });
        } else {
            if (state.currentQuestionIndex + 1 < quiz.questions.length) {
                dispatch({ type: 'NEXT_QUESTION' });
            } else {
                dispatch({ type: 'COMPLETE_QUIZ' });
            }
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
                    </p>
                    {quiz.questions.map((q, index) => {
                        const userSelection = state.selections[index];
                        return (
                            <div key={index} className="mb-6">
                                <p className="text-lg mb-2 text-gray-800 dark:text-gray-100">
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

                <p className="text-lg mb-6 text-gray-800 dark:text-gray-100">
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
                        {state.showExplanation ? 'Next Question' : 'Show Explanation'}
                    </button>
                )}

                {state.showExplanation && (
                    <div className="mt-6 bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-400 dark:border-blue-600 p-4">
                        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
                            Explanation:
                        </h3>
                        <p className="text-gray-800 dark:text-gray-100">
                            {currentQuestion.explanation}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
