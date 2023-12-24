import React from 'react'
import Image from 'next/image'
import profile from '@/public/assets/profile.svg'

const Thanks = (): JSX.Element => {
	return (
		<section id='thanks' className='lg:my-40 my-20 text-center'>
			<div className='justify-center items-center'>
				<Image
					className='w-40 h-40 rounded-full mx-auto mb-10'
					src={profile}
					alt='Kyle Scudder'
				/>
				<div className='flex justify-center items-center mt-4'>
					<h3 className='w-3/4 text-2xl font-semibold'>
					Thanks for taking the time to check out my portfolio! If you want to
						get in touch you can always reach out on my socials or email me at
						<a href='mailto:kyle@kylescudder.co.uk'>
							<strong className="text-seance-500"> kyle@kylescudder.co.uk</strong>
						</a>
					</h3>
				</div>
			</div>
		</section>
	)
}

export default Thanks
