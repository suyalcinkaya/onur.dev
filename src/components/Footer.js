import NextLink from 'next/link'

// --- Components
import { LinkButton } from 'components/Button'

// --- Others
import { BUY_ME_COFFEE_URL, profiles, MAX_WIDTH, footerNavigations } from 'lib/constants'

const Footer = () => (
  <footer>
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#000"
          fillOpacity="1"
          d="M0,288L60,272C120,256,240,224,360,208C480,192,600,192,720,208C840,224,960,256,1080,266.7C1200,277,1320,267,1380,261.3L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
    <div className="bg-black text-white pb-12 pt-8 lg:pt-4">
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
          <div className="mt-3 text-sm">
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
