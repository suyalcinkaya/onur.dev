// --- Components
import Link from 'components/Link'
import { LinkButton } from 'components/Button'
import ExternalIcon from 'components/icons/External'

// --- Others
import { isExternalLink } from 'lib/helper'
import { profiles, LAYOUT_WIDTH, navigations } from 'lib/constants'

const Footer = () => (
  <footer>
    <div className="bg-black text-white py-12 md:py-20">
      <div className="mx-auto px-4 sm:px-6 md:px-16" style={{ maxWidth: LAYOUT_WIDTH }}>
        <div className="grid gap-6 place-items-start md:grid-cols-3 md:grid-rows-4 md:grid-flow-col">
          {navigations.footer.map((footerNav) => {
            const { title, url } = footerNav
            return (
              <Link key={`footerNav_${url}`} href={url} className="text-white underline-under hover:underline">
                {title}
                {isExternalLink(url) && (
                  <span className="ml-1 inline-block">
                    <ExternalIcon height={14} width={14} />
                  </span>
                )}
              </Link>
            )
          })}
          <LinkButton as="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Scroll to top &uarr;
          </LinkButton>
        </div>
        <div className="mt-6">
          <div className="flex items-center mb-2 space-x-6">
            {Object.values(profiles).map((profile) => {
              const { title, url, icon } = profile
              return (
                <a
                  key={`profile_${url}`}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={title}
                  title={title}
                  className="inline-flex items-center justify-items-center bg-transparent hover:text-gray-400 transition-colors h-8 min-w-8"
                >
                  {icon}
                </a>
              )
            })}
          </div>
          <div className="mt-3 text-base md:text-lg">
            <span>onur</span>
            <span className="text-gray-500">{' dot '}</span>
            <span>suyalcinkaya</span>
            <span className="text-gray-500">{' at '}</span>
            <span>gmail</span>
            <span className="text-gray-500">{' dot '}</span>
            <span>com</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
