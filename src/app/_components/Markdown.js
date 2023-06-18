import Image from 'next/image'
import ReactMarkdown from 'markdown-to-jsx'

import Link from '@/app/_components/Link'

export default function Markdown(props) {
  return (
    <ReactMarkdown
      options={{
        overrides: {
          // Ignore `className` prop to make Link component work properly
          a: ({ className, ...rest }) => <Link {...rest} />,
          img: ({ alt, src }) => (
            <Image alt={alt} src={`https:${src}`} width={400} height={300} className="mt-2 w-full max-w-md" />
          )
        }
      }}
      {...props}
    />
  )
}
