import About from 'components/icons/About'
import Blog from 'components/icons/Blog'
import Bookmarks from 'components/icons/Bookmarks'
import Cv from 'components/icons/Cv'
import Github from 'components/icons/Github'
import Journey from 'components/icons/Journey'
import Medium from 'components/icons/Medium'
import Linkedin from 'components/icons/Linkedin'
import Soundcloud from 'components/icons/Soundcloud'
import Projects from 'components/icons/Projects'
import Twitter from 'components/icons/Twitter'
import Youtube from 'components/icons/Youtube'

export const HEADER_HEIGHT = 20 //rem
export const MAX_WIDTH = `max(50vw, 768px)`
export const BUY_ME_COFFEE_URL = 'http://buymeacoff.ee/suyalcinkaya'

export const profiles = [
  {
    name: 'Twitter',
    url: 'https://twitter.com/onursdev',
    icon: <Twitter />
  },
  {
    name: 'GitHub',
    url: 'https://github.com/suyalcinkaya/',
    icon: <Github />
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/suyalcinkaya/',
    icon: <Linkedin />
  },
  {
    name: 'Medium',
    url: 'https://suyalcinkaya.medium.com',
    icon: <Medium />
  },
  {
    name: 'Soundcloud',
    url: 'https://soundcloud.com/jagerman',
    icon: <Soundcloud />
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/c/jagermanmusic',
    icon: <Youtube />
  }
]

export const mixtapes = [
  {
    title: 'Summer Sax',
    description: 'Melodic Saxophone Deep House Summer Mix',
    url: 'https://www.youtube.com/watch?v=bzZupZkrjm0',
    playCount: '10M',
    likeCount: '50K'
  },
  {
    title: 'Sax On Fire',
    description: 'Melodic Saxophone Deep House Summer Mix',
    url: 'https://soundcloud.com/jagerman/saxonfire',
    playCount: '1.36M',
    likeCount: '33.6K'
  },
  {
    title: 'Casablanca',
    description: 'Soulful Deep House Mix',
    url: 'https://soundcloud.com/jagerman/casablanca',
    playCount: '113K',
    likeCount: '2.8K'
  },
  {
    title: 'I Wanna Live Not Just Survive',
    description: 'Deep House Mixtape',
    url: 'https://soundcloud.com/jagerman/i-wanna-live-not-just-survive',
    playCount: '10K',
    likeCount: '300'
  }
]

export const mobileMenuNavigations = [
  {
    url: '/',
    name: 'Blog',
    icon: <Blog width={20} height={20} />
  },
  {
    url: '/about',
    name: 'About',
    icon: <About width={20} height={20} />
  },
  {
    url: '/projects',
    name: 'Projects',
    icon: <Projects width={20} height={20} />
  },
  {
    url: '/bookmarks',
    name: 'Bookmarks',
    icon: <Bookmarks width={20} height={20} />
  },
  {
    url: '/journey',
    name: 'Journey',
    icon: <Journey width={20} height={20} style={{ transform: 'rotate(45deg)' }} />
  },
  {
    url: '/cv',
    name: 'Curriculum Vitae',
    icon: <Cv width={20} height={20} />
  }
]

export const headerNavigations = [
  {
    url: '/',
    name: 'Blog',
    icon: <Blog width={20} height={20} />
  },
  {
    url: '/about',
    name: 'About',
    icon: <About width={20} height={20} />
  },
  {
    url: '/projects',
    name: 'Projects',
    icon: <Projects width={20} height={20} />
  },
  {
    url: '/journey',
    name: 'Journey',
    icon: <Journey width={20} height={20} style={{ transform: 'rotate(45deg)' }} />
  },
  {
    url: '/bookmarks',
    name: 'Bookmarks',
    icon: <Bookmarks width={20} height={20} />
  }
]

export const footerNavigations = [
  {
    url: '/',
    name: 'Home'
  },
  {
    url: '/about',
    name: 'About'
  },
  {
    url: '/cv',
    name: 'Curriculum Vitae'
  },
  {
    url: '/',
    name: 'Blog'
  },
  {
    url: '/projects',
    name: 'Projects'
  },
  {
    url: '/journey',
    name: 'Journey'
  },
  {
    url: '/bookmarks',
    name: 'Bookmarks'
  }
]

export const bookmarksData = [
  {
    url: 'http://brianlovin.com/?ref=onur.dev',
    by: 'Brian Lovin',
    category: 'Portfolio'
    // notion: "I think it's beautiful!"
  },
  {
    url: 'https://leerob.io/?ref=onur.dev',
    by: 'Lee Robinson',
    category: 'Portfolio'
  },
  {
    url: 'https://cmhb.de/?ref=onur.dev',
    by: 'Carl Barenbrug',
    category: 'Portfolio'
  },
  {
    url: 'https://paco.sh/?ref=onur.dev',
    by: 'Paco Coursey',
    category: 'Portfolio'
  },
  {
    url: 'https://www.sean-blanton.com/?ref=onur.dev',
    by: 'Sean Blanton',
    category: 'Portfolio'
  },
  {
    url: 'https://marcomelilli.com/?ref=onur.dev',
    by: 'Marco Melilli',
    category: 'Portfolio'
  },
  {
    url: 'https://rsms.me/?ref=onur.dev',
    by: 'Rasmus Andersson',
    category: 'Portfolio'
  },
  {
    url: 'https://www.philipcdavis.com/?ref=onur.dev',
    by: 'Philip Davis',
    category: 'Portfolio'
  },
  {
    url: 'https://www.joshwcomeau.com/?ref=onur.dev',
    by: 'Josh W Comeau',
    category: 'Portfolio'
  },
  {
    url: 'https://tkkong.com/?ref=onur.dev',
    by: 'TK Kong',
    category: 'Portfolio'
  },
  {
    url: 'https://www.julie.design/?ref=onur.dev',
    by: 'Julie Chabin',
    category: 'Portfolio'
  },
  {
    url: 'https://hayk.design/?ref=onur.dev',
    by: 'Hayk An',
    category: 'Portfolio'
  },
  {
    url: 'https://mknepprath.com/?ref=onur.dev',
    by: 'Michael Knepprath',
    category: 'Portfolio'
  }
]

export const articlesData = [
  {
    title: 'First, Understand Your Screen',
    url: 'https://tripleodeon.com/2011/12/first-understand-your-screen/',
    author: 'James Pearce'
  },
  {
    title: 'React is slow, what now?',
    url: 'https://nosleepjavascript.com/react-performance/',
    author: 'NoSleep Javascript'
  },
  {
    title: 'Yurt Dışından Neden Döndüm',
    url: 'https://keremkoseoglu.com/2016/11/10/yurt-disindan-neden-dondum/',
    author: 'Dr. Kerem Koseoglu'
  },
  {
    title: 'Debounce vs Throttle: Definitive Visual Guide',
    url: 'https://redd.one/blog/debounce-vs-throttle',
    author: 'Artem Zakharchenko'
  }
]

export const journeyData = [
  {
    year: 2020,
    items: [
      {
        title: 'Joined heycar',
        description: 'Thrilled to join this brilliant company. 🎉'
      },
      {
        title: 'Moved to Berlin',
        description: "It's my first time living abroad and I'm far away from my family and friends."
      }
    ]
  },
  {
    year: 2019,
    items: [
      {
        title: 'Served in the military',
        description: "I'm glad to get rid of this 💩."
      }
    ]
  },
  {
    year: 2018,
    items: [
      {
        title: 'Joined Yemeksepeti',
        description: "I'm excited to help grow the Yemek.com team."
      }
    ]
  },
  {
    year: 2015,
    items: [
      {
        title: 'Joined Sistas',
        description: 'This is my first software related job. Feel so lucky.'
      }
    ]
  },
  {
    year: 2014,
    items: [
      {
        title: 'Joined Apple',
        description: 'My first job within the best company in the universe!'
      }
    ]
  },
  {
    year: 2010,
    items: [
      {
        title: 'Started at Dogus University',
        description: 'Being able to study Computer Engineering is one of the luckiest moments of my life.'
      }
    ]
  },
  {
    year: 1992,
    items: [
      {
        title: 'Born',
        description: '👶🏼 🍼'
      }
    ]
  }
]

export const cvData = {
  experiences: [
    {
      company: 'heycar',
      url: 'https://hey.car/',
      title: 'Frontend Engineer',
      startDate: 'Sep 2020',
      endDate: 'Present',
      location: 'Berlin, Germany',
      descriptions: [],
      accomplishments: [],
      stack: ['React', 'Redux', 'Express', 'styled-components', 'Storybook', 'Jest', 'Enzyme', 'Git', 'Scrum']
    },
    {
      company: 'Yemeksepeti',
      url: 'https://www.yemeksepeti.com/',
      title: 'Frontend Engineer',
      startDate: 'Sep 2018',
      endDate: 'Sep 2020',
      location: 'Istanbul, Turkey',
      descriptions: [
        `I was responsible for Yemek.com, which is a sub-brand within Yemeksepeti and a platform that is visited by ~10 million unique people monthly and contains recipes, videos, and contents such as fun and instructional subjects related on everything about food.`,
        `As a Frontend Engineer, my tasks were; writing clean and modern JavaScript ES6 code with the best practices, making UI tweaks, building project/landing pages for the brand cooperations, adding new features, increasing the performance of yemek.com and working closely with product managers and UI/UX designers to facilitate better user experience. We were working with Scrum methodology in an Agile-driven environment to design, develop and deploy scalable and robust software.`
      ],
      accomplishments: [
        `Increased the page speed by 13% with lazy loading the images and components to show them after loading/rendering.`,
        `Improved the bundle size by 22% with; replacing the high-sized libraries/dependencies with its lower-sized alternatives, and refactoring the legacy code and components with the best practices.`,
        `Completely redesigned the yemek.com website with the modern perspective to give the best user experience and developer-friendly reusable components to maintain the codebase properly.`
      ],
      stack: [
        'React',
        'Redux',
        'Node.js',
        'Sass',
        'styled-components',
        'Jenkins',
        'AWS',
        'Cloudflare',
        'Kibana',
        'New Relic',
        'Git',
        'Scrum'
      ]
    },
    {
      company: 'Sistas',
      url: 'https://www.sistas.com.tr/',
      title: 'Fullstack Developer',
      startDate: 'Dec 2015',
      endDate: 'Sep 2018',
      location: 'Istanbul, Turkey',
      descriptions: [
        `I specialized in analyzing and documenting the project requirements, organizing resource/people scheduling according to the project tasks using Microsoft Project and ProjectLibre, designing and developing multiple web-based applications using Java with Spring Framework and AngularJS.`
      ],
      accomplishments: [
        `Researched issues and topics and presented them to the team for self-improvement, knowledge sharing, and time-saving. With that way, I've initiated knowledge sharing sessions in the company by following becoming a culture.`
      ],
      stack: [
        'Java',
        'Spring MVC',
        'Hibernate/JPA',
        'MySQL',
        'SQL Server',
        'Oracle',
        'JUnit',
        'AngularJS',
        'Karma',
        'Bootstrap',
        'Git'
      ]
    },
    {
      company: 'Apple',
      url: 'https://www.apple.com/',
      title: 'Specialist',
      startDate: 'Aug 2014',
      endDate: 'Dec 2015',
      location: 'Istanbul, Turkey',
      descriptions: [
        `I participated in the NSO (New Store Opening) process of Apple Store Akasya in Turkey. Created a seamless customer journey and ownership by following the Apple Steps of Service. Maintained composure and customer focus while troubleshooting and solving issues. Repaired relationships. Managed time, took rational risks and made appropriate decisions quickly. Supported the team in helping with all functions within the store.`
      ],
      accomplishments: [],
      stack: []
    }
  ],
  educations: [
    {
      school: 'Bahcesehir University',
      degree: `Master's Degree`,
      field: 'Computer Engineering',
      startDate: '2015',
      endDate: '2018',
      GPA: 3.32
    },
    {
      school: 'Dogus University',
      degree: 'Bachelor Degree',
      field: 'Computer Engineering',
      startDate: '2010',
      endDate: '2015',
      GPA: 2.26
    }
  ],
  certifications: [
    {
      name: 'PSM-1',
      issuedBy: 'Scrum.org',
      date: '2018',
      url:
        'https://www.linkedin.com/in/suyalcinkaya/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAAAqCHzcBG8Or0xzHiZ5ukO_cvYq1B1VGCBs,1580969288770)/'
    },
    {
      name: 'Global Retail Training',
      issuedBy: 'Apple',
      date: '2014'
    },
    {
      name: 'Software Web Programming and Database',
      issuedBy: 'Bilge Adam',
      date: '2012'
    }
  ],
  skills: []
}

export const projectData = [
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
