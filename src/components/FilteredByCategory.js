import Card from "./Card";

export default function FilteredByCategory({value}) {
	return (
		<ul className="card--main" >{
			value.map(e => <Card item={e}>)
			}
		</ul>
	)

}
