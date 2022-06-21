import React from "react";
import { useNavigate } from "react-router-dom";
import data from "./../eventData.json";
import "./styles/concerts.css"
import CardForCategory from "./CardForCategory";

export default function Concerts() {
    const navigate = useNavigate()
    const defaultImage = "https://c.stocksy.com/a/oxDF00/z9/3628600.jpg"

	    const goback = () => {
        navigate("/", {replace: true});
    }

    let concertList = data.filter((e) => {
            if(e.category === "spor") {
                return true
            }
        })

    
        console.log("concert list", concertList)
    return (
        <div className="concerts--main" >
                <h1>spor</h1>
                <button onClick={goback} className="concert--button-back">Ana Sayfa</button>
                <CardForCategory select={concertList} />
            </div>
    )
}

