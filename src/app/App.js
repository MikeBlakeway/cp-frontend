import React from 'react'
import {useRoutes} from 'react-router-dom'
import {routes} from './routes'
import {Footer, Header} from './layout'

function App() {
	const element = useRoutes(routes)

	return (
		<>
			<Header />
			{element}
			<Footer />
		</>
	)
}

export default App
