import ReactMarkdown from 'markdown-to-jsx'

// --- Components
import Link from 'components/Link'

export default function Markdown(props) {
  return (
    <ReactMarkdown
      options={{
        overrides: {
          // Ignore `className` prop to make Link component work properly
          a: ({ className, ...rest }) => <Link {...rest} />
        }
      }}
      {...props}
    />
  )
}
