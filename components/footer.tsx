import React from 'react'
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter
} from '@tabler/icons-react'

export default function Footer(): JSX.Element {
  const currentDate = new Date()

  return (
    <footer
      className='mx-auto flex w-full justify-between bg-black text-white
		shadow-inner lg:px-72'
    >
      <div className='mx-auto flex items-center p-4'>
        <div className='flex-grow'>
          &copy; {currentDate.getFullYear()} Kyle Scudder
        </div>
        <div className='ml-10 flex space-x-2'>
          <a
            href='https://www.github.com/kylescudder'
            target='_blank'
            rel='noreferrer'
          >
            <IconBrandGithub />
          </a>
          <a
            href='https://twitter.com/i/flow/login?redirect_after_login=%2Flittlescud'
            target='_blank'
            rel='noreferrer'
          >
            <IconBrandTwitter />
          </a>
          <a
            href='https://uk.linkedin.com/in/kyle-scudder-9417a861'
            target='_blank'
            rel='noreferrer'
          >
            <IconBrandLinkedin />
          </a>
          <a
            href='https://www.instagram.com/scudderkyle/'
            target='_blank'
            rel='noreferrer'
          >
            <IconBrandInstagram />
          </a>
        </div>
      </div>
    </footer>
  )
}
