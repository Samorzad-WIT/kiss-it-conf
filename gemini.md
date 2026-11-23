# KISS IT Conference Website

## Project Overview

Landing page for **KISS IT 2026** — a student-organised IT conference at Politechnika Wrocławska (Wrocław University of Science and Technology). The site is a single-page application with sections for hero, why attend, agenda, speakers, partners, patrons, koła naukowe, współprace/bartery, venue, and footer/contact.

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
│   ├── wspolprace.ts # Współprace / bartery partnerships
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

Źródło: makieta Figma "KISS IT PWr 2027" (zmienne `kiss/*`, `color/*`). Tokeny są w `tailwind.config.js` (klasy `kiss-*`) oraz jako zmienne CSS w `src/index.css`.

- **Kolory**: `kiss-bg` `#000018` (hero, sekcje), `kiss-page` `#100c1d` (tło strony), `kiss-surface` `#020210` (ciemne sekcje), `kiss-footer` `#050510`, `kiss-accent` `#24ff54`, `kiss-purple` `#6715ff`, `kiss-pink` `#fd00ff`, `kiss-lavender` `#d2aeff`, `kiss-ice` `#f6ecff`
- **Fonty**: `Jersey 10` (`font-display`) + `Inter` (`font-sans`), import w `src/index.css`
- **Karty / zdjęcia**: promień 24 px (`rounded-card`), tło `kiss-ice/5`, zdjęcia z obramowaniem `kiss-ice/50`
- **Nawigacja**: pływająca "pigułka" (promień 48 px, `kiss-bg/75`, obramowanie `kiss-ice/50`, blur 12 px), logo `public/logo_2027.svg`, ostatni link jako przycisk z obrysem
- **Hero** (`HeroSection.tsx`): gradient róż → granat 30%, siatka 93 px (overlay), dwie warstwy `public/hero/liquid.webp` z `mix-blend-lighten`; gwiazdki z `public/hero/stars.webp` (`StarsOverlay`) nad całą stroną
- **Styl**: Retro-futuristic / cyberpunk, pixel-art akcenty, neonowe poświaty, karty glassmorphism

## Notes

- Agenda and Speakers sections are currently **commented out** in `App.tsx` (`void AgendaSection; void SpeakersSection;`) — they exist but are hidden until real content is ready.
- The site is in **Polish** (pl).
