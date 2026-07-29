import { leagues } from "../data/leagues";

export const leagueService = {
  async getAll() {
    return Promise.resolve(leagues);
  },

  getAllSync() {
    return leagues;
  },

  async getById(id: string) {
    return Promise.resolve(
      leagues.find((league) => league.id === id)
    );
  },

  getByIdSync(id: string) {
    return leagues.find((league) => league.id === id);
  },
};