import React from 'react'
import {useFetch} from '../../../services'

export const MemberMajority = ({mp}) => {
	console.log('mp', mp)
	const {data} = useFetch(
		`https://members-api.parliament.uk/api/Members/${mp}/LatestElectionResult`
	)
	return (
		<td className='p-4 whitespace-nowrap text-base font-normal text-gray-900'>
			{data?.value.majority}
		</td>
	)
}
