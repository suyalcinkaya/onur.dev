import dynamic from 'next/dynamic'
import NextImage from 'next/image'
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

// --- Components
import Link from 'components/Link'

const dasherize = (str) => String(str).replace(/ +/g, '-').toLowerCase()

function options(links) {
  const findAsset = (id) => links?.assets.block.find((item) => item.sys.id === id)
  const findInlineEntry = (id) => links?.entries.inline.find((item) => item.sys.id === id)

  return {
    renderMark: {
      [MARKS.BOLD]: (text) => <span className="font-semibold text-black">{text}</span>,
      [MARKS.ITALIC]: (text) => <span className="italic">{text}</span>,
      [MARKS.CODE]: (text) => (
        <code className="inline-block font-medium not-italic text-sm px-0.5 py-0.5 rounded-md bg-gray-100 before:content-['`'] after:content-['`']">
          {text}
        </code>
      )
    },
    renderNode: {
      [BLOCKS.HEADING_2]: (_, children) => {
        const id = dasherize(children)
        return (
          <h2 id={`h2-${id}`} className="mt-8 mb-2">
            <a href={`#h2-${id}`}>{children}</a>
          </h2>
        )
      },
      [BLOCKS.HEADING_3]: (_, children) => {
        const id = dasherize(children)
        return (
          <h3 id={`h3-${id}`} className="mt-6 mb-2">
            <a href={`#h3-${id}`}>{children}</a>
          </h3>
        )
      },
      // Must be a <div> instead of <p> to avoid descendant issue, hence to avoid mismatching UI between server and client on hydration.
      [BLOCKS.PARAGRAPH]: (_, children) => <div className="leading-slacker mb-4 last:mb-0">{children}</div>,
      [BLOCKS.UL_LIST]: (_, children) => <ul className="flex flex-col gap-y-2 list-disc pl-6 mb-4">{children}</ul>,
      [BLOCKS.OL_LIST]: (_, children) => (
        <ol className="flex flex-col gap-y-2 list-decimal list-inside mb-4">{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (_, children) => <li className="pl-2">{children}</li>,
      [BLOCKS.QUOTE]: (_, children) => (
        <blockquote className="px-4 mb-4 border-l-2 border-gray-200 rounded-r-lg font-medium">{children}</blockquote>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const asset = findAsset(node.data.target.sys.id)

        return (
          <figure className="mb-6">
            <NextImage
              src={asset.url}
              height={asset.height || 300}
              width={asset.width || 400}
              alt={asset.description}
            />
            {asset.description && (
              <figcaption className="text-xs text-gray-400 text-center font-light">{asset.description}</figcaption>
            )}
          </figure>
        )
      },
      [BLOCKS.HR]: () => <hr className="my-12 w-1/5" />,
      [INLINES.HYPERLINK]: (node, children) => <Link href={node.data.uri}>{children}</Link>,
      [INLINES.EMBEDDED_ENTRY]: (node) => {
        const entry = findInlineEntry(node.data.target.sys.id)
        const LazyLoad = dynamic(() => import('react-lazyload'))
        const CodeBlock = dynamic(() => import('components/CodeBlock'))

        switch (entry.__typename) {
          case 'ContentEmbed': {
            const { title, embedUrl, type } = entry

            switch (type) {
              case 'Video': {
                return (
                  <LazyLoad once>
                    <figure>
                      <iframe
                        src={embedUrl}
                        title={title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full aspect-video rounded-lg shadow-lg"
                      />
                      <figcaption className="text-sm text-gray-500 text-center mt-2">{title}</figcaption>
                    </figure>
                  </LazyLoad>
                )
              }
              case 'SoundCloud': {
                return (
                  <LazyLoad once>
                    <figure>
                      <iframe
                        src={embedUrl}
                        title={title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full rounded-lg shadow-lg"
                      />
                      <figcaption className="text-sm text-gray-500 text-center mt-2">{title}</figcaption>
                    </figure>
                  </LazyLoad>
                )
              }
              default:
                return null
            }
          }
          case 'CodeBlock': {
            return (
              <LazyLoad once offset={50}>
                <CodeBlock {...entry} />
              </LazyLoad>
            )
          }
          default:
            return null
        }
      }
    }
  }
}

const RichText = ({ content }) => {
  if (!content) return null
  return documentToReactComponents(content.json, options(content.links))
}

export default RichText
