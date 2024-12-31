'use client';

import { QuestionType, Quiz } from '@/types/quiz';
import { shareContent, trackShare } from '@/utils/shareUtils';

interface ShareQuizProps {
    quiz: Quiz;
    selections: (number[])[];
    score: number;
    uuid: string;
}

export function ShareQuiz({ quiz, selections, score, uuid }: ShareQuizProps) {
    const generateShareText = () => {
        const quizNumber = quiz.id;
        const totalQuestions = quiz.questions.length;

        // Create emoji results (✅ for correct, ❌ for incorrect)
        const resultEmojis = quiz.questions.map((question, index) => {
            const selection = selections[index];

            const selectedAnswers = selection;
            const correctAnswers = question.correctAnswerIndex;
            if (selectedAnswers.length === correctAnswers.length &&
                selectedAnswers.every(i => correctAnswers.includes(i))) {
                return '✅';
            } else if (selectedAnswers.some(i => correctAnswers.includes(i))) {
                return '🟨';
            } else {
                return '❌';
            }

        }).join('');

        return `Quiz ${quizNumber}  - ${score}/${totalQuestions}\n${resultEmojis}`;
    };

    const handleShare = async () => {
        const shareText = generateShareText();

        const shareSuccess = await shareContent({ text: shareText });

        if (shareSuccess) {
            await trackShare(uuid, "quiz");
        }
    };

    return (
        <button
            onClick={handleShare}
            className="inline-flex items-center justify-center p-1 sm:p-2 px-2 sm:px-3 rounded-full text-white hover:bg-blue-600 dark:text-white transition-colors duration-300 bg-blue-500"
            title="Share results"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 sm:w-6 sm:h-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                />
            </svg>
            <p className="ml-1 sm:ml-2 text-sm sm:text-base">Share</p>
        </button>
    );
} 