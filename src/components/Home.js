
import { useState } from "react";
import "./../styles.css";
import Navbar from "./Navbar";
import Header from "./Header"
import SearchBar from "./SearchBar"
import Browse from "./Browse"
import Category from "./Category"


export default function App() {

	const [searchText, setSearchText] = useState("");
	
	let changeHandler = (e) => {
		let searchValue = e.target.value;
		console.log("input value", searchValue)
		setSearchText(prev => searchValue);
	}


  return (
    <div>
		<div className="hero">
			<Navbar />
			<Header />
			<SearchBar value={searchText} onChange={changeHandler} />
				</div>
				<Browse	/>

		<Category/>
	

		</div>
  );
}

