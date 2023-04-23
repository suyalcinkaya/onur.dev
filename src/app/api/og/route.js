import { ImageResponse } from '@vercel/og'

export const runtime = 'edge'

const font = fetch(new URL('@/assets/SFProDisplay-Bold.ttf', import.meta.url)).then((res) => res.arrayBuffer())

export async function GET(request) {
  const fontData = await font

  try {
    const { searchParams } = new URL(request.url)
    const titleParam = searchParams.get('title')
    const urlParam = searchParams.get('url')
    const url = `onur.dev${urlParam ? `/${urlParam}` : ''}`

    return new ImageResponse(
      (
        <div tw="flex w-full h-full items-center justify-center bg-white" style={{ fontFamily: 'SF Pro' }}>
          <div tw="flex absolute top-12 left-12 bg-black text-white py-2 px-3">
            <span tw="text-4xl">{url}</span>
          </div>
          <div tw="flex mx-24 text-center">
            <h1 tw="text-8xl" style={{ lineHeight: 1.1, letterSpacing: '-0.015em' }}>
              {titleParam}
            </h1>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'SF Pro',
            data: fontData,
            style: 'normal'
          }
        ]
      }
    )
  } catch (e) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500
    })
  }
}
