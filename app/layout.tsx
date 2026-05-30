import type { Metadata } from 'next'
import { Amiri, Cormorant_Garamond } from 'next/font/google'
import type { ReactNode } from 'react'
import './globals.css'

const amiri = Amiri({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-amiri',
  display: 'swap',
})

const serif = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Uns — Duas for tired hearts',
  description: 'A resting place for tired hearts — authentic duas with story, reflection, and guidance.',
  openGraph: {
    title: 'Uns — Duas for tired hearts',
    description: 'Authentic duas with story, reflection, and guidance.',
    type: 'website',
  },
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${amiri.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  )
}
