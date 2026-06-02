import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowLeft } from 'lucide-react'
import { allDuas } from '@/lib/duas'

export const metadata: Metadata = {
  title: 'All Duas',
  description: 'Browse authentic duas with story, reflection, and guidance.',
}

// Derive category order dynamically; Kalimas pinned first, rest follow insertion order.
const PINNED_CATEGORIES = ['The 6 Kalimas']
const allCategories = Array.from(new Set(allDuas.map((d) => d.category)))
const orderedCategories = [
  ...PINNED_CATEGORIES.filter((c) => allCategories.includes(c)),
  ...allCategories.filter((c) => !PINNED_CATEGORIES.includes(c)),
]

export default function DuasIndexPage() {
  return (
    <div className="min-h-screen bg-[#f8f5f0] dark:bg-[#0a0f0d] text-stone-800 dark:text-stone-100">
      <nav className="sticky top-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-stone-200 dark:border-stone-800">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-stone-500 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Uns
          </Link>
          <span className="text-sm text-stone-400 dark:text-stone-500">{allDuas.length} duas</span>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pb-24">
        <header className="my-10">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-emerald-700 dark:text-emerald-400 font-medium">
            Dua library
          </p>
          <h1 className="font-serif text-5xl md:text-6xl leading-tight text-stone-900 dark:text-stone-50">
            All duas
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-600 dark:text-stone-300">
            Choose a dua by the moment you are in, then sit with its words, context, and source.
          </p>
        </header>

        {orderedCategories.map((category) => {
          const duas = allDuas.filter((d) => d.category === category)

          return (
            <section key={category} className="mb-12">
              <div className="mb-5 flex items-end justify-between gap-4">
                <h2 className="font-serif text-3xl leading-tight text-stone-900 dark:text-stone-100">
                  {category}
                </h2>
                <span className="shrink-0 rounded-full border border-stone-200 dark:border-stone-800 px-3 py-1 text-xs text-stone-500 dark:text-stone-400">
                  {duas.length} {duas.length === 1 ? 'entry' : 'entries'}
                </span>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {duas.map((dua) => (
                  <Link
                    key={dua.slug}
                    href={`/duas/${dua.slug}`}
                    className="group rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-7 shadow-sm transition-all hover:-translate-y-0.5 hover:border-emerald-200 dark:hover:border-emerald-900 hover:shadow-md"
                  >
                    <p className="mb-2 text-xs uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400 font-medium">
                      {dua.category}
                    </p>
                    <h3 className="mb-4 font-serif text-xl leading-snug text-stone-800 dark:text-stone-100 group-hover:text-emerald-800 dark:group-hover:text-emerald-300 transition-colors">
                      {dua.title}
                    </h3>
                    <p
                      className="mb-4 font-amiri text-2xl leading-relaxed text-emerald-800 dark:text-emerald-200 text-right"
                      lang="ar"
                      dir="rtl"
                    >
                      {dua.arabic.split(' ').slice(0, 6).join(' ')}…
                    </p>
                    <p className="text-sm leading-relaxed text-stone-500 dark:text-stone-400 line-clamp-2">
                      {dua.translation}
                    </p>
                    <p className="mt-4 text-xs text-stone-400 dark:text-stone-600 group-hover:text-emerald-600 dark:group-hover:text-emerald-500 transition-colors">
                      Read more →
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )
        })}
      </main>

      <footer className="text-center py-10 text-sm text-stone-400 border-t border-stone-200 dark:border-stone-800">
        May Allah accept every call you make to Him.
      </footer>
    </div>
  )
}
