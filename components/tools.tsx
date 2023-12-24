import React from 'react'

const LandAndTools = (): JSX.Element => {
	return (
		<section id='tools' className='px-4'>
			<h3 className='text-2xl font-semibold flex justify-center items-center mb-10'>
				A few of the tools and language I know and have used:
			</h3>
			<h3 className='text-xl font-medium flex justify-center items-center'>Databases</h3>
			<article className='flex flex-wrap justify-center items-center my-6'>
				<div className="flex items-center justify-center bg-gray-100 bg-opacity-60 my-2
				rounded-xl shadow-md overflow-hidden px-6 mx-4 min-w-80 min-h-80 max-w-80 max-h-80">
					<a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
						{/* eslint-disable-next-line max-len */}
						<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
							alt="mongodb" width="80" height="80" />
					</a>
				</div>
				<div className="flex items-center justify-center bg-gray-100 bg-opacity-60 my-2
				rounded-xl shadow-md overflow-hidden px-6 mx-4 min-w-80 min-h-80 max-w-80 max-h-80">
					<a href="https://www.microsoft.com/en-gb/sql-server/sql-server-downloads"
						target="_blank" rel="noreferrer">
						{/* eslint-disable-next-line max-len */}
						<img src="https://cyclr.com/wp-content/uploads/2022/03/ext-118.png" alt="mssql" width="80" height="80" />
					</a>
				</div>
				<div className="flex items-center justify-center bg-gray-100 bg-opacity-60 my-2
				rounded-xl shadow-md overflow-hidden px-6 mx-4 min-w-80 min-h-80 max-w-80 max-h-80">
					<a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
						{/* eslint-disable-next-line max-len */}
						<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
							alt="mysql" width="80" height="80" />
					</a>
				</div>
				<div className="flex items-center justify-center bg-gray-100 bg-opacity-60 my-2
				rounded-xl shadow-md overflow-hidden px-6 mx-4 min-w-80 min-h-80 max-w-80 max-h-80">
					<a href="https://www.postgresql.org/" target="_blank" rel="noreferrer">
						{/* eslint-disable-next-line max-len */}
						<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1280px-Postgresql_elephant.svg.png"
							alt="postgresql" width="80" height="80" />
					</a>
				</div>
			</article>
			<h3 className='text-xl font-medium flex justify-center items-center my-6'>Frameworks</h3>
			<article className='flex flex-wrap justify-center items-center'>
				<div className="flex items-center justify-center bg-gray-100 bg-opacity-60 my-2
				rounded-xl shadow-md overflow-hidden px-6 mx-4 min-w-80 min-h-80 max-w-80 max-h-80">
					<a href="https://angular.io" target="_blank" rel="noreferrer">
						{/* eslint-disable-next-line max-len */}
						<img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg"
							alt="angular" width="80" height="80" />
					</a>
				</div>
				<div className="flex items-center justify-center bg-gray-100 bg-opacity-60 my-2
				rounded-xl shadow-md overflow-hidden px-6 mx-4 min-w-80 min-h-80 max-w-80 max-h-80">
					<a href="https://nextjs.org" target="_blank" rel="noreferrer">
						<img src="https://cdn.worldvectorlogo.com/logos/next-js.svg"
							alt="nextjs" width="80" height="80" />
					</a>
				</div>
				<div className="flex items-center justify-center bg-gray-100 bg-opacity-60 my-2
				rounded-xl shadow-md overflow-hidden px-6 mx-4 min-w-80 min-h-80 max-w-80 max-h-80">
					<a href="https://reactjs.org/" target="_blank" rel="noreferrer">
						{/* eslint-disable-next-line max-len */}
						<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
							alt="react" width="80" height="80" />
					</a>
				</div>
				<div className="flex items-center justify-center bg-gray-100 bg-opacity-60 my-2
				rounded-xl shadow-md overflow-hidden px-6 mx-4 min-w-80 min-h-80 max-w-80 max-h-80">
					<a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
						<img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
							alt="tailwind" width="80" height="80" />
					</a>
				</div>
				<div className="flex items-center justify-center bg-gray-100 bg-opacity-60 my-2
				rounded-xl shadow-md overflow-hidden px-6 mx-4 min-w-80 min-h-80 max-w-80 max-h-80">
					<a href="https://svelte.dev/" target="_blank" rel="noreferrer">
						<img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg"
							alt="svelte" width="80" height="80" />
					</a>
				</div>
				<div className="flex items-center justify-center bg-gray-100 bg-opacity-60 my-2
				rounded-xl shadow-md overflow-hidden px-6 mx-4 min-w-80 min-h-80 max-w-80 max-h-80">
					<a href="https://expressjs.com" target="_blank" rel="noreferrer">
						{/* eslint-disable-next-line max-len */}
						<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
							alt="express" width="80" height="80" />
					</a>
				</div>
				<div className="flex items-center justify-center bg-gray-100 bg-opacity-60 my-2
				rounded-xl shadow-md overflow-hidden px-6 mx-4 min-w-80 min-h-80 max-w-80 max-h-80">
					<a href="https://dotnet.microsoft.com/en-us/"
						target="_blank" rel="noreferrer">
						{/* eslint-disable-next-line max-len */}
						<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/1280px-Microsoft_.NET_logo.svg.png"
							alt="dotnet" width="80" height="80" />
					</a>
				</div>
			</article>
			<h3 className='text-xl font-medium flex justify-center items-center my-6'>Languages</h3>
			<article className='flex flex-wrap justify-center items-center'>
				<div className="flex items-center justify-center bg-gray-100 bg-opacity-60 my-2
				rounded-xl shadow-md overflow-hidden px-6 mx-4 min-w-80 min-h-80 max-w-80 max-h-80">
					<a href="https://www.typescriptlang.org/"
						target="_blank" rel="noreferrer">
						{/* eslint-disable-next-line max-len */}
						<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
							alt="typescript" width="80" height="80" />
					</a>
				</div>
				<div className="flex items-center justify-center bg-gray-100 bg-opacity-60 my-2
				rounded-xl shadow-md overflow-hidden px-6 mx-4 min-w-80 min-h-80 max-w-80 max-h-80">
					<a href="https://www.w3schools.com/cs/" target="_blank" rel="noreferrer">
						{/* eslint-disable-next-line max-len */}
						<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg"
							alt="csharp" width="80" height="80" />
					</a>
				</div>
				<div className="flex items-center justify-center bg-gray-100 bg-opacity-60 my-2
				rounded-xl shadow-md overflow-hidden px-6 mx-4 min-w-80 min-h-80 max-w-80 max-h-80">
					<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
						target="_blank" rel="noreferrer">
						{/* eslint-disable-next-line max-len */}
						<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
							alt="javascript" width="80" height="80" />
					</a>
				</div>
				<div className="flex items-center justify-center bg-gray-100 bg-opacity-60 my-2
				rounded-xl shadow-md overflow-hidden px-6 mx-4 min-w-80 min-h-80 max-w-80 max-h-80">
					<a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
						{/* eslint-disable-next-line max-len */}
						<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
							alt="html5" width="80" height="80" />
					</a>
				</div>
				<div className="flex items-center justify-center bg-gray-100 bg-opacity-60 my-2
				rounded-xl shadow-md overflow-hidden px-6 mx-4 min-w-80 min-h-80 max-w-80 max-h-80">
					<a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
						{/* eslint-disable-next-line max-len */}
						<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
							alt="css3" width="80" height="80" />
					</a>
				</div>
				<div className="flex items-center justify-center bg-gray-100 bg-opacity-60 my-2
				rounded-xl shadow-md overflow-hidden px-6 mx-4 min-w-80 min-h-80 max-w-80 max-h-80">
					<a href="https://sass-lang.com" target="_blank" rel="noreferrer">
						{/* eslint-disable-next-line max-len */}
						<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
							alt="sass" width="80" height="80" />
					</a>
				</div>
			</article>
			<h3 className='text-xl font-medium flex justify-center items-center my-6'>Tools</h3>
			<article className='flex flex-wrap justify-center items-center'>
				<div className="flex items-center justify-center bg-gray-100 bg-opacity-60 my-2
				rounded-xl shadow-md overflow-hidden px-6 mx-4 min-w-80 min-h-80 max-w-80 max-h-80">
					<a href="https://postman.com" target="_blank" rel="noreferrer">
						<img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
							alt="postman" width="80" height="80" />
					</a>
				</div>
				<div className="flex items-center justify-center bg-gray-100 bg-opacity-60 my-2
				rounded-xl shadow-md overflow-hidden px-6 mx-4 min-w-80 min-h-80 max-w-80 max-h-80">
					<a href="https://git-scm.com/" target="_blank" rel="noreferrer">
						<img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
							alt="git" width="80" height="80" />
					</a>
				</div>
				<div className="flex items-center justify-center bg-gray-100 bg-opacity-60 my-2
				rounded-xl shadow-md overflow-hidden px-6 mx-4 min-w-80 min-h-80 max-w-80 max-h-80">
					<a href="https://nodejs.org" target="_blank" rel="noreferrer">
						{/* eslint-disable-next-line max-len */}
						<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
							alt="nodejs" width="80" height="80" />
					</a>
				</div>
			</article>
			<h3 className='text-2xl font-semibold flex justify-center items-center my-6'>Hosting</h3>
			<article className='flex flex-wrap justify-center items-center'>
				<div className="flex items-center justify-center bg-gray-100 bg-opacity-60 my-2
				rounded-xl shadow-md overflow-hidden px-6 mx-4 min-w-80 min-h-80 max-w-80 max-h-80">
					<a href="https://vercel.com" target="_blank" rel="noreferrer">
						<img src="https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png"
							alt="vercel" width="80" height="80" />
					</a>
				</div>
				<div className="flex items-center justify-center bg-gray-100 bg-opacity-60 my-2
				rounded-xl shadow-md overflow-hidden px-6 mx-4 min-w-80 min-h-80 max-w-80 max-h-80">
					<a href="https://www.netlify.com" target="_blank" rel="noreferrer">
						<img src="https://ayushmanbh.netlify.app/static/media/netlify.c779369f.svg"
							alt="netlify" width="80" height="80" />
					</a>
				</div>
			</article>
		</section>
	)
}

export default LandAndTools
