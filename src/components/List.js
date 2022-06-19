import data from "./../test_data.json";

export default function List({input}) {
	const filteredData = data.filter((item) => {
		console.log(item)
		if(input === "") {
			return item;
		}
		else {
			console.log(item.eventName.toLowerCase().includes(input))
			return item.eventName.toLowerCase().includes(input);
		}
	})

	return (
		<ul>
			{
				filteredData.map(e => (
					<li id={e.id}>{e.eventName}</li>
				))
			}
		</ul>
	)
}
