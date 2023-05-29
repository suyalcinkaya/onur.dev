import { PROFILES } from '@/lib/constants'

export const Footer = () => {
  return (
    <footer className="text-sm">
      <div className="flex items-center justify-between content py-8">
        <span>
          Onur Şuyalçınkaya (
          <a
            href={PROFILES.twitter.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            @{PROFILES.twitter.username}
          </a>
          )
        </span>
        <a
          href={`${PROFILES.github.url}/onur.dev`}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4"
        >
          Source
        </a>
      </div>
    </footer>
  )
}
