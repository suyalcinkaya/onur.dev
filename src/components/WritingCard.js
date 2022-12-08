import NextLink from 'next/link'

const WritingCard = ({ slug, title, dateTime, dateString }) => {
  return (
    <NextLink href={`/writing/${slug}`} className="tabular-nums">
      <span className="flex items-baseline gap-4">
        <time dateTime={dateTime} className="shrink whitespace-nowrap">
          {dateString}
        </time>
        <span className="underline underline-offset-4">{title}</span>
      </span>
    </NextLink>
  )
}

export default WritingCard
