import { NextSeo } from 'next-seo'

// --- Components
import Card from 'components/Card'
import Layout from 'components/Layout'
import PageHeading from 'components/PageHeading'

// --- Icons
import ProjectsIcon from 'components/icons/Projects'

// --- Others
import { projectData } from 'lib/constants'
import { ogImageUrl } from 'lib/helper'

const url = 'https://onur.dev/projects'
const title = 'Projects — Onur Şuyalçınkaya'

const Projects = () => {
  return (
    <>
      <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          url,
          title,
          images: [
            {
              url: ogImageUrl('**Projects**'),
              alt: title
            }
          ]
        }}
      />
      <Layout>
        <PageHeading>
          <ProjectsIcon className="h-10 md:h-12 w-10 md:w-12 mr-2 md:mr-4" />
          Projects
        </PageHeading>
        <p>Small just-for-fun weekend open source projects/works I've been working on.</p>
        <div className="space-y-8 mt-12">
          {projectData.map((project, projectIndex) => (
            <Card
              key={`project_${projectIndex}`}
              title={project.name}
              secondaryText={project.description}
              url={project.url}
            />
          ))}
        </div>
      </Layout>
    </>
  )
}

export default Projects
