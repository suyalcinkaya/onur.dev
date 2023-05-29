import ShowInView from '@/components/ShowInView'
import cx from '@/lib/cx'

export default function Iframe({ embedUrl, title, className, ...rest }) {
  return (
    <ShowInView>
      <figure>
        <iframe
          src={embedUrl}
          title={title}
          frameBorder="0"
          allowFullScreen
          className={cx('w-full rounded shadow-lg', className)}
          {...rest}
        />
        <figcaption className="text-sm text-gray-500 text-center mt-2">{title}</figcaption>
      </figure>
    </ShowInView>
  )
}
