# GDG on Campus — University of Primorska

The custom community website for GDG on Campus University of Primorska in Koper, Slovenia.

## What is included

- A light, responsive visual system based on the four GDG colors
- A current chapter member count and official organizer profile
- Upcoming and past events synced from the official GDG community feed
- Event filtering by status and year
- One-click Google Calendar links for upcoming events
- A people page for the official organizer and local community crew
- A visual event gallery ready for future Google Photos albums
- About, partners, projects, stories, and learning-resource pages
- SEO metadata, mobile navigation, focus states, and reduced-motion support

Official chapter data is refreshed every hour. A small fallback dataset keeps the core pages usable if the community API is temporarily unavailable.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Verification

```bash
npm run lint
npm run build
```

## Content

- Official chapter and event data: `src/lib/gdg.ts`
- Local community crew: `src/lib/data/team.ts`
- Global design system: `src/app/globals.css`

The event archive and member count come from the public chapter API behind the [official GDG page](https://gdg.community.dev/gdg-on-campus-university-of-primorska-koper-slovenia/). Event photos can later be connected to a shared Google Photos album or another managed media source without changing the gallery layout.
