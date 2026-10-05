import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { ImageResponse } from 'next/og'
import { SITE_NAME } from '@/lib/site'

export const OG_SIZE = { width: 1200, height: 630 }

interface CardProps {
  eyebrow: string
  source?: string
  title: string
  body?: string
}

export async function renderCard({ eyebrow, title, body, source }: CardProps) {
  const latin = await readFile(path.join(process.cwd(), 'lib/fonts/NotoSans-Regular.ttf'))
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 80px',
          fontFamily: 'Noto Sans',
          background: 'linear-gradient(160deg,#f8f1e7 0%,#e9f3ec 100%)',
          color: '#1c1917',
        }}
      >
        <div style={{ display: 'flex', fontSize: 26, letterSpacing: 4, color: '#047857', textTransform: 'uppercase' }}>
          {eyebrow}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ display: 'flex', fontSize: 56, lineHeight: 1.25, justifyContent: 'center' }}>{title}</div>
          {body && (
            <div style={{ display: 'flex', fontSize: 34, color: '#44403c', marginTop: 28, lineHeight: 1.4, justifyContent: 'center' }}>
              {body.length > 160 ? `${body.slice(0, 157)}…` : body}
            </div>
          )}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 26, color: '#78716c' }}>
          <span style={{ color: '#047857', fontWeight: 700 }}>{SITE_NAME}</span>
          <span>{source ?? 'A resting place for tired hearts'}</span>
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        { name: 'Noto Sans', data: latin, style: 'normal', weight: 400 },
      ],
    },
  )
}
