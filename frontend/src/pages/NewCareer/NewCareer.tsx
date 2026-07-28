import { useEffect, useState } from "react";

import { leagueService } from "../../services/leagueService";

import type { League } from "../../types/league";

import ClubCard from "@/components/ClubCard/ClubCard";

import { useNavigate } from "react-router-dom";

import { careerService } from "@/services/careerService";


export default function NewCareer() {

  const [leagues, setLeagues] = useState<League[]>([]);

  const [currentLeagueIndex, setCurrentLeagueIndex] = useState(0);

  const [currentClubIndex, setCurrentClubIndex] = useState(0);

  const navigate = useNavigate();


  useEffect(() => {

    async function loadLeagues() {

      const data = await leagueService.getAll();

      setLeagues(data);

    }

    loadLeagues();

  }, []);



  const currentLeague = leagues[currentLeagueIndex];

  const currentClub =
    currentLeague?.clubs[currentClubIndex];



  function changeLeague(direction: number) {

    if (leagues.length === 0) return;


    let newIndex =
      currentLeagueIndex + direction;


    if (newIndex < 0) {

      newIndex = leagues.length - 1;

    }


    if (newIndex >= leagues.length) {

      newIndex = 0;

    }


    setCurrentLeagueIndex(newIndex);

    setCurrentClubIndex(0);

  }



  function changeClub(direction: number) {

    if (!currentLeague) return;


    const clubs = currentLeague.clubs;


    let newIndex =
      currentClubIndex + direction;


    if (newIndex < 0) {

      newIndex = clubs.length - 1;

    }


    if (newIndex >= clubs.length) {

      newIndex = 0;

    }


    setCurrentClubIndex(newIndex);

  }



  function handleCreateCareer() {

    if (!currentClub) return;


    careerService.create({

      managerName: "Treinador",

      clubId: currentClub.id,

    });


    navigate("/dashboard");

  }



  if (!currentLeague || !currentClub) {

    return (

      <main>

        Carregando...

      </main>

    );

  }



  return (

    <main>


      <h1>
        Nova Carreira
      </h1>



      {/* Seleção de país */}

      <div>


        <button
          onClick={() => changeLeague(-1)}
        >

          ◀

        </button>


        <span>

          {currentLeague.country === "Brasil"
            ? "🇧🇷"
            : "🇪🇸"}

        </span>


        <button
          onClick={() => changeLeague(1)}
        >

          ▶

        </button>


      </div>




      {/* Seleção de clube */}

      <div>


        <button
          onClick={() => changeClub(-1)}
        >

          ◀

        </button>



        <ClubCard
          club={currentClub}
        />



        <button
          onClick={() => changeClub(1)}
        >

          ▶

        </button>


      </div>



      <h3>

        {currentLeague.name}

      </h3>



      <button
        onClick={handleCreateCareer}
      >

        Iniciar Carreira

      </button>


    </main>

  );

}