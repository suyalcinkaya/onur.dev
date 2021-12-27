import { Fragment } from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

// --- Components
import { GhostButton } from 'components/Button'

// --- Others
import { MAX_WIDTH, navigations } from 'lib/constants'

const Header = () => {
  const router = useRouter()

  return (
    <>
      <header
        className="fixed top-0 inset-x-0 z-10 w-full mx-auto min-h-16 md:border-b md:border-gray-200"
        style={{
          backdropFilter: 'saturate(180%) blur(25px)',
          WebkitBackdropFilter: 'saturate(180%) blur(25px)'
        }}
      >
        <div className="shadow md:shadow-none md:mx-auto px-2 md:px-12" style={{ maxWidth: MAX_WIDTH }}>
          <div className="flex items-center min-h-16">
            {navigations.header.map((headerNav, headerNavIndex) => (
              <Fragment key={`headerNav_${headerNavIndex}`}>
                <NextLink href={headerNav.url} passHref>
                  <GhostButton
                    as="a"
                    size="sm"
                    className={`${router.pathname === headerNav.url ? 'font-semibold' : ''}`}
                  >
                    {headerNav.name}
                  </GhostButton>
                </NextLink>
              </Fragment>
            ))}
          </div>
        </div>
      </header>
      <div className="h-16" />
    </>
  )
}

export default Header
