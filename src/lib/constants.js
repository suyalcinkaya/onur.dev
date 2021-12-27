import GithubIcon from 'components/icons/Github'
import MediumIcon from 'components/icons/Medium'
import LinkedinIcon from 'components/icons/Linkedin'
import SoundcloudIcon from 'components/icons/Soundcloud'
import TwitterIcon from 'components/icons/Twitter'
import YoutubeIcon from 'components/icons/Youtube'

export const MAX_WIDTH = 'max(40vw, 768px)'
export const BUY_ME_COFFEE_URL = 'http://buymeacoff.ee/suyalcinkaya'

export const profiles = [
  {
    name: 'GitHub',
    url: 'https://github.com/suyalcinkaya/',
    icon: <GithubIcon />
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/onursdev',
    icon: <TwitterIcon />
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/suyalcinkaya/',
    icon: <LinkedinIcon />
  },
  {
    name: 'Medium',
    url: 'https://suyalcinkaya.medium.com',
    icon: <MediumIcon />
  },
  {
    name: 'Soundcloud',
    url: 'https://soundcloud.com/jagerman',
    icon: <SoundcloudIcon />
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/c/jagermanmusic',
    icon: <YoutubeIcon />
  }
]

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
      url: '/about',
      name: 'About'
    },
    {
      url: '/cv',
      name: 'Curriculum Vitae'
    },
    {
      url: '/blog',
      name: 'Blog'
    },
    {
      url: '/snippets',
      name: 'Snippets'
    },
    {
      url: '/journey',
      name: 'Journey'
    }
  ]
}

export const journeyData = [
  {
    year: 2020,
    items: [
      {
        title: 'Joined heycar',
        description: 'Thrilled to join this brilliant company. 🎉',
        emoji: '🚙'
      },
      {
        title: 'Moved to Berlin',
        description: "It's my first time living abroad and I'm far away from my family and friends.",
        emoji: '🇩🇪'
      }
    ]
  },
  {
    year: 2019,
    items: [
      {
        title: 'Served in the military',
        description: "I'm glad to get rid of this 💩.",
        emoji: '💂'
      }
    ]
  },
  {
    year: 2018,
    items: [
      {
        title: 'Joined Yemeksepeti',
        description: "I'm excited to help grow the Yemek.com team.",
        emoji: '🍕'
      }
    ]
  },
  {
    year: 2015,
    items: [
      {
        title: 'Joined Sistas',
        description: 'This is my first software related job. Feeling super lucky.',
        emoji: '🥳'
      },
      {
        title: 'Graduated from Dogus University',
        description: 'It was a long 5 years. I worked my ass off to make it.',
        emoji: '🎓'
      }
    ]
  },
  {
    year: 2014,
    items: [
      {
        title: 'Joined Apple',
        description: 'My first job within the best company in the universe!',
        emoji: ''
      }
    ]
  },
  {
    year: 2010,
    items: [
      {
        title: 'Started at Dogus University',
        description: 'Being able to study Computer Engineering is one of the luckiest moments of my life.',
        emoji: '📚'
      }
    ]
  },
  {
    year: 1992,
    items: [
      {
        title: 'Born',
        description: 'On 23th of June.',
        emoji: '👶🏼'
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
      url: 'https://www.linkedin.com/in/suyalcinkaya/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAAAqCHzcBG8Or0xzHiZ5ukO_cvYq1B1VGCBs,1580969288770)/'
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
