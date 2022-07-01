import React, {useEffect, useState} from 'react'
import {useFetch} from '../../services'

import {Headers, Body} from './tables'
import {ContentPagination} from '../../shared/ContentPagination'
import Placeholders from '../../shared/Placeholders'
import Cards from '../../shared/Cards'

export const Directory = () => {
	const [skip, setSkip] = useState(0)

	const {fetchData, data} = useFetch(`/api/v1/commons/current?skip=${skip}`, {})

	useEffect(() => {
		const {data} = fetchData()
		return data
		// eslint-disable-next-line
	}, [skip])

	const headers = ['Member', 'Contact', 'Electorate']

	return (
		<>
			<div className='p-4 bg-white border border-slate-200 shadow'>
				<div className='flex flex-col border border-slate-200 overflow-x-hidden rounded max-h-[38rem]'>
					{data ? (
						<table>
							<Headers headers={headers} />
							<Body members={data.members} />
						</table>
					) : (
						<Placeholders.Row />
					)}
				</div>

				{data ? (
					<ContentPagination count={data.count} skip={skip} setSkip={setSkip} />
				) : (
					''
				)}
			</div>
		</>
	)
}

export default Directory
