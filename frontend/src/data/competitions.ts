import type { Competition } from "../types/competition";
import { clubs } from "./clubs";

export const competitions: Competition[] = [
  {
    id: "competition_brazil_league",

    name: "Brasileirão Série A",

    country: "Brasil",

    type: "LEAGUE",

    format: "ROUND_ROBIN",

    participatingClubs: [
      clubs[0],
      clubs[1],
    ],
  },

  {
    id: "competition_brazil_cup",

    name: "Copa do Brasil",

    country: "Brasil",

    type: "CUP",

    format: "KNOCKOUT",

    participatingClubs: [
      clubs[0],
      clubs[1],
    ],
  },

  {
    id: "competition_champions",

    name: "Champions League",

    type: "CONTINENTAL",

    format: "GROUP_STAGE",

    participatingClubs: [
      clubs[2],
    ],
  },
];