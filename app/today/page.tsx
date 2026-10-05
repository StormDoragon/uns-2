import type { Metadata } from 'next'
import Link from 'next/link'
import { duaOfTheDay } from '@/lib/duas'
import ShareButton from '@/components/ShareButton'
import AudioRecitationButton from '@/components/AudioRecitationButton'
import Footer from '@/components/Footer'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Dua of the Day',
  description: 'One authentic dua, with its story and reflection — a new one every day.',
  alternates: { canonical: '/today' },
}

export default function TodayPage() {
  const dua = duaOfTheDay()
  const date = new Date().toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', timeZone: 'UTC' })

  return (
    <div className="min-h-screen bg-[#f8f1e7] dark:bg-[#0a0f0d] text-stone-800 dark:text-stone-100">
      <nav className="max-w-3xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-semibold tracking-tight">Uns</Link>
        <ShareButton title={`Dua of the day — ${dua.title}`} />
      </nav>
      <main className="max-w-3xl mx-auto px-6 pt-10 pb-20 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-500 mb-4 font-medium">
          Dua of the day · {date}
        </p>
        <h1 className="text-3xl md:text-4xl font-serif tracking-tight mb-10">{dua.title}</h1>
        <div className="bg-white dark:bg-stone-900 border border-stone-100 dark:border-stone-800 rounded-3xl p-10 md:p-14 shadow-sm">
          <p className="font-amiri text-[2.2rem] leading-[1.6] text-emerald-800 dark:text-emerald-200" lang="ar" dir="rtl">
            {dua.arabic}
          </p>
          <AudioRecitationButton arabic={dua.arabic} />
        </div>
        <p className="mt-8 text-lg text-stone-600 dark:text-stone-300 leading-relaxed">{dua.translation}</p>
        <p className="mt-6 text-sm text-stone-500 italic">{dua.guidance}</p>
        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          <Link href={`/duas/${dua.slug}`} className="px-6 py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-2xl text-sm font-medium">
            Read the story &amp; reflection
          </Link>
          <Link href="/situations" className="px-6 py-3 border border-stone-300 dark:border-stone-700 rounded-2xl text-sm text-stone-600 dark:text-stone-400">
            Find a dua for how I feel
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
