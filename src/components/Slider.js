import React, { useState } from "react";
import "./styles/slider.css";
import data from "./../eventData.json";
import BtnSlider from "./BtnSlider";
export default function Slider() {
    const defaultImage = "https://c.stocksy.com/a/oxDF00/z9/3628600.jpg"
    let imageList = [];
    let imageEventList = []
    const [slideIndex, setSlideIndex] = useState(1)


    for (let i  = 7; i < 12; i++) {
        imageList.push(data[i].images.huge)
        imageEventList.push(data[i])
    }

    const nextSlide = () => {
        if(slideIndex !== imageList.length) {
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === imageList.length) {
            setSlideIndex(1)
        }
    }
    const prevSlide = () => {
        if(slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1) {
            setSlideIndex(imageList.length)
        }

    }
    const moveDot = index => {
        setSlideIndex(index)
    }
    console.log("imagelist", imageList) 
    return (
        <div className="slider--main">
            {imageEventList.map((obj, index) => {
                return (
                    <div className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
                    <h2>{obj.title}</h2>
                    <img
                    src={obj.images.huge}/>
                    </div>
                )
            })}
		<BtnSlider moveSlide={nextSlide} direction={"next"}/>

		<BtnSlider moveSlide={prevSlide} direction={"back"}/>

        <div className="slider--dots" >
            {Array.from({length:imageList.length}).map((item, index) => {
                <div>
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                </div>
            })

            }


        </div>
        </div>
    )
}