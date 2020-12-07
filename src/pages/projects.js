import { Fragment } from 'react'
import { NextSeo } from 'next-seo'
import { Box, Stack } from '@chakra-ui/react'

// --- Components
import Card from 'components/Card'
import Layout from 'components/Layout'
import PageHeading from 'components/PageHeading'

// --- Icons
import ProjectsIcon from 'components/icons/Projects'

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
        <Stack spacing={12}>
          <Stack spacing={8}>
            <PageHeading>
              <Box
                as={ProjectsIcon}
                height={{ base: 10, md: 12 }}
                width={{ base: 10, md: 12 }}
                mr={{ base: 2, md: 4 }}
              />
              Projects
            </PageHeading>
            <p>Small just-for-fun weekend open source projects/works I've been working on.</p>
          </Stack>
          <Stack spacing={8}>
            <Stack spacing={8}>
              {projectData.map((project, projectIndex) => (
                <Card
                  key={`project_${projectIndex}`}
                  title={project.name}
                  secondaryText={project.description}
                  url={project.url}
                />
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Layout>
    </Fragment>
  )
}

export default Projects
