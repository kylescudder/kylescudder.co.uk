import React from 'react'
import Image from 'next/image'
import profile from '@/public/assets/profile.svg'

const Thanks = (): JSX.Element => {
  return (
    <section id='thanks' className='my-20 text-center lg:my-40'>
      <div className='items-center justify-center'>
        <Image
          className='mx-auto mb-10 h-40 w-40 rounded-full'
          src={profile}
          alt='Kyle Scudder'
        />
        <div className='mt-4 flex items-center justify-center'>
          <h3 className='w-3/4 text-2xl font-semibold'>
            Thanks for taking the time to check out my portfolio! If you want to
            get in touch you can always reach out on my socials or email me at
            <a href='mailto:kyle@kylescudder.co.uk'>
              <strong className='text-seance-500'>
                {' '}
                kyle@kylescudder.co.uk
              </strong>
            </a>
          </h3>
        </div>
      </div>
    </section>
  )
}

export default Thanks
