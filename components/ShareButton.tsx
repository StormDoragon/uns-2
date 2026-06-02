'use client'

import { Share2, Check, X } from 'lucide-react'
import { useState } from 'react'

type Status = 'idle' | 'copied' | 'error'

export default function ShareButton({ title }: { title: string }) {
  const [status, setStatus] = useState<Status>('idle')

  const handleShare = async () => {
    const url = window.location.href

    if (navigator.share) {
      try {
        await navigator.share({ title, url })
      } catch (err) {
        // AbortError is expected when users dismiss native share sheets.
        if (!(err instanceof Error && err.name === 'AbortError')) {
          setStatus('error')
          setTimeout(() => setStatus('idle'), 2000)
        }
      }
      return
    }

    try {
      await navigator.clipboard.writeText(url)
      setStatus('copied')
      setTimeout(() => setStatus('idle'), 2000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 2000)
    }
  }

  return (
    <button
      onClick={handleShare}
      className="p-2.5 hover:bg-stone-100 dark:hover:bg-stone-900 rounded-xl transition-colors"
      aria-label="Share this dua"
    >
      {status === 'copied' && <Check className="w-5 h-5 text-emerald-600" />}
      {status === 'error' && <X className="w-5 h-5 text-red-400" />}
      {status === 'idle' && <Share2 className="w-5 h-5 text-stone-500 dark:text-stone-400" />}
    </button>
  )
}
