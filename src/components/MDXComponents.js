import NextImage from 'next/image'

// --- Components
import Link from 'components/Link'

const DocsHeading = (props) => (
  <props.as {...props}>
    <div style={{ pointerEvents: 'auto' }}>
      <a href={`#${props.id}`} className="inline-block">
        {props.children}
        <span className="inline-block title-link-anchor font-medium outline-none ml-1 opacity-0" aria-label="anchor">
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
      className="font-mono text-sm px-2 py-1 rounded-md"
      style={{ background: '#FEFCBF', color: '#744210' }}
      {...props}
    />
  ),
  br: (props) => <div className="h-2" {...props} />,
  hr: (props) => <div className="my-8 border-dashed" {...props} />,
  table: (props) => (
    <div className="my-8 shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
      <table className="min-w-full divide-y divide-gray-200" {...props} />
    </div>
  ),
  thead: (props) => <thead className="bg-gray-50" {...props} />,
  tbody: (props) => <tbody className="bg-white divide-y divide-gray-200" {...props} />,
  th: (props) => (
    <th
      scope="col"
      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
      {...props}
    />
  ),
  td: (props) => <td className="text-sm px-6 py-4 whitespace-nowrap" {...props} />,
  a: Link,
  p: (props) => <p className="mb-6" {...props} />,
  ul: (props) => <ul className="list-circle list-inside my-4" {...props} />,
  ol: (props) => <ol className="list-decimal list-inside my-4" {...props} />,
  li: (props) => <li className="mb-3 last:mb-0" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="pl-4 md:pl-6 mb-6 last:mb-0 border-l-4 border-gray-200 bg-transparent italic font-medium"
      {...props}
    />
  ),
  img: (props) => <NextImage quality={25} {...props} />,
  figcaption: (props) => <figcaption className="text-sm text-gray-500 text-center" {...props} />,
  iframe: (props) => <iframe className="w-full" {...props} />
}

export default MDXComponents
