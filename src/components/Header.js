import { Fragment } from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

// --- Components
import { GhostButton } from 'components/Button'

// --- Others
import { LAYOUT_WIDTH, navigations } from 'lib/constants'

const Header = () => {
  const router = useRouter()

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-10 w-full bg-white mx-auto md:border-b md:border-gray-200">
        <div
          className="shadow md:shadow-none md:mx-auto h-12 py-1 px-2 md:px-12 flex items-center text-sm"
          style={{ maxWidth: LAYOUT_WIDTH }}
        >
          {navigations.header.map((headerNav) => {
            const { title, url } = headerNav

            return (
              <Fragment key={`headerNav_${url}`}>
                <NextLink href={url} passHref>
                  <GhostButton as="a" size="sm" className={`${router.pathname === url ? 'bg-gray-200' : ''}`}>
                    {title}
                  </GhostButton>
                </NextLink>
              </Fragment>
            )
          })}
        </div>
      </header>
      <div className="h-16" />
    </>
  )
}

export default Header
