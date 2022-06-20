import {useState} from "react";
import CityOption from "./CityOption"
import data from "./../eventData.json";
import "./styles/calendar.css";
import {postalCodetoCity, uniqueCities} from "./../city_list.js"


export default function Browse (  ) {
	const [calendarButton, setCalendarButton] = useState(false);
	const [locationButton, setLocationButton] = useState(false);
	const [selectedState, setSelectedCountry] = useState("");
	let clickHandlerCalender = (event) => {
		setCalendarButton(prev => !prev);
	}

	let clickHandlerLocation = (event) => {
		setLocationButton(prev => !prev);
	}


	let handleSubmit = (event) => {
		event.preventDefault();
		setCalendarButton(prev => !prev);
	}

	return ( 
<div className="browse">
        <div className="browse--buttons">

			<div className="location">
			<form onSubmit={handleSubmit} className={"location--form-active" }> 
					<input className="location--input" type="text" />
					<input className="location--submit" type="submit" />
						
				</form>

							<div className={locationButton ? "location--dropdown-active":"location--dropdown"}>
			<ul>
				{
					uniqueCities().map(e=><li key={e}>{postalCodetoCity(e)}</li>)
				}
		    </ul>
				</div>
			</div>
			<div className="calendar" >
          				<form onSubmit={handleSubmit} className={"calendar--form-active" }> 
					<input className="calendar--date" type="date" />
					<input className="calendar--submit" type="submit" />
						
				</form>
			</div>
        </div>
      </div>

	)
}
