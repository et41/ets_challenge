import {useState} from "react";

export default function Category() {
	const [category, setCategory] = useState(["Concerts", "Sports", "Theater", "Cinema"])


	return (
		<div>		
			{category.map(e => <h3>{e}</h3>)}
		</div>
	)
}
