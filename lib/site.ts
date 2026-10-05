export const SITE_NAME = 'Uns'
export const SITE_TAGLINE = 'A resting place for tired hearts'
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://uns-2.vercel.app').replace(/\/$/, '')

// Optional, set in Vercel env vars. Support is voluntary: the site never gates or advertises against duas.
export const SUPPORT_URL = process.env.NEXT_PUBLIC_SUPPORT_URL ?? ''
export const NEWSLETTER_URL = process.env.NEXT_PUBLIC_NEWSLETTER_URL ?? ''
