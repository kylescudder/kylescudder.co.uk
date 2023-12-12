import Head from 'next/head';
import { getRepositories } from "@/lib/actions/repo.action";
import { GitHubRepository } from "@/lib/models/GitHubRepository";
import Header from '@/components/header';
import Footer from '@/components/footer';
import Portfolio from '@/components/portfolio';
import Connect from '@/components/connect';
import Type from '@/components/type'

export default async function Home() {
  const gitHubRepository: GitHubRepository[] = await getRepositories();

  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-between">
      <div className="bg-gray-900 w-full container mx-auto lg:px-24">
        {/* Head section for metadata */}
        <Head>
          <title>Kyle Scudder - Backend Developer</title>
        </Head>
        <Header />
        {/* Main Content */}
        <div className="container mx-auto p-4">
          <section className="rounded">
            <h2 className="text-5xl font-semibold mb-4">
              Hi there!
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </h2>
             <h1 className="text-5xl font-semibold mb-4">
                I'M
                <strong className="text-seance-500"> Kyle Scudder </strong>
              </h1>
          <Type />
            <p>
              Welcome to my portfolio! I am a passionate backend developer with
              a love for coding and solving complex problems.
            </p>
          </section>
          <Portfolio gitHubRepository={gitHubRepository} />
          <Connect />
        </div>
      </div>
      <Footer />
    </main>
  );
}
