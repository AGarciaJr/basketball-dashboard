'use client';

import Link from 'next/link';
import React from 'react';

export default function LearnPage(): React.ReactElement {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Learn Basketball Statistics</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Link href="/learn/basics" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-4">Basic Statistics</h2>
          <p className="text-gray-600">
            Start with the fundamentals: points, rebounds, assists, and more. Perfect for beginners!
          </p>
        </Link>

        <div className="block p-6 bg-gray-100 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-400">Advanced Statistics</h2>
          <p className="text-gray-400">
            Coming soon: Dive deeper into advanced metrics and their impact on the game.
          </p>
        </div>

        <div className="block p-6 bg-gray-100 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-400">Interactive Examples</h2>
          <p className="text-gray-400">
            Coming soon: Learn through real game examples and interactive visualizations.
          </p>
        </div>
      </div>
    </div>
  );
} 