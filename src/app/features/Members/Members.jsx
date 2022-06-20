import React from 'react'
import {useFetch} from '../../services'

import {Headers, Body} from './tables'
import Placeholders from '../shared/Placeholders'

export const Members = () => {
	const {data: members} = useFetch('/api/v1/active-members', {})

	const headers = ['Member', 'Contact', 'Electorate']

	return (
		<div className='flex flex-col'>
			<div className='overflow-x-auto'>
				<div className='inline-block min-w-full align-middle'>
					<div className='overflow-hidden shadow'>
						<div className='relative overflow-x-auto shadow-md'>
							{members ? (
								<table className='w-full text-sm text-left text-gray-500'>
									<Headers headers={headers} />
									<Body members={members} />
								</table>
							) : (
								<Placeholders.Row />
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Members
