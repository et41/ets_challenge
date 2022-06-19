import {useState} from "react";
import List from "./List"
import data from "./../eventData.json";
import "./styles/category.css";

let categories = ["konser", "spor", "tiyatro", "komedi"]
export default function Category({value}) {
	console.log(value)
	 
	return (
		<div className="category--main">		
			{categories.map(data_item=> 
			<div>
					<h2>{data_item}</h2>
			</div>
			)}
		</div>
	)
}
