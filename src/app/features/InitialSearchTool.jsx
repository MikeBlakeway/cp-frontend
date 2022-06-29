import React from 'react'
import Button from '../shared/Button'

const InitialSearchTool = () => {
	return (
		<div className='flex w-full pb-2 md:justify-start justify-center items-end'>
			<div className='relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4'>
				<label htmlFor='hero-field' className='leading-7 text-sm text-slate-600'>
					Enter your postcode
				</label>
				<input
					type='text'
					id='hero-field'
					name='hero-field'
					className='w-full bg-sky-100 rounded border bg-opacity-80 border-slate-300 focus:ring-2 focus:ring-cyan-600 focus:bg-transparent focus:border-cyan-600 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
				/>
			</div>
			<Button.Primary text='Search' />
		</div>
	)
}

export default InitialSearchTool
