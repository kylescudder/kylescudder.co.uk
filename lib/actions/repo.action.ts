import { Octokit } from '@octokit/rest'

export async function getRepositories (): Promise<any[]> {
	const octokit = new Octokit({
		auth: process.env.GITHUB_AUTH_TOKEN
	})

	const orgName = 'Kyle-Scudder'
	const { data: repos } = await octokit.repos.listForOrg({
		org: orgName
	})

	return repos
}

getRepositories()
	.then((repositories) => {
		repositories.forEach((repo) => {
		})
	})
	.catch((error) => {
		console.error('Error:', error)
	})
