import { Fragment } from 'react'
import { NextSeo } from 'next-seo'
import { Heading, Stack, Text } from '@chakra-ui/react'

// --- Components
import Layout from 'components/Layout'
import Link from 'components/Link'
import PageHeading from 'components/PageHeading'

// --- Others
import { projectData } from 'utils/constants'
import { ogImageUrl } from 'utils/helper'

const url = 'https://onur.dev/projects'
const title = 'Projects — Onur Şuyalçınkaya'
const ogTitle = 'Projects'

const Projects = () => {
  return (
    <Fragment>
      <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          url,
          title,
          images: [
            {
              url: ogImageUrl(ogTitle),
              alt: title
            }
          ]
        }}
      />
      <Layout>
        <Stack spacing={8}>
          <PageHeading>Projects</PageHeading>
          <Stack spacing={8}>
            <Text fontSize="lg">Small just-for-fun weekend open source projects/works I've been working on.</Text>
            <Stack spacing={6}>
              {projectData.map((project, projectIndex) => (
                <Stack spacing={1} key={`project_${projectIndex}`}>
                  <p>
                    <Link href={project.url}>
                      <Heading as="h3" d="inline" fontSize="lg">
                        {project.name}
                      </Heading>
                    </Link>
                  </p>
                  <Text color="gray.500">{project.description}</Text>
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Layout>
    </Fragment>
  )
}

export default Projects
