import React, { useEffect, useState } from 'react';
export default function FetchLogic(url) {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch(url)
			.then((res) => {
				if (res.status >= 200 && res.status < 300) {
					return res;
				} else {
					let error = new Error(res.statusText);
					error.response = res;
					throw error;
				}
			})
			.then((res) => res.json())
			.then((res) => setData(res))
			.catch((err) => alert(err));
	}, [url]);

	return data.data;
}
