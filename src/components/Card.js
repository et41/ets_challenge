import "./styles/card.css";
import {dateConverter} from "./../dateConverter.js";

export default function Card({item}) {
	const defaultImage = "https://c.stocksy.com/a/oxDF00/z9/3628600.jpg"

	let checkImage = (img) => {
		if(img) return true;
	}
	return (
			<li className="card--single" href="/" key={item.id}>

				<img className="card--single-image" src={checkImage(item.images.huge) ? item.images.huge : defaultImage} />
				{item.title}
				<p>{dateConverter(item.date_time_local)[0]}</p>
				<p>{dateConverter(item.date_time_local)[1]}</p>
				<p>{item.venue}</p>
				<p>"cost"</p>
			</li>
	)
}
