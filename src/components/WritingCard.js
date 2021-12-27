import tinytime from 'tinytime'

// --- Components
import Card from 'components/Card'

const WritingCard = ({ title, slug, publishedAt }) => {
  return (
    <Card
      title={title}
      description={
        <time dateTime={publishedAt}>{tinytime('{MMMM} {DD}, {YYYY}').render(new Date(publishedAt))}</time>
      }
      url={`/blog/${slug}`}
    />
  )
}

export default WritingCard
