import React from 'react'
import {Outlet} from 'react-router-dom'
import {BreadCrumbs, PageTitle, ContentSearch} from './components'
import Navbar from '../Navbar/Navbar'
import SideBar from '../SideBar/SideBar'

const MainContent = () => {
	return (
		<>
			<Navbar />
			<div className='flex overflow-hidden bg-white pt-16'>
				<SideBar />
				<main
					id='main-content'
					className='h-full w-full bg-gray-50 relative overflow-y-auto ml-52'
				>
					<div className='p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5'>
						<div className='mb-1 w-full'>
							<div className='mb-4'>
								<BreadCrumbs />
								<PageTitle pageTitle='All Current Members' />
							</div>
							<div className='sm:flex'>
								<ContentSearch />
							</div>
						</div>
					</div>
					<Outlet />
				</main>
			</div>
		</>
	)
}

export default MainContent
