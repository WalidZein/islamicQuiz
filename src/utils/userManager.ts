import { v4 as uuidv4 } from "uuid";
import { UserSettings } from "@/types/leaderboard";

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
