'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import quizzes from '../data/quizzes';
import { Quiz } from '@/types/quiz';
import { getUserSettings } from '@/utils/userManager';

interface QuizStatus {
  completed: boolean;
  score: number;
  selections: number[];
}

export default function Home() {
  const [completedQuizzes, setCompletedQuizzes] = useState<{ [key: number]: QuizStatus }>({});
  const [isClient, setIsClient] = useState(false);
  const [userStreak, setUserStreak] = useState(0);

  useEffect(() => {
    setIsClient(true);
    const storedData = JSON.parse(localStorage.getItem('quizStatus') || '{}');
    setCompletedQuizzes(storedData);
  }, []);

  useEffect(() => {
    const userSettings = getUserSettings();
    fetch(`/api/leaderboard/update?uuid=${userSettings.uuid}`)
      .then(res => res.json())
      .then(data => {
        if (data && data.currentStreak) {
          setUserStreak(data.currentStreak);
        }
      })
      .catch(console.error);
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

  const userSettings = getUserSettings();

  return (
    <div className="flex flex-col items-center py-10">
      <div className="w-full max-w-2xl text-center mb-8">
        <h1 className="text-4xl font-extrabold">Islamic Quiz</h1>
        <p className="mt-2 text-lg">
          Test your knowledge with our daily quizzes on Islam.
        </p>
        <div className="mt-4 flex flex-col items-center gap-2">
          {userStreak > 0 && (
            <p className="text-lg font-semibold">
              🔥 {userStreak}
            </p>
          )}
          <Link
            href="/leaderboard"
            className="inline-block px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            View Leaderboard
          </Link>
        </div>
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
