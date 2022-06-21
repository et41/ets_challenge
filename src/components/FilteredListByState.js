import Card from "./Card"
export default function FilteredListByState({value}) {
	return (
		<ul className="card--main">{
			value.map(e => <Card item={e}/>)
			}
		</ul>
	)

}
