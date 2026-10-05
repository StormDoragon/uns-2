import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Uns — A Resting Place for Tired Hearts',
    short_name: 'Uns',
    description: 'Authentic duas with story, reflection, and guidance.',
    start_url: '/today',
    display: 'standalone',
    background_color: '#f8f1e7',
    theme_color: '#047857',
    icons: [
      { src: '/icon', sizes: '512x512', type: 'image/png' },
      { src: '/apple-icon', sizes: '180x180', type: 'image/png' },
    ],
  }
}
