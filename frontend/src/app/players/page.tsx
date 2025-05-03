import PlayerTable from "@/components/PlayerTable";
import { players } from "@/data/players";

export default function PlayersPage() {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-4">Player Stats</h2>
        <PlayerTable players={players}/>
      </div>
    );
  }
  