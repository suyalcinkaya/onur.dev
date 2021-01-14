import { useRouter } from 'next/router'
import tinytime from 'tinytime'

// --- Components
import Card from 'components/Card'

// --- Other
import { getReadingTime } from 'lib/helper'

const BlogPost = (frontMatter) => {
  const router = useRouter()

  const pathFiles = frontMatter.__resourcePath.split('/')
  const slug = pathFiles[pathFiles.length - 2]
  const readingTime = getReadingTime(frontMatter.readingTime.minutes)

  return (
    <article
      className="md:hover:bg-gray-100 md:rounded-lg md:p-4 md:-mx-4 md:cursor-pointer md:transition-colors md:duration-200 md:ease-in-out"
      onClick={() => router.push(`/${slug}`)}
    >
      <Card
        title={frontMatter.title}
        primaryText={
          <div className="text-gray-500">
            <time dateTime={frontMatter.publishedAt}>
              {tinytime('{MM} {DD}, {YYYY}').render(new Date(frontMatter.publishedAt))}
            </time>
            <span className="ml-1">&bull;</span>
            <span className="ml-1">{readingTime}</span>
          </div>
        }
        secondaryText={frontMatter.summary}
      />
    </article>
  )
}

export default BlogPost
