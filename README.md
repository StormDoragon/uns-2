# Uns

A simple static launch site for **Uns** — a resting place for tired hearts.

## What this project is
This repository is currently a **static website** (no Next.js runtime required).

Pages:
- `/` → `index.html`
- `/duas` → `duas.html` (via Vercel clean URLs)

## Stack
- Vercel (deploy)
- Git (version control)
- ChatGPT (content + build support)

## Local preview
Open `index.html` directly in your browser, or run a static server:

```bash
python -m http.server 8080
```

Then visit:
- `http://localhost:8080/`
- `http://localhost:8080/duas.html`

## Deploy
Import this repository into Vercel and deploy as a static site.
