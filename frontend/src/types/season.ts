import type { Round } from "./round";

export interface Season {
  year: number;

  currentRound: number;

  rounds: Round[];
}