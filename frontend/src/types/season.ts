import type { Round } from "./round";

export interface Season {
  year: number;

  rounds: Round[];
}