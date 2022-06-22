import React from "react";
import { Link , useNavigate } from "react-router-dom";
import data from "./../eventData.json";
import "./styles/concerts.css"
import CardForCategory from "./CardForCategory";
import { dateConverter } from "../dateConverter";
import { rgbToHex } from "@mui/material";

export default function VenueList({id}) {
    const defaultImage = "https://c.stocksy.com/a/oxDF00/z9/3628600.jpg"
    let checkImage = (img) => {
		if(img) return true;
	}

    console.log("route", id)
    const venue = data.filter(e => e.id === id)[0].venue
    const allEvents = data.filter(e => e.venue === venue)
    return (
        <div >
        <ul >
        <h2 style={{textAlign:"center"}}>{venue} mekanındaki tüm etkinlikler</h2>
        {
        allEvents.map(item => (
        <li className="concerts--single" href="/" key={item.id}>
            <Link className="concerts--single" to={`/${item.id}`}>
            <img className="concerts--single-image" src={checkImage(item.images.huge) ? item.images.huge : defaultImage} />
            {item.title}
            <p>{dateConverter(item.date_time_local)[0]}</p>
            <p>{dateConverter(item.date_time_local)[1]}</p>
            <p>{item.venue}</p>
            <p>{item.price.sort((a,b) => a - b )[0]} TL</p>
            </Link>
        </li>
        ))}
    </ul>
    </div>
    )
   
}