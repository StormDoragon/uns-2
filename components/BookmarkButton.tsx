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

function writeBookmarks(bookmarks: string[]): boolean {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks))
    return true
  } catch {
    // Storage can be unavailable or full in some environments.
    return false
  }
}

export default function BookmarkButton({ slug, title }: { slug: string; title: string }) {
  const [saved, setSaved] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setSaved(readBookmarks().includes(slug))
  }, [slug])

  const toggle = () => {
    const bookmarks = readBookmarks()
    const next = saved
      ? bookmarks.filter((s) => s !== slug)
      : [...bookmarks, slug]
    if (writeBookmarks(next)) {
      setError(false)
      setSaved(!saved)
    } else {
      setError(true)
    }
  }

  return (
    <>
    <button
      onClick={toggle}
      aria-pressed={saved}
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
    {error && (
      <span role="alert" className="text-xs text-red-600 dark:text-red-400 self-center">
        Could not save — browser storage is unavailable.
      </span>
    )}
    </>
  )
}
