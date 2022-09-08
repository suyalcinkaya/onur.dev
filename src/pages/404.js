import { NextSeo } from 'next-seo'

// --- Components
import { OutlineButton } from 'components/Button'

const title = '404: Page not found'

export default function Custom404() {
  return (
    <>
      <NextSeo
        title={title}
        openGraph={{
          title
        }}
        noindex={true}
        nofollow={true}
      />
      <div className="flex flex-col items-center justify-center h-full gap-y-3 text-center">
        <div className="flex items-center gap-x-3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36">
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 2a9 9 0 0 1 9 9v7.5a3.5 3.5 0 0 1-6.39 1.976 2.999 2.999 0 0 1-5.223 0 3.5 3.5 0 0 1-6.382-1.783L3 18.499V11a9 9 0 0 1 9-9zm0 2a7 7 0 0 0-6.996 6.76L5 11v7.446l.002.138a1.5 1.5 0 0 0 2.645.88l.088-.116a2 2 0 0 1 3.393.142.999.999 0 0 0 1.74.003 2 2 0 0 1 3.296-.278l.097.13a1.5 1.5 0 0 0 2.733-.701L19 18.5V11a7 7 0 0 0-7-7zm0 8c1.105 0 2 1.12 2 2.5s-.895 2.5-2 2.5-2-1.12-2-2.5.895-2.5 2-2.5zM9.5 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" />
          </svg>
          <h1>Looks like you're lost.</h1>
        </div>
        <p className="m-0">
          This link might be broken, deleted, or moved. Nevertheless, there’s nothing to see here...
        </p>
        <OutlineButton href="/" className="w-fit">Go home</OutlineButton>
      </div>
    </>
  )
}
