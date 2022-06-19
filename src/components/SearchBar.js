import "./styles/dropdown.css";
import {useState} from "react";

export default function SearchBar({value, onChange}) { 
	/*const [isActive, setIsActive] = useState(false);
	let clickHandler = () => {
		setIsActive(prev => !prev);
	}
	console.log("isActive", isActive)*/
	return (
		<div className={value.length > 0 ? "searchbar--main--listing" : "searchbar--main"}>
		   <span class="search--icon">🔎︎</span>
		   <input 
			   class="searchbar"
			   type="search" name="Search"
			   value={value}
			   placeholder="İstediğiniz etkinliği arayın..." 
			   onChange={onChange}
 			/>
			<div className={value.length > 0 ? "dropdown--main--active" : "dropdown--main"}>
		</div>

		</div>
		  

	)
}
