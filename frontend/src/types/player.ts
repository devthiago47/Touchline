export interface Player {
  id: string;

  name: string;

  age: number;

  nationality: string;

  mainPosition: PlayerPosition;

  secondaryPositions: PlayerPosition[];

  overall: number;

  marketValue: number;
}

export type PlayerPosition =
  | "GK"
  | "LB"
  | "RB"
  | "CB"
  | "DM"
  | "CM"
  | "AM"
  | "LW"
  | "RW"
  | "ST";