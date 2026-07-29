import type { Season } from "@/types/season";

export const matchdayService = {

  getCurrentRound(season: Season) {

    return season.rounds.find(
      round => round.number === season.currentRound
    );

  },


  advanceRound(season: Season) {

    if (
      season.currentRound < season.rounds.length
    ) {

      season.currentRound++;

    }

    return season;

  },

};