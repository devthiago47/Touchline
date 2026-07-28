import type { Club } from "../types/club";
import { players } from "./players";

export const clubs: Club[] = [
  {
    id: "club_flamengo",

    name: "Flamengo",

    shortName: "FLA",

    country: "Brasil",

    stadium: "Maracanã",

    squad: [
      players[0],
      players[1],
      players[2],
      players[3],
      players[4],
    ],

    budget: 50000000,

    overall: 84,
  },

  {
    id: "club_palmeiras",

    name: "Palmeiras",

    shortName: "PAL",

    country: "Brasil",

    stadium: "Allianz Parque",

    squad: [],

    budget: 45000000,

    overall: 83,
  },

  {
    id: "club_real_madrid",

    name: "Real Madrid",

    shortName: "RMA",

    country: "Espanha",

    stadium: "Santiago Bernabéu",

    squad: [],

    budget: 150000000,

    overall: 95,
  },
];