import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  YoutubeIcon,
  SparklesIcon,
  PencilLineIcon,
  NavigationIcon,
  Wand2Icon,
  BookmarkIcon,
  ArmchairIcon
} from 'lucide-react'

export const PROFILES = {
  twitter: {
    title: 'X (Twitter)',
    username: 'onurschu',
    url: 'https://twitter.com/intent/user?screen_name=onurschu',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        width="44"
        height="44"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#000000"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
        <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
      </svg>
    )
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

export const TWEETS_COLLECTION_ID = 15896982

export const COLLECTION_IDS = [
  18259129,
  15968768,
  23598938,
  16949672,
  15807896,
  15807897,
  15969648,
  16338467,
  TWEETS_COLLECTION_ID,
  25589709,
  17139082,
  22029101,
  39696243
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
    icon: <PencilLineIcon size={16} />
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
    href: '/workspace',
    label: 'Workspace',
    icon: <ArmchairIcon size={16} />
  },
  {
    href: '/bookmarks',
    label: 'Bookmarks',
    icon: <BookmarkIcon size={16} />
  }
]

export const WORKSPACE_ITEMS = [
  {
    title: 'Richard Lampert Eiermann 2 Desk',
    url: 'https://www.richard-lampert.de/en/furniture/eiermann-2-desk-en/',
    specs: 'White, 80x160cm'
  },
  {
    title: 'Herman Miller Aeron Remastered',
    url: 'https://store.hermanmiller.com/office-chairs-aeron/aeron-chair/2195348.html',
    specs: 'Graphite, Size C'
  },
  {
    title: 'Apple Studio Display',
    url: 'https://www.apple.com/nl/studio-display/',
    specs: 'Tilt- and height-adjustable stand'
  },
  {
    title: '14" MacBook Pro',
    url: 'https://www.apple.com/nl/macbook-pro/',
    specs: 'Space Gray, M2, 16GB RAM, 256GB SSD'
  },
  {
    title: 'Apple Magic Trackpad',
    url: 'https://www.apple.com/nl/shop/product/MK2D3Z/A/magic-trackpad-wit-multi%E2%80%91touch-oppervlak',
    specs: 'White'
  },
  {
    title: 'Apple Magic Keyboard',
    url: 'https://www.apple.com/nl/shop/product/MK293N/A/magic-keyboard-met-touch-id-voor-mac-modellen-met-apple-silicon-nederlands',
    specs: 'White, Touch ID'
  },
  {
    title: 'Logitech MX Master 3S',
    url: 'https://www.logitech.com/nl-nl/products/mice/mx-master-3s.910-006560.html',
    specs: 'Pale Gray'
  },
  {
    title: 'Dyson Solarcycle Morph',
    url: 'https://www.dyson.nl/verlichting/bureaulamp/solarcycle-morph-cd06/wit-zilver',
    specs: 'White/Silver'
  },
  {
    title: 'Apple Airpods Max',
    url: 'https://www.apple.com/nl/airpods-max/',
    specs: 'Space Gray'
  },
  {
    title: 'Apple Airpods Pro',
    url: 'https://www.apple.com/nl/airpods-pro/',
    specs: '2nd generation'
  },
  {
    title: 'Braun Analogue Wall Clock',
    url: 'https://braun-clocks.com/collections/wall-clocks/products/bc17-classic-large-analogue-wall-clock-white',
    specs: 'White, BC17 Classic Large'
  },
  {
    title: 'IKEA Alex Drawer Unit',
    url: 'https://www.ikea.com/nl/en/p/alex-drawer-unit-white-00473546/',
    specs: 'White, 36x70cm'
  },
  {
    title: 'IKEA Övning Footrest',
    url: 'https://www.ikea.com/nl/en/p/oevning-multifunctional-ergonomic-footrest-00552020/',
    specs: 'Gray/Blue'
  }
]

export const SCROLL_AREA_ID = 'scroll-area'
export const MOBILE_SCROLL_THRESHOLD = 20
export const SUPABASE_TABLE_NAME = 'pages'

export const SUBMIT_BOOKMARK_FORM_TITLE = 'Submit a bookmark'
export const SUBMIT_BOOKMARK_FORM_DESCRIPTION =
  "Send me a website you like and if I like it too, you'll see it in the bookmarks list. With respect, please do not submit more than 5 websites a day."
export const MAX_BOOKMARK_SUBMISSIONS_PER_DAY = 5
export const BOOKMARK_SUBMISSION_COUNT_COOKIE_NAME = 'formSubmissionCount'

export const CONTENT_TYPES = {
  PAGE: 'page',
  POST: 'post',
  LOGBOOK: 'logbook'
}
