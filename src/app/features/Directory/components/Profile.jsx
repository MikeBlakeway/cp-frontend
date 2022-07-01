import React from 'react'

export const Profile = ({name, party, partyLogo, image, since}) => {
	return (
		<td className='p-4 text-lg font-medium text-sky-800 whitespace-nowrap'>
			<div className='flex items-center font-sans'>
				<img className='h-20 w-20 rounded-full shadow-lg' src={image} alt={name} />

				<div className='ml-5'>
					<div className='text-xl font-medium text-slate-600'>{name}</div>
					<div className='flex items-center my-2'>
						<img
							className='w-6 h-6 rounded-full shadow-md'
							src={partyLogo}
							alt={`${party.name}`}
						/>
						<div className='text-sm ml-1 font-normal text-slate-500'>
							{party.name}
						</div>
					</div>

					<div className='flex text-sm font-light text-slate-500'>
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

// 	<div className='text-sm ml-1 font-normal text-slate-400'>Since {since}</div>
// </div>
// </div>
