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
  today/page.tsx        — Dua of the day (/today)
  support/page.tsx      — Support Uns (/support)
  sitemap.ts, robots.ts, manifest.ts, icon.tsx, opengraph-image.tsx — SEO, PWA, share cards
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

## Roadmap

See [docs/PLAN.md](docs/PLAN.md) for the goal, launch plan, and monetization strategy.

## Environment variables (all optional)

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical origin for sitemap, OG tags, JSON-LD (default `https://uns-2.vercel.app`) |
| `NEXT_PUBLIC_SUPPORT_URL` | Donation/sadaqah link; shows a button on `/support` when set |
| `NEXT_PUBLIC_NEWSLETTER_URL` | Newsletter signup link; shows a button on `/support` when set |

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
