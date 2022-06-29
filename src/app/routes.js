import React from 'react'

import MainContent from './layout/MainContent/MainContent'
import {LandingPage} from './pages'
import Members from './features/Members/Members'

export const routes = [
	{
		path: '/',
		element: <LandingPage />,
		title: 'Welcome to CommonPlace',
	},
	{
		path: '/commons',
		element: <MainContent />,
		title: 'Welcome to CommonPlace',
		children: [
			{
				path: '/commons/current',
				element: <Members />,
				title: 'Search All MPs',
			},
		],
	},
]
