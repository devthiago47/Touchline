import { careerService } from "@/services/careerService";
import { clubService } from "@/services/clubService";

export default function DashboardHome() {
    const career = careerService.getCurrent();

    if (!career) {
        return <p>Nenhuma carreira encontrada.</p>;
    }

    const myClub = clubService.getById(career.clubId);

    if (!myClub) {
        return <p>Clube não encontrado.</p>;
    }

    const nextMatch = career.currentSeason.rounds
    .flatMap(round => round.fixtures)
    .find(
        fixture =>
            fixture.homeClubId === myClub.id ||
            fixture.awayClubId === myClub.id
    );

    console.log("PARTIDA DO DASHBOARD:", nextMatch);

    if (!nextMatch) {
        return <p>Nenhuma partida encontrada.</p>;
    }

    const opponentId =
        nextMatch.homeClubId === myClub.id
            ? nextMatch.awayClubId
            : nextMatch.homeClubId;

    const opponent = clubService.getById(opponentId);

    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 2fr",
                gap: "16px",
            }}
        >
            <section
                style={{
                    border: "1px solid #ccc",
                    padding: "16px",
                }}
            >
                <h2>PRÓXIMA PARTIDA</h2>

                <h3>
                    {nextMatch.homeClubId === myClub.id
                        ? `${myClub.name} x ${opponent?.name}`
                        : `${opponent?.name} x ${myClub.name}`}
                </h3>

                <p>{myClub.country}</p>
            </section>

            <section
                style={{
                    border: "1px solid #ccc",
                    padding: "16px",
                }}
            >
                <h2>TABELA</h2>

                <p>Em desenvolvimento...</p>
            </section>

            <section
                style={{
                    border: "1px solid #ccc",
                    padding: "16px",
                }}
            >
                <h2>NOTÍCIAS</h2>

                <p>Em desenvolvimento...</p>
            </section>
        </div>
    );
}