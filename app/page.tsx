import Link from 'next/link'
import { allDuas } from '../lib/duas'

export default function HomePage() {
  const featuredDuas = allDuas.slice(0, 3)

  return (
    <main className="min-h-screen bg-[#f8f1e7] px-6 py-16 text-stone-800 dark:bg-[#0a0f0d] dark:text-stone-100">
      <section className="mx-auto max-w-5xl text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-emerald-700 dark:text-emerald-300">Uns</p>
        <h1 className="mx-auto max-w-3xl font-serif text-5xl leading-tight md:text-7xl">
          A resting place for tired hearts
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-700 dark:text-stone-300">
          Authentic duas with story, reflection, and practical guidance for moments of hardship,
          surrender, remembrance, and hope.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/duas" className="rounded-2xl bg-emerald-700 px-7 py-4 font-medium text-white transition-colors hover:bg-emerald-800">
            Browse duas
          </Link>
          <Link href="/duas/dua-of-yunus" className="rounded-2xl border border-stone-300 px-7 py-4 font-medium transition-colors hover:border-emerald-700 hover:text-emerald-700 dark:border-stone-700 dark:hover:border-emerald-300 dark:hover:text-emerald-300">
            Start with Yunus
          </Link>
        </div>
      </section>

      <section className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">
        {featuredDuas.map((dua) => (
          <Link key={dua.slug} href={`/duas/${dua.slug}`} className="rounded-3xl border border-stone-200 bg-white p-7 shadow-sm transition-transform hover:-translate-y-1 dark:border-stone-800 dark:bg-stone-900">
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">{dua.category}</p>
            <h2 className="mb-4 font-serif text-2xl leading-tight">{dua.title}</h2>
            <p className="line-clamp-3 leading-7 text-stone-600 dark:text-stone-300">{dua.translation}</p>
          </Link>
        ))}
      </section>
    </main>
  )
}
