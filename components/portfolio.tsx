import React from 'react'
import type GitHubRepository from '@/lib/models/GitHubRepository'
import Project from './projects'

export default function Portfolio (props: { gitHubRepository: GitHubRepository[] }): JSX.Element {
	return (
		<section id="portfolio" className="px-4 my-4">
			<h2 className="text-2xl font-semibold flex justify-center items-center mb-8">
				Here are a few of the project I have been working
				on recently!</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				{props.gitHubRepository.map((project) => {
					return <Project key={project.id} repo={project} />
				})}
			</div>
		</section>
	)
}
