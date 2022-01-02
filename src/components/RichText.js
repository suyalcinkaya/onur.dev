import NextImage from 'next/image'
import dynamic from 'next/dynamic'
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

// --- Components
import Link from 'components/Link'
const DynamicCodeBlock = dynamic(() => import('components/CodeBlock'))

function options(links) {
  const findAsset = (id) => links?.assets.block.find((item) => item.sys.id === id)
  const findInlineEntry = (id) => links?.entries.inline.find((item) => item.sys.id === id)

  return {
    renderMark: {
      [MARKS.BOLD]: (text) => <span className="font-medium">{text}</span>,
      [MARKS.ITALIC]: (text) => <span className="italic">{text}</span>,
      [MARKS.CODE]: (text) => (
        <code className="font-mono not-italic text-sm p-1.5 rounded-md bg-yellow-200 text-yellow-700">{text}</code>
      )
    },
    renderNode: {
      [BLOCKS.HEADING_2]: (node, children) => <h2 className="font-medium mb-4">{children}</h2>,
      [BLOCKS.HEADING_3]: (node, children) => <h3 className="font-medium mb-3">{children}</h3>,
      [BLOCKS.PARAGRAPH]: (node, children) => <p className="mb-6">{children}</p>,
      [BLOCKS.UL_LIST]: (node, children) => <ul className="list-circle list-inside pl-4 mb-6 space-y-2">{children}</ul>,
      [BLOCKS.OL_LIST]: (node, children) => (
        <ol className="list-decimal list-inside pl-4 mb-6 space-y-2">{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
      [BLOCKS.QUOTE]: (node, children) => (
        <blockquote className="pl-4 my-6 last:my-0 border-l-4 border-gray-200 bg-transparent">{children}</blockquote>
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
              <figcaption className="text-sm text-gray-500 text-center">{asset.description}</figcaption>
            )}
          </figure>
        )
      },
      [BLOCKS.HR]: (node, children) => <hr />,
      [INLINES.HYPERLINK]: (node, children) => <Link href={node.data.uri}>{children}</Link>,
      [INLINES.EMBEDDED_ENTRY]: (node) => {
        const entry = findInlineEntry(node.data.target.sys.id)

        switch (entry.__typename) {
          case 'ContentEmbed': {
            const { title, embedUrl, type } = entry

            switch (type) {
              case 'Video': {
                return (
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
                )
              }
              case 'SoundCloud': {
                return (
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
                )
              }
              case 'Tweet': {
                return (
                  <figure>
                    <iframe
                      src={embedUrl}
                      height="460"
                      width="640"
                      title={title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full rounded-lg"
                    />
                    <figcaption className="text-sm text-gray-500 text-center mt-1">{title}</figcaption>
                  </figure>
                )
              }
              default:
                return null
            }
          }
          case 'CodeBlock': {
            return <DynamicCodeBlock {...entry} />
          }
          default:
            return null
        }
      }
    }
  }
}

const RichText = ({ content }) => {
  return documentToReactComponents(content?.json, options(content?.links))
}

export default RichText
