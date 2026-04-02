# LivDot - Event Ticketer

## Project Overview

LivDot is an event management platform designed specifically for live event streaming. It provides features for:

## Prerequisites

- **Node.js**: v18 or higher
- **npm**: v9 or higher (or yarn/pnpm/bun as alternatives)
- **Git**: for version control

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/GraceChiamaka/Event-ticketer.git
cd Event-ticketer
```

### 2. Install Dependencies

```bash
npm install
```

### 4. Start Development Server

```bash
npm run dev
```

The application will be available at **http://localhost:5050** (custom port configured in package.json)

## Available Scripts

```bash
# Start development server on port 5050
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint to check code quality
npm run lint
```

## Project Structure

```
src/
├── app/                          # Next.js app directory
│   ├── api/                      # API routes (mock endpoints)
│   │   └── events/               # Event API endpoints
│   ├── events/                   # Events page layout
│   └── layout.tsx                # Root layout with providers
├── features/                     # Feature modules
│   └── events/                   # Events feature
│       ├── components/           # Event-specific components
│       ├── containers/           # Page containers
│       ├── hooks/                # Custom React hooks
│       └── types.ts              # TypeScript types
├── shared/                       # Shared utilities and components
├── store/                        # Redux store configuration
│   ├── events/                   # Events slice (reducer)
│   ├── api.ts                    # RTK Query API configuration
│   └── Provider.tsx              # Redux Provider wrapper
├── mocks/                        # Mock data for development
└── styles/                       # Global styles

```

## Technology Stack

- **Frontend Framework**: Next.js 16.2.1
- **UI Library**: React 19.2.4
- **State Management**: Redux Toolkit (@reduxjs/toolkit 2.11.2)
- **API Data Fetching**: RTK Query (built into Redux Toolkit)
- **Styling**: CSS Modules
- **Icons**: Phosphor Icons (@phosphor-icons/react 2.1.10)
- **UI Utilities**: Floating UI
- **TypeScript**: 5.x
- **Development**: ES2017 target with strict mode enabled

### Navigation

- **Events List**: Main page displaying all events
- **Event Details**: Click on any event to view detailed information, requirements, and stream health

## Mock Data

The application uses comprehensive mock data from `src/mocks/events.ts` with 6 sample events in different states:

- **TechConf 2026**: Ready for streaming
- **Web3 Summit**: Draft (not yet configured)
- **Design Systems Workshop**: Scheduled
- **AI & The Future**: Currently live
- **Product Launch**: Completed
- **Startup Roundtable**: Available as replay

Each mock event includes realistic details about streaming requirements, ticket sales, and stream health metrics.

## Development Notes

### Redux Store Architecture

- **Events Slice** (`src/store/events/`): Manages event data and selected event state
- **RTK Query API** (`src/store/api.ts`): Handles API communication with automatic caching
- **Hooks** (`src/features/events/hooks/`):
  - `useEvent()`: Fetch and manage single event with streaming validation
  - `useStats()`: Calculate aggregated statistics across all events
  - `useStreamTimer()`: Manage elapsed time for live streams

### Custom Hooks

- `useAppDispatch()` and `useAppSelector()`: Typed Redux hooks
- `useEvent()`: Handles event data fetching, caching, and state management
- `useStats()`: Computes real-time statistics with memoization

### API Endpoints

- `GET /api/events` - Get all events
- `GET /api/events/[id]` - Get single event by ID

### Todos

- Handle update on event details to reflect update to requirement status

### Build for Production

```bash
npm run build
npm start
```

## License

ISC - See LICENSE file for details

## Author

GraceChiamaka
