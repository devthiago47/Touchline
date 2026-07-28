import type { Club } from "./club";

export interface Career {
  id: string;

  managerName: string;

  club: Club;

  currentSeason: number;

  trophies: Trophy[];
}

export interface Trophy {
  competitionName: string;

  amount: number;
}