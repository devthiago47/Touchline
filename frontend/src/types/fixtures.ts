export interface Fixture {
  id: string;

  competitionId: string;

  round: number;

  homeClubId: string;

  awayClubId: string;

  played: boolean;

  homeGoals: number | null;

  awayGoals: number | null;

  date: number;
}