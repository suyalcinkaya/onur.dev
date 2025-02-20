import { ShowInView } from '@/components/show-in-view'
import { cn } from '@/lib/utils'

export function Iframe({ embedUrl, title, className, ...rest }) {
  return (
    <ShowInView>
      <figure>
        <iframe
          src={embedUrl}
          title={title}
          allowFullScreen
          className={cn('w-full rounded-sm border-0 border-none shadow-lg', className)}
          {...rest}
        />
        <figcaption className="mt-2 text-center text-xs font-light break-words text-gray-500">{title}</figcaption>
      </figure>
    </ShowInView>
  )
}
