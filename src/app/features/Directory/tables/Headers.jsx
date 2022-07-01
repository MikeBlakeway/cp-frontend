import React from 'react'

export const Headers = ({headers}) => {
	return (
		<thead className='bg-sky-100 sticky top-0'>
			<tr>
				{headers.map((header, i) => (
					<th
						scope='col'
						className='p-4 pl-8 text-left text-sm font-lg text-cyan-600 uppercase'
						key={i}
					>
						{header}
					</th>
				))}
			</tr>
		</thead>
	)
}
