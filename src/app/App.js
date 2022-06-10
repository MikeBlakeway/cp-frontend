import React from 'react'
import Navbar from './layout/Navbar/Navbar'
import SideBar from './layout/SideBar/SideBar'
import MainContent from './layout/MainContent/MainContent'

function App() {
	return (
		<>
			<Navbar />
			<div className='flex overflow-hidden bg-white pt-16'>
				<SideBar />
				<MainContent />
			</div>
		</>
	)
}

export default App
