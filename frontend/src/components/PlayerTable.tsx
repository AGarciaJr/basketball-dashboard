type Player = {
    name: string;
    team: string;
    ppg: number;
    apg: number;
    rpg: number;
  };
  
  export default function PlayerTable({ players }: { players: Player[] }) {
    return (
      <div className="overflow-x-auto bg-white p-6 shadow-md rounded-xl">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-3">Player</th>
              <th className="p-3">Team</th>
              <th className="p-3">PPG</th>
              <th className="p-3">APG</th>
              <th className="p-3">RPG</th>
            </tr>
          </thead>
          <tbody>
            {players.map((p, i) => (
              <tr key={i} className="hover:bg-gray-100">
                <td className="p-3">{p.name}</td>
                <td className="p-3">{p.team}</td>
                <td className="p-3">{p.ppg}</td>
                <td className="p-3">{p.apg}</td>
                <td className="p-3">{p.rpg}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  