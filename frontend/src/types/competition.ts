import type { Club } from "./club";

export interface Competition {
  id: string;

  name: string;

  country?: string;

  type: CompetitionType;

  format: CompetitionFormat;

  participatingClubs: Club[];
}

export type CompetitionType =
  | "LEAGUE"
  | "CUP"
  | "CONTINENTAL";

export type CompetitionFormat =
  | "ROUND_ROBIN"
  | "KNOCKOUT"
  | "GROUP_STAGE";