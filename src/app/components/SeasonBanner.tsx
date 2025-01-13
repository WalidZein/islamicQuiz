'use client';

import { Season } from '@/data/seasons';
import { Card } from '@/app/components/ui/card';

interface SeasonBannerProps {
    seasons: Season[];
    startQuizNum?: number;
    endQuizNum?: number;
    selectedSeasonId: number;
    onSeasonChange: (seasonId: number) => void;
}

const SeasonBanner = ({
    seasons,
    startQuizNum = 30,
    endQuizNum = 100,
    selectedSeasonId,
    onSeasonChange
}: SeasonBannerProps) => {
    const selectedSeason = seasons.find(season => season.id === selectedSeasonId);

    return (
        <div className="w-full flex justify-center mb-8">
            <Card className="bg-opacity-20 backdrop-blur-sm bg-white/5 border-0 shadow-lg">
                <div className="px-6 py-3 flex items-center justify-center gap-3">
                    <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 ${selectedSeason?.isActive ? 'bg-emerald-400' : 'bg-red-400'} rounded-full animate-pulse`} />
                        <div className="relative inline-block">
                            <select
                                value={selectedSeasonId}
                                onChange={(e) => onSeasonChange(Number(e.target.value))}
                                className="appearance-none bg-transparent text-white/90 text-sm md:text-lg font-medium pr-8 focus:outline-none cursor-pointer"
                            >
                                {seasons.map((season) => (
                                    <option
                                        key={season.id}
                                        value={season.id}
                                        className="bg-gray-900 text-white/90"
                                    >
                                        {season.name}
                                    </option>
                                ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white/90">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <span className="text-white/70 text-sm md:text-lg">Quiz {startQuizNum} - {endQuizNum}</span>
                </div>
            </Card>
        </div>
    );
};

export default SeasonBanner; 