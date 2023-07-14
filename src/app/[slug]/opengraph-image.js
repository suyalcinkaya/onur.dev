import { ImageResponse } from 'next/server'
import { getPageSeo } from '@/lib/contentful'

export const runtime = 'edge'

export const alt = 'Onur Şuyalçınkaya'
export const size = {
  width: 1200,
  height: 630
}

const font = fetch(new URL('@/assets/SFProDisplay-Bold.ttf', import.meta.url)).then((res) => res.arrayBuffer())

export const contentType = 'image/png'

export default async function Image({ params }) {
  const { slug } = params
  const seoData = (await getPageSeo(slug)) ?? null
  const { title, seoDescription } = seoData

  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            height: '100%',
            width: '100%',
            backgroundImage:
              'linear-gradient(to right, #80808012 1px, transparent 1px), linear-gradient(to bottom, #80808012 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 50,
            left: 50,
            fontSize: 36,
            background: 'black',
            color: 'white',
            padding: '0.5rem 1rem'
          }}
        >
          {`onur.dev/${slug}`}
        </div>
        <p style={{ fontSize: 96 }}>{title}</p>
        <p style={{ fontSize: 36, width: '50%', textAlign: 'center' }}>{seoDescription}</p>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'SF Pro',
          data: await font,
          style: 'normal',
          weight: 400
        }
      ]
    }
  )
}
