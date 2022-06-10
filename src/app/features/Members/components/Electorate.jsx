import React from 'react'
import {useFetch} from '../../../services'

export const Electorate = ({mp, constituency}) => {
	const {data} = useFetch(
		`https://members-api.parliament.uk/api/Members/${mp}/LatestElectionResult`
	)

	const majorityString = data?.value.majority.toLocaleString('en-GB')
	const calcVoteShare = candidates => {
		const candidateObject = candidates.map(candidate => {
			const {name, voteShare, votes, resultChange} = candidate
			const object = {
				[name]: voteShare,
			}
			return object
		})
		console.log('name', candidateObject)

		return candidateObject
	}

	const voteShare = data && calcVoteShare(data.value.candidates)
	return (
		<td className='p-4 text-base font-medium text-gray-600 whitespace-nowrap'>
			<div className='text-sm font-normal text-gray-500'>
				<div className='text-base font-semibold text-gray-600'>{constituency}</div>
				<div class='flex justify-between mb-1'>
					<span class='text-sm font-light text-blue-400'>Majority</span>
					<span class='text-sm font-medium text-blue-400'>{majorityString}</span>
				</div>
				<div class='flex justify-between mb-1'>
					<span class='text-sm font-light text-blue-400'>Vote Share</span>
					<span class='text-sm font-medium text-blue-400'>{`${voteShare}%`}</span>
				</div>
				<div class='w-full bg-gray-100 rounded-full h-2'>
					<div
						class='bg-blue-400 h-2 rounded-full'
						style={{width: `${voteShare}%`}}
					></div>
				</div>

				{/* <Progress
						progress={voteShare}
						label={`Vote Share ${parseFloat(voteShare).toFixed(2)}%`}
						labelPosition='outside'
						labelProgress={false}
					/> */}
			</div>
		</td>
	)
}
