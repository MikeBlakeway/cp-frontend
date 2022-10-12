import React from 'react'

import InitialSearchTool from '../../features/InitialSearchTool'
import {Hero} from '../../layout'
import Section from '../../layout/Sections'
import Voting from '../../assets/images/vector/voting.jpg'

export const LandingPage = () => {
	return (
		<div className='lg:px-24 md:px-20 mx-auto'>
			<Hero
				title='Power to your vote'
				prose='Discover the hidden data behind our politicians, and compare their
							achievements against the results that matter most to you.'
				image={Voting}
			>
				<InitialSearchTool />
			</Hero>
			<section className='text-slate-600 body-font'>
				<Section.Content />
			</section>
		</div>
	)
}
