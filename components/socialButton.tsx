'use client'

import React from 'react'

export default function SocialButton(props: {
  icon: JSX.Element
  link: string
}): JSX.Element {
  return (
    <a href={props.link} target='_blank' rel='noreferrer'>
      <div
        className='mx-4 flex h-10 w-10 flex-col justify-center rounded-full
			bg-white text-seance-600'
      >
        {props.icon}
      </div>
    </a>
  )
}
