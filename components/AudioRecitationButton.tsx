'use client'

import { Volume2, VolumeX, Loader2 } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

type Status = 'idle' | 'loading' | 'playing' | 'unsupported'

export default function AudioRecitationButton({ arabic }: { arabic: string }) {
  const [status, setStatus] = useState<Status>('idle')
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      setStatus('unsupported')
    }
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel()
      }
    }
  }, [])

  const handleClick = () => {
    if (status === 'playing' || status === 'loading') {
      window.speechSynthesis.cancel()
      setStatus('idle')
      return
    }

    if (status === 'unsupported') return

    const utterance = new SpeechSynthesisUtterance(arabic)
    utterance.lang = 'ar-SA'
    utterance.rate = 0.85

    utterance.onstart = () => setStatus('playing')
    utterance.onend = () => setStatus('idle')
    utterance.onerror = () => setStatus('idle')

    utteranceRef.current = utterance
    setStatus('loading')
    window.speechSynthesis.speak(utterance)
  }

  if (status === 'unsupported') return null

  return (
    <button
      onClick={handleClick}
      className="mt-8 flex items-center gap-2 px-5 py-2.5 text-sm text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 rounded-full hover:bg-emerald-50 dark:hover:bg-emerald-950/50 transition-colors mx-auto"
      aria-label={status === 'playing' ? 'Stop recitation' : 'Listen to recitation'}
    >
      {status === 'loading' && <Loader2 className="w-4 h-4 animate-spin" />}
      {status === 'playing' && <VolumeX className="w-4 h-4" />}
      {status === 'idle' && <Volume2 className="w-4 h-4" />}
      <span>
        {status === 'playing' ? 'Stop' : status === 'loading' ? 'Loading…' : 'Listen'}
      </span>
    </button>
  )
}
