import React from 'react'
import {useRoutes} from 'react-router-dom'
import {routes} from './constants/routes'
import Navbar from './layout/Navbar/Navbar'
import SideBar from './layout/SideBar/SideBar'

function App() {
	const element = useRoutes(routes)

	return (
		<>
			<Navbar />
			<div className='flex overflow-hidden bg-white pt-16'>
				<SideBar />
				{element}
			</div>
		</>
	)
}

export default App
