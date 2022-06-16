import React from 'react'
import {Row} from './Row'

export const Body = ({members}) => {
	return (
		<tbody className='bg-white divide-y divide-gray-200'>
			{members?.map((member, i) => (
				<Row key={i} member={member} />
			))}
		</tbody>
	)
}
