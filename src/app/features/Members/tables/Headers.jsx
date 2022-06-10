import React from 'react'

export const Headers = ({headers}) => {
	return (
		<thead className='bg-gray-100'>
			<tr>
				{headers.map((header, i) => (
					<th
						scope='col'
						className='p-4 text-left text-xs font-medium text-gray-500 uppercase'
						key={i}
					>
						{header}
					</th>
				))}
			</tr>
		</thead>
	)
}
