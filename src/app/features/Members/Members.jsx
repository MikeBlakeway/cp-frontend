import React from 'react'
import {useFetch} from '../../services'

import {Headers, Body} from './tables'
import Placeholders from '../shared/Placeholders'

export const Members = () => {
	const {data: members} = useFetch('/api/v1/active-members', {})

	members && console.log(members)
	const headers = ['Member', 'Contact', 'Electorate']

	return (
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
	)
}

export default Members
