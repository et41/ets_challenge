
import { useState } from "react";
import { Routes, Route, Switch, Link} from "react-router-dom"
import "./styles.css";
import Home from  "./components/Home"
import Concerts from "./components/Concerts";
import Sports from "./components/Sports"
import Theatres from "./components/Theatres";
import Comedies from "./components/Comedies";
import data from "./eventData.json";
import SingleEvent from "./components/SingleEvent";


export default function App() {

	const [searchText, setSearchText] = useState("");
	
	let changeHandler = (e) => {
		let searchValue = e.target.value;
		console.log("input value", searchValue)
		setSearchText(prev => searchValue);
	}
	const idList = data.map(e => <Route path={`/${e.id}`} element={<SingleEvent />} />)
	return (
		<Routes>

				<Route path="/" element={<Home />} />
				<Route path="/konser" element={<Concerts />}/>
				<Route path="/spor" element={<Sports />} />
				<Route path="/tiyatro" element={<Theatres />} />
				<Route path="/komedi" element={<Comedies />} />
				{idList}
		</Routes>
	)
}