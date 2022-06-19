import "./styles.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import Browse from "./components/Browse"


export default function App() {
  return (
    <div>
		<div className="hero">
			<Navbar />
			<Header />
			<SearchBar />
		</div>
		<Browse />
    </div>
  );
}

