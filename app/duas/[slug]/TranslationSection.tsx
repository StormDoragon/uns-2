'use client'

import type { Dua } from '@/lib/duas'

export default function TranslationSection({
  transliteration,
  translation,
}: {
  transliteration: Dua['transliteration']
  translation: Dua['translation']
}) {
  return (
    <>
      <section aria-label="Dua meaning" className="grid md:grid-cols-2 gap-4 mb-12 animate-slide-up">
        <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-8">
          <p className="uppercase text-xs tracking-[2px] text-stone-500 mb-3">Transliteration</p>
          <p className="italic text-[1.05rem] leading-relaxed text-stone-600 dark:text-stone-300">
            {transliteration}
          </p>
        </div>
        <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-8">
          <p className="uppercase text-xs tracking-[2px] text-stone-500 mb-3">Translation</p>
          <p className="text-[1.05rem] leading-relaxed text-stone-700 dark:text-stone-200">
            {translation}
          </p>
        </div>
      </section>

      <p className="-mt-8 mb-12 max-w-2xl text-sm leading-7 text-stone-500 dark:text-stone-400">
        The Arabic text remains unchanged, with transliteration and translation provided to support understanding and reflection.
      </p>
    </>
  )
}
