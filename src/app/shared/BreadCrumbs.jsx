import React from 'react'
import Chevron from '../assets/svg/Chevron'

export const BreadCrumbs = () => {
	return (
		<nav className='flex p-5' aria-label='Breadcrumb'>
			<ol className='inline-flex items-center space-x-1 md:space-x-2'>
				<li>
					<div className='flex items-center text-sky-800'>
						<Chevron.Right />
						<a
							href='/commons'
							className='text-sky-800 hover:text-cyan-600 ml-1 md:ml-2 text-sm font-medium'
						>
							Commons
						</a>
					</div>
				</li>
			</ol>
		</nav>
	)
}
