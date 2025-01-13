export interface Season {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  isActive: boolean;
  startQuizNum: number;
  endQuizNum: number;
}

export const seasons: Season[] = [
  {
    id: 1,
    name: "Season 1",
    startDate: "2024-11-03T00:00:00Z",
    endDate: "2024-12-02T23:59:59Z",
    isActive: false,
    startQuizNum: 1,
    endQuizNum: 30,
  },
  {
    id: 2,
    name: "Season 2",
    startDate: "2024-12-14T13:00:00Z",
    endDate: "2025-08-31T23:59:59Z",
    isActive: false,
    startQuizNum: 31,
    endQuizNum: 60,
  },
];
