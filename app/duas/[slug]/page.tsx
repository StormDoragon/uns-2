import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Bookmark, Play, Share2 } from 'lucide-react';
import { duasData, getDua as findDua, type Dua } from '../../../lib/duas';

export const dynamicParams = false

function getDua(slug: string): Dua {
  const dua = findDua(slug);

  if (!dua) {
    notFound();
  }

  return dua as Dua;
}

export function generateStaticParams() {
  return Object.keys(duasData).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const dua = getDua(params.slug);

  return {
    title: `${dua.title} | Uns`,
    description: dua.translation,
    openGraph: {
      title: dua.title,
      description: dua.translation,
      type: 'article',
      images: [{ url: '/og-dua.jpg' }],
    },
  };
}

export default function DuaPage({ params }: { params: { slug: string } }) {
  const dua = getDua(params.slug);

  return (
    <div className="min-h-screen bg-[#f8f1e7] text-stone-800 dark:bg-[#0a0f0d] dark:text-stone-100">
      <nav className="sticky top-0 z-50 border-b border-stone-200/80 bg-white/90 backdrop-blur-md dark:border-stone-800 dark:bg-black/85">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
          <Link href="/duas" className="flex items-center gap-2 text-sm transition-colors hover:text-emerald-700">
            <ArrowLeft className="h-4 w-4" />
            All Duas
          </Link>
          <div className="flex gap-3" aria-label="Dua actions">
            <button type="button" className="rounded-xl p-2 transition-colors hover:bg-stone-100 dark:hover:bg-stone-900" aria-label="Bookmark this dua">
              <Bookmark className="h-5 w-5" />
            </button>
            <button type="button" className="rounded-xl p-2 transition-colors hover:bg-stone-100 dark:hover:bg-stone-900" aria-label="Share this dua">
              <Share2 className="h-5 w-5" />
            </button>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-6 pb-24 pt-12">
        <p className="mb-6 inline-block rounded-full bg-emerald-100 px-5 py-2 text-sm tracking-wide text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
          {dua.category}
        </p>

        <h1 className="mb-10 font-serif text-4xl leading-tight tracking-tight md:text-5xl">{dua.title}</h1>

        <section className="mb-12 rounded-3xl border border-stone-100 bg-white p-10 text-center shadow-sm dark:border-stone-800 dark:bg-stone-900 md:p-16" aria-label="Arabic dua">
          <p className="font-amiri text-[2.35rem] leading-[1.55] tracking-wide text-emerald-800 dark:text-emerald-200" lang="ar" dir="rtl">
            {dua.arabic}
          </p>
        </section>

        <section className="mb-12 grid gap-6 md:grid-cols-2" aria-label="Dua meaning">
          <div className="rounded-2xl border border-stone-200 bg-white p-8 dark:border-stone-800 dark:bg-stone-900">
            <p className="mb-3 text-xs uppercase tracking-[2px] text-stone-500">Transliteration</p>
            <p className="text-[1.05rem] italic leading-relaxed">{dua.transliteration}</p>
          </div>
          <div className="rounded-2xl border border-stone-200 bg-white p-8 dark:border-stone-800 dark:bg-stone-900">
            <p className="mb-3 text-xs uppercase tracking-[2px] text-stone-500">Translation</p>
            <p className="text-[1.05rem] leading-relaxed">{dua.translation}</p>
          </div>
        </section>

        <div className="mb-14 flex justify-center">
          <button type="button" className="flex items-center gap-3 rounded-2xl bg-emerald-700 px-8 py-4 font-medium text-white transition-all hover:bg-emerald-800 active:scale-[0.985]">
            <Play className="h-5 w-5" fill="white" />
            Listen to recitation
          </button>
        </div>

        <section className="space-y-8">
          <div>
            <h2 className="mb-3 font-serif text-2xl">Context</h2>
            <p className="leading-8 text-stone-700 dark:text-stone-300">{dua.story}</p>
          </div>
          <div>
            <h2 className="mb-3 font-serif text-2xl">Reflection</h2>
            <p className="leading-8 text-stone-700 dark:text-stone-300">{dua.reflection}</p>
          </div>
          <div>
            <h2 className="mb-3 font-serif text-2xl">How to sit with it</h2>
            <p className="leading-8 text-stone-700 dark:text-stone-300">{dua.guidance}</p>
          </div>
          <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6 dark:border-emerald-900 dark:bg-emerald-950/40">
            <h2 className="mb-4 font-serif text-2xl">Sources</h2>
            <ul className="space-y-3">
              {dua.sources.map((source) => (
                <li key={`${source.type}-${source.ref}`} className="leading-7">
                  <strong>{source.type}:</strong> {source.ref} <span className="text-stone-600 dark:text-stone-400">— {source.authenticity}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-200 py-12 text-center text-sm text-stone-500 dark:border-stone-800">
        May Allah accept every call you make to Him.
      </footer>
    </div>
  );
}
