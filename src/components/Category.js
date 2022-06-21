import { useNavigate } from "react-router-dom";
import "./styles/category.css";

let categories = ["konser", "spor", "tiyatro", "komedi"]
export default function Category({value}) {
	const navigate = useNavigate();

	let clickHandler = (data_item) => {
		console.log("eveeeeent", data_item)
		navigate(`/${data_item}`, {replace: true})
	}

	return (
		<div className="category--main">		
			{categories.map(data_item=> 
			<div onClick={() => clickHandler(data_item)}>
					<h2>{data_item}</h2>
			</div>
			)}
		</div>
	)
}
