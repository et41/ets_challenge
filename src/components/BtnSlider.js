import React from "react";
import "./styles/slider.css";
import leftArrow from "./../icons/left-arrow-svgrepo-com.svg";
import rightArrow from "./../icons/right-arrow-next-svgrepo-com.svg";

export default function BtnSlider({direction, moveSlide}) {
    return (
        <button onClick={moveSlide} className={direction === "next" ? "btn-slide next" : "btn-slide prev" } >
            <img src={direction === "next" ? rightArrow : leftArrow} />
        </button>
    )
}