import React from 'react'
import {NavList, NavFooter} from './components'

const SideBar = () => {
	return (
		<aside
			id='sidebar'
			className='fixed hidden z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-52 transition-width duration-75'
			aria-label='Sidebar'
		>
			<div className='relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0'>
				<div className='flex-1 flex flex-col pt-5 pb-4 overflow-y-auto'>
					<div className='flex-1 px-3 bg-white divide-y space-y-1'>
						<NavList />
						<NavFooter />
					</div>
				</div>
			</div>
		</aside>
	)
}

export default SideBar
