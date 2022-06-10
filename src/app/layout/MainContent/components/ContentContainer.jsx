import React from 'react'
import Tables from '../../Tables'
import {ContentPagination} from '.'

export const ContentContainer = () => {
	return (
		<>
			<div className='flex flex-col'>
				<div className='overflow-x-auto'>
					<div className='align-middle inline-block min-w-full'>
						<div className='shadow overflow-hidden'>
							{/* use routing to render component */}
							<Tables.Members />
						</div>
					</div>
				</div>
			</div>
			<ContentPagination />
		</>
	)
}
