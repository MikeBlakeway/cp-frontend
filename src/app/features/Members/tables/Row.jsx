import React from 'react'
import constants from '../../../constants'
import {Electorate, Profile} from '../components'
import {Contact} from '../components/Contact'

export const Row = ({member}) => {
	const {
		id,
		latestHouseMembership: {membershipStartDate},
		latestParty,
		nameDisplayAs,
		thumbnailUrl,
		latestElectionResults,
		contact,
	} = member

	const {parties} = constants
	const partyLogo = parties[latestParty.abbreviation].logo
	const contactDetails =
		contact.length > 0
			? Object.assign({}, ...contact.map(object => ({[object.type]: {...object}})))
			: ''
	const startDate = new Date(membershipStartDate).toLocaleDateString('en-gb', {
		day: 'numeric',
		year: 'numeric',
		month: 'long',
	})

	return (
		<tr key={id} className='hover:bg-gray-100'>
			<Profile
				name={nameDisplayAs}
				partyLogo={partyLogo}
				partyName={latestParty.name}
				image={thumbnailUrl}
				since={startDate}
			/>
			<Contact contact={contactDetails} />
			<Electorate
				election={latestElectionResults}
				partyLogo={partyLogo}
				partyName={latestParty.name}
			/>
		</tr>
	)
}
