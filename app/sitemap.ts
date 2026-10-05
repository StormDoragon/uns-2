import type { MetadataRoute } from 'next'
import { allDuas } from '@/lib/duas'
import { allSituations } from '@/lib/situations'

const BASE = 'https://uns-2.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    '',
    '/duas',
    '/situations',
    ...allDuas.map((d) => `/duas/${d.slug}`),
    ...allSituations.map((s) => `/situations/${s.slug}`),
  ].map((path) => ({ url: `${BASE}${path}` }))
}
