import React from 'react'
import {Brand, Hamburger, Searchbar} from './components'

const Navbar = () => {
	return (
		<nav className='bg-white border-b border-gray-200 fixed z-30 w-full'>
			<div className='px-3 py-3 lg:px-5 lg:pl-3'>
				<div className='flex items-center justify-between'>
					<div className='flex items-center justify-start'>
						<Hamburger />
						<Brand />
						<Searchbar />
					</div>

					<div className='flex items-center'></div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
