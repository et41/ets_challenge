
import { useState } from "react";
import "./styles.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import Browse from "./components/Browse"
import List from "./components/List"
import Category from "./components/Category"


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
		<Category />

    </div>
  );
}

