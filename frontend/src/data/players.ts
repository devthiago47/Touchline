import type { Player } from "../types/player";

export const players: Player[] = [
  {
    id: "player_001",
    name: "Pedro",
    age: 27,
    nationality: "Brasil",
    mainPosition: "ST",
    secondaryPositions: ["LW"],
    overall: 82,
    marketValue: 25000000,
  },

  {
    id: "player_002",
    name: "Arrascaeta",
    age: 31,
    nationality: "Uruguai",
    mainPosition: "AM",
    secondaryPositions: ["CM"],
    overall: 84,
    marketValue: 30000000,
  },

  {
    id: "player_003",
    name: "Gerson",
    age: 28,
    nationality: "Brasil",
    mainPosition: "CM",
    secondaryPositions: ["DM"],
    overall: 82,
    marketValue: 28000000,
  },

  {
    id: "player_004",
    name: "Wesley",
    age: 22,
    nationality: "Brasil",
    mainPosition: "RB",
    secondaryPositions: ["RW"],
    overall: 76,
    marketValue: 12000000,
  },

  {
    id: "player_005",
    name: "Fabrício",
    age: 24,
    nationality: "Brasil",
    mainPosition: "CB",
    secondaryPositions: [],
    overall: 78,
    marketValue: 15000000,
  },
];