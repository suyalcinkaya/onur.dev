import dynamic from 'next/dynamic'
import { memo } from 'react'

const Carousel = dynamic(() => import('@/components/contentful/carousel').then((mod) => mod.Carousel))

const MarkdownRenderer = dynamic(() => import('@/components/markdown-renderer').then((mod) => mod.MarkdownRenderer))

export const JourneyCard = memo(({ title, description, imagesCollection }) => {
  return (
    <div className="word-break-word flex flex-col">
      <span className="mb-px font-semibold tracking-tight">{title}</span>
      {description && (
        <MarkdownRenderer
          className="text-sm"
          options={{
            forceInline: true
          }}
        >
          {description}
        </MarkdownRenderer>
      )}
      {imagesCollection?.items?.length > 1 && <Carousel images={imagesCollection?.items} />}
      {imagesCollection?.items?.length === 1 && (
        <div className="mt-2.5 overflow-hidden rounded-xl bg-white">
          <img
            src={imagesCollection?.items[0]?.url}
            alt={imagesCollection?.items[0]?.title || imagesCollection?.items[0]?.description}
            width={imagesCollection?.items[0]?.width}
            height={imagesCollection?.items[0]?.height}
            loading="lazy"
            className="animate-reveal"
            // eslint-disable-next-line react/no-unknown-property
            nopin="nopin"
          />
        </div>
      )}
    </div>
  )
})
JourneyCard.displayName = 'JourneyCard'
