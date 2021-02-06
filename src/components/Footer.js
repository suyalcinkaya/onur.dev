import NextLink from 'next/link'

// --- Components
import Button from 'components/Button'

// --- Others
import { BUY_ME_COFFEE_URL, profiles, MAX_WIDTH, footerNavigations } from 'lib/constants'

const Footer = () => (
  <footer>
    <div className="-mt-8 md:-mt-32 lg:-mt-40">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#000"
          fillOpacity="1"
          d="M0,288L60,272C120,256,240,224,360,208C480,192,600,192,720,208C840,224,960,256,1080,266.7C1200,277,1320,267,1380,261.3L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
    <div className="bg-black text-white pb-12 pt-10 md:pt-4">
      <div className="mx-auto px-4 sm:px-6 md:px-16" style={{ maxWidth: MAX_WIDTH }}>
        <div className="grid gap-6 md:grid-cols-3 md:grid-rows-3 md:grid-flow-col">
          {footerNavigations.map((footerNav, footerNavIndex) => (
            <NextLink key={`footerNav_${footerNavIndex}`} href={footerNav.url} passHref>
              <Button variant="link">{footerNav.name}</Button>
            </NextLink>
          ))}
          <Button href={BUY_ME_COFFEE_URL} variant="link" isExternal>
            Buy me a coffee
          </Button>
          <Button variant="link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Scroll to top &uarr;
          </Button>
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
            <strong>onur</strong>
            <span className="text-gray-400">{' dot '}</span>
            <strong>suyalcinkaya</strong>
            <span className="text-gray-400">{' at '}</span>
            <strong>gmail</strong>
            <span className="text-gray-400">{' dot '}</span>
            <strong>com</strong>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
