import React from 'react'
import {MemberMajority} from './MemberMajority'

export const MembersBody = ({members, parties}) => {
	return (
		<tbody className='bg-white divide-y divide-gray-200'>
			{members?.items.map(member => {
				const {value} = member

				const {
					id,
					latestHouseMembership,
					latestParty,
					nameDisplayAs,
					thumbnailUrl,
				} = value

				const startDate = new Date(
					latestHouseMembership.membershipStartDate
				).toLocaleDateString('en-gb', {
					day: 'numeric',
					year: 'numeric',
					month: 'long',
				})

				return (
					<tr key={id} className='hover:bg-gray-100'>
						<td className='p-4 flex items-center whitespace-nowrap space-x-6 mr-12 lg:mr-0'>
							<img
								className='h-10 w-10 rounded-full'
								src={thumbnailUrl}
								alt={`${nameDisplayAs} avatar`}
							/>
							<div className='text-sm font-normal text-gray-500'>
								<div className='text-base font-semibold text-gray-900'>
									{nameDisplayAs}
								</div>
								<div className='flex items-center'>
									<div
										className={`h-2.5 w-2.5 rounded-full ${
											parties[latestParty.name].colour
										} mr-2`}
									></div>
									<div className='text-sm font-normal text-gray-500'>
										{latestParty.name}
									</div>
								</div>
							</div>
						</td>
						<td className='p-4 whitespace-nowrap text-base font-medium text-gray-900'>
							{latestHouseMembership.membershipFrom}
						</td>
						<td className='p-4 whitespace-nowrap text-base font-medium text-gray-900'>
							{startDate}
						</td>
						<MemberMajority mp={id} />
					</tr>
				)
			})}
		</tbody>
	)
}
