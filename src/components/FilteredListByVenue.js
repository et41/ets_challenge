import Card from "./Card"
export default function FilteredListByVenue({value}) {
	return (
		<ul className="card--main">{
			value.map(e => <Card item={e}/>)
			}
		</ul>
	)

}
