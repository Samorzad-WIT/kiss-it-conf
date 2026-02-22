# KISS IT Conference Website

## Project Overview

Landing page for **KISS IT 2026** — a student-organised IT conference at Politechnika Wrocławska (Wrocław University of Science and Technology). The site is a single-page application with sections for hero, why attend, agenda, speakers, partners, patrons, koła naukowe, venue, and footer/contact.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | **React 19** (Vite 7, SWC) |
| Language | **TypeScript 5.9** (strict) |
| Styling | **Tailwind CSS 3** + PostCSS + Autoprefixer |
| Animations | **Framer Motion 12** |
| Icons | **Lucide React** |
| Build | `tsc -b && vite build` |
| Deploy | Docker (nginx) |

## Project Structure

```
src/
├── content/          # ← SINGLE SOURCE OF TRUTH for all site data
│   ├── types.ts      # Shared TypeScript interfaces
│   ├── hero.ts       # Hero section data
│   ├── speakers.ts   # Speaker list
│   ├── agenda.ts     # Agenda / schedule
│   ├── venue.ts      # Venue info (address, map, transport)
│   ├── partners.ts   # Partners + tier config + CTA text
│   ├── patrons.ts    # Honorary patrons
│   ├── kolaNaukowe.ts # Scientific clubs / tech partners
│   ├── whyAttend.ts  # "Why attend" card data
│   ├── navbar.ts     # Navigation links
│   ├── footer.ts     # Contact people, regulamin URL, copyright
│   └── index.ts      # Barrel re-export
├── sections/         # Page section components (presentation only)
├── components/       # Reusable UI components (Navbar, Footer, Badge, etc.)
├── assets/           # Static SVG assets
├── App.tsx           # Root layout, imports sections
└── main.tsx          # Vite entry point
```

### Content Architecture

All changeable site data lives exclusively in `src/content/*.ts`. Section components import from `../content` and are purely presentational — they should **never** contain hardcoded data arrays or strings that might need editing.

To add/edit site content, only touch files in `src/content/`.

## Commands

| Action | Command |
|---|---|
| Dev server | `npm run dev` |
| Type-check | `npx tsc --noEmit` |
| Production build | `npm run build` |
| Preview build | `npm run preview` |
| Lint | `npm run lint` |

## Design System

- **Color palette**: Dark theme (`#000018` bg), accent green `#24ff54`, purple `#6715ff`, pink `#fd00ff`, lavender `#d2aeff`
- **Fonts**: `Jersey 10` (display/mono) + `Inter` (sans body) via Google Fonts
- **Style**: Retro-futuristic / cyberpunk aesthetic with pixel-art accents, scanline effects, neon glows, glassmorphism cards

## Notes

- Agenda and Speakers sections are currently **commented out** in `App.tsx` (`void AgendaSection; void SpeakersSection;`) — they exist but are hidden until real content is ready.
- The site is in **Polish** (pl).
