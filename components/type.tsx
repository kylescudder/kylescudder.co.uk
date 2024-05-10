'use client'

import React from 'react'
import Typewriter from 'typewriter-effect'

function Type(): JSX.Element {
  return (
    <div className='mb-4 text-5xl font-semibold'>
      <Typewriter
        options={{
          strings: [
            '.NET',
            'C#',
            'Web API 2',
            'Entity Framework',
            'MS SQL',
            'TypeScript',
            'React',
            'NextJS'
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50
        }}
      />
    </div>
  )
}

export default Type
