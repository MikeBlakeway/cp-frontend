import React from 'react'

export const Profile = ({name, partyColour, partyName, image}) => {
	return (
		<td className='flex items-center p-4 mr-12 space-x-6 whitespace-nowrap lg:mr-0'>
			<img className='w-10 h-10 rounded-full' src={image} alt={`${name} avatar`} />
			<div className='text-sm font-normal text-gray-500'>
				<div className='text-base font-semibold text-gray-900'>{name}</div>
				<div className='flex items-center'>
					<div className={`h-2.5 w-2.5 rounded-full ${partyColour} mr-2`}></div>
					<div className='text-sm font-normal text-gray-500'>{partyName}</div>
				</div>
			</div>
		</td>
	)
}
