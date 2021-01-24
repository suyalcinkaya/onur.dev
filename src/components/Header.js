import { Fragment, useEffect, useState } from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

// --- Components
import Button from 'components/Button'

// --- Icons
import MenuIcon from 'components/icons/Menu'

// --- Others
import { HEADER_HEIGHT, MAX_WIDTH, mobileMenuNavigations, headerNavigations } from 'lib/constants'

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
        className="fixed top-0 inset-x-0 z-10 w-full mx-auto md:border-b"
        style={{
          backdropFilter: 'saturate(180%) blur(5px)',
          WebkitBackdropFilter: 'saturate(180%) blur(5px)',
          backgroundColor: 'hsla(0, 0%, 100%, 0.8)',
          minHeight: HEADER_HEIGHT
        }}
      >
        <div className="shadow md:shadow-none md:mx-auto px-4 sm:px-6 min-h-20" style={{ maxWidth: MAX_WIDTH }}>
          <div className="flex md:hidden items-center min-h-20">
            {!isMenuOpen ? (
              <>
                <MenuIcon onClick={() => setIsMenuOpen(true)} />
                <NextLink href="/" passHref>
                  <Button as="a" variant="ghost">
                    Home
                  </Button>
                </NextLink>
              </>
            ) : (
              <div className="grid gap-4 w-full pt-4 pb-6">
                <div className="text-3xl leading-none font-light mt-1.5 w-min" onClick={() => setIsMenuOpen(false)}>
                  ×
                </div>
                {mobileMenuNavigations.map((mobileMenuNav, mobileMenuNavIndex) => (
                  <Fragment key={`mobileMenuNav_${mobileMenuNavIndex}`}>
                    <NextLink href={mobileMenuNav.url}>
                      <a
                        className={`font-semibold ${
                          router.pathname === mobileMenuNav.url
                            ? 'rounded-md bg-blue-100 py-2 px-2 sm:px-3 -my-2 -mx-2 sm:-mx-3'
                            : ''
                        }`}
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
            {headerNavigations.map((headerNav, headerNavIndex) => (
              <Fragment key={`headerNav_${headerNavIndex}`}>
                <NextLink href={headerNav.url} passHref>
                  <Button as="a" variant="ghost" className="font-semibold">
                    {headerNav.name}
                  </Button>
                </NextLink>
              </Fragment>
            ))}
          </div>
        </div>
      </header>
      <div style={{ minHeight: HEADER_HEIGHT }} />
    </>
  )
}

export default Header
