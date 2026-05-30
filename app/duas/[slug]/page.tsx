import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, BookOpen, Heart, Shield, Compass, Play } from 'lucide-react'
import { getDua, allDuas, duasData } from '@/lib/duas'
import ShareButton from '@/components/ShareButton'
import BookmarkButton from '@/components/BookmarkButton'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return Object.keys(duasData).map((slug) => ({ slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const dua = getDua(params.slug)
  if (!dua) return {}
  return {
    title: `${dua.title} | Uns`,
    description: dua.translation,
    openGraph: {
      title: dua.title,
      description: dua.translation,
      type: 'article',
      images: [{ url: '/og-dua.jpg' }],
    },
  }
}

export default function DuaPage({ params }: Props) {
  const dua = getDua(params.slug)
  if (!dua) notFound()

  const related = allDuas.filter((d) => d.slug !== dua.slug).slice(0, 3)

  return (
    <div className="min-h-screen bg-[#f8f1e7] dark:bg-[#0a0f0d] text-stone-800 dark:text-stone-100">

      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-stone-200/80 dark:border-stone-800 bg-white/90 dark:bg-black/85 backdrop-blur-md">
        <div className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link
            href="/duas"
            className="flex items-center gap-2 text-sm transition-colors hover:text-emerald-700 dark:hover:text-emerald-400"
          >
            <ArrowLeft className="w-4 h-4" />
            All Duas
          </Link>
          <div className="flex gap-2">
            <BookmarkButton slug={dua.slug} title={dua.title} />
            <ShareButton title={dua.title} />
          </div>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 pt-12 pb-24">

        {/* Category + Title */}
        <div className="animate-fade-in">
          <span className="inline-block px-5 py-2 bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 rounded-full text-sm tracking-wide mb-6">
            {dua.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-serif tracking-tight leading-tight mb-10">
            {dua.title}
          </h1>
        </div>

        {/* Arabic */}
        <section
          aria-label="Arabic dua"
          className="mb-12 bg-white dark:bg-stone-900 border border-stone-100 dark:border-stone-800 rounded-3xl p-10 md:p-16 text-center shadow-sm animate-slide-up"
        >
          <p
            className="font-amiri text-[2.35rem] leading-[1.55] tracking-wide text-emerald-800 dark:text-emerald-200"
            lang="ar"
            dir="rtl"
          >
            {dua.arabic}
          </p>
        </section>

        {/* Transliteration + Translation */}
        <section aria-label="Dua meaning" className="grid md:grid-cols-2 gap-4 mb-12 animate-slide-up">
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-8">
            <p className="uppercase text-xs tracking-[2px] text-stone-500 mb-3">Transliteration</p>
            <p className="italic text-[1.05rem] leading-relaxed text-stone-600 dark:text-stone-300">
              {dua.transliteration}
            </p>
          </div>
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-8">
            <p className="uppercase text-xs tracking-[2px] text-stone-500 mb-3">Translation</p>
            <p className="text-[1.05rem] leading-relaxed text-stone-700 dark:text-stone-200">
              {dua.translation}
            </p>
          </div>
        </section>

        {/* Listen button */}
        <div className="flex justify-center mb-14">
          <button
            type="button"
            className="flex items-center gap-3 bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-4 rounded-2xl font-medium transition-all active:scale-[0.985]"
          >
            <Play className="w-5 h-5" fill="white" />
            Listen to recitation
          </button>
        </div>

        {/* Story */}
        <section className="mb-10 animate-fade-in">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-xl bg-amber-100 dark:bg-amber-950 flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-4 h-4 text-amber-700 dark:text-amber-400" />
            </div>
            <h2 className="text-lg font-medium">The Story</h2>
          </div>
          <div className="bg-white dark:bg-stone-900 border border-stone-100 dark:border-stone-800 rounded-2xl p-8">
            <p className="text-stone-600 dark:text-stone-300 leading-[1.85] text-[1.025rem]">
              {dua.story}
            </p>
          </div>
        </section>

        {/* Reflection */}
        <section className="mb-10 animate-fade-in">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center flex-shrink-0">
              <Heart className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
            </div>
            <h2 className="text-lg font-medium">Reflection</h2>
          </div>
          <div className="bg-white dark:bg-stone-900 border border-stone-100 dark:border-stone-800 rounded-2xl p-8">
            <p className="text-stone-600 dark:text-stone-300 leading-[1.85] text-[1.025rem]">
              {dua.reflection}
            </p>
          </div>
        </section>

        {/* Guidance */}
        <section className="mb-10 animate-fade-in">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-xl bg-rose-100 dark:bg-rose-950 flex items-center justify-center flex-shrink-0">
              <Compass className="w-4 h-4 text-rose-700 dark:text-rose-400" />
            </div>
            <h2 className="text-lg font-medium">How to sit with it</h2>
          </div>
          <div className="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900 rounded-2xl p-8">
            <p className="text-emerald-900 dark:text-emerald-200 leading-[1.85] text-[1.025rem]">
              {dua.guidance}
            </p>
          </div>
        </section>

        {/* Sources */}
        <section className="mb-16 animate-fade-in">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-xl bg-blue-100 dark:bg-blue-950 flex items-center justify-center flex-shrink-0">
              <Shield className="w-4 h-4 text-blue-700 dark:text-blue-400" />
            </div>
            <h2 className="text-lg font-medium">Sources</h2>
          </div>
          <div className="rounded-2xl border border-emerald-100 dark:border-emerald-900 bg-emerald-50 dark:bg-emerald-950/40 p-6 space-y-3">
            {dua.sources.map((source) => (
              <div
                key={`${source.type}-${source.ref}`}
                className="flex items-center justify-between gap-4"
              >
                <p className="text-sm leading-relaxed">
                  <strong className="text-stone-700 dark:text-stone-300">{source.type}:</strong>{' '}
                  <span className="text-stone-600 dark:text-stone-400">{source.ref}</span>
                </p>
                <span className="text-xs px-3 py-1 bg-white dark:bg-stone-900 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 rounded-full shrink-0">
                  {source.authenticity}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Related */}
        {related.length > 0 && (
          <section className="animate-fade-in">
            <h2 className="text-xs uppercase tracking-[0.15em] text-stone-400 font-medium mb-4">
              Other Duas
            </h2>
            <div className="space-y-2">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/duas/${r.slug}`}
                  className="group flex items-center justify-between bg-white dark:bg-stone-900 border border-stone-100 dark:border-stone-800 rounded-2xl px-6 py-4 hover:border-emerald-200 dark:hover:border-emerald-900 transition-all"
                >
                  <div>
                    <p className="text-xs text-emerald-700 dark:text-emerald-500 font-medium mb-0.5">{r.category}</p>
                    <p className="text-sm font-medium text-stone-700 dark:text-stone-300 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                      {r.title}
                    </p>
                  </div>
                  <span className="text-stone-300 dark:text-stone-600 group-hover:text-emerald-400 transition-colors text-sm">→</span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <footer className="text-center py-12 text-sm text-stone-500 border-t border-stone-200 dark:border-stone-800">
        May Allah accept every call you make to Him.
      </footer>
    </div>
  )
}