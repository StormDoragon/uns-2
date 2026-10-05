import type { MetadataRoute } from 'next'
import { allDuas } from '@/lib/duas'
import { allSituations } from '@/lib/situations'
import { SITE_URL } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const page = (path: string, priority: number, changeFrequency: 'daily' | 'weekly' | 'monthly') => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  })
  return [
    page('', 1, 'weekly'),
    page('/today', 0.9, 'daily'),
    page('/duas', 0.9, 'weekly'),
    page('/situations', 0.9, 'weekly'),
    page('/support', 0.3, 'monthly'),
    ...allSituations.map((s) => page(`/situations/${s.slug}`, 0.8, 'monthly')),
    ...allDuas.map((d) => page(`/duas/${d.slug}`, 0.8, 'monthly')),
  ]
}
