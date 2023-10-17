import { ShowInView } from '@/components/show-in-view'
import { cn } from '@/lib/utils'

export default function Iframe({ embedUrl, title, className, ...rest }) {
  return (
    <ShowInView>
      <figure>
        <iframe
          src={embedUrl}
          title={title}
          allowFullScreen
          className={cn('w-full rounded border-0 border-none shadow-lg', className)}
          {...rest}
        />
        <figcaption className="mt-2 break-words text-center text-sm text-gray-500">{title}</figcaption>
      </figure>
    </ShowInView>
  )
}
