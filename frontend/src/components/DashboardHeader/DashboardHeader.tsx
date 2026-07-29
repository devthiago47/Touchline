import { careerService } from "@/services/careerService";
import { clubService } from "@/services/clubService";

export default function DashboardHeader() {
  const career = careerService.getCurrent();

  if (!career) {
    return <header>Nenhuma carreira encontrada.</header>;
  }

  const club = clubService.getById(career.clubId);

  if (!club) {
    return <header>Clube não encontrado.</header>;
  }

  const managerRating = 8.2;

  function getRatingColor(rating: number) {
    if (rating >= 9) return "#003f88";
    if (rating >= 8) return "#2196F3";
    if (rating >= 7) return "#2E7D32";
    if (rating >= 6) return "#F9A825";
    if (rating >= 5) return "#EF6C00";
    return "#C62828";
  }

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 20px",
        background: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <div style={{ fontSize: "42px" }}>
          🛡️
        </div>

        <div>
          <strong>{career.managerName}</strong>

          <br />

          <small>{club.name}</small>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <strong>OVR {club.overall}</strong>

        <div
          style={{
            background: getRatingColor(managerRating),
            color: "#fff",
            padding: "10px 18px",
            borderRadius: "8px",
            fontWeight: "bold",
          }}
        >
          {managerRating.toFixed(1)}
        </div>
      </div>
    </header>
  );
}