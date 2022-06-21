export default function FilteredListByState({value}) {
	return (
		<ul>{
			value.map(e => <li key={e.id}>{e.title}</li>)
			}
		</ul>
	)
}
