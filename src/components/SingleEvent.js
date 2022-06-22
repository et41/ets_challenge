import { useNavigate } from "react-router-dom";
import data from "./../eventData.json";
import "./styles/singleEvent.css"
import Map from "./Map"

import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function SingleEvent({id}) {
    const singleData = data.filter(a => a.id === id)
    const price = data.filter(a => a.id === id)[0]["price"];
    const price_sorted = price.sort((a, b) => b -a )
    const price_category = price_sorted.length
    const {isLoaded} = useLoadScript({
        googleMapsApiKey:"AIzaSyC7xWTAgF-M6LkwS9XPgbO70ihlQ9n6EZg"
    })

    

    //console.log("single data", singleData, price, price_sorted, price_category)
    const navigate = useNavigate()
    let clickHandler = () => {
        navigate("/", {replace:true})
        
    }
    return (
        <>
        <div className="singleEvent--main">
            <div className="singleEvent--header">
            <div className="singleEvent--button" onClick={clickHandler}>Ana Sayfa</div>
            <h1>{singleData[0].title}</h1>
            </div>
            <div className="singleEvent--ul">
                <p className="singleEvent--performer">
                    {singleData[0].performers_name}
                </p>

                <p className="singleEvent--address">
                    {singleData[0].address}
                </p>
                <p className="singleEvent--state">
                    {singleData[0].state}
                </p>
                <p className="singleEvent--venue">
                    {singleData[0].venue}
                </p>
            </div>
            <div className="singleEvent--price--map">

<div className="singleEvent--price">
                <ul>
                    {price_category > 0 ? 
                        price_sorted.map((price, i) => (
                            <div className="singleEvent--price-categoty">
                                <p>{i + 1}. Kategori Fiyatı</p>
                                <hr />
                                <li>{price} TL</li>
                            </div>
                        )) : <p>Etkinlik Ücretsizdir</p>
                    }
                </ul>

            </div>
   <div className="singleEvent--map" >
                    {isLoaded && <Map id={id}/> }

            </div>

 


            </div>
                             </div>
        </>
    )
}