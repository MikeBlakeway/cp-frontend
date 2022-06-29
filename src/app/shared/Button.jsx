import React from 'react'

const Primary = ({text}) => {
	return (
		<button className='inline-flex text-white bg-sky-800 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-600 rounded text-lg'>
			{text}
		</button>
	)
}

const Button = {
	Primary,
}

export default Button
