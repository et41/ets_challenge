import {useEffect, useRef, useState} from "react"
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "./styles/singleEvent.css"
import data from "./../eventData.json"


export default function Map ({id}) {

    let lat_lon = data.filter(e => e.id === id)[0].location


    return (
        <GoogleMap zoom={13} center={{lat:lat_lon.lat, lng: lat_lon.lon}} >
            <Marker key={id} id={id} position={{lat:lat_lon.lat, lng:lat_lon.lon}}/>
        </GoogleMap>
    )
}