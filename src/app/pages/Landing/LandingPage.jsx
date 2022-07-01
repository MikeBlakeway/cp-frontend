import React from 'react'

import InitialSearchTool from '../../features/InitialSearchTool'
import {Hero, Header, Footer} from '../../layout'
import Section from '../../layout/Sections'
import Voting from '../../assets/images/vector/voting.jpg'

export const LandingPage = () => {
	return (
		<div>
			<Header />
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
			<Footer />
		</div>
	)
}
