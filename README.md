# Uns **Uns** is a calm dua library and launch site for tired hearts. The current production surface is a static site (`index.html` + `styles.css`) that can be opened locally or deployed directly to Vercel. ## What is included - A polished homepage with clear navigation, hero messaging, and a featured dua. - A source-aware dua library focused on Qur’anic duas for distress, illness, rizq, tawakkul, surrender, family, and steadfastness. - Responsive styling with Arabic typography support via Google Fonts.
- A maintained Next.js dua detail page draft at `app/duas/[slug]/page.tsx` for a future app migration. ## Local preview Open `index.html` in a browser, or run a small static server from the repository root: ```bash python3 -m http.server 4173 ``` Then visit . ## Deploy Import this repository into Vercel and deploy it as a static site. The `vercel.json` file enables clean URLs. ## Content notes Translations are intentionally plain-language renderings for reflection.
They are not a replacement for tafsir, scholarly translation, or personal religious guidance from qualified teachers.
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
components/
	ShareButton.tsx     — Web Share API + clipboard fallback
	BookmarkButton.tsx  — localStorage bookmark toggle
lib/
	duas.ts             — All dua data + helper functions
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
components/
	ShareButton.tsx     — Web Share API + clipboard fallback
	BookmarkButton.tsx  — localStorage bookmark toggle
lib/
	duas.ts             — All dua data + helper functions
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

These are replaced by the Next.js app.
