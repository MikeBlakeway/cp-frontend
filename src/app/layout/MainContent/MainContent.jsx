import React from 'react'
import {Outlet, useLocation} from 'react-router-dom'
import {getTitles} from '../../constants/routes'
import {
	BreadCrumbs,
	PageTitle,
	ContentPagination,
	ContentSearch,
} from './components'

const MainContent = () => {
	let {pathname} = useLocation()
	const titles = getTitles()

	return (
		<main
			id='main-content'
			className='h-full w-full bg-gray-50 relative overflow-y-auto ml-52'
		>
			<div className='p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5'>
				<div className='mb-1 w-full'>
					<div className='mb-4'>
						<BreadCrumbs />
						<PageTitle pageTitle={titles[pathname]} />
					</div>
					<div className='sm:flex'>
						<ContentSearch />
					</div>
				</div>
			</div>
			<Outlet />
			<ContentPagination />
		</main>
	)
}

export default MainContent
