import Head from 'next/head';
import { getRepositories } from "@/lib/actions/repo.action";
import { GitHubRepository } from "@/lib/models/GitHubRepository";
import Header from '@/components/header';
import Footer from '@/components/footer';
import Portfolio from '@/components/portfolio';

export default async function Home() {
  const gitHubRepository: GitHubRepository[] = await getRepositories();

  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-between">
      <div className="bg-gray-900 w-full">
        {/* Head section for metadata */}
        <Head>
          <title>Kyle Scudder - Backend Developer</title>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          />
        </Head>
        <Header />
        {/* Main Content */}
        <div className="container mx-auto p-4">
          <section className="bg-gray-900 rounded p-4 shadow">
            <h2 className="text-xl font-semibold mb-4">About Me</h2>
            <p>
              Welcome to my portfolio! I am a passionate backend developer with
              a love for coding and solving complex problems.
            </p>
          </section>
        </div>
        <Portfolio gitHubRepository={gitHubRepository} />
        <Footer />
      </div>
    </main>
  );
}
