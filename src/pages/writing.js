// --- Components
import BlogPost from 'components/BlogPost'
import Layout from 'components/Layout'
import PageHeading from 'components/PageHeading'

// --- Other
import { getAllFilesFrontMatter } from 'lib/mdx'

const Blog = ({ posts }) => (
  <Layout>
    <PageHeading>
      {/* <span role="img" className="mr-4">
          🖋
        </span> */}
      Writing
    </PageHeading>
    <p>I've been writing online since 2018, mostly about code, design, and my notions to learn, not to teach.</p>
    <div className="space-y-8 mt-12">
      {posts.map((frontMatter) => (
        <BlogPost key={frontMatter.title} {...frontMatter} />
      ))}
    </div>
  </Layout>
)

export async function getStaticProps() {
  const data = await getAllFilesFrontMatter('blog')
  const posts = data.sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)))
  return { props: { posts } }
}

export default Blog
