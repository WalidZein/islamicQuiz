'use client';
import quizzes from "@/data/quizzes";
import { User } from "@/types/leaderboard";
import { QuizStatus } from "@/types/quiz";
import { seasons } from '@/data/seasons';
import { getQuizzesBySeason } from "@/utils/seasonUtils";
import { Quiz } from "@/types/quiz";
import { getCurrentSeason } from "@/utils/seasonUtils";
import { getUserSettings } from "@/utils/userManager";

import { useEffect, useState } from "react";
import AnnouncementPopup from "./AnnouncementPopup";
import QuizCard from "./QuizCard";
import { isQuizLocked } from "@/utils/quizUtils";

export default function QuizGrid() {
    const [completedQuizzes, setCompletedQuizzes] = useState<{ [key: number]: QuizStatus }>({});
    const [serverTime, setServerTime] = useState<string | null>(null);
    const [availableQuizzes, setAvailableQuizzes] = useState<Quiz[]>([]);
    const [showAnnouncement, setShowAnnouncement] = useState(false);
    const [userData, setUserData] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [lockStatePerQuiz, setLockStatePerQuiz] = useState<{ [key: number]: boolean }>({});

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


            const seasonQuizzes = getQuizzesBySeason(quizzes, getCurrentSeason(seasons, currentTime || "")?.id || -1);
            // Filter available quizzes based on server time
            const serverDate = new Date(currentTime);
            const filtered = seasonQuizzes.filter((quiz: Quiz) => {
                if (!quiz.released) return false;
                const releaseTime = new Date(quiz.timeOfRelease);
                return serverDate >= releaseTime;
            });
            setAvailableQuizzes(filtered);

            // Check if announcement has been dismissed
            const announcementDismissed = localStorage.getItem('season2AnnouncementDismissed');
            if (!announcementDismissed) {
                setShowAnnouncement(true);
            }
            setIsLoading(false);
        };

        initializePage();

    }, []);

    useEffect(() => {
        const userSettings = getUserSettings();
        fetch(`/api/leaderboard?uuid=${userSettings.uuid}`)
            .then(res => res.json())
            .then(data => {
                if (data && data.uuid) {
                    setUserData(data);
                }
            })
            .catch(console.error);
    }, []);

    useEffect(() => {
        setLockStatePerQuiz(availableQuizzes.reduce((acc, quiz: Quiz) => ({
            ...acc,
            [quiz.id]: isQuizLocked(quiz, availableQuizzes, completedQuizzes[quiz.id]?.completed, userData, false)
        }), {}));
    }, [availableQuizzes, completedQuizzes, userData]);

    const SetLockedQuizState = (quizId: number, locked: boolean) => {
        setLockStatePerQuiz(() => {
            const newState: Record<number, boolean> = {};
            availableQuizzes.forEach((quiz) => {
                newState[quiz.id] = locked;
            });
            return newState;
        });
    };

    const handleCloseAnnouncement = () => {
        setShowAnnouncement(false);
        localStorage.setItem('season2AnnouncementDismissed', 'true');
    };

    const handleCtaClick = () => {
        window.open('https://chat.whatsapp.com/EzuGKEk8JFYCttCttg1YtG', '_blank');
    };

    return (
        <>
            {/* {showAnnouncement && (
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
            )} */}
            {isLoading && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[1, 2, 3, 4].map((placeholder) => (
                        <div key={placeholder} className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center rounded-lg bg-gray-200 dark:bg-gray-700 animate-pulse" />
                    ))}
                </div>
            )}
            {/* Latest Quiz - only show if not completed */}
            {availableQuizzes.length > 0 && !isLoading && (
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
                        locked={lockStatePerQuiz[quiz.id]}
                        setLocked={SetLockedQuizState}
                    />
                ))}
            </div>
        </>
    )


}