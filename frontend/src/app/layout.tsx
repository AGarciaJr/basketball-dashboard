import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Hoops IQ',
  description: 'Basketball Analytics Dashboard',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen bg-white text-gray-900">
        <aside className="w-64 bg-gray-100 text-gray-900 shadow-lg p-6 flex flex-col">
          <h1 className="text-xl font-bold mb-6">🏀 Hoops IQ</h1>
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="hover:text-blue-600 transition-colors">Dashboard</Link>
            <Link href="/players" className="hover:text-blue-600 transition-colors">Player Stats</Link>
            <Link href="/analysis" className="hover:text-blue-600 transition-colors">Analysis</Link>
          </nav>
        </aside>
        <main className="flex-1 p-10 bg-white">{children}</main>
      </body>
    </html>
  );
}
