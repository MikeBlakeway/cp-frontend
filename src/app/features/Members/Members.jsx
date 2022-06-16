import React from 'react'
import {useFetch} from '../../services'

import {Headers, Body} from './tables'
import Placeholders from '../shared/Placeholders'

export const Members = () => {
	// fetch data on render
	const {data: members} = useFetch('/v1/members', {})
	// constants
	const headers = ['Member', 'Electorate', '']

	return (
		<>
			{members ? (
				<table className='min-w-full divide-y divide-gray-200 table-fixed'>
					<Headers headers={headers} />
					<Body members={members} />
				</table>
			) : (
				<Placeholders.Row />
			)}
		</>
	)
}

export default Members
