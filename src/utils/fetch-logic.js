import React, { useEffect, useState } from 'react';
import { checkResponce } from './checkResponse';
export default function useFetch(url) {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch(url)
			.then(checkResponce)
			.then((res) => setData(res))
			.catch((err) => alert(err));
	}, [url]);

	return data.data;
}
