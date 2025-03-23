'use client';
import { ConnectionsGameConfig } from '@/types/connections';
import { getUserSettings } from '@/utils/userManager';
import { useEffect, useState } from 'react';
import ConnectionsCard from './ConnectionsCard';

interface ConnectionsGridProps {
    mostRecentAtTop?: boolean;
}

interface GameStatus {
    completed: boolean;
    strikes: number;
}

/**
 * Grid component for displaying available Connections games
 */
export default function ConnectionsGrid({ mostRecentAtTop = true }: ConnectionsGridProps) {
    const [games, setGames] = useState<ConnectionsGameConfig[]>([]);
    const [gameStatuses, setGameStatuses] = useState<Record<string, GameStatus>>({});
    const [currentGameId, setCurrentGameId] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadGames = async () => {
            try {
                // Get all released games
                const gamesResponse = await fetch('/api/connections/getAllGames');
                if (gamesResponse.ok) {
                    const allGames = await gamesResponse.json();
                    setGames(allGames);

                    if (allGames.length > 0) {
                        // Set the current/latest game ID (first game in the sorted list)
                        setCurrentGameId(allGames[0].id);
                    }
                }

                // Get user's submissions for all games
                const userSettings = getUserSettings();
                const userSubmissionsResponse = await fetch(`/api/connections/loadAllUserSubmissions?userId=${userSettings.uuid}`);
                if (userSubmissionsResponse.ok) {
                    const submissions = await userSubmissionsResponse.json();
                    const statusMap: Record<string, GameStatus> = {};

                    submissions.forEach((sub: any) => {
                        statusMap[sub.gameId] = {
                            completed: sub.completed,
                            strikes: sub.strikes
                        };
                    });

                    setGameStatuses(statusMap);
                }
            } catch (error) {
                console.error('Error loading connections games:', error);
            } finally {
                setIsLoading(false);
            }
        };

        loadGames();
    }, []);

    // Show loading skeleton while data is being fetched
    if (isLoading) {
        return (
            <div className="flex flex-col items-center">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center mx-auto">
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

    // Empty state when no games are available
    if (games.length === 0) {
        return (
            <div className="text-center p-8">
                <h3 className="text-xl font-semibold mb-2">No Connections Games Available</h3>
                <p>Check back soon for new connections puzzles!</p>
            </div>
        );
    }

    // Make a copy of games array to avoid modifying the original
    const displayGames = [...games];

    return (
        <div className="flex flex-col items-center">
            {/* All Games Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center mx-auto">
                {displayGames.map((game) => (
                    <ConnectionsCard
                        key={game.id}
                        game={game}
                        status={gameStatuses[game.id]}
                    />
                ))}
            </div>
        </div>
    );
} 