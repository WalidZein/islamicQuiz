import { promises as fs } from "fs";
import path from "path";
import { setTimeout } from "timers/promises";

export interface UserStats {
  shareClicks: number;
  inviteCount: number;
}

export interface UserStatsData {
  [uuid: string]: UserStats;
}

export class UserDataStore {
  private static instance: UserDataStore;
  private readonly statsPath: string;
  private isWriting = false;
  private readCount = 0;

  private constructor() {
    this.statsPath = path.join(process.cwd(), "src/data/userData.json");
  }

  static getInstance(): UserDataStore {
    if (!UserDataStore.instance) {
      UserDataStore.instance = new UserDataStore();
    }
    return UserDataStore.instance;
  }

  async ensureStatsFile() {
    try {
      await fs.access(this.statsPath);
    } catch {
      await fs.mkdir(path.dirname(this.statsPath), { recursive: true });
      await fs.writeFile(this.statsPath, "{}");
    }
  }

  async safeRead(): Promise<UserStatsData> {
    while (this.isWriting) {
      await setTimeout(100);
    }

    this.readCount++;
    try {
      const fileContent = await fs.readFile(this.statsPath, "utf-8");
      return JSON.parse(fileContent);
    } finally {
      this.readCount--;
    }
  }

  async safeWrite(data: UserStatsData): Promise<void> {
    while (this.isWriting || this.readCount > 0) {
      await setTimeout(100);
    }

    this.isWriting = true;
    try {
      await fs.writeFile(this.statsPath, JSON.stringify(data, null, 2));
    } finally {
      this.isWriting = false;
    }
  }

  async getUserData(userId: string): Promise<UserStats> {
    const data = await this.safeRead();
    return data[userId] || { shareCount: 0, inviteCount: 0 };
  }

  async updateUserData(userId: string, updates: Partial<UserStats>): Promise<UserStats> {
    const data = await this.safeRead();

    if (!data[userId]) {
      data[userId] = { shareClicks: 0, inviteCount: 0 };
    }

    if (updates.shareClicks) {
      data[userId].shareClicks += updates.shareClicks;
    }
    if (updates.inviteCount) {
      data[userId].inviteCount += updates.inviteCount;
    }

    await this.safeWrite(data);
    return data[userId];
  }
}
