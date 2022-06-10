import React from 'react'
import {
	BreadCrumbs,
	PageTitle,
	ContentContainer,
	ContentSearch,
} from './components'

const MainContent = () => {
	return (
		<div
			id='main-content'
			className='h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64'
		>
			<main>
				<div className='p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5'>
					<div className='mb-1 w-full'>
						<div className='mb-4'>
							<BreadCrumbs />
							<PageTitle pageTitle='All MPs' />
						</div>
						<div className='sm:flex'>
							<ContentSearch />
						</div>
					</div>
				</div>
				<ContentContainer />
			</main>
		</div>
	)
}

export default MainContent
