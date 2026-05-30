'use client'

import { Bookmark } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function BookmarkButton({ slug, title }: { slug: string; title: string }) {
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    const bookmarks: string[] = JSON.parse(localStorage.getItem('uns-bookmarks') ?? '[]')
    setSaved(bookmarks.includes(slug))
  }, [slug])

  const toggle = () => {
    const bookmarks: string[] = JSON.parse(localStorage.getItem('uns-bookmarks') ?? '[]')
    const next = saved
      ? bookmarks.filter((s) => s !== slug)
      : [...bookmarks, slug]
    localStorage.setItem('uns-bookmarks', JSON.stringify(next))
    setSaved(!saved)
  }

  return (
    <button
      onClick={toggle}
      className="p-2.5 hover:bg-stone-100 dark:hover:bg-stone-900 rounded-xl transition-colors"
      aria-label={saved ? 'Remove bookmark' : 'Bookmark this dua'}
    >
      <Bookmark
        className={`w-5 h-5 transition-colors ${
          saved
            ? 'fill-emerald-600 text-emerald-600'
            : 'text-stone-500 dark:text-stone-400'
        }`}
      />
    </button>
  )
}
