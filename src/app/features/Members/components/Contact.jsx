import React from 'react'
import {Icons} from '../../shared'

export const Contact = ({contact}) => {
	console.log('contact', contact)

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
		<td className='p-4 font-medium text-gray-600 whitespace-nowrap'>
			<div className='flex flex-row rounded-lg p-4'>
				<div className='flex flex-col px-6'>
					<div className='mt-2 flex flex-row items-center space-x-5'>
						<div className='flex h-20 w-40 flex-col items-start justify-center rounded-md transition-colors duration-100 ease-in-out'>
							<a
								href={`mailto:${Parliamentary.email}`}
								className='flex flex-row items-center justify-center'
							>
								<Icons.Email />
								<span className='text-gray-400'>{Parliamentary.email}</span>
							</a>

							<div className='mt-2 flex flex-row items-center justify-center'>
								<Icons.Address />
								<span className='text-gray-400'>{address}</span>
							</div>

							<div className='mt-2 flex flex-row items-center justify-between'>
								{phone[0] !== 'f' && (
									<div className='flex mr-3'>
										<Icons.Phone />
										<span className='text-gray-400'>{phone}</span>
									</div>
								)}
								<div className='flex mr-3'>
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
			</div>
		</td>
	)
}
