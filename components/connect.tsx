import React from 'react'
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter
} from '@tabler/icons-react'
import SocialButton from './socialButton'

export default function Connect(): JSX.Element {
  return (
    <section id='social' className='mb-20 flex flex-col'>
      <div className='mb-1 mt-2 flex w-full justify-center'>
        <div className='text-4xl'>GET IN TOUCH</div>
      </div>
      <div className='mb-1 mt-1 flex w-full justify-center'>
        <div className='text-lg'>Feel free to connect with me on:</div>
      </div>
      <div className='mb-2 mt-1 flex w-full justify-center'>
        <SocialButton
          icon={<IconBrandGithub size={32} className='mx-auto' />}
          link='https://www.github.com/kylescudder'
        />
        <SocialButton
          icon={<IconBrandTwitter size={32} className='mx-auto' />}
          link='https://twitter.com/i/flow/login?redirect_after_login=%2Flittlescud'
        />
        <SocialButton
          icon={<IconBrandLinkedin size={32} className='mx-auto' />}
          link='https://uk.linkedin.com/in/kyle-scudder-9417a861'
        />
        <SocialButton
          icon={<IconBrandInstagram size={32} className='mx-auto' />}
          link='https://www.instagram.com/scudderkyle/'
        />
      </div>
    </section>
  )
}
