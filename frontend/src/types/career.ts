import type { Season } from "./season";

export interface Career {
  id: string;

  managerName: string;

  clubId: string;

  trophies: string[];

  currentSeason: Season;

  createdAt: Date;
}