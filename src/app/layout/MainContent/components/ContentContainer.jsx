import React from 'react'
import Members from '../../../features/Members/Members'
import {ContentPagination} from '.'

export const ContentContainer = () => {
	return (
		<>
			<div className='flex flex-col'>
				<div className='overflow-x-auto'>
					<div className='inline-block min-w-full align-middle'>
						<div className='overflow-hidden shadow'>
							{/* use routing to render component */}
							<Members />
						</div>
					</div>
				</div>
			</div>
			<ContentPagination />
		</>
	)
}
