import { ShowInView } from '@/components/show-in-view'
import { cn } from '@/lib/utils'

export default function Iframe({ embedUrl, title, className, ...rest }) {
  return (
    <ShowInView>
      <figure>
        <iframe
          src={embedUrl}
          title={title}
          frameBorder="0"
          allowFullScreen
          className={cn('w-full rounded shadow-lg', className)}
          {...rest}
        />
        <figcaption className="mt-2 text-center text-sm text-gray-500">{title}</figcaption>
      </figure>
    </ShowInView>
  )
}
