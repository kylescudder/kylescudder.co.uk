import Head from 'next/head';
import Image from 'next/image'
import Project from '@/components/projects';
import { getRepositories } from "@/lib/actions/repo.action";
import { GitHubRepository } from "@/lib/models/GitHubRepository";
interface Project {
  title: string,
  description: string;
}

export default async function Home() {
  const gitHubRepository: GitHubRepository[] = await getRepositories();

  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-between">
      <div className="bg-gray-900">
        {/* Head section for metadata */}
        <Head>
          <title>Kyle Scudder - Backend Developer</title>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          />
        </Head>

        {/* Header */}
        <header className="bg-blue-500 text-white p-4">
          <h1 className="text-2xl font-semibold">Kyle Scudder</h1>
          <p className="text-sm">Backend Developer</p>
        </header>

        {/* Main Content */}
        <div className="container mx-auto p-4">
          <section className="bg-gray-900 rounded p-4 shadow">
            <h2 className="text-xl font-semibold mb-4">About Me</h2>
            <p>
              Welcome to my portfolio! I am a passionate backend developer with
              a love for coding and solving complex problems.
            </p>
          </section>

          {/* Portfolio Section */}
          <section className="mt-4 bg-gray-900 rounded p-4 shadow">
            <h2 className="text-xl font-semibold mb-4">My Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {gitHubRepository.map((project) => {
                return (
                  <Project
                    key={project.id}
                    repo={project}
                  />
                );
              })}
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="bg-blue-500 text-white text-center p-4">
          &copy; 2023 Kyle Scudder
        </footer>
      </div>
    </main>
  );
}
