import React from 'react'
import {useFetch} from '../../services'

import {Headers, Body} from './tables'
import Placeholders from '../shared/Placeholders'

export const Members = () => {
	// fetch data on render
	const {data: members} = useFetch('/v1/members', {})
	// constants
	const headers = ['Member', 'Electorate', 'Contact']

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
