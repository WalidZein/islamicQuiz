'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import quizzes from '../data/quizzes';
import { Quiz } from '@/types/quiz';
import { getUserSettings } from '@/utils/userManager';
import QuizCard from '@/app/components/QuizCard';

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
  const [userStreak, setUserStreak] = useState(0);

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

  const userSettings = getUserSettings();

  return (
    <div className="flex flex-col items-center py-10">
      <div className="w-full max-w-2xl text-center mb-8">
        <h1 className="text-4xl font-extrabold">Islamic Quiz</h1>
        <p className="mt-2 text-lg sm:text-sm">
          Test your knowledge with our daily quizzes on Islam.
        </p>
        <div className="mt-4 flex flex-col items-center gap-2">
          <p className="text-xl font-semibold">
            🔥 {userStreak}
          </p>
        </div>
      </div>

      {/* Latest Quiz - only show if not completed */}
      {availableQuizzes.length > 0 && (
        <>
          {!completedQuizzes[availableQuizzes[availableQuizzes.length - 1].id]?.completed && (
            <div className="mb-8">
              <QuizCard
                quiz={availableQuizzes[availableQuizzes.length - 1]}
                status={completedQuizzes[availableQuizzes[availableQuizzes.length - 1].id]}
                className="w-32 h-32 md:w-40 md:h-40 !text-3xl"
              />
            </div>
          )}
        </>
      )}

      {/* All Quizzes Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {availableQuizzes.map((quiz: Quiz, index: number) => {
          // Skip the latest quiz if it's not completed (since it's shown above)
          if (
            index === availableQuizzes.length - 1 &&
            !completedQuizzes[quiz.id]?.completed
          ) {
            return null;
          }

          return (
            <QuizCard
              key={quiz.id}
              quiz={quiz}
              status={completedQuizzes[quiz.id]}
            />
          );
        })}
      </div>
    </div>
  );
}
