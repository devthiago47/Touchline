import type { League } from "../types/league";
import { clubs } from "./clubs";

export const leagues: League[] = [
  {
    id: "league_brazil_a",

    name: "Brasileirão Série A",

    country: "Brasil",

    clubs: [
      clubs[0],
      clubs[1],
      clubs[2],
    ],

    numberOfTeams: 20,
  },

  {
    id: "league_spain_a",

    name: "La Liga",

    country: "Espanha",

    clubs: [
      clubs[3],
      clubs[4],
    ],

    numberOfTeams: 20,
  },
];