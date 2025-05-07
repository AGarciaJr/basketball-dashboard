# Hoops IQ Frontend

The frontend application for Hoops IQ, built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the frontend directory (if needed):
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### Development

Run the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
# or
yarn build
```

## 🏗️ Project Structure

```
frontend/
├── src/
│   ├── app/          # Next.js app directory
│   ├── components/   # React components
│   ├── lib/          # Utility functions and types
│   └── data/         # Static data files
├── public/           # Static assets
└── ...
```

## 🛠️ Key Features

- Server-side rendering with Next.js
- Type-safe development with TypeScript
- Responsive design with Tailwind CSS
- Player statistics table with sorting and filtering
- Team-based filtering
- Season comparison
- Search functionality

## 📦 Dependencies

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Other dependencies listed in `package.json`

## 🧪 Testing

```bash
npm run test
# or
yarn test
```

## 🚀 Deployment

The application is deployed on Vercel. Visit the live site at:
[Hoops IQ Dashboard](https://basketball-dashboard-phi.vercel.app/)

## 📝 License

MIT License
