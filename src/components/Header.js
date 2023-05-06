'use client'

import { memo, useEffect, useState } from 'react'
import { usePathname, useParams } from 'next/navigation'
import NextLink from 'next/link'
import dynamic from 'next/dynamic'
import { useScrollData } from 'scroll-data-hook'

const DynamicViews = dynamic(() => import('@/components/Views'))
import { SCROLL_THRESHOLD } from '@/lib/constants'

const Header = memo(({ allPosts }) => {
  const [headerTitle, setHeaderTitle] = useState(null)
  const pathname = usePathname()
  const { slug } = useParams()
  const isWritingSlug = slug && pathname.startsWith('/writing/')

  useEffect(() => {
    if (isWritingSlug) {
      const post = allPosts.find((post) => post.slug === slug)
      if (post?.title) setHeaderTitle(post.title)
    }
  }, [slug])

  const {
    position: { y: scrollY }
  } = useScrollData()
  const translateY = Math.max(110 - scrollY, 0)
  const opacity = Math.min(
    Math.max(((scrollY - SCROLL_THRESHOLD * (SCROLL_THRESHOLD / (scrollY ** 2 / 100))) / 100).toFixed(3), 0),
    1
  )

  return (
    <header className="fixed top-0 inset-x-0 z-10 w-full h-12 bg-white mx-auto md:border-b md:border-gray-200 shadow-sm font-medium">
      <div className="flex items-center h-full content shadow text-sm md:shadow-none">
        {isWritingSlug ? (
          <div className="flex items-center justify-between gap-2 w-full">
            <div className="flex items-center gap-3">
              <NextLink href="/" title="Go back">
                <svg width="16" height="16" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </NextLink>
              {headerTitle && (
                <span className="font-bold line-clamp-1" style={{ transform: `translateY(${translateY}%)`, opacity }}>
                  {headerTitle}
                </span>
              )}
            </div>
            <DynamicViews slug={slug} />
          </div>
        ) : (
          <div className="flex items-center justify-between w-full gap-1 text-gray-400">
            <NextLink
              href="/"
              className={`inline-flex items-center gap-2 hover:text-black ${pathname === '/' ? 'text-black' : ''}`}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                <path
                  d="M12 22.9272C12.7383 22.9272 13.3433 22.3838 13.4458 21.6147C14.4609 14.7651 15.394 13.8115 21.9771 13.063C22.7358 12.9707 23.3203 12.335 23.3203 11.5967C23.3203 10.8481 22.7461 10.2329 21.9873 10.1201C15.4453 9.20752 14.6353 8.40771 13.4458 1.56836C13.3125 0.80957 12.728 0.266113 12 0.266113C11.2515 0.266113 10.6567 0.80957 10.5337 1.57861C9.53906 8.41797 8.60596 9.37158 2.0332 10.1201C1.25391 10.2227 0.679688 10.8379 0.679688 11.5967C0.679688 12.335 1.2334 12.9502 2.0127 13.063C8.56494 13.9961 9.36475 14.7856 10.5337 21.625C10.6875 22.394 11.2822 22.9272 12 22.9272Z"
                  fill="currentColor"
                ></path>
              </svg>{' '}
              <span>Onur Şuyalçınkaya</span>
            </NextLink>
            <div className="flex gap-4 md:gap-6">
              <NextLink href="/about" className={`hover:text-black ${pathname === '/about' ? 'text-black' : ''}`}>
                About
              </NextLink>
              <NextLink href="/journey" className={`hover:text-black ${pathname === '/journey' ? 'text-black' : ''}`}>
                Journey
              </NextLink>
            </div>
          </div>
        )}
      </div>
    </header>
  )
})

export default Header
