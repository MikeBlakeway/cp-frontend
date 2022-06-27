import React, {useEffect, useState} from 'react'
import {useFetch} from '../../services'

import {Headers, Body} from './tables'
import {ContentPagination} from '../shared/ContentPagination'
import Placeholders from '../shared/Placeholders'

export const Members = () => {
	const [skip, setSkip] = useState(200)

	const {fetchData, data} = useFetch(`/api/v1/commons/current?skip=${skip}`, {})

	useEffect(() => {
		const {data} = fetchData()
		return data
		// eslint-disable-next-line
	}, [skip])

	const headers = ['Member', 'Contact', 'Electorate']

	return (
		<>
			{data ? (
				<ContentPagination count={data.count} skip={skip} setSkip={setSkip} />
			) : (
				''
			)}
			<div className='flex flex-col'>
				<div className='overflow-x-auto'>
					<div className='inline-block min-w-full align-middle'>
						<div className='overflow-hidden shadow'>
							<div className='relative overflow-x-auto shadow-md'>
								{data ? (
									<table className='w-full text-sm text-left text-gray-500'>
										<Headers headers={headers} />
										<Body members={data.members} />
									</table>
								) : (
									<Placeholders.Row />
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
			{data ? (
				<ContentPagination count={data.count} skip={skip} setSkip={setSkip} />
			) : (
				''
			)}
		</>
	)
}

export default Members
