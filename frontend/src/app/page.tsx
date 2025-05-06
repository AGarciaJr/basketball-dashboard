import Link from 'next/link';
import React from 'react';

export default function HomePage(): React.ReactElement {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-blue-900 mb-4">Hoops IQ</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Master basketball statistics and elevate your understanding of the game
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          <Link href="/learn" className="group">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-semibold text-blue-800 mb-3">Learn Stats</h2>
              <p className="text-gray-600">
                Start your journey to understanding basketball statistics, from basic to advanced concepts.
              </p>
            </div>
          </Link>

          <Link href="/players" className="group">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-semibold text-blue-800 mb-3">Player Stats</h2>
              <p className="text-gray-600">
                Explore real player statistics and see how the numbers tell the story of the game.
              </p>
            </div>
          </Link>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-blue-800 mb-3">Coming Soon</h2>
            <p className="text-gray-600">
              Interactive quizzes, advanced analytics, and more learning tools to boost your basketball knowledge.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500">
            Your journey to basketball statistical mastery starts here
          </p>
        </div>
      </div>
    </div>
  );
}
