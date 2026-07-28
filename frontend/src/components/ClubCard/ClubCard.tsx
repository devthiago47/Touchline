import type { Club } from "@/types/club";

interface ClubCardProps {
  club: Club;
}

function getStars(overall: number) {
  if (overall >= 85) return "★★★★★";

  if (overall >= 80) return "★★★★☆";

  if (overall >= 75) return "★★★★";

  if (overall >= 70) return "★★★☆";

  if (overall >= 65) return "★★★";

  if (overall >= 60) return "★★☆";

  if (overall >= 55) return "★★";

  if (overall >= 50) return "★☆";

  return "★";
}


export default function ClubCard({
  club,
}: ClubCardProps) {

  return (
    <div>

      <div>
        ⚽
      </div>


      <h2>
        {club.name}
      </h2>


      <p>
        {getStars(club.overall)}
      </p>


      <small>
        Overall: {club.overall}
      </small>


    </div>
  );
}