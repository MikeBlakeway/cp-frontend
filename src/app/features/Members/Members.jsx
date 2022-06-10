import React from 'react'
import {useFetch} from '../../services'

import {Headers, Body} from './tables'

export const Members = () => {
	// fetch data
	const {data: members} = useFetch(
		'https://members-api.parliament.uk/api/Members/Search?PartyId=4&House=1&IsCurrentMember=true',
		{}
	)
	// constants
	const headers = ['Name', 'Electorate', 'Constituency', 'Member Since']

	return (
		<table className='min-w-full divide-y divide-gray-200 table-fixed'>
			<Headers headers={headers} />
			<Body members={members} />
		</table>
	)
}

export default Members
