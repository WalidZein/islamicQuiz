'use client';

import { useState } from 'react';
import QuizGrid from '@/app/components/QuizGrid';
import HomeHeaderServer from '@/app/components/HomeHeaderServer';
import SeasonBanner from '@/app/components/SeasonBanner';
import { seasons } from '@/data/seasons';

interface QuizStatus {
    completed: boolean;
    score: number;
    selections: number[];
    submissionDate: string;
}

export default function Home() {
    // Initialize with the active season, or the first season if none are active
    const [selectedSeasonId, setSelectedSeasonId] = useState<number>(
        () => seasons.find(season => season.isActive)?.id || seasons[0].id
    );
    const [mostRecentQuizAtTop, setMostRecentQuizAtTop] = useState<boolean>(true);
    const selectedSeason = seasons.find(season => season.id === selectedSeasonId);

    const handleSeasonChange = (seasonId: number) => {
        setSelectedSeasonId(seasonId);
        if (seasonId === seasons.find(season => season.isActive)?.id) {
            setMostRecentQuizAtTop(true);
        } else {
            setMostRecentQuizAtTop(false);
        }
    };

    return (
        <div className="flex flex-col items-center py-10">
            <HomeHeaderServer />
            <SeasonBanner
                seasons={seasons}
                selectedSeasonId={selectedSeasonId}
                onSeasonChange={handleSeasonChange}
                startQuizNum={selectedSeason?.startQuizNum}
                endQuizNum={selectedSeason?.endQuizNum}
            />
            <QuizGrid seasonId={selectedSeasonId} mostRecentQuizAtTop={mostRecentQuizAtTop} />
        </div>
    );
}
