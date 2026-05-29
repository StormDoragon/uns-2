# Uns

**Uns** is a calm dua library and launch site for tired hearts. The current production surface is a static site (`index.html` + `styles.css`) that can be opened locally or deployed directly to Vercel.

## What is included

- A polished homepage with clear navigation, hero messaging, and a featured dua.
- A source-aware dua library focused on Qur’anic duas for distress, illness, rizq, tawakkul, surrender, family, and steadfastness.
- Responsive styling with Arabic typography support via Google Fonts.
- A maintained Next.js dua detail page draft at `app/duas/[slug]/page.tsx` for a future app migration.

## Local preview

Open `index.html` in a browser, or run a small static server from the repository root:

```bash
python3 -m http.server 4173
```

Then visit <http://localhost:4173>.

## Deploy

Import this repository into Vercel and deploy it as a static site. The `vercel.json` file enables clean URLs.

## Content notes

Translations are intentionally plain-language renderings for reflection. They are not a replacement for tafsir, scholarly translation, or personal religious guidance from qualified teachers.
