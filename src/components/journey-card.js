import { Markdown } from '@/components/markdown'

export const JourneyCard = ({ title, description, image, index }) => {
  return (
    <div className="flex flex-col">
      <span className="word-break-word font-semibold">{title}</span>
      {description && (
        <Markdown className="word-break-word m-0 block w-full overflow-hidden text-sm">{description}</Markdown>
      )}
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
