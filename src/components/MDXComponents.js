import styled from '@emotion/styled'
import NextImage from 'next/image'
const { colors, borderRadius, spacing } = require('tailwindcss/defaultTheme')

// --- Components
import Link from 'components/Link'

const StyledTHead = styled.thead({
  boxShadow: `0 0 0 1px ${colors.gray[300]}`,

  th: {
    background: colors.gray[50]
  },
  'th:first-of-type': {
    borderTopLeftRadius: borderRadius.md,
    borderBottomLeftRadius: borderRadius.md
  },
  'th:last-of-type': {
    borderTopRightRadius: borderRadius.md,
    borderBottomRightRadius: borderRadius.md
  }
})

const StyledTBody = styled.tbody({
  'tr:not(:last-of-type)': {
    borderBottom: `1px solid ${colors.gray[200]}`
  }
})

const HeadingContainer = styled.div`
  scroll-margin-top: 100px;
  scroll-snap-margin-top: 100px;

  a {
    transition: 200ms ease-in-out;
  }

  &[id]:before {
    display: block;
    visibility: hidden;
    content: '';
  }

  &[id]:hover {
    a {
      opacity: 1;
    }
  }
`

const DocsHeading = (props) => (
  <HeadingContainer className="font-semibold" {...props}>
    <div style={{ pointerEvents: 'auto' }}>
      {props.children}
      {props.id && (
        <a
          href={`#${props.id}`}
          aria-label="anchor"
          className="text-primary-default font-medium outline-none opacity-0 ml-2"
        >
          #
        </a>
      )}
    </div>
  </HeadingContainer>
)

const Ul = styled.ul`
  ul {
    padding-left: ${spacing[6]};
    list-style-type: square;
  }
`

Ul.defaultProps = {
  as: 'ul',
  styleType: 'circle',
  stylePosition: 'inside',
  mt: 2,
  mb: 6
}

const MDXComponents = {
  h2: (props) => <DocsHeading as="h2" className="text-2xl font-semibold mt-8 mb-4" {...props} />,
  h3: (props) => <DocsHeading as="h3" className="text-xl font-semibold mt-8 mb-2" {...props} />,
  inlineCode: (props) => (
    <code
      className="font-mono px-2 py-1 rounded-md text-sm"
      style={{ background: '#FEFCBF', color: '#744210' }}
      {...props}
    />
  ),
  br: (props) => <div className="h-2" {...props} />,
  hr: (props) => <div className="my-8 mx-auto w-1/2 opacity-70 border-b border-solid border-gray-200" {...props} />,
  table: (props) => <table className="inline-table text-left my-4 w-full" {...props} />,
  th: (props) => <th className="font-normal px-3 md:px-4 py-3" {...props} />,
  td: (props) => <td className="py-3 pl-3 md:pl-4 whitespace-normal" {...props} />,
  thead: (props) => <StyledTHead className="text-gray-600 rounded-md overflow-hidden" {...props} />,
  tbody: (props) => <StyledTBody {...props} />,
  a: Link,
  p: (props) => <p className="mb-6" {...props} />,
  ul: (props) => <Ul className="list-circle list-inside my-4" {...props} />,
  ol: (props) => <ol className="list-decimal list-inside my-4" {...props} />,
  li: (props) => <li className="mb-3 last:mb-0" {...props} />,
  blockquote: (props) => (
    <blockquote className="pl-4 md:pl-6 mb-6 last:mb-0 border-l-4 border-gray-200 bg-transparent italic" {...props} />
  ),
  img: (props) => <NextImage quality={25} {...props} />,
  figcaption: (props) => <figcaption className="text-sm text-gray-500 text-center" {...props} />,
  iframe: (props) => <iframe className="w-full" {...props} />
}

export default MDXComponents
