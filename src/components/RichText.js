import NextImage from 'next/image'
import dynamic from 'next/dynamic'
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Link from 'components/Link'
const DynamicCodeBlock = dynamic(() => import('components/CodeBlock'))

function options(links) {
  console.log(`links`, links)

  const findAsset = (id) => links?.assets.block.find((item) => item.sys.id === id)

  const findInlineEntry = (id) => links?.entries.inline.find((item) => item.sys.id === id)

  return {
    renderMark: {
      [MARKS.BOLD]: (text) => <span className="font-bold">{text}</span>,
      [MARKS.ITALIC]: (text) => <span className="italic">{text}</span>,
      [MARKS.CODE]: (text) => (
        <code className="font-mono not-italic text-sm px-1.5 py-0.5 rounded-md bg-yellow-200 text-yellow-700">
          {text}
        </code>
      )
    },
    renderNode: {
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 id="conclusion" className="mt-8 mb-4">
          {children}
        </h2>
      ),
      [BLOCKS.HEADING_3]: (node, children) => <h3 className="mt-8 mb-2">{children}</h3>,
      [BLOCKS.PARAGRAPH]: (node, children) => <p className="mb-6">{children}</p>,
      [BLOCKS.UL_LIST]: (node, children) => <ul className="list-circle list-inside pl-4 mb-6">{children}</ul>,
      [BLOCKS.OL_LIST]: (node, children) => <ol className="list-decimal list-inside pl-4 mb-6">{children}</ol>,
      [BLOCKS.LIST_ITEM]: (node, children) => <li className="mb-2 last:mb-0">{children}</li>,
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
      [INLINES.HYPERLINK]: (node, children) => <Link href={node.data.uri}>{children}</Link>,
      [INLINES.EMBEDDED_ENTRY]: (node) => {
        const entry = findInlineEntry(node.data.target.sys.id)
        console.log(`entry`, entry)

        switch (entry.__typename) {
          case 'ContentEmbed':
            switch (entry.type) {
              case 'Video': {
                return (
                  <iframe
                    src={entry.embedUrl}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full aspect-video rounded-lg shadow-lg"
                  />
                )
              }
              case 'Github': {
                return (
                  <>
                    <script async src="//cdn.iframe.ly/embed.js" charSet="utf-8"></script>
                    <div className="iframely-embed">
                      <div className="iframely-responsive" style={{ paddingBottom: '50%', paddingTop: '120px' }}>
                        <a href={entry.embedUrl} data-iframely-url="//cdn.iframe.ly/2VgWF1e"></a>
                      </div>
                      {entry.title && (
                        <span className="grid place-center w-full text-sm text-gray-500">{entry.title}</span>
                      )}
                    </div>
                  </>
                )
              }
              case 'Tweet': {
                return (
                  <iframe
                    src={entry.embedUrl}
                    height="460"
                    width="640"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full rounded-lg"
                  />
                )
              }
              default:
                return null
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
  console.log(`content`, content)

  const { json: document, links } = content
  return documentToReactComponents(document, options(links))
}

export default RichText
