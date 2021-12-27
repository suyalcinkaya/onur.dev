// --- Components
import Card from 'components/Card'

const SnippetCard = ({ title, summary, slug }) => (
  <Card title={title} description={summary} url={`/snippets/${slug}`} />
)

export default SnippetCard
