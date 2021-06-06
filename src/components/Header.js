import { Fragment, useEffect, useState } from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

// --- Components
import { GhostButton, OutlineButton } from 'components/Button'

// --- Icons
import MenuIcon from 'components/icons/Menu'

// --- Others
import { MAX_WIDTH, navigations } from 'lib/constants'

const Header = () => {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleRouteChange = () => {
      setIsMenuOpen(false)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <header
        className="fixed top-0 inset-x-0 z-10 w-full mx-auto min-h-16"
        style={{
          backdropFilter: 'saturate(180%) blur(25px)',
          WebkitBackdropFilter: 'saturate(180%) blur(25px)'
          // backgroundColor: 'hsla(0, 0%, 100%, 0.8)',
          // minHeight: HEADER_HEIGHT
        }}
      >
        <div
          className={`shadow md:shadow-none md:mx-auto px-4 sm:px-6 min-h-16 ${isMenuOpen && 'rounded-b-3xl'}`}
          style={{ maxWidth: MAX_WIDTH }}
        >
          <div className="flex md:hidden items-center min-h-16">
            {!isMenuOpen ? (
              <>
                <MenuIcon onClick={() => setIsMenuOpen(true)} className="mr-2" />
                <NextLink href="/" passHref>
                  <GhostButton as="a">Home</GhostButton>
                </NextLink>
              </>
            ) : (
              <div className="grid gap-4 w-full pt-2 pb-4">
                <div className="text-3xl leading-none font-light mt-1.5 w-min" onClick={() => setIsMenuOpen(false)}>
                  ×
                </div>
                {navigations.mobile.map((mobileMenuNav, mobileMenuNavIndex) => (
                  <Fragment key={`mobileMenuNav_${mobileMenuNavIndex}`}>
                    <NextLink href={mobileMenuNav.url}>
                      <a
                        className={
                          router.pathname === mobileMenuNav.url
                            ? 'rounded-md py-2 px-2 sm:px-3 -my-2 -mx-2 sm:-mx-3 glassmorphism'
                            : ''
                        }
                        disabled={router.pathname === mobileMenuNav.url}
                      >
                        {mobileMenuNav.name}
                      </a>
                    </NextLink>
                  </Fragment>
                ))}
              </div>
            )}
          </div>
          <div className="hidden md:grid md:grid-flow-col md:my-0 md:place-content-around md:px-0 min-h-20">
            {navigations.header.map((headerNav, headerNavIndex) => (
              <Fragment key={`headerNav_${headerNavIndex}`}>
                <NextLink href={headerNav.url} passHref>
                  <GhostButton as="a" size="sm" className={router.pathname === headerNav.url ? 'glassmorphism' : ''}>
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
