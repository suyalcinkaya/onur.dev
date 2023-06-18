import ReactMarkdown from 'markdown-to-jsx'
import Image from 'next/image'

import { Link } from '@/app/_components/Link'

export default function Markdown({ options, ...rest }) {
  console.log('options', options)
  return (
    <ReactMarkdown
      options={{
        ...options,
        overrides: {
          // Ignore `className` prop to make Link component work properly
          a: ({ className, ...rest }) => <Link {...rest} />,
          img: ({ alt, src }) => (
            <Image alt={alt} src={`https:${src}`} width={400} height={300} className="mt-2 w-full max-w-md" />
          )
        }
      }}
      {...rest}
    />
  )
}
