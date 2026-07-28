import type { League } from "@/types/league";

interface LeagueCardProps {
  league: League;
  onSelect: (leagueId: string) => void;
}

export default function LeagueCard({
  league,
  onSelect,
}: LeagueCardProps) {
  return (
    <button onClick={() => onSelect(league.id)}>
      <h3>{league.name}</h3>

      <p>{league.country}</p>

      <small>
        {league.numberOfTeams} clubes
      </small>
    </button>
  );
}