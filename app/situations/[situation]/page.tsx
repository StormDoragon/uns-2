import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { getSituation, allSituations, situationsData } from '@/lib/situations'
import { getDua } from '@/lib/duas'

interface Props {
  params: Promise<{ situation: string }>
}

export function generateStaticParams() {
  return Object.keys(situationsData).map((situation) => ({ situation }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { situation } = await params
  const s = getSituation(situation)
  if (!s) return {}
  return {
    title: s.label,
    description: s.description,
  }
}

export default async function SituationPage({ params }: Props) {
  const { situation } = await params
  const s = getSituation(situation)
  if (!s) notFound()

  const duas = s.duaSlugs.map((slug) => getDua(slug)).filter(Boolean)

  // Related: other situations, max 3
  const related = allSituations.filter((r) => r.slug !== s.slug).slice(0, 3)

  return (
    <div className="min-h-screen bg-[#f8f1e7] dark:bg-[#0a0f0d] text-stone-800 dark:text-stone-100">
      <nav className="sticky top-0 z-50 border-b border-stone-200/80 dark:border-stone-800 bg-white/90 dark:bg-black/90 backdrop-blur-md">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/situations"
            className="flex items-center gap-2 text-sm text-stone-500 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All Situations
          </Link>
          <Link
            href="/duas"
            className="text-sm text-stone-500 dark:text-stone-400 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
          >
            Full Library →
          </Link>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 pt-12 pb-24">
        {/* Header */}
        <div className="mb-12 animate-fade-in">
          <span className="inline-block px-4 py-1.5 bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 rounded-full text-xs tracking-wide font-medium mb-5">
            By Situation
          </span>
          <h1 className="text-4xl md:text-5xl font-serif tracking-tight leading-tight text-stone-900 dark:text-stone-50 mb-6">
            {s.label}
          </h1>
          <p className="text-lg text-stone-600 dark:text-stone-300 leading-relaxed">
            {s.intro}
          </p>
        </div>

        {/* Duas */}
        <section className="mb-14 animate-slide-up">
          <h2 className="text-xs uppercase tracking-[0.2em] text-stone-400 font-medium mb-5">
            Recommended duas
          </h2>
          <div className="space-y-3">
            {duas.map((dua) => {
              if (!dua) return null
              return (
                <Link
                  key={dua.slug}
                  href={`/duas/${dua.slug}`}
                  className="group block bg-white dark:bg-stone-900 border border-stone-100 dark:border-stone-800 rounded-2xl p-6 hover:border-emerald-200 dark:hover:border-emerald-900 hover:shadow-sm transition-all"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-emerald-700 dark:text-emerald-500 font-medium tracking-wide uppercase mb-1">
                        {dua.category}
                      </p>
                      <h3 className="text-base font-medium text-stone-800 dark:text-stone-200 group-hover:text-emerald-800 dark:group-hover:text-emerald-300 transition-colors mb-3">
                        {dua.title}
                      </h3>
                      <p
                        className="font-amiri text-xl text-stone-600 dark:text-stone-400 leading-relaxed text-right mb-3"
                        lang="ar"
                        dir="rtl"
                      >
                        {dua.arabic.split(' ').slice(0, 5).join(' ')}…
                      </p>
                      <p className="text-sm text-stone-500 dark:text-stone-500 leading-relaxed line-clamp-2">
                        {dua.translation}
                      </p>
                    </div>
                    <span className="text-stone-300 dark:text-stone-600 group-hover:text-emerald-400 transition-colors text-sm shrink-0 mt-1">→</span>
                  </div>
                </Link>
              )
            })}
          </div>
        </section>

        {/* Related situations */}
        {related.length > 0 && (
          <section className="animate-fade-in">
            <h2 className="text-xs uppercase tracking-[0.15em] text-stone-400 font-medium mb-4">
              Other situations
            </h2>
            <div className="space-y-2">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/situations/${r.slug}`}
                  className="group flex items-center justify-between bg-white dark:bg-stone-900 border border-stone-100 dark:border-stone-800 rounded-2xl px-6 py-4 hover:border-emerald-200 dark:hover:border-emerald-900 transition-all"
                >
                  <div>
                    <p className="text-sm font-medium text-stone-700 dark:text-stone-300 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                      {r.label}
                    </p>
                    <p className="text-xs text-stone-400 dark:text-stone-600 mt-0.5">{r.duaSlugs.length} duas</p>
                  </div>
                  <span className="text-stone-300 dark:text-stone-600 group-hover:text-emerald-400 transition-colors text-sm">→</span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <footer className="text-center py-12 text-sm text-stone-400 border-t border-stone-200 dark:border-stone-800">
        <p>May Allah accept every call you make to Him.</p>
      </footer>
    </div>
  )
}
