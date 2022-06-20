import {useState} from "react";
import data from "./../eventData.json";
import "./styles/calendar.css";

export default function Browse (  ) {
	const [calendarButton, setCalendarButton] = useState(false);
	const [locationButton, setLocationButton] = useState(false);
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
			<button className={locationButton ? "button-disable":"button-active"} onClick={clickHandlerLocation}>Şehir Değiştir</button>
          		<button className={calendarButton ? "button-disable":"button-active"} onClick={clickHandlerCalender}>Tarihe Göre Ara</button>
			<form onSubmit={handleSubmit} className={calendarButton ? "calendar--form-active": "calendar--form" }> 
					<input className="calendar--date" type="date" />
					<input className="calendar--submit" type="submit" />
						
				</form>
        </div>
      </div>

	)
}
