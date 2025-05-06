"use client";

import api from "@/lib/axios";
import { useState, useEffect } from "react";
import PlayerTable from "@/components/PlayerTable";

type Player = {
  name: string;
  team: string;
  ppg: number;
  apg: number;
  rpg: number;
};

const PAGE_SIZE = 10;
const columns = [
  { key: "name", label: "Player" },
  { key: "team", label: "Team" },
  { key: "ppg", label: "PPG" },
  { key: "apg", label: "APG" },
  { key: "rpg", label: "RPG" },
];

export default function PlayersPage() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState<keyof Player>("name");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    api.get("/players")
      .then((res) => {
        const mapped = res.data.map((p: any) => ({
          name: p.PLAYER_NAME,
          team: p.TEAM_ABBREVIATION,
          ppg: p.PTS,
          apg: p.AST,
          rpg: p.REB,
        }));
        setPlayers(mapped);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching players:", err);
        setLoading(false);
      });
  }, []);

  // Filter players by search
  const filtered = players.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.team.toLowerCase().includes(search.toLowerCase())
  );

  // Sort players
  const sorted = [...filtered].sort((a, b) => {
    const aVal = a[sortBy];
    const bVal = b[sortBy];
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

  // Reset to page 1 if search or sort changes
  useEffect(() => {
    setPage(1);
  }, [search, sortBy, sortDir]);

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
      <input
        type="text"
        placeholder="Search by player or team..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="mb-6 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-black placeholder:text-blue-600"
      />
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
  