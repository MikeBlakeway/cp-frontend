import React from 'react'

import Column from './Column'

const Columns = () => {
	return (
		<div className='flex flex-wrap'>
			<Column
				title='Honourable Members'
				text='Take a closer look at the members of our elected and unelected Houses'
				linkText='Learn More'
			/>
			<Column
				title='Government Ministers'
				text='Find out who is responsible for what, and how well their departments are performing?'
				linkText='Learn More'
			/>
			<Column
				title='Interests and Expenses'
				text='Pour over the declared expenses and Registered Interests of those in power'
				linkText='Learn More'
			/>
			<Column
				title='Votes and Debates'
				text='Learn what your representatives are saying and how they are voting on your behalf'
				linkText='Learn More'
			/>
		</div>
	)
}

export default Columns
