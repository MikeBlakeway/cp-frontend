import React from 'react'
import constants from '../../../constants'
import {Electorate, Profile} from '../components'
import {Contact} from '../components/Contact'

export const Row = ({member}) => {
	// destructuring values from member object
	const {
		id,
		latestHouseMembership: {membershipStartDate},
		latestParty,
		nameDisplayAs,
		thumbnailUrl,
		election,
		contact,
	} = member

	const {parties} = constants
	const partyLogo = parties[latestParty.abbreviation].logo
	const contactDetails = Object.assign(
		{},
		...contact.value.map(object => ({[object.type]: {...object}}))
	)
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
			<Electorate election={election} parties={parties} />
			<Contact contact={contactDetails} />
		</tr>
	)
}
