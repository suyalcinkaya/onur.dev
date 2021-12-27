import { NextSeo } from 'next-seo'
import NextImage from 'next/image'

// --- Components
import Layout from 'components/Layout'
import Link from 'components/Link'
import PageHeading from 'components/PageHeading'

// --- Others
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
          <p>
            I'm Onur, a <Link href="https://www.linkedin.com/in/onursuyalcinkaya/">Frontend Engineer</Link> who loves to
            solve problems and dabbles in design with a strong sense of aesthetics. Currently living in Berlin, Germany
            and developing things at <Link href="https://hey.car">heycar</Link>. Previously, I worked as a Frontend
            Engineer at Yemeksepeti, Full Stack Developer at Sistas, Mobile Developer at Tanbula and Specialist at
            Apple. I was born in in Ankara (the capital city of Turkey) grew up in Istanbul and went to Doğuş
            University, graduating with a degree in Computer Engineering. I'm contributing to open source, sharing
            everything I know through <Link href="/">my blog</Link> and{' '}
            <Link href="https://suyalcinkaya.medium.com">Medium</Link>. When I’m not nerding out, I'm{' '}
            <Link href="https://soundcloud.com/jagerman">DJing</Link>, doing bodybuilding, playing Football Manager
            since 2000, watching Besiktas 🦅 (my favorite team) matches and enjoying time with friends and family.
          </p>
          <br />
          <p>
            You can find me on <Link href="https://twitter.com/onursdev">Twitter</Link> where I share my thoughts, or on{' '}
            <Link href="https://github.com/suyalcinkaya/">GitHub</Link> where I build cool stuff, or on{' '}
            <Link href="https://soundcloud.com/jagerman">Soundcloud</Link> where I create mixtapes and songs.
          </p>
        </div>
      </Layout>
    </>
  )
}
