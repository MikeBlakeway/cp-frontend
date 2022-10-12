import React from 'react'
import Image from '../../assets/images/parliament.jpeg'
import {Electorate} from '../../features/Directory/components'

const Profile = () => {
	return (
		<div className='w-full p-4 bg-white border border-slate-200 shadow text-slate-600'>
			<div className='relative -mb-20'>
				<img
					src={Image}
					alt='Background Picture'
					className='w-full max-h-48 object-cover object-bottom rounded'
				/>
				<div className='flex px-12 w-full'>
					<img
						src='https://members-api.parliament.uk/api/Members/4057/Thumbnail'
						alt='Member'
						className='h-40 w-40 relative -top-20 rounded-full ring-white ring-8'
					/>
					<div className='flex-column'>
						<h1 className='px-6 pt-2 text-3xl font-md text-sky-800'>Name Here</h1>
						<p className='px-6 text-xs font-md text-cyan-600'>Constituency Name</p>
					</div>
				</div>
			</div>
			<div className='flex flex-column'>
				<Electorate />
			</div>
		</div>
	)
}

export default Profile
