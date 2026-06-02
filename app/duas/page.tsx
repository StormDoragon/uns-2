import type { Metadata } from 'next'
import Link from 'next/link'
import { allDuas, type Dua } from '@/lib/duas'

export const metadata: Metadata = {
  title: 'All Duas, Dhikr & Praises | Uns',
  description: 'Browse authentic duas, daily dhikr, praises to Allah, reflections, and references.',
}

const collectionOrder = ['Dhikr', 'Dua', 'Praise', 'Qur’anic Duas'] as const

type CollectionName = (typeof collectionOrder)[number]

function getCollectionName(dua: Dua): CollectionName {
  if (dua.category.startsWith('Dhikr')) return 'Dhikr'
  if (dua.category.startsWith('Praise')) return 'Praise'
  if (dua.category.startsWith('Dua')) return 'Dua'
  return 'Qur’anic Duas'
}

const groupedDuas = collectionOrder.map((collection) => ({
  collection,
  duas: allDuas.filter((dua) => getCollectionName(dua) === collection),
})).filter((group) => group.duas.length > 0)

export default function DuasIndexPage() {
  return (
    <main className="min-h-screen bg-[#f8f1e7] px-6 py-12 text-stone-800 dark:bg-[#0a0f0d] dark:text-stone-100">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between mb-6">
          <Link href="/" className="text-2xl font-semibold tracking-tight text-stone-900 dark:text-stone-100 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">
            Uns
          </Link>
        </div>
        <header className="my-10">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-emerald-700 dark:text-emerald-300">Dua library</p>
          <h1 className="font-serif text-5xl leading-tight md:text-6xl">Duas, dhikr & praises</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-700 dark:text-stone-300">
            Choose a remembrance by the moment you are in, then sit with its Arabic, transliteration, meaning, reflection, and source.
          </p>
        </header>

        <div className="space-y-14">
          {groupedDuas.map(({ collection, duas }) => (
            <section key={collection} aria-labelledby={`${collection.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-heading`}>
              <div className="mb-5 flex items-end justify-between gap-4">
                <div>
                  <p className="mb-2 text-xs uppercase tracking-[0.22em] text-emerald-700 dark:text-emerald-300">{collection}</p>
                  <h2 id={`${collection.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-heading`} className="font-serif text-3xl leading-tight text-stone-900 dark:text-stone-100">
                    {collection === 'Qur’anic Duas' ? 'Qur’anic duas and prophetic moments' : `${collection} collection`}
                  </h2>
                </div>
                <span className="rounded-full border border-stone-200 px-3 py-1 text-xs text-stone-500 dark:border-stone-800 dark:text-stone-400">
                  {duas.length} {duas.length === 1 ? 'entry' : 'entries'}
                </span>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {duas.map((dua) => (
                  <Link key={dua.slug} href={`/duas/${dua.slug}`} className="rounded-3xl border border-stone-200 bg-white p-7 shadow-sm transition-transform hover:-translate-y-1 dark:border-stone-800 dark:bg-stone-900">
                    <p className="mb-3 text-xs uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">{dua.category}</p>
                    <h3 className="mb-4 font-serif text-3xl leading-tight">{dua.title}</h3>
                    <p className="mb-5 font-amiri text-3xl leading-relaxed text-emerald-800 dark:text-emerald-200" lang="ar" dir="rtl">{dua.arabic}</p>
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
