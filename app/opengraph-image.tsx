import { renderCard, OG_SIZE } from '@/lib/og'

export const alt = 'Uns — A Resting Place for Tired Hearts'
export const size = OG_SIZE
export const contentType = 'image/png'

export default function Image() {
  return renderCard({
    eyebrow: 'Authentic duas for real life',
    title: 'A resting place for tired hearts.',
    body: 'Duas with story, reflection, and guidance.',
  })
}
