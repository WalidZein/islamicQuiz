import { v4 as uuidv4 } from "uuid";
import { UserSettings, LeaderboardEntry } from "@/types/leaderboard";
import { QuizStatus } from "@/types/quiz";

const USER_SETTINGS_KEY = "userSettings";

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
