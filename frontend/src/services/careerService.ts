import type { Career } from "@/types/career";
import type { CreateCareerData } from "@/types/createCareer";

import { clubService } from "./clubService";

let currentCareer: Career | null = null;

export const careerService = {
  getCurrent() {
    return currentCareer;
  },

  create(data: CreateCareerData) {
    const club = clubService.getById(data.clubId);

    if (!club) {
      throw new Error("Clube não encontrado.");
    }

    currentCareer = {
      id: crypto.randomUUID(),

      managerName: data.managerName,

      clubId: data.clubId,

      currentSeason: 2026,

      trophies: [],

      createdAt: new Date(),
    };

    return currentCareer;
  },

  clear() {
    currentCareer = null;
  },
};