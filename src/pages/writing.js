// --- Components
import BlogPost from 'components/BlogPost'
import Layout from 'components/Layout'
import PageHeading from 'components/PageHeading'

// --- Other
import { getAllFilesFrontMatter } from 'lib/mdx'

const Blog = ({ posts }) => {
  const sortedBlogPosts = posts.sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)))

  return (
    <Layout>
      <PageHeading>Writing</PageHeading>
      <p>
        I've been writing online since 2018, mostly about web development and tech careers. In total, I've written{' '}
        {sortedBlogPosts.length} blog posts so far.
      </p>
      <div className="space-y-12 md:space-y-6 mt-12">
        {sortedBlogPosts.map((frontMatter) => (
          <BlogPost key={frontMatter.title} {...frontMatter} />
        ))}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default Blog
