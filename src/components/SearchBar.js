
export default function SearchBar({value, onChange}) { 
//	const [searchText, setSearchText] = useState("");
	

	console.log("search val", value)
	return (
		<div className="searchbar--main">
		   <span class="search--icon">🔎︎</span>
		   <input 
			   class="searchbar"
			   type="search" name="Search"
			   value={value}
			   placeholder="İstediğiniz etkinliği arayın..." 
			   onChange={onChange}
			/>

		</div>
		  

	)
}
