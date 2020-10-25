import { NextSeo } from 'next-seo'
import styled from '@emotion/styled'
import { Badge, Divider, Grid, Heading, Text, Stack } from '@chakra-ui/core'

// --- Components
import { Layout } from 'components'

// --- Other
import { cvData } from 'utils/constants'
import { safariOnly } from 'utils/helper'

const url = 'https://onur.dev/cv'
const title = 'Curriculum Vitae — Onur Şuyalçınkaya'

const TechStackContainer = styled(Stack)`
  row-gap: 0.5rem;
`

TechStackContainer.defaultProps = { isInline: true, wrap: 'wrap', spacing: 2 }

const CurriculumVitae = () => (
  <>
    <NextSeo
      title={title}
      canonical={url}
      openGraph={{
        url,
        title
      }}
    />
    <Layout>
      <Stack spacing={8}>
        <Heading as="h1" fontSize={{ base: '3xl', md: '4xl' }} fontWeight="medium" letterSpacing={-0.4}>
          Curriculum Vitae
        </Heading>
        <Grid gridGap={6}>
          <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} fontWeight="medium" letterSpacing={-0.4}>
            Experience
          </Heading>
          {cvData.experiences.map((experience, experienceIndex) => (
            <React.Fragment key={`experience_${experienceIndex}`}>
              <Grid gap={4}>
                <Grid>
                  <Text>
                    {experience.title} @ {experience.company}
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    {experience.location}
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    {experience.startDate} — {experience.endDate}
                  </Text>
                </Grid>
                {experience.descriptions.map((description, descriptionIndex) => (
                  <Text key={`description_${descriptionIndex}`} fontSize="sm">
                    {description}
                  </Text>
                ))}
                {experience.stack?.length > 0 && (
                  <TechStackContainer>
                    {experience.stack.map((item, itemIndex) => (
                      <Badge
                        key={`stack_${itemIndex}`}
                        variant="outline"
                        fontSize="xxs"
                        lineHeight="taller"
                        letterSpacing="1px"
                        px={2}
                        fontWeight="normal"
                        css={safariOnly`margin-bottom: 0.5rem;`} // row-gap is not supported on Safari yet
                      >
                        {item}
                      </Badge>
                    ))}
                  </TechStackContainer>
                )}
              </Grid>
              {experienceIndex !== cvData.experiences.length - 1 && <Divider />}
            </React.Fragment>
          ))}
          <Divider />
          <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} fontWeight="medium" letterSpacing={-0.4}>
            Education
          </Heading>
          {cvData.educations.map((education, educationIndex) => (
            <React.Fragment key={`education_${educationIndex}`}>
              <Grid gap={4}>
                <Grid>
                  <Text>
                    {education.field} @ {education.school}
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    {education.degree}
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    {education.startDate} — {education.endDate}
                  </Text>
                </Grid>
              </Grid>
              {educationIndex !== cvData.educations.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </Grid>
      </Stack>
    </Layout>
  </>
)

export default CurriculumVitae
