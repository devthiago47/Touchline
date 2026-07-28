import type { Club } from "./club";

export interface League {
  id: string;

  name: string;

  country: string;

  clubs: Club[];

  numberOfTeams: number;
}