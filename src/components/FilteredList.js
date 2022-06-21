import Card from "./Card";
export default function FilteredList({value}) {
	return (
		<ul className="card--main">{
			value.map(e => <Card item={e}/>)
			}
		</ul>
	)
}
