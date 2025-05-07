import playerData2024_25 from '../data/players_2024_25.json';
import playerData2023_24 from '../data/players_2023_24.json';
import playerData2022_23 from '../data/players_2022_23.json';
import playerData2021_22 from '../data/players_2021_22.json';
import playerData2020_21 from '../data/players_2020_21.json';
import playerData2019_20 from '../data/players_2019_20.json';

export interface Player {
  PLAYER_ID: number;
  PLAYER_NAME: string;
  TEAM_ID: number;
  TEAM_ABBREVIATION: string;
  GP: number;
  MIN: number;
  PTS: number;
  REB: number;
  AST: number;
  STL: number;
  BLK: number;
  FG_PCT: number;
  FG3_PCT: number;
  FT_PCT: number;
  SEASON: string;
  FGA: number;
  FTA: number;
  TOV: number;
}

// Map of season to data
const seasonData: { [key: string]: Player[] } = {
  '2024-25': playerData2024_25,
  '2023-24': playerData2023_24,
  '2022-23': playerData2022_23,
  '2021-22': playerData2021_22,
  '2020-21': playerData2020_21,
  '2019-20': playerData2019_20,
};

export function getAllPlayers(): Player[] {
  return Object.values(seasonData).flat();
}

export function searchPlayers(query: string): Player[] {
  const searchTerm = query.toLowerCase();
  return getAllPlayers().filter(player => 
    player.PLAYER_NAME.toLowerCase().includes(searchTerm)
  );
}

export function getPlayerById(id: number): Player | undefined {
  return getAllPlayers().find(player => player.PLAYER_ID === id);
}

export function getPlayersByTeam(teamAbbreviation: string): Player[] {
  return getAllPlayers().filter(player => 
    player.TEAM_ABBREVIATION === teamAbbreviation
  );
}

export function getUniqueTeams(): string[] {
  const teams = new Set(getAllPlayers().map(player => player.TEAM_ABBREVIATION));
  return Array.from(teams).sort();
}

export function getAvailableSeasons(): string[] {
  return Object.keys(seasonData).sort().reverse(); // Most recent season first
}

export function getPlayersBySeason(season: string): Player[] {
  return seasonData[season] || [];
} 