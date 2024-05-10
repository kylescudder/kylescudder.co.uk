import React from 'react'
import type GitHubRepository from '@/lib/models/GitHubRepository'
import Button from './button'

export default function Project(props: {
  repo: GitHubRepository
}): JSX.Element {
  return (
    <div className='rounded-lg border bg-gray-800 p-4 text-white'>
      <div className='mb-2 border-b border-gray-700 pb-2'>
        <h3 className='text-2xl font-semibold'>{props.repo.name}</h3>
      </div>
      <p className='mb-4'>{props.repo.description}</p>
      <div className='mb-2'>
        <Button text='Go to the site' url={props.repo.homepage} />
        <Button text='Go to the repo' url={props.repo.git_url} />
      </div>
    </div>
  )
}
