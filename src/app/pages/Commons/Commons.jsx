import React from 'react'

import Wrapper from '../../layout/Wrapper'
import {Tabs, Searchbar} from '../../shared'
import Directory from '../../features/Directory/Directory'
import Profile from '../../features/Profile/Profile'

import Logo from '../../assets/images/commons.png'
import PartyTags from '../../features/Directory/components/PartyTags'

export const Commons = () => {
	const tabs = ['directory', 'chamber', 'committees', 'votes', 'correspondance']
	return (
		<Wrapper>
			<div className='flex justify-between items-center mb-4 py-4'>
				<div className='flex items-center'>
					<img
						src={Logo}
						alt='House of Commons'
						className='w-16 h-16 rounded-full shadow-md mr-4'
					/>
					<h1 className='title-font sm:text-3xl text-xl text-slate-600 capitalize'>
						The House Of Commons
					</h1>
				</div>
				<Searchbar />
			</div>

			<Tabs tabs={tabs}>
				<div className='flex items-center py-2'>
					<Searchbar />
					<PartyTags house='1' />
				</div>
			</Tabs>
			<div className='flex flex-row justify-between w-full'>
				<div className='w-1/3 mr-4'>
					<Directory />
				</div>
				<div className='w-2/3 ml-4'>
					<Profile />
				</div>
			</div>
		</Wrapper>
	)
}
