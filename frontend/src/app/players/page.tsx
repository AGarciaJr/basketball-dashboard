"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import PlayerTable from "@/components/PlayerTable";

export default function PlayersPage() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://basketball-dashboard-api.onrender.com/players")
      .then((res) => {
        setPlayers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching players:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Player Stats</h2>
      <PlayerTable players={players}/>
    </div>
  );
}
  