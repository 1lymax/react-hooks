import {useEffect, useState} from "react";

export const useRequest = (request) => {
	const [data, setData] = useState('')
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState('')


	useEffect(() => {
		setLoading(true)
		request()
			.then(resp => setData(resp.data))
			.catch(error => setError(error))
			.finally(() => setLoading(false)
			)
	}, []);

	return [data, loading, error]
};