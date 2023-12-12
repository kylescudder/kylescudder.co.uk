'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

export default function Button (props: { url: string, text: string }): JSX.Element {
	const router = useRouter()

	const handleClick = (url: string): void => {
		router.push(url)
	}
	return (
		<button
			className="w-full rounded-xl px-12 py-4 my-3 block shadow-md
          bg-gradient-to-r from-seance-600 to-blue-500 text-white
          transition duration-500 bg-200%
          uppercase font-extrabold text-base text-center
          hover:bg-right-center"
			onClick={() => { handleClick(props.url) }}
		>
			{props.text}
		</button>
	)
}
