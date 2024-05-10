import React from 'react'
import type GitHubRepository from '@/lib/models/GitHubRepository'
import Project from './projects'

export default function Portfolio(props: {
  gitHubRepository: GitHubRepository[]
}): JSX.Element {
  return (
    <section id='portfolio' className='my-4 px-4'>
      <h2 className='mb-8 flex items-center justify-center text-2xl font-semibold'>
        Here are a few of the project I have been working on recently!
      </h2>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
        {props.gitHubRepository.map((project) => {
          return <Project key={project.id} repo={project} />
        })}
      </div>
    </section>
  )
}
