'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Player, getPlayerById } from '@/lib/players';
import NewsFeed from '@/components/NewsFeed';

export default function PlayerDetailsPage() {
  const params = useParams();
  const [player, setPlayer] = useState<Player | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const playerId = parseInt(params.id as string, 10);
    const playerData = getPlayerById(playerId);
    setPlayer(playerData || null);
    setLoading(false);
  }, [params.id]);

  if (loading) {
    return <div className="text-center text-gray-500 py-10">Loading...</div>;
  }

  if (!player) {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Player Not Found</h2>
        <Link href="/players" className="text-blue-600 hover:text-blue-800">
          ← Back to Players
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow">
      <div className="mb-6">
        <Link href="/players" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
          ← Back to Players
        </Link>
        <h1 className="text-3xl font-bold text-blue-600">{player.PLAYER_NAME}</h1>
        <p className="text-gray-600">{player.TEAM_ABBREVIATION} • {player.SEASON}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-sm font-semibold text-gray-600">Points Per Game</h3>
          <p className="text-2xl font-bold text-blue-600">{player.PTS.toFixed(1)}</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-sm font-semibold text-gray-600">Assists Per Game</h3>
          <p className="text-2xl font-bold text-blue-600">{player.AST.toFixed(1)}</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-sm font-semibold text-gray-600">Rebounds Per Game</h3>
          <p className="text-2xl font-bold text-blue-600">{player.REB.toFixed(1)}</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-sm font-semibold text-gray-600">Field Goal %</h3>
          <p className="text-2xl font-bold text-blue-600">{(player.FG_PCT * 100).toFixed(1)}%</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-sm font-semibold text-gray-600">3-Point %</h3>
          <p className="text-2xl font-bold text-blue-600">{(player.FG3_PCT * 100).toFixed(1)}%</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-sm font-semibold text-gray-600">Free Throw %</h3>
          <p className="text-2xl font-bold text-blue-600">{(player.FT_PCT * 100).toFixed(1)}%</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-sm font-semibold text-gray-600">Minutes Per Game</h3>
          <p className="text-2xl font-bold text-blue-600">{player.MIN.toFixed(1)}</p>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">Latest News</h2>
        <NewsFeed playerName={player.PLAYER_NAME} />
      </div>
    </div>
  );
} 