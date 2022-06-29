import React from 'react'
import Chevron from '../assets/svg/Chevron'

export const ContentPagination = ({count, skip, setSkip}) => {
	const end = skip + 50
	const start = skip + 1

	const handleForward = () => {
		end !== count && setSkip(skip + 50)
		return
	}

	const handleBack = () => {
		skip !== 0 && setSkip(skip - 50)
		return
	}

	const style = {
		disabled:
			'text-blue-300 border border-blue-300 font-light rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2',
		enabled:
			'text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800',
	}

	return (
		<div className='bg-white sticky sm:flex items-center w-full sm:justify-between bottom-0 right-0 border-t border-gray-200 p-4'>
			<div className='flex items-center mb-4 sm:mb-0'>
				<button
					type='button'
					disabled={skip === 0}
					className={skip === 0 ? style.disabled : style.enabled}
					onClick={handleBack}
				>
					<Chevron.Left />
				</button>
				<button
					type='button'
					disabled={end === count}
					className={end === count ? style.disabled : style.enabled}
					onClick={handleForward}
				>
					<Chevron.Right />
				</button>
				<span className='text-sm font-normal text-gray-500'>
					Showing{' '}
					<span className='text-gray-900 font-semibold'>{`${start}-${end}`}</span> of{' '}
					<span className='text-gray-900 font-semibold'>{count}</span>
				</span>
			</div>
		</div>
	)
}
