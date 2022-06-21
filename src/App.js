
import { useState } from "react";
import { Routes, Route, Switch, Link} from "react-router-dom"
import "./styles.css";
import Home from  "./components/Home"
import Concerts from "./components/Concerts";

export default function App() {

	const [searchText, setSearchText] = useState("");
	
	let changeHandler = (e) => {
		let searchValue = e.target.value;
		console.log("input value", searchValue)
		setSearchText(prev => searchValue);
	}
	return (
		<Routes>

				<Route path="/" element={<Home />} />
				<Route path="/concerts" element={<Concerts />}/>
		</Routes>
	)
}
/*
  return (
    <div>
		<div className="hero">
			<Navbar />
			<Header />
			<SearchBar value={searchText} onChange={changeHandler} />
				</div>
		<Browse	/>
		<Category />

    </div>
  );
}*/

