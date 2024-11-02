import type { Site, Page } from './types'

export const loaderAnimation = [
  '.loader',
  { opacity: [1, 0], pointerEvents: 'none' },
  { easing: 'ease-out' },
]

export const LINKS = {
  github: 'https://github.com/kylescudder',
  linkedin: 'https://www.linkedin.com/in/kyle-scudder-9417a861/',
  mail: 'mailto:kyle@kylescudder.co.uk',
  instagram: 'https://www.instagram.com/scudderkyle/',
  discord: 'https://discordapp.com/users/littlescud',
  letterboxd: 'https://letterboxd.com/LITTLESCUD/',
}

// Global
export const SITE: Site = {
  TITLE: 'Astro Sphere',
  DESCRIPTION:
    'Welcome to Astro Sphere, a portfolio and blog for designers and developers.',
  AUTHOR: 'Mark Horn',
}

// Work Page
export const WORK: Page = {
  TITLE: 'Work',
  DESCRIPTION: 'Places I have worked.',
}

// Blog Page
export const BLOG: Page = {
  TITLE: 'Blog',
  DESCRIPTION: 'Writing on topics I am passionate about.',
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: 'Projects',
  DESCRIPTION: 'Recent projects I have worked on.',
}

// Search Page
export const SEARCH: Page = {
  TITLE: 'Search',
  DESCRIPTION: 'Search all posts and projects by keyword.',
}

// Study Page
export const STUDIES = [
  {
    title: 'Computer Science',
    institution: 'Universidad Central',
    link: 'https://www.ucentral.edu.co/',
    date: '2019 - 2027',
  },
  {
    title: '...',
    institution: 'Platzi',
    link: 'https://platzi.com/',
    date: '2018 - 2022',
  },
  {
    title: '...',
    institution: 'Udemy',
    link: 'https://www.udemy.com/',
    date: '2018 - 2022',
  },
  {
    title: '...',
    institution: 'Youtube',
    link: 'https://www.youtube.com/@midulive',
    date: '2018 - 2022',
  },
  {
    title: 'Tattoo Artist',
    institution: 'Tattoo Academy',
    link: 'https://www.instagram.com/tattoodcacademy/',
    date: '2024 - 2025',
  },
]

export const EXPERIENCE = [
  {
    company: 'Crimson Tide',
    location: 'Royal Tunbridge Wells, Kent, United Kingdom',
    position: 'Back End Develop',
    start: 'September 2023',
    link: 'https://mpro5.com/',
    end: 'Current',
    tasks: [
      'Developed and maintained server-side applications using C# and .NET Core, with a focus on high-performance, scalable architecture.',
      'Built and optimized RESTful and GraphQL APIs for data exchange between server and client, enhancing application speed and reliability.',
      'Collaborated with external and contractor developers and cross-functional teams to define requirements, align on deliverables, and optimize application performance.',
      'Implemented security best practices, including data encryption and access controls, to safeguard sensitive information.',
    ],
  },
  {
    company: 'Paloma Systems Ltd',
    location: 'Brighton, East Sussex, United Kingdom',
    position: 'Lead Software Develop',
    link: 'https://paloma.co.uk/',
    start: 'September 2022',
    end: 'September 2023',
    tasks: [
      'Led a team of developers through the full software development lifecycle, from initial requirements gathering and design to deployment and post-launch support, ensuring project milestones were met.',
      'Provided technical guidance and mentorship to junior developers, facilitating skill development and fostering a collaborative team environment.',
      'Coordinated with stakeholders to define project goals, scope, and technical requirements, translating business objectives into actionable development plans.',
      'Conducted code reviews and enforced coding standards to ensure code quality, maintainability, and adherence to company and industry best practices.',
      'Managed project timelines, resource allocation, and risk mitigation to ensure on-time and within-budget delivery of high-impact projects.',
    ],
  },
  {
    company: 'Paloma Systems Ltd',
    link: 'https://paloma.co.uk/',
    location: 'Brighton, East Sussex, United Kingdom',
    position: '.NET Developer',
    start: 'November 2016',
    end: 'September 2022',
    tasks: [
      'Designed, developed, and maintained applications using the .NET framework, focusing on C#, ASP.NET, and Entity Framework to create robust, scalable solutions.',
      'Implemented RESTful APIs and integrated third-party services to enhance functionality and interoperability of applications.',
      'Utilized Microsoft SQL Server for data storage, creating optimized queries, stored procedures, and database structures to support application requirements.',
      'Ensured high code quality by writing unit tests, conducting code reviews, and adhering to software best practices and design patterns.',
    ],
  },
  {
    company: 'Paloma Systems Ltd',
    link: 'https://paloma.co.uk/',
    location: 'Brighton, East Sussex, United Kingdom',
    position: 'Software Support',
    start: 'November 2015',
    end: 'November 2016',
    tasks: [
      'Delivered technical support for software applications, troubleshooting issues and providing effective solutions to ensure minimal disruption for end-users.',
      'Documented known issues, updates, and troubleshooting steps in the knowledge base to improve team efficiency and streamline user assistance.',
      'Collaborated with development teams to relay bug reports, feature requests, and enhancements based on user feedback.',
      'Utilized ticketing systems and monitoring tools to track performance metrics and identify trends in common support issues.',
    ],
  },
]
