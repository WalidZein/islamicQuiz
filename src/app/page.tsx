'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import quizzes from '../data/quizzes';
import { Quiz } from '@/types/quiz';

interface QuizStatus {
  completed: boolean;
  score: number;
  selections: number[];
}

export default function Home() {
  const [completedQuizzes, setCompletedQuizzes] = useState<{ [key: number]: QuizStatus }>({});
  const [isClient, setIsClient] = useState(false);
  const [serverTime, setServerTime] = useState<string | null>(null);
  const [availableQuizzes, setAvailableQuizzes] = useState<Quiz[]>([]);

  useEffect(() => {
    const initializePage = async () => {
      setIsClient(true);

      // Get server time
      const timeResponse = await fetch('/api/time');
      const { currentTime } = await timeResponse.json();
      setServerTime(currentTime);

      // Load completed quizzes from localStorage
      const storedData = JSON.parse(localStorage.getItem('quizStatus') || '{}');
      setCompletedQuizzes(storedData);

      // Filter available quizzes based on server time
      const serverDate = new Date(currentTime);
      const filtered = quizzes.filter(quiz => {
        if (!quiz.released) return false;
        const releaseTime = new Date(quiz.timeOfRelease);
        return serverDate >= releaseTime;
      });
      setAvailableQuizzes(filtered);
    };

    initializePage();

    // Refresh server time every minute
    const timer = setInterval(async () => {
      const timeResponse = await fetch('/api/time');
      const { currentTime } = await timeResponse.json();
      setServerTime(currentTime);
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  // Don't render quiz status until client-side hydration is complete
  if (!isClient || !serverTime) {
    return (
      <div className="flex flex-col items-center py-10">
        <div className="w-full max-w-2xl text-center mb-8">
          <h1 className="text-4xl font-extrabold">Islamic Quiz</h1>
          <p className="mt-2 text-lg">
            Test your knowledge with our daily quizzes on Islam.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Loading state */}
          {[1, 2, 3, 4].map((placeholder) => (
            <div
              key={placeholder}
              className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center rounded-lg bg-gray-200 dark:bg-gray-700 animate-pulse"
            />
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
        {availableQuizzes.map((quiz: Quiz) => {
          const quizStatus = completedQuizzes[quiz.id];
          const isCompleted = quizStatus?.completed;
          const gotAllRight = isCompleted && quizStatus?.score === quiz.questions.length;

          let cardClasses =
            'w-24 h-24 md:w-32 md:h-32 flex flex-col items-center justify-center rounded-lg transition-shadow duration-300 ';

          if (gotAllRight) {
            cardClasses += 'bg-green-500 text-white cursor-pointer hover:shadow-lg';
          } else if (isCompleted) {
            cardClasses += 'bg-red-500 text-white cursor-pointer hover:shadow-lg';
          } else {
            cardClasses +=
              'bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-100 border border-gray-300 dark:border-gray-700 cursor-pointer hover:shadow-lg';
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
