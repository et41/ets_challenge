import {useState} from "react";
import data from "./../eventData.json";
import "./styles/calendar.css";
import {postalCodetoCity, uniqueCities, uniqueVenues} from "./../city_list.js"
import FilteredList from "./FilteredList"
import FilteredListByState from "./FilteredListByState"
import FilteredListByCategory from "./FilteredListByState"
import FilteredListByVenue from "./FilteredListByVenue";

import Slider from "./Slider";


export default function Browse (  ) {
	const [calendarButton, setCalendarButton] = useState(false);
	const [locationButton, setLocationButton] = useState(false);
	const [categoryButton, setCategoryButton] = useState(false);
	const [venueButton, setVenueButton] = useState(false)
	const [selectedState, setSelectedState] = useState("Şehir Seçin");
	const [eventDate, setEventDate] = useState();
	const [filterOption, setFilterOption] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("Kategoriye Göre");
	const [selectedVenue, setSelectedVenue] = useState("Mekan Seçin")
	const categories = ["konser", "spor", "tiyatro", "komedi"];
	const venues = uniqueVenues();

	let setOtherButtonsInactive = () =>  {
		if(filterOption === "state") {
			setCalendarButton(false)
			setCategoryButton(false)
			setVenueButton(false)
		} else if (filterOption === "date") {
			setCategoryButton(false)
			setVenueButton(false)
			setLocationButton(false)
		} else if (filterOption === "category") {
			setCalendarButton(false)
			setLocationButton(false)
			setVenueButton(false)
		} else if (filterOption === "venue") {
			setCalendarButton(false)
			setLocationButton(false)
			setCalendarButton(false)
		}
	}
	let clickHandlerCalender = (event) => {
	//	setCalendarButton(prev => !prev);
	}

	let clickHandlerLocation = (event) => {
		setLocationButton(prev => !prev);

		setFilterOption(prev => "state");
	}

	let handleSubmitCalendar = (event) => {
		event.preventDefault();
		setEventDate(prev => event.target[0].value)
		setCalendarButton(prev => !prev);
	}

	let hoverHandlerLocation = (event) => {
		setSelectedState(prev => event.target.outerText)
		setLocationButton(prev => !prev)
	}

	let changeHandlerCalendar = (event) => {
		setFilterOption(prev => "date")
		setEventDate(prev => event.target.value)
	}

	let clickHandlerCategory = () => {
		setCategoryButton(prev => !prev)

		setFilterOption(prev => "category")
		
	}

	let hoverHandlerCategory = (event) => {
		setSelectedCategory(prev => event.target.outerText)
		setCategoryButton(prev => !prev)
	}

	let clickHandlerVenue = () => {
		setFilterOption(prev => "venue")

		setVenueButton(prev => !prev)
		
	}

	let hoverHandlerVenue = (event) => {
		setSelectedVenue(prev => event.target.outerText)
		setVenueButton(prev => !prev)
	}


	let listByDate = data.filter(e => {
			if(e.date_time_local.split("T")[0] === eventDate) {
				return true
			} else {
				return false
			}
		})
	console.log("locationButton, calendarButton ", locationButton, calendarButton, filterOption)
	
	let listByState = data.filter(e => {
		if(postalCodetoCity(e.state) === selectedState) {
			return true
		} else {
			return false
		}
	})

	let listByCategory = data.filter(e => {
		if (e.category === selectedCategory) {
			return true
		} else {
			return false
		}
	})

	let listByVenue = data.filter(e => {
		if(e.venue === selectedVenue) {
			return true
		} else {
			return false
		}
	})

	return ( 
	<div className="browse">
		<div className="browse--buttons">

			<div className="location">
			<form  className={"location--form-active" }> 
					<input onClick={clickHandlerLocation}  value={selectedState} className="location--input" type="text" />
						
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
          				<form onSubmit={handleSubmitCalendar} className={"calendar--form-active" }> 
					<input onChange={changeHandlerCalendar} onClick={clickHandlerCalender} value={eventDate} className="calendar--date" type="date" />
					{/*<input className="calendar--submit" type="submit" />
*/}
				</form>
			</div>
		<div className="category">
			<form  className={"location--form-active" }> 
					<input onClick={clickHandlerCategory}  value={selectedCategory} className="location--input" type="text" />
						
				</form>

				<div onMouseDown={hoverHandlerCategory} className={categoryButton ? "location--dropdown-active":"location--dropdown"}>
			<ul>
				{
					categories.map(e=><li key={e}>{e}</li>)
				}
		    </ul>
				</div>
			</div>
		<div className="venue">
			<form  className={"location--form-active" }> 
					<input onClick={clickHandlerVenue}  value={selectedVenue} className="location--input" type="text" />
						
				</form>

				<div onMouseDown={hoverHandlerVenue} className={venueButton ? "location--dropdown-active":"location--dropdown"}>
			<ul>
				{
					venues.map(e=><li key={e}>{e}</li>)
				}
		    </ul>
				</div>
			</div>



		</div>
		{filterOption === "date" && <FilteredList value={listByDate} />}
		{filterOption === "state" && <FilteredListByState value={listByState} />}
		{filterOption === "category" && <FilteredListByCategory value={listByCategory} />}
		{filterOption === "venue" && <FilteredListByVenue value={listByVenue} />}
		<h2>Önemli Etkinlikler</h2>
		<Slider />

	</div>

	)
}
