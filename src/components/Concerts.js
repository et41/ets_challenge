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
            if(e.category === "konser") {
                return true
            }
        })

    
        console.log("concert list", concertList)
    return (
        <div className="concerts--main" >
                <h1>konserler</h1>
                <button onClick={goback} className="concert--button-back">Ana Sayfa</button>
                <CardForCategory select={concertList} />
            </div>
    )
}

//concertList.map(e => <li key={e.id}>{e.title}</li>)
/*
<ul>
                {
                concertList.map(item => (
                <li className="concerts--single" href="/" key={item.id}>

                    <img className="concerts--single-image" src={checkImage(item.images.huge) ? item.images.huge : defaultImage} />
                    {item.title}
                    <p>{dateConverter(item.date_time_local)[0]}</p>
                    <p>{dateConverter(item.date_time_local)[1]}</p>
                    <p>{item.venue}</p>
                    <p>"cost"</p>
                </li>))}
            </ul>


*/