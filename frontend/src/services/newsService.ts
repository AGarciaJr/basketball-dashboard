import Parser from 'rss-parser';
import axios from 'axios';

const parser = new Parser();

export interface NewsItem {
  title: string;
  link: string;
  pubDate: string;
  source: string;
  content?: string;
}

export async function fetchPlayerNews(playerName: string): Promise<NewsItem[]> {
  try {
    // Encode the player name for the URL
    const encodedName = encodeURIComponent(`${playerName} nba`);
    const url = `https://news.google.com/rss/search?q=${encodedName}`;
    
    // Fetch the RSS feed
    const response = await axios.get(url);
    const feed = await parser.parseString(response.data);
    
    // Transform the feed items into our NewsItem format
    return feed.items.map(item => ({
      title: item.title || '',
      link: item.link || '',
      pubDate: item.pubDate || '',
      source: item.source?.name || 'Unknown Source',
      content: item.content
    }));
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
}