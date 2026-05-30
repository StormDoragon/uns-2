import type { Metadata } from 'next'
import { Amiri, Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const amiri = Amiri({
  subsets: ['arabic', 'latin'],
  weight: ['400', '700'],
  variable: '--font-amiri',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Uns — A Resting Place for Tired Hearts',
    template: '%s | Uns',
  },
  description:
    'Uns is a resting place for tired hearts: authentic duas with meaning, context, and reflection.',
  metadataBase: new URL('https://uns.app'),
  openGraph: {
    title: 'Uns — A Resting Place for Tired Hearts',
    description:
      'Authentic duas for hardship, illness, surrender, and divine mercy — with story, reflection, and guidance.',
    images: [{ url: '/og.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Uns — A Resting Place for Tired Hearts',
    description: 'Authentic duas for hardship, illness, surrender, and divine mercy.',
    images: ['/og.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${amiri.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
