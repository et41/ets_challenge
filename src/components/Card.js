import "./styles/card.css";

export default function Card({item}) {
	console.log("itemmmmmmmm", item)
	const defaultImage = "https://c.stocksy.com/a/oxDF00/z9/3628600.jpg"

	let checkImage = (img) => {
		if(img) return true;
	}
	return (
			<li className="card--single" href="/" key={item.id}>

				<img className="card--single-image" src={checkImage(item.images.huge) ? item.images.huge : defaultImage} />
				{item.title}

				<p>{item.venue}</p>
			</li>
	)
}
