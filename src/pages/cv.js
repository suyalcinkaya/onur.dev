import { Fragment } from 'react'
import { NextSeo } from 'next-seo'
import styled from '@emotion/styled'
import { Badge, Box, Divider, Heading, Text, Stack } from '@chakra-ui/react'

// --- Components
import Card from 'components/Card'
import Layout from 'components/Layout'
import PageHeading from 'components/PageHeading'

// --- Icons
import CvIcon from 'components/icons/Cv'

// --- Other
import { cvData } from 'utils/constants'
import { safariOnly, ogImageUrl } from 'utils/helper'

const url = 'https://onur.dev/cv'
const title = 'Curriculum Vitae — Onur Şuyalçınkaya'
const ogTitle = 'Curriculum Vitae'

const TechStackContainer = styled(Stack)`
  row-gap: 0.5rem;
  column-gap: 0.5rem;

  ${safariOnly(`
    margin-bottom: -0.5rem;
  `)}
`

// gap is not supported on Safari yet
const StackBadge = styled(Badge)`
  ${safariOnly(`
    margin-bottom: 0.5rem;
    margin-right: 0.5rem;
  `)}
`

const CurriculumVitae = () => (
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
        <PageHeading>
          <Box as={CvIcon} height={{ base: 10, md: 12 }} width={{ base: 10, md: 12 }} mr={{ base: 2, md: 4 }} />
          Curriculum Vitae
        </PageHeading>
        <Stack spacing={12} align="stretch">
          <Stack spacing={8}>
            <Heading as="h2" size="lg">
              Work Experience
            </Heading>
            <Stack spacing={12} align="stretch">
              {cvData.experiences.map((experience, experienceIndex) => (
                <Stack spacing={4} key={`experience_${experienceIndex}`}>
                  <Card
                    title={`${experience.title} @ ${experience.company}`}
                    primaryText={`${experience.startDate} — ${experience.endDate}`}
                    secondaryText={experience.location}
                    url={experience.url}
                  />
                  {experience.descriptions.map((description, descriptionIndex) => (
                    <Text key={`description_${descriptionIndex}`}>{description}</Text>
                  ))}
                  {experience.stack?.length > 0 && (
                    <TechStackContainer isInline wrap="wrap" spacing={0}>
                      {experience.stack.map((item, itemIndex) => (
                        <StackBadge
                          key={`stack_${itemIndex}`}
                          variant="outline"
                          fontSize="xxs"
                          lineHeight="taller"
                          letterSpacing="1px"
                          fontWeight="normal"
                          px={2}
                          rounded={3}
                        >
                          {item}
                        </StackBadge>
                      ))}
                    </TechStackContainer>
                  )}
                </Stack>
              ))}
            </Stack>
          </Stack>
          <Divider />
          <Stack spacing={8}>
            <Heading as="h2" size="lg">
              Education
            </Heading>
            <Stack spacing={8} align="stretch">
              {cvData.educations.map((education, educationIndex) => (
                <Stack key={`education_${educationIndex}`} spacing={4}>
                  <Card
                    title={`${education.field} @ ${education.school}`}
                    primaryText={`${education.startDate} — ${education.endDate}`}
                    secondaryText={education.degree}
                  />
                </Stack>
              ))}
            </Stack>
          </Stack>
          <Divider />
          <Stack spacing={8}>
            <Heading as="h2" size="lg">
              Certifications
            </Heading>
            <Stack spacing={8} align="stretch">
              {cvData.certifications.map((certification, certificationIndex) => (
                <Stack key={`certification_${certificationIndex}`} spacing={4}>
                  <Card
                    title={certification.name}
                    primaryText={certification.date}
                    secondaryText={certification.issuedBy}
                    url={certification.url}
                  />
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Layout>
  </Fragment>
)

export default CurriculumVitae
