import type { Fixture } from "./fixtures";

export interface Round {
  number: number;

  fixtures: Fixture[];
}