import { Flame } from 'lucide-react';

interface StreakTooltipProps {
    show: boolean;
}

export default function StreakTooltip({ show }: StreakTooltipProps) {
    if (!show) return null;

    return (
        <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 
            bg-gradient-to-br from-blue-600 to-blue-700
            text-white px-4 py-3 rounded-xl shadow-lg text-sm w-52 z-10
            border border-blue-400/20 backdrop-blur-sm
            animate-in fade-in slide-in-from-top-2 duration-200
            after:content-[''] after:absolute after:left-1/2 after:-top-2
            after:w-4 after:h-4 after:bg-blue-600 after:rotate-45
            after:-translate-x-1/2 after:-z-10"
        >
            <p className="font-medium mb-2 text-center">Daily Streak</p>
            <div className="flex items-start gap-2 text-center">
                <p className="text-blue-100 text-xs leading-relaxed">
                    Complete a quiz each day to keep your streak growing!
                </p>
            </div>
        </div>
    );
} 