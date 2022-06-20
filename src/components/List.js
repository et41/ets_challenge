import data from "./../eventData.json";

export default function List({input}) {

	const categories_tr  = ["konser", "spor", "tiyatro", "komedi", "sanatçı"]
	const performersName = data.map(item => {
		if(item["performers_name"].length > 0) {
			return {"id":item.id, "title": item["performers_name"], "category": "sanatçı"}
		}
	})

	const filteredData = data.filter((item) => {
		if(input === "") {
			return item;
		}
		else {
			return item.title.toLowerCase().includes(input.toLowerCase()) &&  item.performers_name.toLowerCase().includes(input.toLowerCase()) ;
		}
	})

	const filteredDataPerformers = performersName.filter((item) => {
		if(input === "") {
			return item;
		}
		else {
			return item.title.toLowerCase().includes(input.toLowerCase())
		}
	})


	const filteredDataByCategory = (category) => {
		if(category !== "sanatçı") {
			return filteredData.filter((el) => ( el.category === category))} else {
			return filteredDataPerformers
			}
	}
	console.log("sanatçı", filteredDataByCategory("sanatçı"))

	return (
		<>
		{categories_tr.map(category => (
			<ul className="ul--searchlist">{filteredDataByCategory(category).length > 0 ? <p>{category}</p> : ""}
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
