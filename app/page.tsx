import Link from 'next/link'
<<<<<<< HEAD
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
=======
import Link from 'next/link'
import type { Metadata } from 'next'
import { allDuas } from '@/lib/duas'

export const metadata: Metadata = {
  title: 'Uns — A Resting Place for Tired Hearts',
}

const themes = [
  'Hardship', 'Illness', 'Surrender', 'Protection',
  'Tawakkul', 'Rizq', 'Emotional overwhelm', 'Fear',
  'Relief', 'Divine mercy', 'Repentance', 'Gratitude',
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f8f1e7] dark:bg-[#0a0f0d] text-stone-800 dark:text-stone-100">

      {/* Nav */}
      <nav className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
        <span className="text-2xl font-semibold tracking-tight text-stone-900 dark:text-stone-100">
          Uns
        </span>
        <Link
          href="/duas"
          className="text-sm text-stone-500 dark:text-stone-400 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
        >
          All Duas →
        </Link>
      </nav>

      {/* Hero */}
      <header className="max-w-5xl mx-auto px-6 pt-16 pb-20">
        <p className="text-xs uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-500 mb-5 font-medium animate-fade-in">
          Authentic duas for real life
        </p>
        <h1
          className="text-5xl md:text-7xl font-serif tracking-tight leading-[1.05] text-stone-900 dark:text-stone-50 mb-7 animate-slide-up"
          style={{ animationDelay: '0.1s' }}
        >
          A resting place<br />for tired hearts.
        </h1>
        <p
          className="text-xl text-stone-500 dark:text-stone-400 max-w-xl leading-relaxed mb-10 animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          Uns is a space for hardship, illness, surrender, and mercy — each dua with its story, transliteration, and reflection.
        </p>
        <div className="flex flex-wrap gap-3 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <Link
            href="/duas"
            className="px-6 py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-2xl text-sm font-medium transition-all active:scale-[0.98]"
          >
            Begin with a Dua
          </Link>
          <Link
            href="#foundational"
            className="px-6 py-3 border border-stone-300 dark:border-stone-700 hover:border-stone-400 dark:hover:border-stone-600 rounded-2xl text-sm text-stone-600 dark:text-stone-400 transition-all"
          >
            Foundational Duas
          </Link>
        </div>
      </header>

      {/* Theme tags */}
      <section className="max-w-5xl mx-auto px-6 pb-16 border-b border-stone-200 dark:border-stone-800">
        <p className="text-xs uppercase tracking-[0.15em] text-stone-400 mb-4 font-medium">
          What Uns is built for
        </p>
        <div className="flex flex-wrap gap-2">
          {themes.map((t) => (
            <span
              key={t}
              className="px-4 py-1.5 border border-stone-200 dark:border-stone-800 rounded-full text-sm text-stone-600 dark:text-stone-400"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* Dua cards */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-serif text-stone-900 dark:text-stone-100 mb-2">Featured duas</h2>
        <p className="text-stone-500 dark:text-stone-500 text-sm mb-8">
          Story, reflection, transliteration, and source for each.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {allDuas.map((dua, i) => (
            <Link
              key={dua.slug}
              href={`/duas/${dua.slug}`}
              className={`group block bg-white dark:bg-stone-900 border border-stone-100 dark:border-stone-800 rounded-2xl p-7 hover:border-emerald-200 dark:hover:border-emerald-900 hover:shadow-sm transition-all animate-slide-up stagger-${Math.min(i + 1, 6)}`}
            >
              <span className="text-xs text-emerald-700 dark:text-emerald-500 font-medium tracking-wide uppercase">
                {dua.category}
              </span>
              <h3 className="mt-2 mb-4 text-base font-medium text-stone-800 dark:text-stone-200 leading-snug group-hover:text-emerald-800 dark:group-hover:text-emerald-300 transition-colors">
                {dua.title}
              </h3>
              <p
                className="font-amiri text-xl text-stone-700 dark:text-stone-300 leading-relaxed text-right mb-4"
                lang="ar"
                dir="rtl"
              >
                {dua.arabic.split(' ').slice(0, 5).join(' ')}…
              </p>
              <p className="text-sm text-stone-500 dark:text-stone-500 leading-relaxed line-clamp-2">
                {dua.translation}
              </p>
              <p className="mt-4 text-xs text-stone-400 dark:text-stone-600 group-hover:text-emerald-600 dark:group-hover:text-emerald-500 transition-colors">
                Read more →
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Foundational */}
      <section id="foundational" className="max-w-5xl mx-auto px-6 pb-20">
        <div className="bg-white dark:bg-stone-900 border border-stone-100 dark:border-stone-800 rounded-3xl p-10">
          <h2 className="text-xl font-serif text-stone-900 dark:text-stone-100 mb-2">Foundational library</h2>
          <p className="text-stone-500 dark:text-stone-500 text-sm mb-6">Building soon.</p>
          <ul className="space-y-2 text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
            <li className="flex gap-3"><span className="text-emerald-600">—</span> Protection duas for morning, evening, home, and travel</li>
            <li className="flex gap-3"><span className="text-emerald-600">—</span> Rizq duas with tawakkul-centred guidance</li>
            <li className="flex gap-3"><span className="text-emerald-600">—</span> Remembrance duas for daily grounding</li>
            <li className="flex gap-3"><span className="text-emerald-600">—</span> Healing duas for fear, fatigue, and emotional heaviness</li>
          </ul>
        </div>
      </section>

      <footer className="text-center py-10 text-sm text-stone-400 border-t border-stone-200 dark:border-stone-800">
        <p>Uns — Not a database. A companion for return.</p>
      </footer>
    </div>
  )
}
