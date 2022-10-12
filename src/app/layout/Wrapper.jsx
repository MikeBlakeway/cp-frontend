import React from 'react'

const Wrapper = ({children}) => {
	return (
		<div className='px-20 pt-5 pb-24 min-h-screen w-100 mx-auto bg-slate-50'>
			{children}
		</div>
	)
}

export default Wrapper
