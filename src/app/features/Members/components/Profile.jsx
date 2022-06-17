import React from 'react'

export const Profile = ({name, partyName, partyLogo, image, since}) => {
	return (
		<td className='p-4 text-lg font-medium text-gray-600 whitespace-nowrap'>
			<div class='flex items-center font-sans'>
				<img class='h-20 w-20 rounded-full' src={image} alt={name} />

				<div class='ml-5'>
					<div className='text-xl font-medium text-gray-600'>{name}</div>
					<div className='flex items-center my-1'>
						<img
							className='w-4 h-4 rounded-full'
							src={partyLogo}
							alt={`${partyName}`}
						/>
						<div className='text-sm ml-1 font-normal text-gray-500'>{partyName}</div>
					</div>

					<div class='flex text-sm font-light text-gray-500'>
						Joined:
						<span className='bg-blue-100 ml-1 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded'>
							{since}
						</span>
					</div>
				</div>
			</div>
		</td>
	)
}
// <div className='flex items-center space-x-4'>
// 	<div className='relative'>
// 		<img
// 			className='w-10 h-10 rounded-full'
// 			src={image}
// 			alt={`${name} avatar`}
// 		/>
// 	</div>

// 	<div className='text-sm ml-1 font-normal text-gray-400'>Since {since}</div>
// </div>
// </div>
