import GithubIcon from 'components/icons/Github'
import MediumIcon from 'components/icons/Medium'
import LinkedinIcon from 'components/icons/Linkedin'
import SoundcloudIcon from 'components/icons/Soundcloud'
import TwitterIcon from 'components/icons/Twitter'
import YoutubeIcon from 'components/icons/Youtube'

export const LAYOUT_WIDTH = 'max(24vw, 768px)'

export const profiles = {
  github: {
    name: 'GitHub',
    url: 'https://github.com/suyalcinkaya/',
    icon: <GithubIcon />
  },
  twitter: {
    name: 'Twitter',
    username: 'onurshu_',
    url: 'https://twitter.com/onurshu_',
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
  }
}

export const mixtapes = [
  {
    title: 'Summer Sax',
    description: '11M+ plays • 55K+ likes',
    url: 'https://www.youtube.com/watch?v=bzZupZkrjm0'
  },
  {
    title: 'Sax On Fire',
    description: '1.5M+ plays • 35K+ likes',
    url: 'https://soundcloud.com/jagerman/saxonfire'
  },
  {
    title: 'Casablanca',
    description: '120K+ plays • 3K+ likes',
    url: 'https://soundcloud.com/jagerman/casablanca'
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
    },
    {
      url: 'http://buymeacoff.ee/suyalcinkaya',
      name: 'Buy me a coffee'
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
  }
]
