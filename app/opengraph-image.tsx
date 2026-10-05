import { ImageResponse } from 'next/og'

export const alt = 'Uns — A Resting Place for Tired Hearts'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#f8f1e7',
          color: '#064e3b',
        }}
      >
        <div style={{ fontSize: 140, fontWeight: 700 }}>Uns</div>
        <div style={{ fontSize: 44, marginTop: 16, color: '#57534e' }}>
          A Resting Place for Tired Hearts
        </div>
      </div>
    ),
    size
  )
}
