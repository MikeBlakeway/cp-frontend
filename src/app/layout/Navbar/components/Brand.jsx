import React from 'react'

export const Brand = () => {
	return (
		<a href='/' className='text-xl font-bold flex items-center lg:ml-2.5'>
			<img
				src='https://demo.themesberg.com/windster/images/logo.svg'
				className='h-6 mr-2'
				alt='Windster Logo'
			/>
			<span className='self-center whitespace-nowrap'>CommonPlace</span>
		</a>
	)
}
