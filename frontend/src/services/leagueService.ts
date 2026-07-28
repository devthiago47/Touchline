import { leagues } from "../data/leagues";

export const leagueService = {
  async getAll() {
    return Promise.resolve(leagues);
  },

  async getById(id: string) {
    return Promise.resolve(
      leagues.find((league) => league.id === id)
    );
  },
};