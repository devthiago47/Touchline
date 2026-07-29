import type { Club } from "@/types/club";
import type { Fixture } from "@/types/fixtures";
import type { Round } from "@/types/round";
import { shuffle } from "@/utils/shuffle";


export const calendarService = {

    generateLeagueRounds(
        clubs: Club[],
        competitionId: string
    ): Round[] {

        const teams = shuffle(clubs);

        // adiciona clube fantasma se quantidade for ímpar
        if (teams.length % 2 !== 0) {
            teams.push({
                id: "bye",
                name: "Folga",
                shortName: "BYE",
                country: "",
                stadium: "",
                squad: [],
                budget: 0,
                overall: 0,
            });
        }


        const rounds: Round[] = [];

        const totalRounds = teams.length - 1;

        const matchesPerRound = teams.length / 2;


        for (let round = 0; round < totalRounds; round++) {

            const fixtures: Fixture[] = [];


            for (let match = 0; match < matchesPerRound; match++) {

                let home = teams[match];

                let away = teams[teams.length - 1 - match];


                if (Math.random() > 0.5) {
                    [home, away] = [away, home];
                }


                if (
                    home.id !== "bye" &&
                    away.id !== "bye"
                ) {

                    fixtures.push({

                        id: crypto.randomUUID(),

                        competitionId,

                        round: round + 1,

                        homeClubId: home.id,

                        awayClubId: away.id,

                        played: false,

                        homeGoals: null,

                        awayGoals: null,

                        date: round + 1,

                    });


                    console.log(
                        "CRIANDO JOGO:",
                        home.name,
                        "x",
                        away.name
                    );

                }

            }


            rounds.push({

                number: round + 1,

                fixtures,

            });


            const last = teams.pop();

            if (last) {

                teams.splice(1, 0, last);

            }

        }


        return rounds;

    },

};