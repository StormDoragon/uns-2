import type { Metadata } from 'next'
import Link from 'next/link'
import { SUPPORT_URL, NEWSLETTER_URL } from '@/lib/site'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Support Uns',
  description: 'Uns is free, ad-free, and built as sadaqah jariyah. Here is how to help it grow.',
  alternates: { canonical: '/support' },
}

const ways = [
  { title: 'Share a dua', body: 'Every dua has a share card. Sending one to someone who is struggling is the best support there is.' },
  { title: 'Make dua for the project', body: 'For the people who build, translate, and verify it.' },
  { title: 'Help us check sources', body: 'Spot a mistake in a reference or translation? Tell us so it is corrected.' },
]

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-[#f8f1e7] dark:bg-[#0a0f0d] text-stone-800 dark:text-stone-100">
      <nav className="max-w-3xl mx-auto px-6 py-6">
        <Link href="/" className="text-2xl font-semibold tracking-tight">Uns</Link>
      </nav>
      <main className="max-w-3xl mx-auto px-6 pt-8 pb-20">
        <h1 className="text-4xl font-serif tracking-tight mb-4">Support Uns</h1>
        <p className="text-lg text-stone-600 dark:text-stone-400 leading-relaxed mb-10">
          Uns will always be free to read. No ads, no paywalls on duas, no tracking of what you pray for. If it
          has helped you, you can help keep it that way.
        </p>
        <div className="space-y-4 mb-12">
          {ways.map((w) => (
            <div key={w.title} className="bg-white dark:bg-stone-900 border border-stone-100 dark:border-stone-800 rounded-2xl p-6">
              <h2 className="font-medium mb-1">{w.title}</h2>
              <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">{w.body}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          {SUPPORT_URL && (
            <a href={SUPPORT_URL} rel="noopener" className="px-6 py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-2xl text-sm font-medium">
              Give sadaqah to the project
            </a>
          )}
          {NEWSLETTER_URL && (
            <a href={NEWSLETTER_URL} rel="noopener" className="px-6 py-3 border border-stone-300 dark:border-stone-700 rounded-2xl text-sm">
              Get a dua by email each morning
            </a>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
