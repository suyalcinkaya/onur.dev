import { useEffect, useState } from 'react'
import NextImage from 'next/image'
import NextLink from 'next/link'
import tinytime from 'tinytime'

// --- Components
import BlogSeo from 'components/BlogSeo'
import Layout from 'components/Layout'
import { LinkButton, OutlineButton } from 'components/Button'
import PageTitle from 'components/PageTitle'
import RichText from 'components/RichText'
import Share from 'components/Share'
import LikeIcon from 'components/icons/Like'

// --- Others
import { supabase, getInitialSupabaseData, incrementViews } from 'lib/supabase'
import { getPost, getAllPosts } from 'lib/contentful'

export default function Post({ post, initialSupabaseData }) {
  const [isLiking, setIsLiking] = useState(false)
  const [likes, setLikes] = useState(initialSupabaseData.likes)
  const [supabaseError, setSupabaseError] = useState()

  const {
    title,
    description,
    date,
    slug,
    content,
    sys: { firstPublishedAt, publishedAt: updatedAt }
  } = post

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      incrementViews(slug)
    }
  }, [slug])

  async function incrementLikes() {
    try {
      setIsLiking(true)

      let { data: latestData } = await supabase.from('pages').select().eq('slug', slug).single()
      const { data: updatedData } = await supabase
        .from('pages')
        .update({ like_count: latestData.like_count + 1, like_count_updated_at: new Date() })
        .match({ id: latestData.id, slug: latestData.slug })

      if (Array.isArray(updatedData) && updatedData?.length > 0) setLikes(updatedData[0].like_count)
    } catch (error) {
      setSupabaseError(error)
    } finally {
      setIsLiking(false)
    }
  }

  return (
    <>
      <BlogSeo
        title={title}
        description={description}
        publishedAt={date || firstPublishedAt}
        updatedAt={updatedAt}
        url={`https://onur.dev/blog/${slug}`}
      />
      <Layout>
        <article>
          <div className="mb-12 space-y-4">
            <div className="relative">
              <div className="absolute -top-10 md:-top-14 left-0">
                <NextLink href="/blog">
                  <LinkButton className="mb-8 text-gray-400">&larr; Blog</LinkButton>
                </NextLink>
              </div>
              <PageTitle title={title} isSlugTitle />
            </div>
            <div className="flex flex-col md:flex-row md:items-end space-y-4 md:space-y-0 md:justify-between">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full overflow-hidden ring-2 ring-gray-200">
                  <NextImage src="/images/me.jpg" width={96} height={96} alt="Onur Şuyalçınkaya" />
                </div>
                <div className="flex flex-col ml-3 space-y-0.5">
                  <p className="text-base">Onur Şuyalçınkaya</p>
                  <div className="text-sm text-gray-400">
                    <time dateTime={date || firstPublishedAt}>
                      {tinytime('{MMMM} {DD}, {YYYY}').render(new Date(date || firstPublishedAt))}
                    </time>
                    {' ∙ '}
                    <span>{initialSupabaseData?.views || '-'} views</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start md:items-end space-y-2">
                <OutlineButton
                  title="Like"
                  className="text-sm leading-tight space-x-1"
                  disabled={isLiking}
                  onClick={() => !isLiking && incrementLikes()}
                >
                  <LikeIcon height={18} width={18} /> <span>{likes ?? '-'}</span>
                </OutlineButton>
                <Share title={title} url={`https://onur.dev/blog/${slug}`} />
              </div>
            </div>
          </div>
          <RichText content={content} />
        </article>
      </Layout>
    </>
  )
}

export async function getStaticProps({ params: { slug }, preview = false }) {
  const postData = await getPost(slug, preview)
  const initialSupabaseData = await getInitialSupabaseData(slug)

  return {
    props: {
      // preview,
      post: postData?.post ?? null,
      initialSupabaseData
    }
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPosts()

  return {
    paths: allPosts?.map(({ slug }) => `/blog/${slug}`) ?? [],
    fallback: false
  }
}
