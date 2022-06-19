import data from "./../test_data.json";

export default function List({input}) {
	const filteredData = data.filter((item) => {
		if(input === "") {
			return item;
		}
		else {
			return item.eventName.toLowerCase().includes(input.toLowerCase());
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
