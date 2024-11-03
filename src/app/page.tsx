'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import quizzes, { Quiz } from '../data/quizzes';

interface QuizStatus {
  completed: boolean;
  score: number;
  selections: number[];
}

export default function Home() {
  const [completedQuizzes, setCompletedQuizzes] = useState<{ [key: number]: QuizStatus }>({});
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const storedData = JSON.parse(localStorage.getItem('quizStatus') || '{}');
    setCompletedQuizzes(storedData);
  }, []);

  // Don't render quiz status until client-side hydration is complete
  if (!isClient) {
    return (
      <div className="flex flex-col items-center py-10">
        <div className="w-full max-w-2xl text-center mb-8">
          <h1 className="text-4xl font-extrabold">Islamic Quiz</h1>
          <p className="mt-2 text-lg">
            Test your knowledge with our daily quizzes on Islam.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quizzes.map((quiz: Quiz) => (
            <Link href={`/quiz/${quiz.id}`} key={quiz.id}>
              <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center rounded-lg cursor-pointer hover:shadow-lg transition-shadow duration-300 bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-100 border border-gray-300 dark:border-gray-700">
                <span className="text-2xl font-semibold">Quiz {quiz.id}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center py-10">
      <div className="w-full max-w-2xl text-center mb-8">
        <h1 className="text-4xl font-extrabold">Islamic Quiz</h1>
        <p className="mt-2 text-lg">
          Test your knowledge with our daily quizzes on Islam.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {quizzes.map((quiz: Quiz) => {
          const quizStatus = completedQuizzes[quiz.id];
          const isCompleted = quizStatus?.completed;
          const gotAllRight = isCompleted && quizStatus?.score === quiz.questions.length;

          let cardClasses =
            'w-24 h-24 md:w-32 md:h-32 flex items-center justify-center rounded-lg cursor-pointer hover:shadow-lg transition-shadow duration-300 ';

          if (gotAllRight) {
            cardClasses += 'bg-green-500 text-white';
          } else if (isCompleted) {
            cardClasses += 'bg-red-500 text-white';
          } else {
            cardClasses +=
              'bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-100 border border-gray-300 dark:border-gray-700';
          }

          return (
            <Link href={`/quiz/${quiz.id}`} key={quiz.id}>
              <div className={cardClasses}>
                <span className="text-2xl font-semibold">Quiz {quiz.id}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
