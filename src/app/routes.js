import React from 'react'

import {Commons, Ricardo, LandingPage} from './pages'

export const routes = [
	{
		path: '/',
		element: <LandingPage />,
	},
	{
		path: '/commons',
		element: <Commons />,
	},
	{
		path: '/ricardo',
		element: <Ricardo />,
		title: 'Search All MPs',
	},
]
