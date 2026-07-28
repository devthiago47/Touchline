import { clubs } from "../data/clubs";

export const clubService = {
  getAll() {
    return clubs;
  },

  getById(id: string) {
    return clubs.find(club => club.id === id);
  },
};