'use client';

import Link from 'next/link';
import React from 'react';

export default function LearnPage(): React.ReactElement {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center drop-shadow">Learn Basketball Statistics</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          <Link href="/learn/basics" className="group">
            <div className="bg-gray-100 border-2 border-blue-100 rounded-xl shadow p-6 hover:shadow-lg hover:border-blue-600 transition-all">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4 group-hover:text-blue-700">Basic Statistics</h2>
              <p className="text-gray-700 group-hover:text-black">
                Start with the fundamentals: points, rebounds, assists, and more. Perfect for beginners!
              </p>
            </div>
          </Link>

          <div className="bg-gray-100 border-2 border-gray-200 rounded-xl shadow p-6 opacity-70">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Advanced Statistics</h2>
            <p className="text-gray-700">
              Coming soon: Dive deeper into advanced metrics and their impact on the game.
            </p>
          </div>

          <div className="bg-gray-100 border-2 border-gray-200 rounded-xl shadow p-6 opacity-70">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Interactive Examples</h2>
            <p className="text-gray-700">
              Coming soon: Learn through real game examples and interactive visualizations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 