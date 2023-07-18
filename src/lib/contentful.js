const defaultPreviewMode = process.env.NODE_ENV === 'development'

async function fetchGraphQL(query, preview = defaultPreviewMode) {
  const res = await fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${
        preview ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN : process.env.CONTENTFUL_ACCESS_TOKEN
      }`
    },
    body: JSON.stringify({ query })
  })
  if (!res.ok) return undefined
  return res.json()
}

export async function getAllPosts(preview = defaultPreviewMode) {
  const entries = await fetchGraphQL(
    `query {
      postCollection(order: date_DESC, preview: ${preview}) {
        items {
          title
          description
          slug
          date
          sys {
            id
            firstPublishedAt
            publishedAt
          }
        }
      }
    }`,
    preview
  )

  return entries?.data?.postCollection?.items
}

export async function getLast3Posts(preview = defaultPreviewMode) {
  const entries = await fetchGraphQL(
    `query {
      postCollection(order: date_DESC, preview: ${preview}, limit: 3) {
        items {
          title
          slug
          date
          sys {
            id
            firstPublishedAt
          }
        }
      }
    }`,
    preview
  )

  return entries?.data?.postCollection?.items
}

export async function getPost(slug, preview = defaultPreviewMode) {
  const entry = await fetchGraphQL(
    `query {
      postCollection(where: { slug: "${slug}" }, preview: ${preview}, limit: 1) {
        items {
          title
          description
          slug
          date
          content {
            json
            links {
              assets {
                block {
                  sys {
                    id
                  }
                  url
                  title
                  width
                  height
                  description
                }
              }
              entries {
                inline {
                  sys {
                    id
                  }
                  __typename
                  ... on ContentEmbed {
                    title
                    embedUrl
                    type
                  }
                  ... on CodeBlock {
                    title
                    language
                    code
                  }
                }
              }
            }
          }
          sys {
            id
            firstPublishedAt
            publishedAt
          }
        }
      }
    }`,
    preview
  )

  return {
    post: entry?.data?.postCollection?.items?.[0]
  }
}

export async function getPostSeo(slug, preview = defaultPreviewMode) {
  const entry = await fetchGraphQL(
    `query {
      postCollection(where: { slug: "${slug}" }, preview: ${preview}, limit: 1) {
        items {
          title
          description
          slug
          date
          sys {
            firstPublishedAt
            publishedAt
          }
        }
      }
    }`,
    preview
  )

  return entry?.data?.postCollection?.items?.[0]
}

export async function getAllLogbook(preview = defaultPreviewMode) {
  const entries = await fetchGraphQL(
    `query {
      logbookCollection(order: date_DESC, preview: ${preview}) {
        items {
          title
          date
          emoji
          description
          image {
            url
            title
            description
            width
            height
          }
        }
      }
    }`,
    preview
  )

  return entries?.data?.logbookCollection?.items
}

export async function getAllPages(preview = defaultPreviewMode) {
  const entries = await fetchGraphQL(
    `query {
      pageCollection(preview: ${preview}) {
        items {
          url
          hasCustomPage
        }
      }
    }`,
    preview
  )

  return entries?.data?.pageCollection?.items
}

export async function getPage(url, preview = defaultPreviewMode) {
  const entry = await fetchGraphQL(
    `query {
      pageCollection(where: { url: "${url}" }, preview: ${preview}, limit: 1) {
        items {
          title
          url
          seoTitle
          seoDescription
          content {
            json
            links {
              assets {
                block {
                  sys {
                    id
                  }
                  url
                  title
                  width
                  height
                  description
                }
              }
              entries {
                inline {
                  sys {
                    id
                  }
                  __typename
                  ... on ContentEmbed {
                    title
                    embedUrl
                    type
                  }
                  ... on CodeBlock {
                    title
                    language
                    code
                  }
                }
              }
            }
          }
          sys {
            id
            firstPublishedAt
            publishedAt
          }
        }
      }
    }`,
    preview
  )

  return entry?.data?.pageCollection?.items?.[0]
}

export async function getPageSeo(url, preview = defaultPreviewMode) {
  const entry = await fetchGraphQL(
    `query {
      pageCollection(where: { url: "${url}" }, preview: ${preview}, limit: 1) {
        items {
          title
          url
          seoTitle
          seoDescription
        }
      }
    }`,
    preview
  )

  return entry?.data?.pageCollection?.items?.[0]
}
