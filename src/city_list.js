import data from "./eventData.json";
import states from "./usa_states.json"

export function postalCodetoCity(code) {
	return states[code]	
}

export function uniqueCities() {
	const cityList = data.map(e => e.state)
	return cityList.filter((v, i, a) => {
			return a.indexOf(v) === i && postalCodetoCity(v)
	})
}

