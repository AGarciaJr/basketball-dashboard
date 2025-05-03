export const metadata = {
  title: 'FantasyStat+',
  description: 'Basketball Analytics Dashboard',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen bg-gray-100 text-gray-900">
        <aside className="w-64 bg-white shadow-lg p-6">
          <h1 className="text-xl font-bold mb-6">🏀 FantasyStat+</h1>
          <nav className="flex flex-col space-y-4">
            <a href="/" className="hover:text-blue-600">Dashboard</a>
            <a href="/players" className="hover:text-blue-600">Player Stats</a>
          </nav>
        </aside>
        <main className="flex-1 p-10">{children}</main>
      </body>
    </html>
  );
}
