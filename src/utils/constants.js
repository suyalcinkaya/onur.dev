import { Github, Medium, Linkedin, Soundcloud, Twitter } from 'components/icons'

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
    url: 'https://www.linkedin.com/in/onursuyalcinkaya/',
    icon: <Linkedin />
  },
  {
    name: 'Medium',
    url: 'https://medium.com/@suyalcinkaya',
    icon: <Medium />
  },
  {
    name: 'Soundcloud',
    url: 'https://soundcloud.com/jagerman',
    icon: <Soundcloud />
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
    playCount: '7K',
    likeCount: '290'
  }
]

export const HEADER_HEIGHT = 70

export const navigations = [
  {
    url: '/cv',
    name: 'CV'
  },
  {
    url: '/journey',
    name: 'Journey'
  },
  {
    url: '/about',
    name: 'About'
  }
]

export const journeyData = [
  {
    year: 2020,
    items: [
      {
        title: 'Joined Heycar',
        description: 'Thrilled to join this brilliant company. 🎉'
      },
      {
        title: 'Moved to Berlin',
        description: "This is the first time I live and work abroad and I'm far away from my family and friends."
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
        description: "I'm excited to help grow the Yemek.com."
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
        description: 'Studying Computer Engineering is one of the luckiest moments of my life.'
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
      title: 'Frontend Engineer',
      startDate: 'Sep 2020',
      endDate: 'Present',
      location: '🇩🇪 Berlin, Germany',
      descriptions: [],
      accomplishments: [],
      stack: ['React', 'Redux', 'Express', 'styled-components', 'Storybook', 'Jest', 'Enzyme', 'Git', 'Kanban']
    },
    {
      company: 'Yemeksepeti',
      title: 'Frontend Engineer',
      startDate: 'Sep 2018',
      endDate: 'Sep 2020',
      location: '🇹🇷 Istanbul, Turkey',
      descriptions: [
        `I was responsible for Yemek.com, which is a sub-brand within Yemeksepeti and a platform that is visited by 20 million unique people monthly and contains recipes, videos, and contents such as fun and instructional subjects related on everything about food.`,
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
        'Jira'
      ]
    },
    {
      company: 'Sistas',
      title: 'Fullstack Developer',
      startDate: 'Dec 2015',
      endDate: 'Sep 2018',
      location: '🇹🇷 Istanbul, Turkey',
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
      title: 'Specialist',
      startDate: 'Aug 2014',
      endDate: 'Dec 2015',
      location: '🇹🇷 Istanbul, Turkey',
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
  skills: []
}
