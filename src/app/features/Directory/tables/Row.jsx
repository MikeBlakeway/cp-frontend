import React from 'react'
import constants from '../../../constants'
import {Profile} from '../components'
// import {Contact} from '../components/Contact'

export const Row = ({member}) => {
	const {
		id,
		latestHouseMembership: {membershipStartDate},
		latestParty,
		nameDisplayAs,
		thumbnailUrl,
	} = member

	const {parties} = constants
	const partyLogo = parties[latestParty.abbreviation].logo
	// const contactDetails =
	// 	contact.length > 0
	// 		? Object.assign({}, ...contact.map(object => ({[object.type]: {...object}})))
	// 		: ''
	const startDate = new Date(membershipStartDate).toLocaleDateString('en-gb', {
		day: 'numeric',
		year: 'numeric',
		month: 'long',
	})

	return (
		<tr key={id} className='hover:bg-slate-50'>
			<Profile
				name={nameDisplayAs}
				partyLogo={partyLogo}
				party={latestParty}
				image={thumbnailUrl}
				since={startDate}
			/>
			{/* <Contact contact={contactDetails} /> */}
		</tr>
	)
}
