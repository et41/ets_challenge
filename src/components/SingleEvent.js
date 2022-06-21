import data from "./../eventData.json";
import "./styles/singleEvent.css"


export default function SingleEvent({id}) {
    const singleData = data.filter(a => a.id === id)
    console.log("single data", singleData)
    return (
        <div className="singleEvent--main">
            <h1>{singleData[0].title}</h1>
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
            <div className="singleEvent--map" >


            </div>
        </div>
    )
}