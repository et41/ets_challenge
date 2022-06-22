import React from "react";
import { useNavigate } from "react-router-dom";
import data from "./../eventData.json";
import "./styles/concerts.css"
import CardForCategory from "./CardForCategory";

export default function Theatres() {
    const navigate = useNavigate()
    const defaultImage = "https://c.stocksy.com/a/oxDF00/z9/3628600.jpg"

	    const goback = () => {
        navigate("/", {replace: true});
    }

    let concertList = data.filter((e) => {
            if(e.category === "tiyatro") {
                return true
            }
        })

    
    return (
        <div className="concerts--main" >
        <div className="concerts--header">

          <div onClick={goback} className="concert--button-back">Ana Sayfa</div>
          <h1>tiyatrolar</h1>

          </div>
          <CardForCategory select={concertList} />
      </div>
    )
}

