import { v4 as uuidv4 } from "uuid";
import { UserSettings } from "@/types/leaderboard";
import { QuizStatus } from "@/types/quiz";

const USER_SETTINGS_KEY = "userSettings";

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
    name: null,
    optIn: false,
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

export async function syncCachedScores() {
  const userSettings = getUserSettings();

  // Skip if already synced
  if (userSettings.hasSyncedCachedScores) return;

  try {
    const quizStatus = getQuizStatus();

    // Calculate total score from all completed quizzes
    const cachedScores = Object.values(quizStatus).reduce((total, status) => {
      if (status.completed) {
        return total + (status.score || 0);
      }
      return total;
    }, 0);

    if (cachedScores > 0) {
      try {
        await fetch("/api/leaderboard/update", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            uuid: userSettings.uuid,
            name: userSettings.name,
            score: cachedScores,
            optIn: userSettings.optIn,
            isQuizSubmission: false,
            syncingCachedScores: true,
          }),
        });
      } catch (error) {
        console.error("Failed to sync cached scores:", error);
      }
    }

    // Mark as synced regardless of the outcome
    updateUserSettings({
      ...userSettings,
      hasSyncedCachedScores: true,
    });
  } catch (error) {
    console.error("Error syncing cached scores:", error);
    // Still mark as synced to prevent repeated attempts
    updateUserSettings({
      ...userSettings,
      hasSyncedCachedScores: true,
    });
  }
}
