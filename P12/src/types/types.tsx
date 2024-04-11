export type User = {
  id: number;
  userInfos: {
    firstName: string;
    lastName: string;
    age: number;
  };
  score?: number;
  todayScore?: number;
  keyData: Counts;
};

export type Counts = {
  calorieCount: number;
  proteinCount: number;
  carbohydrateCount: number;
  lipidCount: number;
};

export type UserActivity = {
  userId: number;
  sessions: UserSession[];
};
export type UserSession = {
  day: string;
  kilogram: number;
  calories: number;
};

export type UserPerformance = {
  userId: number;
  kind: {
    1: PerformanceKind;
    2: PerformanceKind;
    3: PerformanceKind;
    4: PerformanceKind;
    5: PerformanceKind;
    6: PerformanceKind;
  };
  data: PerformanceValue[];
};
export type PerformanceValue = {
  value: number;
  kind: number;
};

export type PerformanceKind =
  | "cardio"
  | "energy"
  | "endurance"
  | "strength"
  | "speed"
  | "intensity";

export type UserAverageSessions = {
  userId: number;
  sessions: AverageSessions[];
};
export type AverageSessions = {
  day: number;
  sessionLength: number;
};
