import Link from 'next/link';
import { Quiz } from '@/types/quiz';

interface QuizCardProps {
    quiz: Quiz;
    status?: {
        completed: boolean;
        score: number;
    };
    className?: string;
}

export default function QuizCard({ quiz, status, className = '' }: QuizCardProps) {
    const isCompleted = status?.completed;
    const gotAllRight = status?.score === quiz.questions.length;
    const morethan50per = (status?.score || 0) / quiz.questions.length > 0.5;

    let cardClasses =
        'w-24 h-24 md:w-32 md:h-32 flex flex-col items-center justify-center rounded-lg transition-shadow duration-300 ';

    if (isCompleted) {
        if (gotAllRight) {
            cardClasses += 'bg-green-500 text-white cursor-pointer hover:shadow-lg';
        } else if (morethan50per) {
            cardClasses += 'bg-yellow-500 text-white cursor-pointer hover:shadow-lg';
        } else {
            cardClasses += 'bg-red-500 text-white cursor-pointer hover:shadow-lg';
        }
    } else {
        cardClasses +=
            'bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-100 border border-gray-300 dark:border-gray-700 cursor-pointer hover:shadow-lg';
    }

    return (
        <Link href={`/quiz/${quiz.id}`}>
            <div className={`${cardClasses} ${className}`}>
                <span className="text-2xl font-semibold">Quiz {quiz.id}</span>
            </div>
        </Link>
    );
} 