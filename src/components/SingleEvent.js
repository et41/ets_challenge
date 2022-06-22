import { useNavigate } from "react-router-dom";
import data from "./../eventData.json";
import "./styles/singleEvent.css"
import Map from "./Map"
import FacebookIcon from '@mui/icons-material/Facebook';


import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function SingleEvent({id}) {
    const singleData = data.filter(a => a.id === id)
    const price = data.filter(a => a.id === id)[0]["price"];
    const price_sorted = price.sort((a, b) => b -a )
    const price_category = price_sorted.length
    const image = singleData[0].images.huge;
    console.log("image", image)
    const {isLoaded} = useLoadScript({
        googleMapsApiKey:process.env.REACT_APP_API_KEY
    })

    

    //console.log("single data", singleData, price, price_sorted, price_category)
    const navigate = useNavigate()
    let clickHandler = () => {
        navigate("/", {replace:true})
        
    }

    let clickHandlerVenue = (e) => {
        console.log("addddrsssss", e)
        let selectedVenue = e.target.innerText.replace(/ /g,'').toLowerCase()
        navigate(`/${selectedVenue}`, {id:singleData.venue})
        
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
                <p style={{textDecoration:"underline",color:"red",textDecorationColor:"red", cursor:"pointer"}} onClick={clickHandlerVenue} className="singleEvent--venue">
                    {singleData[0].venue}
                </p>
            </div>
            <div className="singleEvent--price--map">

<div className="singleEvent--price">
                <ul>
                    {price_category > 0 ? 
                        price_sorted.map((price, i) => (
                            <div className="singleEvent--price-category">
                                <p>{i + 1}. Kategori Fiyatı</p>
                                <hr />
                                <li>{price} TL</li>
                            </div>
                        )) : <p>Etkinlik Ücretsizdir</p>
                    }
                </ul>

            </div>
            <img className="singleEvent--image" src={image} />
             


            </div>
<div className="singleEvent--map" >
                    {isLoaded && <Map id={id}/> }

            </div>


                             </div>
        </>
    )
}