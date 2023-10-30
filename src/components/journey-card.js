import { MarkdownRenderer } from '@/components/markdown-renderer'

export const JourneyCard = ({ title, description, image, index }) => {
  return (
    <div className="word-break-word flex flex-col">
      <span className="font-semibold tracking-tight">{title}</span>
      {description && <MarkdownRenderer className="text-sm">{description}</MarkdownRenderer>}
      {image?.url && (
        <div className="mt-2.5 overflow-hidden rounded-xl">
          <img
            src={image.url}
            alt={image.title || image.description}
            width={image.width}
            height={image.height}
            loading={index < 1 ? 'eager' : 'lazy'}
            className="animate-reveal"
          />
        </div>
      )}
    </div>
  )
}
