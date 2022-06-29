import React from 'react'
import {Logo} from '../assets/svg/Logo'

export const Brand = () => {
	return (
		<a href='/' className='text-xl font-bold flex items-center lg:ml-2.5'>
			<Logo />
			<span className='self-center whitespace-nowrap ml-2 text-cyan-600'>
				Common
			</span>
			<span className='self-center whitespace-nowrap text-sky-800'>Place</span>
		</a>
	)
}

export default Brand
