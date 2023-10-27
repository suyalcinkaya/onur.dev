import Markdown from 'markdown-to-jsx'

import { Link } from '@/components/link'
import { TweetCard } from '@/components/tweet-card/tweet-card'

export const MarkdownRenderer = ({ options, ...rest }) => {
  return (
    <Markdown
      options={{
        ...options,
        overrides: {
          // Extract `className` prop to make Link component work properly
          // eslint-disable-next-line no-unused-vars
          a: ({ className, ...rest }) => <Link {...rest} />,
          p: ({ children }) => <p className="mb-2 text-sm">{children}</p>,
          img: ({ alt, src }) => (
            <span className="mt-2 block overflow-hidden rounded-xl border">
              <img
                alt={alt}
                src={`https:${src}`}
                width={400}
                height={300}
                loading="lazy"
                className="aspect-auto w-full animate-reveal object-cover"
              />
            </span>
          ),
          tweet: ({ id }) => <TweetCard id={id} />
        }
      }}
      {...rest}
    />
  )
}
