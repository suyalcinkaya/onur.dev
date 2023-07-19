import {
  GithubIcon,
  TwitterIcon,
  LinkedinIcon,
  InstagramIcon,
  YoutubeIcon,
  SparklesIcon,
  Edit3Icon,
  NavigationIcon,
  Wand2Icon,
  BookmarkIcon
} from 'lucide-react'

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
    name: 'Portfolios'
  },
  {
    id: 15807897,
    name: 'Reading'
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
  },
  {
    id: 25589709,
    name: 'Wallpapers'
  }
]

export const LINKS = [
  {
    href: '/',
    label: 'Home',
    icon: <SparklesIcon size={16} />
  },
  {
    href: '/writing',
    label: 'Writing',
    icon: <Edit3Icon size={16} />
  },
  {
    href: '/journey',
    label: 'Journey',
    icon: <NavigationIcon size={16} />
  },
  {
    href: '/stack',
    label: 'Stack',
    icon: <Wand2Icon size={16} />
  },
  {
    href: '/bookmarks',
    label: 'Bookmarks',
    icon: <BookmarkIcon size={16} />
  }
]
