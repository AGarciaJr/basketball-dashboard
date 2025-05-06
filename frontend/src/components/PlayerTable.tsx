type Player = {
    name: string;
    team: string;
    ppg: number;
    apg: number;
    rpg: number;
  };
  
  type SortDir = "asc" | "desc";
  
  type Props = {
    players: Player[];
    sortBy?: keyof Player;
    sortDir?: SortDir;
    onSort?: (col: keyof Player) => void;
  };
  
  const columns: { key: keyof Player; label: string }[] = [
    { key: "name", label: "Player" },
    { key: "team", label: "Team" },
    { key: "ppg", label: "PPG" },
    { key: "apg", label: "APG" },
    { key: "rpg", label: "RPG" },
  ];
  
  export default function PlayerTable({ players, sortBy, sortDir, onSort }: Props) {
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
            {players.map((p, i) => (
              <tr key={i} className="hover:bg-gray-100">
                <td className="p-3 text-black">{p.name}</td>
                <td className="p-3 text-black">{p.team}</td>
                <td className="p-3 text-black">{p.ppg}</td>
                <td className="p-3 text-black">{p.apg}</td>
                <td className="p-3 text-black">{p.rpg}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  