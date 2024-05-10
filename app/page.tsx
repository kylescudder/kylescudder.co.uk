import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { getRepositories } from '@/lib/actions/repo.action'
import { type GitHubRepository } from '@/lib/models/GitHubRepository'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Portfolio from '@/components/portfolio'
import Connect from '@/components/connect'
import Type from '@/components/type'
import desk from '@/public/assets/desk.svg'
import LandAndTools from '@/components/tools'
import Thanks from '@/components/thanks'
import logo from '@/public/assets/logo.svg'

export default async function Home(): Promise<JSX.Element> {
  const gitHubRepository: GitHubRepository[] = await getRepositories()

  return (
    <main className='flex min-h-screen w-full flex-col items-center justify-between'>
      <div className='mx-auto w-full bg-gray-900 lg:px-72'>
        {/* Head section for metadata */}
        <Head>
          <title>Kyle Scudder - Backend Developer</title>
        </Head>
        <Header />
        {/* Main Content */}
        <div className='mx-auto p-4 lg:flex lg:flex-row lg:items-center'>
          <section className='rounded py-10 lg:w-1/2 lg:py-56'>
            <Image className='mb-10 w-32' src={logo} alt='logo' />
            <h2 className='text-5xl font-semibold lg:mb-16'>
              Hi there!
              <span className='wave' role='img' aria-labelledby='wave'>
                👋🏻
              </span>
            </h2>
            <h1 className='text-5xl font-semibold lg:mb-16'>
              I&apos;m
              <strong className='text-seance-500'> Kyle Scudder </strong>
            </h1>
            <Type />
            <p>
              Welcome to my portfolio! I am a passionate backend developer with
              a love for coding and solving complex problems.
            </p>
          </section>
          <div className='hidden lg:flex lg:w-1/2 lg:justify-center'>
            <Image src={desk} alt='desk' />
          </div>
        </div>
        <Portfolio gitHubRepository={gitHubRepository} />
        <LandAndTools />
        <Thanks />
        <Connect />
      </div>
      <Footer />
    </main>
  )
}
