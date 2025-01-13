import { v4 as uuidv4 } from "uuid";
import { UserSettings, LeaderboardEntry } from "@/types/leaderboard";
import { QuizStatus } from "@/types/quiz";
import { ConnectionsGroupData } from "@/types/connections";

const USER_SETTINGS_KEY = "userSettings";
const CONNECTIONS_SELECTIONS_KEY = "connectionsSelections";

let cachedLeaderboardData: LeaderboardEntry[] | null = null;

export function setCachedLeaderboardData(data: LeaderboardEntry[]) {
  cachedLeaderboardData = data;
}

export async function getNameFromLeaderboard(uuid: string): Promise<string | null> {
  // First try cache
  if (cachedLeaderboardData) {
    const entry = cachedLeaderboardData.find((entry) => entry.uuid === uuid);
    if (entry?.name) return entry.name;
  }

  // Fallback to database
  try {
    const response = await fetch(`/api/leaderboard?uuid=${uuid}`);
    if (!response.ok) return null;
    const userData = await response.json();
    return userData.name || null;
  } catch (error) {
    console.error("Error fetching user from database:", error);
    return null;
  }
}

export function getUserSettings(): UserSettings {
  if (typeof window === "undefined") {
    return createNewSettings();
  }

  const stored = localStorage.getItem(USER_SETTINGS_KEY);
  if (stored) {
    return JSON.parse(stored);
  }

  // Create new user settings
  const newSettings = createNewSettings();
  localStorage.setItem(USER_SETTINGS_KEY, JSON.stringify(newSettings));
  return newSettings;
}

function createNewSettings(): UserSettings {
  return {
    uuid: uuidv4(),
  };
}

export function updateUserSettings(settings: Partial<UserSettings>): UserSettings {
  const current = getUserSettings();
  const updated = { ...current, ...settings };
  localStorage.setItem(USER_SETTINGS_KEY, JSON.stringify(updated));
  return updated;
}

interface QuizStatusMap {
  [quizId: string]: QuizStatus;
}

export function getQuizStatus(): QuizStatusMap {
  if (typeof window === "undefined") return {};

  try {
    const quizStatusStr = localStorage.getItem("quizStatus");
    if (!quizStatusStr) return {};

    const quizStatus = JSON.parse(quizStatusStr) as QuizStatusMap;
    return quizStatus;
  } catch (error) {
    console.error("Error reading quiz status:", error);
    return {};
  }
}

/**
 * Saves user's selections for a connections game to local storage
 * @param gameId - The ID of the connections game
 * @param attempts - Array of word arrays representing user's attempts
 */
export function saveUserSelections(gameId: string, attempts: string[][]): void {
  if (typeof window === "undefined") return;

  try {
    const stored = localStorage.getItem(CONNECTIONS_SELECTIONS_KEY);
    const data = stored ? JSON.parse(stored) : {};

    data[gameId] = {
      attempts,
      lastUpdated: new Date().toISOString(),
    };

    localStorage.setItem(CONNECTIONS_SELECTIONS_KEY, JSON.stringify(data));
  } catch (error) {
    console.error("Error saving connections selections:", error);
  }
}

/**
 * Loads user's selections for a connections game from local storage
 * @param gameId - The ID of the connections game
 * @returns Array of attempts (each attempt is an array of words) or null if no selections found
 */
export function loadUserSelections(gameId: string): string[][] | null {
  if (typeof window === "undefined") return null;

  try {
    const stored = localStorage.getItem(CONNECTIONS_SELECTIONS_KEY);
    if (!stored) return null;

    const data = JSON.parse(stored);
    return data[gameId]?.attempts || null;
  } catch (error) {
    console.error("Error loading connections selections:", error);
    return null;
  }
}

/**
 * Clears user's selections for a specific game from local storage
 * @param gameId - The ID of the connections game
 */
export function clearUserSelections(gameId: string): void {
  if (typeof window === "undefined") return;

  try {
    const stored = localStorage.getItem(CONNECTIONS_SELECTIONS_KEY);
    if (!stored) return;

    const data = JSON.parse(stored);
    delete data[gameId];
    localStorage.setItem(CONNECTIONS_SELECTIONS_KEY, JSON.stringify(data));
  } catch (error) {
    console.error("Error clearing connections selections:", error);
  }
}

/**
 * Reconstructs game state from attempts history
 * @param attempts - Array of attempts
 * @param groups - Game groups configuration
 * @returns Reconstructed game state
 */
export function reconstructGameState(
  attempts: string[][],
  groups: ConnectionsGroupData[]
): {
  solvedGroups: ConnectionsGroupData[];
  strikes: number;
} {
  const solvedGroups: ConnectionsGroupData[] = [];
  let strikes = 0;

  attempts.forEach((attempt) => {
    // Check if this attempt matches any unsolved group
    const matchedGroup = groups.find((group) => !solvedGroups.includes(group) && attempt.length === group.words.length && attempt.every((word) => group.words.includes(word)));

    if (matchedGroup) {
      solvedGroups.push(matchedGroup);
    } else {
      strikes++;
    }
  });

  return {
    solvedGroups,
    strikes,
  };
}
