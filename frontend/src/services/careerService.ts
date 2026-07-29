import type { Career } from "@/types/career";
import type { CreateCareerData } from "@/types/createCareer";

import { clubService } from "./clubService";
import { leagueService } from "./leagueService";
import { calendarService } from "./calendarService";


let currentCareer: Career | null = null;


export const careerService = {


  create(data: CreateCareerData): Career {


    const club = clubService.getById(
      data.clubId
    );


    if (!club) {

      throw new Error(
        "Clube não encontrado"
      );

    }



    const league = leagueService.getByIdSync(
      data.leagueId
    );


    if (!league) {

      throw new Error(
        "Liga não encontrada"
      );

    }



    const rounds =
      calendarService.generateLeagueRounds(
        league.clubs,
        league.id
      );
      
      console.log("CALENDÁRIO GERADO:", rounds);


    const career: Career = {


      id: crypto.randomUUID(),


      managerName:
        data.managerName,


      clubId:
        club.id,


      trophies: [],



      currentSeason: {

        year: 2026,

        rounds,

      },



      createdAt:
        new Date(),

    };



    currentCareer = career;


    return career;

  },



  getCurrent() {

    return currentCareer;

  },

};