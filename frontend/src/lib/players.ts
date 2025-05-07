import playerData from '../data/players.json';

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
}

// Current season is 2023-24
const CURRENT_SEASON = '2023-24';

export function getAllPlayers(): Player[] {
  return playerData.map(player => ({
    ...player,
    SEASON: CURRENT_SEASON
  }));
}

export function searchPlayers(query: string): Player[] {
  const searchTerm = query.toLowerCase();
  return playerData
    .filter(player => player.PLAYER_NAME.toLowerCase().includes(searchTerm))
    .map(player => ({
      ...player,
      SEASON: CURRENT_SEASON
    }));
}

export function getPlayerById(id: number): Player | undefined {
  const player = playerData.find(player => player.PLAYER_ID === id);
  return player ? { ...player, SEASON: CURRENT_SEASON } : undefined;
}

export function getPlayersByTeam(teamAbbreviation: string): Player[] {
  return playerData
    .filter(player => player.TEAM_ABBREVIATION === teamAbbreviation)
    .map(player => ({
      ...player,
      SEASON: CURRENT_SEASON
    }));
}

export function getUniqueTeams(): string[] {
  const teams = new Set(playerData.map(player => player.TEAM_ABBREVIATION));
  return Array.from(teams).sort();
}

export function getAvailableSeasons(): string[] {
  return [CURRENT_SEASON];
} 