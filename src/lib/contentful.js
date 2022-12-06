async function fetchGraphQL(query, preview = false) {
  return fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${
        preview ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN : process.env.CONTENTFUL_ACCESS_TOKEN
      }`
    },
    body: JSON.stringify({ query })
  }).then((response) => response.json())
}

export async function getAllPosts(preview = false) {
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

export async function getLast3Posts(preview = false) {
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

export async function getRandomPosts(exemptedSlug = '', preview = false) {
  const items = await getAllPosts(preview)

  // Generate a random number between 4 and 8
  const randomCount = Math.floor(Math.random() * 5) + 4

  // Filter out the exempted slug and sort the array randomly
  const randomPosts = items
    .filter((item) => item.slug !== exemptedSlug)
    .sort(() => 0.5 - Math.random())
    .slice(0, randomCount)
    .sort((a, b) => new Date(b.date) - new Date(a.date))

  return randomPosts
}

export async function getPost(slug, preview = false) {
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

export async function getAllCodeSnippets(preview = false) {
  const entries = await fetchGraphQL(
    `query {
      codeSnippetCollection(order: sys_firstPublishedAt_DESC, preview: ${preview}) {
        items {
          title
          description
          slug
        }
      }
    }`,
    preview
  )

  return entries?.data?.codeSnippetCollection?.items
}

export async function getCodeSnippet(slug, preview = false) {
  const entry = await fetchGraphQL(
    `query {
      codeSnippetCollection(where: { slug: "${slug}" }, preview: ${preview}, limit: 1) {
        items {
          title
          description
          slug
          code
          language
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
    codeSnippet: entry?.data?.codeSnippetCollection?.items?.[0]
  }
}

export async function getAllLogbook(preview = false) {
  const entries = await fetchGraphQL(
    `query {
      logbookCollection(order: date_DESC, preview: ${preview}) {
        items {
          title
          date
          emoji
          description
        }
      }
    }`,
    preview
  )

  return entries?.data?.logbookCollection?.items
}

export async function getAllPages(preview = false) {
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

export async function getPage(url, preview = false) {
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

export async function getPageSeo(url, preview = false) {
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
