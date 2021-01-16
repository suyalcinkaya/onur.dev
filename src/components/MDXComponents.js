import NextImage from 'next/image'

// --- Components
import Link from 'components/Link'

const DocsHeading = (props) => (
  <props.as {...props}>
    <div style={{ pointerEvents: 'auto' }}>
      <a href={`#${props.id}`}>
        {props.children}{' '}
        <span className="title-link-anchor font-medium outline-none ml-px opacity-0" aria-label="anchor">
          #
        </span>
      </a>
    </div>
  </props.as>
)

const MDXComponents = {
  h2: (props) => <DocsHeading as="h2" className="title-link mt-8 mb-4" {...props} />,
  h3: (props) => <DocsHeading as="h3" className="title-link mt-8 mb-2" {...props} />,
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
  // thead: (props) => <thead {...props} />,
  // tbody: (props) => <tbody {...props} />,
  a: Link,
  p: (props) => <p className="mb-6" {...props} />,
  ul: (props) => <ul className="list-circle list-inside my-4" {...props} />,
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
