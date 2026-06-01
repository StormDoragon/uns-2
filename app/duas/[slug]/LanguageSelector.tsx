'use client'

import { useState, useEffect } from 'react'
import { Languages } from 'lucide-react'
import { LANGUAGES, type LanguageCode } from '@/lib/duas'

export default function LanguageSelector({
  availableLanguages,
  onLanguageChange,
}: {
  availableLanguages: LanguageCode[]
  onLanguageChange: (lang: LanguageCode) => void
}) {
  const [selectedLang, setSelectedLang] = useState<LanguageCode>('en')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('uns-language') as LanguageCode
    if (saved && availableLanguages.includes(saved)) {
      setSelectedLang(saved)
      onLanguageChange(saved)
    }
  }, [availableLanguages, onLanguageChange])

  const handleSelect = (lang: LanguageCode) => {
    setSelectedLang(lang)
    localStorage.setItem('uns-language', lang)
    onLanguageChange(lang)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm text-stone-600 dark:text-stone-400 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors rounded-lg hover:bg-stone-100 dark:hover:bg-stone-900"
        aria-label="Select translation language"
      >
        <Languages className="w-4 h-4" />
        <span className="hidden sm:inline">{LANGUAGES[selectedLang]}</span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl shadow-lg z-20 py-1">
            {availableLanguages.map((lang) => (
              <button
                key={lang}
                onClick={() => handleSelect(lang)}
                className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                  selectedLang === lang
                    ? 'bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-medium'
                    : 'text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-800'
                }`}
              >
                {LANGUAGES[lang]}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
