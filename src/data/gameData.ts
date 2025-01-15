import { ConnectionsGameConfig, ConnectionsGameData } from "@/types/connections";

/**
 * Sample connections games data
 * Each game is released at 13:00 UTC on its specified date
 */
export const CONNECTIONS_GAMES: ConnectionsGameConfig[] = [
  {
    id: "1",
    releaseTime: "2025-01-13T13:00:00Z",
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
        category: "Angels",
        words: ["Israfil", "Azrael", "Jibril", "Malik Al-Mawt"],
        difficulty: "Hard" as const,
      },
      {
        category: "Rivers in Paradise",
        words: ["Kawthar", "Kafur", "Tasnim", "Salsabil"],
        difficulty: "Very Hard" as const,
      },
    ],
  },
  {
    id: "2",
    releaseTime: "2025-01-14T13:00:00Z",
    groups: [
      {
        category: "Islamic Practices",
        words: ["Salah", "Zakat", "Hajj", "Sadaqah"],
        difficulty: "Easy" as const,
      },
      {
        category: "Islamic Months",
        words: ["Ramadan", "Shawwal", "Jumada", "Dhul-Hijjah"],
        difficulty: "Medium" as const,
      },
      {
        category: "Things you do in Ramadan",
        words: ["Sawm", "Suhoor", "Iftar", "Taraweeh"],
        difficulty: "Hard" as const,
      },
      {
        category: "Significant Islamic Days",
        words: ["Eid al-Fitr", "Eid al-Adha", "Laylat al-Qadr", "Ashura"],
        difficulty: "Very Hard" as const,
      },
    ],
  },
  {
    id: "3",
    releaseTime: "2025-01-15T13:00:00Z",
    groups: [
      {
        category: "Foods Mentioned in the Quran",
        words: ["Dates", "Olives", "Honey", "Grapes"],
        difficulty: "Easy" as const,
      },
      {
        category: "Names of the Prophet Muhammad",
        words: ["Muhammad", "Ahmad", "Mahmoud", "Mustafa"],
        difficulty: "Medium" as const,
      },
      {
        category: "Battles in Islam",
        words: ["Badr", "Uhud", "Khandaq", "Hunayn"],
        difficulty: "Hard" as const,
      },
      {
        category: "Islamic Scholars",
        words: ["Bukhari", "Abu Hanifa", "Al-Ghazali", "Ibn Taymiyyah"],
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
