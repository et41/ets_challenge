import data from "./../eventData.json";

export default function List({input}) {
	console.log("data", data)
	const filteredData = data.filter((item) => {
		console.log("item", item);
		if(input === "") {
			return item;
		}
		else {
			return item.title.toLowerCase().includes(input.toLowerCase());
		}
	})

	return (
		<ul>
			{
				filteredData.map(e => (
					<li id={e.id}>{e.title}</li>
				))
			}
		</ul>
	)
}
