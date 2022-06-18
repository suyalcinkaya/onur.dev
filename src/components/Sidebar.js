import { Fragment, useEffect } from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

// --- Components
import { GhostButton } from 'components/Button'

// --- Others
import { useContextProvider } from 'providers/ContextProvider'
import { navigations, profiles } from 'lib/constants'

const Sidebar = () => {
  const router = useRouter()
  const { isSidebarOpen, setIsSidebarOpen } = useContextProvider()

  useEffect(() => {
    const handleRouteChange = () => {
      setIsSidebarOpen(false)
    }
    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  useEffect(() => {
    if (isSidebarOpen && window) {
      window.document.documentElement.classList.add('overflow-hidden', 'h-full')
      window.document.body.classList.add('overflow-hidden', 'h-full')
    }

    return () => {
      window.document.documentElement.classList.remove('overflow-hidden', 'h-full')
      window.document.body.classList.remove('overflow-hidden', 'h-full')
    }
  }, [isSidebarOpen])

  return (
    <>
      <nav
        className={`fixed md:hidden shadow-lg z-30 flex flex-none w-3/5 sm:1/2 md:w-1/3 h-full min-h-screen max-h-screen transform flex-col overflow-y-auto border-r border-gray-150 bg-white transition duration-200 ease-in-out ${
          isSidebarOpen ? 'inset-y-0 left-0 translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-y-4 px-3 text-sm">
          <div className="flex items-center gap-x-1 h-12">
            <GhostButton
              title="Close"
              className="px-2 py-2 md:px-2 md:py-2 hover:bg-gray-100"
              onClick={() => setIsSidebarOpen(false)}
            >
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </GhostButton>
          </div>
          <div className="flex flex-col gap-y-1">
            {navigations.header.map((nav) => {
              const { title, url, icon } = nav

              return (
                <Fragment key={`sidebarNav_${url}`}>
                  <NextLink href={url} passHref>
                    <GhostButton className={`${router.asPath === url ? 'bg-black text-white' : 'hover:bg-gray-100'}`}>
                      <span className="flex items-center gap-x-3">
                        {icon ?? ''}
                        {title}
                      </span>
                      <span />
                    </GhostButton>
                  </NextLink>
                </Fragment>
              )
            })}
          </div>
          <div className="flex flex-col gap-y-1">
            <span className="text-gray-400 text-xs pl-2">Online</span>
            {Object.values(profiles).map((profile) => {
              const { title, url, icon } = profile

              return (
                <Fragment key={`sidebarProfile_${url}`}>
                  <GhostButton className="gap-x-3 hover:bg-gray-100" href={url}>
                    <span className="flex items-center gap-x-3">
                      {icon ?? ''}
                      {title}
                    </span>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-gray-400"
                    >
                      <path
                        d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </GhostButton>
                </Fragment>
              )
            })}
          </div>
        </div>
      </nav>
      <div
        className={`bg-black bg-opacity-10 transition duration-200 ease-in-out pointer-events-auto ${
          isSidebarOpen ? 'fixed inset-0 z-20 opacity-100 w-screen' : 'opacity-0'
        }`}
        onClick={() => setIsSidebarOpen(false)}
      />
    </>
  )
}

export default Sidebar
