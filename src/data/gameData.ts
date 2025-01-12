import { ConnectionsGameConfig, ConnectionsGameData } from "@/types/connections";

/**
 * Sample connections games data
 * Each game is released at 13:00 UTC on its specified date
 */
export const CONNECTIONS_GAMES: ConnectionsGameConfig[] = [
  {
    id: "1",
    releaseTime: "2025-01-09T13:00:00Z",
    groups: [
      {
        category: "Prophets mentioned in Quran",
        words: ["Ibrahim", "Musa", "Isa", "Yusuf"],
        difficulty: "Easy" as const,
      },
      {
        category: "Islamic Months",
        words: ["Ramadan", "Shawwal", "Rajab", "Muharram"],
        difficulty: "Medium" as const,
      },
      {
        category: "Pillars of Islam",
        words: ["Shahada", "Salah", "Zakat", "Sawm"],
        difficulty: "Hard" as const,
      },
      {
        category: "Books of Allah",
        words: ["Quran", "Injeel", "Tawrat", "Zabur"],
        difficulty: "Very Hard" as const,
      },
    ],
  },
  // Add more games here...
];

/**
 * Returns the most recent game that has been released
 */
export function getCurrentGame(): ConnectionsGameConfig | null {
  const now = new Date();
  return CONNECTIONS_GAMES.filter((game) => new Date(game.releaseTime) <= now).sort((a, b) => new Date(b.releaseTime).getTime() - new Date(a.releaseTime).getTime())[0] || null;
}

/**
 * Returns a specific game by ID
 */
export function getGameById(id: string): ConnectionsGameConfig | null {
  return CONNECTIONS_GAMES.find((game) => game.id === id) || null;
}
