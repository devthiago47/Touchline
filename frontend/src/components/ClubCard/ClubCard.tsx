import type { Club } from "@/types/club";

interface ClubCardProps {
  club: Club;
  onSelect: (clubId: string) => void;
}

export default function ClubCard({
  club,
  onSelect,
}: ClubCardProps) {
  return (
    <button onClick={() => onSelect(club.id)}>
      <h3>{club.name}</h3>

      <p>{club.country}</p>

      <small>{club.stadium}</small>
    </button>
  );
}