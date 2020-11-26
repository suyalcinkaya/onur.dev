import { Fragment } from 'react'
import { NextSeo } from 'next-seo'
import styled from '@emotion/styled'
import { Badge, Divider, Flex, Grid, Heading, Text, Stack } from '@chakra-ui/react'

// --- Components
import Layout from 'components/Layout'
import PageHeading from 'components/PageHeading'

// --- Other
import { cvData } from 'utils/constants'
import { safariOnly, ogImageUrl } from 'utils/helper'

const url = 'https://onur.dev/cv'
const title = 'Curriculum Vitae — Onur Şuyalçınkaya'
const ogTitle = 'Curriculum Vitae'

const TechStackContainer = styled(Flex)`
  flex-direction: row;
  flex-wrap: wrap;
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
        <PageHeading>Curriculum Vitae</PageHeading>
        <Grid gridGap={6}>
          <Heading as="h2" size="lg">
            Work Experience
          </Heading>
          {cvData.experiences.map((experience, experienceIndex) => (
            <Fragment key={`experience_${experienceIndex}`}>
              <Grid gap={4}>
                <Grid gap={1}>
                  <Text color="gray.400">
                    {experience.startDate} — {experience.endDate}
                  </Text>
                  <Heading as="h3" size="md">
                    {experience.title} @ {experience.company}
                  </Heading>
                  <Text color="gray.400">{experience.location}</Text>
                </Grid>
                {experience.descriptions.map((description, descriptionIndex) => (
                  <Text key={`description_${descriptionIndex}`}>{description}</Text>
                ))}
                {experience.stack?.length > 0 && (
                  <TechStackContainer>
                    {experience.stack.map((item, itemIndex) => (
                      <StackBadge
                        key={`stack_${itemIndex}`}
                        variant="outline"
                        fontSize="xxs"
                        lineHeight="taller"
                        letterSpacing="1px"
                        fontWeight="normal"
                        px={2}
                      >
                        {item}
                      </StackBadge>
                    ))}
                  </TechStackContainer>
                )}
              </Grid>
              {experienceIndex !== cvData.experiences.length - 1 && <Divider />}
            </Fragment>
          ))}
          <Divider />
          <Heading as="h2" size="lg">
            Education
          </Heading>
          {cvData.educations.map((education, educationIndex) => (
            <Fragment key={`education_${educationIndex}`}>
              <Grid gap={4}>
                <Grid gap={1}>
                  <Text color="gray.400">
                    {education.startDate} — {education.endDate}
                  </Text>
                  <Heading as="h3" size="md">
                    {education.field} @ {education.school}
                  </Heading>
                  <Text color="gray.400">{education.degree}</Text>
                </Grid>
              </Grid>
              {educationIndex !== cvData.educations.length - 1 && <Divider />}
            </Fragment>
          ))}
        </Grid>
      </Stack>
    </Layout>
  </Fragment>
)

export default CurriculumVitae
