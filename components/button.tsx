'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

export default function Button(props: {
  url: string
  text: string
}): JSX.Element {
  const router = useRouter()

  const handleClick = (url: string): void => {
    router.push(url)
  }
  return (
    <button
      className='my-3 block w-full rounded-xl bg-gradient-to-r from-seance-600 to-blue-500
          bg-200% px-12 py-4 text-center
          text-base font-extrabold uppercase
          text-white shadow-md transition duration-500
          hover:bg-right-center'
      onClick={() => {
        handleClick(props.url)
      }}
    >
      {props.text}
    </button>
  )
}
