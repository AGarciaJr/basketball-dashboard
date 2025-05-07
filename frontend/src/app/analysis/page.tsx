'use client';

import { useState, useEffect } from 'react';
import { Player, getAllPlayers, getAvailableSeasons, getPlayersBySeason } from '@/lib/players';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

// Calculate True Shooting Percentage
function calculateTS(player: Player): number {
  const points = player.PTS;
  const fga = player.FGA || 0;
  const fta = player.FTA || 0;
  return (points / (2 * (fga + 0.44 * fta))) * 100;
}

// Calculate Usage Rate (simplified)
function calculateUsage(player: Player): number {
  const fga = player.FGA || 0;
  const fta = player.FTA || 0;
  const tov = player.TOV || 0;
  const teamFGA = 90; // Simplified team stats
  const teamFTA = 20;
  const teamTOV = 15;
  return ((fga + 0.44 * fta + tov) / (teamFGA + 0.44 * teamFTA + teamTOV)) * 100;
}

export default function AnalysisPage() {
  const [season, setSeason] = useState<string>('');
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);
  const seasons = getAvailableSeasons();

  useEffect(() => {
    if (!season && seasons.length > 0) {
      setSeason(seasons[0]); // Default to most recent season
    }
  }, [seasons, season]);

  useEffect(() => {
    if (season) {
      setLoading(true);
      const seasonPlayers = getPlayersBySeason(season);
      setPlayers(seasonPlayers);
      setLoading(false);
    }
  }, [season]);

  if (loading) {
    return <div className="text-center text-gray-500 py-10">Loading...</div>;
  }

  // Get top 10 players by points
  const topScorers = [...players]
    .sort((a, b) => b.PTS - a.PTS)
    .slice(0, 10);

  // Find the most efficient player (highest TS%)
  const mostEfficientPlayer = topScorers.reduce((max, player) =>
    calculateTS(player) > calculateTS(max) ? player : max, topScorers[0]);

  // Find the highest usage player
  const highestUsagePlayer = topScorers.reduce((max, player) =>
    calculateUsage(player) > calculateUsage(max) ? player : max, topScorers[0]);

  // Prepare data for charts
  const scoringData = {
    labels: topScorers.map(p => p.PLAYER_NAME),
    datasets: [
      {
        label: 'Points Per Game',
        data: topScorers.map(p => p.PTS),
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
      },
    ],
  };

  const efficiencyData = {
    labels: topScorers.map(p => p.PLAYER_NAME),
    datasets: [
      {
        label: 'True Shooting %',
        data: topScorers.map(p => calculateTS(p)),
        borderColor: 'rgb(16, 185, 129)',
        backgroundColor: 'rgba(16, 185, 129, 0.5)',
      },
    ],
  };

  const usageData = {
    labels: topScorers.map(p => p.PLAYER_NAME),
    datasets: [
      {
        label: 'Usage Rate %',
        data: topScorers.map(p => calculateUsage(p)),
        backgroundColor: 'rgba(245, 158, 11, 0.5)',
        borderColor: 'rgb(245, 158, 11)',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-600 mb-8">Player Analysis</h1>
        <div className="mb-6 flex gap-4 items-center">
          <label htmlFor="season-select" className="font-semibold text-blue-600">Season:</label>
          <select
            id="season-select"
            value={season}
            onChange={e => setSeason(e.target.value)}
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-black bg-white"
          >
            {seasons.map(seasonOption => (
              <option key={seasonOption} value={seasonOption}>{seasonOption}</option>
            ))}
          </select>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Top Scorers</h2>
            <Bar 
              data={scoringData}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'top' as const,
                  },
                  title: {
                    display: true,
                    text: 'Points Per Game Leaders',
                  },
                },
              }}
            />
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Shooting Efficiency</h2>
            <Bar 
              data={efficiencyData}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'top' as const,
                  },
                  title: {
                    display: true,
                    text: 'True Shooting Percentage',
                  },
                },
              }}
            />
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Usage Rate</h2>
            <Bar 
              data={usageData}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'top' as const,
                  },
                  title: {
                    display: true,
                    text: 'Player Usage Rate',
                  },
                },
              }}
            />
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Key Insights</h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-700">Scoring Leaders</h3>
                <p className="text-gray-600">
                  {topScorers[0].PLAYER_NAME} leads the league with {topScorers[0].PTS.toFixed(1)} PPG
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-green-700">Most Efficient</h3>
                <p className="text-gray-600">
                  {mostEfficientPlayer.PLAYER_NAME} has the highest True Shooting Percentage
                </p>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg">
                <h3 className="font-semibold text-yellow-700">Highest Usage</h3>
                <p className="text-gray-600">
                  {highestUsagePlayer.PLAYER_NAME} has the highest usage rate
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 