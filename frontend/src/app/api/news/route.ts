import { NextResponse } from 'next/server';
import { fetchPlayerNews } from '@/services/newsService';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const playerName = searchParams.get('player');

  if (!playerName) {
    return NextResponse.json({ error: 'Player name is required' }, { status: 400 });
  }

  try {
    const news = await fetchPlayerNews(playerName);
    return NextResponse.json(news);
  } catch (error) {
    return NextResponse.json({ error: `Failed to fetch news: ${error instanceof Error ? error.message : 'Unknown error'}` }, { status: 500 });
  }
} 