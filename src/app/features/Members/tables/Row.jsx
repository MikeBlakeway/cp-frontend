import React from 'react'
import constants from '../../../constants'
import {Electorate, Profile} from '../components'

export const Row = ({member}) => {
	// destructuring values from member object
	const {
		value: {
			id,
			latestHouseMembership: {membershipStartDate, membershipFrom},
			latestParty,
			nameDisplayAs,
			thumbnailUrl,
		},
	} = member

	const {parties} = constants

	const startDate = new Date(membershipStartDate).toLocaleDateString('en-gb', {
		day: 'numeric',
		year: 'numeric',
		month: 'long',
	})

	return (
		<tr key={id} className='hover:bg-gray-100'>
			<Profile
				name={nameDisplayAs}
				partyLogo={parties[latestParty.name].logo}
				partyName={latestParty.name}
				image={thumbnailUrl}
				since={startDate}
			/>
			<Electorate mp={id} constituency={membershipFrom} name={nameDisplayAs} />

			<td className='p-4 text-base font-medium text-gray-900 whitespace-nowrap'>
				{startDate}
			</td>
		</tr>
	)
}
