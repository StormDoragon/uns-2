import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowLeft } from 'lucide-react'
import { allSituations } from '@/lib/situations'

export const metadata: Metadata = {
  title: 'Find a Dua for My Situation',
  description: 'Browse duas by what you are going through — hardship, anxiety, illness, gratitude, and more.',
}

export default function SituationsPage() {
  return (
    <div className="min-h-screen bg-[#f8f1e7] dark:bg-[#0a0f0d] text-stone-800 dark:text-stone-100">
      <nav className="sticky top-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-stone-200 dark:border-stone-800">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-stone-500 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Uns
          </Link>
          <Link
            href="/duas"
            className="text-sm text-stone-500 dark:text-stone-400 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
          >
            All Duas →
          </Link>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pb-24">
        <header className="my-12">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-emerald-700 dark:text-emerald-400 font-medium">
            By situation
          </p>
          <h1 className="font-serif text-5xl md:text-6xl leading-tight text-stone-900 dark:text-stone-50 mb-5">
            What brings you here?
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-stone-600 dark:text-stone-300">
            Choose the state of your heart. We will guide you to the duas most suited to where you are.
          </p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {allSituations.map((situation) => (
            <Link
              key={situation.slug}
              href={`/situations/${situation.slug}`}
              className="group block bg-white dark:bg-stone-900 border border-stone-100 dark:border-stone-800 rounded-2xl p-7 hover:border-emerald-200 dark:hover:border-emerald-900 hover:shadow-sm transition-all"
            >
              <h2 className="text-lg font-serif text-stone-800 dark:text-stone-100 group-hover:text-emerald-800 dark:group-hover:text-emerald-300 transition-colors mb-2">
                {situation.label}
              </h2>
              <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed mb-5">
                {situation.description}
              </p>
              <p className="text-xs text-stone-400 dark:text-stone-600 group-hover:text-emerald-600 dark:group-hover:text-emerald-500 transition-colors">
                {situation.duaSlugs.length} duas →
              </p>
            </Link>
          ))}
        </div>
      </main>

      <footer className="text-center py-10 text-sm text-stone-400 border-t border-stone-200 dark:border-stone-800">
        <p>May Allah accept every call you make to Him.</p>
      </footer>
    </div>
  )
}
