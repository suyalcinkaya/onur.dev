import GithubIcon from 'components/icons/Github'
import MediumIcon from 'components/icons/Medium'
import LinkedinIcon from 'components/icons/Linkedin'
import SoundcloudIcon from 'components/icons/Soundcloud'
import TwitterIcon from 'components/icons/Twitter'
import YoutubeIcon from 'components/icons/Youtube'

export const LAYOUT_WIDTH = 'max(24vw, 768px)'

export const profiles = {
  github: {
    title: 'GitHub',
    url: 'https://github.com/suyalcinkaya/',
    icon: <GithubIcon />
  },
  twitter: {
    title: 'Twitter',
    username: 'onurshu_',
    url: 'https://twitter.com/onurshu_',
    icon: <TwitterIcon />
  },
  linkedin: {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/suyalcinkaya/',
    icon: <LinkedinIcon />
  },
  medium: {
    title: 'Medium',
    url: 'https://suyalcinkaya.medium.com',
    icon: <MediumIcon />
  },
  soundcloud: {
    title: 'Soundcloud',
    url: 'https://soundcloud.com/jagerman',
    icon: <SoundcloudIcon />
  },
  youtube: {
    title: 'YouTube',
    url: 'https://www.youtube.com/c/jagermanmusic',
    icon: <YoutubeIcon />
  }
}

export const mixtapes = [
  {
    title: 'Summer Sax',
    description: '11M+ plays ∙ 55K+ likes',
    url: 'https://www.youtube.com/watch?v=bzZupZkrjm0'
  },
  {
    title: 'Sax On Fire',
    description: '1.5M+ plays ∙ 35K+ likes',
    url: 'https://soundcloud.com/jagerman/saxonfire'
  },
  {
    title: 'Casablanca',
    description: '120K+ plays ∙ 3K+ likes',
    url: 'https://soundcloud.com/jagerman/casablanca'
  }
]

export const navigations = {
  header: [
    {
      title: 'Home',
      url: '/'
    },
    {
      title: 'Blog',
      url: '/blog'
    },
    {
      title: 'About',
      url: '/about'
    },
    {
      title: 'Journey',
      url: '/journey'
    }
  ],
  footer: [
    {
      title: 'Home',
      url: '/'
    },
    {
      title: 'Blog',
      url: '/blog'
    },
    {
      title: 'About',
      url: '/about'
    },
    {
      title: 'Now',
      url: '/now'
    },
    {
      title: 'Journey',
      url: '/journey'
    },
    {
      title: 'Snippets',
      url: '/snippets'
    },
    {
      title: 'Uses',
      url: '/uses'
    },
    {
      title: 'Curriculum Vitae',
      url: 'https://read.cv/onur'
    },
    {
      title: 'Buy me a coffee',
      url: 'http://buymeacoff.ee/suyalcinkaya'
    }
  ]
}

export const projects = [
  {
    title: 'Notebook',
    description: 'My personal notebook.',
    url: 'https://github.com/suyalcinkaya/notebook'
  },
  {
    title: 'Notiful',
    description: 'An open source minimal and clean taking notes extension for Chrome.',
    url: 'https://github.com/suyalcinkaya/notiful'
  },
  {
    title: 'Koalazily',
    description: 'Loading images lazily in a modern way using Intersection Observer API.',
    url: 'https://github.com/suyalcinkaya/koalazily'
  }
]
