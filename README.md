## The Muslim Box — NYT‑style Islamic Mini Games

Explore Islam through fun daily games inspired by NYT mini formats. Players can test their knowledge with the Daily Quiz and discover patterns in the Connections game. New content unlocks daily at 13:00 UTC.

- Live site: [themuslimbox.app](https://themuslimbox.app)

### Features

- Daily Quiz (single and multi‑select) with explanations and progress
- Islamic Connections game (group 4 words into a shared category)
- Time‑based releases (13:00 UTC) and seasons
- Local persistent user profiles (UUID), streak and total score
- Leaderboard (current streak first, then total score)
- Email subscribe/unsubscribe
- Share results UI (confetti on perfect score)

### Tech Stack

- Next.js 15 (App Router)
- React 19 (RC)
- TypeScript
- Tailwind CSS
- SQLite (sqlite3 + sqlite)
- Recharts, Lucide/Heroicons, JS Confetti

---

## Architecture Overview

### App structure

- App Router with two primary surfaces:
  - `/(root)` — Landing page, games index, Connections
  - `/(quiz)` — Daily Quiz grid, quiz details, leaderboard
- Client/UI components in `src/app/components/*`
- API routes under `src/app/api/*`

### Data flow

- Quiz content comes from static data: `src/data/quizzes.ts` and season metadata in `src/data/seasons.ts`.
- Connections content comes from `src/data/gameData.ts` with a schedule of releases.
- Client components call internal API routes to read/write user state and submissions.

### Database

- Local SQLite database at `quiz.db` (created automatically on first run using `src/db/schema.sql`).
- Access layer in `src/db/database.ts` encapsulates:
  - Users: create/update, streak/score aggregation
  - Quiz submissions: create, fetch per user, leaderboard aggregation
  - Connections submissions: create/update per user and stats (completion, strikes, elapsed time)
  - Email subscriptions: subscribe, unsubscribe, status lookup

Schema (simplified):

- `users(user_id, user_name, total_score, current_streak, highest_streak, opt_in, last_quiz_date, last_updated, share_clicks, invite_count)`
- `quiz_submissions(submission_id, user_id, quiz_id, quiz_score, selected_options, submission_date)`
- `connection_game_submissions(id, user_id, game_id, user_selections, submission_time, elapsed_time, game_completed, strikes)`
- `emails(email_id, user_id, email, subscribed, created_at, updated_at)`

Release timing: both quizzes and connections games use 13:00 UTC unlocks. Quiz availability is checked in `src/utils/quizUtils.ts`. Connections release logic is in `src/data/gameData.ts`.

---

## API Reference (internal)

All routes are relative to the app origin.

### Quiz

- `GET /api/quizStatus?uuid=<id>[&quizId=<n>]` — Returns statuses for a user’s quizzes
- `POST /api/quizSubmit` — Create a quiz submission
  - Body: `{ uuid: string, quizId: number, score: number, selectedOptions: number[][] }`
- `GET /api/leaderboard[?uuid=<id>]` — Full leaderboard or a specific user

### User

- `POST /api/user/update` — Create/update a user record (name, optIn, shareClicks, inviteCount)
  - Body: `{ uuid: string, name?: string, optIn?: boolean, inviteCount?: number, shareClicks?: number }`

### Email

- `POST /api/email/subscribe` — Subscribe an email to a user `{ userId, email }`
- `GET  /api/email/is-subscribed?userId=<id>` — Returns `{ isSubscribed, email }`

### Connections

- `GET  /api/connections/getAllGames` — All released games (newest first)
- `GET  /api/connections/getCurrentGame` — Current active game (by release time)
- `GET  /api/connections/getGame?id=<id>` — One game by id
- `POST /api/connections/submit` — Save a user submission
  - Body: `{ userId: string, gameId: string, completed: boolean, strikes: number, attempts: string[][], elapsedTime?: number }`
- `GET  /api/connections/loadUserSubmission?userId=<id>&gameId=<id>` — Single submission for a game
- `GET  /api/connections/loadAllUserSubmissions?userId=<id>` — All submissions for a user
- `GET  /api/connections/getGameStats?gameId=<id>` — Stats for a game
- `GET  /api/connections/getAllGamesStats` — Aggregate stats across games

Utility:

- `GET /api/time` — Server time (ISO), useful for debugging unlock timing

---

## Getting Started

### Prerequisites

- Node.js 18.18+ or 20+
- npm 9+ (or pnpm/yarn/bun)

### Install

```bash
npm install
```

### Development

```bash
npm run dev
# visit http://localhost:3000
```

On first run, a `quiz.db` file is created in the project root and initialized with `src/db/schema.sql`.

### Build & Start

```bash
npm run build
npm start
```

### Useful scripts

```bash
npm run migrate              # run SQLite migration script
npm run fix-game-ids         # utility script for Connections data IDs
```

---

## Directory Highlights

- `src/app/(root)` — Landing and Connections surface
- `src/app/(quiz)` — Quiz grid, quiz detail, leaderboard
- `src/app/components` — Shared UI and game components
- `src/app/api` — API routes
- `src/db` — SQLite schema and data access
- `src/data` — Static game content (quizzes, seasons, connections)
- `src/utils` — Helpers for scoring, seasons, sharing, users
- `src/types` — Shared TypeScript interfaces

---

## Development Notes

- Quizzes can be multi‑select; scoring adds +1 for each correct, −1 for incorrect, min 0 per question.
- Streaks and totals are recalculated from submissions; streak calculation aligns quiz “day” to 13:00 UTC.
- Connections attempts are stored as JSON arrays of selections with strikes and optional elapsed time.
- Styling uses Tailwind; charts via Recharts; icons via Lucide/Heroicons.

---

## Contributing

Issues and PRs are welcome. Please open an issue describing your change before submitting a PR.

## License

No license file is provided. Treat as All Rights Reserved unless a license is added.
