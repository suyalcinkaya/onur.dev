import ReactMarkdown from 'markdown-to-jsx'

import { Link } from '@/app/_components/Link'

export const Markdown = ({ options, ...rest }) => {
  return (
    <ReactMarkdown
      options={{
        ...options,
        overrides: {
          // Extract `className` prop to make Link component work properly
          // eslint-disable-next-line no-unused-vars
          a: ({ className, ...rest }) => <Link {...rest} />,
          img: ({ alt, src }) => (
            <span className="mt-2 flex overflow-hidden rounded-xl">
              <img
                alt={alt}
                src={`https:${src}`}
                width={400}
                height={300}
                className="aspect-auto w-full animate-reveal object-cover"
                loading="lazy"
              />
            </span>
          )
        }
      }}
      {...rest}
    />
  )
}
