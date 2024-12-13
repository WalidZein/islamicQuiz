import { Season } from '@/data/seasons';
import { getCurrentSeason } from '@/utils/seasonUtils';
import { Card } from '@/app/components/ui/card';

interface SeasonBannerProps {
    seasons: Season[];
    currentQuizNumber?: number;
    totalQuizzes?: number;
    time?: string;
}

const SeasonBanner = ({ seasons, time, currentQuizNumber = 30, totalQuizzes = 100 }: SeasonBannerProps) => {
    const currentSeason = getCurrentSeason(seasons, time || "");

    return (
        <div className="w-full flex justify-center mb-8">
            <Card className="bg-opacity-20 backdrop-blur-sm bg-white/5 border-0 shadow-lg">
                <div className="px-6 py-3 flex items-center justify-center gap-3">
                    <div className="flex items-center gap-2">
                        {currentSeason ? <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" /> : <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />}
                        <span className="text-white/90 text-sm md:text-lg font-medium">{currentSeason ? currentSeason.name : "New Season Coming Soon!"}</span>
                    </div>
                    {currentSeason && <span className="text-white/50 text-xs">•</span>}
                    {currentSeason && <span className="text-white/70 text-sm md:text-lg">Quiz {currentQuizNumber} - {totalQuizzes}</span>}
                </div>
            </Card>
        </div>
    );
};

export default SeasonBanner; 