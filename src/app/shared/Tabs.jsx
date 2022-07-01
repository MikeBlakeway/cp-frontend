import React from 'react'
import Cards from './Cards'

const Tabs = ({tabs, children}) => {
	const activeClass =
		'inline-block p-2 capitalize rounded-t-lg border-b-2 border-cyan-600 text-cyan-600'

	const inactiveClass =
		'inline-block p-2 capitalize rounded-t-lg hover:border-b-2 hover:border-sky-400 hover:text-sky-500'

	return (
		<Cards.Simple>
			<div className='text-sm font-medium text-center text-sky-800 mb-3'>
				<ul className='flex flex-wrap'>
					{tabs.map((tab, i) => (
						<li key={i} className='mr-2'>
							<a
								href='/'
								className={tab === 'directory' ? activeClass : inactiveClass}
								aria-current='page'
							>
								{tab}
							</a>
						</li>
					))}
				</ul>
			</div>
			{children}
		</Cards.Simple>
	)
}

export default Tabs
