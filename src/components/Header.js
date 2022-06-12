import { Fragment, useEffect, useState } from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

// --- Components
import { GhostButton } from 'components/Button'
import LikeButton from 'components/LikeButton'

// --- Others
import { useHeaderTitleContext } from 'providers/HeaderTitleProvider'
import { LAYOUT_WIDTH, navigations } from 'lib/constants'

const scrollThreshold = 80
const reset = {
  translateY: -100,
  opacity: 0
}

const Header = () => {
  const { headerTitle } = useHeaderTitleContext()
  const [translateY, setTranslateY] = useState(reset.translateY)
  const [opacity, setOpacity] = useState(reset.opacity)

  const router = useRouter()
  const { pathname, query } = router
  const isWritingSlug = pathname === '/writing/[slug]'

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > scrollThreshold) {
        setTranslateY(Math.max(140 - window.pageYOffset, 0))
        setOpacity(
          Math.min(
            (
              (window.pageYOffset - scrollThreshold * (scrollThreshold / (Math.pow(window.pageYOffset, 2) / 100))) /
              100
            ).toFixed(3),
            1
          )
        )
      } else {
        setTranslateY(reset.translateY)
        setOpacity(reset.opacity)
      }
    }

    window.removeEventListener('scroll', handleScroll)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-10 w-full bg-white mx-auto md:border-b md:border-gray-200 shadow-sm">
        <div
          className={`flex items-center shadow md:shadow-none md:mx-auto h-12 py-1 px-3 ${
            isWritingSlug ? 'md:px-16' : 'md:px-12'
          }`}
          style={{ maxWidth: LAYOUT_WIDTH }}
        >
          {isWritingSlug ? (
            <div className="flex items-center justify-between w-full space-x-2">
              <div className="flex items-center space-x-2 w-full">
                <NextLink href="/writing" passHref>
                  <GhostButton className="px-2 py-2 md:px-2 md:py-2 hover:bg-gray-100">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </GhostButton>
                </NextLink>
                <span
                  className="text-sm font-bold line-clamp-1"
                  style={{ transform: `translateY(${translateY}%)`, opacity: opacity }}
                >
                  {headerTitle}
                </span>
              </div>
              <LikeButton slug={query?.slug} />
            </div>
          ) : (
            <div className="flex items-center space-x-1">
              {navigations.header.map((headerNav) => {
                const { title, url } = headerNav

                return (
                  <Fragment key={`headerNav_${url}`}>
                    <NextLink href={url} passHref>
                      <GhostButton className={`${router.asPath === url ? 'bg-black text-white' : 'hover:bg-gray-100'}`}>
                        {title}
                      </GhostButton>
                    </NextLink>
                  </Fragment>
                )
              })}
            </div>
          )}
        </div>
      </header>
      <div className="h-16" />
    </>
  )
}

export default Header
