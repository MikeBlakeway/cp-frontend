import React, {useEffect} from 'react'
import {Tooltip} from 'flowbite-react'
import {useFetch} from '../../../services'
import constants from '../../../constants'

const PartyTags = ({house = 1}) => {
	const {fetchData, data} = useFetch(
		`https://members-api.parliament.uk/api/Parties/GetActive/${house}`,
		{}
	)
	const {parties} = constants

	useEffect(() => {
		const {data} = fetchData()
		return data
		// eslint-disable-next-line
	}, [house])

	return (
		<div className='flex items-center py-2 ml-10'>
			<p className=' mr-3 text-light text-sm text-slate-600'>Party:</p>
			<div className='flex -space-x-2'>
				{data?.items &&
					data.items.map((party, i) => {
						const {
							value: {name, abbreviation},
						} = party
						const partyLogo = parties[abbreviation].logo

						return (
							<Tooltip content={name} arrow={false}>
								<img
									key={i}
									className='w-8 h-8 rounded-full shadow border-5 border-slate-100 cursor-pointer hover:drop-shadow-lg hover:-translate-y-2 transition-all ease-in-out'
									src={partyLogo}
									data-tooltip-target='tooltip-hover'
									alt={`${name}`}
								/>
							</Tooltip>
						)
					})}
			</div>
		</div>
	)
}

export default PartyTags
