import "./styles/dropdown.css";
import {useState} from "react";
import List from "./List";
import Category from "./Category"

export default function SearchBar({value, onChange}) { 

	return (
		<div className={value.length > 0 ? "searchbar--main--listing" : "searchbar--main"}>
		   <span className="search--icon">🔎︎</span>
		   <input 
			   className="searchbar"
			   type="search" name="Search"
			   value={value}
			   placeholder="İstediğiniz etkinliği arayın..." 
			   onChange={onChange}
 			/>
			<div className={
						value.length > 0 ? 
						"dropdown--main--active" 
						: "dropdown--main"}>

				<List input={value} />
			</div>
		</div>  
	)
}
