import { useEffect, useState } from 'react'
import NextImage from 'next/image'
import NextLink from 'next/link'
import tinytime from 'tinytime'

// --- Components
import BlogSeo from 'components/BlogSeo'
import Layout from 'components/Layout'
import { LinkButton } from 'components/Button'
import { OutlineButton } from 'components/Button'
import PageTitle from 'components/PageTitle'
import RichText from 'components/RichText'
import Share from 'components/Share'
import LikeIcon from 'components/icons/Like'

// --- Others
import supabase from 'lib/supabase'
import { getPost, getAllPosts } from 'lib/contentful'

export default function Post({ post }) {
  const [supabaseDataLoading, setSupabaseDataLoading] = useState(true)
  const [likeCount, setLikeCount] = useState()
  const [viewCount, setViewCount] = useState()
  const [supabaseError, setSupabaseError] = useState()

  const {
    title,
    description,
    date,
    slug,
    content,
    sys: { firstPublishedAt, publishedAt: updatedAt }
  } = post

  useEffect(async () => {
    await getInitialSupabaseData()
    if (process.env.NODE_ENV === 'production') {
      incrementViewCount()
    }
  }, [slug])

  async function getInitialSupabaseData() {
    try {
      setSupabaseDataLoading(true)

      let { data } = await supabase.from('pages').select().eq('slug', slug).single()
      if (data) {
        setLikeCount(data.like_count)
      } else {
        const newDate = new Date()
        const { data: createdData } = await supabase
          .from('pages')
          .insert([{ slug, like_count_updated_at: newDate, view_count_updated_at: newDate }])
        if (createdData) {
          const { like_count } = createdData[0]
          setLikeCount(like_count)
        }
      }
    } catch (error) {
      setSupabaseError(error)
    } finally {
      setSupabaseDataLoading(false)
    }
  }

  async function incrementViewCount() {
    try {
      setSupabaseDataLoading(true)

      let { data: latestData } = await supabase.from('pages').select().eq('slug', slug).single()
      let { data: updatedData } = await supabase.from('pages').upsert({
        ...latestData,
        view_count: latestData.view_count + 1,
        view_count_updated_at: new Date()
      })
      if (updatedData) {
        const { view_count } = updatedData[0]
        setViewCount(view_count)
        // setLikeCount(like_count)
      }
    } catch (error) {
      setSupabaseError(error)
    } finally {
      setSupabaseDataLoading(false)
    }
  }

  async function incrementLikeCount() {
    try {
      setSupabaseDataLoading(true)

      let { data: latestData } = await supabase.from('pages').select().eq('slug', slug).single()
      let { data: updatedData } = await supabase.from('pages').upsert({
        ...latestData,
        like_count: latestData.like_count + 1,
        like_count_updated_at: new Date()
      })
      if (updatedData) {
        const { like_count } = updatedData[0]
        setLikeCount(like_count)
        // setViewCount(view_count)
      }
    } catch (error) {
      setSupabaseError(error)
    } finally {
      setSupabaseDataLoading(false)
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
              {/* <h1 className="text-2xl md:text-3xl font-medium slashed-zero tracking-tight">{title}</h1> */}
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
                    <span>{viewCount || '-'} views</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start md:items-end space-y-2">
                <OutlineButton
                  title="Like"
                  className="space-x-1"
                  disabled={supabaseDataLoading}
                  onClick={() => !supabaseDataLoading && incrementLikeCount()}
                >
                  <LikeIcon height={18} width={18} /> <span>{likeCount ?? '-'}</span>
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

export async function getStaticProps({ params, preview = false }) {
  const data = await getPost(params.slug, preview)

  return {
    props: {
      // preview,
      post: data?.post ?? null
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
