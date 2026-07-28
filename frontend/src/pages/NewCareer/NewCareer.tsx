import { useEffect, useState } from "react";
import { leagueService } from "../../services/leagueService";
import type { League } from "../../types/league";
import LeagueCard from "@/components/LeagueCard/LeagueCard";
import ClubCard from "@/components/ClubCard/ClubCard";
import { useNavigate } from "react-router-dom";
import { careerService } from "@/services/careerService";

export default function NewCareer() {
  const [leagues, setLeagues] = useState<League[]>([]);
  const [selectedLeagueId, setSelectedLeagueId] = useState<string | null>(null);
  const [selectedClubId, setSelectedClubId] = useState<string | null>(null);
  const navigate = useNavigate();

  function handleCreateCareer() {
    if (!selectedClubId) return;

    careerService.create({
      managerName: "Treinador",
      clubId: selectedClubId,
    });

    navigate("/dashboard");
  }

  useEffect(() => {
    async function loadLeagues() {
      const data = await leagueService.getAll();
      setLeagues(data);
    }

    loadLeagues();
  }, []);

  const selectedLeague = leagues.find(
    (league) => league.id === selectedLeagueId
  );

  return (
    <main>
      <h1>Nova Carreira</h1>

      <h2>Escolha uma liga</h2>

      <div>
        {leagues.map((league) => (
          <LeagueCard
            key={league.id}
            league={league}
            onSelect={setSelectedLeagueId}
          />
        ))}
      </div>

      {selectedLeague && (
        <>
          <h2>Clubes</h2>

          <div>
            {selectedLeague.clubs.map((club) => (
              <ClubCard
                key={club.id}
                club={club}
                onSelect={setSelectedClubId}
              />
            ))}
          </div>
          {selectedClubId && (
            <p>Clube selecionado: {selectedClubId}</p>
          )}
          {selectedClubId && (
            <button onClick={handleCreateCareer}>
              Iniciar Carreira
            </button>
          )}
        </>
      )}
    </main>
  );
}