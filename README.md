# Uns

A resting place for tired hearts — authentic duas with story, reflection, and guidance.

## Stack

- **Next.js 15** (App Router)
- **Tailwind CSS** — dark mode via `class`
- **Amiri + Inter** (Google Fonts) — Arabic and UI typography
- **Lucide React** — icons
- **Vercel** — deployment

## Project structure

```
app/
  layout.tsx            — Root layout, fonts, metadata
  globals.css           — Tailwind base, Arabic rendering, animations
  page.tsx              — Home page (/)
  not-found.tsx         — 404 page
  duas/
    page.tsx            — All duas index (/duas)
    [slug]/
      page.tsx          — Individual dua page (/duas/[slug])
app/duas/[slug]/
  ShareButton.tsx       — Web Share API with clipboard fallback
  BookmarkButton.tsx    — localStorage bookmark toggle
lib/
  duas.ts               — All dua data + getDua / allDuas helpers
```

## Local development

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Adding a new dua

Edit `lib/duas.ts` and add a new entry to `duasData`. The slug becomes the URL automatically:

```ts
'dua-of-musa': {
  slug: 'dua-of-musa',
  category: 'Hardship & Trust',
  title: '...',
  arabic: '...',
  // ...
}
```

`slug: 'dua-of-musa'` -> `/duas/dua-of-musa`. No other files need touching.

## Lint

```bash
npm run lint
```

If lint has not been initialized yet, run `npx next lint` once and commit the generated config.

## Deploy to Vercel

1. Push to GitHub
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Framework preset: **Next.js** (auto-detected)
4. Deploy — no environment variables needed
