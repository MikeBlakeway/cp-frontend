import React from 'react'

export const ContentSearch = () => {
	return (
		<div className='hidden sm:flex items-center sm:divide-x sm:divide-gray-100 mb-3 sm:mb-0'>
			<form className='lg:pr-3' action='/' method='GET'>
				<label htmlFor='users-search' className='sr-only'>
					Search
				</label>
				<div className='mt-1 relative lg:w-64 xl:w-96'>
					<input
						type='text'
						id='users-search'
						className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5'
						placeholder='Search for MPs'
					/>
				</div>
			</form>
		</div>
	)
}
