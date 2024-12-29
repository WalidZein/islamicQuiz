import Link from 'next/link';
import { Quiz } from '@/types/quiz';
import { useState } from 'react';
import LockOverlay from './LockOverlay';
import { LockClosedIcon } from '@heroicons/react/24/solid';
interface QuizCardProps {
    quiz: Quiz;
    status?: {
        completed: boolean;
        score: number;
    };
    className?: string;
    locked: boolean;
    setLocked?: (quizId: number, locked: boolean) => void;
}

export default function QuizCard({ quiz, status, className = '', locked, setLocked }: QuizCardProps) {
    const [showLockOverlay, setShowLockOverlay] = useState(false);
    const isCompleted = status?.completed;
    const gotAllRight = status?.score === quiz.questions.length;
    const morethan50per = (status?.score || 0) / quiz.questions.length > 0.5;

    let cardClasses =
        'relative w-24 h-24 md:w-32 md:h-32 flex flex-col items-center justify-center rounded-lg transition-shadow duration-300 ';

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

    const handleClick = (e: React.MouseEvent) => {
        if (locked) {
            e.preventDefault();
            setShowLockOverlay(true);
        }
    };

    const CardContent = () => (
        <div
            onClick={handleClick}
            className={`${cardClasses} ${className}`}
        >
            <span className="md:text-2xl text-xl font-semibold">Quiz {quiz.id}</span>

            {locked && (
                <div className="absolute bottom-2 left-2">
                    <LockClosedIcon className=" w-3 h-3 md:w-5 md:h-5 text-gray-600 dark:text-gray-400" />
                </div>
            )}
        </div>
    );

    return (
        <>
            {locked ? (
                <CardContent />
            ) : (
                <Link href={`/quiz/${quiz.id}`}>
                    <CardContent />
                </Link>
            )}

            <LockOverlay
                isOpen={showLockOverlay}
                onClose={(success) => {

                    if (success) {
                        setTimeout(() => {
                            setLocked?.(quiz.id, false);
                        }, 5000);
                    }
                    setShowLockOverlay(false);
                }}
            />
        </>
    );
} 