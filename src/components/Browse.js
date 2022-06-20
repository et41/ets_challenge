import {useState} from "react";
import CityOption from "./CityOption"
import data from "./../eventData.json";
import "./styles/calendar.css";
import {postalCodetoCity, uniqueCities} from "./../city_list.js"
import FilteredList from "./FilteredList"
import FilteredListByState from "./FilteredListByState"

export default function Browse (  ) {
	const [calendarButton, setCalendarButton] = useState(false);
	const [locationButton, setLocationButton] = useState(false);
	const [selectedState, setSelectedState] = useState("default");
	const [eventDate, setEventDate] = useState();

	let clickHandlerCalender = (event) => {
		setCalendarButton(prev => !prev);
	}

	let clickHandlerLocation = (event) => {
		setLocationButton(prev => !prev);
		console.log("eventtarget", event.target)
	}


	let handleSubmit = (event) => {
		event.preventDefault();
		setCalendarButton(prev => !prev);
	}
	let hoverHandlerLocation = (event) => {
		setSelectedState(prev => event.target.outerText)
		setLocationButton(prev => !prev)
	}

	let changeHandlerCalendar = (event) => {
		setEventDate(prev => event.target.value)
	}

	let listByDate = data.filter(e => {
			if(e.date_time_local.split("T")[0] === eventDate) {
				return true
			} else {
				return false
			}
		})

	let listByState = data.filter(e => {
		if(postalCodetoCity(e.state) === selectedState) {
			return true
		} else {
			return false
		}
	})
	return ( 
	<div className="browse">
        <div className="browse--buttons">

			<div className="location">
			<form onSubmit={handleSubmit} className={"location--form-active" }> 
					<input onClick={clickHandlerLocation}  value={selectedState} className="location--input" type="text" />
					<input className="location--submit" type="submit" />
						
				</form>

				<div onMouseDown={hoverHandlerLocation} className={locationButton ? "location--dropdown-active":"location--dropdown"}>
			<ul>
				{
					uniqueCities().map(e=><li key={e}>{postalCodetoCity(e)}</li>)
				}
		    </ul>
				</div>
			</div>
			<div className="calendar" >
          				<form onSubmit={handleSubmit} className={"calendar--form-active" }> 
					<input onChange={changeHandlerCalendar} value={eventDate} className="calendar--date" type="date" />
					<input className="calendar--submit" type="submit" />
						
				</form>
			</div>
        </div>
		<FilteredList value={listByDate} />
		<FilteredListByState value={listByState} />
      </div>

	)
}
