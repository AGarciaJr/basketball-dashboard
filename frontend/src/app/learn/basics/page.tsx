'use client';

import Link from 'next/link';
import React from 'react';


interface StatDefinition {
  title: string;
  description: string;
  example: string;
}

const basicStats: StatDefinition[] = [
  {
    title: "Points (PTS)",
    description: "The number of points a player scores. Each basket is worth 2 points, or 3 points if shot from beyond the three-point line. Free throws are worth 1 point each.",
    example: "A player who scores 25 points might have made 10 two-point shots and 5 free throws, or 8 three-pointers and 1 free throw."
  },
  {
    title: "Rebounds (REB)",
    description: "The number of times a player retrieves the ball after a missed shot. There are two types: offensive rebounds (after your team's missed shot) and defensive rebounds (after the opponent's missed shot).",
    example: "A player with 10 rebounds might have grabbed 3 offensive rebounds and 7 defensive rebounds."
  },
  {
    title: "Assists (AST)",
    description: "The number of times a player passes the ball to a teammate who scores. The pass must directly lead to the score.",
    example: "A point guard who passes to a teammate for an open layup gets credited with an assist."
  },
  {
    title: "Steals (STL)",
    description: "The number of times a player takes the ball away from an opponent.",
    example: "A player who intercepts a pass or takes the ball from an opponent's hands gets credited with a steal."
  },
  {
    title: "Blocks (BLK)",
    description: "The number of times a player deflects an opponent's shot attempt.",
    example: "A center who swats away an opponent's layup attempt gets credited with a block."
  }
];

export default function BasicsPage(): React.ReactElement {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <Link href="/learn" className="text-blue-600 hover:text-blue-700 mb-8 inline-block font-semibold">
          ← Back to Learning Hub
        </Link>
        <h1 className="text-4xl font-bold text-blue-600 mb-8 drop-shadow">Basic Basketball Statistics</h1>
        <div className="space-y-8">
          {basicStats.map((stat, index) => (
            <div key={index} className="bg-gray-100 border-2 border-blue-100 rounded-xl shadow p-6">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">{stat.title}</h2>
              <p className="text-gray-700 mb-4">{stat.description}</p>
              <div className="bg-blue-50 p-4 rounded-md">
                <p className="text-blue-600">
                  <span className="font-semibold">Example:</span> {stat.example}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 