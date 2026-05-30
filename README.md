# Uns

A resting place for tired hearts — authentic duas with story, reflection, and guidance.

## Stack

- **Next.js 14** (App Router, static export ready)
- **Tailwind CSS** — custom tokens, dark mode via `class`
- **Amiri** (Google Fonts) — Arabic typography
- **Lucide React** — icons
- **Vercel** — deployment

## Project structure

```
app/
	layout.tsx          — Root layout, fonts, metadata
	globals.css         — Tailwind base + custom utilities
	page.tsx            — Home page (/)
	not-found.tsx       — 404 page
	duas/
		page.tsx          — All duas index (/duas)
		[slug]/
			page.tsx        — Individual dua page (/duas/[slug])
lib/
	duas.ts             — All dua data + helper functions
package.json          — Next.js scripts and dependencies
next.config.mjs       — Next.js static export config
tsconfig.json         — TypeScript project config
tailwind.config.ts    — Tailwind content and theme config
postcss.config.mjs    — PostCSS config for Tailwind
```

## Local development

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Adding a new dua

Edit `lib/duas.ts` and add a new entry to `duasData`. The slug becomes the URL: `slug: 'dua-of-musa'` → `/duas/dua-of-musa`. No other files need touching.

## Deploy to Vercel

1. Push to GitHub
2. Import the repo in [vercel.com/new](https://vercel.com/new)
3. Framework preset: **Next.js** (auto-detected)
4. Deploy — no environment variables needed

## Files to delete from the old static site

- `index.html`
- `styles.css`

These are replaced by the Next.js app.

## Project setup troubleshooting

If an editor or deployment tool says the workspace is missing a valid `package.json` or Next.js config files, open the repository root folder (`uns-2`) and run:

```bash
npm install
npm run dev
```

The required Next.js project files live at the repository root: `package.json`, `next.config.mjs`, `tsconfig.json`, `postcss.config.mjs`, and `tailwind.config.ts`. The App Router entry points live under `app/`.
