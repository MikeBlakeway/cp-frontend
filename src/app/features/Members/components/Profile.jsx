import React from 'react'

export const Profile = ({name, partyName, partyLogo, image, since}) => {

	return (
		<td className='p-4 text-lg font-medium text-gray-900 whitespace-nowrap'>
			<div className='flex items-center space-x-4'>
				<div className='relative'>
					<img
						className='w-10 h-10 rounded-full'
						src={image}
						alt={`${name} avatar`}
					/>
				</div>

				<div className='space-y-1 font-medium'>
					<div>{name}</div>
					<div className='flex items-center'>
						<img
							className='w-4 h-4 rounded-full'
							src={partyLogo}
							alt={`${partyName}`}
						/>
						<div className='text-sm ml-1 font-normal text-gray-500'>{partyName}</div>
					</div>
					<div className='text-sm ml-1 font-normal text-gray-400'>Since {since}</div>
				</div>
			</div>
		</td>
	)
}
