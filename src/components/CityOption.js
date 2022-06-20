import data from "./../eventData.json"
import {postalCodetoCity, uniqueCities} from "./../city_list.js"

export default function CityOption() {
	console.log("UNIQUE", uniqueCities())
	return (
		<div className="city--main">
		<button className="button-city" />
		<div className="dropdown-cityoption">
			<ul>
				{
					uniqueCities().map(e=><li key={e}>{postalCodetoCity(e)}</li>)
				}
		    </ul>
		</div>
		</div>
	)
}
