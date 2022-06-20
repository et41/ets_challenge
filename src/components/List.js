import data from "./../eventData.json";

export default function List({input}) {

	const categories_eng = ["concert", "sports", "theater"]
	const filteredData = data.filter((item) => {
		if(input === "") {
			return item;
		}
		else {
			return item.title.toLowerCase().includes(input.toLowerCase());
		}
	})
	const filteredDataByCategory = (category) => {
		return filteredData.filter((el) => ( el.category === category))
	}

	return (
		<>
		{categories_eng.map(category => (
			<ul>{filteredDataByCategory(category).length > 0 ? category : ""}
				<>
				  {filteredDataByCategory(category).map(e => 
					<li key={e.id}>
						{e.title}
					</li>)}
				</>
			</ul>
			))}
		</>
	)
}
