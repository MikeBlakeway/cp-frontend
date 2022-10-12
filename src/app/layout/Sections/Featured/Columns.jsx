import React from 'react'

import Column from './Column'

const Columns = () => {
	return (
		<div className='flex flex-wrap'>
			<Column
				title='Honourable Members'
				text='Take a closer look at the members of our elected and unelected Houses'
				linkText='Learn More'
				link='/commons'
			/>
			<Column
				title='Government Ministers'
				text='Find out who is responsible for what, and how well their departments are performing?'
				linkText='Learn More'
				link='/minister'
			/>
			<Column
				title='Interests and Expenses'
				text='Pour over the declared expenses and Registered Interests of those in power'
				linkText='Learn More'
				link='/expenses'
			/>
			<Column
				title='Votes and Debates'
				text='Learn what your representatives are saying and how they are voting on your behalf'
				linkText='Learn More'
				link='/votes'
			/>
		</div>
	)
}

export default Columns
