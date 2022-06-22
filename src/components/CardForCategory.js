import React from "react";
import { useNavigate } from "react-router-dom";
import data from "./../eventData.json";
import { dateConverter } from "../dateConverter";
import "./styles/concerts.css"

export default function CardForCategory({select}) {
    const defaultImage = "https://c.stocksy.com/a/oxDF00/z9/3628600.jpg"
    let checkImage = (img) => {
		if(img) return true;
	}



    return (
            <ul>
                {
                select.map(item => (
                <li className="concerts--single" href="/" key={item.id}>

                    <img className="concerts--single-image" src={checkImage(item.images.huge) ? item.images.huge : defaultImage} />
                    {item.title}
                    <p>{dateConverter(item.date_time_local)[0]}</p>
                    <p>{dateConverter(item.date_time_local)[1]}</p>
                    <p>{item.venue}</p>
                    <p>{item.price.sort((a,b) => a - b )[0]} TL</p>
                </li>))}
            </ul>
    )
}