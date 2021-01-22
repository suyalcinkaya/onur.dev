import { NextSeo } from 'next-seo'

// --- Components
import Card from 'components/Card'
import Layout from 'components/Layout'
import PageHeading from 'components/PageHeading'

// --- Icons
// import CvIcon from 'components/icons/Cv'

// --- Other
import { cvData } from 'lib/constants'
import { ogImageUrl } from 'lib/helper'

const url = 'https://onur.dev/cv'
const title = 'Curriculum Vitae — Onur Şuyalçınkaya'

const CurriculumVitae = () => (
  <>
    <NextSeo
      title={title}
      canonical={url}
      openGraph={{
        url,
        title,
        images: [
          {
            url: ogImageUrl('**Curriculum Vitae**'),
            alt: title
          }
        ]
      }}
    />
    <Layout>
      <PageHeading heading="Curriculum Vitae" />
      <>
        <h2 className="text-2xl font-bold">Work Experience</h2>
        <div className="space-y-10 mt-6">
          {cvData.experiences.map((experience, experienceIndex) => (
            <div key={`experience_${experienceIndex}`} className="space-y-2">
              <Card
                title={`${experience.title} @ ${experience.company}`}
                primaryText={`${experience.startDate} — ${experience.endDate}`}
                secondaryText={experience.location}
                url={experience.url}
              />
              {experience.descriptions.map((description, descriptionIndex) => (
                <p key={`description_${descriptionIndex}`}>{description}</p>
              ))}
              {experience.stack?.length > 0 && (
                <div className="flex flex-wrap">
                  {experience.stack.map((item, itemIndex) => (
                    <div
                      key={`stack_${itemIndex}`}
                      className="bg-white border border-gray-400 text-gray-500 rounded text-xxs tracking-wider px-2 py-1 uppercase leading-tight mt-2 mr-2"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </>
      <hr />
      <>
        <h2 className="text-2xl font-bold">Education</h2>
        <div className="space-y-8 mt-8">
          {cvData.educations.map((education, educationIndex) => (
            <Card
              key={`education_${educationIndex}`}
              title={`${education.field} @ ${education.school}`}
              primaryText={`${education.startDate} — ${education.endDate}`}
              secondaryText={education.degree}
            />
          ))}
        </div>
      </>
      <hr />
      <>
        <h2 className="text-2xl font-bold">Certifications</h2>
        <div className="space-y-8 mt-8">
          {cvData.certifications.map((certification, certificationIndex) => (
            <Card
              key={`certification_${certificationIndex}`}
              title={certification.name}
              primaryText={certification.date}
              secondaryText={certification.issuedBy}
              url={certification.url}
            />
          ))}
        </div>
      </>
    </Layout>
  </>
)

export default CurriculumVitae
