export default function FilteredListByState({value}) {
	console.log("value in FilteredList", value)
	return (
		<ul>{
			value.map(e => <li key={e.id}>{e.title}</li>)
			}
		</ul>
	)
}
