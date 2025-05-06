'use client';

import Link from 'next/link';
import React from 'react';

export default function LearnPage(): React.ReactElement {
  return (
    <div className="min-h-screen bg-mavericks-silver">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-mavericks-blue mb-8 text-center drop-shadow">Learn Basketball Statistics</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          <Link href="/learn/basics" className="group">
            <div className="bg-mavericks-white border-2 border-mavericks-blue rounded-xl shadow-lg p-6 hover:shadow-xl hover:bg-mavericks-blueAccent hover:text-mavericks-white transition-all">
              <h2 className="text-2xl font-semibold text-mavericks-blue mb-4 group-hover:text-mavericks-white">Basic Statistics</h2>
              <p className="text-mavericks-black group-hover:text-mavericks-white">
                Start with the fundamentals: points, rebounds, assists, and more. Perfect for beginners!
              </p>
            </div>
          </Link>

          <div className="bg-mavericks-white border-2 border-mavericks-silver rounded-xl shadow-lg p-6 opacity-70">
            <h2 className="text-2xl font-semibold text-mavericks-blue mb-4">Advanced Statistics</h2>
            <p className="text-mavericks-black">
              Coming soon: Dive deeper into advanced metrics and their impact on the game.
            </p>
          </div>

          <div className="bg-mavericks-white border-2 border-mavericks-silver rounded-xl shadow-lg p-6 opacity-70">
            <h2 className="text-2xl font-semibold text-mavericks-blue mb-4">Interactive Examples</h2>
            <p className="text-mavericks-black">
              Coming soon: Learn through real game examples and interactive visualizations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 