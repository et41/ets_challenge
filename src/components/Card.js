import "./styles/card.css";
import {dateConverter} from "./../dateConverter.js";
import { Link, useNavigate } from "react-router-dom";

export default function Card({item}) {
	const defaultImage = "https://c.stocksy.com/a/oxDF00/z9/3628600.jpg"
	const price = item.price.sort((a,b) => a - b )
	let checkImage = (img) => {
		if(img) return true;
	}
	return (
		<Link to={`/${item.id}`}>
			<li className="card--single" href="/" key={item.id}>
			
				<img className="card--single-image" src={checkImage(item.images.huge) ? item.images.huge : defaultImage} />
				{item.title}
				<p>{dateConverter(item.date_time_local)[0]}</p>
				<p>{dateConverter(item.date_time_local)[1]}</p>
				<p>{item.venue}</p>
				<p>{price[0]} TL</p>
			</li>
		</Link>
	)
}
