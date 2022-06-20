import React from 'react'

import MainContent from '../layout/MainContent/MainContent'
import Members from '../features/Members/Members'

export const routes = [
	{
		path: '/',
		element: <MainContent />,
		title: 'Welcome to CommonPlace',
		children: [
			{
				path: '/search-mps',
				element: <Members />,
				title: 'Search All MPs',
			},
			{
				path: '/search-lords',
				element: <Members />,
				title: 'Search All Lords',
			},
		],
	},
]

export const getTitles = () => {
	const titles = routes[0].children.reduce((total, current) => {
		const name = Object.values(current)[0]
		return {[name]: current.title, ...total}
	}, {})

	return titles
}
