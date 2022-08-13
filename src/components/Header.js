import { Fragment, memo, useCallback, useEffect, useState } from 'react'
import NextLink from 'next/link'
import dynamic from 'next/dynamic'

// --- Components
import { GhostButton } from 'components/Button'

// --- Others
import { useContextProvider } from 'providers/ContextProvider'
import { navigations } from 'lib/constants'

const scrollThreshold = 76 // 8rem (pt-32 from PageLayout) - 3rem (header height) - 4px (threshold) = 5rem (80px)
const reset = {
  translateY: -100,
  opacity: 0
}

const Header = memo(({ headerTitle = '', router }) => {
  const [translateY, setTranslateY] = useState(reset.translateY)
  const [opacity, setOpacity] = useState(reset.opacity)

  const { setIsSidebarOpen } = useContextProvider()
  const {
    pathname,
    query: { slug }
  } = router
  const isWritingSlug = slug && pathname === '/writing/[slug]'
  const LikeButton = dynamic(() => import('components/LikeButton'))

  const handleScroll = useCallback(() => {
    // setState optimization threshold
    if (window.pageYOffset < 1500) {
      if (window.pageYOffset > scrollThreshold) {
        setTranslateY(Math.max(110 - window.pageYOffset, 0))
        setOpacity(
          Math.min(
            Math.max(
              (
                (window.pageYOffset - scrollThreshold * (scrollThreshold / (window.pageYOffset ** 2 / 100))) /
                100
              ).toFixed(2),
              0
            ),
            1
          )
        )
      } else {
        setTranslateY(reset.translateY)
        setOpacity(reset.opacity)
      }
    }
  })

  useEffect(() => {
    handleScroll()
  }, [])

  useEffect(() => {
    if (headerTitle) window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [headerTitle])

  /* const share = async () => {
    try {
      await navigator.share({ url: `https://onur.dev${asPath}` })
    } catch (e) {
      console.log('e', e)
      if (e.toString().includes('AbortError')) {
        return true
      }
    }
  } */

  return (
    <header className="fixed top-0 inset-x-0 z-10 w-full h-12 bg-white mx-auto md:border-b md:border-gray-200 shadow-sm">
      <div className="flex items-center h-full max-w-screen-md shadow md:shadow-none md:mx-auto py-1 px-3 md:px-16">
        {isWritingSlug ? (
          <div className="flex items-center justify-between gap-x-2 w-full">
            <div className="flex items-center gap-x-3 w-full">
              <NextLink href="/writing" passHref>
                <GhostButton title="Back" className="px-2 py-2 md:px-2 md:py-2 hover:bg-gray-100">
                  <svg width="16" height="16" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </GhostButton>
              </NextLink>
              {headerTitle && (
                <span
                  className="text-sm font-bold line-clamp-1"
                  style={{ transform: `translateY(${translateY}%)`, opacity: opacity }}
                >
                  {headerTitle}
                </span>
              )}
            </div>
            <LikeButton slug={slug} />
            {/* <OutlineButton className="px-3 py-1.5" onClick={share}>
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M3.5 5.00006C3.22386 5.00006 3 5.22392 3 5.50006L3 11.5001C3 11.7762 3.22386 12.0001 3.5 12.0001L11.5 12.0001C11.7761 12.0001 12 11.7762 12 11.5001L12 5.50006C12 5.22392 11.7761 5.00006 11.5 5.00006L10.25 5.00006C9.97386 5.00006 9.75 4.7762 9.75 4.50006C9.75 4.22392 9.97386 4.00006 10.25 4.00006L11.5 4.00006C12.3284 4.00006 13 4.67163 13 5.50006L13 11.5001C13 12.3285 12.3284 13.0001 11.5 13.0001L3.5 13.0001C2.67157 13.0001 2 12.3285 2 11.5001L2 5.50006C2 4.67163 2.67157 4.00006 3.5 4.00006L4.75 4.00006C5.02614 4.00006 5.25 4.22392 5.25 4.50006C5.25 4.7762 5.02614 5.00006 4.75 5.00006L3.5 5.00006ZM7 1.6364L5.5682 3.0682C5.39246 3.24393 5.10754 3.24393 4.9318 3.0682C4.75607 2.89246 4.75607 2.60754 4.9318 2.4318L7.1818 0.181802C7.26619 0.09741 7.38065 0.049999 7.5 0.049999C7.61935 0.049999 7.73381 0.09741 7.8182 0.181802L10.0682 2.4318C10.2439 2.60754 10.2439 2.89246 10.0682 3.0682C9.89246 3.24393 9.60754 3.24393 9.4318 3.0682L8 1.6364L8 8.5C8 8.77614 7.77614 9 7.5 9C7.22386 9 7 8.77614 7 8.5L7 1.6364Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Share</span>
                </OutlineButton> */}
          </div>
        ) : (
          <div className="flex items-center gap-x-3">
            <GhostButton
              as="button"
              title="Open Sidebar"
              className="md:hidden px-2 py-2 md:px-2 md:py-2 hover:bg-gray-100"
              onClick={() => setIsSidebarOpen(true)}
            >
              <svg width="16" height="16" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </GhostButton>
            {headerTitle && (
              <span
                className="text-sm font-bold line-clamp-1 md:hidden"
                style={{ transform: `translateY(${translateY}%)`, opacity: opacity }}
              >
                {headerTitle}
              </span>
            )}
            <div className="hidden md:flex items-center gap-x-1">
              {navigations.header.map((headerNav) => {
                const { title, url } = headerNav
                const isActive = (slug ? `/${slug}` : pathname) === url

                return (
                  <Fragment key={`headerNav_${url}`}>
                    <NextLink href={url} passHref>
                      <GhostButton className={`${isActive ? 'bg-black text-white' : 'hover:bg-gray-100'}`}>
                        {title}
                      </GhostButton>
                    </NextLink>
                  </Fragment>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  )
})

export default Header
