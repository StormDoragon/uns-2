import { notFound } from 'next/navigation'
import { getDua, duasData } from '@/lib/duas'
import { renderCard, OG_SIZE } from '@/lib/og'

export const alt = 'Dua share card'
export const size = OG_SIZE
export const contentType = 'image/png'

export function generateStaticParams() {
  return Object.keys(duasData).map((slug) => ({ slug }))
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const dua = getDua(slug)
  if (!dua) notFound()
  return renderCard({
    eyebrow: dua.category,
    source: dua.sources[0]?.ref,
    title: dua.title.split('—')[0].trim(),
    body: dua.translation,
  })
}
