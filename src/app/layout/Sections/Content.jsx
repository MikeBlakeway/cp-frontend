import React from 'react'
import Container from '../Container'
import Title from './Titles'
import Featured from './Featured'

const Content = () => {
	return (
		<Container>
			<Title.Centred
				title='Democracy: it’s for everyone'
				subTitle='knowledge is power'
				text='A democracy exists whenever those who are free and are not well-off, being in the majority, are in sovereign control of government, an oligarchy when control lies with the rich and better-born, these being few.'
			/>
			<Featured.Columns />
		</Container>
	)
}

export default Content
