import GithubIcon from 'components/icons/Github'
import MediumIcon from 'components/icons/Medium'
import LinkedinIcon from 'components/icons/Linkedin'
import SoundcloudIcon from 'components/icons/Soundcloud'
import TwitterIcon from 'components/icons/Twitter'
import YoutubeIcon from 'components/icons/Youtube'

export const MAX_WIDTH = 'max(40vw, 768px)'
export const BUY_ME_COFFEE_URL = 'http://buymeacoff.ee/suyalcinkaya'

export const profiles = {
  github: {
    name: 'GitHub',
    url: 'https://github.com/suyalcinkaya/',
    icon: <GithubIcon />
  },
  twitter: {
    name: 'Twitter',
    url: 'https://twitter.com/onursdev',
    icon: <TwitterIcon />
  },
  linkedin: {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/suyalcinkaya/',
    icon: <LinkedinIcon />
  },
  medium: {
    name: 'Medium',
    url: 'https://suyalcinkaya.medium.com',
    icon: <MediumIcon />
  },
  soundcloud: {
    name: 'Soundcloud',
    url: 'https://soundcloud.com/jagerman',
    icon: <SoundcloudIcon />
  },
  youtube: {
    name: 'YouTube',
    url: 'https://www.youtube.com/c/jagermanmusic',
    icon: <YoutubeIcon />
  },
  cv: {
    name: 'read.cv',
    url: 'https://read.cv/onur'
  }
}

export const mixtapes = [
  {
    title: 'Summer Sax',
    description: '10M plays • 50K likes',
    url: 'https://www.youtube.com/watch?v=bzZupZkrjm0'
  },
  {
    title: 'Sax On Fire',
    description: '1.36M plays • 33.6K likes',
    url: 'https://soundcloud.com/jagerman/saxonfire'
  },
  {
    title: 'Casablanca',
    description: '113K plays • 2.8K likes',
    url: 'https://soundcloud.com/jagerman/casablanca'
  },
  {
    title: 'I Wanna Live Not Just Survive',
    description: '10K plays • 300 likes',
    url: 'https://soundcloud.com/jagerman/i-wanna-live-not-just-survive'
  }
]

export const navigations = {
  header: [
    {
      url: '/',
      name: 'Home'
    },
    {
      url: '/blog',
      name: 'Blog'
    },
    {
      url: '/about',
      name: 'About'
    },
    {
      url: '/journey',
      name: 'Journey'
    }
  ],
  footer: [
    {
      url: '/',
      name: 'Home'
    },
    {
      url: '/blog',
      name: 'Blog'
    },
    {
      url: '/about',
      name: 'About'
    },
    {
      url: '/journey',
      name: 'Journey'
    },
    {
      url: '/snippets',
      name: 'Snippets'
    },
    {
      url: 'https://read.cv/onur',
      name: 'Curriculum Vitae'
    }
  ]
}

export const projects = [
  {
    url: 'https://github.com/suyalcinkaya/notebook',
    name: 'Notebook',
    description: 'My personal notebook.'
  },
  {
    url: 'https://github.com/suyalcinkaya/notiful',
    name: 'Notiful',
    description: 'An open source minimal and clean taking notes extension for Chrome.'
  },
  {
    url: 'https://github.com/suyalcinkaya/koalazily',
    name: 'Koalazily',
    description: 'Loading images lazily in a modern way using Intersection Observer API.'
  },
  {
    url: 'https://github.com/suyalcinkaya/karussel',
    name: 'Karussel',
    description: 'A minimal React based carousel/slider component.'
  },
  {
    url: 'https://github.com/suyalcinkaya/browsefy',
    name: 'Browsefy',
    description: 'A lightweight browser detector.'
  },
  {
    url: 'https://github.com/suyalcinkaya/a11y.css',
    name: 'a11y.css',
    description: 'A CSS file emphasizing about possible improvements and errors that exist in HTML semantic elements.'
  }
]
