// --- Components
import Card from 'components/Card'

const SnippetCard = ({ title, summary, slug }) => (
  <Card
    title={title}
    // primaryText={<time dateTime={publishedAt}>{tinytime('{MM} {DD}, {YYYY}').render(new Date(publishedAt))}</time>}
    secondaryText={summary}
    url={`/snippets/${slug}`}
  />
)

export default SnippetCard
