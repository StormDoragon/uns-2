'use client'

import { Bookmark } from 'lucide-react'
import { useState, useEffect } from 'react'

const STORAGE_KEY = 'uns-bookmarks'

function readBookmarks(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []

    const parsed: unknown = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed.filter((item): item is string => typeof item === 'string') : []
  } catch {
    return []
  }
}

function writeBookmarks(bookmarks: string[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks))
  } catch {
    // Storage can be unavailable or full in some environments.
  }
}

export default function BookmarkButton({ slug, title }: { slug: string; title: string }) {
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    setSaved(readBookmarks().includes(slug))
  }, [slug])

  const toggle = () => {
    const bookmarks = readBookmarks()
    const next = saved
      ? bookmarks.filter((s) => s !== slug)
      : [...bookmarks, slug]
    writeBookmarks(next)
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
