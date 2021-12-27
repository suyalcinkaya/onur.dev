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

export async function getAllPosts(limit = 10, preview = false) {
  const entries = await fetchGraphQL(
    `query {
      postCollection(order: date_DESC, preview: ${preview}, limit: ${limit}) {
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

export async function getPost(slug, preview = false) {
  const entry = await fetchGraphQL(
    `query {
      postCollection(where: { slug: "${slug}" }, preview: ${preview}, limit: 1) {
        items {
          title
          description
          slug
          date
          image {
            title
            description
            size
            url
            width
            height
          }
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
