'use client'

import dynamic from 'next/dynamic'
import NextImage from 'next/image'
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Link from '@/components/Link'
const DynamicIframe = dynamic(() => import('@/components/contentful/Iframe'))
const DynamicCodeBlock = dynamic(() => import('@/components/contentful/CodeBlock'))
import { dasherize } from '@/lib/utils'

function options(links) {
  const findAsset = (id) => links?.assets.block.find((item) => item.sys.id === id)
  const findInlineEntry = (id) => links?.entries.inline.find((item) => item.sys.id === id)

  return {
    renderMark: {
      [MARKS.BOLD]: (text) => <span className="font-semibold text-black">{text}</span>,
      [MARKS.ITALIC]: (text) => <span className="italic">{text}</span>,
      [MARKS.CODE]: (text) => <code className="inline-code">{text}</code>
    },
    renderNode: {
      [BLOCKS.HEADING_2]: (_, children) => {
        const id = dasherize(children)
        return (
          <h2 id={`h2-${id}`} className="mt-6 mb-2">
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
      [BLOCKS.UL_LIST]: (_, children) => <ul className="flex flex-col gap-y-0.5 list-disc pl-6 mb-4">{children}</ul>,
      [BLOCKS.OL_LIST]: (_, children) => (
        <ol className="flex flex-col gap-y-2 list-inside list-[decimal-leading-zero] mb-4">{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (_, children) => <li>{children}</li>,
      [BLOCKS.QUOTE]: (_, children) => (
        <blockquote className="px-4 mb-4 border-l-2 border-gray-200 rounded-r-lg font-medium">{children}</blockquote>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const asset = findAsset(node.data.target.sys.id)

        return (
          <figure className="flex flex-col gap-y-2 mb-6">
            <NextImage
              src={asset.url}
              height={asset.height || 300}
              width={asset.width || 400}
              alt={asset.description}
            />
            {asset.description && (
              <figcaption className="text-xs text-gray-500 text-center font-light">{asset.description}</figcaption>
            )}
          </figure>
        )
      },
      [BLOCKS.HR]: () => <hr className="my-12" />,
      [INLINES.HYPERLINK]: (node, children) => <Link href={node.data.uri}>{children}</Link>,
      [INLINES.EMBEDDED_ENTRY]: (node) => {
        const entry = findInlineEntry(node.data.target.sys.id)

        switch (entry.__typename) {
          case 'ContentEmbed': {
            const { embedUrl, title, type } = entry

            switch (type) {
              case 'Video': {
                return (
                  <DynamicIframe
                    embedUrl={embedUrl}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    className="aspect-video"
                  />
                )
              }
              case 'SoundCloud': {
                return <DynamicIframe embedUrl={embedUrl} title={title} scrolling="no" className="h-[166px]" />
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
  if (!content) return null
  return documentToReactComponents(content.json, options(content.links))
}

export default RichText
