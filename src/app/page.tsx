'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import quizzes from '../data/quizzes';
import { Quiz } from '@/types/quiz';
import { getUserSettings } from '@/utils/userManager';
import QuizCard from '@/app/components/QuizCard';
import AnnouncementPopup from '@/app/components/AnnouncementPopup';
import { isQuizLocked } from '@/utils/quizUtils';
import { UserStats } from "@/utils/userDataStore";

interface QuizStatus {
  completed: boolean;
  score: number;
  selections: number[];
  submissionDate: string;
}

export default function Home() {
  const [completedQuizzes, setCompletedQuizzes] = useState<{ [key: number]: QuizStatus }>({});
  const [isClient, setIsClient] = useState(false);
  const [serverTime, setServerTime] = useState<string | null>(null);
  const [availableQuizzes, setAvailableQuizzes] = useState<Quiz[]>([]);
  const [userStreak, setUserStreak] = useState(0);
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const [userData, setUserData] = useState<UserStats | null>(null);

  useEffect(() => {
    const initializePage = async () => {


      // Get server time
      const timeResponse = await fetch('/api/time');
      const { currentTime } = await timeResponse.json();
      setServerTime(currentTime);

      // Load completed quizzes from API
      const userSettings = getUserSettings();
      const quizStatusResponse = await fetch(`/api/quizStatus?uuid=${userSettings.uuid}`);
      const quizStatuses = await quizStatusResponse.json();
      setCompletedQuizzes(quizStatuses);

      // Filter available quizzes based on server time
      const serverDate = new Date(currentTime);
      const filtered = quizzes.filter(quiz => {
        if (!quiz.released) return false;
        const releaseTime = new Date(quiz.timeOfRelease);
        return serverDate >= releaseTime;
      });
      setAvailableQuizzes(filtered);

      // Check if announcement has been dismissed
      const announcementDismissed = localStorage.getItem('season2AnnouncementDismissed');
      if (announcementDismissed) {
        setShowAnnouncement(false);
      }
      setIsClient(true);
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
    fetch(`/api/leaderboard?uuid=${userSettings.uuid}`)
      .then(res => res.json())
      .then(data => {
        if (data && data.currentStreak) {
          setUserStreak(data.currentStreak);
        }
      })
      .catch(console.error);
  }, []);

  const handleCloseAnnouncement = () => {
    setShowAnnouncement(false);
    localStorage.setItem('season2AnnouncementDismissed', 'true');
  };

  const handleCtaClick = () => {
    window.open('https://chat.whatsapp.com/EzuGKEk8JFYCttCttg1YtG', '_blank');
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const userSettings = getUserSettings();
      try {
        const response = await fetch(`/api/user-data?userId=${userSettings.uuid}`);
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
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
      {showAnnouncement && (
        <AnnouncementPopup
          title="Season 2 in Development"
          onClose={handleCloseAnnouncement}
          ctaText="Join WhatsApp Community"
          onCtaClick={handleCtaClick}
        >
          <div className="space-y-4">
            <p>
              We're excited to announce that Season 2 of Islamic Quiz is currently in development!
              Get ready for new questions, improved features, and an even better learning experience. Quizzes will resume in a week!
            </p>
            <p>
              Join our WhatsApp community to stay updated on the latest developments, provide feedback,
              and connect with fellow learners.
            </p>
          </div>
        </AnnouncementPopup>
      )}

      <div className="w-full max-w-2xl text-center mb-8">
        <h1 className="text-4xl font-extrabold">Islamic Quiz</h1>
        <p className="mt-2 text-lg sm:text-sm">
          Test your knowledge with our daily quizzes on Islam.
        </p>

        {/* New Survey Links */}
        <div className="mt-2 flex justify-center gap-2 text-sm">
          <a
            href="https://locrian-gate-d75.notion.site/141a930e096c80dea710f6ac60ae6487?pvs=105"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-gray-400 "
          >
            🔗 Feedback & Ideas
          </a>
          <span className="text-gray-400">•</span>
          <a
            href="https://locrian-gate-d75.notion.site/141a930e096c80b1aa9ad1c466f4d4a5?pvs=105"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-gray-400"
          >
            🔗 Submit Questions
          </a>
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
                locked={false}
              />
            </div>
          )}
        </>
      )}

      {/* All Quizzes Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {availableQuizzes.map((quiz: Quiz) => (
          <QuizCard
            key={quiz.id}
            quiz={quiz}
            status={completedQuizzes[quiz.id]}
            locked={isQuizLocked(
              quiz,
              completedQuizzes[quiz.id]?.completed,
              userData,
              !userData // Force lock if userData hasn't loaded yet
            )}
          />
        ))}
      </div>
    </div>
  );
}
