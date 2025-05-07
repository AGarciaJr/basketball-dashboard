import NewsFeed from '@/components/NewsFeed';

export default function NewsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Dallas Mavericks News</h1>
      <div className="grid gap-8">
        <NewsFeed playerName="Luka Doncic" />
        <NewsFeed playerName="Kyrie Irving" />
        <NewsFeed playerName="Dallas Mavericks" />
      </div>
    </div>
  );
}