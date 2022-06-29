import React from 'react'

const Centred = ({subTitle, title, text}) => {
	return (
		<div className='flex flex-col text-center w-full mb-20'>
			<h2 className='text-xs text-sky-600 tracking-widest font-medium title-font mb-1 uppercase'>
				{subTitle}
			</h2>
			<h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 capitalize'>
				{title}
			</h1>
			<p className='lg:w-2/3 mx-auto leading-relaxed text-base prose'>{text}</p>
		</div>
	)
}

export default Centred
