import NextLink from 'next/link'

// --- Components
import { LinkButton } from 'components/Button'

// --- Others
import { BUY_ME_COFFEE_URL, profiles, MAX_WIDTH, footerNavigations } from 'lib/constants'

const Footer = () => (
  <footer>
    <div className="bg-black text-white py-12 md:py-20">
      <div className="mx-auto px-4 sm:px-6 md:px-16" style={{ maxWidth: MAX_WIDTH }}>
        <div className="grid gap-6 place-items-start md:grid-cols-3 md:grid-rows-3 md:grid-flow-col">
          {footerNavigations.map((footerNav, footerNavIndex) => (
            <NextLink key={`footerNav_${footerNavIndex}`} href={footerNav.url} passHref>
              <LinkButton>{footerNav.name}</LinkButton>
            </NextLink>
          ))}
          <LinkButton href={BUY_ME_COFFEE_URL} isExternal>
            Buy me a coffee
          </LinkButton>
          <LinkButton as="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Scroll to top &uarr;
          </LinkButton>
        </div>
        <div className="mt-6">
          <div className="flex items-center mb-2 space-x-6">
            {profiles.map((profile, profileIndex) => (
              <a
                key={`profile_${profileIndex}_${profile.name}`}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={profile.name}
                title={profile.name}
                className="inline-flex items-center justify-items-center bg-transparent hover:text-gray-400 transition-colors h-8 min-w-8"
              >
                {profile.icon}
              </a>
            ))}
          </div>
          <div className="mt-3 text-sm md:text-base">
            <span>onur</span>
            <span className="text-gray-400">{' dot '}</span>
            <span>suyalcinkaya</span>
            <span className="text-gray-400">{' at '}</span>
            <span>gmail</span>
            <span className="text-gray-400">{' dot '}</span>
            <span>com</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
