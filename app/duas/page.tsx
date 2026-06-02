import type { Metadata } from 'next'
import Link from 'next/link'
import { allDuas } from '@/lib/duas'

export const metadata: Metadata = {
  title: 'All Duas | Uns',
  description: 'Browse authentic duas with story, reflection, and guidance.',
}

const groupedDuas = allDuas.reduce<Record<string, typeof allDuas>>((groups, dua) => {
  groups[dua.category] ??= []
  groups[dua.category].push(dua)
  return groups
}, {})

export default function DuasIndexPage() {
  return (
    <main className="min-h-screen bg-[#f8f1e7] px-6 py-12 text-stone-800 dark:bg-[#0a0f0d] dark:text-stone-100">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex items-center justify-between">
          <Link href="/" className="text-2xl font-semibold tracking-tight text-stone-900 transition-colors hover:text-emerald-700 dark:text-stone-100 dark:hover:text-emerald-400">
            Uns
          </Link>
        </div>
        <header className="my-10 rounded-[2rem] border border-emerald-100 bg-white/70 p-8 shadow-sm dark:border-emerald-900/60 dark:bg-stone-900/70 md:p-10">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-emerald-700 dark:text-emerald-300">Dua library</p>
          <h1 className="font-serif text-5xl leading-tight md:text-6xl">Dhikr, duas, and praises</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-700 dark:text-stone-300">
            Browse authentic remembrances organized by theme. Each card opens to the Arabic, transliteration, meaning,
            reflection, usage guidance, and reference.
          </p>
        </header>

        <div className="space-y-12">
          {Object.entries(groupedDuas).map(([category, duas]) => (
            <section key={category}>
              <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
                <div>
                  <p className="mb-2 text-xs uppercase tracking-[0.25em] text-emerald-700 dark:text-emerald-300">Collection</p>
                  <h2 className="font-serif text-3xl leading-tight md:text-4xl">{category}</h2>
                </div>
                <span className="rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm text-emerald-700 dark:border-emerald-900 dark:bg-stone-900 dark:text-emerald-300">
                  {duas.length} {duas.length === 1 ? 'entry' : 'entries'}
                </span>
              </div>

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {duas.map((dua) => (
                  <Link key={dua.slug} href={`/duas/${dua.slug}`} className="rounded-3xl border border-stone-200 bg-white p-7 shadow-sm transition-transform hover:-translate-y-1 dark:border-stone-800 dark:bg-stone-900">
                    <p className="mb-5 font-amiri text-3xl leading-relaxed text-emerald-800 dark:text-emerald-200" lang="ar" dir="rtl">{dua.arabic}</p>
                    <h3 className="mb-4 font-serif text-2xl leading-tight">{dua.title}</h3>
                    <p className="leading-7 text-stone-600 dark:text-stone-300">{dua.translations.en?.translation || Object.values(dua.translations)[0]?.translation}</p>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}
