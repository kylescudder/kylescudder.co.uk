'use client'

import React from 'react'

export default function SocialButton (props: {
	icon: JSX.Element
	link: string
}): JSX.Element {
	return (
		<a href={props.link} target="_blank" rel="noreferrer">
			<div className="rounded-full bg-white w-10 h-10 text-seance-600 mx-4 flex
			flex-col justify-center">
				{props.icon}
			</div>
		</a>
	)
}
