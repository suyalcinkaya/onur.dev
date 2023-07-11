import { GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon, YoutubeIcon } from 'lucide-react'

export const PROFILES = {
  twitter: {
    title: 'Twitter',
    username: 'onurschu',
    url: 'https://twitter.com/intent/user?screen_name=onurschu',
    icon: <TwitterIcon size={16} />
  },
  github: {
    title: 'GitHub',
    url: 'https://github.com/suyalcinkaya',
    icon: <GithubIcon size={16} />
  },
  linkedin: {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/suyalcinkaya',
    icon: <LinkedinIcon size={16} />
  },
  medium: {
    title: 'Medium',
    url: 'https://suyalcinkaya.medium.com'
  },
  instagram: {
    title: 'Instagram',
    url: 'https://www.instagram.com/jgrmn',
    icon: <InstagramIcon size={16} />
  },
  soundcloud: {
    title: 'Soundcloud',
    url: 'https://soundcloud.com/jagerman'
  },
  youtube: {
    title: 'YouTube',
    url: 'https://www.youtube.com/c/jagermanmusic',
    icon: <YoutubeIcon size={16} />
  },
  bluesky: {
    title: 'Bluesky',
    url: 'https://staging.bsky.app/profile/onur.dev'
  },
  readcv: {
    title: 'Read.cv',
    url: 'https://read.cv/onur'
  },
  pinterest: {
    title: 'Pinterest',
    url: 'https://nl.pinterest.com/onurschu'
  }
}

export const MIXTAPES = [
  {
    title: 'Summer Sax',
    description: '11M+ plays ∙ 55K+ likes',
    url: 'https://www.youtube.com/watch?v=bzZupZkrjm0',
    date: '2015-11-02'
  },
  {
    title: 'Sax On Fire',
    description: '1.7M+ plays ∙ 40K+ likes',
    url: 'https://soundcloud.com/jagerman/saxonfire',
    date: '2014-04-21'
  },
  {
    title: 'Casablanca',
    description: '130K+ plays ∙ 3K+ likes',
    url: 'https://soundcloud.com/jagerman/casablanca',
    date: '2013-12-31'
  }
]

export const PROJECTS = [
  {
    title: 'Notebook',
    description: 'My personal notebook.',
    url: 'https://github.com/suyalcinkaya/notebook'
  },
  {
    title: 'onur.dev',
    description: 'Source code of this website.',
    url: 'https://github.com/suyalcinkaya/onur.dev'
  },
  {
    title: 'Koalazily',
    description: 'Loading images lazily in a modern way using Intersection Observer API.',
    url: 'https://github.com/suyalcinkaya/koalazily'
  }
]

// 9rem (pt-36 from PageLayout) - 4rem (header height) = 5rem (80px)
export const SCROLL_THRESHOLD = 80

export const COLLECTIONS = [
  {
    id: 18259129,
    name: 'Apps & Tools'
  },
  {
    id: 15968768,
    name: 'Design'
  },
  {
    id: 23598938,
    name: 'Fonts'
  },
  {
    id: 16949672,
    name: 'Frontend'
  },
  {
    id: 15807896,
    name: 'Personal Websites'
  },
  {
    id: 15807897,
    name: 'Reading List'
  },
  {
    id: 15969648,
    name: 'VS Code'
  },
  {
    id: 16338467,
    name: 'Websites'
  },
  {
    id: 15896982,
    name: 'Tweets'
  }
]
