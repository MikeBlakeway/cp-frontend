import React from 'react'
import {useFetch} from '../../../services'

export const Electorate = ({mp, constituency, name}) => {
	const {data} = useFetch(
		`https://members-api.parliament.uk/api/Members/${mp}/LatestElectionResult`
	)

	const majorityString = data?.value.majority.toLocaleString('en-GB')
	const voteShareArray = data?.value.candidates.map(candidate => {
		return candidate.voteShare
	})
	const voteShare = Math.max.apply(null, voteShareArray) * 100
	const voteSharePercent = parseFloat(voteShare).toFixed(0)

	return (
		<td className='p-4 text-lg font-medium text-gray-600 whitespace-nowrap'>
			<div className=''>{constituency}</div>
			<div className='flex mt-2 ml-3 justify-between mb-1'>
				<span className='text-sm font-medium text-gray-600'>Vote Share</span>
				<span
					className={
						voteSharePercent > 50
							? 'text-sm font-medium text-green-500'
							: voteSharePercent < 40
							? 'text-sm font-medium text-red-400'
							: 'text-sm font-medium text-orange-400'
					}
				>{`${voteSharePercent}%`}</span>
			</div>
			<div className='w-full ml-3 bg-gray-100 mb-3 rounded-full h-2'>
				<div
					className={
						voteSharePercent > 50
							? 'bg-green-500 h-2 rounded-full'
							: voteSharePercent < 40
							? 'bg-red-400 h-2 rounded-full'
							: 'bg-orange-400 h-2 rounded-full'
					}
					style={{width: `${voteSharePercent}%`}}
				></div>
			</div>
			<div className='flex ml-3 justify-between mb-1'>
				<span className='text-sm mr-1 font-medium text-gray-600'>Majority</span>
				<span className='text-sm font-medium text-blue-400'>{majorityString}</span>
			</div>
		</td>
	)
}
