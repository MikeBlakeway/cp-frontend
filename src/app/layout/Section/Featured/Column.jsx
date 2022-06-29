import React from 'react'

const Column = ({title, text, linkText}) => {
	return (
		<div className='xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-slate-200 border-opacity-60'>
			<h2 className='text-lg sm:text-xl font-medium title-font mb-2'>{title}</h2>
			<p className='leading-relaxed text-base mb-4'>{text}</p>
			<a href='/' className='text-cyan-500 inline-flex items-center'>
				{linkText}
			</a>
		</div>
	)
}

export default Column
