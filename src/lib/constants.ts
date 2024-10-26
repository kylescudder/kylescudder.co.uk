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
  medium: 'https://ladvace.medium.com/',
  discord: 'https://discordapp.com/users/littlescud',
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
      'Integration IA services with react and tailwind css',
      'Development and build of DB with mongoDB',
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
      'Development of the Spot2 platform with the use of React, Redux, and Material UI',
      'Development map with the use of Google Maps API',
      'Development internal platform with the use of React, Redux, and Material UI',
      'Testing and debugging',
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
      'Development of the Imaginamos platform with the use of React, Redux, and Material UI',
      'Work in ETB project with the use of React, Redux, and Material UI',
    ],
  }
]
