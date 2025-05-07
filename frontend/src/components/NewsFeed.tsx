'use client';

import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import type { NewsItem } from '@/services/newsService';

interface NewsFeedProps {
  playerName: string;
}

export default function NewsFeed({ playerName }: NewsFeedProps) {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchNews() {
      try {
        setLoading(true);
        const response = await fetch(`/api/news?player=${encodeURIComponent(playerName)}`);
        if (!response.ok) throw new Error('Failed to fetch news');
        const data = await response.json();
        setNews(data);
      } catch (err) {
        setError('Failed to load news. Please try again later.');
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, [playerName]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center p-4">
        {error}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Latest News about {playerName}</h2>
      {news.map((item, index) => (
        <article key={index} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-semibold mb-2">
            <a 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              {item.title}
            </a>
          </h3>
          <div className="text-sm text-gray-600">
            <span>{item.source}</span>
            <span className="mx-2">•</span>
            <span>{format(new Date(item.pubDate), 'MMM d, yyyy')}</span>
          </div>
        </article>
      ))}
    </div>
  );
}