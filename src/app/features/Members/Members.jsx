import React from 'react'
import constants from '../../constants'
import {useFetch} from '../../services'

import {MembersHeaders} from './components/MembersHeaders'
import {MembersBody} from './components/MembersBody'

export const Members = () => {
	// fetch data
	const {data: members} = useFetch(
		'https://members-api.parliament.uk/api/Members/Search?PartyId=4&House=1&IsCurrentMember=true',
		{}
	)
	// constants
	const {parties} = constants
	const headers = ['Name', 'Constituency', 'Member Since', 'Majority']

	return (
		<table className='table-fixed min-w-full divide-y divide-gray-200'>
			<MembersHeaders headers={headers} />
			<MembersBody members={members} parties={parties} />
		</table>
	)
}
