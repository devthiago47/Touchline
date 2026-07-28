import { players } from "../data/players";

export const playerService = {
  getAll() {
    return players;
  },

  getById(id: string) {
    return players.find(player => player.id === id);
  },
};