'use client';

import { useRouter } from 'next/navigation';
import type { Player } from '@/lib/players';

type SortDir = "asc" | "desc";

type Props = {
  players: Player[];
  sortBy?: keyof Player;
  sortDir?: SortDir;
  onSort?: (col: keyof Player) => void;
};

const columns: { key: keyof Player; label: string }[] = [
  { key: "PLAYER_NAME", label: "Player" },
  { key: "TEAM_ABBREVIATION", label: "Team" },
  { key: "PTS", label: "PPG" },
  { key: "AST", label: "APG" },
  { key: "REB", label: "RPG" },
  { key: "FG_PCT", label: "FG%" },
  { key: "FG3_PCT", label: "3P%" },
  { key: "FT_PCT", label: "FT%" },
];

export default function PlayerTable({ players, sortBy, sortDir, onSort }: Props) {
  const router = useRouter();

  const handleRowClick = (playerId: number) => {
    router.push(`/players/${playerId}`);
  };

  return (
    <div className="overflow-x-auto bg-white p-6 shadow-md rounded-xl">
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-200 text-left">
            {columns.map((col) => (
              <th
                key={col.key}
                className={`p-3 text-black cursor-pointer select-none ${onSort ? 'hover:text-blue-600' : ''}`}
                onClick={onSort ? () => onSort(col.key) : undefined}
              >
                <span className="flex items-center gap-1">
                  {col.label}
                  {sortBy === col.key && (
                    <span className="text-blue-600 text-xs">
                      {sortDir === "asc" ? "▲" : "▼"}
                    </span>
                  )}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {players.map((p) => (
            <tr 
              key={p.PLAYER_ID} 
              className="hover:bg-gray-100 cursor-pointer transition-colors"
              onClick={() => handleRowClick(p.PLAYER_ID)}
            >
              <td className="p-3 text-black">{p.PLAYER_NAME}</td>
              <td className="p-3 text-black">{p.TEAM_ABBREVIATION}</td>
              <td className="p-3 text-black">{p.PTS.toFixed(1)}</td>
              <td className="p-3 text-black">{p.AST.toFixed(1)}</td>
              <td className="p-3 text-black">{p.REB.toFixed(1)}</td>
              <td className="p-3 text-black">{(p.FG_PCT * 100).toFixed(1)}%</td>
              <td className="p-3 text-black">{(p.FG3_PCT * 100).toFixed(1)}%</td>
              <td className="p-3 text-black">{(p.FT_PCT * 100).toFixed(1)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
  