# Uns — Goal & Plan to 2026's Best Internet Projects

## The goal

> **Uns becomes the place a million people open when their heart is heavy — the most trusted, most shared, most beautiful dua companion on the internet — and sustains itself without ever putting an ad between a person and their prayer.**

"Best internet project" for Uns means three measurable things, not vibes:

| Pillar | North-star metric | 12-month target |
|---|---|---|
| **Reach** | Monthly unique visitors | 1,000,000 |
| **Love** | % of visitors who return within 7 days · shares per 100 visits | 25% · 8 |
| **Trust** | Every dua source-verified by a named reviewer | 100% of published duas |
| **Sustainability** | Monthly recurring supporter revenue ≥ running costs + 1 FTE | ≥ $8k/mo |

## Positioning (why this wins)

Dua sites are either **databases** (thousands of entries, no soul, ad-choked) or **apps** (heavy, paywalled).
Uns is the third thing: **few duas, each with story, reflection, and how to sit with it**, organised by *how you feel*, not by chapter.
The hook is emotional — "What brings you here today?" — and the unit of virality is a *single dua sent to a person who needs it*.

Principles: never gate a dua · no ads · no tracking of what you pray for · every claim sourced · beautiful and fast on a cheap phone.

## What is already shipped (this branch)

- Fixed: literal `…` / `→` text rendering on the homepage; 23 dead tag links on dua pages; **dark mode that never activated** (`class` strategy with nothing toggling it → now follows OS).
- SEO: `sitemap.xml` (34 URLs), `robots.txt`, canonical URLs, Article JSON-LD per dua, theme-color.
- Share: **per-dua share cards** (`/duas/[slug]/opengraph-image`) + site card — previously `og.jpg` was referenced but missing, so every share had no preview.
- Retention: **Dua of the Day** (`/today`, rotates daily, UTC), PWA manifest + icons (installable), `start_url=/today`.
- Relevance: "Related duas" now ranked by shared tags (was: first 3 in the list).
- Monetization scaffolding: `/support` page (env-driven sadaqah + newsletter links, hidden until configured), footer on all pages.
- Measurement: Vercel Web Analytics (cookie-less, no personal data).

Arabic is deliberately **not** rendered inside generated images: the image renderer cannot shape Arabic (letters came out disconnected and reversed in testing), and mangled Qur'anic text on a share card is unacceptable. Cards carry title, translation, and source. Revisit with a server-side canvas/SVG path that shapes correctly.

## Phase plan

### Phase 0 — Launch gates (week 0, owner actions; blocks everything else)
1. **Scholarly review** of all 22 duas: Arabic text, translation, grading ("Authentic", "Hasan Sahih"), and every source reference. Record reviewer + date per dua (add `reviewedBy`, `reviewedOn` to `lib/duas.ts`; show it on the page). *This is the trust moat; do not skip it.*
2. Buy a real domain (e.g. `uns.app`), attach in Vercel, set `NEXT_PUBLIC_SITE_URL`.
3. Create the support link (Open Collective / Stripe Payment Link / charity partner) → `NEXT_PUBLIC_SUPPORT_URL`. Create newsletter (Buttondown/Beehiiv) → `NEXT_PUBLIC_NEWSLETTER_URL`.
4. Enable Vercel Analytics on the project; submit sitemap to Google Search Console + Bing.

### Phase 1 — Product-ready (weeks 1–4)
- **Content to 150 duas** across the 9 situations (add: grief, loneliness, exam/success, travel, parenting, marriage, sleep, morning/evening adhkar). Same format; every one reviewed.
- **Situation finder v2**: free-text "how are you feeling?" → matches situations (keyword map first, no AI dependence).
- **Save & return**: bookmarks page (`/saved`) from existing localStorage; "streak of remembrance" (private, local).
- **Audio**: replace Web Speech synthesis with recorded recitation (licensed/commissioned qari) — synthetic Arabic TTS is a quality risk.
- **Accessibility + performance**: Lighthouse ≥ 95 all categories; font-size control; reduce-motion.
- **i18n**: `/ur`, `/id`, `/tr`, `/fr`, `/ar` — Muslims are the audience that is global, and translation is the largest organic-reach lever (existing language-selector work in git history is the starting point).
- Add tests (Playwright smoke: every route 200, share card 200, no console errors) + GitHub Action: lint, typecheck, build.

### Phase 2 — Ship & soft launch (weeks 5–6)
- Private beta to ~50 people: imams/teachers (review), a few creators, friends in hardship-adjacent communities. Fix the top 10 issues.
- Press kit: 3 screenshots, one-paragraph story, logo, 30s screen recording.

### Phase 3 — Launch (week 7, timed to a **Ramadan / Jumu'ah / Laylat al-Qadr-adjacent** window if possible)
- Day 0: Product Hunt, Hacker News ("Show HN: I built a quiet place for duas"), r/islam, r/MuslimLounge-adjacent communities (respect each sub's self-promo rules), X, LinkedIn.
- Day 0–7: personal outreach to 40 Muslim creators/educators with a *specific* dua card made for their audience, not a generic ask.
- Newsletter "A dua each morning" (see below) from day 1.

### Phase 4 — Go viral (ongoing loops, not a one-off)
Virality here is **gifting**, not growth hacking.
1. **Send a dua to someone** — share sheet pre-filled with "Thinking of you — this is for you:" + card. Track `share → visit → share`.
2. **Dua of the Day** → WhatsApp status / Instagram story card (square + 9:16 variants).
3. **Short video**: 20–30s "story behind the dua" clips (Yunus in three darknesses, Ayyub's honesty) for TikTok/Reels/Shorts — the `story` field is already written as a script.
4. **Embeddable widget** for mosque/community sites ("Dua of the day" iframe with a back-link) — free distribution + backlinks.
5. **SEO long tail**: "dua for anxiety", "dua when sick", "dua of Yunus meaning" — each dua/situation page already targets one; grow to 150+ pages with real depth.
Instrument: share rate, 7-day return, newsletter conversion, top landing pages.

### Phase 5 — Earn (month 3+, ethical by design)
No ads. No paywalled duas. Revenue that fits the product's soul:
| Stream | How | Notes |
|---|---|---|
| **Supporters (sadaqah jariyah)** | Monthly membership: name on a supporters page, early features, monthly "behind the duas" email | Primary stream. Target 1–2% of newsletter list |
| **Printable / physical** | Dua cards, desk prints, journal ("A resting place" workbook) | One-time purchases, print-on-demand, zero inventory |
| **Institutional licence** | Mosques/schools/chaplaincies: widget, branded Dua-of-the-Day, bulk cards | B2B, small but steady |
| **Grants & partnerships** | Muslim-community foundations, mental-health + faith orgs | Position Uns as a faith-sensitive wellbeing resource |
| **Zakat/charity pass-through** | Optionally route a share of revenue to a named cause, published transparently | Trust amplifier, not a revenue line |

Never: ad networks, selling data, "premium duas".

## Risks & guardrails
- **Authenticity** is existential: a single wrong hadith grading on a viral page ends trust. Reviewer sign-off per dua; public corrections log.
- **Scope creep into fatwa/medical advice**: duas for illness/anxiety must carry a gentle "this complements, not replaces, care" note. Add before launch.
- **Synthetic audio** of the Qur'an is sensitive; replace with human recitation.
- **Single-maintainer risk**: document content workflow; recruit 2–3 reviewers.

## Owner-only actions (cannot be done from code)
Domain purchase · reviewer recruitment · payment/charity account · newsletter account · Search Console · social accounts · outreach. Everything else in Phases 1–4 can be built in this repo.
