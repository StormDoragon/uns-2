'use client'

import { Share2, Check } from 'lucide-react'
import { useState } from 'react'

export default function ShareButton({ title }: { title: string }) {
  const [copied, setCopied] = useState(false)

  const handleShare = async () => {
    const url = window.location.href
    if (navigator.share) {
      await navigator.share({ title, url })
    } else {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <button
      onClick={handleShare}
      className="p-2.5 hover:bg-stone-100 dark:hover:bg-stone-900 rounded-xl transition-colors"
      aria-label="Share this dua"
    >
      {copied ? (
        <Check className="w-5 h-5 text-emerald-600" />
      ) : (
        <Share2 className="w-5 h-5 text-stone-500 dark:text-stone-400" />
      )}
    </button>
  )
}
