import { NextSeo } from 'next-seo'
import NextImage from 'next/image'

// --- Components
import Layout from 'components/Layout'
import Link from 'components/Link'
import PageHeading from 'components/PageHeading'

// --- Others
import { profiles } from 'lib/constants'
import { ogImageUrl } from 'lib/helper'

const url = 'https://onur.dev/about'
const title = 'About Me — Onur Şuyalçınkaya'

export default function About() {
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
              url: ogImageUrl('**About**'),
              alt: title
            }
          ]
        }}
      />
      <Layout>
        <PageHeading heading="About Me" />
        <div className="mb-12">
          <div className="float-left mt-3 mr-4" style={{ shapeOutside: 'circle(50%)' }}>
            <NextImage
              className="rounded-full overflow-hidden"
              width={140}
              height={140}
              src="/images/og.jpg"
              alt="Onur Şuyalçınkaya"
            />
          </div>
          <div className="space-y-6">
            <p>
              My name is Onur (meaning "Honour" in English), a{' '}
              <Link href={profiles.linkedin.url}>Frontend Engineer</Link> who loves to solve problems and dabbles in
              design with a strong sense of aesthetics.
            </p>
            <p>
              Currently living in Berlin, Germany and developing things at <Link href="https://hey.car">heycar</Link>.
              Previously, I worked as a Frontend Engineer at Yemeksepeti, Full Stack Developer at Sistas, Mobile
              Developer at Tanbula and Specialist at Apple.
            </p>
            <p>
              I was born in Ankara (the capital city of Turkey) grew up in Istanbul and went to Doğuş University,
              graduating with a degree in Computer Engineering.
            </p>
            <p>
              I'm contributing to open source, sharing everything I know through <Link href="/blog">this blog</Link> and{' '}
              <Link href={profiles.medium.url}>Medium</Link>. When I’m not nerding out, I'm{' '}
              <Link href={profiles.soundcloud.url}>DJing</Link>, doing bodybuilding, playing Football Manager since
              2000, watching Besiktas 🦅 (my favorite team) matches and enjoying time with friends and family.
            </p>
            <br />
            <p>
              You can find me on <Link href={profiles.twitter.url}>Twitter</Link> where I share my thoughts, on{' '}
              <Link href={profiles.github.url}>GitHub</Link> where I build cool stuff, on{' '}
              <Link href={profiles.soundcloud.url}>Soundcloud</Link> where I create mixtapes and songs.
            </p>
          </div>
        </div>
      </Layout>
    </>
  )
}
