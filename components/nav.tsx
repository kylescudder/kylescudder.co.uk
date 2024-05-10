'use client'

import {
  IconBrandReact,
  IconGitBranch,
  IconLetterX,
  IconMenu2,
  IconSocial
} from '@tabler/icons-react'
import Link from 'next/link'
import React, { useState } from 'react'

function NavBar(): JSX.Element {
  const [navbar, setNavbar] = useState(false)

  return (
    <div>
      <nav className='fixed left-0 right-0 top-0 z-10 contents w-full'>
        <div className='mx-auto justify-between px-4 md:flex md:items-center'>
          <div>
            <div className='flex items-center justify-between pt-1 md:block md:py-5'>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className='md:hidden'>
                <button
                  className='rounded-md p-2 text-gray-700 outline-none focus:border
									focus:border-gray-400'
                  onClick={() => {
                    setNavbar(!navbar)
                  }}
                >
                  {navbar ? <IconLetterX /> : <IconMenu2 />}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`mt-8 flex-1 justify-self-center py-3 md:mt-0 md:block md:pb-0 ${
                navbar ? 'block p-12 md:p-0' : 'hidden'
              }`}
            >
              <ul className='h-screen items-center justify-center md:flex md:h-auto '>
                <li
                  className='border-b-2 border-purple-900 py-2 pb-6 text-center text-xl
								text-white hover:bg-purple-900  md:border-b-0  md:hover:bg-transparent
								md:hover:text-purple-600'
                >
                  <Link
                    href='#portfolio'
                    onClick={() => {
                      setNavbar(!navbar)
                    }}
                  >
                    <div className='flex items-center'>
                      <IconGitBranch />
                      <span className='ml-2'>Projects</span>
                    </div>
                  </Link>
                </li>
                <li
                  className='hover-bg-purple-600 md:hover-text-purple-600 md:hover-bg-transparent border-b-2 border-purple-900 py-2 pb-6
								text-center  text-xl  text-white
								md:ml-6 md:border-b-0'
                >
                  <Link
                    href='#social'
                    onClick={() => {
                      setNavbar(!navbar)
                    }}
                  >
                    <div className='flex items-center'>
                      <IconSocial />
                      <span className='ml-2'>Socials</span>
                    </div>
                  </Link>
                </li>
                <li
                  className='hover-bg-purple-600 md:hover-text-purple-600 md:hover-bg-transparent border-b-2 border-purple-900 py-2 pb-6
								text-center  text-xl  text-white
								md:ml-6 md:border-b-0'
                >
                  <Link
                    href='#tools'
                    onClick={() => {
                      setNavbar(!navbar)
                    }}
                  >
                    <div className='flex items-center'>
                      <IconBrandReact />
                      <span className='ml-2'>Tools</span>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
