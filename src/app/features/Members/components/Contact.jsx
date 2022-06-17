import React from 'react'
import {Icons} from '../../shared'

export const Contact = ({contact}) => {
	const {Constituency, Facebook, Parliamentary, Twitter, Website} = contact

	const address =
		contact.hasOwnProperty('Constituency') &&
		Constituency.postcode !== '' &&
		Constituency.postcode !== null
			? `${Constituency.line1}, ${Constituency.postcode}`
			: `${Parliamentary.line1}, ${Parliamentary.postcode}`
	const phone =
		contact.hasOwnProperty('Constituency') &&
		Constituency.phone !== '' &&
		Constituency.phone !== null
			? `${Constituency.phone}`
			: `${Parliamentary.phone !== null && Parliamentary.phone} `
	const social = {
		hasTwitter: contact.hasOwnProperty('Twitter'),
		hasFacebook: contact.hasOwnProperty('Facebook'),
		hasWebsite: contact.hasOwnProperty('Website'),
	}

	return (
		<td class='p-4 text-gray-600 whitespace-nowrap rounded-lg'>
			<div class='flex flex-col'>
				<div class='mt-2'>
					<div class='flex flex-col items-start justify-center rounded-md transition-colors duration-100 ease-in-out'>
						<a
							href={`mailto:${Parliamentary.email}`}
							className='flex flex-row items-center justify-center'
						>
							<Icons.Email />
							<span>{Parliamentary.email}</span>
						</a>
						<div class='mt-2 flex flex-row items-center justify-center'>
							<Icons.Address />
							<span>{address}</span>
						</div>
						<div class='mt-2 w-full flex flex-row items-center justify-between'>
							{phone[0] !== 'f' ? (
								<div className='flex'>
									<Icons.Phone />
									<span>{phone}</span>
								</div>
							) : (
								<div></div>
							)}

							<div className='flex'>
								{social.hasTwitter && (
									<a href={Twitter.line1}>
										<Icons.Twitter />
									</a>
								)}
								{social.hasFacebook && (
									<a href={Facebook.line1}>
										<Icons.Facebook />
									</a>
								)}
								{social.hasWebsite && (
									<a href={Website.line1}>
										<Icons.Website />
									</a>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</td>
	)
}
