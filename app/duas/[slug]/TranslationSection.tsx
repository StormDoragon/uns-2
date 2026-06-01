'use client'

import { useState } from 'react'
import type { DuaTranslation, LanguageCode } from '@/lib/duas'
import LanguageSelector from './LanguageSelector'

export default function TranslationSection({
  translations,
}: {
  translations: Record<string, DuaTranslation>
}) {
  const availableLanguages = Object.keys(translations) as LanguageCode[]
  const [selectedLang, setSelectedLang] = useState<LanguageCode>(availableLanguages[0] || 'en')

  const currentTranslation = translations[selectedLang] || translations.en

  return (
    <>
      {/* Language selector */}
      <div className="flex justify-end mb-4 -mt-8 animate-fade-in">
        <LanguageSelector
          availableLanguages={availableLanguages}
          onLanguageChange={setSelectedLang}
        />
      </div>

      {/* Transliteration + Translation */}
      <section aria-label="Dua meaning" className="grid md:grid-cols-2 gap-4 mb-12 animate-slide-up">
        <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-8">
          <p className="uppercase text-xs tracking-[2px] text-stone-500 mb-3">Transliteration</p>
          <p className="italic text-[1.05rem] leading-relaxed text-stone-600 dark:text-stone-300">
            {currentTranslation.transliteration}
          </p>
        </div>
        <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-8">
          <p className="uppercase text-xs tracking-[2px] text-stone-500 mb-3">Translation</p>
          <p className="text-[1.05rem] leading-relaxed text-stone-700 dark:text-stone-200">
            {currentTranslation.translation}
          </p>
        </div>
      </section>

      <p className="-mt-8 mb-12 max-w-2xl text-sm leading-7 text-stone-500 dark:text-stone-400">
        The Arabic text stays unchanged; transliteration and translation can be adapted to the language that fits the verse most faithfully.
      </p>
    </>
  )
}
