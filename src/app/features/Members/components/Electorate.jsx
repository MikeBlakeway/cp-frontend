import React from 'react'

export const Electorate = ({election, partyLogo, partyName}) => {
	const {candidates, constituencyName, result} = election

	const outcome = result.split(' ')
	const badgeColour = {
		Hold: 'indigo',
		Gain: 'green',
	}

	const voteShareArray = candidates.map(candidate => {
		return candidate.voteShare
	})
	const voteShare = Math.max.apply(null, voteShareArray) * 100
	const voteSharePercent = parseFloat(voteShare).toFixed(0)

	return (
		<td className='p-4 text-lg font-medium text-gray-600 whitespace-nowrap pr-10'>
			<div className=''>{constituencyName}</div>
			<div className='flex mt-2 justify-between mb-1'>
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
			<div className='w-100 bg-gray-100 mb-3 rounded-full h-2'>
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
			<div className='flex justify-between mb-1'>
				<span className='text-sm mr-1 font-medium text-gray-600'>Result</span>
				<div className='flex items-center'>
					<img
						className='w-5 h-5 rounded-full'
						src={partyLogo}
						alt={`${partyName}`}
					/>
					<span
						className={`bg-${badgeColour[outcome[1]]}-100 ml-1 text-${
							badgeColour[outcome[1]]
						}-800 text-xs font-semibold px-2.5 py-0.5 rounded`}
					>
						{result}
					</span>
				</div>
			</div>
		</td>
	)
}
