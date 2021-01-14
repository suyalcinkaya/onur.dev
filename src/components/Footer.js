import NextLink from 'next/link'

// --- Components
import Button from 'components/Button'

// --- Others
import { BUY_ME_COFFEE_URL, profiles, MAX_WIDTH, footerNavigations } from 'lib/constants'

const Footer = () => (
  <footer className="bg-black text-white py-12">
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
  </footer>
)

export default Footer
