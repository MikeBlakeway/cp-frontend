import {useCallback, useState} from 'react'

// export const useFetch = (url, options) => {
// 	const [data, setData] = useState({})
// 	const [error, setError] = useState('')
// 	const [loading, setLoading] = useState(false)

// 	const fetchData = async (url, options) => {
// 		setLoading(true)
// 		try {
// 			const res = await fetch(url, options)
// 			const json = await res.json()
// 			setData(json)
// 			setLoading(false)
// 		} catch (error) {
// 			setError(error)
// 		}
// 	}
// 	return {data, error, loading, fetchData}
// }

export const useFetch = (url, options) => {
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(null)
	const [error, setError] = useState(null)

	const fetchData = useCallback(async () => {
		setLoading('loading...')
		setData(null)
		setError(null)
		try {
			const res = await fetch(url, options)
			const json = await res.json()
			setData(json)
			setLoading(false)
		} catch (error) {
			setLoading(false)
			setError(error)
		}
	}, [url, options])

	return {fetchData, data, loading, error}
}
