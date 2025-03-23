import Link from 'next/link';
import { ConnectionsGameConfig } from '@/types/connections';
import { LockClosedIcon } from '@heroicons/react/24/solid';
import { useMemo } from 'react';

interface ConnectionsCardProps {
    game: ConnectionsGameConfig;
    status?: {
        completed: boolean;
        strikes: number;
    };
    className?: string;
    locked?: boolean;
}

/**
 * Card component for displaying a Connections game in a grid.
 * Colors indicate the status of the game:
 * - Gray: Not played
 * - Yellow: Started but not completed
 * - Green: Completed
 */
export default function ConnectionsCard({ game, status, className = '', locked = false }: ConnectionsCardProps) {
    // Format the release date (e.g., "Jun 12")
    const formattedDate = useMemo(() => {
        const date = new Date(game.releaseTime);
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }, [game.releaseTime]);

    let cardClasses =
        'relative w-24 h-24 md:w-32 md:h-32 flex flex-col items-center justify-center rounded-lg transition-shadow duration-300 ';

    if (status?.completed) {
        // Completed game - green
        cardClasses += 'bg-green-500 text-white cursor-pointer hover:shadow-lg';
    } else if (status && !status.completed) {
        // Started but not completed - yellow
        cardClasses += 'bg-yellow-500 text-white cursor-pointer hover:shadow-lg';
    } else {
        // Not played - gray/default
        cardClasses +=
            'bg-gray-50 text-gray-800 dark:bg-gray-800 dark:text-gray-100 border border-gray-300 dark:border-gray-700 cursor-pointer hover:shadow-lg';
    }

    const CardContent = () => (
        <div className={`${cardClasses} ${className}`}>
            <span className="text-sm font-medium mb-1">{formattedDate}</span>
            <span className="md:text-lg text-base font-semibold">Game {game.id}</span>

            {locked && (
                <div className="absolute bottom-2 left-2">
                    <LockClosedIcon className="w-3 h-3 md:w-5 md:h-5 text-gray-600 dark:text-gray-400" />
                </div>
            )}
        </div>
    );

    if (locked) {
        return <CardContent />;
    }

    return (
        <Link href={`/connections/${game.id}`}>
            <CardContent />
        </Link>
    );
} 