"use client";

import { useState, useEffect } from "react";
import PlayerTable from "@/components/PlayerTable";
import { Player, getAllPlayers, getUniqueTeams, getAvailableSeasons } from "@/lib/players";

const PAGE_SIZE = 10;

// Helper function to get last name
function getLastName(fullName: string): string {
  const parts = fullName.split(' ');
  return parts[parts.length - 1];
}

export default function PlayersPage() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedTeam, setSelectedTeam] = useState<string>("");
  const [selectedSeason, setSelectedSeason] = useState<string>("");
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState<keyof Player>("PLAYER_NAME");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");
  const teams = getUniqueTeams();
  const seasons = getAvailableSeasons();

  // Load players data
  useEffect(() => {
    const allPlayers = getAllPlayers();
    setPlayers(allPlayers);
    setLoading(false);
  }, []); // Empty dependency array since we only want this to run once on mount

  // Set default season
  useEffect(() => {
    if (!selectedSeason && seasons.length > 0) {
      setSelectedSeason(seasons[0]);
    }
  }, [seasons, selectedSeason]);

  // Filter players by search, team, and season
  const filtered = players.filter(player => {
    const matchesSearch = search 
      ? player.PLAYER_NAME.toLowerCase().includes(search.toLowerCase())
      : true;
    const matchesTeam = selectedTeam
      ? player.TEAM_ABBREVIATION === selectedTeam
      : true;
    const matchesSeason = selectedSeason
      ? player.SEASON === selectedSeason
      : true;
    return matchesSearch && matchesTeam && matchesSeason;
  });

  // Sort players
  const sorted = [...filtered].sort((a, b) => {
    const aVal = a[sortBy];
    const bVal = b[sortBy];
    
    if (sortBy === "PLAYER_NAME") {
      // Sort by last name
      const aLastName = getLastName(aVal as string);
      const bLastName = getLastName(bVal as string);
      return sortDir === "asc"
        ? aLastName.localeCompare(bLastName)
        : bLastName.localeCompare(aLastName);
    }
    
    if (typeof aVal === "number" && typeof bVal === "number") {
      return sortDir === "asc" ? aVal - bVal : bVal - aVal;
    }
    
    return sortDir === "asc"
      ? String(aVal).localeCompare(String(bVal))
      : String(bVal).localeCompare(String(aVal));
  });

  // Pagination logic
  const totalPages = Math.ceil(sorted.length / PAGE_SIZE);
  const paginated = sorted.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  // Reset to page 1 if search, team, season, or sort changes
  useEffect(() => {
    setPage(1);
  }, [search, selectedTeam, selectedSeason, sortBy, sortDir]);

  const handleSort = (col: keyof Player) => {
    if (sortBy === col) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortBy(col);
      setSortDir("asc");
    }
  };

  if (loading) {
    return <div className="text-center text-gray-500 py-10">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow">
      <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">Player Stats</h2>
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by player name..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-black placeholder:text-blue-600"
        />
        <select
          value={selectedTeam}
          onChange={e => setSelectedTeam(e.target.value)}
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-black bg-white"
        >
          <option value="">All Teams</option>
          {teams.map(team => (
            <option key={team} value={team}>{team}</option>
          ))}
        </select>
        <select
          value={selectedSeason}
          onChange={e => setSelectedSeason(e.target.value)}
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-black bg-white"
        >
          {seasons.map(season => (
            <option key={season} value={season}>{season}</option>
          ))}
        </select>
      </div>
      <PlayerTable
        players={paginated}
        sortBy={sortBy}
        sortDir={sortDir}
        onSort={handleSort}
      />
      <div className="flex justify-between items-center mt-6">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          className="px-4 py-2 rounded bg-gray-200 text-blue-600 disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-blue-600">
          Page {page} of {totalPages}
        </span>
        <button
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
          className="px-4 py-2 rounded bg-gray-200 text-blue-600 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
  