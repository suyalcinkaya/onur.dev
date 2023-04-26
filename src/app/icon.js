import { ImageResponse } from 'next/server'

export const size = {
  width: 32,
  height: 32
}
export const contentType = 'image/png'
export const runtime = 'edge'

export default function icon() {
  return new ImageResponse(
    (
      <div
        style={{
          // background: '#0903F9',
          background: '#0085ff',
          width: '100%',
          height: '100%',
          borderRadius: '50%'
        }}
      />
    ),
    size
  )
}
