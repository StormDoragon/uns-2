import type { Metadata } from 'next'
import Link from 'next/link'
import { allDuas } from '../../lib/duas'

export const metadata: Metadata = {
  title: 'All Duas | Uns',
  description: 'Browse authentic duas with story, reflection, and guidance.',
}

export default function DuasIndexPage() {
  return (
    <main className="min-h-screen bg-[#f8f1e7] px-6 py-12 text-stone-800 dark:bg-[#0a0f0d] dark:text-stone-100">
      <div className="mx-auto max-w-5xl">
        <Link href="/" className="text-sm text-emerald-700 transition-colors hover:text-emerald-900 dark:text-emerald-300 dark:hover:text-emerald-100">
          ← Home
        </Link>
        <header className="my-10">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-emerald-700 dark:text-emerald-300">Dua library</p>
          <h1 className="font-serif text-5xl leading-tight md:text-6xl">All duas</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-700 dark:text-stone-300">
            Choose a dua by the moment you are in, then sit with its words, context, and source.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          {allDuas.map((dua) => (
            <Link key={dua.slug} href={`/duas/${dua.slug}`} className="rounded-3xl border border-stone-200 bg-white p-7 shadow-sm transition-transform hover:-translate-y-1 dark:border-stone-800 dark:bg-stone-900">
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">{dua.category}</p>
              <h2 className="mb-4 font-serif text-3xl leading-tight">{dua.title}</h2>
              <p className="mb-5 font-amiri text-3xl leading-relaxed text-emerald-800 dark:text-emerald-200" lang="ar" dir="rtl">{dua.arabic}</p>
              <p className="leading-7 text-stone-600 dark:text-stone-300">{dua.translation}</p>
            </Link>
          ))}
        </section>
      </div>
    </main>
  )
}
