import Link from 'next/link'
import type { Metadata } from 'next'
import { allDuas } from '@/lib/duas'

export const metadata: Metadata = {
  title: 'Uns — A Resting Place for Tired Hearts',
}

const themes = [
  'Hardship', 'Illness', 'Surrender', 'Protection',
  'Dhikr', 'Praise', 'Tawakkul', 'Rizq',
  'Relief', 'Divine mercy', 'Repentance', 'Gratitude',
]

const duaEntries = allDuas.filter((entry) => entry.category !== 'The 6 Kalimas' && !entry.category.startsWith('Dhikr'))
const dhikrEntries = allDuas.filter((entry) => entry.category.startsWith('Dhikr'))
const kalimaEntries = allDuas.filter((entry) => entry.category === 'The 6 Kalimas')
const featuredDuas = duaEntries.slice(0, 3)

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f8f1e7] dark:bg-[#0a0f0d] text-stone-800 dark:text-stone-100">

      {/* Nav */}
      <nav className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-semibold tracking-tight text-stone-900 dark:text-stone-100 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">
          Uns
        </Link>
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
            href="#paths"
            className="px-6 py-3 border border-stone-300 dark:border-stone-700 hover:border-stone-400 dark:hover:border-stone-600 rounded-2xl text-sm text-stone-600 dark:text-stone-400 transition-all"
          >
            Learn the Path
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
          Three starting points for difficult days.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredDuas.map((dua, i) => (
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

      {/* Learning paths */}
      <section id="paths" className="max-w-5xl mx-auto px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-3xl border border-stone-100 bg-white p-7 dark:border-stone-800 dark:bg-stone-900">
            <p className="text-xs uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400">Dua</p>
            <h2 className="mt-2 text-2xl font-serif">Calling Allah directly</h2>
            <p className="mt-3 text-sm leading-7 text-stone-600 dark:text-stone-300">
              Dua is a personal call to Allah with need, trust, and honesty. It teaches dependence, softens anxiety,
              and keeps the heart connected in both ease and hardship.
            </p>
            <p className="mt-3 text-sm leading-7 text-stone-600 dark:text-stone-300">
              Start slowly: read the Arabic once, then transliteration, then translation. Pause after each line and ask,
              &ldquo;What is this teaching my heart right now?&rdquo;
            </p>
            <div className="mt-5 space-y-2 text-sm">
              {duaEntries.slice(0, 3).map((entry) => (
                <Link key={entry.slug} href={`/duas/${entry.slug}`} className="block text-emerald-700 transition-colors hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300">
                  {entry.title}
                </Link>
              ))}
            </div>
          </article>

          <article className="rounded-3xl border border-stone-100 bg-white p-7 dark:border-stone-800 dark:bg-stone-900">
            <p className="text-xs uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400">Dhikr</p>
            <h2 className="mt-2 text-2xl font-serif">Remembering Allah often</h2>
            <p className="mt-3 text-sm leading-7 text-stone-600 dark:text-stone-300">
              Dhikr means remembering Allah by phrases of praise, glorification, and surrender. It steadies the mind,
              reorders priorities, and gives daily spiritual grounding.
            </p>
            <p className="mt-3 text-sm leading-7 text-stone-600 dark:text-stone-300">
              Keep it consistent: choose one phrase, repeat with attention and presence, and let meaning settle before
              increasing quantity.
            </p>
            <div className="mt-5 space-y-2 text-sm">
              {dhikrEntries.slice(0, 3).map((entry) => (
                <Link key={entry.slug} href={`/duas/${entry.slug}`} className="block text-emerald-700 transition-colors hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300">
                  {entry.title}
                </Link>
              ))}
            </div>
          </article>

          <article className="rounded-3xl border border-stone-100 bg-white p-7 dark:border-stone-800 dark:bg-stone-900">
            <p className="text-xs uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400">Kalima</p>
            <h2 className="mt-2 text-2xl font-serif">Foundations of belief</h2>
            <p className="mt-3 text-sm leading-7 text-stone-600 dark:text-stone-300">
              The Kalimas summarize core beliefs: tawhid, testimony, glorification, repentance, and protection from
              disbelief. They help anchor identity and direction.
            </p>
            <p className="mt-3 text-sm leading-7 text-stone-600 dark:text-stone-300">
              Read with reverence: understand each phrase first, then repeat with conviction. Let each kalima become a
              lens for speech, decisions, and daily conduct.
            </p>
            <div className="mt-5 space-y-2 text-sm">
              {kalimaEntries.slice(0, 3).map((entry) => (
                <Link key={entry.slug} href={`/duas/${entry.slug}`} className="block text-emerald-700 transition-colors hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300">
                  {entry.title}
                </Link>
              ))}
            </div>
          </article>
        </div>
      </section>

      <footer className="text-center py-10 text-sm text-stone-400 border-t border-stone-200 dark:border-stone-800">
        <p>Uns — Not a database. A companion for return.</p>
      </footer>
    </div>
  )
}
