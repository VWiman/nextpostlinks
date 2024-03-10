import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Page() {
	const [data, setData] = useState([]);

    const router = useRouter();
    
	useEffect(() => {
		async function fetchData() {
			const url = `https://jsonplaceholder.typicode.com/posts/?userId=1&id=${router.query.id}`;
			const request = await fetch(url);
			const result = await request.json();
			setData(...result);
		}
		fetchData();
    }, []);
    
	useEffect(() => {
        console.log(data);
        console.log(data.title);
    }, [data]);
    
    return (
			<div>
				<p>Title: {data.title}</p>
				<p>Body: {data.body}</p>
			</div>
		);
}
