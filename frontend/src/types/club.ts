import type { Player } from "./player";

export interface Club {
  id: string;

  name: string;

  shortName: string;

  country: string;

  stadium: string;

  squad: Player[];

  budget: number;

  overall: number;
}