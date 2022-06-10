import React, {useEffect} from 'react'

export const useFetch = (url, options) => {
	const [data, setData] = React.useState(null)
	const [error, setError] = React.useState(null)
	const [loading, setLoading] = React.useState(false)

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true)
			try {
				const res = await fetch(url, options)
				const json = await res.json()
				setData(json)
				setLoading(false)
			} catch (error) {
				setError(error)
			}
		}
		fetchData()
	}, [url])
	return {data, error, loading}
}
