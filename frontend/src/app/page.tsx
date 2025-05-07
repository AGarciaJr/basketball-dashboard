import Link from 'next/link';
import React from 'react';

export default function HomePage(): React.ReactElement {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-blue-600 mb-4 drop-shadow">Hoops IQ</h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Master basketball statistics and elevate your understanding of the game
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          <Link href="/learn" className="group">
            <div className="bg-gray-100 border-2 border-blue-100 rounded-xl shadow p-6 hover:shadow-lg hover:border-blue-600 transition-all">
              <h2 className="text-2xl font-semibold text-blue-600 mb-3 group-hover:text-blue-700">Learn Stats</h2>
              <p className="text-gray-700 group-hover:text-gray-900">
                Start your journey to understanding basketball statistics, from basic to advanced concepts.
              </p>
            </div>
          </Link>

          <Link href="/players" className="group">
            <div className="bg-gray-100 border-2 border-blue-100 rounded-xl shadow p-6 hover:shadow-lg hover:border-blue-600 transition-all">
              <h2 className="text-2xl font-semibold text-blue-600 mb-3 group-hover:text-blue-700">Player Stats</h2>
              <p className="text-gray-700 group-hover:text-gray-900">
                Explore real player statistics and see how the numbers tell the story of the game.
              </p>
            </div>
          </Link>

          <div className="bg-gray-100 border-2 border-blue-100 rounded-xl shadow p-6">
            <h2 className="text-2xl font-semibold text-blue-600 mb-3">Coming Soon</h2>
            <p className="text-gray-700">
              Interactive quizzes, advanced analytics, and more learning tools to boost your basketball knowledge.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-blue-600">
            Your journey to basketball statistical mastery starts here
          </p>
        </div>
      </div>
    </div>
  );
}
